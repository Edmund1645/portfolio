<template>
  <section>
    <div id="profile-img">
      <img src="https://res.cloudinary.com/kiing/image/upload/v1575509048/IMG_8692_1_sg2vlj.jpg" alt="profile-photo" />
    </div>
    <div class="green-dot"></div>
    <div id="profile-text">
      <h1 class="font-thick intro-text" style="font-size:2.3rem; margin:0;">Hello 👋,</h1>
      <p class="intro-text">
        I'm
        <strong class="font-thick intro-text">Edmund Ekott</strong> a front end engineer currently living in Uyo, Nigeria.
      </p>
      <div class="download-resume-section">
        <a href="./pdf/edmund-ekott-resume.pdf" target="_blank" class="download-button">
          Résumé
          <img src="../assets/images/download-cloud.svg" alt="download icon" />
        </a>
      </div>
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
.green-dot {
  height: 500px;
  width: 700px;
  right: 0;
  position: absolute;
  z-index: -9;
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
  transition: box-shadow 0.2s;
  transition-delay: 0.01;
}

.download-button img {
  margin-left: 10px;
  vertical-align: middle;
}
.download-resume-section {
  width: fit-content;
  margin-left: auto;
  transition: transform 0.2s;
  transition-delay: 0.01s;
}
.download-resume-section:hover {
  transform: translateY(-3px);
}
.download-resume-section:hover a.download-button {
  box-shadow: 0px 11px 22px 0px rgba(52, 52, 52, 0.27);
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
  .download-resume-section {
    width: fit-content;
    margin: auto;
    margin-top: 7px;
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
  .green-dot {
    height: 550px;
  }
}
/* PC */
@media screen and (min-width: 1024px) {
  img[alt='profile-photo'] {
    width: 450px;
  }
  #profile-text {
    padding-left: 2rem;
    margin-bottom: 4rem;
  }
  .green-dot {
    right: 4vw;
  }
}
/* large PC */
@media screen and (min-width: 1440px) {
  .green-dot {
    right: 4vw;
  }
}
@media screen and (min-width: 2560px) {
  .green-dot {
    right: 23vw;
  }
}
</style>
