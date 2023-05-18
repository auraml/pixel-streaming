import React__default, { useReducer, useContext, createContext, createElement, useState, useRef, useEffect, forwardRef, useImperativeHandle, Fragment } from 'react';
import semver from 'semver';
import { useToaster, Notification, Button, Navbar, Nav, Drawer, Divider, Stack, CustomProvider } from 'rsuite';
import moment from 'moment';
import uuid from 'short-uuid';
import { JSONTree } from 'react-json-tree';
import { createUseStyles } from 'react-jss';
import { Logger, Config, PixelStreaming } from 'metaeditor4-ue';
import { PixelStreamingApplicationStyle, Application } from 'metaeditor4-ui';
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';
import PlayOutlineIcon from '@rsuite/icons/PlayOutline';
import { Portal } from 'react-portal';
import useResizeObserver from 'use-resize-observer';
import CheckRoundIcon from '@rsuite/icons/CheckRound';
import ToolsIcon from '@rsuite/icons/Tools';

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var KEYS = {
  UPDATE: 'UPDATE'
};
function Reducer(state, action) {
  var type = action.type,
    anValue = action.payload;
  if (type === KEYS.UPDATE) {
    return _extends({}, state, anValue);
  }
  return state;
}

var initialState = {
  packageVersion: {
    latest: null,
    current: null,
    needUpdate: false
  },
  showPreloader: true,
  licenseData: null
};

var name = "pixel-streaming";
var names = [
	"pixel-streaming",
	"unreal-engine",
	"react-pixel-streaming",
	"unreal-engine-pixel-streaming",
	"metaeditor",
	"metaverses",
	"unrealos",
	"react-unreal-engine"
];
var version = "4.2.50";
var author = "Unrealos";
var license = "MIT";
var description = "The Pixel Streaming library for ReactJS facilitates the integration of Unreal Engine v.5 into a web browser. It enables the transmission of commands and receipt of callbacks from the stream server once Unreal Engine is launched.";
var homepage = "https://metaeditor.io";
var repository = {
	type: "git",
	url: "git+https://github.com/markolofsen/metaeditor.git"
};
var bugs = {
	url: "https://github.com/markolofsen/metaeditor/issues"
};
var keywords = [
	"reactjs",
	"node",
	"typescript",
	"pixel streaming",
	"unreal engine",
	"epic games",
	"metaverse",
	"metaeditor",
	"unrealos"
];
var main = "dist/index.js";
var typings = "dist/index.d.ts";
var files = [
	"dist"
];
var engines = {
	node: ">=v16"
};
var scripts = {
	"copy-files": "copyfiles -u 1 src/styles/*.css dist/",
	dev: "tsdx watch NODE_ENV=development",
	start: "tsdx watch",
	build: "tsdx build --transpileOnly && pnpm copy-files",
	test: "tsdx test",
	lint: "tsdx lint",
	prepare: "tsdx build",
	symlink: "npm link ../library ../ui-library",
	"build-all": "yarn symlink && cd ../library && npm run build && cd ../ui-library && npm run build-all"
};
var husky = {
	hooks: {
		"pre-commit": "tsdx lint"
	}
};
var prettier = {
	printWidth: 80,
	semi: false,
	singleQuote: false,
	trailingComma: "es5"
};
var module = "dist/index.esm.js";
var peerDependencies = {
	react: "^18.1.0",
	rsuite: "^5.28.1"
};
var dependencies = {
	"metaeditor4-ue": "^0.3.0",
	"metaeditor4-ui": "^0.2.0",
	moment: "^2.29.4",
	"react-json-tree": "^0.18.0",
	"react-jss": "^10.10.0",
	"react-portal": "^4.2.2",
	semver: "^7.3.8",
	"short-uuid": "^4.2.2",
	"use-resize-observer": "latest"
};
var devDependencies = {
	"@testing-library/jest-dom": "^5.16.4",
	"@testing-library/react": "^13.2.0",
	"@testing-library/user-event": "^13.5.0",
	"@types/react-portal": "^4.0.4",
	"@typescript-eslint/eslint-plugin": "^5.16.0",
	"@typescript-eslint/parser": "^5.16.0",
	copyfiles: "^2.4.1",
	eslint: "^8.11.0",
	husky: "^7.0.2",
	"react-scripts": "5.0.1",
	rsuite: "^5.28.1",
	tsdx: "^0.14.1",
	tslib: "^2.3.1",
	typescript: "^4.6.3"
};
var pkg = {
	name: name,
	names: names,
	version: version,
	author: author,
	license: license,
	description: description,
	"public": true,
	homepage: homepage,
	repository: repository,
	bugs: bugs,
	keywords: keywords,
	main: main,
	typings: typings,
	files: files,
	engines: engines,
	scripts: scripts,
	husky: husky,
	prettier: prettier,
	module: module,
	peerDependencies: peerDependencies,
	dependencies: dependencies,
	devDependencies: devDependencies
};

// package
var isDev = process.env.NODE_ENV == 'development';
var apiHost = 'https://unrealos.com';
var project = {
  isDev: isDev,
  apiHost: apiHost,
  name: 'MetaEditor',
  "package": {
    name: pkg.name,
    version: pkg.version,
    npmUrl: "https://www.npmjs.com/package/" + pkg.name
  },
  license: {
    excludes: ['localhost', '127.0.0.1', '0.0.0.0', 'player.metaeditor.io'],
    checkUrl: apiHost + "/api/unrealos/license/check/"
  },
  urls: {
    main: 'http://metaeditor.io/',
    docs: 'https://metaeditor.io/docs',
    support: 'https://unrealos.com/p/contacts/',
    buy: 'https://unrealos.com/apps/metaeditor/',
    signalingServer: 'https://github.com/markolofsen/metaeditor/releases/tag/signaling-server',
    onlinePlayer: 'https://player.metaeditor.io'
  }
};

