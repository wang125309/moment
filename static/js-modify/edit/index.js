require("../../bower_components/zepto/zepto.js");
require("../../bower_components/zeptojs/src/touch.js");
require("../../bower_components/velocity/velocity.min.js");
require("../../bower_components/swiper/dist/js/swiper.min.js");
require("../../bower_components/angular/angular.min.js");
require("../../bower_components/angular-sanitize/angular-sanitize.min.js");
require("../../bower_components/angular-touch/angular-touch.min.js");
$(function(){
	var shareJson = {
		link:"http://jianfei.7cha.com/moment/",
		imgUrl:"http://jianfei.7cha.com/moment/static/image/share-image.png",
		title:"慎点！关八会长的朋友圈有毒……",
		desc:"关八会长深夜放毒，明星“偷吃”亟待拯救"

	};
	function iniWxShare (d){
		wx.onMenuShareAppMessage({title: d.title,desc: d.desc,link: d.link,imgUrl: d.imgUrl,success: function (res) { } }); //好友
		wx.onMenuShareTimeline({title: d.title+","+d.desc,desc: d.title,link: d.link,imgUrl: d.imgUrl,success: function (res) { } });  //朋友圈
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

Ctrl = angular.module('app',['ngSanitize','ngTouch']).controller('Ctrl',['$sce','$scope',function($sce,$scope){
    !function(){var a=navigator.userAgent;-1==a.indexOf("iPhone")&&-1==a.indexOf("iPad")&&-1==a.indexOf("iPod")&&-1==a.indexOf("Android")}();
    var browser = {
        versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                webKit: u.indexOf('AppleWebKit') > -1,
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                weixin: u.indexOf('MicroMessenger') > -1,
                txnews: u.indexOf('qqnews') > -1,
                sinawb: u.indexOf('weibo') > -1,
                mqq   : u.indexOf('QQ') > -1
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
    };
    var get_emoj = function(emoj) {
        return '<img class="emoj" src="/moment/static/image/'+emoj+'">';
    };
    $scope.data = [{
        "username" : "林紫薇",
        "feedimage" : '/moment/static/image/linziwei-pic.jpg',
        "avatar" : '/moment/static/image/linziwei.jpg',
        "feed" : '一晚吃七盒,好幸福~'+get_emoj('emoj-haixiu.png')+get_emoj('emoj-haixiu.png'),
        "time": '20分钟前',
        "zans" : ['老干部华华'],
        "cais"　:　['佛爷霆,','有朋自远方来'],
        "comment" : [{
            'username' : '老干部华华:',
            'message' : '多吃点,爱你 ' + get_emoj('emoj-qinqin.png')
        },{
            'username' : '范爷:',
            'message' : '这碗狗粮我干了!看来得让黑牛好好学着点!' + get_emoj('emoj-zuohengheng.png') + get_emoj('emoj-zuohengheng.png')
        },{
            'username' : '有朋自远方来:',
            'message' : '深夜放毒,一人吃,两人补' + get_emoj('emoj-zaijian.png')
        }]
    },{
        "username" : "小笼包女",
        "feedimage" : "/moment/static/image/xiaolongbaonv-pic.jpg",
        "avatar" : "/moment/static/image/xiaolongbaonv.jpg",
        "feed" : "某人给买的夜宵,我是该哭还是该笑啊"+get_emoj('emoj-se.png')+" 不过真的好好吃诶!",
        "time" : '20分钟前',
        "zans" : ['陈过儿'],
        "cais"　:　['贾大玲'],
        "comment" : [{
            'username' : '陈过儿:',
            'message' : '姑姑开心就好,过儿天天买给你吃!'
        },{
            'username' : '贾大玲:',
            'message' : '哎呀我去,不带这样儿诱惑人儿的!'
        }]
    },{
        "username" : "小赵总",
        "feedimage" : '/moment/static/image/xiaozhaozong-pic.jpg',
        "avatar" : '/moment/static/image/xiaozhaozong.jpg',
        "feed" : '大晚上的,我真的要吃成' +get_emoj('emoj-zhu.png')+'啦~撑死算工伤吗哈哈哈~',
        'time' : '20分钟前',
        "zans" : ['塘主翰'],
        "cais"　:　['佛爷霆'],
        "comment" : [{
            "username" : '塘主翰:',
            "message" : '不是给你承包鱼塘吗?多打点鱼吃。'
        },{
            "username" : "佛爷霆:",
            "message" : "吃,你开心就好,反正也吃不胖!"
        }]

    },{
        "username" : '绵羊兴',
        'feedimage' : '/moment/static/image/mianyangxing-pic.jpg',
        'avatar' : '/moment/static/image/mianyangxing.jpg',
        'feed' : '诶呦诶,大晚上好罪恶,下不了舌!',
        'time' : '20分钟前',
        "zans" : ['抠门迅,','朱碧石'],
        "cais"　:　['神算磊'],
        'comment' : [{
            'username' : '抠门迅:',
            'message' : '哎呀你怎么这么抠啊, 就自己吃不给我来点' + get_emoj('emoj-weiqu.png')

        },{
            'username' : '朱碧石:',
            'message' : '你不要脸（请自行想象我的表情包谢谢'+get_emoj('emoj-weixiao.png')+'）'
        },{
            'username'　:　'神算磊:',
            'message'　:　'你已经不是小绵羊了,你是大狮子啊......大开口......'
        }]
    },{
        'username'　:　'小岳岳',
        'feedimage'　:　'/moment/static/image/xiaoyueyue-pic.jpg',
        'avatar'　:　'/moment/static/image/xiaoyueyue.jpg',
        'feed'　:　'啊~五碗,你比空碗多五碗!我的天呐今天晚上好撑!' + get_emoj('emoj-haixiu.png'),
        'time' : '20分钟前',
        "zans" : ['liu留,','海海,','绵绵,','酸菜'],
        "cais"　:　['郭奶奶'],
        'comment' : [{
            'username' : '郭奶奶:',
            'message' : '瞧你那没出息样儿,五碗就撑死了,为师还比你多三碗' + get_emoj('emoj-haixiu.png')
        }]
    },{
        'username' : '逗比亮亮',
        'feedimage'　:　'/moment/static/image/doubiliangliang-pic.jpg',
        'avatar'　:　'/moment/static/image/doubiliangliang.jpg',
        'feed'　:　'晚上也停不住嘴啊,真的有那么好吃吗'　+ get_emoj('emoj-yanxia.jpg'),
        'time' : '20分钟前',
        "zans" : ['馨爷'],
        "cais"　:　['美小璐'],
        'comment' : [{
            'username' : '馨爷:',
            'message'　:　'爸爸你歇会吧'
        },{
            'username'　:　'美小璐:',
            'message'　:　'发图也不把闺女P白点,你是亲爹嘛' + get_emoj('emoj-koubi.jpg')
        }]

    },{
        'username' : '涛哥',
        'feedimage'　:　'/moment/static/image/taoge-pic.jpg',
        'avatar'　:　'/moment/static/image/taoge.jpg',
        'feed'　:　'深夜来波福利,不用谢!',
        'time' : '20分钟前',
        "zans" : ['马社长,','杜海,','亮亮,','小岳岳'],
        "cais"　:　['昕昕,','嘉嘉'],
        'comment' : [{
            'username' : '何老师:',
            'message'　:　'涛啊,最近又胖了'　+get_emoj('emoj-yinxian.jpg')
        },{
            'username'　:　'娜娜:',
            'message'　:　'除了你没人觉得是福利好嘛!'
        },{
            'username'　:　'昕昕:',
            'message'　:　'涛涛OUT,涛涛OUT......'
        },{
            'username'　:　'嘉嘉:',
            'message'　:　'是不是傻......'
        }]

    },{
        'username' : '马睿马同学',
        'feedimage'　:　'/moment/static/image/marui-pic.jpg',
        'avatar'　:　'/moment/static/image/marui.jpg',
        'feed'　:　'二毛,你看朕的吃相帅不帅啊?',
        'time' : '20分钟前',
        "zans" : ['二毛,','二老婆,','三老婆,','小老婆'],
        "cais"　:　['三毛,','四毛,','大老婆'],
        'comment' : [{
            'username' : '二毛:',
            'message'　:　'呵呵哒,还在加班'
        },{
            'username'　:　'三毛:',
            'message'　:　'我还在流浪呢,您倒是吃得好......'
        },{
            'username'　:　'四毛:',
            'message'　:　get_emoj('emoj-weixiao.png')
        }]

    }];
    $scope.shake = false;
    $(window).scroll(function(){
        if(($("body").height()-$("body,html").scrollTop())<=document.documentElement.clientHeight) {
            $scope.shake = true;
            $scope.$apply();

        }
    });
    $scope.cai = false;
    $scope.pull_out_menu = function(i) {
        if (i.username == '马睿马同学') {
            $($('.pull-out-menu')[$('.pull-out-menu').length-1]).css("display","block");
            $scope.shake　=　false;
            setTimeout(function(){
                $scope.cai = true;
                $scope.$apply();
            },1000);
        }
    };

    var cai_cnt = 0;
    $scope.do_cai = function() {
        if(cai_cnt == 0) {
            $(".changeableavatar").addClass("rotate");
        }
        else if(cai_cnt == 1) {
            $(".changeableavatar").addClass("down");
        }
        else if(cai_cnt == 2) {
            $($(".pic-area")[$(".pic-area").length-2]).addClass("rotate-and-down");
            $($(".message-body .message")[$(".message-body .message").length-1]).addClass("rotate-and-down-left");
        }
        else if(cai_cnt == 3) {
            $($(".avatar")[$(".avatar").length-2]).addClass("rotate-and-down");
            $($(".last-line")[$(".last-line").length-2]).addClass("rotate-and-down-left");
        }
        else if(cai_cnt == 4) {
            $($(".message-area .username")[$(".message-area .username").length-2]).addClass("rotate-and-down-left");
            $($(".comment-area .comment-details")[$(".comment-area .comment-details").length-2]).addClass("rotate-and-down-left");
            $($(".comment-area .comment-details")[$(".comment-area .comment-details").length-5]).addClass("rotate-and-down");
        }
        else if(cai_cnt == 5) {
            $($(".message-area .username")[$(".message-area .username").length-1]).addClass("rotate-and-down-left");
            $($(".comment-area .comment-details")[$(".comment-area .comment-details").length-3]).addClass("rotate-and-down-left");
            $($(".comment-area .comment-details")[$(".comment-area .comment-details").length-4]).addClass("rotate-and-down");
        }
        else if(cai_cnt == 6) {
            $($(".comment-area")[$(".comment-area").length-2]).addClass("rotate-and-down-left");
            $($(".message-body .message")[$(".message-body .message").length-2]).addClass("rotate-and-down");
        }
        else if(cai_cnt == 7) {
            $($(".friend-area")[$(".friend-area").length-3]).addClass("rotate-and-down-left");
            $($(".friend-area")[$(".friend-area").length-2]).addClass("rotate-and-down-left");
            $($(".friend-area")[$(".friend-area").length-1]).addClass("rotate-and-down");
            setTimeout(function(){
                $(".moment-area").css("display","none");
                $(".paopao-area").css("display","block");
                cnt = 1;
                var interval = setInterval(function(){
                    $(".paopao"+cnt).css("display","block");
                    if(cnt > 1) {

                        if(cnt == 9) {
                            clearInterval(interval);
                            setTimeout(function(){
                                $(".paopao8").css("display","none");

                                var c = 1;
                                for(var i=1;i<13;i++) {
                                    $(".t"+i).css("display","block");

                                }
                                for(var i=1;i<7;i++) {
                                    $(".z"+i).css("display","block");
                                }
                                setTimeout(function(){
                                    $(".paopao-find.find").show();
                                },3000);
                                window.page = setInterval(function(){

                                    $(".p"+(c%2+1)).css("display","none");
                                    c ++;
                                    $(".p"+(c%2+1)).css("display","block");
                                },150);
                            },1000);

                        }
                        else {
                            $(".paopao"+(cnt-1)).css("display","none");
                        }
                    }
                    cnt ++;
                },200);
            },1000);
        }
        cai_cnt ++ ;
    };
    $scope.next = function() {
        var cnt = 1;
        var cnt1 = 1;
        var interval = setInterval(function(){
            if(cnt == 13) {
                clearInterval(interval);
                clearInterval(window.page);

                $(".paopao-area").css("display","none");
                $(".black-area").css("display","block");
                $scope.b();
            }
            if(cnt%2==0) {
                $(".t"+cnt).css("-webkit-animation-iteration-count","initial");
                $(".t"+cnt).css("-webkit-animation-timing-function","ease");
                $(".t"+cnt).css("-webkit-animation-duration",'0.5s');
                $(".t"+cnt).css("-webkit-animation-name","go-out-left");
                $(".t"+cnt).addClass("go-out");
            }
            else {
                $(".t"+cnt).css("-webkit-animation-iteration-count","initial");
                $(".t"+cnt).css("-webkit-animation-timing-function","ease");
                $(".t"+cnt).css("-webkit-animation-name","go-out");
                $(".t"+cnt).css("-webkit-animation-duration",'0.5s');
                $(".t"+cnt).addClass("go-out-left");
            }
            cnt ++;
        },10);
        var zinterval = setInterval(function () {
            if(cnt1 == 7) {
                clearInterval(zinterval);
            }
            if(cnt1%2==0) {
                $(".z"+cnt1).css("-webkit-animation-iteration-count","initial");
                $(".z"+cnt1).css("-webkit-animation-timing-function","ease");
                $(".z"+cnt1).css("-webkit-animation-name","go-out-left");
                $(".z"+cnt1).css("-webkit-animation-duration",'0.5s');
                $(".z"+cnt1).addClass("go-out");
            }
            else {
                $(".z"+cnt1).css("-webkit-animation-iteration-count","initial");
                $(".z"+cnt1).css("-webkit-animation-timing-function","ease");
                $(".z"+cnt1).css("-webkit-animation-name","go-out");
                $(".z"+cnt1).css("-webkit-animation-duration",'0.5s');
                $(".z"+cnt1).addClass("go-out-left");
            }
            cnt1++;
        },10);
    };
    var b_cnt = 1;
    var b2_c = false;
    var b6_c = false;
    var b10_c = false;
    $scope.b = function(tt) {

        if(tt!='b1' && tt!='b5' && tt!='b9') {
            return ;
        }
        else {

            if(b_cnt == 1) {
                if(!b2_c) {
                    b2_c = true;
                    b_cnt ++;
                    var go_inverval = setInterval(function(){
                        if(b_cnt == 6) {
                            clearInterval(go_inverval);
                            b_cnt --;
                        }
                        else {
                            $(".b"+(b_cnt-1)).css("display","none");
                            $(".b"+b_cnt).css("display","block");
                            b_cnt ++;
                        }

                    },200)
                }
            }
            if(b_cnt == 5) {
                if(!b6_c) {
                    b6_c = true;
                    b_cnt ++;
                    var go_inverval = setInterval(function(){
                        if(b_cnt == 10) {
                            clearInterval(go_inverval);
                            b_cnt --;
                        }
                        else {
                            $(".b"+(b_cnt-1)).css("display","none");
                            $(".b"+b_cnt).css("display","block");
                            b_cnt ++;
                        }

                    },200)
                }

            }
            if(b_cnt == 9) {
                if(!b10_c) {
                    b10_c = true;
                    b_cnt ++ ;
                    var go_inverval = setInterval(function(){
                        if(b_cnt == 12) {
                            clearInterval(go_inverval);

                            var i = 12;
                            var black_interval = setInterval(function(){
                                if(i == 20) {
                                    clearInterval(black_interval);
                                    $(".black-hole").css("display","block");
                                    setTimeout(function(){
                                        $(".black-area").css("display","none");
                                        $(".video-area").css("display","block");
                                        var a = document.documentElement.clientHeight, s = document.documentElement.clientWidth;
                                        function d(e, n) {
                                            var t, i = s / a, r = 675 / 1088;
                                            t = i < r ? a / 1088 :s / 675, $(e).css({
                                                "-webkit-transform-origin":n,
                                                "transform-origin":n,
                                                "-webkit-transform":"scale(" + t + ");",
                                                transform:"scale(" + t + ");"
                                            });
                                        }
                                        d(".video-area",'center center');
                                        if(browser.versions.ios) {
                                            $(".poster").hide();
                                            $(".video-area video")[0].play();
                                        }
                                        else {
                                            var initV1 = function (){
                                                if (v1.currentTime>0){
                                                    $(".poster").hide();
                                                    v1.pause();
                                                    v1.removeEventListener("timeupdate", initV1, false);
                                                }
                                            }
                                            var v1 = $('.video-area video')[0];
                                            v1.addEventListener("timeupdate", initV1, false);

                                            $(document).one('touchstart',function(e){
                                                $(".video-area video")[0].play();
                                            });

                                        }



                                        $(".video-area video")[0].onended= function() {
                                            $(".video-area").css("display","none");
                                            $(".last-area").css("display","block");
                                        };
                                    },1200);
                                }
                                $(".b"+(i-1)).css("display","none");
                                $(".b"+i).css("display","block");

                                i ++ ;
                            },500);
                        }
                        else {
                            $(".b"+(b_cnt-1)).css("display","none");
                            $(".b"+b_cnt).css("display","block");
                            b_cnt ++;
                        }

                    },200)
                }
                $(".b"+(b_cnt-1)).css("display","none");
                $(".b"+b_cnt).css("display","block");
            }

        }


    };
}]);
Ctrl.$inject = ['$scope','Ctrl'];
