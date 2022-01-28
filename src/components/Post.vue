<template>
    <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.author }}</p>
        <p>{{ post.created }}</p>
        <p>{{ post.content }}</p>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                post: [],
                postErr: [],
                postId: this.$route.params.id
            }
                
        },
        mounted() {
            this.getPost()
        },
        methods: {
            getPost() {
                axios.get(`http://localhost:8000/api/v1/posts/${this.postId}`)
                    .then(res => {
                        this.post = res.data
                    })
                    .catch(err => {
                        console.log(err.err)
                    })
                
            }
        }

    }

</script>

<style scoped>

</style>
