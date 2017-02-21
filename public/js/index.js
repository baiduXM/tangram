$(function() {

	window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

	$('#slider').nivoSlider({
		effect: 'random',
		animSpeed:500,
		pauseTime:5000,
		startSlide:0,
		slices:15,
		directionNav:false,
		directionNavHide:false,
		controlNav:true,
		controlNavThumbs:false,
		keyboardNav:true,
		pauseOnHover:true,
		// captionOpacity:0.8,
		afterLoad: function(){
			$(".nivo-caption").animate({left:"0"}, {easing:"easeOutBack", duration: 500})
		},
		beforeChange: function(){
			$(".nivo-caption").animate({left:"-500"}, {easing:"easeInBack", duration: 500})
		},
		afterChange: function(){
			$(".nivo-caption").animate({left:"0"}, {easing:"easeOutBack", duration: 500})
		}
	});
	$('#slider').css({
		width: '100%',
		height: '100%'
	}); 
	$('#ca-container').contentcarousel();

	// 首页导航控制
	function ControlNav(){
		this.mouseleave = function(){
			$('.nav li').mouseleave(function(){
				$(this).find('.hoverview').fadeOut();
			});
		}
		this.mouseenter = function(){
			$('.nav li>a').mouseenter(function(){
				if($(this).next().find('li').length != 0){
					$(this).next().fadeIn();
				}
			});
			this.mouseleave();
		}();
	}
	ControlNav();
	$('.nav li').hover(function() {
		$('.header').css('z-index', 12);
		$('.header_inner').css('z-index', 13);
	}, function() {
		$('.header').css('z-index', 9);
		$('.header_inner').css('z-index', 10);
	});
});