// 路由文件

import VueRouter from "vue-router"
// Main
import mainLogin from "./components/main/mainLogin.vue"
import mainRegister from "./components/main/mainRegister.vue"
// sub
import login from "./components/sub/login.vue"
// import register from "./components/sub/register.vue"
import zhuye from "./components/sub/zhuye.vue"
import Catbuy from "./components/sub/Catbuy.vue"
import longzu from "./components/sub/longzubuy.vue"

import menu from "./components/menus/menu.vue"
import content1 from "./components/menus/mainContent/content1.vue"
import content2 from "./components/menus/mainContent/content2.vue"
import content3 from "./components/menus/mainContent/content3.vue"
import content4 from "./components/menus/mainContent/content4.vue"
import content5 from "./components/menus/mainContent/content5.vue"
import content6 from "./components/menus/mainContent/content6.vue"



// 创建一个路由对象
let router = new VueRouter({
    routes:[
        // acount goodlist
        // {path:'/account',component:account,children:[
        //     {path:'login',component:login},
        //     {path:'register',component:register},
        // ]},
        // {path:'/goodslist',component:goodslist},
        {path:'/',redirect:'/login'},
        {path:'/login',component:login},
        // children:[
        //     {path : 'mainLogin',component : mainLogin},
        //     {path : 'mainRegister',component : mainRegister}
        // ]
        
        // {path:'/register',component:register},
        {path:'/zhuye',component:zhuye},
        {path:'/Catbuy',component:Catbuy},
        {path:'/longzu',component:longzu},
        {path:'/menu',component:menu,
        children:[
                {path : '/content1',component : content1},
                {path : '/content2',component : content2},
                {path : '/content3',component : content3},
                {path : '/content4',component : content4},
                {path : '/content5',component : content5},
                {path : '/content6',component : content6},

            ]},
    ]
})

export default router