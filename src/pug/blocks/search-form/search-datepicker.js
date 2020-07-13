import {datePickerConfig} from '../../../scripts/datepicker.js';

$('.search-form__control').datepicker(datePickerConfig);

// TODO: datepicker on hide - убирать с arrow класс active

$(".datepicker--button[data-action='today']").on("click", function(evt) {
  $(this).parents('.datepicker').hide();
  return false;
});


// Arrow

$('.search-form__input-arrow').on("click", function() {
  if (!$(this).hasClass('search-form__arrow--active')) {
    $(this).addClass('search-form__arrow--active');
    $(this).parent().find($('.search-form__control')).focus();
  } else {
    $(this).removeClass('search-form__arrow--active');
  }
});

// TODO: BUG! - после выбора даты второй раз ее выбрать нельзя - datepicker не появляется

// TODO: on form submit validation - check if arrival date less than dep.
// $('.search-form').on( "submit", handler );
