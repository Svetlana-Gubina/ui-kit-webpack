import 'air-datepicker';

const myDatepicker = $('.search-form__control').datepicker().data('datepicker');
$(".datepicker--button[data-action='today']").on("click", function(evt) {
 myDatepicker.hide();
 return false;
});
