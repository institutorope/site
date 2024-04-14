<template>
  <section class="w-full md:w-screen-xl">
    <div class="mb-8">
      <h2 v-if="$slots.title" class="text-2xl text-gray-5"><slot name="title" /></h2>
      <h3 v-if="$slots.subtitle" class="text-4xl font-bold uppercase text-gray-6">
        <slot name="subtitle" />
      </h3>
    </div>
    <div v-if="$slots.content"><slot name="content" /></div>
  </section>
</template>