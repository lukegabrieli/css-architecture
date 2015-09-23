// ---JQUERY---

$(document).ready(function() {
  var $current = $('#page a');
  $current.each(function() {
    if (document.location.href == this.href) {
      $(this).addClass('active')
    }
  })
})

// ---JAVASCRIPT---

// var current = document.getElementById('page').getElementsByTagName('a');

// function Active() {
//   for (var i=0; i < current.length; i++) {
//     if (document.location.href == current[i].href) {
//       current[i].classList.add('active');
//     }
//   }
// }

// document.addEventListener('DOMContentLoaded', Active, false);
