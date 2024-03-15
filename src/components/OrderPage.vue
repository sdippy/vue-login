<script setup>
import MenuForm from './MenuForm.vue'
</script>
<template>
  <div class="page">
    <MenuForm />
    <div class="center_content overflow-auto"></div>
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
</style>
