<template>
  <div class="auth">
    <div class="auth-form">
      <h3>Авторизация</h3>
      <div>
        <p>Логин</p>
        <input type="text" v-model="login">
      </div>
      <div>
        <p>Пароль</p>
        <input type="text" v-model="pass">
      </div>
      <button @click="auth">Войти</button>
    
    </div>
  </div>
</template>

<script>
export default {
   data(){
    return{
      login:'kminchelle',
      pass:'0lelplR'
    }
   },
   methods:{
    auth(){
      const data={
        username:this.login,
        password:this.pass
      }

      this.$store.dispatch('auth',data)
    }
   }

}
</script>

<style lang="scss" scoped>
@import '@assets/css/auth.scss';
</style>