/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: rgb(189, 189, 189);\n}\n\n.appItem {\n  height: 50px;\n  background-color: white;\n}\n\n.btmDiv {\n  height: 65px;\n  background-color: rgb(240, 240, 240);\n}\n\n.noToDos {\n  color: rgb(148, 74, 64);\n}\n\n.appItemEdit {\n  height: 50px;\n  background-color: lightyellow;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B","sourcesContent":["body {\n  background-color: rgb(189, 189, 189);\n}\n\n.appItem {\n  height: 50px;\n  background-color: white;\n}\n\n.btmDiv {\n  height: 65px;\n  background-color: rgb(240, 240, 240);\n}\n\n.noToDos {\n  color: rgb(148, 74, 64);\n}\n\n.appItemEdit {\n  height: 50px;\n  background-color: lightyellow;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/checkboxes.js":
/*!***************************!*\
  !*** ./src/checkboxes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");
//  Module: related to the status updates with completed checkboxes


const taskCompleted = (position2chage, value) => {
  // Gets list from local storage
  const toDos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();

  const task2modify = toDos[position2chage];
  task2modify.completed = value;
  toDos[position2chage] = task2modify;

  // Set items to storage
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(toDos);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCompleted);

/***/ }),

/***/ "./src/clearCompleted.js":
/*!*******************************!*\
  !*** ./src/clearCompleted.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearCompleted)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _isCompleted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isCompleted */ "./src/isCompleted.js");
// Module for clearing completed tasks method




function clearCompleted() {
  // gets todos from local storage
  const tasks = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();

  // create new array from filter()
  const uncompletedTasks = tasks.filter(_isCompleted__WEBPACK_IMPORTED_MODULE_1__["default"]);

  _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(uncompletedTasks);
}

/***/ }),

/***/ "./src/isCompleted.js":
/*!****************************!*\
  !*** ./src/isCompleted.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnsUncompleted)
/* harmony export */ });
//  Module

function returnsUncompleted(task) {
  return !task.completed;
}

/***/ }),

/***/ "./src/removeTask.js":
/*!***************************!*\
  !*** ./src/removeTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeCompleted)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");
// Module for removing task



function removeCompleted(index) {
  // gets todos from local storage
  const todos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();

  todos.splice(index, 1);

  _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(todos);
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Store)
/* harmony export */ });
// Store Class: Encapsulates de locacl storage
class Store {
  // gets tasks from storage and returns an array of objects
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static addTask(task) {
    const tasks = this.getTasks();
    tasks.push(task);
    this.setTasks(tasks);
  }

  // index - saves the total of tasks created ever
  static getIndexTotal() {
    let total;
    if (localStorage.getItem('index') === null) {
      total = 1;
    } else {
      total = JSON.parse(localStorage.getItem('index'));
    }

    return total;
  }

  // increments the index in storage and saves it again
  static setsIndexTotalPlusOne() {
    let total = this.getIndexTotal();
    total += 1;
    localStorage.setItem('index', JSON.stringify(total));
  }

  static setIndex(number) {
    localStorage.setItem('index', JSON.stringify(number));
  }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
// Task Class: Represents a to-do
class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  task2string() {
    const srt = `Index: ${this.index} - Description: ${this.description} - Completed: ${this.completed} --`;
    return srt;
  }
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _checkboxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkboxes */ "./src/checkboxes.js");
/* harmony import */ var _removeTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeTask */ "./src/removeTask.js");
/* harmony import */ var _updateTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateTask */ "./src/updateTask.js");
/* harmony import */ var _clearCompleted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clearCompleted */ "./src/clearCompleted.js");
// UI Class: Handles UI Tasks








class UI {
  static addApp() {
    this.addTitle();
    this.addForm();
    this.addEmptyUL();
    const todos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
    this.addTasksUI(todos);
    this.addbottombtn();
  }

  static addTitle() {
    const appDiv = document.querySelector('#appDiv');

    const div4title = document.createElement('div');
    div4title.className = 'd-flex justify-content-start align-items-center border-bottom border-2 px-2 appItem';

    const title = document.createElement('p');
    title.className = 'fs-5 m-0';
    title.innerText = "Today's To Do";

    const icon = document.createElement('i');
    icon.className = 'fas fa-sync-alt ms-auto p-2';

    div4title.appendChild(title);
    div4title.appendChild(icon);

    appDiv.appendChild(div4title);
  }

  static addForm() {
    const appDiv = document.querySelector('#appDiv');

    const div4form = document.createElement('div');
    const form = document.createElement('form');
    form.className = 'd-flex justify-content-start align-items-center border-bottom border-2 px-2 appItem';
    form.action = 'submit';
    form.id = 'addTaskForm';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'taskDesc';
    input.placeholder = 'Add to your list...';
    input.className = 'form-control border-0 fst-italic p-0';

    const icon = document.createElement('i');
    icon.className = 'fas fa-sign-in-alt ms-auto p-2';

    const aSubmit = document.createElement('a');
    aSubmit.setAttribute('id', 'clickEnterIcon');

    form.appendChild(input);
    aSubmit.appendChild(icon);
    form.appendChild(aSubmit);
    div4form.appendChild(form);

    appDiv.appendChild(div4form);
  }

  static addEmptyUL() {
    const appDiv = document.querySelector('#appDiv');

    const div4list = document.createElement('div');
    const list = document.createElement('ul');
    list.id = 'task-list';
    list.className = 'p-0 m-0';
    div4list.appendChild(list);

    appDiv.appendChild(div4list);
  }

