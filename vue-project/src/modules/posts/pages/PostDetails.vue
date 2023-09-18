<template>
 <div class="post-details">
    <div >
        <h1>{{ getDetails.title }}</h1>
        <h3>Tags{{ getDetails.tags.join(',')}}</h3>
        <p>{{ getDetails.body}}</p>
        <h4>Reactions Count:{{ getDetails.reactions}}</h4>
    </div>
    <div>
        <input type="text" v-model="message">
        <button @click="addComment">Add comment</button>
    </div>
    <div>
        <h6>Comments:</h6>
        <section v-for="item of getComments" :key="item.id">
            <h4>{{ item.user.username }}</h4>
            <p>{{ item.body }}</p>
        </section>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            message:''
        }
    },
    computed:{
        getDetails(){
            return this.$store.getters.getDetailsPost
        },
        getComments(){
            return this.$store.getters.getComments
        },
        getUser(){
            return this.$store.getters.getUser
        },
    },
    created(){
        this.$store.dispatch('fetchSinglePost', this.$route.query.id)
        this.$store.dispatch('fetchComments', this.$route.query.id)
        this.userId=this.getUser.id
    },
    methods:{
        addComment(){
            const comment={
                body:this.message,
                postId:this.$route.query.id,
                userId:this.userId
            }
            this.$store.dispatch('postComment', comment)
            this.message=''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@assets/css/post.scss';
</style>