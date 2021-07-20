$(document).ready(function () {
  $('.right-faq-question header').on('click', function () {
    $(this).next().slideToggle()
    $(this).parent().toggleClass('active')
  })

  KlaviyoSubscribe.attachToForms("#signup", {
    hide_form_on_success: true,
  });

})