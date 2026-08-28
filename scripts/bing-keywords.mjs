// Bing Webmaster Tools — keyword research database + targeting report.
//
// Builds and maintains a durable keyword database (reports/bing/keywords.json)
// from Bing WMT "Keyword Research" CSV exports, and optionally from the Bing
// Webmaster API (your own query stats + related-keyword expansion). Each
// keyword is classified by intent, assigned a cluster, mapped to the site page
// that should own it (or flagged as a content gap), and scored so the report
// reads as a build-next worklist rather than a raw dump.
//
// Intent model (this site is a patient-first knowledge hub, not a clinic):
//   informational  — drug classes, "list", "causes", mechanisms → core target
//   local-care     — "near me", clinic, doctor, specialist → /find-help owns it
//   head           — "pain", "pain relief" → hub/home; win via the long tail
//
// Zero dependencies — plain fetch + node:fs (Node 18+).
//
// ── Inputs ───────────────────────────────────────────────────────────────────
//   CSV exports: pass paths as args, or drop files matching KeywordStats*.csv
//   into reports/bing/inbox/ (checked automatically). Expected columns:
//   "Keyword","Trends","Impressions" — the Bing WMT Keyword Research export.
//
//   Live API (optional): set BING_WMT_APIKEY (Bing WMT → Settings → API access)
//   and pass --api. Pulls GetQueryStats (your actual Bing queries) and
//   GetRelatedKeywords seeded from the top database terms.
//
// Run:  node scripts/bing-keywords.mjs [file.csv ...] [--api] [--site=https://painmedicine.com/]
//       npm run bing

import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ── Config ───────────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
const flags = Object.fromEntries(
  args.filter((a) => a.startsWith('--')).map((a) => {
    const [k, v] = a.replace(/^--/, '').split('=')
    return [k, v ?? true]
  }),
)
const csvArgs = args.filter((a) => !a.startsWith('--'))

const SITE_URL = flags.site || process.env.BING_WMT_SITE || 'https://painmedicine.com/'
const API_KEY = process.env.BING_WMT_APIKEY || ''
const API_BASE = 'https://ssl.bing.com/webmaster/api.svc/json'

const OUT_DIR = resolve(__dirname, '../reports/bing')
const INBOX_DIR = resolve(OUT_DIR, 'inbox')
const DB_PATH = resolve(OUT_DIR, 'keywords.json')

// ── Intent + cluster rules ───────────────────────────────────────────────────
// First match wins. `target` is the route that should own the keyword;
// null target = content gap (the report's build-next list).
const RULES = [
  {
    cluster: 'local-care',
    intent: 'local',
    fit: 0.6,
    target: '/find-help',
    test: (k) => /\b(near me|clinic|clinics|doctor|doctors|specialist|specialists)\b/.test(k),
  },
  {
    cluster: 'pain-management',
    intent: 'informational',
    fit: 0.8,
    target: '/what-is-pain-medicine',
    test: (k) => /\bpain management\b/.test(k),
  },
  {
    cluster: 'anti-inflammatory',
    intent: 'informational',
    fit: 1,
    target: null, // gap: NSAIDs / anti-inflammatory explainer in Treatments
    test: (k) => /anti[- ]?inflammator/.test(k),
  },
  {
    cluster: 'medications',
    intent: 'informational',
    fit: 1,
    target: null, // gap: the pain-medications guide/list in Treatments
    test: (k) =>
      /\b(medication|medications|meds|medicine|reliever|relievers|killer|killers|painkiller|painkillers)\b/.test(k),
  },
  {
    cluster: 'conditions',
    intent: 'informational',
    fit: 1,
    target: null, // gap: condition pages (back pain first) in Conditions hub
    test: (k) => /\b(back|neck|nerve|joint|knee|sciatica|arthritis|migraine|headache)\b|causes|symptom/.test(k),
  },
  {
    cluster: 'head-term',
    intent: 'head',
    fit: 0.3,
    target: '/',
    test: (k) => /^pain( relief)?$/.test(k),
  },
]

function classify(keyword) {
  const k = keyword.toLowerCase()
  for (const r of RULES) if (r.test(k)) return r
  return { cluster: 'uncategorized', intent: 'informational', fit: 0.9, target: null }
}

// Momentum: mean of the last third of the trend series vs the first third.
// >1 rising, <1 fading. Series shorter than 4 points → null (not enough signal).
function momentum(trend) {
  if (!Array.isArray(trend) || trend.length < 4) return null
  const third = Math.max(1, Math.floor(trend.length / 3))
  const mean = (a) => a.reduce((s, n) => s + n, 0) / a.length
  const first = mean(trend.slice(0, third))
  const last = mean(trend.slice(-third))
  return first > 0 ? last / first : null
}

