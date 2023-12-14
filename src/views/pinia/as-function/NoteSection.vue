<template>
  <div class="layout-row bg-gray-300">
    Demo using &nbsp;
    <a href="https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1" target="_blank">
      factory function</a>&nbsp; as a managed pinia object.
  </div>
  <div class="layout-row bg-gray-200 italic text-gray-600">
    <p>If you hit your browser refresh button, all person data will be disappear.</p>
    <slot name="sub-notes" />
  </div>
</template>
<script setup lang="ts">
</script>