import Vue from 'vue'
import App from './App'
import router from './router'

// jquery
import $ from 'jquery'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'

//  view UI
import ViewUI from '../node_modules/view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
