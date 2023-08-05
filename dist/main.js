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

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getForecast: () => (/* binding */ getForecast),\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nasync function getWeather(url) {\n    const response = await fetch(url, {mode:'cors'})\n    const data = await response.json()\n    \n    return data\n}\n\nasync function getForecast(url) {\n    const response = await fetch(url, {mode:'cors'})\n    const data = await response.json()\n    console.log(data)\n    return data\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayLocation: () => (/* binding */ displayLocation),\n/* harmony export */   displayTemperature: () => (/* binding */ displayTemperature),\n/* harmony export */   getCondition: () => (/* binding */ getCondition),\n/* harmony export */   getPicture: () => (/* binding */ getPicture)\n/* harmony export */ });\nfunction displayTemperature(request, data, scale) {\n    const temperatureElement = document.querySelector(\".temperature\")\n    let unit = \"°C\"\n\n    if(request === \"current\") {\n        let tempScale = \"celsius\" \n        temperatureElement.textContent = \"\"\n\n        if(scale !== tempScale) {\n            unit = \"°F\"\n            temperatureElement.textContent =`${data.current.temp_f}${unit}`\n        } else {\n            temperatureElement.textContent = `${data.current.temp_c}${unit}`\n        }\n    } else {\n        let tempScale = \"celsius\"\n        let unit = \"°C\"\n\n        const forecastTempElements = document.querySelectorAll(\".forecast-temp\")\n        \n        for(let i = 0; i < forecastTempElements.length; i++ ){\n            let minTempElement = forecastTempElements[i].querySelector(\".min-temp\")\n            let maxTempElement = forecastTempElements[i].querySelector(\".max-temp\")\n            let castObject = data.forecast.forecastday[i].day\n\n            if(scale !== tempScale) {\n                unit = \"°F\"\n                minTempElement.textContent = `${castObject.mintemp_f}${unit}`\n                maxTempElement.textContent = `${castObject.maxtemp_f}${unit}`\n            } else {\n                minTempElement.textContent = `${castObject.mintemp_c}${unit}`\n                maxTempElement.textContent = `${castObject.maxtemp_c}${unit}`\n            }\n        }\n\n    }\n    \n}\n\nfunction displayLocation(data) {\n    const locationElement = document.querySelector(\"h2\")\n\n    locationElement.textContent = data.location.name\n}\n\nfunction getCondition(request, data) {\n    if(request === \"current\") {\n        const messageElement = document.querySelector(\".message\")\n\n        messageElement.textContent = `${data.current.condition.text}`\n    } else {\n        const forecastMessageElement = document.querySelectorAll(\".forecast-message\") \n        console.log(forecastMessageElement)\n        for(let i = 0; i < forecastMessageElement.length; i++) {\n            let condition = data.forecast.forecastday[i].day.condition.text\n            forecastMessageElement[i].textContent = condition\n        }\n    }\n    \n}\n\nfunction getPicture(request, data) {\n    const imageElement = document.querySelector(\".weather-picture\")\n    const imageFolder = '../assets/icons/'\n    const sunny = `${imageFolder}/sunny.svg`\n    const cloudy = `${imageFolder}/cloudy.svg`\n    const lightning = `${imageFolder}/lightning.svg`\n    const rainy = `${imageFolder}/rainy.svg`\n    const snow = `${imageFolder}/snow.svg`\n    const sunnyArray = [\n        \"clear\",\n        \"sunny\"\n    ]\n    const rainyArray = [\n        \"patchy rain possible\",\n        \"patchy light drizzle\",\n        \"light drizzle\",\n        \"patchy light rain\",\n        \"light rain\",\n        \"moderate rain at times\",\n        \"moderate rain\",\n        \"heavy rain at times\",\n        \"heavy rain\",\n        \"icy pellets\",\n        \"light rain shower\",\n        \"moderate or heavy rain shower\",\n        \"torrential rain shower\",\n        \"patchy sleet possible\",\n        \"light sleet\",\n        \"moderate or heavy sleet\",\n        \"light sleet showers\",\n        \"moderate or heavy sleet showers\"\n    ]\n    const cloudyArray = [\n        \"partly cloudy\",\n        \"overcast\",\n        \"cloudy\",\n        \"mist\",\n        \"fog\"\n    ]\n    const snowArray = [\n        \"patchy snow possible\",\n        \"patchy freezing drizzle possible\",\n        \"blowing snow\",\n        \"blizzard\",\n        \"freezing fog\",\n        \"freezing drizzle\",\n        \"heavy freezing drizzle\",\n        \"light freezing rain\",\n        \"moderate or heavy freezing rain\",\n        \"patchy light snow\",\n        \"light snow\",\n        \"patchy moderate snow\",\n        \"moderate snow\",\n        \"patchy heavy snow\",\n        \"heavy snow\",\n        \"light snow showers\",\n        \"moderate or heavy snow showers\",\n        \"ice pellets\",\n        \"light showers of ice pellets\",\n        \"moderate or heavy showers of ice pellets\"\n    ]\n    const lightningArray = [\n        \"thundery outbreaks possible\",\n        \"patchy light rain with thunder\",\n        \"moderate or heavy rain with thunder\",\n        \"patchy light snow with thunder\",\n        \"moderate or heavy snow with thunder\"\n\n    ]\n    if(request === \"current\") {\n    let condition = data.current.condition.text.toLowerCase()\n        if(sunnyArray.includes(condition)) {\n            imageElement.src = sunny\n            imageElement.classList.add(\"spin\")\n        } else if(cloudyArray.includes(condition)) {\n            imageElement.src = cloudy\n            imageElement.classList.remove(\"spin\")\n        } else if(rainyArray.includes(condition)) {\n            imageElement.src = rainy\n            imageElement.classList.remove(\"spin\")\n        } else if(snowArray.includes(condition)) {\n            imageElement.src = snow\n            imageElement.classList.add(\"spin\")\n        } else if(lightningArray.includes(condition)) {\n            imageElement.src = lightning\n            imageElement.classList.remove(\"spin\")\n        }\n    } else {\n        const forecastPictures = document.querySelectorAll(\".forecast-picture\")\n        for(let i = 0; i < forecastPictures.length; i++) {\n            let forecastCondition = data.forecast.forecastday[i].day.condition.text.toLowerCase()\n            if(sunnyArray.includes(forecastCondition)) {\n                forecastPictures[i].src = sunny\n                forecastPictures[i].classList.add(\"spin\")\n            } else if(cloudyArray.includes(forecastCondition)) {\n                forecastPictures[i].src = cloudy\n                forecastPictures[i].classList.remove(\"spin\")\n            } else if(rainyArray.includes(forecastCondition)) {\n                forecastPictures[i].src = rainy\n                forecastPictures[i].classList.remove(\"spin\")\n            } else if(snowArray.includes(forecastCondition)) {\n                imageElement.src = snow\n                imageElement.classList.add(\"spin\")\n            } else if(lightningArray.includes(forecastCondition)) {\n                forecastPictures[i].src = lightning\n                forecastPictures[i].classList.remove(\"spin\")\n            }\n        }\n        \n    }\n    \n}\n\n\n\n\n    \n\n//# sourceURL=webpack://weather_app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n\nlet location =  false || \"Milan\"\nlet url = `http://api.weatherapi.com/v1/current.json?key=3e703f9b6f2b40a1ad4122531230308&q=${location.toLowerCase()}`\nlet forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=3e703f9b6f2b40a1ad4122531230308&q=${location.toLowerCase()}&days=3`\nconst tempToggle = document.getElementById(\"temp-toggle\")\nlet tempScale = \"celsius\"\n\nasync function getWeatherData(url, tempScale) {\n    let data = await _api__WEBPACK_IMPORTED_MODULE_0__.getWeather(url)\n    let request = \"current\"\n\n    _dom__WEBPACK_IMPORTED_MODULE_1__.displayTemperature(request, data, tempScale)\n    _dom__WEBPACK_IMPORTED_MODULE_1__.displayLocation(data)\n    _dom__WEBPACK_IMPORTED_MODULE_1__.getPicture(request, data)\n    _dom__WEBPACK_IMPORTED_MODULE_1__.getCondition(request, data)\n}\n\nasync function getForecastData(forecastUrl, tempScale) {\n    let data = await _api__WEBPACK_IMPORTED_MODULE_0__.getForecast(forecastUrl)\n    let request = \"forecast\"\n\n    _dom__WEBPACK_IMPORTED_MODULE_1__.displayTemperature(request, data, tempScale)\n    _dom__WEBPACK_IMPORTED_MODULE_1__.getPicture(request, data)\n    _dom__WEBPACK_IMPORTED_MODULE_1__.getCondition(request, data)\n}\n\ntempToggle.addEventListener(\"click\", () => {\n    if(!tempToggle.checked) {\n        getWeatherData(url, \"celsius\")\n        getForecastData(forecastUrl, \"celsius\")\n    } else if(tempToggle.checked) {\n        getWeatherData(url, \"fahrenheit\")\n        getForecastData(forecastUrl, \"fahrenheit\")\n    }\n})\n\ngetForecastData(forecastUrl, tempScale)\ngetWeatherData(url, tempScale)\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

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