import { createRouter, createWebHistory } from 'vue-router'
import ShopStore from '../views/ShopStore.vue'

const routes = [
  {
    path: '/',
    name: 'shop_game',
    component: ShopStore
  },
  {
    path: '/library',
    name: 'library',
    component: () => import(/* webpackChunkName: "about" */ '../views/LibraryGames.vue')
  },
  {
    path: '/test/:id',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/LibraryGames.vue')
  },

  { path: "/index.html", redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
