<script lang="ts" setup>
  defineProps<{
    pages: {
      name: string;
      path: string;
      icon: string;
    }[];
  }>();
</script>

<template>
  <nav class="hidden lg:block">
    <menu class="flex gap-2 text-blue">
      <li v-for="page in pages" :key="page.name">
        <NuxtLink :to="page.path" class="gap-2 btn hover:bg-blue-5/3">
          <div :class="page.icon"></div>
          <span class="uppercase text-sm" v-text="page.name" />
        </NuxtLink>
      </li>
    </menu>
  </nav>
</template>
