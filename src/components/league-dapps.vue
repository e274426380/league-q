<template>
  <div class="row">
    <div class="subtitle q-ml-xl">
      <img class="body-logo" alt="DApps" src="@/assets/images/icon/cd_Dapps@2x.png">
      <b>{{$t('button.dapps')}}</b>
      <!--以页码的形式展示-->
      <!--<el-button type="danger" round @click="toPage(index)"-->
      <!--:class="{active:index==currentPage}"-->
      <!--v-for="(item, index) in pageNum"-->
      <!--:key="index">Tab {{index+1}}</el-button>-->
      <!--以tag的形式筛选-->
      <q-btn unelevated class="q-btn-i q-ml-lg" type="danger" round @click="dappChange('All')"
             :class="{active:'All'===tagButton}">All
      </q-btn>
      <q-btn unelevated class="q-btn-i q-ml-lg" type="danger" round @click="dappChange(tag)"
             :class="{active:tag===tagButton}"
             v-for="(tag, index) in tags"
             :key="index">{{tag}}
      </q-btn>
    </div>
    <div class="dapps row items-center q-mb-lg">
      <div class="col-1 dapps-left-arrow q-mt-lg" @click="prePage">
        <img alt="" src="@/assets/images/icon/dapps_left_nor.png"/>
      </div>
      <div class="row col-10" style="align-self: flex-start;">
        <div class="col-2 right-move" v-for="(dapp,index) in dappsData" :key="index">
          <div class="col-2 q-mt-lg">
            <a :href="dapp.url" class="dapps-url">
              <div class="dapps-logo"><img alt="dapps" :src=dapp.logoSrc>
                <br/>
                <b>{{dapp.title}}</b></div>
            </a>
          </div>
        </div>
      </div>
      <div class="col-1 dapps-right-arrow q-mt-lg q-pl-md" @click="nextPage">
        <img alt="" src="@/assets/images/icon/dapps_right_nor.png"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "league-dapps",
      data() {
        return {
          tags:[
            "Community","Social","dApp","DeFi"
          ],
          dapps:[
            {
              logoSrc:require('../assets/images/dapps/icpleague.png'),
              title:"ICPLeague",
              url:"https://www.icpleague.com/",
              tag:"Community"
            },
            {
              logoSrc:require('../assets/images/dapps/OpenChat.jpg'),
              title:"OpenChat",
              url:"https://7e6iv-biaaa-aaaaf-aaada-cai.ic0.app/",
              tag:"Social"
            },
            {
              logoSrc:require('../assets/images/dapps/CapsuleSocial.jpg'),
              title:"CapsuleSocial",
              url:"https://capsule.social/",
              tag:"Social"
            },
            {
              logoSrc:require('../assets/images/dapps/DfiStarter.jpg'),
              title:"DfiStarter",
              url:"https://dfistarter.io/",
              tag:"Social"
            },
            {
              logoSrc:require('../assets/images/dapps/DFINITY SCAN.webp.jpg'),
              title:"DFINITY SCAN",
              url:"https://www.icp.report/",
              tag:"Community"
            },         {
              logoSrc:require('../assets/images/dapps/cycle_dao.png'),
              title:"cycle_dao",
              url:"https://cycledao.xyz/",
              tag:"dApp"
            },         {
              logoSrc:require('../assets/images/dapps/Distrikt.jpg'),
              title:"Distrikt",
              url:"https://twitter.com/DistriktApp",
              tag:"Social"
            },
            {
              logoSrc:require('../assets/images/dapps/Canistore.png'),
              title:"Canistore",
              url:"https://canistore.io/",
              tag:"Social"
            },
            {
              logoSrc:require('../assets/images/dapps/EnsoFinance.png'),
              title:"EnsoFinance",
              url:"https://www.enso.finance/",
              tag:"DeFi"
            },
            {
              logoSrc:require('../assets/images/dapps/aedile.png'),
              title:"aedile",
              url:"https://twitter.com/aedile_ic",
              tag:"dApp"
            },
          ],
          //dapp的显示
          dappsData:{},
          //当前dapp按钮选中的
          tagButton:"All",
          tagDapp:{},
          //页面高度写死的，如果要改size一起改页面
          pageSize:10,
          currentPage:0,
          pageMaxNum:0,
          index:0,
        }
      },
      watch:{
        currentPage(val,oldVal){
          if (this.tagButton !== "All")
          {
            this.dataShow(this.tagDapp);
          }
          else {
            this.dataShow(this.dapps);
          }
        }
      },
      methods: {
        //分页
        dataShow(data){
          let start = this.currentPage*this.pageSize;
          let end = Math.min((this.currentPage+1)*this.pageSize, data.length);
          this.dappsData=data.slice(start, end);
          // return this.dapps.slice(start, end)
        },
        //计算最大页码
        pageMax(data){
          this.pageMaxNum=Math.ceil(data.length / this.pageSize) || 1;
          return this.pageMaxNum ;
        },
        dappChange(tag){
          //如果不是All，就筛选tag
          if (tag !== "All") {
            let tagDapp = this.dapps.filter(function (dapp) {
              return dapp.tag === tag;
            });
            //此标签总共包含的dapp
            this.tagDapp=tagDapp;
            this.pageMax(tagDapp);
            this.dataShow(tagDapp);
          }
          //如果是，就展示全部
          else {
            //保证回到All时是第一页
            this.currentPage=0;
            this.pageMax(this.dapps);
            this.dataShow(this.dapps);
          }
          //标记当前tag的按钮
          this.tagButton=tag;
        },
        nextPage(){
          if (this.currentPage >= this.pageMaxNum - 1)
          {
            this.currentPage= 0;
            return
          }
          this.currentPage++;
        },
        prePage(){
          if (this.currentPage <= 0)
          {
            this.currentPage=this.pageMaxNum-1;
            return
          }
          this.currentPage--;
        },
        toPage(page){
          this.currentPage = page;
        }
      },
      mounted() {
        this.dataShow(this.dapps);
      }
    }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/base.css";
  .body-logo {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    margin-bottom: 6px;
    vertical-align:middle;
  }
  /*dapps的头部*/
  .subtitle {
    .q-btn-i{
      width: 131px;
      background-color:transparent;
      color: #EA3D5A;
      /* 按钮设置边框 */
      border:1px solid #EA3D5A;
    }
    b{
      margin-right: 30px;
      font-size: 24px;
      color: #f8eef3;
      font-weight: bold;
    }
  }
  /*tag按钮激活后*/
  .active{
    background: #EA3D5A!important;
    color: white!important;
  }

  .dapps{
    width: 1100px;
    height: 410px;
    margin: 0 auto;
    img {
      width: 150px;
      height: 150px;
    }
    /*.row {*/
      /*margin-top: 40px;*/
    /*}*/
    /*dapps图标控制*/
    .row .col{
      float: left;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      width: 16%;
      margin-bottom: 30px;
    }
  }
  .dapps-logo{
    text-align: center;
    width: 200px;
    height: 175px;
    background: #1F2937;
    box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.1);
    border-radius: 20px;
    display: table-cell;
    vertical-align: middle;
    img{
      width: 100px;
      height: 100px;
      border-radius: 25px;
    }
  }
  .right-move{
    margin-right: 30px;
  }
  /*左右箭头样式*/
  .dapps-left-arrow{
    img{
      width: 45px;
      height: 90px;
    }
    img:hover{
      content: url(../assets/images/icon/dapps_left_pre.png);
      cursor: pointer;
    }
  }
  .dapps-right-arrow{
    img{
      width: 45px;
      height: 90px;
    }
    img:hover{
      content: url(../assets/images/icon/dapps_right_pre.png);
      cursor: pointer;
    }
  }
</style>
