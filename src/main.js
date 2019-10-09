import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/lib/mui/css/mui.css'
Vue.use(MintUI)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')