<template>
  <Main>
      <div class="row section">
        <div class="col-1"></div>
        <div class="col-5">
          <b style="font-size: 100px;">DFINITY Library</b>
          <p STYLE="font-size: 32px;float:left;">No experience, no worries! Work hands-on with top leaders in
            Difinity blockchain to level up your development skills.</p>
          <q-btn rounded color="blue-5" :label="$t('button.learn-more')" no-caps
          style="width: 150px"></q-btn>
        </div>
        <div class="col-5 q-ml-xl">
          <img id="u346_img" src="@/assets/images/blank.svg">
        </div>
      </div>
    <div class="row section">

    </div>
  </Main>
</template>

<script>
  import Main from "../../layouts/Main";
    export default {
        name: "index.vue",
      components: {Main},
    }
</script>

<style lang="scss" scoped>
  .row{
    color: #333333;
  }
  .section{
    padding: 15px 0;
  }
  /*奇数行，隔行变色*/
  .section:nth-of-type(odd){
    background-color: rgba(242, 242, 242, 1);
  }
  /*偶数行*/
  .section:nth-of-type(even){
    background-color: rgba(215, 215, 215, 1);
  }
</style>
