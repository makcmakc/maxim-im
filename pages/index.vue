<template>
  <div class="articles-grid">
    <article class="article">
      <div class="article__img">
        <img src="@/assets/0.jpg" alt="">
      </div>
      <div class="article__body">
        <div class="article__category">
          <i class="article__category-dot article__category-dot--news"></i>
          <span class="article__category-text">Работа</span>
        </div>
        <h2 class="article__title">
          <a href="#">История о том, как наш новый тимлид нифига не зная стал тимлидом</a>
        </h2>
        <p class="article__desc">
          В этой статье я расскажу про боль, с которой я столкнулся за последние несколько дней. История о том, как в на...
        </p>
      </div>      
    </article>

    <article class="article">
      <div class="article__img">
        <img src="@/assets/1.jpg" alt="">
      </div>
      <div class="article__body">
        <div class="article__category">
          <i class="article__category-dot article__category-dot--javascript"></i>
          <span class="article__category-text">JavaScript</span>
        </div>
        <h2 class="article__title">
          Как с помощью Dadata определить город по IP?
        </h2>
        <p class="article__desc">
          Делюсь информацией о том, как определить местоположение по IP
        </p>
      </div>
    </article>

    <article class="article">
      <div class="article__img">
        <img src="@/assets/2.png" alt="">
      </div>
      <div class="article__body">
        <div class="article__category">
          <i class="article__category-dot article__category-dot--notes"></i>
          <span class="article__category-text">Заметки</span>
        </div>
        <h2 class="article__title">
          О том, какая крыса метод sort()
        </h2>
        <p class="article__desc">
          Заметку пишу для того, чтобы вы знали, что метод `sort()` - крыса! Может заголовок вам покажется грубым, но ду...
        </p>
      </div>
    </article>
  </div>
</template>


<script setup>
useHead({
  title: "Главная - MAXIM.AM",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "home-page",
  },
  // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
});
// export default {
//     // async asyncData ({params, error}) {
//     //   try {
//     //     const {data: {Articles}} = await axios.get('/api/articleList/0');
//     //     return {
//     //       articleList: Articles,
//     //       page: 0,
//     //       lastpage: true,
//     //       fadetitle: true,
//     //       ScrollFirst: true,
//     //       scrolltip: true,
//     //       scrollload: true,
//     //       scrollloadlast: false,
//     //     };
//     //   } catch (err) {
//     //     error({ statusCode: 404})
//     //   }
//     // },
// }
</script>


<style lang="scss">
.articles-grid {
  column-count: 2;
  gap: 20px;
}

.article {
  box-sizing: border-box;
  position: relative;
  border: 1px solid #f4f3f3;
  border-radius: 15px;
  transition: border 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
  transform 0.15s ease-in-out;
  background-color: #fff;

  height: max-content;
  width: 100%;
  display: inline-block;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 50px 50px -20px rgba(50,50,93,.03),0 30px 10px -30px rgba(0,0,0,.06);
  }

  &__info {
    position: absolute;

  }

  &__img {
    width: 100%;
    min-height: 250px;
    background: #EDD950;
    height: 50%;
    border-radius: 15px 15px 0 0;
    

    img {
      width: 100%;
      height: 100%;
      border-radius: 15px 15px 0 0;
    }
  }

  &__body {
    padding: 25px 30px 30px;
  }

  &__category {
    display: flex;
    align-items: center;

    &-dot {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 10px;

      &--javascript {
        background-color: #EDD950;
      }

      &--news {
        background-color: #21de5a;
      }

      &--vue {
        background-color: #3fb984;
      }

      &--tips {
        background-color: #8472D6;
      }

      &--notes {
        background-color: #3a83ab;
      }
    }

    &-text {}
  }

  &__title {
    font-weight: 800;
    font-size: 25px;
    margin-top: 15px;
    margin-bottom: 10px;
    line-height: 34px;
    color: #000;    

    &:hover {
      // text-decoration: underline;
      // color: #21de5a;
    }
  }

  &__desc {
    margin: 0;
    font-family: Inter,system-ui,Helvetica Neue,Helvetica,sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #000;
  }

  &--bg {
    height: 350px;
    width: 100%;
    display: flex;
    flex-direction: row;

    .article__img {
      height: 100%;
      width: 50%;
      border-radius: 15px 0 0 15px;

      img {
        height: 100%;
        width: 100%;
        border-radius: 15px 0 0 15px;
      }
    }

    .article__body {
      width: 50%;
      justify-content: center;
      display: flex;
      flex-direction: column;
      padding: 0 40px;
    }
  }
}

.animate {
  display: inline-block;
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  animation: animateIn 0.6s cubic-bezier(0.25, 0.75, 0.5, 1.25) forwards;
  animation-iteration-count: 1;
}

@keyframes animateIn {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
}
</style>