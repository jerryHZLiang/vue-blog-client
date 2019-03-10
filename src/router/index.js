import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/index.vue'
import Detail from '@/pages/Detail/detail.vue'
import Edit from '@/pages/Edit/edit.vue'
import Create from '@/pages/Create/create.vue'
import Register from '@/pages/Register/register.vue'
import User from '@/pages/User/user.vue'
import My from '@/pages/My/my.vue'
import Login from '@/pages/Login/login.vue'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/register',
      name:'Register',
      component: Register
    },

    {
      path:'/edit/:blogId',
      name:'Edit',
      component: Edit,
      meta:{requiresAuth:true}

    },
    {
      path:'/create',
      name:'Create',
      component: Create,
      meta:{requiresAuth:true}
    },
    {
      path:'/detail/:blogId',
      name:'Detail',
      component: Detail,

    },
    {
      path:'/user/:userId',
      name:'User',
      component: User,
      meta:{requiresAuth:true}

    },
    {
      path:'/my',
      name:'My',
      component: My,
      meta:{requiresAuth:true}
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    store.dispatch('checkLogin').then(result=>{
      console.log(result)
      if(!result){
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }else{
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
});
export default router
