<template>
  <q-layout view="hHh lpR fFf" >
    <q-header elevated class="nav-menu bg-i-grey text-grey-8 q-py-xs" height-hint="58">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-md-8 col-xs-12">
          <q-toolbar>
            <q-toolbar-title>
              <!--左侧任务栏按钮-->
              <!--<q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />-->
              <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
                <img alt="icp-logo" class="nav-icon" src="@/assets/images/logo@2x.png"/>
              </q-btn>
            </q-toolbar-title>

            <q-btn stretch flat :label="$t('button.library')"
                   no-caps
                   type="a" href="https://shuzhichengspace.gitbook.io/dfinity/yi-kuai-su-ru-men" target="__blank"/>
            <q-btn stretch flat :label="$t('button.dapps')"
                   no-caps/>
            <q-btn stretch flat :label="$t('button.forum')"
                   no-caps
                   type="a" href="https://www.icpleague.com/" target="__blank"/>
            <q-btn stretch flat :label="$t('button.grant')"
                   no-caps
                   type="a" href="https://dfinity.org/grants/" target="__blank"/>
            <q-btn stretch flat :label="$t('button.language')"
                   no-caps
                   @click="changeLang()"/>
            <q-btn
              rounded
              class="q-btn-i"
              :label="$t('button.login')"
              style="margin-left: 20px"
              no-caps
            />
          </q-toolbar>
        </div>
        <div class="col-2"></div>
      </div>
    </q-header>
    <!--左侧任务栏，用来适配移动端的顶部导航栏，未做完-->
    <!--<q-drawer-->
      <!--v-model="drawerLeft"-->
      <!--show-if-above-->
      <!--:width="200"-->
      <!--:breakpoint="700"-->
      <!--elevated-->
      <!--content-class="bg-grey-3"-->
      <!--behavior="mobile"-->
    <!--&gt;-->
      <!--<q-scroll-area class="fit">-->
        <!--<q-list padding>-->
          <!--<template v-for="(menuItem, index) in menuList">-->
            <!--<q-item :key="index" clickable :active="menuItem.label === 'Outbox'" v-ripple>-->
              <!--<q-item-section avatar>-->
                <!--<q-icon :name="menuItem.icon" />-->
              <!--</q-item-section>-->
              <!--<q-item-section>-->
                <!--{{ menuItem.label }}-->
              <!--</q-item-section>-->
            <!--</q-item>-->
            <!--<q-separator :key="'sep' + index"  v-if="menuItem.separator" />-->
          <!--</template>-->
        <!--</q-list>-->
      <!--</q-scroll-area>-->
    <!--</q-drawer>-->
    <q-page-container>
      <slot></slot>
    </q-page-container>

  </q-layout>
</template>

<script>
  export default {
    data () {
      return {
        lang: "zh-CN",
        drawerLeft:"false"
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
<style>
  .bg-i-grey{
    background: #1F2937;
  }
  .bg-i-red{
    background: #EA3D5A;
  }
  .q-btn-i{
    width: 111px;
    height: 40px;
    background: #EA3D5A;
    border-radius: 20px;
    border-color:#EA3D5A;
    font-weight: bold;
    font-size:16px;
    text-align: center;
  }
</style>
<style scoped>
  @import "@/assets/css/base.css";
  *{
    font-size: 16px;
    font-family: "微软雅黑";
    color: rgb(255, 255, 255);
  }
  /*导航栏CSS*/
  .nav-menu {
    box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.2)!important;
  }
  .nav-icon {
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 30px;
  }
</style>
