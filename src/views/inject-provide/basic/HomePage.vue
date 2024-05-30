<template>
  <base-layout>
    <template #main>
      <div class="layout-row bg-gray-300">
        Basic demo using inject
      </div>
      <link-section />
      <div class="layout-row">
        <form @submit.prevent="savePerson">
          <input v-model="person.firstName" placeholder="first name" /><br/>
          <input v-model="person.lastName" placeholder="last name" /><br/>
          <button type="submit">Add Person</button>
        </form>
      </div>
      <home-page-child />
    </template>
  </base-layout>
</template>
<script setup lang="ts">
import BaseLayout from '@/layout/BaseLayout.vue';
import LinkSection from '@/views/inject-provide/basic/LinkSection.vue';

import { provide, ref } from 'vue'
import { Person } from '@/views/inject-provide/basic/person';
import HomePageChild from '@/views/inject-provide/basic/HomePageChild.vue';

const person: Person = new Person();

/**
 * 1. Like everything in Vue, "ref()" is required. Changing "injectedPerson" to plain object will
 *    not work.
 * 2. The scope of injected object is only within this page. If you want to share it across pages,
 *    you need to use "plugin" approach.
 */
const injectedPerson = ref(new Person());
provide('injectedPerson', injectedPerson);

const savePerson = () => {
  injectedPerson.value = person;
}

</script>