// ── CSV ingest ───────────────────────────────────────────────────────────────
function parseCsvLine(line) {
  const fields = []
  let cur = ''
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (inQ) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ }
      else if (c === '"') inQ = false
      else cur += c
    } else if (c === '"') inQ = true
    else if (c === ',') { fields.push(cur); cur = '' }
    else cur += c
  }
  fields.push(cur)
  return fields
}

async function ingestCsv(path) {
  const text = await readFile(path, 'utf8')
  const lines = text.split(/\r?\n/).filter((l) => l.trim())
  const header = parseCsvLine(lines[0]).map((h) => h.toLowerCase())
  const iKw = header.findIndex((h) => h.includes('keyword') || h.includes('query'))
  const iTrend = header.findIndex((h) => h.includes('trend'))
  const iImpr = header.findIndex((h) => h.includes('impression'))
  if (iKw === -1 || iImpr === -1) {
    console.warn(`⚠ ${path}: unrecognized header (${lines[0]}) — skipped`)
    return []
  }
  return lines.slice(1).map((line) => {
    const f = parseCsvLine(line)
    let trend = null
    if (iTrend !== -1 && f[iTrend]) {
      try { trend = JSON.parse(f[iTrend]) } catch { /* leave null */ }
    }
    return {
      keyword: (f[iKw] || '').trim().toLowerCase(),
      impressions: Number(f[iImpr]) || 0,
      trend,
      source: 'wmt-export',
    }
  }).filter((r) => r.keyword)
}

