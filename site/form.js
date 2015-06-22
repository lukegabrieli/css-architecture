var elProduct = document.getElementById('product');
var elProductMessage   = document.getElementById('productMessage');

function productMessage() {
  var product = this.options[this.selectedIndex].value;
  if (product !== '') {
    elProductMessage.innerHTML = 'You have selected: ' + product;
  } else {
    elProductMessage.innerHTML = 'Please choose a product!';
  }
}

elProduct.addEventListener('change', productMessage, false);
