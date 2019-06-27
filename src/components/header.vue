<template>
  <div>
     <!-- 头部 -->
    <header id="lk_header">
        <!-- 上部分 -->
        <div class="top-bar hidden-xs hidden-sm text-center text-muted">
            <div class="container">
                    <div class="row text-center">
                          <div class="top-bar-1 col-md-4">
                                <a href="#">
                                  <i class="glyphicon glyphicon-plus"></i>
                                  <span>关注微信公众号</span>
                                  <span class="caret"></span>
                                  <img src="../img/微信图片.jpg" alt="扫描二维码" width="130">
                                </a>
                          </div>
                          <div class="top-bar-2 col-md-4">
                               My Book
                          </div>
                          <div class="top-bar-3 col-md-4">
                                <a class="btn btn-primary btn-sm" href="#" role="button">免费注册</a>
                                <a href="#" role="button" class="text-muted" style="margin-left: 10px"  data-toggle="modal" data-target="#lk_login">立即登录</a>
                          </div>
                    </div>
            </div>
        </div>
        <!-- 下部分 -->
        <nav class="navbar navbar-default navbar-static-top navbar-lk">
            <div class="container">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#lk_nav" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">
                  <img src="../img/blog.png" alt="logo" width="70">
                </a>
              </div>
          
              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="lk_nav">
                <ul class="nav navbar-nav">
                  <li :class="{'active':choose}" @click="moren"><a href="javascript:;" @click="go_zhuye">书店主页</a></li>
                  <li><a href="javascript:;">关于书店</a></li>
                  <li :class="{'active' : choose1}" @click="bor"><a href="javascript:;" @click="go_mune">书籍类别</a></li>
                  <li><a href="javascript:;">更多内容</a></li>   
                </ul>
                
                <ul class="nav navbar-nav navbar-right hidden-sm hidden-xs">
                  <li><a href="#">个人中心</a></li>
                </ul>
              </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
          </nav>
    </header>
    <!-- /头部  -->    

    <!-- 登录 -->
    <div class="modal fade" id="lk_login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">登录</h4>
            </div>
            <div class="modal-body">
              <input type="text" placeholder="请输入账号">
              <input type="password" placeholder="请输入密码">             
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="button" class="btn btn-primary">登录</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import tanchukuang from '../js/tanchukuang.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      choose: true,
      choose1 : false
    }
  },
  methods: {
    go_mune(){
      this.$router.push('/menu')
    },
    go_zhuye(){
      this.$router.push('/login')
    },
    bor(){
      this.choose = false;
      this.choose1 = true; 
    },
    moren(){
      this.choose = true;
      this.choose1 = false;
    }
  },
}
</script>


<style scoped>
  #lk_header .top-bar{
    line-height: 38px;
    height: 39px;
    border-bottom: 1px solid #ececec;
}
#lk_header .top-bar .container .row>div+div{
    border-left: 1px solid #ececec;
}
#lk_header .top-bar .container .row .top-bar-1 a{
    position: relative;
}
#lk_header .top-bar .container .row .top-bar-1 a img{
    display: none;
    position: absolute;
    z-index: 9999;
}
#lk_header .top-bar .container .row .top-bar-1 a:hover img{
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -65px;
    margin-top: -10px;
}


#lk_header .navbar-lk{
    background-color: #fff;
    margin-bottom: 0px;
}
#lk_header .navbar-lk .navbar-brand{
    height: 70px;
    padding: 1px 15px;
}
#lk_header .navbar-lk .navbar-nav a{ 
    height: 70px;
    line-height: 40px;
}
#lk_header .navbar-lk .navbar-nav li.active a,
#lk_header .navbar-lk .navbar-nav li a:hover{
    background-color: transparent;
    border-bottom: 2px solid #0AB4F7;
}
#lk_header .navbar-lk .navbar-toggle {
    margin-top: 18px;  
}

</style>
