<template>
	<view>
		
	</view>
</template>

<script>
import SettingApi from "@/common/api/setting.js"
export default {
	data() {
		return {
			
		};
	},
	onLoad() {
		// 是否登录
		var loginRes = this.checkLogin();
		this.postData()
	},
	methods: {
		getData() {
			// var data={id:'xxxxxxx'}
			SettingApi.getData().then(res => {
				console.log(res);
			}).catch(error=>{
				console.log(error);
			});
		},
		postData() {
			const  data={
				merchantInfoId: 600,
			}
			SettingApi.postData(data).then(res => {
				console.log('post请求---',res);
			}).catch(error=>{
				console.log(error);
			});
		},
	}
}
</script>

<style lang="scss" scoped>

</style>
