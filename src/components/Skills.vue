<template>
  <section class="space-top green-dot">
    <div id="skills-tools-section">
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
    </div>
    <div id="work-section" class="space-top">
      <h1 class="section-header-text">Work Experience</h1>
      <!-- <div class="section-text" v-for="(experience,index) in workExperiences" :key="index">
        <h2>{{ experience.title }}</h2>
        <h3>{{ experience.role }}</h3>
        <a :href="experience.companyUrl">{{ expereince.company }}</a>
      </div>-->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: ['HTML', 'CSS', 'JavaScript', 'VueJs', 'Gridsome'],
      tools: ['Git', 'Netlify', 'Heroku', 'Figma'],
      workExperiences: [
        {
          title: 'Front-end Developer',
          role: 'Intern',
          company: 'Hotels.ng',
          companyUrl: 'https://hotels.ng',
          description: 'Build and scale real life applications, working alongside other developers and UI desiners in a team to deliver a fast, pixel-perfect front-end.',
          startMonth: 'April',
          startYear: 2019,
          endMonth: 'May',
          endYear: 2019
        },
        {
          title: 'Front-end Developer',
          role: 'Freelnacer',
          company: 'Upwork.com',
          companyUrl: 'https://upwork.com',
          description: 'Work with clients remotely to offer services and deliver on time before deadlines.',
          startMonth: 'January',
          startYear: 2018,
          endMonth: undefined,
          endYear: undefined
        }
      ]
    };
  }
};
</script>

<style scoped>
div#skills-tools-section {
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
}
ul {
  list-style-type: none;
}
div[id='tools-section'],
div[id='skills-section'] {
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
div[id='tools-section'],
div[id='skills-section'] {
  box-shadow: 0 20px 50px rgba(112, 111, 111, 0.7);
}
@media screen and (max-width: 425px) {
  div[id='tools-section'],
  div[id='skills-section'] {
    margin: auto;
    margin-bottom: 4rem;
  }
}
@media screen and (min-width: 768px) {
  section {
    padding-right: 5%;
    padding-left: 5%;
  }
  div#skills-tools-section {
    flex-direction: row;
    justify-content: space-around;
  }
  div[id='tools-section'],
  div[id='skills-section'] {
    padding-left: 3rem;
  }
}
</style>
