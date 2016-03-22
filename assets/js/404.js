// JS FOR ALL ELEMENTS ON THE 404 PAGE PAGE
$(function() {
  // 404 location numbers animation
  animateLocation();
});

$.fn.counter = function( options ) {
  var settings = $.extend({
      start:  '35.2, 80.8',
      end:    '40.9, -81.4',
      easing: 'swing',
      duration: 8000,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      thisElement.text(parseFloat(this.count).toFixed(1));
    },
    complete: settings.complete
  });
};

function animateLocation() {
  
  var section = $('#background');
  // Don't repeat the animation
  if(section.hasClass('animation-complete')) {
    return;
  }else {
    section.addClass('animation-complete');
    // Get current location
    $.get('http://ipinfo.io', function (response) {
      setTimeout(function() {

        var current   = response.loc.split(','),
            charlotte = ['35.2', '80.8'];

        $('.lat').counter({ start: charlotte[0], end: 25.0, duration: 5000 });
        $('.long').counter({ start: charlotte[1], end: 71.0, duration: 7000 });
      }, 2000);
    }, 'jsonp');
  }
}