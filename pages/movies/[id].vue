<template>
  <section>
      <h2>Id : {{ route.params.id }}</h2>
  </section>
</template>

<script lang="ts" setup>
const route = useRoute();
const store = useMovieStore();

</script>
