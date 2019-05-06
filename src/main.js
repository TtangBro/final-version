// import Vue from 'vue'
// import App from './App'
// import router from './router'
// import VueRrsource from 'vue-resource'


// Vue.use(VueRrsource);
// Vue.config.productionTip = false
import Vue from "vue" 
import App from "./App.vue"

// import "bootstrap/dist/css/bootstrap.css"
// import 'bootstrap/dist/css/bootstrap.css'

// import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'


// import $ from 'jquery'
// 导入vue-router模块
import VueRouter from "vue-router"
// 手动安装VueRouter
Vue.use(VueRouter)
import router from "./router.js"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import  VueResource  from 'vue-resource'
Vue.use(VueResource) 

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
