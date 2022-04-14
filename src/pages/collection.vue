<template>
  <div class="form-add">
    <div class="add_header">我的藏品</div>
    <div class="collect-list">
      <div class="item" v-for="item in list" :key="item.id">
        <img class="imgBox" :src="item.previewImgUrl" alt="" />
        <p class="name">{{ item.mainTitle }}</p>
        <p class="auth">{{ item.publisherName }}</p>
        <span class="num">x 1</span>
      </div>
    </div>
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
    };
  },
  methods: {},
};
</script>

<style scoped>
.collect-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 65px;
}
.item {
  position: relative;
  width: 90%;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e3e3e3;
  cursor: pointer;
  margin-bottom: 30px;
  padding: 20px;
}
.item .imgBox {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.item .name {
  margin-top: 10px;
  font-weight: 700;
}
.item .num {
  position: absolute;
  right: 20;
  bottom: 20px;
}

</style>