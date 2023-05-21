<template>
  <div class="articles-grid">
    <div v-for="(article, _id) in products" :key="_id" class="article">
      <div class="article__body">
        <h2 class="article__title">
          <NuxtLink :to="`/posts/${article.id}`">{{ article.title }}</NuxtLink>
        </h2>
      </div>
    </div>
  </div>
</template>     

<script setup>
useHead({
  title: 'Заметки - MAXIM.AM',
  meta: [
    { name: 'description', content: 'My personal notes.' }
  ],
  bodyAttrs: {
    class: 'notes-page'
  },
})

// const { articles } = await useAsyncData(
//   "articles",
//   () => $fetch(`https://conduit.productionready.io/api/articles`),
//   {
//     transform: (articles) =>
//       articles.map((article) => ({
//         id: article.id,
//         author: article.author.username
//       })),
//   }
// );

const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>

<style>

</style>