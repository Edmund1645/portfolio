<template>
  <div>
    <NavBar>
      <router-link to="/projects">Projects</router-link>
    </NavBar>
    <div class="container">
      <Profile></Profile>
      <AboutMe></AboutMe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Profile from '@/components/Profile.vue';
import AboutMe from '@/components/AboutMe.vue';
export default {
  name: 'home',
  components: {
    Profile,
    NavBar,
    AboutMe
  }
};
</script>
<style scoped>
</style>
