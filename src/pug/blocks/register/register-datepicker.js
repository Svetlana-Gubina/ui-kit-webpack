import {datePickerConfig} from '../../../scripts/datepicker.js';


$('#birthday').datepicker(datePickerConfig);

// Arrow

$('.register_input-arrow').on("click", function() {
  if (!$(this).hasClass('register_input-arrow--active')) {
    $(this).addClass('register_input-arrow--active');
    $(this).parent().find($('.register__form-control')).focus();
  } else {
    $(this).removeClass('register_input-arrow--active');
  }
});
