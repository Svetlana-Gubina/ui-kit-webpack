import '../../../node_modules/air-datepicker';
import Chart from 'chart.js';


// Chart-js

// const chartDiv = document.querySelector('.details__info-chart');
// const canvas = document.createElement(`canvas`);
// canvas. width = 120;
// canvas. height = 120;
// chartDiv.appendChild(canvas);
// const ctx = canvas.getContext(`2d`);
// const gradientOrange = ctx.createLinearGradient(0, 0, 0, 120);
// gradientOrange.addColorStop(0, '#FFE39C');
// gradientOrange.addColorStop(1, '#FFBA9C');
// const gradientPurple = ctx.createLinearGradient(0, 0, 0, 120);
// gradientPurple.addColorStop(0, '#BC9CFF');
// gradientPurple.addColorStop(1, '#8BA4F9');
// const gradientGreen = ctx.createLinearGradient(0, 0, 0, 120);
// gradientGreen.addColorStop(0, '#6FCF97');
// gradientGreen.addColorStop(1, '#66D2EA');


// const doughnutChart = new Chart(ctx, {
//   type: 'doughnut',
//   data: {
//     labels: ['Разочарован', 'Удовлетворительно', 'Хорошо', 'Великолепно'],
//     datasets: [{
//       data: [0, 65, 65, 130],
//       backgroundColor: [
//         '#919191',
//         gradientPurple,
//         '#6FCF97',
//         gradientOrange,
//       ],
//     }],
//   },
//   options: {
//     cutoutPercentage: 90,
//     legend: {
//       display: false
//     },
//     elements: {
//       center: {
//         text: '260 голосов',
//         color: ' #BC9CFF', // Default is #000000
//         fontStyle: 'Montserrat', // Default is Arial
//         sidePadding: 20, // Default is 20 (as a percentage)
//         minFontSize: 18, // Default is 20 (in px), set to false and text will not wrap.
//         lineHeight: 22 // Default is 25 (in px), used for when text wraps
//       },
//     }
//   }
// });
//
// Chart.pluginService.register({
//   beforeDraw: function(chart) {
//     if (chart.config.options.elements.center) {
//       // Get ctx from string
//       var ctx = chart.chart.ctx;
//
//       // Get options from the center object in options
//       var centerConfig = chart.config.options.elements.center;
//       var fontStyle = centerConfig.fontStyle || 'Arial';
//       var txt = centerConfig.text;
//       var color = centerConfig.color || '#000';
//       var maxFontSize = centerConfig.maxFontSize || 75;
//       var sidePadding = centerConfig.sidePadding || 20;
//       var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
//       // Start with a base font of 30px
//       ctx.font = "30px " + fontStyle;
//
//       // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
//       var stringWidth = ctx.measureText(txt).width;
//       var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
//
//       // Find out how much the font can grow in width.
//       var widthRatio = elementWidth / stringWidth;
//       var newFontSize = Math.floor(30 * widthRatio);
//       var elementHeight = (chart.innerRadius * 2);
//
//       // Pick a new font size so it will not be larger than the height of label.
//       var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
//       var minFontSize = centerConfig.minFontSize;
//       var lineHeight = centerConfig.lineHeight || 25;
//       var wrapText = false;
//
//       if (minFontSize === undefined) {
//         minFontSize = 20;
//       }
//
//       if (minFontSize && fontSizeToUse < minFontSize) {
//         fontSizeToUse = minFontSize;
//         wrapText = true;
//       }
//
//       // Set font settings to draw it correctly.
//       ctx.textAlign = 'center';
//       ctx.textBaseline = 'middle';
//       var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
//       var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
//       ctx.font = "bold 20px Montserrat Bold"; // fontSizeToUse + "px " + fontStyle;
//       ctx.fillStyle = color;
//
//       if (!wrapText) {
//         ctx.fillText(txt, centerX, centerY);
//         return;
//       }
//
//       var words = txt.split(' ');
//       var line = '';
//       var lines = [];
//
//       // Break words up into multiple lines if necessary
//       for (var n = 0; n < words.length; n++) {
//         var testLine = line + words[n] + ' ';
//         var metrics = ctx.measureText(testLine);
//         var testWidth = metrics.width;
//         if (testWidth > elementWidth && n > 0) {
//           lines.push(line);
//           line = words[n] + ' ';
//         } else {
//           line = testLine;
//         }
//       }
//
//       // Move the center up depending on line height and number of lines
//       centerY -= (lines.length / 2) * lineHeight;
//
//       for (var n = 0; n < lines.length; n++) {
//         ctx.fillText(lines[n], centerX, centerY);
//         centerY += lineHeight;
//       }
//       //Draw text in center
//       ctx.fillText(line, centerX, centerY);
//     }
//   }
// });


