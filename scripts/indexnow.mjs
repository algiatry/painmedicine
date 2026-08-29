// IndexNow — instant URL submission to Bing (and other IndexNow engines).
//
// Submits URLs to api.indexnow.org so new/updated pages are crawled within
// hours instead of whenever the sitemap is next polled. Bing honors IndexNow
// directly; the protocol fans out to other participating engines.
//
// The site's key lives at public/<key>.txt (served from the site root, which
// is how IndexNow verifies ownership) — keep the file and KEY below in sync.
//
// Usage:
//   node scripts/indexnow.mjs                 # submit every URL in the live sitemap
//   node scripts/indexnow.mjs /conditions/crps /treatments/kratom
//   npm run indexnow
//
// Run after each deploy that adds or meaningfully updates pages.

const HOST = "painmedicine.com";
const KEY = "9a8e68c9c778f5169f046e14e870f5f9";
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function sitemapUrls() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((a) => (a.startsWith("http") ? a : `https://${HOST}${a}`))
    : await sitemapUrls();

  if (!urlList.length) throw new Error("no URLs to submit");
  console.log(`Submitting ${urlList.length} URLs to IndexNow for ${HOST}…`);

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList,
    }),
  });

  // 200 = submitted; 202 = accepted, key validation pending. Both are success.
  if (res.status === 200 || res.status === 202) {
    console.log(`✓ IndexNow accepted (HTTP ${res.status}) — ${urlList.length} URLs`);
  } else {
    const body = await res.text();
    throw new Error(`IndexNow rejected: HTTP ${res.status} ${body.slice(0, 200)}`);
  }
}

main().catch((e) => {
  console.error(`✗ ${e.message}`);
  process.exitCode = 1;
});
