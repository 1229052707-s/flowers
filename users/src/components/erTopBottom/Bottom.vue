<template>
  <div style="background-color: white;">
    <ul>
      <router-link to="/erflower/sanxinpin"><li>新品</li></router-link>
      <router-link to="/erflower/sanxiaoliang"><li>销量</li></router-link>
      <router-link to="/erflower/sanPrice"><li>价格</li></router-link>
      <router-link to="/erflower/sanrenqi"><li>人气</li></router-link>
     <li style="display: flex;width: 25%"><span class="span"><img src="../../../static/img/70.jpg" alt=""></span><p style="width:60%">筛选</p></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Bottom"
    }
</script>

<style scoped>
  ul{
    display: flex;
    width: 100%;
  }
  ul a{
    width: 25%;
    color: black;
  }
  ul li{
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
.span{
  width: 25%;
  display: block;
  height: 20px;
  margin-top: 4px;
}
</style>
