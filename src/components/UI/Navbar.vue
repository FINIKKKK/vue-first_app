<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to="/">Vue</RouterLink>
    </div>

    <ul class="list">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/posts">Posts</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid #000;
  .logo {
    font-weight: 700;
    font-size: 24px;
  }
  .list {
    display: flex;
    align-items: center;
  }
  .list li:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
