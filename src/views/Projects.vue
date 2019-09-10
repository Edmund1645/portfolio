<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <router-link to="/">&larr; Home</router-link>
      <h2>Uh oh, It seems this page hasn't been completely assembled yet..</h2>
      <img src="../assets/images/construction.svg" alt="illustration of construction workers" />

      <h3>
        In the meantime, you can check out my
        <a href="https://github.com/edmund1645" target="_blank">Github profile</a>
      </h3>
      <!-- 
      <ul>
        <li v-for="(item, index) in projects" v-bind:key="index">{{index}} - {{item}}</li>
      </ul>-->
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
export default {
  name: 'projects',
  components: {
    NavBar
  },
  data() {
    return {
      projects: ['Weatherli', 'Promo']
    };
  }
};
</script>

<style scoped>
a,
a:active,
a:visited {
  color: var(--font-light);
}
img {
  margin-top: 3rem;
  width: 250px;
  margin: auto;
  display: block;
}
@media screen and (min-width: 768px) {
  img {
    width: 400px;
    margin-top: 5rem;
  }
  h2,
  h3 {
    text-align: center;
  }
}
</style>
