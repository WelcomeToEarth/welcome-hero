<template>
    <div class="container">
        <div class="footer-wriper" v-show="isActive">
            <div class="result animated fadeOutUp" v-if="isResult" style="animation-duration: 4s;"> {{result}} </div>
            <!-- <img src="./../assets/web/clicked.png" alt="" class="button-img" v-if="!isResult" @click="setWelcomes" :class="{ animated: isActive, zoomIn: isActive }" style="animation-duration: 0.2s;">
            <img src="./../assets/web/button.png" alt="" class="button-img"  v-if="isResult" @click="chearUp"> -->
            <van-button round type="primary" icon="good-job-o" color="linear-gradient(to right, #4bb0ff, #6149f6)" class="button-img" @click="setWelcomes" :class="{ animated: isActive, zoomIn: isActive }" style="animation-duration: 0.2s;"></van-button>
        </div> 
    </div>
</template>
<script>
import { Notify } from 'vant';
import axios from 'axios'
export default {
    data () {
        return {
            // countup配置项
            endCount: 0,
            isActive: false,
            isClick: true,
            isResult: false
        }
    },
    computed: {
        result: function () {
            return `我是第${this.endCount}位点赞者`
        }
    },
    mounted (){
        // this.setWelcomes()
        setTimeout(()=>{
        this.isActive = true
        },1000)
    },
    methods: {
        setWelcomes () {
            this.isResult = false
            axios
                .get('/2019ncov/praise/put')
                .then(response => {
                    console.log(response)
                    const ret = response.data
                    this.endCount = ret.data
                    this.isResult = true
                })
        },
        chearUp() {
            // this.setWelcomes()
            this.isResult = !this.isResult
        },
    }
}
</script>
<style scoped>
.animated {
    animation-duration: 1.0s;
    animation-fill-mode: both;
}
.container{
  width: 396px;
  height: 208px;
  background: url(./../assets/web/bgc.png) no-repeat center center fixed;
  background-size: cover;
}
.button-img{
  position: absolute;
  background-repeat: no-repeat;
  left: 20px;
  bottom: 70px;
}

.result{
  position: absolute;
  top: 30%;
  left: 2%;
  width: 10rem;
  height: 2rem;
  line-height: 2rem;
  background-color: #3f35b1;
  z-index: 2;
  border-radius: 1rem;
  color: azure;
  font-size: 0.8rem;
}
</style>