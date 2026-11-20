import { test } from "node:test";
import assert from "node:assert/strict";
import {
  buildSearchIndex,
  prepare,
  search,
  type SearchEntry,
  type PreparedEntry,
} from "../src/lib/search";

/**
 * Tests for the browser-side search ranking in src/lib/search.ts. The ranking
 * is pure and easy to break silently, so these pin down the behaviour the
 * ranking comment promises: title beats summary beats body, exact title wins,
 * every query term must match, and the last term is a prefix.
 */

function entry(e: Partial<SearchEntry> & { title: string; href: string }): SearchEntry {
  return {
    section: "Conditions",
    summary: "",
    body: "",
    ...e,
  };
}

function rank(entries: SearchEntry[], query: string, limit = 8): PreparedEntry[] {
  return search(prepare(entries), query, limit);
}

test("empty or whitespace query returns nothing", () => {
  const prepared = prepare([entry({ title: "Sciatica", href: "/conditions/sciatica" })]);
  assert.deepEqual(search(prepared, ""), []);
  assert.deepEqual(search(prepared, "   "), []);
  assert.deepEqual(search(prepared, "!!!"), []);
});

test("an entry is dropped unless every query term matches somewhere", () => {
  const entries = [
    entry({ title: "Low back pain", href: "/conditions/low-back-pain", body: "lumbar spine" }),
  ];
  // Both terms present (title + body): matches.
  assert.equal(rank(entries, "back lumbar").length, 1);
  // "kidney" appears nowhere: the whole entry is excluded.
  assert.equal(rank(entries, "back kidney").length, 0);
});

test("a title match outranks a summary match, which outranks a body match", () => {
  const entries = [
    entry({ title: "Migraine", href: "/a", summary: "x", body: "x" }),
    entry({ title: "Headache help", href: "/b", summary: "migraine triggers", body: "x" }),
    entry({ title: "Other", href: "/c", summary: "x", body: "migraine mentioned once" }),
  ];
  const got = rank(entries, "migraine").map((e) => e.href);
  assert.deepEqual(got, ["/a", "/b", "/c"]);
});

test("an exact title match beats a title that merely starts with the query", () => {
  const entries = [
    entry({ title: "Neck pain and stiffness", href: "/long" }),
    entry({ title: "Neck pain", href: "/exact" }),
  ];
  const got = rank(entries, "neck pain").map((e) => e.href);
  assert.deepEqual(got, ["/exact", "/long"]);
});

test("aliases are ranked like the title, so everyday words find the page", () => {
  const entries = [
    entry({ title: "Low back pain", href: "/conditions/low-back-pain", aliases: "backache lumbar" }),
    entry({ title: "Something else", href: "/other", body: "backache" }),
  ];
  const got = rank(entries, "backache").map((e) => e.href);
  // Alias match (weighted like title) should sit above a body-only match.
  assert.equal(got[0], "/conditions/low-back-pain");
});

test("the last term is treated as a prefix so results update as you type", () => {
  const entries = [entry({ title: "Fibromyalgia", href: "/conditions/fibromyalgia" })];
  assert.equal(rank(entries, "fibro").length, 1);
  assert.equal(rank(entries, "fibromy").length, 1);
});

test("a short fragment only matches word starts, not the middle of a word", () => {
  // termScore: a term under 4 chars never matches inside a word.
  const entries = [entry({ title: "Arthritis", href: "/conditions/arthritis-pain" })];
  assert.equal(rank(entries, "thr").length, 0); // inside "arthritis", too short
  const long = [entry({ title: "Osteoarthritis", href: "/x" })];
  assert.equal(rank(long, "arthritis").length, 1); // 4+ chars may match inside a word
});

test("a full guide outranks a one-line glossary entry on an equal match", () => {
  const entries = [
    entry({ title: "Sciatica", href: "/glossary#sciatica", section: "Glossary" }),
    entry({ title: "Sciatica", href: "/conditions/sciatica", section: "Conditions" }),
  ];
  const got = rank(entries, "sciatica").map((e) => e.href);
  assert.equal(got[0], "/conditions/sciatica");
});

test("the limit caps how many results come back", () => {
  const entries = Array.from({ length: 12 }, (_, i) =>
    entry({ title: `Pain topic ${i}`, href: `/p/${i}`, body: "pain" }),
  );
  assert.equal(rank(entries, "pain", 5).length, 5);
});

test("ties break alphabetically by title", () => {
  const entries = [
    entry({ title: "Zoster pain", href: "/z", body: "nerve" }),
    entry({ title: "Ankle pain", href: "/a", body: "nerve" }),
  ];
  const got = rank(entries, "nerve").map((e) => e.title);
  assert.deepEqual(got, ["Ankle pain", "Zoster pain"]);
});

test("the real site index builds and is searchable end to end", () => {
  const index = prepare(buildSearchIndex());
  assert.ok(index.length > 20, "expected the real index to hold many entries");
  const results = search(index, "sciatica");
  assert.ok(results.length > 0, "a core condition should be findable");
  assert.ok(
    results.some((r) => r.href === "/conditions/sciatica"),
    "the sciatica guide should appear for its own name",
  );
});
