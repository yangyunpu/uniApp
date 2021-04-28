<template>
	<view>
		我的
		<u-button @click="logout">退出登录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			// 是否登录
			var loginRes = this.checkLogin();
			if (!loginRes) {
				return false;
			}
		},
		methods: {
			logout() {
				uni.removeStorage({
				    key: 'token',
				    success: function (res) {
				        console.log('success');
						uni.reLaunch({url:'/pages/login/login'})
				    }
				});
			},
			
		}
	}
</script>

<style>

</style>
