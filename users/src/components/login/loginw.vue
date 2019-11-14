<template>
    <div>
        <div style="background-color: #EEEEEE;">
          <img src="../../../static/img/50.jpg" alt="" style="width: 60px;
    height: 60px;
    margin-top: 15%;
    margin-left: 42%;">
          <p style="text-align: center;margin-top: 20px;
    font-size: 20px;color: #A1A1A1">维纳斯账号注册</p>
        </div>
      <div style="background-color: white;
    width: 90%;
    margin: 20px auto;
    border-radius: 15px;">
        <div style="border-bottom: 1px solid rgb(238, 238, 238);
    width: 100%;
    height: 50px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    text-align: center;">
          <p style="line-height: 50px;
    color: rgb(102, 102, 102);
    width: 41%;
    text-align: right;">手机/邮箱</p><input type="text" placeholder="请输入有效手机号/邮箱" style="border: none;
    padding-left: 20px;
    outline: none;
    "><br>
        </div>

        <div style="border-bottom: 1px solid rgb(238, 238, 238);
    width: 100%;
    height: 50px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    text-align: center;">
          <p style="line-height: 50px;
    color: rgb(102, 102, 102);
    width: 41%;
    text-align: right;">输入密码</p><input type="text" placeholder="请填写密码" style="border: none;
    padding-left: 20px;
    outline: none;
    "><br>
        </div>
        <div style="border-bottom: 1px solid rgb(238, 238, 238);
    width: 100%;
    height: 50px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    text-align: center;">
          <p style="line-height: 50px;
    color: rgb(102, 102, 102);
    width: 41%;
    text-align: right;">确认密码</p><input type="text" placeholder="确认密码" style="border: none;
    padding-left: 20px;
    outline: none;
     "><br>
        </div>
        <div style="
    border-bottom: 1px solid rgb(238, 238, 238);
    width: 100%;
    height: 50px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    text-align: center;">
         <p style="line-height: 50px;
    color: rgb(102, 102, 102);
    width: 41%;
    text-align: right;"> 验证码</p><input type="text" placeholder="请输入验证码" style="border: none;
    padding-left: 20px;
    outline: none;
    "><br>
        </div>
      </div>

      <button style="height: 45px;
    width: 90%;
    margin: 20px auto;
    display: block;
    /* border: 25px; */
    border: 1px solid gray;
    border-radius: 25px;
    background-color: orange;
border: none;
outline: none;
color: white;
font-size: 16px">注册账号</button>

      <div style="display:flex;margin-left: 40px;">
        <router-link to="/homepage" class="lalal">返回首页</router-link>
        <router-link to="/denglu" class="lalal">立即登录</router-link>
        <router-link to="/denglu" class="lalal">忘记密码</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "loginw"
    }
</script>

<style scoped>
    .lalal{
      width: 100px;
      height: 50px;

      display: block;
      color:#666666;
      text-align: center;
      line-height: 50px;
    }
</style>
