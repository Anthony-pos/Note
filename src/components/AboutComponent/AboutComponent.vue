<template>
about
</template>

<script lang="ts" setup>
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
}
p {
  max-width: 80%;
  text-indent: 2em;
  flex-wrap: wrap;
}
.container {
  height: 100%;
  min-width: 400px;
  display: flex;
  flex-direction: row;
}
.container > div {
  height: 100%;
  text-align: center;
  line-height: 100%;
}
.title {
  margin-top: 2em;
  margin-bottom: 1em;
  width: 80%;
  text-align: center;
  font-size: 38px;
}
.left {
  order: 1;
  flex: 16% 0 0;
  background: #ffcc00;
}
.middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  order: 2;
  flex: auto 1 0;
  max-width: 68%;
  background: #ffffff;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.right {
  order: 3;
  flex: 16% 0 0;
  background: pink;
}
</style>