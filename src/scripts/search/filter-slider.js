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

const comfortInput = document.querySelector('#comfortInput');
const comfortDropdown = document.querySelector('.room-dropdown');

$('#comfortInput').focus(function() {
  $(this).removeAttr('placeholder');
}).blur(function() {
  $(this).attr('placeholder', '2 спальни, 2 кровати, ... ');
});

$(".filter-form__input-arrow").on("click", function() {
  $(this).toggleClass('filter-form__arrow--active');
  comfortDropdown.classList.toggle('modal-close');
});

// Validation

const validate = function (input) {
  var validityState_object = input.validity;

  if (validityState_object.typeMismatch) {
   input.setCustomValidity('Please, enter an integer');
   input.reportValidity();
  } else if (input.rangeUnderflow) {
   input.setCustomValidity('We need a higher number!');
   input.reportValidity();
  } else if (input.rangeOverflow) {
   input.setCustomValidity('Thats too high!');
   input.reportValidity();
  } else {
   input.setCustomValidity('');
   input.reportValidity();
  }

 };

 var customInputs = document.querySelectorAll('.room-dropdown__input');

 customInputs.forEach((input) => {
   input.addEventListener("input", function(evt){
     validate(input);
   });
 });


 // Numbers

 const bedroomID  ='спальни';
 const bedsID = 'кровати';
 const bathroomID = 'ванные комнаты';
 const INITIAL_VALUE = 2;

 const DefaultOptions = {
   bedroom: {
     id: bedroomID,
     amount : INITIAL_VALUE,
   },
   beds: {
     id: bedsID,
     amount: INITIAL_VALUE,
   },
   bathroom: {
     id: bathroomID,
     amount: 0,
   }
 };

 const updateOptions = (inputID, newVal) => {
   if (inputID === 'спальни') {
    DefaultOptions.bedroom.amount = newVal;
   } else if (inputID === 'кровати') {
    DefaultOptions.beds.amount = newVal;
   } else if (inputID === 'ванные комнаты') {
    DefaultOptions.bathroom.amount = newVal;
   }
   return;
 };

 $(".room-dropdown__btn").on("click", function() {
   var $button = $(this);
   var oldValue = $button.parent().find("input").val();
   var input = $button.parent().find("input");
   var targetInput = $('#comfortInput');

   if ($button.text() == "+") {
     var newVal = parseFloat(oldValue) + 1 < input.attr('max') ? parseFloat(oldValue) + 1 : input.attr('max');
   } else {
    // Don't allow decrementing below zero
     if (oldValue > 0) {
       var newVal = parseFloat(oldValue) - 1;
     } else {
       newVal = 0;
     }
   }

   input.val(newVal);
   var inputID = input.attr("id");
   updateOptions(inputID, newVal);
   targetInput.val(DefaultOptions.bedroom.amount + ' ' + DefaultOptions.bedroom.id + ', ' + DefaultOptions.beds.amount + ' ' + DefaultOptions.beds.id + ', ' + DefaultOptions.bathroom.amount + ' ' + DefaultOptions.bathroom.id);
 });
