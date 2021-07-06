<template>
  <league-nav>
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
      <q-page>
         <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10 col-xs-12">
            <div class="row">
              <div class="col-md-10 offset-md-1 col-xs-12">
                <slot>

                </slot>
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
          <league-footer/>
      </q-page>
    </q-page-container>

  </league-nav>
</template>

<script>
  import LeagueNav from "@/components/league-nav";
  import LeagueFooter from "@/components/league-footer";
    export default {
        name: "Main",
        components: {LeagueFooter, LeagueNav},
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
