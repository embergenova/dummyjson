<template>
  <div class="app">
    <Header/>
  <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components:{
    Header
  }

}
</script>

<style lang="scss">
@import './assets/css/app.scss';
</style>