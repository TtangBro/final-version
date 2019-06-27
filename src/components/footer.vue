<template>
    <div>
    <!-- 尾部 -->
    <footer id="lk_footer" class="hidden-xs hidden-sm">
      <div class="container">
        <div class="row" style="margin-top: 20px;">
          <div class="col-md-3 col-md-offset-1 one">
            <div class="row">
                <ul class="col-md-6">
                  <li><a href="">关于我们</a></li>
                  <li><a href="">合作伙伴</a></li>
                  <li><a href="">法律所有</a></li>
                </ul>
                <ul class="col-md-6">
                  <li><a href="">版权所有</a></li>
                  <li><a href="">违法必究</a></li>
                  <li><a href="">加入我们</a></li>
                </ul>
            </div>

          </div>
          <div class="col-md-3 two">
            <h5>公司地址：电子科技大学成都学院</h5>
            <h5>联系电话：18266666688</h5>
            <h5>地址邮箱：1150328224@qq.com</h5>
          </div>
          <div class="col-md-3 three">
            <h5>联系我们:</h5>
            <a href="">
              <img src="../img/微信footer.png" alt="" width="50"  data-toggle="tooltip" data-placement="bottom" title="关注微信">
              <img src="../img/微博footer.png" alt="" width="50"  data-toggle="tooltip" data-placement="bottom" title="关注微博">
            </a>
          </div>
        </div>
      </div>
    </footer>
    <!-- /尾部  -->
    </div>
</template>

<script>
import BootJs from '../js/tanchukuang.js'
export default {
    data(){
      return{
        
      }
    },
}
</script>

<style scoped>
#lk_footer{
    width: 100%;
    height: 200px;
    background: url("../img/footer.jpg") no-repeat center;
    background-size: cover;
    -webkit-background-size:cover;
    color: #fff;
    font-size: 16px
}
#lk_footer ul{
    list-style: none;

}
#lk_footer .one, #lk_footer .two{
    padding: 10px;
    border-right: 1px solid #666;
    height: 180px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#lk_footer .one li{
    line-height: 40px;
}
#lk_footer .one li a{
    color: #fff;
}
#lk_footer .three{
    padding: 10px 50px;
    height: 180px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
#lk_footer .three a{
    margin-right: 15px;
    text-decoration: none;
}

</style>

