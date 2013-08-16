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
    
    //-- 4 -- go to linked header when link is clicked
    $('.featured nav a').bind('click',function(event){
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

            //-- 4 -- go to linked header when link is clicked
            $('ul.nav a').bind('click',function(event){
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500,'easeInOutExpo');
                event.preventDefault();
            });

        });

    if ((width > 480) && (width < 1025)) // load tablet scripts
        require(['libs/loadMobileCss'], function () {
            //alert(width + " - tablet");
            
            //-- Menu3 -----------------------
            $('.dl-menuwrapper').dlmenu({ animationClasses: { classin: 'dl-animate-in-3', classout: 'dl-animate-out-3'} });
            //-- 1 -----------------------
            //$('nav#main_menu').mmenu();

            //-- 4 -- go to linked header when link is clicked
            $('ul.nav a').bind('click',function(event){
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500,'easeInOutExpo');
                event.preventDefault();
            });

        });

    if (width > 1024) // load desktop scripts
        require(['sticky'], function () {
            //alert(width + " - desktop");
            
            //-- Menu1 -----------------------
            $('.dl-menuwrapper').dlmenu({ animationClasses: { classin: 'dl-animate-in-1', classout: 'dl-animate-out-1'} });
            
            //-- Sticky ---------------------  
            $(".featured").stick_in_parent();

        });
});