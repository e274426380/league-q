<template>
  <Main>
            <league-carousel/>
            <league-card/>
            <league-dapps/>
  </Main>


</template>

<script>
  import LeagueNav from "@/components/league-nav";
  import LeagueFooter from "@/components/league-footer";
  import LeagueCarousel from "@/components/league-carousel";
  import LeagueCard from "@/components/league-card";
  import LeagueDapps from "@/components/league-dapps";
  import Main from "../../layouts/Main";
  export default {
    components: {Main, LeagueDapps, LeagueCard, LeagueCarousel, LeagueFooter, LeagueNav},
    data () {
      return {
        lang: "zh-CN",
        idCard:"",
        stuCard: '',
        idFileChoose: true,
        stuFileChoose: true
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
