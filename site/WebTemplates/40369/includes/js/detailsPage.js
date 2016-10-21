// JavaScript Document
// This is to append the ciirus controls into the desired containers
$( document ).ready(function() {
$( "#appendAvail" ).append( $( "#availabilityControl" ) );
$( "#appendRates" ).append( $( "#RatesControlContainer" ) );
$("#appendReviews").append($("#ReviewsControl"));

if ($("#theVideo").html() == "") {
    $(".video-tour").css("display", "none");
}
});

// $( document ).ready(function() {
// 	$('.fotorama').fotorama({
// 	  maxwidth: '100%',
// 	  ratio: 16/9
// 	});
// });