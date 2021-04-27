$("#texte").on("mouseover", function() {  // $("#texte") = $("p") maiq il faut que css soit identique soit p, soit id
    $(this).css("font-family", "courier");
  });

/*
$(function() {
  $("#texte").css("fontFamily", "Courier");
});
*/

/*
function changeFont(_name) {
    document.getElementById("mytextarea").style.fontFamily = _name;
}
*/