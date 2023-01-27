<template>
  <div v-if="posts.length > 0">
    <div class="list__header">
      <h2>Посты</h2>
    </div>
    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post.id)"
    />
  </div>
  <h2 v-else>Список постов пуст</h2>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  components: { PostItem },
  props: {
    posts: { type: Array, required: true },
    sortItems: { type: Array, required: true },
  },
  methods: {
  
  },
};
</script>

<style scoped lang="scss">
.list__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.post {
  margin-bottom: 20px;
  border: 2px solid teal;
  padding: 20px 20px;
  border-radius: 15px;
  padding-right: 145px;
}
</style>
