<script setup lang="ts">
defineProps<{
  pages: {
    name: string;
    path: string;
    icon: string;
  }[];
}>();
const menuIsOpen = ref(false);

const handleClick = () => {
  menuIsOpen.value = !menuIsOpen.value;
  document.body.style.overflow = menuIsOpen.value ? "hidden" : "auto";
};

const navigateTo = () => {
  document.body.style.overflow = "auto";
  menuIsOpen.value = false;
};
</script>

<template>
  <button
    class="md:hidden btn-secondary p-2 rounded container-center gap-2"
    @click="handleClick"
  >
    <span class="text-white">menu</span>
    <div :class="menuIsOpen ? 'i-carbon-close' : 'i-carbon-menu'" />
  </button>

  <div
    class="fixed inset-0 z-20 bg-gray-900/60 block"
    v-on:click="handleClick"
    v-show="menuIsOpen"
  />

  <nav
    class="fixed inset-0 z-50 bg-gray-1 transition-transform duration-300 rounded-t overflow-hidden"
    :class="menuIsOpen ? 'translate-y-40vh' : 'translate-y-100vh'"
  >
    <header class="p-4 bg-violet-3 text-white flex justify-between items-center">
      <div class="text-2xl font-bold">Menu</div>
      <button
        class="btn-neutral p-2 rounded container-center gap-2"
        @click="handleClick"
      >
        <span class="text-white">fechar</span>
        <div class="i-carbon-close" />
      </button>
    </header>

    <menu class="space-y-2 p-4">
      <li v-for="page in pages">
        <NuxtLink
          :to="page.path"
          :key="page.name"
          class="border border-violet-3 text-violet p-2 block rounded"
          @click="navigateTo(page.path)"
        >
         
          <span v-text="page.name" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="border border-amber-6 text-amber-6 p-2 block rounded"
          @click="navigateTo"
        >
          Ajude-nos
        </NuxtLink>
      </li>
    </menu>
  </nav>
</template>
