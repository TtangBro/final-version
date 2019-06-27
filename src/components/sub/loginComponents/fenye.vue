<template>
    <div>
        <section id="lk_product">
      <div class="container">
        <div class="row">
          <!-- 头部选项 -->
            <ul class="nav nav-tabs" role="tablist">
              <li role="presentation" class="active"><a href="#product1" aria-controls="home" role="tab" data-toggle="tab">关于我们</a></li>
              <li role="presentation"><a href="#product2" aria-controls="profile" role="tab" data-toggle="tab">会员专享</a></li>
              <li role="presentation"><a href="#product3" aria-controls="messages" role="tab" data-toggle="tab">优质文章</a></li>
              <li class="pull-right hidden-sm hidden-xs"><a href="#" aria-controls="settings" role="tab" data-toggle="tab">更多</a></li>
            </ul>

            <!-- 展示内容 -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade in active" id="product1">
                <div class="container">
                  <div class="row">
                    <div class="col-md-8">
                      <!-- 第一部分 -->
                      <div id="pd_one_1" class="media">
                        <div class="media-left">
                          <a href="#">
                            <img class="media-object" :src="img.erweima" alt="二维码" width="140">
                          </a>
                        </div>
                        <div class="media-body text-muted" style="padding-top: 100px">
                          <h5 class="media-heading">更多资讯欢迎</h5>
                          <h5 class="media-heading">详情关注微信</h5>
                        </div>
                      </div>
                      <!-- 第二部分 -->
                      <ol id="pd_one_2" class="breadcrumb lead">
                        <li><a href="#">技术区</a></li>
                        <li><a href="#">生活区</a></li>
                        <li><a href="#">摄影区</a></li>
                        <li><a href="#">更多</a></li>
                      </ol>
                      <!-- 第三部分 -->
                      <h1 id="pd_one_3">
                        欢迎来到博客分享
                      </h1>
                      <!-- 第四部分 -->
                      <div class="pd_one_4">
                          <a href="#"><button type="button" class="btn btn-primary btn-lg" style="margin-right: 20px">咨询我们</button></a>
                          <a href="#"></a><button type="button" class="btn btn-default btn-lg">了解更多</button></a>
                      </div>
                    </div>
                    <div class="col-md-4 hidden-xs hidden-sm" id="product1_pic">
                      <img :src="img.project_4" alt="关于我们" class="img-responsive">
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="product2">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4 hidden-xs hidden-sm">
                      <img :src="img.project_2" alt="" class="img-responsive ">
                    </div>
                    <div class="col-md-8">
                      <h1 class="text-warning">博客会员</h1>
                      <p class="lead">成为博客会员，即可享受免广告特权，部分付费技术贴的免费观看，下载部分软件无需付费，个人账号等级加速提升</p>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" class="tab-pane fade" id="product3">
                <div class="container">
                  <div class="row">
                    <div class="col-md-8">
                      <h3>vue中使用v-for循环数据，点击收藏按钮时会一起改变</h3>
                      <p>既然要单独控制，肯定不能写成v-txt啦，肯定要写成note.txt呀，改变的时候notes[i].txt=收藏或者取消收藏，你这里用的同一个变量肯定是一起变的了。如果接口里没有，
                        你就在获取notes值的时候，给每一项自己填家一个txt也可以的，总之要对每一行确定一个标识“收藏”或者”取消收藏“的标志，改变的时候也根据行内的标识改就可以了。
                      </p>
                      <div class="badge" style="padding: 15px 10px;cursor: pointer;">
                        已更新3000+的文章 | 100000+人的订阅
                      </div>
                    </div>
                    <div class="col-md-4 hidden-xs hidden-sm">
                      <img :src="img.project_3" alt="" class="img-responsive">
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
import erweima from '../../../img/erweima.jpg'
import project_4 from '../../../img/project_4.jpg'
import project_2 from '../../../img/project_2.jpg'
import project_3 from '../../../img/project_3.jpg'
export default {
    data() {
        return {
            img:{
                erweima : erweima,
                project_4 : project_4,
                project_2 : project_2,
                project_3 : project_3
            }
        } 
    },
}
</script>

<style scoped>
#lk_product{
    background-color: #f0f0f0;
    padding: 30px 0;
}
#lk_product .nav{
    font-size: 18px;
}
#lk_product .nav a{
    color: #999;
}
#lk_product .nav li.active a{
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #0AB4F7;
    color: #000;
}
#lk_product .tab-content{
    padding-top: 20px;
}
#pd_one_1{
    margin: 15px 0;
}
#pd_one_2{
    background-color: transparent;
}
#pd_one_4{
    margin: 15px 0;
}
#product1_pic{
    margin-top: 30px;
}
@media screen and (max-width:640px){
    #pd_one_1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 15px;
    }
}

</style>

