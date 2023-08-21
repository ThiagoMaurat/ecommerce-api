import { SearchRepositoryInterface } from "shared/repository/repository-contracts";
import { Category } from "../entities/category";

export default interface CategoryRepository
  extends SearchRepositoryInterface<Category, any, any> {}
