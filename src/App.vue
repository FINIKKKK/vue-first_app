<template>
  <div class="app">
    <PostForm @create="onCreatePost" />
    <PostList :posts="posts" @remove="onRemovePost" />
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Пост 1", body: "Описание 1" },
        { id: 2, title: "Пост 2", body: "Описание 2" },
        { id: 3, title: "Пост 3", body: "Описание 3" },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    onChangeTitle(e) {
      this.title = e.targer.value;
    },
    onChangeBody(e) {
      this.body = e.targer.value;
    },
    onCreatePost(post) {
      this.posts.push(post);
    },
    onRemovePost(id) {
      this.posts = this.posts.filter((obj) => obj.id !== id);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  cursor: pointer;
}
.app {
  padding: 20px;
}
h2 {
  margin-bottom: 15px;
}
</style>
