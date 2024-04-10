<template>
  <section>
    <LazyDetailsMovie :details="store.details" />
    <div class="flex justify-center mt-4">
      <NuxtLink to="/" class="">Back to Home</NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
const id = useParams<string>("id");
const store = useMovieStore();

await store.getMovieById(id.value);

</script>
