import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueYandexMetrika from 'vue-yandex-metrika'
import 'tachyons/css/tachyons.min.css';

Vue.config.productionTip = false

Vue.use(VueYandexMetrika, {
  id: 55314397,
  router: router,
  env: process.env.NODE_ENV
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
