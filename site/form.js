// Vanilla Js========================

// var Product = document.getElementById('product');
// var ProductMessage = document.getElementById('productMessage');

// function productMessage() {
//   var product = this.options[this.selectedIndex].value;
//   if (product !== '') {
//     ProductMessage.innerHTML = 'You have selected: ' + product;
//   }
//   else {
//     ProductMessage.innerHTML = 'Please choose a product!';
//   }
// }

// Product.addEventListener('change', productMessage, false);

// jQuery========================

$(function() {

  var $product = $('#product');
  var $productMessage = $('#productMessage');

  $product.change(function() {

    var $option = $("option:selected").val()

    if($option !== '') {
      $productMessage.text('You have selected: ' + $option);
    } else {
      $productMessage.text('Please choose a product')
    }

  });

});
