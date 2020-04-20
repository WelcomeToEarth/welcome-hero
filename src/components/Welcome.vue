<template>
  <div class="container">
    <button @click="welcome">点赞</button>
    <h2 class="test">jquery 测试</h2>
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
import $ from 'jquery'
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
      endCount: 2019
    }
  },
  mounted (){
    console.log($);
  },
  methods: {
    welcome () {
      this.initCountUp()
    },
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
</style>
