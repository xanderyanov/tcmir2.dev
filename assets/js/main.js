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

  if ($(".adaptiveHeader").length) {
    var adaptiveHeaderH = $(".adaptiveHeader").outerHeight();
    $(".adaptiveHeader__fake").css({ height: adaptiveHeaderH });
  }

  // отслеживание поведения меню при изменении размера экрана
  $(window).resize(function () {
    if ($(".header__area").width() > 1024) {
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
      valueBox = $(".valueBox");
    slider.each(function () {
      valueBox.each(function () {
        var value = $(this).next().attr("value");
        $(this).html(value);
      });
      range.on("input", function () {
        $(this).prev(valueBox).html(this.value);

        //далее работа с значениями - функционал весь выше
        //
        // Выводит значение активного движка - показывая, что он задает - min или max
        // var sIdx = $(this).attr("name");
        // var sIdxVal = $(this).val();
        // console.log(sIdx + "-" + sIdxVal);
        //

        var minInt = parseInt($('.filter__itemRange input[name = "min-id1"]').val());
        var maxInt = parseInt($('.filter__itemRange input[name = "max-id1"]').val());
        // .attr(attributeName, value);
        console.log("Минимальный интервал" + minInt);
        console.log("Максимальный интервал" + maxInt);

        if (minInt >= maxInt) {
          $('.filter__itemRange input[name = "min-id1"]').val(maxInt);
        }

        if (maxInt <= minInt) {
          $('.filter__itemRange input[name = "max-id1"]').val(minInt);
        }

        // Задаем значение min и max - с очень смешным эффектом - но рабочим вариантом
        // $('.filter__itemRange input[name = "min-id1"]').attr("max", maxInt);
        // $('.filter__itemRange input[name = "max-id1"]').attr("min", minInt);
        //
      });
    });
  };
  rangeSlider();

  //
  //
  var noUiSlider1 = document.getElementById("noUiSlider1");

  var marginMin = document.getElementById("slider-margin-value-min");
  var marginMax = document.getElementById("slider-margin-value-max");

  noUiSlider.create(noUiSlider1, {
    start: [100, 800],
    step: 1,
    connect: true,
    range: {
      min: 0,
      max: 1000,
    },
  });

  var marginMin = document.getElementById("slider-margin-value-min");
  var marginMax = document.getElementById("slider-margin-value-max");

  noUiSlider1.noUiSlider.on("update", function (values, handle) {
    if (handle) {
      marginMax.innerHTML = values[handle];
      console.log("Максимальный интервал" + marginMax.innerHTML);
    } else {
      marginMin.innerHTML = values[handle];
      console.log("Минимальный интервал" + marginMin.innerHTML);
    }
  });
  //
  // var Rmin = $('input[name="min-id1"]');
  // var Rmax = $('input[name="max-id1"]');

  // - выводит в консоли все дивы с их классами
  // $("div").each(function (index, value) {
  //   console.log("div" + index + ":" + $(this).attr("class"));
  // });
  //

  // var dubleRangeSlider = function () {
  //   console.log("запуск функции dubleRangeSlider");
  //   var dubleRangeSlider = $(".dubleRange");
  //   dubleRangeSlider.each(function () {
  //     var min = $(this).children(".dubleRangeMin").children('input[name="min-id1"]').attr("value");

  //     console.log(min);
  //   });
  // };

  // dubleRangeSlider();

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
