import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  	routes: [
    	{
      		path: '/index',
      		component: resolve => require(['@/views/index'], resolve)
    	},
    	{
      		path: '/content/:id',
      		component: resolve => require(['@/views/content'], resolve)
    	},
    	{
    		path: '/',
    		component: resolve => require(['@/views/layout/mainWrap'], resolve)
    	},
        {
            path: '/login',
            component: resolve => require(['@/views/login/login'],resolve)
        }
  	]
})
