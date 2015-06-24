$(document).ready(function() {
  var $current = $('#page a');
  $current.each(function() {
    if (document.location.href == this.href) {
          $(this).addClass('active')
    }
  })
})
