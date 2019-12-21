<template>
	<view class="contentList">
		<view class="contentItem">
			<view class="itemTop">
				<view class="userLogo">
					<image :src="info.avatarUrl" mode="widthFix"></image>
				</view>
				<view class="userName">{{info.nickName}}</view>
				<view class="tips">
					<text class="userTime">{{info.time}}</text>
					<text>来自</text>
					<text class="userAdress">{{info.district}}</text>
				</view>
			</view>
			<view class="contentText">
				{{info.content}}
			</view>
			<view class="contentImg" v-if="info.imgList!=null&& info.imgList.length>0" >
				<view class="contentImgItem" v-for="(item,index) in info.imgList" :key="index" :style="{height: oheight+'upx'}">
					<image :src="'https://tt.ilout.com'+item" mode="widthFix"></image>
				</view>
			</view>
		</view>
		
		
		<view class="footer">
			<view class="item" :class="index==1?'active':''" @click="footerBtn(1)">分享253</view>
			<view class="item" :class="index==2?'active':''" @click="footerBtn(2)">评论253</view>
			<view class="item" :class="index==3?'active':''" @click="footerBtn(3)">点赞253</view>
		</view>
		<view class="tab2" v-if="index==1">
			<view class="tab2Time" v-for="(item,index) in list" :key="index">
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
			<view class="tab2Time" v-for="(item,index) in list" :key="index">
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
					<view class="footComment">
						<input type="text" placeholder="发表评论">
						<view class="fbtn">发送</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="tab2 tab3" v-if="index==3">
			<view class="tab2Time" v-for="(item,index) in list" :key="index">
				<!-- <image class="logo" src="" mode=""></image> -->
				<view class="contRight">
					<view class="userName">用户名</view>
				</view>
			</view>
		</view>
		
		
		<view class="footerBotton">
			<input class="txt" type="text" value="" placeholder="发表评论" />
			<view class="txt fr">点赞</view>
			<view class="txt fr">发送</view>
		</view>
	</view>
</template>

<script>
	import {ajax,showTips,setTime,showLoading,hideLoading} from '@/ajax.js'
	export default {
		data() {
			return {
				index:2,
				list:[{},{},{},{}],
				info:''
			}
		},
		onLoad(e) {
			console.log(e)
			this.index = e.index/1;
			let _this = this;
			showLoading()
			uni.request({
				url: ajax.wbInfoAppoint, 
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				data:{
					id:e.id
				},
				method:'post',
				success: (res) => {
					hideLoading()
					if(res.data.code==200){
						_this.info = res.data.data
						_this.info.time =setTime(res.data.data.startTime)
						if(_this.info.imgList!=null&&_this.info.imgList!=''){
							_this.info.imgList = JSON.parse(_this.info.imgList)
						}
					}
				},
			})
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
