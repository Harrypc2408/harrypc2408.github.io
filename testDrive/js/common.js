$(document).ready(function() {

	$('.img_sl').slick({
		dots: true,
		arrows: false
	});



	$(".header_top .logo").animated("fadeIn", "fadeOut");
	$(".header_top .nav_top").animated("fadeInDown", "fadeOutUp");
	$(".social_icon").animated("fadeInDown", "fadeOutUp");
	$(".header_deskr").animated("fadeInUp", "fadeOutUp");
	$(".header_deskr_down").animated("fadeInUp", "fadeOutUp");
	$(".input").animated("fadeInUp", "fadeOutUp");
	$(".play_video").animated("fadeInUp", "fadeOutDown");
	$(".idea_title").animated("fadeInUp", "fadeOutUp");
	$(".idea_text").animated("fadeInUp", "fadeOutUp");

	$(".idea_icon_wrap_bg").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_title").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_text").animated("fadeIn", "fadeOut");

	$(".idea_icon_wrap_bg2").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_title2").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_text2").animated("fadeIn", "fadeOut");

	$(".idea_icon_wrap_bg3").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_title3").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_text3").animated("fadeIn", "fadeOut");

	$(".idea_icon_wrap_bg4").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_title4").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_text4").animated("fadeIn", "fadeOut");

	$(".idea_icon_wrap_bg5").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_title5").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_text5").animated("fadeIn", "fadeOut");

	$(".idea_icon_wrap_bg6").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_title6").animated("fadeIn", "fadeOut");
	$(".idea_icon_wrap_text6").animated("fadeIn", "fadeOut");


	$(".toggle_mnu").click(function() {
		$("#sandwich").toggleClass("active");
	});

	$(".top_mnu ul li a").click(function(){
		$(".top_mnu").fadeOut(400);
		$("#sandwich").toggleClass("active");
	}).append("<span>");


	$(".toggle_mnu").click(function(){
		if($(".top_mnu_side").is(":visible")) {
			
			$(".top_mnu_side").fadeOut(400);//при клике скрывается меню
			$(".top_mnu_side li a").removeClass("zoomIn animated");//эффект появления ссылок
		} else {
			
			$(".top_mnu_side").fadeIn(400);
			$(".top_mnu_side li a").addClass("zoomIn animated");
	};
	});
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
