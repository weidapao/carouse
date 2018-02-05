$(function () {
	//返回顶部
	//距离顶部一定高度显示backtoTop
	$(window).scroll(function() {
		var winTop = $(this).scrollTop();
		if(winTop>50) {
			$(".backtoTop").css('display', 'block');
		}else {
			$(".backtoTop").hide();
		}
	});
	//将返回顶部方法封装
	$.fn.backtoTop = function (speed) {
		//var targetTop = $(this).offset().top;
		$("html,body").stop().animate({scrollTop:0}, speed)
	}
	//调用返回顶部
	$("#backtoTop").on('click', function() {
    	$("body").backtoTop(500);
	});	
	
	//header nav
	$(".head-nav li a").each(function() {
		$(this).on('click', function() {
			$(this).addClass('active').
			parent().siblings().find('a').removeClass('active');
		});
	});

	//首页 左侧menu
	//绑定元素点击事件
	$(".menu-list ul li").each(function() {
		$(this).on('click', function() {
			$this = $(this);
			var flag = $this.children('.menu-child').is(':hidden');
			//下拉和收回的效果切换
			if (flag) {
				$this.find('.menu-child').slideDown('slow');
				$this.children("i").removeClass('icon-xiala').addClass('icon-shouqi');
			}else {
				$this.find('.menu-child').slideUp('slow');
				$this.children("i").removeClass('icon-shouqi').addClass('icon-xiala');
			}			
	});
	//阻止事件冒泡，子元素不再继承父元素的点击事件
	$('.menu-child').click(function(e){
		e.stopPropagation();
	});
	//点击子菜单为子菜单添加样式，并移除所有其他子菜单样式
	$(".menu-child .menu-citem").on('click', function() {
		//设置当前菜单为选中状态的样式，并移除同类同级别的其他元素的样式
		$(this).addClass("removes").siblings().removeClass("removes");
		//遍历获取所有父菜单元素
			$(".menu-child").each(function(){
			  	//判断当前的父菜单是否是隐藏状态
			  	if($(this).is(":hidden")){
			  		//如果是隐藏状态则移除其样式
			  		$(this).children(".menu-citem").removeClass("removes");
				  	}
			});
		});		
	});
	/*文档页面 左侧menu：docs-sidenav 点击菜单为菜单添加样式，并移除其他菜单项样式*/
	$(".docs-sidenav li").each(function() {
		$(this).on('click', function() {
			var $this = $(this);
			$this.addClass('active').siblings().removeClass('active');
		});
	});
	
});