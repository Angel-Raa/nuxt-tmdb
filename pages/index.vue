<template>
  <section class="mx-auto">
    <Hero />
    <Search class="mt-10" />
    <Movies class="mt-4 mb-12" />
    <!-- TODO agregar páginas <Pagination class="flex justify-center m-12" />  -->
    <IFooter class="flex justify-center m-32 h-16 items-center" />
  </section>
</template>

<script lang="ts" setup>
import IFooter from "~/components/IFooter.vue";
</script>

<style scoped></style>
