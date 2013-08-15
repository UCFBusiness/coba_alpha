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

require([], function () {
    
    var width = parseInt($(this).width());

    if (width < 481) // load mobile scripts
        require(['dmenu','easing'], function () {
            //alert(width + ' - mobile');

            //-- 1 -----------------------
            $('.dl-menuwrapper').dlmenu({ animationClasses: { classin: 'dl-animate-in-3', classout: 'dl-animate-out-3'} });
        });

    if ((width > 480) && (width < 1025)) // load tablet scripts
        require(['dmenu','libs/loadMobileCss'], function () {
            //alert(width + " - tablet");

            //-- 1 -----------------------
            //$('nav#main_menu').mmenu();
            //-- 1 -----------------------
            $('.dl-menuwrapper').dlmenu({ animationClasses: { classin: 'dl-animate-in-1', classout: 'dl-animate-out-1'} });
        });

    if (width > 1024) // load desktop scripts
        require(['dmenu','easing','sticky'], function () {
            //alert(width + " - desktop");
            
            //-- 1 -----------------------
            $('.dl-menuwrapper').dlmenu({ animationClasses: { classin: 'dl-animate-in-1', classout: 'dl-animate-out-1'} });
        });
});