function checkPackageVersion() {
  return _checkPackageVersion.apply(this, arguments);
}
function _checkPackageVersion() {
  _checkPackageVersion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var url, v;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = "https://registry.npmjs.org/" + project["package"].name;
          _context.next = 3;
          return new Promise(function (resolve, reject) {
            fetch(url).then(function (res) {
              return res.json();
            }).then(function (res) {
              try {
                var latest = res['dist-tags'].latest;
                var current = project["package"].version;
                var needUpdate = semver.gt(latest, current);
                resolve({
                  latest: latest,
                  current: current,
                  needUpdate: needUpdate
                });
              } catch (err) {
                console.error("Can't parse npm data");
                resolve(null);
              }
            })["catch"](function (err) {
              console.error("Can't check package version");
              resolve(false);
            });
          });
        case 3:
          v = _context.sent;
          return _context.abrupt("return", v);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _checkPackageVersion.apply(this, arguments);
}

function checkLicenseKey() {
  return _checkLicenseKey.apply(this, arguments);
}
function _checkLicenseKey() {
  _checkLicenseKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var url, v;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = project.license.checkUrl;
          _context.next = 3;
          return new Promise(function (resolve, reject) {
            var host = window.location.hostname;
            if (project.license.excludes.includes(host)) {
              resolve({
                is_exclusion: true,
                is_valid: false
              });
              return;
            }
            fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                host: host
              })
            }).then(function (res) {
              return res.json();
            }).then(function (res) {
              // alert(JSON.stringify(res, null, 2))
              resolve({
                is_exclusion: false,
                is_valid: res.is_valid
              });
            })["catch"](function (err) {
              if (project.isDev) {
                console.error("Can't check license");
              }
              resolve({
                is_exclusion: false,
                is_valid: true
              });
            });
          });
        case 3:
          v = _context.sent;
          return _context.abrupt("return", v);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _checkLicenseKey.apply(this, arguments);
}

