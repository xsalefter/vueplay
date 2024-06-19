import type { App } from 'vue'

export class PersonPlugin {

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

  setFullName(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export default {

  install(app: App) {
    const personPlugin: PersonPlugin = new PersonPlugin();
    app.provide('personPlugin', personPlugin);
    console.log('personPlugin installed');
  }
}
