<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<u-button type="success">
			<text>{{title}} 框架真好</text>
			<u-icon name="thumb-up-fill" color="#ffffff" size="28"></u-icon>
		</u-button>

	</view>
</template>

<script>
	import TestApi from "@/common/api/index.js"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// 是否登录
			var loginRes = this.checkLogin();
			if (!loginRes) {
				return false;
			}

			this.getData()
			this.postData()
		},
		methods: {
			getData() {
				// var data={id:'xxxxxxx'}
				TestApi.getData().then(res => {
					console.log(res);
				}).catch(error=>{
					console.log(error);
				});
			},
			postData() {
				const  data={
					name: "nust-app",
					key: "1",
				}
				TestApi.postData(data).then(res => {
					console.log('post请求---',res);
				}).catch(error=>{
					console.log(error);
				});
			},
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
