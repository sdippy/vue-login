<script setup>
import MenuForm from './MenuForm.vue'
import ProfileForm from './ProfileForm.vue'
</script>
<template>
  <div class="page">
    <MenuForm />
    <div class="center_content overflow-auto">
      <div class="badge grid grid-cols-3 grid-rows-1 gap-x-5">
        <div class="badges Orders_day_col flex">
          <div class="badges_content m-auto">
            <h2>Заказов</h2>
            <span>2568</span>
          </div>
        </div>
        <div class="badges Orders_day_sent flex">
          <div class="badges_content m-auto">
            <h2>Доход</h2>
            <span>968 754₽</span>
          </div>
        </div>
        <div class="badges users_in_sys flex">
          <div class="badges_content m-auto">
            <h2>Клиентов</h2>
            <span>15429</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 grid-rows-1 gap-x-5">
        <div class="col-span-2 badges_second sale_graph"></div>
        <div class="col-start-3 badges_second noname"></div>
      </div>

      <div class="orders overflow-auto"></div>
    </div>
    <ProfileForm />
  </div>
</template>

<style scoped>
.page {
  display: flex;
  justify-content: space-between;
  background-color: #383838;
  height: 100svh;
  width: 100%;
}

.center_content {
  flex: 1;
  width: 100%;
  margin: auto;
  padding: 40px 40px 0 40px;
  height: 100svh;
}

.badge {
  display: flex;
}

.badges {
  background-color: #2c2c2c;
  height: 140px;
  width: 100%;
  border-radius: 30px;
}

.badges:hover {
  box-shadow: 0px 3px 0px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.4s;
}

.badges_content {
  margin-left: 65px;
}

.badges h2 {
  color: #efefef;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
}

.badges span {
  color: #efefef;
  font-size: 40px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
}

.Orders_day_col {
  background: url('/images/Orders_day_col.png') center no-repeat;
  background-size: cover;
}

.Orders_day_sent {
  background: url('/images/Orders_day_sent.png') center no-repeat;
  background-size: cover;
}

.users_in_sys {
  background: url('/images/users_in_sys.png') center no-repeat;
  background-size: cover;
}

.badges_second {
  background-color: #2c2c2c;
  height: 300px;
  margin-top: 20px;
  border-radius: 30px;
}

.badges_second:hover {
  box-shadow: 0px 3px 0px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.4s;
}

.orders {
  margin-top: 20px;
  background-color: #2c2c2c;
  height: 400px;
  border-radius: 30px;
}

.orders:hover {
  box-shadow: 0px 3px 0px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.4s;
}

/* Define the scrollbar style */
.orders::-webkit-scrollbar {
  width: 10px;
}

/* Define the thumb style */
.orders::-webkit-scrollbar-thumb {
  background-color: #383838;
  border-radius: 5px;
}

/* Define the track style */
.orders::-webkit-scrollbar-track {
  background-color: #2c2c2c;
  border: 1px solid #383838;
}

/* Define the button style */
.orders::-webkit-scrollbar-button {
  background-color: #2c2c2c;
  border-radius: 5px;
}
</style>
