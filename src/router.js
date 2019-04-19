import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import(/* webpackChunkName: "portfolio" */ './views/portfolio/Portfolio.vue')
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: () => import(/* webpackChunkName: "stocks" */ './views/stocks/Stocks.vue')
    }
  ]
})
