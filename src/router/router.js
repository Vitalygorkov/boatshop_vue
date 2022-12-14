import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductPage from '../views/ProductPage.vue'
import ContactView from '../views/ContactView.vue'
import FavoritView from '../views/FavoritView.vue'
import CompareView from '../views/CompareView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products/:id',
    name: 'productpage',
    component: ProductPage
  },
  {
    path: '/category/:id',
    name: 'categorypage',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: HomeView
  },
  {
    path: '/favorit',
    name: 'favorit',
    component: FavoritView
  },   
  {
    path: '/compare',
    name: 'compare',
    component: CompareView
  },   
  {
    path: '/contactform/',
    name: 'contactformpage',
    component: ContactView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  }, 
  {
    path: '/post/:id',
    name: 'post',
    component: PostView
  }, 
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
