$( function() {
  $('.navbar-fixed-top').hide()
  var containerHeight = $('.top-frame').height()
  $(document).scroll(function(){
    var top = $(document).scrollTop()
    if(top > containerHeight/1.4){ $('.navbar-fixed-top').fadeIn(300) }
    else { $('.navbar-fixed-top').fadeOut(300) }

    switch(true){
      case (top > $('#faq-section').position().top+$('#faq-section').height()/3):
        $('#nav-signup').siblings().removeClass('active')
        $('#nav-signup').addClass('active')
        console.log($('#nav-about').siblings())
        break;
      case (top > $('#faq-section').position().top):
        $('#nav-faq').siblings().removeClass('active')
        $('#nav-faq').addClass('active')
        console.log('2')
        break;
      case (top > $('#events-section').position().top):
        $('#nav-events').siblings().removeClass('active')
        $('#nav-events').addClass('active')
        console.log('3')
        break;
      case (top > $('#about-section').position().top):
        $('#nav-about').siblings().removeClass('active')
        $('#nav-about').addClass('active')
        console.log($('#nav-about').siblings())
        break;
    }
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