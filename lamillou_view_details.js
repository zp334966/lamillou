function putPlaceholderProduct(a) {
  a.src='https://d1dmfej9n5lgmh.cloudfront.net/lamillou/files/layout/placeholder.svg'; 
  a.style.paddingTop= 'calc((100% - 175px)/2)';
};

/* Relate products display
/**********************************************/
var items = document.getElementsByClassName("relate_product"); 
var allProducts = false;
if (items.length >= 4) {
  for (var i = 4; items.length > i; i++)
  {
    items[i].style.display = "none";
  };
};

function numberProducts() {
  var p;  
  if (!allProducts) {
    if ($(window).width() >= 768) {
      p = 6;
    } else {
      p = 4;
    }
    for (var i = 0; Math.min(p, items.length) > i; i++)
    {
      items[i].style.display = "block";
    };
    if (items.length >= p) {
      for (var i = p; items.length > i; i++)
      {
        items[i].style.display = "none";
      };
    }
  }
};
if (6 >= items.length) {  
  $('.load-more-products').hide();
};
if ( $('.relate_product').length) {
	$(window).load(numberProducts);  
	$(window).on('resize', numberProducts);
};
/*
$('.load-more-products').on("click", function(e) {
    allProducts = true;
	$('.load-more-products').hide();
    for (var i = 0; items.length > i; i++) {
      items[i].style.display = "block";
    };
});
*/
$('.load-more-products').on("click", function(e) {
	console.log("KLIK");
	allProducts = true;
    	for (var i = 0; items.length > i; i++) {
		items[i].style.opacity = 0;
      		items[i].style.display = "block";
    	};
	$('.load-more-products').fadeOut("slow");
	$('.load-more-products').hide();
	for (var i = 0; items.length > i; i++) {
		items[i].fadeIn('slow').delay(i*600);
    	};
});
$('.sidebar').hide();

/* Menu Packing
*************************************************/ 
function activeMenuPacking(i) {
  $('.menu-packing .menu-title .title').each(function(e) {
       if (i == $(this).index()) {
          $(this).addClass('active');
       } else {
          $(this).removeClass('active');
       }
  });
  $('.menu-packing .content .packing-info').each(function(e) {
       if (i == $(this).index()) {
          $(this).addClass('active');
       } else {
          $(this).removeClass('active');
       }
  });
};     
$('.menu-packing .menu-title .title').on("click", function(e) {
    var i = $(this).index();
    activeMenuPacking(i);
});
$( document ).ready(function() {
  if ( $('.menu-packing').length ) {
    if (! $('.menu-packing .menu-title .title.active').length ) {
      $('.menu-packing .menu-title .title').first().addClass('active');
      $('.menu-packing .packing-info').first().addClass('active');
    }
  }
});

/* Load more relate products
*************************************************/ 
var heightAtStart = 0;
var originalHeight; 
  
function learnMore() {  
  $('.product_right_tab .block-devider .tab-pane').css('visibility', 'hidden'); 
  $('.product_right_tab .block-devider .tab-pane').height('auto');  
  originalHeight = $(".product_right_tab .block-devider .tab-pane").height();
  var hRight = $('.product_right_tab').height(); 
  var hLeft = $('.sp-slider').height();
  if (/*$(window).width() >= 992*/ 0.6 > ($('.product_right_tab').width() / $('.product_details').width()) && hRight > hLeft) { 
    $('#learn-more').show();
    $('#learn-more-undo').hide();
    heightAtStart = hLeft - (hRight - originalHeight) - 35;
    $('.product_right_tab .block-devider .tab-pane').height(heightAtStart);    
  } else {
    $('#learn-more').hide();
    $('#learn-more-undo').hide();
    $('.product_right_tab .block-devider .tab-pane').height('auto');
  }
  $('.product_right_tab .block-devider .tab-pane').css('visibility', 'visible');
  $('#learn-more').css('visibility', 'visible');
  $('#learn-more-undo').css('visibility', 'visible');
};
  
if ( $('#learn-more').length ) {
    $(window).load(learnMore);
    $(window).on('resize', learnMore);
};
$('#learn-more').on("click", function(e) { 
    $('#learn-more').hide();
    $('#learn-more-undo').show();
    $('.product_right_tab .block-devider .tab-pane').animate({ height: originalHeight }, 300);
    $('.product_right_tab .block-devider .tab-pane').height('auto');
});
$('#learn-more-undo').on("click", function(e) {
    $('#learn-more-undo').hide();
    $('#learn-more').show();
    $('.product_right_tab .block-devider .tab-pane').animate({ height: heightAtStart }, 300);
}); 


