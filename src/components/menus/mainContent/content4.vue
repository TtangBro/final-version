<template>
    <div>
        <div class="title1 text-center  hidden-sm hidden-xs">
            <h1><strong>唯美类</strong></h1>
            <img src="../../../img/star-thr.png" class="img-responsive" width='20'>
        </div>
        <div class="media" id="each_one">
            <div class="media-left">
                <a href="#">
                <img class="media-object hidden-sm hidden-xs" :src="pic.img1" alt="..." width="200">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading text-danger">童话</h4>
                <p class="text-mute">《安徒生童话》是丹麦作家安徒生创作的童话集，共由166篇故事组成。该作爱憎分明，热情歌颂劳动人民、赞美他们的善良和纯洁的优秀品德；无情地揭露和批判王公贵族们的愚蠢、无能、贪婪和残暴。其中较为闻名的故事有：《小人鱼》、《丑小鸭》、《卖火柴的小女孩》、《拇指姑娘》等</p> 
                <p class="text-mute">《安徒生童话》已经被译为150多种语言出版发行。他的童话故事还激发了大量电影、芭蕾舞剧、舞台剧以及电影动画的制作。</p>
            </div>
        </div>
        <div class="media" id="each_one">
            <div class="media-left">
                <a href="#">
                <img class="media-object hidden-sm hidden-xs" :src="pic.img1" alt="..." width="200">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading text-danger">童话</h4>
                <p class="text-mute">《安徒生童话》是丹麦作家安徒生创作的童话集，共由166篇故事组成。该作爱憎分明，热情歌颂劳动人民、赞美他们的善良和纯洁的优秀品德；无情地揭露和批判王公贵族们的愚蠢、无能、贪婪和残暴。其中较为闻名的故事有：《小人鱼》、《丑小鸭》、《卖火柴的小女孩》、《拇指姑娘》等</p> 
                <p class="text-mute">《安徒生童话》已经被译为150多种语言出版发行。他的童话故事还激发了大量电影、芭蕾舞剧、舞台剧以及电影动画的制作。</p>
            </div>
        </div>
    </div>
</template>
<script>
import img1 from '../../../img/童话全集1.jpg'
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
