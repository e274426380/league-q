<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <Main>
    <div class="row section head">
      <div class="row container">
        <div class="col-6 ">
          <p class="text-h1 text-weight-bolder">DFINITY Dapps</p>
          <p class="text-h4 text-weight-bold q-mb-xl">Where you can find out more Diffinity dapps , or upload your dapps .</p>
          <q-btn color="blue-5" :label="$t('button.learn-more')" no-caps
                 style="width: 150px"></q-btn>
          <q-btn  color="blue-5" :label="$t('button.learn-more')" no-caps
                 class="q-ml-md"
                 style="width: 150px"></q-btn>
        </div>
        <div class="col-6 q-pl-xl">
          <img id="u346_img" src="@/assets/images/blank.svg">
        </div>
      </div>
    </div>
    <div class="row section carousel">
      <div class="row container">
        <div class="col-12">
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
            <q-carousel-slide :name="1" img-src="@/assets/images/blank.svg">
            </q-carousel-slide>
            <q-carousel-slide :name="2" img-src="@/assets/images/blank.svg"/>
            <q-carousel-slide :name="3" img-src="@/assets/images/blank.svg" />
          </q-carousel>
        </div>

      </div>

    </div>
    <div class="row section dapps q-pt-lg">
      <div class="row container">
        <div class="col-5 q-gutter-x-md">
            <q-btn no-caps>Sort:  {{tag}}  ({{number}})</q-btn>
            <q-btn no-caps v-for="tag in tags">
              {{tag}}
            </q-btn>
        </div>
            <q-space />
            <q-input style="max-width: 300px" bottom-slots v-model="search" :dense="dense">
              <template v-slot:prepend>
                <q-icon name="bi-search" />
              </template>
              <template v-slot:append>
                <q-icon name="close" @click="search = ''" class="cursor-pointer" />
              </template>
            </q-input>
      </div>
      <div class="row container q-col-gutter-md">
        <div class="col-4" v-for="index in 4">
        <q-card class="my-card q-pa-lg" flat bordered>
          <q-item>
            <q-item-section style="align-self: flex-start;" horizontal avatar>
              <q-avatar  size="80px">
                <img src="@/assets/images/blank.svg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label class="items-center">
                  <div class="text-h5">Dapp Name <q-badge align="top" color="red">Hot</q-badge></div>
                <q-avatar size="30px" class="q-mr-md">
                  <img src="@/assets/images/blank.svg">
                </q-avatar>
                <q-avatar size="30px"  class="q-mr-md">
                  <img src="@/assets/images/blank.svg">
                </q-avatar>
                 <span class="text-weight-bold text-grey">+ {{number}} Grants</span>
              </q-item-label>
              <q-separator class="q-my-sm"/>
              <q-item-label caption>
                <span class="text-weight-bold">Your dapp product description according in this area</span>
              </q-item-label>
              <q-item-label>
                <div class="q-gutter-md">
                  <q-badge align="middle"> NFT </q-badge>
                  <q-badge align="middle"> DeFi </q-badge>
                  <q-badge align="middle"> Social </q-badge>
                </div>
              </q-item-label>
              <q-item-label>
                <div class="q-gutter-xs">
                  <q-avatar size="25px" color="black">
                    <q-icon name="bi-twitter" color="white"/>
                  </q-avatar>
                  <q-avatar size="25px" color="black">
                    <q-icon name="bi-github" color="white"/>
                  </q-avatar>
                  <q-avatar size="25px" color="black">
                    <q-icon name="bi-twitter" color="white"/>
                  </q-avatar>
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-card-action>
            <div class="row q-gutter-sm q-mb-md">
              <div class="col-4 q-pl-xs">
                <q-btn class="full-width" color="blue-6" >
                  <q-icon class="flip-horizontal" name="bi-reply-fill"></q-icon>
                </q-btn>
              </div>
              <div class="col-7">
                <q-btn class="full-width" color="blue-6"
                       icon="bi-box-arrow-in-right"
                       no-caps label="View" />
              </div>
            </div>

          </q-card-action>
        </q-card>
        </div>
      </div>
    </div>
  </Main>
</template>

<script>
  import Main from "../../layouts/Main";
    export default {
        name: "index",
        components: {Main},
      data () {
        return {
          slide: 1,
          autoplay: true,
          tag:"All",
          tags:[
            "All","NFT","DeFi","Social"
          ],
          number:3,
          search:"",
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .row{
    color: #333333;
  }
  .section{
    padding: 15px 0;
    background-color: rgba(242, 242, 242, 1);
  }
  .q-carousel__slide{
    background-size:100% 100%;
  }
  .q-carousel__slide:hover{
    cursor:pointer;
  }
  .my-card{
  width: 100%;
  /*max-width: 350px;*/
  }
</style>
