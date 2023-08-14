import { randomUUID } from "node:crypto";
import { InvalidUuidError } from "shared/error/invalid-uuid.error";

export default class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = id || randomUUID();
    this.validate();
  }

  private validate() {
    const uuidV4Pattern =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    if (!uuidV4Pattern.test(this.id)) {
      throw new InvalidUuidError();
    }
  }
}
