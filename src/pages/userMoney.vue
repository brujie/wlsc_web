<template>
  <div class="user-money-container">
    <div class="add_header">我的余额</div>
    <img
      src="data:image/png;base64,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"
      class="user-money-pay-img"
      data-v-1884f79a=""
    />
    <p class="user-money-value">¥ {{ money }}</p>
    <p class="user-money-detail">余额明细 &gt;</p>
    <div class="user-money-minus-btn" @click="withdrawal">提现</div>
    <div class="user-back" @click="back">
      <span>返回</span>
    </div>
  </div>
</template>

<script>
import { getStroage, setStroage } from "../utils/localStroage";
export default {
  data() {
    return {
      money: 0,
    };
  },
  watch: {
    money(v) {
      this.money = Math.floor(v * 100) / 100;
    },
  },
  created() {
    if (getStroage("money")) {
      this.money = getStroage("money");
    } else {
      this.money = parseInt(Math.random() * 10000 + 100);
      setStroage("money", this.money);
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    withdrawal() {
      this.$toast.fail("余额不足!");
    },
  },
};
</script>

<style>
.user-money-container {
  padding-top: 60px;
  text-align: center;
}
.user-money-pay-img {
  width: 56px;
  height: 56px;
}
.user-money-value {
  margin-top: 20px;
  font-size: 36px;
  font-weight: 500;
}
.user-money-detail {
  color: #fac239;
  font-size: 16px;
  line-height: 24px;
  margin-top: 10px;
}
.user-money-minus-btn {
  width: 180px;
  height: 50px;
  line-height: 50px;
  border-radius: 12px;
  margin: 20px auto 0;
  text-align: center;
  color: #ec622b;
  border: 1px solid #ec622b !important;
  cursor: pointer;
}
.user-back {
  height: 50px;
  line-height: 50px;
  margin: 20px auto 0;
  text-align: center;
  color: #ec622b;
}
.user-back span {
  display: inline-block;
  padding-bottom: 2px;
  text-decoration: underline;
}
</style>