import { ref } from "vue";
import { db } from '../firebase/config'
const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);
    const load = async () => {
        try {
            const res = await db.collection("posts").get()
            console.log(res.docs);
        } catch (err) {
            error.value = err.message;
        }
    };

    return { posts, error, load }
}

export default getPosts