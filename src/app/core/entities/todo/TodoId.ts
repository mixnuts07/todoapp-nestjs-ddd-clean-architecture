// TODOの一意の識別子を表す
class TodoId {
  constructor(private readonly value: string) {}

  getValue(): string {
    return this.value;
  }
}
