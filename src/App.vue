<template>
  <div class="app">
    <PostForm @create="onCreatePost" />

    <Input v-model="searchValue" placeholder="Поиск..."
    :style="{marginBottom: 50 + 'px'}" />

    <div class="list__header">
      <h2>Посты</h2>
      <Select :options="options" v-model="selectedOption" />
    </div>

    <PostList :posts="posts" @remove="onRemovePost" v-if="!isLoading" />
    <div v-else>Идет загрузка...</div>

    <div class="pagination">
      <div
        class="item"
        v-for="item in totalPages"
        :key="item"
        :class="{ current: page === item }"
        @click="changePage(item)"
      >
        {{ item }}
      </div>
    </div>
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
      searchValue: "",
      limit: 10,
      page: 1,
      totalPages: 0,
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
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: this.limit,
              _page: this.page,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
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
    changePage(item) {
      this.page = item;
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
    searchValue(value) {
      console.log(value);
      this.posts = this.posts.filter((obj) =>
        obj.title.toLowerCase().includes(value)
      );
    },
    page() {
      this.fetchPosts();
    }
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
.list__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
.pagination {
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .item:not(:last-child) {
    margin-right: 15px;
  }
  .item {
    cursor: pointer;
  }
  .current {
    font-weight: 700;
  }
}
</style>
