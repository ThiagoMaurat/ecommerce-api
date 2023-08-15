import { randomUUID } from "node:crypto";
import { InvalidUuidError } from "shared/error/invalid-uuid.error";
import ValueObject from "./value-object";

export default class UniqueEntityId extends ValueObject<string> {
  constructor(readonly id?: string) {
    super(id || randomUUID());
    this.validate();
  }

  private validate() {
    const uuidV4Pattern =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    if (!uuidV4Pattern.test(this.value)) {
      throw new InvalidUuidError();
    }
  }
}
