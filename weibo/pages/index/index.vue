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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oheight:''
			}
		},
		onLoad() {
			wx.createSelectorQuery().selectAll('.contentImg').boundingClientRect(function (rect) {
			   this.oheight= rect[0].width * (32/100);
			}).exec()
		},
		methods: {
		}
	}
</script>

<style lang="scss" >
	@import './index.scss';
</style>
