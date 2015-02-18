$(document).on("scroll",function(){
    if($(document).scrollTop()>200){
        $("header").removeClass("large-nav").addClass("small-nav");
    } else{
        $("header").removeClass("small-nav").addClass("large-nav");
    }
});

$(document).ready(function(){

	console.dir($('#section-3'));

	$("a[href^='#'").click(function(event){
		event.preventDefault();
		var pageTarget = this.hash;
		$("html, body").animate({ 
			scrollTop: $(pageTarget).offset().top 
		}, 1000)
	});
});

$(document).on("scroll", function(){
	if($(document).scrollTop() < 680){
		console.log("sec 1");
		$("#sec-1 a").css("color","#666666");
		$("#sec-1 a").css("text-decoration","underline");
		$("#sec-2 a").css("color","#ffffff");
		$("#sec-2 a").css("text-decoration","none");
		$("#sec-3 a").css("color","#ffffff");
		$("#sec-3 a").css("text-decoration","none");
			
	}
	else if($(document).scrollTop() < 1065){
		console.log("sec 2");
		$("#sec-2 a").css("color","#666666");
		$("#sec-2 a").css("text-decoration","underline");
		$("#sec-1 a").css("color","#ffffff");
		$("#sec-1 a").css("text-decoration","none");
		$("#sec-3 a").css("color","#ffffff");
		$("#sec-3 a").css("text-decoration","none");
	}
	else{
		console.log("sec 3");
		$("#sec-3 a").css("color","#666666");
		$("#sec-3 a").css("text-decoration","underline");
		$("#sec-1 a").css("color","#ffffff");
		$("#sec-1 a").css("text-decoration","none");
		$("#sec-2 a").css("color","#ffffff");
		$("#sec-2 a").css("text-decoration","none");
	}
});