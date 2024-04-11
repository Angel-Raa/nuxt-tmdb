<template>
  <section>
    <LazyDetailsMovie :details="store.details" />
    <div class="flex justify-center mt-4"></div>
  </section>
</template>

<script lang="ts" setup>
const id = useParams<string>("id");
const store = useMovieStore();

await store.getMovieById(id.value);
</script>
