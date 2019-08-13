<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <router-link to="/">Home</router-link>
      <h1>These are just dummy projects</h1>
      <ul>
        <li v-for="(item, index) in projects" v-bind:key="index">{{index}} - {{item}}</li>
      </ul>
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

<style>
</style>
