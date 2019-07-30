<template>
  <div>
    <NavBar>
      <router-link to="/projects">Projects</router-link>
    </NavBar>
    <div class="container">
      <Profile></Profile>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Profile from '@/components/Profile.vue';
export default {
  name: 'home',
  components: {
    Profile,
    NavBar
  }
};
</script>
<style scoped>
@media screen and (min-width: 1440px) {
  .container {
    width: 1024px;
    max-width: 1024px;
    margin: auto;
  }
}
</style>
