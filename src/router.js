import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './components/login/login.vue'
import home from './components/home/home.vue'
// 使用了模块化导出 所以得使用vue.use  明确安装路由的功能
Vue.use(VueRouter)

// 1. 创建路由  并且要挂载到vm上面去
const router = new VueRouter({
  // 2.分配路由规则
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: home
    }
  ]
})

// 导出路由供vm使用
export default router
