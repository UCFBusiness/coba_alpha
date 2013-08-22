require.config({
    baseUrl: './scripts',
    waitSeconds: 10,
    paths: {
        'easing': 'plugins/jquery.easing.1.3',
        'sticky': 'plugins/jquery.sticky-kit.min',
        'dmenu': 'plugins/jquery.dlmenu',
        'mmenu': 'plugins/jquery.mmenu.min'
    }
});

require(['dmenu','easing'], function () {
    
    // On PageLoad...


    screenSizeLabel($(this).width());

    //-- 4 -- go to linked header when link is clicked
    $('.featured nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        event.preventDefault();
    });

    $('ul.nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        event.preventDefault();
    });

    var width = parseInt($(this).width());

    if (width < 481) // load mobile scripts
        require([], function () {
            //alert(width + ' - mobile');
            //-- Menu3 -----------------------
            $('.dl-menuwrapper').dlmenu({ animationClasses: { classin: 'dl-animate-in-3', classout: 'dl-animate-out-3'} });
        });

    if ((width > 480) && (width < 1025)) // load tablet scripts
        require(['libs/loadMobileCss'], function () {
            //alert(width + " - tablet");
            //-- Menu3 -----------------------
            $('.dl-menuwrapper').dlmenu({ animationClasses: { classin: 'dl-animate-in-3', classout: 'dl-animate-out-3'} });
            
            //-- 1 -----------------------
            //$('nav#main_menu').mmenu();
        });

    if (width > 1024) // load desktop scripts
        require(['sticky'], function () {
            //alert(width + " - desktop");
            //-- Menu1 -----------------------
            $('.dl-menuwrapper').dlmenu({ animationClasses: { classin: 'dl-animate-in-1', classout: 'dl-animate-out-1'} });
            
            //-- Sticky ---------------------  
            //$(".featured").stick_in_parent();

            $("#aside").stick_in_parent()
                .on("sticky_kit:stick", function(e) {
                    //console.log("has stuck!", e.target);
                })
                .on("sticky_kit:unstick", function(e) {
                    //console.log("has unstuck!", e.target);
                });

        });

    //-----------------------


    // On PageResize...


    $(window).resize(function () {
        screenSizeLabel($(this).width());
    });

    function screenSizeLabel(width) {
        width = parseInt(width);

        if (width < 481) // apply mobile scripts
        $("#message").html(width + " - mobile");

        if ((width > 480) && (width < 1025)) // apply tablet scripts
        $("#message").html(width + " - tablet");

        if (width > 1024) // apply desktop scripts
        $("#message").html(width + " - desktop");
    }

    //-----------------------
});