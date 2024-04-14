<template>
  <BaseNavbar />
  <NuxtPage />
</template>

<style>
@import "@unocss/reset/tailwind.css";

html {
  @apply scroll-smooth;
}

div#__nuxt {
  @apply relative overflow-x-hidden;
  font-family: "Livvic", sans-serif;
}
</style>
