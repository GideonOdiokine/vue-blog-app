<template>
  <div class="home">
    <h2>Home</h2>
    <p ref="p">My name is {{ name }} and I'm {{ age }} years old</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    // refs
    const p = ref(null);

    // non-reactive values
    let name = "Gideon";
    let age = 23;

    const handleClick = () => {
      console.log(p, p.value);
      p.value.classList.add("text");
      p.value.textContent = "Hello Gidy";
    };

    return { name, age, handleClick, p };
  },
};
</script>
<style scoped>
.text {
  color: red;
}
</style>
