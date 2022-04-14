<template>
  <div class="detail">
    <van-nav-bar
      left-text=""
      title="藏品详情"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="img-box">
      <van-image
        width="90%"
        height="300"
        radius="10"
        :src="detail.previewImgUrl"
      />
    </div>
    <div class="detail_content">
      <p>{{ detail.mainTitle }}</p>
      <div class="detail_box">
        <span class="rule-type">非遗经典</span
        ><span class="rule-num">全球限量发行10000份</span
        ><span class="rule-price">¥ {{ detail.price }}</span>
      </div>
      <p>{{ detail.content }}</p>
      <van-divider contentPosition="center">藏品详情</van-divider>
      <div style="width: 100%; overflow: hidden; margin-top: 20px">
        <img :src="detail.detailImgUrl" alt="" style="width: 100%" />
      </div>
      <van-divider hairline />
      <p class="summary">
        特别提醒:<br />请您先完成实名认证以保证藏品顺利发放至您的账户。本藏品一经售出，不支持退换。本藏品的版权由发行方或原创者所有，除另行取得版权拥有者书面同意外，您不得将本藏品用于任何商业用途。请勿对本藏品进行炒作、场外交易、欺诈或者以任何其他非法方式进行使用。
      </p>
    </div>
    <div class="detail-btn" @click="buy">立即购买</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {
        productId: 41,
        mainTitle: "灯影传承·福将豪杰",
        previewImgUrl:
          "https://mcpacimg1.pg0.cn/group5/M00/42/27/CgrZFWI91pKAHmjYAAVgoVEkla4403.png",
        publisherId: null,
        publisherLogo:
          "https://mcpacimg1.pg0.cn/group4/M01/57/86/CgrZEGI91kOANpVWAAByVuZ4Ht0107.png",
        totalNumber: 10000,
      },
    };
  },
  created() {
    this.detail.mainTitle = this.$route.params.mainTitle;
    this.detail.previewImgUrl = this.$route.params.previewImgUrl;
  },
  mounted() {
    window.scrollTop = 0;
  },
  methods: {
    buy(){
       this.$router.push({name:'orderBuy',params:{
          mainTitle:this.detail.mainTitle,
          previewImgUrl:this.detail.previewImgUrl
      }});
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.detail{
  position: relative;
  top: -60;
}
.detail_box {
  display: flex;
  padding: 0 2px;
  margin-top: 10px;
  align-items: center;
}
.detail_content .rule-type {
  background: linear-gradient(180deg, #af9a72, #c8b791);
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #1d1d27;
  padding: 2px 5px;
}
.detail_content .rule-num {
  font-size: 14px;
  font-weight: 400;
  color: #c4b38c;
  margin-left: 10px;
}
.detail_content .rule-price {
  position: absolute;
  color: #c4b38c;
  right: 20px;
}
.detail .detail_content {
  padding: 10px 20px;
}
.detail .detail_content p:first-child {
  font-size: 22px;
  font-weight: 600;
}
.detail .img-box {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px;
}
.detail .summary {
  width: 100%;
  background: rgba(217, 221, 225, 0.35);
  border-radius: 5px;
  padding: 20px;
  color: #2b333b;
  margin: 10px 0;
}
.detail-btn {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  opacity: 0.6;
  color: #f95862;
  width: 200px;
  padding: 0 20px;
  height: 34px;
  border-radius: 30px;
  border: 2px solid #f95862;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>