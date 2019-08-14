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
  background-color: var(--selection-color);
}
:root {
  --selection-color: #f162a5;
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
.space-top {
  margin-top: 7rem;
}
.section-header-text {
  font-size: 3rem;
}
.section-text {
  font-size: 1.4rem;
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
  color: var(--font-light);
}
#app {
  margin: 0;
}
.green-dot {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAK0lEQVQoU2NkgALJZ3f+P5dSYYTxkWmwIEgBTBCbQrhOgiZhswLDuqGoCABjmQwKlZUmEQAAAABJRU5ErkJggg==)
    repeat;
}
.container {
  margin-right: 5vw;
  margin-left: 5vw;
}
@media screen and (max-width: 425px) {
  /* remove this later */
  .space-top {
    margin-top: 4.5rem;
  }
  .section-header-text {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
}
@media screen and (min-width: 1024px) {
  .container {
    margin-right: 5vw;
    margin-left: 5vw;
  }
}
@media screen and (min-width: 1440px) {
  .container {
    width: 1300px;
    max-width: 1300px;
    margin: auto;
  }
}
</style>

