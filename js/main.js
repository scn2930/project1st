$(document).ready(function() {
    $(".game_img").off("click").on("click", function() {
        if ($(".game_inner").hasClass("active")) {
            $(".game_inner").removeClass("active");
        }
        else {
            $(".game_inner").addClass("active");
        }
    });
 });