<template>
 <div>
   <top></top>
   <bottom></bottom>
   <router-view></router-view>
   <hahafooter></hahafooter>
 </div>
</template>

<script>
  import Top from "../components/erTopBottom/Top";
  import Bottom from "../components/erTopBottom/Bottom";
 import hahafooter from "../components/footer/bar"
    export default {
        name: "erflower",
        components:{
            hahafooter,
            Top,
            Bottom
        }
    }
</script>

<style scoped>

</style>
