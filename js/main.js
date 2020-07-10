(function ($) {
  "use strict";

  //parallax effect
  let bg = document.getElementById("home-bg");
  let text = document.getElementById("home-text");

  window.addEventListener('scroll', function () {
    var parallax = window.scrollY;

    bg.style.top = parallax * 0.4 + 'px';
    text.style.top = parallax * 0.3 + 'px';
  })

  //wow js
  new WOW().init();

  $(".main-nav").hide();

  // stycky navbar
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop()
    if (scroll > 20) {
      $('.header-top').addClass('active');
      // $(".main-nav").show();
    } else {
      $('.header-top').removeClass('active');
      // $(".main-nav").hide();
    }
  })

  // $(window).on("load", function () {

  // });



})(jQuery);