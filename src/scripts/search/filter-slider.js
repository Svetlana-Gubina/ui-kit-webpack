import '../../../node_modules/air-datepicker';

// Datepicker

// showEvent: Тип события, по наступлению которого будет показан календарь, Значение по умолчанию "focus"

$('#filterDates').datepicker({
  minDate: new Date(),
  range: true,
  dateFormat: "dd M",
  multipleDatesSeparator: " - ",
  clearButton: true,
  prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"></path></svg>',
  nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"></path></svg>',
  navTitles: {
    days: 'MM  <i>yyyy</i>',
  },
});


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

const onEnterClickHandler = function (evt) {
  evt.preventDefault();
  if(evt.key === 'Enter') {
    $(this).find($('.select__dropdown')).toggleClass('modal-close');
  }
};

$('#guestsInput').focus(function() {
  $(this).removeAttr('placeholder');
  // document.addEventListener('keydown', onEnterClickHandler);
}).blur(function() {
  $(this).attr('placeholder', '3 гостя, 1 младенец');
  // document.removeEventListener('keydown', onEnterClickHandler);
});

$('#comfortInput').focus(function() {
  $(this).removeAttr('placeholder');
  // document.addEventListener('keydown', onEnterClickHandler);
}).blur(function() {
  $(this).attr('placeholder', '2 спальни, 2 кровати, ... ');
  // document.removeEventListener('keydown', onEnterClickHandler);
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

// Guests

const guestsIDs = ['Взрослые', 'Дети', 'Младенцы'];
const guestsDefaultOptions = getDefaultOptions(guestsIDs);

$("#Guests").find(".calendar__btn--submit").on("click", function(evt) {
  evt.preventDefault();
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


// Comfort

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

