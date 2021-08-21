import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import scss from '@/assets/scss/style.scss'


Vue.config.productionTip = false

new Vue({
  store,
  // scss,
  render: h => h(App)
}).$mount('#app')
