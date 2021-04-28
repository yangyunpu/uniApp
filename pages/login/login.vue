<template>
	<view class="content">
		<u-button type="success">
			<text>登录</text>
		</u-button>
		
		<view class="" style="width: 600rpx;">
			<u-form :model="form" ref="uForm">
				<u-form-item label="账号" prop="name">
					<u-input v-model="form.name" />
				</u-form-item>
				<u-form-item label="密码" prop="intro">
					<u-input v-model="form.intro" />
				</u-form-item>
			</u-form>
			<u-button @click="submit">提交</u-button>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					intro: '',
				},
				rules: {
					name: [
						// 可以单个或者同时写两个触发验证方式 
						{required: true,message: '请输入姓名',trigger: ['change','blur']}
					],
					intro: [
						{required: true,min: 5,message: '密码不能少于5个字',trigger: 'change'}
					]
				}
			}
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						// uni.setStorageSync('token', this.form.name)
						uni.setStorage({
						    key: 'token',
						    data: this.form.name,
						    success: function () {
						        console.log('success');
								uni.reLaunch({url:'/pages/index/index'})
						    }
						})
					} else {
						console.log('验证失败');
					}
				});
			},
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
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
	

</style>
