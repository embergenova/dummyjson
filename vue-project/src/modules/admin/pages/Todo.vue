<template>
  <div class="todo">
    <div class="todo-item" v-for="item of getTodo" :key="item.id">
      <h3>STATUS:{{ item.completed }}</h3>
      <h3>TITLE:{{ item.todo }}</h3>
      <h3>ID:{{ item.userId }}</h3>
    </div>
  </div>
</template>

<script>
export default {
     computed:{
        getTodo(){
                  return this.$store.getters.getTodo
              }
          },
     created() {
              this.$store.dispatch('fetchTodo')
          }
}
</script>

<style lang="scss" scoped>
@import '@assets/css/admin.scss';
</style>