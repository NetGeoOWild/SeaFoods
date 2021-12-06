$(function () {
    $('.header-slider').slick({
        arrow: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img class="arrow__img" src="images/prev-arrow.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="arrow__img" src="images/next-arrow.svg" alt="next"></button>',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]
    });

    $('.product__name').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        centerMode: true,
        prevArrow: '<button type="button" class="product-prev"><img class="arrow__img" src="images/prevBlue.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="product-next"><img class="arrow__img" src="images/nextBlue.svg" alt="next"></button>',
        responsive: [
            {
                breakpoint: 891,
                settings: {
                    dots: true,
                    arrows: false,
                    vertical: false,
                    centerMode: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 471,
                settings: {
                    dots: true,
                    arrows: false,
                    vertical: false,
                    centerMode: false,
                    slidesToShow: 1,
                }
            },

        ]
    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        dots: false,
        arrows: false,
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });
});