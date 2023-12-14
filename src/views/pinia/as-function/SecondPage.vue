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

const personStore = usePersonStore();
const persons = personStore.getPersons();
</script>