<template>
  <base-layout>
    <template #main>
      <div class="layout-row bg-gray-300">
        Basic demo using inject
      </div>
      <link-section />
      <div class="layout-row">
        Will not working here: {{ person.firstName }}
      </div>
    </template>
  </base-layout>
</template>
<script setup lang="ts">
import BaseLayout from '@/layout/BaseLayout.vue';
import LinkSection from '@/views/inject-provide/basic/LinkSection.vue';
import { inject } from 'vue';
import { Person } from '@/views/inject-provide/basic/person'

const person: Person = inject('injectedPerson') || new Person();

</script>