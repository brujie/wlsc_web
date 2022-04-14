<template>
  <div class="form-add">
    <div class="add_header">个人中心</div>
    <van-notice-bar
      color="#f95862"
      background="#fff"
      left-icon="info-o"
      text="网页端移动支付已上线，APP端还需要一段时间的部署，请先使用网页端 感谢用户一直以来的支持。"
    />
    <div class="info">
      <img class="avatar" src="https://s3.bmp.ovh/imgs/2022/03/30/3d88f42efb7c97d0.png" alt="">
       <span>
         {{nickName}}
       </span>
    </div>
    <van-cell title="我的藏品" @click="goUrl" is-link style="margin-bottom:10px"/>
    <van-cell title="中签记录" @click="goHistory" is-link />
    <van-cell title="订单管理" is-link @click="goOrder" />
    <van-cell title="我的余额" is-link @click="goUserMoney" />
    <van-cell title="设置" is-link @click="reset" />
    <van-cell title="退出" is-link  @click="signOut" />
    <van-divider contentPosition="center">模拟数据 仅供娱乐</van-divider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickName:"nickName"
    };
  },
  methods: {
    goUrl(){
      this.$router.push('/collection')
    },
    goOrder(){
      this.$router.push('/orderList')
    },
    goUserMoney(){
      this.$router.push('/userMoney')
    },
    goHistory(){
      this.$router.push('/history')
    },
    signOut(){
     this.nickName = "null";
     this.$toast('退出成功!');
    },
    reset() {
     this.$toast('待开发~');
    },
    onSubmit() {
      this.$httpPost("/create", postData).then((res) => {
        if (res.status == 200) {
          this.$toast("添加成功!");
          this.$router.push("/list");
        } else {
          this.title = "";
          this.summary = "";
          this.content = "";
          this.img = "";
          this.$toast("添加失败!请重试!");
        }
      });
    },
  },
};
</script>

<style scoped>

.info{
  padding: 10px 30px;
  display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.info img{
  width: 80px;
    height: 80px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    position: relative;
    top: 0;
    left: 0;
}
.info span{
  display: inline-block;
  font-size: 18px;
  margin-left: 30px;
  font-weight: 600;
}
</style>