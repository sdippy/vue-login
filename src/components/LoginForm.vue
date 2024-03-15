<script>
import axios from 'axios'

export default {
  data() {
    return {
      API_URL: 'https://84e8b5a8c2bf2b88.mokky.dev',
      user: null,
      login: '',
      password: '',
      isLoading: false,
      error: null
    }
  },
  methods: {
    async auth() {
      // Проверка заполнены ли поля логина и пароля
      if (!this.login || !this.password) {
        this.error = 'Пожалуйста заполните все поля'
        return
      }
      this.isLoading = true

      try {
        const response = await axios.get(
          `${this.API_URL}/users?Login=${this.login}&Password=${this.password}`,
          { headers: { 'Content-Type': 'application/json' } }
        )

        // Предполагаем, что сервер возвращает массив пользователей
        const foundUser = response.data.find(
          (user) => user.Login === this.login && user.Password === this.password
        )

        if (foundUser) {
          // Сохраняем информацию о том, что пользователь авторизован
          localStorage.setItem('loggedIn', true)
          this.user = foundUser
          this.error = null // Очищаем предыдущие ошибки
          // Переходим к другому маршруту (или приложению)
          this.$router.push({ name: 'MainPage' })
        } else {
          this.error = 'Неправильный логин или пароль! Попробуйте еще раз'
        }

        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        this.error = 'Ошибка аутентификации. Пожалуйста, попробуйте позже.'
        console.error(error)
      }
    },
    checkAuth() {
      // Проверяем, сохранен ли флаг авторизации в локальном хранилище
      const loggedIn = localStorage.getItem('loggedIn')

      // Возвращаем true, если флаг авторизации существует и имеет значение true
      return !!loggedIn
    }
  },
  created() {
    // Проверяем авторизацию при создании компонента
    if (this.checkAuth()) {
      // Если пользователь авторизован, перенаправляем его на главную страницу
      this.$router.push({ name: 'MainPage' })
    }
  }
}
</script>

<template>
  <div class="authform h-svh flex">
    <div class="form m-auto">
      <div v-if="!user" class="h-full flex">
        <div class="login-form m-auto text-center">
          <input id="Login" type="text" placeholder="Login" required v-model="login" />
          <input
            id="Password"
            class="mt-5"
            type="password"
            placeholder="Password"
            required
            v-model="password"
          />
          <button class="mt-5" @click="auth">Sign In</button>
          <div v-if="error" class="error">{{ error }}</div>
        </div>
      </div>
      <div v-else>
        <!-- Display something when the user is authenticated -->
        <div>Welcome, {{ user }}</div>
        <!-- <router-link :to="{ name: 'MenuForm' }"> На главную </router-link> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.authform {
  background: url('/images/bgLogin.jpg') center no-repeat;
}

.form {
  width: 600px;
  height: 450px;
  background-color: #383838;
  border-radius: 30px;
  box-shadow: 0px 3px 0px 1px rgba(0, 0, 0, 0.25);
}

.error {
  position: absolute;
  top: 65%; /* Adjust as needed */
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(253, 132, 132);
  padding: 15px;
  border-radius: 10px;
}

.login-form input {
  width: 340px;
  height: 50px;
  border-radius: 10px;
  background-color: #2c2c2c;
  border: 1px solid #444444;
  padding-left: 40px;
  color: #efefef;
  font-size: 20px;
  font-weight: 300;
  font-family: 'Inter', sans-serif;
}

.login-form input:hover {
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;
}

.login-form input:focus {
  outline: none !important;
}

.login-form input::placeholder {
  color: #444444;
}

.login-form button {
  width: 340px;
  height: 50px;
  border-radius: 10px;
  background-color: #efefef;
  color: #444444;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
}

.login-form button:hover {
  box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}
</style>
