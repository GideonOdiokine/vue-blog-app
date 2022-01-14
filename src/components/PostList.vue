<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post">
      <h3>{{ post.title }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
};
</script>

<style></style>
