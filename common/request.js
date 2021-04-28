// 这个方法 未用，用的 config目录的

import Request from '@/common/luch-request/index.js'
const http = new Request();
import {baseUrl} from './baseUrl.js'
 
let defaultUrl = ''
if(process.env.NODE_ENV === 'production'){
	defaultUrl = baseUrl
}else{
	defaultUrl = 'xxxx'
}
 
http.setConfig((config) => { /* 设置全局配置 */
	config.baseURL = defaultUrl
	config.custom = {
		loading:true
	} 
	config.header = {
		
		// a: 1, // 演示用
		// b: 2 // 演示用
	}
	return config
})
 
//请求前拦截，用来动态加参
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	if(config.url !== '/logins' && config.url!=='/captcha/logins'){
		config.header.Authorization ='Bearer '+ uni.getStorageSync("token")
	}
	
	console.log('请求前拦截header',config)
	if(config.url == '/images'){
		config.header = {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
		'Authorization':'Bearer' +' ' + uni.getStorageSync("token")
      }
	}
	config.header = {
		...config.header,
		a: 1 // 演示拦截器header加参  
	}
	// 演示custom 用处  
	if (config.custom.loading) {
		uni.showLoading()
	}
	return config
}, (config) => {
	return Promise.reject(config)
})
 
 
// 请求后
http.interceptors.response.use((response) => {
	
	if (response.config.custom.loading) {
		uni.hideLoading()
	}
	if (response.statusCode > 300 ||response.statusCode< 200) { 
		console.log('reject')
	  return Promise.reject(response)  
	} 
	return response.data
}, (response) => { // 请求错误。可以使用async await 做异步操作  
	console.log(response,'错误')
	if (response.config.custom.loading) {
		uni.hideLoading()
	}
	if(response.statusCode == 401){
		uni.clearStorageSync();
		uni.showToast({
		    title: '登录失败，请重新登录',
		    duration: 2000
		});
		
		// 校验是否登录，未登录去登录页
		if(response.config.url !== "/logins"){
			uni.reLaunch({
				url:'/pages/login/login'
			})
		}
	}else{
		uni.showToast({
		    title: response.data.messages[0].content,
			icon: 'none',
		    duration: 2000
		});
	}
	return Promise.reject(response)
})
export default http