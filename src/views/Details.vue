<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick">delete</button>
    <h4>
      {{ timeFormat(post.createdAt.toDate()) }}
    </h4>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from "@/composables/getPost";
import Spinner from "../components/Spinner.vue";
import { useRouter } from "vue-router";
import { db } from "../firebase/config";
import moment from "moment";
export default {
  props: ["id"],
  components: { Spinner },
  setup(props) {
    const router = useRouter();
    const { load, post, error } = getPost(props.id);
    load();
    const handleClick = async () => {
      await db.collection("posts").doc(props.id).delete();
      router.push({ name: "Home" });
    };
    const timeFormat = (date) => {
     return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    };
    return { post, error, handleClick, timeFormat };
  },
};
</script>

<style>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
