<template>
    <div>
        <el-col :span="12" id="menu_left">
        <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen"  @close="handleClose" theme="dark" :default-openeds="openeds">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span >书籍类别</span>
            </template>
            <el-menu-item-group>
            <template slot="title">男生</template>
            <el-menu-item index="1-1" @click="go_content1">科技类</el-menu-item>
            <el-menu-item index="1-2" @click="go_content2">冒险类</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="女生">
            <el-menu-item index="1-3" @click="go_content3">偶像类</el-menu-item>
            <el-menu-item index="1-3" @click="go_content4">唯美类</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
            <template slot="title">其他</template>
            <el-menu-item index="1-4-1" @click="go_content5">修仙</el-menu-item>
            <el-menu-item index="1-4-1" @click="go_content6">玄幻</el-menu-item>
            <el-menu-item index="1-4-1" @click="go_content7">言情</el-menu-item>
            <el-menu-item index="1-4-1" @click="go_content8">都市</el-menu-item>
            <el-menu-item index="1-4-1" @click="go_content9">喜剧</el-menu-item>
            </el-submenu>
        </el-submenu>
        </el-menu>
        </el-col>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            openeds: ['1','1-4'],
            uniqueOpened: false,
           
        }
    },
     methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      go_content1(){
        //   if(this.key){
            
        //     key = false;
        //   }
        this.$router.push('/content1');
      },
      go_content2(){
          this.$router.push('/content2');
      },
      go_content3(){
          this.$router.push('/content3');
      },
      go_content4(){
          this.$router.push('/content4');
      },
      go_content5(){
          this.$router.push('/content5');
      },
      go_content6(){
          this.$router.push('/content6');
      },
      go_content7(){
          this.$router.push('/content3');
      },
      go_content8(){
          this.$router.push('/content4');
      },
      go_content9(){
          this.$router.push('/content5');
      }
    }
}
</script>
<style scoped>
#menu_left{
    width:300px;
}
@media screen and (max-width:760px){
    #menu_left{
        /* width:500px; */
        width: 100%;
    }
}
</style>
