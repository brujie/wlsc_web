<template>
  <div class="list">
    <div class="add_header">最新推荐</div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="-- 更多藏品敬请期待 --"
    >
      <van-cell
        class="list-item"
        v-for="item in list"
        :key="item.productId"
        @click="handleDetail(item.productId)"
      >
        <van-image width="300" height="300" :src="item.previewImgUrl" />
        <div class="content">
          <p>{{ item.mainTitle }}</p>
          <p>{{ item.publisherName }}</p>
        </div>
        <div class="index-item-rule">
          <span class="rule-type">非遗经典</span
          ><span class="rule-num">全球限量发行10000份</span
          ><span class="rule-price">¥ {{ item.price }}</span>
        </div>
        <div class="item-btn">查看详情</div>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
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
          pageToken: null,
          creator: "徐悲鸿美术馆",
          contractAddress:
            "573f114fed67046ca9d6a81801de9c403ffa42a627f99997f66d35bfd3a7b175",
          creatorUrl:
            "https://mcpacimg1.pg0.cn/group4/M01/57/87/CgrZEGI91oqAW9vZAAEMfB_niJQ636.jpg",
          label: "非遗经典",
          showType: "1",
          sysTime: null,
          resourceType: 1,
        },
        {
          productId: 39,
          mainTitle: "灯影传承·英勇忠义",
          previewImgUrl:
            "https://mcpacimg1.pg0.cn/group4/M03/51/33/CgrZEWI9gD2AXZRCAAVUEGmRXF4342.png",
          detailImgUrl:
            "https://mcpacimg1.pg0.cn/group4/M00/51/33/CgrZEWI9gMOAT1gGACVjmp29DJQ834.png",
          publisherId: null,
          publisherName: "时代悲鸿（北京）文化艺术中心",
          publisherLogo:
            "https://mcpacimg1.pg0.cn/group4/M03/51/33/CgrZEWI9gDCAcu52AAByVuZ4Ht0701.png",
          totalNumber: 10000,
          beginTime: "2022-03-31T12:00:00",
          endTime: "2022-04-04T23:59:59",
          stockStatus: 2,
          productType: 2,
          h5JumpUrl: "",
          payType: 3,
          price: 9.9,
          collectionSetId: 74,
          pageToken: null,
          creator: "徐悲鸿美术馆",
          contractAddress:
            "5ba1007257174d5be473a34d4833179f2780c6597688646a6e22b10efa4f0b9d",
          creatorUrl:
            "https://mcpacimg1.pg0.cn/group5/M01/3D/17/CgrZFWI9gHaAP5GEAAEMfB_niJQ316.jpg",
          label: "非遗经典",
          showType: "1",
          sysTime: null,
          resourceType: 1,
        },
        {
          productId: 38,
          mainTitle: "灯影传承·虎虎生威",
          previewImgUrl:
            "https://mcpacimg1.pg0.cn/group5/M03/3D/16/CgrZFWI9f0iAV38iAASRKLK-s4A117.png",
          detailImgUrl:
            "https://mcpacimg1.pg0.cn/group5/M01/3D/18/CgrZFGI9f-mAcJvrACjn_AIrA1s403.png",
          publisherId: null,
          publisherName: "时代悲鸿（北京）文化艺术中心",
          publisherLogo:
            "https://mcpacimg1.pg0.cn/group4/M00/51/32/CgrZEWI9fviAPKMwAAByVuZ4Ht0048.png",
          totalNumber: 10000,
          beginTime: "2022-03-30T12:00:00",
          endTime: "2022-04-02T23:59:59",
          stockStatus: 2,
          productType: 2,
          h5JumpUrl: "",
          payType: 3,
          price: 9.9,
          collectionSetId: 73,
          pageToken: null,
          creator: "徐悲鸿美术馆",
          contractAddress:
            "3fbb1a9bcdb9854cdedbc78e666def48ac4a1a60be514710e5daad3eaf85c72c",
          creatorUrl:
            "https://mcpacimg1.pg0.cn/group4/M00/51/32/CgrZEWI9f6CAfMR0AAEMfB_niJQ806.jpg",
          label: "非遗经典",
          showType: "1",
          sysTime: null,
          resourceType: 1,
        },
      ],
      loading: true,
      finished: true,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      // this.$httpGet('/product/list_product').then(res =>{
      //     let data = res.data;
      //     this.list = data;
      // })
    },
    handleDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<style lang="less" scoped>
.list-item {
  width: 340px;
  border-radius: 15px;
  box-shadow: 0 8px 12px #ebedf0;
  display: block;
  margin: 10px auto;
  padding: 20px;
  position: relative;
}
.list-item .content {
  height: auto;
}
.list-item .index-item-rule {
  display: flex;
  width: 300px;
  padding: 0 2px;
  margin-top: 10px;
  align-items: center;
}
.list-item .index-item-rule .rule-type {
  background: linear-gradient(180deg, #af9a72, #c8b791);
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #1d1d27;
  padding: 2px 5px;
}
.list-item .index-item-rule .rule-num {
  font-size: 14px;
  font-weight: 400;
  color: #c4b38c;
  margin-left: 10px;
}
.list-item .index-item-rule .rule-price {
  position: absolute;
  color: #c4b38c;
  right: 10px;
}
.list-item .content p:first-child {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 600;
}
.list-item .content p:last-child {
  color: #ccc;
}
.list-item .item-btn {
  margin-top: 10px;
  width: 300px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  border-radius: 30px;
  border: 2px solid #f95862;
  font-size: 15px;
  font-weight: 600;
  color: #f95862;
  letter-spacing: 1px;
}
</style>