var actions = function actions() {
  // ** States
  var _React$useReducer = useReducer(Reducer, initialState),
    state = _React$useReducer[0],
    _dispatch = _React$useReducer[1];
  // ** Classes
  var cls = new ( /*#__PURE__*/function () {
    function _class() {}
    var _proto = _class.prototype;
    _proto.dispatch = function dispatch(payload) {
      _dispatch({
        type: KEYS.UPDATE,
        payload: payload
      });
    };
    _proto.checkVersion = /*#__PURE__*/function () {
      var _checkVersion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var packageVersion;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return checkPackageVersion();
            case 2:
              packageVersion = _context.sent;
              this.dispatch({
                packageVersion: packageVersion
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function checkVersion() {
        return _checkVersion.apply(this, arguments);
      }
      return checkVersion;
    }();
    _proto.checkApiKey = /*#__PURE__*/function () {
      var _checkApiKey = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var licenseData;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return checkLicenseKey();
            case 2:
              licenseData = _context2.sent;
              // alert(JSON.stringify(licenseData, null, 2))
              this.dispatch({
                licenseData: licenseData
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function checkApiKey() {
        return _checkApiKey.apply(this, arguments);
      }
      return checkApiKey;
    }();
    _proto.hidePreloader = function hidePreloader() {
      this.dispatch({
        showPreloader: false
      });
    };
    _createClass(_class, [{
      key: "state",
      get: function get() {
        return state;
      }
    }, {
      key: "isLicenseValid",
      get: function get() {
        var _state$licenseData;
        if (!state.licenseData) return false;
        return (_state$licenseData = state.licenseData) == null ? void 0 : _state$licenseData.is_valid;
      }
    }, {
      key: "isLicenseActivated",
      get: function get() {
        var _state$licenseData2, _state$licenseData3;
        if (!state.licenseData) return false;
        return ((_state$licenseData2 = state.licenseData) == null ? void 0 : _state$licenseData2.is_valid) || ((_state$licenseData3 = state.licenseData) == null ? void 0 : _state$licenseData3.is_exclusion);
      }
    }]);
    return _class;
  }())();
  return cls;
};

var Context = /*#__PURE__*/createContext({});
var useGlobalContext = function useGlobalContext() {
  return useContext(Context);
};
var Provider = function Provider(props) {
  var payload = actions();
  return createElement(Context.Provider, {
    value: payload
  }, props.children);
};

var KEYS$1 = {
  UPDATE: 'UPDATE',
  UPDATE_PS_CONFIG_KEY: 'UPDATE_PS_CONFIG_KEY'
};
function Reducer$1(state, action) {
  var type = action.type,
    anValue = action.payload;
  if (type === KEYS$1.UPDATE) {
    return _extends({}, state, anValue);
  } else if (type === KEYS$1.UPDATE_PS_CONFIG_KEY) {
    state.playerConfig.psConfig = _extends({}, state.playerConfig.psConfig, anValue);
    // alert(JSON.stringify(state, null, 2))
    return _extends({}, state);
  }
  return state;
}

var initialState$1 = {
  playerConfig: null,
  webrtcStatus: null,
  webrtcMessage: false,
  streamStatus: null,
  streamMessage: false,
  freezeFrame: false
};

var actions$1 = function actions() {
  // states
  var _React$useReducer = useReducer(Reducer$1, initialState$1),
    state = _React$useReducer[0],
    _dispatch = _React$useReducer[1];
  var _React$useState = useState([]),
    commandsList = _React$useState[0],
    setCommandsList = _React$useState[1];
  var _React$useState2 = useState([]),
    responsesList = _React$useState2[0],
    setResponsesList = _React$useState2[1];
  // refs
  var refStreamApp = useRef(null);
  // classes
  var cls = new ( /*#__PURE__*/function () {
    function _class() {}
    var _proto = _class.prototype;
    _proto.dispatch = function dispatch(payload) {
      _dispatch({
        type: KEYS$1.UPDATE,
        payload: payload
      });
    };
    _proto.dispatchPsConfig = function dispatchPsConfig(payload) {
      _dispatch({
        type: KEYS$1.UPDATE_PS_CONFIG_KEY,
        payload: payload
      });
    };
    _proto.setRefStream = function setRefStream(app) {
      refStreamApp.current = app;
    };
    _proto.setWebrtcStatus = function setWebrtcStatus(status, message) {
      if (message === void 0) {
        message = false;
      }
      this.dispatch({
        webrtcStatus: status,
        webrtcMessage: message
      });
    };
    _proto.setStreamStatus = function setStreamStatus(status, message) {
      if (message === void 0) {
        message = false;
      }
      this.dispatch({
        streamStatus: status,
        streamMessage: message
      });
    };
    _proto.setFreezeFrame = function setFreezeFrame(freezeFrame) {
      this.dispatch({
        freezeFrame: freezeFrame
      });
    }
    // Commands list history for debug
    ;
    _proto.addCommand = function addCommand(payload) {
      setCommandsList(function (c) {
        return [payload].concat(c).slice(0, 100);
      });
    }
    // Responses list history for debug
    ;
    _proto.addResponse = function addResponse(payload) {
      setResponsesList(function (c) {
        return [payload].concat(c).slice(0, 100);
      });
      console.error('- '.repeat(30));
      console.error('RESPONSE:', payload);
    };
    _proto.updateConfig = function updateConfig(playerConfig) {
      this.dispatch({
        playerConfig: playerConfig
      });
    };
    _proto.setMuted = function setMuted(muted) {
      this.dispatchPsConfig({
        startMuted: muted
      });
    };
    _createClass(_class, [{
      key: "state",
      get: function get() {
        return state;
      }
    }, {
      key: "commandsList",
      get: function get() {
        return commandsList;
      }
    }, {
      key: "responsesList",
      get: function get() {
        return responsesList;
      }
    }, {
      key: "streamApp",
      get: function get() {
        return refStreamApp.current;
      }
    }, {
      key: "isStreamActive",
      get: function get() {
        return state.streamStatus === 'play';
      }
    }, {
      key: "isWebrtcConnected",
      get: function get() {
        return state.webrtcStatus === 'connected';
      }
    }, {
      key: "isWebrtcError",
      get: function get() {
        return ['failed', 'disconnected', 'disconnectedRestart'].includes(state.webrtcStatus);
      }
    }, {
      key: "isStreamError",
      get: function get() {
        return ['error', 'rejected'].includes(state.streamStatus);
      }
    }]);
    return _class;
  }())();
  return cls;
};

var Context$1 = /*#__PURE__*/createContext({});
var useStreamContext = function useStreamContext() {
  return useContext(Context$1);
};
var Provider$1 = function Provider(props) {
  var payload = actions$1();
  return createElement(Context$1.Provider, {
    value: payload
  }, props.children);
};

/* Usage

***** wrapper
// Context
import ContextProvider from 'src/@core/context';

return (
  <ContextProvider>
    {children...}
  </ContextProvider>
)

***** injection
// context
import { useGlobalContext } from 'src/context';

const globalContext = useGlobalContext() //as IGlobalProps

*/
function ContextProvider(props) {
  return React__default.createElement(Provider, null, React__default.createElement(Provider$1, null, props.children));
}

var JsonView = function JsonView(props) {
  return createElement(JSONTree, {
    invertTheme: false,
    shouldExpandNodeInitially: function shouldExpandNodeInitially() {
      return props.expanded ? true : false;
    },
    theme: {
      extend: theme,
      // underline keys for literal values
      valueLabel: {
        // textDecoration: 'underline',
      }
    },
    data: props.data
  });
};
var theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  // base00: 'var(--rs-bg-overlay)',
  base00: 'transparent',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};

function useSave() {
  // context
  var streamContext = useStreamContext();
  // hooks
  var toaster = useToaster();
  var cls = new ( /*#__PURE__*/function () {
    function _class() {}
    var _proto = _class.prototype;
    _proto.add = function add(type, payload, options) {
      // Save to context store
      var newPayload = {
        type: type,
        uuid: uuid.generate(),
        date: moment.utc().format(),
        payload: payload
      };
      streamContext.addCommand(newPayload);
      // Check if debug mode enabled or parament specified in emit
      var showNotification = function () {
        var debugMode = streamContext.state.playerConfig.debugMode;
        if (debugMode === 'off') {
          return false;
        }
        if (['on', 'commands'].includes(debugMode)) {
          return (options == null ? void 0 : options.debug) || true;
        }
        return false;
      }();
      if (showNotification) {
        toaster.push(createElement(Notification, {
          type: "success",
          header: "Command",
          closable: true
        }, createElement(JsonView, {
          data: newPayload,
          expanded: true
        })), {
          placement: (options == null ? void 0 : options.placement) || 'bottomEnd',
          duration: (options == null ? void 0 : options.duration) || 1000 * 2
        });
      }
    };
    return _class;
  }())();
  return cls;
}

function useStreamActions() {
  // context
  var streamContext = useStreamContext();
  // hooks
  var save = useSave();
  var cls = new ( /*#__PURE__*/function () {
    function _class() {}
    var _proto = _class.prototype;
    _proto.play = function play() {
      var _window$player$stream;
      (_window$player$stream = window.player.stream) == null ? void 0 : _window$player$stream.play();
    };
    _proto.reconnect = function reconnect() {
      var _window$player$stream2;
      (_window$player$stream2 = window.player.stream) == null ? void 0 : _window$player$stream2.reconnect();
    };
    _proto.disconnect = function disconnect() {
      var _window$player$stream3;
      (_window$player$stream3 = window.player.stream) == null ? void 0 : _window$player$stream3.disconnect();
    };
    _proto.emitUi = function emitUi(payload, options) {
      save.add('ui', payload, options);
      if (!streamContext.isStreamActive) {
        console.error('Stream is not active. Can not emit UI interaction.');
        return;
      }
      if (window.metaeditor) {
        window.metaeditor.emitUIInteraction(payload);
      }
    };
    _proto.emitSys = function emitSys(payload, options) {
      save.add('sys', payload, options);
      if (!streamContext.isStreamActive) {
        console.error('Stream is not active. Can not emit system command.');
        return;
      }
      if (window.metaeditor) {
        window.metaeditor.emitCommand(payload);
      }
    };
    _proto.resetResolution = function resetResolution() {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var payload = {
        'Resolution.Width': width,
        'Resolution.Height': height
      };
      this.emitSys(payload, {
        debug: false
      });
    };
    _proto.switchMuted = function switchMuted() {
      if (this.nodeVideo) {
        var muted = !streamContext.state.playerConfig.psConfig.startMuted;
        this.nodeVideo.muted = muted;
        streamContext.setMuted(muted);
      }
    };
    _createClass(_class, [{
      key: "nodeVideo",
      get: function get() {
        return document.getElementById('streamingVideo');
      }
    }]);
    return _class;
  }())();
  return cls;
}

function usePreloader() {
  // context
  var globalContext = useGlobalContext();
  var streamContext = useStreamContext();
  // hooks
  var streamActions = useStreamActions();
  var cls = new ( /*#__PURE__*/function () {
    function _class() {}
    var _proto = _class.prototype;
    _proto.connect = function connect() {
      streamActions.reconnect();
    };
    _proto.hide = function hide() {
      globalContext.hidePreloader();
    };
    _createClass(_class, [{
      key: "isWebrtcConnected",
      get: function get() {
        return streamContext.isWebrtcConnected;
      }
    }, {
      key: "webrtcErrorHeader",
      get: function get() {
        if (streamContext.isWebrtcError) {
          return streamContext.state.webrtcMessage;
        }
        return null;
      }
    }, {
      key: "connectionHeader",
      get: function get() {
        return streamContext.state.webrtcMessage || streamContext.state.webrtcStatus;
      }
    }]);
    return _class;
  }())();
  return cls;
}

function useEventListener(element, eventName, handler) {
  // Create a ref that stores handler
  var savedHandler = useRef(null);
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(function () {
    if (handler) {
      savedHandler.current = handler;
    }
  }, [handler]);
  useEffect(function () {
    // Make sure element supports addEventListener
    // On
    var isSupported = element && element.addEventListener;
    if (!isSupported) return;
    // Create event listener that calls handler function stored in ref
    var eventListener = function eventListener(event) {
      return savedHandler.current(event);
    };
    // Add event listener
    element.addEventListener(eventName, eventListener);
    // Remove event listener on cleanup
    return function () {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element] // Re-run if eventName or element changes
  );
}

// hooks
function useStreamEvents() {
  // context
  var streamContext = useStreamContext();
  var player = typeof window !== 'undefined' && window.player ? window.player : null;
  var stream = player == null ? void 0 : player.stream;
  /***
   * webRtc
   */
  useEventListener(stream, 'webRtcSdp', function () {
    streamContext.setWebrtcStatus('connection', 'Connection negotiated');
  });
  useEventListener(stream, 'webRtcAutoConnect', function () {
    streamContext.setWebrtcStatus('autoConnect', 'Auto Connecting Now');
  });
  useEventListener(stream, 'webRtcConnecting', function () {
    streamContext.setWebrtcStatus('connecting', 'Starting connection to server, please wait');
  });
  useEventListener(stream, 'webRtcConnected', function () {
    streamContext.setWebrtcStatus('connected', 'WebRTC connected, waiting for video');
  });
  useEventListener(stream, 'webRtcFailed', function () {
    streamContext.setWebrtcStatus('failed', 'Unable to setup video');
  });
  useEventListener(stream, 'webRtcDisconnected', function (_ref) {
    var _ref$data = _ref.data,
      eventString = _ref$data.eventString,
      showActionOrErrorOnDisconnect = _ref$data.showActionOrErrorOnDisconnect;
    if (showActionOrErrorOnDisconnect == false) {
      streamContext.setWebrtcStatus('disconnected', eventString);
    } else {
      streamContext.setWebrtcStatus('disconnectedRestart', eventString);
    }
  });
  /***
   * streamer
   */
  useEventListener(stream, 'videoInitialized', function () {
    streamContext.setStreamStatus('initialized');
  });
  useEventListener(stream, 'streamLoading', function () {
    streamContext.setStreamStatus('loading', 'Loading Stream');
  });
  useEventListener(stream, 'playStreamError', function (_ref2) {
    var message = _ref2.data.message;
    streamContext.setStreamStatus('error', message);
  });
  // Doesnt work for some reason
  // useEventListener(stream, 'playStream', () => {
  //   streamContext.setStreamStatus('play')
  // })
  useEventListener(stream == null ? void 0 : stream.videoElementParent, 'click', function () {
    if (streamContext.state.webrtcStatus == 'connected') {
      if (streamContext.state.streamStatus !== 'play') {
        streamContext.setStreamStatus('play');
      }
    }
  });
  useEventListener(stream, 'playStreamRejected', function (_ref3) {
    var reason = _ref3.data.reason;
    streamContext.setStreamStatus('rejected', reason);
  });
  useEventListener(stream, 'loadFreezeFrame', function (_ref4) {
    var shouldShowPlayOverlay = _ref4.data.shouldShowPlayOverlay;
    streamContext.setFreezeFrame(shouldShowPlayOverlay);
  });
  // this.stream.addEventListener(
  //   'statsReceived',
  //   ({ data: { aggregatedStats } }) =>
  //     this.onStatsReceived(aggregatedStats)
  // );
  // this.stream.addEventListener(
  //   'latencyTestResult',
  //   ({ data: { latencyTimings } }) =>
  //     this.onLatencyTestResults(latencyTimings)
  // );
  // this.stream.addEventListener(
  //   'streamerListMessage',
  //   ({ data: { messageStreamerList, autoSelectedStreamerId } }) =>
  //     this.handleStreamerListMessage(messageStreamerList, autoSelectedStreamerId)
  // );
  // this.stream.addEventListener(
  //   'settingsChanged',
  //   (event) => this.configUI.onSettingsChanged(event)
  // );
}

/* Usage

// hooks
import useWindowSize from 'src/hooks/useWindowSize'

function App() {
  const windowSize = useWindowSize();

  return (
    <div>
      {windowSize.width}px / {windowSize.height}px
    </div>
  );
}
*/
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  var _useState = useState({
      width: 0,
      height: 0
    }),
    windowSize = _useState[0],
    setWindowSize = _useState[1];
  useEffect(function () {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      // Set for css
      var doc = document.documentElement;
      doc.style.setProperty("--window-width", window.innerWidth + 'px');
      doc.style.setProperty("--window-height", window.innerHeight + 'px');
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty array ensures that effect is only run on mount
  var width = windowSize.width,
    height = windowSize.height;
  return {
    width: width,
    height: height
  };
}

function useResponseSave() {
  // context
  var streamContext = useStreamContext();
  // hooks
  var toaster = useToaster();
  var cls = new ( /*#__PURE__*/function () {
    function _class() {}
    var _proto = _class.prototype;
    _proto.handler = function handler(data) {
      // this.add(data);
      var event = new CustomEvent("ue_response", {
        detail: data
      });
      document.dispatchEvent(event);
      // Example of how to use the event
      // document.addEventListener('ue_response', ({ detail }: any) => {
      //   console.log('new event', detail);
      // });
    };
    _proto.add = function add(payload) {
      // Save to context store
      var newPayload = {
        date: moment.utc().format(),
        payload: payload
      };
      streamContext.addResponse(newPayload);
      // Check if debug mode enabled or parament specified in emit
      var showNotification = function () {
        var debugMode = streamContext.state.playerConfig.debugMode;
        if (debugMode === 'off') {
          return false;
        }
        if (['on', 'responses'].includes(debugMode)) {
          return true;
        }
        return false;
      }();
      if (showNotification) {
        toaster.push(createElement(Notification, {
          type: "info",
          header: "Response",
          closable: true
        }, createElement(JsonView, {
          data: newPayload,
          expanded: true
        })), {
          placement: 'bottomEnd',
          duration: 1000 * 3
        });
      }
    };
    return _class;
  }())();
  return cls;
}

function useStreamResponses() {
  var _window3;
  // hooks
  var responseSave = useResponseSave();
  useEffect(function () {
    var _window;
    if ((_window = window) != null && _window.metaeditor) {
      window.metaeditor.emitResponse.addResponseEventListener('handle_responses', responseSave.handler);
    }
    return function () {
      var _window2;
      if ((_window2 = window) != null && _window2.metaeditor) {
        window.metaeditor.emitResponse.removeResponseEventListener('handle_responses');
      }
    };
  }, [(_window3 = window) == null ? void 0 : _window3.metaeditor]);
}

// global
var watermarkTimer;
var watermark = /*#__PURE__*/new ( /*#__PURE__*/function () {
  function _class() {}
  var _proto = _class.prototype;
  _proto.start = function start() {
    clearInterval(watermarkTimer);
    watermarkTimer = setInterval(function () {
      watermark.injector();
    }, 100);
  };
  _proto.stop = function stop() {
    var _this$node;
    clearInterval(watermarkTimer);
    (_this$node = this.node) == null ? void 0 : _this$node.remove();
  };
  _proto.injector = function injector() {
    if (!this.node) {
      var dc = document.createElement("div");
      dc.addEventListener('mouseover', function () {
        dc.style.opacity = '1';
      });
      dc.addEventListener('mouseleave', function () {
        dc.style.opacity = '.7';
      });
      dc.innerText = project.name;
      dc.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(project.urls.buy);
      };
      dc.setAttribute('style', "\n          text-shadow: 1px 1px 1px #000000;\n          text-transform: uppercase;\n          opacity: .7 !important;\n          display: block !important;\n          visibility: visible !important;\n          position: fixed !important;\n          bottom: 0.25rem !important;\n          right: 1rem !important;\n          z-index: 999999999999999999 !important;\n          color: #fff !important;\n          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n          font-size: .55rem !important;\n          line-height: 100% !important;\n          letter-spacing: 1px;\n          cursor: pointer !important;\n          transition: background-color 300ms linear;\n          user-select: none !important;\n        ");
      document.body.appendChild(dc);
    }
  };
  _createClass(_class, [{
    key: "node",
    get: function get() {
      var xpath = "//div[text()='" + project.name + "']";
      var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return matchingElement.singleNodeValue;
    }
  }]);
  return _class;
}())();

function useWatermark() {
  // context
  var globalContext = useGlobalContext();
  var streamContext = useStreamContext();
  var licenseData = globalContext.state.licenseData;
  var configLoaded = streamContext.state.playerConfig ? true : false;
  useEffect(function () {
    return function () {
      watermark.stop();
    };
  }, []);
  useEffect(function () {
    if (globalContext.isLicenseActivated) {
      watermark.stop();
    } else {
      watermark.start();
    }
  }, [licenseData]);
  useEffect(function () {
    if (configLoaded) {
      globalContext.checkApiKey();
    }
  }, [configLoaded]);
}

var useStyles = /*#__PURE__*/createUseStyles({
  rootDiv: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    padding: '3rem',
    '& > *': {
      pointerEvents: 'all'
    }
  },
  webrtcError: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > h5': {
      textAlign: 'center',
      marginBottom: '1rem'
    }
  },
  preloader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > small': {
      textAlign: 'center',
      margin: '1rem 0 .5rem',
      cursor: 'default',
      opacity: .5
    }
  }
});
var Preloader = function Preloader() {
  // styles
  var styles = useStyles();
  // hooks
  var preloader = usePreloader();
  if (preloader.isWebrtcConnected) {
    return createElement(PlayOutlineIcon, {
      onClick: function onClick(event) {
        // event.preventDefault()
        // event.stopPropagation()
      },
      style: {
        pointerEvents: 'none',
        color: '#fff',
        fontSize: '10em',
        cursor: 'pointer'
      }
    });
  }
  return createElement("div", {
    className: styles.preloader
  }, createElement(SpinnerIcon, {
    pulse: true,
    style: {
      color: '#fff',
      fontSize: '3em'
    }
  }), createElement("small", null, preloader.connectionHeader));
};
var WebrtcError = function WebrtcError() {
  // styles
  var styles = useStyles();
  // hooks
  var preloader = usePreloader();
  return createElement("div", {
    className: styles.webrtcError
  }, createElement("h5", null, preloader.webrtcErrorHeader), createElement(Button, {
    onClick: preloader.connect,
    appearance: 'ghost'
  }, "Restart"));
};
function PreloaderDialog() {
  // styles
  var styles = useStyles();
  // context
  var globalContext = useGlobalContext();
  // hooks
  var preloader = usePreloader();
  // render
  if (!globalContext.state.showPreloader) return null;
  if (preloader.isWebrtcConnected) return null;
  return createElement("div", {
    className: styles.rootDiv
  }, preloader.webrtcErrorHeader ? createElement(WebrtcError, null) : createElement(Preloader, null));
}

