<script setup lang="ts">
const info = [
  {
    title: "Como Ajudar",
    description:
      "O Instituto Rope conta com uma rede de voluntários, parceiros e doações para realizar todos os sonhos de nossos sonhadores. Você pode colaborar conosco e fazer parte deste time de várias maneiras",
    button: "Realizar",
  },
  {
    title: "realize um sonho",
    description:
      "Você pode adotar um sonho específico e nos ajudar com seu trabalho, algum serviço ou mesmo com ajuda financeira. Clique no botão e veja quais sonhos temos em andamento neste momento. Um deles pode fisgar seu coração !",
    button: ["Seja Voluntário", "Fazer doação"],
  },
  {
    title: "indique um sonho",
    description:
      "Você também pode indicar um sonhador. Queremos mais sorrisos! Queremos realizar o desejo dessas pessoas que tem suas vidas ameaçadas por doenças graves. Entre em contato conosco! Nossa equipe mirabolante fará o possível para que aconteça mais um momento mágico!",
    button: "Indicar",
  },
];
</script>

<template>
  <ul class="grid lg:grid-cols-3 items-center relative -top-9 text-center">
    <div class="text-white bg-violet-4 h-56">
      <h2 v-text="info[0].title" />
      <p v-text="info[0].description" />
    </div>

    <div class="text-gray-5 bg-white rounded h-72">
      <div class="i-ph:hand-heart text-7xl mx-a" />
      <h2 v-text="info[1].title" />
      <p v-text="info[1].description" />
    </div>

    <div class="text-white bg-amber-4 h-56">
      <h2 v-text="info[2].title" />
      <p v-text="info[2].description" />
    </div>
  </ul>
</template>

<style scoped>
ul > div {
  @apply p-4 space-y-2;
}

ul > div > h2 {
  @apply uppercase text-2xl font-bold;
}
</style>
