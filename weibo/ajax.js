let ohref = '';
//#ifdef H5
if(process.env.NODE_ENV === 'development'){　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
	ohref='/dpc'
}else{　　　　　　　　　　　　　　　　　　　　　　
	ohref='https://tt.ilout.com/tt'
}　
//#endif

// #ifdef MP-WEIXIN
ohref='http://192.168.1.37:3002'
// #endif

console.log(ohref)
/**
 * 弹出提示框。
 *@title type：string 提示的内容
 *@icon  type：string 提示的图标，参考微信api接口。
 */
export const showTips = (title,icon) => {
  uni.showToast({
    title,
    icon: icon||'none'
  });
}

/***
 * 加载数据时的Loading。
 * 加上mask是为了防止loading时，用户操作。
 */
export const showLoading = (title) => {
  uni.showLoading({
    title: title || '',
    mask: true
  })
}
/**
 * 隐藏Loading。
 * 要和showLoading成对使用。
 */
export const hideLoading = () => {
  uni.hideLoading();
}


export const setTime = (time) => {
	let actTime = new Date().getTime()
	let mm = Math.ceil((actTime - new Date(time).getTime())/1000);
	let day = parseInt(mm / (60 * 60* 24));
	let mday = mm % (60 * 60* 24)
	let h = parseInt(mday/( 60*60 ));
	let mh = mday % (60*60)
	let m = parseInt(mh/60)
	let name =0;
	if(day>0){
		name = day+'天前';
		return name;
	}else if(h>0){
		name = h +'小时前';
		return name
	}else{
		name = m + '分钟前'
		return name
	}
}


export const ajax = {
	upload:  		ohref + '/upload',
	login:  		ohref + '/login',
}


export const urlTobase64 = (url)=>{
	console.log(url)
    wx.request({
      url:url,
      responseType: 'arraybuffer', //最关键的参数，设置返回的数据格式为arraybuffer
      success:res=>{
		  console.log(res)
	      //把arraybuffer转成base64
            let base64 = wx.arrayBufferToBase64(res.data); 
            
            //不加上这串字符，在页面无法显示的哦
            base64　= 'data:image/jpeg;base64,' + base64　
            return base64;
            //打印出base64字符串，可复制到网页校验一下是否是你选择的原图片呢
            console.log(base64,res,'chenggong')　
          },
		  fail:res=>{
			  console.log('失败',res)
		  }
    })
 }

    