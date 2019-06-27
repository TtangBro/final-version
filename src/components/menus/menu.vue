<template>
    <div id="show">
        <menu-left class="left"></menu-left>
        <div>
            <transition mode="out-in">
            <router-view></router-view>                
            </transition>
        </div>
        <!-- <router-link to="menu/content1"></router-link> -->
    </div>
</template>
<script>
import menuLeft from './menuComponents/menu-left.vue' 
export default {
    data() {
        return {
            
        }
    },
    components:{
        menuLeft,
    },
    mounted(){
    this.$router.push('/content1');
  }
}
</script>
<style scoped>
    #show{
        width: 100%;
        height: 800px;
    }
    #show .left{
        margin-top: 50px;
    }
    .v-enter {
    opacity: 0;
    /* transform: translate(10px); */
    }
    .v-leave-to {
    opacity: 0;
    /* transform: translate(-10px); */
    }
    .v-enter-active,
    .v-leave-active {
    transition: all 0.5s ease;
    
    }
</style>
