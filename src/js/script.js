$(document).ready(function () {

    $('input[name=phone').mask("+7 (999) 999-99-99");

    $('.hamburger').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('hamburger_active');
        return;
    });

    $('.hamburger').click(function () {
        if ($(".active__menu").is(":visible") == true) {
            $('.active__menu').hide();
            $('.header').removeClass("slick_active")
        } else {
            $('.active__menu').show();
            $(".header").addClass("slick_active")
        }
    });

    $('.close_navbar').on('click', function () {
        $('.active__menu').fadeOut();
    });

    $('.ScrollTop').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
        return false;
    });

    $('[data-modal=concrete').on('click', function () {
        $('.product-range__concrete').css("color", "#EFAA00").css("border-bottom", "3px solid #EFAA00");
        $('#Concrete').fadeIn();
        $('#Block').fadeOut();
        $('.product-range__block').css("color", "#0F0E0F").css("border-bottom", "0px");
    });

    $('[data-modal=block').on('click', function () {
        $('.product-range__block').css("color", "#EFAA00").css("border-bottom", "3px solid #EFAA00");;
        $('#Block').fadeIn();
        $('#Concrete').fadeOut();
        $('.product-range__concrete').css("color", "#0F0E0F").css("border-bottom", "0px");
    });

    $('.last-news__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img class="last-news__slider-arrow last-news__slider-arrow-left" src="img/arrow-left.svg" alt="arrows-left">',
        nextArrow: '<img class="last-news__slider-arrow last-news__slider-arrow-right" src="img/arrow-right.svg" alt="arrows-right">',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: false,
                    nextArrow: false,
                }
            }
        ]
    });
});


