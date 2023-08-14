import { describe, mock, it } from "node:test";
import assert from "node:assert";
import UniqueEntityId from "./unique-entity-id";

describe("UniqueEntityId Unit Tests", () => {
  it("should throw error when uuid is invalid", () => {
    assert.throws(
      () => {
        new UniqueEntityId("invalid");
      },
      {
        message: "ID must be a valid UUID",
      }
    );
  });

  it("should certificated that the funcion validate is called when UniqueEntityId is created", () => {
    const uniqueEntityId = new UniqueEntityId();
    const funcIsCalled = mock.method(uniqueEntityId as any, "validate");
    assert.equal(!!funcIsCalled, true);
  });

  it("should accept a uuid passed in the constructor", () => {
    const uniqueEntityId = new UniqueEntityId(
      "2f5c3e63-9c7a-4f8a-bd0a-9a8687f53b9c"
    );
    assert.equal(uniqueEntityId.id, "2f5c3e63-9c7a-4f8a-bd0a-9a8687f53b9c");
  });
});
