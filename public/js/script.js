$(document).on("scroll",function(){$(document).scrollTop()>200?$("header").removeClass("large-nav").addClass("small-nav"):$("header").removeClass("small-nav").addClass("large-nav")}),$(document).ready(function(){$('a[href^="#"]').on("click",function(a){a.preventDefault();var b=this.hash,c=$(b);$("html, body").stop().animate({scrollTop:c.offset().top},900,"swing",function(){window.location.hash=b})})});