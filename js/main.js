$(document).ready(function () {
    $('.slider-container').slick({
        //setting-name: setting-value
        arrows: false,
        dots: true
    });

    $('.features-slider-container').slick({
        //setting-name: setting-value
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$('.carousel').carousel({
    interval: 0
});
