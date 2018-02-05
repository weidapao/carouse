/*var Les = {};*/
;(function ($) {
	'use strict';
	$.extend(Les,{
		'transformCarousel':function (ele){
			var num = 0;
			var sum = $(".img-item").length;

			$(".slider-outer .img-item").each(function (index, domEle) {
				$(this).css({
					//将图片重复 112是img-item的宽度，也可以写为$(this).width()
					"left":112 * index + "px",
					/*让每个img-item延时一定时间执行动画*/				
					"transitionDelay": index * 0.3 + "s"			
				});
				$(this).children('.img').css({
					//将重复的图片，错开，形成完整的一张图，实际是sum个重复的四面体
					"backgroundPosition": -112 * index + "px"
				});	
			});

			$(".prev").on("click",function (){
				movePrev();
			});

			$(".next").on("click",function (){
				moveNext();
			});
			//定时开始轮播
			var timer = setInterval(moveNext,3000);
			function movePrev(){
				++num;
				if (num == sum) {
					num = 0;
				}
				ele.find(".img-item").css("transform", "rotateX(" + ( num * 90) + "deg)");
			}
			function moveNext(){
				--num;
				if (num == -sum) {
					num = 0;
				}		
				ele.find(".img-item").css("transform", "rotateX(" + ( num * 90) + "deg)");
			}

			$(".slider-outer").hover(function () {
				clearInterval(timer);
			},function() {	
				timer = setInterval(moveNext,3000);
			});			
		}
	});
})(jQuery);