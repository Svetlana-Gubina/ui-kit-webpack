import '../../blocks/room-card-template/room-photo-slider.js';
import {datePickerConfig} from '../../../scripts/datepicker.js';
import {toggle, getDefaultOptions, updateOptions, switchAmount} from '../../../scripts/dropdown.js';


// datepicker

const rangeConfig = datePickerConfig;
rangeConfig.range = true;

$('#filterDates').datepicker(rangeConfig);

const myDatepicker = $('#filterDates').datepicker().data('datepicker');
$(".datepicker--button[data-action='today']").on("click", function(evt) {
 myDatepicker.hide();
 return false;
});

$('.filter-form__datepicker-arrow').on("click", function() {
  if (!$(this).hasClass('filter-form__arrow--active')) {
    $(this).addClass('filter-form__arrow--active');
    $(this).parent().find($('.filter-form__input')).focus();
  } else {
    $(this).removeClass('filter-form__arrow--active');
  }
});


// Дополнительные удобства

const addBtn = document.querySelector('.filter-form__dropdown-btn');
const addDropdown = document.querySelector('.filter-form__div');

addDropdown.classList.add('modal-close');

addBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  toggle(addDropdown, 'modal-close');
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
   // TODO: arrow should lose active class
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

// const onEnterClickHandler = function (evt) {
//   evt.preventDefault();
//   if(evt.key === 'Enter') {
//     var $focused = $(':focus');
//     var dropdown = $(':focus').parent().find($('.select__dropdown')).toggleClass('modal-close');
//   }
// };



// Slider jQuery

$("#slider").slider({
  animate: "slow",
	min: 5000,
  max: 10000,
  step: 100,
	values: [6500,8100],
	range: true,
	stop: function(event, ui) {
		$("input#minCost").val($("#slider").slider("values",0));
		$("input#maxCost").val($("#slider").slider("values",1));
    },
    slide: function(event, ui){
      $("input#minCost").val($("#slider").slider("values",0));
      $("input#maxCost").val($("#slider").slider("values",1));
    },
});

/* show initial values */
var min = $("#slider").slider("values", 0);
var max = $("#slider").slider("values", 1);
$("input#minCost").val(min);
$("input#maxCost").val(max);

$( "input#minCost" ).change(function() {
  $("#slider").slider('values', 0, $(this).val());
});

$( "input#maxCost" ).change(function() {
  $("#slider").slider('values', 1, $(this).val());
});
