<template>
	<view class="page">
		<u-cell-group>
			<u-cell-item  title="夕阳无限好" @click="goEditInfo">
				<!-- <u-icon slot="icon" size="32" name="search"></u-icon> -->
				<image slot="icon" src="../../static/nav3-a.png" class="img" mode=""></image>
			</u-cell-item>
			<u-cell-item icon="setting-fill" title="只是近黄昏"  @click="goSetting"></u-cell-item>
		</u-cell-group>
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
			// if (!loginRes) {
			// 	console.log(11)
			// 	return false;
			// }
			console.log(22)
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
			// 编辑个人信息
			goEditInfo() {
				uni.navigateTo({url:'/pages/my/editInfo'})
			},
			// 安全设置
			goSetting() {
				uni.navigateTo({url:'/pages/setting/setting'})
			}
		}
	}
</script>

<style lang="scss" scoped>
.page{
	// padding: 0 30rpx;

	.img{
		width: 40rpx;
		height: 40rpx;
		float: left;
		margin-right: 10rpx;
	}
}
</style>
