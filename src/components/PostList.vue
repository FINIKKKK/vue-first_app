<template>
  <h2>Посты</h2>
  <PostItem
    v-for="post in posts"
    :post="post"
    :key="post.id"
    @remove="$emit('remove', post.id)"
  />
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  components: { PostItem },
  props: {
    posts: { type: Array, required: true },
  },
};
</script>

<style scoped lang="scss">
.post {
  margin-bottom: 20px;
  border: 2px solid teal;
  padding: 20px 20px;
  border-radius: 15px;
  h3 {
    margin-bottom: 10px;
  }
}
</style>
