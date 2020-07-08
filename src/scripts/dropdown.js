export const toggle = (elem, className) => {
  elem.classList.toggle(className);
};

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


