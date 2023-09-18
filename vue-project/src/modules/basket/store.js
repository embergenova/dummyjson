import axios from 'axios'
import {host} from '../../utils/baseUrl'


const statesBasket={
    basketUser:{},
    initialBasket:[],
}
const gettersBasket={
    getBasketUser:state=>state.basketUser,
    getInitialBasket:state=>state.initialBasket

}
const  mutationsBasket={
    SET_BASKET_USER(state,item){
        if(state.basketUser[item.id]){
           state.basketUser[item.id].quantity++
        }else{
           state.basketUser={
              ...state.basketUser,
              [item.id]:{...item,quantity:1}
           }
        }
       },
    SET_INITIAL_BASKET(state,value){
        state.initialBasket=value
    },
    SET_DECREASE_CARD(state,itemID){
        if(state.basketUser[itemID].quantity>1){
         state.basketUser[itemID].quantity--
        }else{
         delete state.basketUser[itemID]
        }
     },
     SET_INCREASE_CARD(state,itemID){
      state.basketUser[itemID].quantity++
     }, 
     SET_DELETE_CARD(state,itemID){
      delete state.basketUser[itemID]
     },
}
const actionsBasket={
    
    cardDecrease({commit},itemID){
        commit('SET_DECREASE_CARD',itemID)
     },
     cardIncrease({commit},itemID){
        commit('SET_INCREASE_CARD',itemID)
     },
     cardDelete({commit},itemID){
        commit('SET_DELETE_CARD',itemID)
     },
     addToBasket({commit},data){
        commit('SET_BASKET_USER',data)
     },
    fetchBasketUser({commit},userId){
        axios.get(`${host}/carts/user/${userId}`)
        .then(({data})=>{
         commit('SET_BASKET_USER',data)
         console.log(data);
        })
        .catch(err=>{
         alert(err);
        })
     },
     fetchInitialBasket({commit} , data){
        axios.post(`${host}/carts/add`,data)
        .then(({data}) => {
         commit('SET_INITIAL_BASKET',data)
        })
        .catch(({response}) => {
          alert(`Произошла ошибка ${response.data.message}`);
        })
     }
}

export{statesBasket,mutationsBasket,actionsBasket,gettersBasket}