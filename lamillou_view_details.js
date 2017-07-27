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
$('.load-more-products').on("click", function(e) {
    allProducts = true;
	$('.load-more-products').hide();
    for (var i = 0; items.length > i; i++) {
      items[i].style.display = "block";
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


/* Load more relate products
*************************************************/ 
var close = true;
function learnMore() {
  $('.product_right_tab .block-devider .tab-pane').css('visibility', 'hidden');
  var hRight = $('.product_right_tab').height(); 
  var hLeft = $('.sp-slider').height(); 
  if ($(window).width() >= 992 && hRight > hLeft && close) {
    $('#learn-more').show();
    var hBlockDevider = $('.product_right_tab .block-devider .tab-pane').height();
    hBlockDevider = hBlockDevider - (hRight - hLeft) - 60; 
    $('.product_right_tab .block-devider .tab-pane').height(hBlockDevider);    
  } else {
    $('#learn-more').hide();
    $('.product_right_tab .block-devider .tab-pane').height('auto');
  }
  $('.product_right_tab .block-devider .tab-pane').css('visibility', 'visible');
};
  
if ( $('#learn-more').length ) {
    $(window).load(learnMore);
	$(window).on('resize', learnMore);
};
$('#learn-more').on("click", function(e) {
    $('#learn-more').hide();
    $('.product_right_tab .block-devider .tab-pane').height('auto');
    close = false;
});


/*PhotoView
*************************************************/
var advertMobVisible = 'none';
var advertDesVisible = 'none';

  
function photoDisplay() {
  $('.site-layout').addClass("photo-view-active");
  $('.sp-slider-photo-view').addClass("active"); 
  //$('.canvas-photo-view').show();
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
  } else {
    HidePhotoView();  
  }
};

function HidePhotoView() {
  $('.site-layout').removeClass("photo-view-active");
  $('.sp-slider-photo-view').removeClass("active"); 
  //$('.canvas-photo-view').hide();
  $('.advertisement-mobile').css('display', advertMobVisible);
  $('.advertisement-desktop').css('display', advertDesVisible);
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
          $(this).show().delay( 5000 ).hide( 400 ); 
        });
      }
    });
  } else {
    $( ".pop-up-added-to-cart" ).each(function() {
      $(this).show().delay( 5000 ).hide( 400 ); 
    });
  }
};
  
  
$( ".add_to_cart_button .add" ).click(function() {
  setTimeout(checkPopUp, 500);
});
