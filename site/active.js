// Vanilla JS ====================

// var current = document.getElementById('page').getElementsByTagName('a');
//     console.log(current);
// function Active() {
//   for (var i=0; i < current.length; i++) {
//     if (document.location.href == current[i].href) {
//       current[i].classList.add('active');
//     }
//   }
// }

// document.addEventListener('DOMContentLoaded', Active, false);

// jQuery ====================

$(function() {

  var $current = $(".nav_link");
  var $windowUrl = $(location).attr('href');

  $current.each(function() {
    if($windowUrl.indexOf($(this).prop("href")) !== -1) {
      $(this).addClass('active');
    }
  });
});



