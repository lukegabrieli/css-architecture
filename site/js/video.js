$(document).ready(function(){

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  if (!isMobile()) {

    var video = $('#stuff_video')[0];

    // ---HIDE PLAY/PAUSE BUTTON ON LOAD---

    $('#play_pause, .muted, .fullscreen').hide();

    // ---PLAY/PAUSE THE VIDEO---

    $('#play_pause').on('click', function() {
      if(video.paused) {
        video.play();
      }
      else {
        video.pause();
      }
      return false;
    });

      $('.video_player').css('cursor', 'none');
          $('.video_player').css('cursor', 'default');


    // ---FADES IN/OUT ON HOVER---

    $('.video_player').on('mouseenter', function() {
      $('#play_pause, .muted, .fullscreen').fadeIn('fast');
    });

    $('.video_player').on('mouseleave', function() {
      $('#play_pause, .muted, .fullscreen').fadeOut('fast');
    });

    // ---SWITCHES PLAY/PAUSE BUTTON ON CLICK---

    $('#play_pause').on('click', function() {
      if ($('#play_pause').hasClass('icon-play2')) {
        $('#play_pause').removeClass('icon-play2');
        $('#play_pause').addClass('icon-pause');
      }
      else if ($('#play_pause').hasClass('icon-pause')) {
        $('#play_pause').removeClass('icon-pause');
        $('#play_pause').addClass('icon-play2');
      }
      else {
        return false
      }
    });

    // ---SWITCHES MUTE/UNMUTE ON CLICK---

    $('.muted').on('click', function() {
      $('.muted').toggleClass('muted_border');
    });

    // ---PROGRESS BAR---

    $('#stuff_video').on('timeupdate', function() {
      var timePercent = 100 * ((video.currentTime)/(video.duration));
      $('.current_progress').css('width', timePercent+'%');
    });

    // ---MUTE BUTTON---

    $('.muted').click(function() {
      video.muted = !video.muted;
      return false;
    });

    // ---FULLSCREEN BUTTON---

    $('.fullscreen').on('click', function(){
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen(); // Firefox
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Chrome and Safari
      }
    });
  }
});
