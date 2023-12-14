<template>
  <base-layout>
    <template #main>
      <note-section />
      <link-section />
      <div class="layout-row">
        <form @submit.prevent="savePerson">
          <label for="personName">Add New Person</label>
          <input v-model="formModel!.name" id="personName" placeholder="Person name" />
          <br/>
          Addresses:
          <br/>
          <span v-for="(address, index) in formModel.addresses" :key="index">
            <label for="street">street</label>
            <input v-model="address.street" id="street" placeholder="Street" />
            <br/>
            <label for="city">city</label>
            <input v-model="address.city" id="city" placeholder="City" />
            <br/>
            <label for="country">country</label>
            <input v-model="address.country" id="country" placeholder="Country" />
            <br/>
          </span>
          <button type="submit">Save</button> | <button type="button" @click="addAddress">Add Address</button>
        </form>
      </div>
    </template>
  </base-layout>
</template>
<script setup lang="ts">
import BaseLayout from '@/layout/BaseLayout.vue';
import { usePersonStore } from '@/views/pinia/as-class/classBasedPiniaStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { Person } from '@/views/pinia/person'
import NoteSection from '@/views/pinia/as-class/NoteSection.vue';
import LinkSection from '@/views/pinia/as-class/LinkSection.vue';

const formModel = ref<Person>({ name: '', addresses: [] });

const router = useRouter();
const personStore = usePersonStore(); // using class instead of inner/factory function
const savePerson = () => {
  personStore.addPerson(formModel.value!);
  router.push("/pinia/as-class/home");
}

const addAddress = () => {
  formModel.value.addresses?.push({ street: '', city: '', country: '' });
}
</script>