// Logs the start of the file.
console.log( "START: main.js" );

require.config({
    waitSeconds: 10,
    paths: {
        'dmenu': 'plugins/jquery.dlmenu',
        'fittext': 'plugins/jquery.fittext',
        'easing': 'plugins/jquery.easing.1.3',
        'sticky': 'plugins/jquery.sticky-kit.min',
        'resize': 'plugins/jquery.debouncedresize',
        'waypoint': 'plugins/jquery.waypoints.min',
        'scrollspy': 'http://scripts.bus.ucf.edu/js/libs/bootstrap-scrollspy'
    }
});

require(['dmenu', 'easing', 'resize'], function () {

    var width = parseInt($(this).width());
    var height = parseInt($(this).height());


    // On Document Ready...

    //-- navigation menu -----------------------------------
    $('.dl-menuwrapper').dlmenu({ 
        animationClasses: { 
            classin: 'dl-animate-in-2', 
            classout: 'dl-animate-out-2'
        } 
    });
    //------------------------------------------------------


    //-- section headers -----------------------------------
    //-- build header when page is first loaded
    content_buildHeaders();

    //-- update header position when window is scrolled
    $(window).scroll(content_updateHeaders).trigger("scroll");

    //-- lazy load images ----------------------------------
    $("body img").fadeTo(0, 0);
    $(window).scroll(function (d, h) {
        $('body img').each(function (i) {
            a = $(this).offset().top + $(this).height() - 400;
            b = $(window).scrollTop() + $(window).height();
            if (a < b) $(this).fadeTo(500, 1);
        })
    })
    //------------------------------------------------------

        //-- easing -------------------------------------------
    $('.featured nav a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('ul.nav a').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    //------------------------------------------------------


    //------------------------------------------------------

    if (width < 481) // load mobile scripts
        require([], function () {
            //-- screensize --------------------
            $("#message").html(width + " x " + height + " - mobile");
        });

    if ((width > 480) && (width < 1025)) // load tablet scripts
        require([], function () {
            //-- screensize --------------------
            $("#message").html(width + " x " + height + " - tablet");

            //-- resize to fit -----------------
            $('.main-content .section').css('min-height', height);
        });

    if (width > 1024) // load desktop scripts
        require(['sticky'], function () {
            //-- screensize ---------------------
            $("#message").html(width + " x " + height + " - desktop");

            //-- sticky -------------------------
            $(".featured").stick_in_parent();

            //-- resize to fit ------------------
            $('.page .index').css('min-height', height - 120);
        });
    //------------------------------------------------------


    // On PageResize...

    //-- Delayed response on resize (waits until user is done resizing the window)
    $(window).on('debouncedresize', function (event) {

        var width = parseInt($(this).width());
        var height = parseInt($(this).height());

        //-- resize header to match window size
        content_resizeHeaders();

        //------------------------------------------------------
        if (width < 481) // load mobile scripts
            require([], function () {
                //alert(width + ' - mobile');

                //-- screensize ---------------------
                $("#message").html(width + " x " + height + " - mobile");
            });

        if ((width > 480) && (width < 1025)) // load tablet scripts
            require([], function () {
                //alert(width + " - tablet");

                //-- screensize ---------------------
                $("#message").html(width + " x " + height + " - tablet");
            });

        if (width > 1024) // load desktop scripts
            require([], function () {
                //alert(width + " - desktop");

                //-- screensize ---------------------
                $("#message").html(width + " x " + height + " - desktop");

                //--resize to fit screen-----------
                $('.page .index').css('min-height', height);
            });
        //------------------------------------------------------
    })


    //-- Instant response on resize (fires while the user resizes the window)
    $(window).resize(function (event) {
        //var width = parseInt($(this).width());
        //var height = parseInt($(this).height());
    });


    //----- Responsive Script Loader Sample ----------------
    //-- 1 -- check browser width on window load
    //ScreenSizeLabel($(this).width());

    //-- 2 -- check browser width on window resize
    //$(window).resize(function () {
    //ScreenSizeLabel($(this).width());

    //var h = parseInt($(this).height());
    //$("section").css("height", h); //OR
    //$('#section').css('margin-top', (h - 620));
    //})
    //------------------------------------------------------

    // Log that jquery was loaded into the global name-space.
    console.log("jQuery", $.fn.jquery, "loaded!");

});

// Logs the end of the file.
console.log( "END: main.js" );