<template>
  <div class="main-quote">
    <h3>{{getQuote.quote}}</h3>
    <p>Author - {{getQuote.author}}</p>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('fetchRandomQuote')
  },
  computed:{
      getQuote(){
        return this.$store.getters.getQuote
      }
  }
}
</script>

<style lang="scss" scoped>
@import '@assets/css/main.scss';
</style>