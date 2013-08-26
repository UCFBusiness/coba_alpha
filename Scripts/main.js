// Logs the start of the file.
console.log( "START: main.js" );

require.config({
    baseUrl: './scripts',
    waitSeconds: 10,
    paths: {
        'dmenu': 'plugins/jquery.dlmenu',
        'mmenu': 'plugins/jquery.mmenu.min',
        'easing': 'plugins/jquery.easing.1.3',
        'sticky': 'plugins/jquery.sticky-kit.min'
    }
});

require(['dmenu', 'easing'], function () {

    // On PageLoad...

    var width = parseInt($(this).width());
    var height = parseInt($(this).height());


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
            var msg = width + " x " + height + " - mobile";
            $("#message").html(msg);
            console.log(msg);

        });

    if ((width > 480) && (width < 1025)) // load tablet scripts
        require([], function () {

            //-- screensize ---------------------
            var msg = width + " x " + height + " - tablet";
            $("#message").html(msg);
            console.log(msg);

            $('.main-content section').css('min-height', height);

        });

    if (width > 1024) // load desktop scripts
        require(['sticky'], function () {

            //-- screensize ---------------------
            var msg = width + " x " + height + " - desktop";
            $("#message").html(msg);
            console.log(msg);

            //-- sticky ---------------------  
            $("#aside").stick_in_parent()
                .on("sticky_kit:stick", function (e) {
                    //console.log("has stuck!", e.target);
                })
                .on("sticky_kit:unstick", function (e) {
                    //console.log("has unstuck!", e.target);
                });

            $('section.index').css('min-height', height);

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

                $('section.index').css('min-height', height);
            });
    });

    //------------------------------------------------

    // Log that jquery was loaded into the global name-space.
    console.log("jQuery", $.fn.jquery, "loaded!");

});

// Logs the end of the file.
console.log( "END: main.js" );