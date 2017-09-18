$('#zaladuj').on('click', function(){
  var mainImg = $('#main-image-form').val();
  var mainT = $('#main-title-form').val();
  var mainST = $('#main-subtitle-form').val();
  $('#newsletter-generated #main-image img').attr('src', mainImg);
  $('#newsletter-generated #main-title .h1').text(mainT);
  $('#newsletter-generated #main-subtitle .p').text(mainST);
});
