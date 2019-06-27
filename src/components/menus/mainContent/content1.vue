<template>
    <div>
      <form>
        <input type="text" v-model="shuju" >
        <input type="submit" @click="serach()">
      </form>


        <div class="container">
            <div class="row">
                <div class="title1 text-center hidden-sm hidden-xs">
                <h1><strong>科技类</strong></h1>
                <img src="../../../img/star-thr.png" class="img-responsive" width='20'>
            </div>
              <!--<ul>-->
                <!--<li v-for="user in newUsers">-->
            <div v-if="show" class="media" id="each_one" >
                <div class="media-left">
                    <a href="#">
                    <img class="media-object hidden-sm hidden-xs" :src="pic.img1" alt="..." width="200" @click="go_buy">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading text-danger" @click="go_buy()">猫武士</h4>
                    <p class="text-mute">该系列图书目前已出版至七部曲，版权销往日、韩、法、德、俄、中等27个国家和地区。是美国亚马逊网站五星级畅销书，全球销量突破5000万册，每册上市便攻上纽约时报图书畅销排行榜。</p>
                    <p class="text-mute">在很久很久以前，一群猫迁入了靠近旷野边缘的密林中。其中一些是宠物猫，是从人类住处出来森林探险的；另一些猫则生长在森林里，靠打猎为生。他们最后集成四个族群遵守武士守则生活......</p>
                </div>
            </div>
            <div v-if="show1" class="media" id="each_one1">
                <div class="media-left">
                    <a href="#">
                    <img class="media-object hidden-sm hidden-xs" :src="pic.img1" alt="..." width="200">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading text-danger" @click="go_buy()">猫武士1</h4>
                    <p class="text-mute">该系列图书目前已出版至七部曲，版权销往日、韩、法、德、俄、中等27个国家和地区。是美国亚马逊网站五星级畅销书，全球销量突破5000万册，每册上市便攻上纽约时报图书畅销排行榜。</p>
                    <p class="text-mute">在很久很久以前，一群猫迁入了靠近旷野边缘的密林中。其中一些是宠物猫，是从人类住处出来森林探险的；另一些猫则生长在森林里，靠打猎为生。他们最后集成四个族群遵守武士守则生活......</p>
                </div>
            </div>
                <!--</li>-->
              <!--</ul>-->
                </div>
        </div>

        <!-- <div class="media" id="each_one">
            <div class="media-left">
                <a href="#">
                <img class="media-object" :src="pic.img1" alt="..." width="200">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading text-danger">猫武士</h4>
                <p class="text-mute">该系列图书目前已出版至七部曲，版权销往日、韩、法、德、俄、中等27个国家和地区。是美国亚马逊网站五星级畅销书，全球销量突破5000万册，每册上市便攻上纽约时报图书畅销排行榜。</p>
                <p class="text-mute">在很久很久以前，一群猫迁入了靠近旷野边缘的密林中。其中一些是宠物猫，是从人类住处出来森林探险的；另一些猫则生长在森林里，靠打猎为生。他们最后集成四个族群遵守武士守则生活......</p>
            </div>
        </div> -->
    </div>
</template>
<script>
import img1 from '../../../img/猫武士1.jpg'
export default {
    data() {
        return {
            pic :{
                img1 : img1
            },
            shuju:'',
            show:true,
            show1:true
        }
    },
    methods: {
        go_buy(){
        this.$router.push('/Catbuy')
    },
      serach(){
        // var conid = document.getElementById('each_one');
        // var conid1 = document.getElementById('each_one1');



        if(this.shuju=='猫武士') {
          // console.log("a")
          this.show1 = true
          this.show = true
        }
        else if(this.shuju=='猫武士1'){
          this.show=false
          this.show1=true

        }
        else if(this.shuju=='猫武'||this.shuju=='猫'||this.shuju=='猫武1'||this.shuju=='猫1'||this.shuju=='1'){
          this.show=true
          this.show1=true
        }
        else {
          this.show=false
          this.show1=false
        }
      }
    },
  computed: {
    // newUsers: function () {
    //   var that = this;
    //   return that.users.filter(function (user) {
    //     return user.name.toLowerCase().indexOf(that.name.toLowerCase()) !== -1;
    //   })
    // }

  }

}
</script>

<style scoped>
.title1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding-bottom: 15px; */
}
#each_one{
    padding: 30px 20px;
}
</style>
