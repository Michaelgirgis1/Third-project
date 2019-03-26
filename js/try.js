/*global $, alert, console, active*/


$(function () {
	"use strict";
	// adjust header 
	var myHeader = $(".header"),
	    mySlider =  $('.bxslider');
	
	myHeader.height($(window).height());
	
	$(window).resize(function () {
		myHeader.height($(window).height());
	    mySlider.each(function () {
	        $(this).css('paddingTop', ($(window).height() - $('.bxslider li	         ').height()) / 2);
	    });
	
	});
	
	
	// links add class active 
	
	$(".links li a").click(function () {
		
		$(this).parent().addClass('active').siblings().removeClass('active');
		
	});
	mySlider.each(function () {
		
		$(this).css('paddingTop', ($(window).height() - $('.bxslider li	').height()) / 2);
		
	});
	
	// trigger bxslider 
	
	mySlider.bxSlider({
		
		pager: false
		
	});
	
	// smooth scroll to div 
	
	$('.links li a').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('value')).offset().top
			
		}, 1000);
	});
	
	// create outo slider code 
	
	(function autoSlider() {
		
		$('.slider .active').each(function () {
			
			if (!$(this).is(':last-child')) {
				$(this).delay(3000).fadeOut(1000, function () {
					$(this).removeClass('active').next().addClass('active').fadeIn(1000);
					
					autoSlider();
					
				});
				
			} else {
				
				$(this).delay(3000).fadeOut(1000, function () {
					
					$(this).removeClass('active');
					$('.slider div').eq(0).addClass('active').fadeIn(1000);
					
					autoSlider();
				});
			}
			
        });
		
	}());
	
	// Trigger mixitup
	

	
	// adjust shuffle links 
	
	$('.shuffle li').click(function () {
		
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	
	// trigger nice scroll
	
	$("html").niceScroll({
		
	    cursorcolor: '#1abc9c',
		cursorwidth: '10px',
		cursorborder: '1px solid #1abc9c'
	});
	
});