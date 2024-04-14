<script setup lang="ts">
const menu = [
  { name: "Sobre", path: "/about", icon: "" },
  { name: "Sonhos", path: "/dreams", icon: "" },
  { name: "Parceiros", path: "/partners", icon: "" },
  { name: "Contato", path: "/contact", icon: "" },
];
</script>

<template>
  <header class="">
    <div class="container-center h-24 p-4 w-full border-b">
      <NuxtImg src="logo.png" class="h-12 mr-a md:mr-0" alt="Logo" />
      <MenuMobile :pages="menu" />
    </div>
    <div class="">
      <nav>
        <menu class="hidden md:(flex justify-center gap-5 p-4)">
          <template v-for="item in menu" :key="item.name">
            <li class="container-center gap-6">
              <NuxtLink class="text-gray-4 font-thin uppercase">
                {{ item.name }}
              </NuxtLink>
              <span class="border-l h-3 hidden sm:inline" />
            </li>
          </template>
          <li>
            <NuxtLink class="font-thin uppercase btn-primary">
              Ajude Agora
            </NuxtLink>
          </li>
        </menu>
      </nav>
    </div>
  </header>
</template>
