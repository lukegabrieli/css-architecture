$('form').submit(function (evt) {
  evt.preventDefault();

  var url = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
  var stuff = $('#stuff').val();
  var flickrPhotos = {
    tags: stuff,
    format: "json"
  };
  function showPhotos (data) {
    var pageHTML = "";
    $.each(data.items, function(i, photo) {
      pageHTML += '<img src="' + photo.media.m + '" class="flickr_photo"/>';
      pageHTML += '<p>' + stuff + ' number ' + (i+1) + '</p>';
    });
    $('.show_stuff').html(pageHTML);
  }
  $.getJSON(url, flickrPhotos, showPhotos);
});

// $('.btn').click(function() {
//   var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//   var options = {
//     tags: "kitten",
//     format: "json"
//   };
//   function showPhotos(data) {
//     var photoList = '<ul>';
//     $.each(data.items, function(i, photo) {
//       photoList += '<li>';
//       photoList += '<a href="' + photo.link + '">';
//       photoList += '<img src="' + photo.media.m + '"></a></li>';
//     });
//     photoList += '</ul>';
//     $('.container').html(photoList);
//   }
//   $.getJSON(flickrAPI, options, showPhotos);
// });

