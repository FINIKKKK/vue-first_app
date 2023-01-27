<template>
  <div class="app">
    <PostForm @create="onCreatePost" />
    <Select :options="options" v-model="selectedOption" />

    <PostList :posts="posts" @remove="onRemovePost" v-if="!isLoading" />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import axios from "axios";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      title: "",
      body: "",
      isLoading: false,
      options: [
        {
          value: "title",
          name: "По названию",
        },
        {
          value: "body",
          name: "По описанию",
        },
      ],
      selectedOption: "",
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
    async fetchPosts() {
      try {
        this.isLoading = true;
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = data;
      } catch (err) {
        console.warn(err);
        alert("Ошибка при получении постов");
      } finally {
        this.isLoading = false;
      }
    },
    onSelectedOption(e) {
      this.selectedOption = e.target.value;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    selectedOption(value) {
      this.posts.sort((post1, post2) => {
        return post1[value]?.localeCompare(post2[value]);
      });
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
