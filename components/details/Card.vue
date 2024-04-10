<template>
  <section class="">
  <h1 class="">{{ title }}</h1>
  <p class="">
    Tagline: <span class="">{{ tagline }}</span>
  </p>
  <p class="">
    Released: <span class="">{{ released }}</span>
  </p>
  <p class="">
    Revenue: <span class="">{{ revenue }}</span>
  </p>
</section>

</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  tagline: string;
  released: Date;
  revenue: number;
}>();
</script>

<style></style>
