import {datePickerConfig} from '../../../scripts/datepicker.js';

$('#birthday').datepicker(datePickerConfig);

// TODO: datepicker on hide - убирать с arrow класс active

$(".datepicker--button[data-action='today']").on("click", function(evt) {
  $(this).parents('.datepicker').hide();
  // return false;
});

// Arrow

$('.register_input-arrow').on("click", function() {
  if (!$(this).hasClass('register_input-arrow--active')) {
    $(this).addClass('register_input-arrow--active');
    $(this).parent().find($('.register__form-control')).focus();
  } else {
    $(this).removeClass('register_input-arrow--active');
  }
});

// TODO: BUG! - после выбора даты второй раз ее выбрать нельзя - datepicker не появляется
