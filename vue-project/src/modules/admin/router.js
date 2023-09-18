import Todo from './pages/Todo.vue'
import Users from './pages/Users.vue'
import Products from './pages/Products.vue'

export const  adminRoute = [
    {
        path:'/users-list',
        name:'users-list',
        component: Users
    },
    {
        path:'/todo-list',
        name:'todo-list',
        component: Todo
    },
    {
        path:'/products-add',
        name:'products-add',
        component: Products
    }
]