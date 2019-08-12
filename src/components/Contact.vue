<template>
  <footer class="space-top" id="contact-container">
    <section id="contact-section">
      <h1 class="first-header-text">LET'S BUILD SOMETHING</h1>
      <h1 class="section-header-text font-display second-header-text">AWESOME!</h1>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {};
  }
};
</script>

<style scoped>
footer#contact-container {
  background: var(--secondary-grey);
  padding-bottom: 6rem;
  padding-top: 3rem;
}
section#contact-section {
  color: var(--primary-brown);
  margin-right: 5vw;
  margin-left: 5vw;
}
.first-header-text {
  font-size: 2rem;
}
@media screen and (min-width: 1024px) {
  .first-header-text {
    font-size: 3rem;
  }
  .second-header-text {
    font-size: 4.5rem;
  }
}
@media screen and (min-width: 1440px) {
  section#contact-section {
    width: 1300px;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