// https://usehooks-ts.com/react-hook/use-media-query
var useMedia = function useMedia() {
  var smUp = useMediaQuery('(min-width: 768px)');
  var smDown = useMediaQuery('(max-width: 768px)');
  return {
    up: {
      sm: smUp
    },
    down: {
      sm: smDown
    }
  };
};
function useMediaQuery(query) {
  var getMatches = function getMatches(query) {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };
  var _useState = useState(getMatches(query)),
    matches = _useState[0],
    setMatches = _useState[1];
  function handleChange() {
    setMatches(getMatches(query));
  }
  useEffect(function () {
    var matchMedia = window.matchMedia(query);
    // Triggered at the first client-side load and if query changes
    handleChange();
    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }
    return function () {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return matches;
}

function Appbar() {
  // context
  var globalContext = useGlobalContext();
  // hooks
  var media = useMedia();
  var streamActions = useStreamActions();
  // render
  var isLicenseValid = globalContext.isLicenseValid;
  var toolsMenu = [{
    title: 'Restart stream',
    onClick: function onClick() {
      streamActions.reconnect();
    }
  }, {
    title: 'Close stream',
    onClick: function onClick() {
      streamActions.disconnect();
    }
  }, {
    title: 'Reset resolution',
    onClick: function onClick() {
      streamActions.resetResolution();
    }
  }];
  var helpMenu = function () {
    var res = [{
      title: 'Online Player',
      href: project.urls.onlinePlayer
    }, {
      title: 'Signaling Server',
      href: project.urls.signalingServer
    }, {
      title: 'Documentation',
      href: project.urls.docs
    }, {
      title: 'Support',
      href: project.urls.support
    }];
    if (media.down.sm && !isLicenseValid) {
      res = [{
        title: project.name + ' Pro',
        href: project.urls.buy
      }].concat(res);
    }
    return res;
  }();
  return createElement(Navbar, {
    appearance: "subtle"
  }, createElement(Navbar.Brand, {
    as: "a",
    href: project.urls.main,
    target: "_blank"
  }, project.name, " ", isLicenseValid && 'Pro'), createElement(Nav, {
    onSelect: function onSelect() {},
    activeKey: undefined
  }, createElement(Nav.Menu, {
    title: "Tools"
  }, toolsMenu.map(function (item, index) {
    return createElement(Nav.Item, {
      key: index,
      onClick: item.onClick
    }, item.title);
  })), createElement(Nav.Menu, {
    title: "Help"
  }, helpMenu.map(function (item, index) {
    return createElement(Nav.Item, {
      key: index,
      as: "a",
      href: item.href,
      target: "_blank"
    }, item.title);
  }))), media.up.sm && !isLicenseValid && createElement(Nav, {
    pullRight: true
  }, createElement(Nav.Item, {
    as: "a",
    href: project.urls.buy,
    target: "_blank"
  }, createElement(Button, {
    color: "green",
    appearance: "primary",
    startIcon: createElement(CheckRoundIcon, null)
  }, "Buy Pro"))));
}

var _excluded = ["title", "children", "contentPadding", "onClose"];
var CustomDrawer = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var title = _ref.title,
    children = _ref.children,
    contentPadding = _ref.contentPadding,
    _onClose = _ref.onClose,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var media = useMedia();
  var _useState = useState(false),
    open = _useState[0],
    setOpen = _useState[1];
  /**
   * The component instance will be extended
   * with whatever you return from the callback passed
   * as the second argument
   */
  useImperativeHandle(ref, function () {
    return {
      open: function open() {
        setOpen(true);
      },
      close: function close() {
        setOpen(false);
      }
    };
  });
  // Render
  var drawerSize = media.up.sm ? props.size || 'xs' : 'full';
  return createElement(Fragment, null, createElement(Drawer, Object.assign({}, props, {
    size: drawerSize,
    open: open,
    onClose: function onClose() {
      setOpen(false);
      if (_onClose) {
        _onClose();
      }
    }
  }), createElement(Drawer.Header, null, createElement(Drawer.Title, null, title)), createElement(Drawer.Body, {
    style: {
      padding: contentPadding
    }
  }, open && children)));
});

