$('#zaladuj').on('click', function(){
  var mainImg = $('#main-image-form').val();
  var mainLink = $('#main-link-form').val();
  var mainT = $('#main-title-form').val();
  var mainST = $('#main-subtitle-form').val();
  if (mainImg != '') {
    changeMainImage(mainImg, mainLink);
  }
  if (mainT != '') {
    $('#newsletter-generated #main-title .h1').text(mainT);
  }
  if (mainST != '') {
    $('#newsletter-generated #main-subtitle .p').text(mainST);
  }
});

$('#add-title button.add').on('click', function(){
  var title = $('#title-form').val();
  var html = genTitle(title);
  addElement(html);
});
$('#add-subtitle button.add').on('click', function(){
  var subtitle = $('#subtitle-form').val();
  var html = genSubtitle(subtitle);
  addElement(html);
});
$('#add-img button.add').on('click', function(){
  var imgLink = $('#img-form').val();
  var link = $('#img-href-form').val();
  var html = genImgCategory(imgLink, link);
  addElement(html);
});
$('#add-button button.add').on('click', function(){
  var link = $('#button-form').val();
  var html = genButton(link);
  addElement(html);
});

$('#add-small-img button.add').on('click', function(){
  var linki = $('#imgs-small-form').val();
  linki = linki.split('\n');	
  $.when( addElement( genThreeProductsTemplate() ) ).done( loadElements(linki[0], linki[1], linki[2]) );
});

$('button#remove').on('click', function(){
  $('#newsletter-generated #news-content .element').last().remove();
});

$('button#generate').on('click', function(){
  var html = "<html xmlns='http://www.w3.org/1999/xhtml'><head>" + 
    "<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;subset=latin-ext' rel='stylesheet'/>" +
    "<link href='https://cdn.rawgit.com/zp334966/lamillou/b90258ed/newsletter/newsletter-style.css' rel='stylesheet' type='text/css' />" +
    "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />" +
    "<title>A Simple Responsive HTML Email</title>" +
    "</head><body>" + $('#newsletter-generated').html() + "</body></html>";
  $('#generated-html').text(html);
});

$('#import-html button').on('click', function(){
  var html = $('#import-form').val();
  $('#cookiediv').html(html);
  $('#newsletter-generated .page').html( $('#cookiediv .page').html() );
});


function changeMainImage(mainImg, mainLink) {
  $('#newsletter-generated #main-image a').attr("href", mainLink);
  $('#newsletter-generated #main-image .background').attr("background", mainImg);
  $('#newsletter-generated #main-image .background').css("background-image", "url(" + mainImg + ")");
};

function addElement(elem) {
  $('#newsletter-generated #news-content').append(elem);
};

function genTitle(title) {
  var html = "<tr class='element newsletter-title'><td class='h1'>" + title + "</td></tr>";
  return html;
};

function genSubtitle(subtitle) {
  var html = "<tr class='element newsletter-subtitle'><td class='p'>" + subtitle + "</td></tr>";
  return html;
};

function genImgCategory(imgLink, link) {
  var html = "<tr class='element newsletter-img-cat'><td><a href='" + link + "'>" +
    "<table class='image' cellpadding='0' cellspacing='0' border='0' background=" + imgLink + 
    " style='background-image:url(" + imgLink + ");'>" + 
    "<tr><td class='btn-collection'><table class='btn-lam' cellpadding='0' cellspacing='0' border='0'>" +
    "<tr><td>Zobacz kolekcję</td></tr>" +
    "</table></td></tr>" +
    "</table></a></td></tr>";
  return html;
};

function genButton(link) {
  var html = "<tr class='element newsletter-button'><td><a class='btn-lam' href='" + link + "'>" +
      "<table class='btn-lam' cellpadding='0' cellspacing='0' border='0'>" +
      "<tr><td>Kup teraz</td></tr></table>" +
      "</a></td></tr>";
  return html;
};


var threeP = 0;
function loadElements(linkI, linkII, linkIII) {
  $.when( loadElement(linkI, 'one'), 
	 loadElement(linkII, 'two'), 
	 loadElement(linkIII, 'three') ).done(threeP++);
}
function loadElement(link, number) {
  $.get(link, function(result) {
    var priceI; 
    var priceII = '';
    var subtitle ='';
    var img = $(result).find('.pop-up-added-to-cart.desktop img').attr('src'); 
    var full_name = $(result).find('h2.product_title:eq(0)').text(); 
    var names = productNames( full_name );    
	  if (! names.subtitle.match(/[a-z]/i)) {subtitle = names.category;} 
	  else { subtitle = add(names.category, names.subtitle); }
    var title = names.title;
    if ( $(result).find('.product_right_tab .price-promotion').length ) {
      priceI = $(result).find('.product_right_tab .price-promotion:eq(0)').text();
      priceII = $(result).find('.product_right_tab .old-price:eq(0)').text();
    } else {
      priceI = $(result).find('.product_right_tab .price span:eq(0)').text();
    }
    	  
    var l = "#news-content #prod" + (threeP - 1) + " ." + number;
    $(l + ' .product img').attr('src', img);
    $(l + ' .product a').attr('href', link);
    $(l + ' .product-title').text(title);
    $(l + ' .product-subtitle').text(subtitle);
    if (priceII == '') {
      $(l + ' .product-price').text(priceI);
    } else {
      var html = "<table cellpadding='0' cellspacing='0' border='0'><tr>" + 
	  "<td class='price-promotion'>" + priceI + "</td>" +
	  "<td class='old-price'>" + priceII + "</td></tr></table>";
      $(l + ' .product-price').append(html);
    }
  });	
};

