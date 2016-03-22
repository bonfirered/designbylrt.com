// JS FOR ALL ELEMENTS ON THE CONSULTING PAGE PAGE
var currentLoc, offsetLoc;
$(function() {

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

  // Hero SVG Animation
  new Waypoint({
    element: document.getElementById('hero'),
    handler: function(direction) {
      animateHero();        
    },
    offset: '100%'
  });
  // Services position animation
  new Waypoint({
    element: document.getElementById('services'),
    handler: function(direction) {
      animateServices();       
    },
    offset: '50%'
  });

  new Waypoint({
    element: document.getElementById('serviceLine'),
    handler: function(direction) {
      animateServiceline();       
    },
    offset: '90%'
  });

  new Waypoint({
    element: document.getElementById('infographic'),
    handler: function(direction) {
      animateInfographic();       
    },
    offset: '70%'
  });
  // Managment Content fadein animation
  new Waypoint({
    element: document.getElementById('management'),
    handler: function(direction) {
      animateManagement();       
    },
    offset: '90%'
  });

  //Setup leader slider and handle it responsively
  setupLeaderSlider();
  $(window).on('resize', function() {
    setupLeaderSlider();
  });
});

function setupLeaderSlider() {
  if($(window).width() <= 767) {
    if(!$('#leader-slider').hasClass('slick-initialized')) {
      $('#leader-slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        dots: false,
        centerMode: true
      });
    }
  } else {

  }
}

function animateHero() {
  
  var $hero = $('#hero');
  // Don't repeat the animation
  if($hero.hasClass('animation-complete')) {
    return;
  }else {
    $hero.addClass('animation-complete');
    
    var object = [];
    // Make an array
    $('#heroLine .pulse').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setInterval(function(){
        // End Point
        object
          .velocity({ r: [40, 7],
                      opacity: [0, 1],
                      strokeWidth: [.25, 1]
                    },
                    {
                      duration: 3000,
                      delay: 0
                    });
      }, 5800);

    });

    var object = [];
    // Make an array
    $('#heroLine .end').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // End Point
        object
          .velocity({ opacity: 1}, 800);
      }, 1200);
    });

    var object = [];
    // Make an array
    $('#heroLine .end2').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // End Point
        object
          .velocity({ opacity: 1}, 800);
      }, 4100);
    });

    var object = [];
    // Make an array
    $('#heroLine .line').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // Line
        object
          .velocity({ strokeDashoffset: 1910 }, 0)
          .velocity({ opacity: 1 }, 500)
          .velocity({ strokeDashoffset: 0 }, 2500, "easeInOutQuad");   
      }, 1800);
    });

    var object = [];
    // Make an array
    $('.expertise').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // Content Fade in
        object
          .velocity({ opacity: 1,
                      marginTop: 50
          }, 800)
      }, 300);
    });

    var object = [];
    // Make an array
    $('.expertise .content').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // Content Fade in
        object
          .velocity({ opacity: 1,
                      marginTop: 0
          }, 800)
      }, 800);
    });
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

function animateServices() {
  
  var section = $('#services');
  // Don't repeat the animation
  if(section.hasClass('animation-complete')) {
    return;
  }else {
    section.addClass('animation-complete');

    var object = [];
    // Make an array
    $('.services').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // Content Fade in
        object
          .velocity({ top: 0,
                      opacity: 1,
                      backgroundColor: '#F9F9F9'
           }, 800)
      }, 0);
    });

    // Get current location
    $.get('http://ipinfo.io', function (response) {
      setTimeout(function() {
        $('.lat').counter({ start: offsetLoc[0], end: currentLoc[0], duration: 3000, easing: 'easeOutCirc' });
        $('.long').counter({ start: offsetLoc[1], end: currentLoc[1], duration: 3000, easing: 'easeOutCirc' });
      }, 2000);
    }, 'jsonp');
  }
}

