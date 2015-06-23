var Product = document.getElementById('product');
var ProductMessage = document.getElementById('productMessage');

function productMessage() {
  var product = this.options[this.selectedIndex].value;
  if (product !== '') {
    ProductMessage.innerHTML = 'You have selected: ' + product;
  }
  else {
    ProductMessage.innerHTML = 'Please choose a product!';
  }
}

Product.addEventListener('change', productMessage, false);

