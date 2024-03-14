import { createRouter, createWebHashHistory } from 'vue-router'

import LoginForm from './components/LoginForm.vue'
import MenuForm from './components/MenuForm.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    // { path: '/', component: LoginForm },
    { path: '/Menu', component: MenuForm }
  ]
})
