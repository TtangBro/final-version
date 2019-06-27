<template>
  <div>
    <!-- <div class="container">
      <div class="row" style="margin-top: 100px;">

          <div class="col-md-8" >
             <img :src="img.loginBGC" alt="" class="img-responsive img-thumbnail" width="500">
          </div>
          <div class="col-md-4">
            <section id="main_login">
            <div class="box">
              <div class="wrapper">
                <transition mode="out-in">
                  <router-view></router-view>
                </transition>
              </div>
            </div>
    
            <div class="btn-group btn-group-lg bothBtn" style="margin-top:0px"> 
                <router-link to="/login/mainLogin" class="btn btn-lg btn-default Diybtn">登录</router-link>
                <router-link to="/login/mainRegister" class="btn btn-lg btn-default Diybtn">注册</router-link>
            </div>
            </section>
          </div>
      </div>
    </div> -->
    <login-lunbotu></login-lunbotu>
    <hot-book></hot-book>
    <fenye></fenye>
    <put-book></put-book>
  </div>
</template>

<script>
import loginBGC from '../../img/loginBGC.jpg'
import HotBook from '../sub/loginComponents/hotBook.vue'
import LoginLunbotu from '../sub/loginComponents/lunbotu.vue'
import PutBook from '../sub/loginComponents/putBook.vue'
import Fenye from '../sub/loginComponents/fenye.vue'



export default {
  data() {
    return {
      content:{
         num : '',
         password:''
      },
      img:{
        loginBGC : loginBGC
      }
    };
  },

  methods:{
      myEmit(){
        let _self = this;
          this.$http.post(`${this.$root.baseUrl}/api/article/delete`, this.content,this.$root.headers).then(function (res) {
                        res.data.title = '';
                        res.data.content = '';
                        console.log(res);
                        
                    })
         this.$router.push("/Catbuy");
      }
        
  },
  directives: {
    // 设置字体加粗
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  components:{
    HotBook,
    LoginLunbotu,
    PutBook,
    Fenye
  }
};
</script>

<style scoped>
.v-enter {
  opacity: 0;
  /* transform: translate(10px); */
}
.v-leave-to {
  opacity: 0;
  /* transform: translate(-10px); */
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
  
}

.bothBtn{
    position: absolute;
    top: 19%;
    left: 50%;
    margin-left: -175px;
    margin-top: -50px;

}
.Diybtn{
    width: 175px;
    height: 50px;
}
.router-link-active{
    background-color: rgb(0, 119, 255);
    color: white;
}


.wrapper {
  margin-top:250px;
  width: 350px;
  height: 380px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
}
.box {
  position: absolute;
  margin-left: -175px;
  margin-top: -200px;
  top: 50%;
  left: 50%;
}
form {
  margin-top: 20px;
}
.InputW {
  width: 230px;
}
.btn-WZ {
  width: 100px;
  height: 40pxs;
  position: absolute;
  top: 80px;
  left: 70px;
}
</style>