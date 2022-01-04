<template>
  <div class="home">
    <h2>Home</h2>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
     <PostList  :posts="posts" />
    </div>
    <div v-else>Loading....</div>
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
    const posts = ref([]);
    const error = ref(null);
    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("no data available");
        }
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
      }
    };
    load();
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
<style scoped>
.text {
  color: red;
}
</style>
