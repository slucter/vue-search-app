import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SearchHome',
    component: () => import(/* webpackChunkName: "home" */ '../views/SearchHome/index.vue'),
    meta: {
      title: 'Home - Ngmusic'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchPage/index.vue'),
    meta: {
      title: 'Search - Ngmusic'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = to?.meta?.title ?? 'Ngmusic'
  next ();
})

export default router