/*PhotoView
*************************************************/
var advertMobVisible = 'none';
var advertDesVisible = 'none';

  
function photoDisplay() {
  $('.site-layout').addClass("photo-view-active");
  $('.sp-slider-photo-view').addClass("active"); 
  $(window).trigger('resize');
};
function photoHideLayout() {
  advertMobVisible = $('.advertisement-mobile').css('display');
  advertDesVisible = $('.advertisement-desktop').css('display');
  $('.advertisement').hide();
};
  
function photoView() {
  if (! $(this).hasClass("active")) {
    photoHideLayout();
    photoDisplay();
    arrows();
  } else {
    HidePhotoView();  
  }
};

function HidePhotoView() {
  $('.site-layout').removeClass("photo-view-active");
  $('.sp-slider-photo-view').removeClass("active"); 
  $('.advertisement-mobile').css('display', advertMobVisible);
  $('.advertisement-desktop').css('display', advertDesVisible);
  $(window).trigger('resize');
  $(window).trigger('resize');
};

$( '.sp-slider-photo-view' ).click(photoView);
$( '#exit-photo-view' ).click(HidePhotoView);
$( '.canvas-photo-view' ).click(HidePhotoView);

if ( $('.sp-slider-photo-view').length ) {
	$(window).load ( function () {
	    var h = $( '.ms-view.ms-fade-view' ).height();
	    var hWindow = $( window ).height();
	    var h2 = $('.sp-slider').height();
	    $( '.sp-slider-photo-view' ).height(h);
	    $( '.canvas-photo-view' ).height(hWindow - h2 - 5);
	});  
	$(window).on('resize', function(){
	    var h = $( '.ms-view.ms-fade-view' ).height();
 	    var hWindow = $( window ).height();
	    var h2 = $('.sp-slider').height();
	    $( '.sp-slider-photo-view' ).height(h);
	    $( '.canvas-photo-view' ).height(hWindow - h2 - 5);
	});
};


/*Pop up add to cart
*************************************************/
function checkPopUp() {
  if ( $( ".jGrowl-notification .message" ).length ) {
    $( ".jGrowl-notification .message" ).each(function() {
      if ( $(this).text().indexOf("Niestety zapasy") != -1 ){
        $( ".pop-up-lack" ).each(function() {
          $(this).show().delay( 5000 ).hide( 400 );
        });
      } else {
        $( ".pop-up-added-to-cart" ).each(function() {
	  $( "#cart-dropdown" ).removeClass('open');
          $(this).show().delay( 5000 ).hide( 400 ); 
        });
      }
    });
  } else {
    $( ".pop-up-added-to-cart" ).each(function() {
      $( "#cart-dropdown" ).removeClass('open');
      $(this).show().delay( 5000 ).hide( 400 ); 
    });
  }
};
  
  
$( ".add_to_cart_button .add" ).click(function() {
  setTimeout(checkPopUp, 500);
});
$( "#lm-cart" ).hover(function() {
  $( "#cart-dropdown" ).removeClass('open');
  $( ".pop-up-added-to-cart" ).each(function() {
    $(this).hide(); 
  }); 
  $( ".pop-up-lack" ).each(function() {
    $(this).hide(); 
  }); 
});

/*Notify when available
*************************************************/
function addNotif() {
  if ( $( ".jGrowl-notification .message" ).length ) {
    $( ".jGrowl-notification .message" ).each(function() {
      if ( $(this).text().indexOf("Zły adres") != -1 ){
        $('#notify-email-field').addClass('field_with_errors');
      }
    });
  }
};
  
  
$( "#add_notif" ).click(function() {
  setTimeout(addNotif, 500);
});

function arrows() {
	$(document).ready(function(){
	console.log("EDIT5");
	var $totalWidth = parseInt($('div.ms-thumb-list').outerWidth(), 10);
	console.log($totalWidth);
	var $howMany = parseInt($('div.ms-thumb-frame').length, 10);
	console.log($howMany);
	var $divsWidth = parseInt($('div.ms-thumbs-cont div.ms-thumb-frame').first().outerWidth(true), 10);
	console.log($divsWidth);
	if($howMany * $divsWidth < $totalWidth) {
		console.log("TRUE");
		$('.ms-skin-default .ms-nav-next').attr('style', 'visibility:hidden!important');
		$('.ms-skin-default .ms-nav-prev').attr('style', 'visibility:hidden!important');
	}
	else {
		console.log("FALSE");
		$('.ms-skin-default .ms-nav-next').attr('style', 'visibility:visible!important');
		$('.ms-skin-default .ms-nav-prev').attr('style', 'visibility:visible!important');
	}
	});
}