  static addEmptyToDoMessage() {
    const list = document.querySelector('#task-list');

    const item = document.createElement('li'); // creates list item
    item.className = 'd-flex justify-content-center align-items-center border-bottom border-2 px-2 appItem';

    const p = document.createElement('p');
    p.className = 'm-0 p-0 noToDos';
    p.innerHTML = "No to-do's right now";

    item.appendChild(p);
    list.appendChild(item);
  }

  static addTasksUI(tasks) {
    // Sorts array by index
    tasks.sort((a, b) => a.index - b.index);
    // Iterates over array tasks to populate HTML list
    if (tasks.length === 0) {
      this.addEmptyToDoMessage();
    } else {
      tasks.forEach((task) => this.addTaskToList(task));
    }
  }

  static addTaskToList(task) {
    const list = document.querySelector('#task-list');

    const item = document.createElement('li'); // creates list item
    item.className = 'd-flex justify-content-around align-items-center border-bottom border-2 px-2 appItem';

    // creates div for normal view
    const divNormal = document.createElement('div');
    divNormal.className = 'd-flex align-items-center normalView';

    const checkbox = document.createElement('input'); // creates checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.completed;
    checkbox.className = 'form-check-label p-2';
    divNormal.appendChild(checkbox); // appends checkbox to item

    const text = document.createElement('p'); // creates p
    text.textContent = task.description;
    text.className = 'm-0 p-2';
    if (task.completed === true) {
      text.classList.add('text-decoration-line-through');
    }
    divNormal.appendChild(text); // appends p to item

    // Create div for edit view
    const divEdit = document.createElement('DIV');
    divEdit.className = 'd-none flex-fill align-items-center editView';

    const inputEdit = document.createElement('INPUT');
    inputEdit.setAttribute('type', 'text');
    inputEdit.className = 'form-control border-0 p-0';
    inputEdit.value = task.description;

    divEdit.appendChild(inputEdit);

    // Creates div for icons
    const div4Icons = document.createElement('div');
    div4Icons.className = 'ms-auto';

    const iconEdit = document.createElement('i'); // creates edit icon
    iconEdit.className = 'fas fa-ellipsis-v p-2 edtIcn';
    div4Icons.appendChild(iconEdit); // appends edit icon to item

    const iconAccept = document.createElement('i'); // creates accept icon
    iconAccept.className = 'fas fa-check-circle p-2 d-none acceptIcn';
    div4Icons.appendChild(iconAccept); // appends accpet icon to item

    const iconRemove = document.createElement('i'); // creates remove icon
    iconRemove.className = 'fas fa-trash p-2 d-none removeIcn';
    div4Icons.appendChild(iconRemove); // appends remove icon to item

    item.appendChild(divNormal);
    item.appendChild(divEdit);
    item.appendChild(div4Icons);

    list.appendChild(item); // appends item to list
  }

  static addbottombtn() {
    const appDiv = document.querySelector('#appDiv');

    const btmDiv = document.createElement('div');
    btmDiv.className = 'd-flex justify-content-center align-items-center border btmDiv';

    const pBtm = document.createElement('p');
    pBtm.textContent = 'Clear all completed';
    pBtm.className = 'm-0 btmText';
    pBtm.id = 'pBtm';

    btmDiv.appendChild(pBtm);
    appDiv.appendChild(btmDiv);
  }

  static addTaskStore(description) {
    // gets index from storage
    const index = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getIndexTotal();
    // instantiates a new task
    const task = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](description, false, index);

    // Add task to local storage
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(task);
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setsIndexTotalPlusOne();
  }

  static taskCompleted(index, value) {
    (0,_checkboxes__WEBPACK_IMPORTED_MODULE_2__["default"])(index, value);
  }

  static changeLiToEditMode(li) {
    let classesLi = li.className;
    classesLi = classesLi.replace('appItem', 'appItemEdit');
    li.className = classesLi;
    const childrenLi = li.children;

    // change clases of divs
    const normalView = childrenLi[0];
    let classesNV = normalView.className;
    classesNV = classesNV.replace('d-flex', 'd-none');
    normalView.className = classesNV;

    const editView = childrenLi[1];
    let classesE = editView.className;
    classesE = classesE.replace('d-none', 'd-flex');
    editView.className = classesE;

    // show appropriate icons in edit view
    const divIcons = childrenLi[2];
    const icons = divIcons.children;
    icons[0].classList.add('d-none');
    this.changeClassToElement(icons[1], 'd-none', '');
    this.changeClassToElement(icons[2], 'd-none', '');

    // sets focus con the input to edit
    const inputEdit = editView.querySelector('input');
    inputEdit.id = 'inputEdit';
    inputEdit.focus();
  }

  static changeClassToElement(item, oldClass, newClass) {
    let classesItem = item.className;
    classesItem = classesItem.replace(oldClass, newClass);
    item.className = classesItem;
  }

  static removeTask(index) {
    (0,_removeTask__WEBPACK_IMPORTED_MODULE_3__["default"])(index);
    this.updateIndexes();
  }

  static updateTask(index, newDesc) {
    (0,_updateTask__WEBPACK_IMPORTED_MODULE_4__["default"])(index, newDesc);
  }

  static clearCompleted() {
    (0,_clearCompleted__WEBPACK_IMPORTED_MODULE_5__["default"])();
    this.updateIndexes();
  }

  static updateIndexes() {
    const todos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
    for (let i = 1; i <= todos.length; i += 1) {
      const element = todos[i - 1];
      element.index = i;
    }
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(todos);
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setIndex(todos.length + 1);
  }
}

