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
    <section class="projects-section">
      <router-link to="/projects">
        View projects
        <img src="../assets/images/arrow-right.svg" alt="arrow pointing right" />
      </router-link>
    </section>
    <section id="work-section" class="space-top">
      <h1 class="section-header-text">Work Experience</h1>
      <div v-for="(work, index) in workExperiences" :key="index">
        <WorkExperience :work="work"></WorkExperience>
      </div>
    </section>
  </section>
</template>

<script>
import WorkExperience from './WorkExperience';
export default {
  name: 'Skills',
  components: {
    WorkExperience
  },
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
          startMonth: {
            word: 'April',
            number: '04'
          },
          startYear: 2019,
          endMonth: {
            word: 'May',
            number: '05'
          },
          endYear: 2019
        },
        {
          title: 'Front-end Developer',
          role: 'Freelancer',
          company: 'Upwork.com',
          companyUrl: 'https://upwork.com',
          description: 'Work with clients remotely to offer services and deliver on time before deadlines.',
          startMonth: {
            word: 'January',
            number: '01'
          },
          startYear: 2018,
          endMonth: 'Present',
          endYear: 'Present'
        }
      ]
    };
  }
};
</script>

<style scoped>
section.space-top {
  padding-bottom: 1rem;
}
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
  box-shadow: 0 20px 50px rgba(177, 177, 177, 0.7);
}
.projects-section {
  margin-top: 3rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
.projects-section a {
  color: #ffffff;
  display: inline-block;
  padding: 0.6rem 0.75rem;
  text-decoration: none;
  background: var(--secondary-grey);
  box-shadow: 0 20px 50px rgba(177, 177, 177, 0.7);
  border-radius: 3rem;
  transition: transform 0.2s;
  transition-delay: 0.01s;
}
.projects-section a:hover {
  transform: translateY(-3px);
}
.projects-section img {
  vertical-align: middle;
}
@media screen and (max-width: 425px) {
  div[id='tools-section'],
  div[id='skills-section'] {
    margin: auto;
    margin-bottom: 4rem;
  }
  section#work-section {
    padding-right: 5%;
    padding-left: 5%;
  }
  .projects-section {
    margin-top: 0;
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
