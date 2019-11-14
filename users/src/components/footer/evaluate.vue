<template>
    <div class="newcommit">
      <div v-for="i in list" style="display: flex;position: relative;margin-top: 0.2rem;margin-bottom: 0.2rem;
      border-bottom: 1px solid #EEE;
      height: 80px;">
        <a href=""><img :src="i.img" alt="" class="img"></a>
      <p class="ping" :style="{'backgroundImage': 'url(' + i.url + ')',
      width:25+'%',
      height:20+'px',
      backgroundPosition:15+'px'}"></p>
      <p class="good" >{{i.good}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "evaluate",
        props:["list"]

    }
</script>

<style scoped>
    .newcommit {
      background-color: #fff;
      border-top: 1px solid #eee;
    }
  .newcommit img{
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-top: 8px;
  }
     .good{
       width: 75%;
       left: 85px;
       font-size: 14px;
       position: absolute;
       top: 0.2rem;
       line-height: 20px;
       color: #888;
     }
</style>
