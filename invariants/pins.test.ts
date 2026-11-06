import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import {
  OWNED_IMAGE,
  SECONDARY_IMAGE,
  OWNED_FLAGS,
  assertDistinctPins,
  documentsOwnedPin,
  documentsWerror,
  documentsSecondaryPin,
} from "./pins.ts";

test("owned and secondary image pins differ", () => {
  assertDistinctPins(OWNED_IMAGE, SECONDARY_IMAGE);
  assert.notEqual(OWNED_IMAGE, SECONDARY_IMAGE);
});

test("owned pin is the waxteam WAX CDT tag", () => {
  assert.match(OWNED_IMAGE, /^waxteam\/cdt:/);
  assert.equal(OWNED_IMAGE, "waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01");
});

test("owned flags include -Werror", () => {
  assert.ok(OWNED_FLAGS.includes("-Werror"));
  assert.ok(OWNED_FLAGS.includes("-O3"));
  assert.ok(OWNED_FLAGS.includes("-abigen"));
});

test("helpers detect pins in sample workflow text", () => {
  const sample = `
    waxteam/cdt:ce-v1.3.1wax01-v4.1.1wax01
    cdt-cpp -O3 -Werror -abigen
  `;
  assert.equal(documentsOwnedPin(sample), true);
  assert.equal(documentsWerror(sample), true);
  assert.equal(documentsSecondaryPin(sample), false);
});

test("if workflow files exist on disk, owned file documents owned pin", () => {
  const candidates = [
    join(process.cwd(), ".github/workflows/cdt-deterministic.yml"),
    join(process.cwd(), "../.github/workflows/cdt-deterministic.yml"),
  ];
  const path = candidates.find((p) => existsSync(p));
  if (!path) return;
  const text = readFileSync(path, "utf8");
  assert.equal(documentsOwnedPin(text), true);
  assert.equal(documentsWerror(text), true);
  assert.equal(documentsSecondaryPin(text), false);
});

test("if secondary workflow exists, it documents the secondary pin", () => {
  const candidates = [
    join(process.cwd(), ".github/workflows/px-contract-build.yml"),
    join(process.cwd(), "../.github/workflows/px-contract-build.yml"),
  ];
  const path = candidates.find((p) => existsSync(p));
  if (!path) return;
  const text = readFileSync(path, "utf8");
  assert.equal(documentsSecondaryPin(text), true);
  assert.equal(documentsOwnedPin(text), false);
});
