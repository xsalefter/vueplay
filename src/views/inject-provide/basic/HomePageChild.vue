<template>
  <div class="layout-row">
    FirstName: {{ person.firstName }}, LastName: {{ person.lastName }}
  </div>
</template>
<script setup lang="ts">
/**
 * This component requires an injected object with type of Person. Exception will be thrown if injected object not exist.
 */
import { Person } from '@/views/inject-provide/basic/person';
import { inject } from 'vue';

const person: Person = inject('injectedPerson') || new Person();

</script>