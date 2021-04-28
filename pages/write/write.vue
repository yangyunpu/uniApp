<template>
	<view>
		写作
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
			
		}
	}
</script>

<style>

</style>
