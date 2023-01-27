<template>
  <div v-if="posts.length > 0">
    <transition-group name="posts">
      <PostItem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post.id)"
      />
    </transition-group>
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
  methods: {},
};
</script>

<style scoped lang="scss">
.posts-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-enter-active,
.posts-leave-active {
  transition: all 0.3s ease;
}
.posts-enter-from,
.posts-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.posts-move {
  transition: transform 0.8s ease;
}
.post {
  margin-bottom: 20px;
  border: 2px solid teal;
  padding: 20px 20px;
  border-radius: 15px;
  padding-right: 145px;
}
</style>
