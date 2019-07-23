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
          path: "/dstance",
          name: "dstance",
          component: () => import('../views/distance/ele-distance.vue')
        },
        {
          path: "/order",
          name: "order",
          component: () => import('../views/order.vue')
        },
        {
          path: "/address",
          name: "address",
          component: () => import("../views/Address.vue")
        },
        {
          path: "/city",
          name: "city",
          component: () => import("../views/city.vue")
        },
      ]
    },
    {
      path: "/search",
      name: "search",
      component: () => import('../views/search.vue')
    },

    {
      path: "/phoneLogin",
      name: "phoneLogin",
      component: () => import('../views/phoneLogin.vue')
    },
    {
      path: "/search",
      name: "search",
      component: () => import('../views/search.vue')
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
        },

      ]
    },
    {
      path: '/myAddress',
      name: 'myAddress',
      component: () => import('../views/Orders/MyAddress.vue')
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: () => import('../views/Orders/AddAddress.vue')
    },
    {
      path: '/settlement',
      name: 'settlement',
      component: () => import('../views/Orders/Settlement.vue')
    },
    {
      path: '/remark',
      name: 'remark',
      component: () => import('../views/Orders/Remark.vue')
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('../views/Orders/Pay.vue')
    },
    {
      path: '/orderInfo',
      name: 'orderInfo',
      component: () => import('../views/Orders/OrderInfo.vue')
    },
    {
      path: '/logOut',
      name: 'logOut',
      component: () => import('../views/mine/log-out.vue')
    },
    {
      path: '/redPacket',
      name: 'redPacket',
      component: () => import('../views/mine/red-packet.vue')
    },
    {
      path: '/gold',
      name: 'gold',
      component: () => import('../views/mine/gold.vue')
    },
    {
      path: '/customerService',
      name: 'customerService',
      component: () => import('../views/mine/customerService.vue')
    },
    ,
    {
      path: '/ele-breakfast',
      name: 'ele-breakfast',
      component: () => import('../views/superMarket/ele-breakfast.vue')
    },
    {
      path: '/ele-fruit',
      name: 'ele-fruit',
      component: () => import('../views/superMarket/ele-fruit.vue')
    },
    {
      path: '/ele-drink',
      name: 'ele-drink',
      component: () => import('../views/superMarket/ele-drink.vue')
    },
    {
      path: '/ele-Cvs',
      name: 'ele-Cvs',
      component: () => import('../views/superMarket/ele-Cvs.vue')
    },
    {
      path: '/ele-snack',
      name: 'ele-snack',
      component: () => import('../views/superMarket/ele-snack.vue')
    },
    {
      path: '/ele-kitchen',
      name: 'ele-kitchen',
      component: () => import('../views/superMarket/ele-kitchen.vue')
    },
    {
      path: '/ele-food',
      name: 'ele-food',
      component: () => import('../views/superMarket/ele-food.vue')
    },
    {
      path: '/ele-buy',
      name: 'ele-buy',
      component: () => import('../views/superMarket/ele-buy.vue'),
      children: [
        {
          path: 'eleBuyHomepage',
          name: 'eleBuyHomepage',
          component: () => import('../components/ele-buy/ele-buy-homepage.vue'),
        },
        {
          path: 'eleBuyGetpack',
          name: 'eleBuyGetpack',
          component: () => import('../components/ele-buy/ele-buy-getpack.vue'),
        },
        {
          path: 'eleBuyDingdan',
          name: 'eleBuyDingdan',
          component: () => import('../components/ele-buy/ele-buy-dingdan.vue'),
        },
        {
          path: 'eleBuyMine',
          name: 'eleBuyMine',
          component: () => import('../components/ele-buy/ele-buy-mine.vue'),
        },
        {
          path: "/ele-buy",
          redirect: "/ele-buy/eleBuyHomepage"
        }
      ]
    },
    {
      path: '/goldshop',
      name: 'goldshop',
      component: () => import('../views/goldShop.vue')
    },
    {
      path: '/drugstore',
      name: 'drugstore',
      component: () => import('../views/ele-drugstore.vue')
    },
    {
      path: '/engorgeOne',
      name: 'engorgeOne',
      component: () => import('../views/engorgeOne.vue')
    },
    {
      path: '/quality',
      name: 'quality',
      component: () => import('../views/quality.vue')
    },
    {
      path: '/orderInfo',
      name: 'orderInfo',
      component: () => import('../views/Orders/OrderInfo.vue')
    },
    {
      path: '/myMessage',
      name: 'myMessage',
      component: () => import('../views/myMessage.vue')
    },
    {
      path: '/setmeal',
      name: 'setmeal',
      component: () => import('../components/setmeal/index-setmeal')
    },
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
