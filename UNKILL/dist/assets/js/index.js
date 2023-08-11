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

eval("__webpack_require__.r(__webpack_exports__);\n// Burger Menu\r\n\r\nconst burgerBtn = document.getElementById('burger-btn');\r\nconst burgerMenu = document.querySelector('.burger-menu');\r\nconst burgerWrraper = document.querySelector('.burger-wrraper');\r\nconst burgerLinks = document.querySelectorAll('.burger-menu__link');\r\nconst burgerClose = document.querySelector('.burger-menu__icon');\r\n\r\nconst hideBurgerMenu = () => {\r\n  document.body.style.overflow = '';\r\n  burgerWrraper.classList.remove('flex');\r\n  burgerMenu.classList.remove('show');\r\n  burgerBtn.classList.remove('active');\r\n}\r\nconst showBurgerMenu = () => {\r\n  document.body.style.overflow = 'hidden';\r\n  burgerWrraper.classList.add('flex');\r\n  burgerMenu.classList.add('show');\r\n  burgerBtn.classList.add('active');\r\n}\r\n\r\nconst toggleBurgerMenu = () => {\r\n  if (burgerMenu.classList.contains('show')) {\r\n    hideBurgerMenu()\r\n  } else {\r\n    showBurgerMenu()\r\n  }\r\n};\r\n\r\nburgerBtn.addEventListener('click', toggleBurgerMenu);\r\n\r\nburgerLinks.forEach(link => {\r\n  link.addEventListener('click', toggleBurgerMenu);\r\n})\r\n\r\nburgerClose.addEventListener('click', hideBurgerMenu)\r\n\r\n//  Select\r\n\r\ntry {\r\n  const getTemplate = (data = [], placeholder, selectedId) => {\r\n    let text = placeholder ?? 'placeholder не указан'\r\n  \r\n    const items = data.map(item => {\r\n        let cls = ''\r\n        if (item.id === selectedId) {\r\n            text = item.value\r\n            cls = 'selected'\r\n        }\r\n        return `\r\n            <li class=\"select__item ${cls}\" data-type=\"item\" data-id=\"${item.id}\">${item.value}</li>\r\n        `\r\n    })\r\n    return `\r\n        <input type=\"hidden\" class=\"hidden__input\">\r\n        <div class=\"select__backdrop\" data-type=\"backdrop\"></div>\r\n        <div class=\"select__input\" data-type=\"input\">\r\n            <span data-type=\"value\">${text}</span>\r\n            <svg class=\"select__icon\" width=\"16\" height=\"10\" viewBox=\"0 0 16 10\" data-type=\"arrow\">\r\n                  <use xlink:href=\"#selectArrow\"></use>\r\n            </svg>\r\n        </div>\r\n        <div class=\"select__dropdown\">\r\n            <ul class=\"select__list\">\r\n                ${items.join('')}\r\n            </ul>\r\n        </div>\r\n    `\r\n  }\r\n  class Select {\r\n    constructor(selector, options) {\r\n        this.$el = document.querySelector(selector)\r\n        this.options = options\r\n        this.selectedId = options.selectedId\r\n  \r\n        this.render()\r\n        this.setup()\r\n    }\r\n  \r\n    render() {\r\n        const { placeholder, data } = this.options;\r\n        this.$el.classList.add('select');\r\n        this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);\r\n    }\r\n    setup() {\r\n        this.clickHandler = this.clickHandler.bind(this);\r\n        this.$el.addEventListener('click', this.clickHandler);\r\n        this.$arrow = this.$el.querySelector('[data-type=\"arrow\"]');\r\n        this.$value = this.$el.querySelector('[data-type=\"value\"]');\r\n    }\r\n  \r\n    clickHandler(event) {\r\n        const { type } = event.target.dataset;\r\n        if (type === 'input') {\r\n            this.toggle();\r\n        } else if (type === 'item') {\r\n            const id = event.target.dataset.id\r\n            this.select(id);\r\n        }  else if (type === 'backdrop') {\r\n            this.close();\r\n        }\r\n    }\r\n  \r\n    get isOpen() {\r\n        return this.$el.classList.contains('open');\r\n    }\r\n  \r\n    get current() {\r\n        return this.options.data.find(item => item.id === this.selectedId);\r\n    }\r\n  \r\n    select(id) {\r\n        this.selectedId = id;\r\n        this.$value.textContent = this.current.value;\r\n  \r\n        this.$el.querySelectorAll(`[data-type=\"item\"]`).forEach( el => el.classList.remove('selected'));\r\n        this.$el.querySelector(`[data-id=\"${id}\"]`).classList.add('selected');\r\n  \r\n        this.options.onSelect ? this.options.onSelect(this.current) : null;\r\n        this.close();\r\n    }\r\n  \r\n    toggle() {\r\n        this.isOpen ? this.close() : this.open();\r\n    }\r\n  \r\n    open() {\r\n        this.$el.classList.add('open');\r\n        this.$arrow.classList.add('open');\r\n    }\r\n  \r\n    close() {\r\n        this.$el.classList.remove('open');\r\n        this.$arrow.classList.remove('open');\r\n    }\r\n  \r\n    destroy() {\r\n        this.$el.removeEventListener('click', this.clickHandler);\r\n        this.$el.innerHTML = '';\r\n    }\r\n  }\r\n  \r\n  const headerSelect = new Select('.header__select', {\r\n    placeholder: 'Меню',\r\n    selectedId: '1',\r\n    data: [\r\n        {id: 'journal', value: 'Журналы'},\r\n        {id: 'author', value: 'Авторам'},\r\n        {id: 'contact', value: 'Контакты'},\r\n    ],\r\n    onSelect(item) {\r\n        const input = document.querySelector('.hidden__input')\r\n        input.value = item.value\r\n    } \r\n  })\r\n} catch (error) {\r\n  console.log(`Возникла ошибка ${error.name} : ${error.message}`);\r\n}\r\n\r\n\r\n// slider\r\n\r\nconst bookSlider = new Swiper('.bool-slider', {\r\n    slidesPerView: 'auto',\r\n    slidesPerGroup: 1,\r\n    spaceBetween: 24,\r\n  });\r\n\n\n//# sourceURL=webpack://escn/./src/scripts/index.js?");

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