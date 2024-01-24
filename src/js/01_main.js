$(document).ready(function() {

    var worksSlider = $(".works-slider").lightSlider({
        item: 2,
        pager: false,
        autoWidth: false,
        slideMargin: 10,
        loop: true,
        controls: true,
        prevHtml: '<img src="img/arrow-left.svg">',
        nextHtml: '<img src="img/arrow-left.svg">',
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

    $('#goToPrevSlide').on('click', function() {
        worksSlider.goToPrevSlide();
    });
    $('#goToNextSlide').on('click', function() {
        worksSlider.goToNextSlide();
    });

     var aboutBasicSlider = $("#about-basic-slider").lightSlider({
        item: 1,
        pager: false,
        autoWidth: false,
        slideMargin: 10,
        loop: true,
        controls: true,
        prevHtml: '<img src="img/arrow-left.svg">',
        nextHtml: '<img src="img/arrow-left.svg">',
    });

    var worksSlider = $("#sert-slider").lightSlider({
        item: 4,
        pager: false,
        autoWidth: false,
        slideMargin: 10,
        loop: true,
        controls: true,
        prevHtml: '<img src="img/arrow-left.svg">',
        nextHtml: '<img src="img/arrow-left.svg">',
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

    var worksSlider = $("#clients-review").lightSlider({
        item: 2,
        pager: false,
        autoWidth: false,
        slideMargin: 10,
        loop: true,
        controls: true,
        prevHtml: '<img src="img/arrow-left.svg">',
        nextHtml: '<img src="img/arrow-left.svg">',
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

    

    
    

    $(".show-tooltip").on('click', function(e) {
        if( $(e.target).hasClass('show-tooltip')){
            $(this).siblings(".work-tooltip").addClass('active');
        }
    });
    $(".work-order-item").on('mouseleave', function(e){
        e.stopPropagation();
        if( !$(e.relatedTarget).hasClass('work-tooltip')){
            console.log(e.relatedTarget);
            $(this).find('.work-tooltip').removeClass('active');
        }else{
            return false;
        }

    })

    $('.completed .nav-item').on('click', function() {
        // $(".works-slider").lightSlider({

        // });
    });

    $(".js-phone_number").inputmask("+7(999)999-9999")

    $(".js-phone_number").keyup(function() {
        var val = $(this).val();
        regVal = /[^\d\+\(\)\-]/g;
        newval = val.replace(regVal, "");
        $(this).val(newval);
    });

    $(".js-name").keyup(function() {
        var val = $(this).val();
        regVal = /[^\D\+\(\)\-]/g;
        newval = val.replace(regVal, "");
        $(this).val(newval);
    });

    $(document).on('click', 'form button', function() {

        var formJs = $(this).closest('form');
        var name = formJs.find('input.js-name').val();
        var phone_number = formJs.find('input.js-phone_number').val();
        var email = formJs.find('input.js-mail').val();
        var re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        

        formJs.find('input').removeClass('error');
        console.log(email);
        if (name == '' || name.length < 2) {
            formJs.find('input.js-name').addClass('error');
            formJs.find('input.js-name').val('');
            return false;
        } else if (phone_number == '' || phone_number.length < 5) {
            formJs.find('input.js-phone_number').addClass('error');
            formJs.find('input.js-phone_number').val('');
            return false;
        } else if(email!==undefined){ 
            console.log('123');
            if (email == '' || !re.test(email)) {
                formJs.find('input.js-mail').addClass('error');
                formJs.find('input.js-mail').val('');
                return false;
            }
        }
        $('.modal').hide();

    });


    let inputs = document.querySelectorAll('.input__file');
    Array.prototype.forEach.call(inputs, function(input) {
        let label = input.nextElementSibling,
            labelVal = label.querySelector('.input__file-button-text').innerText;

        input.addEventListener('change', function(e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
                countFiles = this.files.length;

            if (countFiles)
                label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
            else
                label.querySelector('.input__file-button-text').innerText = labelVal;
        });
    });

    $('.to-top').on('click', function() {
        $(window).scrollTop(0);
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 5550) $('.to-top').addClass('active');
        else $('.to-top').removeClass('active');
    });

    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 150) $('.nav-head').addClass('fixed');
        else $('.nav-head').removeClass('fixed');
    });
    $('.show-services').on('click', function(){
        $(this).toggleClass('active');
        $('.main-nav').toggleClass('active');
    })

    function windowSize(){
        if ($(window).width() <= '995'){
            $('.advantage #v-pills-tab').addClass('advantage-title-slider');
            var worksSlider = $(".advantage-title-slider").lightSlider({
                item: 2,
                pager: false,
                autoWidth: true,
                slideMargin: 20,
                loop: false,
                controls: false,
                prevHtml: '<img src="img/arrow-left.svg">',
                nextHtml: '<img src="img/arrow-left.svg">',
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
        } else {
            $('.advantage #v-pills-tab').removeClass('competention-title-slider');
        }
    }

    $(window).on('load resize',windowSize);
})