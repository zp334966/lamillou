
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
