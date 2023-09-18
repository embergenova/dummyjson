import Post from './pages/Post.vue'
import PostDetails from './pages/PostDetails.vue'

export const postRoute=[
    {
        path:'/posts',
        name:'posts',
        component:Post
    },
    {
        path:'/posts/:title',
        name:'posts-details',
        component:PostDetails
    },
]