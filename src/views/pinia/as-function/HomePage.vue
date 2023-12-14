<template>
  <base-layout>
    <template #main>
      <note-section />
      <link-section />
      <div class="layout-row">
        <form @submit.prevent="doSearchPerson">
          <input v-model="personSearch" placeholder="search person by name" />
          <br/>
          <button type="submit">Search</button>
          <button type="button" v-on:click="personSearch = ''; doSearchPerson();">Reset</button>
        </form>
      </div>
      <div class="layout-row">
        <person-table v-model="persons" />
      </div>
    </template>
  </base-layout>
</template>
<script setup lang="ts">
import BaseLayout from '@/layout/BaseLayout.vue';
import { usePersonStore } from '@/views/pinia/as-function/functionBasedPiniaStore';
import { reactive, ref } from 'vue'
import NoteSection from '@/views/pinia/as-function/NoteSection.vue'
import LinkSection from '@/views/pinia/as-function/LinkSection.vue'
import PersonTable from '@/views/pinia/as-function/PersonTable.vue'

const personStore = usePersonStore();
const personSearch = ref();
let persons = ref(personStore.getPersons());

const doSearchPerson = () => {
  console.log(`Searching: ${personSearch.value}`);
  persons.value = personSearch.value ? personStore.findPersonByName(personSearch.value) : personStore.getPersons();
}

</script>