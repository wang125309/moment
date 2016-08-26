$(function(){
	var shareJson = {
		link:"http://jianfei.7cha.com/moment/",
		imgUrl:"http://jianfei.7cha.com/moment/static/image/share-image-131513840e.jpg",
		title:"慎点！关八会长的朋友圈有毒……",
		desc:"关八会长深夜放毒，明星“偷吃”亟待拯救"

	};
	function iniWxShare (d){
		wx.onMenuShareAppMessage({title: d.title,desc: d.desc,link: d.link,imgUrl: d.logo,success: function (res) { } }); //好友
		wx.onMenuShareTimeline({title: d.title+","+d.desc,desc: d.title,link: d.link,imgUrl: d.logo,success: function (res) { } });  //朋友圈
	}
	$.get("http://jianfei.7cha.com/data/index.php","",function(d){
		wx.config({
			appId: d.appId,timestamp: d.timestamp,nonceStr: d.nonceStr,signature: d.signature,
			jsApiList: ['checkJsApi','onMenuShareTimeline','onMenuShareAppMessage']
		});
		wx.ready(function () {iniWxShare(shareJson)});
		wx.error(function (res) { });
	},"jsonp")
});
