<template>
  <div class="container">
    <!-- <div class="heartAnimation" :class="{ active: isActive }" @click="tapToChear"></div> -->
    <img src="./../assets/text.png" alt="" class="text-img animated bounceInUp"> 
    <img src="./../assets/bottom.png" alt="" class="bottom-img">
    <div class="people-wriper">
      <img src="./../assets/people1.png" alt="" class="people1-img">
      <img src="./../assets/people2.png" alt="" class="people2-img animated slideInUp">
      <img src="./../assets/people3.png" alt="" class="people3-img">
    </div> 
    <transition name="fade">
      <div class="flower-wriper" v-show="isActive">
        <img src="./../assets/flower.png" alt="" class="flower-img">
      </div>
    </transition>
    <div class="footer-wriper" v-show="isActive">
      <img src="./../assets/button.png" alt="" class="button-img" v-if="isClick" @click="chearUp" :class="{ animated: isActive, heartBeat: isActive }">
      <img src="./../assets/clicked.png" alt="" class="button-img"  v-if="!isClick" @click="chearUp" :class="{ animated: isActive, heartBeat: isActive }">
    </div>  
  </div>
</template>

<script>
import { CountUp } from 'countup.js'
import { Notify } from 'vant';
import axios from 'axios'
export default {
  name: 'Welcome',
  props: {
  },
  data () {
    return {
      // countup配置项
      options: {
        startVal: 1,
        duration: 3,
        prefix: '我是第 ',
        suffix: ' 位点赞者'
      },
      endCount: 0,
      isActive: false,
      isClick: true
    }
  },
  mounted (){
    // this.setWelcomes()
    setTimeout(()=>{
      this.isActive = true
    },1000)
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
    setWelcomes () {
      axios
        .get('/2019ncov/praise/put')
        .then(response => {
          console.log(response)
          const ret = response.data
          this.endCount = ret.data
          Notify({
            message: `我是第${ret.data}位点赞者`,
            color: '#fff',
            background: '#4b54e1',
            duration: 500,
          });
          // this.initCountUp()
        })
    },
    tapToChear () {
      this.isActive = !this.isActive
      // this.setWelcomes()
    },
    chearUp() {
      this.isClick && this.setWelcomes()
      this.isClick = !this.isClick
    },
    destroyed() {
      
    },
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  width: 100%;
  height: 100vh;
  /* background-color: rgb(245, 135, 135); */
  background: url(./../assets/bgc.png) no-repeat center center fixed;
  background-size: cover;
}
.text {
  color: #5b59f1;
  font-size: 16px;
}
.heartAnimation {
  position: absolute;
  background-image: url(./../assets/heart2.png);
  background-position: left;
  background-repeat: no-repeat;
  /* background-size: 100%; */
  height: 100px;
  width: 100px;
  left: 50%;
  bottom: 10%;
  /* -ms-transform: translate(-50%, -47.5%); */
  transform: translate(-50%, -47.5%)
}

.active {
  animation-timing-function: steps(27);
  animation-name: heart-burst;
  animation-duration: 2s;
  animation-iteration-count: 1;
  display: inline-block;
  animation-fill-mode: forwards;

}
.text-img{
  position: absolute;
  background-repeat: no-repeat;
  width: 80vw;
  left: 10%;
  top: 10%;
}
.bottom-img{
  position: absolute;
  background-repeat: no-repeat;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 2;
}
.flower-img{
  position: absolute;
  background-repeat: no-repeat;
  width: 100%;
  left: 0;
  bottom: 0;
}
.people1-img{
  position: absolute;
  background-repeat: no-repeat;
  width: 50%;
  left: 3%;
  bottom: 25%;
}
.people2-img{
  position: absolute;
  background-repeat: no-repeat;
  width: 40%;
  left: 35%;
  bottom: 10%;
  z-index: 2;
}
.people3-img{
  position: absolute;
  background-repeat: no-repeat;
  width: 40%;
  right: 5%;
  bottom: 25%;
}

.footer-wriper{
  display: flex;
  justify-content: center;
}
.button-img{
  position: absolute;
  background-repeat: no-repeat;
  width: 35%;
  bottom: 1%;
  z-index: 3;
}

@keyframes heart-burst {
  0% {
    background-position: left
  }

  100% {
    background-position: right
  }
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 1.0s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
