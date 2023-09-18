<template>
  <div class="user-list">
      <div class="user-list__card" v-for="item of getUserInfo" :key="item.id">
          <h1>{{ item.firstName + ' ' +  item.lastName }}</h1>
          <h2>Email:{{  item.email }}</h2>
          <h3>Phone:{{  item.phone }}</h3>
          <button @click="deleteUser( item.id)">Delete User</button>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
          deleteUser(id){
              this.$store.dispatch('deleteUser',id)
          }
        },
    created() {
              this.$store.dispatch('fetchAllUser')
          },
    computed:{
              getUserInfo(){
                  return this.$store.getters.getAllUsers
              }
          }
      
}
</script>

<style lang="scss" scoped>
@import '@assets/css/admin.scss';
</style>