// Datepicker-1

// $('#filterDates').datepicker({
//   language: {
//     today: 'Применить',
//   },
//   minDate: new Date(),
//   range: true,
//   dateFormat: "dd M",
//   multipleDatesSeparator: " - ",
//   todayButton: true,
//   clearButton: true,
//   prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"></path></svg>',
//   nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"></path></svg>',
//   navTitles: {
//     days: 'MM  <i>yyyy</i>',
//   },
// });

// var myDatepicker = $('#filterDates').datepicker().data('datepicker');
// $(".datepicker--button[data-action='today']").on("click", function(evt) {
//   myDatepicker.hide();
//   return false;
// });


// $('.filter-form__datepicker-arrow').on("click", function() {
//   if (!$(this).hasClass('filter-form__arrow--active')) {
//     $(this).addClass('filter-form__arrow--active');
//     $(this).parent().find($('.filter-form__input')).focus();
//   } else {
//     $(this).removeClass('filter-form__arrow--active');
//   }
// });



// Datepicker-2

// $('.search-form__control').datepicker({
//   language: {
//     today: 'Применить',
//   },
//   minDate: new Date(),
//   range: true,
//   dateFormat: "dd M",
//   multipleDatesSeparator: " - ",
//   todayButton: true,
//   clearButton: true,
//   prevHtml: '<svg width="17" height="18" viewBox="0 0 17 18"><path d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"></path></svg>',
//   nextHtml: '<svg width="17" height="18" viewBox="0 0 17 18"><path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"></path></svg>',
//   navTitles: {
//     days: 'MM  <i>yyyy</i>',
//   },
// });
//
// $('.search-form__input-arrow').on("click", function() {
//   if (!$(this).hasClass('search-form__arrow--active')) {
//     $(this).addClass('search-form__arrow--active');
//     $(this).parent().find($('.search-form__control')).focus();
//   } else {
//     $(this).removeClass('search-form__arrow--active');
//   }
// });


// Slider jQuery
// jQuery("#slider").slider({
//   animate: "slow",
// 	min: 5000,
//   max: 10000,
//   step: 100,
// 	values: [6500,8100],
// 	range: true,
// 	stop: function(event, ui) {
// 		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
// 		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
//     },
//     slide: function(event, ui){
// 		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
// 		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
//     },
// });

/* show initial values */
// var min = $("#slider").slider("values", 0);
// var max = $("#slider").slider("values", 1);
// $("input#minCost").val(min);
// $("input#maxCost").val(max);
//
// $( "input#minCost" ).change(function() {
//   jQuery("#slider").slider('values', 0, $(this).val());
// });
//
// $( "input#maxCost" ).change(function() {
//   jQuery("#slider").slider('values', 1, $(this).val());
// });



// Dropdown Дополнительные удобства

// const toggle = (elem, className) => {
//   elem.classList.toggle(className);
// };

// const addBtn = document.querySelector('.filter-form__dropdown-btn');
// const addDropdown = document.querySelector('.filter-form__div');
//
// addBtn.addEventListener('click', function(evt) {
//   evt.preventDefault();
//   toggle(addDropdown, 'modal-close');
// });

// Comfort, guests dropdown

// const comfortInput = document.querySelector('#comfortInput');
// const comfortDropdown = document.querySelector('.room-dropdown');
//
// const guestsInput = document.querySelector('#guestsInput');
//
// const onEnterClickHandler = function (evt) {
//   evt.preventDefault();
//   if(evt.key === 'Enter') {
//     $(this).find($('.select__dropdown')).toggleClass('modal-close');
//   }
// };

// $('#guestsInput').focus(function() {
//   $(this).removeAttr('placeholder');
//   // document.addEventListener('keydown', onEnterClickHandler);
// }).blur(function() {
//   $(this).attr('placeholder', '3 гостя, 1 младенец');
//   // document.removeEventListener('keydown', onEnterClickHandler);
// });

// $('#comfortInput').focus(function() {
//   $(this).removeAttr('placeholder');
//   // document.addEventListener('keydown', onEnterClickHandler);
// }).blur(function() {
//   $(this).attr('placeholder', '2 спальни, 2 кровати, ... ');
//   // document.removeEventListener('keydown', onEnterClickHandler);
// });

// Arrow on click

// $(".filter-form__input-arrow").on("click", function() {
//   $(this).toggleClass('filter-form__arrow--active');
//   $(this).parent().find($('.select__dropdown')).toggleClass('modal-close');
// });

