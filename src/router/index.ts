import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/HomePageComponents/MainComponent.vue'
import Linux from '@/components/DocComponents/LinuxComponent.vue'
import Promise from '@/components/DocComponents/PromiseComponent.vue'
import Git from '@/components/DocComponents/GitCompoonent.vue'
import Node from '@/components/DocComponents/NodeComponent.vue'
import Webpack from '@/components/DocComponents/WebpackComponent.vue'
import Vue from '@/components/DocComponents/VueComponent.vue'
import about from '@/components/AboutComponent/AboutComponent.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/Main', component: Main },
    { path: '/Linux', component: Linux },
    { path: '/Promise', component: Promise },
    { path: '/Git', component: Git },
    { path: '/Node', component: Node },
    { path: '/Webpack', component: Webpack },
    { path: '/Vue', component: Vue },
    { path: '/about', component: about },
    { path: '/', redirect: '/Main' }

  ]
})

export default router