<template>
  <section>
    <div id="profile-img">
      <img src="../assets/images/profile-photo.png" alt="profile-photo" />
    </div>
    <div id="green-dot"></div>
    <div id="profile-text">
      <h1 class="font-thick intro-text" style="font-size:2.3rem; margin:0;">Hello 👋,</h1>
      <p class="font-light intro-text">
        I'm
        <strong class="font-thick intro-text">Edmund Ekott</strong> a front end developer based in Abuja, Nigeria.
      </p>
      <a
        v-bind:href="'https://drive.google.com/open?id=1WANf7HivvqbzO1rf_v9QcALyZ8QL-qe5'"
        target="_blank"
        class="download-button"
      >
        Résumé
        <img src="../assets/images/download-cloud.svg" alt="download icon" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  props: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
section {
  display: flex;
}
#green-dot {
  height: 500px;
  width: 700px;
  right: 0;
  position: absolute;
  z-index: -9;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAK0lEQVQoU2NkgALJZ3f+P5dSYYTxkWmwIEgBTBCbQrhOgiZhswLDuqGoCABjmQwKlZUmEQAAAABJRU5ErkJggg==)
    repeat;
  margin-bottom: 15px;
}
#profile-img {
  margin-right: 10px;
}
#profile-text {
  height: auto;
  margin-top: auto;
  text-align: right;
  margin-right: 30px;
  margin-left: auto;
  margin-bottom: 10px;
}
#profile-text p {
  padding-left: 1.2rem;
  margin-top: 0.5rem;
}
img[alt='profile-photo'] {
  width: 350px;
  box-shadow: 22px 22px 0 var(--primary-brown);
}
.download-button {
  padding: 0.7rem 1rem;
  margin-top: 10px;
  border-radius: 25px;
  border: none;
  background: var(--secondary-grey);
  color: white;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0px 9px 20px 0px rgba(52, 52, 52, 0.27);
  text-decoration: none;
  transition: translate 0.3s;
}
a.download-button:hover {
  transform: translateY(25px);
}
.download-button img {
  margin-left: 10px;
  vertical-align: middle;
}
.intro-text {
  font-size: 2rem;
}

/*media queries*/

/* Mobiles */
@media screen and (max-width: 425px) {
  section {
    flex-wrap: wrap;
  }
  img[alt='profile-photo'] {
    width: 230px;
  }
  #profile-text {
    margin-top: 2.3rem;
    margin-right: 5vw;
  }
  #profile-text p {
    margin-bottom: 2rem;
  }
  .intro-text {
    font-size: 1.4rem;
  }
  #green-dot {
    height: 600px;
  }
}
/* PC */
@media screen and (min-width: 1024px) {
  img[alt='profile-photo'] {
    margin-left: 50px;
  }
  #profile-text {
    padding-left: 2rem;
    margin-right: 9vw;
    margin-bottom: 4rem;
  }
  #green-dot {
    right: 4vw;
  }
}
</style>
