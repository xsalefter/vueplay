<template>
  <div class="layout-body">
    <div class="layout-header">
      <div class="layout-header-row">
        <h1>Vue Playground</h1>
      </div>
    </div>
    <!-- end of layout-header -->

    <div class="layout-main">
      <div class="layout-main-content">
        <div class="w-full flex text-sm font-medium">
          <div class="w-1/5 bg-gray-200 mr-2">
            <left-menu />
          </div>
          <div class="w-4/5">
            <main>
              <slot name="main"></slot>
            </main>
          </div>
        </div>
      </div>
    </div>
    <!-- end of layout-main -->

    <div class="layout-footer">
      <!-- Give more padding and justify alignment.-->
      <div class="layout-footer-row">
        <!-- Make footer contents goes to the bottom section of layout-footer itself. -->
        <div class="layout-footer-content">
          Copyleft {{ new Date().getFullYear() }}
        </div>
      </div>
    </div>
    <!-- END OF FOOTER -->
  </div>
  <!-- end of layout-body -->
</template>

<style scoped>
.layout-body {
  @apply relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-[3.75rem] text-gray-900 font-semibold;
}

.layout-header {
  @apply self-stretch bg-white overflow-hidden flex flex-col items-center justify-start border-b-[1px] border-solid border-gray-200 text-[1.75rem] font-bold;
}

.layout-header-row {
  @apply w-full flex flex-row items-center justify-between py-[0.75rem] px-[2rem] box-border;
}

.layout-main {
  @apply self-stretch flex flex-row items-center justify-center py-[2rem] px-[0rem];
}

.layout-main-content {
  @apply flex-1 flex flex-row items-center justify-center py-[0rem] px-[2rem] box-border md:flex-col md:gap-[4rem] md:items-center md:justify-center;
}

.layout-footer {
  @apply self-stretch flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[2rem] text-[0.88rem] text-gray-500 border-t-[1px] border-solid border-gray-200;
}

.layout-footer-row {
  @apply w-full flex flex-col items-start justify-start py-[0rem] px-[2rem] box-border;
}

.layout-footer-content {
  @apply w-full self-stretch flex flex-row items-center justify-between pt-[1.5rem] px-[0rem] pb-[0rem] font-light;
}
</style>
<script setup lang="ts">
import LeftMenu from '@/layout/LeftMenu.vue'
</script>
