import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{requiresAuth: false},
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta:{requiresAuth: true},
    },
    {
      path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
      redirect: '/',
    }
  ]
})

router.beforeEach((to, from, next) => {
  let user = localStorage.getItem('user')
  if (to.name !== 'home' && user == null) next({ name: 'home' })
  else next()
})


export default router
