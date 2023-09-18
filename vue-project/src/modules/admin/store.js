import axios from 'axios'
 import { host } from '../../utils/baseUrl'

 const statesAdmin={
    allUsers:[],
    todo:[]
}
 const gettersAdmin={
    getAllUsers:state =>state.allUsers,
    getTodo:state =>state.todo
}
 const mutationsAdmin={
    SET_ALL_USER(state,val){
        state.allUsers=val
    },
    SET_TODO(state,val){
      state.todo=val
  }
}

 const actionsAdmin={
    fetchAllUser({commit}){
            axios.get(`${host}/users`)
              .then(({data}) => {
                   commit('SET_ALL_USER',data.users)
              })
              .catch(err => {
                alert(err)
              })
    
    },
    deleteUser(_,id){
         axios.delete(`${host}/users/${id}`)
    },
    fetchTodo({commit}){
      axios.get(`${host}/todos`)
        .then(({data}) => {
             commit('SET_TODO',data.todos)
        })
        .catch(err => {
          alert(err)
        })

},

}
export {statesAdmin,gettersAdmin,mutationsAdmin,actionsAdmin}