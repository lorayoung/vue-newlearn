import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import router from './router.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/lib/mui/css/mui.css'
import './assets/lib/mui/css/icons-extra.css'
import './assets/css/public.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(MintUI)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.config.productionTip = false


axios.defaults.baseURL = '/'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')