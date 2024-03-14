<script setup>
import MenuForm from './MenuForm.vue'
import CardList from './CardList.vue'
</script>
<template>
  <div class="page">
    <MenuForm />
    <div class="center_content">
      <div class="findplace w-full">sa</div>
      <div class="grid grid-cols-4 gap-5"><div class="btnAddCategory"></div></div>
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
  padding: 0 40px 0 40px;
}

.findplace {
  background-color: #2c2c2c;
  margin-top: 40px;
  height: 45px;
  border-radius: 10px;
}

.btnAddCategory {
  height: 45px;
  background-color: #49359c;
  margin-top: 20px;

  border-radius: 10px;
}

.category {
  margin-top: 20px;
}
</style>
