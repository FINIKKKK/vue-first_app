<template>
  <div class="app">
    <form @submit.prevent>
      <h2>Создать пост</h2>
      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        type="text"
        placeholder="Название"
      />
      <textarea
        v-bind:value="body"
        @input="body = $event.target.value"
        placeholder="Описание"
      ></textarea>
      <button type="submit" @click="onCreatePost">Создать</button>
    </form>

    <h2>Посты</h2>
    <div class="post" v-for="post in posts">
      <h3><strong>Название: </strong>{{ post.title }}</h3>
      <p><strong>Описание: </strong>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
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
    onCreatePost() {
      const post = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(post);
      this.title = "";
      this.body = "";
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

.app {
  padding: 20px;
}
h2 {
  margin-bottom: 15px;
}
.post {
  margin-bottom: 20px;
  border: 2px solid teal;
  padding: 20px 20px;
  border-radius: 15px;
}
.post h3 {
  margin-bottom: 10px;
}

form {
  margin-bottom: 70px;
  input,
  textarea {
    width: 100%;
    border: 2px solid teal;
    border-radius: 15px;
    padding: 12px;
    margin-bottom: 15px;
  }
  textarea {
    height: 100px;
    resize: none;
  }
  button {
    background-color: teal;
    padding: 12px 55px;
    color: #fff;
    border: none;
    border-radius: 15px;
  }
}
form h3 {
  margin-bottom: 10px;
}
</style>
