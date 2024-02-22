<template>
  <div class="HeadClass">
    <router-link to="/Main" class="Logo font-family">
      <el-icon :size="32" class="ChromeFilled is-loading">
        <ChromeFilled />
      </el-icon>
      <span class="msg font-family-lager">{{ msg }}</span>
    </router-link>
    <div class="navbar font-family">
      <router-link to="/Linux" class="link">Linux</router-link>
      <!-- 下拉框 -->
      <!-- element-plus此组件el-dropdown下拉菜单的样式不知如何设置，即使使用样式穿透也不行，不知道是bug还是有我不知道的方法 -->
      <el-dropdown @command="handleCommand" trigger="click" class="dropdown-list1">
        <el-button type="primary" class="font-family dropdown-list1">
          dataBase<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">Action 1</el-dropdown-item>
            <el-dropdown-item command="b">Action 2</el-dropdown-item>
            <el-dropdown-item command="c">Action 3</el-dropdown-item>
            <el-dropdown-item command="d">Action 4</el-dropdown-item>
            <el-dropdown-item command="e">Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- 下拉框 -->
      <router-link to="/database" class="link">dataBase</router-link>
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
import { ElMessage } from 'element-plus';
import { ArrowDown } from '@element-plus/icons-vue'
import '../../styles/element.css'

const msg = ref("AntyPos");
const handleCommand = (command: string | number | object) => {
  ElMessage(`click on item ${command}`)
}
</script>
  
<style lang="scss" scoped>
/* element-plus下拉框组件样式的修改 */
// ::v-deep .el-scrollbar .el-popper .s-pure .is-light .el-dropdown__popper{
//   color: red($color: #ff0000);
// }
.dropdown-list1 {
  background-color: transparent;
  border: transparent;
  transition: color 0.25s;
  font-size: 1em;
}

.dropdown-list1 :hover {
  background-color: transparent;
  border: transparent;
  color: #42b883;
  cursor: pointer;
}

button:active,
button:focus {
  text-decoration: underline;
  background-color: transparent;
  color: white;
}

/* -------------------------------------- */

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
  color: var(--vt-c-text-1);
  transition: color 0.25s;
  white-space: nowrap;
}

.link:hover {
  color: #42b883;
  cursor: pointer;
}
</style>