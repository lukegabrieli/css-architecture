$('#product').on('change', function (){
  var $product = $("#product option:selected").val();
  var $message = "You have selected: "+ $product;
  $('#productMessage').html($message);
})

