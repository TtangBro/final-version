<template>
  <div>
    <div class="container bgc">
      <div class="row">
        <div class="col-md-6">
          
          <longzu class="hidden-sm hidden-xs"></longzu>
        </div>
        <div class="col-md-6">
          <pay></pay>
        </div> 
      </div>
    </div>
    
  </div>
</template>

<script>
import Longzu from "./buyComponents/longzu.vue"
import Pay from "./buyComponents/Pay.vue"
export default {
  data() {
    return {
  }
},
  components:{
    Longzu,
    Pay
  }
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