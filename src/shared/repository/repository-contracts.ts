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

  set page(page: number) {
    let _page = +page;

    if (Number.isNaN(_page) || _page <= 0 || parseInt(_page as any) !== _page) {
      _page = 1;
    }

    this._page = _page;
  }

  get per_page() {
    return this._per_page;
  }

  set per_page(value: number) {
    let _per_page = +value;

    if (
      Number.isNaN(_per_page) ||
      _per_page <= 0 ||
      parseInt(_per_page as any) !== _per_page
    ) {
      _per_page = 15;
    }

    this._per_page = _per_page;
  }

  get sort(): string | null {
    return this._sort;
  }

  set sort(per_page: string | null) {
    this._sort =
      per_page === null || per_page === undefined || per_page === ""
        ? null
        : `${per_page}`;
  }

  get sort_dir(): string | null {
    return this._sort_dir;
  }

  set sort_dir(value: SortDirection | null) {
    if (!this.sort) {
      this._sort_dir = null;
      return;
    }

    const dir = `${value}`.toLowerCase();
    this._sort_dir = dir !== "asc" && dir !== "desc" ? "asc" : dir;
  }

  get filter(): string | null {
    return this._filter;
  }

  set filter(value: string | null) {
    this._filter =
      value === null || value === undefined || value === "" ? null : `${value}`;
  }
}

export interface SearchRepositoryInterface<
  E extends Entity,
  SearchOutput,
  SearchInput = SearchParams
> extends RepositoryInterface<E> {
  search(query: SearchParams): Promise<SearchOutput>;
}
