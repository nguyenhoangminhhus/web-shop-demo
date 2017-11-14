(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	$(".toggleBtn").on('click', function(){
			$(".search-box form input").css({width: "0px"});
			$(".search-box").toggleClass("min-input");
		});
	$(".toggleBtn").on('click',function(){
    $(this).children('.pe-7s-search, .pe-7s-close').toggleClass("pe-7s-close pe-7s-search");
	});
	
/*---------------------
 TOP Menu Stick
--------------------- */
	
	$(window).on('scroll', function() {
	  if ($(this).scrollTop() > 80) {
	    $('#sticker').addClass("stick");
	  } 
	  else {
	   	$('#sticker').removeClass("stick");
	  }
	  if ($(this).scrollTop() > 80) {
	    $('#sticker7').addClass("stick");
		$('#sticker7').removeClass("h-6");
	  } 
	  else {
	   	$('#sticker7').removeClass("stick");
	   	$('#sticker7').addClass("h-6");
	  }
	  if ($(this).scrollTop() > 10) {
	    $('#sticker2').addClass("stick2");
	  } 
	  else {
	   	$('#sticker2').removeClass("stick2");
	  }

	 });
/*----------------------------
	venobox
------------------------------ */	
	$('.venobox').venobox(); 
	

/*----------------------------
	tooltiop
------------------------------ */	
	
    $('[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'top',
        container: 'body'
    });	
	
/*----------------------------
	Mobile Menu
------------------------*/
$('.mobile-menu nav').meanmenu({
	meanScreenWidth: "990",
	meanMenuContainer: ".mobile-menu",
});	
	
/*----------------------------
 wow js active
------------------------------ */
 new WOW().init();
 
/*----------------------------
 blog-carousel7 active 
------------------------------ */  
  $("#blog-carousel7").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<span></span>","<span></span>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 /*----------------------------
 blog-carousel  shortcode active 
------------------------------ */   
  $("#blog-carousel-shortcode").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 /*----------------------------
 blog-carousel active 
------------------------------ */   
  $("#blog-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
 blog-innner-carousel active 
------------------------------ */    
  $("#blog-innner-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<span></span>","<span></span>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
 blog-innner-carousel2 active 
------------------------------ */    
  $("#blog-innner-carousel2").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<span></span>","<span></span>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
 testmonial-carousel active 
------------------------------ */    
  $("#testmonial-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  navigationText:["<span></span>","<span></span>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
/*----------------------------
 testmonial-carousel shortcode active 
------------------------------ */    
  $("#testmonial-carousel2").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  navigationText:["<span></span>","<span></span>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 /*----------------------------
 new-in-carousel active 
------------------------------ */   
  $("#new-in-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  navigationText:["<span></span>","<span></span>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 /*----------------------------
 best-seler-carousel active 
------------------------------ */ 
  $("#best-seler-carousel").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  navigationText:["<span></span>","<span></span>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 /*----------------------------
 sals-off-carousel active 
------------------------------ */   
  $("#sals-off-carousel").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  navigationText:["<span></span>","<span></span>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  })
  /*----------------------------
 band-carousel active 
------------------------------ */   
  $("#band-carousel").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 6,
	  navigationText:["<span></span>","<span></span>"],
      itemsDesktop : [1199,6],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
/*----------------------------
newslatter-carousel active 
------------------------------ */ 
  $("#newslatter-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 1,
	  navigationText:["<span></span>","<span></span>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });  
/*----------------------------
single product carousel active 
------------------------------ */ 
	var sync1 = $("#sync1");
	var sync2 = $("#sync2");

	sync1.owlCarousel({
		singleItem : true,
		slideSpeed : 1000,
		navigation: false,
		pagination:false,
		afterAction : syncPosition,
		responsiveRefreshRate : 200
	});

	sync2.owlCarousel({
		items : 3,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [980, 3],
		itemsTablet: [768, 3],
		itemsTabletSmall: false,
		itemsMobile: [479, 3],
		pagination:false,
		responsiveRefreshRate : 100,
		navigation: true,
		navigationText: ["<span class='great-store-prev'></span>", "<span class='great-store-next'></span>"],
		afterInit : function(el){
			el.find(".owl-item").eq(0).addClass("synced");
		}
	});
	function syncPosition(el){
		var current = this.currentItem;
		$("#sync2")
			.find(".owl-item")
			.removeClass("synced")
			.eq(current)
			.addClass("synced")
		if($("#sync2").data("owlCarousel") !== undefined){
			center(current)
		}
	}

	$("#sync2").on("click", ".owl-item", function(e){
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo",number);
	});
/*----------------------------
related-product-carousel active 
------------------------------ */   
  
    $("#related-product-carousel").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<span></span>","<span></span>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [980,3],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
  });
  
/*----------------------------
 price-slider active
------------------------------ */  

	  $( "#slider-range" ).slider({
	   range: true,
	   min: 40,
	   max: 600,
	   values: [ 60, 570 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - £" + $( "#slider-range" ).slider( "values", 1 ) );	   
/*--------------------------
 mixItUp
---------------------------- */	
    $('#recent-work').mixItUp();
	$("li:first-child.filter").addClass("active"); 
	
/*--------------------------
 counterUp
---------------------------- */		   	   
  $('.counter').counterUp({
		delay: 10,
		time: 1000
	}); 
	   
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 
/*--------------------------
cart-plus-minus-button
---------------------------- */		
	 $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	  $(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
		   // Don't allow decrementing below zero
		  if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
		  }
		  }
		$button.parent().find("input").val(newVal);
	  });

   /*---------------------
  Price Filter
 --------------------- */
    var min_price = parseFloat('0');
    var max_price = parseFloat('90');
    var current_min_price = parseFloat($('#price-from').val());
    var current_max_price = parseFloat($('#price-to').val());
    $('#slider-price').slider({
        range   : true,
        min     : min_price,
        max     : max_price,
        values  : [ current_min_price, current_max_price ],
        slide   : function (event, ui) {
            $('#price-from').val('£'+ui.values[0]);
            $('#price-to').val('£'+ ui.values[1]);
            current_min_price = ui.values[0];
            current_max_price = ui.values[1];
        },
    });
   
 /*---------------------
	Checkout page toggle
 --------------------- */  
  $(".showlogin").on('click', function(){
      $(".login").slideToggle();
    })
  $(".show-coupon").on('click', function(){
      $(".checkout_coupon").slideToggle();
    });
  $(".showaccount").on('click', function(){
      $(".account-box-hide").slideToggle();
    });
  $(".showship").on('click', function(){
      $(".ship-box-hide").slideToggle();
    });
  
 $(".payment_method-li").on('click', function(){
  $(".payment_method_bacs").show(500);
  $(".payment_method_cheque").hide(500);
  $(".payment_method_paypal").hide(500);
});
 $(".payment_method_cheque-li").on('click', function(){
  $(".payment_method_cheque").show(500);
  $(".payment_method_bacs").hide(500);
  $(".payment_method_paypal").hide(500);
});
 $(".payment_method_paypal-li").on('click', function(){
  $(".payment_method_paypal").show(500);
  $(".payment_method_cheque").hide(500);
  $(".payment_method_bacs").hide(500);
});

  
   
	
 
})(jQuery); 