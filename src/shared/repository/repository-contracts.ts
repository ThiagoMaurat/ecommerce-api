import UniqueEntityId from "shared/domain/value-objects/unique-entity-id";
import { Entity } from "shared/entity/entity";

export interface RepositoryInterface<E extends Entity> {
  insert(entity: E): Promise<void>;
  findById(id: string | UniqueEntityId): Promise<E>;
  findAll(): Promise<E[]>;
  update(entity: E): Promise<void>;
  delete(id: string | UniqueEntityId): Promise<void>;
}

export interface SearchRepositoryInterface<
  E extends Entity,
  SearchParams,
  SearchResult
> extends RepositoryInterface<E> {
  search(query: SearchParams): Promise<SearchResult>;
}
