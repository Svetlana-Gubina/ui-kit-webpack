var RIGHT_PIN_START_POSITION = 30;
var MAXPRICE = 10000;
var MINPRICE = 5000;
var scale = document.querySelector('.filter-form__range-scale');
var bar = document.querySelector('.filter-form__range-track');
var pinMin = document.querySelector('.filter-form__range-thumb--min');
var pinMax = document.querySelector('.filter-form__range-thumb--max');
var filterRange = document.querySelector('.filter-form__range-controls');
var inputMin = document.querySelector('.filter-form__range-price--min');
var inputMax = document.querySelector('.filter-form__range-price--max');

var clamp = function (value, min, max) {
    if (value < min) {
      return min;
    }
    if (value > max) {
      return max;
    }
    return value;
};

var getCoords = function (elem) {
    var box = elem.getBoundingClientRect();
    return {
        left: box.left + pageXOffset,
    };
};

var setBar = (left) => {
  bar.style = 'position: absolute;';
  var barLeft = (getCoords(pinMin).left - left) / scale.offsetWidth;
  var rightEdge = (getCoords(pinMax).left - left) / scale.offsetWidth;
  bar.style.left = barLeft * 100 + '%';
  bar.style.width = (rightEdge - barLeft) * 100 + '%';
};

var initSlider = function (target) {
    var mouseMoveHandler = function (moveEvt) {
        moveEvt.preventDefault();
        var left = getCoords(scale).left;
        var newLeft = (moveEvt.pageX - left) / scale.offsetWidth;
        var level = clamp(newLeft, target.leftLimit, target.rightLimit);
        var percent = level * 100;
        target.pin.style.left = percent + '%';
        var inputValue = ((percent * MINPRICE) / 100) + MINPRICE;
        target.input.value = inputValue;
        setBar(left);
    };
    var mouseUpHandler = function (upEvt) {
        upEvt.preventDefault();
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      };
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
};

// var rightPinPosition = Math.floor(((getCoords(pinMax).left - getCoords(scale).left) / scale.offsetWidth) * 100);
// setBar(getCoords(scale).left);
// - Координаты правого пина определяются неверно - использована константа RIGHT_PIN_START_POSITION -
// - положение пина на оси, заданное в верстке

inputMax.value = (RIGHT_PIN_START_POSITION * MINPRICE  / 100) + MINPRICE;

filterRange.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var leftPin = {
        pin: pinMin,
        leftLimit: 0,
        rightLimit: ((getCoords(pinMax).left - getCoords(scale).left) / scale.offsetWidth) - pinMin.offsetWidth / scale.offsetWidth,
        input: inputMin,
    };
    var rightPin = {
        pin: pinMax,
        leftLimit: ((getCoords(pinMin).left - getCoords(scale).left) / scale.offsetWidth) + pinMin.offsetWidth / scale.offsetWidth,
        rightLimit: 1,
        input: inputMax,
    };
    if (evt.target === pinMax) {
        initSlider(rightPin);
    } else if (evt.target === pinMin) {
        initSlider(leftPin);
    }
});

// Slider jQuery
jQuery("#slider").slider({
	min: 5000,
	max: 10000,
	values: [5000,10000],
	range: true,
	stop: function(event, ui) {
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    },
    slide: function(event, ui){
		jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
		jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});



// Dropdown
const toggle = (elem, className) => {
  elem.classList.toggle(className);
};

const addBtn = document.querySelector('.filter-form__dropdown-btn');
const addDropdown = document.querySelector('.filter-form__div');

addBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  toggle(addDropdown, 'modal-close');
});

const comfortInput = document.querySelector('.filter-form__input');
const comfortDropdown = document.querySelector('.room-dropdown');
