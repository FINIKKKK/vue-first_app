<template>
  <div class="post">
    <div>{{ post.id }}</div>
    <h3><strong>Название: </strong>{{ post.title }}</h3>
    <p><strong>Описание: </strong>{{ post.body }}</p>
    <Button class="btn" type="submit" @click="$emit('remove', post.id)"
      >Удалить</Button
    >
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  position: relative;
  background-color: #fff;
}
.btn {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 25px;
}
</style>
