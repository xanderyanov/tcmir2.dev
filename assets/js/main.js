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

  if ($("#noUiSlider1").length) {
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
      //код ниже убирает дробные нули
      format: {
        from: function (value) {
          return parseInt(value);
        },
        to: function (value) {
          return parseInt(value);
        },
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
  }
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
  if ($(".tovarPage__slider").length) {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 5,
      loop: false,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 5,
      slidesPerView: 1,
      loop: false,
      effect: "slide",
      navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
    // if($(".gallery-top .swiper-slide2").length == 1) {
    //   $('.swiper-pagination').addClass( "disabled" );
    // }
  }

  if ($(".tovarPage__slider2").length) {
    // if ($(".gallery-top-v .swiper-slide2").length == 1) {
    //   $(".swiper-pagination").addClass("disabled");
    //   $(".swiper-button-nextV").hide();
    //   $(".swiper-button-prevV").hide();
    //   $(".gallery-thumbs-v").hide();
    // }

    var galleryThumbs = new Swiper(".gallery-thumbs-v", {
      spaceBetween: 5,
      loop: false,
      direction: "vertical",
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      autoHeight: false,
    });
    var galleryTop = new Swiper(".gallery-top-v", {
      spaceBetween: 0,
      slidesPerView: 1,
      loop: false,
      effect: "slide",
      navigation: {
        nextEl: ".swiper-button-nextV",
        prevEl: ".swiper-button-prevV",
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }

  // var number = $(".number");
  // number.each(function () {
  //   $(".minus").click(function () {
  //     var $input = $(this).parent().find("input");
  //     var count = parseInt($input.val()) - 1;
  //     count = count < 1 ? 1 : count;
  //     $input.val(count);
  //     $input.change();
  //     console.log($input.val());
  //     return false;
  //   });
  //   $(".plus").click(function () {
  //     var $input = $(this).parent().find("input");
  //     $input.val(parseInt($input.val()) + 1);
  //     $input.change();
  //     console.log($input.val());
  //     return false;
  //   });
  // });

  $(".minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  $(".tovar__addToCart").on("click", function (e) {
    e.preventDefault(); //при верстке ставить - в modx убирать, а то корзина не суммируется

    if ($(".site__center").width() > 1024) {
      var cart = $(".miniCart__area_desktop");
    } else {
      var cart = $(".miniCart__area_mobile");
    }

    var imgtodrag = $(this).closest(".tovarPage__top").find(".swiper-slide-active img");

    // console.log(cart.offset().top);

    if (imgtodrag) {
      var imgclone = imgtodrag
        .clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left,
        })
        .css({
          opacity: "0.5",
          position: "absolute",
          height: "400px",
          width: "300px",
          "z-index": "9999",
        })
        .appendTo($("body"))
        .animate(
          {
            top: cart.offset().top + 10,
            left: cart.offset().left + 10,
            width: 75,
            height: 75,
          },
          1000
        );

      imgclone.animate(
        {
          width: 0,
          height: 0,
        },
        function () {
          $(this).detach();
        }
      );
    }
  });

  $(".tovarCard__buy").on("click", function (e) {
    e.preventDefault(); //при верстке ставить - в modx убирать, а то корзина не суммируется

    if ($(".site__center").width() > 1024) {
      var cart = $(".miniCart__area_desktop");
    } else {
      var cart = $(".miniCart__area_mobile");
    }

    var imgtodrag = $(this).closest(".tovarCard__area").find(".tovarCard__img img");

    // console.log(cart.offset().top);

    if (imgtodrag) {
      var imgclone = imgtodrag
        .clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left,
        })
        .css({
          opacity: "0.5",
          position: "absolute",
          height: "400px",
          width: "300px",
          "z-index": "9999",
        })
        .appendTo($("body"))
        .animate(
          {
            top: cart.offset().top + 10,
            left: cart.offset().left + 10,
            width: 75,
            height: 75,
          },
          1000
        );

      imgclone.animate(
        {
          width: 0,
          height: 0,
        },
        function () {
          $(this).detach();
        }
      );
    }
  });

  if ($(".filter__checkboxColor").length) {
    $(".checkboxColor__item").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("checked")) {
        $(this).removeClass("checked");
        $(this).children("input").removeAttr("checked");
      } else {
        $(this).addClass("checked");
        $(this).children("input").attr("checked", "checked");
      }
    });
    $(".filter__checkboxColorReset").click(function (e) {
      console.log("сброс фильтров");
      e.preventDefault();
      $(this).closest(".filter").find("input[type=checkbox]").removeAttr("checked");
      $(this).closest(".filter").find(".checkboxColor__item").removeClass("checked");
    });
  }

  $(".content table").wrap('<div class="table_outer"></div>');
  //
  //
  //
  //
  //
  //
  // Скрипт добавления в избранное через localstorage
  var favorites = JSON.parse(localStorage.getItem("myFavorites")) || [];
  if (favorites.length) {
    console.log("есть записи");
    $(".topFavBtn_notFav").hide();
    $(".topFavBtn_yesFav").css("display", "flex");
    // console.log(favorites);
    favorites.forEach(function (entry) {
      // console.log(entry);
      $("#" + entry).addClass("inFav");
      $("#" + entry)
        .find(".tovarCard__fav")
        .addClass("inFav");
      $("#" + entry)
        .find(".tovarCard__fav")
        .children(".favOff")
        .hide();
      $("#" + entry)
        .find(".tovarCard__fav")
        .children(".favOn")
        .show();

      $(".topFavBtn").addClass("favLinkReady");
    });
  } else {
    console.log("нет записей");
  }
  $(".tovarCard__fav").on("click", function (e) {
    e.preventDefault();
    var value = $(this).closest(".tovarCard__area").attr("id");

    if ($(this).hasClass("inFav")) {
      $(this).removeClass("inFav");
      $(this).children(".favOff").show();
      $(this).children(".favOn").hide();
      // favorites = favorites.filter((val) => val !== "value");
      var index = favorites.indexOf(value);
      if (index >= 0) {
        favorites.splice(index, 1);
      }
    } else {
      $(this).addClass("inFav");
      $(this).children(".favOff").hide();
      $(this).children(".favOn").show();
      favorites.push(value);
    }

    console.log(value);
    console.log(favorites);

    var serialFavorites = JSON.stringify(favorites);

    localStorage.setItem("myFavorites", serialFavorites);

    if (favorites.length) {
      $(".topFavBtn_notFav").hide();
      $(".topFavBtn_yesFav").css("display", "flex");
    } else {
      $(".topFavBtn_notFav").css("display", "flex");
      $(".topFavBtn_yesFav").hide();
    }
  });

  $(".topFavBtn_yesFav").click(function () {
    console.log("переход на страницу избранного");
    console.log(favorites);
    // $(location).attr("href", "file:///D:/OSPanel/domains/tcmir2.dev/category/1");
  });
});
