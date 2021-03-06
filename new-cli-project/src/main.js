import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
export const eventBus = new Vue({
  methods: {
    listEdit: function(memo, index) {
      this.$emit('listEdit', memo, index);
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
