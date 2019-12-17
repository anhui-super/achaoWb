<template>
	<view class="content">
		
		<view class="navTop">
			<view class="logo">LOGO</view>
			<view class="search">
				<image class="icon" src="" mode=""></image>
				<text class="txt">大家都在搜：2020年底前实现疫苗一物一码</text>
			</view>
			<view class="edit">编写</view>
		</view>
		
		<view class="slideWrap">
			<view class="slideList">
				<view class="slideItem">热门</view>
				<view class="slideItem">新鲜事</view>
				<view class="slideItem">同城</view>
				<view class="slideItem">搞笑</view>
				<view class="slideItem">情感</view>
			</view>
			<view class="arrowBotton">下拉</view>
		</view>
		
		<view class="contentList">
			<view class="contentItem">
				<view class="itemTop">
					<view class="userLogo"></view>
					<view class="userName">justlovesdlrb</view>
					<view class="tips">
						<text class="userTime">12小时前</text>
						<text>来自</text>
						<text class="userAdress">深圳宝安</text>
					</view>
				</view>
				<view class="contentText">
					 这有什么好奇怪的，仙侠剧，多个电表箱不足为奇哈哈哈哈😃😃😃 
				</view>
				<view class="contentImg" >
					<view class="contentImgItem" :style="{height: oheight+'upx'}">
						<image src="https://wx3.sinaimg.cn/orj360/752a7063ly3g9fzlp5o1aj20u00u04qp.jpg" mode="widthFix"></image>
					</view>
					<view class="contentImgItem" :style="{height: oheight+'upx'}">
						<image src="https://wx3.sinaimg.cn/orj360/752a7063ly3g9fzlp5o1aj20u00u04qp.jpg" mode="widthFix"></image>
					</view>
					<view class="contentImgItem" :style="{height: oheight+'upx'}">
						<image src="https://wx3.sinaimg.cn/orj360/752a7063ly3g9fzlp5o1aj20u00u04qp.jpg" mode="widthFix"></image>
					</view>
				</view>
				
				<view class="footer">
					<view class="item">分享253</view>
					<view class="item">评论253</view>
					<view class="item">点赞253</view>
					<view class="item fr">更多</view>
				</view>
			</view>
			
			
			
			<view class="contentItem">
				<view class="itemTop">
					<view class="userLogo"></view>
					<view class="userName">justlovesdlrb</view>
					<view class="tips">
						<text class="userTime">12小时前</text>
						<text>来自</text>
						<text class="userAdress">深圳宝安</text>
					</view>
				</view>
				<view class="contentText">
					 这有什么好奇怪的，仙侠剧，多个电表箱不足为奇哈哈哈哈😃😃😃 
				</view>
				<view class="contentImg" >
					<view class="contentImgItem" :style="{height: oheight+'upx'}">
						<image src="https://wx3.sinaimg.cn/orj360/752a7063ly3g9fzlp5o1aj20u00u04qp.jpg" mode="widthFix"></image>
					</view>
					<view class="contentImgItem" :style="{height: oheight+'upx'}">
						<image src="https://wx3.sinaimg.cn/orj360/752a7063ly3g9fzlp5o1aj20u00u04qp.jpg" mode="widthFix"></image>
					</view>
					<view class="contentImgItem" :style="{height: oheight+'upx'}">
						<image src="https://wx3.sinaimg.cn/orj360/752a7063ly3g9fzlp5o1aj20u00u04qp.jpg" mode="widthFix"></image>
					</view>
				</view>
				
				<view class="footer">
					<view class="item">分享253</view>
					<view class="item">评论253</view>
					<view class="item">点赞253</view>
					<view class="item fr">更多</view>
				</view>
			</view>
			
			
			<view class="contentItem">
				<view class="itemTop">
					<view class="userLogo"></view>
					<view class="userName">justlovesdlrb</view>
					<view class="tips">
						<text class="userTime">12小时前</text>
						<text>来自</text>
						<text class="userAdress">深圳宝安</text>
					</view>
				</view>
				<view class="contentText">
					 这有什么好奇怪的，仙侠剧，多个电表箱不足为奇哈哈哈哈😃😃😃 
				</view>
				<view class="contentImg" >
					<view class="contentImgItem" :style="{height: oheight+'upx'}">
						<image src="https://wx3.sinaimg.cn/orj360/752a7063ly3g9fzlp5o1aj20u00u04qp.jpg" mode="widthFix"></image>
					</view>
					<view class="contentImgItem" :style="{height: oheight+'upx'}">
						<image src="https://wx3.sinaimg.cn/orj360/752a7063ly3g9fzlp5o1aj20u00u04qp.jpg" mode="widthFix"></image>
					</view>
					<view class="contentImgItem" :style="{height: oheight+'upx'}">
						<image src="https://wx3.sinaimg.cn/orj360/752a7063ly3g9fzlp5o1aj20u00u04qp.jpg" mode="widthFix"></image>
					</view>
				</view>
				
				<view class="footer">
					<view class="item">分享253</view>
					<view class="item">评论253</view>
					<view class="item">点赞253</view>
					<view class="item fr">更多</view>
				</view>
			</view>
			
			
		</view>
		<view class="prop" v-if="userInfo==''">
			<view class="bom">
				<button class="btn" open-type="getUserInfo" @getuserinfo="getUserInfo">授权登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {ajax,showTips,urlTobase64} from '@/ajax.js'
	export default {
		data() {
			return {
				userInfo: '',
				oheight:''
			}
		},
		onLoad() {
			let _this = this;
			wx.getSetting({ //判断是否授权
			  success (res){
				if (res.authSetting['scope.userInfo']) { //已经授权
				  wx.getUserInfo({
					success: function(res) {
						_this.userInfo = res.userInfo;
						console.log('-----')
					}
				  })
				}else{
					console.log('=======')
					_this.userInfo = ''
				}
			  }
			})
			
			// uni.login({
			//   success (res) {
			// 	if (res.code) {
			// 	  //发起网络请求
			// 	  uni.request({
			// 		url: ajax.login,
			// 		data: {
			// 		  code: res.code
			// 		},
			// 		header:{
			// 			'Content-Type':'application/x-www-form-urlencoded'
			// 		},
			// 		method:'POST',
			// 		success: (rs) => {
			// 			console.log(rs.data.data)
			// 			uni.getUserInfo({
			// 				lang:'zh_CN',
			// 				success: function(res) {
			// 					var userInfo = res.userInfo
			// 					var nickName = userInfo.nickName
			// 					var avatarUrl = userInfo.avatarUrl
			// 					var gender = userInfo.gender //性别 0：未知、1：男、2：女
			// 					var province = userInfo.province
			// 					var city = userInfo.city
			// 					var country = userInfo.country
			// 					console.log(res,'-----')
			// 				}
			// 			})
			// 		},
			// 	  })
			// 	} else {
			// 	  console.log('登录失败！' + res.errMsg)
			// 	}
			//   }
			// })

		},
		methods: {
			getUserInfo(e){ //授权成功
				console.log('-----',e)
			}
		},
		
	}
</script>

<style lang="scss" >
	@import './index.scss';
</style>
