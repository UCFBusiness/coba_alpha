define(function () {

    //var link = document.createElement('link');
    //link.type = 'text/css';
    //link.rel = 'stylesheet';
    //link.href = 'content/styles/mobile.css';
    //document.getElementsByTagName('head')[0].appendChild(link);

    //document.getElementsByTagName('head')[0].insertBefore(el, head.firstChild);

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
        require(['sticky','mobilecss'], function () {
            //alert(width + " - tablet");

            //-- screensize ---------------------
            $("#message").html(width + " x " + height + " - tablet");
        });

    if (width > 1024) // load desktop scripts
        require(['sticky'], function () {
            //alert(width + " - desktop");

            //-- screensize ---------------------
            $("#message").html(width + " x " + height + " - desktop");
        });
})