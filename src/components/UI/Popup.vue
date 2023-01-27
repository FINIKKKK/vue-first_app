<template>
  <div class="popup" @click="$emit('close', false)">
    <div class="inner" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
};
</script>

<style scoped lang="scss">
.popup {
  z-index: 100;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(#000, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    background-color: #fff;
    border-radius: 15px;
    padding: 30px;
  }
}
</style>
