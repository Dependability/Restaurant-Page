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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/pageLoad.js */ \"./src/modules/pageLoad.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\n\n\n\n(0,_modules_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\nfunction refresh() {\n    const content = document.querySelector(\"#content\");\n    content.style=\"\";\n    console.log(content.children)\n    while(content.children.length > 1){\n        content.children[1].remove();\n    }\n\n}\n\n\n\n\nconst homeBut = document.querySelector(\"button.home\");\nhomeBut.classList.add('selected')\nconst menuBut = document.querySelector(\"button.menu\");\nconst contactBut = document.querySelector(\"button.contact\");\nlet selected = homeBut;\nconst deselect = function () {\n    selected.classList.toggle('selected');\n}\n\nhomeBut.addEventListener(\"click\", (e) => {\n    refresh();\n    (0,_modules_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    deselect();\n    selected = homeBut;\n    e.target.classList.add('selected');\n\n})\nmenuBut.addEventListener(\"click\", (e) => {\n    refresh();\n    (0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    deselect();\n    selected = menuBut;\n    e.target.classList.add('selected');\n})\n\ncontactBut.addEventListener(\"click\", (e) => {\n    refresh();\n    (0,_modules_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    deselect();\n    selected = contactBut;\n    e.target.classList.add('selected');\n})\n\nconsole.log(\"Testing.\");\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction contactPage() {\n    const wholeDiv = document.createElement(\"div\");\n    const estabInfo = document.createElement(\"div\");\n    const ownerInfo = document.createElement(\"div\");\n    const contactWrapper = document.createElement(\"div\");\n\n    //Establishment Info\n    const estabHeader = document.createElement(\"h3\");\n    estabHeader.textContent = \"Wonderful Restaurant\"\n\n    const estabAddress = document.createElement(\"p\");\n    estabAddress.textContent = \"Address: 6969 YoMama ln, FL, CA \";\n    \n    const estabPhone = document.createElement(\"p\");\n    estabPhone.textContent = \"Phone: 100-100-1000\";\n\n    //Owner Info\n    const ownerHeader = document.createElement(\"h3\");\n    ownerHeader.textContent = \"Seyi Bakare\";\n\n    const ownerAddress = document.createElement(\"p\");\n    ownerAddress.textContent = \"Address: 6969 YoMama ln, FL, CA \";\n    \n    const ownerPhone = document.createElement(\"p\");\n    ownerPhone.textContent = \"Phone: 100-100-1000\";\n\n\n    //Append\n    estabInfo.appendChild(estabHeader);\n    estabInfo.appendChild(estabAddress);\n    estabInfo.appendChild(estabPhone);\n\n    ownerInfo.appendChild(ownerHeader);\n    ownerInfo.appendChild(ownerAddress);\n    ownerInfo.appendChild(ownerPhone);\n\n    contactWrapper.appendChild(estabInfo);\n    contactWrapper.appendChild(ownerInfo);\n\n    wholeDiv.appendChild(contactWrapper);\n    wholeDiv.classList.add('body');\n    contactWrapper.classList.add('wrapper')\n    contactWrapper.classList.add('hide')\n    const bodyContent = document.querySelector(\"#content\");\n    bodyContent.appendChild(wholeDiv);\n    setTimeout(()=> {\n        contactWrapper.classList.remove('hide')\n    }, 0)\n} \n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPage)\n/* harmony export */ });\nconst items = [];\n\n\nfunction addItem(name, desc, image) {\n    const item = document.createElement(\"div\");\n    const itemImg = document.createElement(\"img\");\n    const itemName = document.createElement(\"h2\");\n    const itemDesc = document.createElement(\"p\");\n    item.classList.add('item')\n\n    itemImg.setAttribute(\"src\", image);\n    itemName.textContent = name;\n    itemDesc.textContent = desc;\n\n    item.appendChild(itemImg);\n    item.appendChild(itemName);\n    item.appendChild(itemDesc);\n\n    items.push(item)\n\n}\nfunction createPage() {\n    const wholeDiv = document.createElement(\"div\");\n    wholeDiv.classList.add('items')\n    wholeDiv.classList.add('hide')\n    addItem(\"Premium Steak\", `Steak that can be selected to be any doneness you prefer. You can even order it\n    still breathing if you wish!`, '');\n    addItem(\"Ice Cream\", \"This can be any flavor out of our 52 flavors. You can say we have a whole deck!\", \"\");\n    addItem(\"Chicken Sandwich\", \"You can never go wrong with Chicken. We have options of spicy, mild, and original\", \"\");\n    addItem(\"Pizza\", \"Every one loves Pizza! You can customize this pizza with any topping you can think of!\", \"\");\n    addItem(\"Beans\", \"Need something healthy? Beans are always a good option.\", \"\");    \n    \n\n    items.forEach(menuItem => {\n        wholeDiv.append(menuItem);\n    })\n    \n    items.splice(0, items.length)\n\n    const bodyContent = document.querySelector(\"#content\");\n    bodyContent.appendChild(wholeDiv);\n    setTimeout(()=> {\n        wholeDiv.classList.remove('hide')\n    }, 0)\n}\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/pageLoad.js":
/*!*********************************!*\
  !*** ./src/modules/pageLoad.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction loadPage() {\n    const bodyContent = document.querySelector(\"#content\");\n\n    // const restaurantImage = document.createElement(\"img\");\n    // restaurantImage.setAttribute(\"src\", \"images/restaurantimage.jpg\");\n    const contentBody = document.createElement('div');\n    contentBody.classList.add('body');\n\n    const bodyWrapper = document.createElement('div');\n    bodyWrapper.classList.add('wrapper');\n    bodyWrapper.classList.add('hide');\n\n    const restaurantHeader = document.createElement(\"h1\");\n    restaurantHeader.textContent = \"Wonderful Restaurant!\";\n\n    const restaurantTitle = document.createElement('h1');\n    restaurantTitle.textContent = \"Wonderful Restaurant!\";\n\n    const restaurantInfo = document.createElement(\"p\");\n    restaurantInfo.textContent = `This restaurant is sure to satisfy your taste buds. You will not leave disappointed. Starting\n                                    with our premium steaks to our sweet homemade icecream, we have anything that you desire!`;\n    const buttonDiv = document.createElement(\"div\");\n    const homeBut = document.createElement(\"button\");\n    const menuBut = document.createElement(\"button\");\n    const contactBut = document.createElement(\"button\");\n\n    homeBut.textContent = \"Home\";\n    homeBut.classList.add(\"home\");\n    menuBut.textContent = \"Menu\";\n    menuBut.classList.add(\"menu\");\n    contactBut.textContent = \"Contact Us\";\n    contactBut.classList.add(\"contact\");\n\n    const navBar = document.createElement('nav');\n    const navWrapper = document.createElement('div')\n    navWrapper.classList.add('nav-wrapper');\n\n    navBar.appendChild(navWrapper)\n    navWrapper.appendChild(restaurantTitle);\n    navWrapper.appendChild(buttonDiv);\n\n    buttonDiv.appendChild(homeBut);\n    buttonDiv.appendChild(menuBut);\n    buttonDiv.appendChild(contactBut);\n    buttonDiv.classList.add(\"buttons\");\n    bodyWrapper.appendChild(restaurantHeader);\n    bodyWrapper.appendChild(restaurantInfo);\n    contentBody.appendChild(bodyWrapper);\n\n    if (!(document.querySelector(\"nav\"))) {\n        bodyContent.appendChild(navBar)\n    }\n    \n    // bodyContent.appendChild(restaurantImage);\n    bodyContent.appendChild(contentBody);\n    setTimeout(()=> {\n        bodyWrapper.classList.remove('hide')\n    }, 0)\n    \n    \n    \n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/pageLoad.js?");

/***/ })

/******/ 	});
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;