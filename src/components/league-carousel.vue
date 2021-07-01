<template>
    <q-carousel
      class="i-top"
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="10000"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      height="400"
    >
      <q-carousel-slide :name="1" img-src="@/assets/images/ICPLeaguePic.png" @click="getUrl(1)">
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="@/assets/images/dfinity-background.png" @click="getUrl(2)"/>
      <q-carousel-slide :name="3" img-src="@/assets/images/banner1.webp.jpg" @click="getUrl(3)"/>
    </q-carousel>
</template>

<script>
    export default {
      name: "league-carousel",
      data() {
        return {
          slide: 1,
          autoplay: true,
          // 对应几个轮播图的url地址
          url: [
            "https://www.icpleague.com/",
            "https://dfinity.org/",
            "https://mp.weixin.qq.com/s?__biz=MzA4NjU1NzQyMA==%20%20%20%20%20%20%20%20&mid=2247485305&idx=1&sn=488d234" +
            "9f64f5456c377452bf6e638c3&chksm=%20%20%20%20%20%20%20%209fc790faa8b019ecc5242ba89731d3240fe1e74f7046d9f7654" +
            "c8b6d8d325ade340e03bec0fc&mpshare=%20%20%20%20%20%20%20%201&scene=23&srcid=0518S6IbFAmiNrmv0hx3UcpT&sharer" +
            "_sharetime=1621341022346&sharer_shareid=f1edc%20%20%20%20%20%20%20%203c69048c31e48f88397daab2e99%23rd"
          ]
        }
      },
      methods: {
        // 因为很难直接写a标签，所以轮播图用js的方法打开超链接
        getUrl(x) {
          const y=x-1;
          window.open(this.url[y]);
        }
      }
    }
</script>

<style lang="scss" scoped>
  .i-top{
    margin-top: 40px;
    border-radius: 60px;
  }
  .q-carousel__slide{
    background-size:100% 100%;
  }
  .q-carousel__slide:hover{
    cursor:pointer;
  }
  .banner-logo {
    /*background-color:#EA3D5A;*/
    background-image: url(../assets/images/logo-background.png);
  }
</style>
