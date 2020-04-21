import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import FastClick from 'fastclick'

import animated from 'animate.css' // npm install animate.css --save安装，再引入

Vue.use(animated)
// Vue.use(Notify);

FastClick.attach(document.body)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