function genThreeProductsTemplate() {
  var p1 = genProduct('one'); 
  var p2 = genProduct('two');
  var p3 = genProduct('three');
  var html = "<tr class='element newsletter-three-prod' id='prod" + threeP + "'><td><table cellpadding='0' cellspacing='0' border='0'><tr>" +
    p1 + p2 + p3 + "</tr></table></td></tr>";
  return html;
};


function genProduct(number) {
  var html = "<td class='" + number + "'><table cellpadding='0' cellspacing='0' border='0'><tr>" +
    "<td class='product'><a><img/></a></td></tr>" +
    "<tr><td class='product-title'></td></tr>" +
    "<tr><td class='product-subtitle'></td></tr>" +
    "<tr><td class='product-price'></td></tr>" +
    "</table></td>";
  return html;	
};




/*** EDYCJA TREŚCI ***/
var elementChecked = null;

$('body').on('click', '#news-content .element', function() {
    // do something
  removeCheched();
  elementChecked = $(this).index(); 
  console.log('klik ' + elementChecked);
  if ( $(this).hasClass('newsletter-title') ) {
    editTitle($(this));
  }
  if ( $(this).hasClass('newsletter-subtitle') ) {
    editSubtitle($(this));
  }
});

$('#add-title .edit').on('click', function(){
  var newTitle = $('#title-form').val();
  $('#newsletter-generated #news-content .element').eq(elementChecked).find('.h1').text(newTitle);
  $('#add-title .edit').hide();  console.log('edit');
});

$('#add-subtitle .edit').on('click', function(){
  var newTitle = $('#subtitle-form').val();
  $('#newsletter-generated #news-content .element').eq(elementChecked).find('.p').text(newTitle);
  $('#add-subtitle .edit').hide(); 
});

function removeCheched() {	
  if (elementChecked != null) {
    if ( $('#newsletter-generated #news-content .element').eq(elementChecked).hasClass('newsletter-title') ) {
      console.log('remove');
      noEditTitle();
    }
    if ( $('#newsletter-generated #news-content .element').eq(elementChecked).hasClass('newsletter-subtitle') ) {
      console.log('remove');
      noEditSubtitle();
    }  
  }
};

function editTitle($this) {	
  $('#add-title .edit').show();
  $('#title-form').val( $this.find('.h1').text() );
};
function noEditTitle() {	
  $('#add-title .edit').hide();
  $('#title-form').val('');
};
function editSubtitle($this) {	
  $('#add-subtitle .edit').show();
  $('#subtitle-form').val( $this.find('.p').text() );
};
function noEditSubtitle() {	
  $('#add-subtitle .edit').hide();
  $('#subtitle-form').val('');
};

/*Name Product
*************************************************/
function productNames(full_name) {
  var categories = ["KOCYK","PODUSIA","ZESTAW","OTULACZ","BLANKET","KOC","WINGS","BAG","KOMPLET","POŚCIEL","PILLOW",
		    "ORGANIZER","OCHRANIACZ", "POZYTYWKA","HORN","PRZEŚCIERADŁO","PACK","TORBA","PASEK","PRZEWIJAK",
		    "SASZETKA","ŚPIWOREK","PAD","COVER","KURA","COMBO","ZAWIESZKA","ZABAWKA","WOREK","WOODY BUNNY",
                    "THERMO","GRZECHOTKA","PLECAK","MAT","KAPELUSZ","CHUSTKA","APASZKA","CZAPA","HAT","OPASKA",
		    "PACIFIER","CZAPKA","KARTY"];
  var category = "";
  full_name = full_name.replace(/\–/g, '-');
  var names = full_name.split('-');
  var i = 0;
  var title = "";
  var subtitle = "";
  while (names.length > i) {
    if (names[i].match(/[a-z]/i) ) {
      if (names[i].indexOf('#') != -1) {
        names[i] = names[i].split('#')[0];
      }
      if (categories.some(function(v) {return names[i].includes(v);})) {
        category = names[i];
      } else {
        if ( (!title.match(/[a-z]/i)) && properTitle(names[i]) ) {
          title = names[i];
        } else {
          subtitle = add (subtitle, names[i]);
        }
      }
    }
    i++;
  } 
  title = title.toLowerCase();
  return { title: title.trim(), subtitle: subtitle.trim(), category: category.trim() };
};  

function add(word1, word2) {
  if (word1.match(/[a-z]/i)) {
    return word1 + " | " + word2;
  } else return word2;
};

function countDigits(word) {
  word = word.replace(/\D+/g, "");
  return word.length;
};

function properTitle(word) {
  var d = countDigits(word);
  var l = word.trim().length - d;
  if (l > d) {return true; }
  else {return false;}
};  
/*************************************************/

