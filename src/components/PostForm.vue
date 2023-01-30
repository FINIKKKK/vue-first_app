<template>
  <form @submit.prevent>
    <Button @click="this.visible = true">Создать пост</Button>

    <Popup v-if="visible" @close="this.visible = false">
      <h2>Создать пост</h2>
      <Input v-focus v-model="post.title" placeholder="Название" />
      <Input v-model="post.body" placeholder="Описание" />
      <Button type="submit" @click="onCreatePost">Создать</Button>
    </Popup>
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
      visible: false,
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
      this.visible = false;
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
