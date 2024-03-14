<template>
  <div class="profilepanel h-screen">
    <img src="/images/Profile.png" alt="Profile Image" class="profile_img" />
    <h2>Hello Admin</h2>
    <h3>Welcome Back</h3>
  </div>
</template>

<style scoped>
.profilepanel {
  width: 300px;
  background-color: #2c2c2c;
}

.profile_img {
  margin: 40px auto 0 auto;
  border: 1px solid #444444;
  border-radius: 100%;
  padding: 10px;
}

.profile_img:hover {
  box-shadow: 3px 3px 1px 2px rgba(0, 0, 0, 0.25);
  transition: all 0.4s;
}

.profilepanel h2 {
  color: #efefef;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
}

.profilepanel h3 {
  color: #efefef;
  color: #efefef;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  font-family: 'Inter', sans-serif;
}
</style>
