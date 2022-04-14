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
        detailImgUrl:
          "https://mcpacimg1.pg0.cn/group4/M02/57/8C/CgrZEWI91vOAdGiAACg-G3BU3hA646.png",
        publisherId: null,
        publisherName: "时代悲鸿（北京）文化艺术中心",
        publisherLogo:
          "https://mcpacimg1.pg0.cn/group4/M01/57/86/CgrZEGI91kOANpVWAAByVuZ4Ht0107.png",
        totalNumber: 10000,
        beginTime: "2022-04-01T12:00:00",
        endTime: "2022-04-05T23:59:59",
        stockStatus: 2,
        productType: 2,
        h5JumpUrl: "",
        payType: 3,
        price: 9.9,
        collectionSetId: 75,
        pageToken: "68450a39e8b44588b7b0e39048426632",
        creator: "徐悲鸿美术馆",
        contractAddress:
          "573f114fed67046ca9d6a81801de9c403ffa42a627f99997f66d35bfd3a7b175",
        creatorUrl:
          "https://mcpacimg1.pg0.cn/group4/M01/57/87/CgrZEGI91oqAW9vZAAEMfB_niJQ636.jpg",
        label: "非遗经典",
        showType: "1",
        sysTime: "2022-04-12T17:18:28.021",
        resourceType: 1,
      },
    };
  },
  created() {
    this.$httpPost(`/product/detail`, {
      productId: this.$route.params.id + "",
    }).then((res) => {
      if (res.data) {
        this.detail = res.data;
      }
    });
  },
  mounted() {
    window.scrollTop = 0;
  },
  methods: {
    buy(){
      this.$router.push('/orderBuy')
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