function putPlaceholderProduct(a) {
console.log("put placeholder");
  a.src='https://fs.siteor.com/lamillou/files/VISLA/Placeholder/placeholder.svg'; 
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
console.log($(window).width());

function numberProducts() {
  var p;  
  if (!allProducts) {
	  // 580
    if ($(window).width() >= 565) {
      p = 5;
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
if (5 >= items.length) {  
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
function fadeIn(i, fade_out_from) {
    moving = true;
    var newSetting = fade_out_from / 10;
    items[i].style.opacity = newSetting;
    fade_out_from++;
    if(fade_out_from == 10){
        items[i].style.opacity = 1;
        clearTimeout(loopTimer);
        fade_out_from = 1;
        moving = false;
        return false;
    }
    var loopTimer = window.setTimeout(fadeIn, 10, i, fade_out_from);
}
function showBlock(i) {
	items[i].style.opacity = 0;
      	items[i].style.display = "block";
}
$('.load-more-products').on("click", function(e) {
	console.log("KLIK1");
	allProducts = true;
    	for (var i = 6; items.length > i; i++) {
		var time = Math.sqrt((i-6)*1000);
		window.setTimeout(showBlock, time, i);
    	};
	$('.load-more-products').fadeOut(1000);
	for (var i = 6; items.length > i; i++) {
		var time = 300 + Math.sqrt((i-6)*10000);
		window.setTimeout(fadeIn, time, i, 1);
	}
})
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
console.log('ver4');
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
    /*$('#learn-more-undo').hide();*/
    heightAtStart = hLeft - (hRight - originalHeight) - 35;
    $('.product_right_tab .block-devider .tab-pane').height(heightAtStart);    
  } else {
    $('#learn-more').hide();
    /*$('#learn-more-undo').hide();*/
    $('.product_right_tab .block-devider .tab-pane').height('auto');
  }
  $('.product_right_tab .block-devider .tab-pane').css('visibility', 'visible');
  $('#learn-more').css('visibility', 'visible');
  /*$('#learn-more-undo').css('visibility', 'visible');*/
};
  
if ( $('#learn-more').length ) {
    $(window).load(learnMore);
    $(window).on('resize', learnMore);
};
/*
$('#learn-more').on("click", function(e) { 
    $('#learn-more').hide();
    $('#learn-more-undo').show();
    $('.product_right_tab .block-devider .tab-pane').animate({ height: originalHeight }, 300);
    $('.product_right_tab .block-devider .tab-pane').height('auto');
});
*/
$('#learn-more').toggle(function() {
	$('.product_right_tab .block-devider .tab-pane').animate({ height: originalHeight }, 300);
    	$('.product_right_tab .block-devider .tab-pane').height('auto');
	$(this).find('span').html('Zwiń');
	$(this).find('img').css("transform", "rotate(180deg)");
  }, function() {
	$('#learn-more').show();
    	$('.product_right_tab .block-devider .tab-pane').animate({ height: heightAtStart }, 300);
	$(this).find('span').html('Rozwiń');
	$(this).find('img').css("transform", "rotate(0deg)");
});
/*
$('#learn-more-undo').on("click", function(e) {
    $('#learn-more-undo').hide();
    $('#learn-more').show();
    $('.product_right_tab .block-devider .tab-pane').animate({ height: heightAtStart }, 300);
}); 
*/

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
    showArrows();
  }
};

function HidePhotoView() {
  $('.site-layout').removeClass("photo-view-active");
  $('.sp-slider-photo-view').removeClass("active"); 
  $('.advertisement-mobile').css('display', advertMobVisible);
  $('.advertisement-desktop').css('display', advertDesVisible);
  $(window).trigger('resize');
  $(window).trigger('resize');
  showArrows();
};

$( '.sp-slider-photo-view' ).click(photoView);
$( '#exit-photo-view' ).click(HidePhotoView);

if ( $('.sp-slider-photo-view').length ) {
	$(window).load ( function () {
		if ($( '.sp-slider-photo-view' ).hasClass('active')) {
	    		$( '.sp-slider-photo-view' ).height(0);
		}
		else {
			var h2 = $('.ms-slide-bgcont').height();
			$( '.sp-slider-photo-view' ).height(h2);
		}
	});  
	$(window).on('resize', function(){
	    	if ($( '.sp-slider-photo-view' ).hasClass('active')) {
	    		$( '.sp-slider-photo-view' ).height(0);
		}
		else {
			var h2 = $('.ms-slide-bgcont').height();
			$( '.sp-slider-photo-view' ).height(h2);
		}
	});
};

$(document).mouseup(function(e) {
	if ($( '.sp-slider-photo-view' ).hasClass('active')) {
		var container1 = $(".ms-slide-bgcont");
		var container2 = $(".ms-thumb-list");
		var container3 = $(".sp-slider-photo-view");
		if (!container1.is(e.target) && container1.has(e.target).length === 0 && !container2.is(e.target) && container2.has(e.target).length === 0 && !container3.is(e.target) && container3.has(e.target).length === 0) {
			HidePhotoView();
		}
	}
});

/*Pop up add to cart
*************************************************/
/*
var lack;
function popUp(lack) {
  if (lack) {
        $( ".pop-up-lack" ).each(function() {
          $(this).show().delay( 5000 ).hide( 400 );
        });
	$( ".pop-up-added-to-cart" ).each(function() {
          $(this).hide(); 
        });  
  } else {
        $( ".pop-up-added-to-cart" ).each(function() {
	  $( "#cart-dropdown" ).removeClass('open');
          $(this).show().delay( 5000 ).hide( 400 ); 
        });
  } console.log('pop');	
};

function checkLack() {
  $( ".jGrowl-notification .message" ).each(function() {
    if ( $(this).text().indexOf("Niestety zapasy") != -1  ||
       $(this).text().indexOf("Unfortunately, supplies") != -1 ){
      lack = true;	       
    }
  });		
};

function checkPopUp() {
  lack = false;	
  if ( $( ".jGrowl-notification .message" ).length ) { console.log('when');
    $.when( checkLack() ).done(popUp(lack));	  
  } else {
    popUp(lack);
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

*/

/*Notify when available
*************************************************/
function addNotif() {
  if ( $( ".jGrowl-notification .message" ).length ) {
    $( ".jGrowl-notification .message" ).each(function() {
      if ( $(this).text().indexOf("Zły adres") != -1 ||
	 $(this).text().indexOf("Wrong e-mail address") != -1 ){
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
function showArrows() {
	$(document).ready(function(){
		$('.ms-skin-default .ms-nav-next').attr('style', 'visibility:visible!important');
		$('.ms-skin-default .ms-nav-prev').attr('style', 'visibility:visible!important');
	});
}
