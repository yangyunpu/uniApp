import request from '@/config/common.js'
		/* 测试Api */
	export default{
		// get请求 可以拼接url或者传入数据对象 二选一
		getData(data){
			// 传入的data对象 
			return request.get("/home/swiperdata",{params:data});
		},
		// post请求
		postData(data){
			// 传入的data对象  {ip:'xxxxxx'}; 
			return request.post("/merchantInfo/getMerchantInfo",data);
		},
		
	} 