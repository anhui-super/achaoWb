<template>
	<view class="editBox">
		<view class="editTop">
			<view class="logo"></view>
			<view class="editTxt">发送</view>
		</view>
		<textarea class="editText" maxlength="-1" bindblur="bindTextAreaBlur" auto-height placeholder="分享新鲜事..." />
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
	import {ajax,showTips,urlTobase64} from '@/ajax.js'
	var QQMapWX = require('../../map/qqmap-wx-jssdk.js');
	var qqmap;

	export default {
	data() {
		return {
			oheight:'',
			visible:0  //朋友圈 秘密 公开
		}
	},
	onLoad() {
		// wx.createSelectorQuery().selectAll('.contentImg').boundingClientRect(function (rect) {
		//    this.oheight= rect[0].width * (32/100);
		// }).exec()
		let _this =this;
		qqmap = new QQMapWX({
			key: 'BGJBZ-DGL6U-YAGVN-4T7IK-AGRHZ-35BM6'
		});
		qqmap.reverseGeocoder({
		  success(res){  
			  console.log(res.result.address)
		  },
		  fail(err) {
			console.log(err)
		  }
		})   
		
		
	},
	methods: {
		addImgBtn(){ //添加图片
			uni.chooseImage({
				count:9,
				sizeType: ['compressed'],
				sourceType: ['album', 'camera'],
				success(res) {
					let array = [];
					res.tempFilePaths.map(rs=>{
						array.push('data:image/png;base64,' + uni.getFileSystemManager().readFileSync(rs, 'base64'))
					})
					// let base64 = 'data:image/png;base64,' + uni.getFileSystemManager().readFileSync(res.tempFilePaths[0], 'base64')
					if(array.length>0){
						uni.request({
							url: ajax.upload, 
							data:{
								imgData:JSON.stringify(array) 
							},
							header:{
								'Content-Type':'application/x-www-form-urlencoded'
							},
							method:'POST',
							success: (rs) => {
								console.log(rs)
							},
							fail:(e) => {
								console.log(e)
							}
						})	
					}
				}
			})
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
