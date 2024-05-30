<template>
  <base-layout>
    <template #main>
      <note-section />
      <link-section />
      <div class="layout-row text-xs">
        Just to show that with pinia, the "object state", or data, is shareable across pages. Also notes that when you
        take a look at the code, person data that passed into person-table not need to be "reactive object". Reactive
        object only needed when you need to deal with an event, after a page rendered.
      </div>
      <div class="layout-row">
        <person-table v-model="persons" />
      </div>
    </template>
  </base-layout>
</template>
<script setup lang="ts">
import BaseLayout from '@/layout/BaseLayout.vue';
import { usePersonStore } from '@/views/pinia/as-function/functionBasedPiniaStore';;
import NoteSection from '@/views/pinia/as-function/NoteSection.vue'
import LinkSection from '@/views/pinia/as-function/LinkSection.vue'
import PersonTable from '@/views/pinia/as-function/PersonTable.vue'
import router from '@/router'

const personStore = usePersonStore();
const persons = personStore.getPersons();

setTimeout(() => {
  if (!persons || persons.length === 0) {
    return;
  } else {
    /** Person data will still there */
    router.push('/pinia/as-function/3rd');

    /** This will cause person data gone. */
    // window.location.href = 'http://localhost:5174/pinia/as-function/3rd';
  }
}, 2000);
</script>