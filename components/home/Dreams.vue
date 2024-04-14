<script setup lang="ts">
const dreams = [
  {
    name: "Sheila",
    idade: 50,
    dream: "Passeio de moto Harley Davidson",
    img: "https://fakeimg.pl/600x400/454545/e8e8e8?font=bebas",
    date: "18 DE MAIO DE 2021",
    description:
      "O sonho de Sheila fala sobre liberdade. Muitos dos sonhadores que passam por aqui são verdadeiros heróis que desejam com simplicidade se sentirem livres.",
  },
  {
    name: "Isaack",
    idade: 14,
    dream: "Transplante de rins",
    img: "https://fakeimg.pl/600x400/454545/e8e8e8?font=bebas",
    date: "19 DE ABRIL DE 2021",
    description:
      "O Sonho do menino Isaack tem um significado ainda mais especial. Nessa linda missão que o Instituto ROPE abraçou, vivenciamos mais que um desejo de menino.",
  },
  {
    name: "Lucia",
    idade: null,
    img: "https://fakeimg.pl/600x400/454545/e8e8e8?font=bebas",
    dream: "Rede D’or São Luiz",
    date: "08 DE ABRIL DE 2021",
    description:
      "Essa história é sobre o primeiro sonho realizado pelo Instituto ROPE em São Paulo. Lucia Amar, nossa sonhadora da vez, não poderia imaginar que sua filha encontraria.",
  },
];
</script>

<template>
  <NuxtLayout name="section">
    <template #title> Sonhos </template>
    <template #subtitle> Realizados </template>
    <template #content>
      <ul class="grid md:grid-cols-3 gap-4">
        <li v-for="dream in dreams" :key="dream.name">
          <CardBlog
            :name="dream.name"
            :dream="dream.dream"
            :img="dream.img"
            :date="dream.date"
            :description="dream.description"
          />
        </li>
      </ul>
    </template>
  </NuxtLayout>
</template>
