 import axios from 'axios'
 import { host } from '../../utils/baseUrl'
 import {setCookie} from '../../utils/cookie'
 import router from '../../router/index'
 
 const stateAuth={
    token:'',
    user:{
        id:'',
        username:"",
        email:"",
        firstName:"",
        lastName:"",
        gender:"",
        image:"",
        token:""
    }
}
 const gettersAuth={
    isAuthenticated:state =>state.token,
    getUser:state =>state.user
}
 const mutationsAuth={
    SET_TOKEN(state,payload){
        state.token=payload
    },
    SET_USER(state,payload){
        state.user=payload
    }
}

 const actionsAuth={
    auth({commit},value){
        axios.post(`${host}/auth/login`,value)
          .then(({data}) => {
            commit('SET_TOKEN',data.token)
            commit('SET_USER',{...data, token:''})

            setCookie('token', data.token, {expires:1})

            router.push('/')

            localStorage.setItem('user',JSON.stringify({...data, token:''}))
          })
          .catch(({response}) => {
            alert(`Произошла ошибка ${response.data.message}`);
          });
    }
}
export {stateAuth,gettersAuth,mutationsAuth,actionsAuth}