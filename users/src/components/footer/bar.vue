<template>
  <div class="bar" >

      <router-link to="/homepage"><span class="a"></span><p>首页</p></router-link>
      <router-link to="/classify"><span class="b"></span><p >分类</p></router-link>
      <router-link to="/shoppingCar"><span class="c"></span><p >购物车</p></router-link>
      <router-link to="/personalCenter"> <span class="d"></span><p>个人中心</p></router-link>


  </div>
</template>

<script>
    export default {
        name: "vfooter"
    }
</script>

<style scoped>
  .bar {
      width: 100%;
      position: fixed;
      display: flex;
      flex-direction: row;
      bottom: 0;
    background-color:white;
    }
  a{
    width: 25%;
    text-align: center;
  }

  p{
    color: black;
    /*margin-left: 15px;*/
  }
  .a{
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url("../../assets/vns_icon_sprites_01.png");
    background-repeat: no-repeat;
    background-size: 164px 152px;
    background-position: 6px -114px;
    margin-top: 0.1rem;
  }
  .b{
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url("../../assets/vns_icon_sprites_01.png");
    background-repeat: no-repeat;
    background-size: 153px 153px;
    background-position: -29px -115px;
    margin-top: 0.1rem;
  }
  .c{
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url("../../assets/vns_icon_sprites_01.png");
    background-repeat: no-repeat;
    background-size: 167px 174px;
    background-position: -72px -132px;
    margin-top: 0.1rem;
  }
  .d{
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url("../../assets/vns_icon_sprites_01.png");
    background-repeat: no-repeat;
    background-size: 153px 130px;
    background-position: -99px -97px;
    margin-top: 0.1rem;
  }
</style>