function DrawerContainer() {
  // context
  var streamContext = useStreamContext();
  // hooks
  var streamActions = useStreamActions();
  var responseSave = useResponseSave();
  return createElement(Fragment, null, createElement("div", null, createElement("h6", null, "Current config"), createElement(JsonView, {
    data: streamContext.state,
    expanded: true
  }), createElement(Divider, null), createElement("h6", null, "Commands history"), createElement(JsonView, {
    data: streamContext.commandsList
  }), createElement(Divider, null), createElement("h6", null, "Responses history"), createElement(JsonView, {
    data: streamContext.responsesList
  }), createElement(Divider, null), createElement(Stack, {
    direction: 'column',
    spacing: 5,
    alignItems: 'flex-start'
  }, createElement(Button, {
    onClick: function onClick() {
      return streamActions.resetResolution();
    }
  }, "Reset resolution"), createElement(Button, {
    onClick: function onClick() {
      responseSave.handler({
        demo: true
      });
    }
  }, "Test response"))));
}

var DrawerInfo = /*#__PURE__*/forwardRef(function (props, ref) {
  var refDrawer = useRef(null);
  useImperativeHandle(ref, function () {
    return {
      open: function open() {
        refDrawer == null ? void 0 : refDrawer.current.open();
      },
      close: function close() {
        refDrawer == null ? void 0 : refDrawer.current.close();
      }
    };
  });
  return createElement(CustomDrawer, {
    backdrop: true,
    contentPadding: 20,
    placement: 'right',
    title: "Tools Panel",
    ref: refDrawer
  }, createElement("div", {
    style: {
      height: '100%'
    }
  }, createElement(DrawerContainer, null)));
});

