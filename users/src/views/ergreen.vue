<template>
    <div>
      <top></top>
      <bottom></bottom>
      <hahafooter></hahafooter>
    </div>
</template>

<script>
  import Top from "../components/erTopBottom/Top";
  import Bottom from "../components/erTopBottom/Bottom";
    import hahafooter from "../components/footer/bar"
    export default {
        name: "ergreen",
        components:{
            hahafooter,
            Top,
            Bottom
        }
    }
</script>

<style scoped>

</style>
