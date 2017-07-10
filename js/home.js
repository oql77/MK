$(function () {
//	top-note
	$(".note-btn1").click(function(){
	    $(".top-note").css("display","none");
		$(".top-note-big").css("display","block")
	})
	$(".note-btn2").click(function(){
		$(".top-note").css("display","block");
		$(".top-note-big").css("display","none")
	})
	//响应式菜单
	$(".menu-bars").click(function () {
		$(this).css("display","none")
		$(".close-btn1").css("display","block")
		$(".nav-header-scroll").css("display","block")
	})
	$(".close-btn1").click(function () {
		$(this).css("display","none")
		$(".menu-bars").css("display","block")
		$(".nav-header-scroll").css("display","none")
	})
	//header-top
	$(".link").hover(
		function () {
			$(".link-more").css("display","block")
		},function () {
			$(".link-more").css("display","none")
	})
	$(".login").hover(
		function () {
			$(".login-more").css("display","block")
		},function () {
			$(".login-more").css("display","none")
	})
	$(".shopbag").hover(
		function () {
			$(".shop-more").css("display","block")
		},function () {
			$(".shop-more").css("display","none")
	})
//	页面滚动时效果
	$(window).scroll(function () {
		//returntop
		if($(window).scrollTop()>100){
			$(".events-returntop").css("display","block")
		}else{
			$(".events-returntop").css("display","none");
		}
		//footer +/-
		$(".slide-list").click(function () {
			$(this).children(".slide-box").css("display","block");
			$(this).children("a").children(".before").css("display","none")
			$(this).children("a").children(".after").css("display","block")
		})
		$(".slide-list.active").click(function () {
			$(".slide-box").css("display","none");
			$(this).removeClass("active")
		})
//		Page3 圆点
		if($(window).scrollTop()>3621){
			$(".side-scroll").css("display","none")
		}else{
			$(".side-scroll").css("display","block");
		}
		//		Page3 商品介绍
		if($(window).scrollTop()>575 && $(window).scrollTop()<3000){
			$(".proselect-right").addClass("fixed2")

		}else{
			$(".proselect-right").removeClass("fixed2")
		}
	});
	
	$(".events-returntop").click(function () {
		$('body,html').animate({scrollTop:0},1000);
	})
//	固定在顶部
	var a = $('.pc-nav');
	var b = a.offset();
	
	$(document).on('scroll',function () {
		var c = $(document).scrollTop();
		if(c >10){
			a.addClass("fixed1");
			a.children(".header-logo").css({"width":"220px","padding":"24px 0"})
		}else{
			a.removeClass("fixed1");
			a.children(".header-logo").css({"width":"270px","padding":"36px 0"})
		}
	})
	
	var a1 = $('.mob-nav');
	var b1 = a1.offset();
	
	$(document).on('scroll',function () {
		var c1 = $(document).scrollTop();
		if(c1 >10){
			a1.addClass("fixed1");
		}else{
			a1.removeClass("fixed1");
		}
	})
	//page2 hover
	$(".product-img img:nth-child(1)").hover(function () {
		$(this).css("display","none");
		$(this).next().css("display","block");
		$(this).next().next().css("display","block");
		$(this).next().next().next().css("display","block");
	})
	$(".product-img img:nth-child(2)").hover(function () {},function () {
		$(this).css("display","none");
		$(this).next().css("display","none");
		$(this).next().next().css("display","none");
		$(this).prev().css("display","block");
	})
//	nav
	$(".nav-menu-item-sect").hover(function () {
		$(this).children(".sub-menu").css("display","block")
	},function () {
		$(this).children(".sub-menu").css("display","none")
	})
	//page3 圆点hover 出现图片
	$(".side-dot").hover(function () {
		$(this).children("img").css("display","block")
	},function () {
		$(this).children("img").css("display","none")
	})
	//点击放大
	$(".scroll-content").click(function () {
		$(".pdp-gallery-fullview").css("display","block")
	})
	$(".pdp-gallery-fullview").click(function () {
		$(".pdp-gallery-fullview").css("display","none")
	})
	//video
//	$(".video-btn").click(function () {
//		$(".media-1").css("display","none")
//		$(this).css("display","none")
//		$("#med").css({"display":"block","autoplay":"autoplay")
//	})
});
