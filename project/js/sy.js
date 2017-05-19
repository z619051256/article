//登录后首页显示用户名
var substr = document.URL;

function GetQueryString(name)
{
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r!=null)return unescape(r[2]);return null;
}
var userna = GetQueryString("username")
$("#username").html(userna)
if (GetQueryString("avater")) {
	$().css("src",""+GetQueryString("avater"))
}
// 搜索框点击弹出事件
$(".searcha").click(function(){
	if ($(".search").css("left") == '260px') {
		$(".search").animate({left:"10px"},"1000")
	}else {
		$(".search").animate({left:"260px"},"1000")
	}
});
// 轮播图自动滑动
var i = 0;
function lunbo(){
    i++

    $(".zhengti ul").animate({"left":-1000*i},300,function(){
    	if (i>7) {
	    	i=0
	    	$(this).css("left",0);
    	}
   	 	$(".chuangkoudibu li").eq(i).addClass("one").siblings().removeClass('one')
    })



    // 下标切换

    $(".chuangkoudibu li").each(function(index) {
    	$(this).click(function(){
    		// clearInterval(time);
    		$(".zhengti ul").css("left",-1000 * index + "px")
    		$(this).addClass("one").siblings().removeClass('one')
    		i = index;
    	})
    });
}
// 设置定时器（开启）
 var time = setInterval(lunbo,2000);



//轮播图左右切换
// 左
$(".zhengtileft").click(function(){
	// 停止定时器
	clearInterval(time);
	if (i == 0) {
		i = 7;
		$(".lunbotu").animate({"left":-1000*i},10);	
   	 	$(".chuangkoudibu li").eq(i).addClass("one").siblings().removeClass('one')

	}else{
		i -= 1;
		$(".lunbotu").animate({"left":-1000*i},10);
   	 	$(".chuangkoudibu li").eq(i).addClass("one").siblings().removeClass('one')

	}
	// 设置定时器（开启）
	time = setInterval(lunbo,2000);
})
// 右
$(".zhengtiright").click(function(){
	// 停止定时器
	clearInterval(time);
	if (i == 7) {
		i = 0	;
		$(".lunbotu").animate({"left":-1000*i},10);	
   	 	$(".chuangkoudibu li").eq(i).addClass("one").siblings().removeClass('one')

	}else{
		i += 1;
		$(".lunbotu").animate({"left":-1000*i},10);
   	 	$(".chuangkoudibu li").eq(i).addClass("one").siblings().removeClass('one')

	}
	// 设置定时器（开启）
	time = setInterval(lunbo,2000);
})


