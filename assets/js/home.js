var currentLoc, offsetLoc;

// JS FOR ALL ELEMENTS ON THE HOME PAGE
$(function() {
  
  preloadVideo();
  setHeight();

  // Get users location
  $.get('http://ipinfo.io', function (response) {
    var travelDistance = 3;

    currentLoc = response.loc.split(','),
    offsetLoc  = [currentLoc[0] - travelDistance, currentLoc[1] - travelDistance];

    // Set users location
    $('#location .lat').text(parseFloat(offsetLoc[0]).toFixed(1) + '°');
    $('#location .long').text(parseFloat(offsetLoc[1]).toFixed(1) + '°');
    $('#location .lat-position, #location .long-position').css('opacity', 1);
  }, 'jsonp');
});

function setHeight() {
  
}



function preloadVideo() {
  video = document.getElementsByTagName('video')[0];
  video.addEventListener('canplaythrough', function(){
    this.pause();
    this.play();
    $('#video').css('opacity', 1);
  });
}