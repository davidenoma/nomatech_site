(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        var teamslider = $('.testimonial-group');
        /*==========  Testimonial  ==========*/
        teamslider.owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            autoplay: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                700: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        // /*==========  wow  ==========*/
        new WOW().init();
        /*==========  counterUp  ==========*/
        $('.counter1').counterUp({
            delay: 100,
            time: 3000
        });
        /*========== Responsive Menu  ==========*/
        $('#mobilemenu').slicknav({
            prependTo: '#responsive-menu'
        });
        /*========== scroll to top  ==========*/
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn(200);
            } else {
                $('.scroll-top').fadeOut(200);
            }
        });
        $('.scroll-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });
        /*==========  isotop  ==========*/
        jQuery(window).load(function () {
            /*========== Project Grid  ==========*/
            var $grid = $('.project-grid').isotope({});
            /*========== Project Filter  ==========*/
            $('.project-filter').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            /*========== Project Active  ==========*/
            $('.project-filter').on('click', 'li', function () {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
            });
        });
    });
})(jQuery);