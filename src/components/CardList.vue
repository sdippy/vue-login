<script setup>
import CardCategory from './CardCategory.vue'
</script>

<template>
  <div class="cardlist grid grid-cols-4 overflow-auto gap-5">
    <CardCategory />
    <CardCategory />
    <CardCategory />
    <CardCategory />
    <CardCategory />
    <CardCategory />
    <CardCategory />
    <CardCategory />
    <CardCategory />
    <CardCategory />
    <CardCategory />
    <CardCategory />
  </div>
</template>

<style scoped>
.cardlist {
  width: 100%;
  height: 732px;
}
</style>
