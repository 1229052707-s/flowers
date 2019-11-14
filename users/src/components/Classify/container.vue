<template>
    <div style="background-color: white;height: 730px;">
      <ul>
        <li v-for="i in item" style="border-bottom: 1px solid #eee;">
          <a href="" style="display: flex;width: 100%;">
            <img :src="i.img" alt="">
            <div class="zi">
              <p>{{i.name1}}</p>
              <p>{{i.name2}}</p>
            </div>
            <img :src="i.url" alt="" class="imgg">
          </a>

        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "container",
        props:["item"]
    }
</script>

<style scoped>

    img{
      width: 15%;
      /* height: 100%; */
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .imgg{
      width: 7%;
      margin-top: 35px;
    }
  .zi{
    width: 70%;
    padding-top: 25px;
    line-height: 25px;
    margin-left: 10px;
  }
</style>
