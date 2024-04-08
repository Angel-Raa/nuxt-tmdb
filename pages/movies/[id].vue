<template>
  <section>
    Id : {{ $route.params.id }}
  </section>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
