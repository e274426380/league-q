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
            <q-separator inset />
            <q-card-section>
              {{ feature.text }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="row section">
      <div class="row container q-my-lg q-col-gutter-xl">
        <div class="col-3" v-for="(mod,index) in mods" :key="`xl-${index}`">
          <q-card class="my-card">
            <img :src=mod.imgSrc>
            <q-card-section>
              <div class="text-h6 text-center">{{mod.title}}</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row container q-my-lg items-center">
        <div class="col-4 offset-2">
          <img style="width: 459px;height: 504px;" src="@/assets/images/blank.svg"/>
        </div>
        <div class="col-5">
          <div class="left-border">
            <p class="text-h4">Start Learning <i class="bi bi-chevron-right"></i></p>
            <span class="text-subtitle1">For very first balabalabala xxxxx xxxx xxxxxxxx xxxx xx x x xxxxxx xxxx xxxxx x xxxxx x x. xxxxxxxx.</span>
          </div>
          <div class="left-border q-mt-xl">
            <p class="text-h4">Gitbook <i class="bi bi-chevron-right"></i></p>
            <span class="text-subtitle1">For very first balabalabala xxxxx xxxx xxxxxxxx xxxx xx x x xxxxxx xxxx xxxxx x xxxxx x x. xxxxxxxx.</span>
          </div>
        </div>
      </div>
      <div class="row container q-my-lg items-center">
        <div class="col-10 offset-1">
          <img style="width: 1374px;height: 300px;" src="@/assets/images/blank.svg"/>
          <div class="img_text">
            <p><span>WishList</span></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row section">
      <div class="row container">
        <div class="col-8">
          <p class="text-h4">Learn by Activity</p>
          <p class="text-subtitle1">Join a community of life-long learners</p>
        </div>
        <div class="col-3">
          <q-btn class="q-mt-md" rounded color="blue-5" :label="$t('button.learn-more')" no-caps
                 style="width: 150px;float: right"></q-btn>
        </div>
      </div>
      <div class="row container">
        <div class="col-11">
          <q-card class="my-card q-mb-lg" flat bordered v-for="(activity,index) in activities" :key="index">
            <!--限制数量小于3个-->
            <template v-if="index < 3">
              <q-card-section horizontal>
                <q-img
                  class="col-2"
                  :src=activity.imgSrc
                />
                <q-card-section>
                  <div class="row items-center q-mb-md">
                    <div class="col-7">
                      <span class="text-h4">{{activity.title}}</span>
                    </div>
                    <div class="col-4">
                      <span class="text-h5" style="float: right">{{activity.startDate}} - {{activity.endDate}}</span>
                    </div>
                  </div>
                  <div class="row">
                    {{activity.text}}
                  </div>
                </q-card-section>
              </q-card-section>
            </template>
          </q-card>
        </div>
      </div>
    </div>
    <div class="row section">
      <div class="row container q-mt-lg">
            <span class="text-h4 text-weight-bolder">Community</span>
      </div>
      <div class="row container q-my-lg">
        <div class="col-6">
          <img src="@/assets/images/blank.svg"/>
        </div>
        <div class="col-6">
          <img src="@/assets/images/blank.svg"/>
        </div>
      </div>
      <div class="row container q-my-lg">
        <div class="col">
          <span class="text-h4 text-weight-bolder">Contact Us</span>
          <br/>
          <span class="text-h6">Whether you're working on a specific project, or you're still exploring possibilities,
            you can connect with our team for guidance.</span>
        </div>
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
          mods:[
            {
              imgSrc:require('@/assets/images/blank.svg'),
              title:"Quick Start >",
            },
            {
              imgSrc:require('@/assets/images/blank.svg'),
              title:"For Personal >",
            },
            {
              imgSrc:require('@/assets/images/blank.svg'),
              title:"For Developer >",
            },
            {
              imgSrc:require('@/assets/images/blank.svg'),
              title:"Whitepaper >",
            },
          ],
          activities:[
            {
              imgSrc:require('@/assets/images/blank.svg'),
              title:'Teaching Activity 1',
              startDate:'May 23.2021',
              endDate:'Jul 25.2021',
              text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et ' +
                'viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et ' +
                'magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra v' +
                'ulputate, felis tellus mollis orci,'
            },
            {
              imgSrc:require('@/assets/images/blank.svg'),
              title:'Teaching Activity 2',
              startDate:'May 23.2021',
              endDate:'Jul 25.2021',
              text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et ' +
                'viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et ' +
                'magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra v' +
                'ulputate, felis tellus mollis orci,'
            },
            {
              imgSrc:require('@/assets/images/blank.svg'),
              title:'Teaching Activity 3',
              startDate:'May 23.2021',
              endDate:'Jul 25.2021',
              text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                'Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et ' +
                'viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et ' +
                'magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra v' +
                'ulputate, felis tellus mollis orci,'
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
  .left-border{
    border-left: 10px gray solid;
    padding-left: 20px;
  }
  .img_text{
    position: relative;
    bottom: 230px;
    text-align: center;
    font-size: 100px;
    color: #7F7F7F;
  }
</style>
