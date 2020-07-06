export const toggle = (elem, className) => {
  elem.classList.toggle(className);
};

// Дополнительные удобства

const addBtn = document.querySelector('.filter-form__dropdown-btn');
const addDropdown = document.querySelector('.filter-form__div');

addDropdown.classList.add('modal-close');

addBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  toggle(addDropdown, 'modal-close');
});


// Validation

export const validate = function (input) {
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

const customInputs = document.querySelectorAll('.select__dropdown-input');

customInputs.forEach((input) => {
  input.addEventListener("input", function(evt){
    validate(input);
  });
});

// Arrow on click

$(".filter-form__input-arrow").on("click", function() {
  $(this).toggleClass('filter-form__arrow--active');
  $(this).parent().find($('.select__dropdown')).toggleClass('modal-close');
});

$(".search-form__select-arrow").on("click", function() {
  $(this).toggleClass('search-form__arrow--active');
  $(this).parent().find($('.select__dropdown')).toggleClass('modal-close');
});

// Numbers
export const INITIAL_VALUE = 2;
export const getDefaultOptions = (IDs) => {
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

export const updateOptions = (DefaultOptions, inputID, newVal) => {
  if (inputID === DefaultOptions.first.id) {
    DefaultOptions.first.amount = newVal;
  } else if (inputID === DefaultOptions.second.id) {
    DefaultOptions.second.amount = newVal;
  } else if (inputID === DefaultOptions.third.id) {
    DefaultOptions.third.amount = newVal;
  }
  return;
};


export const switchAmount = (button, input) => {
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


// Guests

const guestsIDs = ['Взрослые', 'Дети', 'Младенцы'];
const guestsDefaultOptions = getDefaultOptions(guestsIDs);

$("#Guests").find(".calendar__btn--submit").on("click", function(evt) {
   evt.preventDefault();
   $("#Guests").closest('.select__dropdown').addClass('modal-close');
   // arrow
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
});

// TODO: открытие селекта с клавиатуры

$('#guestsInput').focus(function(evt) {
  $(this).removeAttr('placeholder');
  // document.addEventListener('keydown', onEnterClickHandler);
}).blur(function() {
  $(this).attr('placeholder', '3 гостя, 1 младенец');
  // document.removeEventListener('keydown', onEnterClickHandler);
});

$('#comfortInput').focus(function(evt) {
  $(this).removeAttr('placeholder');
  // document.removeEventListener('keydown', onEnterClickHandler);
}).blur(function() {
  $(this).attr('placeholder', '2 спальни, 2 кровати, ... ');
  // document.removeEventListener('keydown', onEnterClickHandler);
});

const onEnterClickHandler = function (evt) {
  evt.preventDefault();
  if(evt.key === 'Enter') {
    var $focused = $(':focus');
    var dropdown = $(':focus').parent().find($('.select__dropdown')).toggleClass('modal-close');
  }
};
