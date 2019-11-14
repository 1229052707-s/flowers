<template>
  <div>

      <header-h></header-h>
    <div style="background-color: white;margin-bottom: 100px;">
      <router-link to="/erflower"class="router" style=" margin-top: 20px;">
        <img src="../../static/img/1.jpg" alt="">
        <div style="width: 60%">
          <p>鲜花</p>
          <p>植物花卉植物花卉</p>
        </div>

        <img src="../../static/img/8.jpg" alt="" class="ccc">
      </router-link>
      <br>
      <router-link to="/ercake" class="router">
        <img src="../../static/img/2.jpg" alt="">
        <div  style="width: 60%">
          <p>蛋糕</p>
          <p>植物花卉植物花卉</p>
        </div>

        <img src="../../static/img/8.jpg" alt=""class="ccc">
      </router-link>
      <br>
      <router-link to="/erhualan"class="router">
        <img src="../../static/img/3.jpg" alt="">
        <div  style="width: 60%">
          <p>开业花篮</p>
          <p>开业花篮开业花篮</p>
        </div>

        <img src="../../static/img/8.jpg" alt="" class="ccc">
      </router-link>
      <br>
      <router-link to="/ergreen"class="router">
        <img src="../../static/img/4.jpg" alt="">
        <div  style="width: 60%">
          <p>绿植花卉</p>
          <p>绿植花卉绿植花卉</p>
        </div>
        <img src="../../static/img/8.jpg" alt="" class="ccc">
      </router-link>
      <br>
      <router-link to="/erhualihe"class="router">
        <img src="../../static/img/5.jpg" alt="">
        <div  style="width: 60%">
          <p>香皂花礼盒</p>
          <p>香皂花礼盒香皂花礼盒</p>
        </div>

        <img src="../../static/img/8.jpg" alt="" class="ccc">
      </router-link>
      <router-link to="/erbaoxianhua"class="router" style="margin-top: 0.2rem;">
        <img src="../../static/img/5.jpg" alt="">
        <div  style="width: 60%">
          <p>香皂花礼盒</p>
          <p>香皂花礼盒香皂花礼盒</p>
        </div>

        <img src="../../static/img/8.jpg" alt="" class="ccc">
      </router-link>
      <router-link to="/ergift"class="router" style="margin-top: 0.2rem;">
        <img src="../../static/img/5.jpg" alt="">
        <div  style="width: 60%">
          <p>香皂花礼盒</p>
          <p>香皂花礼盒香皂花礼盒</p>
        </div>

        <img src="../../static/img/8.jpg" alt="" class="ccc">
      </router-link>

<!--      <container :item="item"></container>-->
      <router-view></router-view>
      <haha-footer></haha-footer>

    </div>
  </div>

</template>

<script>
    import hahaFooter from "../components/footer/bar";
    import headerH from "../components/Classify/headerH";
    // import container from "../components/Classify/container";
    export default {
        name:"classify",
        data(){
            return{
                item:[
                    {
                        img:"../../../static/img/1.jpg",
                        url:"../../../static/img/8.jpg",
                        name1:"123",
                        name2:"4352"
                    },
                    {
                        img:"../../../static/img/1.jpg",
                        url:"../../../static/img/8.jpg",
                        name1:"123",
                        name2:"4352"
                    },
                    {
                        img:"../../../static/img/1.jpg",
                        url:"../../../static/img/8.jpg",
                        name1:"123",
                        name2:"4352"
                    },
                    {
                        img:"../../../static/img/1.jpg",
                        url:"../../../static/img/8.jpg",
                        name1:"123",
                        name2:"4352"
                    },
                    {
                        img:"../../../static/img/1.jpg",
                        url:"../../../static/img/8.jpg",
                        name1:"123",
                        name2:"4352"
                    },
                    {
                        img:"../../../static/img/1.jpg",
                        url:"../../../static/img/8.jpg",
                        name1:"123",
                        name2:"4352"
                    },
                    {
                        img:"../../../static/img/1.jpg",
                        url:"../../../static/img/8.jpg",
                        name1:"123",
                        name2:"4352"
                    }
                ]
            }
        },
        components:{
            hahaFooter,
            headerH,
            // container
        }
    }
</script>

<style scoped>
  .router{
    display: flex;
    width: 100%;
    height: 60px;
    border-bottom: 0.5px solid grey;
  }
  .router p{
    width: 100%;
    line-height: 0.25rem;
    margin-left: 0.15rem;
    color: #2c3e50;
  }
    img{
      width: 50px;
      height: 50px;
      display: block;
      padding-left: 20px;
    }
.ccc{
  width: 0.2rem;
  height: 0.2rem;
  margin-top: 0.15rem;
}
</style>
