<template>
  <table class="border">
    <thead class="border">
    <tr>
      <th class="border">Person Name</th>
      <th class="border">Addresses</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="(person, index) in modelValue" :key="index">
        <td class="border">{{ person.name }}</td>
        <td class="border">
          <div v-for="(address, index) in person.addresses" :key="index">
            {{ `${address.street}, ${address.city}. ${address.country}` }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
defineProps(['modelValue']);
</script>