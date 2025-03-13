$(document).ready(function () {
    function checkScroll() {
        $(".testimonial_2, .services_div1, .contact_div2").each(function () {
            var scrollPos = $(window).scrollTop();
            var sectionOffset = $(this).offset().top - $(window).height() + 100;

            if (scrollPos > sectionOffset && !$(this).hasClass("animated")) {
                $(this).addClass("animated").animate({
                    opacity: 1,
                    top: "-75px"
                }, 1000);
            }
        });

        $(".testimonial_grid, .services_grid").each(function () {
            var scrollPos = $(window).scrollTop();
            var sectionOffset = $(this).offset().top - $(window).height() + 100;

            if (scrollPos > sectionOffset && !$(this).hasClass("animated")) {
                $(this).addClass("animated").animate({
                    opacity: 1,
                    bottom: "30px"
                }, 1000);
            }
        });

        $("footer").each(function () {
            var scrollPos = $(window).scrollTop();
            var sectionOffset = $(this).offset().top - $(window).height() + 100;

            if (scrollPos > sectionOffset && !$(this).hasClass("animated")) {
                $(this).addClass("animated").animate({
                    opacity: 1,
                    top: "0px"
                }, 1000);
            }
        });

        $(".booking_form").each(function () {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > elementTop + 50) {
                $(this).addClass("visible").css({
                    transform: "scale(1)",
                    opacity: 1
                });
            }
        });
    }

    $(window).on("scroll", checkScroll);
    checkScroll();
});

