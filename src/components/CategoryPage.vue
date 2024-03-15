<script setup>
import MenuForm from './MenuForm.vue'
import CardList from './CardList.vue'
</script>
<template>
  <div class="page">
    <MenuForm />
    <div class="center_content overflow-auto">
      <div class="findplace w-full">sa</div>
      <div class="grid grid-cols-4 gap-5">
        <button class="btnAddCategory">Создать категорию</button>
      </div>
      <div class="category">
        <CardList />
      </div>
    </div>
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
  padding: 40px 40px 40px 40px;
  height: 100svh;
}

.findplace {
  background-color: #2c2c2c;
  height: 45px;
  border-radius: 10px;
}

.btnAddCategory {
  height: 45px;
  background-color: #49359c;
  margin-top: 20px;
  color: #efefef;

  border-radius: 10px;
}

.category {
  margin-top: 20px;
}
</style>
