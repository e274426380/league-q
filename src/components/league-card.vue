<template>
  <div class="row">
    <div class="col-i-card col-xs-12">
      <div class="grid-content">
        <div class="row card-title">
          <div class="col-10">
            <img class="body-logo" alt="library" src="@/assets/images/icon/cd_Library@2x.png">
            <b >{{$t('button.library')}}</b>
          </div>
          <a href="https://shuzhichengspace.gitbook.io/dfinity/yi-kuai-su-ru-men">
            <div class="col-2">
              <q-icon name="bi-chevron-right" /><p>{{$t('button.more')}}</p>
            </div>
          </a>
        </div>
        <q-card class="card-bg">
          <div class="card-container q-ml-lg" v-for="(data,index) in libraryData" v-if="index < 5" :key="index">
            <a :href="data.url" class="card-url">
                   <span class="left-ball">
                    {{data.username}}
                  </span>
              <div class="card-main">
                <div slot="header" class="card-header">
                  <b>{{data.title}}</b>
                </div>
                <div class="card-content">
                  <span>{{data.content}}</span>
                </div>
              </div>
              <!--当只有5个数据时，保证最下面的一根线不显示-->
              <hr v-if="index<4" align="left"/>
              <!--让卡片最下面的数据有间距，不至于hover时紧贴文字最下方-->
              <div v-else style="padding-bottom: 10px"></div>
            </a>
          </div>
        </q-card>
      </div>
    </div>
    <div class="col-i-card col-xs-12">
      <div class="grid-content">
        <div class="row card-title">
          <div class="col-10">
            <img class="body-logo" alt="forum" src="@/assets/images/icon/cd_Forum@2x.png">
            <b>{{$t('button.forum')}}</b>
          </div>
          <a href="https://www.icpleague.com/">
            <div class="col-2">
              <q-icon name="bi-chevron-right" /><p>{{$t('button.more')}}</p>
            </div>
          </a>
        </div>
        <q-card class="card-bg">
          <div class="card-container  q-ml-lg" v-for="(data,index) in forumData" v-if="index < 5" :key="index">
            <a :href="'https://www.icpleague.com/thread/'+data.threadId" class="card-url">
                  <span class="left-ball">
                    {{data.username}}
                  </span>
              <div class="card-main">
                <div slot="header" class="card-header">
                  <b>{{data.title}}</b>
                </div>
                <div class="card-content">
                  <span>{{data.content}}</span>
                </div>
              </div>
              <!--当只有5个数据时，保证最下面的一根线不显示-->
              <hr v-if="index<4" align="left"/>
              <div v-else style="padding-bottom: 10px"></div>
            </a>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
  import request from '@/utils/request.js'
    export default {
        name: "league-card",
      data() {
          return{
            // 文库数据
            libraryData: [
              {
                title: "一、快速入门",
                content: "DFINITY Canister软件开发工具包 (SDK) 提供工具、示例代码和文档，可帮助您创建在 Internet Computer网络上运...",
                url:"https://shuzhichengspace.gitbook.io/dfinity/yi-kuai-su-ru-men",
                username:"Turbo",
                // 头像地址
                avatarUrl:"",
              },
              {
                title: "二、基本概念",
                content: "在Internet Computer（互联网计算机，以下称IC）平台上，你可以很快写出一个成功运行的程序，而不用关心其内部工作...",
                url:"https://shuzhichengspace.gitbook.io/dfinity/er-ji-ben-gai-nian",
                username:"Turbo",
                // 头像地址
                avatarUrl:"",
              },
              {
                title: "三、手把手",
                content: "Canister SDK-开发工具\n" +
                  "Internet Computer区块链已准备好以一种新的方式来设计、构建和发布软件...",
                url:"https://shuzhichengspace.gitbook.io/dfinity/san-shou-ba-shou",
                username:"Turbo",
                // 头像地址
                avatarUrl:"",
              },
              {
                title: "四、教程",
                content: "接下来，我们将探索编写一些简单的程序，为您提供创建在 Internet Computer上运行程序的实践经验...",
                url:"https://shuzhichengspace.gitbook.io/dfinity/si-.-jiao-cheng",
                username:"zhou",
                // 头像地址
                avatarUrl:"",
              },
              {
                title: "六、Internet Computer 接口规范",
                content: "以下是本节中的文章：简介 未指定的常数和限制 标识码 签名 系统状态树...",
                url:"https://shuzhichengspace.gitbook.io/dfinity/qi-internet-computer-jie-kou-gui-fan",
                username:"Turbo",
                // 头像地址
                avatarUrl:"",
              },
            ],
            //论坛数据
            //现在使用threadId来定位超链接，而不是url
            forumData: [
              {
                title: "DFINITY链上钱包创建流程",
                content: "一、准备好环境及相关硬件\n" +
                  "\n" +
                  "1.1 因为Dfinity钱包是与U2F硬件设备绑定的，所以iPhone,带指纹识别...",
                url:"https://www.icpleague.com/thread/59",
                threadId:"59",
                username:"Turbo",
                // 头像地址
                avatarUrl:"",
              },
              {
                title: "如何使用DFINITY的治理系统赚取ICP？",
                content: "注意：目前NNS刚投入使用100小时，可能存在BUG，请保证手续费充足，谨慎操作！\n" +
                  "\n" +
                  "上一篇文章介绍了如何...",
                url:"https://www.icpleague.com/thread/47",
                threadId:"47",
                username:"Turbo",
                // 头像地址
                avatarUrl:"",
              },
              {
                title: "了解互联网计算机的网络神​​经系统、神经元和ICP实用令牌",
                content: "#治理# #nns# #icp#\n" +
                  "\n" +
                  "互联网计算机是世界上第一个完全自适应的区块链，互联网计算机网络以及...",
                url:"https://www.icpleague.com/thread/29",
                threadId:"29",
                username:"Turbo",
                // 头像地址
                avatarUrl:"",
              },
              {
                title: "DFINITY 创始人Dominic Williams：互联网计算机是区块链领域的第三大创新",
                content: "#新闻# #革命#\n" +
                  "\n" +
                  "5 月 8 日，去中心化计算平台 DFIN...",
                url:"https://www.icpleague.com/thread/22",
                threadId:"22",
                username:"zhou",
                // 头像地址
                avatarUrl:"",
              },
              {
                title: "ICP代币的提取细节",
                content: "#空投# #领取# #钱包#经过世界各地数百人多年的努力，DFINITY基金会很自豪地宣布...",
                url:"https://www.icpleague.com/thread/23",
                threadId:"23",
                username:"Turbo",
                // 头像地址
                avatarUrl:"",
              },
            ],
            index:0,
          }
      },
      methods:{
        getForumEssence(){
          request({
            url:"/threads",
            method:"get",
            params:{
              include:"user",
              "filter[isEssence]":"yes",
              sort:"-createdAt"
            }
          }).then((resp)=>{
            //只取精华贴的最近5个
            const forumData=resp.data.slice(0,5);
            //获取精华贴中包含的用户名，用来和贴子的作者匹配
            let user = resp.included.filter(function (user) {
              return user.type === "users";
            });
            //正则表达式，过滤文章内容，移除[]，()及其内容，还有感叹号！星号*，用于处理一些不协调的网页元素
            let regex=/\[.*?\]|\(.*?\)|[!*]|\#.*?\#/g;
            //提前定义length，优化下for循环效率
            for (let i = 0,length = forumData.length; i <length; i++) {
              this.forumData[i].title=forumData[i].attributes.title;
              const poster = user.find(user=>user.id=== forumData[i].relationships.user.data.id);
              //只留首字母大写
              this.forumData[i].username=poster.attributes.username.slice(0,1).toUpperCase();
              this.forumData[i].threadId=forumData[i].id;
              forumData[i].attributes.postContent=forumData[i].attributes.postContent.replace(regex,'');
              this.forumData[i].content=forumData[i].attributes.postContent.slice(0,55)+"...";
            }
          }).catch((error)=>{

          })
        },
        getFirstLetter(datas) {
          for (const data of datas) {
            data.username = data.username.slice(0, 1).toUpperCase();
          }
          return datas;
        },
      },
      mounted() {
        this.getFirstLetter(this.libraryData);
        this.getFirstLetter(this.forumData);
        this.getForumEssence();
      }
    }
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 800px) {
    .col-i-card{
         width: 42%;
         margin-left: 5%;
       }
  }

  /*卡片抬头*/
  .card-title {
    line-height: 32px;
    margin-bottom: 24px;
    p {
      margin: 0;
      float: right;
    }
    b {
      font-size: 22px
    }
    i {
      margin-top: 8px;
      margin-left: 10px;
      float: right;
    }
  }
  .body-logo {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    margin-bottom: 6px;
    vertical-align:middle;
  }
  /*卡片容器宽度，用于控制横线的长度*/
  .card-container {
    /*width: 480px;*/
    padding: 20px 0 0 5px;
  }
  .card-container:hover {
    background: #485d7c;
    border-radius: 20px;
  }
  .q-card{
    background: #1F2937;
    border: 0;
    /*box-shadow: 0px 3px 10px 0px rgba(153, 153, 153, 0.2);*/
    border-radius: 20px;
    color:white;
    padding-bottom: 0
  }
  .left-ball{
    width: 64px;
    height: 64px;
    line-height: 64px;
    background: #EA3D5A;
    border-radius: 50%;
    float: left;
    margin: 0 20px 20px 0;
    text-align: center;
    font-size: 28px;
  }
  a{
    text-decoration:none;
    color:white;
  }
  .card-main{
    margin-bottom: 20px;
    height: 110px;
  }
  .card-container hr{
    border: 1px;
    width: 450px;
    height: 1px;
    background: #374151;
  }
  .card-header{
    font-size: 18px;
    margin-bottom: 10px;
  }
  .card-content{
    font-size: 16px;
    font-weight: 400;
    color: #999999;
    padding-right: 20px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 200px;
    margin: 65px auto;
  }
</style>
