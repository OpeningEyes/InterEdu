function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

function changeOverlay(mode) {
    var modes = ["rgba(255, 255, 255, 0)", "rgba(0, 255, 0, 0.3)", "rgba(255, 255, 0, 0.3)", "rgba(0, 0, 255, 0.3)", "rgba(255, 0, 0, 0.3)"];

    $(".accessibilityOverlay").css("background-color", modes[mode]);
}

function changeTextSize(mode) {
    var modes = ["16px", "20px", "24px"];

    $("body, input, button").css("font-size", modes[mode]);
}

$(function() {
    if (getURLParameter("overlay") != null) {
        changeOverlay(getURLParameter("overlay"));
    }

    if (getURLParameter("textsize") != null) {
        changeTextSize(getURLParameter("textsize"));
    }
});