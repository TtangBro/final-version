<template>
    <div>
    <!-- 轮播图 -->
    <section id="lk_carouse" class="carousel slide" data-ride="carousel">
      
        <!-- Indicators(指示器) -->
        <ol class="carousel-indicators">
          <li data-target="#lk_carouse" data-slide-to="0" class="active"></li>
          <li data-target="#lk_carouse" data-slide-to="1"></li>
          <li data-target="#lk_carouse" data-slide-to="2"></li>
        </ol>
      
        <!-- 中间滚动的内容 -->
        <div class="carousel-inner" role="listbox">
          <div class="item active"  data-lg-img="../../../img/lunbotu2.jpg">
            <img :src="img.l1" alt="...">
          </div>
          <div class="item" data-lg-img="../../../img/lunbotu3.jpg">
            <img :src="img.l2" alt="...">
            
          </div>
          <div class="item" data-lg-img="../../../img/lunbotu4.jpg">
            <img :src="img.l3" alt="...">
          </div>
        </div>
      
        <!-- 左右控制 -->
        <a class="left carousel-control" href="#lk_carouse" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> 
        </a>
        <a class="right carousel-control" href="#lk_carouse" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>  
        </a>
      
    </section>
    <!-- /轮播图  -->
    </div>
</template>

<script>
import lunbotu2 from '../../../img/lunbotu2.jpg'
import lunbotu3 from '../../../img/lunbotu3.jpg'
import lunbotu4 from '../../../img/lunbotu4.jpg'

export default {
    data(){
        return{
            img:{
                l1 :lunbotu2,
                l2 :lunbotu3,
                l3 :lunbotu4

            }
        }
    }
}
</script>

<style scoped>
#lk_carouse .item{
    background: no-repeat center center;
    -webkit-background-size: cover;
    background-size: cover 
}

@media screen and (min-width:800px){
    #lk_carouse .item{
       height: 410px;
    }
}

</style>