// ── Bing Webmaster API (optional) ────────────────────────────────────────────
async function bingApi(method, params) {
  const url = new URL(`${API_BASE}/${method}`)
  url.searchParams.set('apikey', API_KEY)
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${method} → HTTP ${res.status}`)
  const json = await res.json()
  return json.d ?? json
}

async function pullApi(db) {
  const rows = []
  // 1. Your actual Bing queries — impressions/clicks/position for this site.
  try {
    const stats = await bingApi('GetQueryStats', { siteUrl: SITE_URL })
    for (const s of stats) {
      rows.push({
        keyword: (s.Query || '').toLowerCase(),
        impressions: s.Impressions || 0,
        clicks: s.Clicks || 0,
        position: s.AvgImpressionPosition ?? null,
        source: 'api-querystats',
      })
    }
    console.log(`✓ API GetQueryStats: ${stats.length} rows`)
  } catch (e) {
    console.warn(`⚠ GetQueryStats failed (${e.message}) — continuing without it`)
  }
  // 2. Related-keyword expansion seeded from the top informational terms.
  const seeds = Object.values(db)
    .filter((r) => r.intent === 'informational')
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 8)
    .map((r) => r.keyword)
  const end = new Date()
  const start = new Date(end.getTime() - 90 * 86400_000)
  const ymd = (d) => d.toISOString().slice(0, 10)
  for (const q of seeds) {
    try {
      const rel = await bingApi('GetRelatedKeywords', {
        q, country: 'us', language: 'en-US', startDate: ymd(start), endDate: ymd(end),
      })
      for (const r of rel) {
        rows.push({
          keyword: (r.Query || r.Keyword || '').toLowerCase(),
          impressions: r.Impressions || 0,
          source: 'api-related',
        })
      }
    } catch (e) {
      console.warn(`⚠ GetRelatedKeywords("${q}") failed (${e.message})`)
    }
  }
  return rows.filter((r) => r.keyword)
}

// ── Database merge ───────────────────────────────────────────────────────────
async function loadDb() {
  try { return JSON.parse(await readFile(DB_PATH, 'utf8')) } catch { return {} }
}

function upsert(db, row, today) {
  const prev = db[row.keyword]
  const rule = classify(row.keyword)
  const entry = prev || {
    keyword: row.keyword,
    firstSeen: today,
    sources: [],
  }
  entry.lastSeen = today
  entry.impressions = Math.max(entry.impressions || 0, row.impressions)
  if (row.trend) entry.trend = row.trend
  if (row.clicks != null) entry.clicks = row.clicks
  if (row.position != null) entry.position = row.position
  if (!entry.sources.includes(row.source)) entry.sources.push(row.source)
  entry.intent = rule.intent
  entry.cluster = rule.cluster
  entry.target = rule.target
  entry.momentum = momentum(entry.trend)
  // Priority: Bing demand × intent fit, with a momentum kicker for risers.
  const kick = entry.momentum && entry.momentum > 1.5 ? Math.min(entry.momentum, 3) : 1
  entry.priority = Math.round(entry.impressions * rule.fit * kick)
  db[row.keyword] = entry
}

// ── Report helpers ───────────────────────────────────────────────────────────
function mdTable(headers, rows) {
  if (!rows.length) return '_none_\n'
  const head = `| ${headers.join(' | ')} |`
  const sep = `| ${headers.map(() => '---').join(' | ')} |`
  const body = rows.map((r) => `| ${r.join(' | ')} |`).join('\n')
  return `${head}\n${sep}\n${body}\n`
}
const fmtMom = (m) => (m == null ? '—' : `${m >= 1 ? '+' : ''}${Math.round((m - 1) * 100)}%`)

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  await mkdir(INBOX_DIR, { recursive: true })
  const today = new Date().toISOString().slice(0, 10)

  // Collect CSV inputs: explicit args + anything sitting in the inbox.
  const inputs = [...csvArgs]
  for (const f of await readdir(INBOX_DIR)) {
    if (/\.csv$/i.test(f)) inputs.push(resolve(INBOX_DIR, f))
  }
  if (!inputs.length && !flags.api) {
    fail(
      'Nothing to ingest. Pass a Bing WMT keyword CSV as an argument,\n' +
        `  drop exports into ${INBOX_DIR},\n` +
        '  or set BING_WMT_APIKEY and pass --api.',
    )
  }

  const db = await loadDb()
  const before = Object.keys(db).length

  let rows = []
  for (const path of inputs) {
    const r = await ingestCsv(resolve(path))
    console.log(`✓ ${path}: ${r.length} keywords`)
    rows.push(...r)
  }
  if (flags.api) {
    if (!API_KEY) fail('--api passed but BING_WMT_APIKEY is not set (Bing WMT → Settings → API access).')
    // Seed classification off CSV rows first so related-keyword seeds exist.
    for (const row of rows) upsert(db, row, today)
    rows = await pullApi(db)
  }
  for (const row of rows) upsert(db, row, today)

  const all = Object.values(db).sort((a, b) => b.priority - a.priority)
  await writeFile(DB_PATH, JSON.stringify(db, null, 2), 'utf8')

  // ── Report sections ─────────────────────────────────────────────────────
  const gaps = all.filter((r) => !r.target && r.intent === 'informational')
  const covered = all.filter((r) => r.target)
  const rising = all.filter((r) => r.momentum && r.momentum > 1.5).sort((a, b) => b.momentum - a.momentum)

  const byCluster = {}
  for (const r of all) {
    ;(byCluster[r.cluster] ??= { n: 0, impressions: 0 }).n++
    byCluster[r.cluster].impressions += r.impressions
  }

  const mdPath = resolve(OUT_DIR, `targeting-${today}.md`)
  const md = `# Bing keyword targeting — painmedicine.com

**Database:** ${all.length} keywords (${all.length - before >= 0 ? `+${all.length - before}` : before} new this run) · updated ${today}
**Demand seen:** ${all.reduce((s, r) => s + r.impressions, 0).toLocaleString()} Bing impressions across all tracked terms

## 1. Content gaps — build these next
Informational demand with no page on the site that owns it, ranked by priority
(Bing impressions × intent fit × momentum kicker).

${mdTable(
  ['Keyword', 'Cluster', 'Bing impr.', 'Momentum', 'Priority'],
  gaps.slice(0, 30).map((r) => [r.keyword, r.cluster, r.impressions.toLocaleString(), fmtMom(r.momentum), r.priority.toLocaleString()]),
)}

## 2. Covered terms — pages that should be earning these
Demand already mapped to an existing route. If GSC/Bing shows the page not
ranking for its term, that's an on-page problem, not a content gap.

${mdTable(
  ['Keyword', 'Target page', 'Bing impr.', 'Momentum'],
  covered.slice(0, 30).map((r) => [r.keyword, r.target, r.impressions.toLocaleString(), fmtMom(r.momentum)]),
)}

## 3. Rising demand (momentum > +50%)
Recent third of the trend window vs the first third. Being early is cheap ranking.

${mdTable(
  ['Keyword', 'Momentum', 'Bing impr.', 'Target'],
  rising.slice(0, 20).map((r) => [r.keyword, fmtMom(r.momentum), r.impressions.toLocaleString(), r.target || '**gap**']),
)}

## 4. Demand by cluster

${mdTable(
  ['Cluster', '# keywords', 'Bing impressions'],
  Object.entries(byCluster)
    .sort((a, b) => b[1].impressions - a[1].impressions)
    .map(([k, v]) => [k, v.n, v.impressions.toLocaleString()]),
)}

---
Database: [\`keywords.json\`](./keywords.json) · re-run with new exports any time — the database accretes.
_Generated ${new Date().toISOString()}_
`
  await writeFile(mdPath, md, 'utf8')

  console.log(`\n✓ Database: ${DB_PATH} (${all.length} keywords)`)
  console.log(`✓ Report:   ${mdPath}`)
  console.log(`\nSummary: ${gaps.length} gaps · ${covered.length} covered · ${rising.length} rising\n`)
}

class BingError extends Error {}
function fail(msg) {
  throw new BingError(msg)
}

main().catch((e) => {
  console.error(`\n✗ ${e instanceof BingError ? e.message : e.stack || e.message}\n`)
  process.exitCode = 1
})
