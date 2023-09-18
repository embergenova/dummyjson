import { createRouter, createWebHistory } from 'vue-router'
import {authRoute} from '../modules/auth/router'
import { mainRoute } from '../modules/main/router'
import { postRoute } from '../modules/posts/router'
import {basketRoute } from '../modules/basket/router'
import {adminRoute} from '../modules/admin/router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    authRoute,
    ...mainRoute,
    ...postRoute,
    ...basketRoute,
    ...adminRoute
  ]
})

export default router
