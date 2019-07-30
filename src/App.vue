<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  }
};
</script>

<style>
::selection {
  background-color: var(--primary-brown);
}
:root {
  --primary-brown: #e3c4a8;
  --secondary-grey: #343434;
  --font-light: #666666;
  --font-thick: #4c4c4c;
  --bg-white: #ffffff;
  --mobile-breakpoint: 425px;
  --tab-breakpoint: 768px;
  --pc-breakpoint: 1024px;
}
* {
  box-sizing: border-box;
}
.font-light {
  color: var(--font-light);
}
.font-thick {
  color: var(--font-thick);
}
.font-display {
  font-family: 'Signika', sans-serif;
}
.font-brown {
  color: var(--primary-brown);
}
.space-right {
  margin-right: 5vw;
}
.space-left {
  margin-left: 5vw;
}
html,
body {
  height: 100vh;
}
body {
  font-family: 'Montserrat', 'Roboto', sans-serif;
  background: var(--bg-white);
  padding: 0;
  margin: 0;
}
@media screen and (max-width: 425px) {
  /* remove this later */
  #app {
    margin-bottom: 80px;
  }
}
</style>

