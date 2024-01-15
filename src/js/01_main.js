$(document).ready(function() {

    var reviewSlider = $(".works-slider").lightSlider({
        item: 2,
        pager: false,
        autoWidth: false,
        slideMargin: 10,
        loop: true,
        controls: false,
        responsive: [{
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
    $('#goToPrevSlideAbout').on('click', function() {
        reviewSlider.goToPrevSlide();
    });
    $('#goToNextSlideAbout').on('click', function() {
        reviewSlider.goToNextSlide();
    });
})