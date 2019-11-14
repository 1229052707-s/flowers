<template>
    <div style="background-color: #EEEEEE;height: 665px;">
      <div style="background-color: #EEEEEE;">
        <img src="../../../static/img/50.jpg" alt="" style="width: 60px;
    height: 60px;
    margin-top: 15%;
    margin-left: 42%;">
        <p style="text-align: center;margin-top: 20px;
    font-size: 20px;color: #A1A1A1">维纳斯账号登录</p>
      </div>

      <div style="margin: 0 auto;
    width: 90%;
margin-top: 30px;
    background-color: white;
    border-radius: 25px;">
        <div>
          <button @click="flag=true" style="width: 49%;    outline: none;
    height: 50px;
    font-size: 16px;
    background-color: white;
    border: none;
    border-radius: 25px 0px 0px;
    border: none;">密码登录</button>

          <button @click="flag=false" style="width: 49%;    outline: none;
    height: 50px;
    font-size: 16px;
    background-color: white;
    border: none;
    border-radius: 0 25px 0 0;
    border: none;">短信验证登录</button>
        </div>
        <hr>
        <div>

        </div>
        <div v-if="flag" >
        <div style="display: flex;display: flex;
    margin: 0 auto;
    width: 80%;
    height: 40px;
    line-height: 40px;
margin-left: 50px;">
          <p style="width: 30%;color: #898989">用户昵称</p> <input type="text"placeholder="手机/邮箱/用户名" style="width: 70%;border: none;">
        </div>
          <hr>
         <div style="display: flex;display: flex;
    margin: 0 auto;
    width: 80%;
    height: 40px;
    line-height: 40px;
margin-left: 50px;">
           <p style="width: 30%;color: #898989">输入密码</p> <input type="text" placeholder="请输入密码" style="width: 70%;border: none;outline: none;">
         </div>
        <router-link to="/homepage"><button style="position: absolute;
    top: 55%;
    width: 90%;
    border-radius: 25px;
    background-color: darkorange;
    border: none;
    height: 40px;
color: white;
outline: none;
    font-size: 16px;">立即登录</button></router-link>
          <div style="display: flex;
    margin-left: 20px;
    position: absolute;
    top: 62%;">

            <router-link to="/homepage"><a class="lalal">返回首页</a></router-link>
            <router-link to="/login"><a class="lalal">注册账号</a></router-link>

<!--            <a href="personalCenter#/homepage"  class="lalal">返回首页</a>-->

<!--            <a href="personalCenter#/login"  class="lalal">注册账号</a>-->
            <a href="#"  class="lalal">忘记密码?</a>
          </div>
        </div>
        <div v-else>
          <div style="display: flex;display: flex;
    margin: 0 auto;
    width: 80%;
    height: 40px;
    line-height: 40px;
    margin-left: 50px;
">
            <p style="width: 30%;color: #898989">手机号码</p> <input type="text"placeholder="手机/邮箱/用户名" style="width: 70%;border: none;outline: none;">
          </div>
          <hr>
          <div style="display: flex;display: flex;
    margin: 0 auto;
    width: 80%;
    height: 40px;
    line-height: 40px;
margin-left: 50px;">
            <p style="width: 30%;color: #898989">验证码</p> <input type="text" placeholder="请输入验证码" style="width: 70%;border: none;outline: none;">
          </div>
          <hr>
          <div style="display: flex;display: flex;
    margin: 0 auto;
    width: 80%;
    height: 40px;
    line-height: 40px;
margin-left: 50px;">
            <p style="width: 30%;color: #898989">验证码</p> <input type="text" placeholder="请输入随机验证码" style="width: 70%;border: none;outline: none;">
          </div>
          <button style="position: absolute;
    top: 60%;
    width: 90%;
    border-radius: 25px;
    background-color: darkorange;
    border: none;
    height: 40px;">立即登录</button>
          <div style="display: flex;
    margin-left: 20px;
    position: absolute;
    top: 70%;">
            <router-link to="/homepage" class="lalal">返回首页</router-link>
            <router-link to="/login"class="lalal">注册账号</router-link>
            <router-link to="/homepage"class="lalal">忘记密码</router-link>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "denglu",
        data(){
            return{
                flag:true
            }
        }
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
