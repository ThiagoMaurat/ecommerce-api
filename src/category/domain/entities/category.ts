import UniqueEntityId from "shared/domain/value-objects/unique-entity-id";
import { Entity } from "shared/entity/entity";

export type CategoryProperties = {
  name: string;
  is_active?: boolean;
  created_at?: Date;
  description?: string;
};

export class Category extends Entity<CategoryProperties> {
  constructor(public readonly props: CategoryProperties, id?: UniqueEntityId) {
    super(props, id);
    this.props.description = this.props.description;
    this.props.is_active = this.props.is_active ?? true;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  update(name: string, description: string): void {
    this.name = name;
    this.description = description;
  }

  active() {
    this.is_active = true;
  }

  get name(): string {
    return this.props.name;
  }
  get description(): string | undefined {
    return this.props.description;
  }
  get is_active(): boolean | undefined {
    return this.props.is_active;
  }
  get created_at(): Date | undefined {
    return this.props.created_at;
  }

  private set description(value: string) {
    this.props.description = value ?? null;
  }

  private set is_active(value: boolean) {
    this.props.is_active = value ?? true;
  }

  private set name(value: string) {
    this.props.name = value;
  }
}