function UiButton() {
  // refs
  var refDrawerInfo = useRef(null);
  return createElement(Fragment, null, createElement(DrawerInfo, {
    ref: refDrawerInfo
  }), createElement("button", {
    onClick: function onClick() {
      return refDrawerInfo.current.open();
    }
  }, createElement(ToolsIcon, {
    style: {
      fontSize: 24,
      lineHeight: 0
    }
  })));
}

var useStyles$1 = /*#__PURE__*/createUseStyles({
  message: {
    cursor: 'pointer',
    backgroundColor: 'var(--rs-message-warning-bg)',
    color: 'var(--rs-message-warning-text)',
    padding: '.3rem 1rem',
    transition: 'background-color .1s linear',
    '&:hover': {
      backgroundColor: 'var(--rs-orange-800)'
    }
  }
});
function PackageUpdate() {
  // context
  var globalContext = useGlobalContext();
  // styles
  var styles = useStyles$1();
  // render
  var pkg = globalContext.state.packageVersion;
  var needUpdate = pkg.needUpdate;
  if (!needUpdate) return null;
  return createElement("div", {
    className: styles.message,
    onClick: function onClick() {
      window.open(project["package"].npmUrl);
    }
  }, "Update ", project.name, " from version ", pkg.current, " to ", pkg.latest);
}

