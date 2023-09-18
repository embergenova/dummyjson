<template>
  <div class="main-products">
    <div class="main-products-left">
        <img :src="getDetails.images[0]" alt="">
    </div>
    <div class="main-products-right">
        <h1>{{ getDetails.title }}</h1>
        <h2>{{ getDetails.brand}}</h2>
        <h3>{{ getDetails.category}}</h3>
        <p>{{ getDetails.description}}</p>
        <h4>Price:{{ getDetails.price}}$, rating:{{ getDetails.rating}}$</h4>
        <button @click="addBasket">Добавить в карзину</button>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        getDetails(){
            return this.$store.getters.getDetails
        },
        getUser(){
            return this.$store.getters.getUser
        },
        getBasketUser(){
            return this.$store.getters.getBasketUser
        }
    },
    created(){
        this.$store.dispatch('fetchSingleProducts', this.$route.query.id)
    },
    methods:{
        addBasket(){
            const data={
                userId:this.getUser.id,
                products:[
                {
                    id: this.getDetails.id,
                    quantity:1,
                },
                ]
            }
            this.$store.dispatch('fetchInitialBasket', this.getDetails)
        }
    }
    
}
</script>
<style lang="scss" scoped>
@import '@assets/css/main.scss';
</style>