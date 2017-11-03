// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'											// App组件
import ElementUI from 'element-ui'								// element-ui组件
import 'element-ui/lib/theme-chalk/index.css'					// element-ui样式需要单独引入
import router from './router'									// 路由引入
import api from './api/index'									// 引用API文件
import '@/styles/common.less'									// 全局的样式
import VueLetterAvatar from 'vue-letter-avatar';				// 头像

Vue.config.productionTip = false
Vue.prototype.$api = api                						// 将API方法绑定到全局
Vue.use(ElementUI)													
Vue.use(VueLetterAvatar);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
