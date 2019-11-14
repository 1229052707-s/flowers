<template>
    <div>
      <div class="m">

          <router-link to="/denglu">
            <ul>
            <li v-for="i in item">
              <img :src="i.img" alt="" style="width: 0.3rem;
    height: 0.3rem;">
              <p>{{i.name}}</p>
            </li>
            </ul>
          </router-link>



      </div>
    </div>
</template>

<script>
    export default {
        name: "PcO",
        props:["item"]
    }
</script>

<style scoped>
  .m{
    width: 100%;
    padding-top: 20px;
    margin-bottom: 20px;
  }
    ul{
      display: flex;
      width: 100%;
      background-color: ghostwhite;
    }
  li{
    width: 25%;
    text-align: center;
  }
  p{
    color: black;
  }
</style>
