import axios from "axios";

export const postModule = {
  state: () => ({
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
  }),
  getters: {
    // selectedOption(value) {
    //   state.posts.sort((post1, post2) => {
    //     return post1[value]?.localeCompare(post2[value]);
    //   });
    // },
    // searchValue(value) {
    //   console.log(value);
    //   state.posts = state.posts.filter((obj) =>
    //     obj.title.toLowerCase().includes(value)
    //   );
    // },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchValue(state, searchValue) {
      state.searchValue = searchValue;
    },
  },
  actions: {
    async fetchPosts({ state, commit }) {
      try {
        commit("setIsLoading", true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: state.limit,
              _page: state.page,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", response.data);
      } catch (err) {
        console.warn(err);
        alert("Ошибка при получении постов");
      } finally {
        commit("setIsLoading", false);
      }
    },
    async loadMore({ state, commit }) {
      try {
        commit("setPage", (state.page += 1));
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: state.limit,
              _page: state.page,
            },
          }
        );
        commit("setPosts", [...state.posts, ...response.data]);
      } catch (err) {
        console.warn(err);
        alert("Ошибка при получении постов");
      }
    },
  },
  namespaced: true,
};
