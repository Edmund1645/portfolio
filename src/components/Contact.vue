<template>
  <footer class="space-top" id="contact-container">
    <section id="contact-section">
      <h1 class="first-header-text">LET'S BUILD SOMETHING</h1>
      <h1 class="section-header-text font-display second-header-text">AWESOME!</h1>
      <Section id="form-section">
        <p>Kindly fill the form and I will get back to you as soon as possible</p>
        <div id="form">
          <img src="../assets/images/contact avatar.svg" alt="illustration of a person" />
          <form method="Post" name="contact" netlify>
            <div class="form-input-field">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" size="25" required />
            </div>
            <div class="form-input-field">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" size="25" required />
            </div>
            <textarea
              name="message"
              id="message"
              cols="28"
              rows="10"
              placeholder="Type message here..."
              required
            ></textarea>
            <button type="submit">
              Submit
              <img
                src="../assets/images/send.svg"
                alt="icon for sending message"
                id="send-icon"
              />
            </button>
          </form>
        </div>
      </Section>
      <div id="social-media-section">
        <a href="https://github.com/edmund1645" target="_blank">
          <img src="../assets/images/github (1).svg" alt="logo of github" />
        </a>
        <a href="https://twitter.com/26th_edmund" target="_blank">
          <img src="../assets/images/002-twitter.svg" alt="logo of twitter" />
        </a>
        <a href="https://linkedin.com/in/edmund-ekott-b03176165" target="_blank">
          <img src="../assets/images/003-linkedin.svg" alt="logo of linked in" />
        </a>
      </div>
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
.form-input-field:nth-of-type(2) label {
  padding-right: 0.75rem;
}
.form-input-field input {
  border: none;
  padding: 0.4rem;
  font-size: 0.9rem;
  height: 100%;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  color: var(--secondary-grey);
}
textarea {
  resize: none;
  border-radius: 7px;
  padding: 0.7rem;
  color: var(--secondary-grey);
}
button {
  margin-top: 1rem;
  border: none;
  cursor: pointer;
  background: var(--primary-brown);
  color: var(--secondary-grey);
  font-size: 1.2rem;
  padding: 0.65rem 0.9rem;
  border-radius: 3rem;
}
button[type='submit'] > img#send-icon {
  width: initial;
  vertical-align: middle;
  margin: 0;
}
#social-media-section img {
  width: 40px;
  border-radius: 50%;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.425);
}
#social-media-section {
  width: 300px;
  display: flex;
  justify-content: space-around;
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
  #social-media-section {
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
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
