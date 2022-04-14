<template>
  <div class="order_buy">
    <div class="add_header">订单详情</div>
    <div class="order_info">
      <img
        class="order_img"
        :src="detail.previewImgUrl"
        alt=""
      />
      <p>
        <span>{{detail.mainTitle}}</span
        ><span style="color: #f95862; font-size: 14px">数量x1</span>
      </p>
      <p><span>艺术家</span><span>Azure</span></p>
      <p><span>系列</span><span>动图系列</span></p>
      <p>
        <span>总金额</span
        ><span style="color: #f95862; font-size: 14px">¥ 0.01</span>
      </p>
      <p>
        <span>可用余额</span
        ><span style="color: #f95862; font-size: 14px">¥ {{ money }}</span>
      </p>
    </div>
    <van-divider contentPosition="center">请选择支付方式</van-divider>
    <div class="order_pay">
      <div
        class="wx_img"
        :class="active == 0 ? 'pay_active' : ''"
        @click="active = 0"
      >
        <img src="https://pay.xunhuweb.com/demo-pay/images/wx_pay.svg" alt="" />
        <span>微信支付</span>
      </div>
      <div
        class="alipay_img"
        :class="active == 1 ? 'pay_active' : ''"
        @click="active = 1"
      >
        <img src="https://pay.xunhuweb.com/demo-pay/images/alipay.svg" alt="" />
      </div>
    </div>
    <div class="detail-btn" @click="pay">立即支付</div>
    <div class="detail-btn" @click="back">返回</div>
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      custom-style="height: 20%"
    >
      <div class="show_img">
        <h3 style="position: absolute; top: 10px">
          {{ active == 0 ? "微信支付" : "支付宝支付" }}
        </h3>
        <div class="mask_box">
          <van-divider contentPosition="center">请选择测试赞赏金额</van-divider>
          <div class="btn_box">
            <van-button color="#f95862" plain @click="payMoney(0.1)">0.10元</van-button>
            <van-button color="#f95862" plain  @click="payMoney(0.5)">0.50元</van-button>
            <van-button color="#f95862" plain  @click="payMoney(1)">1.00元</van-button>
          </div>
          <div class="btn_box">
            <van-button  color="#f95862" @click="payMoney(18.88)" plain>18.88元</van-button>
            <van-button  color="#f95862" @click="payMoney(50)" plain>50.00元</van-button>
            <van-button  color="#f95862" @click="payMoney(100)" plain>100.00元</van-button>
          </div>
        </div>
        <!-- <img
          src="https://s3.bmp.ovh/imgs/2022/04/13/00c9ffb8170d8442.jpg"
          alt=""
        /> -->
      </div>
    </van-popup>
    <van-dialog
      use-slot
      title="扫码支付"
      v-model="flag"
      show-cancel-button
    >
      <img @click="goUrl" :src="imgSrc" style="width:200px;height:200px;position: relative;
    left: 50%;transform: translateX(-50%);"/>
    </van-dialog>
  </div>
</template>

<script>
import { getStroage, setStroage } from "../utils/localStroage";
export default {
  data() {
    return {
      detail: {
        mainTitle:"",
        previewImgUrl:"",
      },
      show: false,
      flag:false,
      active: 0,
      money: 1000,
      imgSrc:"https://s3.bmp.ovh/imgs/2022/04/13/708b8e65a9d044b8.png"
    };
  },
  watch: {
    money(v) {
      this.money = Math.floor(v * 100) / 100;
    },
  },
  created() {
    console.log(this.$route.params);
     this.detail.mainTitle = this.$route.params.mainTitle;
    this.detail.previewImgUrl = this.$route.params.previewImgUrl;
    if (getStroage("money")) {
      this.money = getStroage("money");
    } else {
      this.money = parseInt(Math.random() * 10000 + 100);
    }
  },
  methods: {
    pay() {
      this.show = true;
    },
    goUrl(){
      window.open(this.imgSrc,"__blank")
    },
    payMoney(num){
      if(num < this.money){
         setStroage("money",parseInt(Math.random() * 10000 + 100));
      }
      this.show = false;
      this.flag = true;
      this.money = this.money - num;
      setStroage("money", this.money);
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.order_info {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.order_info p {
  margin-top: 10px;
  padding: 0 30px;
  width: 100%;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
}
.order_info .order_img {
  width: 340px;
  border: 1px solid #f1f1f1;
}
.order_pay {
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
}
.alipay_img,
.wx_img {
  width: 150px;
  height: 45px;
  float: left;
  line-height: 45px;
  cursor: pointer;
  border: 1px solid transparent;
}
.pay_active {
  border: 1px solid #f95862 !important;
}
.alipay_img img {
  display: inline-block;
  width: 90%;
  height: 90%;
  margin-top: 2px;
}
.wx_img img {
  width: 40px;
  height: 40px;
  margin: 2px 0 0 20px;
}
.wx_img span {
  position: absolute;
  left: 120px;
  display: inline-block;
  font-size: 14px;
  color: #878787;
  line-height: 45px;
}
.detail-btn {
  margin-top: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  color: #f95862;
  width: 82%;
  padding: 0 20px;
  height: 40px;
  border: 1px solid #f95862;
  display: flex;
  align-items: center;
  justify-content: center;
}
.show_img {
  margin: 0 auto;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.show_img img {
  transform: scale(0.7);
  width: 85%;
}
.mask_box {
  width: 100%;
}
.mask_box .btn_box {
  margin: 20px 0 0 0;
  display: flex;
  justify-content: space-evenly;
}
.btn_box .van-button {
  width: 25%;
}
</style>