import { describe, test } from "node:test";
import { Category } from "./category";
import assert from "node:assert";

describe("Category Test", () => {
  test("Category Test", () => {
    const category = new Category("Movie");
    assert.strictEqual("Movie", category.name);
  });
});
