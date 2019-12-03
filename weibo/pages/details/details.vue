<template>
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
		</view>
		
		
		<view class="footer">
			<view class="item" :class="index==1?'active':''" @click="footerBtn(1)">分享253</view>
			<view class="item" :class="index==2?'active':''" @click="footerBtn(2)">评论253</view>
			<view class="item" :class="index==3?'active':''" @click="footerBtn(3)">点赞253</view>
		</view>
		<view class="tab2" v-if="index==1">
			<view class="tab2Time" v-for="(item,index) in list" v:key="index">
				<!-- <image class="logo" src="" mode=""></image> -->
				<view class="contRight">
					<view class="userName">用户名</view>
					<view class="contentTxt">转发微博</view>
					<view class="contentFoot">
						<text class="time">8小时前</text>
					</view>
				</view>
			</view>
		</view>
		<view class="tab2" v-if="index==2">
			<view class="tab2Time" v-for="(item,index) in list" v:key="index">
				<!-- <image class="logo" src="" mode=""></image> -->
				<view class="contRight">
					<view class="userName">用户名</view>
					<view class="contentTxt">啊士大夫萨芬十大撒旦发射点</view>
					<view class="contentTxtCont">
						<view class="uItem"><text class="uname">前叔叔:</text> 俩开始发顺丰</view>
						<view class="uItem"><text class="uname">叔:</text> 你说什么</view>
					</view>
					<view class="contentFoot">
						<text class="time">8小时前</text>
						<text class="pl">评论</text>
						<text class="dz">点赞22</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="tab2 tab3" v-if="index==3">
			<view class="tab2Time" v-for="(item,index) in list" v:key="index">
				<!-- <image class="logo" src="" mode=""></image> -->
				<view class="contRight">
					<view class="userName">用户名</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:2,
				list:[{},{}]
			}
		},
		onLoad() {
		},
		methods: {
			footerBtn(e){
				this.index=e
			}
		}
	}
</script>

<style lang="scss">
	@import './details.scss';
</style>
