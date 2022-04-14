<template>
  <div>
    <h1>404</h1>
    <p class="errorPage">抱歉!您访问的页面暂不存在或已删除</p>
    <span class="robot-buttons" @click="handleToHome">Back</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    let meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = `width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no`;
    console.log(document.getElementsByTagName("head")[0]);
    document.getElementsByTagName("head")[0].appendChild(meta);
  },
  methods: {
    handleToHome() {
      this.$router.push("/home");
    },
  },
};
</script>
<style lang="less" scoped>
html,body{
  overflow: hidden !important;
}
.van-tabbar{
  display: none !important;
}
.errorPage {
  font-size: 1rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
}
.robot-buttons {
  position: fixed;
  top: 72%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1em;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5em 1.5em;
  margin: 0.5em 0.2em 0em 0.2em;
  text-align: center;
  border-radius: 0.3em;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}

@keyframes shake {
  0%,
  to {
    transform: translate(-1px);
  }

  10% {
    transform: translate(2px, 1px);
  }

  30% {
    transform: translate(-3px, 2px);
  }

  35% {
    transform: translate(2px, -3px);
    filter: blur(4px);
  }

  45% {
    transform: translate(2px, 2px) skewY(-8deg) scaleX(0.96);
    filter: blur(0);
  }

  50% {
    transform: translate(-3px, 1px);
  }
}

@keyframes scan {
  0%,
  20%,
  to {
    height: 0;
    transform: translate(-50%, 0.44em);
  }

  10%,
  15% {
    height: 1em;
    line-height: 0.2em;
    transform: translate(-55%, 0.17em);
  }
}

@keyframes glitch-anim {
  0% {
    clip: rect(11px, 9999px, 47px, 0);
  }

  10% {
    clip: rect(87px, 9999px, 36px, 0);
  }

  20% {
    clip: rect(46px, 9999px, 80px, 0);
  }

  30% {
    clip: rect(17px, 9999px, 11px, 0);
  }

  40% {
    clip: rect(66px, 9999px, 16px, 0);
  }

  50% {
    clip: rect(85px, 9999px, 84px, 0);
  }

  60% {
    clip: rect(49px, 9999px, 28px, 0);
  }

  70% {
    clip: rect(92px, 9999px, 38px, 0);
  }

  80% {
    clip: rect(56px, 9999px, 31px, 0);
  }

  90% {
    clip: rect(34px, 9999px, 93px, 0);
  }

  to {
    clip: rect(21px, 9999px, 11px, 0);
  }
}

h1 {
  position: absolute;
  text-align: center;
  width: 100%;
  font-size: 6rem;
  font-weight: 700;
  margin: 200px auto;
  animation: 0.6s ease-in-out infinite alternate;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: shake;
  user-select: none;
}

h1:before {
  content: "404";
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0.34em);
  height: 0.1em;
  line-height: 0.5em;
  width: 100%;
  animation: scan 0.5s ease-in-out 399ms infinite alternate,
    glitch-anim 0.3s ease-in-out infinite alternate;
  animation-duration: 0.5s, 0.3s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-delay: 399ms, 0s;
  animation-iteration-count: infinite, infinite;
  animation-direction: alternate, alternate;
  animation-fill-mode: none, none;
  animation-play-state: running, running;
  animation-name: scan, glitch-anim;
  overflow: hidden;
  opacity: 0.7;
}

h1:after {
  content: "404";
  position: absolute;
  top: -23px;
  left: 50%;
  transform: translate(-50%, 0.34em);
  height: 0.5em;
  line-height: 0.1em;
  width: 100%;
  animation: scan 665ms ease-in-out 201ms infinite alternate,
    glitch-anim 0.3s ease-in-out infinite alternate;
  animation-duration: 665ms, 0.3s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-delay: 201ms, 0s;
  animation-iteration-count: infinite, infinite;
  animation-direction: alternate, alternate;
  animation-fill-mode: none, none;
  animation-play-state: running, running;
  animation-name: scan, glitch-anim;
  overflow: hidden;
  opacity: 0.8;
}
</style>