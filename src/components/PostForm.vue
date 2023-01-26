<template>
  <form @submit.prevent>
    <h2>Создать пост</h2>
    <Input v-model="post.title" placeholder="Название" />
    <Input v-model="post.body" placeholder="Описание" />
    <Button type="submit" @click="onCreatePost">Создать</Button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    onCreatePost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped lang="scss">
form {
  margin-bottom: 70px;
  h3 {
    margin-bottom: 10px;
  }
}
</style>
