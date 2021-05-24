<template>
	<view>
		
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
			<!-- //  @init="mescrollInit" @down="downCallback" @up="upCallback"为固定值,不可删改(与mescroll-mixins保持一致) 
			 // :down="downOption" :up="upOption" 绝大部分情况无需配置 
			 // :top="顶部偏移量" :bottom="底部偏移量" :topbar="状态栏" :safearea="安全区" (常用)
			 // 字节跳动小程序 ref="mescrollRef" 必须配置 
			 // 此处支持写入原生组件 -->
			 <view v-for="data in dataList"> 数据列表... </view>
			 写作
		 </mescroll-body>
	</view>
</template>

<script>
// 引入mescroll-mixins.js
import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";

export default {
	mixins: [MescrollMixin], // 使用mixin
	data() {
		return {
			// 下拉刷新的配置(可选, 绝大部分情况无需配置)
			downOption: { 
				
			},
			// 上拉加载的配置(可选, 绝大部分情况无需配置)
			upOption: {
				page: {
					size: 10 // 每页数据的数量,默认10
				},
				noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
				empty: {
					tip: '暂无相关数据'
				}
			},
			// 列表数据
			dataList: []
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
		/*下拉刷新的回调, 有3种处理方式:*/
		downCallback(){
			this.getDate()
			// 第2种: 下拉刷新和上拉加载调同样的接口, 则不用第1种, 直接mescroll.resetUpScroll()即可
			// this.mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			// 第3种: 下拉刷新什么也不处理, 可直接调用或者延时一会调用 mescroll.endSuccess() 结束即可
			this.mescroll.endSuccess()
		},
		/*上拉加载的回调*/
		upCallback(page) {
			// this.mescroll.resetUpScroll()
			//方法一(推荐): 后台接口有返回列表的总页数 totalPage
			this.mescroll.endByPage(30, 30); 
			console.log("上拉加载更多--")
		},
		// 初始数据
		getDate() {
			console.log("初始化成功")
		},
	}
}
</script>

<style>
page{
	background-color: #F8F8F8;
}
</style>
