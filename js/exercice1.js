/*
$('#texte').click(function(event) { // $(#texte') = $('p')
    event.preventDefault();
    $(this).hide();
});
*/

$(function(){
    $("#texte").click(function(){
        $(this).hide();
    });
});

/*
$(document).ready(function() {
    $('#texte').hide();
});

Ce qui équivaut à la manière recommandée d'appeler:

$(function() {
    $('#texte').hide();
});
*/