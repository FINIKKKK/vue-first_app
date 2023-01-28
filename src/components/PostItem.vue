<template>
  <div class="post">
    <div>{{ post.id }}</div>
    <h3><strong>Название: </strong>{{ post.title }}</h3>
    <p><strong>Описание: </strong>{{ post.body }}</p>
    <RouterLink class="link" :to="`/posts/${post.id}`">Открыть</RouterLink>
    <Button class="btn" type="submit" @click="$emit('remove', post.id)"
      >Удалить</Button
    >
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: { RouterLink },
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
  top: 60%;
  transform: translateY(-50%);
  padding: 10px 25px;
}
.link {
  position: absolute;
  right: 42px;
  top: 30%;
  transform: translateY(-50%);
  color: teal;
}
</style>
