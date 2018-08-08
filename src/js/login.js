var quickLoaded = false;

$(function() {
    $(".bumperLoaderAnimation").hide();

    $(".bumperLoaderAnimation").css("width", $(".bumper").width() + 40);
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

function loaded() {
    quickLoaded = true;

    $(".bumperLoaderAnimation").fadeOut(1000);
    $(".accessibilityOptionsButton").show();
    $(".accessibilityOptionsButton").css("bottom", "-5px");
    $(".accessibilityOptionsButton").attr("tabindex", "0");
    $(".copyrightInformation").fadeIn(500);

    setTimeout(function() {
        $(".bumperContainer").css("top", "10vh");
    }, 1000);

    setTimeout(function() {
        $(".loginItem").fadeIn(500);
        $("#username").focus();
    }, 1500);
}

setTimeout(function() {
    loaded();
}, 5000);

function openAccessibilityOptions() {
    $(".accessibilityOptionsButton").css("bottom", "120px");
    $(".accessibilityOptionsMenu").css("bottom", "10px");
}

function closeAccessibilityOptions() {
    $(".accessibilityOptionsButton").css("bottom", "-5px");
    $(".accessibilityOptionsMenu").css("bottom", "-120px");
}