var useStyles$2 = /*#__PURE__*/createUseStyles({
  appbar: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 20,
    backgroundColor: '#000'
  }
});
function Toolbar(_ref) {
  var show = _ref.show;
  // styles
  var styles = useStyles$2();
  // refs
  var _useResizeObserver = useResizeObserver({
      box: "border-box"
    }),
    ref = _useResizeObserver.ref,
    height = _useResizeObserver.height;
  useEffect(function () {
    if (!height) return;
    var doc = document.documentElement;
    doc.style.setProperty("--appbar-height", height + "px");
    var el = document.getElementById('controls');
    var controlsHeight = el.clientHeight;
    if (el) {
      el.style.top = height + "px";
      var elConnection = document.getElementById('connection');
      if (elConnection) {
        elConnection.style.top = height + controlsHeight + 20 + "px";
        elConnection.style.bottom = 'auto';
        elConnection.style.left = '2%';
      }
    }
  }, [height]);
  /***
   * dom
   */
  var nodeUiFeatures = typeof document !== 'undefined' && document.getElementById("uiFeatures");
  var nodePlayerUI = typeof document !== 'undefined' && document.getElementById('playerUI');
  var nodeControls = typeof document !== 'undefined' && document.getElementById('controls');
  /***
   * Show/hide ui features
   */
  useEffect(function () {
    if (nodeUiFeatures) {
      nodeUiFeatures.style.visibility = show ? 'visible' : 'hidden';
    }
  }, [show, nodeUiFeatures]);
  // render
  if (!show) return null;
  if (!nodePlayerUI) return null;
  return createElement(Fragment, null, createElement(Portal, {
    node: nodePlayerUI
  }, createElement("div", {
    className: styles.appbar,
    ref: ref
  }, createElement(PackageUpdate, null), createElement(Appbar, null))), createElement(Portal, {
    node: nodeControls
  }, createElement(UiButton, null)));
}

