<template>
    <div class="main-search">
        <input type="text" @change="searchProducts" v-model="search" placeholder="search">
        <select name="" id="" @change="setCategory($event)">
            <option :value="item" v-for="item of getCategory" :key="item">{{ item }}</option>
        </select>
    </div>  
</template>

<script>
export default {
    created(){
        this.$store.dispatch('fetchCategory');
    },
    data(){
        return{
            search:''
        }
    },
    computed:{
        getCategory(){
            return this.$store.getters.getCategory
        },
        getLimit(){
            return this.$store.getters.getLimit
        }
    },
      methods:{
           searchProducts(){
            this.$store.dispatch('fetchSearchProducts',this.search);
           },
           setCategory(event){
            if(event.target.value === 'Выбор категoрии'){
                this.$store.dispatch('fetchAllProducts',getLimit)
                fetchAllProducts
            }else{
                this.$store.dispatch('fetchProductsOfCategory',event.target.value);
            }
           }
      }
}
</script>

<style lang="scss" scoped>
@import '@assets/css/main.scss';
</style>