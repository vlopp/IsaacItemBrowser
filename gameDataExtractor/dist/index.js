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
/******/ 	return __webpack_require__(__webpack_require__.s = "./gameDataExtractor/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./gameDataExtractor/src/extract.ts":
/*!******************************************!*\
  !*** ./gameDataExtractor/src/extract.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __webpack_require__(/*! fs */ "fs");
var path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
var fetchWikiData_1 = __webpack_require__(/*! ./fetchWikiData */ "./gameDataExtractor/src/fetchWikiData.ts");
var generateSprites_1 = __importDefault(__webpack_require__(/*! ./generateSprites */ "./gameDataExtractor/src/generateSprites.ts"));
var extractItemData_1 = __importDefault(__webpack_require__(/*! ./extractItemData */ "./gameDataExtractor/src/extractItemData.ts"));
var extractTags_1 = __importDefault(__webpack_require__(/*! ./extractTags */ "./gameDataExtractor/src/extractTags.ts"));
function default_1(_a) {
    var resourceDirPath = _a.resourceDirPath, outputDir = _a.outputDir, customDataPath = _a.customDataPath, formatOutput = _a.formatOutput;
    return __awaiter(this, void 0, void 0, function () {
        var spriteSheetOffsets, itemsData, wikiData, _i, _b, encodedItemName, itemsDataStringified, tagDelimiter, tags, customData, _c, _d, _e, _f, _g, encodedItemName, customTags, _h, customTags_1, customTag, tagsOrdered, _j, _k, tag, outputTagsStringified;
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0: return [4 /*yield*/, generateSprites_1.default({
                        resourceDirPath: resourceDirPath,
                        outputDir: outputDir
                    })];
                case 1:
                    spriteSheetOffsets = _l.sent();
                    return [4 /*yield*/, extractItemData_1.default({
                            resourceDirPath: resourceDirPath,
                            spriteSheetOffsets: spriteSheetOffsets
                        })];
                case 2:
                    itemsData = _l.sent();
                    return [4 /*yield*/, fetchWikiData_1.wikiFetchAll.apply(void 0, Object.keys(itemsData))];
                case 3:
                    wikiData = _l.sent();
                    for (_i = 0, _b = Object.keys(wikiData); _i < _b.length; _i++) {
                        encodedItemName = _b[_i];
                        itemsData[encodedItemName].longDescription = wikiData[encodedItemName];
                    }
                    itemsDataStringified = formatOutput
                        ? JSON.stringify(itemsData, null, 2)
                        : JSON.stringify(itemsData);
                    console.log("Writing to " + path_1.default.resolve(outputDir, "items.json"));
                    return [4 /*yield*/, fs_1.promises.writeFile(path_1.default.resolve(outputDir, "items.json"), itemsDataStringified)];
                case 4:
                    _l.sent();
                    tagDelimiter = /([\s-=,\.])/;
                    return [4 /*yield*/, extractTags_1.default(itemsData, tagDelimiter)];
                case 5:
                    tags = _l.sent();
                    _d = (_c = JSON).parse;
                    return [4 /*yield*/, fs_1.promises.readFile(customDataPath, "utf8")];
                case 6:
                    customData = _d.apply(_c, [_l.sent()]);
                    for (_e = 0, _f = Object.entries(customData); _e < _f.length; _e++) {
                        _g = _f[_e], encodedItemName = _g[0], customTags = _g[1].tags;
                        for (_h = 0, customTags_1 = customTags; _h < customTags_1.length; _h++) {
                            customTag = customTags_1[_h];
                            if (!tags[customTag])
                                tags[customTag] = [];
                            if (!tags[customTag].includes(encodedItemName))
                                tags[customTag].push(encodedItemName);
                        }
                    }
                    tagsOrdered = [];
                    for (_j = 0, _k = Object.keys(tags).sort(); _j < _k.length; _j++) {
                        tag = _k[_j];
                        tagsOrdered.push({ tag: tag, items: tags[tag] });
                    }
                    outputTagsStringified = formatOutput
                        ? JSON.stringify(tagsOrdered, null, 2)
                        : JSON.stringify(tagsOrdered);
                    console.log("Writing to " + path_1.default.resolve(outputDir, "tags.json"));
                    return [4 /*yield*/, fs_1.promises.writeFile(path_1.default.resolve(outputDir, "tags.json"), outputTagsStringified)];
                case 7:
                    _l.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;


/***/ }),

/***/ "./gameDataExtractor/src/extractItemData.ts":
/*!**************************************************!*\
  !*** ./gameDataExtractor/src/extractItemData.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __webpack_require__(/*! fs */ "fs");
