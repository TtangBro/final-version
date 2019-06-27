<template>
  <div>
      <header-top></header-top>
     <router-view></router-view>
     <footer>
     <footer-con></footer-con>
     </footer>  
  </div>
</template>

<script>
import HeaderTop from './components/header.vue'
import FooterCon from './components/footer.vue'
export default {
    data() {
    return {
     
    }
  },
  methods:{
  
  },
  components:{
    HeaderTop,
    FooterCon
  },
  // mounted() {
  //      this.$router.push('/login/mainLogin');
  //   }
}
</script>

<style scoped>

</style>