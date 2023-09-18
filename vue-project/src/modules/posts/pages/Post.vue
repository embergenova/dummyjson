<template>
  <div class="post">
    <h3 class="post-title">Посты</h3>
    <PostSearch></PostSearch>
    <div class="post-wrapper">
      <router-link :to='{path:`/posts/${item.title}`, query:{id:item.id}}' class="post-card" v-for="item of getPosts" :key="item.id">
        <h3>{{ item.title }}</h3>
        <h4>{{ item.reactions }}</h4>
     </router-link>
    </div>
    <button class="post-more" @click="showMore">Показать еще</button>
  </div>
</template>

<script>
import PostSearch from '../components/PostSearch.vue';
export default {
    components:{
        PostSearch
    },
    created(){
        this.$store.dispatch('fetchAllPosts', this.getLimit)
    },
    computed:{
        getPosts(){
            return this.$store.getters.getPost
        }, 
        getLimit(){
            return this.$store.getters.getLimitPost
        }
    },
    methods:{
      showMore(){
        this.$store.commit('SET_LIMIT_POST')
        this.$store.dispatch('fetchAllPosts',this.getLimit)
      }
    }

}
</script>

<style lang="scss" scoped>
@import '@assets/css/post.scss';
</style>