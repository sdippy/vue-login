import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import LoginForm from './components/LoginForm.vue'
import MainPage from './components/MainPage.vue'
import OrderPage from './components/OrderPage.vue'
import CategoryPage from './components/CategoryPage.vue'

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: LoginForm
    },
    {
      path: '/MainPage',
      name: 'MainPage',
      component: MainPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/OrderPage',
      name: 'OrderPage',
      component: OrderPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/CategoryPage',
      name: 'CategoryPage',
      component: CategoryPage,
      meta: {
        requiresAuth: true
      }
    }
  ],
  history: createWebHistory(),
  linkActiveClass: 'vue-active-link-shop'
})
//
router.beforeEach((to, from, next) => {
  const isAuthenticated = checkAuth() // Проверяем, авторизован ли пользователь

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Если маршрут требует авторизации и пользователь не авторизован, перенаправляем его на страницу входа
    if (!isAuthenticated) {
      next({
        path: '/'
        // query: { redirect: to.fullPath } // Сохраняем путь, на который пользователь пытался перейти
      })
    } else {
      next() // Продолжаем навигацию
    }
  } else {
    next() // Для маршрутов без требования авторизации продолжаем навигацию
  }
})

function checkAuth() {
  const isLoggedIn = localStorage.getItem('loggedIn')
  return isLoggedIn === 'true'
}

//

const app = createApp(App)

app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
