var MAXPRICE = 10000;
var scale = document.querySelector('.filter-form__range-scale');
var bar = document.querySelector('.filter-form__range-track');
var pinMin = document.querySelector('.filter-form__range-thumb--min');
var pinMax = document.querySelector('.filter-form__range-thumb--max');
var filterRange = document.querySelector('.filter-form__range-controls');
//     var inputMin = document.querySelector('#min');
//     var inputMax = document.querySelector('#max');

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
 
     var initSlider = function (target) {
         var mouseMoveHandler = function (moveEvt) {
             moveEvt.preventDefault();
             
             var left = getCoords(scale).left;
             var newLeft = (moveEvt.pageX - left) / scale.offsetWidth;
             var level = clamp(newLeft, target.leftLimit, target.rightLimit);
 
             var percent = level * 100;
            
             target.pin.style.left = percent + '%';
             target.input.value = Math.floor(level * MAXPRICE);
 
             bar.style = 'position: absolute;';
             var barLeft = (getCoords(pinMin).left - left) / scale.offsetWidth;
             var rightEdge = (getCoords(pinMax).left - left) / scale.offsetWidth;
             bar.style.left = barLeft * 100 + '%';
             bar.style.width = (rightEdge - barLeft) * 100 + '%';
         };
     
         var mouseUpHandler = function (upEvt) {
             upEvt.preventDefault();
             
             document.removeEventListener('mousemove', mouseMoveHandler);
             document.removeEventListener('mouseup', mouseUpHandler);
 
           };
           document.addEventListener('mousemove', mouseMoveHandler);
           document.addEventListener('mouseup', mouseUpHandler);
     };
     
     var rightPinPosition = Math.floor(((getCoords(pinMax).left - getCoords(scale).left) / scale.offsetWidth) * 100);
     // inputMax.value = rightPinPosition * MAXPRICE / 100;
 
     filterRange.addEventListener('mousedown', function (evt) {
         evt.preventDefault();
         var leftPin = {
             pin: pinMin,
             leftLimit: 0,
             rightLimit: ((getCoords(pinMax).left - getCoords(scale).left) / scale.offsetWidth) - pinMin.offsetWidth / scale.offsetWidth,
             // input: inputMin,
         };
     
         var rightPin = {
             pin: pinMax,
             leftLimit: ((getCoords(pinMin).left - getCoords(scale).left) / scale.offsetWidth) + pinMin.offsetWidth / scale.offsetWidth,
             rightLimit: 1,
             // input: inputMax,
         };
         if (evt.target === pinMax) {
             initSlider(rightPin);
         } else if (evt.target === pinMin) {
             initSlider(leftPin);
         }
     });
