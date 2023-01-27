<template>
  <select v-model="modelValue" @change="onChangeSelect" class="select">
    <option value="" disabled selected>Выберите из списка</option>
    <option
      v-for="option in options"
      :value="option.value"
      :key="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: {
    options: { type: Array, default: () => [] },
  },
  methods: {
    onChangeSelect(e) {
      this.$emit("updade:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped lang="scss">
.select {
  padding: 10px 12px;
  border-radius: 15px;
  border: 2px solid teal;
  color: #000;
}
</style>
