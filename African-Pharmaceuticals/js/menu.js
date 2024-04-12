// var $j = jQuery.noConflict();
 
$(document).ready(function() {
    $(".burger-nav").on("click", function() {
        $(".bottom_nav ul").toggleClass("open");
    });
});