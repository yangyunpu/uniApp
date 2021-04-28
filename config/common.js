import Request from '@/utils/luch-request/index.js'
export const apiBaseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
// export const apiBaseUrl = 'http://localhost:3000/api'
// yyp
// 封装请求get和post正常使用
// 后期 token 请求头  ，登录检验

// import {
// 	BASE_API
// } from '@/http/url.js'
// import qs from 'qs'
const http = new Request({
	// baseURL: BASE_API, //设置请求的base url
	baseURL: apiBaseUrl,
	timeout: 300000, //超时时长5分钟,
	header: {
		'Content-Type': 'multipart/form-data;application/json;charset=UTF-8;'
	}
})

//请求拦截器
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	const token = uni.getStorageSync('token');
	console.log('请求拦截器----')
	if (token) {
		config.headers.common["Authorization"] = 'Bearer ' + token;
	}

	if (config.method === 'POST') {
		config.data = JSON.stringify(config.data);
	}
	return config
}, error => {
	return Promise.resolve(error)
})

// 响应拦截器
http.interceptors.response.use((response) => {
	console.log(response)
	console.log('响应拦截')
	return response
}, (error) => {
	//未登录时清空缓存跳转
	console.log('未登录')
	// yyp 注释
	// if (error.statusCode == 401) {
	// 	uni.clearStorageSync();
	// 	uni.switchTab({
	// 		url: "/pages/index/index.vue"
	// 	})
	// }
	// return Promise.resolve(error)
})
export default http;