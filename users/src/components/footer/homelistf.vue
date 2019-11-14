<template>
  <div>
    <div style="width: 100%; display: flex" class="c">
      <p>开业花篮</p>
      <a href="" class="gen">更多>></a>
    </div>
    <div class="d">
      <ul>
        <li v-for="i in item">
          <a href="">
            <img :src="i.url"  class="img">
            <p class="name">{{i.name}}</p>
            <p class="price">{{i.price}}</p>

          </a>
        </li>


      </ul>

    </div>
  </div>
</template>

<script>
    export default {
        name: "homelistf",
        props:["item"]
    }
</script>

<style scoped>
  .c{
    width: 100%;
    height: 40px;
    display: flex;
    border-bottom: 0.5px solid gray;
  }
  .gen{
    display: block;
    margin-left: 65%;
  }
  .d{
    margin-bottom: 20px;
  }
  ul{
    background-color: #fff;
    margin: 0;
    border-top: 1px solid #eee;
    display: flex;
    flex-wrap: wrap;
  }
  ul li{
    width: 44%;
    padding: 10px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  .img{
    width: 163px;
    height: 163px;
  }
  a .name{
    font-weight: 400;
    margin-bottom: 0;
    font-size:0.16rem;
    min-height: 28px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    color: #333333;
  }
  a .price{
    text-align: center;
    color: #EA955A;
  }
  .price a{
    color: #2b81af;
  }
</style>
