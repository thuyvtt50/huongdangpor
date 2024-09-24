// JavaScript Document
var typed = new Typed('.element', {
               	strings: ["Web Designer.", "Graphic Designer."],
       	 	typeSpeed:50,
        		backSpeed:50,
        		loop:true,
        		});
$('#doingu').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

new WOW().init();

$('#danhmuc').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
