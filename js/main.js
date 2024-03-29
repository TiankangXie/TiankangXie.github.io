$(document).ready(function() {

    // setInterval ('cursorAnimation()', 1000);
    captionEl = $('#caption');
    /* Scroll hire me button to contact page */
    $('.hire-me').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    /* For Bootstrap current state on portfolio sorting */

    $('ul.nav-pills li a').click(function(e) {
        $('ul.nav-pills li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })

    /* portfolio mixitup */

    $(window).load(function() {
        var $container = $('.grid-wrapper');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.grid-controls li a').click(function() {
            $('.grid-controls .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    });


    /* Magnific Popup */
    // $('.grid-wrapper').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });


    /* Sticky menu */
    $(".navbar").sticky({
        topSpacing: 0
    });


    /* Scroll spy and scroll filter */
    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });

    /* Charts*/

    $('.chart').waypoint(function() {
        $(this).easyPieChart({
            barColor: '#3498db',
            size: '150',
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });


    /* VEGAS Home Slider */

	    $('#page-welcome').vegas({
        slides: [
            { src: 'img/slider/03.jpg' },
            { src: 'img/slider/03.jpg' },
            { src: 'img/slider/03.jpg' },
			{ src: 'img/slider/03.jpg' }
        ],
    overlay: true
});

    $("#vegas-next").click(function() {
        $('#page-welcome').vegas('next');
    });
    $("#vegas-prev").click(function() {
       $('#page-welcome').vegas('previous');
    });

    $("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "flipInX",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});

/*$('#resumeText').hide();

$('#resumeBtn').hover(function() {
    $('#testText').fadeIn(500);
});*/

/*$("#resumeBtn").on({
    mouseleave: function() {
        $('#resumeText').fadeOut(500);
    },
    mouseenter: function() {
        $('#resumeText').fadeIn(500);
    }
});
*/

/*    var glow = $('.confirm_selection');
setInterval(function(){
    glow.hasClass('glow') ? glow.removeClass('glow') : glow.addClass('glow');
}, 5000); */
});
