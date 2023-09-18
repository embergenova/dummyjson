<template>
    <div class="header">
    <div class="container">
      <div class="header-content">
        <div class="header-content-logo">
          <router-link to="/"> <img src="../assets/img/logo.jpg" alt="logo"></router-link>
        </div>
        <div   class="header-content-nav" :class="{'active':hamburgerOpen}">
         <nav>
        <ul>
          <li class="closed"  :class="{'active':hamburgerOpen}" v-on:click="toggleNav">X</li>
          <li><router-link v-on:click="toggleNav" to="/">HOME</router-link></li>
          <li><router-link v-on:click="toggleNav" to="/posts">POST</router-link></li>
          <li><router-link v-on:click="toggleNav" to="/basket">BASKET({{ getBasketUser }})</router-link></li>
          <li v-if="!getAuth"><router-link v-on:click="toggleNav" to="/auth">Sign In</router-link></li>
          <li v-if="getAuth">{{ getUser.firstName+' '+ getUser.lastName }}</li>
          <li v-if="getUser.username==='kminchelle'"><router-link v-on:click="toggleNav" to="/">ADMIN</router-link></li>
        </ul>
      </nav>
      <nav  v-if="getUser.username==='kminchelle'">
        <ul>
           <li><router-link v-on:click="toggleNav" to="/users-list">USERS</router-link></li>
           <li><router-link v-on:click="toggleNav" to="/todo-list">TODO</router-link></li>
           <li><router-link v-on:click="toggleNav" to="/products-add">ADD PRODUCTS</router-link></li>
        </ul>
      </nav>
        </div>
        <div class="hamburger" v-if="!hamburgerOpen" v-on:click="hamburgerOpen = !hamburgerOpen" key="header-content-nav" >
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
         </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
         hamburgerOpen: false,
        }
   },
  methods: {
      toggleNav() {
        this.hamburgerOpen = !this.hamburgerOpen;
      },
    },
  computed:{
    getAuth(){
      return this.$store.getters.isAuthenticated
    },
    getUser(){
      return this.$store.getters.getUser
    },
    getBasketUser(){
      return this.$store.getters.getBasketUser.length
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@assets/css/layar.scss';
</style>