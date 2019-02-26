$(function(){
//	顶部菜单效果
	"use strict";
	$("#top-bg #top #top-right li.has-hide").hover(function(){
		$(this).addClass("cur");
		$(this).find(".menu-a").addClass("cur");
		$(this).find(".hide-box").show();
	},function(){
		$(this).removeClass("cur");
		$(this).find(".menu-a").removeClass("cur");
		$(this).find(".hide-box").hide();
	});
	
//凡客诚品和V+商城点击切换效果
	$("#main #logo-box #on-search li").click(function(){
		$(this).removeClass("no-bg")
				.siblings().addClass("no-bg");
	});
	//购物车效果
	$("#main #logo-box #gouwuche").hover(function(){
		$(this).addClass("cur");
		$(this).find(".hide-gouwuche").show();
	},function(){
		$(this).removeClass("cur");
		$(this).find(".hide-gouwuche").hide();
	});
	//凡客旗下网站效果
	$("#main #logo-box #fankeqixia-box .fankeqixia").mouseover(function(){
		$(this).addClass("cur");
		$(this).siblings(".fankeqixia-hide-box").show();
	});
	$("#main #logo-box #fankeqixia-box .fankeqixia").mouseout(function(){
		$(this).removeClass("cur");
		$(this).siblings(".fankeqixia-hide-box").hide();
	});
	$("#main #logo-box #fankeqixia-box .fankeqixia-hide-box").mouseover(function(){
		$(this).siblings(".fankeqixia").addClass("cur");
		$(this).show();
	});
	$("#main #logo-box #fankeqixia-box .fankeqixia-hide-box").mouseout(function(){
		$(this).siblings(".fankeqixia").removeClass("cur");
		$(this).hide();
	});
//	灰色导航条效果
	$("#main #menu2-box .menu2-left .list").mouseover(function(){
		$(this).find(".list-a").addClass("cur"); 
		$(this).find(".fankeqixia-hide-box").show();
	});
	$("#main #menu2-box .menu2-left .list").mouseout(function(){
		$(this).find(".list-a").removeClass("cur");
		$(this).find(".fankeqixia-hide-box").hide();
	});
	//图片自动轮播效果
	var flash_sta=0;
	var timer=setInterval(autoRun,1000);
	function autoRun(){
		flash_sta = (flash_sta===7)?0:flash_sta;
		$(".flash img").eq(flash_sta).fadeIn().siblings("img").hide();
		$(".flash ul li").eq(flash_sta).addClass("cur").siblings("li").removeClass("cur");
		flash_sta++;
	}
	$(".flash ul li").mouseover(function(){
		clearInterval(timer);
		var flash_sta=$(this).index();
		$(".flash img").eq(flash_sta).fadeIn().siblings("img").hide();
		$(".flash ul li").eq(flash_sta).addClass("cur").siblings("li").removeClass("cur");
	});
	$(".flash ul li").mouseout(function(){
		timer=setInterval(autoRun,1000);
	});
//	无缝滚动效果
	var ul_width=0;
	$(".wufeng .wufeng-right ul.list1 li").each(function(){
		ul_width = ul_width + $(this).width();//计算ul的宽度
	});
	$(".wufeng .wufeng-right ul").css("width",ul_width+"px");//将宽度加到ul上面
	$(".wufeng .wufeng-right ul.list2").css("left",ul_width+"px");//给第二个ul设置left值
	var change_left = -(ul_width*2-710);
	function wufeng(obj){
		setInterval(function(){
			var old_left = obj.position().left;//获得obj现有的left
			var new_left = old_left-1;
			if(new_left<change_left){
				obj.css("left","710px");
				new_left=710;
			}
			obj.css("left",new_left+"px");
		},20);
	}
	wufeng($(".wufeng .wufeng-right ul.list1"));
	wufeng($(".wufeng .wufeng-right ul.list2"));
	//全部商品分类区域效果
	$("#main #fenlei-box .fenlei-list .list").mouseover(function(){
		$(this).find(".left").addClass("l-cur");
		$(this).find(".right").addClass("r-cur");
	});
	$("#main #fenlei-box .fenlei-list .list").mouseout(function(){
		$(this).find(".left").removeClass("l-cur");
		$(this).find(".right").removeClass("r-cur");
	});
	//tab切换页效果
	$("#main #fenlei-box .news-tab .tab-title li").mouseover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var cur=$(this).index();
		$("#main #fenlei-box .news-tab .con").eq(cur).show().siblings(".con").hide();
	});
});