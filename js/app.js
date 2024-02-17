/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleParallax: function() { return /* binding */ handleParallax; }
/* harmony export */ });
/* Paralax mouse */
var maxOffsetX = 40;
var maxOffsetY = 40;
function getOffsetFromCenter(element) {
  var rect = element.getBoundingClientRect();
  var viewportCenterY = window.innerHeight / 2;
  var elementCenterY = rect.top + rect.height / 2;
  var offsetFromCenter = elementCenterY - viewportCenterY;
  return offsetFromCenter;
}
var getScale = function getScale(itemData) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var resultScale = {
    x: x,
    y: y
  };
  if (itemData.prlxScale) {
    resultScale = {
      x: itemData.prlxScale,
      y: itemData.prlxScale
    };
  }
  if (itemData.prlxScaleX) {
    resultScale.x = itemData.prlxScaleX;
  }
  if (itemData.prlxScaleY) {
    resultScale.y = itemData.prlxScaleY;
  }
  return resultScale;
};
var getDirection = function getDirection(itemData) {
  var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var resultDirection = {
    x: x,
    y: y
  };
  if (!isNaN(itemData.prlxDirection)) {
    resultDirection = {
      x: itemData.prlxDirection,
      y: itemData.prlxDirection
    };
  }
  if (!isNaN(itemData.prlxDirectionX)) {
    resultDirection.x = itemData.prlxDirectionX;
  }
  if (!isNaN(itemData.prlxDirectionY)) {
    resultDirection.y = itemData.prlxDirectionY;
  }
  return resultDirection;
};

// add parallax for scrolling
var handleScroll = function handleScroll(itemsContainer) {
  var items = itemsContainer.children;

  // get default scale & direction
  var _getScale = getScale(itemsContainer.dataset),
    generalScaleY = _getScale.y;
  var _getDirection = getDirection(itemsContainer.dataset),
    generalDirectionY = _getDirection.y;
  for (var i = 0; i < items.length; i++) {
    var offsetFromCenter = getOffsetFromCenter(items[i]);
    if (Math.abs(offsetFromCenter) < window.innerHeight / 2) {
      // get item scale & direction
      var _getScale2 = getScale(items[i].dataset, 1, generalScaleY),
        scaleY = _getScale2.y;
      // const { y: directionY } = getDirection(items[i].dataset, 1, generalDirectionY); // TODO

      // multiply scaleY to adjust scrolling translate and apply direction
      scaleY *= 0.15;
      var offsetY = offsetFromCenter * scaleY;
      items[i].style.transform = "translateY(".concat(offsetY, "px)");
    }
  }
};

// add parallax for mouse move
var handleMouseMove = function handleMouseMove(e, itemsContainer) {
  var items = itemsContainer.children;

  // get default direction & scale
  var generalScale = getScale(itemsContainer.dataset);
  var generalDirection = getDirection(itemsContainer.dataset);
  for (var i = 0; i < items.length; i++) {
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    // set transition to make translate smoothly
    items[i].style.transition = 'all 0.2s ease';

    // get item scale
    var _getScale3 = getScale(items[i].dataset, generalScale.x, generalScale.y),
      scaleX = _getScale3.x,
      scaleY = _getScale3.y;

    // get item direction
    var _getDirection2 = getDirection(items[i].dataset, generalDirection.x, generalDirection.y),
      directionX = _getDirection2.x,
      directionY = _getDirection2.y;

    // apply direction
    scaleX *= directionX;
    scaleY *= directionY;
    var offsetX = 0;
    var offsetY = 0;
    if (scaleX !== 0) {
      offsetX = (mouseX - centerX) / (maxOffsetX * scaleX);
    }
    if (scaleY !== 0) {
      offsetY = (mouseY - centerY) / (maxOffsetY * scaleY);
    }
    items[i].style.transform = "translate(".concat(offsetX, "px, ").concat(offsetY, "px)");
  }
};
var handleParallax = function handleParallax() {
  var itemsContainers = document.querySelectorAll('#prlxMouse');
  var _loop = function _loop(i) {
    var _itemsContainers$i$da;
    var mode = (_itemsContainers$i$da = itemsContainers[i].dataset) === null || _itemsContainers$i$da === void 0 ? void 0 : _itemsContainers$i$da.prlxMode;
    if (mode == 'mixed') {
      document.addEventListener('mousemove', function (e) {
        return handleMouseMove(e, itemsContainers[i]);
      });
      document.addEventListener('scroll', function () {
        return handleScroll(itemsContainers[i]);
      });
    } else if (mode == 'scroll') {
      document.addEventListener('scroll', function () {
        return handleScroll(itemsContainers[i]);
      });
    } else {
      document.addEventListener('mousemove', function (e) {
        return handleMouseMove(e, itemsContainers[i]);
      });
    }
  };
  for (var i = 0; i < itemsContainers.length; i++) {
    _loop(i);
  }
};


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleHeaderScroll: function() { return /* binding */ handleHeaderScroll; }
/* harmony export */ });
var handleHeaderScroll = function handleHeaderScroll(headerElement) {
  var headerOffsetY = headerElement.offsetTop;
  window.addEventListener('scroll', function () {
    if (window.scrollY > headerOffsetY) {
      headerElement.classList.add('header-scroll');
    } else {
      headerElement.classList.remove('header-scroll');
    }
  });
};


/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleBurgerMenu: function() { return /* binding */ handleBurgerMenu; }
/* harmony export */ });
var handleBurgerMenu = function handleBurgerMenu(nav) {
  var menu = document.getElementById('burgerMenu');
  var menuBtn = burgerMenu.getElementsByClassName('burger-menu__button')[0];
  var menuBackdrop = burgerMenu.getElementsByClassName('burger-menu__backdrop')[0];
  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('opened');
    nav.classList.toggle('display');
    document.documentElement.classList.toggle('lock');
  });
  menuBackdrop.addEventListener('click', function () {
    menu.classList.remove('opened');
    nav.classList.remove('display');
    document.documentElement.classList.remove('lock');
  });
};


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAccordionOpen: function() { return /* binding */ handleAccordionOpen; }
/* harmony export */ });
var accordion = document.getElementById('accordion');
var accordionItems = accordion.getElementsByClassName('accordion-item');
var handleAccordionOpen = function handleAccordionOpen() {
  var _loop = function _loop(i) {
    accordionItems[i].addEventListener('click', function () {
      accordionItems[i].classList.toggle('opened');
    });
  };
  for (var i = 0; i < accordionItems.length; i++) {
    _loop(i);
  }
};

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_prlxMouse_prlx_mouse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_headerScroll_header_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_burgerMenu_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);





// add parallax effect
(0,_modules_prlxMouse_prlx_mouse_js__WEBPACK_IMPORTED_MODULE_0__.handleParallax)();

// add header scrolling
var header = document.getElementById('header');
(0,_modules_headerScroll_header_scroll_js__WEBPACK_IMPORTED_MODULE_1__.handleHeaderScroll)(header);

// add burgerMenu
var nav = header.getElementsByClassName('header-menu')[0];
(0,_modules_burgerMenu_burgerMenu_js__WEBPACK_IMPORTED_MODULE_2__.handleBurgerMenu)(nav);

// add accordion
(0,_modules_accordion_accordion_js__WEBPACK_IMPORTED_MODULE_3__.handleAccordionOpen)();
}();
/******/ })()
;