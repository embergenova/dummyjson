import axios from 'axios'
import {host} from '../../utils/baseUrl'

const statesPosts={
    post:[],
    limit_post:30,
    details_post:{
     id:'',
     title:'',
     reactions:'',
     userId:'',
     body:'',
     tags:[]
    },
    comments:[]
}
const mutationsPosts={
    SET_POST(state,value){
        state.post=value
    },
    SET_LIMIT_POST(state,value){
        state.limit_post+=30
    },
    SET_DETAILS_POST(state,value){
        state.details_post=value
    },
    SET_COMMENTS(state,value){
        state.comments=value
    }
    
}
const gettersPosts={
    getPost:state=>state.post,
    getLimitPost:state=>state.limit_post,
    getDetailsPost:state=>state.details_post,
    getComments:state=>state.comments
}
const actionsPosts={
    fetchSearchPosts({commit},value){
        axios.get(`${host}/posts/search?q=${value}`)
        .then(({data})=>{
         commit('SET_POST',data.posts)
        })
        .catch(err=>{
         alert(err)
        })
    },
    fetchAllPosts({commit},limit){
        axios.get(`${host}/posts?limit=${limit}&skip=10`)
        .then(({data})=>{
         commit('SET_POST',data.posts)
        })
        .catch(err=>{
         alert(err)
        })
    },
    fetchSinglePost({commit},id){
        axios.get(`${host}/posts/${id}`)
        .then(({data})=>{
            console.log(data)
         commit('SET_DETAILS_POST',data)
        })
        .catch(err=>{
         alert(err)
        })
    },
    fetchComments({commit},id){
        axios.get(`${host}/posts/${id}/comments`)
        .then(({data})=>{
            console.log(data)
         commit('SET_COMMENTS',data.comments)
        })
        .catch(err=>{
         alert(err)
        })
    },
    postComment(data){
        axios.post(`${host}/comments/add`,data)
          .then(({data}) => {
           console.log(data);
          })
          .catch(({response}) => {
            alert(`Произошла ошибка ${response.data.message}`);
          });
    }
}
export {statesPosts,mutationsPosts,actionsPosts,gettersPosts}