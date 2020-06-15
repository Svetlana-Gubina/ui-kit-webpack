// Slider jQuery
jQuery("#slider").slider({
  animate: "slow",
	min: 5000,
	max: 10000,
	values: [6500,8100],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    },
    slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
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




// Dropdown
const toggle = (elem, className) => {
  elem.classList.toggle(className);
};

const addBtn = document.querySelector('.filter-form__dropdown-btn');
const addDropdown = document.querySelector('.filter-form__div');

addBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  toggle(addDropdown, 'modal-close');
});

const comfortInput = document.querySelector('.filter-form__input');
const comfortDropdown = document.querySelector('.room-dropdown');
