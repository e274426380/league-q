<template>
  <div class="footer">
    <div class="footer-content">
      <div>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-sm-4 col-xs-12">
          <div>
            <p>ICPLeague</p>
            <p>{{$t("footer.subtitle")}}</p>
            <ul>
              <li><a href="https://www.icpleague.com/thread/55">{{$t("footer.about-us")}}</a></li>
              <li><a href="https://twitter.com/icpleague_com">twitter</a></li>
              <li><a href="https://www.icpleague.com">{{$t("button.forum")}}</a></li>
            </ul>
            <div class="record-number">
              <a href="https://beian.miit.gov.cn/">沪ICP备2021014954号-1</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-xs-12">
          <div class="QR">
            <img class="QRCodeImg" alt="QRCode" src="@/assets/images/BBSQR.png">
            <p>{{$t("footer.scanQR")}}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "league-footer"
    }
</script>

<style lang="scss" scoped>
  @import "@/assets/css/container.css";
  a{
    text-decoration:none;
    color:white;
  }
  .el-footer{
    height: 100%!important;

  }
  .footer {
    background: #1F2937;
    padding-top: 50px;
    /*padding-bottom: 400px;*/
    padding: 0px;
    color: #8590A6;
    font-weight: bold;
    font-size: 14px;
    font-family: Microsoft YaHei;
    p{
      font-size: 24px;
      margin-bottom: 0;
      &:nth-child(2){
        font-size: 14px;
      }
    }
    ul{
      padding-left: 0px;
      li{
        list-style: none;
        display:inline-block;
        margin-top: 0px;
        margin-right: 20px;
        a{
          color: #8590A6;
          &:hover{
            color: #a44238;
          }
        }
      }
    }
  }
  .footer-content {
    padding-top: 50px;
  }
  /*备案号样式*/
  .record-number{
    a{
      color: rgba(99, 99, 99, 0.75);
      font-size: 10px;
    }
  }
  .QR{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  /*二维码*/
  .QRCode {
    text-align: center;
    li {
      margin: 0 !important;
    }
  }
  .phone-number {
    font-size: 38px !important;
    font-weight: normal !important;
    margin-top: 10px !important;

  }
  .QRCodeImg {
    width: 100px;
    height: 100px;
  }
</style>
