import type { Person } from '@/views/pinia/person';
import { defineStore } from 'pinia';

export const usePersonStore = (initialData: Person[] = []) => {
  return defineStore('functionBasedPersonStore', () => {
    return personRepository(initialData);
  })();
};

/**
 * Using [factory function](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1)
 * approach. This is "known" (and thus preferred by javascript developers) approach. Declared separately so this is
 * easier to test.
 *
 * @param initialData initial data
 */
const personRepository = (initialData: Person[] = []) => {
  const data = initialData;

  return {
    addPerson: (person: Person): void => {
      data.push(person);
    },

    findPersonByName: (name: string): Person[] => {
      return data.filter(value => value.name.includes(name));
    },

    getPersons: (): Person[] => {
      return data;
    }
  };
};