var xml2js_es6_promise_1 = __importDefault(__webpack_require__(/*! xml2js-es6-promise */ "xml2js-es6-promise"));
var parseItem_1 = __importDefault(__webpack_require__(/*! ./parseItem */ "./gameDataExtractor/src/parseItem.ts"));
var path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
/* Extract from items.xml */
function default_1(_a) {
    var resourceDirPath = _a.resourceDirPath, spriteSheetOffsets = _a.spriteSheetOffsets;
    return __awaiter(this, void 0, void 0, function () {
        var itemsXmlPath, itemsXml, itemsJson, _b, passive, familiar, active, trinket, itemsData, _i, _c, item, _d, encodedName, gfx, rest;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    itemsXmlPath = path_1.default.resolve(resourceDirPath, "items.xml");
                    return [4 /*yield*/, fs_1.promises.readFile(itemsXmlPath, "utf8")];
                case 1:
                    itemsXml = _e.sent();
                    return [4 /*yield*/, xml2js_es6_promise_1.default(itemsXml)];
                case 2:
                    itemsJson = _e.sent();
                    _b = itemsJson.items, passive = _b.passive, familiar = _b.familiar, active = _b.active, trinket = _b.trinket;
                    itemsData = {};
                    for (_i = 0, _c = __spreadArrays(passive.map(function (x) {
                        x.$.type = "passive";
                        return x.$;
                    }), familiar.map(function (x) {
                        x.$.type = "familiar";
                        return x.$;
                    }), active.map(function (x) {
                        x.$.type = "active";
                        return x.$;
                    }), trinket.map(function (x) {
                        x.$.type = "trinket";
                        return x.$;
                    })); _i < _c.length; _i++) {
                        item = _c[_i];
                        _d = parseItem_1.default(item, spriteSheetOffsets), encodedName = _d.encodedName, gfx = _d.gfx, rest = __rest(_d, ["encodedName", "gfx"]);
                        itemsData[encodedName] = rest;
                    }
                    return [2 /*return*/, itemsData];
            }
        });
    });
}
exports.default = default_1;


/***/ }),

/***/ "./gameDataExtractor/src/extractTags.ts":
/*!**********************************************!*\
  !*** ./gameDataExtractor/src/extractTags.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(itemsData, tagDelimiterRegex) {
    if (tagDelimiterRegex === void 0) { tagDelimiterRegex = /([\s-=,\.])/; }
    return __awaiter(this, void 0, void 0, function () {
        var itemTags, _i, _a, _b, encodedItemName, itemData, tagSources, _c, _d, tag, tagToLower;
        return __generator(this, function (_e) {
            itemTags = {};
            for (_i = 0, _a = Object.entries(itemsData); _i < _a.length; _i++) {
                _b = _a[_i], encodedItemName = _b[0], itemData = _b[1];
                tagSources = [itemData["readableName"], itemData["shortDescription"]];
                for (_c = 0, _d = tagSources
                    .map(function (source) {
                    return source
                        .split(tagDelimiterRegex)
                        .filter(function (x) { return !!x && !tagDelimiterRegex.test(x); });
                })
                    .flat(); _c < _d.length; _c++) {
                    tag = _d[_c];
                    tagToLower = tag.toLowerCase();
                    if (!itemTags[tagToLower])
                        itemTags[tagToLower] = [];
                    if (!itemTags[tagToLower].includes(encodedItemName))
                        itemTags[tagToLower].push(encodedItemName);
                }
            }
            return [2 /*return*/, itemTags];
        });
    });
}
exports.default = default_1;


/***/ }),

/***/ "./gameDataExtractor/src/fetchWikiData.ts":
/*!************************************************!*\
  !*** ./gameDataExtractor/src/fetchWikiData.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(__webpack_require__(/*! cheerio */ "cheerio"));
