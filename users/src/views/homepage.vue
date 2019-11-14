
<template>
  <div>
    <div class="fu">
      <div class="bia"></div>
      <input type="text" placeholder="搜索商品名称" class="input-box">
      <router-link to="/denglu"><div class="Bia"></div></router-link>

    </div>
    <lunbo></lunbo>
    <classification></classification>
    <contact></contact>
    <category></category>
    <homelisto :items="items"></homelisto>
    <homelistt :items="items"></homelistt>
    <homelistth :item="item"></homelistth>
    <homelistf :item="item"></homelistf>
    <homelistfi :item="item"></homelistfi>
    <evaluate :list="list"></evaluate>
          <navigationmap></navigationmap>
          <service ></service>
    <haha-footer></haha-footer>
  </div>

</template>

<script>
    import hahaFooter from "../components/footer/bar";
    import classification from "../components/footer/classification";
    import contact from "../components/footer/contact";
    import lunbo from "../components/footer/lunbo"
    import category from "../components/footer/category"
    import homelisto from "../components/footer/homelisto";
    import homelistt from "../components/footer/homelistt"
    import homelistth from "../components/footer/homelistth";
    import homelistf from "../components/footer/homelistf";
    import homelistfi from "../components/footer/homelistfi";
    import evaluate from "../components/footer/evaluate";
    import navigationmap from "../components/footer/NavigationMap";
    import service from "../components/footer/service";
    export default {
        name:"homepage",
        data(){
            return {
                items:[
                    {
                        img:"../../../static/img/5cde90f1688b6.jpg@0o_0l_300w_100q.jpg",
                        url:"../../../static/img/5cde90ce2773a.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉佳人玫瑰花束",
                        price:"￥168.00"
                    },
                    {
                        img:"../../../static/img/5cde90f1688b6.jpg@0o_0l_300w_100q.jpg",
                        url:"../../../static/img/5cde90f1688b6.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉雪山玫瑰花束",
                        price:"￥168.00"
                    },
                    {
                        img:"../../../static/img/5cde90f1688b6.jpg@0o_0l_300w_100q.jpg",
                        url:"../../../static/img/5cde90ce2773a.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉佳人玫瑰花束",
                        price:"￥168.00"
                    },
                    {
                        img:"../../../static/img/5cde90f1688b6.jpg@0o_0l_300w_100q.jpg",
                        url:"../../../static/img/5bebbe02aced9.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉佳人玫瑰花束",
                        price:"￥168.00"
                    },
                    {
                        img:"../../../static/img/5cde90f1688b6.jpg@0o_0l_300w_100q.jpg",
                        url:"../../../static/img/5c5f9afab00df.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉佳人玫瑰花束",
                        price:"￥168.00"
                    },
                    {
                        img:"../../../static/img/5cde90f1688b6.jpg@0o_0l_300w_100q.jpg",
                        url:"../../../static/img/5bebc92977022.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉佳人玫瑰花束",
                        price:"￥168.00"
                    },
                    {
                        img:"../../../static/img/5cde90f1688b6.jpg@0o_0l_300w_100q.jpg",
                        url:"../../../static/img/5c283e2ba7476.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉佳人玫瑰花束",
                        price:"￥168.00"
                    },
                    {
                        img:"../../../static/img/5cde90f1688b6.jpg@0o_0l_300w_100q.jpg",
                        url:"../../../static/img/5c95cd1307438.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉佳人玫瑰花束",
                        price:"￥168.00"
                    },
                ],
                item:[
                    {
                        url:"../../../static/img/5cde90ce2773a.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉佳人玫瑰花束",
                        price:"￥168.00"
                    },
                    {
                        url:"../../../static/img/5cde90f1688b6.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉雪山玫瑰花束",
                        price:"￥168.00"
                    },
                    {
                        url:"../../../static/img/5cde90ce2773a.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉佳人玫瑰花束",
                        price:"￥168.00"
                    },
                    {
                        url:"../../../static/img/5cde90ce2773a.jpg@0o_0l_300w_100q.jpg",
                        name:"心动时刻-十九多粉佳人玫瑰花束",
                        price:"￥168.00"
                    }
                ]
            }
        },
        components:{
            hahaFooter,
            classification,
            contact,
            lunbo,
            category,
            homelisto,
            homelistt,
            homelistth,
            homelistf,
            homelistfi,
            evaluate,
            navigationmap,
            service
        }
    }
</script>

<style scoped>
  .fu{
    display: flex;
    background-color: #00BF9D;
    height: 0.5rem;
    width: 100%;
  }
  .bia{
    background-image: url("../assets/vns_icon_sprites_01.png");
    background-size: 1.5rem;
    width: 0.4rem;
    height: 0.4rem;
    background-repeat: no-repeat;
    background-position: 6px 4px;
  }
  .input-box{
    width: 2.6rem;
    height: 0.35rem;
    margin-top: 0.08rem;
    margin-left: 5px;
    border-radius: 25px;
    padding-left: 10px;
    outline: none;
    border: none;
    background-color:#BFEFE6;
  }
  .Bia{
    background-image: url("../assets/vns_icon_sprites_01.png");
    width: 0.4rem;
    height: 0.4rem;
    background-repeat: no-repeat;
    background-position: -85px 2px;
    background-size: 2rem;
    margin-top: 5px;
    margin-left: 0.06rem;
  }
</style>
