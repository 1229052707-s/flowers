<template>
  <div>

    <ul class="menubox">
      <li>
        <a href="" title="鲜花">
        <p class="menuicon"><span class="flowers"></span></p>
        <p>鲜花</p>
        </a>
      </li>


      <li>
        <a href="" title="蛋糕">
          <p class="menuicon" style="background-color: #FFCF2F"><span class="cake"></span></p>
          <p>蛋糕</p>
        </a>
      </li>
      <li>
        <a href="" title="花篮">
          <p class="menuicon" style="background-color: #8B8FFA"><span class="baskets"></span></p>
          <p>花篮</p></a>
      </li>
      <li>
        <a href="" title="礼品">
          <p class="menuicon" style="background-color:#4CC6ED"><span class="gift"></span></p>
          <p>礼品</p>
        </a>
      </li>
      <li>
        <a href="" title="更多">
          <p class="menuicon" style="background-color:#2BD3C2"><span class="more"></span></p>
          <p>更多</p>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>

    export default {
        name: "classification"
    }
</script>

<style scoped>
    .menubox{
      width: 100%;
      height: 100px;
      background: #fff;
      margin: 0;
      padding: 20px 0;
      border-bottom: 1px solid #eeeeee;
    }

  .menubox li{
    float: left;
    width: 20%;
    height: 80px;
  }
  .menuicon{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    padding: 7px;
    background-color: #ff6766;
    margin: 0 auto;
  }
  .menuicon span{
    background: url(../../assets/vns_icon_sprites_01.png) no-repeat;
    width: 34px;
    height: 34px;
    display: inline-block;
    background-size: 150px 136px;
    margin-top: 5px;
  }
  .menuicon .flowers{
    background-position: 7px -36px;
  }
  .menuicon .cake{
    background-position: -26px -36px;
  }
  .menuicon .baskets{
    background-position: -58px -36px;
  }
  .menuicon .gift{
    background-position: -92px -36px;
  }
  .menuicon .more{
    background-position: -124px -36px;
  }
  li a p{
    text-align: center;
    color: #666;
    margin-top: 10px;
  }
</style>
