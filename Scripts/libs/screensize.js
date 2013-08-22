define(function (width, height) {

    if (width < 480) // apply mobile scripts
        $("#message").html(width + " x " + height + " - mobile");

    if ((width > 480) && (width < 1025)) // apply tablet scripts
        $("#message").html(width + " x " + height + " - tablet");

    if (width > 1024) // apply desktop scripts
        $("#message").html(width + " x " + height + " - desktop");

})