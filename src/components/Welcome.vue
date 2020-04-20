<template>
  <div class="container">
    <div class="heartAnimation" :class="{ active: isActive }" @click="tapToChear"></div>
    <h1>      
      <span
        ref='countup'
        class="text"
      ></span>
    </h1>
  </div>
</template>

<script>
import { CountUp } from 'countup.js'
export default {
  name: 'Welcome',
  props: {
  },
  data () {
    return {
      // countup配置项
      options: {
        startVal: 1000,
        duration: 3,
        prefix: '我是第',
        suffix: '位点赞者'
      },
      endCount: 2019,
      isActive: false
    }
  },
  mounted (){
  },
  methods: {
    initCountUp () {
      let demo = new CountUp(this.$refs.countup, this.endCount, this.options)
      if (!demo.error) {
        demo.start()
      } else {
        console.error(demo.error)
      }
    },
    getWelcomes () {
      // fetch()
    },
    setWelcomes () {
      // fetch()
    },
    tapToChear () {
      this.isActive = !this.isActive
      this.initCountUp()
    }  
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 100%;
  height: 100vh;
  background-color: rgb(245, 135, 135);
}
.text {
  color: #4d63bc;
  font-size: 16px;
}
.heartAnimation {
  position: absolute;
  background-image: url(./../assets/heart.png);
  background-position: left;
  background-repeat: no-repeat;
  /*background-size: 2900%;*/
  height: 100px;
  width: 100px;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -47.5%);
  transform: translate(-50%, -47.5%)
}

.active {
  animation-timing-function: steps(28);
  animation-name: heart-burst;
  animation-duration: 2s;
  animation-iteration-count: 1;
  display: inline-block;
  animation-fill-mode: forwards;

}

@keyframes heart-burst {
  0% {
    background-position: left
  }

  100% {
    background-position: right
  }
}
</style>
