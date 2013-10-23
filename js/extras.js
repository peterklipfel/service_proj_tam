$( function() {
  $('.navbar-fixed-top').hide()
  var containerHeight = $('.top-frame').height()
  console.log(containerHeight)
  $(document).scroll(function(){
    if($(document).scrollTop() > containerHeight)
      $('.navbar-fixed-top').show()
    else
      $('.navbar-fixed-top').hide()
  })
})