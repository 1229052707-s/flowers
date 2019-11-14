import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homepage from '../views/homepage'
import Classify from '../views/classify'
import ShoppingCar from '../views/shoppingCar'
import PersonalCenter from '../views/personalCenter'
import erflower from "../views/erflower";
import ercake from "../views/ercake";
import erhualan from "../views/erhualan";
import ergreen from "../views/ergreen";
import erhualihe from "../views/erhualihe";
import erbaoxianhua from "../views/erbaoxianhua";
import ergift from "../views/ergift";
import sanxinpin from "../views/sanxinpin";
import sanXiaoLiang from "../views/sanXiaoLiang";
import sanRenQi from "../views/sanRenQi"
import login from "../views/login";
import denglu from "../components/login/denglu";
import SanPrice from "../views/SanPrice";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },{
      path: '/shoppingCar',
      name: 'ShoppingCar',
      component: ShoppingCar
    },{
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path:'/erflower',
      name:'erflower',
      component:erflower,
      children:[
        {name:"/erflower",path:"sanxinpin",component:sanxinpin},
        {name:"sanxiaoliang",path:"sanxiaoliang",component:sanXiaoLiang},
        {name:"sanprice",path:"sanprice",component:SanPrice},
        {name:"sanrenqi",path:"sanrenqi",component:sanRenQi}
      ]
    },
    {
      path:'/ercake',
      name:'ercake',
      component:ercake
    },
    {
      path:'/erhualan',
      name:'erhualan',
      component:erhualan
    },
    {
      path:'/ergreen',
      name:'ergreen',
      component:ergreen
    },
    {
      path:'/erhualihe',
      name:'erhualihe',
      component:erhualihe
    },
    {
      path:'/erbaoxianhua',
      name:'erbaoxianhua',
      component:erbaoxianhua
    },
    {
      path:'/ergift',
      name:'ergift',
      component:ergift
    },
    {
      path: '/*',
      redirect:"/homepage"
    }

  ]
})


