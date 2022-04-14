<template>
  <div class="wrap">
    <router-view></router-view>
    <van-tabbar
      route
      v-if="tabBarShow"
      active="active"
      active-color="#f95862"
      inactive-color="#000"
      @change="onChange"
    >
      <van-tabbar-item replace to="/list" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabBarShow: true,
    };
  },
  beforeUpdate() {
    // if (this.$route.path !== "/list" || this.$route.path == "/mine") {
    //   this.tabBarShow = false;
    // }
  },
  methods: {
    onChange(event) {
      this.active = event.detail;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "AzureFont";
  src: url("./static/fonts/PingFangSC-Regular.woff2"),
    url("./static/fonts/PingFangSC-Semibold.woff2"); /* IE9 */
}

* {
  padding: 0;
  margin: 0;
  font-family: "AzureFont";
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  font-size: 16px;
}
.wrap {
  width: 100%;
  padding-bottom: 60px;
  padding-top: 60px;
}

</style>