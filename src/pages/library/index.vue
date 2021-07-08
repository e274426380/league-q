<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <Main>
      <div class="row section">
        <div class="col-5 offset-1">
          <b style="font-size: 90px;">DFINITY Library</b>
          <p STYLE="font-size: 32px;">No experience, no worries! Work hands-on with top leaders in
            Difinity blockchain to level up your development skills.</p>
          <q-btn rounded color="blue-5" :label="$t('button.learn-more')" no-caps
          style="width: 150px"></q-btn>
        </div>
        <div class="col-5 q-ml-xl">
          <img id="u346_img" src="@/assets/images/blank.svg">
        </div>
      </div>
    <div class="row section">
      <div class="row container q-my-lg">
        <div class="col-6" style="margin: 0 auto">
          <q-input color="teal" outlined v-model="text" readonly>
            <template v-slot:before>
              <span class="i-text">Install The Computer SDK</span>
            </template>
            <template v-slot:append>
              <q-icon class="cursor-pointer" @click="copyToClipboard()" name="bi-files"/>
            </template>
          </q-input>
        </div>
      </div>
      <div class="row container q-my-lg">
        <span>
          There is your banner's name2, you can edit that in the manager sever.There is your banner's name2,
          you can edit that in the manager sever.There is your banner's name2, you can edit that in the manager
          sever.There is your banner's name2, you can edit that in the manager sever.There is your banner's name2,
          you can edit that in the manager sever.
        </span>
    </div>
      <div class="row container q-my-lg q-col-gutter-lg">
        <div class="col-3" v-for="(feature,index) in featuresData" :key="`lg-${index}`">
        <q-card class="my-card" bordered>
          <q-card-section>
            <div class="text-h6">{{feature.feature}}</div>
          </q-card-section>
          <q-separator/>
          <q-card-section>
            {{ feature.text }}
          </q-card-section>
        </q-card>
        </div>
      </div>
    </div>
    <div class="row section">
        <div class="row container">

        </div>
    </div>
  </Main>
</template>

<script>
  import Main from "../../layouts/Main";
  import { copyToClipboard } from 'quasar'
    export default {
      name: "index.vue",
      components: {Main},
      data () {
        return {
          index:0,
          featuresData:[
            {
              feature:"Feature 1",
              text:'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text .',
            },
            {
              feature:"Feature 2",
              text:'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text .',
            },
            {
              feature:"Feature 3",
              text:'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text .',
            },
            {
              feature:"Feature 4",
              text:'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text .',
            },
            {
              feature:"Feature 5",
              text:'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text .',
            },
            {
              feature:"Feature 6",
              text:'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text .',
            },
            {
              feature:"Feature 7",
              text:'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text .',
            },
            {
              feature:"Feature 8",
              text:'Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text .',
            },
          ],
          lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
            'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          text: "$ sudo -i  \"$(curl -fsSL http://sdk.abc.com)\"",
        }
      },
      methods:{
        copyToClipboard(){
          // quasar自带粘贴到剪贴板方法
          copyToClipboard(this.text)
            .then(() => {
              // 成功!
              this.$q.notify({
                message: this.$t('success'),
                color: 'green'
              })
            })
            .catch(() => {
              // 失败
              this.$q.notify({
                message: this.$t('failed'),
                color: 'red'
              })
            })
        }
      }
    }
</script>

<style lang="scss" scoped>
  .row{
    color: #333333;
  }
  .my-card{
    width: 100%;
    /*max-width: 250px;*/
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
