<template>
  <h1>Posts Lists will be here</h1>
</template>


<script>

export default{
    async asyncData ({params, error}) {
      try {
        const {data: {Articles}} = await axios.get('/api/articleList/0');
        return {
          articleList: Articles,
          page: 0,
          lastpage: true,
          fadetitle: true,
          ScrollFirst: true,
          scrolltip: true,
          scrollload: true,
          scrollloadlast: false,
        };
      } catch (err) {
        error({ statusCode: 404})
      }
    },
}
</script>


<style scoped>

</style>