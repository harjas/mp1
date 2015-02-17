// var divs = document.getElementsByTagName('div');
// for(var i=0; i<divs.length; i++) {
//   divs[i].addEventListener("click", highlightThis);
  
//   divs[i].addEventListener("click", highlightThis, true);
//   divs[i].addEventListener("click", highlightThis, false);
// }

// function highlightThis(event) {
//     //event.stopPropagation();
  
//     var backgroundColor = this.style.backgroundColor;
//     this.style.backgroundColor='yellow';
//     alert(this.className);
//     this.style.backgroundColor=backgroundColor;
// }

$(document).on("scroll",function(){
    if($(document).scrollTop()>200){
        $("header").removeClass("large-nav").addClass("small-nav");
    } else{
        $("header").removeClass("small-nav").addClass("large-nav");
    }
});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});