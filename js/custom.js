// JavaScript Document
$('#banner-list').owlCarousel({
    loop:true,
    margin:30,
	nav:true,
	autoplay:true,
	smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('#product1').owlCarousel({
    loop:true,
    margin:30,
	nav:true,
	autoplay:true,
	smartSpeed:1000,
    responsive:{
        items:4
        // 0:{
        //     items:1
        // },
        // 600:{
        //     items:1
        // },
        // 1000:{
            
        // }
    }
})



$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
// $(document).ready(function(){
// 			$(".btn-toggle").click(function(){
// 				$("#menu").slideToggle()
// 			})
// 		})

