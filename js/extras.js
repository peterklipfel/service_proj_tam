$('#myTab a').click(function (e) {
  e.preventDefault()
  console.log($(this))
  $(this).tab('show')
})
