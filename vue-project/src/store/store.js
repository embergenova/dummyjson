import {createStore} from 'vuex'
import {stateAuth,gettersAuth,mutationsAuth,actionsAuth} from '../modules/auth/store'
import {statesMain,mutationsMain,actionsMain,gettersMain} from '../modules/main/store'
import {statesPosts,mutationsPosts,actionsPosts,gettersPosts} from '../modules/posts/store'
import {statesBasket,mutationsBasket,actionsBasket,gettersBasket} from '../modules/basket/store'
import  {statesAdmin,gettersAdmin,mutationsAdmin,actionsAdmin} from '../modules/admin/store'
export default createStore({
    state:{
        ...stateAuth,
        ...statesMain,
        ...statesPosts,
        ...statesBasket,
        ...statesAdmin
    },
    mutations:{
        ...mutationsAuth,
        ...mutationsMain,
        ...mutationsPosts,
        ...mutationsBasket,
        ...mutationsAdmin
    },
    actions:{
        ...actionsAuth,
        ...actionsMain,
        ...actionsPosts,
        ...actionsBasket,
        ...actionsAdmin
    },
    getters:{ 
        ...gettersAuth,
        ...gettersMain,
        ...gettersPosts,
        ...gettersBasket,
        ...gettersAdmin
    }
})