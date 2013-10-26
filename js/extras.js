$( function() {
  $('.navbar-fixed-top').hide()
  var containerHeight = $('.top-frame').height()
  $(document).scroll(function(){
    if($(document).scrollTop() > containerHeight)
      $('.navbar-fixed-top').show()
    else
      $('.navbar-fixed-top').hide()
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
})