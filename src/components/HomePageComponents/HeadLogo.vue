<template>
  <div class="HeadClass">
    <router-link to="/Main" class="Logo font-family">
      <!-- <img alt="Vue logo" class="Vue-logo" src="../../assets/logo.png" /> -->
      <el-icon :size="32" class="ChromeFilled is-loading">
        <ChromeFilled />
      </el-icon>
      <span class="msg font-family-lager">{{ msg }}</span>
    </router-link>
    <div class="navbar font-family">
      <router-link to="/Html" class="link">HTML</router-link>
      <router-link to="/Css" class="link">CSS</router-link>
      <router-link to="/JavaScript" class="link">JavaScript</router-link>
      <router-link to="/jQuery" class="link">jQuery</router-link>
      <router-link to="/Ajax" class="link">Ajax</router-link>
      <router-link to="/Promise" class="link">Promise</router-link>
      <router-link to="/Git" class="link">Git</router-link>
      <router-link to="/Node" class="link">Node</router-link>
      <router-link to="/Webpack" class="link">Webpack</router-link>
      <router-link to="/Vue" class="link">Vue</router-link>
      <router-link to="/about" class="link">关于</router-link>
      <a class="link" target="_blank" href="https://github.com/Anthony-pos">GitHub
        <el-icon style="position: relative; top: 4px; right: 4px;">
          <TopRight />
        </el-icon>
      </a>
    </div>
  </div>
</template>
  
<script lang="ts" setup name="HeadLogo">
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
const msg = ref("AntyPos");
</script>
  
<style scoped>
a {
  text-decoration: none;
}

.HeadClass {
  display: flex;
  flex-wrap: nowrap;
  padding: 1.3em 3em 0 1em;
  margin: 0;
}

.Logo {
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
}

.Vue-logo {
  width: 2em;
}

.msg {
  display: flex;
  align-items: center;
  margin: auto 0.5em;
  padding: 0 0 0 0;
  text-decoration: none;
}

.navbar {
  display: flex;
  flex-wrap: nowrap;
  margin-left: auto;
  margin-right: 2em;
  align-items: center;
}

.link {
  display: block;
  padding: 0 12px;
  font-size: 1em;
  font-weight: 500;
  color: var(--vt-c-text-1);
  transition: color 0.25s;
  white-space: nowrap;
  text-decoration: none;
}

.link:hover {
  color: #42b883;
  cursor: pointer;
}
</style>