var isTeacher = false;

function openMenu() {
    $(".menu").fadeIn(500);
    $(".menuBackground").fadeIn(1000);
}

function closeMenu() {
    if ($(window).width() <= 700) {
        $(".menu").fadeOut(500);
        $(".menuBackground").fadeOut(1000);
    }
}

function showTooltip(element, text) {
    $(".menuTooltip").css("top", element.offset().top);

    $(".menuTooltip").text(text);

    $(".menuTooltip").stop().fadeIn(250);
}

function hideTooltip() {
    $(".menuTooltip").stop().fadeOut(250);
}

$(function() {
    $(".menuItem").mouseenter(function() {
        showTooltip($(this), $(this).attr("tooltip"));
    });

    $(".menuItem").mouseleave(function() {
        hideTooltip();
    });

    if (isTeacher) {
        $(".teacher").show();
    } else {
        $(".pupil").show();
    }

    setTimeout(function() {
        $(".content").css("transition", "2s font-size");
    }, 250);
});