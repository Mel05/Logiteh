$(document).ready(function() {

    $('.header__burger, .menu__link').click(function(event) {
    $('.header__burger, .header__menu, .header__logo').toggleClass('active');
    $('body').toggleClass('lock');
    });



    /* Slider */
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:false, //адаптпция по высоте
        slidesToShow:1,
        slidesToScroll:1,
        speed:250, //скорость прокрутки
        adaptiveWeist: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
});
