<template>
  <league-nav>
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10 col-xs-12">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-xs-12">
            <league-carousel/>
            <league-card/>
            <league-dapps/>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
    <league-footer/>
  </league-nav>


</template>

<script>
  import LeagueNav from "@/components/league-nav";
  import LeagueFooter from "@/components/league-footer";
  import LeagueCarousel from "@/components/league-carousel";
  import LeagueCard from "@/components/league-card";
  import LeagueDapps from "@/components/league-dapps";
  export default {
    components: {LeagueDapps, LeagueCard, LeagueCarousel, LeagueFooter, LeagueNav},
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
      },
      test(){
        console.log(this.$refs.uploader);
        console.log(this.$refs.uploader.files[0]);
      },
      uploadId () {
        let data = this.$refs.uploadId.files[0];
        console.log(data);
        this.getBase64(data).then(res => {
          this.idCard = res
          // console.log(res)
        })
        this.$message({
          type: 'success',
          message: '上传成功',
          offset: 50
        })
        this.idFileChoose = false
      },
      // base64 格式
      getBase64 (file) {
        return new Promise(function (resolve, reject) {
          let reader = new FileReader()
          let imgResult = ''
          reader.readAsDataURL(file)
          reader.onload = function () {
            imgResult = reader.result
          }
          reader.onerror = function (error) {
            reject(error)
          }
          reader.onloadend = function () {
            resolve(imgResult)
          }
        })
      },
      // 二进制格式，格式有点问题
      dataURItoBlob (dataURI) {
        // base64 解码
        let byteString = window.atob(dataURI.split(',')[1])
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
        let ab = new ArrayBuffer(byteString.length)
        let ia = new Uint8Array(ab)
        for (let i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i)
        }
        console.log(new Blob([ab], {type: mimeString}))
        return new Blob([ab], {type: mimeString})
      },
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
