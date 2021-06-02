$(function() {

    let nav = $("#menu");
    let navToggle = $("#navToggle");
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();


    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    })

    /*Fixed Header */
    checkScroll(scrollPos, introH);


    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();


        checkScroll(scrollPos, introH);


    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    /*Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset + 10
        }, 1000);
    });

});