/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// Burger Menu\r\n\r\nconst burgerBtn = document.getElementById('burger-btn');\r\nconst burgerMenu = document.querySelector('.burger-menu');\r\nconst burgerWrraper = document.querySelector('.burger-wrraper');\r\nconst burgerLinks = document.querySelectorAll('.burger-menu__link');\r\n\r\nconst hideBurgerMenu = () => {\r\n  document.body.style.overflow = '';\r\n  burgerWrraper.classList.remove('flex');\r\n  burgerMenu.classList.remove('show');\r\n  burgerBtn.classList.remove('active');\r\n}\r\nconst showBurgerMenu = () => {\r\n  document.body.style.overflow = 'hidden';\r\n  burgerWrraper.classList.add('flex');\r\n  burgerMenu.classList.add('show');\r\n  burgerBtn.classList.add('active');\r\n}\r\n\r\nconst toggleBurgerMenu = () => {\r\n  if (burgerMenu.classList.contains('show')) {\r\n    hideBurgerMenu()\r\n  } else {\r\n    showBurgerMenu()\r\n  }\r\n};\r\n\r\nburgerBtn.addEventListener('click', toggleBurgerMenu);\r\n\r\nburgerLinks.forEach(link => {\r\n  link.addEventListener('click', toggleBurgerMenu);\r\n})\r\n\r\n// modals\r\n\r\nconst allOrderBtn = document.querySelectorAll('.order-btn');\r\nconst allJobBtn = document.querySelectorAll('.job-btn');\r\nconst orderModal = document.getElementById('modal-order');\r\nconst jobModal = document.getElementById('modal-job');\r\nconst allCloseModal = document.querySelectorAll('.modal-order__close');\r\n\r\nallOrderBtn.forEach(btn => {\r\n  btn.addEventListener('click', () => {\r\n    orderModal.classList.add('block');\r\n  })\r\n})\r\n\r\nallJobBtn.forEach(btn => {\r\n  btn.addEventListener('click', () => {\r\n    jobModal.classList.add('block');\r\n  })\r\n})\r\n\r\nallCloseModal.forEach(close => {\r\n  close.addEventListener('click', () => {\r\n    if(orderModal.classList.contains('block')) {\r\n      orderModal.classList.remove('block');\r\n    }\r\n    if(jobModal.classList.contains('block')) {\r\n      jobModal.classList.remove('block');\r\n    }\r\n  })\r\n})\r\n\n\n//# sourceURL=webpack://escn/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;