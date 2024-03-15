<template>
  <div>
    <div class="active relative flex h-full">
      <div class="panelCategory m-auto">
        <img class="" src="/public/images/Shoe.png" alt="Category" />
        <p>Some category</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  border-radius: 20px;
  height: 356px;
  background-color: #2c2c2c;
}

.active:hover {
  box-shadow: 3px 3px 1px 2px rgba(0, 0, 0, 0.25);
  transition: all 0.4s;
  /* background: rgba(0, 0, 0, 0.4); */
}

.active img {
  margin: auto auto;
}

.active p {
  color: #efefef;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  text-align: center;
  padding-top: 24px;
}
</style>
