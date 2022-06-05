import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import 'material-design-icons-iconfont'
import Viewer from 'v-viewer'
import Meta from 'vue-meta';


Vue.use(Meta);
Vue.use(Viewer)
Vue.config.productionTip = false
// Добавил фильтр для вывода true false
Vue.filter('yesno', function (value) {
  return value ? 'Да' : 'Нет';
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
