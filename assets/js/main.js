$(function () {
  $(".catalogBtn").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".menuButton").removeClass("open");
      $(".adaptiveMenu__outer").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".menuButton").addClass("open");
      $(".adaptiveMenu__outer").slideDown(200);
      var adaptiveMenuH = $(".adaptiveMenu").outerHeight();
      console.log("adaptiveMenuH " + adaptiveMenuH);
      $(".adaptiveMenu li.alev1 > ul").css({ top: adaptiveMenuH });
      // $(".alev1 a").addClass("witeTab");
      // $(".alev1 > a").append('<div class="witeTab"></div>');
      // $(".witeTab").css({ height: adaptiveMenuH });
    }
  });

  // отслеживание поведения адаптивного меню при изменении размера экрана
  $(window).resize(function () {
    if ($(".header__area").width() > 600) {
      var adaptiveMenuH = $(".adaptiveMenu").outerHeight();
      console.log("adaptiveMenuH " + adaptiveMenuH);
      $(".adaptiveMenu li.alev1 > ul").css({ top: adaptiveMenuH });
      $(".adaptiveMenu li.alev1 > a:before").css({ height: adaptiveMenuH });
    } else {
      var adaptiveMenuH = $(".adaptiveMenu").outerHeight();
      console.log("adaptiveMenuH " + adaptiveMenuH);
      $(".adaptiveMenu li.alev1 > ul").css({ top: adaptiveMenuH });
      $(".witeTab").css({ height: adaptiveMenuH });
    }
  });

  $(".alev1").hover(
    function () {
      $(this).addClass("hover");
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );

  if ($(".swiper-container1").length) {
    var mySwiper1 = new Swiper(".swiper-container1", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination1",
        type: "bullets",
        dynamicBullets: false,
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },
      on: {
        init: function () {
          console.log("swiper initialized");
          $(".swiper-slide").children(".swiper__cadr").removeClass("bounceInRight").fadeOut(500);

          setTimeout(function () {
            $(".swiper-slide-active")
              .children(".swiper__cadr")
              .fadeIn(500)
              .addClass("animated")
              .addClass("bounceInRight");
          }, 500);
        },
        slideChange: function () {
          $(".swiper-slide").children(".swiper__cadr").removeClass("bounceInRight").fadeOut(500);

          setTimeout(function () {
            $(".swiper-slide-active")
              .children(".swiper__cadr")
              .fadeIn(500)
              .addClass("animated")
              .addClass("bounceInRight");
          }, 500);
        },
      },
    });
  }
  if ($(".carousel__container1").length) {
    var carousel = new Swiper(".carousel__container1", {
      slidesPerView: 1,
      spaceBetween: 15,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".carousel__btnNext1",
        prevEl: ".carousel__btnPrev1",
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        920: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        320: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }
  if ($(".carousel__container2").length) {
    var carousel = new Swiper(".carousel__container2", {
      slidesPerView: 1,
      spaceBetween: 15,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".carousel__btnNext2",
        prevEl: ".carousel__btnPrev2",
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        920: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        320: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }
});
