<template>
      <div>
        <div style="display: flex;background-color: #00bf9d;">
          <router-link to="/classify" class="j">
            <
          </router-link>

          <h1>商品列表</h1>
          <router-link class="c" to="/denglu"> <span></span></router-link>



        </div>
      </div>
</template>

<script>
    export default {
        name: "Top"
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
</style>
