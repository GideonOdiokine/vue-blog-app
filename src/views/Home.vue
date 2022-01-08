<template>
  <div class="home">
    <h2>Home</h2>
    <p>My name is {{ name }} and I'm {{ age }} years old</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  setup() {
    console.log("setup running");

    let name = "Gideon";
    let age = 23;

    const handleClick = () => {
      console.log("I was clicked");
    };

    return { name, age, handleClick };
  },
};
</script>
