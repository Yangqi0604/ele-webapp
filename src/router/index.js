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
          path: "/mine",
          name: "mine",
          component: () => import('../views/mine.vue')
        },
        {
          path: "/test",
          name: "test",
          component: () => import('../views/test.vue')
        },
        {
          path: "/order",
          name: "order",
          component: () => import('../views/order.vue')
        }
      ]
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import('../views/shop/ele-store.vue'),
      redirect: "/eleStore-diancan",
      children: [
        {
          path: "/eleStore-diancan",
          name: "eleStore-diancan",
          component: () => import('../views/shop/eleStore-diancan.vue')
        },
        {
          path: "/eleStore-coment",
          name: "eleStore-coment",
          component: () => import('../views/shop/eleStore-coment.vue')
        },
        {
          path: "/eleStore-seller",
          name: "eleStore-seller",
          component: () => import('../views/shop/eleStore-seller.vue')
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path == "/phoneLogin") {
    next();
  } else {
    //是否登录状态下
    isLogin ? next() : next("/phoneLogin");
  }
});
export default router;
