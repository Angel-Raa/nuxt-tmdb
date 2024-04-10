<template>
  <section>
    <LazyDetailsMovie :details="store.details" />
  </section>
</template>

<script lang="ts" setup>
const id = useParams<string>("id");
const store = useMovieStore();

onMounted(async () => {
  await store.getMovieById(id.value);
});
</script>
