import assert from "node:assert";
import test, { describe } from "node:test";
import { SearchParams } from "./repository-contracts";

describe("SearchParams Unit Tests", () => {
  test("page prop", () => {
    const params = new SearchParams();
    assert.strictEqual(params.page, 1);

    const arrange: { page: any | null; expected: number }[] = [
      { page: null, expected: 1 },
      { page: undefined, expected: 1 },
      { page: "", expected: 1 },
      { page: "1", expected: 1 },
      { page: 0, expected: 1 },
      { page: 5, expected: 5 },
      { page: "a", expected: 1 },
      { page: false, expected: 1 },
    ];

    arrange.forEach((item) => {
      const params = new SearchParams({ page: item.page });
      assert.strictEqual(params.page, item.expected);
    });
  });

  test("per page prop", () => {
    const params = new SearchParams();
    assert.strictEqual(params.per_page, 15);

    const arrange: { per_page: any | null; expected: number }[] = [
      { per_page: null, expected: 15 },
      { per_page: undefined, expected: 15 },
      { per_page: "", expected: 15 },
      { per_page: "15", expected: 15 },
      { per_page: 0, expected: 15 },
      { per_page: 5, expected: 5 },
      { per_page: "a", expected: 15 },
      { per_page: false, expected: 15 },
    ];

    arrange.forEach((item) => {
      const params = new SearchParams({ per_page: item.per_page });
      assert.strictEqual(params.per_page, item.expected);
    });
  });

  test("sort prop", () => {
    let params = new SearchParams();
    assert.strictEqual(params.sort, null);

    params = new SearchParams({ sort: null });
    assert.strictEqual(params.sort, null);

    params = new SearchParams({ sort: undefined });
    assert.strictEqual(params.sort, null);

    params = new SearchParams({ sort: "" });
    assert.strictEqual(params.sort, null);

    const arrange: { sort: any | null; expected: string }[] = [
      { sort: null, expected: null },
      { sort: undefined, expected: null },
      { sort: "", expected: null },
      { sort: "15", expected: "15" },
      { sort: 0, expected: "0" },
      { sort: true, expected: "true" },
      { sort: "a", expected: "a" },
      { sort: {}, expected: "[object Object]" },
      { sort: "field", expected: "field" },
    ];

    arrange.forEach((item) => {
      const params = new SearchParams({ sort: item.sort });
      assert.strictEqual(params.sort, item.expected);
    });
  });

  test("sort_dir prop", () => {
    let params = new SearchParams();
    assert.strictEqual(params.sort_dir, null);

    params = new SearchParams({ sort: null });
    assert.strictEqual(params.sort_dir, null);

    params = new SearchParams({ sort: undefined });
    assert.strictEqual(params.sort_dir, null);

    params = new SearchParams({ sort: "" });
    assert.strictEqual(params.sort_dir, null);

    const arrange: { sort_dir: any | null; expected: string }[] = [
      { sort_dir: null, expected: "asc" },
      { sort_dir: undefined, expected: "asc" },
      { sort_dir: "", expected: "asc" },
      { sort_dir: "15", expected: "asc" },
      { sort_dir: 0, expected: "asc" },
      { sort_dir: "asc", expected: "asc" },
      { sort_dir: "ASC", expected: "asc" },
      { sort_dir: "desc", expected: "desc" },
      { sort_dir: "DESC", expected: "desc" },
      { sort_dir: false, expected: "asc" },
    ];

    arrange.forEach((item) => {
      const params = new SearchParams({
        sort: "field",
        sort_dir: item.sort_dir,
      });
      assert.strictEqual(params.sort_dir, item.expected);
    });
  });

  test("filter prop", () => {
    const params = new SearchParams();
    assert.strictEqual(params.filter, null);

    const arrange: { filter: any | null; expected: string }[] = [
      { filter: null, expected: null },
      { filter: undefined, expected: null },
      { filter: "", expected: null },
      { filter: "15", expected: "15" },
      { filter: 0, expected: "0" },
      { filter: true, expected: "true" },
      { filter: "a", expected: "a" },
      { filter: {}, expected: "[object Object]" },
      { filter: "field", expected: "field" },
    ];

    arrange.forEach((item) => {
      const params = new SearchParams({ filter: item.filter });
      assert.strictEqual(params.filter, item.expected);
    });
  });
});
