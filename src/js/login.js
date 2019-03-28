var quickLoaded = false;

$(function() {
    $(".accessibilityOption").attr("tabindex", "-1");

    $(".bumperLoaderAnimation").hide();

    // 10px added to width to fix sizing issues on Microsoft Edge.
    $(".bumperLoaderAnimation").css("width", $(".bumper").width() + 50);
    $(".bumperLoaderAnimation").css("height", $(".bumper").height() + 40);

    setInterval(function() {
        $(".bumperLoaderAnimation").css("transition", "unset");
        $(".bumperLoaderAnimation").css("top", $(".bumper").offset().top - $(".bumper").width() - 40);
        $(".bumperLoaderAnimation").css("left", $(".bumper").offset().left - $(".bumper").height() - 40);
    }, 2000);

    setTimeout(function() {
        setInterval(function() {
            $(".bumperLoaderAnimation").css("transition", "1s");
            $(".bumperLoaderAnimation").css("top", $(".bumper").offset().top + $(".bumper").width());
            $(".bumperLoaderAnimation").css("left", $(".bumper").offset().left + $(".bumper").height());
        }, 2000);
    }, 1000);

    setTimeout(function() {
        if (!quickLoaded) {
            $(".bumperLoaderAnimation").show();
        }
    }, 2000);
});

function switchLoginItem(mode) {
    $(".loginItem").fadeOut(500);

    setTimeout(function() {
        $(".loginItem." + mode).fadeIn(500);
    }, 500);
}

function loaded() {
    // Stop bumperLoaderAnimation from showing if loaded before 2000ms.
    quickLoaded = true;

    $(".bumperLoaderAnimation").fadeOut(1000);
    $(".accessibilityOptionsButton").show();

    setTimeout(function() {
        $(".accessibilityOptionsButton").css("bottom", "-5px");
        $(".copyrightInformation").fadeIn(500);
    }, 250);

    setTimeout(function() {
        $(".bumperContainer").css("top", "10vh");
    }, 1000);

    setTimeout(function() {
        $(".loginItem.login").fadeIn(500);
        $("#username").focus();
    }, 1500);
}

setTimeout(function() {
    loaded();
}, 5000);