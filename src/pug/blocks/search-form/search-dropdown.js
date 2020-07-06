import {validate, getDefaultOptions, updateOptions, switchAmount} from '../../pages/search/dropdown.js';

const customInput = document.querySelector('.search-form__pseudo-select');

customInput.addEventListener("input", function(evt){
  validate(input);
});

const guestsIDs = ['Взрослые', 'Дети', 'Младенцы'];
const guestsDefaultOptions = getDefaultOptions(guestsIDs);

$(".search-form__pseudo-select").find(".calendar__btn--submit").on("click", function(evt) {
   evt.preventDefault();
   $("#Guests").closest('.select__dropdown').addClass('modal-close');
   // arrow
});

$(".search-form__select-arrow").on("click", function() {
  var $button = $(this);
  var input = $button.parent().find("input");
  var newVal = switchAmount($button, input);
  var targetInput = $('#guestsInput');
  var inputID = input.attr("id");
  updateOptions(guestsDefaultOptions, inputID, newVal);
  let guestsCount = Number(guestsDefaultOptions.first.amount)  + Number(guestsDefaultOptions.second.amount);
  targetInput.val(guestsCount + ' ' + 'гостей'  + ', ' + guestsDefaultOptions.third.amount + ' ' + guestsDefaultOptions.third.id);
});

// Arrow on click

$(".search-form__select-arrow").on("click", function() {
  $(this).toggleClass('search-form__arrow--active');
  $(this).parent().find($('.select__dropdown')).toggleClass('modal-close');
});

$('.search-form__pseudo-select').focus(function(evt) {
  $(this).removeAttr('placeholder');
}).blur(function() {
  $(this).attr('placeholder', 'Сколько гостей');
});
