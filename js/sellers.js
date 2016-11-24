jQuery(document).ready(function() {

    var hash = window.location.hash.substring(1);

    $(window).on('hashchange', function() {

        hash = window.location.hash.substring(1);
        $(".state").css('display', 'none');

        if (hash !== "" || typeof hash !== "undefined") {

            console.log(hash);
            $("#" + hash).css('display', 'block');
        }

    });

    if (hash === "" || typeof hash === "undefined") {
        $("#saopaulo").css('display', 'block');
    } else {
        $("#" + hash).css('display', 'block');
    }

});