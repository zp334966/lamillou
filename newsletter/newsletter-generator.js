$('#zaladuj').on('click', function(){
  var mainImg = $('#main-image-form').val();
  var mainT = $('#main-title-form').val();
  var mainST = $('#main-subtitle-form').val();
  $('#newsletter-generated #main-image img').attr('src', mainImg);
  $('#newsletter-generated #main-title .h1').text(mainT);
  $('#newsletter-generated #main-subtitle .p').text(mainST);
});

$('#add-title button').on('click', function(){
  var title = $('#title-form').val();
  var html = genTitle(title);
  addElement(html);
});
$('#add-subtitle button').on('click', function(){
  var subtitle = $('#subtitle-form').val();
  var html = genSubtitle(subtitle);
  addElement(html);
});
$('#add-img button').on('click', function(){
  var imgLink = $('#img-form').val();
  var link = $('#img-href-form').val();
  var html = genImgCategory(imgLink, link);
  addElement(html);
});
$('#add-button button').on('click', function(){
  var link = $('#button-form').val();
  var html = genButton(link);
  addElement(html);
});

$('#add-small-img button').on('click', function(){
  var linkI = $('#img-small1-form').val();
  var linkII = $('#img-small2-form').val();
  var linkIII = $('#img-small3-form').val();
  var html = genThreeProducts(linkI, linkII, linkIII)
  addElement(html);
});


$('button#usun').on('click', function(){
  $('#newsletter-generated #news-content .element').last().remove();
});


function addElement(elem) {
  $('#newsletter-generated #news-content').append(elem);
};

function genTitle(title) {
  var html = "<tr class='element'><td class='h1'>" + title + "</td></tr>";
  return html;
};

function genSubtitle(subtitle) {
  var html = "<tr class='element'><td class='p'>" + subtitle + "</td></tr>";
  return html;
};

function genImgCategory(imgLink, link) {
  var html;
  if (link === '') {
    html = "<tr class='element'><td>" +
        "<img class='img-category' src='" + imgLink + "'/>" +      
        "</td></tr>";      
  } else {
    html = "<tr class='element'><td><a href='" + link + "'>" +
        "<img class='img-category' src='" + imgLink + "'/>" +      
        "</a></td></tr>";
  }
  return html;
};

function genButton(link) {
  var html = "<tr class='element'><td><a class='btn-lam' href='" + link + "'>" +
      "<table class='btn-lam' cellpadding='0' cellspacing='0' border='0'>" +
      "<tr><td>Kup teraz</td></tr></table>" +
      "</a></td></tr>";
  return html;
};

function genThreeProducts(linkI, linkII, linkIII) {
  var p1 = genProduct(linkI);
  var p2 = genProduct(linkII);
  var p3 = genProduct(linkIII);
  var html = "<tr class='element'><td><table cellpadding='0' cellspacing='0' border='0'><tr>" +
    p1 + p2 + p3 + "</tr></table></td></tr>";
  return html;
};

var site;
function genProduct(link) {
  var img; var title; var subtitle = ''; var priceI; var priceII = '';
  //var s = $.get(link, parseProductSite );
  $('#rubbish').load(link + ' h2.product_title:eq(0)'); 
  //var result = $('<div>');
  //result.load(link + ' h2.product_title:eq(0)', function(){});
  //var full_name = result.text(); 
	
  /*
    var img = result.find('.ms-slide-bgcont img').html()//attr('src'); 
    var full_name = result.find('h2.product_title:eq(0)').text();
    var names = productNames( full_name );    
	  if (! names.subtitle.match(/[a-z]/i)) {subtitle = names.category;} 
	  else { subtitle = add(names.category, names.subtitle); }
    var title = names.title;
   
    if ( result.find('.product_right_tab .price-promotion').length ) {
      priceI = result.find('.product_right_tab .price-promotion:eq(0)').text();
      priceII = result.find('.product_right_tab .old-price:eq(0)').text();
    } else {
      priceI = result.find('.product_right_tab .price span:eq(0)').text();
    }
	
*/	
  console.log(title); 
  var html = "<td><table cellpadding='0' cellspacing='0' border='0'><tr>" +
    "<td class='product'><a href='" + link + "'><img src='" + img + "'></a></td></tr>" +
    "<tr><td class='product-title'>" + title + "</td></tr>" +
    "<tr><td class='product-subtitle'>" + subtitle + "</td></tr>" +
    genPrice(priceI, priceII) +
    "</table></td>";
  return html;
};

function genPrice (priceI, priceII) {
  var html;
  if (priceII === '') {
    html = "<tr><td class='product-price'>" + priceI + "</td></tr>";
  } else {
    html = "<tr><td class='product-price'><table cellpadding='0' cellspacing='0' border='0'>" + 
    "<tr><td class='price-promotion'>" + priceI + "</td><td class='old-price'>" + priceII + "</td></tr>" +
    "</table></td></tr>";
  }
  return html;
};

function parseProductSite(result){
    var priceI; 
    var priceII = '';
    var subtitle ='';
    var img = $(result).find('.ms-slide-bgcont img').html()//attr('src'); 
    var full_name = $(result).find('h2.product_title:eq(0)').text();
    var names = productNames( full_name );    
	  if (! names.subtitle.match(/[a-z]/i)) {subtitle = names.category;} 
	  else { subtitle = add(names.category, names.subtitle); }
    var title = names.title;
    console.log(title);
    if ( $(result).find('.product_right_tab .price-promotion').length ) {
      priceI = $(result).find('.product_right_tab .price-promotion:eq(0)').text();
      priceII = $(result).find('.product_right_tab .old-price:eq(0)').text();
    } else {
      priceI = $(result).find('.product_right_tab .price span:eq(0)').text();
    }
    site = { img: img, title: title, subtitle: subtitle, priceI: priceI, priceII: priceII };
	console.log(site);
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
    if (names[i].match(/[a-z]/i) && names[i].indexOf('#') == -1 ) {
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
