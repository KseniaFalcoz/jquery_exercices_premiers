var hiddenElements = $( "body" ).find( ":hidden" ).not( "script" );

$( "span" ).first().text( "Found " + hiddenElements.length + " hidden elements total." );
$( "div:hidden" ).show( 1000 );
$( "span" ).last().text( "Found " + $( "input:hidden" ).length + " hidden inputs." );

/*
$(function() {
    $('#texte').show();
});
*/