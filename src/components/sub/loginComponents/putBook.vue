<template>
    <div>
    <section id="lk_about" class=" hidden-sm">
    <!-- 考虑加不加hidden-sm 和 hidden-sm -->
    <div class="title text-center">
      <h1><strong>推荐书籍</strong></h1>
      <img src="../../../img/star-thr.png" class="img-responsive" width='20px'>
    </div>


    <!-- 主要内容 -->
    <div class="container"> 
      <div class="row">
        <div class="col-md-8">
            <h3 class="text-danger">猫武士</h3>
          <p class="text-mute">猫武士是英美作家艾琳·亨特（六个人，她们分别是维多利亚·霍姆斯（Victoria Holmes）[已退出，2003-17艾琳·亨特统领]、凯特·卡里(KateCary)[2017- 艾琳·亨特统领]、基立·鲍德卓(CherithBaldry)、图伊·萨瑟兰（Tui Sutherland）、吉莉安·菲利普（Gillian Philip）、因巴里·艾萨里斯（Inbali Iserles）、罗茜·贝斯特（Rosie Best）[已退出]和克拉丽莎·赫顿（Clarissa Hutton） [1]  ，以凯特·卡里为首）所著的图书。</p>
          <p class="text-mute">该系列图书目前已出版至七部曲，版权销往日、韩、法、德、俄、中等27个国家和地区。是美国亚马逊网站五星级畅销书，全球销量突破5000万册，每册上市便攻上纽约时报图书畅销排行榜。</p> 
          <p class="text-mute">在很久很久以前，一群猫迁入了靠近旷野边缘的密林中。其中一些是宠物猫，是从人类住处出来森林探险的；另一些猫则生长在森林里，靠打猎为生。他们最后集成四个族群遵守武士守则生活......</p> 
        </div>
        <div class="col-md-4" id="text_pic" @click="go_pay">
          <img src="../../../img/猫武士1.jpg" alt="1" class="img-rounded img-responsive" width="300">
        </div>
        <div></div>
      </div>
    </div>
    </section>
    </div>
</template>

<script>
export default {
    data() {
      return {
        
      }
    },
    methods: {
      go_pay(){
        this.$router.push('\Catbuy');
      }
    },
}
</script>
<style scoped>
#lk_about .row p{
    line-height: 29px;
    font-size: 15px;
}
@media screen and (max-width:760px){
    #text_pic{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 15px;
    }
}
</style>

<style>
#lk_about, 
#lk_hot,
#lk_link{
    padding: 20px 0
}
#lk_about .title,
#lk_hot .title,
#lk_link .title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
}

</style>

