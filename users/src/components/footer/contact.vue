<template>
  <div>
    <router-link to="/denglu">
      <span class="a"></span><b>4006520778</b>
    </router-link>

    <router-link to="/denglu" style="background-color: #8B8FFA">
      <span class="b"></span><b>在线咨询</b>
    </router-link>


  </div>
</template>

<script>
    export default {
        name: "contact"
    }
</script>

<style scoped>
   div{
     padding-top: 20px;
     padding-bottom: 20px;
      text-align: center;
    }
  div a{
    display: inline-block;
    height: 40px;
    width: 48%;
    border-radius:25px;
    color: #fff;
    background-color: #ff6600;
  }
  div a span{
    display: inline-block;
    height: 30px;
    width: 30px;
    background: url(../../assets/vns_icon_sprites_01.png) no-repeat;
    -webkit-background-size: 129px 118px;
    background-size: 129px 118px;
    position: relative;
    margin-right: 5px;
  }
  div a .a{
    background-position: -26px 6px;
  }
   div a .b{
     background-position: -54px 6px;
   }
  div a b{
    font-weight: normal;
    position: relative;
    top: -4px;
  }
</style>
