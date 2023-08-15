import UniqueEntityId from "shared/domain/value-objects/unique-entity-id";
import { RepositoryInterface } from "./repository-contracts";
import { Entity } from "shared/entity/entity";
import { NotFoundError } from "shared/error/not-found.error";

export default abstract class InMemoryRepository<E extends Entity>
  implements RepositoryInterface<E>
{
  items: E[] = [];

  protected async _get(id: string | UniqueEntityId): Promise<E> {
    const item = this.items.find((item) => item.id === id);

    if (!item) {
      throw new NotFoundError("Entity not found using ID: " + id);
    }

    return item;
  }
  async insert(entity: E): Promise<void> {
    this.items.push(entity);
  }
  async findById(id: string | UniqueEntityId): Promise<E> {
    const item = await this._get(id);
    return item;
  }
  async findAll(): Promise<E[]> {
    return this.items;
  }
  async update(entity: E): Promise<void> {
    await this._get(entity.id);
    const index = this.items.findIndex((item) => item.id === entity.id);

    this.items[index] = entity;
  }
  async delete(id: string | UniqueEntityId): Promise<void> {
    await this._get(id);
    const index = this.items.findIndex((item) => item.id === id);

    this.items.splice(index, 1);
  }
}
