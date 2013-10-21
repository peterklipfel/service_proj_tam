$( function() {
  $('.navbar-fixed-top').hide()
  var containerHeight = $('.container').height()
  $(document).scroll(function(){
    if($(document).scrollTop() > containerHeight)
      $('.navbar-fixed-top').show()
    else
      $('.navbar-fixed-top').hide()
  })
})