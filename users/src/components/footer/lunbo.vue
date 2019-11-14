<template>
    <div>
      <swipe class="my-swipe">
        <swipe-item class="slide1"><a href=""><img src="../../assets/5c22e8a43a352.jpg" alt=""></a></swipe-item>
        <swipe-item class="slide2"><a href=""><img src="../../assets/5c32c8d8981d8.jpg" alt=""></a></swipe-item>
        <swipe-item class="slide3"><a href=""><img src="../../assets/5c3ef494b9f02.jpg" alt=""></a></swipe-item>
        <swipe-item class="slide4"><a href=""><img src="../../assets/5c3fe15e7635b.jpg" alt=""></a></swipe-item>
      </swipe>
    </div>
</template>


<script>

    export default {
        name: "lunbo",

    }


</script>

<style>
@import 'vue-swipe/dist/vue-swipe.css';
  .my-swipe{
    height: 175px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
img{
  width: 100%;
  height: 100%;
}

</style>
