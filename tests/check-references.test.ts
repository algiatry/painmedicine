import { test } from "node:test";
import assert from "node:assert/strict";
import { words, looksLike } from "../scripts/check-references";

/**
 * Tests for the citation title matcher in scripts/check-references.ts. The
 * monthly reference check flags a MISMATCH when an NCBI record does not look
 * like the paper we cite; looksLike() is what makes that call, so these pin
 * down when it says yes and when it says no.
 */

test("words() lowercases, strips accents and tags, and drops short tokens", () => {
  assert.deepEqual(words("Opioid Therapy"), ["opioid", "therapy"]);
  assert.deepEqual(words("Évoké"), ["evoke"]);
  assert.deepEqual(words("a an the of to"), []); // all under 4 chars
  assert.deepEqual(words("Pain <i>and</i> relief"), ["pain", "relief"]);
});

test("a matching first-author surname alone is enough", () => {
  // Title shares no words with the citation, but the surname does.
  assert.equal(
    looksLike("Dworkin on neuropathic pain scales", "A completely different heading", "Dworkin RH"),
    true,
  );
});

test("the surname must be a whole token, not a substring", () => {
  // "wink" is inside "Dworkin" but is not the surname token.
  assert.equal(looksLike("a wink of sleep study", "Unrelated record title here", "Dworkin RH"), false);
});

test("sharing at least half the record's title words is enough", () => {
  assert.equal(
    looksLike(
      "Gabapentin for chronic neuropathic pain in adults",
      "Gabapentin for chronic neuropathic pain",
      "Wiffen PJ",
    ),
    true,
  );
});

test("too little title overlap and no surname is a mismatch", () => {
  assert.equal(
    looksLike(
      "Acupuncture for migraine prevention",
      "Spinal cord stimulation for failed back surgery syndrome",
      "Nguyen T",
    ),
    false,
  );
});

test("the half-overlap boundary is inclusive", () => {
  // Record has 4 countable words; sharing exactly 2 (0.5) passes.
  assert.equal(looksLike("ketamine infusion", "ketamine infusion pain trial", "Someone Q"), true);
  // Sharing only 1 of 4 (0.25) fails when the surname is absent.
  assert.equal(looksLike("ketamine", "ketamine infusion pain trial", "Someone Q"), false);
});

test("a record with no countable title words is treated as a match", () => {
  // Nothing to compare against -> benefit of the doubt (never a false MISMATCH).
  assert.equal(looksLike("Any citation text", "", "No Author"), true);
  assert.equal(looksLike("Any citation text", "a an of", "No Author"), true);
});

test("matching is accent- and case-insensitive on both sides", () => {
  assert.equal(looksLike("EVOKE trial results", "Évoke Trial Results reported", "Team"), true);
});
