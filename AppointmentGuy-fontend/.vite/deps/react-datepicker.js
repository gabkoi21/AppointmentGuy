import {
  require_react_dom
} from "./chunk-IPYILTUR.js";
import {
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addQuarters,
  addSeconds,
  addWeeks,
  addYears,
  differenceInCalendarDays,
  differenceInCalendarMonths,
  differenceInCalendarQuarters,
  differenceInCalendarYears,
  differenceInDays,
  endOfDay,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  getDate,
  getDay,
  getHours,
  getISOWeek,
  getMinutes,
  getMonth,
  getQuarter,
  getSeconds,
  getTime,
  getYear,
  isAfter,
  isBefore,
  isDate,
  isEqual,
  isSameDay,
  isSameMonth,
  isSameQuarter,
  isSameYear,
  isValid,
  isWithinInterval,
  longFormatters,
  max,
  min,
  parse,
  parseISO,
  set,
  setHours,
  setMinutes,
  setMonth,
  setQuarter,
  setSeconds,
  setYear,
  startOfDay,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subQuarters,
  subWeeks,
  subYears,
  toDate
} from "./chunk-7YMLHPFW.js";
import {
  require_react
} from "./chunk-4SFRHSJ3.js";
import {
  __commonJS,
  __toESM
} from "./chunk-EQCVQC35.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React5 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React5.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error2(format2) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format2, args);
            }
          }
        }
        function printWarning(level, format2, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format2 += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format2);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error2("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error2("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error2("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error2("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error2("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error2('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error2("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error2("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error2('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error2("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error2("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error2("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error2("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error2("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error2("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error2('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx2 = jsxWithValidationDynamic;
        var jsxs2 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx2;
        exports.jsxs = jsxs2;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}

// node_modules/react-datepicker/dist/es/index.js
var import_react3 = __toESM(require_react());

// node_modules/react-datepicker/node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var React3 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((value) => css[value] ? css[value] !== "none" : false) || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/react-datepicker/node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
var React = __toESM(require_react(), 1);
var import_react = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max2(start, min2(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/react-datepicker/node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
var index = typeof document !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var SafeReact = {
  ...React
};
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
function isDifferentGridRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
function isIndexOutOfListBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
function getMinListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef, {
    disabledIndices
  });
}
function getMaxListIndex(listRef, disabledIndices) {
  return findNonDisabledListIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledListIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  let index3 = startingIndex;
  do {
    index3 += decrement ? -amount : amount;
  } while (index3 >= 0 && index3 <= listRef.current.length - 1 && isListIndexDisabled(listRef, index3, disabledIndices));
  return index3;
}
function getGridNavigatedIndex(listRef, _ref) {
  let {
    event,
    orientation,
    loop,
    rtl,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledListIndex(listRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset4 = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset4 : offset4 - cols;
        }
      }
    }
    if (isIndexOutOfListBounds(listRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledListIndex(listRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledListIndex(listRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfListBounds(listRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === (rtl ? ARROW_LEFT : ARROW_RIGHT)) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledListIndex(listRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentGridRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledListIndex(listRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledListIndex(listRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentGridRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT)) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledListIndex(listRef, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loop && isDifferentGridRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledListIndex(listRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledListIndex(listRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentGridRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfListBounds(listRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT) ? maxIndex : findNonDisabledListIndex(listRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function createGridCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index3) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index3 + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          targetCells.push(startIndex + i + j * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index3;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });
  return [...cellMap];
}
function getGridCellIndexOfCorner(index3, sizes, cellMap, cols, corner) {
  if (index3 === -1) return -1;
  const firstCellIndex = cellMap.indexOf(index3);
  const sizeItem = sizes[index3];
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case "bl":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index3);
  }
}
function getGridCellIndices(indices, cellMap) {
  return cellMap.flatMap((index3, cellIndex) => indices.includes(index3) ? [cellIndex] : []);
}
function isListIndexDisabled(listRef, index3, disabledIndices) {
  if (typeof disabledIndices === "function") {
    return disabledIndices(index3);
  } else if (disabledIndices) {
    return disabledIndices.includes(index3);
  }
  const element = listRef.current[index3];
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}

// node_modules/react-datepicker/node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var ReactDOM2 = __toESM(require_react_dom(), 1);

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min2(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min2(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max3 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min$1, center, max3);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max3 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          var _overflowsData$;
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          const hasInitialMainAxisOverflow = ((_overflowsData$ = overflowsData[0]) == null ? void 0 : _overflowsData$.overflows[0]) > 0;
          if (!ignoreCrossAxisOverflow || hasInitialMainAxisOverflow) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 : (
    // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect)
  ));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup2() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup2();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max2(0, min2(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup2;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var flip2 = flip;
var arrow2 = arrow;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React2 = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var index2 = typeof document !== "undefined" ? import_react2.useLayoutEffect : import_react2.useEffect;
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === "function" && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === "object") {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0; ) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (key === "_owner" && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React2.useRef(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React2.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React2.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React2.useState(null);
  const [_floating, _setFloating] = React2.useState(null);
  const setReference = React2.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React2.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React2.useRef(null);
  const floatingRef = React2.useRef(null);
  const dataRef = React2.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React2.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index2(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React2.useRef(false);
  index2(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index2(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React2.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React2.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React2.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React2.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var arrow$1 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var arrow3 = (options, deps) => ({
  ...arrow$1(options),
  options: [options, deps]
});

// node_modules/react-datepicker/node_modules/@floating-ui/react/dist/floating-ui.react.mjs
function useMergeRefs(refs) {
  const cleanupRef = React3.useRef(void 0);
  const refEffect = React3.useCallback((instance) => {
    const cleanups = refs.map((ref) => {
      if (ref == null) {
        return;
      }
      if (typeof ref === "function") {
        const refCallback = ref;
        const refCleanup = refCallback(instance);
        return typeof refCleanup === "function" ? refCleanup : () => {
          refCallback(null);
        };
      }
      ref.current = instance;
      return () => {
        ref.current = null;
      };
    });
    return () => {
      cleanups.forEach((refCleanup) => refCleanup == null ? void 0 : refCleanup());
    };
  }, refs);
  return React3.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = void 0;
      }
      if (value != null) {
        cleanupRef.current = refEffect(value);
      }
    };
  }, refs);
}
function sortByDocumentPosition(a, b) {
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
var FloatingListContext = React3.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function FloatingList(props) {
  const {
    children,
    elementsRef,
    labelsRef
  } = props;
  const [nodes, setNodes] = React3.useState(() => /* @__PURE__ */ new Set());
  const register = React3.useCallback((node) => {
    setNodes((prevSet) => new Set(prevSet).add(node));
  }, []);
  const unregister = React3.useCallback((node) => {
    setNodes((prevSet) => {
      const set2 = new Set(prevSet);
      set2.delete(node);
      return set2;
    });
  }, []);
  const map = React3.useMemo(() => {
    const newMap = /* @__PURE__ */ new Map();
    const sortedNodes = Array.from(nodes.keys()).sort(sortByDocumentPosition);
    sortedNodes.forEach((node, index3) => {
      newMap.set(node, index3);
    });
    return newMap;
  }, [nodes]);
  return (0, import_jsx_runtime.jsx)(FloatingListContext.Provider, {
    value: React3.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef]),
    children
  });
}
function useListItem(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    label
  } = props;
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React3.useContext(FloatingListContext);
  const [index3, setIndex] = React3.useState(null);
  const componentRef = React3.useRef(null);
  const ref = React3.useCallback((node) => {
    componentRef.current = node;
    if (index3 !== null) {
      elementsRef.current[index3] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== void 0;
        labelsRef.current[index3] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index3, elementsRef, labelsRef, label]);
  index(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index(() => {
    const index4 = componentRef.current ? map.get(componentRef.current) : null;
    if (index4 != null) {
      setIndex(index4);
    }
  }, [map]);
  return React3.useMemo(() => ({
    ref,
    index: index3 == null ? -1 : index3
  }), [index3, ref]);
}
var ARROW_LEFT2 = "ArrowLeft";
var ARROW_RIGHT2 = "ArrowRight";
var ARROW_UP2 = "ArrowUp";
var ARROW_DOWN2 = "ArrowDown";
function renderJsx(render, computedProps) {
  if (typeof render === "function") {
    return render(computedProps);
  }
  if (render) {
    return React3.cloneElement(render, computedProps);
  }
  return (0, import_jsx_runtime.jsx)("div", {
    ...computedProps
  });
}
var CompositeContext = React3.createContext({
  activeIndex: 0,
  onNavigate: () => {
  }
});
var horizontalKeys = [ARROW_LEFT2, ARROW_RIGHT2];
var verticalKeys = [ARROW_UP2, ARROW_DOWN2];
var allKeys = [...horizontalKeys, ...verticalKeys];
var Composite = React3.forwardRef(function Composite2(props, forwardedRef) {
  const {
    render,
    orientation = "both",
    loop = true,
    rtl = false,
    cols = 1,
    disabledIndices,
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...domProps
  } = props;
  const [internalActiveIndex, internalSetActiveIndex] = React3.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = React3.useRef([]);
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const contextValue = React3.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key)) return;
    let nextIndex = activeIndex;
    const minIndex = getMinListIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxListIndex(elementsRef, disabledIndices);
    const horizontalEndKey = rtl ? ARROW_LEFT2 : ARROW_RIGHT2;
    const horizontalStartKey = rtl ? ARROW_RIGHT2 : ARROW_LEFT2;
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      const cellMap = createGridCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex((index3) => index3 != null && !isListIndexDisabled(elementsRef, index3, disabledIndices));
      const maxGridIndex = cellMap.reduce((foundIndex, index3, cellIndex) => index3 != null && !isListIndexDisabled(elementsRef, index3, disabledIndices) ? cellIndex : foundIndex, -1);
      const maybeNextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map((itemIndex) => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        rtl,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getGridCellIndices([...(typeof disabledIndices !== "function" ? disabledIndices : null) || elementsRef.current.map((_, index3) => isListIndexDisabled(elementsRef, index3, disabledIndices) ? index3 : void 0), void 0], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getGridCellIndexOfCorner(
          activeIndex > maxIndex ? minIndex : activeIndex,
          sizes,
          cellMap,
          cols,
          // use a corner matching the edge closest to the direction we're
          // moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          event.key === ARROW_DOWN2 ? "bl" : event.key === horizontalEndKey ? "tr" : "tl"
        )
      })];
      if (maybeNextIndex != null) {
        nextIndex = maybeNextIndex;
      }
    }
    const toEndKeys = {
      horizontal: [horizontalEndKey],
      vertical: [ARROW_DOWN2],
      both: [horizontalEndKey, ARROW_DOWN2]
    }[orientation];
    const toStartKeys = {
      horizontal: [horizontalStartKey],
      vertical: [ARROW_UP2],
      both: [horizontalStartKey, ARROW_UP2]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledListIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfListBounds(elementsRef, nextIndex)) {
      var _elementsRef$current$;
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      (_elementsRef$current$ = elementsRef.current[nextIndex]) == null || _elementsRef$current$.focus();
    }
  }
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: forwardedRef,
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    onKeyDown(e) {
      domProps.onKeyDown == null || domProps.onKeyDown(e);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e);
      handleKeyDown(e);
    }
  };
  return (0, import_jsx_runtime.jsx)(CompositeContext.Provider, {
    value: contextValue,
    children: (0, import_jsx_runtime.jsx)(FloatingList, {
      elementsRef,
      children: renderJsx(render, computedProps)
    })
  });
});
var CompositeItem = React3.forwardRef(function CompositeItem2(props, forwardedRef) {
  const {
    render,
    ...domProps
  } = props;
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = React3.useContext(CompositeContext);
  const {
    ref,
    index: index3
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index3;
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    "data-active": isActive ? "" : void 0,
    onFocus(e) {
      domProps.onFocus == null || domProps.onFocus(e);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e);
      onNavigate(index3);
    }
  };
  return renderJsx(render, computedProps);
});
var SafeReact2 = {
  ...React3
};
var serverHandoffComplete = false;
var count = 0;
var genId = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
);
function useFloatingId() {
  const [id, setId] = React3.useState(() => serverHandoffComplete ? genId() : void 0);
  index(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React3.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
var useReactId = SafeReact2.useId;
var useId = useReactId || useFloatingId;
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}
var FloatingArrow = React3.forwardRef(function FloatingArrow2(props, ref) {
  const {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow: arrow4,
        shift: shift4
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = props;
  if (true) {
    if (!ref) {
      warn("The `ref` prop is required for `FloatingArrow`.");
    }
  }
  const clipPathId = useId();
  const [isRTL2, setIsRTL] = React3.useState(false);
  index(() => {
    if (!floating) return;
    const isRTL3 = getComputedStyle2(floating).direction === "rtl";
    if (isRTL3) {
      setIsRTL(true);
    }
  }, [floating]);
  if (!floating) {
    return null;
  }
  const [side, alignment] = placement.split("-");
  const isVerticalSide = side === "top" || side === "bottom";
  let computedStaticOffset = staticOffset;
  if (isVerticalSide && shift4 != null && shift4.x || !isVerticalSide && shift4 != null && shift4.y) {
    computedStaticOffset = null;
  }
  const computedStrokeWidth = strokeWidth * 2;
  const halfStrokeWidth = computedStrokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const isCustomShape = !!d;
  const yOffsetProp = computedStaticOffset && alignment === "end" ? "bottom" : "top";
  let xOffsetProp = computedStaticOffset && alignment === "end" ? "right" : "left";
  if (computedStaticOffset && isRTL2) {
    xOffsetProp = alignment === "end" ? "left" : "right";
  }
  const arrowX = (arrow4 == null ? void 0 : arrow4.x) != null ? computedStaticOffset || arrow4.x : "";
  const arrowY = (arrow4 == null ? void 0 : arrow4.y) != null ? computedStaticOffset || arrow4.y : "";
  const dValue = d || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
  const rotation = {
    top: isCustomShape ? "rotate(180deg)" : "",
    left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: isCustomShape ? "" : "rotate(180deg)",
    right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
  }[side];
  return (0, import_jsx_runtime.jsxs)("svg", {
    ...rest,
    "aria-hidden": true,
    ref,
    width: isCustomShape ? width : width + computedStrokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + computedStrokeWidth / 2 + "px)",
      transform: [rotation, transform].filter((t) => !!t).join(" "),
      ...restStyle
    },
    children: [computedStrokeWidth > 0 && (0, import_jsx_runtime.jsx)("path", {
      clipPath: "url(#" + clipPathId + ")",
      fill: "none",
      stroke,
      strokeWidth: computedStrokeWidth + (d ? 0 : 1),
      d: dValue
    }), (0, import_jsx_runtime.jsx)("path", {
      stroke: computedStrokeWidth && !d ? rest.fill : "none",
      d: dValue
    }), (0, import_jsx_runtime.jsx)("clipPath", {
      id: clipPathId,
      children: (0, import_jsx_runtime.jsx)("rect", {
        x: -halfStrokeWidth,
        y: halfStrokeWidth * (isCustomShape ? -1 : 1),
        width: width + computedStrokeWidth,
        height: width
      })
    })]
  });
});
function createEventEmitter() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((listener) => listener(data));
    },
    on(event, listener) {
      if (!map.has(event)) {
        map.set(event, /* @__PURE__ */ new Set());
      }
      map.get(event).add(listener);
    },
    off(event, listener) {
      var _map$get2;
      (_map$get2 = map.get(event)) == null || _map$get2.delete(listener);
    }
  };
}
var FloatingNodeContext = React3.createContext(null);
var FloatingTreeContext = React3.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React3.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React3.useContext(FloatingTreeContext);
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
var safePolygonIdentifier = createAttribute("safe-polygon");
var NOOP = () => {
};
var FloatingDelayGroupContext = React3.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: NOOP,
  setState: NOOP,
  isInstantPhase: false
});
var NextFloatingDelayGroupContext = React3.createContext({
  hasProvider: false,
  timeoutMs: 0,
  delayRef: {
    current: 0
  },
  initialDelayRef: {
    current: 0
  },
  timeoutIdRef: {
    current: -1
  },
  currentIdRef: {
    current: null
  },
  currentContextRef: {
    current: null
  }
});
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var FocusGuard = React3.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React3.useState();
  index(() => {
    if (isSafari()) {
      setRole("button");
    }
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return (0, import_jsx_runtime.jsx)("span", {
    ...props,
    ...restProps
  });
});
var PortalContext = React3.createContext(null);
var attr = createAttribute("portal");
var VisuallyHiddenDismiss = React3.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return (0, import_jsx_runtime.jsx)("button", {
    ...props,
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  });
});
var lockCount = 0;
var scrollbarProperty = "--floating-ui-scrollbar-width";
function enableScrollLock() {
  const platform2 = getPlatform();
  const isIOS = /iP(hone|ad|od)|iOS/.test(platform2) || // iPads can claim to be MacIntel
  platform2 === "MacIntel" && navigator.maxTouchPoints > 1;
  const bodyStyle = document.body.style;
  const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
  const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.scrollX;
  const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.scrollY;
  bodyStyle.overflow = "hidden";
  bodyStyle.setProperty(scrollbarProperty, scrollbarWidth + "px");
  if (scrollbarWidth) {
    bodyStyle[paddingProp] = scrollbarWidth + "px";
  }
  if (isIOS) {
    var _window$visualViewpor, _window$visualViewpor2;
    const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
    const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
    Object.assign(bodyStyle, {
      position: "fixed",
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: "0"
    });
  }
  return () => {
    Object.assign(bodyStyle, {
      overflow: "",
      [paddingProp]: ""
    });
    bodyStyle.removeProperty(scrollbarProperty);
    if (isIOS) {
      Object.assign(bodyStyle, {
        position: "",
        top: "",
        left: "",
        right: ""
      });
      window.scrollTo(scrollX, scrollY);
    }
  };
}
var cleanup = () => {
};
var FloatingOverlay = React3.forwardRef(function FloatingOverlay2(props, ref) {
  const {
    lockScroll = false,
    ...rest
  } = props;
  index(() => {
    if (!lockScroll) return;
    lockCount++;
    if (lockCount === 1) {
      cleanup = enableScrollLock();
    }
    return () => {
      lockCount--;
      if (lockCount === 0) {
        cleanup();
      }
    };
  }, [lockScroll]);
  return (0, import_jsx_runtime.jsx)("div", {
    ref,
    ...rest,
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  });
});
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = React3.useRef({});
  const [events] = React3.useState(() => createEventEmitter());
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
    }
  }
  const [positionReference, setPositionReference] = React3.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : void 0;
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  });
  const refs = React3.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React3.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React3.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React3.useState(null);
  const [positionReference, _setPositionReference] = React3.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React3.useRef(null);
  const tree = useFloatingTree();
  index(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React3.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      getClientRects: () => node.getClientRects(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React3.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React3.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React3.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React3.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React3.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}

// node_modules/react-datepicker/dist/es/index.js
var import_react_dom3 = __toESM(require_react_dom());
var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
  };
  return _extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  _extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var _assign = function __assign() {
  _assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return _assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var CalendarContainer = function(_a2) {
  var _b = _a2.showTimeSelectOnly, showTimeSelectOnly = _b === void 0 ? false : _b, _c = _a2.showTime, showTime = _c === void 0 ? false : _c, className = _a2.className, children = _a2.children;
  var ariaLabel = showTimeSelectOnly ? "Choose Time" : "Choose Date".concat(showTime ? " and Time" : "");
  return import_react3.default.createElement("div", { className, role: "dialog", "aria-label": ariaLabel, "aria-modal": "true" }, children);
};
var useDetectClickOutside = function(onClickOutside, ignoreClass) {
  var ref = (0, import_react3.useRef)(null);
  var onClickOutsideRef = (0, import_react3.useRef)(onClickOutside);
  onClickOutsideRef.current = onClickOutside;
  var handleClickOutside = (0, import_react3.useCallback)(function(event) {
    var _a2;
    if (ref.current && !ref.current.contains(event.target)) {
      if (!(ignoreClass && event.target instanceof HTMLElement && event.target.classList.contains(ignoreClass))) {
        (_a2 = onClickOutsideRef.current) === null || _a2 === void 0 ? void 0 : _a2.call(onClickOutsideRef, event);
      }
    }
  }, [ignoreClass]);
  (0, import_react3.useEffect)(function() {
    document.addEventListener("mousedown", handleClickOutside);
    return function() {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return ref;
};
var ClickOutsideWrapper = function(_a2) {
  var children = _a2.children, onClickOutside = _a2.onClickOutside, className = _a2.className, containerRef = _a2.containerRef, style = _a2.style, ignoreClass = _a2.ignoreClass;
  var detectRef = useDetectClickOutside(onClickOutside, ignoreClass);
  return import_react3.default.createElement("div", { className, style, ref: function(node) {
    detectRef.current = node;
    if (containerRef) {
      containerRef.current = node;
    }
  } }, children);
};
var KeyType;
(function(KeyType2) {
  KeyType2["ArrowUp"] = "ArrowUp";
  KeyType2["ArrowDown"] = "ArrowDown";
  KeyType2["ArrowLeft"] = "ArrowLeft";
  KeyType2["ArrowRight"] = "ArrowRight";
  KeyType2["PageUp"] = "PageUp";
  KeyType2["PageDown"] = "PageDown";
  KeyType2["Home"] = "Home";
  KeyType2["End"] = "End";
  KeyType2["Enter"] = "Enter";
  KeyType2["Space"] = " ";
  KeyType2["Tab"] = "Tab";
  KeyType2["Escape"] = "Escape";
  KeyType2["Backspace"] = "Backspace";
  KeyType2["X"] = "x";
})(KeyType || (KeyType = {}));
function getLocaleScope() {
  var scope = typeof window !== "undefined" ? window : globalThis;
  return scope;
}
var DEFAULT_YEAR_ITEM_NUMBER = 12;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function newDate(value) {
  if (value == null) {
    return /* @__PURE__ */ new Date();
  }
  var d = typeof value === "string" ? parseISO(value) : toDate(value);
  return isValid2(d) ? d : /* @__PURE__ */ new Date();
}
function parseDate(value, dateFormat, locale, strictParsing, minDate) {
  var _a2;
  var parsedDate = null;
  var localeObject = getLocaleObject(locale) || getLocaleObject(getDefaultLocale());
  var strictParsingValueMatch = true;
  if (Array.isArray(dateFormat)) {
    dateFormat.forEach(function(df) {
      var tryParseDate = parse(value, df, /* @__PURE__ */ new Date(), {
        locale: localeObject,
        useAdditionalWeekYearTokens: true,
        useAdditionalDayOfYearTokens: true
      });
      if (strictParsing) {
        strictParsingValueMatch = isValid2(tryParseDate, minDate) && value === formatDate(tryParseDate, df, locale);
      }
      if (isValid2(tryParseDate, minDate) && strictParsingValueMatch) {
        parsedDate = tryParseDate;
      }
    });
    return parsedDate;
  }
  parsedDate = parse(value, dateFormat, /* @__PURE__ */ new Date(), {
    locale: localeObject,
    useAdditionalWeekYearTokens: true,
    useAdditionalDayOfYearTokens: true
  });
  if (strictParsing) {
    strictParsingValueMatch = isValid2(parsedDate) && value === formatDate(parsedDate, dateFormat, locale);
  } else if (!isValid2(parsedDate)) {
    var format_1 = ((_a2 = dateFormat.match(longFormattingTokensRegExp)) !== null && _a2 !== void 0 ? _a2 : []).map(function(substring) {
      var firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        var longFormatter = longFormatters[firstCharacter];
        return localeObject ? longFormatter(substring, localeObject.formatLong) : firstCharacter;
      }
      return substring;
    }).join("");
    if (value.length > 0) {
      parsedDate = parse(value, format_1.slice(0, value.length), /* @__PURE__ */ new Date(), {
        useAdditionalWeekYearTokens: true,
        useAdditionalDayOfYearTokens: true
      });
    }
    if (!isValid2(parsedDate)) {
      parsedDate = new Date(value);
    }
  }
  return isValid2(parsedDate) && strictParsingValueMatch ? parsedDate : null;
}
function isValid2(date, minDate) {
  return isValid(date) && !isBefore(date, minDate !== null && minDate !== void 0 ? minDate : /* @__PURE__ */ new Date("1/1/1800"));
}
function formatDate(date, formatStr, locale) {
  if (locale === "en") {
    return format(date, formatStr, {
      useAdditionalWeekYearTokens: true,
      useAdditionalDayOfYearTokens: true
    });
  }
  var localeObj = locale ? getLocaleObject(locale) : void 0;
  if (locale && !localeObj) {
    console.warn('A locale object was not found for the provided string ["'.concat(locale, '"].'));
  }
  if (!localeObj && !!getDefaultLocale() && !!getLocaleObject(getDefaultLocale())) {
    localeObj = getLocaleObject(getDefaultLocale());
  }
  return format(date, formatStr, {
    locale: localeObj,
    useAdditionalWeekYearTokens: true,
    useAdditionalDayOfYearTokens: true
  });
}
function safeDateFormat(date, _a2) {
  var dateFormat = _a2.dateFormat, locale = _a2.locale;
  var formatStr = Array.isArray(dateFormat) && dateFormat.length > 0 ? dateFormat[0] : dateFormat;
  return date && formatDate(date, formatStr, locale) || "";
}
function safeDateRangeFormat(startDate, endDate, props) {
  if (!startDate) {
    return "";
  }
  var formattedStartDate = safeDateFormat(startDate, props);
  var formattedEndDate = endDate ? safeDateFormat(endDate, props) : "";
  return "".concat(formattedStartDate, " - ").concat(formattedEndDate);
}
function safeMultipleDatesFormat(dates, props) {
  if (!(dates === null || dates === void 0 ? void 0 : dates.length)) {
    return "";
  }
  var formattedFirstDate = dates[0] ? safeDateFormat(dates[0], props) : "";
  if (dates.length === 1) {
    return formattedFirstDate;
  }
  if (dates.length === 2 && dates[1]) {
    var formattedSecondDate = safeDateFormat(dates[1], props);
    return "".concat(formattedFirstDate, ", ").concat(formattedSecondDate);
  }
  var extraDatesCount = dates.length - 1;
  return "".concat(formattedFirstDate, " (+").concat(extraDatesCount, ")");
}
function setTime(date, _a2) {
  var _b = _a2.hour, hour = _b === void 0 ? 0 : _b, _c = _a2.minute, minute = _c === void 0 ? 0 : _c, _d = _a2.second, second = _d === void 0 ? 0 : _d;
  return setHours(setMinutes(setSeconds(date, second), minute), hour);
}
function getWeek(date) {
  return getISOWeek(date);
}
function getDayOfWeekCode(day, locale) {
  return formatDate(day, "ddd", locale);
}
function getStartOfDay(date) {
  return startOfDay(date);
}
function getStartOfWeek(date, locale, calendarStartDay) {
  var localeObj = locale ? getLocaleObject(locale) : getLocaleObject(getDefaultLocale());
  return startOfWeek(date, {
    locale: localeObj,
    weekStartsOn: calendarStartDay
  });
}
function getStartOfMonth(date) {
  return startOfMonth(date);
}
function getStartOfYear(date) {
  return startOfYear(date);
}
function getStartOfQuarter(date) {
  return startOfQuarter(date);
}
function getStartOfToday() {
  return startOfDay(newDate());
}
function getEndOfDay(date) {
  return endOfDay(date);
}
function getEndOfWeek(date) {
  return endOfWeek(date);
}
function getEndOfMonth(date) {
  return endOfMonth(date);
}
function isSameYear2(date1, date2) {
  if (date1 && date2) {
    return isSameYear(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
function isSameMonth2(date1, date2) {
  if (date1 && date2) {
    return isSameMonth(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
function isSameQuarter2(date1, date2) {
  if (date1 && date2) {
    return isSameQuarter(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
function isSameDay2(date1, date2) {
  if (date1 && date2) {
    return isSameDay(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
function isEqual2(date1, date2) {
  if (date1 && date2) {
    return isEqual(date1, date2);
  } else {
    return !date1 && !date2;
  }
}
function isDayInRange(day, startDate, endDate) {
  var valid;
  var start = startOfDay(startDate);
  var end = endOfDay(endDate);
  try {
    valid = isWithinInterval(day, { start, end });
  } catch (err) {
    valid = false;
  }
  return valid;
}
function registerLocale(localeName, localeData) {
  var scope = getLocaleScope();
  if (!scope.__localeData__) {
    scope.__localeData__ = {};
  }
  scope.__localeData__[localeName] = localeData;
}
function setDefaultLocale(localeName) {
  var scope = getLocaleScope();
  scope.__localeId__ = localeName;
}
function getDefaultLocale() {
  var scope = getLocaleScope();
  return scope.__localeId__;
}
function getLocaleObject(localeSpec) {
  if (typeof localeSpec === "string") {
    var scope = getLocaleScope();
    return scope.__localeData__ ? scope.__localeData__[localeSpec] : void 0;
  } else {
    return localeSpec;
  }
}
function getFormattedWeekdayInLocale(date, formatFunc, locale) {
  return formatFunc(formatDate(date, "EEEE", locale));
}
function getWeekdayMinInLocale(date, locale) {
  return formatDate(date, "EEEEEE", locale);
}
function getWeekdayShortInLocale(date, locale) {
  return formatDate(date, "EEE", locale);
}
function getMonthInLocale(month, locale) {
  return formatDate(setMonth(newDate(), month), "LLLL", locale);
}
function getMonthShortInLocale(month, locale) {
  return formatDate(setMonth(newDate(), month), "LLL", locale);
}
function getQuarterShortInLocale(quarter, locale) {
  return formatDate(setQuarter(newDate(), quarter), "QQQ", locale);
}
function isDayDisabled(day, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, excludeDateIntervals = _b.excludeDateIntervals, includeDates = _b.includeDates, includeDateIntervals = _b.includeDateIntervals, filterDate = _b.filterDate;
  return isOutOfBounds(day, { minDate, maxDate }) || excludeDates && excludeDates.some(function(excludeDate) {
    if (excludeDate instanceof Date) {
      return isSameDay2(day, excludeDate);
    } else {
      return isSameDay2(day, excludeDate.date);
    }
  }) || excludeDateIntervals && excludeDateIntervals.some(function(_a3) {
    var start = _a3.start, end = _a3.end;
    return isWithinInterval(day, { start, end });
  }) || includeDates && !includeDates.some(function(includeDate) {
    return isSameDay2(day, includeDate);
  }) || includeDateIntervals && !includeDateIntervals.some(function(_a3) {
    var start = _a3.start, end = _a3.end;
    return isWithinInterval(day, { start, end });
  }) || filterDate && !filterDate(newDate(day)) || false;
}
function isDayExcluded(day, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, excludeDates = _b.excludeDates, excludeDateIntervals = _b.excludeDateIntervals;
  if (excludeDateIntervals && excludeDateIntervals.length > 0) {
    return excludeDateIntervals.some(function(_a3) {
      var start = _a3.start, end = _a3.end;
      return isWithinInterval(day, { start, end });
    });
  }
  return excludeDates && excludeDates.some(function(excludeDate) {
    var _a3;
    if (excludeDate instanceof Date) {
      return isSameDay2(day, excludeDate);
    } else {
      return isSameDay2(day, (_a3 = excludeDate.date) !== null && _a3 !== void 0 ? _a3 : /* @__PURE__ */ new Date());
    }
  }) || false;
}
function isMonthDisabled(month, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates, filterDate = _b.filterDate;
  return isOutOfBounds(month, {
    minDate: minDate ? startOfMonth(minDate) : void 0,
    maxDate: maxDate ? endOfMonth(maxDate) : void 0
  }) || (excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.some(function(excludeDate) {
    return isSameMonth2(month, excludeDate instanceof Date ? excludeDate : excludeDate.date);
  })) || includeDates && !includeDates.some(function(includeDate) {
    return isSameMonth2(month, includeDate);
  }) || filterDate && !filterDate(newDate(month)) || false;
}
function isMonthInRange(startDate, endDate, m, day) {
  var startDateYear = getYear(startDate);
  var startDateMonth = getMonth(startDate);
  var endDateYear = getYear(endDate);
  var endDateMonth = getMonth(endDate);
  var dayYear = getYear(day);
  if (startDateYear === endDateYear && startDateYear === dayYear) {
    return startDateMonth <= m && m <= endDateMonth;
  } else if (startDateYear < endDateYear) {
    return dayYear === startDateYear && startDateMonth <= m || dayYear === endDateYear && endDateMonth >= m || dayYear < endDateYear && dayYear > startDateYear;
  }
  return false;
}
function isMonthYearDisabled(date, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates;
  return isOutOfBounds(date, { minDate, maxDate }) || excludeDates && excludeDates.some(function(excludedDate) {
    return isSameMonth2(excludedDate instanceof Date ? excludedDate : excludedDate.date, date);
  }) || includeDates && !includeDates.some(function(includedDate) {
    return isSameMonth2(includedDate, date);
  }) || false;
}
function isQuarterDisabled(quarter, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates, filterDate = _b.filterDate;
  return isOutOfBounds(quarter, { minDate, maxDate }) || (excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.some(function(excludeDate) {
    return isSameQuarter2(quarter, excludeDate instanceof Date ? excludeDate : excludeDate.date);
  })) || includeDates && !includeDates.some(function(includeDate) {
    return isSameQuarter2(quarter, includeDate);
  }) || filterDate && !filterDate(newDate(quarter)) || false;
}
function isYearInRange(year, start, end) {
  if (!start || !end)
    return false;
  if (!isValid(start) || !isValid(end))
    return false;
  var startYear = getYear(start);
  var endYear = getYear(end);
  return startYear <= year && endYear >= year;
}
function isYearDisabled(year, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates, filterDate = _b.filterDate;
  var date = new Date(year, 0, 1);
  return isOutOfBounds(date, {
    minDate: minDate ? startOfYear(minDate) : void 0,
    maxDate: maxDate ? endOfYear(maxDate) : void 0
  }) || (excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.some(function(excludeDate) {
    return isSameYear2(date, excludeDate instanceof Date ? excludeDate : excludeDate.date);
  })) || includeDates && !includeDates.some(function(includeDate) {
    return isSameYear2(date, includeDate);
  }) || filterDate && !filterDate(newDate(date)) || false;
}
function isQuarterInRange(startDate, endDate, q, day) {
  var startDateYear = getYear(startDate);
  var startDateQuarter = getQuarter(startDate);
  var endDateYear = getYear(endDate);
  var endDateQuarter = getQuarter(endDate);
  var dayYear = getYear(day);
  if (startDateYear === endDateYear && startDateYear === dayYear) {
    return startDateQuarter <= q && q <= endDateQuarter;
  } else if (startDateYear < endDateYear) {
    return dayYear === startDateYear && startDateQuarter <= q || dayYear === endDateYear && endDateQuarter >= q || dayYear < endDateYear && dayYear > startDateYear;
  }
  return false;
}
function isOutOfBounds(day, _a2) {
  var _b;
  var _c = _a2 === void 0 ? {} : _a2, minDate = _c.minDate, maxDate = _c.maxDate;
  return (_b = minDate && differenceInCalendarDays(day, minDate) < 0 || maxDate && differenceInCalendarDays(day, maxDate) > 0) !== null && _b !== void 0 ? _b : false;
}
function isTimeInList(time, times) {
  return times.some(function(listTime) {
    return getHours(listTime) === getHours(time) && getMinutes(listTime) === getMinutes(time) && getSeconds(listTime) === getSeconds(time);
  });
}
function isTimeDisabled(time, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, excludeTimes = _b.excludeTimes, includeTimes = _b.includeTimes, filterTime = _b.filterTime;
  return excludeTimes && isTimeInList(time, excludeTimes) || includeTimes && !isTimeInList(time, includeTimes) || filterTime && !filterTime(time) || false;
}
function isTimeInDisabledRange(time, _a2) {
  var minTime = _a2.minTime, maxTime = _a2.maxTime;
  if (!minTime || !maxTime) {
    throw new Error("Both minTime and maxTime props required");
  }
  var baseTime = newDate();
  baseTime = setHours(baseTime, getHours(time));
  baseTime = setMinutes(baseTime, getMinutes(time));
  baseTime = setSeconds(baseTime, getSeconds(time));
  var min3 = newDate();
  min3 = setHours(min3, getHours(minTime));
  min3 = setMinutes(min3, getMinutes(minTime));
  min3 = setSeconds(min3, getSeconds(minTime));
  var max3 = newDate();
  max3 = setHours(max3, getHours(maxTime));
  max3 = setMinutes(max3, getMinutes(maxTime));
  max3 = setSeconds(max3, getSeconds(maxTime));
  var valid;
  try {
    valid = !isWithinInterval(baseTime, { start: min3, end: max3 });
  } catch (err) {
    valid = false;
  }
  return valid;
}
function monthDisabledBefore(day, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, minDate = _b.minDate, includeDates = _b.includeDates;
  var previousMonth = subMonths(day, 1);
  return minDate && differenceInCalendarMonths(minDate, previousMonth) > 0 || includeDates && includeDates.every(function(includeDate) {
    return differenceInCalendarMonths(includeDate, previousMonth) > 0;
  }) || false;
}
function monthDisabledAfter(day, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, maxDate = _b.maxDate, includeDates = _b.includeDates;
  var nextMonth = addMonths(day, 1);
  return maxDate && differenceInCalendarMonths(nextMonth, maxDate) > 0 || includeDates && includeDates.every(function(includeDate) {
    return differenceInCalendarMonths(nextMonth, includeDate) > 0;
  }) || false;
}
function quarterDisabledBefore(date, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, minDate = _b.minDate, includeDates = _b.includeDates;
  var firstDateOfYear = startOfYear(date);
  var previousQuarter = subQuarters(firstDateOfYear, 1);
  return minDate && differenceInCalendarQuarters(minDate, previousQuarter) > 0 || includeDates && includeDates.every(function(includeDate) {
    return differenceInCalendarQuarters(includeDate, previousQuarter) > 0;
  }) || false;
}
function quarterDisabledAfter(date, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, maxDate = _b.maxDate, includeDates = _b.includeDates;
  var lastDateOfYear = endOfYear(date);
  var nextQuarter = addQuarters(lastDateOfYear, 1);
  return maxDate && differenceInCalendarQuarters(nextQuarter, maxDate) > 0 || includeDates && includeDates.every(function(includeDate) {
    return differenceInCalendarQuarters(nextQuarter, includeDate) > 0;
  }) || false;
}
function yearDisabledBefore(day, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, minDate = _b.minDate, includeDates = _b.includeDates;
  var previousYear = subYears(day, 1);
  return minDate && differenceInCalendarYears(minDate, previousYear) > 0 || includeDates && includeDates.every(function(includeDate) {
    return differenceInCalendarYears(includeDate, previousYear) > 0;
  }) || false;
}
function yearsDisabledBefore(day, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, minDate = _b.minDate, _c = _b.yearItemNumber, yearItemNumber = _c === void 0 ? DEFAULT_YEAR_ITEM_NUMBER : _c;
  var previousYear = getStartOfYear(subYears(day, yearItemNumber));
  var endPeriod = getYearsPeriod(previousYear, yearItemNumber).endPeriod;
  var minDateYear = minDate && getYear(minDate);
  return minDateYear && minDateYear > endPeriod || false;
}
function yearDisabledAfter(day, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, maxDate = _b.maxDate, includeDates = _b.includeDates;
  var nextYear = addYears(day, 1);
  return maxDate && differenceInCalendarYears(nextYear, maxDate) > 0 || includeDates && includeDates.every(function(includeDate) {
    return differenceInCalendarYears(nextYear, includeDate) > 0;
  }) || false;
}
function yearsDisabledAfter(day, _a2) {
  var _b = _a2 === void 0 ? {} : _a2, maxDate = _b.maxDate, _c = _b.yearItemNumber, yearItemNumber = _c === void 0 ? DEFAULT_YEAR_ITEM_NUMBER : _c;
  var nextYear = addYears(day, yearItemNumber);
  var startPeriod = getYearsPeriod(nextYear, yearItemNumber).startPeriod;
  var maxDateYear = maxDate && getYear(maxDate);
  return maxDateYear && maxDateYear < startPeriod || false;
}
function getEffectiveMinDate(_a2) {
  var minDate = _a2.minDate, includeDates = _a2.includeDates;
  if (includeDates && minDate) {
    var minDates = includeDates.filter(function(includeDate) {
      return differenceInCalendarDays(includeDate, minDate) >= 0;
    });
    return min(minDates);
  } else if (includeDates) {
    return min(includeDates);
  } else {
    return minDate;
  }
}
function getEffectiveMaxDate(_a2) {
  var maxDate = _a2.maxDate, includeDates = _a2.includeDates;
  if (includeDates && maxDate) {
    var maxDates = includeDates.filter(function(includeDate) {
      return differenceInCalendarDays(includeDate, maxDate) <= 0;
    });
    return max(maxDates);
  } else if (includeDates) {
    return max(includeDates);
  } else {
    return maxDate;
  }
}
function getHighLightDaysMap(highlightDates, defaultClassName) {
  var _a2;
  if (highlightDates === void 0) {
    highlightDates = [];
  }
  if (defaultClassName === void 0) {
    defaultClassName = "react-datepicker__day--highlighted";
  }
  var dateClasses = /* @__PURE__ */ new Map();
  for (var i = 0, len = highlightDates.length; i < len; i++) {
    var obj = highlightDates[i];
    if (isDate(obj)) {
      var key = formatDate(obj, "MM.dd.yyyy");
      var classNamesArr = dateClasses.get(key) || [];
      if (!classNamesArr.includes(defaultClassName)) {
        classNamesArr.push(defaultClassName);
        dateClasses.set(key, classNamesArr);
      }
    } else if (typeof obj === "object") {
      var keys = Object.keys(obj);
      var className = (_a2 = keys[0]) !== null && _a2 !== void 0 ? _a2 : "";
      var arrOfDates = obj[className];
      if (typeof className === "string" && Array.isArray(arrOfDates)) {
        for (var k = 0, len_1 = arrOfDates.length; k < len_1; k++) {
          var dateK = arrOfDates[k];
          if (dateK) {
            var key = formatDate(dateK, "MM.dd.yyyy");
            var classNamesArr = dateClasses.get(key) || [];
            if (!classNamesArr.includes(className)) {
              classNamesArr.push(className);
              dateClasses.set(key, classNamesArr);
            }
          }
        }
      }
    }
  }
  return dateClasses;
}
function arraysAreEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every(function(value, index3) {
    return value === array2[index3];
  });
}
function getHolidaysMap(holidayDates, defaultClassName) {
  if (holidayDates === void 0) {
    holidayDates = [];
  }
  if (defaultClassName === void 0) {
    defaultClassName = "react-datepicker__day--holidays";
  }
  var dateClasses = /* @__PURE__ */ new Map();
  holidayDates.forEach(function(holiday) {
    var dateObj = holiday.date, holidayName = holiday.holidayName;
    if (!isDate(dateObj)) {
      return;
    }
    var key = formatDate(dateObj, "MM.dd.yyyy");
    var classNamesObj = dateClasses.get(key) || {
      className: "",
      holidayNames: []
    };
    if ("className" in classNamesObj && classNamesObj["className"] === defaultClassName && arraysAreEqual(classNamesObj["holidayNames"], [holidayName])) {
      return;
    }
    classNamesObj["className"] = defaultClassName;
    var holidayNameArr = classNamesObj["holidayNames"];
    classNamesObj["holidayNames"] = holidayNameArr ? __spreadArray(__spreadArray([], holidayNameArr, true), [holidayName], false) : [holidayName];
    dateClasses.set(key, classNamesObj);
  });
  return dateClasses;
}
function timesToInjectAfter(startOfDay2, currentTime, currentMultiplier, intervals, injectedTimes) {
  var l = injectedTimes.length;
  var times = [];
  for (var i = 0; i < l; i++) {
    var injectedTime = startOfDay2;
    var injectedTimeValue = injectedTimes[i];
    if (injectedTimeValue) {
      injectedTime = addHours(injectedTime, getHours(injectedTimeValue));
      injectedTime = addMinutes(injectedTime, getMinutes(injectedTimeValue));
      injectedTime = addSeconds(injectedTime, getSeconds(injectedTimeValue));
    }
    var nextTime = addMinutes(startOfDay2, (currentMultiplier + 1) * intervals);
    if (isAfter(injectedTime, currentTime) && isBefore(injectedTime, nextTime) && injectedTimeValue != void 0) {
      times.push(injectedTimeValue);
    }
  }
  return times;
}
function addZero(i) {
  return i < 10 ? "0".concat(i) : "".concat(i);
}
function getYearsPeriod(date, yearItemNumber) {
  if (yearItemNumber === void 0) {
    yearItemNumber = DEFAULT_YEAR_ITEM_NUMBER;
  }
  var endPeriod = Math.ceil(getYear(date) / yearItemNumber) * yearItemNumber;
  var startPeriod = endPeriod - (yearItemNumber - 1);
  return { startPeriod, endPeriod };
}
function getHoursInDay(d) {
  var startOfDay2 = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  var startOfTheNextDay = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 24);
  return Math.round((+startOfTheNextDay - +startOfDay2) / 36e5);
}
function startOfMinute(d) {
  var seconds = d.getSeconds();
  var milliseconds = d.getMilliseconds();
  return toDate(d.getTime() - seconds * 1e3 - milliseconds);
}
function isSameMinute(d1, d2) {
  return startOfMinute(d1).getTime() === startOfMinute(d2).getTime();
}
function getMidnightDate(date) {
  if (!isDate(date)) {
    throw new Error("Invalid date");
  }
  var dateWithoutTime = new Date(date);
  dateWithoutTime.setHours(0, 0, 0, 0);
  return dateWithoutTime;
}
function isDateBefore(date, dateToCompare) {
  if (!isDate(date) || !isDate(dateToCompare)) {
    throw new Error("Invalid date received");
  }
  var midnightDate = getMidnightDate(date);
  var midnightDateToCompare = getMidnightDate(dateToCompare);
  return isBefore(midnightDate, midnightDateToCompare);
}
function isSpaceKeyDown(event) {
  return event.key === KeyType.Space;
}
var InputTime = (
  /** @class */
  function(_super) {
    __extends(InputTime2, _super);
    function InputTime2(props) {
      var _this = _super.call(this, props) || this;
      _this.inputRef = import_react3.default.createRef();
      _this.onTimeChange = function(time) {
        var _a2, _b;
        _this.setState({ time });
        var propDate = _this.props.date;
        var isPropDateValid = propDate instanceof Date && !isNaN(+propDate);
        var date = isPropDateValid ? propDate : /* @__PURE__ */ new Date();
        if (time === null || time === void 0 ? void 0 : time.includes(":")) {
          var _c = time.split(":"), hours = _c[0], minutes = _c[1];
          date.setHours(Number(hours));
          date.setMinutes(Number(minutes));
        }
        (_b = (_a2 = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a2, date);
      };
      _this.renderTimeInput = function() {
        var time = _this.state.time;
        var _a2 = _this.props, date = _a2.date, timeString = _a2.timeString, customTimeInput = _a2.customTimeInput;
        if (customTimeInput) {
          return (0, import_react3.cloneElement)(customTimeInput, {
            date,
            value: time,
            onChange: _this.onTimeChange
          });
        }
        return import_react3.default.createElement("input", { type: "time", className: "react-datepicker-time__input", placeholder: "Time", name: "time-input", ref: _this.inputRef, onClick: function() {
          var _a3;
          (_a3 = _this.inputRef.current) === null || _a3 === void 0 ? void 0 : _a3.focus();
        }, required: true, value: time, onChange: function(event) {
          _this.onTimeChange(event.target.value || timeString);
        } });
      };
      _this.state = {
        time: _this.props.timeString
      };
      return _this;
    }
    InputTime2.getDerivedStateFromProps = function(props, state) {
      if (props.timeString !== state.time) {
        return {
          time: props.timeString
        };
      }
      return null;
    };
    InputTime2.prototype.render = function() {
      return import_react3.default.createElement(
        "div",
        { className: "react-datepicker__input-time-container" },
        import_react3.default.createElement("div", { className: "react-datepicker-time__caption" }, this.props.timeInputLabel),
        import_react3.default.createElement(
          "div",
          { className: "react-datepicker-time__input-container" },
          import_react3.default.createElement("div", { className: "react-datepicker-time__input" }, this.renderTimeInput())
        )
      );
    };
    return InputTime2;
  }(import_react3.Component)
);
var Day = (
  /** @class */
  function(_super) {
    __extends(Day2, _super);
    function Day2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.dayEl = (0, import_react3.createRef)();
      _this.handleClick = function(event) {
        if (!_this.isDisabled() && _this.props.onClick) {
          _this.props.onClick(event);
        }
      };
      _this.handleMouseEnter = function(event) {
        if (!_this.isDisabled() && _this.props.onMouseEnter) {
          _this.props.onMouseEnter(event);
        }
      };
      _this.handleOnKeyDown = function(event) {
        var _a2, _b;
        var eventKey = event.key;
        if (eventKey === KeyType.Space) {
          event.preventDefault();
          event.key = KeyType.Enter;
        }
        (_b = (_a2 = _this.props).handleOnKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a2, event);
      };
      _this.isSameDay = function(other) {
        return isSameDay2(_this.props.day, other);
      };
      _this.isKeyboardSelected = function() {
        var _a2;
        if (_this.props.disabledKeyboardNavigation) {
          return false;
        }
        var isSelectedDate = _this.props.selectsMultiple ? (_a2 = _this.props.selectedDates) === null || _a2 === void 0 ? void 0 : _a2.some(function(date) {
          return _this.isSameDayOrWeek(date);
        }) : _this.isSameDayOrWeek(_this.props.selected);
        var isDisabled = _this.props.preSelection && _this.isDisabled(_this.props.preSelection);
        return !isSelectedDate && _this.isSameDayOrWeek(_this.props.preSelection) && !isDisabled;
      };
      _this.isDisabled = function(day) {
        if (day === void 0) {
          day = _this.props.day;
        }
        return isDayDisabled(day, {
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          excludeDates: _this.props.excludeDates,
          excludeDateIntervals: _this.props.excludeDateIntervals,
          includeDateIntervals: _this.props.includeDateIntervals,
          includeDates: _this.props.includeDates,
          filterDate: _this.props.filterDate
        });
      };
      _this.isExcluded = function() {
        return isDayExcluded(_this.props.day, {
          excludeDates: _this.props.excludeDates,
          excludeDateIntervals: _this.props.excludeDateIntervals
        });
      };
      _this.isStartOfWeek = function() {
        return isSameDay2(_this.props.day, getStartOfWeek(_this.props.day, _this.props.locale, _this.props.calendarStartDay));
      };
      _this.isSameWeek = function(other) {
        return _this.props.showWeekPicker && isSameDay2(other, getStartOfWeek(_this.props.day, _this.props.locale, _this.props.calendarStartDay));
      };
      _this.isSameDayOrWeek = function(other) {
        return _this.isSameDay(other) || _this.isSameWeek(other);
      };
      _this.getHighLightedClass = function() {
        var _a2 = _this.props, day = _a2.day, highlightDates = _a2.highlightDates;
        if (!highlightDates) {
          return false;
        }
        var dayStr = formatDate(day, "MM.dd.yyyy");
        return highlightDates.get(dayStr);
      };
      _this.getHolidaysClass = function() {
        var _a2;
        var _b = _this.props, day = _b.day, holidays = _b.holidays;
        if (!holidays) {
          return [void 0];
        }
        var dayStr = formatDate(day, "MM.dd.yyyy");
        if (holidays.has(dayStr)) {
          return [(_a2 = holidays.get(dayStr)) === null || _a2 === void 0 ? void 0 : _a2.className];
        }
        return [void 0];
      };
      _this.isInRange = function() {
        var _a2 = _this.props, day = _a2.day, startDate = _a2.startDate, endDate = _a2.endDate;
        if (!startDate || !endDate) {
          return false;
        }
        return isDayInRange(day, startDate, endDate);
      };
      _this.isInSelectingRange = function() {
        var _a2;
        var _b = _this.props, day = _b.day, selectsStart = _b.selectsStart, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange, selectsDisabledDaysInRange = _b.selectsDisabledDaysInRange, startDate = _b.startDate, endDate = _b.endDate;
        var selectingDate = (_a2 = _this.props.selectingDate) !== null && _a2 !== void 0 ? _a2 : _this.props.preSelection;
        if (!(selectsStart || selectsEnd || selectsRange) || !selectingDate || !selectsDisabledDaysInRange && _this.isDisabled()) {
          return false;
        }
        if (selectsStart && endDate && (isBefore(selectingDate, endDate) || isEqual2(selectingDate, endDate))) {
          return isDayInRange(day, selectingDate, endDate);
        }
        if (selectsEnd && startDate && (isAfter(selectingDate, startDate) || isEqual2(selectingDate, startDate))) {
          return isDayInRange(day, startDate, selectingDate);
        }
        if (selectsRange && startDate && !endDate && (isAfter(selectingDate, startDate) || isEqual2(selectingDate, startDate))) {
          return isDayInRange(day, startDate, selectingDate);
        }
        return false;
      };
      _this.isSelectingRangeStart = function() {
        var _a2;
        if (!_this.isInSelectingRange()) {
          return false;
        }
        var _b = _this.props, day = _b.day, startDate = _b.startDate, selectsStart = _b.selectsStart;
        var selectingDate = (_a2 = _this.props.selectingDate) !== null && _a2 !== void 0 ? _a2 : _this.props.preSelection;
        if (selectsStart) {
          return isSameDay2(day, selectingDate);
        } else {
          return isSameDay2(day, startDate);
        }
      };
      _this.isSelectingRangeEnd = function() {
        var _a2;
        if (!_this.isInSelectingRange()) {
          return false;
        }
        var _b = _this.props, day = _b.day, endDate = _b.endDate, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange;
        var selectingDate = (_a2 = _this.props.selectingDate) !== null && _a2 !== void 0 ? _a2 : _this.props.preSelection;
        if (selectsEnd || selectsRange) {
          return isSameDay2(day, selectingDate);
        } else {
          return isSameDay2(day, endDate);
        }
      };
      _this.isRangeStart = function() {
        var _a2 = _this.props, day = _a2.day, startDate = _a2.startDate, endDate = _a2.endDate;
        if (!startDate || !endDate) {
          return false;
        }
        return isSameDay2(startDate, day);
      };
      _this.isRangeEnd = function() {
        var _a2 = _this.props, day = _a2.day, startDate = _a2.startDate, endDate = _a2.endDate;
        if (!startDate || !endDate) {
          return false;
        }
        return isSameDay2(endDate, day);
      };
      _this.isWeekend = function() {
        var weekday = getDay(_this.props.day);
        return weekday === 0 || weekday === 6;
      };
      _this.isAfterMonth = function() {
        return _this.props.month !== void 0 && (_this.props.month + 1) % 12 === getMonth(_this.props.day);
      };
      _this.isBeforeMonth = function() {
        return _this.props.month !== void 0 && (getMonth(_this.props.day) + 1) % 12 === _this.props.month;
      };
      _this.isCurrentDay = function() {
        return _this.isSameDay(newDate());
      };
      _this.isSelected = function() {
        var _a2;
        if (_this.props.selectsMultiple) {
          return (_a2 = _this.props.selectedDates) === null || _a2 === void 0 ? void 0 : _a2.some(function(date) {
            return _this.isSameDayOrWeek(date);
          });
        }
        return _this.isSameDayOrWeek(_this.props.selected);
      };
      _this.getClassNames = function(date) {
        var dayClassName = _this.props.dayClassName ? _this.props.dayClassName(date) : void 0;
        return clsx("react-datepicker__day", dayClassName, "react-datepicker__day--" + getDayOfWeekCode(_this.props.day), {
          "react-datepicker__day--disabled": _this.isDisabled(),
          "react-datepicker__day--excluded": _this.isExcluded(),
          "react-datepicker__day--selected": _this.isSelected(),
          "react-datepicker__day--keyboard-selected": _this.isKeyboardSelected(),
          "react-datepicker__day--range-start": _this.isRangeStart(),
          "react-datepicker__day--range-end": _this.isRangeEnd(),
          "react-datepicker__day--in-range": _this.isInRange(),
          "react-datepicker__day--in-selecting-range": _this.isInSelectingRange(),
          "react-datepicker__day--selecting-range-start": _this.isSelectingRangeStart(),
          "react-datepicker__day--selecting-range-end": _this.isSelectingRangeEnd(),
          "react-datepicker__day--today": _this.isCurrentDay(),
          "react-datepicker__day--weekend": _this.isWeekend(),
          "react-datepicker__day--outside-month": _this.isAfterMonth() || _this.isBeforeMonth()
        }, _this.getHighLightedClass(), _this.getHolidaysClass());
      };
      _this.getAriaLabel = function() {
        var _a2 = _this.props, day = _a2.day, _b = _a2.ariaLabelPrefixWhenEnabled, ariaLabelPrefixWhenEnabled = _b === void 0 ? "Choose" : _b, _c = _a2.ariaLabelPrefixWhenDisabled, ariaLabelPrefixWhenDisabled = _c === void 0 ? "Not available" : _c;
        var prefix = _this.isDisabled() || _this.isExcluded() ? ariaLabelPrefixWhenDisabled : ariaLabelPrefixWhenEnabled;
        return "".concat(prefix, " ").concat(formatDate(day, "PPPP", _this.props.locale));
      };
      _this.getTitle = function() {
        var _a2 = _this.props, day = _a2.day, _b = _a2.holidays, holidays = _b === void 0 ? /* @__PURE__ */ new Map() : _b, excludeDates = _a2.excludeDates;
        var compareDt = formatDate(day, "MM.dd.yyyy");
        var titles = [];
        if (holidays.has(compareDt)) {
          titles.push.apply(titles, holidays.get(compareDt).holidayNames);
        }
        if (_this.isExcluded()) {
          titles.push(excludeDates === null || excludeDates === void 0 ? void 0 : excludeDates.filter(function(excludeDate) {
            if (excludeDate instanceof Date) {
              return isSameDay2(excludeDate, day);
            }
            return isSameDay2(excludeDate === null || excludeDate === void 0 ? void 0 : excludeDate.date, day);
          }).map(function(excludeDate) {
            if (excludeDate instanceof Date) {
              return void 0;
            }
            return excludeDate === null || excludeDate === void 0 ? void 0 : excludeDate.message;
          }));
        }
        return titles.join(", ");
      };
      _this.getTabIndex = function() {
        var selectedDay = _this.props.selected;
        var preSelectionDay = _this.props.preSelection;
        var tabIndex = !(_this.props.showWeekPicker && (_this.props.showWeekNumber || !_this.isStartOfWeek())) && (_this.isKeyboardSelected() || _this.isSameDay(selectedDay) && isSameDay2(preSelectionDay, selectedDay)) ? 0 : -1;
        return tabIndex;
      };
      _this.handleFocusDay = function() {
        var _a2;
        _this.shouldFocusDay() && ((_a2 = _this.dayEl.current) === null || _a2 === void 0 ? void 0 : _a2.focus({ preventScroll: true }));
      };
      _this.renderDayContents = function() {
        if (_this.props.monthShowsDuplicateDaysEnd && _this.isAfterMonth())
          return null;
        if (_this.props.monthShowsDuplicateDaysStart && _this.isBeforeMonth())
          return null;
        return _this.props.renderDayContents ? _this.props.renderDayContents(getDate(_this.props.day), _this.props.day) : getDate(_this.props.day);
      };
      _this.render = function() {
        return (
          // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
          import_react3.default.createElement(
            "div",
            { ref: _this.dayEl, className: _this.getClassNames(_this.props.day), onKeyDown: _this.handleOnKeyDown, onClick: _this.handleClick, onMouseEnter: !_this.props.usePointerEvent ? _this.handleMouseEnter : void 0, onPointerEnter: _this.props.usePointerEvent ? _this.handleMouseEnter : void 0, tabIndex: _this.getTabIndex(), "aria-label": _this.getAriaLabel(), role: "option", title: _this.getTitle(), "aria-disabled": _this.isDisabled(), "aria-current": _this.isCurrentDay() ? "date" : void 0, "aria-selected": _this.isSelected() || _this.isInRange() },
            _this.renderDayContents(),
            _this.getTitle() !== "" && import_react3.default.createElement("span", { className: "overlay" }, _this.getTitle())
          )
        );
      };
      return _this;
    }
    Day2.prototype.componentDidMount = function() {
      this.handleFocusDay();
    };
    Day2.prototype.componentDidUpdate = function() {
      this.handleFocusDay();
    };
    Day2.prototype.shouldFocusDay = function() {
      var shouldFocusDay = false;
      if (this.getTabIndex() === 0 && this.isSameDay(this.props.preSelection)) {
        if (!document.activeElement || document.activeElement === document.body) {
          shouldFocusDay = true;
        }
        if (this.props.inline && !this.props.shouldFocusDayInline) {
          shouldFocusDay = false;
        }
        if (this.isDayActiveElement()) {
          shouldFocusDay = true;
        }
        if (this.isDuplicateDay()) {
          shouldFocusDay = false;
        }
      }
      return shouldFocusDay;
    };
    Day2.prototype.isDayActiveElement = function() {
      var _a2, _b, _c;
      return ((_b = (_a2 = this.props.containerRef) === null || _a2 === void 0 ? void 0 : _a2.current) === null || _b === void 0 ? void 0 : _b.contains(document.activeElement)) && ((_c = document.activeElement) === null || _c === void 0 ? void 0 : _c.classList.contains("react-datepicker__day"));
    };
    Day2.prototype.isDuplicateDay = function() {
      return (
        //day is one of the non rendered duplicate days
        this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth() || this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth()
      );
    };
    return Day2;
  }(import_react3.Component)
);
var WeekNumber = (
  /** @class */
  function(_super) {
    __extends(WeekNumber2, _super);
    function WeekNumber2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.weekNumberEl = (0, import_react3.createRef)();
      _this.handleClick = function(event) {
        if (_this.props.onClick) {
          _this.props.onClick(event);
        }
      };
      _this.handleOnKeyDown = function(event) {
        var _a2, _b;
        var eventKey = event.key;
        if (eventKey === KeyType.Space) {
          event.preventDefault();
          event.key = KeyType.Enter;
        }
        (_b = (_a2 = _this.props).handleOnKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a2, event);
      };
      _this.isKeyboardSelected = function() {
        return !_this.props.disabledKeyboardNavigation && !isSameDay2(_this.props.date, _this.props.selected) && isSameDay2(_this.props.date, _this.props.preSelection);
      };
      _this.getTabIndex = function() {
        return _this.props.showWeekPicker && _this.props.showWeekNumber && (_this.isKeyboardSelected() || isSameDay2(_this.props.date, _this.props.selected) && isSameDay2(_this.props.preSelection, _this.props.selected)) ? 0 : -1;
      };
      _this.handleFocusWeekNumber = function(prevProps) {
        var shouldFocusWeekNumber = false;
        if (_this.getTabIndex() === 0 && !(prevProps === null || prevProps === void 0 ? void 0 : prevProps.isInputFocused) && isSameDay2(_this.props.date, _this.props.preSelection)) {
          if (!document.activeElement || document.activeElement === document.body) {
            shouldFocusWeekNumber = true;
          }
          if (_this.props.inline && !_this.props.shouldFocusDayInline) {
            shouldFocusWeekNumber = false;
          }
          if (_this.props.containerRef && _this.props.containerRef.current && _this.props.containerRef.current.contains(document.activeElement) && document.activeElement && document.activeElement.classList.contains("react-datepicker__week-number")) {
            shouldFocusWeekNumber = true;
          }
        }
        shouldFocusWeekNumber && _this.weekNumberEl.current && _this.weekNumberEl.current.focus({ preventScroll: true });
      };
      return _this;
    }
    Object.defineProperty(WeekNumber2, "defaultProps", {
      get: function() {
        return {
          ariaLabelPrefix: "week "
        };
      },
      enumerable: false,
      configurable: true
    });
    WeekNumber2.prototype.componentDidMount = function() {
      this.handleFocusWeekNumber();
    };
    WeekNumber2.prototype.componentDidUpdate = function(prevProps) {
      this.handleFocusWeekNumber(prevProps);
    };
    WeekNumber2.prototype.render = function() {
      var _a2 = this.props, weekNumber = _a2.weekNumber, isWeekDisabled = _a2.isWeekDisabled, _b = _a2.ariaLabelPrefix, ariaLabelPrefix = _b === void 0 ? WeekNumber2.defaultProps.ariaLabelPrefix : _b, onClick = _a2.onClick;
      var weekNumberClasses = {
        "react-datepicker__week-number": true,
        "react-datepicker__week-number--clickable": !!onClick && !isWeekDisabled,
        "react-datepicker__week-number--selected": !!onClick && isSameDay2(this.props.date, this.props.selected)
      };
      return import_react3.default.createElement("div", { ref: this.weekNumberEl, className: clsx(weekNumberClasses), "aria-label": "".concat(ariaLabelPrefix, " ").concat(this.props.weekNumber), onClick: this.handleClick, onKeyDown: this.handleOnKeyDown, tabIndex: this.getTabIndex() }, weekNumber);
    };
    return WeekNumber2;
  }(import_react3.Component)
);
var Week = (
  /** @class */
  function(_super) {
    __extends(Week2, _super);
    function Week2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.isDisabled = function(day) {
        return isDayDisabled(day, {
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          excludeDates: _this.props.excludeDates,
          excludeDateIntervals: _this.props.excludeDateIntervals,
          includeDateIntervals: _this.props.includeDateIntervals,
          includeDates: _this.props.includeDates,
          filterDate: _this.props.filterDate
        });
      };
      _this.handleDayClick = function(day, event) {
        if (_this.props.onDayClick) {
          _this.props.onDayClick(day, event);
        }
      };
      _this.handleDayMouseEnter = function(day) {
        if (_this.props.onDayMouseEnter) {
          _this.props.onDayMouseEnter(day);
        }
      };
      _this.handleWeekClick = function(day, weekNumber, event) {
        var _a2, _b, _c;
        var enabledWeekDay = new Date(day);
        for (var i = 0; i < 7; i++) {
          var processingDay = new Date(day);
          processingDay.setDate(processingDay.getDate() + i);
          var isEnabled = !_this.isDisabled(processingDay);
          if (isEnabled) {
            enabledWeekDay = processingDay;
            break;
          }
        }
        if (typeof _this.props.onWeekSelect === "function") {
          _this.props.onWeekSelect(enabledWeekDay, weekNumber, event);
        }
        if (_this.props.showWeekPicker) {
          _this.handleDayClick(enabledWeekDay, event);
        }
        if ((_a2 = _this.props.shouldCloseOnSelect) !== null && _a2 !== void 0 ? _a2 : Week2.defaultProps.shouldCloseOnSelect) {
          (_c = (_b = _this.props).setOpen) === null || _c === void 0 ? void 0 : _c.call(_b, false);
        }
      };
      _this.formatWeekNumber = function(date) {
        if (_this.props.formatWeekNumber) {
          return _this.props.formatWeekNumber(date);
        }
        return getWeek(date);
      };
      _this.isWeekDisabled = function() {
        var startOfWeek2 = _this.startOfWeek();
        var endOfWeek2 = addDays(startOfWeek2, 6);
        var processingDate = new Date(startOfWeek2);
        while (processingDate <= endOfWeek2) {
          if (!_this.isDisabled(processingDate))
            return false;
          processingDate = addDays(processingDate, 1);
        }
        return true;
      };
      _this.renderDays = function() {
        var startOfWeek2 = _this.startOfWeek();
        var days = [];
        var weekNumber = _this.formatWeekNumber(startOfWeek2);
        if (_this.props.showWeekNumber) {
          var onClickAction = _this.props.onWeekSelect || _this.props.showWeekPicker ? _this.handleWeekClick.bind(_this, startOfWeek2, weekNumber) : void 0;
          days.push(import_react3.default.createElement(WeekNumber, _assign({ key: "W" }, Week2.defaultProps, _this.props, { weekNumber, isWeekDisabled: _this.isWeekDisabled(), date: startOfWeek2, onClick: onClickAction })));
        }
        return days.concat([0, 1, 2, 3, 4, 5, 6].map(function(offset4) {
          var day = addDays(startOfWeek2, offset4);
          return import_react3.default.createElement(Day, _assign({}, Week2.defaultProps, _this.props, { ariaLabelPrefixWhenEnabled: _this.props.chooseDayAriaLabelPrefix, ariaLabelPrefixWhenDisabled: _this.props.disabledDayAriaLabelPrefix, key: day.valueOf(), day, onClick: _this.handleDayClick.bind(_this, day), onMouseEnter: _this.handleDayMouseEnter.bind(_this, day) }));
        }));
      };
      _this.startOfWeek = function() {
        return getStartOfWeek(_this.props.day, _this.props.locale, _this.props.calendarStartDay);
      };
      _this.isKeyboardSelected = function() {
        return !_this.props.disabledKeyboardNavigation && !isSameDay2(_this.startOfWeek(), _this.props.selected) && isSameDay2(_this.startOfWeek(), _this.props.preSelection);
      };
      return _this;
    }
    Object.defineProperty(Week2, "defaultProps", {
      get: function() {
        return {
          shouldCloseOnSelect: true
        };
      },
      enumerable: false,
      configurable: true
    });
    Week2.prototype.render = function() {
      var weekNumberClasses = {
        "react-datepicker__week": true,
        "react-datepicker__week--selected": isSameDay2(this.startOfWeek(), this.props.selected),
        "react-datepicker__week--keyboard-selected": this.isKeyboardSelected()
      };
      return import_react3.default.createElement("div", { className: clsx(weekNumberClasses) }, this.renderDays());
    };
    return Week2;
  }(import_react3.Component)
);
var _a;
var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;
var MONTH_COLUMNS_LAYOUT = {
  TWO_COLUMNS: "two_columns",
  THREE_COLUMNS: "three_columns",
  FOUR_COLUMNS: "four_columns"
};
var MONTH_COLUMNS = (_a = {}, _a[MONTH_COLUMNS_LAYOUT.TWO_COLUMNS] = {
  grid: [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [10, 11]
  ],
  verticalNavigationOffset: 2
}, _a[MONTH_COLUMNS_LAYOUT.THREE_COLUMNS] = {
  grid: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10, 11]
  ],
  verticalNavigationOffset: 3
}, _a[MONTH_COLUMNS_LAYOUT.FOUR_COLUMNS] = {
  grid: [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
  ],
  verticalNavigationOffset: 4
}, _a);
var MONTH_NAVIGATION_HORIZONTAL_OFFSET = 1;
function getMonthColumnsLayout(showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker) {
  if (showFourColumnMonthYearPicker) {
    return MONTH_COLUMNS_LAYOUT.FOUR_COLUMNS;
  }
  if (showTwoColumnMonthYearPicker) {
    return MONTH_COLUMNS_LAYOUT.TWO_COLUMNS;
  }
  return MONTH_COLUMNS_LAYOUT.THREE_COLUMNS;
}
var Month = (
  /** @class */
  function(_super) {
    __extends(Month2, _super);
    function Month2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.MONTH_REFS = __spreadArray([], Array(12), true).map(function() {
        return (0, import_react3.createRef)();
      });
      _this.QUARTER_REFS = __spreadArray([], Array(4), true).map(function() {
        return (0, import_react3.createRef)();
      });
      _this.isDisabled = function(day) {
        return isDayDisabled(day, {
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          excludeDates: _this.props.excludeDates,
          excludeDateIntervals: _this.props.excludeDateIntervals,
          includeDateIntervals: _this.props.includeDateIntervals,
          includeDates: _this.props.includeDates,
          filterDate: _this.props.filterDate
        });
      };
      _this.isExcluded = function(day) {
        return isDayExcluded(day, {
          excludeDates: _this.props.excludeDates,
          excludeDateIntervals: _this.props.excludeDateIntervals
        });
      };
      _this.handleDayClick = function(day, event) {
        var _a2, _b;
        (_b = (_a2 = _this.props).onDayClick) === null || _b === void 0 ? void 0 : _b.call(_a2, day, event, _this.props.orderInDisplay);
      };
      _this.handleDayMouseEnter = function(day) {
        var _a2, _b;
        (_b = (_a2 = _this.props).onDayMouseEnter) === null || _b === void 0 ? void 0 : _b.call(_a2, day);
      };
      _this.handleMouseLeave = function() {
        var _a2, _b;
        (_b = (_a2 = _this.props).onMouseLeave) === null || _b === void 0 ? void 0 : _b.call(_a2);
      };
      _this.isRangeStartMonth = function(m) {
        var _a2 = _this.props, day = _a2.day, startDate = _a2.startDate, endDate = _a2.endDate;
        if (!startDate || !endDate) {
          return false;
        }
        return isSameMonth2(setMonth(day, m), startDate);
      };
      _this.isRangeStartQuarter = function(q) {
        var _a2 = _this.props, day = _a2.day, startDate = _a2.startDate, endDate = _a2.endDate;
        if (!startDate || !endDate) {
          return false;
        }
        return isSameQuarter2(setQuarter(day, q), startDate);
      };
      _this.isRangeEndMonth = function(m) {
        var _a2 = _this.props, day = _a2.day, startDate = _a2.startDate, endDate = _a2.endDate;
        if (!startDate || !endDate) {
          return false;
        }
        return isSameMonth2(setMonth(day, m), endDate);
      };
      _this.isRangeEndQuarter = function(q) {
        var _a2 = _this.props, day = _a2.day, startDate = _a2.startDate, endDate = _a2.endDate;
        if (!startDate || !endDate) {
          return false;
        }
        return isSameQuarter2(setQuarter(day, q), endDate);
      };
      _this.isInSelectingRangeMonth = function(m) {
        var _a2;
        var _b = _this.props, day = _b.day, selectsStart = _b.selectsStart, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange, startDate = _b.startDate, endDate = _b.endDate;
        var selectingDate = (_a2 = _this.props.selectingDate) !== null && _a2 !== void 0 ? _a2 : _this.props.preSelection;
        if (!(selectsStart || selectsEnd || selectsRange) || !selectingDate) {
          return false;
        }
        if (selectsStart && endDate) {
          return isMonthInRange(selectingDate, endDate, m, day);
        }
        if (selectsEnd && startDate) {
          return isMonthInRange(startDate, selectingDate, m, day);
        }
        if (selectsRange && startDate && !endDate) {
          return isMonthInRange(startDate, selectingDate, m, day);
        }
        return false;
      };
      _this.isSelectingMonthRangeStart = function(m) {
        var _a2;
        if (!_this.isInSelectingRangeMonth(m)) {
          return false;
        }
        var _b = _this.props, day = _b.day, startDate = _b.startDate, selectsStart = _b.selectsStart;
        var _month = setMonth(day, m);
        var selectingDate = (_a2 = _this.props.selectingDate) !== null && _a2 !== void 0 ? _a2 : _this.props.preSelection;
        if (selectsStart) {
          return isSameMonth2(_month, selectingDate);
        } else {
          return isSameMonth2(_month, startDate);
        }
      };
      _this.isSelectingMonthRangeEnd = function(m) {
        var _a2;
        if (!_this.isInSelectingRangeMonth(m)) {
          return false;
        }
        var _b = _this.props, day = _b.day, endDate = _b.endDate, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange;
        var _month = setMonth(day, m);
        var selectingDate = (_a2 = _this.props.selectingDate) !== null && _a2 !== void 0 ? _a2 : _this.props.preSelection;
        if (selectsEnd || selectsRange) {
          return isSameMonth2(_month, selectingDate);
        } else {
          return isSameMonth2(_month, endDate);
        }
      };
      _this.isInSelectingRangeQuarter = function(q) {
        var _a2;
        var _b = _this.props, day = _b.day, selectsStart = _b.selectsStart, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange, startDate = _b.startDate, endDate = _b.endDate;
        var selectingDate = (_a2 = _this.props.selectingDate) !== null && _a2 !== void 0 ? _a2 : _this.props.preSelection;
        if (!(selectsStart || selectsEnd || selectsRange) || !selectingDate) {
          return false;
        }
        if (selectsStart && endDate) {
          return isQuarterInRange(selectingDate, endDate, q, day);
        }
        if (selectsEnd && startDate) {
          return isQuarterInRange(startDate, selectingDate, q, day);
        }
        if (selectsRange && startDate && !endDate) {
          return isQuarterInRange(startDate, selectingDate, q, day);
        }
        return false;
      };
      _this.isWeekInMonth = function(startOfWeek2) {
        var day = _this.props.day;
        var endOfWeek2 = addDays(startOfWeek2, 6);
        return isSameMonth2(startOfWeek2, day) || isSameMonth2(endOfWeek2, day);
      };
      _this.isCurrentMonth = function(day, m) {
        return getYear(day) === getYear(newDate()) && m === getMonth(newDate());
      };
      _this.isCurrentQuarter = function(day, q) {
        return getYear(day) === getYear(newDate()) && q === getQuarter(newDate());
      };
      _this.isSelectedMonth = function(day, m, selected) {
        return getMonth(selected) === m && getYear(day) === getYear(selected);
      };
      _this.isSelectMonthInList = function(day, m, selectedDates) {
        return selectedDates.some(function(selectedDate) {
          return _this.isSelectedMonth(day, m, selectedDate);
        });
      };
      _this.isSelectedQuarter = function(day, q, selected) {
        return getQuarter(day) === q && getYear(day) === getYear(selected);
      };
      _this.renderWeeks = function() {
        var weeks = [];
        var isFixedHeight = _this.props.fixedHeight;
        var i = 0;
        var breakAfterNextPush = false;
        var currentWeekStart = getStartOfWeek(getStartOfMonth(_this.props.day), _this.props.locale, _this.props.calendarStartDay);
        var isPreSelected = function(preSelection2) {
          return _this.props.showWeekPicker ? getStartOfWeek(preSelection2, _this.props.locale, _this.props.calendarStartDay) : _this.props.preSelection;
        };
        var isSelected = function(selected2) {
          return _this.props.showWeekPicker ? getStartOfWeek(selected2, _this.props.locale, _this.props.calendarStartDay) : _this.props.selected;
        };
        var selected = _this.props.selected ? isSelected(_this.props.selected) : void 0;
        var preSelection = _this.props.preSelection ? isPreSelected(_this.props.preSelection) : void 0;
        while (true) {
          weeks.push(import_react3.default.createElement(Week, _assign({}, _this.props, { ariaLabelPrefix: _this.props.weekAriaLabelPrefix, key: i, day: currentWeekStart, month: getMonth(_this.props.day), onDayClick: _this.handleDayClick, onDayMouseEnter: _this.handleDayMouseEnter, selected, preSelection, showWeekNumber: _this.props.showWeekNumbers })));
          if (breakAfterNextPush)
            break;
          i++;
          currentWeekStart = addWeeks(currentWeekStart, 1);
          var isFixedAndFinalWeek = isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
          var isNonFixedAndOutOfMonth = !isFixedHeight && !_this.isWeekInMonth(currentWeekStart);
          if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
            if (_this.props.peekNextMonth) {
              breakAfterNextPush = true;
            } else {
              break;
            }
          }
        }
        return weeks;
      };
      _this.onMonthClick = function(event, m) {
        var _a2 = _this.isMonthDisabledForLabelDate(m), isDisabled = _a2.isDisabled, labelDate = _a2.labelDate;
        if (isDisabled) {
          return;
        }
        _this.handleDayClick(getStartOfMonth(labelDate), event);
      };
      _this.onMonthMouseEnter = function(m) {
        var _a2 = _this.isMonthDisabledForLabelDate(m), isDisabled = _a2.isDisabled, labelDate = _a2.labelDate;
        if (isDisabled) {
          return;
        }
        _this.handleDayMouseEnter(getStartOfMonth(labelDate));
      };
      _this.handleMonthNavigation = function(newMonth, newDate2) {
        var _a2, _b, _c, _d;
        (_b = (_a2 = _this.props).setPreSelection) === null || _b === void 0 ? void 0 : _b.call(_a2, newDate2);
        (_d = (_c = _this.MONTH_REFS[newMonth]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.focus();
      };
      _this.handleKeyboardNavigation = function(event, eventKey, month) {
        var _a2;
        var _b = _this.props, selected = _b.selected, preSelection = _b.preSelection, setPreSelection = _b.setPreSelection, minDate = _b.minDate, maxDate = _b.maxDate, showFourColumnMonthYearPicker = _b.showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker = _b.showTwoColumnMonthYearPicker;
        if (!preSelection)
          return;
        var monthColumnsLayout = getMonthColumnsLayout(showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker);
        var verticalOffset = _this.getVerticalOffset(monthColumnsLayout);
        var monthsGrid = (_a2 = MONTH_COLUMNS[monthColumnsLayout]) === null || _a2 === void 0 ? void 0 : _a2.grid;
        var calculateNewDateAndMonth = function(eventKey2, date, month2) {
          var _a3, _b2;
          var newCalculatedDate2 = date;
          var newCalculatedMonth2 = month2;
          switch (eventKey2) {
            case KeyType.ArrowRight:
              newCalculatedDate2 = addMonths(date, MONTH_NAVIGATION_HORIZONTAL_OFFSET);
              newCalculatedMonth2 = month2 === 11 ? 0 : month2 + MONTH_NAVIGATION_HORIZONTAL_OFFSET;
              break;
            case KeyType.ArrowLeft:
              newCalculatedDate2 = subMonths(date, MONTH_NAVIGATION_HORIZONTAL_OFFSET);
              newCalculatedMonth2 = month2 === 0 ? 11 : month2 - MONTH_NAVIGATION_HORIZONTAL_OFFSET;
              break;
            case KeyType.ArrowUp:
              newCalculatedDate2 = subMonths(date, verticalOffset);
              newCalculatedMonth2 = ((_a3 = monthsGrid === null || monthsGrid === void 0 ? void 0 : monthsGrid[0]) === null || _a3 === void 0 ? void 0 : _a3.includes(month2)) ? month2 + 12 - verticalOffset : month2 - verticalOffset;
              break;
            case KeyType.ArrowDown:
              newCalculatedDate2 = addMonths(date, verticalOffset);
              newCalculatedMonth2 = ((_b2 = monthsGrid === null || monthsGrid === void 0 ? void 0 : monthsGrid[monthsGrid.length - 1]) === null || _b2 === void 0 ? void 0 : _b2.includes(month2)) ? month2 - 12 + verticalOffset : month2 + verticalOffset;
              break;
          }
          return { newCalculatedDate: newCalculatedDate2, newCalculatedMonth: newCalculatedMonth2 };
        };
        var getNewDateAndMonth = function(eventKey2, selectedDate, month2) {
          var MAX_ITERATIONS = 40;
          var eventKeyCopy = eventKey2;
          var validDateFound = false;
          var iterations = 0;
          var _a3 = calculateNewDateAndMonth(eventKeyCopy, selectedDate, month2), newCalculatedDate2 = _a3.newCalculatedDate, newCalculatedMonth2 = _a3.newCalculatedMonth;
          while (!validDateFound) {
            if (iterations >= MAX_ITERATIONS) {
              newCalculatedDate2 = selectedDate;
              newCalculatedMonth2 = month2;
              break;
            }
            if (minDate && newCalculatedDate2 < minDate) {
              eventKeyCopy = KeyType.ArrowRight;
              var obj = calculateNewDateAndMonth(eventKeyCopy, newCalculatedDate2, newCalculatedMonth2);
              newCalculatedDate2 = obj.newCalculatedDate;
              newCalculatedMonth2 = obj.newCalculatedMonth;
            }
            if (maxDate && newCalculatedDate2 > maxDate) {
              eventKeyCopy = KeyType.ArrowLeft;
              var obj = calculateNewDateAndMonth(eventKeyCopy, newCalculatedDate2, newCalculatedMonth2);
              newCalculatedDate2 = obj.newCalculatedDate;
              newCalculatedMonth2 = obj.newCalculatedMonth;
            }
            if (isMonthYearDisabled(newCalculatedDate2, _this.props)) {
              var obj = calculateNewDateAndMonth(eventKeyCopy, newCalculatedDate2, newCalculatedMonth2);
              newCalculatedDate2 = obj.newCalculatedDate;
              newCalculatedMonth2 = obj.newCalculatedMonth;
            } else {
              validDateFound = true;
            }
            iterations++;
          }
          return { newCalculatedDate: newCalculatedDate2, newCalculatedMonth: newCalculatedMonth2 };
        };
        if (eventKey === KeyType.Enter) {
          if (!_this.isMonthDisabled(month)) {
            _this.onMonthClick(event, month);
            setPreSelection === null || setPreSelection === void 0 ? void 0 : setPreSelection(selected);
          }
          return;
        }
        var _c = getNewDateAndMonth(eventKey, preSelection, month), newCalculatedDate = _c.newCalculatedDate, newCalculatedMonth = _c.newCalculatedMonth;
        switch (eventKey) {
          case KeyType.ArrowRight:
          case KeyType.ArrowLeft:
          case KeyType.ArrowUp:
          case KeyType.ArrowDown:
            _this.handleMonthNavigation(newCalculatedMonth, newCalculatedDate);
            break;
        }
      };
      _this.getVerticalOffset = function(monthColumnsLayout) {
        var _a2, _b;
        return (_b = (_a2 = MONTH_COLUMNS[monthColumnsLayout]) === null || _a2 === void 0 ? void 0 : _a2.verticalNavigationOffset) !== null && _b !== void 0 ? _b : 0;
      };
      _this.onMonthKeyDown = function(event, month) {
        var _a2 = _this.props, disabledKeyboardNavigation = _a2.disabledKeyboardNavigation, handleOnMonthKeyDown = _a2.handleOnMonthKeyDown;
        var eventKey = event.key;
        if (eventKey !== KeyType.Tab) {
          event.preventDefault();
        }
        if (!disabledKeyboardNavigation) {
          _this.handleKeyboardNavigation(event, eventKey, month);
        }
        handleOnMonthKeyDown && handleOnMonthKeyDown(event);
      };
      _this.onQuarterClick = function(event, q) {
        var labelDate = setQuarter(_this.props.day, q);
        if (isQuarterDisabled(labelDate, _this.props)) {
          return;
        }
        _this.handleDayClick(getStartOfQuarter(labelDate), event);
      };
      _this.onQuarterMouseEnter = function(q) {
        var labelDate = setQuarter(_this.props.day, q);
        if (isQuarterDisabled(labelDate, _this.props)) {
          return;
        }
        _this.handleDayMouseEnter(getStartOfQuarter(labelDate));
      };
      _this.handleQuarterNavigation = function(newQuarter, newDate2) {
        var _a2, _b, _c, _d;
        if (_this.isDisabled(newDate2) || _this.isExcluded(newDate2)) {
          return;
        }
        (_b = (_a2 = _this.props).setPreSelection) === null || _b === void 0 ? void 0 : _b.call(_a2, newDate2);
        (_d = (_c = _this.QUARTER_REFS[newQuarter - 1]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.focus();
      };
      _this.onQuarterKeyDown = function(event, quarter) {
        var _a2, _b;
        var eventKey = event.key;
        if (!_this.props.disabledKeyboardNavigation) {
          switch (eventKey) {
            case KeyType.Enter:
              _this.onQuarterClick(event, quarter);
              (_b = (_a2 = _this.props).setPreSelection) === null || _b === void 0 ? void 0 : _b.call(_a2, _this.props.selected);
              break;
            case KeyType.ArrowRight:
              if (!_this.props.preSelection) {
                break;
              }
              _this.handleQuarterNavigation(quarter === 4 ? 1 : quarter + 1, addQuarters(_this.props.preSelection, 1));
              break;
            case KeyType.ArrowLeft:
              if (!_this.props.preSelection) {
                break;
              }
              _this.handleQuarterNavigation(quarter === 1 ? 4 : quarter - 1, subQuarters(_this.props.preSelection, 1));
              break;
          }
        }
      };
      _this.isMonthDisabledForLabelDate = function(month) {
        var _a2;
        var _b = _this.props, day = _b.day, minDate = _b.minDate, maxDate = _b.maxDate, excludeDates = _b.excludeDates, includeDates = _b.includeDates;
        var labelDate = setMonth(day, month);
        return {
          isDisabled: (_a2 = (minDate || maxDate || excludeDates || includeDates) && isMonthDisabled(labelDate, _this.props)) !== null && _a2 !== void 0 ? _a2 : false,
          labelDate
        };
      };
      _this.isMonthDisabled = function(month) {
        var isDisabled = _this.isMonthDisabledForLabelDate(month).isDisabled;
        return isDisabled;
      };
      _this.getMonthClassNames = function(m) {
        var _a2 = _this.props, day = _a2.day, startDate = _a2.startDate, endDate = _a2.endDate, preSelection = _a2.preSelection, monthClassName = _a2.monthClassName;
        var _monthClassName = monthClassName ? monthClassName(setMonth(day, m)) : void 0;
        var selection = _this.getSelection();
        return clsx("react-datepicker__month-text", "react-datepicker__month-".concat(m), _monthClassName, {
          "react-datepicker__month-text--disabled": _this.isMonthDisabled(m),
          "react-datepicker__month-text--selected": selection ? _this.isSelectMonthInList(day, m, selection) : void 0,
          "react-datepicker__month-text--keyboard-selected": !_this.props.disabledKeyboardNavigation && preSelection && _this.isSelectedMonth(day, m, preSelection) && !_this.isMonthDisabled(m),
          "react-datepicker__month-text--in-selecting-range": _this.isInSelectingRangeMonth(m),
          "react-datepicker__month-text--in-range": startDate && endDate ? isMonthInRange(startDate, endDate, m, day) : void 0,
          "react-datepicker__month-text--range-start": _this.isRangeStartMonth(m),
          "react-datepicker__month-text--range-end": _this.isRangeEndMonth(m),
          "react-datepicker__month-text--selecting-range-start": _this.isSelectingMonthRangeStart(m),
          "react-datepicker__month-text--selecting-range-end": _this.isSelectingMonthRangeEnd(m),
          "react-datepicker__month-text--today": _this.isCurrentMonth(day, m)
        });
      };
      _this.getTabIndex = function(m) {
        if (_this.props.preSelection == null) {
          return "-1";
        }
        var preSelectedMonth = getMonth(_this.props.preSelection);
        var isPreSelectedMonthDisabled = _this.isMonthDisabledForLabelDate(preSelectedMonth).isDisabled;
        var tabIndex = m === preSelectedMonth && !(isPreSelectedMonthDisabled || _this.props.disabledKeyboardNavigation) ? "0" : "-1";
        return tabIndex;
      };
      _this.getQuarterTabIndex = function(q) {
        if (_this.props.preSelection == null) {
          return "-1";
        }
        var preSelectedQuarter = getQuarter(_this.props.preSelection);
        var isCurrentQuarterDisabled = isQuarterDisabled(_this.props.day, _this.props);
        var tabIndex = q === preSelectedQuarter && !(isCurrentQuarterDisabled || _this.props.disabledKeyboardNavigation) ? "0" : "-1";
        return tabIndex;
      };
      _this.getAriaLabel = function(month) {
        var _a2 = _this.props, _b = _a2.chooseDayAriaLabelPrefix, chooseDayAriaLabelPrefix = _b === void 0 ? "Choose" : _b, _c = _a2.disabledDayAriaLabelPrefix, disabledDayAriaLabelPrefix = _c === void 0 ? "Not available" : _c, day = _a2.day, locale = _a2.locale;
        var labelDate = setMonth(day, month);
        var prefix = _this.isDisabled(labelDate) || _this.isExcluded(labelDate) ? disabledDayAriaLabelPrefix : chooseDayAriaLabelPrefix;
        return "".concat(prefix, " ").concat(formatDate(labelDate, "MMMM yyyy", locale));
      };
      _this.getQuarterClassNames = function(q) {
        var _a2 = _this.props, day = _a2.day, startDate = _a2.startDate, endDate = _a2.endDate, selected = _a2.selected, minDate = _a2.minDate, maxDate = _a2.maxDate, excludeDates = _a2.excludeDates, includeDates = _a2.includeDates, filterDate = _a2.filterDate, preSelection = _a2.preSelection, disabledKeyboardNavigation = _a2.disabledKeyboardNavigation;
        var isDisabled = (minDate || maxDate || excludeDates || includeDates || filterDate) && isQuarterDisabled(setQuarter(day, q), _this.props);
        return clsx("react-datepicker__quarter-text", "react-datepicker__quarter-".concat(q), {
          "react-datepicker__quarter-text--disabled": isDisabled,
          "react-datepicker__quarter-text--selected": selected ? _this.isSelectedQuarter(day, q, selected) : void 0,
          "react-datepicker__quarter-text--keyboard-selected": !disabledKeyboardNavigation && preSelection && _this.isSelectedQuarter(day, q, preSelection) && !isDisabled,
          "react-datepicker__quarter-text--in-selecting-range": _this.isInSelectingRangeQuarter(q),
          "react-datepicker__quarter-text--in-range": startDate && endDate ? isQuarterInRange(startDate, endDate, q, day) : void 0,
          "react-datepicker__quarter-text--range-start": _this.isRangeStartQuarter(q),
          "react-datepicker__quarter-text--range-end": _this.isRangeEndQuarter(q)
        });
      };
      _this.getMonthContent = function(m) {
        var _a2 = _this.props, showFullMonthYearPicker = _a2.showFullMonthYearPicker, renderMonthContent = _a2.renderMonthContent, locale = _a2.locale, day = _a2.day;
        var shortMonthText = getMonthShortInLocale(m, locale);
        var fullMonthText = getMonthInLocale(m, locale);
        if (renderMonthContent) {
          return renderMonthContent(m, shortMonthText, fullMonthText, day);
        }
        return showFullMonthYearPicker ? fullMonthText : shortMonthText;
      };
      _this.getQuarterContent = function(q) {
        var _a2;
        var _b = _this.props, renderQuarterContent = _b.renderQuarterContent, locale = _b.locale;
        var shortQuarter = getQuarterShortInLocale(q, locale);
        return (_a2 = renderQuarterContent === null || renderQuarterContent === void 0 ? void 0 : renderQuarterContent(q, shortQuarter)) !== null && _a2 !== void 0 ? _a2 : shortQuarter;
      };
      _this.renderMonths = function() {
        var _a2;
        var _b = _this.props, showTwoColumnMonthYearPicker = _b.showTwoColumnMonthYearPicker, showFourColumnMonthYearPicker = _b.showFourColumnMonthYearPicker, day = _b.day, selected = _b.selected;
        var monthColumns = (_a2 = MONTH_COLUMNS[getMonthColumnsLayout(showFourColumnMonthYearPicker, showTwoColumnMonthYearPicker)]) === null || _a2 === void 0 ? void 0 : _a2.grid;
        return monthColumns === null || monthColumns === void 0 ? void 0 : monthColumns.map(function(month, i) {
          return import_react3.default.createElement("div", { className: "react-datepicker__month-wrapper", key: i }, month.map(function(m, j) {
            return import_react3.default.createElement("div", { ref: _this.MONTH_REFS[m], key: j, onClick: function(event) {
              _this.onMonthClick(event, m);
            }, onKeyDown: function(event) {
              if (isSpaceKeyDown(event)) {
                event.preventDefault();
                event.key = KeyType.Enter;
              }
              _this.onMonthKeyDown(event, m);
            }, onMouseEnter: !_this.props.usePointerEvent ? function() {
              return _this.onMonthMouseEnter(m);
            } : void 0, onPointerEnter: _this.props.usePointerEvent ? function() {
              return _this.onMonthMouseEnter(m);
            } : void 0, tabIndex: Number(_this.getTabIndex(m)), className: _this.getMonthClassNames(m), "aria-disabled": _this.isMonthDisabled(m), role: "option", "aria-label": _this.getAriaLabel(m), "aria-current": _this.isCurrentMonth(day, m) ? "date" : void 0, "aria-selected": selected ? _this.isSelectedMonth(day, m, selected) : void 0 }, _this.getMonthContent(m));
          }));
        });
      };
      _this.renderQuarters = function() {
        var _a2 = _this.props, day = _a2.day, selected = _a2.selected;
        var quarters = [1, 2, 3, 4];
        return import_react3.default.createElement("div", { className: "react-datepicker__quarter-wrapper" }, quarters.map(function(q, j) {
          return import_react3.default.createElement("div", { key: j, ref: _this.QUARTER_REFS[j], role: "option", onClick: function(event) {
            _this.onQuarterClick(event, q);
          }, onKeyDown: function(event) {
            _this.onQuarterKeyDown(event, q);
          }, onMouseEnter: !_this.props.usePointerEvent ? function() {
            return _this.onQuarterMouseEnter(q);
          } : void 0, onPointerEnter: _this.props.usePointerEvent ? function() {
            return _this.onQuarterMouseEnter(q);
          } : void 0, className: _this.getQuarterClassNames(q), "aria-selected": selected ? _this.isSelectedQuarter(day, q, selected) : void 0, tabIndex: Number(_this.getQuarterTabIndex(q)), "aria-current": _this.isCurrentQuarter(day, q) ? "date" : void 0 }, _this.getQuarterContent(q));
        }));
      };
      _this.getClassNames = function() {
        var _a2 = _this.props, selectingDate = _a2.selectingDate, selectsStart = _a2.selectsStart, selectsEnd = _a2.selectsEnd, showMonthYearPicker = _a2.showMonthYearPicker, showQuarterYearPicker = _a2.showQuarterYearPicker, showWeekPicker = _a2.showWeekPicker;
        return clsx("react-datepicker__month", {
          "react-datepicker__month--selecting-range": selectingDate && (selectsStart || selectsEnd)
        }, { "react-datepicker__monthPicker": showMonthYearPicker }, { "react-datepicker__quarterPicker": showQuarterYearPicker }, { "react-datepicker__weekPicker": showWeekPicker });
      };
      return _this;
    }
    Month2.prototype.getSelection = function() {
      var _a2 = this.props, selected = _a2.selected, selectedDates = _a2.selectedDates, selectsMultiple = _a2.selectsMultiple;
      if (selectsMultiple) {
        return selectedDates;
      }
      if (selected) {
        return [selected];
      }
      return void 0;
    };
    Month2.prototype.render = function() {
      var _a2 = this.props, showMonthYearPicker = _a2.showMonthYearPicker, showQuarterYearPicker = _a2.showQuarterYearPicker, day = _a2.day, _b = _a2.ariaLabelPrefix, ariaLabelPrefix = _b === void 0 ? "Month " : _b;
      var formattedAriaLabelPrefix = ariaLabelPrefix ? ariaLabelPrefix.trim() + " " : "";
      return import_react3.default.createElement("div", { className: this.getClassNames(), onMouseLeave: !this.props.usePointerEvent ? this.handleMouseLeave : void 0, onPointerLeave: this.props.usePointerEvent ? this.handleMouseLeave : void 0, "aria-label": "".concat(formattedAriaLabelPrefix).concat(formatDate(day, "MMMM, yyyy", this.props.locale)), role: "listbox" }, showMonthYearPicker ? this.renderMonths() : showQuarterYearPicker ? this.renderQuarters() : this.renderWeeks());
    };
    return Month2;
  }(import_react3.Component)
);
var MonthDropdownOptions = (
  /** @class */
  function(_super) {
    __extends(MonthDropdownOptions2, _super);
    function MonthDropdownOptions2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.isSelectedMonth = function(i) {
        return _this.props.month === i;
      };
      _this.renderOptions = function() {
        return _this.props.monthNames.map(function(month, i) {
          return import_react3.default.createElement(
            "div",
            { className: _this.isSelectedMonth(i) ? "react-datepicker__month-option react-datepicker__month-option--selected_month" : "react-datepicker__month-option", key: month, onClick: _this.onChange.bind(_this, i), "aria-selected": _this.isSelectedMonth(i) ? "true" : void 0 },
            _this.isSelectedMonth(i) ? import_react3.default.createElement("span", { className: "react-datepicker__month-option--selected" }, "✓") : "",
            month
          );
        });
      };
      _this.onChange = function(month) {
        return _this.props.onChange(month);
      };
      _this.handleClickOutside = function() {
        return _this.props.onCancel();
      };
      return _this;
    }
    MonthDropdownOptions2.prototype.render = function() {
      return import_react3.default.createElement(ClickOutsideWrapper, { className: "react-datepicker__month-dropdown", onClickOutside: this.handleClickOutside }, this.renderOptions());
    };
    return MonthDropdownOptions2;
  }(import_react3.Component)
);
var MonthDropdown = (
  /** @class */
  function(_super) {
    __extends(MonthDropdown2, _super);
    function MonthDropdown2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = {
        dropdownVisible: false
      };
      _this.renderSelectOptions = function(monthNames) {
        return monthNames.map(function(m, i) {
          return import_react3.default.createElement("option", { key: m, value: i }, m);
        });
      };
      _this.renderSelectMode = function(monthNames) {
        return import_react3.default.createElement("select", { value: _this.props.month, className: "react-datepicker__month-select", onChange: function(e) {
          return _this.onChange(parseInt(e.target.value));
        } }, _this.renderSelectOptions(monthNames));
      };
      _this.renderReadView = function(visible, monthNames) {
        return import_react3.default.createElement(
          "div",
          { key: "read", style: { visibility: visible ? "visible" : "hidden" }, className: "react-datepicker__month-read-view", onClick: _this.toggleDropdown },
          import_react3.default.createElement("span", { className: "react-datepicker__month-read-view--down-arrow" }),
          import_react3.default.createElement("span", { className: "react-datepicker__month-read-view--selected-month" }, monthNames[_this.props.month])
        );
      };
      _this.renderDropdown = function(monthNames) {
        return import_react3.default.createElement(MonthDropdownOptions, _assign({ key: "dropdown" }, _this.props, { monthNames, onChange: _this.onChange, onCancel: _this.toggleDropdown }));
      };
      _this.renderScrollMode = function(monthNames) {
        var dropdownVisible = _this.state.dropdownVisible;
        var result = [_this.renderReadView(!dropdownVisible, monthNames)];
        if (dropdownVisible) {
          result.unshift(_this.renderDropdown(monthNames));
        }
        return result;
      };
      _this.onChange = function(month) {
        _this.toggleDropdown();
        if (month !== _this.props.month) {
          _this.props.onChange(month);
        }
      };
      _this.toggleDropdown = function() {
        return _this.setState({
          dropdownVisible: !_this.state.dropdownVisible
        });
      };
      return _this;
    }
    MonthDropdown2.prototype.render = function() {
      var _this = this;
      var monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(this.props.useShortMonthInDropdown ? function(m) {
        return getMonthShortInLocale(m, _this.props.locale);
      } : function(m) {
        return getMonthInLocale(m, _this.props.locale);
      });
      var renderedDropdown;
      switch (this.props.dropdownMode) {
        case "scroll":
          renderedDropdown = this.renderScrollMode(monthNames);
          break;
        case "select":
          renderedDropdown = this.renderSelectMode(monthNames);
          break;
      }
      return import_react3.default.createElement("div", { className: "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(this.props.dropdownMode) }, renderedDropdown);
    };
    return MonthDropdown2;
  }(import_react3.Component)
);
function generateMonthYears(minDate, maxDate) {
  var list = [];
  var currDate = getStartOfMonth(minDate);
  var lastDate = getStartOfMonth(maxDate);
  while (!isAfter(currDate, lastDate)) {
    list.push(newDate(currDate));
    currDate = addMonths(currDate, 1);
  }
  return list;
}
var MonthYearDropdownOptions = (
  /** @class */
  function(_super) {
    __extends(MonthYearDropdownOptions2, _super);
    function MonthYearDropdownOptions2(props) {
      var _this = _super.call(this, props) || this;
      _this.renderOptions = function() {
        return _this.state.monthYearsList.map(function(monthYear) {
          var monthYearPoint = getTime(monthYear);
          var isSameMonthYear = isSameYear2(_this.props.date, monthYear) && isSameMonth2(_this.props.date, monthYear);
          return import_react3.default.createElement(
            "div",
            { className: isSameMonthYear ? "react-datepicker__month-year-option--selected_month-year" : "react-datepicker__month-year-option", key: monthYearPoint, onClick: _this.onChange.bind(_this, monthYearPoint), "aria-selected": isSameMonthYear ? "true" : void 0 },
            isSameMonthYear ? import_react3.default.createElement("span", { className: "react-datepicker__month-year-option--selected" }, "✓") : "",
            formatDate(monthYear, _this.props.dateFormat, _this.props.locale)
          );
        });
      };
      _this.onChange = function(monthYear) {
        return _this.props.onChange(monthYear);
      };
      _this.handleClickOutside = function() {
        _this.props.onCancel();
      };
      _this.state = {
        monthYearsList: generateMonthYears(_this.props.minDate, _this.props.maxDate)
      };
      return _this;
    }
    MonthYearDropdownOptions2.prototype.render = function() {
      var dropdownClass = clsx({
        "react-datepicker__month-year-dropdown": true,
        "react-datepicker__month-year-dropdown--scrollable": this.props.scrollableMonthYearDropdown
      });
      return import_react3.default.createElement(ClickOutsideWrapper, { className: dropdownClass, onClickOutside: this.handleClickOutside }, this.renderOptions());
    };
    return MonthYearDropdownOptions2;
  }(import_react3.Component)
);
var MonthYearDropdown = (
  /** @class */
  function(_super) {
    __extends(MonthYearDropdown2, _super);
    function MonthYearDropdown2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = {
        dropdownVisible: false
      };
      _this.renderSelectOptions = function() {
        var currDate = getStartOfMonth(_this.props.minDate);
        var lastDate = getStartOfMonth(_this.props.maxDate);
        var options = [];
        while (!isAfter(currDate, lastDate)) {
          var timePoint = getTime(currDate);
          options.push(import_react3.default.createElement("option", { key: timePoint, value: timePoint }, formatDate(currDate, _this.props.dateFormat, _this.props.locale)));
          currDate = addMonths(currDate, 1);
        }
        return options;
      };
      _this.onSelectChange = function(event) {
        _this.onChange(parseInt(event.target.value));
      };
      _this.renderSelectMode = function() {
        return import_react3.default.createElement("select", { value: getTime(getStartOfMonth(_this.props.date)), className: "react-datepicker__month-year-select", onChange: _this.onSelectChange }, _this.renderSelectOptions());
      };
      _this.renderReadView = function(visible) {
        var yearMonth = formatDate(_this.props.date, _this.props.dateFormat, _this.props.locale);
        return import_react3.default.createElement(
          "div",
          { key: "read", style: { visibility: visible ? "visible" : "hidden" }, className: "react-datepicker__month-year-read-view", onClick: _this.toggleDropdown },
          import_react3.default.createElement("span", { className: "react-datepicker__month-year-read-view--down-arrow" }),
          import_react3.default.createElement("span", { className: "react-datepicker__month-year-read-view--selected-month-year" }, yearMonth)
        );
      };
      _this.renderDropdown = function() {
        return import_react3.default.createElement(MonthYearDropdownOptions, _assign({ key: "dropdown" }, _this.props, { onChange: _this.onChange, onCancel: _this.toggleDropdown }));
      };
      _this.renderScrollMode = function() {
        var dropdownVisible = _this.state.dropdownVisible;
        var result = [_this.renderReadView(!dropdownVisible)];
        if (dropdownVisible) {
          result.unshift(_this.renderDropdown());
        }
        return result;
      };
      _this.onChange = function(monthYearPoint) {
        _this.toggleDropdown();
        var changedDate = newDate(monthYearPoint);
        if (isSameYear2(_this.props.date, changedDate) && isSameMonth2(_this.props.date, changedDate)) {
          return;
        }
        _this.props.onChange(changedDate);
      };
      _this.toggleDropdown = function() {
        return _this.setState({
          dropdownVisible: !_this.state.dropdownVisible
        });
      };
      return _this;
    }
    MonthYearDropdown2.prototype.render = function() {
      var renderedDropdown;
      switch (this.props.dropdownMode) {
        case "scroll":
          renderedDropdown = this.renderScrollMode();
          break;
        case "select":
          renderedDropdown = this.renderSelectMode();
          break;
      }
      return import_react3.default.createElement("div", { className: "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(this.props.dropdownMode) }, renderedDropdown);
    };
    return MonthYearDropdown2;
  }(import_react3.Component)
);
var Time = (
  /** @class */
  function(_super) {
    __extends(Time2, _super);
    function Time2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = {
        height: null
      };
      _this.scrollToTheSelectedTime = function() {
        requestAnimationFrame(function() {
          var _a2, _b, _c;
          if (!_this.list)
            return;
          _this.list.scrollTop = (_c = _this.centerLi && Time2.calcCenterPosition(_this.props.monthRef ? _this.props.monthRef.clientHeight - ((_b = (_a2 = _this.header) === null || _a2 === void 0 ? void 0 : _a2.clientHeight) !== null && _b !== void 0 ? _b : 0) : _this.list.clientHeight, _this.centerLi)) !== null && _c !== void 0 ? _c : 0;
        });
      };
      _this.handleClick = function(time) {
        var _a2, _b;
        if ((_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || (_this.props.excludeTimes || _this.props.includeTimes || _this.props.filterTime) && isTimeDisabled(time, _this.props)) {
          return;
        }
        (_b = (_a2 = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a2, time);
      };
      _this.isSelectedTime = function(time) {
        return _this.props.selected && isSameMinute(_this.props.selected, time);
      };
      _this.isDisabledTime = function(time) {
        return (_this.props.minTime || _this.props.maxTime) && isTimeInDisabledRange(time, _this.props) || (_this.props.excludeTimes || _this.props.includeTimes || _this.props.filterTime) && isTimeDisabled(time, _this.props);
      };
      _this.liClasses = function(time) {
        var _a2;
        var classes = [
          "react-datepicker__time-list-item",
          _this.props.timeClassName ? _this.props.timeClassName(time) : void 0
        ];
        if (_this.isSelectedTime(time)) {
          classes.push("react-datepicker__time-list-item--selected");
        }
        if (_this.isDisabledTime(time)) {
          classes.push("react-datepicker__time-list-item--disabled");
        }
        if (_this.props.injectTimes && (getHours(time) * 3600 + getMinutes(time) * 60 + getSeconds(time)) % (((_a2 = _this.props.intervals) !== null && _a2 !== void 0 ? _a2 : Time2.defaultProps.intervals) * 60) !== 0) {
          classes.push("react-datepicker__time-list-item--injected");
        }
        return classes.join(" ");
      };
      _this.handleOnKeyDown = function(event, time) {
        var _a2, _b;
        if (event.key === KeyType.Space) {
          event.preventDefault();
          event.key = KeyType.Enter;
        }
        if ((event.key === KeyType.ArrowUp || event.key === KeyType.ArrowLeft) && event.target instanceof HTMLElement && event.target.previousSibling) {
          event.preventDefault();
          event.target.previousSibling instanceof HTMLElement && event.target.previousSibling.focus();
        }
        if ((event.key === KeyType.ArrowDown || event.key === KeyType.ArrowRight) && event.target instanceof HTMLElement && event.target.nextSibling) {
          event.preventDefault();
          event.target.nextSibling instanceof HTMLElement && event.target.nextSibling.focus();
        }
        if (event.key === KeyType.Enter) {
          _this.handleClick(time);
        }
        (_b = (_a2 = _this.props).handleOnKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a2, event);
      };
      _this.renderTimes = function() {
        var _a2;
        var times = [];
        var format2 = typeof _this.props.format === "string" ? _this.props.format : "p";
        var intervals = (_a2 = _this.props.intervals) !== null && _a2 !== void 0 ? _a2 : Time2.defaultProps.intervals;
        var activeDate = _this.props.selected || _this.props.openToDate || newDate();
        var base = getStartOfDay(activeDate);
        var sortedInjectTimes = _this.props.injectTimes && _this.props.injectTimes.sort(function(a, b) {
          return a.getTime() - b.getTime();
        });
        var minutesInDay = 60 * getHoursInDay(activeDate);
        var multiplier = minutesInDay / intervals;
        for (var i = 0; i < multiplier; i++) {
          var currentTime = addMinutes(base, i * intervals);
          times.push(currentTime);
          if (sortedInjectTimes) {
            var timesToInject = timesToInjectAfter(base, currentTime, i, intervals, sortedInjectTimes);
            times = times.concat(timesToInject);
          }
        }
        var timeToFocus = times.reduce(function(prev, time) {
          if (time.getTime() <= activeDate.getTime()) {
            return time;
          }
          return prev;
        }, times[0]);
        return times.map(function(time) {
          return import_react3.default.createElement("li", { key: time.valueOf(), onClick: _this.handleClick.bind(_this, time), className: _this.liClasses(time), ref: function(li) {
            if (time === timeToFocus) {
              _this.centerLi = li;
            }
          }, onKeyDown: function(event) {
            _this.handleOnKeyDown(event, time);
          }, tabIndex: time === timeToFocus ? 0 : -1, role: "option", "aria-selected": _this.isSelectedTime(time) ? "true" : void 0, "aria-disabled": _this.isDisabledTime(time) ? "true" : void 0 }, formatDate(time, format2, _this.props.locale));
        });
      };
      _this.renderTimeCaption = function() {
        if (_this.props.showTimeCaption === false) {
          return import_react3.default.createElement(import_react3.default.Fragment, null);
        }
        return import_react3.default.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--time ".concat(_this.props.showTimeSelectOnly ? "react-datepicker__header--time--only" : ""), ref: function(header) {
            _this.header = header;
          } },
          import_react3.default.createElement("div", { className: "react-datepicker-time__header" }, _this.props.timeCaption)
        );
      };
      return _this;
    }
    Object.defineProperty(Time2, "defaultProps", {
      get: function() {
        return {
          intervals: 30,
          todayButton: null,
          timeCaption: "Time",
          showTimeCaption: true
        };
      },
      enumerable: false,
      configurable: true
    });
    Time2.prototype.componentDidMount = function() {
      this.scrollToTheSelectedTime();
      if (this.props.monthRef && this.header) {
        this.setState({
          height: this.props.monthRef.clientHeight - this.header.clientHeight
        });
      }
    };
    Time2.prototype.render = function() {
      var _this = this;
      var _a2;
      var height = this.state.height;
      return import_react3.default.createElement(
        "div",
        { className: "react-datepicker__time-container ".concat(((_a2 = this.props.todayButton) !== null && _a2 !== void 0 ? _a2 : Time2.defaultProps.todayButton) ? "react-datepicker__time-container--with-today-button" : "") },
        this.renderTimeCaption(),
        import_react3.default.createElement(
          "div",
          { className: "react-datepicker__time" },
          import_react3.default.createElement(
            "div",
            { className: "react-datepicker__time-box" },
            import_react3.default.createElement("ul", { className: "react-datepicker__time-list", ref: function(list) {
              _this.list = list;
            }, style: height ? { height } : {}, role: "listbox", "aria-label": this.props.timeCaption }, this.renderTimes())
          )
        )
      );
    };
    Time2.calcCenterPosition = function(listHeight, centerLiRef) {
      return centerLiRef.offsetTop - (listHeight / 2 - centerLiRef.clientHeight / 2);
    };
    return Time2;
  }(import_react3.Component)
);
var VERTICAL_NAVIGATION_OFFSET = 3;
var Year = (
  /** @class */
  function(_super) {
    __extends(Year2, _super);
    function Year2(props) {
      var _this = _super.call(this, props) || this;
      _this.YEAR_REFS = __spreadArray([], Array(_this.props.yearItemNumber), true).map(function() {
        return (0, import_react3.createRef)();
      });
      _this.isDisabled = function(date) {
        return isDayDisabled(date, {
          minDate: _this.props.minDate,
          maxDate: _this.props.maxDate,
          excludeDates: _this.props.excludeDates,
          includeDates: _this.props.includeDates,
          filterDate: _this.props.filterDate
        });
      };
      _this.isExcluded = function(date) {
        return isDayExcluded(date, {
          excludeDates: _this.props.excludeDates
        });
      };
      _this.selectingDate = function() {
        var _a2;
        return (_a2 = _this.props.selectingDate) !== null && _a2 !== void 0 ? _a2 : _this.props.preSelection;
      };
      _this.updateFocusOnPaginate = function(refIndex) {
        var waitForReRender = function() {
          var _a2, _b;
          (_b = (_a2 = _this.YEAR_REFS[refIndex]) === null || _a2 === void 0 ? void 0 : _a2.current) === null || _b === void 0 ? void 0 : _b.focus();
        };
        window.requestAnimationFrame(waitForReRender);
      };
      _this.handleYearClick = function(day, event) {
        if (_this.props.onDayClick) {
          _this.props.onDayClick(day, event);
        }
      };
      _this.handleYearNavigation = function(newYear, newDate2) {
        var _a2, _b, _c, _d;
        var _e = _this.props, date = _e.date, yearItemNumber = _e.yearItemNumber;
        if (date === void 0 || yearItemNumber === void 0) {
          return;
        }
        var startPeriod = getYearsPeriod(date, yearItemNumber).startPeriod;
        if (_this.isDisabled(newDate2) || _this.isExcluded(newDate2)) {
          return;
        }
        (_b = (_a2 = _this.props).setPreSelection) === null || _b === void 0 ? void 0 : _b.call(_a2, newDate2);
        if (newYear - startPeriod < 0) {
          _this.updateFocusOnPaginate(yearItemNumber - (startPeriod - newYear));
        } else if (newYear - startPeriod >= yearItemNumber) {
          _this.updateFocusOnPaginate(Math.abs(yearItemNumber - (newYear - startPeriod)));
        } else
          (_d = (_c = _this.YEAR_REFS[newYear - startPeriod]) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.focus();
      };
      _this.isSameDay = function(y, other) {
        return isSameDay2(y, other);
      };
      _this.isCurrentYear = function(y) {
        return y === getYear(newDate());
      };
      _this.isRangeStart = function(y) {
        return _this.props.startDate && _this.props.endDate && isSameYear2(setYear(newDate(), y), _this.props.startDate);
      };
      _this.isRangeEnd = function(y) {
        return _this.props.startDate && _this.props.endDate && isSameYear2(setYear(newDate(), y), _this.props.endDate);
      };
      _this.isInRange = function(y) {
        return isYearInRange(y, _this.props.startDate, _this.props.endDate);
      };
      _this.isInSelectingRange = function(y) {
        var _a2 = _this.props, selectsStart = _a2.selectsStart, selectsEnd = _a2.selectsEnd, selectsRange = _a2.selectsRange, startDate = _a2.startDate, endDate = _a2.endDate;
        if (!(selectsStart || selectsEnd || selectsRange) || !_this.selectingDate()) {
          return false;
        }
        if (selectsStart && endDate) {
          return isYearInRange(y, _this.selectingDate(), endDate);
        }
        if (selectsEnd && startDate) {
          return isYearInRange(y, startDate, _this.selectingDate());
        }
        if (selectsRange && startDate && !endDate) {
          return isYearInRange(y, startDate, _this.selectingDate());
        }
        return false;
      };
      _this.isSelectingRangeStart = function(y) {
        var _a2;
        if (!_this.isInSelectingRange(y)) {
          return false;
        }
        var _b = _this.props, startDate = _b.startDate, selectsStart = _b.selectsStart;
        var _year = setYear(newDate(), y);
        if (selectsStart) {
          return isSameYear2(_year, (_a2 = _this.selectingDate()) !== null && _a2 !== void 0 ? _a2 : null);
        }
        return isSameYear2(_year, startDate !== null && startDate !== void 0 ? startDate : null);
      };
      _this.isSelectingRangeEnd = function(y) {
        var _a2;
        if (!_this.isInSelectingRange(y)) {
          return false;
        }
        var _b = _this.props, endDate = _b.endDate, selectsEnd = _b.selectsEnd, selectsRange = _b.selectsRange;
        var _year = setYear(newDate(), y);
        if (selectsEnd || selectsRange) {
          return isSameYear2(_year, (_a2 = _this.selectingDate()) !== null && _a2 !== void 0 ? _a2 : null);
        }
        return isSameYear2(_year, endDate !== null && endDate !== void 0 ? endDate : null);
      };
      _this.isKeyboardSelected = function(y) {
        if (_this.props.date === void 0 || _this.props.selected == null || _this.props.preSelection == null) {
          return;
        }
        var _a2 = _this.props, minDate = _a2.minDate, maxDate = _a2.maxDate, excludeDates = _a2.excludeDates, includeDates = _a2.includeDates, filterDate = _a2.filterDate;
        var date = getStartOfYear(setYear(_this.props.date, y));
        var isDisabled = (minDate || maxDate || excludeDates || includeDates || filterDate) && isYearDisabled(y, _this.props);
        return !_this.props.disabledKeyboardNavigation && !_this.props.inline && !isSameDay2(date, getStartOfYear(_this.props.selected)) && isSameDay2(date, getStartOfYear(_this.props.preSelection)) && !isDisabled;
      };
      _this.onYearClick = function(event, y) {
        var date = _this.props.date;
        if (date === void 0) {
          return;
        }
        _this.handleYearClick(getStartOfYear(setYear(date, y)), event);
      };
      _this.onYearKeyDown = function(event, y) {
        var _a2, _b;
        var key = event.key;
        var _c = _this.props, date = _c.date, yearItemNumber = _c.yearItemNumber, handleOnKeyDown = _c.handleOnKeyDown;
        if (key !== KeyType.Tab) {
          event.preventDefault();
        }
        if (!_this.props.disabledKeyboardNavigation) {
          switch (key) {
            case KeyType.Enter:
              if (_this.props.selected == null) {
                break;
              }
              _this.onYearClick(event, y);
              (_b = (_a2 = _this.props).setPreSelection) === null || _b === void 0 ? void 0 : _b.call(_a2, _this.props.selected);
              break;
            case KeyType.ArrowRight:
              if (_this.props.preSelection == null) {
                break;
              }
              _this.handleYearNavigation(y + 1, addYears(_this.props.preSelection, 1));
              break;
            case KeyType.ArrowLeft:
              if (_this.props.preSelection == null) {
                break;
              }
              _this.handleYearNavigation(y - 1, subYears(_this.props.preSelection, 1));
              break;
            case KeyType.ArrowUp: {
              if (date === void 0 || yearItemNumber === void 0 || _this.props.preSelection == null) {
                break;
              }
              var startPeriod = getYearsPeriod(date, yearItemNumber).startPeriod;
              var offset4 = VERTICAL_NAVIGATION_OFFSET;
              var newYear = y - offset4;
              if (newYear < startPeriod) {
                var leftOverOffset = yearItemNumber % offset4;
                if (y >= startPeriod && y < startPeriod + leftOverOffset) {
                  offset4 = leftOverOffset;
                } else {
                  offset4 += leftOverOffset;
                }
                newYear = y - offset4;
              }
              _this.handleYearNavigation(newYear, subYears(_this.props.preSelection, offset4));
              break;
            }
            case KeyType.ArrowDown: {
              if (date === void 0 || yearItemNumber === void 0 || _this.props.preSelection == null) {
                break;
              }
              var endPeriod = getYearsPeriod(date, yearItemNumber).endPeriod;
              var offset4 = VERTICAL_NAVIGATION_OFFSET;
              var newYear = y + offset4;
              if (newYear > endPeriod) {
                var leftOverOffset = yearItemNumber % offset4;
                if (y <= endPeriod && y > endPeriod - leftOverOffset) {
                  offset4 = leftOverOffset;
                } else {
                  offset4 += leftOverOffset;
                }
                newYear = y + offset4;
              }
              _this.handleYearNavigation(newYear, addYears(_this.props.preSelection, offset4));
              break;
            }
          }
        }
        handleOnKeyDown && handleOnKeyDown(event);
      };
      _this.getYearClassNames = function(y) {
        var _a2 = _this.props, date = _a2.date, minDate = _a2.minDate, maxDate = _a2.maxDate, selected = _a2.selected, excludeDates = _a2.excludeDates, includeDates = _a2.includeDates, filterDate = _a2.filterDate, yearClassName = _a2.yearClassName;
        return clsx("react-datepicker__year-text", "react-datepicker__year-".concat(y), date ? yearClassName === null || yearClassName === void 0 ? void 0 : yearClassName(setYear(date, y)) : void 0, {
          "react-datepicker__year-text--selected": selected ? y === getYear(selected) : void 0,
          "react-datepicker__year-text--disabled": (minDate || maxDate || excludeDates || includeDates || filterDate) && isYearDisabled(y, _this.props),
          "react-datepicker__year-text--keyboard-selected": _this.isKeyboardSelected(y),
          "react-datepicker__year-text--range-start": _this.isRangeStart(y),
          "react-datepicker__year-text--range-end": _this.isRangeEnd(y),
          "react-datepicker__year-text--in-range": _this.isInRange(y),
          "react-datepicker__year-text--in-selecting-range": _this.isInSelectingRange(y),
          "react-datepicker__year-text--selecting-range-start": _this.isSelectingRangeStart(y),
          "react-datepicker__year-text--selecting-range-end": _this.isSelectingRangeEnd(y),
          "react-datepicker__year-text--today": _this.isCurrentYear(y)
        });
      };
      _this.getYearTabIndex = function(y) {
        if (_this.props.disabledKeyboardNavigation || _this.props.preSelection == null) {
          return "-1";
        }
        var preSelected = getYear(_this.props.preSelection);
        var isPreSelectedYearDisabled = isYearDisabled(y, _this.props);
        return y === preSelected && !isPreSelectedYearDisabled ? "0" : "-1";
      };
      _this.getYearContent = function(y) {
        return _this.props.renderYearContent ? _this.props.renderYearContent(y) : y;
      };
      return _this;
    }
    Year2.prototype.render = function() {
      var _this = this;
      var yearsList = [];
      var _a2 = this.props, date = _a2.date, yearItemNumber = _a2.yearItemNumber, onYearMouseEnter = _a2.onYearMouseEnter, onYearMouseLeave = _a2.onYearMouseLeave;
      if (date === void 0) {
        return null;
      }
      var _b = getYearsPeriod(date, yearItemNumber), startPeriod = _b.startPeriod, endPeriod = _b.endPeriod;
      var _loop_1 = function(y2) {
        yearsList.push(import_react3.default.createElement("div", { ref: this_1.YEAR_REFS[y2 - startPeriod], onClick: function(event) {
          _this.onYearClick(event, y2);
        }, onKeyDown: function(event) {
          if (isSpaceKeyDown(event)) {
            event.preventDefault();
            event.key = KeyType.Enter;
          }
          _this.onYearKeyDown(event, y2);
        }, tabIndex: Number(this_1.getYearTabIndex(y2)), className: this_1.getYearClassNames(y2), onMouseEnter: !this_1.props.usePointerEvent ? function(event) {
          return onYearMouseEnter(event, y2);
        } : void 0, onPointerEnter: this_1.props.usePointerEvent ? function(event) {
          return onYearMouseEnter(event, y2);
        } : void 0, onMouseLeave: !this_1.props.usePointerEvent ? function(event) {
          return onYearMouseLeave(event, y2);
        } : void 0, onPointerLeave: this_1.props.usePointerEvent ? function(event) {
          return onYearMouseLeave(event, y2);
        } : void 0, key: y2, "aria-current": this_1.isCurrentYear(y2) ? "date" : void 0 }, this_1.getYearContent(y2)));
      };
      var this_1 = this;
      for (var y = startPeriod; y <= endPeriod; y++) {
        _loop_1(y);
      }
      return import_react3.default.createElement(
        "div",
        { className: "react-datepicker__year" },
        import_react3.default.createElement("div", { className: "react-datepicker__year-wrapper", onMouseLeave: !this.props.usePointerEvent ? this.props.clearSelectingDate : void 0, onPointerLeave: this.props.usePointerEvent ? this.props.clearSelectingDate : void 0 }, yearsList)
      );
    };
    return Year2;
  }(import_react3.Component)
);
function generateYears(year, noOfYear, minDate, maxDate) {
  var list = [];
  for (var i = 0; i < 2 * noOfYear + 1; i++) {
    var newYear = year + noOfYear - i;
    var isInRange = true;
    if (minDate) {
      isInRange = getYear(minDate) <= newYear;
    }
    if (maxDate && isInRange) {
      isInRange = getYear(maxDate) >= newYear;
    }
    if (isInRange) {
      list.push(newYear);
    }
  }
  return list;
}
var YearDropdownOptions = (
  /** @class */
  function(_super) {
    __extends(YearDropdownOptions2, _super);
    function YearDropdownOptions2(props) {
      var _this = _super.call(this, props) || this;
      _this.renderOptions = function() {
        var selectedYear = _this.props.year;
        var options = _this.state.yearsList.map(function(year) {
          return import_react3.default.createElement(
            "div",
            { className: selectedYear === year ? "react-datepicker__year-option react-datepicker__year-option--selected_year" : "react-datepicker__year-option", key: year, onClick: _this.onChange.bind(_this, year), "aria-selected": selectedYear === year ? "true" : void 0 },
            selectedYear === year ? import_react3.default.createElement("span", { className: "react-datepicker__year-option--selected" }, "✓") : "",
            year
          );
        });
        var minYear = _this.props.minDate ? getYear(_this.props.minDate) : null;
        var maxYear = _this.props.maxDate ? getYear(_this.props.maxDate) : null;
        if (!maxYear || !_this.state.yearsList.find(function(year) {
          return year === maxYear;
        })) {
          options.unshift(import_react3.default.createElement(
            "div",
            { className: "react-datepicker__year-option", key: "upcoming", onClick: _this.incrementYears },
            import_react3.default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming" })
          ));
        }
        if (!minYear || !_this.state.yearsList.find(function(year) {
          return year === minYear;
        })) {
          options.push(import_react3.default.createElement(
            "div",
            { className: "react-datepicker__year-option", key: "previous", onClick: _this.decrementYears },
            import_react3.default.createElement("a", { className: "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous" })
          ));
        }
        return options;
      };
      _this.onChange = function(year) {
        _this.props.onChange(year);
      };
      _this.handleClickOutside = function() {
        _this.props.onCancel();
      };
      _this.shiftYears = function(amount) {
        var years = _this.state.yearsList.map(function(year) {
          return year + amount;
        });
        _this.setState({
          yearsList: years
        });
      };
      _this.incrementYears = function() {
        return _this.shiftYears(1);
      };
      _this.decrementYears = function() {
        return _this.shiftYears(-1);
      };
      var yearDropdownItemNumber = props.yearDropdownItemNumber, scrollableYearDropdown = props.scrollableYearDropdown;
      var noOfYear = yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5);
      _this.state = {
        yearsList: generateYears(_this.props.year, noOfYear, _this.props.minDate, _this.props.maxDate)
      };
      _this.dropdownRef = (0, import_react3.createRef)();
      return _this;
    }
    YearDropdownOptions2.prototype.componentDidMount = function() {
      var dropdownCurrent = this.dropdownRef.current;
      if (dropdownCurrent) {
        var dropdownCurrentChildren = dropdownCurrent.children ? Array.from(dropdownCurrent.children) : null;
        var selectedYearOptionEl = dropdownCurrentChildren ? dropdownCurrentChildren.find(function(childEl) {
          return childEl.ariaSelected;
        }) : null;
        dropdownCurrent.scrollTop = selectedYearOptionEl && selectedYearOptionEl instanceof HTMLElement ? selectedYearOptionEl.offsetTop + (selectedYearOptionEl.clientHeight - dropdownCurrent.clientHeight) / 2 : (dropdownCurrent.scrollHeight - dropdownCurrent.clientHeight) / 2;
      }
    };
    YearDropdownOptions2.prototype.render = function() {
      var dropdownClass = clsx({
        "react-datepicker__year-dropdown": true,
        "react-datepicker__year-dropdown--scrollable": this.props.scrollableYearDropdown
      });
      return import_react3.default.createElement(ClickOutsideWrapper, { className: dropdownClass, containerRef: this.dropdownRef, onClickOutside: this.handleClickOutside }, this.renderOptions());
    };
    return YearDropdownOptions2;
  }(import_react3.Component)
);
var YearDropdown = (
  /** @class */
  function(_super) {
    __extends(YearDropdown2, _super);
    function YearDropdown2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = {
        dropdownVisible: false
      };
      _this.renderSelectOptions = function() {
        var minYear = _this.props.minDate ? getYear(_this.props.minDate) : 1900;
        var maxYear = _this.props.maxDate ? getYear(_this.props.maxDate) : 2100;
        var options = [];
        for (var i = minYear; i <= maxYear; i++) {
          options.push(import_react3.default.createElement("option", { key: i, value: i }, i));
        }
        return options;
      };
      _this.onSelectChange = function(event) {
        _this.onChange(parseInt(event.target.value));
      };
      _this.renderSelectMode = function() {
        return import_react3.default.createElement("select", { value: _this.props.year, className: "react-datepicker__year-select", onChange: _this.onSelectChange }, _this.renderSelectOptions());
      };
      _this.renderReadView = function(visible) {
        return import_react3.default.createElement(
          "div",
          { key: "read", style: { visibility: visible ? "visible" : "hidden" }, className: "react-datepicker__year-read-view", onClick: function(event) {
            return _this.toggleDropdown(event);
          } },
          import_react3.default.createElement("span", { className: "react-datepicker__year-read-view--down-arrow" }),
          import_react3.default.createElement("span", { className: "react-datepicker__year-read-view--selected-year" }, _this.props.year)
        );
      };
      _this.renderDropdown = function() {
        return import_react3.default.createElement(YearDropdownOptions, _assign({ key: "dropdown" }, _this.props, { onChange: _this.onChange, onCancel: _this.toggleDropdown }));
      };
      _this.renderScrollMode = function() {
        var dropdownVisible = _this.state.dropdownVisible;
        var result = [_this.renderReadView(!dropdownVisible)];
        if (dropdownVisible) {
          result.unshift(_this.renderDropdown());
        }
        return result;
      };
      _this.onChange = function(year) {
        _this.toggleDropdown();
        if (year === _this.props.year)
          return;
        _this.props.onChange(year);
      };
      _this.toggleDropdown = function(event) {
        _this.setState({
          dropdownVisible: !_this.state.dropdownVisible
        }, function() {
          if (_this.props.adjustDateOnChange) {
            _this.handleYearChange(_this.props.date, event);
          }
        });
      };
      _this.handleYearChange = function(date, event) {
        var _a2;
        (_a2 = _this.onSelect) === null || _a2 === void 0 ? void 0 : _a2.call(_this, date, event);
        _this.setOpen();
      };
      _this.onSelect = function(date, event) {
        var _a2, _b;
        (_b = (_a2 = _this.props).onSelect) === null || _b === void 0 ? void 0 : _b.call(_a2, date, event);
      };
      _this.setOpen = function() {
        var _a2, _b;
        (_b = (_a2 = _this.props).setOpen) === null || _b === void 0 ? void 0 : _b.call(_a2, true);
      };
      return _this;
    }
    YearDropdown2.prototype.render = function() {
      var renderedDropdown;
      switch (this.props.dropdownMode) {
        case "scroll":
          renderedDropdown = this.renderScrollMode();
          break;
        case "select":
          renderedDropdown = this.renderSelectMode();
          break;
      }
      return import_react3.default.createElement("div", { className: "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(this.props.dropdownMode) }, renderedDropdown);
    };
    return YearDropdown2;
  }(import_react3.Component)
);
var DROPDOWN_FOCUS_CLASSNAMES = [
  "react-datepicker__year-select",
  "react-datepicker__month-select",
  "react-datepicker__month-year-select"
];
var isDropdownSelect = function(element) {
  var classNames = (element.className || "").split(/\s+/);
  return DROPDOWN_FOCUS_CLASSNAMES.some(function(testClassname) {
    return classNames.indexOf(testClassname) >= 0;
  });
};
var Calendar = (
  /** @class */
  function(_super) {
    __extends(Calendar2, _super);
    function Calendar2(props) {
      var _this = _super.call(this, props) || this;
      _this.monthContainer = void 0;
      _this.handleClickOutside = function(event) {
        _this.props.onClickOutside(event);
      };
      _this.setClickOutsideRef = function() {
        return _this.containerRef.current;
      };
      _this.handleDropdownFocus = function(event) {
        var _a2, _b;
        if (isDropdownSelect(event.target)) {
          (_b = (_a2 = _this.props).onDropdownFocus) === null || _b === void 0 ? void 0 : _b.call(_a2, event);
        }
      };
      _this.getDateInView = function() {
        var _a2 = _this.props, preSelection = _a2.preSelection, selected = _a2.selected, openToDate = _a2.openToDate;
        var minDate = getEffectiveMinDate(_this.props);
        var maxDate = getEffectiveMaxDate(_this.props);
        var current = newDate();
        var initialDate = openToDate || selected || preSelection;
        if (initialDate) {
          return initialDate;
        } else {
          if (minDate && isBefore(current, minDate)) {
            return minDate;
          } else if (maxDate && isAfter(current, maxDate)) {
            return maxDate;
          }
        }
        return current;
      };
      _this.increaseMonth = function() {
        _this.setState(function(_a2) {
          var date = _a2.date;
          return {
            date: addMonths(date, 1)
          };
        }, function() {
          return _this.handleMonthChange(_this.state.date);
        });
      };
      _this.decreaseMonth = function() {
        _this.setState(function(_a2) {
          var date = _a2.date;
          return {
            date: subMonths(date, 1)
          };
        }, function() {
          return _this.handleMonthChange(_this.state.date);
        });
      };
      _this.handleDayClick = function(day, event, monthSelectedIn) {
        _this.props.onSelect(day, event, monthSelectedIn);
        _this.props.setPreSelection && _this.props.setPreSelection(day);
      };
      _this.handleDayMouseEnter = function(day) {
        _this.setState({ selectingDate: day });
        _this.props.onDayMouseEnter && _this.props.onDayMouseEnter(day);
      };
      _this.handleMonthMouseLeave = function() {
        _this.setState({ selectingDate: void 0 });
        _this.props.onMonthMouseLeave && _this.props.onMonthMouseLeave();
      };
      _this.handleYearMouseEnter = function(event, year) {
        _this.setState({ selectingDate: setYear(newDate(), year) });
        !!_this.props.onYearMouseEnter && _this.props.onYearMouseEnter(event, year);
      };
      _this.handleYearMouseLeave = function(event, year) {
        !!_this.props.onYearMouseLeave && _this.props.onYearMouseLeave(event, year);
      };
      _this.handleYearChange = function(date) {
        var _a2, _b, _c, _d;
        (_b = (_a2 = _this.props).onYearChange) === null || _b === void 0 ? void 0 : _b.call(_a2, date);
        _this.setState({ isRenderAriaLiveMessage: true });
        if (_this.props.adjustDateOnChange) {
          _this.props.onSelect(date);
          (_d = (_c = _this.props).setOpen) === null || _d === void 0 ? void 0 : _d.call(_c, true);
        }
        _this.props.setPreSelection && _this.props.setPreSelection(date);
      };
      _this.getEnabledPreSelectionDateForMonth = function(date) {
        if (!isDayDisabled(date, _this.props)) {
          return date;
        }
        var startOfMonth2 = getStartOfMonth(date);
        var endOfMonth2 = getEndOfMonth(date);
        var totalDays = differenceInDays(endOfMonth2, startOfMonth2);
        var preSelectedDate = null;
        for (var dayIdx = 0; dayIdx <= totalDays; dayIdx++) {
          var processingDate = addDays(startOfMonth2, dayIdx);
          if (!isDayDisabled(processingDate, _this.props)) {
            preSelectedDate = processingDate;
            break;
          }
        }
        return preSelectedDate;
      };
      _this.handleMonthChange = function(date) {
        var _a2, _b, _c;
        var enabledPreSelectionDate = (_a2 = _this.getEnabledPreSelectionDateForMonth(date)) !== null && _a2 !== void 0 ? _a2 : date;
        _this.handleCustomMonthChange(enabledPreSelectionDate);
        if (_this.props.adjustDateOnChange) {
          _this.props.onSelect(enabledPreSelectionDate);
          (_c = (_b = _this.props).setOpen) === null || _c === void 0 ? void 0 : _c.call(_b, true);
        }
        _this.props.setPreSelection && _this.props.setPreSelection(enabledPreSelectionDate);
      };
      _this.handleCustomMonthChange = function(date) {
        var _a2, _b;
        (_b = (_a2 = _this.props).onMonthChange) === null || _b === void 0 ? void 0 : _b.call(_a2, date);
        _this.setState({ isRenderAriaLiveMessage: true });
      };
      _this.handleMonthYearChange = function(date) {
        _this.handleYearChange(date);
        _this.handleMonthChange(date);
      };
      _this.changeYear = function(year) {
        _this.setState(function(_a2) {
          var date = _a2.date;
          return {
            date: setYear(date, Number(year))
          };
        }, function() {
          return _this.handleYearChange(_this.state.date);
        });
      };
      _this.changeMonth = function(month) {
        _this.setState(function(_a2) {
          var date = _a2.date;
          return {
            date: setMonth(date, Number(month))
          };
        }, function() {
          return _this.handleMonthChange(_this.state.date);
        });
      };
      _this.changeMonthYear = function(monthYear) {
        _this.setState(function(_a2) {
          var date = _a2.date;
          return {
            date: setYear(setMonth(date, getMonth(monthYear)), getYear(monthYear))
          };
        }, function() {
          return _this.handleMonthYearChange(_this.state.date);
        });
      };
      _this.header = function(date) {
        if (date === void 0) {
          date = _this.state.date;
        }
        var startOfWeek2 = getStartOfWeek(date, _this.props.locale, _this.props.calendarStartDay);
        var dayNames = [];
        if (_this.props.showWeekNumbers) {
          dayNames.push(import_react3.default.createElement("div", { key: "W", className: "react-datepicker__day-name" }, _this.props.weekLabel || "#"));
        }
        return dayNames.concat([0, 1, 2, 3, 4, 5, 6].map(function(offset4) {
          var day = addDays(startOfWeek2, offset4);
          var weekDayName = _this.formatWeekday(day, _this.props.locale);
          var weekDayClassName = _this.props.weekDayClassName ? _this.props.weekDayClassName(day) : void 0;
          return import_react3.default.createElement("div", { key: offset4, "aria-label": formatDate(day, "EEEE", _this.props.locale), className: clsx("react-datepicker__day-name", weekDayClassName) }, weekDayName);
        }));
      };
      _this.formatWeekday = function(day, locale) {
        if (_this.props.formatWeekDay) {
          return getFormattedWeekdayInLocale(day, _this.props.formatWeekDay, locale);
        }
        return _this.props.useWeekdaysShort ? getWeekdayShortInLocale(day, locale) : getWeekdayMinInLocale(day, locale);
      };
      _this.decreaseYear = function() {
        _this.setState(function(_a2) {
          var _b;
          var date = _a2.date;
          return {
            date: subYears(date, _this.props.showYearPicker ? (_b = _this.props.yearItemNumber) !== null && _b !== void 0 ? _b : Calendar2.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return _this.handleYearChange(_this.state.date);
        });
      };
      _this.clearSelectingDate = function() {
        _this.setState({ selectingDate: void 0 });
      };
      _this.renderPreviousButton = function() {
        var _a2, _b, _c;
        if (_this.props.renderCustomHeader) {
          return;
        }
        var monthsShown = (_a2 = _this.props.monthsShown) !== null && _a2 !== void 0 ? _a2 : Calendar2.defaultProps.monthsShown;
        var monthsToSubtract = _this.props.showPreviousMonths ? monthsShown - 1 : 0;
        var monthSelectedIn = (_b = _this.props.monthSelectedIn) !== null && _b !== void 0 ? _b : monthsToSubtract;
        var fromMonthDate = subMonths(_this.state.date, monthSelectedIn);
        var allPrevDaysDisabled;
        switch (true) {
          case _this.props.showMonthYearPicker:
            allPrevDaysDisabled = yearDisabledBefore(_this.state.date, _this.props);
            break;
          case _this.props.showYearPicker:
            allPrevDaysDisabled = yearsDisabledBefore(_this.state.date, _this.props);
            break;
          case _this.props.showQuarterYearPicker:
            allPrevDaysDisabled = quarterDisabledBefore(_this.state.date, _this.props);
            break;
          default:
            allPrevDaysDisabled = monthDisabledBefore(fromMonthDate, _this.props);
            break;
        }
        if (!((_c = _this.props.forceShowMonthNavigation) !== null && _c !== void 0 ? _c : Calendar2.defaultProps.forceShowMonthNavigation) && !_this.props.showDisabledMonthNavigation && allPrevDaysDisabled || _this.props.showTimeSelectOnly) {
          return;
        }
        var iconClasses = [
          "react-datepicker__navigation-icon",
          "react-datepicker__navigation-icon--previous"
        ];
        var classes = [
          "react-datepicker__navigation",
          "react-datepicker__navigation--previous"
        ];
        var clickHandler = _this.decreaseMonth;
        if (_this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker) {
          clickHandler = _this.decreaseYear;
        }
        if (allPrevDaysDisabled && _this.props.showDisabledMonthNavigation) {
          classes.push("react-datepicker__navigation--previous--disabled");
          clickHandler = void 0;
        }
        var isForYear = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker;
        var _d = _this.props, _e = _d.previousMonthButtonLabel, previousMonthButtonLabel = _e === void 0 ? Calendar2.defaultProps.previousMonthButtonLabel : _e, _f = _d.previousYearButtonLabel, previousYearButtonLabel = _f === void 0 ? Calendar2.defaultProps.previousYearButtonLabel : _f;
        var _g = _this.props, _h = _g.previousMonthAriaLabel, previousMonthAriaLabel = _h === void 0 ? typeof previousMonthButtonLabel === "string" ? previousMonthButtonLabel : "Previous Month" : _h, _j = _g.previousYearAriaLabel, previousYearAriaLabel = _j === void 0 ? typeof previousYearButtonLabel === "string" ? previousYearButtonLabel : "Previous Year" : _j;
        return import_react3.default.createElement(
          "button",
          { type: "button", className: classes.join(" "), onClick: clickHandler, onKeyDown: _this.props.handleOnKeyDown, "aria-label": isForYear ? previousYearAriaLabel : previousMonthAriaLabel },
          import_react3.default.createElement("span", { className: iconClasses.join(" ") }, isForYear ? previousYearButtonLabel : previousMonthButtonLabel)
        );
      };
      _this.increaseYear = function() {
        _this.setState(function(_a2) {
          var _b;
          var date = _a2.date;
          return {
            date: addYears(date, _this.props.showYearPicker ? (_b = _this.props.yearItemNumber) !== null && _b !== void 0 ? _b : Calendar2.defaultProps.yearItemNumber : 1)
          };
        }, function() {
          return _this.handleYearChange(_this.state.date);
        });
      };
      _this.renderNextButton = function() {
        var _a2;
        if (_this.props.renderCustomHeader) {
          return;
        }
        var allNextDaysDisabled;
        switch (true) {
          case _this.props.showMonthYearPicker:
            allNextDaysDisabled = yearDisabledAfter(_this.state.date, _this.props);
            break;
          case _this.props.showYearPicker:
            allNextDaysDisabled = yearsDisabledAfter(_this.state.date, _this.props);
            break;
          case _this.props.showQuarterYearPicker:
            allNextDaysDisabled = quarterDisabledAfter(_this.state.date, _this.props);
            break;
          default:
            allNextDaysDisabled = monthDisabledAfter(_this.state.date, _this.props);
            break;
        }
        if (!((_a2 = _this.props.forceShowMonthNavigation) !== null && _a2 !== void 0 ? _a2 : Calendar2.defaultProps.forceShowMonthNavigation) && !_this.props.showDisabledMonthNavigation && allNextDaysDisabled || _this.props.showTimeSelectOnly) {
          return;
        }
        var classes = [
          "react-datepicker__navigation",
          "react-datepicker__navigation--next"
        ];
        var iconClasses = [
          "react-datepicker__navigation-icon",
          "react-datepicker__navigation-icon--next"
        ];
        if (_this.props.showTimeSelect) {
          classes.push("react-datepicker__navigation--next--with-time");
        }
        if (_this.props.todayButton) {
          classes.push("react-datepicker__navigation--next--with-today-button");
        }
        var clickHandler = _this.increaseMonth;
        if (_this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker) {
          clickHandler = _this.increaseYear;
        }
        if (allNextDaysDisabled && _this.props.showDisabledMonthNavigation) {
          classes.push("react-datepicker__navigation--next--disabled");
          clickHandler = void 0;
        }
        var isForYear = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker;
        var _b = _this.props, _c = _b.nextMonthButtonLabel, nextMonthButtonLabel = _c === void 0 ? Calendar2.defaultProps.nextMonthButtonLabel : _c, _d = _b.nextYearButtonLabel, nextYearButtonLabel = _d === void 0 ? Calendar2.defaultProps.nextYearButtonLabel : _d;
        var _e = _this.props, _f = _e.nextMonthAriaLabel, nextMonthAriaLabel = _f === void 0 ? typeof nextMonthButtonLabel === "string" ? nextMonthButtonLabel : "Next Month" : _f, _g = _e.nextYearAriaLabel, nextYearAriaLabel = _g === void 0 ? typeof nextYearButtonLabel === "string" ? nextYearButtonLabel : "Next Year" : _g;
        return import_react3.default.createElement(
          "button",
          { type: "button", className: classes.join(" "), onClick: clickHandler, onKeyDown: _this.props.handleOnKeyDown, "aria-label": isForYear ? nextYearAriaLabel : nextMonthAriaLabel },
          import_react3.default.createElement("span", { className: iconClasses.join(" ") }, isForYear ? nextYearButtonLabel : nextMonthButtonLabel)
        );
      };
      _this.renderCurrentMonth = function(date) {
        if (date === void 0) {
          date = _this.state.date;
        }
        var classes = ["react-datepicker__current-month"];
        if (_this.props.showYearDropdown) {
          classes.push("react-datepicker__current-month--hasYearDropdown");
        }
        if (_this.props.showMonthDropdown) {
          classes.push("react-datepicker__current-month--hasMonthDropdown");
        }
        if (_this.props.showMonthYearDropdown) {
          classes.push("react-datepicker__current-month--hasMonthYearDropdown");
        }
        return import_react3.default.createElement("h2", { className: classes.join(" ") }, formatDate(date, _this.props.dateFormat, _this.props.locale));
      };
      _this.renderYearDropdown = function(overrideHide) {
        if (overrideHide === void 0) {
          overrideHide = false;
        }
        if (!_this.props.showYearDropdown || overrideHide) {
          return;
        }
        return import_react3.default.createElement(YearDropdown, _assign({}, Calendar2.defaultProps, _this.props, { date: _this.state.date, onChange: _this.changeYear, year: getYear(_this.state.date) }));
      };
      _this.renderMonthDropdown = function(overrideHide) {
        if (overrideHide === void 0) {
          overrideHide = false;
        }
        if (!_this.props.showMonthDropdown || overrideHide) {
          return;
        }
        return import_react3.default.createElement(MonthDropdown, _assign({}, Calendar2.defaultProps, _this.props, { month: getMonth(_this.state.date), onChange: _this.changeMonth }));
      };
      _this.renderMonthYearDropdown = function(overrideHide) {
        if (overrideHide === void 0) {
          overrideHide = false;
        }
        if (!_this.props.showMonthYearDropdown || overrideHide) {
          return;
        }
        return import_react3.default.createElement(MonthYearDropdown, _assign({}, Calendar2.defaultProps, _this.props, { date: _this.state.date, onChange: _this.changeMonthYear }));
      };
      _this.handleTodayButtonClick = function(event) {
        _this.props.onSelect(getStartOfToday(), event);
        _this.props.setPreSelection && _this.props.setPreSelection(getStartOfToday());
      };
      _this.renderTodayButton = function() {
        if (!_this.props.todayButton || _this.props.showTimeSelectOnly) {
          return;
        }
        return import_react3.default.createElement("div", { className: "react-datepicker__today-button", onClick: _this.handleTodayButtonClick }, _this.props.todayButton);
      };
      _this.renderDefaultHeader = function(_a2) {
        var monthDate = _a2.monthDate, i = _a2.i;
        return import_react3.default.createElement(
          "div",
          { className: "react-datepicker__header ".concat(_this.props.showTimeSelect ? "react-datepicker__header--has-time-select" : "") },
          _this.renderCurrentMonth(monthDate),
          import_react3.default.createElement(
            "div",
            { className: "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(_this.props.dropdownMode), onFocus: _this.handleDropdownFocus },
            _this.renderMonthDropdown(i !== 0),
            _this.renderMonthYearDropdown(i !== 0),
            _this.renderYearDropdown(i !== 0)
          ),
          import_react3.default.createElement("div", { className: "react-datepicker__day-names" }, _this.header(monthDate))
        );
      };
      _this.renderCustomHeader = function(headerArgs) {
        var _a2, _b;
        var monthDate = headerArgs.monthDate, i = headerArgs.i;
        if (_this.props.showTimeSelect && !_this.state.monthContainer || _this.props.showTimeSelectOnly) {
          return null;
        }
        var prevMonthButtonDisabled = monthDisabledBefore(_this.state.date, _this.props);
        var nextMonthButtonDisabled = monthDisabledAfter(_this.state.date, _this.props);
        var prevYearButtonDisabled = yearDisabledBefore(_this.state.date, _this.props);
        var nextYearButtonDisabled = yearDisabledAfter(_this.state.date, _this.props);
        var showDayNames = !_this.props.showMonthYearPicker && !_this.props.showQuarterYearPicker && !_this.props.showYearPicker;
        return import_react3.default.createElement(
          "div",
          { className: "react-datepicker__header react-datepicker__header--custom", onFocus: _this.props.onDropdownFocus },
          (_b = (_a2 = _this.props).renderCustomHeader) === null || _b === void 0 ? void 0 : _b.call(_a2, _assign(_assign({}, _this.state), { customHeaderCount: i, monthDate, changeMonth: _this.changeMonth, changeYear: _this.changeYear, decreaseMonth: _this.decreaseMonth, increaseMonth: _this.increaseMonth, decreaseYear: _this.decreaseYear, increaseYear: _this.increaseYear, prevMonthButtonDisabled, nextMonthButtonDisabled, prevYearButtonDisabled, nextYearButtonDisabled })),
          showDayNames && import_react3.default.createElement("div", { className: "react-datepicker__day-names" }, _this.header(monthDate))
        );
      };
      _this.renderYearHeader = function(_a2) {
        var monthDate = _a2.monthDate;
        var _b = _this.props, showYearPicker = _b.showYearPicker, _c = _b.yearItemNumber, yearItemNumber = _c === void 0 ? Calendar2.defaultProps.yearItemNumber : _c;
        var _d = getYearsPeriod(monthDate, yearItemNumber), startPeriod = _d.startPeriod, endPeriod = _d.endPeriod;
        return import_react3.default.createElement("div", { className: "react-datepicker__header react-datepicker-year-header" }, showYearPicker ? "".concat(startPeriod, " - ").concat(endPeriod) : getYear(monthDate));
      };
      _this.renderHeader = function(_a2) {
        var monthDate = _a2.monthDate, _b = _a2.i, i = _b === void 0 ? 0 : _b;
        var headerArgs = { monthDate, i };
        switch (true) {
          case _this.props.renderCustomHeader !== void 0:
            return _this.renderCustomHeader(headerArgs);
          case (_this.props.showMonthYearPicker || _this.props.showQuarterYearPicker || _this.props.showYearPicker):
            return _this.renderYearHeader(headerArgs);
          default:
            return _this.renderDefaultHeader(headerArgs);
        }
      };
      _this.renderMonths = function() {
        var _a2, _b;
        if (_this.props.showTimeSelectOnly || _this.props.showYearPicker) {
          return;
        }
        var monthList = [];
        var monthsShown = (_a2 = _this.props.monthsShown) !== null && _a2 !== void 0 ? _a2 : Calendar2.defaultProps.monthsShown;
        var monthsToSubtract = _this.props.showPreviousMonths ? monthsShown - 1 : 0;
        var fromMonthDate = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker ? addYears(_this.state.date, monthsToSubtract) : subMonths(_this.state.date, monthsToSubtract);
        var monthSelectedIn = (_b = _this.props.monthSelectedIn) !== null && _b !== void 0 ? _b : monthsToSubtract;
        for (var i = 0; i < monthsShown; ++i) {
          var monthsToAdd = i - monthSelectedIn + monthsToSubtract;
          var monthDate = _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker ? addYears(fromMonthDate, monthsToAdd) : addMonths(fromMonthDate, monthsToAdd);
          var monthKey = "month-".concat(i);
          var monthShowsDuplicateDaysEnd = i < monthsShown - 1;
          var monthShowsDuplicateDaysStart = i > 0;
          monthList.push(import_react3.default.createElement(
            "div",
            { key: monthKey, ref: function(div) {
              _this.monthContainer = div !== null && div !== void 0 ? div : void 0;
            }, className: "react-datepicker__month-container" },
            _this.renderHeader({ monthDate, i }),
            import_react3.default.createElement(Month, _assign({}, Calendar2.defaultProps, _this.props, { ariaLabelPrefix: _this.props.monthAriaLabelPrefix, day: monthDate, onDayClick: _this.handleDayClick, handleOnKeyDown: _this.props.handleOnDayKeyDown, handleOnMonthKeyDown: _this.props.handleOnKeyDown, onDayMouseEnter: _this.handleDayMouseEnter, onMouseLeave: _this.handleMonthMouseLeave, orderInDisplay: i, selectingDate: _this.state.selectingDate, monthShowsDuplicateDaysEnd, monthShowsDuplicateDaysStart }))
          ));
        }
        return monthList;
      };
      _this.renderYears = function() {
        if (_this.props.showTimeSelectOnly) {
          return;
        }
        if (_this.props.showYearPicker) {
          return import_react3.default.createElement(
            "div",
            { className: "react-datepicker__year--container" },
            _this.renderHeader({ monthDate: _this.state.date }),
            import_react3.default.createElement(Year, _assign({}, Calendar2.defaultProps, _this.props, { selectingDate: _this.state.selectingDate, date: _this.state.date, onDayClick: _this.handleDayClick, clearSelectingDate: _this.clearSelectingDate, onYearMouseEnter: _this.handleYearMouseEnter, onYearMouseLeave: _this.handleYearMouseLeave }))
          );
        }
        return;
      };
      _this.renderTimeSection = function() {
        if (_this.props.showTimeSelect && (_this.state.monthContainer || _this.props.showTimeSelectOnly)) {
          return import_react3.default.createElement(Time, _assign({}, Calendar2.defaultProps, _this.props, { onChange: _this.props.onTimeChange, format: _this.props.timeFormat, intervals: _this.props.timeIntervals, monthRef: _this.state.monthContainer }));
        }
        return;
      };
      _this.renderInputTimeSection = function() {
        var time = _this.props.selected ? new Date(_this.props.selected) : void 0;
        var timeValid = time && isValid2(time) && Boolean(_this.props.selected);
        var timeString = timeValid ? "".concat(addZero(time.getHours()), ":").concat(addZero(time.getMinutes())) : "";
        if (_this.props.showTimeInput) {
          return import_react3.default.createElement(InputTime, _assign({}, Calendar2.defaultProps, _this.props, { date: time, timeString, onChange: _this.props.onTimeChange }));
        }
        return;
      };
      _this.renderAriaLiveRegion = function() {
        var _a2;
        var _b = getYearsPeriod(_this.state.date, (_a2 = _this.props.yearItemNumber) !== null && _a2 !== void 0 ? _a2 : Calendar2.defaultProps.yearItemNumber), startPeriod = _b.startPeriod, endPeriod = _b.endPeriod;
        var ariaLiveMessage;
        if (_this.props.showYearPicker) {
          ariaLiveMessage = "".concat(startPeriod, " - ").concat(endPeriod);
        } else if (_this.props.showMonthYearPicker || _this.props.showQuarterYearPicker) {
          ariaLiveMessage = getYear(_this.state.date);
        } else {
          ariaLiveMessage = "".concat(getMonthInLocale(getMonth(_this.state.date), _this.props.locale), " ").concat(getYear(_this.state.date));
        }
        return import_react3.default.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, _this.state.isRenderAriaLiveMessage && ariaLiveMessage);
      };
      _this.renderChildren = function() {
        if (_this.props.children) {
          return import_react3.default.createElement("div", { className: "react-datepicker__children-container" }, _this.props.children);
        }
        return;
      };
      _this.containerRef = (0, import_react3.createRef)();
      _this.state = {
        date: _this.getDateInView(),
        selectingDate: void 0,
        monthContainer: void 0,
        isRenderAriaLiveMessage: false
      };
      return _this;
    }
    Object.defineProperty(Calendar2, "defaultProps", {
      get: function() {
        return {
          monthsShown: 1,
          forceShowMonthNavigation: false,
          timeCaption: "Time",
          previousYearButtonLabel: "Previous Year",
          nextYearButtonLabel: "Next Year",
          previousMonthButtonLabel: "Previous Month",
          nextMonthButtonLabel: "Next Month",
          yearItemNumber: DEFAULT_YEAR_ITEM_NUMBER
        };
      },
      enumerable: false,
      configurable: true
    });
    Calendar2.prototype.componentDidMount = function() {
      var _this = this;
      if (this.props.showTimeSelect) {
        this.assignMonthContainer = function() {
          _this.setState({ monthContainer: _this.monthContainer });
        }();
      }
    };
    Calendar2.prototype.componentDidUpdate = function(prevProps) {
      var _this = this;
      if (this.props.preSelection && (!isSameDay2(this.props.preSelection, prevProps.preSelection) || this.props.monthSelectedIn !== prevProps.monthSelectedIn)) {
        var hasMonthChanged_1 = !isSameMonth2(this.state.date, this.props.preSelection);
        this.setState({
          date: this.props.preSelection
        }, function() {
          return hasMonthChanged_1 && _this.handleCustomMonthChange(_this.state.date);
        });
      } else if (this.props.openToDate && !isSameDay2(this.props.openToDate, prevProps.openToDate)) {
        this.setState({
          date: this.props.openToDate
        });
      }
    };
    Calendar2.prototype.render = function() {
      var Container = this.props.container || CalendarContainer;
      return import_react3.default.createElement(
        ClickOutsideWrapper,
        { onClickOutside: this.handleClickOutside, style: { display: "contents" }, containerRef: this.containerRef, ignoreClass: this.props.outsideClickIgnoreClass },
        import_react3.default.createElement(
          Container,
          { className: clsx("react-datepicker", this.props.className, {
            "react-datepicker--time-only": this.props.showTimeSelectOnly
          }), showTime: this.props.showTimeSelect || this.props.showTimeInput, showTimeSelectOnly: this.props.showTimeSelectOnly },
          this.renderAriaLiveRegion(),
          this.renderPreviousButton(),
          this.renderNextButton(),
          this.renderMonths(),
          this.renderYears(),
          this.renderTodayButton(),
          this.renderTimeSection(),
          this.renderInputTimeSection(),
          this.renderChildren()
        )
      );
    };
    return Calendar2;
  }(import_react3.Component)
);
var CalendarIcon = function(_a2) {
  var icon = _a2.icon, _b = _a2.className, className = _b === void 0 ? "" : _b, onClick = _a2.onClick;
  var defaultClass = "react-datepicker__calendar-icon";
  if (typeof icon === "string") {
    return import_react3.default.createElement("i", { className: "".concat(defaultClass, " ").concat(icon, " ").concat(className), "aria-hidden": "true", onClick });
  }
  if (import_react3.default.isValidElement(icon)) {
    return import_react3.default.cloneElement(icon, {
      className: "".concat(icon.props.className || "", " ").concat(defaultClass, " ").concat(className),
      onClick: function(event) {
        if (typeof icon.props.onClick === "function") {
          icon.props.onClick(event);
        }
        if (typeof onClick === "function") {
          onClick(event);
        }
      }
    });
  }
  return import_react3.default.createElement(
    "svg",
    { className: "".concat(defaultClass, " ").concat(className), xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", onClick },
    import_react3.default.createElement("path", { d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })
  );
};
var Portal = (
  /** @class */
  function(_super) {
    __extends(Portal2, _super);
    function Portal2(props) {
      var _this = _super.call(this, props) || this;
      _this.portalRoot = null;
      _this.el = document.createElement("div");
      return _this;
    }
    Portal2.prototype.componentDidMount = function() {
      this.portalRoot = (this.props.portalHost || document).getElementById(this.props.portalId);
      if (!this.portalRoot) {
        this.portalRoot = document.createElement("div");
        this.portalRoot.setAttribute("id", this.props.portalId);
        (this.props.portalHost || document.body).appendChild(this.portalRoot);
      }
      this.portalRoot.appendChild(this.el);
    };
    Portal2.prototype.componentWillUnmount = function() {
      if (this.portalRoot) {
        this.portalRoot.removeChild(this.el);
      }
    };
    Portal2.prototype.render = function() {
      return import_react_dom3.default.createPortal(this.props.children, this.el);
    };
    return Portal2;
  }(import_react3.Component)
);
var focusableElementsSelector = "[tabindex], a, button, input, select, textarea";
var focusableFilter = function(node) {
  if (node instanceof HTMLAnchorElement) {
    return node.tabIndex !== -1;
  }
  return !node.disabled && node.tabIndex !== -1;
};
var TabLoop = (
  /** @class */
  function(_super) {
    __extends(TabLoop2, _super);
    function TabLoop2(props) {
      var _this = _super.call(this, props) || this;
      _this.getTabChildren = function() {
        var _a2;
        return Array.prototype.slice.call((_a2 = _this.tabLoopRef.current) === null || _a2 === void 0 ? void 0 : _a2.querySelectorAll(focusableElementsSelector), 1, -1).filter(focusableFilter);
      };
      _this.handleFocusStart = function() {
        var tabChildren = _this.getTabChildren();
        tabChildren && tabChildren.length > 1 && tabChildren[tabChildren.length - 1].focus();
      };
      _this.handleFocusEnd = function() {
        var tabChildren = _this.getTabChildren();
        tabChildren && tabChildren.length > 1 && tabChildren[0].focus();
      };
      _this.tabLoopRef = (0, import_react3.createRef)();
      return _this;
    }
    TabLoop2.prototype.render = function() {
      var _a2;
      if (!((_a2 = this.props.enableTabLoop) !== null && _a2 !== void 0 ? _a2 : TabLoop2.defaultProps.enableTabLoop)) {
        return this.props.children;
      }
      return import_react3.default.createElement(
        "div",
        { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
        import_react3.default.createElement("div", { className: "react-datepicker__tab-loop__start", tabIndex: 0, onFocus: this.handleFocusStart }),
        this.props.children,
        import_react3.default.createElement("div", { className: "react-datepicker__tab-loop__end", tabIndex: 0, onFocus: this.handleFocusEnd })
      );
    };
    TabLoop2.defaultProps = {
      enableTabLoop: true
    };
    return TabLoop2;
  }(import_react3.Component)
);
function withFloating(Component2) {
  var WithFloating = function(props) {
    var _a2;
    var hidePopper = typeof props.hidePopper === "boolean" ? props.hidePopper : true;
    var arrowRef = (0, import_react3.useRef)(null);
    var floatingProps = useFloating2(_assign({ open: !hidePopper, whileElementsMounted: autoUpdate, placement: props.popperPlacement, middleware: __spreadArray([
      flip3({ padding: 15 }),
      offset3(10),
      arrow3({ element: arrowRef })
    ], (_a2 = props.popperModifiers) !== null && _a2 !== void 0 ? _a2 : [], true) }, props.popperProps));
    var componentProps = _assign(_assign({}, props), { hidePopper, popperProps: _assign(_assign({}, floatingProps), { arrowRef }) });
    return import_react3.default.createElement(Component2, _assign({}, componentProps));
  };
  return WithFloating;
}
var PopperComponent = (
  /** @class */
  function(_super) {
    __extends(PopperComponent2, _super);
    function PopperComponent2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PopperComponent2, "defaultProps", {
      get: function() {
        return {
          hidePopper: true
        };
      },
      enumerable: false,
      configurable: true
    });
    PopperComponent2.prototype.render = function() {
      var _a2 = this.props, className = _a2.className, wrapperClassName = _a2.wrapperClassName, _b = _a2.hidePopper, hidePopper = _b === void 0 ? PopperComponent2.defaultProps.hidePopper : _b, popperComponent = _a2.popperComponent, targetComponent = _a2.targetComponent, enableTabLoop = _a2.enableTabLoop, popperOnKeyDown = _a2.popperOnKeyDown, portalId = _a2.portalId, portalHost = _a2.portalHost, popperProps = _a2.popperProps, showArrow = _a2.showArrow;
      var popper = void 0;
      if (!hidePopper) {
        var classes = clsx("react-datepicker-popper", className);
        popper = import_react3.default.createElement(
          TabLoop,
          { enableTabLoop },
          import_react3.default.createElement(
            "div",
            { ref: popperProps.refs.setFloating, style: popperProps.floatingStyles, className: classes, "data-placement": popperProps.placement, onKeyDown: popperOnKeyDown },
            popperComponent,
            showArrow && import_react3.default.createElement(FloatingArrow, { ref: popperProps.arrowRef, context: popperProps.context, fill: "currentColor", strokeWidth: 1, height: 8, width: 16, style: { transform: "translateY(-1px)" }, className: "react-datepicker__triangle" })
          )
        );
      }
      if (this.props.popperContainer) {
        popper = (0, import_react3.createElement)(this.props.popperContainer, {}, popper);
      }
      if (portalId && !hidePopper) {
        popper = import_react3.default.createElement(Portal, { portalId, portalHost }, popper);
      }
      var wrapperClasses = clsx("react-datepicker-wrapper", wrapperClassName);
      return import_react3.default.createElement(
        import_react3.default.Fragment,
        null,
        import_react3.default.createElement("div", { ref: popperProps.refs.setReference, className: wrapperClasses }, targetComponent),
        popper
      );
    };
    return PopperComponent2;
  }(import_react3.Component)
);
var PopperComponent$1 = withFloating(PopperComponent);
var outsideClickIgnoreClass = "react-datepicker-ignore-onclickoutside";
function hasPreSelectionChanged(date1, date2) {
  if (date1 && date2) {
    return getMonth(date1) !== getMonth(date2) || getYear(date1) !== getYear(date2);
  }
  return date1 !== date2;
}
var INPUT_ERR_1 = "Date input not valid.";
var DatePicker = (
  /** @class */
  function(_super) {
    __extends(DatePicker2, _super);
    function DatePicker2(props) {
      var _this = _super.call(this, props) || this;
      _this.calendar = null;
      _this.input = null;
      _this.getPreSelection = function() {
        return _this.props.openToDate ? _this.props.openToDate : _this.props.selectsEnd && _this.props.startDate ? _this.props.startDate : _this.props.selectsStart && _this.props.endDate ? _this.props.endDate : newDate();
      };
      _this.modifyHolidays = function() {
        var _a2;
        return (_a2 = _this.props.holidays) === null || _a2 === void 0 ? void 0 : _a2.reduce(function(accumulator, holiday) {
          var date = new Date(holiday.date);
          if (!isValid2(date)) {
            return accumulator;
          }
          return __spreadArray(__spreadArray([], accumulator, true), [_assign(_assign({}, holiday), { date })], false);
        }, []);
      };
      _this.calcInitialState = function() {
        var _a2;
        var defaultPreSelection = _this.getPreSelection();
        var minDate = getEffectiveMinDate(_this.props);
        var maxDate = getEffectiveMaxDate(_this.props);
        var boundedPreSelection = minDate && isBefore(defaultPreSelection, getStartOfDay(minDate)) ? minDate : maxDate && isAfter(defaultPreSelection, getEndOfDay(maxDate)) ? maxDate : defaultPreSelection;
        return {
          open: _this.props.startOpen || false,
          preventFocus: false,
          inputValue: null,
          preSelection: (_a2 = _this.props.selectsRange ? _this.props.startDate : _this.props.selected) !== null && _a2 !== void 0 ? _a2 : boundedPreSelection,
          // transforming highlighted days (perhaps nested array)
          // to flat Map for faster access in day.jsx
          highlightDates: getHighLightDaysMap(_this.props.highlightDates),
          focused: false,
          // used to focus day in inline version after month has changed, but not on
          // initial render
          shouldFocusDayInline: false,
          isRenderAriaLiveMessage: false,
          wasHidden: false
        };
      };
      _this.resetHiddenStatus = function() {
        _this.setState(_assign(_assign({}, _this.state), { wasHidden: false }));
      };
      _this.setHiddenStatus = function() {
        _this.setState(_assign(_assign({}, _this.state), { wasHidden: true }));
      };
      _this.setHiddenStateOnVisibilityHidden = function() {
        if (document.visibilityState !== "hidden") {
          return;
        }
        _this.setHiddenStatus();
      };
      _this.clearPreventFocusTimeout = function() {
        if (_this.preventFocusTimeout) {
          clearTimeout(_this.preventFocusTimeout);
        }
      };
      _this.safeFocus = function() {
        setTimeout(function() {
          var _a2, _b;
          (_b = (_a2 = _this.input) === null || _a2 === void 0 ? void 0 : _a2.focus) === null || _b === void 0 ? void 0 : _b.call(_a2, { preventScroll: true });
        }, 0);
      };
      _this.safeBlur = function() {
        setTimeout(function() {
          var _a2, _b;
          (_b = (_a2 = _this.input) === null || _a2 === void 0 ? void 0 : _a2.blur) === null || _b === void 0 ? void 0 : _b.call(_a2);
        }, 0);
      };
      _this.setFocus = function() {
        _this.safeFocus();
      };
      _this.setBlur = function() {
        _this.safeBlur();
        _this.cancelFocusInput();
      };
      _this.setOpen = function(open, skipSetBlur) {
        if (skipSetBlur === void 0) {
          skipSetBlur = false;
        }
        _this.setState({
          open,
          preSelection: open && _this.state.open ? _this.state.preSelection : _this.calcInitialState().preSelection,
          lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE
        }, function() {
          if (!open) {
            _this.setState(function(prev) {
              return {
                focused: skipSetBlur ? prev.focused : false
              };
            }, function() {
              !skipSetBlur && _this.setBlur();
              _this.setState({ inputValue: null });
            });
          }
        });
      };
      _this.inputOk = function() {
        return isDate(_this.state.preSelection);
      };
      _this.isCalendarOpen = function() {
        return _this.props.open === void 0 ? _this.state.open && !_this.props.disabled && !_this.props.readOnly : _this.props.open;
      };
      _this.handleFocus = function(event) {
        var _a2, _b;
        var isAutoReFocus = _this.state.wasHidden;
        var isOpenAllowed = isAutoReFocus ? _this.state.open : true;
        if (isAutoReFocus) {
          _this.resetHiddenStatus();
        }
        if (!_this.state.preventFocus && isOpenAllowed) {
          (_b = (_a2 = _this.props).onFocus) === null || _b === void 0 ? void 0 : _b.call(_a2, event);
          if (!_this.props.preventOpenOnFocus && !_this.props.readOnly) {
            _this.setOpen(true);
          }
        }
        _this.setState({ focused: true });
      };
      _this.sendFocusBackToInput = function() {
        if (_this.preventFocusTimeout) {
          _this.clearPreventFocusTimeout();
        }
        _this.setState({ preventFocus: true }, function() {
          _this.preventFocusTimeout = setTimeout(function() {
            _this.setFocus();
            _this.setState({ preventFocus: false });
          });
        });
      };
      _this.cancelFocusInput = function() {
        clearTimeout(_this.inputFocusTimeout);
        _this.inputFocusTimeout = void 0;
      };
      _this.deferFocusInput = function() {
        _this.cancelFocusInput();
        _this.inputFocusTimeout = setTimeout(function() {
          return _this.setFocus();
        }, 1);
      };
      _this.handleDropdownFocus = function() {
        _this.cancelFocusInput();
      };
      _this.handleBlur = function(event) {
        var _a2, _b;
        if (!_this.state.open || _this.props.withPortal || _this.props.showTimeInput) {
          (_b = (_a2 = _this.props).onBlur) === null || _b === void 0 ? void 0 : _b.call(_a2, event);
        }
        _this.setState({ focused: false });
      };
      _this.handleCalendarClickOutside = function(event) {
        var _a2, _b;
        if (!_this.props.inline) {
          _this.setOpen(false);
        }
        (_b = (_a2 = _this.props).onClickOutside) === null || _b === void 0 ? void 0 : _b.call(_a2, event);
        if (_this.props.withPortal) {
          event.preventDefault();
        }
      };
      _this.handleChange = function() {
        var _a2, _b;
        var allArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          allArgs[_i] = arguments[_i];
        }
        var event = allArgs[0];
        if (_this.props.onChangeRaw) {
          _this.props.onChangeRaw.apply(_this, allArgs);
          if (!event || typeof event.isDefaultPrevented !== "function" || event.isDefaultPrevented()) {
            return;
          }
        }
        _this.setState({
          inputValue: (event === null || event === void 0 ? void 0 : event.target) instanceof HTMLInputElement ? event.target.value : null,
          lastPreSelectChange: PRESELECT_CHANGE_VIA_INPUT
        });
        var _c = _this.props, _d = _c.dateFormat, dateFormat = _d === void 0 ? DatePicker2.defaultProps.dateFormat : _d, _e = _c.strictParsing, strictParsing = _e === void 0 ? DatePicker2.defaultProps.strictParsing : _e, selectsRange = _c.selectsRange, startDate = _c.startDate, endDate = _c.endDate;
        var value = (event === null || event === void 0 ? void 0 : event.target) instanceof HTMLInputElement ? event.target.value : "";
        if (selectsRange) {
          var _f = value.split("-", 2).map(function(val) {
            return val.trim();
          }), valueStart = _f[0], valueEnd = _f[1];
          var startDateNew = parseDate(valueStart !== null && valueStart !== void 0 ? valueStart : "", dateFormat, _this.props.locale, strictParsing);
          var endDateNew = parseDate(valueEnd !== null && valueEnd !== void 0 ? valueEnd : "", dateFormat, _this.props.locale, strictParsing);
          var startChanged = (startDate === null || startDate === void 0 ? void 0 : startDate.getTime()) !== (startDateNew === null || startDateNew === void 0 ? void 0 : startDateNew.getTime());
          var endChanged = (endDate === null || endDate === void 0 ? void 0 : endDate.getTime()) !== (endDateNew === null || endDateNew === void 0 ? void 0 : endDateNew.getTime());
          if (!startChanged && !endChanged) {
            return;
          }
          if (startDateNew && isDayDisabled(startDateNew, _this.props)) {
            return;
          }
          if (endDateNew && isDayDisabled(endDateNew, _this.props)) {
            return;
          }
          (_b = (_a2 = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a2, [startDateNew, endDateNew], event);
        } else {
          var date = parseDate(value, dateFormat, _this.props.locale, strictParsing, _this.props.minDate);
          if (_this.props.showTimeSelectOnly && _this.props.selected && date && !isSameDay2(date, _this.props.selected)) {
            date = set(_this.props.selected, {
              hours: getHours(date),
              minutes: getMinutes(date),
              seconds: getSeconds(date)
            });
          }
          if (date || !value) {
            _this.setSelected(date, event, true);
          }
        }
      };
      _this.handleSelect = function(date, event, monthSelectedIn) {
        if (_this.props.shouldCloseOnSelect && !_this.props.showTimeSelect) {
          _this.sendFocusBackToInput();
        }
        if (_this.props.onChangeRaw) {
          _this.props.onChangeRaw(event);
        }
        _this.setSelected(date, event, false, monthSelectedIn);
        if (_this.props.showDateSelect) {
          _this.setState({ isRenderAriaLiveMessage: true });
        }
        if (!_this.props.shouldCloseOnSelect || _this.props.showTimeSelect) {
          _this.setPreSelection(date);
        } else if (!_this.props.inline) {
          if (!_this.props.selectsRange) {
            _this.setOpen(false);
          }
          var _a2 = _this.props, startDate = _a2.startDate, endDate = _a2.endDate;
          if (startDate && !endDate && (_this.props.swapRange || !isDateBefore(date, startDate))) {
            _this.setOpen(false);
          }
        }
      };
      _this.setSelected = function(date, event, keepInput, monthSelectedIn) {
        var _a2, _b;
        var changedDate = date;
        if (_this.props.showYearPicker) {
          if (changedDate !== null && isYearDisabled(getYear(changedDate), _this.props)) {
            return;
          }
        } else if (_this.props.showMonthYearPicker) {
          if (changedDate !== null && isMonthDisabled(changedDate, _this.props)) {
            return;
          }
        } else {
          if (changedDate !== null && isDayDisabled(changedDate, _this.props)) {
            return;
          }
        }
        var _c = _this.props, onChange = _c.onChange, selectsRange = _c.selectsRange, startDate = _c.startDate, endDate = _c.endDate, selectsMultiple = _c.selectsMultiple, selectedDates = _c.selectedDates, minTime = _c.minTime, swapRange = _c.swapRange;
        if (!isEqual2(_this.props.selected, changedDate) || _this.props.allowSameDay || selectsRange || selectsMultiple) {
          if (changedDate !== null) {
            if (_this.props.selected && (!keepInput || !_this.props.showTimeSelect && !_this.props.showTimeSelectOnly && !_this.props.showTimeInput)) {
              changedDate = setTime(changedDate, {
                hour: getHours(_this.props.selected),
                minute: getMinutes(_this.props.selected),
                second: getSeconds(_this.props.selected)
              });
            }
            if (!keepInput && (_this.props.showTimeSelect || _this.props.showTimeSelectOnly)) {
              if (minTime) {
                changedDate = setTime(changedDate, {
                  hour: minTime.getHours(),
                  minute: minTime.getMinutes(),
                  second: minTime.getSeconds()
                });
              }
            }
            if (!_this.props.inline) {
              _this.setState({
                preSelection: changedDate
              });
            }
            if (!_this.props.focusSelectedMonth) {
              _this.setState({ monthSelectedIn });
            }
          }
          if (selectsRange) {
            var noRanges = !startDate && !endDate;
            var hasStartRange = startDate && !endDate;
            var isRangeFilled = startDate && endDate;
            if (noRanges) {
              onChange === null || onChange === void 0 ? void 0 : onChange([changedDate, null], event);
            } else if (hasStartRange) {
              if (changedDate === null) {
                onChange === null || onChange === void 0 ? void 0 : onChange([null, null], event);
              } else if (isDateBefore(changedDate, startDate)) {
                if (swapRange) {
                  onChange === null || onChange === void 0 ? void 0 : onChange([changedDate, startDate], event);
                } else {
                  onChange === null || onChange === void 0 ? void 0 : onChange([changedDate, null], event);
                }
              } else {
                onChange === null || onChange === void 0 ? void 0 : onChange([startDate, changedDate], event);
              }
            }
            if (isRangeFilled) {
              onChange === null || onChange === void 0 ? void 0 : onChange([changedDate, null], event);
            }
          } else if (selectsMultiple) {
            if (changedDate !== null) {
              if (!(selectedDates === null || selectedDates === void 0 ? void 0 : selectedDates.length)) {
                onChange === null || onChange === void 0 ? void 0 : onChange([changedDate], event);
              } else {
                var isChangedDateAlreadySelected = selectedDates.some(function(selectedDate) {
                  return isSameDay2(selectedDate, changedDate);
                });
                if (isChangedDateAlreadySelected) {
                  var nextDates = selectedDates.filter(function(selectedDate) {
                    return !isSameDay2(selectedDate, changedDate);
                  });
                  onChange === null || onChange === void 0 ? void 0 : onChange(nextDates, event);
                } else {
                  onChange === null || onChange === void 0 ? void 0 : onChange(__spreadArray(__spreadArray([], selectedDates, true), [changedDate], false), event);
                }
              }
            }
          } else {
            onChange === null || onChange === void 0 ? void 0 : onChange(changedDate, event);
          }
        }
        if (!keepInput) {
          (_b = (_a2 = _this.props).onSelect) === null || _b === void 0 ? void 0 : _b.call(_a2, changedDate, event);
          _this.setState({ inputValue: null });
        }
      };
      _this.setPreSelection = function(date) {
        var hasMinDate = isDate(_this.props.minDate);
        var hasMaxDate = isDate(_this.props.maxDate);
        var isValidDateSelection = true;
        if (date) {
          var dateStartOfDay = getStartOfDay(date);
          if (hasMinDate && hasMaxDate) {
            isValidDateSelection = isDayInRange(date, _this.props.minDate, _this.props.maxDate);
          } else if (hasMinDate) {
            var minDateStartOfDay = getStartOfDay(_this.props.minDate);
            isValidDateSelection = isAfter(date, minDateStartOfDay) || isEqual2(dateStartOfDay, minDateStartOfDay);
          } else if (hasMaxDate) {
            var maxDateEndOfDay = getEndOfDay(_this.props.maxDate);
            isValidDateSelection = isBefore(date, maxDateEndOfDay) || isEqual2(dateStartOfDay, maxDateEndOfDay);
          }
        }
        if (isValidDateSelection) {
          _this.setState({
            preSelection: date
          });
        }
      };
      _this.toggleCalendar = function() {
        _this.setOpen(!_this.state.open);
      };
      _this.handleTimeChange = function(time) {
        var _a2, _b;
        if (_this.props.selectsRange || _this.props.selectsMultiple) {
          return;
        }
        var selected = _this.props.selected ? _this.props.selected : _this.getPreSelection();
        var changedDate = _this.props.selected ? time : setTime(selected, {
          hour: getHours(time),
          minute: getMinutes(time)
        });
        _this.setState({
          preSelection: changedDate
        });
        (_b = (_a2 = _this.props).onChange) === null || _b === void 0 ? void 0 : _b.call(_a2, changedDate);
        if (_this.props.shouldCloseOnSelect && !_this.props.showTimeInput) {
          _this.sendFocusBackToInput();
          _this.setOpen(false);
        }
        if (_this.props.showTimeInput) {
          _this.setOpen(true);
        }
        if (_this.props.showTimeSelectOnly || _this.props.showTimeSelect) {
          _this.setState({ isRenderAriaLiveMessage: true });
        }
        _this.setState({ inputValue: null });
      };
      _this.onInputClick = function() {
        var _a2, _b;
        if (!_this.props.disabled && !_this.props.readOnly) {
          _this.setOpen(true);
        }
        (_b = (_a2 = _this.props).onInputClick) === null || _b === void 0 ? void 0 : _b.call(_a2);
      };
      _this.onInputKeyDown = function(event) {
        var _a2, _b, _c, _d, _e, _f;
        (_b = (_a2 = _this.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a2, event);
        var eventKey = event.key;
        if (!_this.state.open && !_this.props.inline && !_this.props.preventOpenOnFocus) {
          if (eventKey === KeyType.ArrowDown || eventKey === KeyType.ArrowUp || eventKey === KeyType.Enter) {
            (_c = _this.onInputClick) === null || _c === void 0 ? void 0 : _c.call(_this);
          }
          return;
        }
        if (_this.state.open) {
          if (eventKey === KeyType.ArrowDown || eventKey === KeyType.ArrowUp) {
            event.preventDefault();
            var selectorString = _this.props.showTimeSelectOnly ? ".react-datepicker__time-list-item[tabindex='0']" : _this.props.showWeekPicker && _this.props.showWeekNumbers ? '.react-datepicker__week-number[tabindex="0"]' : _this.props.showFullMonthYearPicker || _this.props.showMonthYearPicker ? '.react-datepicker__month-text[tabindex="0"]' : '.react-datepicker__day[tabindex="0"]';
            var selectedItem = ((_d = _this.calendar) === null || _d === void 0 ? void 0 : _d.containerRef.current) instanceof Element && _this.calendar.containerRef.current.querySelector(selectorString);
            selectedItem instanceof HTMLElement && selectedItem.focus({ preventScroll: true });
            return;
          }
          var copy = newDate(_this.state.preSelection);
          if (eventKey === KeyType.Enter) {
            event.preventDefault();
            event.target.blur();
            if (_this.inputOk() && _this.state.lastPreSelectChange === PRESELECT_CHANGE_VIA_NAVIGATE) {
              _this.handleSelect(copy, event);
              !_this.props.shouldCloseOnSelect && _this.setPreSelection(copy);
            } else {
              _this.setOpen(false);
            }
          } else if (eventKey === KeyType.Escape) {
            event.preventDefault();
            event.target.blur();
            _this.sendFocusBackToInput();
            _this.setOpen(false);
          } else if (eventKey === KeyType.Tab) {
            _this.setOpen(false);
          }
          if (!_this.inputOk()) {
            (_f = (_e = _this.props).onInputError) === null || _f === void 0 ? void 0 : _f.call(_e, { code: 1, msg: INPUT_ERR_1 });
          }
        }
      };
      _this.onPortalKeyDown = function(event) {
        var eventKey = event.key;
        if (eventKey === KeyType.Escape) {
          event.preventDefault();
          _this.setState({
            preventFocus: true
          }, function() {
            _this.setOpen(false);
            setTimeout(function() {
              _this.setFocus();
              _this.setState({ preventFocus: false });
            });
          });
        }
      };
      _this.onDayKeyDown = function(event) {
        var _a2, _b, _c, _d, _e, _f;
        var _g = _this.props, minDate = _g.minDate, maxDate = _g.maxDate, disabledKeyboardNavigation = _g.disabledKeyboardNavigation, showWeekPicker = _g.showWeekPicker, shouldCloseOnSelect = _g.shouldCloseOnSelect, locale = _g.locale, calendarStartDay = _g.calendarStartDay, adjustDateOnChange = _g.adjustDateOnChange, inline4 = _g.inline;
        (_b = (_a2 = _this.props).onKeyDown) === null || _b === void 0 ? void 0 : _b.call(_a2, event);
        if (disabledKeyboardNavigation)
          return;
        var eventKey = event.key;
        var isShiftKeyActive = event.shiftKey;
        var copy = newDate(_this.state.preSelection);
        var calculateNewDate = function(eventKey2, date) {
          var newCalculatedDate = date;
          switch (eventKey2) {
            case KeyType.ArrowRight:
              newCalculatedDate = showWeekPicker ? addWeeks(date, 1) : addDays(date, 1);
              break;
            case KeyType.ArrowLeft:
              newCalculatedDate = showWeekPicker ? subWeeks(date, 1) : subDays(date, 1);
              break;
            case KeyType.ArrowUp:
              newCalculatedDate = subWeeks(date, 1);
              break;
            case KeyType.ArrowDown:
              newCalculatedDate = addWeeks(date, 1);
              break;
            case KeyType.PageUp:
              newCalculatedDate = isShiftKeyActive ? subYears(date, 1) : subMonths(date, 1);
              break;
            case KeyType.PageDown:
              newCalculatedDate = isShiftKeyActive ? addYears(date, 1) : addMonths(date, 1);
              break;
            case KeyType.Home:
              newCalculatedDate = getStartOfWeek(date, locale, calendarStartDay);
              break;
            case KeyType.End:
              newCalculatedDate = getEndOfWeek(date);
              break;
          }
          return newCalculatedDate;
        };
        var getNewDate = function(eventKey2, date) {
          var MAX_ITERATIONS = 40;
          var eventKeyCopy = eventKey2;
          var validDateFound = false;
          var iterations = 0;
          var newSelection2 = calculateNewDate(eventKey2, date);
          while (!validDateFound) {
            if (iterations >= MAX_ITERATIONS) {
              newSelection2 = date;
              break;
            }
            if (minDate && newSelection2 < minDate) {
              eventKeyCopy = KeyType.ArrowRight;
              newSelection2 = isDayDisabled(minDate, _this.props) ? calculateNewDate(eventKeyCopy, newSelection2) : minDate;
            }
            if (maxDate && newSelection2 > maxDate) {
              eventKeyCopy = KeyType.ArrowLeft;
              newSelection2 = isDayDisabled(maxDate, _this.props) ? calculateNewDate(eventKeyCopy, newSelection2) : maxDate;
            }
            if (isDayDisabled(newSelection2, _this.props)) {
              if (eventKeyCopy === KeyType.PageUp || eventKeyCopy === KeyType.Home) {
                eventKeyCopy = KeyType.ArrowRight;
              }
              if (eventKeyCopy === KeyType.PageDown || eventKeyCopy === KeyType.End) {
                eventKeyCopy = KeyType.ArrowLeft;
              }
              newSelection2 = calculateNewDate(eventKeyCopy, newSelection2);
            } else {
              validDateFound = true;
            }
            iterations++;
          }
          return newSelection2;
        };
        if (eventKey === KeyType.Enter) {
          event.preventDefault();
          _this.handleSelect(copy, event);
          !shouldCloseOnSelect && _this.setPreSelection(copy);
          return;
        } else if (eventKey === KeyType.Escape) {
          event.preventDefault();
          _this.setOpen(false);
          if (!_this.inputOk()) {
            (_d = (_c = _this.props).onInputError) === null || _d === void 0 ? void 0 : _d.call(_c, { code: 1, msg: INPUT_ERR_1 });
          }
          return;
        }
        var newSelection = null;
        switch (eventKey) {
          case KeyType.ArrowLeft:
          case KeyType.ArrowRight:
          case KeyType.ArrowUp:
          case KeyType.ArrowDown:
          case KeyType.PageUp:
          case KeyType.PageDown:
          case KeyType.Home:
          case KeyType.End:
            newSelection = getNewDate(eventKey, copy);
            break;
        }
        if (!newSelection) {
          (_f = (_e = _this.props).onInputError) === null || _f === void 0 ? void 0 : _f.call(_e, { code: 1, msg: INPUT_ERR_1 });
          return;
        }
        event.preventDefault();
        _this.setState({ lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE });
        if (adjustDateOnChange) {
          _this.setSelected(newSelection);
        }
        _this.setPreSelection(newSelection);
        if (inline4) {
          var prevMonth = getMonth(copy);
          var newMonth = getMonth(newSelection);
          var prevYear = getYear(copy);
          var newYear = getYear(newSelection);
          if (prevMonth !== newMonth || prevYear !== newYear) {
            _this.setState({ shouldFocusDayInline: true });
          } else {
            _this.setState({ shouldFocusDayInline: false });
          }
        }
      };
      _this.onPopperKeyDown = function(event) {
        var eventKey = event.key;
        if (eventKey === KeyType.Escape) {
          event.preventDefault();
          _this.sendFocusBackToInput();
        }
      };
      _this.onClearClick = function(event) {
        if (event) {
          if (event.preventDefault) {
            event.preventDefault();
          }
        }
        _this.sendFocusBackToInput();
        var _a2 = _this.props, selectsRange = _a2.selectsRange, onChange = _a2.onChange;
        if (selectsRange) {
          onChange === null || onChange === void 0 ? void 0 : onChange([null, null], event);
        } else {
          onChange === null || onChange === void 0 ? void 0 : onChange(null, event);
        }
        _this.setState({ inputValue: null });
      };
      _this.clear = function() {
        _this.onClearClick();
      };
      _this.onScroll = function(event) {
        if (typeof _this.props.closeOnScroll === "boolean" && _this.props.closeOnScroll) {
          if (event.target === document || event.target === document.documentElement || event.target === document.body) {
            _this.setOpen(false);
          }
        } else if (typeof _this.props.closeOnScroll === "function") {
          if (_this.props.closeOnScroll(event)) {
            _this.setOpen(false);
          }
        }
      };
      _this.renderCalendar = function() {
        var _a2, _b;
        if (!_this.props.inline && !_this.isCalendarOpen()) {
          return null;
        }
        return import_react3.default.createElement(Calendar, _assign({ showMonthYearDropdown: void 0, ref: function(elem) {
          _this.calendar = elem;
        } }, _this.props, _this.state, { setOpen: _this.setOpen, dateFormat: (_a2 = _this.props.dateFormatCalendar) !== null && _a2 !== void 0 ? _a2 : DatePicker2.defaultProps.dateFormatCalendar, onSelect: _this.handleSelect, onClickOutside: _this.handleCalendarClickOutside, holidays: getHolidaysMap(_this.modifyHolidays()), outsideClickIgnoreClass, onDropdownFocus: _this.handleDropdownFocus, onTimeChange: _this.handleTimeChange, className: _this.props.calendarClassName, container: _this.props.calendarContainer, handleOnKeyDown: _this.props.onKeyDown, handleOnDayKeyDown: _this.onDayKeyDown, setPreSelection: _this.setPreSelection, dropdownMode: (_b = _this.props.dropdownMode) !== null && _b !== void 0 ? _b : DatePicker2.defaultProps.dropdownMode }), _this.props.children);
      };
      _this.renderAriaLiveRegion = function() {
        var _a2 = _this.props, _b = _a2.dateFormat, dateFormat = _b === void 0 ? DatePicker2.defaultProps.dateFormat : _b, locale = _a2.locale;
        var isContainsTime = _this.props.showTimeInput || _this.props.showTimeSelect;
        var longDateFormat = isContainsTime ? "PPPPp" : "PPPP";
        var ariaLiveMessage;
        if (_this.props.selectsRange) {
          ariaLiveMessage = "Selected start date: ".concat(safeDateFormat(_this.props.startDate, {
            dateFormat: longDateFormat,
            locale
          }), ". ").concat(_this.props.endDate ? "End date: " + safeDateFormat(_this.props.endDate, {
            dateFormat: longDateFormat,
            locale
          }) : "");
        } else {
          if (_this.props.showTimeSelectOnly) {
            ariaLiveMessage = "Selected time: ".concat(safeDateFormat(_this.props.selected, { dateFormat, locale }));
          } else if (_this.props.showYearPicker) {
            ariaLiveMessage = "Selected year: ".concat(safeDateFormat(_this.props.selected, { dateFormat: "yyyy", locale }));
          } else if (_this.props.showMonthYearPicker) {
            ariaLiveMessage = "Selected month: ".concat(safeDateFormat(_this.props.selected, { dateFormat: "MMMM yyyy", locale }));
          } else if (_this.props.showQuarterYearPicker) {
            ariaLiveMessage = "Selected quarter: ".concat(safeDateFormat(_this.props.selected, {
              dateFormat: "yyyy, QQQ",
              locale
            }));
          } else {
            ariaLiveMessage = "Selected date: ".concat(safeDateFormat(_this.props.selected, {
              dateFormat: longDateFormat,
              locale
            }));
          }
        }
        return import_react3.default.createElement("span", { role: "alert", "aria-live": "polite", className: "react-datepicker__aria-live" }, ariaLiveMessage);
      };
      _this.renderDateInput = function() {
        var _a2, _b;
        var _c;
        var className = clsx(_this.props.className, (_a2 = {}, _a2[outsideClickIgnoreClass] = _this.state.open, _a2));
        var customInput = _this.props.customInput || import_react3.default.createElement("input", { type: "text" });
        var customInputRef = _this.props.customInputRef || "ref";
        var _d = _this.props, _e = _d.dateFormat, dateFormat = _e === void 0 ? DatePicker2.defaultProps.dateFormat : _e, locale = _d.locale;
        var inputValue = typeof _this.props.value === "string" ? _this.props.value : typeof _this.state.inputValue === "string" ? _this.state.inputValue : _this.props.selectsRange ? safeDateRangeFormat(_this.props.startDate, _this.props.endDate, {
          dateFormat,
          locale
        }) : _this.props.selectsMultiple ? safeMultipleDatesFormat((_c = _this.props.selectedDates) !== null && _c !== void 0 ? _c : [], {
          dateFormat,
          locale
        }) : safeDateFormat(_this.props.selected, {
          dateFormat,
          locale
        });
        return (0, import_react3.cloneElement)(customInput, (_b = {}, _b[customInputRef] = function(input) {
          _this.input = input;
        }, _b.value = inputValue, _b.onBlur = _this.handleBlur, _b.onChange = _this.handleChange, _b.onClick = _this.onInputClick, _b.onFocus = _this.handleFocus, _b.onKeyDown = _this.onInputKeyDown, _b.id = _this.props.id, _b.name = _this.props.name, _b.form = _this.props.form, _b.autoFocus = _this.props.autoFocus, _b.placeholder = _this.props.placeholderText, _b.disabled = _this.props.disabled, _b.autoComplete = _this.props.autoComplete, _b.className = clsx(customInput.props.className, className), _b.title = _this.props.title, _b.readOnly = _this.props.readOnly, _b.required = _this.props.required, _b.tabIndex = _this.props.tabIndex, _b["aria-describedby"] = _this.props.ariaDescribedBy, _b["aria-invalid"] = _this.props.ariaInvalid, _b["aria-labelledby"] = _this.props.ariaLabelledBy, _b["aria-required"] = _this.props.ariaRequired, _b));
      };
      _this.renderClearButton = function() {
        var _a2 = _this.props, isClearable = _a2.isClearable, disabled = _a2.disabled, selected = _a2.selected, startDate = _a2.startDate, endDate = _a2.endDate, clearButtonTitle = _a2.clearButtonTitle, _b = _a2.clearButtonClassName, clearButtonClassName = _b === void 0 ? "" : _b, _c = _a2.ariaLabelClose, ariaLabelClose = _c === void 0 ? "Close" : _c, selectedDates = _a2.selectedDates;
        if (isClearable && (selected != null || startDate != null || endDate != null || (selectedDates === null || selectedDates === void 0 ? void 0 : selectedDates.length))) {
          return import_react3.default.createElement("button", { type: "button", className: clsx("react-datepicker__close-icon", clearButtonClassName, { "react-datepicker__close-icon--disabled": disabled }), disabled, "aria-label": ariaLabelClose, onClick: _this.onClearClick, title: clearButtonTitle, tabIndex: -1 });
        } else {
          return null;
        }
      };
      _this.state = _this.calcInitialState();
      _this.preventFocusTimeout = void 0;
      return _this;
    }
    Object.defineProperty(DatePicker2, "defaultProps", {
      get: function() {
        return {
          allowSameDay: false,
          dateFormat: "MM/dd/yyyy",
          dateFormatCalendar: "LLLL yyyy",
          disabled: false,
          disabledKeyboardNavigation: false,
          dropdownMode: "scroll",
          preventOpenOnFocus: false,
          monthsShown: 1,
          readOnly: false,
          withPortal: false,
          selectsDisabledDaysInRange: false,
          shouldCloseOnSelect: true,
          showTimeSelect: false,
          showTimeInput: false,
          showPreviousMonths: false,
          showMonthYearPicker: false,
          showFullMonthYearPicker: false,
          showTwoColumnMonthYearPicker: false,
          showFourColumnMonthYearPicker: false,
          showYearPicker: false,
          showQuarterYearPicker: false,
          showWeekPicker: false,
          strictParsing: false,
          swapRange: false,
          timeIntervals: 30,
          timeCaption: "Time",
          previousMonthAriaLabel: "Previous Month",
          previousMonthButtonLabel: "Previous Month",
          nextMonthAriaLabel: "Next Month",
          nextMonthButtonLabel: "Next Month",
          previousYearAriaLabel: "Previous Year",
          previousYearButtonLabel: "Previous Year",
          nextYearAriaLabel: "Next Year",
          nextYearButtonLabel: "Next Year",
          timeInputLabel: "Time",
          enableTabLoop: true,
          yearItemNumber: DEFAULT_YEAR_ITEM_NUMBER,
          focusSelectedMonth: false,
          showPopperArrow: true,
          excludeScrollbar: true,
          customTimeInput: null,
          calendarStartDay: void 0,
          toggleCalendarOnIconClick: false,
          usePointerEvent: false
        };
      },
      enumerable: false,
      configurable: true
    });
    DatePicker2.prototype.componentDidMount = function() {
      window.addEventListener("scroll", this.onScroll, true);
      document.addEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    };
    DatePicker2.prototype.componentDidUpdate = function(prevProps, prevState) {
      var _a2, _b, _c, _d;
      if (prevProps.inline && hasPreSelectionChanged(prevProps.selected, this.props.selected)) {
        this.setPreSelection(this.props.selected);
      }
      if (this.state.monthSelectedIn !== void 0 && prevProps.monthsShown !== this.props.monthsShown) {
        this.setState({ monthSelectedIn: 0 });
      }
      if (prevProps.highlightDates !== this.props.highlightDates) {
        this.setState({
          highlightDates: getHighLightDaysMap(this.props.highlightDates)
        });
      }
      if (!prevState.focused && !isEqual2(prevProps.selected, this.props.selected)) {
        this.setState({ inputValue: null });
      }
      if (prevState.open !== this.state.open) {
        if (prevState.open === false && this.state.open === true) {
          (_b = (_a2 = this.props).onCalendarOpen) === null || _b === void 0 ? void 0 : _b.call(_a2);
        }
        if (prevState.open === true && this.state.open === false) {
          (_d = (_c = this.props).onCalendarClose) === null || _d === void 0 ? void 0 : _d.call(_c);
        }
      }
    };
    DatePicker2.prototype.componentWillUnmount = function() {
      this.clearPreventFocusTimeout();
      window.removeEventListener("scroll", this.onScroll, true);
      document.removeEventListener("visibilitychange", this.setHiddenStateOnVisibilityHidden);
    };
    DatePicker2.prototype.renderInputContainer = function() {
      var _a2 = this.props, showIcon = _a2.showIcon, icon = _a2.icon, calendarIconClassname = _a2.calendarIconClassname, calendarIconClassName = _a2.calendarIconClassName, toggleCalendarOnIconClick = _a2.toggleCalendarOnIconClick;
      var open = this.state.open;
      if (calendarIconClassname) {
        console.warn("calendarIconClassname props is deprecated. should use calendarIconClassName props.");
      }
      return import_react3.default.createElement(
        "div",
        { className: "react-datepicker__input-container".concat(showIcon ? " react-datepicker__view-calendar-icon" : "") },
        showIcon && import_react3.default.createElement(CalendarIcon, _assign({ icon, className: clsx(calendarIconClassName, !calendarIconClassName && calendarIconClassname, open && "react-datepicker-ignore-onclickoutside") }, toggleCalendarOnIconClick ? {
          onClick: this.toggleCalendar
        } : null)),
        this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
        this.renderDateInput(),
        this.renderClearButton()
      );
    };
    DatePicker2.prototype.render = function() {
      var calendar = this.renderCalendar();
      if (this.props.inline)
        return calendar;
      if (this.props.withPortal) {
        var portalContainer = this.state.open ? import_react3.default.createElement(
          TabLoop,
          { enableTabLoop: this.props.enableTabLoop },
          import_react3.default.createElement("div", { className: "react-datepicker__portal", tabIndex: -1, onKeyDown: this.onPortalKeyDown }, calendar)
        ) : null;
        if (this.state.open && this.props.portalId) {
          portalContainer = import_react3.default.createElement(Portal, _assign({ portalId: this.props.portalId }, this.props), portalContainer);
        }
        return import_react3.default.createElement(
          "div",
          null,
          this.renderInputContainer(),
          portalContainer
        );
      }
      return import_react3.default.createElement(PopperComponent$1, _assign({}, this.props, { className: this.props.popperClassName, hidePopper: !this.isCalendarOpen(), targetComponent: this.renderInputContainer(), popperComponent: calendar, popperOnKeyDown: this.onPopperKeyDown, showArrow: this.props.showPopperArrow }));
    };
    return DatePicker2;
  }(import_react3.Component)
);
var PRESELECT_CHANGE_VIA_INPUT = "input";
var PRESELECT_CHANGE_VIA_NAVIGATE = "navigate";
export {
  CalendarContainer,
  DatePicker as default,
  getDefaultLocale,
  registerLocale,
  setDefaultLocale
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

react-datepicker/dist/es/index.js:
  (*!
    react-datepicker v7.6.0
    https://github.com/Hacker0x01/react-datepicker
    Released under the MIT License.
  *)
*/
//# sourceMappingURL=react-datepicker.js.map
