<template>
  <div>
    <div style="display: flex;background-color: #00bf9d;">
<router-link to="/homepage" class="j">
  <
</router-link>

      <h1>用户中心</h1>
      <a href="#"class="c">
        <span></span>
      </a>
    </div>

    <div class="url">
      <img src="../../../static/img/main_bg_top.jpg" alt="" style="width: 100%">
      <div class="img">
        <a href=""><img src="../../../static/img/9.png" alt="" style="width: 100%"></a>
      </div>
      <p style="position: absolute;
    top: 100px;
    left: 35%;">
        <router-link to="/denglu"><button>登录</button></router-link>
        <router-link to="/login"><button>注册</button></router-link>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "headerH"
    }
</script>

<style scoped>
  .j{
    width: 50px;
    height: 50px;

    color: beige;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  div h1{
    width: 75%;
    text-align: center;

    font-size: 22px;
    font-weight: 500;
    color: white;
    line-height: 50px;
  }
  span{
    display: inline-block;
    width: 33px;
    height: 30px;
    background-image: url("../../assets/vns_icon_sprites_01.png");
    background-repeat: no-repeat;
    background-size: 155px 141px;
    background-position: -67px 0;
    margin-top: 0.1rem;
  }
  .url{
      position: relative;
  }
  .img{
    position: absolute;
    top: 20px;
    left: 40%;
    width: 70px;
    height: 70px;
  }
  .url p button{
    width: 50px;
    height: 30px;
    background-color:#E8F3EF;
    outline: none;
    border: 1px solid gainsboro;
    border-radius: 5px;
  }
</style>
