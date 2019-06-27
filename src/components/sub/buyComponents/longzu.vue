<template>
    <div class="bgc">
    <div class="img-Show">
      
        <!-- 大图片 -->
        <img :src="img.url" class="img img-thumbnail img-Show-main" id="imgMain">

        <!-- 三张小图片 -->
        <div>
          <img :src="img.url1" class="img-thumbnail img-Show-Left" @click="change" :class="{'biankuang' : flag}">
          <img :src="img.url2" class="img-thumbnail img-Show-M" @click="change1" :class="{'biankuang' : flag1}">
          <img :src="img.url3" class="img-thumbnail img-Show-Right" @click="change2" :class="{'biankuang' : flag2}">
        </div>
    </div>
    
    <div>

    </div>
  </div>
</template>
<script>

import bookMain from "../../../img/词典1.jpg";
import bookLeft from "../../../img/词典小1.jpg";
import bookM from "../../../img/词典小2.jpg";
import bookRight from "../../../img/词典小3.jpg";
import bookMain1 from "../../../img/词典2.jpg";
import bookMain2 from "../../../img/词典3.jpg";

import payBackground from "../../../img/payBackground.jpg";
export default {
  data() {
    return {
      img: {
        url: bookMain,
        url1: bookLeft,
        url2: bookM,
        url3: bookRight,
        url4: bookMain1,

        urlPay: payBackground
      },
      flag : true,
      flag1 : false,
      flag2 : false,
    };
  },
  methods: {
    change(){
      var dir = document.getElementById("imgMain");
      var dirsrc = dir.getAttribute("src");
      dir.src = bookMain;
      this.flag = true;
      this.flag1 = false;
      this.flag2 = false;
    },
    change1(){
      var dir = document.getElementById("imgMain");
      var dirsrc = dir.getAttribute("src");
      // dir.src = "../../img/猫武士2.jpg";
      dir.src = bookMain1
      this.flag = false;
      this.flag1 = true;
      this.flag2 = false;
    },
    change2(){
      var dir = document.getElementById("imgMain");
      var dirsrc = dir.getAttribute("src");
      dir.src = bookMain2;
      this.flag = false;
      this.flag1 = false;
      this.flag2 = true;
    }
  }
}
</script>

<style scoped>
.bgc{
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}
.img-Show {
  position: relative;
  /* left: 100px; */
}
.img-Show-main {
  position: absolute;
  left: 200px;
  top: 80px;
  transition: all 0.5s ease;
}
.img-Show-Left {
  position: absolute;
  left: 160px;
  top: 560px;
  cursor: pointer;
}
.img-Show-M {
  position: absolute;
  left: 380px;
  top: 560px;
  cursor: pointer;
}
.img-Show-Right {
  position: absolute;
  left: 600px;
  top: 560px;
  cursor: pointer;
}
.biankuang{
  border: 2px solid black;
}
</style>