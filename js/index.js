$(function(){
	$(window).scroll(function(){
		var a = $(window).scrollTop()
		if(a>=650){
			$('.return-top').css('display','block')
		}else{
			$('.return-top').css('display','none')
		}
	})
	$('.return-top').click(function(){
		$('html').animate({ scrollTop:'0'}, 1000)
	})
	$('.menu-btn').click(function(){
		$('.menu-btn').css('display','none')
		$('.submenu').css('display','block')
		$('.nav-box').css('display','none')
	})
	$('.menu-close').click(function(){
		$('.submenu').css('display','none')
		$('.nav-box').css('display','none')
		$('.menu-btn').css('display','block')
	})
})