<template>
    <div>
        <div class="title1 text-center  hidden-sm hidden-xs">
            <h1><strong>偶像类</strong></h1>
            <img src="../../../img/star-thr.png" class="img-responsive" width='20'>
        </div>
        <div class="media" id="each_one">
            <div class="media-left">
                <a href="#">
                <img class="media-object hidden-sm hidden-xs" :src="pic.img1" alt="..." width="200">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading text-danger">莫言</h4>
                <p class="text-mute">莫言，原名管谟业，1955年2月17日出生于山东省高密市东北乡文化发展区大栏平安村 [1]  ，中国作家协会副主席、 [2]  2012年诺贝尔文学奖获得者，亦是第一个获得诺贝尔文学奖的中国籍作家。</p> 
                <p class="text-mute">莫言因一系列乡土作品充满“怀乡”“怨乡”的复杂情感，被称为“寻根文学”作家。 [5]  据不完全统计，莫言的作品至少已经被翻译成40种语言。</p>
            </div>
        </div>
        <div class="media" id="each_one">
            <div class="media-left">
                <a href="#">
                <img class="media-object hidden-sm hidden-xs" :src="pic.img1" alt="..." width="200">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading text-danger">莫言</h4>
                <p class="text-mute">莫言，原名管谟业，1955年2月17日出生于山东省高密市东北乡文化发展区大栏平安村 [1]  ，中国作家协会副主席、 [2]  2012年诺贝尔文学奖获得者，亦是第一个获得诺贝尔文学奖的中国籍作家。</p> 
                <p class="text-mute">莫言因一系列乡土作品充满“怀乡”“怨乡”的复杂情感，被称为“寻根文学”作家。 [5]  据不完全统计，莫言的作品至少已经被翻译成40种语言。</p>
            </div>
        </div>
    </div>
</template>
<script>
import img1 from '../../../img/莫言1.jpg'
export default {
    data() {
        return {
            pic :{
                img1 : img1
            }
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
