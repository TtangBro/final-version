<template>
  <div>
    <div class="left-muem">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false" class="left-btn">展开</el-radio-button>
        <el-radio-button :label="true" class="left-btn">收起</el-radio-button>
      </el-radio-group>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">类别</span>
          </template>
          <el-menu-item-group>

            <el-menu-item index="1-1">教育</el-menu-item>
            <el-menu-item index="1-2">爱国</el-menu-item>
            <el-menu-item index="1-3">热血</el-menu-item>
          </el-menu-item-group>

          <el-menu-item index="1-4">励志</el-menu-item>

          <el-submenu index="1-5">
            <span slot="title">更多</span>
            <el-menu-item index="1-5-1">科学</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">购物车</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">客服</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </div>
</div>
</template>



<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: true,
      flag: false,

    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
};
</script>

<style scoped>
.bgc {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
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

</style>
