<template>
    <div>
      <div style="width: 100%; display: flex" class="c">
        <p>分站导航</p>
        <a href="" class="gen">更多>></a>
      </div>
      <div class="place" style="display:flex">
        <a href="#">北京</a>
        <span>|</span>
        <a href="#">西安</a>
        <span>|</span>
        <a href="#">南京</a>
        <span>|</span>
        <a href="#">四川</a>
        <span>|</span>
        <a href="#">成都</a>
        <span>|</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NavigationMap"
    }
</script>

<style scoped>
  .c{
    width: 100%;
    height: 40px;
    display: flex;
    border-bottom: 0.5px solid gray;
  }
  .place{
    padding: 10px;
    line-height: 32px;
    background-color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .place a{
    padding-left: 10px;
    padding-right: 10px;
    color: #666666;
  }
  .place span{
    color: #CCCCCC;
  }
  .gen{
    display: block;
    margin-left: 65%;
  }
</style>
