<script>
export default {
  methods: {
    logout() {
      // Удаляем информацию об авторизации из локального хранилища или где-либо еще
      // Например, если вы используете localStorage для хранения информации об авторизации:
      localStorage.removeItem('loggedIn')
      // Перенаправляем пользователя на страницу входа
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<template>
  <div class="menupanel h-screen flex flex-col">
    <div><h1 class="logo">Shop</h1></div>
    <ul class="menu_pages">
      <li class="flex">
        <img src="/public/images/Homepage.svg" alt="MainPage" />
        <router-link to="/MainPage">Главная страница</router-link>
      </li>
      <li class="flex">
        <img src="/public/images/order.svg" alt="OrderPage" /><router-link to="/OrderPage" exact
          >Заказы</router-link
        >
      </li>
      <li class="flex">
        <img src="/public/images/goods.svg" alt="GoodsPage" /><a href="">Товары</a>
      </li>
      <li class="flex">
        <img src="/public/images/category.svg" alt="CategoryPage" /><router-link
          to="/CategoryPage"
          exact
          >Категории товаров</router-link
        >
      </li>
      <li class="flex">
        <img src="/public/images/user.svg" alt="UsersPage" /><a href="">Пользователи</a>
      </li>
    </ul>

    <div>
      <ul class="settings">
        <li class="flex">
          <img src="/public/images/settings.svg" alt="SettingsPage" /><a href="">Настройки</a>
        </li>
        <li class="flex">
          <img src="/public/images/exit.svg" alt="Exit" /><router-link to="/" @click="logout"
            >Выйти</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.menupanel {
  width: 300px;
  background-color: #2c2c2c;
}

.logo {
  margin-left: 40px;
  margin-top: 40px;
  font-size: 40px;
  color: #efefef;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
}

.menu_pages {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 60px;
  flex: 1;
}

.menu_pages li {
  padding-bottom: 30px;
}

.vue-active-link-shop {
  color: #b9b9b9 !important;
  border-bottom: 1px solid #b9b9b9 !important;
}

.menu_pages li img {
  margin-right: 10px;
}

.menu_pages li a {
  color: #efefef;
  font-weight: 500;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  border-bottom: 1px solid #2c2c2c;
}

.menu_pages li a:hover {
  color: #b9b9b9;
  transition: all 0.1s;
}

.menu_pages li:last-child {
  border-bottom: 1px solid #b9b9b9;
}

.settings {
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
}

.settings li {
  margin-top: 20px;
}

.settings li img {
  margin-right: 10px;
}

.settings li a {
  color: #b9b9b9;
  font-weight: 500;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
}

.settings li a:hover {
  color: #efefef;
  transition: all 0.1s;
}
</style>
