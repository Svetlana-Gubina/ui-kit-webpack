import 'air-datepicker';
import addOnTodayClickHandler from '../../../scripts/datepicker.js';

addOnTodayClickHandler($('#filterDates'));

$('.filter-form__datepicker-arrow').on("click", function() {
  if (!$(this).hasClass('filter-form__arrow--active')) {
    $(this).addClass('filter-form__arrow--active');
    $(this).parent().find($('.filter-form__input')).focus();
  } else {
    $(this).removeClass('filter-form__arrow--active');
  }
});

$('.search-form__input-arrow').on("click", function() {
  if (!$(this).hasClass('search-form__arrow--active')) {
    $(this).addClass('search-form__arrow--active');
    $(this).parent().find($('.search-form__control')).focus();
  } else {
    $(this).removeClass('search-form__arrow--active');
  }
});
