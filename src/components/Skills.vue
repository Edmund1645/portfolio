<template>
  <section id="skills-tools-section" class="space-top green-dot">
    <div id="skills-section">
      <h2>Skills</h2>
      <ul>
        <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
      </ul>
    </div>
    <div id="tools-section">
      <h2>Tools</h2>
      <ul>
        <li v-for="(tool, index) in tools" :key="index">{{ tool }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: ['HTML', 'CSS', 'JavaScript', 'VueJs', 'Gridsome'],
      tools: ['Git', 'Netlify', 'Heroku', 'Figma']
    };
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 3rem; /* remove this later */
}
ul {
  list-style-type: none;
}
div {
  width: 250px;
  height: 250px;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  justify-content: center;
}
div#skills-section {
  background: var(--primary-brown);
  color: var(--secondary-grey);
}
div#tools-section {
  background: var(--secondary-grey);
  color: var(--primary-brown);
}
@media screen and (max-width: 425px) {
  div {
    margin: auto;
    margin-bottom: 2rem;
  }
}
@media screen and (min-width: 768px) {
  section {
    flex-direction: row;
    justify-content: space-around;
    margin-right: 5%;
    margin-left: 5%;
  }
  div {
    padding-left: 3rem;
  }
}
</style>
