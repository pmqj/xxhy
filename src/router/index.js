import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// 路由配置
const routes = [{
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页'
    },
    props: {},
    children: [],
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }, {
    path: '/hot',
    name: 'Hot',
    component: () => import('../views/Hot.vue')
  }, {
    path: '/signIn',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  }, {
    path: '/article',
    name: 'Article',
    component: () => import('../views/Article.vue'),
    children: [{
      path: 'Comment',
      name: 'Comment',
      component: () => import('../views/Comment.vue')
    }]
  }
]

const router = new VueRouter({
  // mode: 'history', // default hash
  routes
})

// 路由守卫
/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */

router.beforeEach((to, form, next) => {
  next()
})
router.afterEach((to, form) => {
  // console.log(form)
  // console.log(to)
})
router.beforeResolve((to, form, next) => {
  next()
})

//解决路由跳转原路由或者刷新出错
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
};
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
// 