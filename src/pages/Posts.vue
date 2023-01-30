<template>
  <PostForm @create="onCreatePost" />

  <Input
    v-focus
    :model-value="searchValue"
    @update:model-value="setSearchValue"
    placeholder="Поиск..."
    :style="{ marginBottom: 50 + 'px' }"
  />

  <div class="list__header">
    <h2>Посты</h2>
    <Select :options="options" v-model="selectedOption" />
  </div>

  <PostList
    :posts="$store.state.post.posts"
    @remove="onRemovePost"
    v-if="!isLoading"
  />
  <div v-else>Идет загрузка...</div>

  <div v-intersection="loadMore" class="observer"></div>
</template>

<script>
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    PostList,
    PostForm,
  },
  methods: {
    ...mapMutations({
      setSearchValue: "post/setSearchValue",
    }),
    ...mapActions({
      fetchPosts: "post/fetchPosts",
      loadMore: "post/loadMore",
    }),
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
    onSelectedOption(e) {
      this.selectedOption = e.target.value;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      title: (state) => state.post.title,
      body: (state) => state.post.body,
      isLoading: (state) => state.post.isLoading,
      options: (state) => state.post.options,
      selectedOption: (state) => state.post.selectedOption,
      searchValue: (state) => state.post.searchValue,
      limit: (state) => state.post.limit,
      page: (state) => state.post.page,
      totalPages: (state) => state.post.totalPages,
    }),
  },
};
</script>

<style lang="scss">
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
