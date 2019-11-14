<template>
    <div style="background-color: white">
      <div style="display: flex;background-color: #F5F5F5">
        <img src="../../../static/img/5cde90f1688b6.jpg@0o_0l_300w_100q.jpg" alt="" class="aaa">
        <div class="div">
          <p>心动时刻-10朵粉红花束</p>
          <p>￥168.00</p>
          <p></p>
        </div>
        <a href="#"><img src="../../../static/img/34.jpg" class="ddd"></a>
      </div>
      <div class="fff">
        <p>已选购<span>1</span>件，合计(不含运费)：<span>￥168.00</span></p>
      </div>
      <div style="bottom: 0;position: fixed;width: 100%;display: flex" class="sss">
        <router-link to="/homepage" style="   width: 50%;
    text-align: center;">
          <button>继续购物</button>
        </router-link>

        <router-link to="/denglu" style="width: 50%;text-align: center;background-color: #FF6600;"><button style="background-color: #FF6600;color: white;">去结算</button></router-link>

      </div>
      <div style="padding:0.1rem;position: relative">
        <p>
          温馨提示：您订购的商品的配送方式为<span style="color: goldenrod;">同城配送</span>，支付完成后，我们将在您选择的日期安排工作人员送货上门。</p>
      <button style="background-color: white;
    position: absolute;
    top: -10px;
    right: 10px;
    border: none;">关闭</button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "huowu"
    }
</script>

<style scoped>
  .fff{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    background-color: #F5F5F5;
  }
  .div{
    background-color: #F5F5F5;
    margin-top: 10px;
    line-height: 30px;
    margin-left: 10px;
  }
  .sss button{
    width: 50%;
    height: 50px;
    background-color: white;
    border: none;
  }
  .aaa{
    width: 100px;
    height: 100px;
    margin-left: 10px;
    margin-top: 10px;
  }
  .ddd{
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 80%;
    right: 10px;
  }
</style>
