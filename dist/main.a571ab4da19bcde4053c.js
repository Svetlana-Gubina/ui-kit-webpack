/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/insert_emoticon.png":
/*!*************************************!*\
  !*** ./src/img/insert_emoticon.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABI1BMVEUAAACVn/efn/+vm/yqn/2Yovydofyrn/6znv+Tovutn/6XofqVovuunPukoP2cofyUo/ufofyaofy3nf+wnv6Vovunn/21nv+So/qnn/upnv2goPyvnv6nn/2ooP2ioP2Tovqun/+zn/+eoPuRovmvnf2znf2cn/uQovqen/q0nf6joPyznv+QpPqtn/6bovuooPy3nf+goPuQo/qVo/ueofysn/+dof2xnf2jn/yynf2vn/+Pn/+sn/63nP+0nf62nP+hof6moP6Uo/uYovu2n/+Rpf+rnv+3n/+0nf+cofybofyfofyRo/upn/2eofyTovuxnv6ioP2nn/2Wovurn/2on/22nf+vnv2ZovyloP2To/uXofqtnv6vn/6Vo/uqn/4R7KejAAAASXRSTlMAIBAg79/ff3/v329gQB+fj+/v39/PoJ+fkHBf7+/f39+fj4CAYE9AQDDv79/fv7+wr6+voJCPf3BQMBAQ7+7fz8/Ov6+PT08gFC6yyQAAAkRJREFUOMuNj4d6okAUhQdb7DXGblw1lvReNtleRURUUFHAvP9T7J07yIqiyf+pnHvmd5ghdiKPV6nUZJL6euWPkK389X+edCYWqYzbUXv+1TGZdJY4qY3jjgNfGuteFfvBcfXI/Qzjx0bmlKl+u5cZAJ1z2wWOTju0tZkfaFN8JGv4B5TqajGdDvYdDu7eh5Wp33rHFEDPwZwaU8M8UTRoGEYQPEczCJsUXeyAum4UnT16f0XX9XvcUFEUPU+2kodlxUU3BDGI1Z4nuIeBTZ88bAqCQFNZFMUCLe6VV1HMW54IoPlHEUUPIRGYy7hEV16hYXjo6LFiBP45Hh+weQyUMOJEwZiDkCeX49HoCefzEZCzXk0ntkMB0iX5Dr9tnF0HsxJ65jQq5VwYo6CUyclsNiO7cYFySGbDN0UypJsNgbdEdA7fJ56gGN3ttYXh8Bu5FgShsFt8AuWa1AShf4d3SwgbJPBdMUg10uz3+QShPPRNBOunhgs+SE1CEjzPN3FLH8/oLx8+9AqQabrr8vwFNlFmWvg4rGkbgyfXBUJYcb7uCqYXohljrNtVkxwzaWZa8sHFqiQMMTOqmuqFGofwhVdVvT9Dy9mrwsixIQRZS+OKDfQ0WAsvx7gma7KXc/RkWav/L9Iy4A2ve6EA7W9XmhdqLuSKTW39kKWFvMgSG/G5JEkLqXL7u83uFA9I0hw+8c3XQD+fw1dCWA6EHQ6e7QFzqYdIUg9S9mXTQ7XSWyEQ58hWWvWbdKDXOzu7qbfsK/8ApGqpasEI3swAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_my_helper_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/my-helper-module.js */ "./src/scripts/my-helper-module.js");
/* harmony import */ var _scripts_my_helper_module_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_my_helper_module_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_insert_emoticon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/insert_emoticon.png */ "./src/img/insert_emoticon.png");
/* harmony import */ var _img_insert_emoticon_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_insert_emoticon_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pug_blocks_room_card_1_room_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pug/blocks/room-card-1/room-1.jpg */ "./src/pug/blocks/room-card-1/room-1.jpg");
/* harmony import */ var _pug_blocks_room_card_1_room_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pug_blocks_room_card_1_room_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pug_blocks_room_card_2_room_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pug/blocks/room-card-2/room-2.jpg */ "./src/pug/blocks/room-card-2/room-2.jpg");
/* harmony import */ var _pug_blocks_room_card_2_room_2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pug_blocks_room_card_2_room_2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_4__);






console.log(`Welcome from app! Let's learn Webpack`);

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML ='Test picture!';
    element.classList.add('hello');

   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = _img_insert_emoticon_png__WEBPACK_IMPORTED_MODULE_1___default.a;

   element.appendChild(myIcon);
    return element;
  }

  document.body.appendChild(component());


/***/ }),

/***/ "./src/pug/blocks/room-card-1/room-1.jpg":
/*!***********************************************!*\
  !*** ./src/pug/blocks/room-card-1/room-1.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {srcSet:__webpack_require__.p + "img//room-1.jpg"+" 271w",images:[{path:__webpack_require__.p + "img//room-1.jpg",width:271,height:152}],src:__webpack_require__.p + "img//room-1.jpg",toString:function(){return __webpack_require__.p + "img//room-1.jpg"},placeholder: undefined,width:271,height:152};

/***/ }),

/***/ "./src/pug/blocks/room-card-2/room-2.jpg":
/*!***********************************************!*\
  !*** ./src/pug/blocks/room-card-2/room-2.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {srcSet:__webpack_require__.p + "img//room-2.jpg"+" 271w",images:[{path:__webpack_require__.p + "img//room-2.jpg",width:271,height:152}],src:__webpack_require__.p + "img//room-2.jpg",toString:function(){return __webpack_require__.p + "img//room-2.jpg"},placeholder: undefined,width:271,height:152};

/***/ }),

/***/ "./src/scripts/my-helper-module.js":
/*!*****************************************!*\
  !*** ./src/scripts/my-helper-module.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log(`Greetings from module!`);

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.a571ab4da19bcde4053c.js.map