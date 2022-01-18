<template>
  <div class="home">
    <h3>Home</h3>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else><Spinner /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import Spinner from "../components/Spinner.vue";
import getPosts from "@/composables/getPosts";

export default {
  name: "Home",
  components: { PostList, Spinner, TagCloud },
  setup() {
    const { load, posts, error } = getPosts();
    load();
    // console.log(posts);

    // const showPost = ref(true);

    return { posts, error };

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
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
div a h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
div a h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
