<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  color: black;
  color-scheme: white;
}
</style>
