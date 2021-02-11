import Vue from 'vue'
import Router from 'vue-router'

// main pages
import Home from '@/views/Home.vue'

// menu pages
import Menu from '@/views/Menu/Menu.vue'
import Dessert from '@/views/Menu/Dessert.vue'
import Coffee from '@/views/Menu/Coffee.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/Menu/Dessert',
      name: 'dessert',
      component: Dessert,
    },
    {
      path: '/Menu/Coffee',
      name: 'coffee',
      component: Coffee,
    },
  ],
})