var useStyles$3 = /*#__PURE__*/createUseStyles({
  containerRoot: {
    position: 'fixed',
    // top: 'var(--appbar-height)',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: 'var(--window-height)',
    padding: 0,
    paddingTop: 0,
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    '& > div': {
      // flex: 1,
      '& > *': {
        pointerEvents: 'all'
      }
    }
  }
});
function Container(_ref) {
  var children = _ref.children;
  // styles
  var styles = useStyles$3();
  return createElement("div", {
    className: styles.containerRoot
  }, createElement("div", null, children));
}

var _excluded$1 = ["children"];
var PixelStreamingApplicationStyles = /*#__PURE__*/new PixelStreamingApplicationStyle();
PixelStreamingApplicationStyles.applyStyleSheet();
var useStyles$4 = /*#__PURE__*/createUseStyles({
  '@global': {
    'body': {
      width: '100vw',
      height: 'var(--window-height)',
      minHeight: '-webkit-fill-available',
      overflow: 'hidden'
    },
    '#playOverlay': {
      display: 'none'
    },
    '#infoOverlay': {
      display: 'none'
    },
    '#disconnectOverlay': {
      display: 'none'
    },
    "#errorOverlay": {
      display: 'none'
    },
    // '#controls': {
    // },
    '#uiFeatures': {
      visibility: 'hidden'
    },
    // dom clicks
    '[data-click="true"]': {
      pointerEvents: 'all'
    },
    '[data-click="false"]': {
      pointerEvents: 'none'
    }
  },
  rootDiv: {
    zIndex: 0,
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: '100vw',
    height: 'var(--window-height)',
    overflow: 'hidden',
    userSelect: 'none'
  }
});
var PlayerComponent = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$1);
  var showToolbar = props.showToolbar,
    psHost = props.psHost;
  // context
  var globalContext = useGlobalContext();
  var streamContext = useStreamContext();
  // styles
  var styles = useStyles$4();
  // refs
  var refRoot = useRef(null);
  // states
  var _React$useState = useState(false),
    isReady = _React$useState[0],
    setIsReady = _React$useState[1];
  // hooks
  useWindowSize();
  useStreamEvents();
  useStreamResponses();
  useWatermark();
  /**
   * Update config
   */
  // const cfg = {
  //   debugMode: props.debugMode,
  //   showToolbar: props.showToolbar,
  //   psHost: props.psHost,
  //   psConfig: props.psConfig,
  // }
  // React.useEffect(() => streamContext.updateConfig(cfg), [cfg])
  useEffect(function () {
    // Example of how to set the logger level
    Logger.SetLoggerVerbosity(0);
    // Check if already initialized
    if (isReady) return;
    setIsReady(true);
    // Check npm version
    if (props.showToolbar) {
      globalContext.checkVersion();
    }
    init();
  }, []);
  var init = function init() {
    // Update config
    streamContext.updateConfig(props);
    var initialSettings = {
      AutoPlayVideo:  props.psConfig.autoPlay,
      AutoConnect: true ,
      ss: psHost,
      StartVideoMuted: true ,
      HoveringMouse: true ,
      FakeMouseWithTouches: true ,
      MatchViewportRes: true 
    };
    // Create a config object
    var config = new Config({
      useUrlParams: true,
      initialSettings: initialSettings
    });
    // Create a Native DOM delegate instance that implements the Delegate interface class
    var stream = new PixelStreaming(config);
    var application = new Application({
      stream: stream
    });
    if (refRoot.current && !refRoot.current.textContent) {
      // set access to internal methods
      streamContext.setRefStream(application);
      window.player = application;
      refRoot.current.appendChild(application.rootElement);
      if (typeof props.onLoad === 'function') {
        props.onLoad();
      }
    }
  };
  useImperativeHandle(ref, function () {
    return {
      init: init
    };
  });
  return createElement("div", null, createElement(PreloaderDialog, null), createElement(Toolbar, {
    show: showToolbar
  }), createElement("div", {
    ref: refRoot,
    className: styles.rootDiv
  }), children ? createElement(Container, null, children) : '');
});

var RootComponent = /*#__PURE__*/forwardRef(function (props, ref) {
  // states
  var _React$useState = useState(false),
    mounted = _React$useState[0],
    setMounted = _React$useState[1];
  useEffect(function () {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return createElement(CustomProvider, {
    theme: "dark"
  }, createElement(PlayerComponent, Object.assign({}, props, {
    ref: ref
  })));
});

// context
// ********** EXPORTS **********
var Context$2 = {
  global: useGlobalContext,
  stream: useStreamContext
};
var Hooks = {
  actions: useStreamActions,
  events: useStreamEvents,
  listener: useEventListener,
  preloader: usePreloader
};

export { Context$2 as Context, Hooks, RootComponent as MetaEditor, ContextProvider as MetaProvider };
//# sourceMappingURL=pixel-streaming.esm.js.map
