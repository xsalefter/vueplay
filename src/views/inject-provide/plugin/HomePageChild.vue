<template>
  <div class="layout-row">
    <div>From <code>inject()</code>:</div>
    <div>FirstName: {{ directlyFromInject.firstName }}, LastName: {{ directlyFromInject.lastName }}</div>
  </div>
  <div class="layout-row">
    <div>From service <code>getInjectedPerson()</code>:</div>
    <div>FirstName: {{ fromServices.firstName }}, LastName: {{ fromServices.lastName }}</div>
  </div>
</template>
<script setup lang="ts">
/**
 * This component requires an injected object with type of Person. Exception will be thrown if injected object not exist.
 */
import { Person } from '@/views/inject-provide/basic/person';
import { inject, toRef, watch } from 'vue'
import { getInjectedPerson } from '@/views/inject-provide/plugin/basicServices'

const directlyFromInject: Person = inject('personPlugin')!;
const fromServices = toRef(getInjectedPerson());

watch(fromServices, (newVal) => {
  console.log(`fromServices changed: ${newVal.firstName} ${newVal.lastName}`);
}, { deep: true });
</script>