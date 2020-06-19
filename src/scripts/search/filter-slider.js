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




// Dropdown Дополнительные удобства

const toggle = (elem, className) => {
  elem.classList.toggle(className);
};

const addBtn = document.querySelector('.filter-form__dropdown-btn');
const addDropdown = document.querySelector('.filter-form__div');

addBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  toggle(addDropdown, 'modal-close');
});

// Comfort, guests dropdown

const comfortInput = document.querySelector('#comfortInput');
const comfortDropdown = document.querySelector('.room-dropdown');

const guestsInput = document.querySelector('#guestsInput');

$('#guestsInput').focus(function() {
  $(this).removeAttr('placeholder');
}).blur(function() {
  $(this).attr('placeholder', '3 гостя, 1 младенец');
});

$('#comfortInput').focus(function() {
  $(this).removeAttr('placeholder');
}).blur(function() {
  $(this).attr('placeholder', '2 спальни, 2 кровати, ... ');
});

// Arrow on click

$(".filter-form__input-arrow").on("click", function() {
  $(this).toggleClass('filter-form__arrow--active');
  $(this).parent().find($('.select__dropdown')).toggleClass('modal-close');
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

 var customInputs = document.querySelectorAll('.select__dropdown-input');

 customInputs.forEach((input) => {
   input.addEventListener("input", function(evt){
     validate(input);
   });
 });


 // Numbers
 const INITIAL_VALUE = 2;

 const getDefaultOptions = (IDs) => {
   return {
    first: {
      id: IDs[0],
      amount : INITIAL_VALUE,
    },
    second: {
      id: IDs[1],
      amount: INITIAL_VALUE,
    },
    third: {
      id: IDs[2],
      amount: 0,
    }
  };
 };

 const updateOptions = (DefaultOptions, inputID, newVal) => {
  if (inputID === DefaultOptions.first.id) {
    DefaultOptions.first.amount = newVal;
  } else if (inputID === DefaultOptions.second.id) {
    DefaultOptions.second.amount = newVal;
  } else if (inputID === DefaultOptions.third.id) {
    DefaultOptions.third.amount = newVal;
  }
  return;
};


 const switchAmount = (button, input) => {
  var oldValue = button.parent().find("input").val();

  if (button.text() == "+") {
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
  return newVal;
};

const guestsIDs = ['Взрослые', 'Дети', 'Младенцы'];
const guestsDefaultOptions = getDefaultOptions(guestsIDs);

$('#Guests .calendar__btn--submit').click(function(evt) {
  evt.preventDefault();
  console.log('submit!');
});

$('#Guests .calendar__btn--reset').click(function(evt) {
  evt.preventDefault();
  console.log('reset!');
});

 $(".Guests").on("click", function() {
  var $button = $(this);
  var input = $button.parent().find("input");

  var newVal = switchAmount($button, input);

  var targetInput = $('#guestsInput');
  var inputID = input.attr("id");
  updateOptions(guestsDefaultOptions, inputID, newVal);
  let guestsCount = Number(guestsDefaultOptions.first.amount)  + Number(guestsDefaultOptions.second.amount);
  targetInput.val(guestsCount + ' ' + 'гостей'  + ', ' + guestsDefaultOptions.third.amount + ' ' + guestsDefaultOptions.third.id);
  // targetInput.val(guestsDefaultOptions.first.amount + ' ' + guestsDefaultOptions.first.id + ', ' + guestsDefaultOptions.second.amount + ' ' + guestsDefaultOptions.second.id + ', ' + guestsDefaultOptions.third.amount + ' ' + guestsDefaultOptions.third.id);
});

const comfortIDs = ['Спальни', 'Кровати', 'Ванные комнаты'];
const comfortDefaultOptions = getDefaultOptions(comfortIDs);

$(".Comfort").on("click", function() {
  var $button = $(this);
  var input = $button.parent().find("input");

  var newVal = switchAmount($button, input);

  var targetInput = $('#comfortInput');
  var inputID = input.attr("id");
  updateOptions(comfortDefaultOptions, inputID, newVal);
  targetInput.val(comfortDefaultOptions.first.amount + ' ' + comfortDefaultOptions.first.id + ', ' + comfortDefaultOptions.second.amount + ' ' + comfortDefaultOptions.second.id + ', ' + comfortDefaultOptions.third.amount + ' ' + comfortDefaultOptions.third.id);
});

