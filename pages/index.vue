<template>
  <section
    class="hero min-h-screen from-gray-800 to-gray-600 px-4 py-16 flex flex-col items-center justify-center"
  >
    <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate__infinite animate__pulse">
      TMDb Explorer
    </h1>
    <Search class="mt-10" />
    <Movies class="mt-4 mb-12" />
    <IFooter class="flex justify-center mt-32 h-16 items-center" />
  </section>
</template>


<style scoped>
@keyframes pulse {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.8;
  }
}

.animate__pulse {
  animation: pulse 1s ease-in-out;
}
</style>
