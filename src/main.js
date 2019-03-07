/* global APP_CONFIG VERSION */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMultianalytics from 'vue-multianalytics'

Vue.config.productionTip = false

if (APP_CONFIG.GA.id) {
  Vue.use(VueMultianalytics, {
    modules: {
      ga: {
        appName: 'Guaman.cl',
        appVersion: VERSION,
        trackingId: APP_CONFIG.GA.id
      }
    },
    routing: {
      vueRouter: router
    }
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
