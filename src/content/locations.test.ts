import { test } from "node:test";
import assert from "node:assert/strict";
import { locations } from "./locations";
import { legalEntityLine } from "./legal";

test("London trading office uses the confirmed address", () => {
  const london = locations.find((office) => office.slug === "london");
  assert.ok(london);
  assert.deepEqual(london.addressLines, ["167-169 Great Portland Street, 5th Floor", "London"]);
  assert.equal(london.postalCode, "W1W 5PF");
});

test("registered office line uses the approved address", () => {
  assert.ok(legalEntityLine.includes("Registered office: 167-169 Great Portland Street, London W1W 5PF."));
});