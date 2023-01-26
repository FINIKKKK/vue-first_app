<template>
  <input type="text" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: String,
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
  border: 2px solid teal;
  border-radius: 15px;
  padding: 12px;
  margin-bottom: 15px;
}
</style>
