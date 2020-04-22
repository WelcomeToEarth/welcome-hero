import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import FastClick from 'fastclick'
import { Button } from 'vant';

Vue.use(Button);

import animated from 'animate.css' // npm install animate.css --save安装，再引入

Vue.use(animated)
// Vue.use(Notify);

FastClick.attach(document.body)

// import VueStarPlus from 'vue-star-plus'
// import 'vue-star-plus/vue-star-plus.css'
// Vue.component('vue-star-plus', VueStarPlus)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
