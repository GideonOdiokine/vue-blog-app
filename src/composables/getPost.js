import { ref } from "vue";
import { db } from '../firebase/config'


const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);
    const load = async () => {
        try {
            let res = await db.collection("posts").doc(id).get();
            post.value = { ...res.data(), id: res.id }
        } catch (err) {
            error.value = err.message;
        }
    };

    return { post, error, load }
}

export default getPost