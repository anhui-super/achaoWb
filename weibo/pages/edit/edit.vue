<template>
	<view class="editBox">
		<view class="editTop">
			<view class="logo">
				<image class="logoImg" v-if="userInfo!=''" :src="userInfo.avatarUrl" mode="widthFix"></image>
			</view>
			<view class="editTxt" @click="sendBtn">发送</view>
		</view>
		<textarea class="editText" maxlength="-1" v-model="content" auto-height placeholder="分享新鲜事..." />
		<view class="contentImg" v-if="imglist.length>0">
			<view class="contentImgItem" @load="imgload" v-for="(item,index) in imglist" :key="index">
				<image :src="item" mode="widthFix" ></image>
			</view>
		</view>
		
		<view class="visible" @click="btnFn">
			{{visible==0?'朋友圈':(visible==1?'秘密':'公开')}}
		</view>
		<view class="foot">
			<view class="addImg" @click="addImgBtn">添加图片</view>
		</view>
	</view>
</template>

<script>
	// 引入SDK核心类
	import {ajax,showTips} from '@/ajax.js'
	var QQMapWX = require('../../map/qqmap-wx-jssdk.js');
	var qqmap;

	export default {
	data() {
		return {
			userInfo:'',  //用户信息
			imglist:[],   //图片
			content:'',    //内容
			adress:'',    //地址
			province:'',  //省
			city:'',	  //市
			district:'',  //区
			visible:0  //朋友圈 秘密 公开
		}
	},
	onLoad() {
		
		this.userInfo = uni.getStorageSync('userInfo');
		let _this =this;
		qqmap = new QQMapWX({
			key: 'BGJBZ-DGL6U-YAGVN-4T7IK-AGRHZ-35BM6'
		});
		qqmap.reverseGeocoder({
		  success(res){  
			  _this.adress = res.result.address
			  _this.district = res.result.address_component.district
			  _this.city   = res.result.address_component.city
			  _this.province   = res.result.address_component.province
		  },
		  fail(err) {
			console.log(err)
		  }
		})   
		
		
	},
	methods: {
		goSend(imgList){ //提交
			let visible = this.visible;
			let content = this.content;
			let userInfo = this.userInfo
			let adress = this.adress
			let province = this.province
			let city = this.city
			let district = this.district
			let grade  = '';
			uni.request({
				url: ajax.wbSend, 
				data:{
					avatarUrl:userInfo.avatarUrl,
					nickName:userInfo.nickName,
					content,
					adress,
					grade,
					province,
					city,
					district,
					imgList:imgList,
					
					status:visible
				},
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				method:'POST',
				success: (rs) => {
					console.log(rs,'=====')
					if(rs.data.code==200){
						console.log('-------')
						uni.navigateTo({
							url: '/pages/index/index'
						})
					}
				},
				fail:(e) => {
					console.log(e)
				}
			})
		},
		sendBtn(){ //提交发送
			let _this = this;
			let visible = this.visible;
			let content = this.content;
			let userInfo = this.userInfo
			let adress = this.adress
			console.log(visible,content,userInfo,adress)
			if(_this.imglist.length>0){
				uni.request({
					url: ajax.upload, 
					data:{
						imgData:JSON.stringify(_this.imglist) 
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method:'POST',
					success: (rs) => {
						console.log('12312',rs)
						let data = JSON.stringify(rs.data.data)
						_this.goSend(data)
					},
					fail:(e) => {
						console.log(e)
					}
				})
			}else{
				this.goSend('')
			}
				
		},
		addImgBtn(){ //添加图片
			let _this = this;
			if(_this.imglist.length<9){
				let array = _this.imglist;
				uni.chooseImage({
					count:9,
					sizeType: ['compressed'],
					sourceType: ['album', 'camera'],
					success(res) {
						res.tempFilePaths.map(rs=>{
							if(_this.imglist.length<9){
								array.push('data:image/png;base64,' + uni.getFileSystemManager().readFileSync(rs, 'base64'))
							}
						})
						_this.imglist = array
						// setTimeout(()=>{
						// 	uni.createSelectorQuery().selectAll('.contentImgItem').boundingClientRect(function (rect) {
						// 		console.log(rect[0].width,'=====')
						// 		_this.oheight = rect[0].width
						// 	}).exec() 
						// },200)
					}
				})
			}
			
		},
		btnFn(){
			if(this.visible<2){
				this.visible++
			}else{
				this.visible = 0
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	@import './edit.scss';
</style>
