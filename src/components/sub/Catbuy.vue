<template>
  <div>
    <div class="container bgc">
      <div class="row">
        <div class="col-md-6">
          <cat class="hidden-sm hidden-xs"></cat>
        </div>
        <div class="col-md-6">
          <pay></pay>
        </div> 
      </div>
    </div>
    
  </div>
</template>

<script>
import Cat from "./buyComponents/Cat.vue"
import Pay from "./buyComponents/Pay.vue"
export default {
  data() {
    return {
  }
},
  components:{
    Cat,
    Pay
  },
};
</script>

<style scoped>
.bgc{
  width: 100%;
  height: 800px;
  background-color: #fff;
}
.pay{
  display: inline-block;
}
</style>