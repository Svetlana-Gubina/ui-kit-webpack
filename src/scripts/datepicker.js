import 'air-datepicker';

const datePickerConfig = {
  language: {
    today: 'Применить',
  },
  minDate: new Date(),
  range: true,
  dateFormat: "dd M",
  multipleDatesSeparator: " - ",
  todayButton: true,
  clearButton: true,
  prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"></path></svg>',
  nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"></path></svg>',
  navTitles: {
    days: 'MM  <i>yyyy</i>',
  },
};


$('.datepicker-here').datepicker(datePickerConfig);


export const addOnTodayClickHandler = (input) => {
  const myDatepicker = input.datepicker().data('datepicker');
  $(".datepicker--button[data-action='today']").on("click", function(evt) {
   myDatepicker.hide();
   return false;
  });
};

addOnTodayClickHandler($('#filterDates'));


$('.search-form__input-arrow').on("click", function() {
  if (!$(this).hasClass('search-form__arrow--active')) {
    $(this).addClass('search-form__arrow--active');
    $(this).parent().find($('.search-form__control')).focus();
  } else {
    $(this).removeClass('search-form__arrow--active');
  }
});

$('.filter-form__datepicker-arrow').on("click", function() {
  if (!$(this).hasClass('filter-form__arrow--active')) {
    $(this).addClass('filter-form__arrow--active');
    $(this).parent().find($('.filter-form__input')).focus();
  } else {
    $(this).removeClass('filter-form__arrow--active');
  }
});
