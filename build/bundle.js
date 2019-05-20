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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _util_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/index */ \"./src/server/util/index.js\");\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('public'));\napp.get('*', function (req, res) {\n  var content = Object(_util_index__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(req, res);\n  res.send(content);\n});\nvar server = app.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/util/index.js":
/*!**********************************!*\
  !*** ./src/server/util/index.js ***!
  \**********************************/
/*! exports provided: render */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/edward/git/sun-render/src/server/util/index.js: Identifier 'matchedRoutes' has already been declared (13:10)\\n\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m    \\u001b[36mconst\\u001b[39m matchedRoutes \\u001b[33m=\\u001b[39m []\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 13 | \\u001b[39m    \\u001b[36mconst\\u001b[39m matchedRoutes \\u001b[33m=\\u001b[39m matchRoutes(routes\\u001b[33m,\\u001b[39m req\\u001b[33m.\\u001b[39mpath)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m    \\u001b[36mconst\\u001b[39m content \\u001b[33m=\\u001b[39m renderToString((\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mProvider\\u001b[39m store\\u001b[33m=\\u001b[39m{store}\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:6322:17)\\n    at ScopeHandler.checkRedeclarationInScope (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:3754:12)\\n    at ScopeHandler.declareName (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:3720:12)\\n    at Object.checkLVal (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:8006:22)\\n    at Object.parseVarId (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:10441:10)\\n    at Object.parseVar (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:10412:12)\\n    at Object.parseVarStatement (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:10234:10)\\n    at Object.parseStatementContent (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:9830:21)\\n    at Object.parseStatement (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:9763:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:10340:25)\\n    at Object.parseBlockBody (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:10327:10)\\n    at Object.parseBlock (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:10311:10)\\n    at Object.parseFunctionBody (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:9382:24)\\n    at Object.parseArrowExpression (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:9323:10)\\n    at Object.parseParenAndDistinguishExpression (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:8960:12)\\n    at Object.parseExprAtom (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:8731:21)\\n    at Object.parseExprAtom (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:3596:20)\\n    at Object.parseExprSubscripts (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:8385:23)\\n    at Object.parseMaybeUnary (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:8365:21)\\n    at Object.parseExprOps (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:8252:23)\\n    at Object.parseMaybeConditional (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:8225:23)\\n    at Object.parseMaybeAssign (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:8172:21)\\n    at Object.parseVar (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:10415:26)\\n    at Object.parseVarStatement (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:10234:10)\\n    at Object.parseStatementContent (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:9830:21)\\n    at Object.parseStatement (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:9763:17)\\n    at Object.parseExportDeclaration (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:10956:17)\\n    at Object.maybeParseExportDeclaration (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:10906:31)\\n    at Object.parseExport (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:10835:29)\\n    at Object.parseStatementContent (/Users/edward/git/sun-render/node_modules/@babel/parser/lib/index.js:9867:27)\");\n\n//# sourceURL=webpack:///./src/server/util/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ })

/******/ });