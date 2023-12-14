<template>
  <div>
    <ul>
      <li>Pinia</li>
      <ul>
        <li>- <router-link to="/pinia/as-function/home">as (factory) function</router-link></li>
        <li>- <router-link to="/pinia/as-class/home">as class</router-link></li>
      </ul>
    </ul>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
ul, li {
  @apply py-[0.1rem] px-[0.1rem];
}
</style>