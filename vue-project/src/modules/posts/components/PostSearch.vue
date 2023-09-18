<template>
    <div class="post-search">
        <input type="text" @change="searchPosts" placeholder="Искать посты" v-model="search">
    </div>  
</template>

<script>
export default {
    data(){
        return{
            search:''
        }
    },
    computed:{
       getPosts(){
        return this.$store.getters.getPost
       }
    },
      methods:{
        searchPosts(){
            this.$store.dispatch('fetchSearchPosts',this.search);
           },
      }
}
</script>

<style lang="scss" scoped>
@import '@assets/css/post.scss';
</style>