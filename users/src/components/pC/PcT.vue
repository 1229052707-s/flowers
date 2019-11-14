<template>
    <div>
      <router-link to="/denglu">
        <div v-for="i in one" style="display: flex;
    width: 100%;
    height: 0.6rem;
    border-bottom: 1px solid gray;">
          <img :src="i.img" alt="" class="img">
          <p class="p">{{i.name}}</p>
        </div>
      </router-link>

    </div>
</template>

<script>
    export default {
        name: "PcT",
        props:["one"]
    }
</script>

<style scoped>
  .img{
    width:0.3rem;
    height: 0.3rem;
    margin-top: 0.15rem;
    margin-left: 0.15rem;
  }
  .p{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    color: black;
  }
</style>
