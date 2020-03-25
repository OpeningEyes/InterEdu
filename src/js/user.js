var userAbout = {};

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

function logout() {
    firebase.auth().signOut();
}

$(function() {
    $(".menuItem").mouseenter(function() {
        showTooltip($(this), $(this).attr("tooltip"));
    });

    $(".menuItem").mouseleave(function() {
        hideTooltip();
    });

    setTimeout(function() {
        $(".content").css("transition", "2s font-size");
    }, 250);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            firebase.database().ref("users/" + user.uid + "/about").on("value", function(snapshot) {
                userAbout = snapshot.val();

                $(".loading").hide();

                if (userAbout.teacher) {
                    $(".teacher").show();
                } else {
                    $(".pupil").show();
                }
            });
        } else {
            navigateTo("/src/index.html?go=" + encodeURIComponent(window.location.href), true);
        }
    });
});