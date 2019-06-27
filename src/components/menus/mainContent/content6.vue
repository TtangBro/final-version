<template>
    <div>
        <div class="title1 text-center  hidden-sm hidden-xs">
            <h1><strong>玄幻类</strong></h1>
            <img src="../../../img/star-thr.png" class="img-responsive" width='20'>
        </div>
        <div class="media" id="each_one">
            <div class="media-left">
                <a href="#">
                <img class="media-object hidden-sm hidden-xs" :src="pic.img1" alt="..." width="200"  @click="go_buy">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading text-danger" @click="go_buy()">字典</h4>
                <p class="text-mute">曹文轩，1954年1月出生于江苏盐城，中国儿童文学作家。1977年毕业于北京大学中文系并留校任教。任北京作家协会副主席，当代文学教研室主任、中国作家协会儿童文学委员会委员</p> 
                <p class="text-mute">2016年4月4日，曹文轩获“国际安徒生奖”， [2]  同年8月20日，曹文轩在新西兰领取国际安徒生奖，这也是中国作家首次获此殊荣。</p>
            </div>
        </div>
        <div class="media" id="each_one">
            <div class="media-left">
                <a href="#">
                <img class="media-object hidden-sm hidden-xs" :src="pic.img1" alt="..." width="200">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading text-danger" @click="go_buy()">字典</h4>
                <p class="text-mute">曹文轩，1954年1月出生于江苏盐城，中国儿童文学作家。1977年毕业于北京大学中文系并留校任教。任北京作家协会副主席，当代文学教研室主任、中国作家协会儿童文学委员会委员</p> 
                <p class="text-mute">2016年4月4日，曹文轩获“国际安徒生奖”， [2]  同年8月20日，曹文轩在新西兰领取国际安徒生奖，这也是中国作家首次获此殊荣。</p>
            </div>
        </div>
    </div>
</template>
<script>
import img1 from '../../../img/词典1.jpg'
export default {
    data() {
        return {
            pic :{
                img1 : img1
            }
        }
    },
     methods: {
        go_buy(){
            this.$router.push('/longzu')
        }
    },
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
