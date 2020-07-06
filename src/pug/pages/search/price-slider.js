// Slider jQuery

jQuery("#slider").slider({
  animate: "slow",
	min: 5000,
  max: 10000,
  step: 100,
	values: [6500,8100],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    },
    slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    },
});

/* show initial values */
var min = $("#slider").slider("values", 0);
var max = $("#slider").slider("values", 1);
$("input#minCost").val(min);
$("input#maxCost").val(max);

$( "input#minCost" ).change(function() {
  jQuery("#slider").slider('values', 0, $(this).val());
});

$( "input#maxCost" ).change(function() {
  jQuery("#slider").slider('values', 1, $(this).val());
});
