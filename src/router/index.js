import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/strava/:page?',
    name: 'Strava',
    component: () => import(/* webpackChunkName: "strava" */ '../views/Strava.vue')
  },
  {
    path: '/prueba',
    name: 'Prueba',
    alias: "/",
    component: () => import(/* webpackChunkName: "strava" */ '../views/Prueba.vue')
  },
  {
    path: '/bienvenido',
    name: 'Bienvenido',
    component: () => import(/* webpackChunkName: "strava" */ '../views/Bienvenido.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