/***/ }),

/***/ "./src/updateTask.js":
/*!***************************!*\
  !*** ./src/updateTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.js");
// Module for updating task



function updateTask(index, newDesc) {
  // gets todos from local storage
  const todos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  // sets new description in respective index
  todos[index].description = newDesc;
  // sets new todos to storage
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(todos);
}

/***/ }),

/***/ "./src/validateDescription.js":
/*!************************************!*\
  !*** ./src/validateDescription.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateDescription)
/* harmony export */ });
//  Module: validates the text from user
function validateDescription(text) {
  if (text === null || text === '') {
    return false;
  }
  return true;
}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _validateDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateDescription */ "./src/validateDescription.js");
/* eslint-disable no-restricted-globals */




// When content loads
document.addEventListener('DOMContentLoaded', _ui__WEBPACK_IMPORTED_MODULE_1__["default"].addApp());

// Event: when form is submitted
document.querySelector('#addTaskForm').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const taskDescription = document.querySelector('#taskDesc').value.trim();
  if (!(0,_validateDescription__WEBPACK_IMPORTED_MODULE_2__["default"])(taskDescription)) {
    // empty input
  } else {
    // Add task
    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].addTaskStore(taskDescription);
    // reloads page
    location.reload();
  }
});

// Event: when icon is clicked to add task
document.querySelector('#clickEnterIcon').addEventListener('click', () => {
  // Get form values
  const taskDescription = document.querySelector('#taskDesc').value.trim();
  if (!(0,_validateDescription__WEBPACK_IMPORTED_MODULE_2__["default"])(taskDescription)) {
    // empty input
  } else {
    // Add task
    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].addTaskStore(taskDescription);

    // reloads page
    location.reload();
  }
});

// Event: when checkboxes are clicked
document.querySelector('#task-list').addEventListener('change', (e) => {
  // checks if this is trigerring for the correct element
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    // Gets the state of the checked checkbox
    const checkboxState = e.target.checked;

    const ulList = document.querySelector('#task-list');
    const itemChecked = e.target.parentElement.parentElement;
    const nodes = Array.from(ulList.children);
    const index = nodes.indexOf(itemChecked);

    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].taskCompleted(index, checkboxState);

    // Reload page
    location.reload();
  }
});

// Event: editing and removing
document.querySelector('#task-list').addEventListener('click', (e) => {
  const classesIcn = e.target.className;
  const classesArr = classesIcn.split(' ');

  const li = e.target.parentElement.parentElement;
  const ulList = document.querySelector('#task-list');
  const nodes = Array.from(ulList.children);
  const index = nodes.indexOf(li);

  // when the three dots icon gets clicked
  if (classesArr.indexOf('edtIcn') !== -1) {
    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].changeLiToEditMode(li);
  }

  // when the check icon gets clicked to UPDATE
  if (classesArr.indexOf('removeIcn') !== -1) {
    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].removeTask(index);

    // Reload page
    location.reload();
  }

  // when the the trash icon gets clicked to REMOVE
  if (classesArr.indexOf('acceptIcn') !== -1) {
    const newDesc = document.querySelector('#inputEdit').value;
    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].updateTask(index, newDesc);

    // Reload page
    location.reload();
  }
});

