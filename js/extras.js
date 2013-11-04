$( function() {
  $('.navbar-fixed-top').hide()
  var containerHeight = $('.top-frame').height()
  $(document).scroll(function(){
    if($(document).scrollTop() > containerHeight)
      $('.navbar-fixed-top').fadeIn(300);
    else
      $('.navbar-fixed-top').fadeOut(300)
  })
  if( ($(document).width() > 767) && parseInt($('#about-text').height()) > 600 ){
    $('.about-image').css('margin-top', 
      parseInt($('#about-title').outerHeight(true))+parseInt($('#about-tab').outerHeight())
    )
  }
  $('#faq-tab a').click(function (e) {
    e.preventDefault()
    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
    $(this).tab('show')
  })
  $(function() {
    $('.scrollTo').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-60
          }, 1000);
          return false;
        }
      }
    });
  });
})