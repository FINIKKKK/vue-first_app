<template>
  <div class="app">
    <Navbar />
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #000;
}
ul,
li {
  list-style: none;
}
.app {
  padding: 20px;
}
h2 {
  margin-bottom: 15px;
}
</style>