document.querySelector('#pBtm').addEventListener('click', () => {
  _ui__WEBPACK_IMPORTED_MODULE_1__["default"].clearCompleted();

  // Reload page
  location.reload();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdFQUFtQjtBQUMxQjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUksd0RBQWU7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUkseURBQWdCOztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDhEQUFxQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzREFBYTs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQWE7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxFQUFFLDBEQUFpQjs7QUFFbkI7QUFDQTtBQUNBLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tTZXR1cDIvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrU2V0dXAyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrU2V0dXAyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja1NldHVwMi8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vd2VicGFja1NldHVwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrU2V0dXAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrU2V0dXAyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tTZXR1cDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja1NldHVwMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tTZXR1cDIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrU2V0dXAyLy4vc3JjL2NoZWNrYm94ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja1NldHVwMi8uL3NyYy9jbGVhckNvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrU2V0dXAyLy4vc3JjL2lzQ29tcGxldGVkLmpzIiwid2VicGFjazovL3dlYnBhY2tTZXR1cDIvLi9zcmMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrU2V0dXAyLy4vc3JjL3N0b3JlLmpzIiwid2VicGFjazovL3dlYnBhY2tTZXR1cDIvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrU2V0dXAyLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYnBhY2tTZXR1cDIvLi9zcmMvdXBkYXRlVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrU2V0dXAyLy4vc3JjL3ZhbGlkYXRlRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFja1NldHVwMi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrU2V0dXAyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2tTZXR1cDIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2tTZXR1cDIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrU2V0dXAyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja1NldHVwMi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xcbn1cXG5cXG4uYXBwSXRlbSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ0bURpdiB7XFxuICBoZWlnaHQ6IDY1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5ub1RvRG9zIHtcXG4gIGNvbG9yOiByZ2IoMTQ4LCA3NCwgNjQpO1xcbn1cXG5cXG4uYXBwSXRlbUVkaXQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4OSwgMTg5LCAxODkpO1xcbn1cXG5cXG4uYXBwSXRlbSB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ0bURpdiB7XFxuICBoZWlnaHQ6IDY1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5ub1RvRG9zIHtcXG4gIGNvbG9yOiByZ2IoMTQ4LCA3NCwgNjQpO1xcbn1cXG5cXG4uYXBwSXRlbUVkaXQge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vICBNb2R1bGU6IHJlbGF0ZWQgdG8gdGhlIHN0YXR1cyB1cGRhdGVzIHdpdGggY29tcGxldGVkIGNoZWNrYm94ZXNcbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuY29uc3QgdGFza0NvbXBsZXRlZCA9IChwb3NpdGlvbjJjaGFnZSwgdmFsdWUpID0+IHtcbiAgLy8gR2V0cyBsaXN0IGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCB0b0RvcyA9IFN0b3JlLmdldFRhc2tzKCk7XG5cbiAgY29uc3QgdGFzazJtb2RpZnkgPSB0b0Rvc1twb3NpdGlvbjJjaGFnZV07XG4gIHRhc2sybW9kaWZ5LmNvbXBsZXRlZCA9IHZhbHVlO1xuICB0b0Rvc1twb3NpdGlvbjJjaGFnZV0gPSB0YXNrMm1vZGlmeTtcblxuICAvLyBTZXQgaXRlbXMgdG8gc3RvcmFnZVxuICBTdG9yZS5zZXRUYXNrcyh0b0Rvcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrQ29tcGxldGVkOyIsIi8vIE1vZHVsZSBmb3IgY2xlYXJpbmcgY29tcGxldGVkIHRhc2tzIG1ldGhvZFxuXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgcmV0dXJuc1VuY29tcGxldGVkIGZyb20gJy4vaXNDb21wbGV0ZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbXBsZXRlZCgpIHtcbiAgLy8gZ2V0cyB0b2RvcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgdGFza3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuXG4gIC8vIGNyZWF0ZSBuZXcgYXJyYXkgZnJvbSBmaWx0ZXIoKVxuICBjb25zdCB1bmNvbXBsZXRlZFRhc2tzID0gdGFza3MuZmlsdGVyKHJldHVybnNVbmNvbXBsZXRlZCk7XG5cbiAgU3RvcmUuc2V0VGFza3ModW5jb21wbGV0ZWRUYXNrcyk7XG59IiwiLy8gIE1vZHVsZVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5zVW5jb21wbGV0ZWQodGFzaykge1xuICByZXR1cm4gIXRhc2suY29tcGxldGVkO1xufSIsIi8vIE1vZHVsZSBmb3IgcmVtb3ZpbmcgdGFza1xuXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZUNvbXBsZXRlZChpbmRleCkge1xuICAvLyBnZXRzIHRvZG9zIGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCB0b2RvcyA9IFN0b3JlLmdldFRhc2tzKCk7XG5cbiAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcblxuICBTdG9yZS5zZXRUYXNrcyh0b2Rvcyk7XG59IiwiLy8gU3RvcmUgQ2xhc3M6IEVuY2Fwc3VsYXRlcyBkZSBsb2NhY2wgc3RvcmFnZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuICAvLyBnZXRzIHRhc2tzIGZyb20gc3RvcmFnZSBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzXG4gIHN0YXRpYyBnZXRUYXNrcygpIHtcbiAgICBsZXQgdGFza3M7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpID09PSBudWxsKSB7XG4gICAgICB0YXNrcyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIHN0YXRpYyBzZXRUYXNrcyh0YXNrcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XG4gICAgY29uc3QgdGFza3MgPSB0aGlzLmdldFRhc2tzKCk7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICB0aGlzLnNldFRhc2tzKHRhc2tzKTtcbiAgfVxuXG4gIC8vIGluZGV4IC0gc2F2ZXMgdGhlIHRvdGFsIG9mIHRhc2tzIGNyZWF0ZWQgZXZlclxuICBzdGF0aWMgZ2V0SW5kZXhUb3RhbCgpIHtcbiAgICBsZXQgdG90YWw7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbmRleCcpID09PSBudWxsKSB7XG4gICAgICB0b3RhbCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdGFsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW5kZXgnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgLy8gaW5jcmVtZW50cyB0aGUgaW5kZXggaW4gc3RvcmFnZSBhbmQgc2F2ZXMgaXQgYWdhaW5cbiAgc3RhdGljIHNldHNJbmRleFRvdGFsUGx1c09uZSgpIHtcbiAgICBsZXQgdG90YWwgPSB0aGlzLmdldEluZGV4VG90YWwoKTtcbiAgICB0b3RhbCArPSAxO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbmRleCcsIEpTT04uc3RyaW5naWZ5KHRvdGFsKSk7XG4gIH1cblxuICBzdGF0aWMgc2V0SW5kZXgobnVtYmVyKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2luZGV4JywgSlNPTi5zdHJpbmdpZnkobnVtYmVyKSk7XG4gIH1cbn0iLCIvLyBUYXNrIENsYXNzOiBSZXByZXNlbnRzIGEgdG8tZG9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICB0YXNrMnN0cmluZygpIHtcbiAgICBjb25zdCBzcnQgPSBgSW5kZXg6ICR7dGhpcy5pbmRleH0gLSBEZXNjcmlwdGlvbjogJHt0aGlzLmRlc2NyaXB0aW9ufSAtIENvbXBsZXRlZDogJHt0aGlzLmNvbXBsZXRlZH0gLS1gO1xuICAgIHJldHVybiBzcnQ7XG4gIH1cbn0iLCIvLyBVSSBDbGFzczogSGFuZGxlcyBVSSBUYXNrc1xuXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHRhc2tDb21wbGV0ZWQgZnJvbSAnLi9jaGVja2JveGVzJztcbmltcG9ydCByZW1vdmVUYXNrIGZyb20gJy4vcmVtb3ZlVGFzayc7XG5pbXBvcnQgdXBkYXRlVGFzayBmcm9tICcuL3VwZGF0ZVRhc2snO1xuaW1wb3J0IGNsZWFyQ29tcGxldGVkIGZyb20gJy4vY2xlYXJDb21wbGV0ZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gIHN0YXRpYyBhZGRBcHAoKSB7XG4gICAgdGhpcy5hZGRUaXRsZSgpO1xuICAgIHRoaXMuYWRkRm9ybSgpO1xuICAgIHRoaXMuYWRkRW1wdHlVTCgpO1xuICAgIGNvbnN0IHRvZG9zID0gU3RvcmUuZ2V0VGFza3MoKTtcbiAgICB0aGlzLmFkZFRhc2tzVUkodG9kb3MpO1xuICAgIHRoaXMuYWRkYm90dG9tYnRuKCk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGl0bGUoKSB7XG4gICAgY29uc3QgYXBwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcERpdicpO1xuXG4gICAgY29uc3QgZGl2NHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2NHRpdGxlLmNsYXNzTmFtZSA9ICdkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci0yIHB4LTIgYXBwSXRlbSc7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAnZnMtNSBtLTAnO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiVG9kYXkncyBUbyBEb1wiO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9ICdmYXMgZmEtc3luYy1hbHQgbXMtYXV0byBwLTInO1xuXG4gICAgZGl2NHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBkaXY0dGl0bGUuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBhcHBEaXYuYXBwZW5kQ2hpbGQoZGl2NHRpdGxlKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRGb3JtKCkge1xuICAgIGNvbnN0IGFwcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBEaXYnKTtcblxuICAgIGNvbnN0IGRpdjRmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci0yIHB4LTIgYXBwSXRlbSc7XG4gICAgZm9ybS5hY3Rpb24gPSAnc3VibWl0JztcbiAgICBmb3JtLmlkID0gJ2FkZFRhc2tGb3JtJztcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0LmlkID0gJ3Rhc2tEZXNjJztcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdBZGQgdG8geW91ciBsaXN0Li4uJztcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sIGJvcmRlci0wIGZzdC1pdGFsaWMgcC0wJztcblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgaWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXNpZ24taW4tYWx0IG1zLWF1dG8gcC0yJztcblxuICAgIGNvbnN0IGFTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NsaWNrRW50ZXJJY29uJyk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICBhU3VibWl0LmFwcGVuZENoaWxkKGljb24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYVN1Ym1pdCk7XG4gICAgZGl2NGZvcm0uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBhcHBEaXYuYXBwZW5kQ2hpbGQoZGl2NGZvcm0pO1xuICB9XG5cbiAgc3RhdGljIGFkZEVtcHR5VUwoKSB7XG4gICAgY29uc3QgYXBwRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcERpdicpO1xuXG4gICAgY29uc3QgZGl2NGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBsaXN0LmlkID0gJ3Rhc2stbGlzdCc7XG4gICAgbGlzdC5jbGFzc05hbWUgPSAncC0wIG0tMCc7XG4gICAgZGl2NGxpc3QuYXBwZW5kQ2hpbGQobGlzdCk7XG5cbiAgICBhcHBEaXYuYXBwZW5kQ2hpbGQoZGl2NGxpc3QpO1xuICB9XG5cbiAgc3RhdGljIGFkZEVtcHR5VG9Eb01lc3NhZ2UoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcblxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyAvLyBjcmVhdGVzIGxpc3QgaXRlbVxuICAgIGl0ZW0uY2xhc3NOYW1lID0gJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci0yIHB4LTIgYXBwSXRlbSc7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuY2xhc3NOYW1lID0gJ20tMCBwLTAgbm9Ub0Rvcyc7XG4gICAgcC5pbm5lckhUTUwgPSBcIk5vIHRvLWRvJ3MgcmlnaHQgbm93XCI7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKHApO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH1cblxuICBzdGF0aWMgYWRkVGFza3NVSSh0YXNrcykge1xuICAgIC8vIFNvcnRzIGFycmF5IGJ5IGluZGV4XG4gICAgdGFza3Muc29ydCgoYSwgYikgPT4gYS5pbmRleCAtIGIuaW5kZXgpO1xuICAgIC8vIEl0ZXJhdGVzIG92ZXIgYXJyYXkgdGFza3MgdG8gcG9wdWxhdGUgSFRNTCBsaXN0XG4gICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5hZGRFbXB0eVRvRG9NZXNzYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHRoaXMuYWRkVGFza1RvTGlzdCh0YXNrKSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZFRhc2tUb0xpc3QodGFzaykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG5cbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgLy8gY3JlYXRlcyBsaXN0IGl0ZW1cbiAgICBpdGVtLmNsYXNzTmFtZSA9ICdkLWZsZXgganVzdGlmeS1jb250ZW50LWFyb3VuZCBhbGlnbi1pdGVtcy1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItMiBweC0yIGFwcEl0ZW0nO1xuXG4gICAgLy8gY3JlYXRlcyBkaXYgZm9yIG5vcm1hbCB2aWV3XG4gICAgY29uc3QgZGl2Tm9ybWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Tm9ybWFsLmNsYXNzTmFtZSA9ICdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG5vcm1hbFZpZXcnO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyAvLyBjcmVhdGVzIGNoZWNrYm94XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGVkO1xuICAgIGNoZWNrYm94LmNsYXNzTmFtZSA9ICdmb3JtLWNoZWNrLWxhYmVsIHAtMic7XG4gICAgZGl2Tm9ybWFsLmFwcGVuZENoaWxkKGNoZWNrYm94KTsgLy8gYXBwZW5kcyBjaGVja2JveCB0byBpdGVtXG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpOyAvLyBjcmVhdGVzIHBcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICB0ZXh0LmNsYXNzTmFtZSA9ICdtLTAgcC0yJztcbiAgICBpZiAodGFzay5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgndGV4dC1kZWNvcmF0aW9uLWxpbmUtdGhyb3VnaCcpO1xuICAgIH1cbiAgICBkaXZOb3JtYWwuYXBwZW5kQ2hpbGQodGV4dCk7IC8vIGFwcGVuZHMgcCB0byBpdGVtXG5cbiAgICAvLyBDcmVhdGUgZGl2IGZvciBlZGl0IHZpZXdcbiAgICBjb25zdCBkaXZFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgZGl2RWRpdC5jbGFzc05hbWUgPSAnZC1ub25lIGZsZXgtZmlsbCBhbGlnbi1pdGVtcy1jZW50ZXIgZWRpdFZpZXcnO1xuXG4gICAgY29uc3QgaW5wdXRFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU5QVVQnKTtcbiAgICBpbnB1dEVkaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBpbnB1dEVkaXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCBib3JkZXItMCBwLTAnO1xuICAgIGlucHV0RWRpdC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICBkaXZFZGl0LmFwcGVuZENoaWxkKGlucHV0RWRpdCk7XG5cbiAgICAvLyBDcmVhdGVzIGRpdiBmb3IgaWNvbnNcbiAgICBjb25zdCBkaXY0SWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXY0SWNvbnMuY2xhc3NOYW1lID0gJ21zLWF1dG8nO1xuXG4gICAgY29uc3QgaWNvbkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7IC8vIGNyZWF0ZXMgZWRpdCBpY29uXG4gICAgaWNvbkVkaXQuY2xhc3NOYW1lID0gJ2ZhcyBmYS1lbGxpcHNpcy12IHAtMiBlZHRJY24nO1xuICAgIGRpdjRJY29ucy5hcHBlbmRDaGlsZChpY29uRWRpdCk7IC8vIGFwcGVuZHMgZWRpdCBpY29uIHRvIGl0ZW1cblxuICAgIGNvbnN0IGljb25BY2NlcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7IC8vIGNyZWF0ZXMgYWNjZXB0IGljb25cbiAgICBpY29uQWNjZXB0LmNsYXNzTmFtZSA9ICdmYXMgZmEtY2hlY2stY2lyY2xlIHAtMiBkLW5vbmUgYWNjZXB0SWNuJztcbiAgICBkaXY0SWNvbnMuYXBwZW5kQ2hpbGQoaWNvbkFjY2VwdCk7IC8vIGFwcGVuZHMgYWNjcGV0IGljb24gdG8gaXRlbVxuXG4gICAgY29uc3QgaWNvblJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTsgLy8gY3JlYXRlcyByZW1vdmUgaWNvblxuICAgIGljb25SZW1vdmUuY2xhc3NOYW1lID0gJ2ZhcyBmYS10cmFzaCBwLTIgZC1ub25lIHJlbW92ZUljbic7XG4gICAgZGl2NEljb25zLmFwcGVuZENoaWxkKGljb25SZW1vdmUpOyAvLyBhcHBlbmRzIHJlbW92ZSBpY29uIHRvIGl0ZW1cblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGl2Tm9ybWFsKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRpdkVkaXQpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGl2NEljb25zKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7IC8vIGFwcGVuZHMgaXRlbSB0byBsaXN0XG4gIH1cblxuICBzdGF0aWMgYWRkYm90dG9tYnRuKCkge1xuICAgIGNvbnN0IGFwcERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBEaXYnKTtcblxuICAgIGNvbnN0IGJ0bURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bURpdi5jbGFzc05hbWUgPSAnZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGJvcmRlciBidG1EaXYnO1xuXG4gICAgY29uc3QgcEJ0bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwQnRtLnRleHRDb250ZW50ID0gJ0NsZWFyIGFsbCBjb21wbGV0ZWQnO1xuICAgIHBCdG0uY2xhc3NOYW1lID0gJ20tMCBidG1UZXh0JztcbiAgICBwQnRtLmlkID0gJ3BCdG0nO1xuXG4gICAgYnRtRGl2LmFwcGVuZENoaWxkKHBCdG0pO1xuICAgIGFwcERpdi5hcHBlbmRDaGlsZChidG1EaXYpO1xuICB9XG5cbiAgc3RhdGljIGFkZFRhc2tTdG9yZShkZXNjcmlwdGlvbikge1xuICAgIC8vIGdldHMgaW5kZXggZnJvbSBzdG9yYWdlXG4gICAgY29uc3QgaW5kZXggPSBTdG9yZS5nZXRJbmRleFRvdGFsKCk7XG4gICAgLy8gaW5zdGFudGlhdGVzIGEgbmV3IHRhc2tcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soZGVzY3JpcHRpb24sIGZhbHNlLCBpbmRleCk7XG5cbiAgICAvLyBBZGQgdGFzayB0byBsb2NhbCBzdG9yYWdlXG4gICAgU3RvcmUuYWRkVGFzayh0YXNrKTtcbiAgICBTdG9yZS5zZXRzSW5kZXhUb3RhbFBsdXNPbmUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YXNrQ29tcGxldGVkKGluZGV4LCB2YWx1ZSkge1xuICAgIHRhc2tDb21wbGV0ZWQoaW5kZXgsIHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBjaGFuZ2VMaVRvRWRpdE1vZGUobGkpIHtcbiAgICBsZXQgY2xhc3Nlc0xpID0gbGkuY2xhc3NOYW1lO1xuICAgIGNsYXNzZXNMaSA9IGNsYXNzZXNMaS5yZXBsYWNlKCdhcHBJdGVtJywgJ2FwcEl0ZW1FZGl0Jyk7XG4gICAgbGkuY2xhc3NOYW1lID0gY2xhc3Nlc0xpO1xuICAgIGNvbnN0IGNoaWxkcmVuTGkgPSBsaS5jaGlsZHJlbjtcblxuICAgIC8vIGNoYW5nZSBjbGFzZXMgb2YgZGl2c1xuICAgIGNvbnN0IG5vcm1hbFZpZXcgPSBjaGlsZHJlbkxpWzBdO1xuICAgIGxldCBjbGFzc2VzTlYgPSBub3JtYWxWaWV3LmNsYXNzTmFtZTtcbiAgICBjbGFzc2VzTlYgPSBjbGFzc2VzTlYucmVwbGFjZSgnZC1mbGV4JywgJ2Qtbm9uZScpO1xuICAgIG5vcm1hbFZpZXcuY2xhc3NOYW1lID0gY2xhc3Nlc05WO1xuXG4gICAgY29uc3QgZWRpdFZpZXcgPSBjaGlsZHJlbkxpWzFdO1xuICAgIGxldCBjbGFzc2VzRSA9IGVkaXRWaWV3LmNsYXNzTmFtZTtcbiAgICBjbGFzc2VzRSA9IGNsYXNzZXNFLnJlcGxhY2UoJ2Qtbm9uZScsICdkLWZsZXgnKTtcbiAgICBlZGl0Vmlldy5jbGFzc05hbWUgPSBjbGFzc2VzRTtcblxuICAgIC8vIHNob3cgYXBwcm9wcmlhdGUgaWNvbnMgaW4gZWRpdCB2aWV3XG4gICAgY29uc3QgZGl2SWNvbnMgPSBjaGlsZHJlbkxpWzJdO1xuICAgIGNvbnN0IGljb25zID0gZGl2SWNvbnMuY2hpbGRyZW47XG4gICAgaWNvbnNbMF0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgdGhpcy5jaGFuZ2VDbGFzc1RvRWxlbWVudChpY29uc1sxXSwgJ2Qtbm9uZScsICcnKTtcbiAgICB0aGlzLmNoYW5nZUNsYXNzVG9FbGVtZW50KGljb25zWzJdLCAnZC1ub25lJywgJycpO1xuXG4gICAgLy8gc2V0cyBmb2N1cyBjb24gdGhlIGlucHV0IHRvIGVkaXRcbiAgICBjb25zdCBpbnB1dEVkaXQgPSBlZGl0Vmlldy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGlucHV0RWRpdC5pZCA9ICdpbnB1dEVkaXQnO1xuICAgIGlucHV0RWRpdC5mb2N1cygpO1xuICB9XG5cbiAgc3RhdGljIGNoYW5nZUNsYXNzVG9FbGVtZW50KGl0ZW0sIG9sZENsYXNzLCBuZXdDbGFzcykge1xuICAgIGxldCBjbGFzc2VzSXRlbSA9IGl0ZW0uY2xhc3NOYW1lO1xuICAgIGNsYXNzZXNJdGVtID0gY2xhc3Nlc0l0ZW0ucmVwbGFjZShvbGRDbGFzcywgbmV3Q2xhc3MpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gY2xhc3Nlc0l0ZW07XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlVGFzayhpbmRleCkge1xuICAgIHJlbW92ZVRhc2soaW5kZXgpO1xuICAgIHRoaXMudXBkYXRlSW5kZXhlcygpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRhc2soaW5kZXgsIG5ld0Rlc2MpIHtcbiAgICB1cGRhdGVUYXNrKGluZGV4LCBuZXdEZXNjKTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhckNvbXBsZXRlZCgpIHtcbiAgICBjbGVhckNvbXBsZXRlZCgpO1xuICAgIHRoaXMudXBkYXRlSW5kZXhlcygpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZUluZGV4ZXMoKSB7XG4gICAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRvZG9zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdG9kb3NbaSAtIDFdO1xuICAgICAgZWxlbWVudC5pbmRleCA9IGk7XG4gICAgfVxuICAgIFN0b3JlLnNldFRhc2tzKHRvZG9zKTtcbiAgICBTdG9yZS5zZXRJbmRleCh0b2Rvcy5sZW5ndGggKyAxKTtcbiAgfVxufSIsIi8vIE1vZHVsZSBmb3IgdXBkYXRpbmcgdGFza1xuXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVRhc2soaW5kZXgsIG5ld0Rlc2MpIHtcbiAgLy8gZ2V0cyB0b2RvcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuICAvLyBzZXRzIG5ldyBkZXNjcmlwdGlvbiBpbiByZXNwZWN0aXZlIGluZGV4XG4gIHRvZG9zW2luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gIC8vIHNldHMgbmV3IHRvZG9zIHRvIHN0b3JhZ2VcbiAgU3RvcmUuc2V0VGFza3ModG9kb3MpO1xufSIsIi8vICBNb2R1bGU6IHZhbGlkYXRlcyB0aGUgdGV4dCBmcm9tIHVzZXJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlRGVzY3JpcHRpb24odGV4dCkge1xuICBpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgVUkgZnJvbSAnLi91aSc7XG5pbXBvcnQgdmFsaWRhdGVEZXNjcmlwdGlvbiBmcm9tICcuL3ZhbGlkYXRlRGVzY3JpcHRpb24nO1xuXG4vLyBXaGVuIGNvbnRlbnQgbG9hZHNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5hZGRBcHAoKSk7XG5cbi8vIEV2ZW50OiB3aGVuIGZvcm0gaXMgc3VibWl0dGVkXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gR2V0IGZvcm0gdmFsdWVzXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzYycpLnZhbHVlLnRyaW0oKTtcbiAgaWYgKCF2YWxpZGF0ZURlc2NyaXB0aW9uKHRhc2tEZXNjcmlwdGlvbikpIHtcbiAgICAvLyBlbXB0eSBpbnB1dFxuICB9IGVsc2Uge1xuICAgIC8vIEFkZCB0YXNrXG4gICAgVUkuYWRkVGFza1N0b3JlKHRhc2tEZXNjcmlwdGlvbik7XG4gICAgLy8gcmVsb2FkcyBwYWdlXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn0pO1xuXG4vLyBFdmVudDogd2hlbiBpY29uIGlzIGNsaWNrZWQgdG8gYWRkIHRhc2tcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGlja0VudGVySWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyBHZXQgZm9ybSB2YWx1ZXNcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tEZXNjJykudmFsdWUudHJpbSgpO1xuICBpZiAoIXZhbGlkYXRlRGVzY3JpcHRpb24odGFza0Rlc2NyaXB0aW9uKSkge1xuICAgIC8vIGVtcHR5IGlucHV0XG4gIH0gZWxzZSB7XG4gICAgLy8gQWRkIHRhc2tcbiAgICBVSS5hZGRUYXNrU3RvcmUodGFza0Rlc2NyaXB0aW9uKTtcblxuICAgIC8vIHJlbG9hZHMgcGFnZVxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG59KTtcblxuLy8gRXZlbnQ6IHdoZW4gY2hlY2tib3hlcyBhcmUgY2xpY2tlZFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gIC8vIGNoZWNrcyBpZiB0aGlzIGlzIHRyaWdlcnJpbmcgZm9yIHRoZSBjb3JyZWN0IGVsZW1lbnRcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgJiYgZS50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgIC8vIEdldHMgdGhlIHN0YXRlIG9mIHRoZSBjaGVja2VkIGNoZWNrYm94XG4gICAgY29uc3QgY2hlY2tib3hTdGF0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICBjb25zdCB1bExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4gICAgY29uc3QgaXRlbUNoZWNrZWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHVsTGlzdC5jaGlsZHJlbik7XG4gICAgY29uc3QgaW5kZXggPSBub2Rlcy5pbmRleE9mKGl0ZW1DaGVja2VkKTtcblxuICAgIFVJLnRhc2tDb21wbGV0ZWQoaW5kZXgsIGNoZWNrYm94U3RhdGUpO1xuXG4gICAgLy8gUmVsb2FkIHBhZ2VcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufSk7XG5cbi8vIEV2ZW50OiBlZGl0aW5nIGFuZCByZW1vdmluZ1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgY2xhc3Nlc0ljbiA9IGUudGFyZ2V0LmNsYXNzTmFtZTtcbiAgY29uc3QgY2xhc3Nlc0FyciA9IGNsYXNzZXNJY24uc3BsaXQoJyAnKTtcblxuICBjb25zdCBsaSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgdWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20odWxMaXN0LmNoaWxkcmVuKTtcbiAgY29uc3QgaW5kZXggPSBub2Rlcy5pbmRleE9mKGxpKTtcblxuICAvLyB3aGVuIHRoZSB0aHJlZSBkb3RzIGljb24gZ2V0cyBjbGlja2VkXG4gIGlmIChjbGFzc2VzQXJyLmluZGV4T2YoJ2VkdEljbicpICE9PSAtMSkge1xuICAgIFVJLmNoYW5nZUxpVG9FZGl0TW9kZShsaSk7XG4gIH1cblxuICAvLyB3aGVuIHRoZSBjaGVjayBpY29uIGdldHMgY2xpY2tlZCB0byBVUERBVEVcbiAgaWYgKGNsYXNzZXNBcnIuaW5kZXhPZigncmVtb3ZlSWNuJykgIT09IC0xKSB7XG4gICAgVUkucmVtb3ZlVGFzayhpbmRleCk7XG5cbiAgICAvLyBSZWxvYWQgcGFnZVxuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgLy8gd2hlbiB0aGUgdGhlIHRyYXNoIGljb24gZ2V0cyBjbGlja2VkIHRvIFJFTU9WRVxuICBpZiAoY2xhc3Nlc0Fyci5pbmRleE9mKCdhY2NlcHRJY24nKSAhPT0gLTEpIHtcbiAgICBjb25zdCBuZXdEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0RWRpdCcpLnZhbHVlO1xuICAgIFVJLnVwZGF0ZVRhc2soaW5kZXgsIG5ld0Rlc2MpO1xuXG4gICAgLy8gUmVsb2FkIHBhZ2VcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwQnRtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIFVJLmNsZWFyQ29tcGxldGVkKCk7XG5cbiAgLy8gUmVsb2FkIHBhZ2VcbiAgbG9jYXRpb24ucmVsb2FkKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=