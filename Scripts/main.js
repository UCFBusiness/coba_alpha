// Logs the start of the file.
console.log( "START: main.js" );

require.config({
    baseUrl: './scripts',
    waitSeconds: 10,
    paths: {
        'dmenu': 'plugins/jquery.dlmenu',
        'mmenu': 'plugins/jquery.mmenu.min',
        'easing': 'plugins/jquery.easing.1.3',
        'sticky': 'plugins/jquery.sticky-kit.min',
        'waypoint': 'plugins/jquery.waypoints.min.js'
    }
});

require(['dmenu', 'easing'], function () {

    // On PageLoad...

    var width = parseInt($(this).width());
    var height = parseInt($(this).height());

    //----- Responsive Script Loader Sample ----------------------
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


    //------------------------------------------------


    //-- navigation menu -----------------------
    $('.dl-menuwrapper').dlmenu({ animationClasses: { classin: 'dl-animate-in-4', classout: 'dl-animate-out-4'} });
    //$('nav#main_menu').mmenu();

    //-- easing -----------------------
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

    //------------------------------------------------

    if (width < 481) // load mobile scripts
        require([], function () {

            //-- screensize ---------------------
            $("#message").html(width + " x " + height + " - mobile");

        });

    if ((width > 480) && (width < 1025)) // load tablet scripts
        require([], function () {

            //-- screensize ---------------------
            $("#message").html(width + " x " + height + " - tablet");
            
            //--resize to fit portrait-----------
            $('.main-content .section').css('min-height', height);

        });

    if (width > 1024) // load desktop scripts
        require(['sticky'], function () {

            //-- screensize ---------------------
            $("#message").html(width + " x " + height + " - desktop");

            //-- sticky ---------------------  
            $("#main_menu").stick_in_parent()
                .on("sticky_kit:stick", function (e) {
                    //console.log("has stuck!", e.target);
                })
                .on("sticky_kit:unstick", function (e) {
                    //console.log("has unstuck!", e.target);
                });

            //--resize to fit screen-----------
            $('.featured').css('min-height', height - 300);

        });


    //------------------------------------------------


    // On PageResize...

    $(window).resize(function () {

        var width = parseInt($(this).width());
        var height = parseInt($(this).height());

        //------------------------

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
                $('.featured').css('min-height', height - 300);
            });
    });

    //------------------------------------------------

    // Log that jquery was loaded into the global name-space.
    console.log("jQuery", $.fn.jquery, "loaded!");

});

// Logs the end of the file.
console.log( "END: main.js" );