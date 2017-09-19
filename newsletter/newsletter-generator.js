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
/*
$('#add-small-img button').on('click', function(){
  var link = $('#img1-small-form').val();
  
  var html = genButton(link);
  addElement(html);
});
*/
/*
$('button#usun').on('click', function(){
  $('#newsletter-generated #news-content tbody').children().last().remove();
});
*/

function addElement(elem) {
  $('#newsletter-generated #news-content').append(elem);
};

function genTitle(title) {
  var html = "<tr><td class='h1'>" + title + "</td></tr>";
  return html;
};

function genSubtitle(subtitle) {
  var html = "<tr><td class='p'>" + subtitle + "</td></tr>";
  return html;
};

function genImgCategory(imgLink, link) {
  var html;
  if (link === '') {
    html = "<tr><td>" +
        "<img class='img-category' src='" + imgLink + "'/>" +      
        "</td></tr>";      
  } else {
    html = "<tr><td><a href='" + link + "'>" +
        "<img class='img-category' src='" + imgLink + "'/>" +      
        "</a></td></tr>";
  }
  return html;
};

function genButton(link) {
  var html = "<tr><td><a class='btn-lam' href='" + link + "'>" +
      "<table class='btn-lam' cellpadding='0' cellspacing='0' border='0'>" +
      "<tr><td>Kup teraz</td></tr></table>" +
      "</a></td></tr>";
  return html;
};
/*
function genThreeProducts(linkI, linkII, linkIII) {
  
};
*/
function genProduct(link, img, title, subtitle, priceI, priceII) {
  var html = "<td><table cellpadding='0' cellspacing='0' border='0'><tr>" +
    "<td class='product'><a href='" + link "'><img src='" + img + "'></a></td></tr>" +
    "<tr><td class='product-title'>" + title + "</td></tr>" +
    "<tr><td class='product-subtitle'>" + subtitle + "</td></tr>" +
    genPrice (priceI, priceII) +
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


  
