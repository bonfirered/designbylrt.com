var currentLoc, offsetLoc;

// JS FOR ALL ELEMENTS ON THE HOME PAGE
$(function() {
  
  preloadVideo();

  // Hero SVG Animation
  new Waypoint({
    element: document.getElementById('hero'),
    handler: function(direction) {
      animateHero();
    },
    offset: '100%'
  });

  // Mission height Animation
  new Waypoint({
    element: document.getElementById('band'),
    handler: function(direction) {
      animateBand();        
    },
    offset: '80%'
  });

  // Mission height Animation
  new Waypoint({
    element: document.getElementById('mission'),
    handler: function(direction) {
      animateMission();        
    },
    offset: '60%'
  });

  // Services SVG Animation and Location numbers
  new Waypoint({
    element: document.getElementById('events'),
    handler: function(direction) {
      animateEvents();       
    },
    offset: '-10%'
  });

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

function animateHero() {

  var $hero = $('#hero');
  // Don't repeat the animation
  if($hero.hasClass('animation-complete')) {
    return;
  } else {
    $hero.addClass('animation-complete');
    
    var object = [];
    // Make an array
    $('#HP_lines1 .pulse').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setInterval(function(){
        // Pulsing
        object
          .velocity({ r: [40, 7],
                      opacity: [0, 1],
                      strokeWidth: [.25, 1],
                    },
                    {
                      duration: 3000,
                      delay: 0,
                      easing: [ .42, 0, .58, 1 ]
                    });
      }, 3000);
    });

    var object = [];
    // Make an array
    $('#HP_lines1 .end').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // End Point
        object
          .velocity({ opacity: 1}, 500);
      }, 100);
    });

    var object = [];
    // Make an array
    $('#HP_lines1 .line').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // End Point
        object
          .velocity({ strokeDashoffset: 770 }, 0, "easeInOutQuad")
          .velocity({ opacity: 1 }, 500)
          .velocity({ strokeDashoffset: 0 }, 1800, "easeInOutQuad");
      }, 800);
    });
  }
}

function animateBand() {

  var section = $('#band');
  // Don't repeat the animation
  if(section.hasClass('animation-complete')) {
    return;
  }else {
    section.addClass('animation-complete');
    var object = [];
    // Make an array
    $('#missionSVG_1 .line').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // End Point
        object
          .velocity({ strokeDashoffset: 1300 }, 0, "easeInOutQuad")
          .velocity({ opacity: 1 }, 500)
          .velocity({ strokeDashoffset: 1000 }, 1800, "easeInOutQuad");
      }, 300);
    });
  }
}

window.animateMission = function animateMission() {

  var section = $('#mission');
  // Don't repeat the animation
  if(section.hasClass('animation-complete')) {
    return;
  }else {
    section.addClass('animation-complete');

    var object = [];
    // Make an array
    $('.our-mission').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // End Point
        object
          .velocity({ height: 1050 }, 1500, "easeInOutQuad");
      }, 0);
    });

    var object = [];
    // Make an array
    $('.our-mission .content').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // End Point
        object
          .velocity({ opacity: 1,
                      marginTop: 0,
                      easing: "easeInOutQuad"
          }, 800)
      }, 500);
    });

    var object = [];
    // Make an array
    $('.our-mission .rombus img').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // End Point
        object
          .velocity({ opacity: 1 }, 500, "easeInOutQuad");
      }, 100);
    });

    var object = [];
    // Make an array
    $('#missionSVG_1 .line').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // End Point
        object
          .velocity({ strokeDashoffset: 1000}, 0)
          .velocity({ strokeDashoffset: 0 }, 2800, "easeInOutQuad");
      }, 500);
    });
  }
}

function animateEvents() {

  var section = $('#events');
  // Don't repeat the animation
  if(section.hasClass('animation-complete')) {
    return;
  }else {
    section.addClass('animation-complete');
    // Get current location
    setTimeout(function() {

      $('.lat').counter({ start: offsetLoc[0], end: currentLoc[0], duration: 3000, easing: 'easeOutCirc' });
      $('.long').counter({ start: offsetLoc[1], end: currentLoc[1], duration: 3000, easing: 'easeOutCirc' });
    }, 2000);
  }
}

$.fn.counter = function( options ) {
  var settings = $.extend({
      start:  '35.2, 80.8',
      end:    '40.9, -81.4',
      easing: 'easeOutCirc',
      duration: 2000,
      complete: ''
  }, options );

  var thisElement = $(this);

  $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      thisElement.text(parseFloat(this.count).toFixed(1) + '°');
    },
    complete: settings.complete
  });
};

function preloadVideo() {
  video = document.getElementsByTagName('video')[0];
  video.addEventListener('canplaythrough', function(){
    this.pause();
    this.play();
    $('#video').css('opacity', 1);
  });
}