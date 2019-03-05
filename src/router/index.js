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
Vue.use(Router)

export default new Router({
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
      path:'/edit',
      name:'Edit',
      component: Edit
    },
    {
      path:'/create',
      name:'Create',
      component: Create
    },
    {
      path:'/detail',
      name:'Detail',
      component: Detail
    },
    {
      path:'/user',
      name:'User',
      component: User
    },
    {
      path:'/my',
      name:'My',
      component: My
    },
    {
      path:'/register',
      name:'Register',
      component: Register
    }
  ]
})
