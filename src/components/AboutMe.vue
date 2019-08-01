<template>
  <section class="space-top">
    <h1 class="font-thick section-header-text">About Me</h1>
    <p
      class="more-about-me section-text"
    >I build things for the web with pixel-perfect UIs and enjoy solving problems with JavaScript. I also share my knowledge about the web by writing articles. I enjoy listening to music and playing video games too.</p>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {};
  }
};
</script>

<style scoped>
section {
  margin-left: 5%;
  margin-right: 5%;
}
.more-about-me {
  text-align: left;
}
</style>
