var Les = {};
;(function($){
	'use strict';
	$.extend(Les,{
		//无缝轮播
		'seamlessCarousel':function (opts){
			var defaults = {
				width:850,//插件显示区域宽
				height:255//插件显示区域高
			},
			settings = $.extend(defaults,opts);
			//初始化
			init();
			function init(){
				pos();
			}
			var $imgli = $(".carousel-banner .img li"),
				$ul = $(".carousel-banner .img"),
				$num = $(".carousel-banner .num");
				
			var $btn_l = $(".carousel-banner .btn_l"),
				$btn_r = $(".carousel-banner .btn_r");	
			var i = 0;
			//无缝轮播，给第1张图片克隆放到最后一张后面
			var clone = $imgli.first().clone();
			$ul.append(clone);
			$imgli = $(".carousel-banner .img li");
			var size = $imgli.length;
			
			/*给圆点num 的ul添加li*/
			for (var j = 0; j < size-1; j++) {
				$num.append("<li></li>");
			}
			var $numli = $(".carousel-banner .num li");
			$numli.first().addClass("on");
			/*鼠标滑入圆点效果*/
			$numli.hover(function(){
				var index = $(this).index();
				i = index;
				$ul.stop().animate({left:-(settings.width)*index},500);
				$(this).addClass("on").siblings().removeClass("on");		
			});

			function pos(){
				$('.carousel-banner').css({
					width: settings.width,
					height: settings.height
				});
				$('.carousel-banner .img li').css({
					width: settings.width,
					height: settings.height
				});
			}

			/*向左播放图片，公用函数*/
			function moveL(){
				i++;
				if(i == size){
					//i=0;
					$ul.css({left:0});
					i=1;
				}
				$ul.stop().animate({left:-(settings.width)*i},500);
				//解决圆点和图片不符的bug
				if(i == size-1){
					$numli.eq(0).addClass("on").siblings().removeClass("on")			
				}else{
					$numli.eq(i).addClass("on").siblings().removeClass("on");
				}
					
			}

			/*向y右播放图片，公用函数*/
			function moveR(){
				i--;
				if(i == -1){
					$ul.css({left:-(settings.width)*(size-1)});	
					i=size-2;
				}
				$ul.stop().animate({left:-(settings.width)*i},500);
				$numli.eq(i).addClass("on").siblings().removeClass("on");	
			}

			/*向左按钮*/
			$btn_l.click(function(){
				moveL();	
			});
			/*向右按钮*/
			$btn_r.click(function(){
				moveR();
			});	

			/*自动轮播*/
			var t = setInterval(moveL,2000);

			/*鼠标移入banner时对定时器操作*/
			$(".carousel-banner").hover(function(){
				clearInterval(t);
			},function(){
				t = setInterval(moveL,2000);
			});			
		}
	});
	
})(jQuery);