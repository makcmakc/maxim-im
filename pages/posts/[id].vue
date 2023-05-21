<template>
  <div>


    <h3>{{ product.title}}</h3> - Post № {{ id }}

    <div>
      <span>{{ product.category }}</span> - <span>{{ product.price }}</span>
    </div>
    <div>
      <span>{{ product.rating.rate }}</span> / <span>{{ product.rating.count }}</span>
    </div>

    <div style="width: 100%; height: 300px">
      <img :src="product.image" alt="">
    </div>

    <br>

    <p>{{ product.description }}</p>

  </div>
</template>

<script setup>
const { id } = useRoute().params

const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri, { key: id })

</script>

<style>

</style>