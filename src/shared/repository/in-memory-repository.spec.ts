import { beforeEach, describe, it } from "node:test";
import { Entity } from "shared/entity/entity";
import InMemoryRepository from "./in-memory-repository";
import assert from "node:assert";
import UniqueEntityId from "shared/domain/value-objects/unique-entity-id";
import { NotFoundError } from "shared/error/not-found.error";

type StubEntityProps = {
  name: string;
  price: number;
};

class StubEntity extends Entity<StubEntityProps> {}

class StubInMemoryRepository extends InMemoryRepository<StubEntity> {}
let repository: StubInMemoryRepository;

beforeEach(() => {
  repository = new StubInMemoryRepository();
});

describe("InMemoryRepository Unit Tests", () => {
  it("should insert a new entity", async () => {
    await repository.insert(
      new StubEntity({
        name: "Movie",
        price: 10,
      })
    );

    assert.equal(repository.items.length, 1);
  });

  it("should throws error when entity not found", async () => {
    await assert.rejects(async () => {
      await repository.findById("123");
    });
  });

  it("should find a entity", async () => {
    await assert.rejects(async () => {
      await repository.findById(
        new UniqueEntityId("2f5c3e63-9c7a-4f8a-bd0a-9a8687f53b9c")
      );
    }, new NotFoundError("Entity not found using ID: 2f5c3e63-9c7a-4f8a-bd0a-9a8687f53b9c"));
  });
});
