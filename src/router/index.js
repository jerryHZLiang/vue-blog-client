import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/pages/Index/index.vue')
    },
    {
      path:'/login',
      name:'Login',
      component: ()=> import('@/pages/Login/login.vue')
    },
    {
      path:'/register',
      name:'Register',
      component:()=> import('@/pages/Register/register.vue')
    },
    {
      path:'/edit/:blogId',
      name:'Edit',
      component: ()=> import('@/pages/Edit/edit.vue'),
      meta:{requiresAuth:true}
    },
    {
      path:'/create',
      name:'Create',
      component: ()=>import('@/pages/Create/create.vue'),
      meta:{requiresAuth:true}
    },
    {
      path:'/detail/:blogId',
      name:'Detail',
      component: ()=>import('@/pages/Detail/detail.vue'),

    },
    {
      path:'/user/:userId',
      name:'User',
      component: ()=>import('@/pages/User/user.vue'),
      meta:{requiresAuth:true}

    },
    {
      path:'/my',
      name:'My',
      component: ()=>import('@/pages/My/my.vue'),
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
