<template>
  <div class="main">
    <MainQuote> </MainQuote>
    <MainSearch></MainSearch>
    <div class="main-wrapper">
      <router-link :to="{path: `/products/${item.title}`, query:{id: item.id}}"
       class="main-card" v-for="item of getProducts" :key="item.id">
        <img :src="item.images[0]" alt="">
        <h3>{{ item.title }}</h3>
        <h4>{{ item.category }}</h4>
        <h5>{{ item.price }}$</h5>
     </router-link>
    </div>
    <button class="main-more" @click="showMore">Показать еще</button>
  </div>
</template>

<script>
import MainQuote from '../components/MainQuote.vue';
import MainSearch from '../components/MainSearch.vue';
export default {
  components:{
        MainQuote,
        MainSearch
       },
    created(){
        this.$store.dispatch('fetchAllProducts', this.getLimit)
    },
    computed:{
        getProducts(){
            return this.$store.getters.getProducts
        }, 
        getLimit(){
            return this.$store.getters.getLimit
        }
    },
    methods:{
      showMore(){
        this.$store.commit('SET_LIMIT')
        this.$store.dispatch('fetchAllProducts',this.getLimit)
      }
    }
}
</script>

<style lang="scss" scoped>
@import '@assets/css/main.scss';
</style>