function animateServiceline(state) {

  //SVG addClass
  var addClass = $.fn.addClass;
    $.fn.addClass = function(value) {
      var orig = addClass.apply(this, arguments);
   
      var elem,
        i = 0,
        len = this.length;

      for (; i < len; i++ ) {
        elem = this[ i ];
        if ( elem instanceof SVGElement ) {
          var classes = $(elem).attr('class');
          if ( classes ) {
              var index = classes.indexOf(value);
              if (index === -1) {
                classes = classes + " " + value;
                $(elem).attr('class', classes);
              }
          } else {
            $(elem).attr('class', value);
          }
        }
      }
      return orig;
    };

    // SVG hasClass
    var hasClass = $.fn.hasClass;
    $.fn.hasClass = function(value) {
      var orig = hasClass.apply(this, arguments);

      var elem,
        i = 0,
        len = this.length;
          
      for (; i < len; i++ ) {
        elem = this[ i ];
        if ( elem instanceof SVGElement ) {
          var classes = $(elem).attr('class');

          if ( classes ) {
            if ( classes.indexOf(value) === -1 ) {
              return false;
            } else {
              return true;
            }
          } else {
              return false;
          }
        }
      }
      return orig;
    };


  var section = $('#serviceLine');
  // Don't repeat the animation
  if (section.hasClass('animation-complete') || state===false) {
    return;
  } else {
    section.addClass('animation-complete');

    var object = [];
    // Make an array
    $('#serviceLine .pulse').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setInterval(function(){
        // End Point
        object
          .velocity({ r: [40, 7],
                      opacity: [0, 1],
                      strokeWidth: [.25, 1]
                    },
                    {
                      duration: 3000,
                      delay: 0
                    });
      }, 2500);
    });

    var object = [];
    // Make an array
    $('#serviceLine .end').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // Content Fade in
        object
          .velocity({ opacity: 1}, 800);
      }, 1500);
    });

    var object = [];
    // Make an array
    $('#serviceLine .line').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // line
        object
          .velocity({ strokeDashoffset: 1910 }, 0)
          .velocity({ opacity: 1 }, 500)
          .velocity({ strokeDashoffset: 0 }, 2200,"easeInOutQuad");
      }, 0);
    });
  }
}

function animateInfographic() {

  var section = $('#infographic');
  // Don't repeat the animation
  if(section.hasClass('animation-complete')) {
    return;
  }else {
    section.addClass('animation-complete');

    var object = [];
    // Make an array
    $('#infographicSVG .line').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // line
        object
          .velocity({ strokeDashoffset: 350 }, 0,"easeInOutQuad")
          .velocity({ opacity: 1 }, 300)
          .velocity({ strokeDashoffset: 0 }, 1200,"easeInOutQuad");
      }, 200);
    });

    var object = [];
    // Make an array
    $('#infographicSVG #Group').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // line
        object
          .velocity({ opacity: 1 }, 500);
      }, 0);
    });

    var object = [];
    // Make an array
    $('#infographicSVG #dashes').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // line
        object
          .velocity({ strokeDashoffset: [0, 350],
                      'stroke-dasharray': [5, 350],
                      opacity: ['.3', 0] 
                    },
                    {
                      duration: 1800,
                      easing: 'easeInOutQuad'
                    });
      }, 600);
    });

    var object = [];
    // Make an array
    $('#infographicSVG #XMLID_142_').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // line
        object
          .velocity({ opacity: 1 }, 1000);
      }, 2300);
    });
  }
}

function animateManagement() {

  var section = $('#management');
  // Don't repeat the animation
  if(section.hasClass('animation-complete')) {
    return;
  }else {
    section.addClass('animation-complete');

    var object = [];
    // Make an array
    $('.management .content').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // Content Fade in
        object
          .velocity({ opacity: 1,
                      paddingTop: 0
          }, 800)
      }, 100);
    });

    var object = [];
    // Make an array
    $('.testimonial').each(function() {
      object.push($(this));
    });
    // Loop
    $(object).each(function(index) {
      var object = $(this);

      setTimeout(function(){
        // Content Fade in
        object
          .velocity({ marginTop: 150 }, 800)
      }, 300);
    });
  }
}