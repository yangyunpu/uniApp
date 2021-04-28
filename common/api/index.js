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
			return request.post("/categorys",data);
		},
		// put请求
		putData(data){
			// 传入的data对象  {ip:'xxxxxx'}; 
			return request.put("/ip/getIpInfo.php",data);
		},
		// delete请求
		deleteData(data){
			// 传入的data对象  {ip:'xxxxxx'}; 
			return request.delete("/ip/getIpInfo.php",data);
		}
	} 