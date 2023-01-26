<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
button {
  background-color: teal;
  padding: 12px 55px;
  color: #fff;
  border: none;
  border-radius: 15px;
}
</style>
