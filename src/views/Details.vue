<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post">
    <h4>{{ post.title }}</h4>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
export default {
  props: ["id"],
  setup(props) {
    const { load, post, error } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style></style>
