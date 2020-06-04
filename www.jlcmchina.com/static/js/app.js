$(window).resize(function() {
	nav_height()
});

nav_height()

function nav_height() {
	if ($(window).width() < 910) {
		$('.nav').css('display', 'none');
		$('.nav').css('height', $(window).height() - $('.header').height() + 'px');
	} else {
		$('.nav').css('display', 'block');
		$('.nav').css('height', 'auto');
	}
}


// 点击导航弹窗
$('.nav_btn').click(function() {
	$('.nav').stop(true).slideToggle('fast');
})


var wow = new WOW({
	animateClass: 'animated',
	offset: 11,
	callback: function(box) {
		console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
});
wow.init();

var shead = $('.header').offset().top;
var s = $('.header');
 scroll()
$(window).scroll(function() {
	 scroll()
})
$('.jtou').click(function() {
	var st = $(window).height();
	$('html , body').animate({
		scrollTop: st + 'px'
	}, 'slow');
})

function scroll(){
	var r = $(window).scrollTop();
	var h;
	if($(window).width() >= 910){
		h = $('.logo').height();
	}else{
		h = 0;
	}
	 
	if (r > shead) {

		s.css({
			"position": 'fixed',
			'top': -h+'px',
			'background':'rgba(64,41,89,1)'
		});
		
	} else {
		s.css({
			"position": 'absolute',
			'top': '0px',
			'background':'rgba(64,41,89,0.6)'
		});
	}
}
