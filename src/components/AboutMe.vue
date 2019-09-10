<template>
  <section id="about-me" class="space-top">
    <div id="about-me-text" class="about-me-text">
      <h1 class="font-thick section-header-text">About Me</h1>
      <p class="more-about-me section-text">
        I build things for the web with pixel-perfect UIs and enjoy solving problems with JavaScript. I also write articles about the web on
        <a class="blog-link" href="https://theninja.codes" target="_blank"> <em>The Ninja Blog</em> </a>, and I enjoy listening to rap and alternative music, playing video games
        too. On the weekends when I'm not swamped on a project I play basketball at my local court.
      </p>
    </div>
    <div class="svg-image-section">
      <img src="../assets/images/coding.svg" alt="illustration of a coder" />
    </div>
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
.blog-link {
  color: inherit;
}
section {
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: space-between;
}
.more-about-me {
  text-align: left;
}
@media screen and (max-width: 425px) {
  .svg-image-section {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .svg-image-section {
    margin-top: auto;
    padding-left: 3rem;
  }
  .svg-image-section img {
    width: 200px;
  }
}
@media screen and (min-width: 1024px) {
  .about-me-text {
    padding-right: 7rem;
  }
  .svg-image-section img {
    width: 250px;
  }
  .svg-image-section {
    margin-top: auto;
  }
}
</style>
