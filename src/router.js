// 路由文件

import VueRouter from "vue-router"
// Main
import mainLogin from "./components/main/mainLogin.vue"
import mainRegister from "./components/main/mainRegister.vue"
// sub
import login from "./components/sub/login.vue"
import register from "./components/sub/register.vue"
import zhuye from "./components/sub/zhuye.vue"
import buy from "./components/sub/buy.vue"

// 创建一个路由对象
let router = new VueRouter({
    routes:[
        // acount goodlist
        // {path:'/account',component:account,children:[
        //     {path:'login',component:login},
        //     {path:'register',component:register},
        // ]},
        // {path:'/goodslist',component:goodslist},
        {path:'/',redirect:'/login/mainLogin'},
        {path:'/login',component:login,
        children:[
            {path : 'mainLogin',component : mainLogin},
            {path : 'mainRegister',component : mainRegister}
        ]},
        {path:'/register',component:register},
        {path:'/zhuye',component:zhuye},
        {path:'/buy',component:buy},
    ]
})

export default router