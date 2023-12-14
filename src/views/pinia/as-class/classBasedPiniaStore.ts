import type { Person } from '@/views/pinia/person';
import { defineStore } from 'pinia';

/**
 * There's requirement to use class as a managed pinia object, in order to make it work successfully:
 *
 * 1. The managed class attribute(s) cannot be private (in this class, `data` cannot be private attribute)
 * 2. The managed class members (attributes and methods) should be deconstructed and returned in `defineStore()`.
 *
 * No, this is not stated in any documentation. This is merely an observation, and better, need confirmation from the
 * developer itself.
 */
export class PersonRepository {

  data: Person[];

  constructor(data: Person[] = []) {
    this.data = data;
  }

  addPerson(person: Person): void {
    this.data.push(person);
  }

  findPersonByName(name: string): Person[] {
    return this.data.filter(person => person.name.startsWith(name));
  }

  getPersons(): Person[] {
    return this.data;
  }
}

export const usePersonStore = (initialData: Person[] = []) => {
  return defineStore('classBasedPersonStore', () => {
    // This is the example of point 2 in TSDoc: "data" is deconstructed, and returned.
    const { data, addPerson, findPersonByName, getPersons } = new PersonRepository(initialData);
    return { data, addPerson, findPersonByName, getPersons };
  })();
}