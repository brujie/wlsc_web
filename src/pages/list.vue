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
        @click="handleDetail(item)"
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
          productId: parseInt(Math.random() * 100),
          mainTitle: "京剧脸谱·关羽",
          previewImgUrl:
            "https://s3.bmp.ovh/imgs/2022/04/14/246957a5e63767ae.png",
          publisherName: "时代蔚蓝 文化艺术中心",
          price: 9.9,
        },
        {
          productId: parseInt(Math.random() * 100),
          mainTitle: "京剧脸谱·专诸",
          previewImgUrl:
            "https://s3.bmp.ovh/imgs/2022/04/14/da9c6c57a81d0b38.png",
          publisherName: "时代蔚蓝 文化艺术中心",
          price: 9.9,
        },
        {
          productId: parseInt(Math.random() * 100),
          mainTitle: "京剧脸谱·包公",
          previewImgUrl:
            "https://s3.bmp.ovh/imgs/2022/04/14/39e3f94583376a89.png",
          publisherName: "时代蔚蓝 文化艺术中心",
          price: 9.9,
        },
        {
          productId: parseInt(Math.random() * 100),
          mainTitle: "京剧脸谱·窦尔敦",
          previewImgUrl:
            "https://s3.bmp.ovh/imgs/2022/04/14/ffd3291162ce97ef.png",
          publisherName: "时代蔚蓝 文化艺术中心",
          price: 9.9,
        },
        {
          productId: parseInt(Math.random() * 100),
          mainTitle: "京剧脸谱·典韦",
          previewImgUrl:
            "https://s3.bmp.ovh/imgs/2022/04/14/f2cee79bfceb40ff.png",
          publisherName: "时代蔚蓝 文化艺术中心",
          price: 9.9,
        },
                {
          productId: parseInt(Math.random() * 100),
          mainTitle: "京剧脸谱·魏绎",
          previewImgUrl:
            "https://s3.bmp.ovh/imgs/2022/04/14/757f0e2207a908aa.png",
          publisherName: "时代蔚蓝 文化艺术中心",
          price: 9.9,
        },
        {
          productId: parseInt(Math.random() * 100),
          mainTitle: "京剧脸谱·二郎神",
          previewImgUrl:
            "https://s3.bmp.ovh/imgs/2022/04/14/a368b6a75c9ea076.png",
          publisherName: "时代蔚蓝 文化艺术中心",
          price: 9.9,
        },
        {
          productId: parseInt(Math.random() * 100),
          mainTitle: "京剧脸谱·程咬金",
          previewImgUrl:
            "https://s3.bmp.ovh/imgs/2022/04/14/efbcbcfcfc67e79d.png",
          publisherName: "时代蔚蓝 文化艺术中心",
          price: 9.9,
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
    handleDetail(item) {
      this.$router.push({name:'detail',params:{
          mainTitle:item.mainTitle,
          previewImgUrl:item.previewImgUrl
      }});
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
