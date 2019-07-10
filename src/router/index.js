import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      // name: 'index',
      component: () => import('../views/index.vue'),
      children: [
        {
          path: "",
          redirect: "/home"
        },
        {
          path: "/home",
          name: "home",
          component: () => import('../views/home.vue')
        },
        {
          path: "/itemicon",
          name: "itemicon",
          component: () => import('../components/home/Itemicon.vue')
        },
      ]
    }
  ]
})


export default router;