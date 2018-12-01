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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Models/Enemy.js":
/*!*****************************!*\
  !*** ./src/Models/Enemy.js ***!
  \*****************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Enemy\", function() { return Enemy; });\nclass Enemy {\r\n\tconstructor(){\r\n\t\tthis.model = {};\r\n\t\tthis.dbId = \"\";\r\n\t}\r\n\tupdate(enemyData){\r\n\t\tfor (let key in this.model){\r\n\t\t\tenemyData[key] = this.model[key];\r\n\t\t}\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/Models/Enemy.js?");

/***/ }),

/***/ "./src/Tangle/Enemies/Slime.js":
/*!*************************************!*\
  !*** ./src/Tangle/Enemies/Slime.js ***!
  \*************************************/
/*! exports provided: Slime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Slime\", function() { return Slime; });\n/* harmony import */ var _Models_Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Models/Enemy */ \"./src/Models/Enemy.js\");\n\r\n\r\nclass Slime extends _Models_Enemy__WEBPACK_IMPORTED_MODULE_0__[\"Enemy\"] {\r\n\tconstructor(){\r\n\t\tsuper();\r\n\t\t/**\r\n\t\t * The curator will use this value to pull the enemy data from the database.\r\n\t\t *\r\n\t\t * Then, it will call Slime.update(data) with the enemy data.\r\n\t\t */\r\n\t\tthis.dbId = \"slime\";\r\n\t\t\r\n\t\t/**\r\n\t\t * - Change HP from 40 -> 80\r\n\t\t * - Change Attack from 1 -> 8\r\n\t\t * - Change defense from 2 -> 4\r\n\t\t * - Change speed from 4 -> 6\r\n\t\t * - Add 50% Thunder resistance\r\n\t\t * - Add a shield artifact\r\n\t\t */\r\n\t\tthis.model = {\r\n\t\t\thp: 80,\r\n\t\t\tbp: Infinity,\r\n\t\t\tattack: 8,\r\n\t\t\tdefense: 4,\r\n\t\t\tspeed: 6,\r\n\t\t\tmagic: 6,\r\n\t\t\timmunity: [\r\n\t\t\t\t{name: 'thunder', modifier: 0.50},\r\n\t\t\t\t{ name: 'ice', modifier: .5 }\r\n\t\t\t],\r\n\t\t\taccessoryID: \"enemy_lshield_self\"\r\n\t\t};\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./src/Tangle/Enemies/Slime.js?");

/***/ }),

/***/ "./src/Tangle/TangleCurator.js":
/*!*************************************!*\
  !*** ./src/Tangle/TangleCurator.js ***!
  \*************************************/
/*! exports provided: TangleCurator, tangleCurator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TangleCurator\", function() { return TangleCurator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tangleCurator\", function() { return tangleCurator; });\n/* harmony import */ var _Enemies_Slime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemies/Slime */ \"./src/Tangle/Enemies/Slime.js\");\n\r\n\r\nclass TangleCurator {\r\n\tconstructor(){\r\n\t\tthis.slime = new _Enemies_Slime__WEBPACK_IMPORTED_MODULE_0__[\"Slime\"]();\r\n\t\t\r\n\t\tthis.update();\r\n\t}\r\n\t\r\n\tupdate(){\r\n\t\tthis.slime.update(window.ig.global.stats.enemies.list[this.slime.dbId]);\r\n\t}\r\n}\r\n\r\nconst tangleCurator = new TangleCurator();\n\n//# sourceURL=webpack:///./src/Tangle/TangleCurator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Tangle_TangleCurator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tangle/TangleCurator */ \"./src/Tangle/TangleCurator.js\");\n\r\n\r\n\r\n(function(){\r\n\t_Tangle_TangleCurator__WEBPACK_IMPORTED_MODULE_0__[\"tangleCurator\"].update();\r\n\tconsole.log(\"'Community Challenge' mod loaded!\");\r\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });