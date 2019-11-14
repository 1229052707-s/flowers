<template>
    <div style="height: 980px;background-color: white;">
      <header-h></header-h>
      <pc-o :item="item"></pc-o>
      <pc-t :one="one"></pc-t>

      <pcfour :two="two"></pcfour>
    <pc-f :three="three"></pc-f>
      <pcth :four="four"></pcth>
      <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../components/footer/bar";
    import headerH from "../components/pC/headerH";
    import PcO from "../components/pC/PcO";
    import PcT from "../components/pC/PcT";
    import pcth from "../components/pC/pcth";
    import pcfour from "../components/pC/pcfour";
    import PcF from "../components/pC/PcF";
    export default {

        components:{
            Footer,
            headerH,
            PcO,
            PcT,
            pcth,
            pcfour,
            PcF
        },
        data(){
            return{
                item:[
                    {
                      img:"../../../static/img/10.jpg",
                      name:"待付款"
                    },
                    {
                        img:"../../../static/img/11.jpg",
                        name:"待收货"
                    },{
                        img:"../../../static/img/12.jpg",
                        name:"已完成"
                    },{
                        img:"../../../static/img/13.jpg",
                        name:"全部订单"
                    }
                ],
                one:[
                    {
                        img:"../../../static/img/14.jpg",
                        name:"在线补款"
                    },
                    {
                        img:"../../../static/img/15.jpg",
                        name:"订单查询"
                    },
                ],
                two:[
                    {
                        img:"../../../static/img/16.jpg",
                        name:"个人信息"
                    },
                    {
                        img:"../../../static/img/17.jpg",
                        name:"地址管理"
                    },
                    {
                        img:"../../../static/img/18.jpg",
                        name:"优惠券"
                    },
                ],
                three:[
                    {
                        img:"../../../static/img/19.jpg",
                        name:"问题反馈"
                    },
                    {
                        img:"../../../static/img/20.jpg",
                        name:"帮助中心"
                    },
                    {
                        img:"../../../static/img/21.jpg",
                        name:"鲜花百科"
                    },
                    {
                        img:"../../../static/img/22.jpg",
                        name:"更多"
                    }
                ],
                four:[
                    {
                        img:"../../../static/img/23.jpg",
                        name:"123"
                    },
                    {
                        img:"../../../static/img/24.jpg",
                        name:"123"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
