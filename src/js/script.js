var overlay = 0;
var textSize = 0;

var firebaseConfiguration = {
    apiKey: "AIzaSyA2h0KK_oLDDmsV_aTM0xKMMKpeR9ZmLE8",
    authDomain: "oe-interedu.firebaseapp.com",
    databaseURL: "https://oe-interedu.firebaseio.com",
    projectId: "oe-interedu",
    storageBucket: "oe-interedu.appspot.com",
    messagingSenderId: "868661937142",
    appId: "1:868661937142:web:f8004ea071496a281afdd7"
};

function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

function openAccessibilityOptions() {
    $(".accessibilityOptionsMenu").css("display", "unset");

    setTimeout(function() {
        $(".accessibilityOptionsButton").css("bottom", "120px");
        $(".accessibilityOptionsMenu").css("bottom", "10px");
        $(".accessibilityOption").attr("tabindex", "0");
    }, 250);
}

function closeAccessibilityOptions() {
    $(".accessibilityOptionsButton").css("bottom", "-5px");
    $(".accessibilityOptionsMenu").css("bottom", "-120px");
    $(".accessibilityOption").attr("tabindex", "-1");

    setTimeout(function() {
        $(".accessibilityOptionsMenu").css("display", "none");
    }, 750);
}

function changeOverlay(mode) {
    var modes = ["rgba(255, 255, 255, 0)", "rgba(0, 255, 0, 0.3)", "rgba(255, 255, 0, 0.3)", "rgba(0, 0, 255, 0.3)", "rgba(255, 0, 0, 0.3)"];

    overlay = mode;
    $(".accessibilityOverlay").css("background-color", modes[mode]);
}

function changeTextSize(mode) {
    var modes = ["16px", "20px", "24px"];

    textSize = mode;
    $("body, input, button").css("font-size", modes[mode]);
}

function navigateTo(url, replaceHistory = false) {
    // Used instead of linking to normal pages so that accessibility is available on other pages.

    var newLocation = "";

    if (url.includes("?")) {
        newLocation = url + "&overlay=" + overlay + "&textsize=" + textSize;
    } else {
        newLocation = url + "?overlay=" + overlay + "&textsize=" + textSize;
    }

    if (replaceHistory) {
        window.location.replace(newLocation);
    } else {
        window.location.href = newLocation;
    }
}

$(function() {
    if (getURLParameter("overlay") != null) {
        changeOverlay(getURLParameter("overlay"));
    }

    if (getURLParameter("textsize") != null) {
        changeTextSize(getURLParameter("textsize"));
    }

    setTimeout(function() {
        $(".accessibilityOverlay").css("transition", "2s background-color");
    }, 250);
});

firebase.initializeApp(firebaseConfiguration);