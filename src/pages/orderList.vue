<template>
  <div class="form-add">
    <div class="add_header">我的订单</div>
    <van-empty description="没有更多数据" v-if="show">
      <van-button round type="danger" class="bottom-button" @click="back"
        >返回</van-button
      >
    </van-empty>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$toast.loading({
      duration: 3000, // 持续展示 toast
      forbidClick: true,
      message: "加载中...",
      selector: "#custom-selector",
    });
    setTimeout(() => {
      this.show = true;
    }, 3200);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.bottom-button {
  width: 160px;
  height: 40px;
  background: #f95862 !important;
}
</style>