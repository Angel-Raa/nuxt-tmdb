<template>
  <section class="mb-4">
    <h1 class="text-2xl font-semibold">{{ title }}</h1>
    <p class="text-base mb-2">
      Tagline: <span class="font-medium">{{ tagline }}</span>
    </p>
    <p class="text-base mb-2">
      Released: <span class="font-medium">{{ new Date(released) }}</span>
    </p>
    <p class="text-base mb-2" v-if="revenue > 0">
      Revenue: <span class="font-medium">{{ formatRevenue(revenue) }}</span>
    </p>
  </section>
</template>

<script lang="ts" setup>
import { formatRevenue, formatDate } from "@/composables/standardization";
defineProps<{
  title: string;
  tagline: string;
  released: Date |string;
  revenue: number;
}>();
</script>

<style></style>
