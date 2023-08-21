import UniqueEntityId from "shared/domain/value-objects/unique-entity-id";
import { Entity } from "shared/entity/entity";

export interface RepositoryInterface<E extends Entity> {
  insert(entity: E): Promise<void>;
  findById(id: string | UniqueEntityId): Promise<E>;
  findAll(): Promise<E[]>;
  update(entity: E): Promise<void>;
  delete(id: string | UniqueEntityId): Promise<void>;
}

export type SortDirection = "asc" | "desc";

export type SearchProps<Filter = string> = {
  page?: number;
  per_page?: number;
  sort?: string;
  sort_dir?: SortDirection;
  filter?: Filter;
};

export class SearchParams {
  protected _page: number;
  protected _per_page: number = 15;
  protected _sort: string | null;
  protected _sort_dir: SortDirection | null;
  protected _filter: string | null;
  constructor(props: SearchProps = {}) {
    this.page = props.page;
    this.per_page = props.per_page;
    this.sort = props.sort;
    this.sort_dir = props.sort_dir;
    this.filter = props.filter;
  }

  get page() {
    return this._page;
  }

  private set page(page: number) {}

  get per_page() {
    return this._per_page;
  }

  private set per_page(value: number) {}

  get sort(): string | null {
    return this._sort;
  }

  private set sort(per_page: string | null) {}

  get sort_dir(): string | null {
    return this._sort_dir;
  }

  private set sort_dir(value: SortDirection | null) {
    this._sort_dir = value;
  }

  get filter(): string | null {
    return this._filter;
  }

  private set filter(value: string | null) {}
}

export interface SearchRepositoryInterface<
  E extends Entity,
  SearchInput,
  SearchOutput
> extends RepositoryInterface<E> {
  search(query: SearchParams): Promise<SearchOutput>;
}
