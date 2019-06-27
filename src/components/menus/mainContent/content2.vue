<template>
    <div>
        <div class="title1 text-center hidden-sm hidden-xs">
            <h1><strong>冒险类</strong></h1>
            <img src="../../../img/star-thr.png" class="img-responsive" width='20'>
        </div>
        <div class="media" id="each_one">
            <div class="media-left">
                <a href="#">
                <img class="media-object hidden-sm hidden-xs" :src="pic.img1" alt="..." width="200" @click="go_buy">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading text-danger">词典</h4>
                <p class="text-mute">《龙族》是作家江南创作的系列长篇魔幻小说，由《龙族Ⅰ火之晨曦》、《龙族Ⅱ悼亡者之瞳》、《龙族Ⅲ黑月之潮》、《龙族Ⅳ奥丁之渊》，《龙族Ⅴ：悼亡者的归来》组成</p> 
                <p class="text-mute">作品讲叙了少年路明非在申请国外大学时收到了来自芝加哥远郊处的一所私立大学：卡塞尔学院的邀请函，随着路明非同学坐上去往芝加哥的CC1000次列车，踏上了与龙族争锋的征程。</p>
            </div>
        </div>
        <div class="media" id="each_one">
            <div class="media-left">
                <a href="#">
                <img class="media-object hidden-sm hidden-xs" :src="pic.img1" alt="..." width="200">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading text-danger">词典</h4>
                <p class="text-mute">《龙族》是作家江南创作的系列长篇魔幻小说，由《龙族Ⅰ火之晨曦》、《龙族Ⅱ悼亡者之瞳》、《龙族Ⅲ黑月之潮》、《龙族Ⅳ奥丁之渊》，《龙族Ⅴ：悼亡者的归来》组成</p> 
                <p class="text-mute">作品讲叙了少年路明非在申请国外大学时收到了来自芝加哥远郊处的一所私立大学：卡塞尔学院的邀请函，随着路明非同学坐上去往芝加哥的CC1000次列车，踏上了与龙族争锋的征程。</p>
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
