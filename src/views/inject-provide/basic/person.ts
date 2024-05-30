
export class Person {

  private _firstName?: string;
  private _lastName?: string;

  get firstName(): string {
    return <string>this._firstName
  }

  set firstName(value: string) {
    this._firstName = value
  }

  get lastName(): string {
    return <string>this._lastName
  }

  set lastName(value: string) {
    this._lastName = value
  }
}