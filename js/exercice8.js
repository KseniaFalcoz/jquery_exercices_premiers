/*
$("ol.li").on("mouseover", function() {
    $(this).children().css("color", "red");
});*/


$(function() {
  $("ol.li").children().css({"color": "red"});  // {} pour plusieur propriorite
});