var node_fetch_1 = __importDefault(__webpack_require__(/*! node-fetch */ "node-fetch"));
var extract = function (elem, indent) {
    if (indent === void 0) { indent = -1; }
    var acc = "";
    if (elem.name === "ul")
        indent++;
    if (elem.attribs && elem.attribs.class === "notitle tooltip") {
        /* Don't extract from item pupup tooltips. */
        try {
            /* Tooltips with icons */
            acc += elem.children[2].children[0].data;
        }
        catch (_a) {
            /* Tooltips without icons */
            acc += elem.childNodes[0].childNodes[0].data;
        }
    }
    else if (elem.childNodes && elem.childNodes.length) {
        for (var _i = 0, _b = elem.childNodes; _i < _b.length; _i++) {
            var x = _b[_i];
            acc += extract(x, indent);
        }
    }
    else if (elem.data) {
        acc += elem.data;
    }
    return " ".repeat(indent) + acc.replace(/(?<!\s) {2,}(?!=\s)/g, " ");
};
exports.wikiFetchSingle = function (itemName) { return __awaiter(void 0, void 0, void 0, function () {
    var response, text, $, a, result, _a, _b, e_1, _c, _d, e_2;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, node_fetch_1.default("https://bindingofisaacrebirth.gamepedia.com/" + itemName.replace(/ /g, "_"))];
            case 1:
                response = _e.sent();
                return [4 /*yield*/, response.text()];
            case 2:
                text = _e.sent();
                $ = cheerio_1.default.load(text);
                a = $("div.mw-parser-output>ul");
                result = {};
                _e.label = 3;
            case 3:
                _e.trys.push([3, 5, , 6]);
                _a = result;
                _b = "effects";
                return [4 /*yield*/, extract(a[0])];
            case 4:
                _a[_b] = _e.sent();
                return [3 /*break*/, 6];
            case 5:
                e_1 = _e.sent();
                result["effects"] = "";
                return [3 /*break*/, 6];
            case 6:
                _e.trys.push([6, 8, , 9]);
                _c = result;
                _d = "notes";
                return [4 /*yield*/, extract(a[1])];
            case 7:
                _c[_d] = _e.sent();
                return [3 /*break*/, 9];
            case 8:
                e_2 = _e.sent();
                result["notes"] = "";
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/, __assign({}, result)];
        }
    });
}); };
exports.wikiFetchAll = function () {
    var encodedItemNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        encodedItemNames[_i] = arguments[_i];
    }
    return __awaiter(void 0, void 0, void 0, function () {
        var data, fetchedData, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = {};
                    console.log("Fetching data for " + encodedItemNames.length + " items. This might take a while.");
                    return [4 /*yield*/, Promise.all(encodedItemNames.map(function (name) { return exports.wikiFetchSingle(name); }))];
                case 1:
                    fetchedData = _a.sent();
                    console.log("Finished fetching data.");
                    for (i = 0; i < encodedItemNames.length; i++) {
                        data[encodedItemNames[i]] = fetchedData[i];
                    }
                    return [2 /*return*/, data];
            }
        });
    });
};


/***/ }),

/***/ "./gameDataExtractor/src/generateCustomDataTemplate.ts":
/*!*************************************************************!*\
  !*** ./gameDataExtractor/src/generateCustomDataTemplate.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __webpack_require__(/*! fs */ "fs");
var extractItemData_1 = __importDefault(__webpack_require__(/*! ./extractItemData */ "./gameDataExtractor/src/extractItemData.ts"));
function default_1(_a) {
    var customDataPath = _a.customDataPath, resourceDirPath = _a.resourceDirPath;
    return __awaiter(this, void 0, void 0, function () {
        var itemData, template, _i, _b, encodedItemName;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, extractItemData_1.default({ resourceDirPath: resourceDirPath, spriteSheetOffsets: undefined })];
                case 1:
                    itemData = _c.sent();
                    template = {};
                    for (_i = 0, _b = Object.keys(itemData); _i < _b.length; _i++) {
                        encodedItemName = _b[_i];
                        template[encodedItemName] = {
                            tags: []
                        };
                    }
                    return [4 /*yield*/, fs_1.promises.writeFile(customDataPath, JSON.stringify(template, null, 2))];
                case 2:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = default_1;


/***/ }),

/***/ "./gameDataExtractor/src/generateSprites.ts":
/*!**************************************************!*\
  !*** ./gameDataExtractor/src/generateSprites.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __webpack_require__(/*! fs */ "fs");
