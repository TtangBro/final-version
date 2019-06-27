<template>
    <div>
        <div class="container">
            <div class="row">
                <el-collapse v-model="activeName" accordion class="pay_main" id="main">
                <el-collapse-item title="选择书本集数" name="1" class="pay_main">
                    <div class="container">
                        <div class="row  content text-center ">
                        <div class="col-xs-8 col-md-12 col-sm-6" @click="changePrice">
                            <a href="#" class="thumbnail text-center" >
                            <img :src="img.img1" alt="..." class="img-responsive">
                            </a>
                            <p class="text-danger text-center">第一部</p>
                        </div>
                        <div class="col-xs-8 col-md-12 col-sm-6" @click="changePrice1">
                            <a href="#" class="thumbnail">
                            <img :src="img.img1" alt="..." class="img-responsive">
                            </a>
                            <p class="text-danger text-center ">第二部</p>
                        </div>
                        </div>
                    </div>                   
                </el-collapse-item>
                <el-collapse-item title="书本价格" name="2" class="pay_main">
                    <div class="container">
                        <div class="row  content">
                        <div class="col-xs-8 col-md-12">
                            <h1 class="text-danger text-center">￥{{price}}</h1>
                        </div>
                        </div>
                    </div>  
                </el-collapse-item>
                <el-collapse-item title="支付宝支付" name="3" class="pay_main">
                    <div class="container">
                        <div class="row content">
                            <div class="col-md-12 col-xs-8">
                                <a href="#" class="thumbnail">
                                <img :src="img.img2" alt="..." class="img-responsive" width="200">
                                </a>
                            </div>
                        </div>
                    </div>
                </el-collapse-item>
                <el-collapse-item title="微信支付" name="4" class="pay_main">
                    <div class="container">
                        <div class="row content">
                            <div class="col-md-12 col-xs-8">
                                <a href="#" class="thumbnail">
                                <img :src="img.img2" alt="..." class="img-responsive" width="200">
                                </a>
                            </div>
                        </div>
                    </div>
                </el-collapse-item>
                
                </el-collapse>
            </div>
        </div>
        
    </div>
</template>

<script>
import img1 from '../../../img/猫武士s1.jpg'
import img2 from '../../../img/erweima.jpg'

  export default {
    data() {
      return {
        activeName: '1',
        img:{
            img1 : img1,
            img2 : img2
        },
        price: '请选择书本'
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      changePrice(){
          this.price = 299
      },
      changePrice1(){
          this.price = 625
      }
    }
  }
</script>
<style scoped>
    #main{
        position: relative;
        top:80px;
    }
    .pay_main{
        width: 500px;
    }
    #main .main_one{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* padding-bottom: 15px; */
    }
    @media screen and (max-width:760px){
        #main{
            position: absolute;
            top: -2px;
        }
        #main .pay_main{
            width: 350px;
        }
        
        #main .content{
        width: 100%;
    }
    }

    @media screen and (max-width:960px) and (min-width: 760px) {
        #main{
            position: absolute;
            top: -2px;
        }
        #main .pay_main{
            width: 750px;
        }
        
        #main .content{
        width: 100%;
    }
    }

    #main .content{
        width: 500px;
    }
    /* a{
        text-decoration: none;
    }
   .pay{
       width: 400px;
       height: 150px;
       position: relative;
       left: 800px;
       top: 200px;
    }
    .choose1{
        width: 410px;
        height: 83px;
    }
    .allpay{
        cursor: pointer;
    }
    .waiguan{
        font-weight: bold;
    }
    .waiguan-left{
        position: relative;
        display: inline-block;
        width: 140px;
        height: 300px;
        border: 1px solid black;
    }
    .waiguan-right{
        position: relative;
        display: inline-block;
        width: 140px;
        height: 300px;
        border: 1px solid black;
        left: 80px;
    } */
</style>
