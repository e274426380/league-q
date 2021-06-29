<template>

  <league-nav>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <league-carousel/>
      </div>
      <div class="col-2"></div>

    </div>
    <league-footer/>

  </league-nav>


</template>

<script>
  import LeagueNav from "@/components/league-nav";
  import LeagueFooter from "@/components/league-footer";
  import LeagueCarousel from "@/components/league-carousel";
  export default {
    components: {LeagueCarousel, LeagueFooter, LeagueNav},
    data () {
      return {
        lang: "zh-CN",
      }
    },
    methods:{
      //切换语言
      switchLang(lang)  {
        this.$i18n.locale =lang;
      },
      changeLang(){
        const lang =this.$i18n.locale;
        if(lang==="zh-CN")
          this.$i18n.locale="en-US";
        else if(lang==="en-US")
          this.$i18n.locale="zh-CN";
      }
    },
    mounted() {
      this.switchLang(this.lang);
    }
  }
</script>

<style scoped>
  @import "@/assets/css/base.css";
  *{
    font-size: 16px;
    font-family: "微软雅黑";
    color: rgb(255, 255, 255);
    background-color: rgb(17, 24, 39);
  }
</style>
