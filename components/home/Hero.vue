<template>
  <main class="h-2xl w-full container-center relative overflow-hidden p-5">
    <div class="animate-zoom-in absolute inset-0 bg-[url(backgroud.jpg)]" />
    <div class="z-10">
      <NuxtImg
        class="sm:h-72 md:h-96 lg:h-96 xl:h-96 2xl:h-96"
        src="logo_main.png"
        alt="Logo Rope"
        height="450"
      />
    </div>
  </main>
</template>

<style>
@keyframes zoom-in {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.animate-zoom-in {
  animation: zoom-in 10s linear infinite;
}
</style>
