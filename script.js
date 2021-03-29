$(function(){
});  

// navメニュー
$('.sp-menu').hide();
// $('.pc-menu').hide();

$('.bars-menu').click(function(){
  $('.sp-menu').fadeIn();
}); 

$('.sp-menu').click(function(){
  $('.sp-menu').fadeOut();
}); 
// $('.fa-bars').click(function(){
//   $('.sp-menu').fadeOut();
// }); 
