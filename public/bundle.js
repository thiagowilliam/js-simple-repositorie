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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\src\\\\main.js: Can not use keyword 'await' outside an async function (25:21)\\n\\n\\u001b[0m \\u001b[90m 23 | \\u001b[39m    \\u001b[36mif\\u001b[39m (repoInput\\u001b[33m.\\u001b[39mlength \\u001b[33m===\\u001b[39m \\u001b[35m0\\u001b[39m) \\u001b[36mreturn\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 24 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 25 | \\u001b[39m    \\u001b[36mconst\\u001b[39m response \\u001b[33m=\\u001b[39m await api\\u001b[33m.\\u001b[39mget(\\u001b[32m`/repos/${repoInput}`\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                     \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 26 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 27 | \\u001b[39m    console\\u001b[33m.\\u001b[39mlog(response)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 28 | \\u001b[39m\\u001b[0m\\n    at Parser.raise (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7044:17)\\n    at Parser.checkReservedWord (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10435:14)\\n    at Parser.parseIdentifierName (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10397:12)\\n    at Parser.parseIdentifier (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10369:23)\\n    at Parser.parseExprAtom (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9544:27)\\n    at Parser.parseExprSubscripts (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9287:23)\\n    at Parser.parseMaybeUnary (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9267:21)\\n    at Parser.parseExprOps (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9137:23)\\n    at Parser.parseMaybeConditional (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9110:23)\\n    at Parser.parseMaybeAssign (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9065:21)\\n    at Parser.parseVar (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11373:26)\\n    at Parser.parseVarStatement (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11192:10)\\n    at Parser.parseStatementContent (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10791:21)\\n    at Parser.parseStatement (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10724:17)\\n    at Parser.parseBlockOrModuleBlockBody (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11298:25)\\n    at Parser.parseBlockBody (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11285:10)\\n    at Parser.parseBlock (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11269:10)\\n    at Parser.parseFunctionBody (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10285:24)\\n    at Parser.parseFunctionBodyAndFinish (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10254:10)\\n    at Parser.parseMethod (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10216:10)\\n    at Parser.pushClassMethod (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11704:30)\\n    at Parser.parseClassMemberWithIsStatic (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11621:12)\\n    at Parser.parseClassMember (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11563:10)\\n    at D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11518:14\\n    at Parser.withTopicForbiddingContext (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10599:14)\\n    at Parser.parseClassBody (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11495:10)\\n    at Parser.parseClass (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11469:22)\\n    at Parser.parseStatementContent (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10766:21)\\n    at Parser.parseStatement (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10724:17)\\n    at Parser.parseBlockOrModuleBlockBody (D:\\\\projetos\\\\estudos-javascritpt\\\\buscando-repositorios\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11298:25)\");\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });