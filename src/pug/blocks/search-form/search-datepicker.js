import {datePickerConfig} from '../../../scripts/datepicker.js';

const config = datePickerConfig;
config.dateFormat = 'yyyy-mm-dd';


$('.search-form__control').datepicker(config);

// Arrow

$('.search-form__input-arrow').on("click", function() {
  if (!$(this).hasClass('search-form__arrow--active')) {
    $(this).addClass('search-form__arrow--active');
    $(this).parent().find($('.search-form__control')).focus();
  } else {
    $(this).removeClass('search-form__arrow--active');
  }
});

// TODO: on form submit validation - check if arrival date less than dep.
// $('.search-form').on( "submit", handler);
