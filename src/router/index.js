import { createRouter, createWebHashHistory } from 'vue-router'
import PrivateChat from '../views/PrivateChat.vue'

const routes = [
  {
    path: '/',
    name: 'PrivateChat',
    component: PrivateChat
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
