<template>
    <q-carousel
      class="i-top rounded-borders"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="1000000"
      arrows
      padding
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"

    >
      <!--<q-carousel-slide :name="1" >-->
        <!--<a href="https://www.icpleague.com/" target="_blank">-->
          <!--<img alt="null" src="@/assets/images/ICPLeague.png"/></a>-->
      <!--</q-carousel-slide>-->
      <!--<q-carousel-slide :name="2">-->
        <!--<a href="https://dfinity.org/" target="_blank">-->
          <!--<img alt="null" src="@/assets/images/Carousel2.png"/>-->
        <!--</a>-->
      <!--</q-carousel-slide>-->
      <!--<q-carousel-slide :name="3">-->
        <!--<a href="https://mp.weixin.qq.com/s?__biz=MzA4NjU1NzQyMA==-->
          <!--&mid=2247485305&idx=1&sn=488d2349f64f5456c377452bf6e638c3&chksm=-->
          <!--9fc790faa8b019ecc5242ba89731d3240fe1e74f7046d9f7654c8b6d8d325ade340e03bec0fc&mpshare=-->
          <!--1&scene=23&srcid=0518S6IbFAmiNrmv0hx3UcpT&sharer_sharetime=1621341022346&sharer_shareid=f1edc-->
          <!--3c69048c31e48f88397daab2e99%23rd">-->
          <!--<img alt="null" src="@/assets/images/banner1.webp.jpg"/>-->
        <!--</a>-->
      <!--</q-carousel-slide>-->
      <q-carousel-slide :name="1" class="column no-wrap flex-center">
        <a href="https://www.icpleague.com/" target="_blank">
          <img alt="null" src="@/assets/images/ICPLeague.png"/>
        </a>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap flex-center">
        <a href="https://dfinity.org/" target="_blank">
          <img alt="null" src="@/assets/images/Carousel2.png"/>
        </a>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap flex-center">
        <a href="https://mp.weixin.qq.com/s?__biz=MzA4NjU1NzQyMA==
      &mid=2247485305&idx=1&sn=488d2349f64f5456c377452bf6e638c3&chksm=
      9fc790faa8b019ecc5242ba89731d3240fe1e74f7046d9f7654c8b6d8d325ade340e03bec0fc&mpshare=
      1&scene=23&srcid=0518S6IbFAmiNrmv0hx3UcpT&sharer_sharetime=1621341022346&sharer_shareid=f1edc
      3c69048c31e48f88397daab2e99%23rd">
          <img alt="null" src="@/assets/images/banner1.webp.jpg"/>
        </a>
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="column no-wrap flex-center" img-src="@/assets/images/ICPLeague.png">
      </q-carousel-slide>
    </q-carousel>
</template>

<script>
    export default {
        name: "league-carousel",
        data () {
        return {
          slide: 1,
          autoplay: true
        }
      }
    }
</script>

<style lang="scss" scoped>
  .img-1{
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/ICPLeague.png);
  }
  .i-top{
    margin-top: 40px;
    border-radius: 60px;
  }
  .q-carousel__slide{
    a{
      img{
        max-height: 420px;
        width: 100%;
        height: 100%;
      }
    }
  }
  /*轮播图CSS*/
  .el-carousel__container {
    height: 590px;
    border-radius: 60px;
  }
  .el-carousel__item {
    border-radius: 60px;
    text-align: center;
  }
  .banner-logo {
    /*background-color:#EA3D5A;*/
    background-image: url(../assets/images/logo-background.png);
    background-size: 1140px 490px;
  }
</style>
