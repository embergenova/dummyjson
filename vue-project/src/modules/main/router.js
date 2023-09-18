import Main from './pages/Main.vue'
import Products from './pages/Products.vue'

export const mainRoute=[
    {
        path:'/',
        name:'main',
        component:Main
    },
    {
        path:'/products/:title',
        name:'products',
        component:Products
    }
]