// $(".search-form__select-arrow").on("click", function() {
//   $(this).toggleClass('search-form__arrow--active');
//   $(this).parent().find($('.select__dropdown')).toggleClass('modal-close');
// });

// Validation

// const validate = function (input) {
//   var validityState_object = input.validity;
//
//   if (validityState_object.typeMismatch) {
//    input.setCustomValidity('Please, enter an integer');
//    input.reportValidity();
//   } else if (input.rangeUnderflow) {
//    input.setCustomValidity('We need a higher number!');
//    input.reportValidity();
//   } else if (input.rangeOverflow) {
//    input.setCustomValidity('Thats too high!');
//    input.reportValidity();
//   } else {
//    input.setCustomValidity('');
//    input.reportValidity();
//   }
//
//  };

//  var customInputs = document.querySelectorAll('.select__dropdown-input');

 // customInputs.forEach((input) => {
 //   input.addEventListener("input", function(evt){
 //     validate(input);
 //   });
 // });


 // Numbers
 // const INITIAL_VALUE = 2;
 // const getDefaultOptions = (IDs) => {
 //   return {
 //    first: {
 //      id: IDs[0],
 //      amount : INITIAL_VALUE,
 //    },
 //    second: {
 //      id: IDs[1],
 //      amount: INITIAL_VALUE,
 //    },
 //    third: {
 //      id: IDs[2],
 //      amount: 0,
 //    }
 //  };
 // };

// const updateOptions = (DefaultOptions, inputID, newVal) => {
//   if (inputID === DefaultOptions.first.id) {
//     DefaultOptions.first.amount = newVal;
//   } else if (inputID === DefaultOptions.second.id) {
//     DefaultOptions.second.amount = newVal;
//   } else if (inputID === DefaultOptions.third.id) {
//     DefaultOptions.third.amount = newVal;
//   }
//   return;
// };


// const switchAmount = (button, input) => {
//   var oldValue = button.parent().find("input").val();
//
//   if (button.text() == "+") {
//     var newVal = parseFloat(oldValue) + 1 < input.attr('max') ? parseFloat(oldValue) + 1 : input.attr('max');
//   } else {
//    // Don't allow decrementing below zero
//     if (oldValue > 0) {
//       var newVal = parseFloat(oldValue) - 1;
//     } else {
//       newVal = 0;
//     }
//   }
//
//   input.val(newVal);
//   return newVal;
// };

// Guests

// const guestsIDs = ['Взрослые', 'Дети', 'Младенцы'];
// const guestsDefaultOptions = getDefaultOptions(guestsIDs);

// $("#Guests").find(".calendar__btn--submit").on("click", function(evt) {
//   evt.preventDefault();
// });

// $(".Guests").on("click", function() {
//   var $button = $(this);
//   var input = $button.parent().find("input");
//
//   var newVal = switchAmount($button, input);
//
//   var targetInput = $('#guestsInput');
//   var inputID = input.attr("id");
//   updateOptions(guestsDefaultOptions, inputID, newVal);
//   let guestsCount = Number(guestsDefaultOptions.first.amount)  + Number(guestsDefaultOptions.second.amount);
//   targetInput.val(guestsCount + ' ' + 'гостей'  + ', ' + guestsDefaultOptions.third.amount + ' ' + guestsDefaultOptions.third.id);
//   // targetInput.val(guestsDefaultOptions.first.amount + ' ' + guestsDefaultOptions.first.id + ', ' + guestsDefaultOptions.second.amount + ' ' + guestsDefaultOptions.second.id + ', ' + guestsDefaultOptions.third.amount + ' ' + guestsDefaultOptions.third.id);
// });


// Comfort

// const comfortIDs = ['Спальни', 'Кровати', 'Ванные комнаты'];
// const comfortDefaultOptions = getDefaultOptions(comfortIDs);


// $(".Comfort").on("click", function() {
//   var $button = $(this);
//   var input = $button.parent().find("input");
//
//   var newVal = switchAmount($button, input);
//
//   var targetInput = $('#comfortInput');
//   var inputID = input.attr("id");
//   updateOptions(comfortDefaultOptions, inputID, newVal);
//   targetInput.val(comfortDefaultOptions.first.amount + ' ' + comfortDefaultOptions.first.id + ', ' + comfortDefaultOptions.second.amount + ' ' + comfortDefaultOptions.second.id + ', ' + comfortDefaultOptions.third.amount + ' ' + comfortDefaultOptions.third.id);
// });

