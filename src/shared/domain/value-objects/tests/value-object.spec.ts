import { describe, it } from "node:test";
import assert from "node:assert";
import ValueObject from "../value-object";

class StubValueObject extends ValueObject<any> {}

describe("ValueObjects Unit Tests", () => {
  it("should throw error when uuid is invalid", () => {
    const vo = new StubValueObject("invalid");
    assert.equal(vo.value, "invalid");
  });

  it("should convert any value", () => {
    const arrange = [
      { received: null, expected: null },
      { received: undefined, expected: undefined },
      { received: "", expected: "" },
      { received: "fake Test", expected: "fake Test" },
      { received: 0, expected: 0 },
      { received: 1, expected: 1 },
      { received: 5, expected: 5 },
      { received: true, expected: true },
      { received: false, expected: false },
    ];

    arrange.forEach((value) => {
      let vo = new StubValueObject(value.received);
      assert.equal(vo.value, value.received);
    });
  });
});
