$( document ).ready(){
  $('.about-tab-link').click(function (e) {
    e.preventDefault();
    console.log($(this))
    $(this).tab('show');
  })
  $('.about-body').hide()
}