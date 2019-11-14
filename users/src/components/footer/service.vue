<template>
  <div style="display: flex;margin-top: 0.2rem;background-color: white;height: 170px;">
    <ul class="service">
      <li>
        <span class="tu" ></span>
        <p class="pp">十年品牌</p>
      </li>
      <li>
        <span class="tu" ></span>
        <p class="pp">免费配送</p>
      </li>
      <li>
        <span class="tu" ></span>
        <p class="pp">3h可达</p>
      </li>
      <li>
        <span class="tu" ></span>
        <p class="pp">售后无忧</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "service"

    }
</script>

<style scoped>
  ul{
    width: 100%;
    display: flex;
  }
  ul li {
    width: 25%;
  }
  ul li p{
    text-align: center;
    color: #888;
  }
  ul li span{
    width: 50px;
    height: 50px;
    display: block;

    margin: 0 auto;
  }
  ul span:nth-of-type(1){
    background-image: url("../../assets/bottom_pingzhi.png");
    background-repeat: no-repeat;
    background-position: 5px 5px;
  }
  ul>li:nth-of-type(2)>span{
    background-image: url("../../assets/bottom_pingzhi.png");
    background-repeat: no-repeat;
    background-position: -0.52rem 5px;
  }
  ul>li:nth-of-type(3)>span{
    background-image: url("../../assets/bottom_pingzhi.png");
    background-repeat: no-repeat;
    background-position: -1.10rem 5px;
  }
  ul>li:nth-of-type(4)>span{
     background-image: url("../../assets/bottom_pingzhi.png");
     background-repeat: no-repeat;
     background-position: -1.67rem 5px;
   }

</style>
