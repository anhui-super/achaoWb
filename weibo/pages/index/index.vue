<template>
	<view class="content">
		
		<view class="navTop">
			<view class="logo">LOGO</view>
			<view class="search">
				<image class="icon" src="" mode=""></image>
				<text class="txt">大家都在搜：2020年底前实现疫苗一物一码</text>
			</view>
			<view class="edit" @click="editBtn">编写</view>
		</view>
		
	<!-- 	<view class="slideWrap">
			<view class="slideList">
				<view class="slideItem">热门</view>
				<view class="slideItem">新鲜事</view>
				<view class="slideItem">同城</view>
				<view class="slideItem">搞笑</view>
				<view class="slideItem">情感</view>
			</view>
			<view class="arrowBotton">下拉</view>
		</view> -->
		
		<view class="contentList">
			<view class="contentItem" v-for="(item,index) in list" :key="index" >
				<view class="itemTop" @click="goItem(item.id,2)">
					<view class="userLogo">
						<image :src="item.avatarUrl" mode=""></image>
					</view>
					<view class="userName">{{item.nickName}}</view>
					<view class="tips">
						<text class="userTime">{{item.time}}</text>
						<text>来自</text> <text class="userAdress">{{item.district}}</text>
					</view>
				</view>
				<view class="contentText" @click="goItem(item.id,2)">{{item.content}}</view>
				<view class="contentImg" v-if="item.imgList!=null&&item.imgList.length>0" @click="goItem(item.id,2)">
					<view class="contentImgItem" :style="{height: oheight+'upx'}" v-for="(twoItem,sindex) in item.imgList" :key="sindex">
						<image :src="'https://tt.ilout.com'+twoItem" mode="widthFix"></image>
					</view>
				</view>
				
				<view class="footer">
					<view class="item" @click="goItem(item.id,1)">分享{{item.shareNum==null?0:item.shareNum}}</view>
					<view class="item" @click="goItem(item.id,2)">评论{{item.commentNum==null?0:item.commentNum}}</view>
					<view class="item" @click="goItem(item.id,3)">点赞{{item.fabulousNum==null?0:item.fabulousNum}}</view>
					<view class="item fr" @click="goItem(item.id,2)">更多</view>
				</view>
			</view>
		</view>
		<view class="prop" v-if="userInfo==''">
			<view class="bom">
				<button class="btn" lang='zh_CN' open-type="getUserInfo" @getuserinfo="getUserInfo">授权登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {ajax,showTips,setTime,showLoading,hideLoading} from '@/ajax.js'
	export default {
		data() {
			return {
				userInfo: null,
				oheight:'',
				list:[]
			}
		},
		onLoad() {
			let _this = this;
			uni.getSetting({ //判断是否授权
			  success (res){
				if (res.authSetting['scope.userInfo']) { //已经授权
				  uni.getUserInfo({
					lang:'zh_CN',
					success: function(res) {
						_this.userInfo = res.userInfo;
						uni.setStorageSync('userInfo', _this.userInfo);
					}
				  })
				}else{
					_this.userInfo = ''
				}
			  }
			})
			
			showLoading()
			uni.request({
				url: ajax.wbInfo, 
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				method:'get',
				success: (rs) => {
					hideLoading()
					if(rs.data.code==200){
						rs.data.data.map(es=>{
							if(es.imgList!=null&&es.imgList!=''){
								es.imgList= JSON.parse(es.imgList)
							}
							es.time = setTime(es.startTime)
						})
						_this.list = rs.data.data;
						console.log(_this.list)
					}
				},
			})
		},
		methods: {
			goItem(item,index){
				uni.navigateTo({
					url: '/pages/details/details?id='+item+'&index='+index
				})
			},
			getUserInfo(e){ //授权成功
				this.userInfo=e.target.userInfo;
				uni.setStorageSync('userInfo', this.userInfo);
			},
			editBtn(){  //编写
				uni.navigateTo({
					url: '/pages/edit/edit'
				})
			}
		},
		
	}
</script>

<style lang="scss" >
	@import './index.scss';
</style>
