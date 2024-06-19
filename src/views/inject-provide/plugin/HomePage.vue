<template>
  <base-layout>
    <template #main>
      <div class="layout-row bg-gray-300">
        Using inject + plugin. This is still &nbsp;<span class="text-red-500">Work In Progress</span>
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
import LinkSection from '@/views/inject-provide/plugin/LinkSection.vue';

import HomePageChild from '@/views/inject-provide/plugin/HomePageChild.vue';
import { PersonPlugin } from '@/plugins/personPlugin';
import { inject, ref } from 'vue';

const person = ref(new PersonPlugin());
const injectedPersonPlugin = inject('personPlugin') as PersonPlugin;

const savePerson = () => {
  console.log(`person form: ${person.value.firstName} ${person.value.lastName}`);
  injectedPersonPlugin?.setFullName(person.value.firstName, person.value.lastName);

  // Code block below will not work.
  // const injectedInHomePage = getInjectedPerson();
  // console.log(`person from service: ${injectedInHomePage.firstName} ${injectedInHomePage.lastName}`);
}


</script>