/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var image = document.createElement('img');
image.src = _small2.default; // 'http://lorempixel.com/400/400' // quick image tool

document.body.appendChild(image);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// sum.js has no dependencis, but is code that needs to be exported for other code to run properly.

var sum = function sum(a, b) {
  return a + b;
};

// module.exports = sum // CommonJS

exports.default = sum;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2fc9d6bafcac92a1ba668d9da1a4ab6.jpg";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// the file image_viewer.js does not execute code, it should just run

// module systems
// CommonJS - used by Node, require & module.exports statements
// AMD (Asyncronous Module Definition) - commonly used for asyncronous module loading, define & require statements
// ES2015 - modern web development heading this direction, export & export statements

// index.js - needs code from another module to run properly, it needs to import code

// const sum = require('./sum') // CommonJS

var total = (0, _sum2.default)(10, 8); // the file sum.js has code that can be executed so it has a name

console.log(total);

/***/ })
/******/ ]);