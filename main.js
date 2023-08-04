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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getForecast: () => (/* binding */ getForecast),\n/* harmony export */   getWeather: () => (/* binding */ getWeather),\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)\n/* harmony export */ });\nasync function getWeather(url) {\n    const response = await fetch(url, {mode:'cors'})\n    const data = await response.json()\n    \n    return data\n}\n\n/*function getWeatherData(data) {\n    const myData = {\n        name: data.location.name,\n        temperature_c: data.current.temp_c,\n        temperature_f: data.current.temp_f,\n        condition: data.current.condition.text,\n    }\n    return myData\n}*/\n\nasync function getForecast(location) {\n    let url = `http://api.weatherapi.com/v1/forecast.json?key=3e703f9b6f2b40a1ad4122531230308&q=${location.toLowerCase()}`\n    const response = await fetch(url, {mode:'cors'})\n    const data = await response.json()\n    console.log(getForecastData(data))\n    return data\n}\n/*\nfunction getForecastData(data) {\n    const forecast = data.forecast.forecastday\n    const myForecast = {\n        condition: forecast.map(cast => cast.day.condition.text),\n        minTemp_c: forecast.map(cast => cast.day.mintemp_c),\n        minTemp_f: forecast.map(cast => cast.day.mintemp_f),\n        maxTemp_c: forecast.map(cast => cast.day.maxtemp_c),\n        maxTemp_f: forecast.map(cast => cast.day.maxtemp_f)\n    }\n\n    return myForecast\n}\n*/\n\nfunction getWeatherData(data, time) {\n    if(time === \"current\") {\n        const myData = {\n            name: data.location.name,\n            temperature_c: data.current.temp_c,\n            temperature_f: data.current.temp_f,\n            condition: data.current.condition.text,\n        }\n        return myData\n    } else {\n        const forecast = data.forecast.forecastday\n        const myForecast = {\n            condition: forecast.map(cast => cast.day.condition.text),\n            minTemp_c: forecast.map(cast => cast.day.mintemp_c),\n            minTemp_f: forecast.map(cast => cast.day.mintemp_f),\n            maxTemp_c: forecast.map(cast => cast.day.maxtemp_c),\n            maxTemp_f: forecast.map(cast => cast.day.maxtemp_f)\n        }\n    return myForecast\n    }\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/api.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\n\n\nconst dom = (() => {\n    const body = document.body\n    const locationElement = document.querySelector(\"h2\")\n    const imageElement = document.querySelector(\".weather-picture\")\n    const temperatureElement = document.querySelector(\".temperature\")\n    const messageElement = document.querySelector(\".message\")\n\n    let location = \"Milan\"\n\n    let url = `http://api.weatherapi.com/v1/forecast.json?key=3e703f9b6f2b40a1ad4122531230308&q=${location.toLowerCase()}`\n    \n    const iconsFolder = \"../assets/icons/\"\n\n    function getPicture(textCondition) {\n        if(textCondition === \"Sunny\" || textCondition === \"Clear\") {\n            imageElement.src = `${iconsFolder}sunny.svg`\n        } else if (textCondition === \"Partly cloudy\" || textCondition === \"Cloudy\") {\n            imageElement.src = `${iconsFolder}cloudy.svg`\n        } else if (textCondition === \"Patchy rain possible\" || textCondition === \"Light drizzle\" || textCondition === \"Patch light rain\"|| textCondition === \"Light rain\" || textCondition === \"Moderate rain at times\" || textCondition === \"Moderate rain\" || textCondition === \"Light rain shower\") {\n            imageElement.src = `${iconsFolder}rainy.svg`\n        } \n    }\n    \n    async function render(time) {\n        let data = await _api__WEBPACK_IMPORTED_MODULE_0__.getWeather(url)\n        let processedData = _api__WEBPACK_IMPORTED_MODULE_0__.getWeatherData(data, time)\n\n        locationElement.textContent = processedData.name\n        messageElement.textContent = processedData.condition\n        temperatureElement.textContent = `${processedData.temperature_c}°C`\n        getPicture(processedData.condition)\n    }\n\n    render(\"current\")\n\n    return body\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://weather_app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _weather_conditions_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather_conditions.json */ \"./src/weather_conditions.json\");\n\n\n\n\n// DOM\n\nconst temperatureElement = document.querySelector(\".temperature\")\nconst imageElement = document.querySelector(\".weather-picture\")\nconst message = document.querySelector(\".message\")\nlet locationCode;\nconst weatherFolder = \"../assets/weather/64x64/day/\"\nconst iconsFolder = \"../assets/icons/\"\nlet location =  false || \"Milan\"\n\n_dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n\n\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/weather_conditions.json":
/*!*************************************!*\
  !*** ./src/weather_conditions.json ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"code\":1000,\"day\":\"Sunny\",\"night\":\"Clear\",\"icon\":113},{\"code\":1003,\"day\":\"Partly cloudy\",\"night\":\"Partly cloudy\",\"icon\":116},{\"code\":1006,\"day\":\"Cloudy\",\"night\":\"Cloudy\",\"icon\":119},{\"code\":1009,\"day\":\"Overcast\",\"night\":\"Overcast\",\"icon\":122},{\"code\":1030,\"day\":\"Mist\",\"night\":\"Mist\",\"icon\":143},{\"code\":1063,\"day\":\"Patchy rain possible\",\"night\":\"Patchy rain possible\",\"icon\":176},{\"code\":1066,\"day\":\"Patchy snow possible\",\"night\":\"Patchy snow possible\",\"icon\":179},{\"code\":1069,\"day\":\"Patchy sleet possible\",\"night\":\"Patchy sleet possible\",\"icon\":182},{\"code\":1072,\"day\":\"Patchy freezing drizzle possible\",\"night\":\"Patchy freezing drizzle possible\",\"icon\":185},{\"code\":1087,\"day\":\"Thundery outbreaks possible\",\"night\":\"Thundery outbreaks possible\",\"icon\":200},{\"code\":1114,\"day\":\"Blowing snow\",\"night\":\"Blowing snow\",\"icon\":227},{\"code\":1117,\"day\":\"Blizzard\",\"night\":\"Blizzard\",\"icon\":230},{\"code\":1135,\"day\":\"Fog\",\"night\":\"Fog\",\"icon\":248},{\"code\":1147,\"day\":\"Freezing fog\",\"night\":\"Freezing fog\",\"icon\":260},{\"code\":1150,\"day\":\"Patchy light drizzle\",\"night\":\"Patchy light drizzle\",\"icon\":263},{\"code\":1153,\"day\":\"Light drizzle\",\"night\":\"Light drizzle\",\"icon\":266},{\"code\":1168,\"day\":\"Freezing drizzle\",\"night\":\"Freezing drizzle\",\"icon\":281},{\"code\":1171,\"day\":\"Heavy freezing drizzle\",\"night\":\"Heavy freezing drizzle\",\"icon\":284},{\"code\":1180,\"day\":\"Patchy light rain\",\"night\":\"Patchy light rain\",\"icon\":293},{\"code\":1183,\"day\":\"Light rain\",\"night\":\"Light rain\",\"icon\":296},{\"code\":1186,\"day\":\"Moderate rain at times\",\"night\":\"Moderate rain at times\",\"icon\":299},{\"code\":1189,\"day\":\"Moderate rain\",\"night\":\"Moderate rain\",\"icon\":302},{\"code\":1192,\"day\":\"Heavy rain at times\",\"night\":\"Heavy rain at times\",\"icon\":305},{\"code\":1195,\"day\":\"Heavy rain\",\"night\":\"Heavy rain\",\"icon\":308},{\"code\":1198,\"day\":\"Light freezing rain\",\"night\":\"Light freezing rain\",\"icon\":311},{\"code\":1201,\"day\":\"Moderate or heavy freezing rain\",\"night\":\"Moderate or heavy freezing rain\",\"icon\":314},{\"code\":1204,\"day\":\"Light sleet\",\"night\":\"Light sleet\",\"icon\":317},{\"code\":1207,\"day\":\"Moderate or heavy sleet\",\"night\":\"Moderate or heavy sleet\",\"icon\":320},{\"code\":1210,\"day\":\"Patchy light snow\",\"night\":\"Patchy light snow\",\"icon\":323},{\"code\":1213,\"day\":\"Light snow\",\"night\":\"Light snow\",\"icon\":326},{\"code\":1216,\"day\":\"Patchy moderate snow\",\"night\":\"Patchy moderate snow\",\"icon\":329},{\"code\":1219,\"day\":\"Moderate snow\",\"night\":\"Moderate snow\",\"icon\":332},{\"code\":1222,\"day\":\"Patchy heavy snow\",\"night\":\"Patchy heavy snow\",\"icon\":335},{\"code\":1225,\"day\":\"Heavy snow\",\"night\":\"Heavy snow\",\"icon\":338},{\"code\":1237,\"day\":\"Ice pellets\",\"night\":\"Ice pellets\",\"icon\":350},{\"code\":1240,\"day\":\"Light rain shower\",\"night\":\"Light rain shower\",\"icon\":353},{\"code\":1243,\"day\":\"Moderate or heavy rain shower\",\"night\":\"Moderate or heavy rain shower\",\"icon\":356},{\"code\":1246,\"day\":\"Torrential rain shower\",\"night\":\"Torrential rain shower\",\"icon\":359},{\"code\":1249,\"day\":\"Light sleet showers\",\"night\":\"Light sleet showers\",\"icon\":362},{\"code\":1252,\"day\":\"Moderate or heavy sleet showers\",\"night\":\"Moderate or heavy sleet showers\",\"icon\":365},{\"code\":1255,\"day\":\"Light snow showers\",\"night\":\"Light snow showers\",\"icon\":368},{\"code\":1258,\"day\":\"Moderate or heavy snow showers\",\"night\":\"Moderate or heavy snow showers\",\"icon\":371},{\"code\":1261,\"day\":\"Light showers of ice pellets\",\"night\":\"Light showers of ice pellets\",\"icon\":374},{\"code\":1264,\"day\":\"Moderate or heavy showers of ice pellets\",\"night\":\"Moderate or heavy showers of ice pellets\",\"icon\":377},{\"code\":1273,\"day\":\"Patchy light rain with thunder\",\"night\":\"Patchy light rain with thunder\",\"icon\":386},{\"code\":1276,\"day\":\"Moderate or heavy rain with thunder\",\"night\":\"Moderate or heavy rain with thunder\",\"icon\":389},{\"code\":1279,\"day\":\"Patchy light snow with thunder\",\"night\":\"Patchy light snow with thunder\",\"icon\":392},{\"code\":1282,\"day\":\"Moderate or heavy snow with thunder\",\"night\":\"Moderate or heavy snow with thunder\",\"icon\":395}]');\n\n//# sourceURL=webpack://weather_app/./src/weather_conditions.json?");

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