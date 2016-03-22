// global.js
// -----------------------------------------------------------------

$(function() {
  var hash = location.hash;
  // Events anchor
  if($('body').hasClass('home') && hash == '#events') {
    window.animateMission();
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $(hash).offset().top + 550
      }, 1000);
    }, 800);
  }

  if($('body').hasClass('consulting') && hash == '#content') {
    window.animateHero();
    window.animateServices();
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 300
      }, 1000);
    }, 100);
  }

  if($('body').hasClass('consulting') && hash == '#management') {
    window.animateHero();
    window.animateServices();
    window.animateManagement();
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 1000);
    }, 500);
  }

  if($('body').hasClass('consulting') && hash == '#leadership') {
    window.animateHero();
    window.animateServices();
    window.animateManagement();
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 400
      }, 1000);
    }, 100);
  }

  $('.trigger-contact-form').on('click', function() {
    if(!Modernizr.touch && typeof isMobileScreenSize() !== 'undefined') {
      $('.contact-dropdown').css('max-height', '675px');
      $('.home').css('margin-top', '675px');
      $('.consulting').css('margin-top', '775px');
    } else {
      sizeToViewport();
      $('.contact-dropdown').css('max-height', '3000px');
      $('.navbar-fixed-top').css('position', 'relative');
      $('body').css('opacity', 1);
      $('.close').removeClass('close');
      setTimeout(function() {
        $("html, body").animate({ scrollTop: 0 }, 500);
      }, 10);
    }
  });

  handleResponses();

  $('.contact-form-close').on('click', function() {
    $('.contact-dropdown').css('max-height', '0');
    $('.home').css('margin-top', '0');
    $('.consulting').css('margin-top', '0');
    $('.navbar-fixed-top').css('position', 'fixed');
  });

  $('#newsletter-action').on('click', function(){
    if(!$('#newsletter-form').is(':visible')) {
      $('#newsletter-message').hide();
      $('#newsletter-form').show()
      $('#sub_firstname').focus();
    } else {
      $('#form-newsletter').submit();
    }
  });

  setupFormFields();

  // Skrollr
  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    skrollr.init({forceHeight: false});
    $(window).on('resize', function() {
      skrollr.get().refresh();
    });
  }
});

function handleResponses() {
  $('#message').on('click', function() {
    $(this).removeClass('active');
  });
  var msg       = '', msgClass,
      error     = getUrlParameter('errorcode'),
      success   = getUrlParameter('success'),
      confirmed = getUrlParameter('confirmed'),
      sent      = getUrlParameter('sent');
  if(error) {
    msgClass = 'error';
    if(error == 3) {
      msg = 'Email is required.'
    } else if(error == 4) {
      msg = 'Invalid email provided.'
    } else if(error == 8) {
      msgClass = 'completed';
      msg = '<strong>THANK YOU!</strong> You\'re already on the list.'
    } else {
      msg = 'An error has occurred (code: #' + error + '). Please try again or call us at ' + $('#phone-number').text() + '.';
    }

    // Handle the scroll down to the newsletter
    window.animateMission();
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $('#footer').offset().top
      }, 1000);
    }, 1000);
    setTimeout(function() {
      $('#newsletter-action').click();
    }, 1100);

  } else if(success) {
    msgClass = 'success';
    msg = '<strong>Almost finished...</strong> Simply click the link in the email we just sent you to confirm your email address.'
  } else if(confirmed) {
    msgClass = 'completed';
    msg = '<strong>THANK YOU!</strong> We\'ll send you news and updates from DragonFly. Amazing things are ahead.'
  } else if(sent) {
    msgClass = 'completed';
    msg = '<strong>Thank you for contacting us!</strong> We\'ll be in touch very soon.';
  }
  if(msg != '') {
    $('#message').addClass('active msg-' + msgClass).find('p').html(msg);
  }

  // Fade out non-error messages after X seconds
  if(msgClass != 'error') {
    setTimeout(function() {
      $('#message').velocity({height: 0}, 1500);
      $('#message').velocity({opacity: 0},1500);
    }, 5000);
  }
}

function setupFormFields() {
  $('input,textarea').each(function() {
    $(this).on('focus', function() {
      $(this).parent('.wrapper').addClass('active');
    });
    $(this).on('blur', function() {
      if ($(this).val().length == 0) {
        $(this).parent('.wrapper').removeClass('active');
      }
    });
    if ($(this).val() != '') $(this).parent('.wrapper').addClass('active');
  });
}

function getUrlParameter(sParam) {
  var sPageURL      = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
}

function isMobileScreenSize() {
  if($(window).width() < 768) {
    return;
  } else {
    return false;
  }
}

// Size specific elements to the height of the viewport
function sizeToViewport(element) {
  viewportHeight = $(window).height();
  var minHeight  = 560;
  setTimeout(function(){
    if(viewportHeight < minHeight) { viewportHeight = minHeight };
    if(element) {
      $(element).css('height', viewportHeight);
      $(element).css('minHeight', viewportHeight);
    } else {
      $('.viewport-height, .viewport-height .video').css('height', viewportHeight);
    }
  }, 1);
}