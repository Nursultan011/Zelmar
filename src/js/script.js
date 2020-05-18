$(document).ready(function(){

    $('input[name=phone').mask("+7 (999) 999-99-99");

    $('.hamburger').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('hamburger_active');
        return;
    });

    $('.hamburger').click(function(){
        if ($(".active__menu").is(":visible") == true) {
            $('.active__menu').hide();
            $('.header').removeClass("slick_active")
        } else {
            $('.active__menu').show();
            $(".header").addClass("slick_active")
        }
    });

    $('.close_navbar').on('click', function(){
        $('.active__menu').fadeOut();
    });

    $('.ScrollTop').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500);
        return false;
    });
});

