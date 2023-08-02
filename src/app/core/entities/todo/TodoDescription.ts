// TODOの詳細な説明を表す
class TodoDescription {
  constructor(private readonly value: string) {}

  getValue(): string {
    return this.value;
  }
}
