<template>
  <section>
    <nav id="main-nav">
      <h1 id="title" class="font-thick font-display">{{title}}</h1>
      <slot></slot>
    </nav>

    <nav id="nav-mobile">
      <a href="#" v-scroll-to="'#about-me-text'">
        <img src="../assets/images/user.svg" alt="user icon" />
      </a>
      <a href="#" v-scroll-to="'#skills-tools-section'">
        <img src="../assets/images/briefcase.svg" alt="briefcase icon" />
      </a>
      <a href="#" v-scroll-to="'#contact-section'">
        <img src="../assets/images/phone.svg" alt="phone svg" />
      </a>
      <a href="#" v-scroll-to="'#main-nav'">
        <img src="../assets/images/arrow-up.svg" alt="arrow pointing upwards" />
      </a>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      title: '> Edmund Ekott _'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav#main-nav {
  width: 100%;
  max-width: 100%;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.082);
  margin-bottom: 2rem;
}
nav #title {
  font-size: 1.2rem;
  margin: 0;
  text-align: center;
  padding: 0.7rem 0;
}
#nav-mobile {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-around;
  position: fixed;
  z-index: 1000;
  width: 100%;
  max-width: 100%;
  background: var(--bg-white);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.082);
  height: 50px;
  max-height: 50px;
  bottom: 0;
}
@media screen and (max-width: 426px) {
}
@media screen and (min-width: 768px) {
  nav #title {
    font-size: 1.6rem;
  }
}
@media screen and (min-width: 1024px) {
  #nav-mobile {
    padding: 0;
    flex-direction: column;
    width: fit-content;
    height: 200px;
    top: 60vh;
    right: 1vw;
    background: none;
    box-shadow: none;
    max-height: none;
    justify-content: space-between;
  }
  #nav-mobile a {
    padding: 0.5rem;
    box-shadow: 0 20px 50px rgba(177, 177, 177, 0.7);
    background: #ffffff;
    border-radius: 50%;
  }
  #nav-mobile a img {
    vertical-align: middle;
  }
}
@media screen and (min-width: 1440px) {
  #nav-mobile {
    top: 40vh;
    right: 1vw;
  }
}
@media screen and (min-width: 2560px) {
  #nav-mobile {
    top: 20vh;
    right: 20vw;
  }
}
</style>
