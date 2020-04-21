$(function () {
  $(".catalogBtn").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".menuButton").removeClass("open");
      $(".redMenu__outer").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".menuButton").addClass("open");
      $(".redMenu__outer").slideDown(200);
      var redMenuH = $(".redMenu").outerHeight();
      console.log("redMenuH " + redMenuH);
      $(".redMenu li.rmlev1 > ul").css({ top: redMenuH, minHeight: redMenuH });
      $(".rmlev1 > a").append('<div class="whiteTab"></div>');
      $(".whiteTab").css({ height: redMenuH });
    }
  });
  //и без него работает - делал из за того, что наведение под пунктом включалось, но заменил псевдокласс на append блок
  $(".rmlev1").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );

  // отслеживание поведения меню при изменении размера экрана
  $(window).resize(function () {
    if ($(".header__area").width() > 600) {
      var redMenuH = $(".redMenu").outerHeight();
      console.log("redMenuH " + redMenuH);
      $(".redMenu li.rmlev1 > ul").css({ top: redMenuH });
      $(".whiteTab").css({ height: redMenuH });
      // ***************
      var adaptiveHeaderH = $(".adaptiveHeader").outerHeight();
      $(".adaptiveHeader__fake").css({ height: adaptiveHeaderH });
    } else {
      var redMenuH = $(".redMenu").outerHeight();
      console.log("redMenuH " + redMenuH);
      $(".redMenu li.rmlev1 > ul").css({ top: redMenuH, minHeight: redMenuH });
      $(".whiteTab").css({ height: redMenuH });
      // ***************
      var adaptiveHeaderH = $(".adaptiveHeader").outerHeight();
      $(".adaptiveHeader__fake").css({ height: adaptiveHeaderH });
    }
  });

  $(".aH__searchOnBtn").click(function () {
    $(this).toggleClass("open");
    $(".adaptiveSearch__area").slideToggle();
  });

  $(".adaptiveSearch__areaClose").click(function () {
    $(".aH__searchOnBtn").toggleClass("open");
    $(".adaptiveSearch__area").slideToggle();
  });

  // Открытие и закрытие адаптивного меню по кнопке
  $(".aHmenuBtn__areaJS").click(function (e) {
    e.preventDefault();
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $(".aHmenuBtn").removeClass("open");
      $(".adaptiveMenu__areaJS").slideUp(200);
    } else {
      $(this).addClass("open");
      $(".aHmenuBtn").addClass("open");
      $(".adaptiveMenu__areaJS").slideDown(200);
      var adaptiveMenu__titleH = $(".adaptiveMenu__title").outerHeight();
      console.log("adaptiveMenu__titleH " + adaptiveMenu__titleH);
      // Код выше показывает высоту заголовка адаптивного меню -
      // и задает отступ пунктов - код ниже
      $(".adaptiveMenu__wrapper").css({ paddingTop: adaptiveMenu__titleH });
    }
  });
  // Закрытие адаптивного меню по кнопке Close
  $(".adaptiveMenu__areaClose").click(function () {
    $(".aHmenuBtn__areaJS").removeClass("open");
    $(".aHmenuBtn").removeClass("open");
    $(".adaptiveMenu__areaJS").slideUp(200);
  });

  // создание блока заголовка дочернего меню и кнопки назад
  $(".adaptiveMenu li:has(ul)").addClass("hasInner");
  $(".adaptiveMenu li.hasInner").each(function () {
    var liTitle = $(this).children("a").text();
    $(this)
      .children("ul")
      .prepend(
        "<div class='adaptiveMenuUlTitle'><span>" +
          liTitle +
          "</span><div class='adaptiveMenuUlTitleBack'>Назад</div></div>"
      );
  });

  var x = 0;
  $(".adaptiveMenu li.hasInner > a").click(function (e) {
    e.preventDefault();
    // $(this).addClass("active");
    console.log(x);
    x = x - 100;
    console.log(x);
    $(".adaptiveMenu").animate({ left: x + "%" }, 300);
  });

  $(".adaptiveMenuUlTitleBack").click(function (e) {
    e.preventDefault();
    console.log("клик назад ");
    x = x + 100;
    console.log(x);
    $(".adaptiveMenu").animate({ left: x + "%" }, 300);
  });

  //
  //
  // ползунок одинарный
  var el;
  // $(".filter__itemRange input")
  //   .change(function () {
  //     el = $(this);
  //     el(".range1").text(el.val());
  //   })
  //   .trigger("change");

  //

  var rangeSlider = function () {
    var slider = $(".filter__itemRange"),
      range = $('.filter__itemRange input[type="range"]'),
      value = $(".range1");
    slider.each(function () {
      value.each(function () {
        var value = $(this).next().attr("value");
        $(this).html(value);
      });
      range.on("input", function () {
        $(this).prev(value).html(this.value);
      });
    });
  };
  rangeSlider();
  //
  //
  //
  //

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
      spaceBetween: 0,
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
        1140: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        321: {
          slidesPerView: 2,
          spaceBetween: 10,
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
        1140: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        920: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        321: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });
  }
});
