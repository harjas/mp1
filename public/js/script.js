$(document).on("scroll",function(){$(document).scrollTop()>200?$("header").removeClass("large-nav").addClass("small-nav"):$("header").removeClass("small-nav").addClass("large-nav")}),$(document).ready(function(){console.dir($("#section-3")),$("a[href^='#'").click(function(a){a.preventDefault();var b=this.hash;$("html, body").animate({scrollTop:$(b).offset().top},1e3)})}),$(document).on("scroll",function(){$(document).scrollTop()<680?(console.log("sec 1"),$("#sec-1 a").css("color","#666666"),$("#sec-1 a").css("text-decoration","underline"),$("#sec-2 a").css("color","#ffffff"),$("#sec-2 a").css("text-decoration","none"),$("#sec-3 a").css("color","#ffffff"),$("#sec-3 a").css("text-decoration","none")):$(document).scrollTop()<1065?(console.log("sec 2"),$("#sec-2 a").css("color","#666666"),$("#sec-2 a").css("text-decoration","underline"),$("#sec-1 a").css("color","#ffffff"),$("#sec-1 a").css("text-decoration","none"),$("#sec-3 a").css("color","#ffffff"),$("#sec-3 a").css("text-decoration","none")):(console.log("sec 3"),$("#sec-3 a").css("color","#666666"),$("#sec-3 a").css("text-decoration","underline"),$("#sec-1 a").css("color","#ffffff"),$("#sec-1 a").css("text-decoration","none"),$("#sec-2 a").css("color","#ffffff"),$("#sec-2 a").css("text-decoration","none"))});