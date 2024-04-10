<template>
  <article class="p-2 rounded-lg bg-gray-200 text-gray-700 mb-2">
    {{ name }}
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
}>();
</script>

<style></style>
