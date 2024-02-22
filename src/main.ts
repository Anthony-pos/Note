import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//引入element-plus样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/element.css'
//引入element-plus icon图标组件库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入主样式
import '@/styles/main.css'

const app = createApp(App)

app.use(ElementPlus)
//注册element-plus icons图标组件库
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)

app.mount('#app')
