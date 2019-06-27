<template>
  <div class="bgc">
    <zhuye-menu></zhuye-menu>

    <div class="main-Show">


      <div class="Picmain-left">
        <transition v-on:before-enter="brforeEnter" v-on:enter="enter"  v-on:after-enter="afterEnter">
          <div class="ball" v-show="flag" ref="ball"></div>
        </transition>
        <img :src="img.url" class="book1 img-circle">
      </div>
      <div class="book-content">
        <!-- <input type="button" class="btn-buy btn btn-danger" value="立即购买" @click="buy"> -->
        <a class="btn-buy" @click="buy">立即购买<span class="glyphicon glyphicon-chevron-right"></span></a>

        <br>
        <!-- <input type="button" class="btn-buycar btn btn-warning" value="加入购物车" @click="flag = !flag"> -->
        <a class="btn-buycar">加入购物车<span class="glyphicon glyphicon-chevron-right"></span></a>

      </div>


      

      <div class="Picmain-left1">
        <img :src="img.url" class="book2 img-circle">
      </div>
      <div class="book-content1">
        <!-- <input type="button" class="btn-buy btn btn-danger" value="立即购买"> -->
        <a class="btn-buy">立即购买<span class="glyphicon glyphicon-chevron-right"></span></a>
        <br>
        <!-- <input type="button" class="btn-buycar btn btn-warning" value="加入购物车" @click="flag = !flag"> -->
        <a class="btn-buycar">加入购物车<span class="glyphicon glyphicon-chevron-right"></span></a>

      </div>

      <div class="Picmain-left1">
        <img :src="img.url" class="book2 img-circle">
      </div>
      <div class="book-content1">
        <!-- <input type="button" class="btn-buy btn btn-danger" value="立即购买"> -->
        <a class="btn-buy">立即购买<span class="glyphicon glyphicon-chevron-right"></span></a>
        <br>
        <!-- <input type="button" class="btn-buycar btn btn-warning" value="加入购物车" @click="flag = !flag"> -->
        <a class="btn-buycar">加入购物车<span class="glyphicon glyphicon-chevron-right"></span></a>
        
      </div>
    </div>
  </div>
</template>



<script>
import book1 from "../../img/book1.jpg";
import ZhuyeMenu from "./zhuyeComponents/menu.vue"
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      img: {
        url: book1
      },
      flag: false,

    };
  },
  methods: {
    buy(){
      // this.$router.push("/Catbuy");
    },
    brforeEnter(el) {
      // el.style.transform = "translate(340px,200px)";
      el.style.transform = "translate(0px,0px)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgelPosition = document.getElementById("buyCar").getBoundingClientRect();
      const xDist = badgelPosition.left - ballPosition.left;
      const yDist = badgelPosition.top - ballPosition.top;
        var X = parseInt(xDist) ;
        var Y = parseInt(yDist) ;
      el.style.transform = `translate( ${X}px,${Y}px)`;
      el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.flag = false;

    }
  },
  components:{
    ZhuyeMenu
  }
};
</script>

<style scoped> 
.bgc {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}
.left-btn {
  position: relative;
  left: 30px;
}
.left-muem {
  position: fixed;
  top: 65px;
  width: 200px;
  min-height: 400px;
  z-index: 1000;
  opacity: 0.8;
}
/* main-Show{
    position: fixed;
  } */
.book1 {
  position: relative;
  left: 300px;
  top: 150px;
  cursor: pointer;
  transition: all 0.6s;
}
.book1:hover {
  transform: scale(1.5);
}
.book-content {
  display: inline-block;
  position: relative;
  left: 500px;
  width: 800px;
  height: 200px;
  border: 1px solid #f2f2f2;
  border-radius: 12px;
  /* background-color: #d9d6c3; */
  background-color: white;
}
.btn-buy {
  position: absolute;
  left: 600px;
  top: 60px;
  cursor: pointer;
}
.btn-buycar {
  position: absolute;
  left: 595px;
  top: 120px;
  cursor: pointer;
}

.book2 {
  position: relative;
  left: 300px;
  top: 150px;
  cursor: pointer;
  transition: all 0.6s;
}
.book2:hover {
  transform: scale(1.5);
}
.book-content1 {
  display: inline-block;
  position: relative;
  top: 0px;
  left: 500px;
  width: 800px;
  height: 200px;
  border: 1px solid #f2f2f2;
  border-radius: 12px;
  background-color: white;
}
.ball {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  z-index: 1000;
  top:30px;
  left: 1100px;
}

</style>
