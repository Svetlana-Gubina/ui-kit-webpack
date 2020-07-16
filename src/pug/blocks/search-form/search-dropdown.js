import {getDefaultOptions, updateOptions, switchAmount} from '../../../scripts/dropdown.js';

const guestsIDs = ['Взрослые', 'Дети', 'Младенцы'];
const guestsDefaultOptions = getDefaultOptions(guestsIDs);

$("#Guests").find(".calendar__btn--submit").on("click", function(evt) {
   evt.preventDefault();
   $("#Guests").closest('.select__dropdown').addClass('modal-close');
   $(".search-form__select-arrow").toggleClass('search-form__arrow--active');
});

$(".Guests").on("click", function() {
  var $button = $(this);
  var input = $button.parent().find("input");

  var newVal = switchAmount($button, input);

  var targetInput = $('.search-form__pseudo-select');
  var inputID = input.attr("id");
  updateOptions(guestsDefaultOptions, inputID, newVal);

  let guestsCount = Number(guestsDefaultOptions.first.amount)  + Number(guestsDefaultOptions.second.amount);
  targetInput.val(guestsCount + ' ' + 'гостей'  + ', ' + guestsDefaultOptions.third.amount + ' ' + guestsDefaultOptions.third.id);
});

const onEnterClickHandler = function (evt) {
  evt.preventDefault();
  if(evt.key === 'Enter') {
    $(':focus').parent().find($('.select__dropdown')).toggleClass('modal-close');
    $(".search-form__select-arrow").toggleClass('search-form__arrow--active');
  }
};

// Arrow on click

$(".search-form__select-arrow").on("click", function() {
  $(this).toggleClass('search-form__arrow--active');
  $(this).parent().find($('.select__dropdown')).toggleClass('modal-close');
});

$('.search-form__pseudo-select').focus(function(evt) {
  evt.preventDefault();
  $(this).removeAttr('placeholder');
  // document.addEventListener('keydown', onEnterClickHandler);
}).blur(function(evt) {
  evt.preventDefault();
  $(this).attr('placeholder', 'Сколько гостей');
  // document.removeEventListener('keydown', onEnterClickHandler);
});

// BUG! - фокус залипает на инпуте при добавлении onEnterClickHandler