var path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
var spritesmith_1 = __importDefault(__webpack_require__(/*! spritesmith */ "spritesmith"));
function default_1(_a) {
    var resourceDirPath = _a.resourceDirPath, outputDir = _a.outputDir;
    return __awaiter(this, void 0, void 0, function () {
        var trinketsGfxPath, collectiblesGfxPath, _b, spriteSheetOffsets, spritePath, _c;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    trinketsGfxPath = path_1.default.resolve(resourceDirPath, "gfx\\items\\trinkets");
                    collectiblesGfxPath = path_1.default.resolve(resourceDirPath, "gfx\\items\\collectibles");
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 5]);
                    return [4 /*yield*/, fs_1.promises.access(outputDir)];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 5];
                case 3:
                    _b = _d.sent();
                    return [4 /*yield*/, fs_1.promises.mkdir(outputDir)];
                case 4:
                    _d.sent();
                    return [3 /*break*/, 5];
                case 5:
                    spriteSheetOffsets = {};
                    return [4 /*yield*/, fs_1.promises.readdir(trinketsGfxPath)];
                case 6:
                    _c = [(_d.sent()).map(function (file) {
                            return path_1.default.resolve(trinketsGfxPath, file);
                        })];
                    return [4 /*yield*/, fs_1.promises.readdir(collectiblesGfxPath)];
                case 7:
                    spritePath = __spreadArrays.apply(void 0, _c.concat([(_d.sent()).map(function (file) {
                            return path_1.default.resolve(collectiblesGfxPath, file);
                        })])).filter(function (file) { return /(?:trinket|collectibles)_(\d+)_/.exec(file); });
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            spritesmith_1.default.run({ src: spritePath, algorithm: "left-right" }, function (err, res) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            Object.keys(res.coordinates).forEach(function (coord) {
                                                var filename = /((?:trinket|collectibles)_\d+.*?$)/.exec(coord)[1];
                                                spriteSheetOffsets[filename] = res.coordinates[coord].x;
                                            });
                                            return [4 /*yield*/, fs_1.promises.writeFile(path_1.default.resolve(outputDir, "sprites.png"), res.image)];
                                        case 1:
                                            _a.sent();
                                            resolve();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        })];
                case 8:
                    _d.sent();
                    return [2 /*return*/, spriteSheetOffsets];
            }
        });
    });
}
exports.default = default_1;


/***/ }),

/***/ "./gameDataExtractor/src/index.ts":
/*!****************************************!*\
  !*** ./gameDataExtractor/src/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
var generateCustomDataTemplate_1 = __importDefault(__webpack_require__(/*! ./generateCustomDataTemplate */ "./gameDataExtractor/src/generateCustomDataTemplate.ts"));
var extract_1 = __importDefault(__webpack_require__(/*! ./extract */ "./gameDataExtractor/src/extract.ts"));
/* Config */
var config = {
    resourceDirPath: "D:\\Apps\\The.Binding.of.Isaac.Afterbirth.Plus.Update.22\\The.Binding.of.Isaac.Afterbirth.Plus.Update.22\\resources",
    outputDir: path_1.default.resolve(__dirname, "..", "..", "src", "gameData"),
    customDataPath: path_1.default.resolve(__dirname, "..", "customData", "customData.json"),
    formatOutput: true
};
if (process.argv[2] === "--generateTemplate") {
    generateCustomDataTemplate_1.default(config);
}
else {
    extract_1.default(config);
}


/***/ }),

/***/ "./gameDataExtractor/src/parseItem.ts":
/*!********************************************!*\
  !*** ./gameDataExtractor/src/parseItem.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(_a, spriteSheetOffsets) {
    var gfx = _a.gfx, id = _a.id, name = _a.name, description = _a.description, type = _a.type;
    var item = {};
    item["id"] = type !== "trinket" ? parseInt(id) : parseInt(id) + 6666;
    item["readableName"] = name;
    item["encodedName"] = name.replace(/ /g, "_");
    item["type"] = type;
    item["shortDescription"] = description;
    item["longDescription"] = {};
    item["offset"] = spriteSheetOffsets
        ? spriteSheetOffsets[gfx.toLowerCase()]
        : null;
    return item;
}
exports.default = default_1;


/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "spritesmith":
/*!******************************!*\
  !*** external "spritesmith" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("spritesmith");

/***/ }),

/***/ "xml2js-es6-promise":
/*!*************************************!*\
  !*** external "xml2js-es6-promise" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xml2js-es6-promise");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map