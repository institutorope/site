<script lang="ts" setup>
defineProps<{
  name: string;
  dream: string;
  img: string;
  date: string;
  description: string;
}>();
</script>

<template>
  <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
    <NuxtImg
      :src="img"
      class="h-56 w-full object-cover"
      alt="Imagem do sonho"
    />
    <div class="bg-white p-4 sm:p-6">
      <time
        class="block text-xs text-gray-500"
        :datetime="date"
        v-text="date"
      />
      <NuxtLink to="#">
        <h3
          class="mt-0.5 text-lg text-gray-900"
          v-text="`${name} - ${dream}`"
        />
      </NuxtLink>

      <p
        class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500"
        v-text="description"
      />
    </div>
  </article>
</template>
