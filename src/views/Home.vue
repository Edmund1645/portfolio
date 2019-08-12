<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
      <Profile></Profile>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  </div>
</template>

<script>
import locomotiveScroll from 'locomotive-scroll';
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import Profile from '@/components/Profile.vue';
import AboutMe from '@/components/AboutMe.vue';
import Skills from '@/components/Skills.vue';
import Contact from '@/components/Contact.vue';
export default {
  name: 'home',
  components: {
    Profile,
    NavBar,
    AboutMe,
    Skills,
    Contact
  },
  methods: {
    initScroll() {
      this.scroll = new locomotiveScroll({
        smooth: true,
        smoothMobile: true
      });
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.initScroll();
    });
  }
};
</script>
<style scoped>
</style>
