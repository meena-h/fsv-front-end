import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsPage from '../views/ProductsPage.vue'
import ProductsDetailPage from '../views/ProductsDetailPage.vue'
import CartPage from '../views/CartPage.vue'
import NotFoundPage from '../views/NotFoundPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  },
  {
    path: '/products/:id',
    name: 'ProductsDetail',
    component: ProductsDetailPage
  },
  {
    path: '/cart',
    name:'cart',
    component: CartPage,
  },
  {
    path : '/',
    redirect: '/products',
  },
  {
    path: '*',
    component: NotFoundPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
