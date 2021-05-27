<template>
	<view class="page">
		<uni-nav-bar 
			background-color="#0c73fe" 
			color="#fff" 
			:status-bar="status_bar" 
			:title="nav_title"
			@clickLeft="clickNavLeft()"
			@clickRight="clickNavRight()">
			<!-- 导航栏左侧插槽 -->
			<view slot="left">left</view>
			<!-- 右侧插槽 -->
			<view slot="right">right</view>
		</uni-nav-bar>
		<view class="content">
			<!-- <image class="logo" src="/static/logo.png"></image>
			<view class="text-area">
				<text class="title">{{title}}</text>
			</view> -->
			<u-button type="success" @click="getData">
				<text>{{title}}</text>
				<u-icon name="thumb-up-fill" color="#ffffff" size="28"></u-icon>
			</u-button>
			<view>
				{{datalist}}
			</view>
			<u-button type="success" @click="goScan">
				<text>扫码</text>
			</u-button>
		
		</view>
	
	</view>
	
</template>

<script>
	import TestApi from "@/common/api/index.js"
	export default {
		data() {
			return {
				// 导航栏文字
				nav_title:'首页',
				// 是否包含状态栏
				status_bar:true,
				title: 'Hello',
				datalist: []
			}
		},
		onLoad() {
			// 是否登录
			var loginRes = this.checkLogin();
			// 此处感觉没意义
			// if (!loginRes) {
			// 	return false;
			// }

			// this.getData()
			this.postData()
			this.GetLOcation()
		},
		methods: {
			// 点击导航栏左侧
			clickNavLeft(){
				uni.showToast({
					title:'点击导航栏左侧',
					duration: 1500,
					icon:'none'
				});
			},
			// 点击导航栏右侧
			clickNavRight(){
				uni.showToast({
					title:'点击导航栏右侧',
					duration: 1500,
					icon:'none'
				});
			},

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
					merchantInfoId: 600,
				}
				TestApi.postData(data).then(res => {
					console.log('post请求---',res);
				}).catch(error=>{
					console.log(error);
				});
			},
			// 去扫码页
			goScan() {
				uni.navigateTo({url:'/pages/setting/scan'})
			},
			//获取位置
			GetLOcation() {
				uni.getLocation({
					type: 'gcj02',
					geocode:true,
					success: (res) => {
						console.log('定位',res)
						this.datalist = res
						var latitude = parseFloat(res.latitude);
						var longitude = parseFloat(res.longitude);
					}
				});
			},
			// 下拉刷新
			onPullDownRefresh() {
				console.log('下拉刷新');
				setTimeout(function () {
					uni.stopPullDownRefresh();
				}, 1000);
			}
		}
	}
</script>

<style lang="scss" scoped>
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
