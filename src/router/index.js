import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect:'/mySpace',
    },
    {
      path:'/mySpace',
      name:'mySpace',
      component: () => import('../pages/MySpace'),
    },
    {
      path:'/myProjects',
      name:'myProjects',
      component: () => import('../pages/MyProjects'),
    },
    {
      path:'/information',
      name:'information',
      component: () => import('../pages/Information'),
    },
  ]
})
