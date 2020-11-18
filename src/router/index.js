import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    meta: { requiresAuth: true },
    // component: Login
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// router.beforeEach((to, from, next) => {
//   console.llg('to', to)
//   if (to.meta.requireAuth) {
//     let unauth = false
    
//     if (unauth) {
//       next({
//         path: '/', params: { fail: true }
//       })
//     }
//   }

//   next()
// })

export default router
