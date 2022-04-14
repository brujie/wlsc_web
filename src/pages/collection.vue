<template>
  <div class="form-add">
    <div class="add_header">我的藏品</div>
    <div class="collect-list">
      <div class="item" v-for="item in list" :key="item.id">
        <img class="imgBox" :src="item.commodity.cover" alt="" />
        <p class="name">{{ item.commodity.name }}</p>
        <p class="auth">{{ item.author.name }}</p>
        <span class="num">x 12</span>
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
          amount: 1,
          amountLockSold: 0,
          amountSold: 0,
          amountLockGive: 0,
          amountGive: 0,
          visible: 3,
          like: false,
          commodity: {
            name: "大运数字蓉宝（水球动图）",
            cover:
              "https://source.theone.art/watermarkResize/13bfbf433843161426aa3b13ab7b6ea5/96dd86a133d569efc9cb426a0d5004e6-16496524840080.25.gif",
            actualPicture:
              "https://source.theone.art/watermark/13bfbf433843161426aa3b13ab7b6ea5/96dd86a133d569efc9cb426a0d5004e6-1649652484008.gif",
            chainName: null,
            chainContract: null,
            tradeHash: null,
            contractAddress: null,
            nftId: null,
            amountLike: 103,
            typeMarket: 2,
            typeCommodity: 1,
            typeFile: 2,
            label: "",
            description:
              "水球是速度最快、难度最大的团体运动之一。1959年第一届都灵大运会上，有7支队伍报名参加了水球项目比赛。到了21世纪，水球运动呈迅猛发展态势，塞尔维亚队和黑山队在水球项目上各领风骚。",
            price: "29.90",
            amountSku: 2800,
            statusNumber: 1,
            sharePic: null,
            statusGive: 0,
            gifFirstImageUrl:
              "https://source.theone.art/watermarkResize/13bfbf433843161426aa3b13ab7b6ea5/96dd86a133d569efc9cb426a0d5004e6-16496524840081.0.jpg",
            seller: null,
            saleQuantity: null,
            id: "5afdb138716121ee3dabec051d5a389f",
          },
          author: {
            name: "成都大运会",
            nickname: "成都大运会",
            cover:
              "https://theoneart-common.oss-cn-qingdao.aliyuncs.com/author/真正的头像1644815461656.jpg",
            level: 3,
            description:
              "成都第31届世界大学生夏季运动会将于2022年6月举行，是继2001年北京大运会、2011年深圳大运会之后，中国大陆第三次举办世界大学生夏季运动会，也是中国西部第一次举办世界综合性运动会。共设篮球、排球、田径、游泳等18个项目。",
            id: "13bfbf433843161426aa3b13ab7b6ea5",
          },
          id: "c6c74f1569524289c31e9cf156a5c4c6",
        },
        {
          amount: 1,
          amountLockSold: 0,
          amountSold: 0,
          amountLockGive: 0,
          amountGive: 0,
          visible: 3,
          like: false,
          commodity: {
            name: "丰子恺-草草杯盘供语笑动态图",
            cover:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/31099cefe6f95e1589e14142cf118ab9-16488024218550.25.gif",
            actualPicture:
              "https://source.theone.art/watermark/66904b6272a142004e8134a814ea674a/31099cefe6f95e1589e14142cf118ab9-1648802421855.gif",
            chainName: "Polygon",
            chainContract: "erc-721",
            tradeHash: null,
            contractAddress: "0x8673a15fc31f5ccd8f5239fbf7ade88e65994b6d",
            nftId: null,
            amountLike: 451,
            typeMarket: 2,
            typeCommodity: 1,
            typeFile: 2,
            label: "",
            description: "草草杯盘供语笑,昏昏灯火话平生。",
            price: "19.90",
            amountSku: 3000,
            statusNumber: 1,
            sharePic: null,
            statusGive: 0,
            gifFirstImageUrl:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/31099cefe6f95e1589e14142cf118ab9-16488024218551.0.jpg",
            seller: null,
            saleQuantity: null,
            id: "e5456ed30207ae7d4510f6eae834764d",
          },
          author: {
            name: "丰子恺",
            nickname: "丰子恺",
            cover:
              "https://theoneart-common.oss-cn-qingdao.aliyuncs.com/author/鸥鸟可招1632447313277.jpg",
            level: 3,
            description: null,
            id: "66904b6272a142004e8134a814ea674a",
          },
          id: "638e90ce1cd037188311bdc7d604f8f5",
        },
        {
          amount: 1,
          amountLockSold: 0,
          amountSold: 0,
          amountLockGive: 0,
          amountGive: 0,
          visible: 3,
          like: false,
          commodity: {
            name: "丰子恺-儿童不知春动态图",
            cover:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/9ddfc2da7523841236ae19ba87dc8223-16488057831520.5.gif",
            actualPicture:
              "https://source.theone.art/watermark/66904b6272a142004e8134a814ea674a/9ddfc2da7523841236ae19ba87dc8223-1648805783152.gif",
            chainName: "Polygon",
            chainContract: "erc-721",
            tradeHash: null,
            contractAddress: "0x8673a15fc31f5ccd8f5239fbf7ade88e65994b6d",
            nftId: null,
            amountLike: 411,
            typeMarket: 2,
            typeCommodity: 1,
            typeFile: 2,
            label: "",
            description: "问草何故绿",
            price: "19.90",
            amountSku: 3000,
            statusNumber: 1,
            sharePic: null,
            statusGive: 0,
            gifFirstImageUrl:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/9ddfc2da7523841236ae19ba87dc8223-16488057831521.0.jpg",
            seller: null,
            saleQuantity: null,
            id: "dc297341718295b7d6fe7bdad81b266c",
          },
          author: {
            name: "丰子恺",
            nickname: "丰子恺",
            cover:
              "https://theoneart-common.oss-cn-qingdao.aliyuncs.com/author/鸥鸟可招1632447313277.jpg",
            level: 3,
            description: null,
            id: "66904b6272a142004e8134a814ea674a",
          },
          id: "55468ecf42ed0c1b60a354234408f83d",
        },
        {
          amount: 1,
          amountLockSold: 0,
          amountSold: 1,
          amountLockGive: 0,
          amountGive: 0,
          visible: 3,
          like: false,
          commodity: {
            name: "丰子恺-翠拂行人首动态图",
            cover:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/f926a1f0ca1d4e048d2e9759123b93d6-16488054522920.5.gif",
            actualPicture:
              "https://source.theone.art/watermark/66904b6272a142004e8134a814ea674a/f926a1f0ca1d4e048d2e9759123b93d6-1648805452292.gif",
            chainName: "Polygon",
            chainContract: "erc-721",
            tradeHash: null,
            contractAddress: "0x8673a15fc31f5ccd8f5239fbf7ade88e65994b6d",
            nftId: null,
            amountLike: 398,
            typeMarket: 2,
            typeCommodity: 1,
            typeFile: 2,
            label: "",
            description: "不知细叶谁裁出，二月春风似剪刀",
            price: "19.90",
            amountSku: 3000,
            statusNumber: 1,
            sharePic: null,
            statusGive: 0,
            gifFirstImageUrl:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/f926a1f0ca1d4e048d2e9759123b93d6-16488054522921.0.jpg",
            seller: null,
            saleQuantity: null,
            id: "bd081f3a7362fb9f3cd9e497df61c7d8",
          },
          author: {
            name: "丰子恺",
            nickname: "丰子恺",
            cover:
              "https://theoneart-common.oss-cn-qingdao.aliyuncs.com/author/鸥鸟可招1632447313277.jpg",
            level: 3,
            description: null,
            id: "66904b6272a142004e8134a814ea674a",
          },
          id: "31955dcff13c7224e43363195da9a69b",
        },
        {
          amount: 1,
          amountLockSold: 0,
          amountSold: 0,
          amountLockGive: 0,
          amountGive: 0,
          visible: 3,
          like: false,
          commodity: {
            name: "丰子恺-除夜动态图",
            cover:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/6aaf9c1bb8e9ccc85fed06c328f0c08b-16488030731030.25.gif",
            actualPicture:
              "https://source.theone.art/watermark/66904b6272a142004e8134a814ea674a/6aaf9c1bb8e9ccc85fed06c328f0c08b-1648803073103.gif",
            chainName: "Polygon",
            chainContract: "erc-721",
            tradeHash: null,
            contractAddress: "0x8673a15fc31f5ccd8f5239fbf7ade88e65994b6d",
            nftId: null,
            amountLike: 484,
            typeMarket: 2,
            typeCommodity: 1,
            typeFile: 2,
            label: "",
            description: "今夜两岁明朝三岁",
            price: "19.90",
            amountSku: 3000,
            statusNumber: 1,
            sharePic: null,
            statusGive: 0,
            gifFirstImageUrl:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/6aaf9c1bb8e9ccc85fed06c328f0c08b-16488030731031.0.jpg",
            seller: null,
            saleQuantity: null,
            id: "398754f89cd6da980fc30fdc4fb791cb",
          },
          author: {
            name: "丰子恺",
            nickname: "丰子恺",
            cover:
              "https://theoneart-common.oss-cn-qingdao.aliyuncs.com/author/鸥鸟可招1632447313277.jpg",
            level: 3,
            description: null,
            id: "66904b6272a142004e8134a814ea674a",
          },
          id: "f0673e83f247124b3b1dbbe3df0b0cd6",
        },
        {
          amount: 1,
          amountLockSold: 0,
          amountSold: 0,
          amountLockGive: 0,
          amountGive: 0,
          visible: 3,
          like: false,
          commodity: {
            name: "丰子恺-步调一致动态图",
            cover:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/e33f81b6cb039f5790b6ec21c3ba1258-16488046449240.5.gif",
            actualPicture:
              "https://source.theone.art/watermark/66904b6272a142004e8134a814ea674a/e33f81b6cb039f5790b6ec21c3ba1258-1648804644924.gif",
            chainName: "Polygon",
            chainContract: "erc-721",
            tradeHash: null,
            contractAddress: "0x8673a15fc31f5ccd8f5239fbf7ade88e65994b6d",
            nftId: null,
            amountLike: 439,
            typeMarket: 2,
            typeCommodity: 1,
            typeFile: 2,
            label: "",
            description: "两人同心金不利",
            price: "19.90",
            amountSku: 3000,
            statusNumber: 1,
            sharePic: null,
            statusGive: 0,
            gifFirstImageUrl:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/e33f81b6cb039f5790b6ec21c3ba1258-16488046449241.0.jpg",
            seller: null,
            saleQuantity: null,
            id: "13678ce50c232f2258136e416e6e510d",
          },
          author: {
            name: "丰子恺",
            nickname: "丰子恺",
            cover:
              "https://theoneart-common.oss-cn-qingdao.aliyuncs.com/author/鸥鸟可招1632447313277.jpg",
            level: 3,
            description: null,
            id: "66904b6272a142004e8134a814ea674a",
          },
          id: "034b71000c1646ef8922e22ca520d6ce",
        },
        {
          amount: 1,
          amountLockSold: 0,
          amountSold: 1,
          amountLockGive: 0,
          amountGive: 0,
          visible: 3,
          like: false,
          commodity: {
            name: "丰子恺-草色青青动态图",
            cover:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/5522adb854535c7050de412cab2bec3a-16488049864110.25.gif",
            actualPicture:
              "https://source.theone.art/watermark/66904b6272a142004e8134a814ea674a/5522adb854535c7050de412cab2bec3a-1648804986411.gif",
            chainName: "Polygon",
            chainContract: "erc-721",
            tradeHash: null,
            contractAddress: "0x8673a15fc31f5ccd8f5239fbf7ade88e65994b6d",
            nftId: null,
            amountLike: 384,
            typeMarket: 2,
            typeCommodity: 1,
            typeFile: 2,
            label: "",
            description: "江春不肯留行客，草色青青送马蹄",
            price: "19.90",
            amountSku: 3000,
            statusNumber: 1,
            sharePic: null,
            statusGive: 0,
            gifFirstImageUrl:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/5522adb854535c7050de412cab2bec3a-16488049864111.0.jpg",
            seller: null,
            saleQuantity: null,
            id: "90fb563c61152947b0d81c3a0ba2ff31",
          },
          author: {
            name: "丰子恺",
            nickname: "丰子恺",
            cover:
              "https://theoneart-common.oss-cn-qingdao.aliyuncs.com/author/鸥鸟可招1632447313277.jpg",
            level: 3,
            description: null,
            id: "66904b6272a142004e8134a814ea674a",
          },
          id: "0467d6b4db6faee6f1d1d28d1b3901d4",
        },
        {
          amount: 1,
          amountLockSold: 0,
          amountSold: 0,
          amountLockGive: 0,
          amountGive: 0,
          visible: 3,
          like: false,
          commodity: {
            name: "丰子恺-春在卖花声里动态图",
            cover:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/436dc078728fa19df2651d1303ab85c3-16488053645790.25.gif",
            actualPicture:
              "https://source.theone.art/watermark/66904b6272a142004e8134a814ea674a/436dc078728fa19df2651d1303ab85c3-1648805364579.gif",
            chainName: "Polygon",
            chainContract: "erc721",
            tradeHash: null,
            contractAddress: "0x8673a15fc31f5ccd8f5239fbf7ade88e65994b6d",
            nftId: null,
            amountLike: 402,
            typeMarket: 2,
            typeCommodity: 1,
            typeFile: 2,
            label: "",
            description: "迟日江山丽，春风花草香",
            price: "19.90",
            amountSku: 3000,
            statusNumber: 1,
            sharePic: null,
            statusGive: 0,
            gifFirstImageUrl:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/436dc078728fa19df2651d1303ab85c3-16488053645791.0.jpg",
            seller: null,
            saleQuantity: null,
            id: "66ed41856df2ab32e6e6a535dd25ab22",
          },
          author: {
            name: "丰子恺",
            nickname: "丰子恺",
            cover:
              "https://theoneart-common.oss-cn-qingdao.aliyuncs.com/author/鸥鸟可招1632447313277.jpg",
            level: 3,
            description: null,
            id: "66904b6272a142004e8134a814ea674a",
          },
          id: "fac952aa32a66591768c0dfcf6941ffe",
        },
        {
          amount: 1,
          amountLockSold: 0,
          amountSold: 1,
          amountLockGive: 0,
          amountGive: 0,
          visible: 3,
          like: false,
          commodity: {
            name: "丰子恺-炮弹作花瓶动态图",
            cover:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/51ce7eee608040ba4ad63be93c5fa5ae-16488044779020.25.gif",
            actualPicture:
              "https://source.theone.art/watermark/66904b6272a142004e8134a814ea674a/51ce7eee608040ba4ad63be93c5fa5ae-1648804477902.gif",
            chainName: "Polygon",
            chainContract: "erc-721",
            tradeHash: null,
            contractAddress: "0x8673a15fc31f5ccd8f5239fbf7ade88e65994b6d",
            nftId: null,
            amountLike: 423,
            typeMarket: 2,
            typeCommodity: 1,
            typeFile: 2,
            label: "",
            description: "炮弹作花瓶，万世乐太平",
            price: "19.90",
            amountSku: 3000,
            statusNumber: 1,
            sharePic: null,
            statusGive: 0,
            gifFirstImageUrl:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/51ce7eee608040ba4ad63be93c5fa5ae-16488044779021.0.jpg",
            seller: null,
            saleQuantity: null,
            id: "6d8b1ca051d56cd45b7c97e77143552d",
          },
          author: {
            name: "丰子恺",
            nickname: "丰子恺",
            cover:
              "https://theoneart-common.oss-cn-qingdao.aliyuncs.com/author/鸥鸟可招1632447313277.jpg",
            level: 3,
            description: null,
            id: "66904b6272a142004e8134a814ea674a",
          },
          id: "ac0570ef2c84272c81075f616513a57a",
        },
        {
          amount: 1,
          amountLockSold: 0,
          amountSold: 0,
          amountLockGive: 0,
          amountGive: 0,
          visible: 3,
          like: false,
          commodity: {
            name: "丰子恺-畅适动态图",
            cover:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/6b5c0bad3b67ecf850d096d66b9a7e56-16488052888620.25.gif",
            actualPicture:
              "https://source.theone.art/watermark/66904b6272a142004e8134a814ea674a/6b5c0bad3b67ecf850d096d66b9a7e56-1648805288862.gif",
            chainName: "Polygon",
            chainContract: "erc721",
            tradeHash: null,
            contractAddress: "0x8673a15fc31f5ccd8f5239fbf7ade88e65994b6d",
            nftId: null,
            amountLike: 519,
            typeMarket: 2,
            typeCommodity: 1,
            typeFile: 2,
            label: "",
            description: "自古人生何其乐，难得浮生半日闲",
            price: "19.90",
            amountSku: 3000,
            statusNumber: 1,
            sharePic: null,
            statusGive: 0,
            gifFirstImageUrl:
              "https://source.theone.art/watermarkResize/66904b6272a142004e8134a814ea674a/6b5c0bad3b67ecf850d096d66b9a7e56-16488052888621.0.jpg",
            seller: null,
            saleQuantity: null,
            id: "532e1c6940b795e0b5f41dbd34c1637a",
          },
          author: {
            name: "丰子恺",
            nickname: "丰子恺",
            cover:
              "https://theoneart-common.oss-cn-qingdao.aliyuncs.com/author/鸥鸟可招1632447313277.jpg",
            level: 3,
            description: null,
            id: "66904b6272a142004e8134a814ea674a",
          },
          id: "20b1a3d3c0d8adca7083effcd88bbb69",
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