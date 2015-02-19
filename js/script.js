$(document).ready(function(){

	$(document).on("scroll",function(){
	    if($(document).scrollTop()>300){
	        $("header").removeClass("large-nav").addClass("small-nav");
	    } else{
	        $("header").removeClass("small-nav").addClass("large-nav");
	    }
	});

	$("a[href^='#'").click(function(event){
		event.preventDefault();
		var pageTarget = this.hash;
		$("html, body").animate({ 
			scrollTop: $(pageTarget).offset().top
		}, 1000)
	});


	$('.video-button').click(function(event) {
		var transparentScreen = $('<div class="transparent-screen" />'),
			modal = $('<div class="modal" />');

		//modal.css('top', '800px');
		var vidHTML = $('.modal-video').html();
		var	video = $('<video autoplay/>');

		video.append(vidHTML);
		modal.append(video);
		$('body').append(transparentScreen);
		$('body').append(modal);

		$(transparentScreen).click(function() {
			$(this).remove();
			modal.remove();
		});
	});

	$(document).on("scroll", function(){
		if($(document).scrollTop() < 1065){
			console.log("sec 1");
			$("#sec-1 a").css("color","#666666");
			$("#sec-1 a").css("text-decoration","underline");
			$("#sec-2 a").css("color","#ffffff");
			$("#sec-2 a").css("text-decoration","none");
			$("#sec-3 a").css("color","#ffffff");
			$("#sec-3 a").css("text-decoration","none");
				
		}
		else if($(document).scrollTop() < 2145){
			console.log("sec 2");
			$("#sec-2 a").css("color","#666666");
			$("#sec-2 a").css("text-decoration","underline");
			$("#sec-1 a").css("color","#ffffff");
			$("#sec-1 a").css("text-decoration","none");
			$("#sec-3 a").css("color","#ffffff");
			$("#sec-3 a").css("text-decoration","none");
		}
		else{
			$("#sec-3 a").css("color","#666666");
			$("#sec-3 a").css("text-decoration","underline");
			$("#sec-1 a").css("color","#ffffff");
			$("#sec-1 a").css("text-decoration","none");
			$("#sec-2 a").css("color","#ffffff");
			$("#sec-2 a").css("text-decoration","none");
		}
	});
 });

$(function() {
	    var currentIndex = 0;
	    var itemCount = $('.carousel > li').length;

	    $('.carousel > li:eq(' + currentIndex + ')').addClass('active');
	    $(document).on('click','.carousel-nav',function() {
	    	
	        var $active  = $('.carousel > li.active');
	        var isNext   = $(this).hasClass('next');
	        if(isNext){
	        	currentIndex = currentIndex+1;
	        }
	        else{
	        	currentIndex = currentIndex-1;
	        }

	        currentIndex = currentIndex % itemCount;

	        if (currentIndex === -1) {
	            currentIndex = itemCount - 1;
	        }

	        var $next = $('.carousel > li:eq(' + currentIndex + ')');
	        if(isNext){
	        	$active.addClass('next-out');
	        	$next.addClass('active').addClass('next-in');
	        }
	        else{
	        	$active.addClass('prev-out');
	        	$next.addClass('active').addClass('prev-in');
	        }

	        setTimeout(function() { 
	            $active.removeClass('active next-out prev-out');
	            $next.removeClass('next-in prev-in')
	        }, 500);
	        return false;
	    });
	});