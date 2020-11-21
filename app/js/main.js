$(function () {
    $('.header__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 1500,
    });

    $('.news__slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 1150,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });

    $(".header__menu-toggle").on('click', function () {
        $(".header__menu-list").toggleClass("open");
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest('.header__menu-toggle').length) {
            return;
        }
        $(".header__menu-list").removeClass("open");
    });

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    var navBarClassList = document.querySelector('.header__menu-list').classList;

    window.addEventListener('resize', function (event) {
        if (event.target.outerWidth > 1130 && navBarClassList.contains('open')) {
            navBarClassList.remove('open');
        }
    });
});












