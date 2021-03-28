
function changeimg(image) {
  var p = document.getElementById("p");
  p.src = image.src;
  p.parentElement.style.display ="block";
}
$(window).scroll(function(e){ 
  var $el = $('.Cover3'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 200 && !isPositionFixed){ 
    $el.css({'position': 'fixed', 'top': '0px'}); 
  }
  if ($(this).scrollTop() < 200 && isPositionFixed){
    $el.css({'position': 'static', 'top': '0px'}); 
  } 
});