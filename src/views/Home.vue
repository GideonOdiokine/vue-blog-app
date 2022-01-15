<template>
  <div class="home">
    <h2>Home</h2>
    <PostList v-if="showPost" :posts="posts" />
    <button @click="showPost = !showPost">toggle Post</button>
    <button @click="posts.pop()">delete post</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { computed, ref, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        id: 1,
      },
      { title: "top 5 CSS tips", body: "lorem ipsum", id: 2 },
    ]);

    const showPost = ref(true);

    return { posts, showPost };

    // Dom
    //  <!-- <p ref="p">My name is {{ name }} and I'm {{ age }} years old</p>
    // <button @click="handleClick">Click me</button> -->
    // <!-- <h4>{{ name }}</h4> -->
    // <input type="text" v-model="search" />
    // <div>{{ search }} is the search term</div>
    // <div v-for="name in matchingNames" :key="name">
    //   {{ name }}
    // </div>

    // const names = ref(["Gideon", "Favour", "Atim", "Okon", "John"]);
    // const search = ref("");
    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value));
    // });
    // watch(search, () => {
    //   console.log("watch just ran");
    // });
    // watchEffect(() => {
    //   console.log("WatchEffect just ran");
    // });
    // return { names, search, matchingNames };
    // refs
    // const p = ref(null);

    // // non-reactive values
    // let name = ref("Gideon");
    // let age = ref(23);

    // const handleClick = () => {
    //   name.value = "Odiokine";
    //   age.value = 32;
    // console.log(p, p.value);
    // p.value.classList.add("text");
    // p.value.textContent = "Hello Gidy";
    // };

    // return { name, age, handleClick, p };
  },
};
</script>
<style scoped>
.text {
  color: red;
}
</style>
