function changeOverlay(mode) {
    var modes = ["rgba(255, 255, 255, 0)", "rgba(0, 255, 0, 0.3)", "rgba(255, 255, 0, 0.3)", "rgba(0, 0, 255, 0.3)", "rgba(255, 0, 0, 0.3)"];

    $(".accessibilityOverlay").css("background-color", modes[mode]);
}