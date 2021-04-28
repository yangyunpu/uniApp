import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);


 //引入全局请求插件
// import { http,api } from '@/config/common.js' // 全局挂载引入，配置相关在该index.js文件里修改
// Vue.prototype.$http = http
// Vue.prototype.$api = api

// 判断是否登录，存在token
Vue.prototype.checkLogin = function(){
	const token = uni.getStorageSync('token')
	if(token === ''){ // 本地没有token表示未登录
		console.log('未登录返回到登录页')
		uni.reLaunch({url:'/pages/login/login'})
		return false
	}
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
