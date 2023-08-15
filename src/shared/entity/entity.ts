import UniqueEntityId from "shared/domain/value-objects/unique-entity-id";

export class Entity<Props = any> {
  public readonly UniqueEntityId: UniqueEntityId;

  constructor(public readonly props: Props, id?: UniqueEntityId) {
    this.UniqueEntityId = id || new UniqueEntityId();
  }

  get id() {
    return this.UniqueEntityId.value;
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this.id,
      ...this.props,
    } as Required<{ id: string } & Props>;
  }
}
