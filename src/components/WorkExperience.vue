<template>
  <section>
    <h2>{{ work.title }}</h2>
    <h3>{{ work.role }}</h3>
    <a :href="work.companyUrl" target="_blank">{{ work.company }}</a>
    <p>
      <em>
        <time
          :datetime="`${ work.startYear }-${ work.startMonth.number }`"
        >{{ work.startMonth.word }} {{ work.startYear }}</time>
        -
        <time>{{ work.endMonth.word }} {{ work.endYear }}</time>
      </em>
    </p>
    <p>{{ work.description }}</p>
  </section>
</template>

<script>
export default {
  name: 'WorkExperience',
  data() {
    return {};
  },
  props: {
    work: Object
  }
};
</script>

<style scoped>
section {
  background: #ffffff;
  padding: 2rem 1em;
  margin-bottom: 3rem;
  border-radius: 2rem;
  box-shadow: 0 20px 50px rgba(224, 224, 224, 0.7);
  border: none;
}
a {
  color: var(--font-light);
}

@media screen and (max-width: 425px) {
  section {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
