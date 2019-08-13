<template>
  <footer class="space-top" id="contact-container">
    <section id="contact-section">
      <h1 class="first-header-text">LET'S BUILD SOMETHING</h1>
      <h1 class="section-header-text font-display second-header-text">AWESOME!</h1>
      <Section id="form-section">
        <p>Kindly fill the form and I will get back to you as soon as possible</p>
        <div id="form">
          <img src="../assets/images/contact avatar.svg" alt="illustration of a person" />
          <form action>
            <div class="form-input-field">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" size="25" />
            </div>
            <div class="form-input-field">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" size="26" />
            </div>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </form>
        </div>
      </Section>
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
.second-header-text {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
#form div {
  margin-bottom: 1rem;
}
#form img {
  vertical-align: middle;
  width: 120px;
  margin-bottom: 1rem;
}

#form-section #form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#form form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-input-field {
  height: 35px;
  max-height: 35px;
  overflow: hidden;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
}
.form-input-field label {
  color: var(--secondary-grey);
  background: var(--primary-brown);
  height: 100%;
  padding: 1rem 0.6rem;
}
.form-input-field input {
  border: none;
  padding: 0.4rem;
  font-size: 0.9rem;
  height: 100%;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
@media screen and (max-width: 425px) {
  footer#contact-container {
    /* border-top-right-radius: 2rem;
    border-top-left-radius: 2rem; */
    padding-top: 2rem;
  }
  .first-header-text {
    font-size: 1.5rem;
    margin: 0;
  }
  .second-header-text {
    margin-top: 0;
    font-size: 3rem;
  }
  #form-section p {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  #form-section {
    display: flex;
    justify-content: space-between;
  }
  #form-section p {
    font-size: 2rem;
    text-align: left;
    flex-basis: 40%;
    align-self: center;
  }
  #form-section #form {
    flex-basis: 45%;
  }
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
