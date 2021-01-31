$(function() {
    /* 모바일버튼 */
    $('.appBtn').on({
        click: function() {
            $('.bar').toggleClass('addAppbar');
            $('.mobile_nav').slideToggle(1000);
        }
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3.1,
        autoplay: {
            delay: 1000
        },
        loop: true,
        breakpoints: {
            // when window width is >= 320px
            600: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 24
            },
            // when window width is >= 640px
            900: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            900: {
                slidesPerView: 3.5,
                spaceBetween: 30
            }
        },
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    $(function() {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true

        });
    });

});