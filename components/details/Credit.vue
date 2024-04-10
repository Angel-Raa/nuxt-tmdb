<template>
  <section class="flex flex-wrap mt-8">
    <div v-for="credit in store.credits.cast.slice(0, 6)" :key="credit.id" class="w-full md:w-1/3 lg:w-1/4 p-4">
      <div class="flex items-center space-x-4">
        <NuxtImg
          :src="`${TMDB_IMAGE}/${credit.profile_path}`"
          :alt="credit.name"
          loading="lazy"
          class="w-16 h-16 rounded-full object-cover shadow-md"
          :fallback="'/fallback-image.jpg'"
        />
        <div class="flex flex-col">
          <h3 class="text-base font-medium truncate">{{ credit.original_name }}</h3>
          <p class="text-sm text-gray-500">
            {{ credit.character }} (voice)
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import{TMDB_IMAGE} from "@/constants/images"
const store = useMovieStore();
const props = defineProps<{
  id: number;
}>();
await store.getCredits(props.id);
console.log(store.credits.cast);
</script>

<style></style>
