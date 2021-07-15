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
        <div class="row q-gutter-x-md">
            <q-btn no-caps>Sort:  {{tag}}  ({{number}})</q-btn>
            <q-btn no-caps v-for="tag in tags">
              {{tag}}
            </q-btn>
          <q-space/>
          <q-input bottom-slots v-model="text" label="Label" counter :dense="dense">
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="text = ''" class="cursor-pointer" />
            </template>

            <template v-slot:hint>
              Field hint
            </template>
          </q-input>
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
          number:"3"
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
</style>
