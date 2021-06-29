<template>
  <q-layout view="hHh lpR fFf" >
    <league-nav/>

    <q-page-container>
      <!--<div class="row bg-accent">-->
        <!--<div class="col">1</div>-->
      <!--</div>-->
      <!--<div class="row bg-deep-purple-6">-->
        <!--<div style="order: 2">Second column</div>-->
        <!--<div class="order-last">Third column</div>-->
        <!--<div class="order-first">First column</div>-->
      <!--</div>-->
      <league-footer/>
    </q-page-container>

  </q-layout>
</template>

<script>
  import LeagueNav from "@/components/league-nav";
  import LeagueFooter from "@/components/league-footer";
  export default {
    components: {LeagueFooter, LeagueNav},
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
  }
</style>
