var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i) if (s.type === "childList") for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: true, subtree: true });
  function r(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(i) {
    if (i.ep) return;
    i.ep = true;
    const s = r(i);
    fetch(i.href, s);
  }
})();
var Fs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nd(t5) {
  return t5 && t5.__esModule && Object.prototype.hasOwnProperty.call(t5, "default") ? t5.default : t5;
}
function px(t5) {
  if (t5.__esModule) return t5;
  var e = t5.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: true }), Object.keys(t5).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t5, n);
    Object.defineProperty(r, n, i.get ? i : { enumerable: true, get: function() {
      return t5[n];
    } });
  }), r;
}
var ny = { exports: {} }, zl = {}, iy = { exports: {} }, se = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var wo = Symbol.for("react.element"), mx = Symbol.for("react.portal"), gx = Symbol.for("react.fragment"), yx = Symbol.for("react.strict_mode"), vx = Symbol.for("react.profiler"), _x = Symbol.for("react.provider"), xx = Symbol.for("react.context"), wx = Symbol.for("react.forward_ref"), Ex = Symbol.for("react.suspense"), Sx = Symbol.for("react.memo"), Tx = Symbol.for("react.lazy"), Wf = Symbol.iterator;
function bx(t5) {
  return t5 === null || typeof t5 != "object" ? null : (t5 = Wf && t5[Wf] || t5["@@iterator"], typeof t5 == "function" ? t5 : null);
}
var sy = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, oy = Object.assign, ay = {};
function Ji(t5, e, r) {
  this.props = t5, this.context = e, this.refs = ay, this.updater = r || sy;
}
Ji.prototype.isReactComponent = {};
Ji.prototype.setState = function(t5, e) {
  if (typeof t5 != "object" && typeof t5 != "function" && t5 != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, t5, e, "setState");
};
Ji.prototype.forceUpdate = function(t5) {
  this.updater.enqueueForceUpdate(this, t5, "forceUpdate");
};
function ly() {
}
ly.prototype = Ji.prototype;
function Od(t5, e, r) {
  this.props = t5, this.context = e, this.refs = ay, this.updater = r || sy;
}
var Ld = Od.prototype = new ly();
Ld.constructor = Od;
oy(Ld, Ji.prototype);
Ld.isPureReactComponent = true;
var Yf = Array.isArray, uy = Object.prototype.hasOwnProperty, Ud = { current: null }, hy = { key: true, ref: true, __self: true, __source: true };
function cy(t5, e, r) {
  var n, i = {}, s = null, o = null;
  if (e != null) for (n in e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (s = "" + e.key), e) uy.call(e, n) && !hy.hasOwnProperty(n) && (i[n] = e[n]);
  var a = arguments.length - 2;
  if (a === 1) i.children = r;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (t5 && t5.defaultProps) for (n in a = t5.defaultProps, a) i[n] === void 0 && (i[n] = a[n]);
  return { $$typeof: wo, type: t5, key: s, ref: o, props: i, _owner: Ud.current };
}
function Ax(t5, e) {
  return { $$typeof: wo, type: t5.type, key: e, ref: t5.ref, props: t5.props, _owner: t5._owner };
}
function Gd(t5) {
  return typeof t5 == "object" && t5 !== null && t5.$$typeof === wo;
}
function Cx(t5) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + t5.replace(/[=:]/g, function(r) {
    return e[r];
  });
}
var Zf = /\/+/g;
function yu(t5, e) {
  return typeof t5 == "object" && t5 !== null && t5.key != null ? Cx("" + t5.key) : e.toString(36);
}
function Aa(t5, e, r, n, i) {
  var s = typeof t5;
  (s === "undefined" || s === "boolean") && (t5 = null);
  var o = false;
  if (t5 === null) o = true;
  else switch (s) {
    case "string":
    case "number":
      o = true;
      break;
    case "object":
      switch (t5.$$typeof) {
        case wo:
        case mx:
          o = true;
      }
  }
  if (o) return o = t5, i = i(o), t5 = n === "" ? "." + yu(o, 0) : n, Yf(i) ? (r = "", t5 != null && (r = t5.replace(Zf, "$&/") + "/"), Aa(i, e, r, "", function(u) {
    return u;
  })) : i != null && (Gd(i) && (i = Ax(i, r + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Zf, "$&/") + "/") + t5)), e.push(i)), 1;
  if (o = 0, n = n === "" ? "." : n + ":", Yf(t5)) for (var a = 0; a < t5.length; a++) {
    s = t5[a];
    var l = n + yu(s, a);
    o += Aa(s, e, r, l, i);
  }
  else if (l = bx(t5), typeof l == "function") for (t5 = l.call(t5), a = 0; !(s = t5.next()).done; ) s = s.value, l = n + yu(s, a++), o += Aa(s, e, r, l, i);
  else if (s === "object") throw e = String(t5), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t5).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Do(t5, e, r) {
  if (t5 == null) return t5;
  var n = [], i = 0;
  return Aa(t5, n, "", "", function(s) {
    return e.call(r, s, i++);
  }), n;
}
function Ix(t5) {
  if (t5._status === -1) {
    var e = t5._result;
    e = e(), e.then(function(r) {
      (t5._status === 0 || t5._status === -1) && (t5._status = 1, t5._result = r);
    }, function(r) {
      (t5._status === 0 || t5._status === -1) && (t5._status = 2, t5._result = r);
    }), t5._status === -1 && (t5._status = 0, t5._result = e);
  }
  if (t5._status === 1) return t5._result.default;
  throw t5._result;
}
var ot = { current: null }, Ca = { transition: null }, Rx = { ReactCurrentDispatcher: ot, ReactCurrentBatchConfig: Ca, ReactCurrentOwner: Ud };
function dy() {
  throw Error("act(...) is not supported in production builds of React.");
}
se.Children = { map: Do, forEach: function(t5, e, r) {
  Do(t5, function() {
    e.apply(this, arguments);
  }, r);
}, count: function(t5) {
  var e = 0;
  return Do(t5, function() {
    e++;
  }), e;
}, toArray: function(t5) {
  return Do(t5, function(e) {
    return e;
  }) || [];
}, only: function(t5) {
  if (!Gd(t5)) throw Error("React.Children.only expected to receive a single React element child.");
  return t5;
} };
se.Component = Ji;
se.Fragment = gx;
se.Profiler = vx;
se.PureComponent = Od;
se.StrictMode = yx;
se.Suspense = Ex;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rx;
se.act = dy;
se.cloneElement = function(t5, e, r) {
  if (t5 == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t5 + ".");
  var n = oy({}, t5.props), i = t5.key, s = t5.ref, o = t5._owner;
  if (e != null) {
    if (e.ref !== void 0 && (s = e.ref, o = Ud.current), e.key !== void 0 && (i = "" + e.key), t5.type && t5.type.defaultProps) var a = t5.type.defaultProps;
    for (l in e) uy.call(e, l) && !hy.hasOwnProperty(l) && (n[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: wo, type: t5.type, key: i, ref: s, props: n, _owner: o };
};
se.createContext = function(t5) {
  return t5 = { $$typeof: xx, _currentValue: t5, _currentValue2: t5, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t5.Provider = { $$typeof: _x, _context: t5 }, t5.Consumer = t5;
};
se.createElement = cy;
se.createFactory = function(t5) {
  var e = cy.bind(null, t5);
  return e.type = t5, e;
};
se.createRef = function() {
  return { current: null };
};
se.forwardRef = function(t5) {
  return { $$typeof: wx, render: t5 };
};
se.isValidElement = Gd;
se.lazy = function(t5) {
  return { $$typeof: Tx, _payload: { _status: -1, _result: t5 }, _init: Ix };
};
se.memo = function(t5, e) {
  return { $$typeof: Sx, type: t5, compare: e === void 0 ? null : e };
};
se.startTransition = function(t5) {
  var e = Ca.transition;
  Ca.transition = {};
  try {
    t5();
  } finally {
    Ca.transition = e;
  }
};
se.unstable_act = dy;
se.useCallback = function(t5, e) {
  return ot.current.useCallback(t5, e);
};
se.useContext = function(t5) {
  return ot.current.useContext(t5);
};
se.useDebugValue = function() {
};
se.useDeferredValue = function(t5) {
  return ot.current.useDeferredValue(t5);
};
se.useEffect = function(t5, e) {
  return ot.current.useEffect(t5, e);
};
se.useId = function() {
  return ot.current.useId();
};
se.useImperativeHandle = function(t5, e, r) {
  return ot.current.useImperativeHandle(t5, e, r);
};
se.useInsertionEffect = function(t5, e) {
  return ot.current.useInsertionEffect(t5, e);
};
se.useLayoutEffect = function(t5, e) {
  return ot.current.useLayoutEffect(t5, e);
};
se.useMemo = function(t5, e) {
  return ot.current.useMemo(t5, e);
};
se.useReducer = function(t5, e, r) {
  return ot.current.useReducer(t5, e, r);
};
se.useRef = function(t5) {
  return ot.current.useRef(t5);
};
se.useState = function(t5) {
  return ot.current.useState(t5);
};
se.useSyncExternalStore = function(t5, e, r) {
  return ot.current.useSyncExternalStore(t5, e, r);
};
se.useTransition = function() {
  return ot.current.useTransition();
};
se.version = "18.3.1";
iy.exports = se;
var z = iy.exports;
const Px = Nd(z);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Mx = z, kx = Symbol.for("react.element"), Fx = Symbol.for("react.fragment"), Dx = Object.prototype.hasOwnProperty, Bx = Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Nx = { key: true, ref: true, __self: true, __source: true };
function fy(t5, e, r) {
  var n, i = {}, s = null, o = null;
  r !== void 0 && (s = "" + r), e.key !== void 0 && (s = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (n in e) Dx.call(e, n) && !Nx.hasOwnProperty(n) && (i[n] = e[n]);
  if (t5 && t5.defaultProps) for (n in e = t5.defaultProps, e) i[n] === void 0 && (i[n] = e[n]);
  return { $$typeof: kx, type: t5, key: s, ref: o, props: i, _owner: Bx.current };
}
zl.Fragment = Fx;
zl.jsx = fy;
zl.jsxs = fy;
ny.exports = zl;
var M = ny.exports, Gh = {}, py = { exports: {} }, xt = {}, my = { exports: {} }, gy = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(t5) {
  function e(k, j) {
    var b = k.length;
    k.push(j);
    e: for (; 0 < b; ) {
      var U = b - 1 >>> 1, K = k[U];
      if (0 < i(K, j)) k[U] = j, k[b] = K, b = U;
      else break e;
    }
  }
  function r(k) {
    return k.length === 0 ? null : k[0];
  }
  function n(k) {
    if (k.length === 0) return null;
    var j = k[0], b = k.pop();
    if (b !== j) {
      k[0] = b;
      e: for (var U = 0, K = k.length, oe = K >>> 1; U < oe; ) {
        var re = 2 * (U + 1) - 1, _e = k[re], he = re + 1, J = k[he];
        if (0 > i(_e, b)) he < K && 0 > i(J, _e) ? (k[U] = J, k[he] = b, U = he) : (k[U] = _e, k[re] = b, U = re);
        else if (he < K && 0 > i(J, b)) k[U] = J, k[he] = b, U = he;
        else break e;
      }
    }
    return j;
  }
  function i(k, j) {
    var b = k.sortIndex - j.sortIndex;
    return b !== 0 ? b : k.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t5.unstable_now = function() {
      return s.now();
    };
  } else {
    var o = Date, a = o.now();
    t5.unstable_now = function() {
      return o.now() - a;
    };
  }
  var l = [], u = [], h = 1, c = null, d = 3, f = false, p = false, y = false, _ = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(k) {
    for (var j = r(u); j !== null; ) {
      if (j.callback === null) n(u);
      else if (j.startTime <= k) n(u), j.sortIndex = j.expirationTime, e(l, j);
      else break;
      j = r(u);
    }
  }
  function x(k) {
    if (y = false, m(k), !p) if (r(l) !== null) p = true, q(w);
    else {
      var j = r(u);
      j !== null && O(x, j.startTime - k);
    }
  }
  function w(k, j) {
    p = false, y && (y = false, g(E), E = -1), f = true;
    var b = d;
    try {
      for (m(j), c = r(l); c !== null && (!(c.expirationTime > j) || k && !P()); ) {
        var U = c.callback;
        if (typeof U == "function") {
          c.callback = null, d = c.priorityLevel;
          var K = U(c.expirationTime <= j);
          j = t5.unstable_now(), typeof K == "function" ? c.callback = K : c === r(l) && n(l), m(j);
        } else n(l);
        c = r(l);
      }
      if (c !== null) var oe = true;
      else {
        var re = r(u);
        re !== null && O(x, re.startTime - j), oe = false;
      }
      return oe;
    } finally {
      c = null, d = b, f = false;
    }
  }
  var T = false, S = null, E = -1, I = 5, C = -1;
  function P() {
    return !(t5.unstable_now() - C < I);
  }
  function N() {
    if (S !== null) {
      var k = t5.unstable_now();
      C = k;
      var j = true;
      try {
        j = S(true, k);
      } finally {
        j ? A() : (T = false, S = null);
      }
    } else T = false;
  }
  var A;
  if (typeof v == "function") A = function() {
    v(N);
  };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(), $ = R.port2;
    R.port1.onmessage = N, A = function() {
      $.postMessage(null);
    };
  } else A = function() {
    _(N, 0);
  };
  function q(k) {
    S = k, T || (T = true, A());
  }
  function O(k, j) {
    E = _(function() {
      k(t5.unstable_now());
    }, j);
  }
  t5.unstable_IdlePriority = 5, t5.unstable_ImmediatePriority = 1, t5.unstable_LowPriority = 4, t5.unstable_NormalPriority = 3, t5.unstable_Profiling = null, t5.unstable_UserBlockingPriority = 2, t5.unstable_cancelCallback = function(k) {
    k.callback = null;
  }, t5.unstable_continueExecution = function() {
    p || f || (p = true, q(w));
  }, t5.unstable_forceFrameRate = function(k) {
    0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < k ? Math.floor(1e3 / k) : 5;
  }, t5.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, t5.unstable_getFirstCallbackNode = function() {
    return r(l);
  }, t5.unstable_next = function(k) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var j = 3;
        break;
      default:
        j = d;
    }
    var b = d;
    d = j;
    try {
      return k();
    } finally {
      d = b;
    }
  }, t5.unstable_pauseExecution = function() {
  }, t5.unstable_requestPaint = function() {
  }, t5.unstable_runWithPriority = function(k, j) {
    switch (k) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        k = 3;
    }
    var b = d;
    d = k;
    try {
      return j();
    } finally {
      d = b;
    }
  }, t5.unstable_scheduleCallback = function(k, j, b) {
    var U = t5.unstable_now();
    switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? U + b : U) : b = U, k) {
      case 1:
        var K = -1;
        break;
      case 2:
        K = 250;
        break;
      case 5:
        K = 1073741823;
        break;
      case 4:
        K = 1e4;
        break;
      default:
        K = 5e3;
    }
    return K = b + K, k = { id: h++, callback: j, priorityLevel: k, startTime: b, expirationTime: K, sortIndex: -1 }, b > U ? (k.sortIndex = b, e(u, k), r(l) === null && k === r(u) && (y ? (g(E), E = -1) : y = true, O(x, b - U))) : (k.sortIndex = K, e(l, k), p || f || (p = true, q(w))), k;
  }, t5.unstable_shouldYield = P, t5.unstable_wrapCallback = function(k) {
    var j = d;
    return function() {
      var b = d;
      d = j;
      try {
        return k.apply(this, arguments);
      } finally {
        d = b;
      }
    };
  };
})(gy);
my.exports = gy;
var Ox = my.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Lx = z, _t = Ox;
function F(t5) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t5, r = 1; r < arguments.length; r++) e += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + t5 + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yy = /* @__PURE__ */ new Set(), Ks = {};
function Zn(t5, e) {
  ji(t5, e), ji(t5 + "Capture", e);
}
function ji(t5, e) {
  for (Ks[t5] = e, t5 = 0; t5 < e.length; t5++) yy.add(e[t5]);
}
var Ir = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zh = Object.prototype.hasOwnProperty, Ux = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Kf = {}, qf = {};
function Gx(t5) {
  return zh.call(qf, t5) ? true : zh.call(Kf, t5) ? false : Ux.test(t5) ? qf[t5] = true : (Kf[t5] = true, false);
}
function zx(t5, e, r, n) {
  if (r !== null && r.type === 0) return false;
  switch (typeof e) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return n ? false : r !== null ? !r.acceptsBooleans : (t5 = t5.toLowerCase().slice(0, 5), t5 !== "data-" && t5 !== "aria-");
    default:
      return false;
  }
}
function Hx(t5, e, r, n) {
  if (e === null || typeof e > "u" || zx(t5, e, r, n)) return true;
  if (n) return false;
  if (r !== null) switch (r.type) {
    case 3:
      return !e;
    case 4:
      return e === false;
    case 5:
      return isNaN(e);
    case 6:
      return isNaN(e) || 1 > e;
  }
  return false;
}
function at(t5, e, r, n, i, s, o) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = t5, this.type = e, this.sanitizeURL = s, this.removeEmptyString = o;
}
var Ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t5) {
  Ke[t5] = new at(t5, 0, false, t5, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t5) {
  var e = t5[0];
  Ke[e] = new at(e, 1, false, t5[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t5) {
  Ke[t5] = new at(t5, 2, false, t5.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t5) {
  Ke[t5] = new at(t5, 2, false, t5, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t5) {
  Ke[t5] = new at(t5, 3, false, t5.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(t5) {
  Ke[t5] = new at(t5, 3, true, t5, null, false, false);
});
["capture", "download"].forEach(function(t5) {
  Ke[t5] = new at(t5, 4, false, t5, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(t5) {
  Ke[t5] = new at(t5, 6, false, t5, null, false, false);
});
["rowSpan", "start"].forEach(function(t5) {
  Ke[t5] = new at(t5, 5, false, t5.toLowerCase(), null, false, false);
});
var zd = /[\-:]([a-z])/g;
function Hd(t5) {
  return t5[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t5) {
  var e = t5.replace(zd, Hd);
  Ke[e] = new at(e, 1, false, t5, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t5) {
  var e = t5.replace(zd, Hd);
  Ke[e] = new at(e, 1, false, t5, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(t5) {
  var e = t5.replace(zd, Hd);
  Ke[e] = new at(e, 1, false, t5, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(t5) {
  Ke[t5] = new at(t5, 1, false, t5.toLowerCase(), null, false, false);
});
Ke.xlinkHref = new at("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(t5) {
  Ke[t5] = new at(t5, 1, false, t5.toLowerCase(), null, true, true);
});
function jd(t5, e, r, n) {
  var i = Ke.hasOwnProperty(e) ? Ke[e] : null;
  (i !== null ? i.type !== 0 : n || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Hx(e, r, i, n) && (r = null), n || i === null ? Gx(e) && (r === null ? t5.removeAttribute(e) : t5.setAttribute(e, "" + r)) : i.mustUseProperty ? t5[i.propertyName] = r === null ? i.type === 3 ? false : "" : r : (e = i.attributeName, n = i.attributeNamespace, r === null ? t5.removeAttribute(e) : (i = i.type, r = i === 3 || i === 4 && r === true ? "" : "" + r, n ? t5.setAttributeNS(n, e, r) : t5.setAttribute(e, r))));
}
var Br = Lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Bo = Symbol.for("react.element"), fi = Symbol.for("react.portal"), pi = Symbol.for("react.fragment"), Vd = Symbol.for("react.strict_mode"), Hh = Symbol.for("react.profiler"), vy = Symbol.for("react.provider"), _y = Symbol.for("react.context"), $d = Symbol.for("react.forward_ref"), jh = Symbol.for("react.suspense"), Vh = Symbol.for("react.suspense_list"), Xd = Symbol.for("react.memo"), zr = Symbol.for("react.lazy"), xy = Symbol.for("react.offscreen"), Qf = Symbol.iterator;
function os(t5) {
  return t5 === null || typeof t5 != "object" ? null : (t5 = Qf && t5[Qf] || t5["@@iterator"], typeof t5 == "function" ? t5 : null);
}
var Ae = Object.assign, vu;
function ws(t5) {
  if (vu === void 0) try {
    throw Error();
  } catch (r) {
    var e = r.stack.trim().match(/\n( *(at )?)/);
    vu = e && e[1] || "";
  }
  return `
` + vu + t5;
}
var _u = false;
function xu(t5, e) {
  if (!t5 || _u) return "";
  _u = true;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e) if (e = function() {
      throw Error();
    }, Object.defineProperty(e.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(e, []);
      } catch (u) {
        var n = u;
      }
      Reflect.construct(t5, [], e);
    } else {
      try {
        e.call();
      } catch (u) {
        n = u;
      }
      t5.call(e.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      t5();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (var i = u.stack.split(`
`), s = n.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; ) a--;
      for (; 1 <= o && 0 <= a; o--, a--) if (i[o] !== s[a]) {
        if (o !== 1 || a !== 1) do
          if (o--, a--, 0 > a || i[o] !== s[a]) {
            var l = `
` + i[o].replace(" at new ", " at ");
            return t5.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", t5.displayName)), l;
          }
        while (1 <= o && 0 <= a);
        break;
      }
    }
  } finally {
    _u = false, Error.prepareStackTrace = r;
  }
  return (t5 = t5 ? t5.displayName || t5.name : "") ? ws(t5) : "";
}
function jx(t5) {
  switch (t5.tag) {
    case 5:
      return ws(t5.type);
    case 16:
      return ws("Lazy");
    case 13:
      return ws("Suspense");
    case 19:
      return ws("SuspenseList");
    case 0:
    case 2:
    case 15:
      return t5 = xu(t5.type, false), t5;
    case 11:
      return t5 = xu(t5.type.render, false), t5;
    case 1:
      return t5 = xu(t5.type, true), t5;
    default:
      return "";
  }
}
function $h(t5) {
  if (t5 == null) return null;
  if (typeof t5 == "function") return t5.displayName || t5.name || null;
  if (typeof t5 == "string") return t5;
  switch (t5) {
    case pi:
      return "Fragment";
    case fi:
      return "Portal";
    case Hh:
      return "Profiler";
    case Vd:
      return "StrictMode";
    case jh:
      return "Suspense";
    case Vh:
      return "SuspenseList";
  }
  if (typeof t5 == "object") switch (t5.$$typeof) {
    case _y:
      return (t5.displayName || "Context") + ".Consumer";
    case vy:
      return (t5._context.displayName || "Context") + ".Provider";
    case $d:
      var e = t5.render;
      return t5 = t5.displayName, t5 || (t5 = e.displayName || e.name || "", t5 = t5 !== "" ? "ForwardRef(" + t5 + ")" : "ForwardRef"), t5;
    case Xd:
      return e = t5.displayName || null, e !== null ? e : $h(t5.type) || "Memo";
    case zr:
      e = t5._payload, t5 = t5._init;
      try {
        return $h(t5(e));
      } catch {
      }
  }
  return null;
}
function Vx(t5) {
  var e = t5.type;
  switch (t5.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return t5 = e.render, t5 = t5.displayName || t5.name || "", e.displayName || (t5 !== "" ? "ForwardRef(" + t5 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return $h(e);
    case 8:
      return e === Vd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function ln(t5) {
  switch (typeof t5) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t5;
    case "object":
      return t5;
    default:
      return "";
  }
}
function wy(t5) {
  var e = t5.type;
  return (t5 = t5.nodeName) && t5.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function $x(t5) {
  var e = wy(t5) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(t5.constructor.prototype, e), n = "" + t5[e];
  if (!t5.hasOwnProperty(e) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var i = r.get, s = r.set;
    return Object.defineProperty(t5, e, { configurable: true, get: function() {
      return i.call(this);
    }, set: function(o) {
      n = "" + o, s.call(this, o);
    } }), Object.defineProperty(t5, e, { enumerable: r.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(o) {
      n = "" + o;
    }, stopTracking: function() {
      t5._valueTracker = null, delete t5[e];
    } };
  }
}
function No(t5) {
  t5._valueTracker || (t5._valueTracker = $x(t5));
}
function Ey(t5) {
  if (!t5) return false;
  var e = t5._valueTracker;
  if (!e) return true;
  var r = e.getValue(), n = "";
  return t5 && (n = wy(t5) ? t5.checked ? "true" : "false" : t5.value), t5 = n, t5 !== r ? (e.setValue(t5), true) : false;
}
function Ka(t5) {
  if (t5 = t5 || (typeof document < "u" ? document : void 0), typeof t5 > "u") return null;
  try {
    return t5.activeElement || t5.body;
  } catch {
    return t5.body;
  }
}
function Xh(t5, e) {
  var r = e.checked;
  return Ae({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? t5._wrapperState.initialChecked });
}
function Jf(t5, e) {
  var r = e.defaultValue == null ? "" : e.defaultValue, n = e.checked != null ? e.checked : e.defaultChecked;
  r = ln(e.value != null ? e.value : r), t5._wrapperState = { initialChecked: n, initialValue: r, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function Sy(t5, e) {
  e = e.checked, e != null && jd(t5, "checked", e, false);
}
function Wh(t5, e) {
  Sy(t5, e);
  var r = ln(e.value), n = e.type;
  if (r != null) n === "number" ? (r === 0 && t5.value === "" || t5.value != r) && (t5.value = "" + r) : t5.value !== "" + r && (t5.value = "" + r);
  else if (n === "submit" || n === "reset") {
    t5.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? Yh(t5, e.type, r) : e.hasOwnProperty("defaultValue") && Yh(t5, e.type, ln(e.defaultValue)), e.checked == null && e.defaultChecked != null && (t5.defaultChecked = !!e.defaultChecked);
}
function ep(t5, e, r) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var n = e.type;
    if (!(n !== "submit" && n !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + t5._wrapperState.initialValue, r || e === t5.value || (t5.value = e), t5.defaultValue = e;
  }
  r = t5.name, r !== "" && (t5.name = ""), t5.defaultChecked = !!t5._wrapperState.initialChecked, r !== "" && (t5.name = r);
}
function Yh(t5, e, r) {
  (e !== "number" || Ka(t5.ownerDocument) !== t5) && (r == null ? t5.defaultValue = "" + t5._wrapperState.initialValue : t5.defaultValue !== "" + r && (t5.defaultValue = "" + r));
}
var Es = Array.isArray;
function Ii(t5, e, r, n) {
  if (t5 = t5.options, e) {
    e = {};
    for (var i = 0; i < r.length; i++) e["$" + r[i]] = true;
    for (r = 0; r < t5.length; r++) i = e.hasOwnProperty("$" + t5[r].value), t5[r].selected !== i && (t5[r].selected = i), i && n && (t5[r].defaultSelected = true);
  } else {
    for (r = "" + ln(r), e = null, i = 0; i < t5.length; i++) {
      if (t5[i].value === r) {
        t5[i].selected = true, n && (t5[i].defaultSelected = true);
        return;
      }
      e !== null || t5[i].disabled || (e = t5[i]);
    }
    e !== null && (e.selected = true);
  }
}
function Zh(t5, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(F(91));
  return Ae({}, e, { value: void 0, defaultValue: void 0, children: "" + t5._wrapperState.initialValue });
}
function tp(t5, e) {
  var r = e.value;
  if (r == null) {
    if (r = e.children, e = e.defaultValue, r != null) {
      if (e != null) throw Error(F(92));
      if (Es(r)) {
        if (1 < r.length) throw Error(F(93));
        r = r[0];
      }
      e = r;
    }
    e == null && (e = ""), r = e;
  }
  t5._wrapperState = { initialValue: ln(r) };
}
function Ty(t5, e) {
  var r = ln(e.value), n = ln(e.defaultValue);
  r != null && (r = "" + r, r !== t5.value && (t5.value = r), e.defaultValue == null && t5.defaultValue !== r && (t5.defaultValue = r)), n != null && (t5.defaultValue = "" + n);
}
function rp(t5) {
  var e = t5.textContent;
  e === t5._wrapperState.initialValue && e !== "" && e !== null && (t5.value = e);
}
function by(t5) {
  switch (t5) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Kh(t5, e) {
  return t5 == null || t5 === "http://www.w3.org/1999/xhtml" ? by(e) : t5 === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t5;
}
var Oo, Ay = function(t5) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, r, n, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return t5(e, r, n, i);
    });
  } : t5;
}(function(t5, e) {
  if (t5.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t5) t5.innerHTML = e;
  else {
    for (Oo = Oo || document.createElement("div"), Oo.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Oo.firstChild; t5.firstChild; ) t5.removeChild(t5.firstChild);
    for (; e.firstChild; ) t5.appendChild(e.firstChild);
  }
});
function qs(t5, e) {
  if (e) {
    var r = t5.firstChild;
    if (r && r === t5.lastChild && r.nodeType === 3) {
      r.nodeValue = e;
      return;
    }
  }
  t5.textContent = e;
}
var Ds = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Xx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ds).forEach(function(t5) {
  Xx.forEach(function(e) {
    e = e + t5.charAt(0).toUpperCase() + t5.substring(1), Ds[e] = Ds[t5];
  });
});
function Cy(t5, e, r) {
  return e == null || typeof e == "boolean" || e === "" ? "" : r || typeof e != "number" || e === 0 || Ds.hasOwnProperty(t5) && Ds[t5] ? ("" + e).trim() : e + "px";
}
function Iy(t5, e) {
  t5 = t5.style;
  for (var r in e) if (e.hasOwnProperty(r)) {
    var n = r.indexOf("--") === 0, i = Cy(r, e[r], n);
    r === "float" && (r = "cssFloat"), n ? t5.setProperty(r, i) : t5[r] = i;
  }
}
var Wx = Ae({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function qh(t5, e) {
  if (e) {
    if (Wx[t5] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(F(137, t5));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(F(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(F(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(F(62));
  }
}
function Qh(t5, e) {
  if (t5.indexOf("-") === -1) return typeof e.is == "string";
  switch (t5) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var Jh = null;
function Wd(t5) {
  return t5 = t5.target || t5.srcElement || window, t5.correspondingUseElement && (t5 = t5.correspondingUseElement), t5.nodeType === 3 ? t5.parentNode : t5;
}
var ec = null, Ri = null, Pi = null;
function np(t5) {
  if (t5 = To(t5)) {
    if (typeof ec != "function") throw Error(F(280));
    var e = t5.stateNode;
    e && (e = Xl(e), ec(t5.stateNode, t5.type, e));
  }
}
function Ry(t5) {
  Ri ? Pi ? Pi.push(t5) : Pi = [t5] : Ri = t5;
}
function Py() {
  if (Ri) {
    var t5 = Ri, e = Pi;
    if (Pi = Ri = null, np(t5), e) for (t5 = 0; t5 < e.length; t5++) np(e[t5]);
  }
}
function My(t5, e) {
  return t5(e);
}
function ky() {
}
var wu = false;
function Fy(t5, e, r) {
  if (wu) return t5(e, r);
  wu = true;
  try {
    return My(t5, e, r);
  } finally {
    wu = false, (Ri !== null || Pi !== null) && (ky(), Py());
  }
}
function Qs(t5, e) {
  var r = t5.stateNode;
  if (r === null) return null;
  var n = Xl(r);
  if (n === null) return null;
  r = n[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) || (t5 = t5.type, n = !(t5 === "button" || t5 === "input" || t5 === "select" || t5 === "textarea")), t5 = !n;
      break e;
    default:
      t5 = false;
  }
  if (t5) return null;
  if (r && typeof r != "function") throw Error(F(231, e, typeof r));
  return r;
}
var tc = false;
if (Ir) try {
  var as = {};
  Object.defineProperty(as, "passive", { get: function() {
    tc = true;
  } }), window.addEventListener("test", as, as), window.removeEventListener("test", as, as);
} catch {
  tc = false;
}
function Yx(t5, e, r, n, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(r, u);
  } catch (h) {
    this.onError(h);
  }
}
var Bs = false, qa = null, Qa = false, rc = null, Zx = { onError: function(t5) {
  Bs = true, qa = t5;
} };
function Kx(t5, e, r, n, i, s, o, a, l) {
  Bs = false, qa = null, Yx.apply(Zx, arguments);
}
function qx(t5, e, r, n, i, s, o, a, l) {
  if (Kx.apply(this, arguments), Bs) {
    if (Bs) {
      var u = qa;
      Bs = false, qa = null;
    } else throw Error(F(198));
    Qa || (Qa = true, rc = u);
  }
}
function Kn(t5) {
  var e = t5, r = t5;
  if (t5.alternate) for (; e.return; ) e = e.return;
  else {
    t5 = e;
    do
      e = t5, e.flags & 4098 && (r = e.return), t5 = e.return;
    while (t5);
  }
  return e.tag === 3 ? r : null;
}
function Dy(t5) {
  if (t5.tag === 13) {
    var e = t5.memoizedState;
    if (e === null && (t5 = t5.alternate, t5 !== null && (e = t5.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function ip(t5) {
  if (Kn(t5) !== t5) throw Error(F(188));
}
function Qx(t5) {
  var e = t5.alternate;
  if (!e) {
    if (e = Kn(t5), e === null) throw Error(F(188));
    return e !== t5 ? null : t5;
  }
  for (var r = t5, n = e; ; ) {
    var i = r.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (n = i.return, n !== null) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === r) return ip(i), t5;
        if (s === n) return ip(i), e;
        s = s.sibling;
      }
      throw Error(F(188));
    }
    if (r.return !== n.return) r = i, n = s;
    else {
      for (var o = false, a = i.child; a; ) {
        if (a === r) {
          o = true, r = i, n = s;
          break;
        }
        if (a === n) {
          o = true, n = i, r = s;
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === r) {
            o = true, r = s, n = i;
            break;
          }
          if (a === n) {
            o = true, n = s, r = i;
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(F(189));
      }
    }
    if (r.alternate !== n) throw Error(F(190));
  }
  if (r.tag !== 3) throw Error(F(188));
  return r.stateNode.current === r ? t5 : e;
}
function By(t5) {
  return t5 = Qx(t5), t5 !== null ? Ny(t5) : null;
}
function Ny(t5) {
  if (t5.tag === 5 || t5.tag === 6) return t5;
  for (t5 = t5.child; t5 !== null; ) {
    var e = Ny(t5);
    if (e !== null) return e;
    t5 = t5.sibling;
  }
  return null;
}
var Oy = _t.unstable_scheduleCallback, sp = _t.unstable_cancelCallback, Jx = _t.unstable_shouldYield, ew = _t.unstable_requestPaint, Fe = _t.unstable_now, tw = _t.unstable_getCurrentPriorityLevel, Yd = _t.unstable_ImmediatePriority, Ly = _t.unstable_UserBlockingPriority, Ja = _t.unstable_NormalPriority, rw = _t.unstable_LowPriority, Uy = _t.unstable_IdlePriority, Hl = null, ur = null;
function nw(t5) {
  if (ur && typeof ur.onCommitFiberRoot == "function") try {
    ur.onCommitFiberRoot(Hl, t5, void 0, (t5.current.flags & 128) === 128);
  } catch {
  }
}
var jt = Math.clz32 ? Math.clz32 : ow, iw = Math.log, sw = Math.LN2;
function ow(t5) {
  return t5 >>>= 0, t5 === 0 ? 32 : 31 - (iw(t5) / sw | 0) | 0;
}
var Lo = 64, Uo = 4194304;
function Ss(t5) {
  switch (t5 & -t5) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t5 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t5 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t5;
  }
}
function el(t5, e) {
  var r = t5.pendingLanes;
  if (r === 0) return 0;
  var n = 0, i = t5.suspendedLanes, s = t5.pingedLanes, o = r & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? n = Ss(a) : (s &= o, s !== 0 && (n = Ss(s)));
  } else o = r & ~i, o !== 0 ? n = Ss(o) : s !== 0 && (n = Ss(s));
  if (n === 0) return 0;
  if (e !== 0 && e !== n && !(e & i) && (i = n & -n, s = e & -e, i >= s || i === 16 && (s & 4194240) !== 0)) return e;
  if (n & 4 && (n |= r & 16), e = t5.entangledLanes, e !== 0) for (t5 = t5.entanglements, e &= n; 0 < e; ) r = 31 - jt(e), i = 1 << r, n |= t5[r], e &= ~i;
  return n;
}
function aw(t5, e) {
  switch (t5) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function lw(t5, e) {
  for (var r = t5.suspendedLanes, n = t5.pingedLanes, i = t5.expirationTimes, s = t5.pendingLanes; 0 < s; ) {
    var o = 31 - jt(s), a = 1 << o, l = i[o];
    l === -1 ? (!(a & r) || a & n) && (i[o] = aw(a, e)) : l <= e && (t5.expiredLanes |= a), s &= ~a;
  }
}
function nc(t5) {
  return t5 = t5.pendingLanes & -1073741825, t5 !== 0 ? t5 : t5 & 1073741824 ? 1073741824 : 0;
}
function Gy() {
  var t5 = Lo;
  return Lo <<= 1, !(Lo & 4194240) && (Lo = 64), t5;
}
function Eu(t5) {
  for (var e = [], r = 0; 31 > r; r++) e.push(t5);
  return e;
}
function Eo(t5, e, r) {
  t5.pendingLanes |= e, e !== 536870912 && (t5.suspendedLanes = 0, t5.pingedLanes = 0), t5 = t5.eventTimes, e = 31 - jt(e), t5[e] = r;
}
function uw(t5, e) {
  var r = t5.pendingLanes & ~e;
  t5.pendingLanes = e, t5.suspendedLanes = 0, t5.pingedLanes = 0, t5.expiredLanes &= e, t5.mutableReadLanes &= e, t5.entangledLanes &= e, e = t5.entanglements;
  var n = t5.eventTimes;
  for (t5 = t5.expirationTimes; 0 < r; ) {
    var i = 31 - jt(r), s = 1 << i;
    e[i] = 0, n[i] = -1, t5[i] = -1, r &= ~s;
  }
}
function Zd(t5, e) {
  var r = t5.entangledLanes |= e;
  for (t5 = t5.entanglements; r; ) {
    var n = 31 - jt(r), i = 1 << n;
    i & e | t5[n] & e && (t5[n] |= e), r &= ~i;
  }
}
var de = 0;
function zy(t5) {
  return t5 &= -t5, 1 < t5 ? 4 < t5 ? t5 & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Hy, Kd, jy, Vy, $y, ic = false, Go = [], Qr = null, Jr = null, en = null, Js = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ new Map(), Vr = [], hw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function op(t5, e) {
  switch (t5) {
    case "focusin":
    case "focusout":
      Qr = null;
      break;
    case "dragenter":
    case "dragleave":
      Jr = null;
      break;
    case "mouseover":
    case "mouseout":
      en = null;
      break;
    case "pointerover":
    case "pointerout":
      Js.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      eo.delete(e.pointerId);
  }
}
function ls(t5, e, r, n, i, s) {
  return t5 === null || t5.nativeEvent !== s ? (t5 = { blockedOn: e, domEventName: r, eventSystemFlags: n, nativeEvent: s, targetContainers: [i] }, e !== null && (e = To(e), e !== null && Kd(e)), t5) : (t5.eventSystemFlags |= n, e = t5.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), t5);
}
function cw(t5, e, r, n, i) {
  switch (e) {
    case "focusin":
      return Qr = ls(Qr, t5, e, r, n, i), true;
    case "dragenter":
      return Jr = ls(Jr, t5, e, r, n, i), true;
    case "mouseover":
      return en = ls(en, t5, e, r, n, i), true;
    case "pointerover":
      var s = i.pointerId;
      return Js.set(s, ls(Js.get(s) || null, t5, e, r, n, i)), true;
    case "gotpointercapture":
      return s = i.pointerId, eo.set(s, ls(eo.get(s) || null, t5, e, r, n, i)), true;
  }
  return false;
}
function Xy(t5) {
  var e = kn(t5.target);
  if (e !== null) {
    var r = Kn(e);
    if (r !== null) {
      if (e = r.tag, e === 13) {
        if (e = Dy(r), e !== null) {
          t5.blockedOn = e, $y(t5.priority, function() {
            jy(r);
          });
          return;
        }
      } else if (e === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        t5.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t5.blockedOn = null;
}
function Ia(t5) {
  if (t5.blockedOn !== null) return false;
  for (var e = t5.targetContainers; 0 < e.length; ) {
    var r = sc(t5.domEventName, t5.eventSystemFlags, e[0], t5.nativeEvent);
    if (r === null) {
      r = t5.nativeEvent;
      var n = new r.constructor(r.type, r);
      Jh = n, r.target.dispatchEvent(n), Jh = null;
    } else return e = To(r), e !== null && Kd(e), t5.blockedOn = r, false;
    e.shift();
  }
  return true;
}
function ap(t5, e, r) {
  Ia(t5) && r.delete(e);
}
function dw() {
  ic = false, Qr !== null && Ia(Qr) && (Qr = null), Jr !== null && Ia(Jr) && (Jr = null), en !== null && Ia(en) && (en = null), Js.forEach(ap), eo.forEach(ap);
}
function us(t5, e) {
  t5.blockedOn === e && (t5.blockedOn = null, ic || (ic = true, _t.unstable_scheduleCallback(_t.unstable_NormalPriority, dw)));
}
function to(t5) {
  function e(i) {
    return us(i, t5);
  }
  if (0 < Go.length) {
    us(Go[0], t5);
    for (var r = 1; r < Go.length; r++) {
      var n = Go[r];
      n.blockedOn === t5 && (n.blockedOn = null);
    }
  }
  for (Qr !== null && us(Qr, t5), Jr !== null && us(Jr, t5), en !== null && us(en, t5), Js.forEach(e), eo.forEach(e), r = 0; r < Vr.length; r++) n = Vr[r], n.blockedOn === t5 && (n.blockedOn = null);
  for (; 0 < Vr.length && (r = Vr[0], r.blockedOn === null); ) Xy(r), r.blockedOn === null && Vr.shift();
}
var Mi = Br.ReactCurrentBatchConfig, tl = true;
function fw(t5, e, r, n) {
  var i = de, s = Mi.transition;
  Mi.transition = null;
  try {
    de = 1, qd(t5, e, r, n);
  } finally {
    de = i, Mi.transition = s;
  }
}
function pw(t5, e, r, n) {
  var i = de, s = Mi.transition;
  Mi.transition = null;
  try {
    de = 4, qd(t5, e, r, n);
  } finally {
    de = i, Mi.transition = s;
  }
}
function qd(t5, e, r, n) {
  if (tl) {
    var i = sc(t5, e, r, n);
    if (i === null) ku(t5, e, n, rl, r), op(t5, n);
    else if (cw(i, t5, e, r, n)) n.stopPropagation();
    else if (op(t5, n), e & 4 && -1 < hw.indexOf(t5)) {
      for (; i !== null; ) {
        var s = To(i);
        if (s !== null && Hy(s), s = sc(t5, e, r, n), s === null && ku(t5, e, n, rl, r), s === i) break;
        i = s;
      }
      i !== null && n.stopPropagation();
    } else ku(t5, e, n, null, r);
  }
}
var rl = null;
function sc(t5, e, r, n) {
  if (rl = null, t5 = Wd(n), t5 = kn(t5), t5 !== null) if (e = Kn(t5), e === null) t5 = null;
  else if (r = e.tag, r === 13) {
    if (t5 = Dy(e), t5 !== null) return t5;
    t5 = null;
  } else if (r === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    t5 = null;
  } else e !== t5 && (t5 = null);
  return rl = t5, null;
}
function Wy(t5) {
  switch (t5) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (tw()) {
        case Yd:
          return 1;
        case Ly:
          return 4;
        case Ja:
        case rw:
          return 16;
        case Uy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wr = null, Qd = null, Ra = null;
function Yy() {
  if (Ra) return Ra;
  var t5, e = Qd, r = e.length, n, i = "value" in Wr ? Wr.value : Wr.textContent, s = i.length;
  for (t5 = 0; t5 < r && e[t5] === i[t5]; t5++) ;
  var o = r - t5;
  for (n = 1; n <= o && e[r - n] === i[s - n]; n++) ;
  return Ra = i.slice(t5, 1 < n ? 1 - n : void 0);
}
function Pa(t5) {
  var e = t5.keyCode;
  return "charCode" in t5 ? (t5 = t5.charCode, t5 === 0 && e === 13 && (t5 = 13)) : t5 = e, t5 === 10 && (t5 = 13), 32 <= t5 || t5 === 13 ? t5 : 0;
}
function zo() {
  return true;
}
function lp() {
  return false;
}
function wt(t5) {
  function e(r, n, i, s, o) {
    this._reactName = r, this._targetInst = i, this.type = n, this.nativeEvent = s, this.target = o, this.currentTarget = null;
    for (var a in t5) t5.hasOwnProperty(a) && (r = t5[a], this[a] = r ? r(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false) ? zo : lp, this.isPropagationStopped = lp, this;
  }
  return Ae(e.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var r = this.nativeEvent;
    r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = false), this.isDefaultPrevented = zo);
  }, stopPropagation: function() {
    var r = this.nativeEvent;
    r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = true), this.isPropagationStopped = zo);
  }, persist: function() {
  }, isPersistent: zo }), e;
}
var es = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t5) {
  return t5.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Jd = wt(es), So = Ae({}, es, { view: 0, detail: 0 }), mw = wt(So), Su, Tu, hs, jl = Ae({}, So, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ef, button: 0, buttons: 0, relatedTarget: function(t5) {
  return t5.relatedTarget === void 0 ? t5.fromElement === t5.srcElement ? t5.toElement : t5.fromElement : t5.relatedTarget;
}, movementX: function(t5) {
  return "movementX" in t5 ? t5.movementX : (t5 !== hs && (hs && t5.type === "mousemove" ? (Su = t5.screenX - hs.screenX, Tu = t5.screenY - hs.screenY) : Tu = Su = 0, hs = t5), Su);
}, movementY: function(t5) {
  return "movementY" in t5 ? t5.movementY : Tu;
} }), up = wt(jl), gw = Ae({}, jl, { dataTransfer: 0 }), yw = wt(gw), vw = Ae({}, So, { relatedTarget: 0 }), bu = wt(vw), _w = Ae({}, es, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xw = wt(_w), ww = Ae({}, es, { clipboardData: function(t5) {
  return "clipboardData" in t5 ? t5.clipboardData : window.clipboardData;
} }), Ew = wt(ww), Sw = Ae({}, es, { data: 0 }), hp = wt(Sw), Tw = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, bw = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Aw = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Cw(t5) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t5) : (t5 = Aw[t5]) ? !!e[t5] : false;
}
function ef() {
  return Cw;
}
var Iw = Ae({}, So, { key: function(t5) {
  if (t5.key) {
    var e = Tw[t5.key] || t5.key;
    if (e !== "Unidentified") return e;
  }
  return t5.type === "keypress" ? (t5 = Pa(t5), t5 === 13 ? "Enter" : String.fromCharCode(t5)) : t5.type === "keydown" || t5.type === "keyup" ? bw[t5.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ef, charCode: function(t5) {
  return t5.type === "keypress" ? Pa(t5) : 0;
}, keyCode: function(t5) {
  return t5.type === "keydown" || t5.type === "keyup" ? t5.keyCode : 0;
}, which: function(t5) {
  return t5.type === "keypress" ? Pa(t5) : t5.type === "keydown" || t5.type === "keyup" ? t5.keyCode : 0;
} }), Rw = wt(Iw), Pw = Ae({}, jl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cp = wt(Pw), Mw = Ae({}, So, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ef }), kw = wt(Mw), Fw = Ae({}, es, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Dw = wt(Fw), Bw = Ae({}, jl, { deltaX: function(t5) {
  return "deltaX" in t5 ? t5.deltaX : "wheelDeltaX" in t5 ? -t5.wheelDeltaX : 0;
}, deltaY: function(t5) {
  return "deltaY" in t5 ? t5.deltaY : "wheelDeltaY" in t5 ? -t5.wheelDeltaY : "wheelDelta" in t5 ? -t5.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), Nw = wt(Bw), Ow = [9, 13, 27, 32], tf = Ir && "CompositionEvent" in window, Ns = null;
Ir && "documentMode" in document && (Ns = document.documentMode);
var Lw = Ir && "TextEvent" in window && !Ns, Zy = Ir && (!tf || Ns && 8 < Ns && 11 >= Ns), dp = " ", fp = false;
function Ky(t5, e) {
  switch (t5) {
    case "keyup":
      return Ow.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function qy(t5) {
  return t5 = t5.detail, typeof t5 == "object" && "data" in t5 ? t5.data : null;
}
var mi = false;
function Uw(t5, e) {
  switch (t5) {
    case "compositionend":
      return qy(e);
    case "keypress":
      return e.which !== 32 ? null : (fp = true, dp);
    case "textInput":
      return t5 = e.data, t5 === dp && fp ? null : t5;
    default:
      return null;
  }
}
function Gw(t5, e) {
  if (mi) return t5 === "compositionend" || !tf && Ky(t5, e) ? (t5 = Yy(), Ra = Qd = Wr = null, mi = false, t5) : null;
  switch (t5) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Zy && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var zw = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function pp(t5) {
  var e = t5 && t5.nodeName && t5.nodeName.toLowerCase();
  return e === "input" ? !!zw[t5.type] : e === "textarea";
}
function Qy(t5, e, r, n) {
  Ry(n), e = nl(e, "onChange"), 0 < e.length && (r = new Jd("onChange", "change", null, r, n), t5.push({ event: r, listeners: e }));
}
var Os = null, ro = null;
function Hw(t5) {
  uv(t5, 0);
}
function Vl(t5) {
  var e = vi(t5);
  if (Ey(e)) return t5;
}
function jw(t5, e) {
  if (t5 === "change") return e;
}
var Jy = false;
if (Ir) {
  var Au;
  if (Ir) {
    var Cu = "oninput" in document;
    if (!Cu) {
      var mp = document.createElement("div");
      mp.setAttribute("oninput", "return;"), Cu = typeof mp.oninput == "function";
    }
    Au = Cu;
  } else Au = false;
  Jy = Au && (!document.documentMode || 9 < document.documentMode);
}
function gp() {
  Os && (Os.detachEvent("onpropertychange", ev), ro = Os = null);
}
function ev(t5) {
  if (t5.propertyName === "value" && Vl(ro)) {
    var e = [];
    Qy(e, ro, t5, Wd(t5)), Fy(Hw, e);
  }
}
function Vw(t5, e, r) {
  t5 === "focusin" ? (gp(), Os = e, ro = r, Os.attachEvent("onpropertychange", ev)) : t5 === "focusout" && gp();
}
function $w(t5) {
  if (t5 === "selectionchange" || t5 === "keyup" || t5 === "keydown") return Vl(ro);
}
function Xw(t5, e) {
  if (t5 === "click") return Vl(e);
}
function Ww(t5, e) {
  if (t5 === "input" || t5 === "change") return Vl(e);
}
function Yw(t5, e) {
  return t5 === e && (t5 !== 0 || 1 / t5 === 1 / e) || t5 !== t5 && e !== e;
}
var Wt = typeof Object.is == "function" ? Object.is : Yw;
function no(t5, e) {
  if (Wt(t5, e)) return true;
  if (typeof t5 != "object" || t5 === null || typeof e != "object" || e === null) return false;
  var r = Object.keys(t5), n = Object.keys(e);
  if (r.length !== n.length) return false;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!zh.call(e, i) || !Wt(t5[i], e[i])) return false;
  }
  return true;
}
function yp(t5) {
  for (; t5 && t5.firstChild; ) t5 = t5.firstChild;
  return t5;
}
function vp(t5, e) {
  var r = yp(t5);
  t5 = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (n = t5 + r.textContent.length, t5 <= e && n >= e) return { node: r, offset: e - t5 };
      t5 = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = yp(r);
  }
}
function tv(t5, e) {
  return t5 && e ? t5 === e ? true : t5 && t5.nodeType === 3 ? false : e && e.nodeType === 3 ? tv(t5, e.parentNode) : "contains" in t5 ? t5.contains(e) : t5.compareDocumentPosition ? !!(t5.compareDocumentPosition(e) & 16) : false : false;
}
function rv() {
  for (var t5 = window, e = Ka(); e instanceof t5.HTMLIFrameElement; ) {
    try {
      var r = typeof e.contentWindow.location.href == "string";
    } catch {
      r = false;
    }
    if (r) t5 = e.contentWindow;
    else break;
    e = Ka(t5.document);
  }
  return e;
}
function rf(t5) {
  var e = t5 && t5.nodeName && t5.nodeName.toLowerCase();
  return e && (e === "input" && (t5.type === "text" || t5.type === "search" || t5.type === "tel" || t5.type === "url" || t5.type === "password") || e === "textarea" || t5.contentEditable === "true");
}
function Zw(t5) {
  var e = rv(), r = t5.focusedElem, n = t5.selectionRange;
  if (e !== r && r && r.ownerDocument && tv(r.ownerDocument.documentElement, r)) {
    if (n !== null && rf(r)) {
      if (e = n.start, t5 = n.end, t5 === void 0 && (t5 = e), "selectionStart" in r) r.selectionStart = e, r.selectionEnd = Math.min(t5, r.value.length);
      else if (t5 = (e = r.ownerDocument || document) && e.defaultView || window, t5.getSelection) {
        t5 = t5.getSelection();
        var i = r.textContent.length, s = Math.min(n.start, i);
        n = n.end === void 0 ? s : Math.min(n.end, i), !t5.extend && s > n && (i = n, n = s, s = i), i = vp(r, s);
        var o = vp(r, n);
        i && o && (t5.rangeCount !== 1 || t5.anchorNode !== i.node || t5.anchorOffset !== i.offset || t5.focusNode !== o.node || t5.focusOffset !== o.offset) && (e = e.createRange(), e.setStart(i.node, i.offset), t5.removeAllRanges(), s > n ? (t5.addRange(e), t5.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), t5.addRange(e)));
      }
    }
    for (e = [], t5 = r; t5 = t5.parentNode; ) t5.nodeType === 1 && e.push({ element: t5, left: t5.scrollLeft, top: t5.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < e.length; r++) t5 = e[r], t5.element.scrollLeft = t5.left, t5.element.scrollTop = t5.top;
  }
}
var Kw = Ir && "documentMode" in document && 11 >= document.documentMode, gi = null, oc = null, Ls = null, ac = false;
function _p(t5, e, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  ac || gi == null || gi !== Ka(n) || (n = gi, "selectionStart" in n && rf(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Ls && no(Ls, n) || (Ls = n, n = nl(oc, "onSelect"), 0 < n.length && (e = new Jd("onSelect", "select", null, e, r), t5.push({ event: e, listeners: n }), e.target = gi)));
}
function Ho(t5, e) {
  var r = {};
  return r[t5.toLowerCase()] = e.toLowerCase(), r["Webkit" + t5] = "webkit" + e, r["Moz" + t5] = "moz" + e, r;
}
var yi = { animationend: Ho("Animation", "AnimationEnd"), animationiteration: Ho("Animation", "AnimationIteration"), animationstart: Ho("Animation", "AnimationStart"), transitionend: Ho("Transition", "TransitionEnd") }, Iu = {}, nv = {};
Ir && (nv = document.createElement("div").style, "AnimationEvent" in window || (delete yi.animationend.animation, delete yi.animationiteration.animation, delete yi.animationstart.animation), "TransitionEvent" in window || delete yi.transitionend.transition);
function $l(t5) {
  if (Iu[t5]) return Iu[t5];
  if (!yi[t5]) return t5;
  var e = yi[t5], r;
  for (r in e) if (e.hasOwnProperty(r) && r in nv) return Iu[t5] = e[r];
  return t5;
}
var iv = $l("animationend"), sv = $l("animationiteration"), ov = $l("animationstart"), av = $l("transitionend"), lv = /* @__PURE__ */ new Map(), xp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(t5, e) {
  lv.set(t5, e), Zn(e, [t5]);
}
for (var Ru = 0; Ru < xp.length; Ru++) {
  var Pu = xp[Ru], qw = Pu.toLowerCase(), Qw = Pu[0].toUpperCase() + Pu.slice(1);
  dn(qw, "on" + Qw);
}
dn(iv, "onAnimationEnd");
dn(sv, "onAnimationIteration");
dn(ov, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(av, "onTransitionEnd");
ji("onMouseEnter", ["mouseout", "mouseover"]);
ji("onMouseLeave", ["mouseout", "mouseover"]);
ji("onPointerEnter", ["pointerout", "pointerover"]);
ji("onPointerLeave", ["pointerout", "pointerover"]);
Zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));
function wp(t5, e, r) {
  var n = t5.type || "unknown-event";
  t5.currentTarget = r, qx(n, e, void 0, t5), t5.currentTarget = null;
}
function uv(t5, e) {
  e = (e & 4) !== 0;
  for (var r = 0; r < t5.length; r++) {
    var n = t5[r], i = n.event;
    n = n.listeners;
    e: {
      var s = void 0;
      if (e) for (var o = n.length - 1; 0 <= o; o--) {
        var a = n[o], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== s && i.isPropagationStopped()) break e;
        wp(i, a, u), s = l;
      }
      else for (o = 0; o < n.length; o++) {
        if (a = n[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped()) break e;
        wp(i, a, u), s = l;
      }
    }
  }
  if (Qa) throw t5 = rc, Qa = false, rc = null, t5;
}
function me(t5, e) {
  var r = e[dc];
  r === void 0 && (r = e[dc] = /* @__PURE__ */ new Set());
  var n = t5 + "__bubble";
  r.has(n) || (hv(e, t5, 2, false), r.add(n));
}
function Mu(t5, e, r) {
  var n = 0;
  e && (n |= 4), hv(r, t5, n, e);
}
var jo = "_reactListening" + Math.random().toString(36).slice(2);
function io(t5) {
  if (!t5[jo]) {
    t5[jo] = true, yy.forEach(function(r) {
      r !== "selectionchange" && (Jw.has(r) || Mu(r, false, t5), Mu(r, true, t5));
    });
    var e = t5.nodeType === 9 ? t5 : t5.ownerDocument;
    e === null || e[jo] || (e[jo] = true, Mu("selectionchange", false, e));
  }
}
function hv(t5, e, r, n) {
  switch (Wy(e)) {
    case 1:
      var i = fw;
      break;
    case 4:
      i = pw;
      break;
    default:
      i = qd;
  }
  r = i.bind(null, e, r, t5), i = void 0, !tc || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = true), n ? i !== void 0 ? t5.addEventListener(e, r, { capture: true, passive: i }) : t5.addEventListener(e, r, true) : i !== void 0 ? t5.addEventListener(e, r, { passive: i }) : t5.addEventListener(e, r, false);
}
function ku(t5, e, r, n, i) {
  var s = n;
  if (!(e & 1) && !(e & 2) && n !== null) e: for (; ; ) {
    if (n === null) return;
    var o = n.tag;
    if (o === 3 || o === 4) {
      var a = n.stateNode.containerInfo;
      if (a === i || a.nodeType === 8 && a.parentNode === i) break;
      if (o === 4) for (o = n.return; o !== null; ) {
        var l = o.tag;
        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
        o = o.return;
      }
      for (; a !== null; ) {
        if (o = kn(a), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          n = s = o;
          continue e;
        }
        a = a.parentNode;
      }
    }
    n = n.return;
  }
  Fy(function() {
    var u = s, h = Wd(r), c = [];
    e: {
      var d = lv.get(t5);
      if (d !== void 0) {
        var f = Jd, p = t5;
        switch (t5) {
          case "keypress":
            if (Pa(r) === 0) break e;
          case "keydown":
          case "keyup":
            f = Rw;
            break;
          case "focusin":
            p = "focus", f = bu;
            break;
          case "focusout":
            p = "blur", f = bu;
            break;
          case "beforeblur":
          case "afterblur":
            f = bu;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = up;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = yw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = kw;
            break;
          case iv:
          case sv:
          case ov:
            f = xw;
            break;
          case av:
            f = Dw;
            break;
          case "scroll":
            f = mw;
            break;
          case "wheel":
            f = Nw;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = Ew;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = cp;
        }
        var y = (e & 4) !== 0, _ = !y && t5 === "scroll", g = y ? d !== null ? d + "Capture" : null : d;
        y = [];
        for (var v = u, m; v !== null; ) {
          m = v;
          var x = m.stateNode;
          if (m.tag === 5 && x !== null && (m = x, g !== null && (x = Qs(v, g), x != null && y.push(so(v, x, m)))), _) break;
          v = v.return;
        }
        0 < y.length && (d = new f(d, p, null, r, h), c.push({ event: d, listeners: y }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (d = t5 === "mouseover" || t5 === "pointerover", f = t5 === "mouseout" || t5 === "pointerout", d && r !== Jh && (p = r.relatedTarget || r.fromElement) && (kn(p) || p[Rr])) break e;
        if ((f || d) && (d = h.window === h ? h : (d = h.ownerDocument) ? d.defaultView || d.parentWindow : window, f ? (p = r.relatedTarget || r.toElement, f = u, p = p ? kn(p) : null, p !== null && (_ = Kn(p), p !== _ || p.tag !== 5 && p.tag !== 6) && (p = null)) : (f = null, p = u), f !== p)) {
          if (y = up, x = "onMouseLeave", g = "onMouseEnter", v = "mouse", (t5 === "pointerout" || t5 === "pointerover") && (y = cp, x = "onPointerLeave", g = "onPointerEnter", v = "pointer"), _ = f == null ? d : vi(f), m = p == null ? d : vi(p), d = new y(x, v + "leave", f, r, h), d.target = _, d.relatedTarget = m, x = null, kn(h) === u && (y = new y(g, v + "enter", p, r, h), y.target = m, y.relatedTarget = _, x = y), _ = x, f && p) t: {
            for (y = f, g = p, v = 0, m = y; m; m = ti(m)) v++;
            for (m = 0, x = g; x; x = ti(x)) m++;
            for (; 0 < v - m; ) y = ti(y), v--;
            for (; 0 < m - v; ) g = ti(g), m--;
            for (; v--; ) {
              if (y === g || g !== null && y === g.alternate) break t;
              y = ti(y), g = ti(g);
            }
            y = null;
          }
          else y = null;
          f !== null && Ep(c, d, f, y, false), p !== null && _ !== null && Ep(c, _, p, y, true);
        }
      }
      e: {
        if (d = u ? vi(u) : window, f = d.nodeName && d.nodeName.toLowerCase(), f === "select" || f === "input" && d.type === "file") var w = jw;
        else if (pp(d)) if (Jy) w = Ww;
        else {
          w = $w;
          var T = Vw;
        }
        else (f = d.nodeName) && f.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (w = Xw);
        if (w && (w = w(t5, u))) {
          Qy(c, w, r, h);
          break e;
        }
        T && T(t5, d, u), t5 === "focusout" && (T = d._wrapperState) && T.controlled && d.type === "number" && Yh(d, "number", d.value);
      }
      switch (T = u ? vi(u) : window, t5) {
        case "focusin":
          (pp(T) || T.contentEditable === "true") && (gi = T, oc = u, Ls = null);
          break;
        case "focusout":
          Ls = oc = gi = null;
          break;
        case "mousedown":
          ac = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ac = false, _p(c, r, h);
          break;
        case "selectionchange":
          if (Kw) break;
        case "keydown":
        case "keyup":
          _p(c, r, h);
      }
      var S;
      if (tf) e: {
        switch (t5) {
          case "compositionstart":
            var E = "onCompositionStart";
            break e;
          case "compositionend":
            E = "onCompositionEnd";
            break e;
          case "compositionupdate":
            E = "onCompositionUpdate";
            break e;
        }
        E = void 0;
      }
      else mi ? Ky(t5, r) && (E = "onCompositionEnd") : t5 === "keydown" && r.keyCode === 229 && (E = "onCompositionStart");
      E && (Zy && r.locale !== "ko" && (mi || E !== "onCompositionStart" ? E === "onCompositionEnd" && mi && (S = Yy()) : (Wr = h, Qd = "value" in Wr ? Wr.value : Wr.textContent, mi = true)), T = nl(u, E), 0 < T.length && (E = new hp(E, t5, null, r, h), c.push({ event: E, listeners: T }), S ? E.data = S : (S = qy(r), S !== null && (E.data = S)))), (S = Lw ? Uw(t5, r) : Gw(t5, r)) && (u = nl(u, "onBeforeInput"), 0 < u.length && (h = new hp("onBeforeInput", "beforeinput", null, r, h), c.push({ event: h, listeners: u }), h.data = S));
    }
    uv(c, e);
  });
}
function so(t5, e, r) {
  return { instance: t5, listener: e, currentTarget: r };
}
function nl(t5, e) {
  for (var r = e + "Capture", n = []; t5 !== null; ) {
    var i = t5, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = Qs(t5, r), s != null && n.unshift(so(t5, s, i)), s = Qs(t5, e), s != null && n.push(so(t5, s, i))), t5 = t5.return;
  }
  return n;
}
function ti(t5) {
  if (t5 === null) return null;
  do
    t5 = t5.return;
  while (t5 && t5.tag !== 5);
  return t5 || null;
}
function Ep(t5, e, r, n, i) {
  for (var s = e._reactName, o = []; r !== null && r !== n; ) {
    var a = r, l = a.alternate, u = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 && u !== null && (a = u, i ? (l = Qs(r, s), l != null && o.unshift(so(r, l, a))) : i || (l = Qs(r, s), l != null && o.push(so(r, l, a)))), r = r.return;
  }
  o.length !== 0 && t5.push({ event: e, listeners: o });
}
var e1 = /\r\n?/g, t1 = /\u0000|\uFFFD/g;
function Sp(t5) {
  return (typeof t5 == "string" ? t5 : "" + t5).replace(e1, `
`).replace(t1, "");
}
function Vo(t5, e, r) {
  if (e = Sp(e), Sp(t5) !== e && r) throw Error(F(425));
}
function il() {
}
var lc = null, uc = null;
function hc(t5, e) {
  return t5 === "textarea" || t5 === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var cc = typeof setTimeout == "function" ? setTimeout : void 0, r1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Tp = typeof Promise == "function" ? Promise : void 0, n1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tp < "u" ? function(t5) {
  return Tp.resolve(null).then(t5).catch(i1);
} : cc;
function i1(t5) {
  setTimeout(function() {
    throw t5;
  });
}
function Fu(t5, e) {
  var r = e, n = 0;
  do {
    var i = r.nextSibling;
    if (t5.removeChild(r), i && i.nodeType === 8) if (r = i.data, r === "/$") {
      if (n === 0) {
        t5.removeChild(i), to(e);
        return;
      }
      n--;
    } else r !== "$" && r !== "$?" && r !== "$!" || n++;
    r = i;
  } while (r);
  to(e);
}
function tn(t5) {
  for (; t5 != null; t5 = t5.nextSibling) {
    var e = t5.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (e = t5.data, e === "$" || e === "$!" || e === "$?") break;
      if (e === "/$") return null;
    }
  }
  return t5;
}
function bp(t5) {
  t5 = t5.previousSibling;
  for (var e = 0; t5; ) {
    if (t5.nodeType === 8) {
      var r = t5.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (e === 0) return t5;
        e--;
      } else r === "/$" && e++;
    }
    t5 = t5.previousSibling;
  }
  return null;
}
var ts = Math.random().toString(36).slice(2), ar = "__reactFiber$" + ts, oo = "__reactProps$" + ts, Rr = "__reactContainer$" + ts, dc = "__reactEvents$" + ts, s1 = "__reactListeners$" + ts, o1 = "__reactHandles$" + ts;
function kn(t5) {
  var e = t5[ar];
  if (e) return e;
  for (var r = t5.parentNode; r; ) {
    if (e = r[Rr] || r[ar]) {
      if (r = e.alternate, e.child !== null || r !== null && r.child !== null) for (t5 = bp(t5); t5 !== null; ) {
        if (r = t5[ar]) return r;
        t5 = bp(t5);
      }
      return e;
    }
    t5 = r, r = t5.parentNode;
  }
  return null;
}
function To(t5) {
  return t5 = t5[ar] || t5[Rr], !t5 || t5.tag !== 5 && t5.tag !== 6 && t5.tag !== 13 && t5.tag !== 3 ? null : t5;
}
function vi(t5) {
  if (t5.tag === 5 || t5.tag === 6) return t5.stateNode;
  throw Error(F(33));
}
function Xl(t5) {
  return t5[oo] || null;
}
var fc = [], _i = -1;
function fn(t5) {
  return { current: t5 };
}
function ye(t5) {
  0 > _i || (t5.current = fc[_i], fc[_i] = null, _i--);
}
function fe(t5, e) {
  _i++, fc[_i] = t5.current, t5.current = e;
}
var un = {}, rt = fn(un), ct = fn(false), Gn = un;
function Vi(t5, e) {
  var r = t5.type.contextTypes;
  if (!r) return un;
  var n = t5.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === e) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in r) i[s] = e[s];
  return n && (t5 = t5.stateNode, t5.__reactInternalMemoizedUnmaskedChildContext = e, t5.__reactInternalMemoizedMaskedChildContext = i), i;
}
function dt(t5) {
  return t5 = t5.childContextTypes, t5 != null;
}
function sl() {
  ye(ct), ye(rt);
}
function Ap(t5, e, r) {
  if (rt.current !== un) throw Error(F(168));
  fe(rt, e), fe(ct, r);
}
function cv(t5, e, r) {
  var n = t5.stateNode;
  if (e = e.childContextTypes, typeof n.getChildContext != "function") return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in e)) throw Error(F(108, Vx(t5) || "Unknown", i));
  return Ae({}, r, n);
}
function ol(t5) {
  return t5 = (t5 = t5.stateNode) && t5.__reactInternalMemoizedMergedChildContext || un, Gn = rt.current, fe(rt, t5), fe(ct, ct.current), true;
}
function Cp(t5, e, r) {
  var n = t5.stateNode;
  if (!n) throw Error(F(169));
  r ? (t5 = cv(t5, e, Gn), n.__reactInternalMemoizedMergedChildContext = t5, ye(ct), ye(rt), fe(rt, t5)) : ye(ct), fe(ct, r);
}
var _r = null, Wl = false, Du = false;
function dv(t5) {
  _r === null ? _r = [t5] : _r.push(t5);
}
function a1(t5) {
  Wl = true, dv(t5);
}
function pn() {
  if (!Du && _r !== null) {
    Du = true;
    var t5 = 0, e = de;
    try {
      var r = _r;
      for (de = 1; t5 < r.length; t5++) {
        var n = r[t5];
        do
          n = n(true);
        while (n !== null);
      }
      _r = null, Wl = false;
    } catch (i) {
      throw _r !== null && (_r = _r.slice(t5 + 1)), Oy(Yd, pn), i;
    } finally {
      de = e, Du = false;
    }
  }
  return null;
}
var xi = [], wi = 0, al = null, ll = 0, bt = [], At = 0, zn = null, xr = 1, wr = "";
function _n(t5, e) {
  xi[wi++] = ll, xi[wi++] = al, al = t5, ll = e;
}
function fv(t5, e, r) {
  bt[At++] = xr, bt[At++] = wr, bt[At++] = zn, zn = t5;
  var n = xr;
  t5 = wr;
  var i = 32 - jt(n) - 1;
  n &= ~(1 << i), r += 1;
  var s = 32 - jt(e) + i;
  if (30 < s) {
    var o = i - i % 5;
    s = (n & (1 << o) - 1).toString(32), n >>= o, i -= o, xr = 1 << 32 - jt(e) + i | r << i | n, wr = s + t5;
  } else xr = 1 << s | r << i | n, wr = t5;
}
function nf(t5) {
  t5.return !== null && (_n(t5, 1), fv(t5, 1, 0));
}
function sf(t5) {
  for (; t5 === al; ) al = xi[--wi], xi[wi] = null, ll = xi[--wi], xi[wi] = null;
  for (; t5 === zn; ) zn = bt[--At], bt[At] = null, wr = bt[--At], bt[At] = null, xr = bt[--At], bt[At] = null;
}
var vt = null, gt = null, we = false, zt = null;
function pv(t5, e) {
  var r = Ct(5, null, null, 0);
  r.elementType = "DELETED", r.stateNode = e, r.return = t5, e = t5.deletions, e === null ? (t5.deletions = [r], t5.flags |= 16) : e.push(r);
}
function Ip(t5, e) {
  switch (t5.tag) {
    case 5:
      var r = t5.type;
      return e = e.nodeType !== 1 || r.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (t5.stateNode = e, vt = t5, gt = tn(e.firstChild), true) : false;
    case 6:
      return e = t5.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (t5.stateNode = e, vt = t5, gt = null, true) : false;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (r = zn !== null ? { id: xr, overflow: wr } : null, t5.memoizedState = { dehydrated: e, treeContext: r, retryLane: 1073741824 }, r = Ct(18, null, null, 0), r.stateNode = e, r.return = t5, t5.child = r, vt = t5, gt = null, true) : false;
    default:
      return false;
  }
}
function pc(t5) {
  return (t5.mode & 1) !== 0 && (t5.flags & 128) === 0;
}
function mc(t5) {
  if (we) {
    var e = gt;
    if (e) {
      var r = e;
      if (!Ip(t5, e)) {
        if (pc(t5)) throw Error(F(418));
        e = tn(r.nextSibling);
        var n = vt;
        e && Ip(t5, e) ? pv(n, r) : (t5.flags = t5.flags & -4097 | 2, we = false, vt = t5);
      }
    } else {
      if (pc(t5)) throw Error(F(418));
      t5.flags = t5.flags & -4097 | 2, we = false, vt = t5;
    }
  }
}
function Rp(t5) {
  for (t5 = t5.return; t5 !== null && t5.tag !== 5 && t5.tag !== 3 && t5.tag !== 13; ) t5 = t5.return;
  vt = t5;
}
function $o(t5) {
  if (t5 !== vt) return false;
  if (!we) return Rp(t5), we = true, false;
  var e;
  if ((e = t5.tag !== 3) && !(e = t5.tag !== 5) && (e = t5.type, e = e !== "head" && e !== "body" && !hc(t5.type, t5.memoizedProps)), e && (e = gt)) {
    if (pc(t5)) throw mv(), Error(F(418));
    for (; e; ) pv(t5, e), e = tn(e.nextSibling);
  }
  if (Rp(t5), t5.tag === 13) {
    if (t5 = t5.memoizedState, t5 = t5 !== null ? t5.dehydrated : null, !t5) throw Error(F(317));
    e: {
      for (t5 = t5.nextSibling, e = 0; t5; ) {
        if (t5.nodeType === 8) {
          var r = t5.data;
          if (r === "/$") {
            if (e === 0) {
              gt = tn(t5.nextSibling);
              break e;
            }
            e--;
          } else r !== "$" && r !== "$!" && r !== "$?" || e++;
        }
        t5 = t5.nextSibling;
      }
      gt = null;
    }
  } else gt = vt ? tn(t5.stateNode.nextSibling) : null;
  return true;
}
function mv() {
  for (var t5 = gt; t5; ) t5 = tn(t5.nextSibling);
}
function $i() {
  gt = vt = null, we = false;
}
function of(t5) {
  zt === null ? zt = [t5] : zt.push(t5);
}
var l1 = Br.ReactCurrentBatchConfig;
function cs(t5, e, r) {
  if (t5 = r.ref, t5 !== null && typeof t5 != "function" && typeof t5 != "object") {
    if (r._owner) {
      if (r = r._owner, r) {
        if (r.tag !== 1) throw Error(F(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(F(147, t5));
      var i = n, s = "" + t5;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s ? e.ref : (e = function(o) {
        var a = i.refs;
        o === null ? delete a[s] : a[s] = o;
      }, e._stringRef = s, e);
    }
    if (typeof t5 != "string") throw Error(F(284));
    if (!r._owner) throw Error(F(290, t5));
  }
  return t5;
}
function Xo(t5, e) {
  throw t5 = Object.prototype.toString.call(e), Error(F(31, t5 === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t5));
}
function Pp(t5) {
  var e = t5._init;
  return e(t5._payload);
}
function gv(t5) {
  function e(g, v) {
    if (t5) {
      var m = g.deletions;
      m === null ? (g.deletions = [v], g.flags |= 16) : m.push(v);
    }
  }
  function r(g, v) {
    if (!t5) return null;
    for (; v !== null; ) e(g, v), v = v.sibling;
    return null;
  }
  function n(g, v) {
    for (g = /* @__PURE__ */ new Map(); v !== null; ) v.key !== null ? g.set(v.key, v) : g.set(v.index, v), v = v.sibling;
    return g;
  }
  function i(g, v) {
    return g = on(g, v), g.index = 0, g.sibling = null, g;
  }
  function s(g, v, m) {
    return g.index = m, t5 ? (m = g.alternate, m !== null ? (m = m.index, m < v ? (g.flags |= 2, v) : m) : (g.flags |= 2, v)) : (g.flags |= 1048576, v);
  }
  function o(g) {
    return t5 && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, v, m, x) {
    return v === null || v.tag !== 6 ? (v = zu(m, g.mode, x), v.return = g, v) : (v = i(v, m), v.return = g, v);
  }
  function l(g, v, m, x) {
    var w = m.type;
    return w === pi ? h(g, v, m.props.children, x, m.key) : v !== null && (v.elementType === w || typeof w == "object" && w !== null && w.$$typeof === zr && Pp(w) === v.type) ? (x = i(v, m.props), x.ref = cs(g, v, m), x.return = g, x) : (x = Oa(m.type, m.key, m.props, null, g.mode, x), x.ref = cs(g, v, m), x.return = g, x);
  }
  function u(g, v, m, x) {
    return v === null || v.tag !== 4 || v.stateNode.containerInfo !== m.containerInfo || v.stateNode.implementation !== m.implementation ? (v = Hu(m, g.mode, x), v.return = g, v) : (v = i(v, m.children || []), v.return = g, v);
  }
  function h(g, v, m, x, w) {
    return v === null || v.tag !== 7 ? (v = Nn(m, g.mode, x, w), v.return = g, v) : (v = i(v, m), v.return = g, v);
  }
  function c(g, v, m) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return v = zu("" + v, g.mode, m), v.return = g, v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Bo:
          return m = Oa(v.type, v.key, v.props, null, g.mode, m), m.ref = cs(g, null, v), m.return = g, m;
        case fi:
          return v = Hu(v, g.mode, m), v.return = g, v;
        case zr:
          var x = v._init;
          return c(g, x(v._payload), m);
      }
      if (Es(v) || os(v)) return v = Nn(v, g.mode, m, null), v.return = g, v;
      Xo(g, v);
    }
    return null;
  }
  function d(g, v, m, x) {
    var w = v !== null ? v.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return w !== null ? null : a(g, v, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Bo:
          return m.key === w ? l(g, v, m, x) : null;
        case fi:
          return m.key === w ? u(g, v, m, x) : null;
        case zr:
          return w = m._init, d(g, v, w(m._payload), x);
      }
      if (Es(m) || os(m)) return w !== null ? null : h(g, v, m, x, null);
      Xo(g, m);
    }
    return null;
  }
  function f(g, v, m, x, w) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return g = g.get(m) || null, a(v, g, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Bo:
          return g = g.get(x.key === null ? m : x.key) || null, l(v, g, x, w);
        case fi:
          return g = g.get(x.key === null ? m : x.key) || null, u(v, g, x, w);
        case zr:
          var T = x._init;
          return f(g, v, m, T(x._payload), w);
      }
      if (Es(x) || os(x)) return g = g.get(m) || null, h(v, g, x, w, null);
      Xo(v, x);
    }
    return null;
  }
  function p(g, v, m, x) {
    for (var w = null, T = null, S = v, E = v = 0, I = null; S !== null && E < m.length; E++) {
      S.index > E ? (I = S, S = null) : I = S.sibling;
      var C = d(g, S, m[E], x);
      if (C === null) {
        S === null && (S = I);
        break;
      }
      t5 && S && C.alternate === null && e(g, S), v = s(C, v, E), T === null ? w = C : T.sibling = C, T = C, S = I;
    }
    if (E === m.length) return r(g, S), we && _n(g, E), w;
    if (S === null) {
      for (; E < m.length; E++) S = c(g, m[E], x), S !== null && (v = s(S, v, E), T === null ? w = S : T.sibling = S, T = S);
      return we && _n(g, E), w;
    }
    for (S = n(g, S); E < m.length; E++) I = f(S, g, E, m[E], x), I !== null && (t5 && I.alternate !== null && S.delete(I.key === null ? E : I.key), v = s(I, v, E), T === null ? w = I : T.sibling = I, T = I);
    return t5 && S.forEach(function(P) {
      return e(g, P);
    }), we && _n(g, E), w;
  }
  function y(g, v, m, x) {
    var w = os(m);
    if (typeof w != "function") throw Error(F(150));
    if (m = w.call(m), m == null) throw Error(F(151));
    for (var T = w = null, S = v, E = v = 0, I = null, C = m.next(); S !== null && !C.done; E++, C = m.next()) {
      S.index > E ? (I = S, S = null) : I = S.sibling;
      var P = d(g, S, C.value, x);
      if (P === null) {
        S === null && (S = I);
        break;
      }
      t5 && S && P.alternate === null && e(g, S), v = s(P, v, E), T === null ? w = P : T.sibling = P, T = P, S = I;
    }
    if (C.done) return r(g, S), we && _n(g, E), w;
    if (S === null) {
      for (; !C.done; E++, C = m.next()) C = c(g, C.value, x), C !== null && (v = s(C, v, E), T === null ? w = C : T.sibling = C, T = C);
      return we && _n(g, E), w;
    }
    for (S = n(g, S); !C.done; E++, C = m.next()) C = f(S, g, E, C.value, x), C !== null && (t5 && C.alternate !== null && S.delete(C.key === null ? E : C.key), v = s(C, v, E), T === null ? w = C : T.sibling = C, T = C);
    return t5 && S.forEach(function(N) {
      return e(g, N);
    }), we && _n(g, E), w;
  }
  function _(g, v, m, x) {
    if (typeof m == "object" && m !== null && m.type === pi && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Bo:
          e: {
            for (var w = m.key, T = v; T !== null; ) {
              if (T.key === w) {
                if (w = m.type, w === pi) {
                  if (T.tag === 7) {
                    r(g, T.sibling), v = i(T, m.props.children), v.return = g, g = v;
                    break e;
                  }
                } else if (T.elementType === w || typeof w == "object" && w !== null && w.$$typeof === zr && Pp(w) === T.type) {
                  r(g, T.sibling), v = i(T, m.props), v.ref = cs(g, T, m), v.return = g, g = v;
                  break e;
                }
                r(g, T);
                break;
              } else e(g, T);
              T = T.sibling;
            }
            m.type === pi ? (v = Nn(m.props.children, g.mode, x, m.key), v.return = g, g = v) : (x = Oa(m.type, m.key, m.props, null, g.mode, x), x.ref = cs(g, v, m), x.return = g, g = x);
          }
          return o(g);
        case fi:
          e: {
            for (T = m.key; v !== null; ) {
              if (v.key === T) if (v.tag === 4 && v.stateNode.containerInfo === m.containerInfo && v.stateNode.implementation === m.implementation) {
                r(g, v.sibling), v = i(v, m.children || []), v.return = g, g = v;
                break e;
              } else {
                r(g, v);
                break;
              }
              else e(g, v);
              v = v.sibling;
            }
            v = Hu(m, g.mode, x), v.return = g, g = v;
          }
          return o(g);
        case zr:
          return T = m._init, _(g, v, T(m._payload), x);
      }
      if (Es(m)) return p(g, v, m, x);
      if (os(m)) return y(g, v, m, x);
      Xo(g, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, v !== null && v.tag === 6 ? (r(g, v.sibling), v = i(v, m), v.return = g, g = v) : (r(g, v), v = zu(m, g.mode, x), v.return = g, g = v), o(g)) : r(g, v);
  }
  return _;
}
var Xi = gv(true), yv = gv(false), ul = fn(null), hl = null, Ei = null, af = null;
function lf() {
  af = Ei = hl = null;
}
function uf(t5) {
  var e = ul.current;
  ye(ul), t5._currentValue = e;
}
function gc(t5, e, r) {
  for (; t5 !== null; ) {
    var n = t5.alternate;
    if ((t5.childLanes & e) !== e ? (t5.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t5 === r) break;
    t5 = t5.return;
  }
}
function ki(t5, e) {
  hl = t5, af = Ei = null, t5 = t5.dependencies, t5 !== null && t5.firstContext !== null && (t5.lanes & e && (ut = true), t5.firstContext = null);
}
function Mt(t5) {
  var e = t5._currentValue;
  if (af !== t5) if (t5 = { context: t5, memoizedValue: e, next: null }, Ei === null) {
    if (hl === null) throw Error(F(308));
    Ei = t5, hl.dependencies = { lanes: 0, firstContext: t5 };
  } else Ei = Ei.next = t5;
  return e;
}
var Fn = null;
function hf(t5) {
  Fn === null ? Fn = [t5] : Fn.push(t5);
}
function vv(t5, e, r, n) {
  var i = e.interleaved;
  return i === null ? (r.next = r, hf(e)) : (r.next = i.next, i.next = r), e.interleaved = r, Pr(t5, n);
}
function Pr(t5, e) {
  t5.lanes |= e;
  var r = t5.alternate;
  for (r !== null && (r.lanes |= e), r = t5, t5 = t5.return; t5 !== null; ) t5.childLanes |= e, r = t5.alternate, r !== null && (r.childLanes |= e), r = t5, t5 = t5.return;
  return r.tag === 3 ? r.stateNode : null;
}
var Hr = false;
function cf(t5) {
  t5.updateQueue = { baseState: t5.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function _v(t5, e) {
  t5 = t5.updateQueue, e.updateQueue === t5 && (e.updateQueue = { baseState: t5.baseState, firstBaseUpdate: t5.firstBaseUpdate, lastBaseUpdate: t5.lastBaseUpdate, shared: t5.shared, effects: t5.effects });
}
function Ar(t5, e) {
  return { eventTime: t5, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function rn(t5, e, r) {
  var n = t5.updateQueue;
  if (n === null) return null;
  if (n = n.shared, le & 2) {
    var i = n.pending;
    return i === null ? e.next = e : (e.next = i.next, i.next = e), n.pending = e, Pr(t5, r);
  }
  return i = n.interleaved, i === null ? (e.next = e, hf(n)) : (e.next = i.next, i.next = e), n.interleaved = e, Pr(t5, r);
}
function Ma(t5, e, r) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (r & 4194240) !== 0)) {
    var n = e.lanes;
    n &= t5.pendingLanes, r |= n, e.lanes = r, Zd(t5, r);
  }
}
function Mp(t5, e) {
  var r = t5.updateQueue, n = t5.alternate;
  if (n !== null && (n = n.updateQueue, r === n)) {
    var i = null, s = null;
    if (r = r.firstBaseUpdate, r !== null) {
      do {
        var o = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        s === null ? i = s = o : s = s.next = o, r = r.next;
      } while (r !== null);
      s === null ? i = s = e : s = s.next = e;
    } else i = s = e;
    r = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: n.shared, effects: n.effects }, t5.updateQueue = r;
    return;
  }
  t5 = r.lastBaseUpdate, t5 === null ? r.firstBaseUpdate = e : t5.next = e, r.lastBaseUpdate = e;
}
function cl(t5, e, r, n) {
  var i = t5.updateQueue;
  Hr = false;
  var s = i.firstBaseUpdate, o = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, o === null ? s = u : o.next = u, o = l;
    var h = t5.alternate;
    h !== null && (h = h.updateQueue, a = h.lastBaseUpdate, a !== o && (a === null ? h.firstBaseUpdate = u : a.next = u, h.lastBaseUpdate = l));
  }
  if (s !== null) {
    var c = i.baseState;
    o = 0, h = u = l = null, a = s;
    do {
      var d = a.lane, f = a.eventTime;
      if ((n & d) === d) {
        h !== null && (h = h.next = { eventTime: f, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var p = t5, y = a;
          switch (d = e, f = r, y.tag) {
            case 1:
              if (p = y.payload, typeof p == "function") {
                c = p.call(f, c, d);
                break e;
              }
              c = p;
              break e;
            case 3:
              p.flags = p.flags & -65537 | 128;
            case 0:
              if (p = y.payload, d = typeof p == "function" ? p.call(f, c, d) : p, d == null) break e;
              c = Ae({}, c, d);
              break e;
            case 2:
              Hr = true;
          }
        }
        a.callback !== null && a.lane !== 0 && (t5.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
      } else f = { eventTime: f, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, h === null ? (u = h = f, l = c) : h = h.next = f, o |= d;
      if (a = a.next, a === null) {
        if (a = i.shared.pending, a === null) break;
        d = a, a = d.next, d.next = null, i.lastBaseUpdate = d, i.shared.pending = null;
      }
    } while (true);
    if (h === null && (l = c), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = h, e = i.shared.interleaved, e !== null) {
      i = e;
      do
        o |= i.lane, i = i.next;
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    jn |= o, t5.lanes = o, t5.memoizedState = c;
  }
}
function kp(t5, e, r) {
  if (t5 = e.effects, e.effects = null, t5 !== null) for (e = 0; e < t5.length; e++) {
    var n = t5[e], i = n.callback;
    if (i !== null) {
      if (n.callback = null, n = r, typeof i != "function") throw Error(F(191, i));
      i.call(n);
    }
  }
}
var bo = {}, hr = fn(bo), ao = fn(bo), lo = fn(bo);
function Dn(t5) {
  if (t5 === bo) throw Error(F(174));
  return t5;
}
function df(t5, e) {
  switch (fe(lo, e), fe(ao, t5), fe(hr, bo), t5 = e.nodeType, t5) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Kh(null, "");
      break;
    default:
      t5 = t5 === 8 ? e.parentNode : e, e = t5.namespaceURI || null, t5 = t5.tagName, e = Kh(e, t5);
  }
  ye(hr), fe(hr, e);
}
function Wi() {
  ye(hr), ye(ao), ye(lo);
}
function xv(t5) {
  Dn(lo.current);
  var e = Dn(hr.current), r = Kh(e, t5.type);
  e !== r && (fe(ao, t5), fe(hr, r));
}
function ff(t5) {
  ao.current === t5 && (ye(hr), ye(ao));
}
var Se = fn(0);
function dl(t5) {
  for (var e = t5; e !== null; ) {
    if (e.tag === 13) {
      var r = e.memoizedState;
      if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === t5) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t5) return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
var Bu = [];
function pf() {
  for (var t5 = 0; t5 < Bu.length; t5++) Bu[t5]._workInProgressVersionPrimary = null;
  Bu.length = 0;
}
var ka = Br.ReactCurrentDispatcher, Nu = Br.ReactCurrentBatchConfig, Hn = 0, be = null, Le = null, ze = null, fl = false, Us = false, uo = 0, u1 = 0;
function qe() {
  throw Error(F(321));
}
function mf(t5, e) {
  if (e === null) return false;
  for (var r = 0; r < e.length && r < t5.length; r++) if (!Wt(t5[r], e[r])) return false;
  return true;
}
function gf(t5, e, r, n, i, s) {
  if (Hn = s, be = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, ka.current = t5 === null || t5.memoizedState === null ? f1 : p1, t5 = r(n, i), Us) {
    s = 0;
    do {
      if (Us = false, uo = 0, 25 <= s) throw Error(F(301));
      s += 1, ze = Le = null, e.updateQueue = null, ka.current = m1, t5 = r(n, i);
    } while (Us);
  }
  if (ka.current = pl, e = Le !== null && Le.next !== null, Hn = 0, ze = Le = be = null, fl = false, e) throw Error(F(300));
  return t5;
}
function yf() {
  var t5 = uo !== 0;
  return uo = 0, t5;
}
function nr() {
  var t5 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ze === null ? be.memoizedState = ze = t5 : ze = ze.next = t5, ze;
}
function kt() {
  if (Le === null) {
    var t5 = be.alternate;
    t5 = t5 !== null ? t5.memoizedState : null;
  } else t5 = Le.next;
  var e = ze === null ? be.memoizedState : ze.next;
  if (e !== null) ze = e, Le = t5;
  else {
    if (t5 === null) throw Error(F(310));
    Le = t5, t5 = { memoizedState: Le.memoizedState, baseState: Le.baseState, baseQueue: Le.baseQueue, queue: Le.queue, next: null }, ze === null ? be.memoizedState = ze = t5 : ze = ze.next = t5;
  }
  return ze;
}
function ho(t5, e) {
  return typeof e == "function" ? e(t5) : e;
}
function Ou(t5) {
  var e = kt(), r = e.queue;
  if (r === null) throw Error(F(311));
  r.lastRenderedReducer = t5;
  var n = Le, i = n.baseQueue, s = r.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = s.next, s.next = o;
    }
    n.baseQueue = i = s, r.pending = null;
  }
  if (i !== null) {
    s = i.next, n = n.baseState;
    var a = o = null, l = null, u = s;
    do {
      var h = u.lane;
      if ((Hn & h) === h) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : t5(n, u.action);
      else {
        var c = { lane: h, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        l === null ? (a = l = c, o = n) : l = l.next = c, be.lanes |= h, jn |= h;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? o = n : l.next = a, Wt(n, e.memoizedState) || (ut = true), e.memoizedState = n, e.baseState = o, e.baseQueue = l, r.lastRenderedState = n;
  }
  if (t5 = r.interleaved, t5 !== null) {
    i = t5;
    do
      s = i.lane, be.lanes |= s, jn |= s, i = i.next;
    while (i !== t5);
  } else i === null && (r.lanes = 0);
  return [e.memoizedState, r.dispatch];
}
function Lu(t5) {
  var e = kt(), r = e.queue;
  if (r === null) throw Error(F(311));
  r.lastRenderedReducer = t5;
  var n = r.dispatch, i = r.pending, s = e.memoizedState;
  if (i !== null) {
    r.pending = null;
    var o = i = i.next;
    do
      s = t5(s, o.action), o = o.next;
    while (o !== i);
    Wt(s, e.memoizedState) || (ut = true), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), r.lastRenderedState = s;
  }
  return [s, n];
}
function wv() {
}
function Ev(t5, e) {
  var r = be, n = kt(), i = e(), s = !Wt(n.memoizedState, i);
  if (s && (n.memoizedState = i, ut = true), n = n.queue, vf(bv.bind(null, r, n, t5), [t5]), n.getSnapshot !== e || s || ze !== null && ze.memoizedState.tag & 1) {
    if (r.flags |= 2048, co(9, Tv.bind(null, r, n, i, e), void 0, null), Ve === null) throw Error(F(349));
    Hn & 30 || Sv(r, e, i);
  }
  return i;
}
function Sv(t5, e, r) {
  t5.flags |= 16384, t5 = { getSnapshot: e, value: r }, e = be.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, be.updateQueue = e, e.stores = [t5]) : (r = e.stores, r === null ? e.stores = [t5] : r.push(t5));
}
function Tv(t5, e, r, n) {
  e.value = r, e.getSnapshot = n, Av(e) && Cv(t5);
}
function bv(t5, e, r) {
  return r(function() {
    Av(e) && Cv(t5);
  });
}
function Av(t5) {
  var e = t5.getSnapshot;
  t5 = t5.value;
  try {
    var r = e();
    return !Wt(t5, r);
  } catch {
    return true;
  }
}
function Cv(t5) {
  var e = Pr(t5, 1);
  e !== null && Vt(e, t5, 1, -1);
}
function Fp(t5) {
  var e = nr();
  return typeof t5 == "function" && (t5 = t5()), e.memoizedState = e.baseState = t5, t5 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ho, lastRenderedState: t5 }, e.queue = t5, t5 = t5.dispatch = d1.bind(null, be, t5), [e.memoizedState, t5];
}
function co(t5, e, r, n) {
  return t5 = { tag: t5, create: e, destroy: r, deps: n, next: null }, e = be.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, be.updateQueue = e, e.lastEffect = t5.next = t5) : (r = e.lastEffect, r === null ? e.lastEffect = t5.next = t5 : (n = r.next, r.next = t5, t5.next = n, e.lastEffect = t5)), t5;
}
function Iv() {
  return kt().memoizedState;
}
function Fa(t5, e, r, n) {
  var i = nr();
  be.flags |= t5, i.memoizedState = co(1 | e, r, void 0, n === void 0 ? null : n);
}
function Yl(t5, e, r, n) {
  var i = kt();
  n = n === void 0 ? null : n;
  var s = void 0;
  if (Le !== null) {
    var o = Le.memoizedState;
    if (s = o.destroy, n !== null && mf(n, o.deps)) {
      i.memoizedState = co(e, r, s, n);
      return;
    }
  }
  be.flags |= t5, i.memoizedState = co(1 | e, r, s, n);
}
function Dp(t5, e) {
  return Fa(8390656, 8, t5, e);
}
function vf(t5, e) {
  return Yl(2048, 8, t5, e);
}
function Rv(t5, e) {
  return Yl(4, 2, t5, e);
}
function Pv(t5, e) {
  return Yl(4, 4, t5, e);
}
function Mv(t5, e) {
  if (typeof e == "function") return t5 = t5(), e(t5), function() {
    e(null);
  };
  if (e != null) return t5 = t5(), e.current = t5, function() {
    e.current = null;
  };
}
function kv(t5, e, r) {
  return r = r != null ? r.concat([t5]) : null, Yl(4, 4, Mv.bind(null, e, t5), r);
}
function _f() {
}
function Fv(t5, e) {
  var r = kt();
  e = e === void 0 ? null : e;
  var n = r.memoizedState;
  return n !== null && e !== null && mf(e, n[1]) ? n[0] : (r.memoizedState = [t5, e], t5);
}
function Dv(t5, e) {
  var r = kt();
  e = e === void 0 ? null : e;
  var n = r.memoizedState;
  return n !== null && e !== null && mf(e, n[1]) ? n[0] : (t5 = t5(), r.memoizedState = [t5, e], t5);
}
function Bv(t5, e, r) {
  return Hn & 21 ? (Wt(r, e) || (r = Gy(), be.lanes |= r, jn |= r, t5.baseState = true), e) : (t5.baseState && (t5.baseState = false, ut = true), t5.memoizedState = r);
}
function h1(t5, e) {
  var r = de;
  de = r !== 0 && 4 > r ? r : 4, t5(true);
  var n = Nu.transition;
  Nu.transition = {};
  try {
    t5(false), e();
  } finally {
    de = r, Nu.transition = n;
  }
}
function Nv() {
  return kt().memoizedState;
}
function c1(t5, e, r) {
  var n = sn(t5);
  if (r = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null }, Ov(t5)) Lv(e, r);
  else if (r = vv(t5, e, r, n), r !== null) {
    var i = st();
    Vt(r, t5, n, i), Uv(r, e, n);
  }
}
function d1(t5, e, r) {
  var n = sn(t5), i = { lane: n, action: r, hasEagerState: false, eagerState: null, next: null };
  if (Ov(t5)) Lv(e, i);
  else {
    var s = t5.alternate;
    if (t5.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try {
      var o = e.lastRenderedState, a = s(o, r);
      if (i.hasEagerState = true, i.eagerState = a, Wt(a, o)) {
        var l = e.interleaved;
        l === null ? (i.next = i, hf(e)) : (i.next = l.next, l.next = i), e.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    r = vv(t5, e, i, n), r !== null && (i = st(), Vt(r, t5, n, i), Uv(r, e, n));
  }
}
function Ov(t5) {
  var e = t5.alternate;
  return t5 === be || e !== null && e === be;
}
function Lv(t5, e) {
  Us = fl = true;
  var r = t5.pending;
  r === null ? e.next = e : (e.next = r.next, r.next = e), t5.pending = e;
}
function Uv(t5, e, r) {
  if (r & 4194240) {
    var n = e.lanes;
    n &= t5.pendingLanes, r |= n, e.lanes = r, Zd(t5, r);
  }
}
var pl = { readContext: Mt, useCallback: qe, useContext: qe, useEffect: qe, useImperativeHandle: qe, useInsertionEffect: qe, useLayoutEffect: qe, useMemo: qe, useReducer: qe, useRef: qe, useState: qe, useDebugValue: qe, useDeferredValue: qe, useTransition: qe, useMutableSource: qe, useSyncExternalStore: qe, useId: qe, unstable_isNewReconciler: false }, f1 = { readContext: Mt, useCallback: function(t5, e) {
  return nr().memoizedState = [t5, e === void 0 ? null : e], t5;
}, useContext: Mt, useEffect: Dp, useImperativeHandle: function(t5, e, r) {
  return r = r != null ? r.concat([t5]) : null, Fa(4194308, 4, Mv.bind(null, e, t5), r);
}, useLayoutEffect: function(t5, e) {
  return Fa(4194308, 4, t5, e);
}, useInsertionEffect: function(t5, e) {
  return Fa(4, 2, t5, e);
}, useMemo: function(t5, e) {
  var r = nr();
  return e = e === void 0 ? null : e, t5 = t5(), r.memoizedState = [t5, e], t5;
}, useReducer: function(t5, e, r) {
  var n = nr();
  return e = r !== void 0 ? r(e) : e, n.memoizedState = n.baseState = e, t5 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t5, lastRenderedState: e }, n.queue = t5, t5 = t5.dispatch = c1.bind(null, be, t5), [n.memoizedState, t5];
}, useRef: function(t5) {
  var e = nr();
  return t5 = { current: t5 }, e.memoizedState = t5;
}, useState: Fp, useDebugValue: _f, useDeferredValue: function(t5) {
  return nr().memoizedState = t5;
}, useTransition: function() {
  var t5 = Fp(false), e = t5[0];
  return t5 = h1.bind(null, t5[1]), nr().memoizedState = t5, [e, t5];
}, useMutableSource: function() {
}, useSyncExternalStore: function(t5, e, r) {
  var n = be, i = nr();
  if (we) {
    if (r === void 0) throw Error(F(407));
    r = r();
  } else {
    if (r = e(), Ve === null) throw Error(F(349));
    Hn & 30 || Sv(n, e, r);
  }
  i.memoizedState = r;
  var s = { value: r, getSnapshot: e };
  return i.queue = s, Dp(bv.bind(null, n, s, t5), [t5]), n.flags |= 2048, co(9, Tv.bind(null, n, s, r, e), void 0, null), r;
}, useId: function() {
  var t5 = nr(), e = Ve.identifierPrefix;
  if (we) {
    var r = wr, n = xr;
    r = (n & ~(1 << 32 - jt(n) - 1)).toString(32) + r, e = ":" + e + "R" + r, r = uo++, 0 < r && (e += "H" + r.toString(32)), e += ":";
  } else r = u1++, e = ":" + e + "r" + r.toString(32) + ":";
  return t5.memoizedState = e;
}, unstable_isNewReconciler: false }, p1 = { readContext: Mt, useCallback: Fv, useContext: Mt, useEffect: vf, useImperativeHandle: kv, useInsertionEffect: Rv, useLayoutEffect: Pv, useMemo: Dv, useReducer: Ou, useRef: Iv, useState: function() {
  return Ou(ho);
}, useDebugValue: _f, useDeferredValue: function(t5) {
  var e = kt();
  return Bv(e, Le.memoizedState, t5);
}, useTransition: function() {
  var t5 = Ou(ho)[0], e = kt().memoizedState;
  return [t5, e];
}, useMutableSource: wv, useSyncExternalStore: Ev, useId: Nv, unstable_isNewReconciler: false }, m1 = { readContext: Mt, useCallback: Fv, useContext: Mt, useEffect: vf, useImperativeHandle: kv, useInsertionEffect: Rv, useLayoutEffect: Pv, useMemo: Dv, useReducer: Lu, useRef: Iv, useState: function() {
  return Lu(ho);
}, useDebugValue: _f, useDeferredValue: function(t5) {
  var e = kt();
  return Le === null ? e.memoizedState = t5 : Bv(e, Le.memoizedState, t5);
}, useTransition: function() {
  var t5 = Lu(ho)[0], e = kt().memoizedState;
  return [t5, e];
}, useMutableSource: wv, useSyncExternalStore: Ev, useId: Nv, unstable_isNewReconciler: false };
function Ut(t5, e) {
  if (t5 && t5.defaultProps) {
    e = Ae({}, e), t5 = t5.defaultProps;
    for (var r in t5) e[r] === void 0 && (e[r] = t5[r]);
    return e;
  }
  return e;
}
function yc(t5, e, r, n) {
  e = t5.memoizedState, r = r(n, e), r = r == null ? e : Ae({}, e, r), t5.memoizedState = r, t5.lanes === 0 && (t5.updateQueue.baseState = r);
}
var Zl = { isMounted: function(t5) {
  return (t5 = t5._reactInternals) ? Kn(t5) === t5 : false;
}, enqueueSetState: function(t5, e, r) {
  t5 = t5._reactInternals;
  var n = st(), i = sn(t5), s = Ar(n, i);
  s.payload = e, r != null && (s.callback = r), e = rn(t5, s, i), e !== null && (Vt(e, t5, i, n), Ma(e, t5, i));
}, enqueueReplaceState: function(t5, e, r) {
  t5 = t5._reactInternals;
  var n = st(), i = sn(t5), s = Ar(n, i);
  s.tag = 1, s.payload = e, r != null && (s.callback = r), e = rn(t5, s, i), e !== null && (Vt(e, t5, i, n), Ma(e, t5, i));
}, enqueueForceUpdate: function(t5, e) {
  t5 = t5._reactInternals;
  var r = st(), n = sn(t5), i = Ar(r, n);
  i.tag = 2, e != null && (i.callback = e), e = rn(t5, i, n), e !== null && (Vt(e, t5, n, r), Ma(e, t5, n));
} };
function Bp(t5, e, r, n, i, s, o) {
  return t5 = t5.stateNode, typeof t5.shouldComponentUpdate == "function" ? t5.shouldComponentUpdate(n, s, o) : e.prototype && e.prototype.isPureReactComponent ? !no(r, n) || !no(i, s) : true;
}
function Gv(t5, e, r) {
  var n = false, i = un, s = e.contextType;
  return typeof s == "object" && s !== null ? s = Mt(s) : (i = dt(e) ? Gn : rt.current, n = e.contextTypes, s = (n = n != null) ? Vi(t5, i) : un), e = new e(r, s), t5.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Zl, t5.stateNode = e, e._reactInternals = t5, n && (t5 = t5.stateNode, t5.__reactInternalMemoizedUnmaskedChildContext = i, t5.__reactInternalMemoizedMaskedChildContext = s), e;
}
function Np(t5, e, r, n) {
  t5 = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(r, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(r, n), e.state !== t5 && Zl.enqueueReplaceState(e, e.state, null);
}
function vc(t5, e, r, n) {
  var i = t5.stateNode;
  i.props = r, i.state = t5.memoizedState, i.refs = {}, cf(t5);
  var s = e.contextType;
  typeof s == "object" && s !== null ? i.context = Mt(s) : (s = dt(e) ? Gn : rt.current, i.context = Vi(t5, s)), i.state = t5.memoizedState, s = e.getDerivedStateFromProps, typeof s == "function" && (yc(t5, e, s, r), i.state = t5.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && Zl.enqueueReplaceState(i, i.state, null), cl(t5, r, i, n), i.state = t5.memoizedState), typeof i.componentDidMount == "function" && (t5.flags |= 4194308);
}
function Yi(t5, e) {
  try {
    var r = "", n = e;
    do
      r += jx(n), n = n.return;
    while (n);
    var i = r;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: t5, source: e, stack: i, digest: null };
}
function Uu(t5, e, r) {
  return { value: t5, source: null, stack: r ?? null, digest: e ?? null };
}
function _c(t5, e) {
  try {
    console.error(e.value);
  } catch (r) {
    setTimeout(function() {
      throw r;
    });
  }
}
var g1 = typeof WeakMap == "function" ? WeakMap : Map;
function zv(t5, e, r) {
  r = Ar(-1, r), r.tag = 3, r.payload = { element: null };
  var n = e.value;
  return r.callback = function() {
    gl || (gl = true, Rc = n), _c(t5, e);
  }, r;
}
function Hv(t5, e, r) {
  r = Ar(-1, r), r.tag = 3;
  var n = t5.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = e.value;
    r.payload = function() {
      return n(i);
    }, r.callback = function() {
      _c(t5, e);
    };
  }
  var s = t5.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (r.callback = function() {
    _c(t5, e), typeof n != "function" && (nn === null ? nn = /* @__PURE__ */ new Set([this]) : nn.add(this));
    var o = e.stack;
    this.componentDidCatch(e.value, { componentStack: o !== null ? o : "" });
  }), r;
}
function Op(t5, e, r) {
  var n = t5.pingCache;
  if (n === null) {
    n = t5.pingCache = new g1();
    var i = /* @__PURE__ */ new Set();
    n.set(e, i);
  } else i = n.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(e, i));
  i.has(r) || (i.add(r), t5 = P1.bind(null, t5, e, r), e.then(t5, t5));
}
function Lp(t5) {
  do {
    var e;
    if ((e = t5.tag === 13) && (e = t5.memoizedState, e = e !== null ? e.dehydrated !== null : true), e) return t5;
    t5 = t5.return;
  } while (t5 !== null);
  return null;
}
function Up(t5, e, r, n, i) {
  return t5.mode & 1 ? (t5.flags |= 65536, t5.lanes = i, t5) : (t5 === e ? t5.flags |= 65536 : (t5.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (e = Ar(-1, 1), e.tag = 2, rn(r, e, 1))), r.lanes |= 1), t5);
}
var y1 = Br.ReactCurrentOwner, ut = false;
function nt(t5, e, r, n) {
  e.child = t5 === null ? yv(e, null, r, n) : Xi(e, t5.child, r, n);
}
function Gp(t5, e, r, n, i) {
  r = r.render;
  var s = e.ref;
  return ki(e, i), n = gf(t5, e, r, n, s, i), r = yf(), t5 !== null && !ut ? (e.updateQueue = t5.updateQueue, e.flags &= -2053, t5.lanes &= ~i, Mr(t5, e, i)) : (we && r && nf(e), e.flags |= 1, nt(t5, e, n, i), e.child);
}
function zp(t5, e, r, n, i) {
  if (t5 === null) {
    var s = r.type;
    return typeof s == "function" && !Cf(s) && s.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (e.tag = 15, e.type = s, jv(t5, e, s, n, i)) : (t5 = Oa(r.type, null, n, e, e.mode, i), t5.ref = e.ref, t5.return = e, e.child = t5);
  }
  if (s = t5.child, !(t5.lanes & i)) {
    var o = s.memoizedProps;
    if (r = r.compare, r = r !== null ? r : no, r(o, n) && t5.ref === e.ref) return Mr(t5, e, i);
  }
  return e.flags |= 1, t5 = on(s, n), t5.ref = e.ref, t5.return = e, e.child = t5;
}
function jv(t5, e, r, n, i) {
  if (t5 !== null) {
    var s = t5.memoizedProps;
    if (no(s, n) && t5.ref === e.ref) if (ut = false, e.pendingProps = n = s, (t5.lanes & i) !== 0) t5.flags & 131072 && (ut = true);
    else return e.lanes = t5.lanes, Mr(t5, e, i);
  }
  return xc(t5, e, r, n, i);
}
function Vv(t5, e, r) {
  var n = e.pendingProps, i = n.children, s = t5 !== null ? t5.memoizedState : null;
  if (n.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(Ti, mt), mt |= r;
  else {
    if (!(r & 1073741824)) return t5 = s !== null ? s.baseLanes | r : r, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: t5, cachePool: null, transitions: null }, e.updateQueue = null, fe(Ti, mt), mt |= t5, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = s !== null ? s.baseLanes : r, fe(Ti, mt), mt |= n;
  }
  else s !== null ? (n = s.baseLanes | r, e.memoizedState = null) : n = r, fe(Ti, mt), mt |= n;
  return nt(t5, e, i, r), e.child;
}
function $v(t5, e) {
  var r = e.ref;
  (t5 === null && r !== null || t5 !== null && t5.ref !== r) && (e.flags |= 512, e.flags |= 2097152);
}
function xc(t5, e, r, n, i) {
  var s = dt(r) ? Gn : rt.current;
  return s = Vi(e, s), ki(e, i), r = gf(t5, e, r, n, s, i), n = yf(), t5 !== null && !ut ? (e.updateQueue = t5.updateQueue, e.flags &= -2053, t5.lanes &= ~i, Mr(t5, e, i)) : (we && n && nf(e), e.flags |= 1, nt(t5, e, r, i), e.child);
}
function Hp(t5, e, r, n, i) {
  if (dt(r)) {
    var s = true;
    ol(e);
  } else s = false;
  if (ki(e, i), e.stateNode === null) Da(t5, e), Gv(e, r, n), vc(e, r, n, i), n = true;
  else if (t5 === null) {
    var o = e.stateNode, a = e.memoizedProps;
    o.props = a;
    var l = o.context, u = r.contextType;
    typeof u == "object" && u !== null ? u = Mt(u) : (u = dt(r) ? Gn : rt.current, u = Vi(e, u));
    var h = r.getDerivedStateFromProps, c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== n || l !== u) && Np(e, o, n, u), Hr = false;
    var d = e.memoizedState;
    o.state = d, cl(e, n, o, i), l = e.memoizedState, a !== n || d !== l || ct.current || Hr ? (typeof h == "function" && (yc(e, r, h, n), l = e.memoizedState), (a = Hr || Bp(e, r, a, n, d, l, u)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = l), o.props = n, o.state = l, o.context = u, n = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), n = false);
  } else {
    o = e.stateNode, _v(t5, e), a = e.memoizedProps, u = e.type === e.elementType ? a : Ut(e.type, a), o.props = u, c = e.pendingProps, d = o.context, l = r.contextType, typeof l == "object" && l !== null ? l = Mt(l) : (l = dt(r) ? Gn : rt.current, l = Vi(e, l));
    var f = r.getDerivedStateFromProps;
    (h = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== c || d !== l) && Np(e, o, n, l), Hr = false, d = e.memoizedState, o.state = d, cl(e, n, o, i);
    var p = e.memoizedState;
    a !== c || d !== p || ct.current || Hr ? (typeof f == "function" && (yc(e, r, f, n), p = e.memoizedState), (u = Hr || Bp(e, r, u, n, d, p, l) || false) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, p, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, p, l)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === t5.memoizedProps && d === t5.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === t5.memoizedProps && d === t5.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = p), o.props = n, o.state = p, o.context = l, n = u) : (typeof o.componentDidUpdate != "function" || a === t5.memoizedProps && d === t5.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === t5.memoizedProps && d === t5.memoizedState || (e.flags |= 1024), n = false);
  }
  return wc(t5, e, r, n, s, i);
}
function wc(t5, e, r, n, i, s) {
  $v(t5, e);
  var o = (e.flags & 128) !== 0;
  if (!n && !o) return i && Cp(e, r, false), Mr(t5, e, s);
  n = e.stateNode, y1.current = e;
  var a = o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return e.flags |= 1, t5 !== null && o ? (e.child = Xi(e, t5.child, null, s), e.child = Xi(e, null, a, s)) : nt(t5, e, a, s), e.memoizedState = n.state, i && Cp(e, r, true), e.child;
}
function Xv(t5) {
  var e = t5.stateNode;
  e.pendingContext ? Ap(t5, e.pendingContext, e.pendingContext !== e.context) : e.context && Ap(t5, e.context, false), df(t5, e.containerInfo);
}
function jp(t5, e, r, n, i) {
  return $i(), of(i), e.flags |= 256, nt(t5, e, r, n), e.child;
}
var Ec = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sc(t5) {
  return { baseLanes: t5, cachePool: null, transitions: null };
}
function Wv(t5, e, r) {
  var n = e.pendingProps, i = Se.current, s = false, o = (e.flags & 128) !== 0, a;
  if ((a = o) || (a = t5 !== null && t5.memoizedState === null ? false : (i & 2) !== 0), a ? (s = true, e.flags &= -129) : (t5 === null || t5.memoizedState !== null) && (i |= 1), fe(Se, i & 1), t5 === null) return mc(e), t5 = e.memoizedState, t5 !== null && (t5 = t5.dehydrated, t5 !== null) ? (e.mode & 1 ? t5.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (o = n.children, t5 = n.fallback, s ? (n = e.mode, s = e.child, o = { mode: "hidden", children: o }, !(n & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Ql(o, n, 0, null), t5 = Nn(t5, n, r, null), s.return = e, t5.return = e, s.sibling = t5, e.child = s, e.child.memoizedState = Sc(r), e.memoizedState = Ec, t5) : xf(e, o));
  if (i = t5.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return v1(t5, e, o, n, a, i, r);
  if (s) {
    s = n.fallback, o = e.mode, i = t5.child, a = i.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(o & 1) && e.child !== i ? (n = e.child, n.childLanes = 0, n.pendingProps = l, e.deletions = null) : (n = on(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = on(a, s) : (s = Nn(s, o, r, null), s.flags |= 2), s.return = e, n.return = e, n.sibling = s, e.child = n, n = s, s = e.child, o = t5.child.memoizedState, o = o === null ? Sc(r) : { baseLanes: o.baseLanes | r, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = t5.childLanes & ~r, e.memoizedState = Ec, n;
  }
  return s = t5.child, t5 = s.sibling, n = on(s, { mode: "visible", children: n.children }), !(e.mode & 1) && (n.lanes = r), n.return = e, n.sibling = null, t5 !== null && (r = e.deletions, r === null ? (e.deletions = [t5], e.flags |= 16) : r.push(t5)), e.child = n, e.memoizedState = null, n;
}
function xf(t5, e) {
  return e = Ql({ mode: "visible", children: e }, t5.mode, 0, null), e.return = t5, t5.child = e;
}
function Wo(t5, e, r, n) {
  return n !== null && of(n), Xi(e, t5.child, null, r), t5 = xf(e, e.pendingProps.children), t5.flags |= 2, e.memoizedState = null, t5;
}
function v1(t5, e, r, n, i, s, o) {
  if (r) return e.flags & 256 ? (e.flags &= -257, n = Uu(Error(F(422))), Wo(t5, e, o, n)) : e.memoizedState !== null ? (e.child = t5.child, e.flags |= 128, null) : (s = n.fallback, i = e.mode, n = Ql({ mode: "visible", children: n.children }, i, 0, null), s = Nn(s, i, o, null), s.flags |= 2, n.return = e, s.return = e, n.sibling = s, e.child = n, e.mode & 1 && Xi(e, t5.child, null, o), e.child.memoizedState = Sc(o), e.memoizedState = Ec, s);
  if (!(e.mode & 1)) return Wo(t5, e, o, null);
  if (i.data === "$!") {
    if (n = i.nextSibling && i.nextSibling.dataset, n) var a = n.dgst;
    return n = a, s = Error(F(419)), n = Uu(s, n, void 0), Wo(t5, e, o, n);
  }
  if (a = (o & t5.childLanes) !== 0, ut || a) {
    if (n = Ve, n !== null) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      i = i & (n.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, Pr(t5, i), Vt(n, t5, i, -1));
    }
    return Af(), n = Uu(Error(F(421))), Wo(t5, e, o, n);
  }
  return i.data === "$?" ? (e.flags |= 128, e.child = t5.child, e = M1.bind(null, t5), i._reactRetry = e, null) : (t5 = s.treeContext, gt = tn(i.nextSibling), vt = e, we = true, zt = null, t5 !== null && (bt[At++] = xr, bt[At++] = wr, bt[At++] = zn, xr = t5.id, wr = t5.overflow, zn = e), e = xf(e, n.children), e.flags |= 4096, e);
}
function Vp(t5, e, r) {
  t5.lanes |= e;
  var n = t5.alternate;
  n !== null && (n.lanes |= e), gc(t5.return, e, r);
}
function Gu(t5, e, r, n, i) {
  var s = t5.memoizedState;
  s === null ? t5.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: i } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = r, s.tailMode = i);
}
function Yv(t5, e, r) {
  var n = e.pendingProps, i = n.revealOrder, s = n.tail;
  if (nt(t5, e, n.children, r), n = Se.current, n & 2) n = n & 1 | 2, e.flags |= 128;
  else {
    if (t5 !== null && t5.flags & 128) e: for (t5 = e.child; t5 !== null; ) {
      if (t5.tag === 13) t5.memoizedState !== null && Vp(t5, r, e);
      else if (t5.tag === 19) Vp(t5, r, e);
      else if (t5.child !== null) {
        t5.child.return = t5, t5 = t5.child;
        continue;
      }
      if (t5 === e) break e;
      for (; t5.sibling === null; ) {
        if (t5.return === null || t5.return === e) break e;
        t5 = t5.return;
      }
      t5.sibling.return = t5.return, t5 = t5.sibling;
    }
    n &= 1;
  }
  if (fe(Se, n), !(e.mode & 1)) e.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (r = e.child, i = null; r !== null; ) t5 = r.alternate, t5 !== null && dl(t5) === null && (i = r), r = r.sibling;
      r = i, r === null ? (i = e.child, e.child = null) : (i = r.sibling, r.sibling = null), Gu(e, false, i, r, s);
      break;
    case "backwards":
      for (r = null, i = e.child, e.child = null; i !== null; ) {
        if (t5 = i.alternate, t5 !== null && dl(t5) === null) {
          e.child = i;
          break;
        }
        t5 = i.sibling, i.sibling = r, r = i, i = t5;
      }
      Gu(e, true, r, null, s);
      break;
    case "together":
      Gu(e, false, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function Da(t5, e) {
  !(e.mode & 1) && t5 !== null && (t5.alternate = null, e.alternate = null, e.flags |= 2);
}
function Mr(t5, e, r) {
  if (t5 !== null && (e.dependencies = t5.dependencies), jn |= e.lanes, !(r & e.childLanes)) return null;
  if (t5 !== null && e.child !== t5.child) throw Error(F(153));
  if (e.child !== null) {
    for (t5 = e.child, r = on(t5, t5.pendingProps), e.child = r, r.return = e; t5.sibling !== null; ) t5 = t5.sibling, r = r.sibling = on(t5, t5.pendingProps), r.return = e;
    r.sibling = null;
  }
  return e.child;
}
function _1(t5, e, r) {
  switch (e.tag) {
    case 3:
      Xv(e), $i();
      break;
    case 5:
      xv(e);
      break;
    case 1:
      dt(e.type) && ol(e);
      break;
    case 4:
      df(e, e.stateNode.containerInfo);
      break;
    case 10:
      var n = e.type._context, i = e.memoizedProps.value;
      fe(ul, n._currentValue), n._currentValue = i;
      break;
    case 13:
      if (n = e.memoizedState, n !== null) return n.dehydrated !== null ? (fe(Se, Se.current & 1), e.flags |= 128, null) : r & e.child.childLanes ? Wv(t5, e, r) : (fe(Se, Se.current & 1), t5 = Mr(t5, e, r), t5 !== null ? t5.sibling : null);
      fe(Se, Se.current & 1);
      break;
    case 19:
      if (n = (r & e.childLanes) !== 0, t5.flags & 128) {
        if (n) return Yv(t5, e, r);
        e.flags |= 128;
      }
      if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), fe(Se, Se.current), n) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, Vv(t5, e, r);
  }
  return Mr(t5, e, r);
}
var Zv, Tc, Kv, qv;
Zv = function(t5, e) {
  for (var r = e.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) t5.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      r.child.return = r, r = r.child;
      continue;
    }
    if (r === e) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === e) return;
      r = r.return;
    }
    r.sibling.return = r.return, r = r.sibling;
  }
};
Tc = function() {
};
Kv = function(t5, e, r, n) {
  var i = t5.memoizedProps;
  if (i !== n) {
    t5 = e.stateNode, Dn(hr.current);
    var s = null;
    switch (r) {
      case "input":
        i = Xh(t5, i), n = Xh(t5, n), s = [];
        break;
      case "select":
        i = Ae({}, i, { value: void 0 }), n = Ae({}, n, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = Zh(t5, i), n = Zh(t5, n), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (t5.onclick = il);
    }
    qh(r, n);
    var o;
    r = null;
    for (u in i) if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var a = i[u];
      for (o in a) a.hasOwnProperty(o) && (r || (r = {}), r[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ks.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (a = i == null ? void 0 : i[u], n.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (r || (r = {}), r[o] = "");
        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (r || (r = {}), r[o] = l[o]);
      } else r || (s || (s = []), s.push(u, r)), r = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ks.hasOwnProperty(u) ? (l != null && u === "onScroll" && me("scroll", t5), s || a === l || (s = [])) : (s = s || []).push(u, l));
    }
    r && (s = s || []).push("style", r);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
qv = function(t5, e, r, n) {
  r !== n && (e.flags |= 4);
};
function ds(t5, e) {
  if (!we) switch (t5.tailMode) {
    case "hidden":
      e = t5.tail;
      for (var r = null; e !== null; ) e.alternate !== null && (r = e), e = e.sibling;
      r === null ? t5.tail = null : r.sibling = null;
      break;
    case "collapsed":
      r = t5.tail;
      for (var n = null; r !== null; ) r.alternate !== null && (n = r), r = r.sibling;
      n === null ? e || t5.tail === null ? t5.tail = null : t5.tail.sibling = null : n.sibling = null;
  }
}
function Qe(t5) {
  var e = t5.alternate !== null && t5.alternate.child === t5.child, r = 0, n = 0;
  if (e) for (var i = t5.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = t5, i = i.sibling;
  else for (i = t5.child; i !== null; ) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = t5, i = i.sibling;
  return t5.subtreeFlags |= n, t5.childLanes = r, e;
}
function x1(t5, e, r) {
  var n = e.pendingProps;
  switch (sf(e), e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Qe(e), null;
    case 1:
      return dt(e.type) && sl(), Qe(e), null;
    case 3:
      return n = e.stateNode, Wi(), ye(ct), ye(rt), pf(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t5 === null || t5.child === null) && ($o(e) ? e.flags |= 4 : t5 === null || t5.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, zt !== null && (kc(zt), zt = null))), Tc(t5, e), Qe(e), null;
    case 5:
      ff(e);
      var i = Dn(lo.current);
      if (r = e.type, t5 !== null && e.stateNode != null) Kv(t5, e, r, n, i), t5.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!n) {
          if (e.stateNode === null) throw Error(F(166));
          return Qe(e), null;
        }
        if (t5 = Dn(hr.current), $o(e)) {
          n = e.stateNode, r = e.type;
          var s = e.memoizedProps;
          switch (n[ar] = e, n[oo] = s, t5 = (e.mode & 1) !== 0, r) {
            case "dialog":
              me("cancel", n), me("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              me("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ts.length; i++) me(Ts[i], n);
              break;
            case "source":
              me("error", n);
              break;
            case "img":
            case "image":
            case "link":
              me("error", n), me("load", n);
              break;
            case "details":
              me("toggle", n);
              break;
            case "input":
              Jf(n, s), me("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!s.multiple }, me("invalid", n);
              break;
            case "textarea":
              tp(n, s), me("invalid", n);
          }
          qh(r, s), i = null;
          for (var o in s) if (s.hasOwnProperty(o)) {
            var a = s[o];
            o === "children" ? typeof a == "string" ? n.textContent !== a && (s.suppressHydrationWarning !== true && Vo(n.textContent, a, t5), i = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (s.suppressHydrationWarning !== true && Vo(n.textContent, a, t5), i = ["children", "" + a]) : Ks.hasOwnProperty(o) && a != null && o === "onScroll" && me("scroll", n);
          }
          switch (r) {
            case "input":
              No(n), ep(n, s, true);
              break;
            case "textarea":
              No(n), rp(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (n.onclick = il);
          }
          n = i, e.updateQueue = n, n !== null && (e.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, t5 === "http://www.w3.org/1999/xhtml" && (t5 = by(r)), t5 === "http://www.w3.org/1999/xhtml" ? r === "script" ? (t5 = o.createElement("div"), t5.innerHTML = "<script><\/script>", t5 = t5.removeChild(t5.firstChild)) : typeof n.is == "string" ? t5 = o.createElement(r, { is: n.is }) : (t5 = o.createElement(r), r === "select" && (o = t5, n.multiple ? o.multiple = true : n.size && (o.size = n.size))) : t5 = o.createElementNS(t5, r), t5[ar] = e, t5[oo] = n, Zv(t5, e, false, false), e.stateNode = t5;
          e: {
            switch (o = Qh(r, n), r) {
              case "dialog":
                me("cancel", t5), me("close", t5), i = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                me("load", t5), i = n;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ts.length; i++) me(Ts[i], t5);
                i = n;
                break;
              case "source":
                me("error", t5), i = n;
                break;
              case "img":
              case "image":
              case "link":
                me("error", t5), me("load", t5), i = n;
                break;
              case "details":
                me("toggle", t5), i = n;
                break;
              case "input":
                Jf(t5, n), i = Xh(t5, n), me("invalid", t5);
                break;
              case "option":
                i = n;
                break;
              case "select":
                t5._wrapperState = { wasMultiple: !!n.multiple }, i = Ae({}, n, { value: void 0 }), me("invalid", t5);
                break;
              case "textarea":
                tp(t5, n), i = Zh(t5, n), me("invalid", t5);
                break;
              default:
                i = n;
            }
            qh(r, i), a = i;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? Iy(t5, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Ay(t5, l)) : s === "children" ? typeof l == "string" ? (r !== "textarea" || l !== "") && qs(t5, l) : typeof l == "number" && qs(t5, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ks.hasOwnProperty(s) ? l != null && s === "onScroll" && me("scroll", t5) : l != null && jd(t5, s, l, o));
            }
            switch (r) {
              case "input":
                No(t5), ep(t5, n, false);
                break;
              case "textarea":
                No(t5), rp(t5);
                break;
              case "option":
                n.value != null && t5.setAttribute("value", "" + ln(n.value));
                break;
              case "select":
                t5.multiple = !!n.multiple, s = n.value, s != null ? Ii(t5, !!n.multiple, s, false) : n.defaultValue != null && Ii(t5, !!n.multiple, n.defaultValue, true);
                break;
              default:
                typeof i.onClick == "function" && (t5.onclick = il);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = true;
                break e;
              default:
                n = false;
            }
          }
          n && (e.flags |= 4);
        }
        e.ref !== null && (e.flags |= 512, e.flags |= 2097152);
      }
      return Qe(e), null;
    case 6:
      if (t5 && e.stateNode != null) qv(t5, e, t5.memoizedProps, n);
      else {
        if (typeof n != "string" && e.stateNode === null) throw Error(F(166));
        if (r = Dn(lo.current), Dn(hr.current), $o(e)) {
          if (n = e.stateNode, r = e.memoizedProps, n[ar] = e, (s = n.nodeValue !== r) && (t5 = vt, t5 !== null)) switch (t5.tag) {
            case 3:
              Vo(n.nodeValue, r, (t5.mode & 1) !== 0);
              break;
            case 5:
              t5.memoizedProps.suppressHydrationWarning !== true && Vo(n.nodeValue, r, (t5.mode & 1) !== 0);
          }
          s && (e.flags |= 4);
        } else n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n), n[ar] = e, e.stateNode = n;
      }
      return Qe(e), null;
    case 13:
      if (ye(Se), n = e.memoizedState, t5 === null || t5.memoizedState !== null && t5.memoizedState.dehydrated !== null) {
        if (we && gt !== null && e.mode & 1 && !(e.flags & 128)) mv(), $i(), e.flags |= 98560, s = false;
        else if (s = $o(e), n !== null && n.dehydrated !== null) {
          if (t5 === null) {
            if (!s) throw Error(F(318));
            if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(F(317));
            s[ar] = e;
          } else $i(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          Qe(e), s = false;
        } else zt !== null && (kc(zt), zt = null), s = true;
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = r, e) : (n = n !== null, n !== (t5 !== null && t5.memoizedState !== null) && n && (e.child.flags |= 8192, e.mode & 1 && (t5 === null || Se.current & 1 ? Ue === 0 && (Ue = 3) : Af())), e.updateQueue !== null && (e.flags |= 4), Qe(e), null);
    case 4:
      return Wi(), Tc(t5, e), t5 === null && io(e.stateNode.containerInfo), Qe(e), null;
    case 10:
      return uf(e.type._context), Qe(e), null;
    case 17:
      return dt(e.type) && sl(), Qe(e), null;
    case 19:
      if (ye(Se), s = e.memoizedState, s === null) return Qe(e), null;
      if (n = (e.flags & 128) !== 0, o = s.rendering, o === null) if (n) ds(s, false);
      else {
        if (Ue !== 0 || t5 !== null && t5.flags & 128) for (t5 = e.child; t5 !== null; ) {
          if (o = dl(t5), o !== null) {
            for (e.flags |= 128, ds(s, false), n = o.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), e.subtreeFlags = 0, n = r, r = e.child; r !== null; ) s = r, t5 = n, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = t5, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, t5 = o.dependencies, s.dependencies = t5 === null ? null : { lanes: t5.lanes, firstContext: t5.firstContext }), r = r.sibling;
            return fe(Se, Se.current & 1 | 2), e.child;
          }
          t5 = t5.sibling;
        }
        s.tail !== null && Fe() > Zi && (e.flags |= 128, n = true, ds(s, false), e.lanes = 4194304);
      }
      else {
        if (!n) if (t5 = dl(o), t5 !== null) {
          if (e.flags |= 128, n = true, r = t5.updateQueue, r !== null && (e.updateQueue = r, e.flags |= 4), ds(s, true), s.tail === null && s.tailMode === "hidden" && !o.alternate && !we) return Qe(e), null;
        } else 2 * Fe() - s.renderingStartTime > Zi && r !== 1073741824 && (e.flags |= 128, n = true, ds(s, false), e.lanes = 4194304);
        s.isBackwards ? (o.sibling = e.child, e.child = o) : (r = s.last, r !== null ? r.sibling = o : e.child = o, s.last = o);
      }
      return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = Fe(), e.sibling = null, r = Se.current, fe(Se, n ? r & 1 | 2 : r & 1), e) : (Qe(e), null);
    case 22:
    case 23:
      return bf(), n = e.memoizedState !== null, t5 !== null && t5.memoizedState !== null !== n && (e.flags |= 8192), n && e.mode & 1 ? mt & 1073741824 && (Qe(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Qe(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(F(156, e.tag));
}
function w1(t5, e) {
  switch (sf(e), e.tag) {
    case 1:
      return dt(e.type) && sl(), t5 = e.flags, t5 & 65536 ? (e.flags = t5 & -65537 | 128, e) : null;
    case 3:
      return Wi(), ye(ct), ye(rt), pf(), t5 = e.flags, t5 & 65536 && !(t5 & 128) ? (e.flags = t5 & -65537 | 128, e) : null;
    case 5:
      return ff(e), null;
    case 13:
      if (ye(Se), t5 = e.memoizedState, t5 !== null && t5.dehydrated !== null) {
        if (e.alternate === null) throw Error(F(340));
        $i();
      }
      return t5 = e.flags, t5 & 65536 ? (e.flags = t5 & -65537 | 128, e) : null;
    case 19:
      return ye(Se), null;
    case 4:
      return Wi(), null;
    case 10:
      return uf(e.type._context), null;
    case 22:
    case 23:
      return bf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yo = false, Je = false, E1 = typeof WeakSet == "function" ? WeakSet : Set, V = null;
function Si(t5, e) {
  var r = t5.ref;
  if (r !== null) if (typeof r == "function") try {
    r(null);
  } catch (n) {
    Pe(t5, e, n);
  }
  else r.current = null;
}
function bc(t5, e, r) {
  try {
    r();
  } catch (n) {
    Pe(t5, e, n);
  }
}
var $p = false;
function S1(t5, e) {
  if (lc = tl, t5 = rv(), rf(t5)) {
    if ("selectionStart" in t5) var r = { start: t5.selectionStart, end: t5.selectionEnd };
    else e: {
      r = (r = t5.ownerDocument) && r.defaultView || window;
      var n = r.getSelection && r.getSelection();
      if (n && n.rangeCount !== 0) {
        r = n.anchorNode;
        var i = n.anchorOffset, s = n.focusNode;
        n = n.focusOffset;
        try {
          r.nodeType, s.nodeType;
        } catch {
          r = null;
          break e;
        }
        var o = 0, a = -1, l = -1, u = 0, h = 0, c = t5, d = null;
        t: for (; ; ) {
          for (var f; c !== r || i !== 0 && c.nodeType !== 3 || (a = o + i), c !== s || n !== 0 && c.nodeType !== 3 || (l = o + n), c.nodeType === 3 && (o += c.nodeValue.length), (f = c.firstChild) !== null; ) d = c, c = f;
          for (; ; ) {
            if (c === t5) break t;
            if (d === r && ++u === i && (a = o), d === s && ++h === n && (l = o), (f = c.nextSibling) !== null) break;
            c = d, d = c.parentNode;
          }
          c = f;
        }
        r = a === -1 || l === -1 ? null : { start: a, end: l };
      } else r = null;
    }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (uc = { focusedElem: t5, selectionRange: r }, tl = false, V = e; V !== null; ) if (e = V, t5 = e.child, (e.subtreeFlags & 1028) !== 0 && t5 !== null) t5.return = e, V = t5;
  else for (; V !== null; ) {
    e = V;
    try {
      var p = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (p !== null) {
            var y = p.memoizedProps, _ = p.memoizedState, g = e.stateNode, v = g.getSnapshotBeforeUpdate(e.elementType === e.type ? y : Ut(e.type, y), _);
            g.__reactInternalSnapshotBeforeUpdate = v;
          }
          break;
        case 3:
          var m = e.stateNode.containerInfo;
          m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(F(163));
      }
    } catch (x) {
      Pe(e, e.return, x);
    }
    if (t5 = e.sibling, t5 !== null) {
      t5.return = e.return, V = t5;
      break;
    }
    V = e.return;
  }
  return p = $p, $p = false, p;
}
function Gs(t5, e, r) {
  var n = e.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
      if ((i.tag & t5) === t5) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && bc(e, r, s);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Kl(t5, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var r = e = e.next;
    do {
      if ((r.tag & t5) === t5) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== e);
  }
}
function Ac(t5) {
  var e = t5.ref;
  if (e !== null) {
    var r = t5.stateNode;
    switch (t5.tag) {
      case 5:
        t5 = r;
        break;
      default:
        t5 = r;
    }
    typeof e == "function" ? e(t5) : e.current = t5;
  }
}
function Qv(t5) {
  var e = t5.alternate;
  e !== null && (t5.alternate = null, Qv(e)), t5.child = null, t5.deletions = null, t5.sibling = null, t5.tag === 5 && (e = t5.stateNode, e !== null && (delete e[ar], delete e[oo], delete e[dc], delete e[s1], delete e[o1])), t5.stateNode = null, t5.return = null, t5.dependencies = null, t5.memoizedProps = null, t5.memoizedState = null, t5.pendingProps = null, t5.stateNode = null, t5.updateQueue = null;
}
function Jv(t5) {
  return t5.tag === 5 || t5.tag === 3 || t5.tag === 4;
}
function Xp(t5) {
  e: for (; ; ) {
    for (; t5.sibling === null; ) {
      if (t5.return === null || Jv(t5.return)) return null;
      t5 = t5.return;
    }
    for (t5.sibling.return = t5.return, t5 = t5.sibling; t5.tag !== 5 && t5.tag !== 6 && t5.tag !== 18; ) {
      if (t5.flags & 2 || t5.child === null || t5.tag === 4) continue e;
      t5.child.return = t5, t5 = t5.child;
    }
    if (!(t5.flags & 2)) return t5.stateNode;
  }
}
function Cc(t5, e, r) {
  var n = t5.tag;
  if (n === 5 || n === 6) t5 = t5.stateNode, e ? r.nodeType === 8 ? r.parentNode.insertBefore(t5, e) : r.insertBefore(t5, e) : (r.nodeType === 8 ? (e = r.parentNode, e.insertBefore(t5, r)) : (e = r, e.appendChild(t5)), r = r._reactRootContainer, r != null || e.onclick !== null || (e.onclick = il));
  else if (n !== 4 && (t5 = t5.child, t5 !== null)) for (Cc(t5, e, r), t5 = t5.sibling; t5 !== null; ) Cc(t5, e, r), t5 = t5.sibling;
}
function Ic(t5, e, r) {
  var n = t5.tag;
  if (n === 5 || n === 6) t5 = t5.stateNode, e ? r.insertBefore(t5, e) : r.appendChild(t5);
  else if (n !== 4 && (t5 = t5.child, t5 !== null)) for (Ic(t5, e, r), t5 = t5.sibling; t5 !== null; ) Ic(t5, e, r), t5 = t5.sibling;
}
var We = null, Gt = false;
function Or(t5, e, r) {
  for (r = r.child; r !== null; ) e_(t5, e, r), r = r.sibling;
}
function e_(t5, e, r) {
  if (ur && typeof ur.onCommitFiberUnmount == "function") try {
    ur.onCommitFiberUnmount(Hl, r);
  } catch {
  }
  switch (r.tag) {
    case 5:
      Je || Si(r, e);
    case 6:
      var n = We, i = Gt;
      We = null, Or(t5, e, r), We = n, Gt = i, We !== null && (Gt ? (t5 = We, r = r.stateNode, t5.nodeType === 8 ? t5.parentNode.removeChild(r) : t5.removeChild(r)) : We.removeChild(r.stateNode));
      break;
    case 18:
      We !== null && (Gt ? (t5 = We, r = r.stateNode, t5.nodeType === 8 ? Fu(t5.parentNode, r) : t5.nodeType === 1 && Fu(t5, r), to(t5)) : Fu(We, r.stateNode));
      break;
    case 4:
      n = We, i = Gt, We = r.stateNode.containerInfo, Gt = true, Or(t5, e, r), We = n, Gt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Je && (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        i = n = n.next;
        do {
          var s = i, o = s.destroy;
          s = s.tag, o !== void 0 && (s & 2 || s & 4) && bc(r, e, o), i = i.next;
        } while (i !== n);
      }
      Or(t5, e, r);
      break;
    case 1:
      if (!Je && (Si(r, e), n = r.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
      } catch (a) {
        Pe(r, e, a);
      }
      Or(t5, e, r);
      break;
    case 21:
      Or(t5, e, r);
      break;
    case 22:
      r.mode & 1 ? (Je = (n = Je) || r.memoizedState !== null, Or(t5, e, r), Je = n) : Or(t5, e, r);
      break;
    default:
      Or(t5, e, r);
  }
}
function Wp(t5) {
  var e = t5.updateQueue;
  if (e !== null) {
    t5.updateQueue = null;
    var r = t5.stateNode;
    r === null && (r = t5.stateNode = new E1()), e.forEach(function(n) {
      var i = k1.bind(null, t5, n);
      r.has(n) || (r.add(n), n.then(i, i));
    });
  }
}
function Ft(t5, e) {
  var r = e.deletions;
  if (r !== null) for (var n = 0; n < r.length; n++) {
    var i = r[n];
    try {
      var s = t5, o = e, a = o;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            We = a.stateNode, Gt = false;
            break e;
          case 3:
            We = a.stateNode.containerInfo, Gt = true;
            break e;
          case 4:
            We = a.stateNode.containerInfo, Gt = true;
            break e;
        }
        a = a.return;
      }
      if (We === null) throw Error(F(160));
      e_(s, o, i), We = null, Gt = false;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      Pe(i, e, u);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) t_(e, t5), e = e.sibling;
}
function t_(t5, e) {
  var r = t5.alternate, n = t5.flags;
  switch (t5.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ft(e, t5), Zt(t5), n & 4) {
        try {
          Gs(3, t5, t5.return), Kl(3, t5);
        } catch (y) {
          Pe(t5, t5.return, y);
        }
        try {
          Gs(5, t5, t5.return);
        } catch (y) {
          Pe(t5, t5.return, y);
        }
      }
      break;
    case 1:
      Ft(e, t5), Zt(t5), n & 512 && r !== null && Si(r, r.return);
      break;
    case 5:
      if (Ft(e, t5), Zt(t5), n & 512 && r !== null && Si(r, r.return), t5.flags & 32) {
        var i = t5.stateNode;
        try {
          qs(i, "");
        } catch (y) {
          Pe(t5, t5.return, y);
        }
      }
      if (n & 4 && (i = t5.stateNode, i != null)) {
        var s = t5.memoizedProps, o = r !== null ? r.memoizedProps : s, a = t5.type, l = t5.updateQueue;
        if (t5.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && Sy(i, s), Qh(a, o);
          var u = Qh(a, s);
          for (o = 0; o < l.length; o += 2) {
            var h = l[o], c = l[o + 1];
            h === "style" ? Iy(i, c) : h === "dangerouslySetInnerHTML" ? Ay(i, c) : h === "children" ? qs(i, c) : jd(i, h, c, u);
          }
          switch (a) {
            case "input":
              Wh(i, s);
              break;
            case "textarea":
              Ty(i, s);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var f = s.value;
              f != null ? Ii(i, !!s.multiple, f, false) : d !== !!s.multiple && (s.defaultValue != null ? Ii(i, !!s.multiple, s.defaultValue, true) : Ii(i, !!s.multiple, s.multiple ? [] : "", false));
          }
          i[oo] = s;
        } catch (y) {
          Pe(t5, t5.return, y);
        }
      }
      break;
    case 6:
      if (Ft(e, t5), Zt(t5), n & 4) {
        if (t5.stateNode === null) throw Error(F(162));
        i = t5.stateNode, s = t5.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (y) {
          Pe(t5, t5.return, y);
        }
      }
      break;
    case 3:
      if (Ft(e, t5), Zt(t5), n & 4 && r !== null && r.memoizedState.isDehydrated) try {
        to(e.containerInfo);
      } catch (y) {
        Pe(t5, t5.return, y);
      }
      break;
    case 4:
      Ft(e, t5), Zt(t5);
      break;
    case 13:
      Ft(e, t5), Zt(t5), i = t5.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Sf = Fe())), n & 4 && Wp(t5);
      break;
    case 22:
      if (h = r !== null && r.memoizedState !== null, t5.mode & 1 ? (Je = (u = Je) || h, Ft(e, t5), Je = u) : Ft(e, t5), Zt(t5), n & 8192) {
        if (u = t5.memoizedState !== null, (t5.stateNode.isHidden = u) && !h && t5.mode & 1) for (V = t5, h = t5.child; h !== null; ) {
          for (c = V = h; V !== null; ) {
            switch (d = V, f = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Gs(4, d, d.return);
                break;
              case 1:
                Si(d, d.return);
                var p = d.stateNode;
                if (typeof p.componentWillUnmount == "function") {
                  n = d, r = d.return;
                  try {
                    e = n, p.props = e.memoizedProps, p.state = e.memoizedState, p.componentWillUnmount();
                  } catch (y) {
                    Pe(n, r, y);
                  }
                }
                break;
              case 5:
                Si(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  Zp(c);
                  continue;
                }
            }
            f !== null ? (f.return = d, V = f) : Zp(c);
          }
          h = h.sibling;
        }
        e: for (h = null, c = t5; ; ) {
          if (c.tag === 5) {
            if (h === null) {
              h = c;
              try {
                i = c.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = c.stateNode, l = c.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Cy("display", o));
              } catch (y) {
                Pe(t5, t5.return, y);
              }
            }
          } else if (c.tag === 6) {
            if (h === null) try {
              c.stateNode.nodeValue = u ? "" : c.memoizedProps;
            } catch (y) {
              Pe(t5, t5.return, y);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === t5) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === t5) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === t5) break e;
            h === c && (h = null), c = c.return;
          }
          h === c && (h = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      Ft(e, t5), Zt(t5), n & 4 && Wp(t5);
      break;
    case 21:
      break;
    default:
      Ft(e, t5), Zt(t5);
  }
}
function Zt(t5) {
  var e = t5.flags;
  if (e & 2) {
    try {
      e: {
        for (var r = t5.return; r !== null; ) {
          if (Jv(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(F(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (qs(i, ""), n.flags &= -33);
          var s = Xp(t5);
          Ic(t5, s, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo, a = Xp(t5);
          Cc(t5, a, o);
          break;
        default:
          throw Error(F(161));
      }
    } catch (l) {
      Pe(t5, t5.return, l);
    }
    t5.flags &= -3;
  }
  e & 4096 && (t5.flags &= -4097);
}
function T1(t5, e, r) {
  V = t5, r_(t5);
}
function r_(t5, e, r) {
  for (var n = (t5.mode & 1) !== 0; V !== null; ) {
    var i = V, s = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || Yo;
      if (!o) {
        var a = i.alternate, l = a !== null && a.memoizedState !== null || Je;
        a = Yo;
        var u = Je;
        if (Yo = o, (Je = l) && !u) for (V = i; V !== null; ) o = V, l = o.child, o.tag === 22 && o.memoizedState !== null ? Kp(i) : l !== null ? (l.return = o, V = l) : Kp(i);
        for (; s !== null; ) V = s, r_(s), s = s.sibling;
        V = i, Yo = a, Je = u;
      }
      Yp(t5);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, V = s) : Yp(t5);
  }
}
function Yp(t5) {
  for (; V !== null; ) {
    var e = V;
    if (e.flags & 8772) {
      var r = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Je || Kl(5, e);
            break;
          case 1:
            var n = e.stateNode;
            if (e.flags & 4 && !Je) if (r === null) n.componentDidMount();
            else {
              var i = e.elementType === e.type ? r.memoizedProps : Ut(e.type, r.memoizedProps);
              n.componentDidUpdate(i, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var s = e.updateQueue;
            s !== null && kp(e, s, n);
            break;
          case 3:
            var o = e.updateQueue;
            if (o !== null) {
              if (r = null, e.child !== null) switch (e.child.tag) {
                case 5:
                  r = e.child.stateNode;
                  break;
                case 1:
                  r = e.child.stateNode;
              }
              kp(e, o, r);
            }
            break;
          case 5:
            var a = e.stateNode;
            if (r === null && e.flags & 4) {
              r = a;
              var l = e.memoizedProps;
              switch (e.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && r.focus();
                  break;
                case "img":
                  l.src && (r.src = l.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (e.memoizedState === null) {
              var u = e.alternate;
              if (u !== null) {
                var h = u.memoizedState;
                if (h !== null) {
                  var c = h.dehydrated;
                  c !== null && to(c);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(F(163));
        }
        Je || e.flags & 512 && Ac(e);
      } catch (d) {
        Pe(e, e.return, d);
      }
    }
    if (e === t5) {
      V = null;
      break;
    }
    if (r = e.sibling, r !== null) {
      r.return = e.return, V = r;
      break;
    }
    V = e.return;
  }
}
function Zp(t5) {
  for (; V !== null; ) {
    var e = V;
    if (e === t5) {
      V = null;
      break;
    }
    var r = e.sibling;
    if (r !== null) {
      r.return = e.return, V = r;
      break;
    }
    V = e.return;
  }
}
function Kp(t5) {
  for (; V !== null; ) {
    var e = V;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var r = e.return;
          try {
            Kl(4, e);
          } catch (l) {
            Pe(e, r, l);
          }
          break;
        case 1:
          var n = e.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = e.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Pe(e, i, l);
            }
          }
          var s = e.return;
          try {
            Ac(e);
          } catch (l) {
            Pe(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Ac(e);
          } catch (l) {
            Pe(e, o, l);
          }
      }
    } catch (l) {
      Pe(e, e.return, l);
    }
    if (e === t5) {
      V = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      a.return = e.return, V = a;
      break;
    }
    V = e.return;
  }
}
var b1 = Math.ceil, ml = Br.ReactCurrentDispatcher, wf = Br.ReactCurrentOwner, Pt = Br.ReactCurrentBatchConfig, le = 0, Ve = null, Be = null, Ze = 0, mt = 0, Ti = fn(0), Ue = 0, fo = null, jn = 0, ql = 0, Ef = 0, zs = null, lt = null, Sf = 0, Zi = 1 / 0, yr = null, gl = false, Rc = null, nn = null, Zo = false, Yr = null, yl = 0, Hs = 0, Pc = null, Ba = -1, Na = 0;
function st() {
  return le & 6 ? Fe() : Ba !== -1 ? Ba : Ba = Fe();
}
function sn(t5) {
  return t5.mode & 1 ? le & 2 && Ze !== 0 ? Ze & -Ze : l1.transition !== null ? (Na === 0 && (Na = Gy()), Na) : (t5 = de, t5 !== 0 || (t5 = window.event, t5 = t5 === void 0 ? 16 : Wy(t5.type)), t5) : 1;
}
function Vt(t5, e, r, n) {
  if (50 < Hs) throw Hs = 0, Pc = null, Error(F(185));
  Eo(t5, r, n), (!(le & 2) || t5 !== Ve) && (t5 === Ve && (!(le & 2) && (ql |= r), Ue === 4 && $r(t5, Ze)), ft(t5, n), r === 1 && le === 0 && !(e.mode & 1) && (Zi = Fe() + 500, Wl && pn()));
}
function ft(t5, e) {
  var r = t5.callbackNode;
  lw(t5, e);
  var n = el(t5, t5 === Ve ? Ze : 0);
  if (n === 0) r !== null && sp(r), t5.callbackNode = null, t5.callbackPriority = 0;
  else if (e = n & -n, t5.callbackPriority !== e) {
    if (r != null && sp(r), e === 1) t5.tag === 0 ? a1(qp.bind(null, t5)) : dv(qp.bind(null, t5)), n1(function() {
      !(le & 6) && pn();
    }), r = null;
    else {
      switch (zy(n)) {
        case 1:
          r = Yd;
          break;
        case 4:
          r = Ly;
          break;
        case 16:
          r = Ja;
          break;
        case 536870912:
          r = Uy;
          break;
        default:
          r = Ja;
      }
      r = h_(r, n_.bind(null, t5));
    }
    t5.callbackPriority = e, t5.callbackNode = r;
  }
}
function n_(t5, e) {
  if (Ba = -1, Na = 0, le & 6) throw Error(F(327));
  var r = t5.callbackNode;
  if (Fi() && t5.callbackNode !== r) return null;
  var n = el(t5, t5 === Ve ? Ze : 0);
  if (n === 0) return null;
  if (n & 30 || n & t5.expiredLanes || e) e = vl(t5, n);
  else {
    e = n;
    var i = le;
    le |= 2;
    var s = s_();
    (Ve !== t5 || Ze !== e) && (yr = null, Zi = Fe() + 500, Bn(t5, e));
    do
      try {
        I1();
        break;
      } catch (a) {
        i_(t5, a);
      }
    while (true);
    lf(), ml.current = s, le = i, Be !== null ? e = 0 : (Ve = null, Ze = 0, e = Ue);
  }
  if (e !== 0) {
    if (e === 2 && (i = nc(t5), i !== 0 && (n = i, e = Mc(t5, i))), e === 1) throw r = fo, Bn(t5, 0), $r(t5, n), ft(t5, Fe()), r;
    if (e === 6) $r(t5, n);
    else {
      if (i = t5.current.alternate, !(n & 30) && !A1(i) && (e = vl(t5, n), e === 2 && (s = nc(t5), s !== 0 && (n = s, e = Mc(t5, s))), e === 1)) throw r = fo, Bn(t5, 0), $r(t5, n), ft(t5, Fe()), r;
      switch (t5.finishedWork = i, t5.finishedLanes = n, e) {
        case 0:
        case 1:
          throw Error(F(345));
        case 2:
          xn(t5, lt, yr);
          break;
        case 3:
          if ($r(t5, n), (n & 130023424) === n && (e = Sf + 500 - Fe(), 10 < e)) {
            if (el(t5, 0) !== 0) break;
            if (i = t5.suspendedLanes, (i & n) !== n) {
              st(), t5.pingedLanes |= t5.suspendedLanes & i;
              break;
            }
            t5.timeoutHandle = cc(xn.bind(null, t5, lt, yr), e);
            break;
          }
          xn(t5, lt, yr);
          break;
        case 4:
          if ($r(t5, n), (n & 4194240) === n) break;
          for (e = t5.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - jt(n);
            s = 1 << o, o = e[o], o > i && (i = o), n &= ~s;
          }
          if (n = i, n = Fe() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * b1(n / 1960)) - n, 10 < n) {
            t5.timeoutHandle = cc(xn.bind(null, t5, lt, yr), n);
            break;
          }
          xn(t5, lt, yr);
          break;
        case 5:
          xn(t5, lt, yr);
          break;
        default:
          throw Error(F(329));
      }
    }
  }
  return ft(t5, Fe()), t5.callbackNode === r ? n_.bind(null, t5) : null;
}
function Mc(t5, e) {
  var r = zs;
  return t5.current.memoizedState.isDehydrated && (Bn(t5, e).flags |= 256), t5 = vl(t5, e), t5 !== 2 && (e = lt, lt = r, e !== null && kc(e)), t5;
}
function kc(t5) {
  lt === null ? lt = t5 : lt.push.apply(lt, t5);
}
function A1(t5) {
  for (var e = t5; ; ) {
    if (e.flags & 16384) {
      var r = e.updateQueue;
      if (r !== null && (r = r.stores, r !== null)) for (var n = 0; n < r.length; n++) {
        var i = r[n], s = i.getSnapshot;
        i = i.value;
        try {
          if (!Wt(s(), i)) return false;
        } catch {
          return false;
        }
      }
    }
    if (r = e.child, e.subtreeFlags & 16384 && r !== null) r.return = e, e = r;
    else {
      if (e === t5) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t5) return true;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return true;
}
function $r(t5, e) {
  for (e &= ~Ef, e &= ~ql, t5.suspendedLanes |= e, t5.pingedLanes &= ~e, t5 = t5.expirationTimes; 0 < e; ) {
    var r = 31 - jt(e), n = 1 << r;
    t5[r] = -1, e &= ~n;
  }
}
function qp(t5) {
  if (le & 6) throw Error(F(327));
  Fi();
  var e = el(t5, 0);
  if (!(e & 1)) return ft(t5, Fe()), null;
  var r = vl(t5, e);
  if (t5.tag !== 0 && r === 2) {
    var n = nc(t5);
    n !== 0 && (e = n, r = Mc(t5, n));
  }
  if (r === 1) throw r = fo, Bn(t5, 0), $r(t5, e), ft(t5, Fe()), r;
  if (r === 6) throw Error(F(345));
  return t5.finishedWork = t5.current.alternate, t5.finishedLanes = e, xn(t5, lt, yr), ft(t5, Fe()), null;
}
function Tf(t5, e) {
  var r = le;
  le |= 1;
  try {
    return t5(e);
  } finally {
    le = r, le === 0 && (Zi = Fe() + 500, Wl && pn());
  }
}
function Vn(t5) {
  Yr !== null && Yr.tag === 0 && !(le & 6) && Fi();
  var e = le;
  le |= 1;
  var r = Pt.transition, n = de;
  try {
    if (Pt.transition = null, de = 1, t5) return t5();
  } finally {
    de = n, Pt.transition = r, le = e, !(le & 6) && pn();
  }
}
function bf() {
  mt = Ti.current, ye(Ti);
}
function Bn(t5, e) {
  t5.finishedWork = null, t5.finishedLanes = 0;
  var r = t5.timeoutHandle;
  if (r !== -1 && (t5.timeoutHandle = -1, r1(r)), Be !== null) for (r = Be.return; r !== null; ) {
    var n = r;
    switch (sf(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && sl();
        break;
      case 3:
        Wi(), ye(ct), ye(rt), pf();
        break;
      case 5:
        ff(n);
        break;
      case 4:
        Wi();
        break;
      case 13:
        ye(Se);
        break;
      case 19:
        ye(Se);
        break;
      case 10:
        uf(n.type._context);
        break;
      case 22:
      case 23:
        bf();
    }
    r = r.return;
  }
  if (Ve = t5, Be = t5 = on(t5.current, null), Ze = mt = e, Ue = 0, fo = null, Ef = ql = jn = 0, lt = zs = null, Fn !== null) {
    for (e = 0; e < Fn.length; e++) if (r = Fn[e], n = r.interleaved, n !== null) {
      r.interleaved = null;
      var i = n.next, s = r.pending;
      if (s !== null) {
        var o = s.next;
        s.next = i, n.next = o;
      }
      r.pending = n;
    }
    Fn = null;
  }
  return t5;
}
function i_(t5, e) {
  do {
    var r = Be;
    try {
      if (lf(), ka.current = pl, fl) {
        for (var n = be.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), n = n.next;
        }
        fl = false;
      }
      if (Hn = 0, ze = Le = be = null, Us = false, uo = 0, wf.current = null, r === null || r.return === null) {
        Ue = 1, fo = e, Be = null;
        break;
      }
      e: {
        var s = t5, o = r.return, a = r, l = e;
        if (e = Ze, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, h = a, c = h.tag;
          if (!(h.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = h.alternate;
            d ? (h.updateQueue = d.updateQueue, h.memoizedState = d.memoizedState, h.lanes = d.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var f = Lp(o);
          if (f !== null) {
            f.flags &= -257, Up(f, o, a, s, e), f.mode & 1 && Op(s, u, e), e = f, l = u;
            var p = e.updateQueue;
            if (p === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), e.updateQueue = y;
            } else p.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              Op(s, u, e), Af();
              break e;
            }
            l = Error(F(426));
          }
        } else if (we && a.mode & 1) {
          var _ = Lp(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), Up(_, o, a, s, e), of(Yi(l, a));
            break e;
          }
        }
        s = l = Yi(l, a), Ue !== 4 && (Ue = 2), zs === null ? zs = [s] : zs.push(s), s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, e &= -e, s.lanes |= e;
              var g = zv(s, l, e);
              Mp(s, g);
              break e;
            case 1:
              a = l;
              var v = s.type, m = s.stateNode;
              if (!(s.flags & 128) && (typeof v.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (nn === null || !nn.has(m)))) {
                s.flags |= 65536, e &= -e, s.lanes |= e;
                var x = Hv(s, a, e);
                Mp(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      a_(r);
    } catch (w) {
      e = w, Be === r && r !== null && (Be = r = r.return);
      continue;
    }
    break;
  } while (true);
}
function s_() {
  var t5 = ml.current;
  return ml.current = pl, t5 === null ? pl : t5;
}
function Af() {
  (Ue === 0 || Ue === 3 || Ue === 2) && (Ue = 4), Ve === null || !(jn & 268435455) && !(ql & 268435455) || $r(Ve, Ze);
}
function vl(t5, e) {
  var r = le;
  le |= 2;
  var n = s_();
  (Ve !== t5 || Ze !== e) && (yr = null, Bn(t5, e));
  do
    try {
      C1();
      break;
    } catch (i) {
      i_(t5, i);
    }
  while (true);
  if (lf(), le = r, ml.current = n, Be !== null) throw Error(F(261));
  return Ve = null, Ze = 0, Ue;
}
function C1() {
  for (; Be !== null; ) o_(Be);
}
function I1() {
  for (; Be !== null && !Jx(); ) o_(Be);
}
function o_(t5) {
  var e = u_(t5.alternate, t5, mt);
  t5.memoizedProps = t5.pendingProps, e === null ? a_(t5) : Be = e, wf.current = null;
}
function a_(t5) {
  var e = t5;
  do {
    var r = e.alternate;
    if (t5 = e.return, e.flags & 32768) {
      if (r = w1(r, e), r !== null) {
        r.flags &= 32767, Be = r;
        return;
      }
      if (t5 !== null) t5.flags |= 32768, t5.subtreeFlags = 0, t5.deletions = null;
      else {
        Ue = 6, Be = null;
        return;
      }
    } else if (r = x1(r, e, mt), r !== null) {
      Be = r;
      return;
    }
    if (e = e.sibling, e !== null) {
      Be = e;
      return;
    }
    Be = e = t5;
  } while (e !== null);
  Ue === 0 && (Ue = 5);
}
function xn(t5, e, r) {
  var n = de, i = Pt.transition;
  try {
    Pt.transition = null, de = 1, R1(t5, e, r, n);
  } finally {
    Pt.transition = i, de = n;
  }
  return null;
}
function R1(t5, e, r, n) {
  do
    Fi();
  while (Yr !== null);
  if (le & 6) throw Error(F(327));
  r = t5.finishedWork;
  var i = t5.finishedLanes;
  if (r === null) return null;
  if (t5.finishedWork = null, t5.finishedLanes = 0, r === t5.current) throw Error(F(177));
  t5.callbackNode = null, t5.callbackPriority = 0;
  var s = r.lanes | r.childLanes;
  if (uw(t5, s), t5 === Ve && (Be = Ve = null, Ze = 0), !(r.subtreeFlags & 2064) && !(r.flags & 2064) || Zo || (Zo = true, h_(Ja, function() {
    return Fi(), null;
  })), s = (r.flags & 15990) !== 0, r.subtreeFlags & 15990 || s) {
    s = Pt.transition, Pt.transition = null;
    var o = de;
    de = 1;
    var a = le;
    le |= 4, wf.current = null, S1(t5, r), t_(r, t5), Zw(uc), tl = !!lc, uc = lc = null, t5.current = r, T1(r), ew(), le = a, de = o, Pt.transition = s;
  } else t5.current = r;
  if (Zo && (Zo = false, Yr = t5, yl = i), s = t5.pendingLanes, s === 0 && (nn = null), nw(r.stateNode), ft(t5, Fe()), e !== null) for (n = t5.onRecoverableError, r = 0; r < e.length; r++) i = e[r], n(i.value, { componentStack: i.stack, digest: i.digest });
  if (gl) throw gl = false, t5 = Rc, Rc = null, t5;
  return yl & 1 && t5.tag !== 0 && Fi(), s = t5.pendingLanes, s & 1 ? t5 === Pc ? Hs++ : (Hs = 0, Pc = t5) : Hs = 0, pn(), null;
}
function Fi() {
  if (Yr !== null) {
    var t5 = zy(yl), e = Pt.transition, r = de;
    try {
      if (Pt.transition = null, de = 16 > t5 ? 16 : t5, Yr === null) var n = false;
      else {
        if (t5 = Yr, Yr = null, yl = 0, le & 6) throw Error(F(331));
        var i = le;
        for (le |= 4, V = t5.current; V !== null; ) {
          var s = V, o = s.child;
          if (V.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (V = u; V !== null; ) {
                  var h = V;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gs(8, h, s);
                  }
                  var c = h.child;
                  if (c !== null) c.return = h, V = c;
                  else for (; V !== null; ) {
                    h = V;
                    var d = h.sibling, f = h.return;
                    if (Qv(h), h === u) {
                      V = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = f, V = d;
                      break;
                    }
                    V = f;
                  }
                }
              }
              var p = s.alternate;
              if (p !== null) {
                var y = p.child;
                if (y !== null) {
                  p.child = null;
                  do {
                    var _ = y.sibling;
                    y.sibling = null, y = _;
                  } while (y !== null);
                }
              }
              V = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) o.return = s, V = o;
          else e: for (; V !== null; ) {
            if (s = V, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Gs(9, s, s.return);
            }
            var g = s.sibling;
            if (g !== null) {
              g.return = s.return, V = g;
              break e;
            }
            V = s.return;
          }
        }
        var v = t5.current;
        for (V = v; V !== null; ) {
          o = V;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, V = m;
          else e: for (o = v; V !== null; ) {
            if (a = V, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Kl(9, a);
              }
            } catch (w) {
              Pe(a, a.return, w);
            }
            if (a === o) {
              V = null;
              break e;
            }
            var x = a.sibling;
            if (x !== null) {
              x.return = a.return, V = x;
              break e;
            }
            V = a.return;
          }
        }
        if (le = i, pn(), ur && typeof ur.onPostCommitFiberRoot == "function") try {
          ur.onPostCommitFiberRoot(Hl, t5);
        } catch {
        }
        n = true;
      }
      return n;
    } finally {
      de = r, Pt.transition = e;
    }
  }
  return false;
}
function Qp(t5, e, r) {
  e = Yi(r, e), e = zv(t5, e, 1), t5 = rn(t5, e, 1), e = st(), t5 !== null && (Eo(t5, 1, e), ft(t5, e));
}
function Pe(t5, e, r) {
  if (t5.tag === 3) Qp(t5, t5, r);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      Qp(e, t5, r);
      break;
    } else if (e.tag === 1) {
      var n = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (nn === null || !nn.has(n))) {
        t5 = Yi(r, t5), t5 = Hv(e, t5, 1), e = rn(e, t5, 1), t5 = st(), e !== null && (Eo(e, 1, t5), ft(e, t5));
        break;
      }
    }
    e = e.return;
  }
}
function P1(t5, e, r) {
  var n = t5.pingCache;
  n !== null && n.delete(e), e = st(), t5.pingedLanes |= t5.suspendedLanes & r, Ve === t5 && (Ze & r) === r && (Ue === 4 || Ue === 3 && (Ze & 130023424) === Ze && 500 > Fe() - Sf ? Bn(t5, 0) : Ef |= r), ft(t5, e);
}
function l_(t5, e) {
  e === 0 && (t5.mode & 1 ? (e = Uo, Uo <<= 1, !(Uo & 130023424) && (Uo = 4194304)) : e = 1);
  var r = st();
  t5 = Pr(t5, e), t5 !== null && (Eo(t5, e, r), ft(t5, r));
}
function M1(t5) {
  var e = t5.memoizedState, r = 0;
  e !== null && (r = e.retryLane), l_(t5, r);
}
function k1(t5, e) {
  var r = 0;
  switch (t5.tag) {
    case 13:
      var n = t5.stateNode, i = t5.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = t5.stateNode;
      break;
    default:
      throw Error(F(314));
  }
  n !== null && n.delete(e), l_(t5, r);
}
var u_;
u_ = function(t5, e, r) {
  if (t5 !== null) if (t5.memoizedProps !== e.pendingProps || ct.current) ut = true;
  else {
    if (!(t5.lanes & r) && !(e.flags & 128)) return ut = false, _1(t5, e, r);
    ut = !!(t5.flags & 131072);
  }
  else ut = false, we && e.flags & 1048576 && fv(e, ll, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var n = e.type;
      Da(t5, e), t5 = e.pendingProps;
      var i = Vi(e, rt.current);
      ki(e, r), i = gf(null, e, n, t5, i, r);
      var s = yf();
      return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, dt(n) ? (s = true, ol(e)) : s = false, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, cf(e), i.updater = Zl, e.stateNode = i, i._reactInternals = e, vc(e, n, t5, r), e = wc(null, e, n, true, s, r)) : (e.tag = 0, we && s && nf(e), nt(null, e, i, r), e = e.child), e;
    case 16:
      n = e.elementType;
      e: {
        switch (Da(t5, e), t5 = e.pendingProps, i = n._init, n = i(n._payload), e.type = n, i = e.tag = D1(n), t5 = Ut(n, t5), i) {
          case 0:
            e = xc(null, e, n, t5, r);
            break e;
          case 1:
            e = Hp(null, e, n, t5, r);
            break e;
          case 11:
            e = Gp(null, e, n, t5, r);
            break e;
          case 14:
            e = zp(null, e, n, Ut(n.type, t5), r);
            break e;
        }
        throw Error(F(306, n, ""));
      }
      return e;
    case 0:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Ut(n, i), xc(t5, e, n, i, r);
    case 1:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Ut(n, i), Hp(t5, e, n, i, r);
    case 3:
      e: {
        if (Xv(e), t5 === null) throw Error(F(387));
        n = e.pendingProps, s = e.memoizedState, i = s.element, _v(t5, e), cl(e, n, null, r);
        var o = e.memoizedState;
        if (n = o.element, s.isDehydrated) if (s = { element: n, isDehydrated: false, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
          i = Yi(Error(F(423)), e), e = jp(t5, e, n, r, i);
          break e;
        } else if (n !== i) {
          i = Yi(Error(F(424)), e), e = jp(t5, e, n, r, i);
          break e;
        } else for (gt = tn(e.stateNode.containerInfo.firstChild), vt = e, we = true, zt = null, r = yv(e, null, n, r), e.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
        else {
          if ($i(), n === i) {
            e = Mr(t5, e, r);
            break e;
          }
          nt(t5, e, n, r);
        }
        e = e.child;
      }
      return e;
    case 5:
      return xv(e), t5 === null && mc(e), n = e.type, i = e.pendingProps, s = t5 !== null ? t5.memoizedProps : null, o = i.children, hc(n, i) ? o = null : s !== null && hc(n, s) && (e.flags |= 32), $v(t5, e), nt(t5, e, o, r), e.child;
    case 6:
      return t5 === null && mc(e), null;
    case 13:
      return Wv(t5, e, r);
    case 4:
      return df(e, e.stateNode.containerInfo), n = e.pendingProps, t5 === null ? e.child = Xi(e, null, n, r) : nt(t5, e, n, r), e.child;
    case 11:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Ut(n, i), Gp(t5, e, n, i, r);
    case 7:
      return nt(t5, e, e.pendingProps, r), e.child;
    case 8:
      return nt(t5, e, e.pendingProps.children, r), e.child;
    case 12:
      return nt(t5, e, e.pendingProps.children, r), e.child;
    case 10:
      e: {
        if (n = e.type._context, i = e.pendingProps, s = e.memoizedProps, o = i.value, fe(ul, n._currentValue), n._currentValue = o, s !== null) if (Wt(s.value, o)) {
          if (s.children === i.children && !ct.current) {
            e = Mr(t5, e, r);
            break e;
          }
        } else for (s = e.child, s !== null && (s.return = e); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            o = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === n) {
                if (s.tag === 1) {
                  l = Ar(-1, r & -r), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var h = u.pending;
                    h === null ? l.next = l : (l.next = h.next, h.next = l), u.pending = l;
                  }
                }
                s.lanes |= r, l = s.alternate, l !== null && (l.lanes |= r), gc(s.return, r, e), a.lanes |= r;
                break;
              }
              l = l.next;
            }
          } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
          else if (s.tag === 18) {
            if (o = s.return, o === null) throw Error(F(341));
            o.lanes |= r, a = o.alternate, a !== null && (a.lanes |= r), gc(o, r, e), o = s.sibling;
          } else o = s.child;
          if (o !== null) o.return = s;
          else for (o = s; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            if (s = o.sibling, s !== null) {
              s.return = o.return, o = s;
              break;
            }
            o = o.return;
          }
          s = o;
        }
        nt(t5, e, i.children, r), e = e.child;
      }
      return e;
    case 9:
      return i = e.type, n = e.pendingProps.children, ki(e, r), i = Mt(i), n = n(i), e.flags |= 1, nt(t5, e, n, r), e.child;
    case 14:
      return n = e.type, i = Ut(n, e.pendingProps), i = Ut(n.type, i), zp(t5, e, n, i, r);
    case 15:
      return jv(t5, e, e.type, e.pendingProps, r);
    case 17:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Ut(n, i), Da(t5, e), e.tag = 1, dt(n) ? (t5 = true, ol(e)) : t5 = false, ki(e, r), Gv(e, n, i), vc(e, n, i, r), wc(null, e, n, true, t5, r);
    case 19:
      return Yv(t5, e, r);
    case 22:
      return Vv(t5, e, r);
  }
  throw Error(F(156, e.tag));
};
function h_(t5, e) {
  return Oy(t5, e);
}
function F1(t5, e, r, n) {
  this.tag = t5, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ct(t5, e, r, n) {
  return new F1(t5, e, r, n);
}
function Cf(t5) {
  return t5 = t5.prototype, !(!t5 || !t5.isReactComponent);
}
function D1(t5) {
  if (typeof t5 == "function") return Cf(t5) ? 1 : 0;
  if (t5 != null) {
    if (t5 = t5.$$typeof, t5 === $d) return 11;
    if (t5 === Xd) return 14;
  }
  return 2;
}
function on(t5, e) {
  var r = t5.alternate;
  return r === null ? (r = Ct(t5.tag, e, t5.key, t5.mode), r.elementType = t5.elementType, r.type = t5.type, r.stateNode = t5.stateNode, r.alternate = t5, t5.alternate = r) : (r.pendingProps = e, r.type = t5.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = t5.flags & 14680064, r.childLanes = t5.childLanes, r.lanes = t5.lanes, r.child = t5.child, r.memoizedProps = t5.memoizedProps, r.memoizedState = t5.memoizedState, r.updateQueue = t5.updateQueue, e = t5.dependencies, r.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, r.sibling = t5.sibling, r.index = t5.index, r.ref = t5.ref, r;
}
function Oa(t5, e, r, n, i, s) {
  var o = 2;
  if (n = t5, typeof t5 == "function") Cf(t5) && (o = 1);
  else if (typeof t5 == "string") o = 5;
  else e: switch (t5) {
    case pi:
      return Nn(r.children, i, s, e);
    case Vd:
      o = 8, i |= 8;
      break;
    case Hh:
      return t5 = Ct(12, r, e, i | 2), t5.elementType = Hh, t5.lanes = s, t5;
    case jh:
      return t5 = Ct(13, r, e, i), t5.elementType = jh, t5.lanes = s, t5;
    case Vh:
      return t5 = Ct(19, r, e, i), t5.elementType = Vh, t5.lanes = s, t5;
    case xy:
      return Ql(r, i, s, e);
    default:
      if (typeof t5 == "object" && t5 !== null) switch (t5.$$typeof) {
        case vy:
          o = 10;
          break e;
        case _y:
          o = 9;
          break e;
        case $d:
          o = 11;
          break e;
        case Xd:
          o = 14;
          break e;
        case zr:
          o = 16, n = null;
          break e;
      }
      throw Error(F(130, t5 == null ? t5 : typeof t5, ""));
  }
  return e = Ct(o, r, e, i), e.elementType = t5, e.type = n, e.lanes = s, e;
}
function Nn(t5, e, r, n) {
  return t5 = Ct(7, t5, n, e), t5.lanes = r, t5;
}
function Ql(t5, e, r, n) {
  return t5 = Ct(22, t5, n, e), t5.elementType = xy, t5.lanes = r, t5.stateNode = { isHidden: false }, t5;
}
function zu(t5, e, r) {
  return t5 = Ct(6, t5, null, e), t5.lanes = r, t5;
}
function Hu(t5, e, r) {
  return e = Ct(4, t5.children !== null ? t5.children : [], t5.key, e), e.lanes = r, e.stateNode = { containerInfo: t5.containerInfo, pendingChildren: null, implementation: t5.implementation }, e;
}
function B1(t5, e, r, n, i) {
  this.tag = e, this.containerInfo = t5, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Eu(0), this.expirationTimes = Eu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Eu(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function If(t5, e, r, n, i, s, o, a, l) {
  return t5 = new B1(t5, e, r, a, l), e === 1 ? (e = 1, s === true && (e |= 8)) : e = 0, s = Ct(3, null, null, e), t5.current = s, s.stateNode = t5, s.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, cf(s), t5;
}
function N1(t5, e, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: fi, key: n == null ? null : "" + n, children: t5, containerInfo: e, implementation: r };
}
function c_(t5) {
  if (!t5) return un;
  t5 = t5._reactInternals;
  e: {
    if (Kn(t5) !== t5 || t5.tag !== 1) throw Error(F(170));
    var e = t5;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (dt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(F(171));
  }
  if (t5.tag === 1) {
    var r = t5.type;
    if (dt(r)) return cv(t5, r, e);
  }
  return e;
}
function d_(t5, e, r, n, i, s, o, a, l) {
  return t5 = If(r, n, true, t5, i, s, o, a, l), t5.context = c_(null), r = t5.current, n = st(), i = sn(r), s = Ar(n, i), s.callback = e ?? null, rn(r, s, i), t5.current.lanes = i, Eo(t5, i, n), ft(t5, n), t5;
}
function Jl(t5, e, r, n) {
  var i = e.current, s = st(), o = sn(i);
  return r = c_(r), e.context === null ? e.context = r : e.pendingContext = r, e = Ar(s, o), e.payload = { element: t5 }, n = n === void 0 ? null : n, n !== null && (e.callback = n), t5 = rn(i, e, o), t5 !== null && (Vt(t5, i, o, s), Ma(t5, i, o)), o;
}
function _l(t5) {
  if (t5 = t5.current, !t5.child) return null;
  switch (t5.child.tag) {
    case 5:
      return t5.child.stateNode;
    default:
      return t5.child.stateNode;
  }
}
function Jp(t5, e) {
  if (t5 = t5.memoizedState, t5 !== null && t5.dehydrated !== null) {
    var r = t5.retryLane;
    t5.retryLane = r !== 0 && r < e ? r : e;
  }
}
function Rf(t5, e) {
  Jp(t5, e), (t5 = t5.alternate) && Jp(t5, e);
}
function O1() {
  return null;
}
var f_ = typeof reportError == "function" ? reportError : function(t5) {
  console.error(t5);
};
function Pf(t5) {
  this._internalRoot = t5;
}
eu.prototype.render = Pf.prototype.render = function(t5) {
  var e = this._internalRoot;
  if (e === null) throw Error(F(409));
  Jl(t5, e, null, null);
};
eu.prototype.unmount = Pf.prototype.unmount = function() {
  var t5 = this._internalRoot;
  if (t5 !== null) {
    this._internalRoot = null;
    var e = t5.containerInfo;
    Vn(function() {
      Jl(null, t5, null, null);
    }), e[Rr] = null;
  }
};
function eu(t5) {
  this._internalRoot = t5;
}
eu.prototype.unstable_scheduleHydration = function(t5) {
  if (t5) {
    var e = Vy();
    t5 = { blockedOn: null, target: t5, priority: e };
    for (var r = 0; r < Vr.length && e !== 0 && e < Vr[r].priority; r++) ;
    Vr.splice(r, 0, t5), r === 0 && Xy(t5);
  }
};
function Mf(t5) {
  return !(!t5 || t5.nodeType !== 1 && t5.nodeType !== 9 && t5.nodeType !== 11);
}
function tu(t5) {
  return !(!t5 || t5.nodeType !== 1 && t5.nodeType !== 9 && t5.nodeType !== 11 && (t5.nodeType !== 8 || t5.nodeValue !== " react-mount-point-unstable "));
}
function em() {
}
function L1(t5, e, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var s = n;
      n = function() {
        var u = _l(o);
        s.call(u);
      };
    }
    var o = d_(e, n, t5, 0, null, false, false, "", em);
    return t5._reactRootContainer = o, t5[Rr] = o.current, io(t5.nodeType === 8 ? t5.parentNode : t5), Vn(), o;
  }
  for (; i = t5.lastChild; ) t5.removeChild(i);
  if (typeof n == "function") {
    var a = n;
    n = function() {
      var u = _l(l);
      a.call(u);
    };
  }
  var l = If(t5, 0, false, null, null, false, false, "", em);
  return t5._reactRootContainer = l, t5[Rr] = l.current, io(t5.nodeType === 8 ? t5.parentNode : t5), Vn(function() {
    Jl(e, l, r, n);
  }), l;
}
function ru(t5, e, r, n, i) {
  var s = r._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var l = _l(o);
        a.call(l);
      };
    }
    Jl(e, o, t5, i);
  } else o = L1(r, e, t5, i, n);
  return _l(o);
}
Hy = function(t5) {
  switch (t5.tag) {
    case 3:
      var e = t5.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var r = Ss(e.pendingLanes);
        r !== 0 && (Zd(e, r | 1), ft(e, Fe()), !(le & 6) && (Zi = Fe() + 500, pn()));
      }
      break;
    case 13:
      Vn(function() {
        var n = Pr(t5, 1);
        if (n !== null) {
          var i = st();
          Vt(n, t5, 1, i);
        }
      }), Rf(t5, 1);
  }
};
Kd = function(t5) {
  if (t5.tag === 13) {
    var e = Pr(t5, 134217728);
    if (e !== null) {
      var r = st();
      Vt(e, t5, 134217728, r);
    }
    Rf(t5, 134217728);
  }
};
jy = function(t5) {
  if (t5.tag === 13) {
    var e = sn(t5), r = Pr(t5, e);
    if (r !== null) {
      var n = st();
      Vt(r, t5, e, n);
    }
    Rf(t5, e);
  }
};
Vy = function() {
  return de;
};
$y = function(t5, e) {
  var r = de;
  try {
    return de = t5, e();
  } finally {
    de = r;
  }
};
ec = function(t5, e, r) {
  switch (e) {
    case "input":
      if (Wh(t5, r), e = r.name, r.type === "radio" && e != null) {
        for (r = t5; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < r.length; e++) {
          var n = r[e];
          if (n !== t5 && n.form === t5.form) {
            var i = Xl(n);
            if (!i) throw Error(F(90));
            Ey(n), Wh(n, i);
          }
        }
      }
      break;
    case "textarea":
      Ty(t5, r);
      break;
    case "select":
      e = r.value, e != null && Ii(t5, !!r.multiple, e, false);
  }
};
My = Tf;
ky = Vn;
var U1 = { usingClientEntryPoint: false, Events: [To, vi, Xl, Ry, Py, Tf] }, fs = { findFiberByHostInstance: kn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, G1 = { bundleType: fs.bundleType, version: fs.version, rendererPackageName: fs.rendererPackageName, rendererConfig: fs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Br.ReactCurrentDispatcher, findHostInstanceByFiber: function(t5) {
  return t5 = By(t5), t5 === null ? null : t5.stateNode;
}, findFiberByHostInstance: fs.findFiberByHostInstance || O1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ko.isDisabled && Ko.supportsFiber) try {
    Hl = Ko.inject(G1), ur = Ko;
  } catch {
  }
}
xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U1;
xt.createPortal = function(t5, e) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Mf(e)) throw Error(F(200));
  return N1(t5, e, null, r);
};
xt.createRoot = function(t5, e) {
  if (!Mf(t5)) throw Error(F(299));
  var r = false, n = "", i = f_;
  return e != null && (e.unstable_strictMode === true && (r = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = If(t5, 1, false, null, null, r, false, n, i), t5[Rr] = e.current, io(t5.nodeType === 8 ? t5.parentNode : t5), new Pf(e);
};
xt.findDOMNode = function(t5) {
  if (t5 == null) return null;
  if (t5.nodeType === 1) return t5;
  var e = t5._reactInternals;
  if (e === void 0) throw typeof t5.render == "function" ? Error(F(188)) : (t5 = Object.keys(t5).join(","), Error(F(268, t5)));
  return t5 = By(e), t5 = t5 === null ? null : t5.stateNode, t5;
};
xt.flushSync = function(t5) {
  return Vn(t5);
};
xt.hydrate = function(t5, e, r) {
  if (!tu(e)) throw Error(F(200));
  return ru(null, t5, e, true, r);
};
xt.hydrateRoot = function(t5, e, r) {
  if (!Mf(t5)) throw Error(F(405));
  var n = r != null && r.hydratedSources || null, i = false, s = "", o = f_;
  if (r != null && (r.unstable_strictMode === true && (i = true), r.identifierPrefix !== void 0 && (s = r.identifierPrefix), r.onRecoverableError !== void 0 && (o = r.onRecoverableError)), e = d_(e, null, t5, 1, r ?? null, i, false, s, o), t5[Rr] = e.current, io(t5), n) for (t5 = 0; t5 < n.length; t5++) r = n[t5], i = r._getVersion, i = i(r._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [r, i] : e.mutableSourceEagerHydrationData.push(r, i);
  return new eu(e);
};
xt.render = function(t5, e, r) {
  if (!tu(e)) throw Error(F(200));
  return ru(null, t5, e, false, r);
};
xt.unmountComponentAtNode = function(t5) {
  if (!tu(t5)) throw Error(F(40));
  return t5._reactRootContainer ? (Vn(function() {
    ru(null, null, t5, false, function() {
      t5._reactRootContainer = null, t5[Rr] = null;
    });
  }), true) : false;
};
xt.unstable_batchedUpdates = Tf;
xt.unstable_renderSubtreeIntoContainer = function(t5, e, r, n) {
  if (!tu(r)) throw Error(F(200));
  if (t5 == null || t5._reactInternals === void 0) throw Error(F(38));
  return ru(t5, e, r, false, n);
};
xt.version = "18.3.1-next-f1338f8080-20240426";
function p_() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p_);
  } catch (t5) {
    console.error(t5);
  }
}
p_(), py.exports = xt;
var z1 = py.exports, tm = z1;
Gh.createRoot = tm.createRoot, Gh.hydrateRoot = tm.hydrateRoot;
var qn = ((t5) => (t5[t5.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", t5[t5.WEBGL = 1] = "WEBGL", t5[t5.WEBGL2 = 2] = "WEBGL2", t5))(qn || {}), m_ = ((t5) => (t5[t5.UNKNOWN = 0] = "UNKNOWN", t5[t5.WEBGL = 1] = "WEBGL", t5[t5.CANVAS = 2] = "CANVAS", t5))(m_ || {}), Fc = ((t5) => (t5[t5.COLOR = 16384] = "COLOR", t5[t5.DEPTH = 256] = "DEPTH", t5[t5.STENCIL = 1024] = "STENCIL", t5))(Fc || {}), Q = ((t5) => (t5[t5.NORMAL = 0] = "NORMAL", t5[t5.ADD = 1] = "ADD", t5[t5.MULTIPLY = 2] = "MULTIPLY", t5[t5.SCREEN = 3] = "SCREEN", t5[t5.OVERLAY = 4] = "OVERLAY", t5[t5.DARKEN = 5] = "DARKEN", t5[t5.LIGHTEN = 6] = "LIGHTEN", t5[t5.COLOR_DODGE = 7] = "COLOR_DODGE", t5[t5.COLOR_BURN = 8] = "COLOR_BURN", t5[t5.HARD_LIGHT = 9] = "HARD_LIGHT", t5[t5.SOFT_LIGHT = 10] = "SOFT_LIGHT", t5[t5.DIFFERENCE = 11] = "DIFFERENCE", t5[t5.EXCLUSION = 12] = "EXCLUSION", t5[t5.HUE = 13] = "HUE", t5[t5.SATURATION = 14] = "SATURATION", t5[t5.COLOR = 15] = "COLOR", t5[t5.LUMINOSITY = 16] = "LUMINOSITY", t5[t5.NORMAL_NPM = 17] = "NORMAL_NPM", t5[t5.ADD_NPM = 18] = "ADD_NPM", t5[t5.SCREEN_NPM = 19] = "SCREEN_NPM", t5[t5.NONE = 20] = "NONE", t5[t5.SRC_OVER = 0] = "SRC_OVER", t5[t5.SRC_IN = 21] = "SRC_IN", t5[t5.SRC_OUT = 22] = "SRC_OUT", t5[t5.SRC_ATOP = 23] = "SRC_ATOP", t5[t5.DST_OVER = 24] = "DST_OVER", t5[t5.DST_IN = 25] = "DST_IN", t5[t5.DST_OUT = 26] = "DST_OUT", t5[t5.DST_ATOP = 27] = "DST_ATOP", t5[t5.ERASE = 26] = "ERASE", t5[t5.SUBTRACT = 28] = "SUBTRACT", t5[t5.XOR = 29] = "XOR", t5))(Q || {}), lr = ((t5) => (t5[t5.POINTS = 0] = "POINTS", t5[t5.LINES = 1] = "LINES", t5[t5.LINE_LOOP = 2] = "LINE_LOOP", t5[t5.LINE_STRIP = 3] = "LINE_STRIP", t5[t5.TRIANGLES = 4] = "TRIANGLES", t5[t5.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", t5[t5.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", t5))(lr || {}), D = ((t5) => (t5[t5.RGBA = 6408] = "RGBA", t5[t5.RGB = 6407] = "RGB", t5[t5.RG = 33319] = "RG", t5[t5.RED = 6403] = "RED", t5[t5.RGBA_INTEGER = 36249] = "RGBA_INTEGER", t5[t5.RGB_INTEGER = 36248] = "RGB_INTEGER", t5[t5.RG_INTEGER = 33320] = "RG_INTEGER", t5[t5.RED_INTEGER = 36244] = "RED_INTEGER", t5[t5.ALPHA = 6406] = "ALPHA", t5[t5.LUMINANCE = 6409] = "LUMINANCE", t5[t5.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", t5[t5.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", t5[t5.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", t5))(D || {}), Di = ((t5) => (t5[t5.TEXTURE_2D = 3553] = "TEXTURE_2D", t5[t5.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", t5[t5.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", t5[t5.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", t5[t5.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", t5[t5.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", t5[t5.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", t5[t5.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", t5[t5.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", t5))(Di || {}), Z = ((t5) => (t5[t5.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", t5[t5.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", t5[t5.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", t5[t5.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", t5[t5.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", t5[t5.UNSIGNED_INT = 5125] = "UNSIGNED_INT", t5[t5.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", t5[t5.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", t5[t5.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", t5[t5.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", t5[t5.BYTE = 5120] = "BYTE", t5[t5.SHORT = 5122] = "SHORT", t5[t5.INT = 5124] = "INT", t5[t5.FLOAT = 5126] = "FLOAT", t5[t5.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", t5[t5.HALF_FLOAT = 36193] = "HALF_FLOAT", t5))(Z || {}), G = ((t5) => (t5[t5.FLOAT = 0] = "FLOAT", t5[t5.INT = 1] = "INT", t5[t5.UINT = 2] = "UINT", t5))(G || {}), Er = ((t5) => (t5[t5.NEAREST = 0] = "NEAREST", t5[t5.LINEAR = 1] = "LINEAR", t5))(Er || {}), an = ((t5) => (t5[t5.CLAMP = 33071] = "CLAMP", t5[t5.REPEAT = 10497] = "REPEAT", t5[t5.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", t5))(an || {}), fr = ((t5) => (t5[t5.OFF = 0] = "OFF", t5[t5.POW2 = 1] = "POW2", t5[t5.ON = 2] = "ON", t5[t5.ON_MANUAL = 3] = "ON_MANUAL", t5))(fr || {}), ht = ((t5) => (t5[t5.NPM = 0] = "NPM", t5[t5.UNPACK = 1] = "UNPACK", t5[t5.PMA = 2] = "PMA", t5[t5.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", t5[t5.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", t5[t5.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA", t5))(ht || {}), sr = ((t5) => (t5[t5.NO = 0] = "NO", t5[t5.YES = 1] = "YES", t5[t5.AUTO = 2] = "AUTO", t5[t5.BLEND = 0] = "BLEND", t5[t5.CLEAR = 1] = "CLEAR", t5[t5.BLIT = 2] = "BLIT", t5))(sr || {}), kf = ((t5) => (t5[t5.AUTO = 0] = "AUTO", t5[t5.MANUAL = 1] = "MANUAL", t5))(kf || {}), It = ((t5) => (t5.LOW = "lowp", t5.MEDIUM = "mediump", t5.HIGH = "highp", t5))(It || {}), Oe = ((t5) => (t5[t5.NONE = 0] = "NONE", t5[t5.SCISSOR = 1] = "SCISSOR", t5[t5.STENCIL = 2] = "STENCIL", t5[t5.SPRITE = 3] = "SPRITE", t5[t5.COLOR = 4] = "COLOR", t5))(Oe || {}), De = ((t5) => (t5[t5.NONE = 0] = "NONE", t5[t5.LOW = 2] = "LOW", t5[t5.MEDIUM = 4] = "MEDIUM", t5[t5.HIGH = 8] = "HIGH", t5))(De || {}), cr = ((t5) => (t5[t5.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", t5[t5.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", t5[t5.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", t5))(cr || {});
const H1 = { createCanvas: (t5, e) => {
  const r = document.createElement("canvas");
  return r.width = t5, r.height = e, r;
}, getCanvasRenderingContext2D: () => CanvasRenderingContext2D, getWebGLRenderingContext: () => WebGLRenderingContext, getNavigator: () => navigator, getBaseUrl: () => document.baseURI ?? window.location.href, getFontFaceSet: () => document.fonts, fetch: (t5, e) => fetch(t5, e), parseXML: (t5) => new DOMParser().parseFromString(t5, "text/xml") }, H = { ADAPTER: H1, RESOLUTION: 1, CREATE_IMAGE_BITMAP: false, ROUND_PIXELS: false };
var ju = /iPhone/i, rm = /iPod/i, nm = /iPad/i, im = /\biOS-universal(?:.+)Mac\b/i, Vu = /\bAndroid(?:.+)Mobile\b/i, sm = /Android/i, ri = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, qo = /Silk/i, mr = /Windows Phone/i, om = /\bWindows(?:.+)ARM\b/i, am = /BlackBerry/i, lm = /BB10/i, um = /Opera Mini/i, hm = /\b(CriOS|Chrome)(?:.+)Mobile/i, cm = /Mobile(?:.+)Firefox\b/i, dm = function(t5) {
  return typeof t5 < "u" && t5.platform === "MacIntel" && typeof t5.maxTouchPoints == "number" && t5.maxTouchPoints > 1 && typeof MSStream > "u";
};
function j1(t5) {
  return function(e) {
    return e.test(t5);
  };
}
function fm(t5) {
  var e = { userAgent: "", platform: "", maxTouchPoints: 0 };
  !t5 && typeof navigator < "u" ? e = { userAgent: navigator.userAgent, platform: navigator.platform, maxTouchPoints: navigator.maxTouchPoints || 0 } : typeof t5 == "string" ? e.userAgent = t5 : t5 && t5.userAgent && (e = { userAgent: t5.userAgent, platform: t5.platform, maxTouchPoints: t5.maxTouchPoints || 0 });
  var r = e.userAgent, n = r.split("[FBAN");
  typeof n[1] < "u" && (r = n[0]), n = r.split("Twitter"), typeof n[1] < "u" && (r = n[0]);
  var i = j1(r), s = { apple: { phone: i(ju) && !i(mr), ipod: i(rm), tablet: !i(ju) && (i(nm) || dm(e)) && !i(mr), universal: i(im), device: (i(ju) || i(rm) || i(nm) || i(im) || dm(e)) && !i(mr) }, amazon: { phone: i(ri), tablet: !i(ri) && i(qo), device: i(ri) || i(qo) }, android: { phone: !i(mr) && i(ri) || !i(mr) && i(Vu), tablet: !i(mr) && !i(ri) && !i(Vu) && (i(qo) || i(sm)), device: !i(mr) && (i(ri) || i(qo) || i(Vu) || i(sm)) || i(/\bokhttp\b/i) }, windows: { phone: i(mr), tablet: i(om), device: i(mr) || i(om) }, other: { blackberry: i(am), blackberry10: i(lm), opera: i(um), firefox: i(cm), chrome: i(hm), device: i(am) || i(lm) || i(um) || i(cm) || i(hm) }, any: false, phone: false, tablet: false };
  return s.any = s.apple.device || s.android.device || s.windows.device || s.other.device, s.phone = s.apple.phone || s.android.phone || s.windows.phone, s.tablet = s.apple.tablet || s.android.tablet || s.windows.tablet, s;
}
const V1 = fm.default ?? fm, Sr = V1(globalThis.navigator);
H.RETINA_PREFIX = /@([0-9\.]+)x/;
H.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;
var g_ = { exports: {} };
(function(t5) {
  var e = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = false));
  function i(l, u, h) {
    this.fn = l, this.context = u, this.once = h || false;
  }
  function s(l, u, h, c, d) {
    if (typeof h != "function") throw new TypeError("The listener must be a function");
    var f = new i(h, c || l, d), p = r ? r + u : u;
    return l._events[p] ? l._events[p].fn ? l._events[p] = [l._events[p], f] : l._events[p].push(f) : (l._events[p] = f, l._eventsCount++), l;
  }
  function o(l, u) {
    --l._eventsCount === 0 ? l._events = new n() : delete l._events[u];
  }
  function a() {
    this._events = new n(), this._eventsCount = 0;
  }
  a.prototype.eventNames = function() {
    var u = [], h, c;
    if (this._eventsCount === 0) return u;
    for (c in h = this._events) e.call(h, c) && u.push(r ? c.slice(1) : c);
    return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(h)) : u;
  }, a.prototype.listeners = function(u) {
    var h = r ? r + u : u, c = this._events[h];
    if (!c) return [];
    if (c.fn) return [c.fn];
    for (var d = 0, f = c.length, p = new Array(f); d < f; d++) p[d] = c[d].fn;
    return p;
  }, a.prototype.listenerCount = function(u) {
    var h = r ? r + u : u, c = this._events[h];
    return c ? c.fn ? 1 : c.length : 0;
  }, a.prototype.emit = function(u, h, c, d, f, p) {
    var y = r ? r + u : u;
    if (!this._events[y]) return false;
    var _ = this._events[y], g = arguments.length, v, m;
    if (_.fn) {
      switch (_.once && this.removeListener(u, _.fn, void 0, true), g) {
        case 1:
          return _.fn.call(_.context), true;
        case 2:
          return _.fn.call(_.context, h), true;
        case 3:
          return _.fn.call(_.context, h, c), true;
        case 4:
          return _.fn.call(_.context, h, c, d), true;
        case 5:
          return _.fn.call(_.context, h, c, d, f), true;
        case 6:
          return _.fn.call(_.context, h, c, d, f, p), true;
      }
      for (m = 1, v = new Array(g - 1); m < g; m++) v[m - 1] = arguments[m];
      _.fn.apply(_.context, v);
    } else {
      var x = _.length, w;
      for (m = 0; m < x; m++) switch (_[m].once && this.removeListener(u, _[m].fn, void 0, true), g) {
        case 1:
          _[m].fn.call(_[m].context);
          break;
        case 2:
          _[m].fn.call(_[m].context, h);
          break;
        case 3:
          _[m].fn.call(_[m].context, h, c);
          break;
        case 4:
          _[m].fn.call(_[m].context, h, c, d);
          break;
        default:
          if (!v) for (w = 1, v = new Array(g - 1); w < g; w++) v[w - 1] = arguments[w];
          _[m].fn.apply(_[m].context, v);
      }
    }
    return true;
  }, a.prototype.on = function(u, h, c) {
    return s(this, u, h, c, false);
  }, a.prototype.once = function(u, h, c) {
    return s(this, u, h, c, true);
  }, a.prototype.removeListener = function(u, h, c, d) {
    var f = r ? r + u : u;
    if (!this._events[f]) return this;
    if (!h) return o(this, f), this;
    var p = this._events[f];
    if (p.fn) p.fn === h && (!d || p.once) && (!c || p.context === c) && o(this, f);
    else {
      for (var y = 0, _ = [], g = p.length; y < g; y++) (p[y].fn !== h || d && !p[y].once || c && p[y].context !== c) && _.push(p[y]);
      _.length ? this._events[f] = _.length === 1 ? _[0] : _ : o(this, f);
    }
    return this;
  }, a.prototype.removeAllListeners = function(u) {
    var h;
    return u ? (h = r ? r + u : u, this._events[h] && o(this, h)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = r, a.EventEmitter = a, t5.exports = a;
})(g_);
var $1 = g_.exports;
const Ao = Nd($1);
var Ff = { exports: {} };
Ff.exports = nu;
Ff.exports.default = nu;
function nu(t5, e, r) {
  r = r || 2;
  var n = e && e.length, i = n ? e[0] * r : t5.length, s = y_(t5, 0, i, r, true), o = [];
  if (!s || s.next === s.prev) return o;
  var a, l, u, h, c, d, f;
  if (n && (s = K1(t5, e, s, r)), t5.length > 80 * r) {
    a = u = t5[0], l = h = t5[1];
    for (var p = r; p < i; p += r) c = t5[p], d = t5[p + 1], c < a && (a = c), d < l && (l = d), c > u && (u = c), d > h && (h = d);
    f = Math.max(u - a, h - l), f = f !== 0 ? 32767 / f : 0;
  }
  return po(s, o, r, a, l, f, 0), o;
}
function y_(t5, e, r, n, i) {
  var s, o;
  if (i === Nc(t5, e, r, n) > 0) for (s = e; s < r; s += n) o = pm(s, t5[s], t5[s + 1], o);
  else for (s = r - n; s >= e; s -= n) o = pm(s, t5[s], t5[s + 1], o);
  return o && iu(o, o.next) && (go(o), o = o.next), o;
}
function $n(t5, e) {
  if (!t5) return t5;
  e || (e = t5);
  var r = t5, n;
  do
    if (n = false, !r.steiner && (iu(r, r.next) || Te(r.prev, r, r.next) === 0)) {
      if (go(r), r = e = r.prev, r === r.next) break;
      n = true;
    } else r = r.next;
  while (n || r !== e);
  return e;
}
function po(t5, e, r, n, i, s, o) {
  if (t5) {
    !o && s && tE(t5, n, i, s);
    for (var a = t5, l, u; t5.prev !== t5.next; ) {
      if (l = t5.prev, u = t5.next, s ? W1(t5, n, i, s) : X1(t5)) {
        e.push(l.i / r | 0), e.push(t5.i / r | 0), e.push(u.i / r | 0), go(t5), t5 = u.next, a = u.next;
        continue;
      }
      if (t5 = u, t5 === a) {
        o ? o === 1 ? (t5 = Y1($n(t5), e, r), po(t5, e, r, n, i, s, 2)) : o === 2 && Z1(t5, e, r, n, i, s) : po($n(t5), e, r, n, i, s, 1);
        break;
      }
    }
  }
}
function X1(t5) {
  var e = t5.prev, r = t5, n = t5.next;
  if (Te(e, r, n) >= 0) return false;
  for (var i = e.x, s = r.x, o = n.x, a = e.y, l = r.y, u = n.y, h = i < s ? i < o ? i : o : s < o ? s : o, c = a < l ? a < u ? a : u : l < u ? l : u, d = i > s ? i > o ? i : o : s > o ? s : o, f = a > l ? a > u ? a : u : l > u ? l : u, p = n.next; p !== e; ) {
    if (p.x >= h && p.x <= d && p.y >= c && p.y <= f && bi(i, a, s, l, o, u, p.x, p.y) && Te(p.prev, p, p.next) >= 0) return false;
    p = p.next;
  }
  return true;
}
function W1(t5, e, r, n) {
  var i = t5.prev, s = t5, o = t5.next;
  if (Te(i, s, o) >= 0) return false;
  for (var a = i.x, l = s.x, u = o.x, h = i.y, c = s.y, d = o.y, f = a < l ? a < u ? a : u : l < u ? l : u, p = h < c ? h < d ? h : d : c < d ? c : d, y = a > l ? a > u ? a : u : l > u ? l : u, _ = h > c ? h > d ? h : d : c > d ? c : d, g = Dc(f, p, e, r, n), v = Dc(y, _, e, r, n), m = t5.prevZ, x = t5.nextZ; m && m.z >= g && x && x.z <= v; ) {
    if (m.x >= f && m.x <= y && m.y >= p && m.y <= _ && m !== i && m !== o && bi(a, h, l, c, u, d, m.x, m.y) && Te(m.prev, m, m.next) >= 0 || (m = m.prevZ, x.x >= f && x.x <= y && x.y >= p && x.y <= _ && x !== i && x !== o && bi(a, h, l, c, u, d, x.x, x.y) && Te(x.prev, x, x.next) >= 0)) return false;
    x = x.nextZ;
  }
  for (; m && m.z >= g; ) {
    if (m.x >= f && m.x <= y && m.y >= p && m.y <= _ && m !== i && m !== o && bi(a, h, l, c, u, d, m.x, m.y) && Te(m.prev, m, m.next) >= 0) return false;
    m = m.prevZ;
  }
  for (; x && x.z <= v; ) {
    if (x.x >= f && x.x <= y && x.y >= p && x.y <= _ && x !== i && x !== o && bi(a, h, l, c, u, d, x.x, x.y) && Te(x.prev, x, x.next) >= 0) return false;
    x = x.nextZ;
  }
  return true;
}
function Y1(t5, e, r) {
  var n = t5;
  do {
    var i = n.prev, s = n.next.next;
    !iu(i, s) && v_(i, n, n.next, s) && mo(i, s) && mo(s, i) && (e.push(i.i / r | 0), e.push(n.i / r | 0), e.push(s.i / r | 0), go(n), go(n.next), n = t5 = s), n = n.next;
  } while (n !== t5);
  return $n(n);
}
function Z1(t5, e, r, n, i, s) {
  var o = t5;
  do {
    for (var a = o.next.next; a !== o.prev; ) {
      if (o.i !== a.i && iE(o, a)) {
        var l = __(o, a);
        o = $n(o, o.next), l = $n(l, l.next), po(o, e, r, n, i, s, 0), po(l, e, r, n, i, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== t5);
}
function K1(t5, e, r, n) {
  var i = [], s, o, a, l, u;
  for (s = 0, o = e.length; s < o; s++) a = e[s] * n, l = s < o - 1 ? e[s + 1] * n : t5.length, u = y_(t5, a, l, n, false), u === u.next && (u.steiner = true), i.push(nE(u));
  for (i.sort(q1), s = 0; s < i.length; s++) r = Q1(i[s], r);
  return r;
}
function q1(t5, e) {
  return t5.x - e.x;
}
function Q1(t5, e) {
  var r = J1(t5, e);
  if (!r) return e;
  var n = __(r, t5);
  return $n(n, n.next), $n(r, r.next);
}
function J1(t5, e) {
  var r = e, n = t5.x, i = t5.y, s = -1 / 0, o;
  do {
    if (i <= r.y && i >= r.next.y && r.next.y !== r.y) {
      var a = r.x + (i - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
      if (a <= n && a > s && (s = a, o = r.x < r.next.x ? r : r.next, a === n)) return o;
    }
    r = r.next;
  } while (r !== e);
  if (!o) return null;
  var l = o, u = o.x, h = o.y, c = 1 / 0, d;
  r = o;
  do
    n >= r.x && r.x >= u && n !== r.x && bi(i < h ? n : s, i, u, h, i < h ? s : n, i, r.x, r.y) && (d = Math.abs(i - r.y) / (n - r.x), mo(r, t5) && (d < c || d === c && (r.x > o.x || r.x === o.x && eE(o, r))) && (o = r, c = d)), r = r.next;
  while (r !== l);
  return o;
}
function eE(t5, e) {
  return Te(t5.prev, t5, e.prev) < 0 && Te(e.next, t5, t5.next) < 0;
}
function tE(t5, e, r, n) {
  var i = t5;
  do
    i.z === 0 && (i.z = Dc(i.x, i.y, e, r, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== t5);
  i.prevZ.nextZ = null, i.prevZ = null, rE(i);
}
function rE(t5) {
  var e, r, n, i, s, o, a, l, u = 1;
  do {
    for (r = t5, t5 = null, s = null, o = 0; r; ) {
      for (o++, n = r, a = 0, e = 0; e < u && (a++, n = n.nextZ, !!n); e++) ;
      for (l = u; a > 0 || l > 0 && n; ) a !== 0 && (l === 0 || !n || r.z <= n.z) ? (i = r, r = r.nextZ, a--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : t5 = i, i.prevZ = s, s = i;
      r = n;
    }
    s.nextZ = null, u *= 2;
  } while (o > 1);
  return t5;
}
function Dc(t5, e, r, n, i) {
  return t5 = (t5 - r) * i | 0, e = (e - n) * i | 0, t5 = (t5 | t5 << 8) & 16711935, t5 = (t5 | t5 << 4) & 252645135, t5 = (t5 | t5 << 2) & 858993459, t5 = (t5 | t5 << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t5 | e << 1;
}
function nE(t5) {
  var e = t5, r = t5;
  do
    (e.x < r.x || e.x === r.x && e.y < r.y) && (r = e), e = e.next;
  while (e !== t5);
  return r;
}
function bi(t5, e, r, n, i, s, o, a) {
  return (i - o) * (e - a) >= (t5 - o) * (s - a) && (t5 - o) * (n - a) >= (r - o) * (e - a) && (r - o) * (s - a) >= (i - o) * (n - a);
}
function iE(t5, e) {
  return t5.next.i !== e.i && t5.prev.i !== e.i && !sE(t5, e) && (mo(t5, e) && mo(e, t5) && oE(t5, e) && (Te(t5.prev, t5, e.prev) || Te(t5, e.prev, e)) || iu(t5, e) && Te(t5.prev, t5, t5.next) > 0 && Te(e.prev, e, e.next) > 0);
}
function Te(t5, e, r) {
  return (e.y - t5.y) * (r.x - e.x) - (e.x - t5.x) * (r.y - e.y);
}
function iu(t5, e) {
  return t5.x === e.x && t5.y === e.y;
}
function v_(t5, e, r, n) {
  var i = Jo(Te(t5, e, r)), s = Jo(Te(t5, e, n)), o = Jo(Te(r, n, t5)), a = Jo(Te(r, n, e));
  return !!(i !== s && o !== a || i === 0 && Qo(t5, r, e) || s === 0 && Qo(t5, n, e) || o === 0 && Qo(r, t5, n) || a === 0 && Qo(r, e, n));
}
function Qo(t5, e, r) {
  return e.x <= Math.max(t5.x, r.x) && e.x >= Math.min(t5.x, r.x) && e.y <= Math.max(t5.y, r.y) && e.y >= Math.min(t5.y, r.y);
}
function Jo(t5) {
  return t5 > 0 ? 1 : t5 < 0 ? -1 : 0;
}
function sE(t5, e) {
  var r = t5;
  do {
    if (r.i !== t5.i && r.next.i !== t5.i && r.i !== e.i && r.next.i !== e.i && v_(r, r.next, t5, e)) return true;
    r = r.next;
  } while (r !== t5);
  return false;
}
function mo(t5, e) {
  return Te(t5.prev, t5, t5.next) < 0 ? Te(t5, e, t5.next) >= 0 && Te(t5, t5.prev, e) >= 0 : Te(t5, e, t5.prev) < 0 || Te(t5, t5.next, e) < 0;
}
function oE(t5, e) {
  var r = t5, n = false, i = (t5.x + e.x) / 2, s = (t5.y + e.y) / 2;
  do
    r.y > s != r.next.y > s && r.next.y !== r.y && i < (r.next.x - r.x) * (s - r.y) / (r.next.y - r.y) + r.x && (n = !n), r = r.next;
  while (r !== t5);
  return n;
}
function __(t5, e) {
  var r = new Bc(t5.i, t5.x, t5.y), n = new Bc(e.i, e.x, e.y), i = t5.next, s = e.prev;
  return t5.next = e, e.prev = t5, r.next = i, i.prev = r, n.next = r, r.prev = n, s.next = n, n.prev = s, n;
}
function pm(t5, e, r, n) {
  var i = new Bc(t5, e, r);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function go(t5) {
  t5.next.prev = t5.prev, t5.prev.next = t5.next, t5.prevZ && (t5.prevZ.nextZ = t5.nextZ), t5.nextZ && (t5.nextZ.prevZ = t5.prevZ);
}
function Bc(t5, e, r) {
  this.i = t5, this.x = e, this.y = r, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
}
nu.deviation = function(t5, e, r, n) {
  var i = e && e.length, s = i ? e[0] * r : t5.length, o = Math.abs(Nc(t5, 0, s, r));
  if (i) for (var a = 0, l = e.length; a < l; a++) {
    var u = e[a] * r, h = a < l - 1 ? e[a + 1] * r : t5.length;
    o -= Math.abs(Nc(t5, u, h, r));
  }
  var c = 0;
  for (a = 0; a < n.length; a += 3) {
    var d = n[a] * r, f = n[a + 1] * r, p = n[a + 2] * r;
    c += Math.abs((t5[d] - t5[p]) * (t5[f + 1] - t5[d + 1]) - (t5[d] - t5[f]) * (t5[p + 1] - t5[d + 1]));
  }
  return o === 0 && c === 0 ? 0 : Math.abs((c - o) / o);
};
function Nc(t5, e, r, n) {
  for (var i = 0, s = e, o = r - n; s < r; s += n) i += (t5[o] - t5[s]) * (t5[s + 1] + t5[o + 1]), o = s;
  return i;
}
nu.flatten = function(t5) {
  for (var e = t5[0][0].length, r = { vertices: [], holes: [], dimensions: e }, n = 0, i = 0; i < t5.length; i++) {
    for (var s = 0; s < t5[i].length; s++) for (var o = 0; o < e; o++) r.vertices.push(t5[i][s][o]);
    i > 0 && (n += t5[i - 1].length, r.holes.push(n));
  }
  return r;
};
var aE = Ff.exports;
const lE = Nd(aE);
var xl = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */
xl.exports;
(function(t5, e) {
  (function(r) {
    var n = e && !e.nodeType && e, i = t5 && !t5.nodeType && t5, s = typeof Fs == "object" && Fs;
    (s.global === s || s.window === s || s.self === s) && (r = s);
    var o, a = 2147483647, l = 36, u = 1, h = 26, c = 38, d = 700, f = 72, p = 128, y = "-", _ = /^xn--/, g = /[^\x20-\x7E]/, v = /[\x2E\u3002\uFF0E\uFF61]/g, m = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, x = l - u, w = Math.floor, T = String.fromCharCode, S;
    function E(b) {
      throw new RangeError(m[b]);
    }
    function I(b, U) {
      for (var K = b.length, oe = []; K--; ) oe[K] = U(b[K]);
      return oe;
    }
    function C(b, U) {
      var K = b.split("@"), oe = "";
      K.length > 1 && (oe = K[0] + "@", b = K[1]), b = b.replace(v, ".");
      var re = b.split("."), _e = I(re, U).join(".");
      return oe + _e;
    }
    function P(b) {
      for (var U = [], K = 0, oe = b.length, re, _e; K < oe; ) re = b.charCodeAt(K++), re >= 55296 && re <= 56319 && K < oe ? (_e = b.charCodeAt(K++), (_e & 64512) == 56320 ? U.push(((re & 1023) << 10) + (_e & 1023) + 65536) : (U.push(re), K--)) : U.push(re);
      return U;
    }
    function N(b) {
      return I(b, function(U) {
        var K = "";
        return U > 65535 && (U -= 65536, K += T(U >>> 10 & 1023 | 55296), U = 56320 | U & 1023), K += T(U), K;
      }).join("");
    }
    function A(b) {
      return b - 48 < 10 ? b - 22 : b - 65 < 26 ? b - 65 : b - 97 < 26 ? b - 97 : l;
    }
    function R(b, U) {
      return b + 22 + 75 * (b < 26) - ((U != 0) << 5);
    }
    function $(b, U, K) {
      var oe = 0;
      for (b = K ? w(b / d) : b >> 1, b += w(b / U); b > x * h >> 1; oe += l) b = w(b / x);
      return w(oe + (x + 1) * b / (b + c));
    }
    function q(b) {
      var U = [], K = b.length, oe, re = 0, _e = p, he = f, J, ce, pe, xe, ue, Ie, Me, Et, St;
      for (J = b.lastIndexOf(y), J < 0 && (J = 0), ce = 0; ce < J; ++ce) b.charCodeAt(ce) >= 128 && E("not-basic"), U.push(b.charCodeAt(ce));
      for (pe = J > 0 ? J + 1 : 0; pe < K; ) {
        for (xe = re, ue = 1, Ie = l; pe >= K && E("invalid-input"), Me = A(b.charCodeAt(pe++)), (Me >= l || Me > w((a - re) / ue)) && E("overflow"), re += Me * ue, Et = Ie <= he ? u : Ie >= he + h ? h : Ie - he, !(Me < Et); Ie += l) St = l - Et, ue > w(a / St) && E("overflow"), ue *= St;
        oe = U.length + 1, he = $(re - xe, oe, xe == 0), w(re / oe) > a - _e && E("overflow"), _e += w(re / oe), re %= oe, U.splice(re++, 0, _e);
      }
      return N(U);
    }
    function O(b) {
      var U, K, oe, re, _e, he, J, ce, pe, xe, ue, Ie = [], Me, Et, St, Nr;
      for (b = P(b), Me = b.length, U = p, K = 0, _e = f, he = 0; he < Me; ++he) ue = b[he], ue < 128 && Ie.push(T(ue));
      for (oe = re = Ie.length, re && Ie.push(y); oe < Me; ) {
        for (J = a, he = 0; he < Me; ++he) ue = b[he], ue >= U && ue < J && (J = ue);
        for (Et = oe + 1, J - U > w((a - K) / Et) && E("overflow"), K += (J - U) * Et, U = J, he = 0; he < Me; ++he) if (ue = b[he], ue < U && ++K > a && E("overflow"), ue == U) {
          for (ce = K, pe = l; xe = pe <= _e ? u : pe >= _e + h ? h : pe - _e, !(ce < xe); pe += l) Nr = ce - xe, St = l - xe, Ie.push(T(R(xe + Nr % St, 0))), ce = w(Nr / St);
          Ie.push(T(R(ce, 0))), _e = $(K, Et, oe == re), K = 0, ++oe;
        }
        ++K, ++U;
      }
      return Ie.join("");
    }
    function k(b) {
      return C(b, function(U) {
        return _.test(U) ? q(U.slice(4).toLowerCase()) : U;
      });
    }
    function j(b) {
      return C(b, function(U) {
        return g.test(U) ? "xn--" + O(U) : U;
      });
    }
    if (o = { version: "1.4.1", ucs2: { decode: P, encode: N }, decode: q, encode: O, toASCII: j, toUnicode: k }, n && i) if (t5.exports == n) i.exports = o;
    else for (S in o) o.hasOwnProperty(S) && (n[S] = o[S]);
    else r.punycode = o;
  })(Fs);
})(xl, xl.exports);
var uE = xl.exports, rs = TypeError;
const hE = {}, cE = Object.freeze(Object.defineProperty({ __proto__: null, default: hE }, Symbol.toStringTag, { value: "Module" })), dE = px(cE);
var Df = typeof Map == "function" && Map.prototype, $u = Object.getOwnPropertyDescriptor && Df ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, wl = Df && $u && typeof $u.get == "function" ? $u.get : null, mm = Df && Map.prototype.forEach, Bf = typeof Set == "function" && Set.prototype, Xu = Object.getOwnPropertyDescriptor && Bf ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, El = Bf && Xu && typeof Xu.get == "function" ? Xu.get : null, gm = Bf && Set.prototype.forEach, fE = typeof WeakMap == "function" && WeakMap.prototype, js = fE ? WeakMap.prototype.has : null, pE = typeof WeakSet == "function" && WeakSet.prototype, Vs = pE ? WeakSet.prototype.has : null, mE = typeof WeakRef == "function" && WeakRef.prototype, ym = mE ? WeakRef.prototype.deref : null, gE = Boolean.prototype.valueOf, yE = Object.prototype.toString, vE = Function.prototype.toString, _E = String.prototype.match, Nf = String.prototype.slice, Zr = String.prototype.replace, xE = String.prototype.toUpperCase, vm = String.prototype.toLowerCase, x_ = RegExp.prototype.test, _m = Array.prototype.concat, or = Array.prototype.join, wE = Array.prototype.slice, xm = Math.floor, Oc = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Wu = Object.getOwnPropertySymbols, Lc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Ki = typeof Symbol == "function" && typeof Symbol.iterator == "object", $s = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ki || true) ? Symbol.toStringTag : null, w_ = Object.prototype.propertyIsEnumerable, wm = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t5) {
  return t5.__proto__;
} : null);
function Em(t5, e) {
  if (t5 === 1 / 0 || t5 === -1 / 0 || t5 !== t5 || t5 && t5 > -1e3 && t5 < 1e3 || x_.call(/e/, e)) return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t5 == "number") {
    var n = t5 < 0 ? -xm(-t5) : xm(t5);
    if (n !== t5) {
      var i = String(n), s = Nf.call(e, i.length + 1);
      return Zr.call(i, r, "$&_") + "." + Zr.call(Zr.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Zr.call(e, r, "$&_");
}
var Uc = dE, Sm = Uc.custom, Tm = T_(Sm) ? Sm : null, E_ = { __proto__: null, double: '"', single: "'" }, EE = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g }, su = function t(e, r, n, i) {
  var s = r || {};
  if (vr(s, "quoteStyle") && !vr(E_, s.quoteStyle)) throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (vr(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = vr(s, "customInspect") ? s.customInspect : true;
  if (typeof o != "boolean" && o !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (vr(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (vr(s, "numericSeparator") && typeof s.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = s.numericSeparator;
  if (typeof e > "u") return "undefined";
  if (e === null) return "null";
  if (typeof e == "boolean") return e ? "true" : "false";
  if (typeof e == "string") return A_(e, s);
  if (typeof e == "number") {
    if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
    var l = String(e);
    return a ? Em(e, l) : l;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return a ? Em(e, u) : u;
  }
  var h = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof n > "u" && (n = 0), n >= h && h > 0 && typeof e == "object") return Gc(e) ? "[Array]" : "[Object]";
  var c = GE(s, n);
  if (typeof i > "u") i = [];
  else if (b_(i, e) >= 0) return "[Circular]";
  function d(A, R, $) {
    if (R && (i = wE.call(i), i.push(R)), $) {
      var q = { depth: s.depth };
      return vr(s, "quoteStyle") && (q.quoteStyle = s.quoteStyle), t(A, q, n + 1, i);
    }
    return t(A, s, n + 1, i);
  }
  if (typeof e == "function" && !bm(e)) {
    var f = ME(e), p = ea(e, d);
    return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (p.length > 0 ? " { " + or.call(p, ", ") + " }" : "");
  }
  if (T_(e)) {
    var y = Ki ? Zr.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Lc.call(e);
    return typeof e == "object" && !Ki ? ps(y) : y;
  }
  if (OE(e)) {
    for (var _ = "<" + vm.call(String(e.nodeName)), g = e.attributes || [], v = 0; v < g.length; v++) _ += " " + g[v].name + "=" + S_(SE(g[v].value), "double", s);
    return _ += ">", e.childNodes && e.childNodes.length && (_ += "..."), _ += "</" + vm.call(String(e.nodeName)) + ">", _;
  }
  if (Gc(e)) {
    if (e.length === 0) return "[]";
    var m = ea(e, d);
    return c && !UE(m) ? "[" + zc(m, c) + "]" : "[ " + or.call(m, ", ") + " ]";
  }
  if (bE(e)) {
    var x = ea(e, d);
    return !("cause" in Error.prototype) && "cause" in e && !w_.call(e, "cause") ? "{ [" + String(e) + "] " + or.call(_m.call("[cause]: " + d(e.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + or.call(x, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (Tm && typeof e[Tm] == "function" && Uc) return Uc(e, { depth: h - n });
    if (o !== "symbol" && typeof e.inspect == "function") return e.inspect();
  }
  if (kE(e)) {
    var w = [];
    return mm && mm.call(e, function(A, R) {
      w.push(d(R, e, true) + " => " + d(A, e));
    }), Am("Map", wl.call(e), w, c);
  }
  if (BE(e)) {
    var T = [];
    return gm && gm.call(e, function(A) {
      T.push(d(A, e));
    }), Am("Set", El.call(e), T, c);
  }
  if (FE(e)) return Yu("WeakMap");
  if (NE(e)) return Yu("WeakSet");
  if (DE(e)) return Yu("WeakRef");
  if (CE(e)) return ps(d(Number(e)));
  if (RE(e)) return ps(d(Oc.call(e)));
  if (IE(e)) return ps(gE.call(e));
  if (AE(e)) return ps(d(String(e)));
  if (typeof window < "u" && e === window) return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof Fs < "u" && e === Fs) return "{ [object globalThis] }";
  if (!TE(e) && !bm(e)) {
    var S = ea(e, d), E = wm ? wm(e) === Object.prototype : e instanceof Object || e.constructor === Object, I = e instanceof Object ? "" : "null prototype", C = !E && $s && Object(e) === e && $s in e ? Nf.call(mn(e), 8, -1) : I ? "Object" : "", P = E || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", N = P + (C || I ? "[" + or.call(_m.call([], C || [], I || []), ": ") + "] " : "");
    return S.length === 0 ? N + "{}" : c ? N + "{" + zc(S, c) + "}" : N + "{ " + or.call(S, ", ") + " }";
  }
  return String(e);
};
function S_(t5, e, r) {
  var n = r.quoteStyle || e, i = E_[n];
  return i + t5 + i;
}
function SE(t5) {
  return Zr.call(String(t5), /"/g, "&quot;");
}
function Qn(t5) {
  return !$s || !(typeof t5 == "object" && ($s in t5 || typeof t5[$s] < "u"));
}
function Gc(t5) {
  return mn(t5) === "[object Array]" && Qn(t5);
}
function TE(t5) {
  return mn(t5) === "[object Date]" && Qn(t5);
}
function bm(t5) {
  return mn(t5) === "[object RegExp]" && Qn(t5);
}
function bE(t5) {
  return mn(t5) === "[object Error]" && Qn(t5);
}
function AE(t5) {
  return mn(t5) === "[object String]" && Qn(t5);
}
function CE(t5) {
  return mn(t5) === "[object Number]" && Qn(t5);
}
function IE(t5) {
  return mn(t5) === "[object Boolean]" && Qn(t5);
}
function T_(t5) {
  if (Ki) return t5 && typeof t5 == "object" && t5 instanceof Symbol;
  if (typeof t5 == "symbol") return true;
  if (!t5 || typeof t5 != "object" || !Lc) return false;
  try {
    return Lc.call(t5), true;
  } catch {
  }
  return false;
}
function RE(t5) {
  if (!t5 || typeof t5 != "object" || !Oc) return false;
  try {
    return Oc.call(t5), true;
  } catch {
  }
  return false;
}
var PE = Object.prototype.hasOwnProperty || function(t5) {
  return t5 in this;
};
function vr(t5, e) {
  return PE.call(t5, e);
}
function mn(t5) {
  return yE.call(t5);
}
function ME(t5) {
  if (t5.name) return t5.name;
  var e = _E.call(vE.call(t5), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function b_(t5, e) {
  if (t5.indexOf) return t5.indexOf(e);
  for (var r = 0, n = t5.length; r < n; r++) if (t5[r] === e) return r;
  return -1;
}
function kE(t5) {
  if (!wl || !t5 || typeof t5 != "object") return false;
  try {
    wl.call(t5);
    try {
      El.call(t5);
    } catch {
      return true;
    }
    return t5 instanceof Map;
  } catch {
  }
  return false;
}
function FE(t5) {
  if (!js || !t5 || typeof t5 != "object") return false;
  try {
    js.call(t5, js);
    try {
      Vs.call(t5, Vs);
    } catch {
      return true;
    }
    return t5 instanceof WeakMap;
  } catch {
  }
  return false;
}
function DE(t5) {
  if (!ym || !t5 || typeof t5 != "object") return false;
  try {
    return ym.call(t5), true;
  } catch {
  }
  return false;
}
function BE(t5) {
  if (!El || !t5 || typeof t5 != "object") return false;
  try {
    El.call(t5);
    try {
      wl.call(t5);
    } catch {
      return true;
    }
    return t5 instanceof Set;
  } catch {
  }
  return false;
}
function NE(t5) {
  if (!Vs || !t5 || typeof t5 != "object") return false;
  try {
    Vs.call(t5, Vs);
    try {
      js.call(t5, js);
    } catch {
      return true;
    }
    return t5 instanceof WeakSet;
  } catch {
  }
  return false;
}
function OE(t5) {
  return !t5 || typeof t5 != "object" ? false : typeof HTMLElement < "u" && t5 instanceof HTMLElement ? true : typeof t5.nodeName == "string" && typeof t5.getAttribute == "function";
}
function A_(t5, e) {
  if (t5.length > e.maxStringLength) {
    var r = t5.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return A_(Nf.call(t5, 0, e.maxStringLength), e) + n;
  }
  var i = EE[e.quoteStyle || "single"];
  i.lastIndex = 0;
  var s = Zr.call(Zr.call(t5, i, "\\$1"), /[\x00-\x1f]/g, LE);
  return S_(s, "single", e);
}
function LE(t5) {
  var e = t5.charCodeAt(0), r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + xE.call(e.toString(16));
}
function ps(t5) {
  return "Object(" + t5 + ")";
}
function Yu(t5) {
  return t5 + " { ? }";
}
function Am(t5, e, r, n) {
  var i = n ? zc(r, n) : or.call(r, ", ");
  return t5 + " (" + e + ") {" + i + "}";
}
function UE(t5) {
  for (var e = 0; e < t5.length; e++) if (b_(t5[e], `
`) >= 0) return false;
  return true;
}
function GE(t5, e) {
  var r;
  if (t5.indent === "	") r = "	";
  else if (typeof t5.indent == "number" && t5.indent > 0) r = or.call(Array(t5.indent + 1), " ");
  else return null;
  return { base: r, prev: or.call(Array(e + 1), r) };
}
function zc(t5, e) {
  if (t5.length === 0) return "";
  var r = `
` + e.prev + e.base;
  return r + or.call(t5, "," + r) + `
` + e.prev;
}
function ea(t5, e) {
  var r = Gc(t5), n = [];
  if (r) {
    n.length = t5.length;
    for (var i = 0; i < t5.length; i++) n[i] = vr(t5, i) ? e(t5[i], t5) : "";
  }
  var s = typeof Wu == "function" ? Wu(t5) : [], o;
  if (Ki) {
    o = {};
    for (var a = 0; a < s.length; a++) o["$" + s[a]] = s[a];
  }
  for (var l in t5) vr(t5, l) && (r && String(Number(l)) === l && l < t5.length || Ki && o["$" + l] instanceof Symbol || (x_.call(/[^\w$]/, l) ? n.push(e(l, t5) + ": " + e(t5[l], t5)) : n.push(l + ": " + e(t5[l], t5))));
  if (typeof Wu == "function") for (var u = 0; u < s.length; u++) w_.call(t5, s[u]) && n.push("[" + e(s[u]) + "]: " + e(t5[s[u]], t5));
  return n;
}
var zE = su, HE = rs, ou = function(t5, e, r) {
  for (var n = t5, i; (i = n.next) != null; n = i) if (i.key === e) return n.next = i.next, r || (i.next = t5.next, t5.next = i), i;
}, jE = function(t5, e) {
  if (t5) {
    var r = ou(t5, e);
    return r && r.value;
  }
}, VE = function(t5, e, r) {
  var n = ou(t5, e);
  n ? n.value = r : t5.next = { key: e, next: t5.next, value: r };
}, $E = function(t5, e) {
  return t5 ? !!ou(t5, e) : false;
}, XE = function(t5, e) {
  if (t5) return ou(t5, e, true);
}, WE = function() {
  var e, r = { assert: function(n) {
    if (!r.has(n)) throw new HE("Side channel does not contain " + zE(n));
  }, delete: function(n) {
    var i = e && e.next, s = XE(e, n);
    return s && i && i === s && (e = void 0), !!s;
  }, get: function(n) {
    return jE(e, n);
  }, has: function(n) {
    return $E(e, n);
  }, set: function(n, i) {
    e || (e = { next: void 0 }), VE(e, n, i);
  } };
  return r;
}, C_ = Object, YE = Error, ZE = EvalError, KE = RangeError, qE = ReferenceError, QE = SyntaxError, JE = URIError, eS = Math.abs, tS = Math.floor, rS = Math.max, nS = Math.min, iS = Math.pow, sS = Math.round, oS = Number.isNaN || function(e) {
  return e !== e;
}, aS = oS, lS = function(e) {
  return aS(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, uS = Object.getOwnPropertyDescriptor, La = uS;
if (La) try {
  La([], "length");
} catch {
  La = null;
}
var I_ = La, Ua = Object.defineProperty || false;
if (Ua) try {
  Ua({}, "a", { value: 1 });
} catch {
  Ua = false;
}
var hS = Ua, Zu, Cm;
function cS() {
  return Cm || (Cm = 1, Zu = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return false;
    if (typeof Symbol.iterator == "symbol") return true;
    var e = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return false;
    var i = 42;
    e[r] = i;
    for (var s in e) return false;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return false;
    var o = Object.getOwnPropertySymbols(e);
    if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r)) return false;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = Object.getOwnPropertyDescriptor(e, r);
      if (a.value !== i || a.enumerable !== true) return false;
    }
    return true;
  }), Zu;
}
var Ku, Im;
function dS() {
  if (Im) return Ku;
  Im = 1;
  var t5 = typeof Symbol < "u" && Symbol, e = cS();
  return Ku = function() {
    return typeof t5 != "function" || typeof Symbol != "function" || typeof t5("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : e();
  }, Ku;
}
var qu, Rm;
function R_() {
  return Rm || (Rm = 1, qu = typeof Reflect < "u" && Reflect.getPrototypeOf || null), qu;
}
var Qu, Pm;
function P_() {
  if (Pm) return Qu;
  Pm = 1;
  var t5 = C_;
  return Qu = t5.getPrototypeOf || null, Qu;
}
var Ju, Mm;
function fS() {
  if (Mm) return Ju;
  Mm = 1;
  var t5 = "Function.prototype.bind called on incompatible ", e = Object.prototype.toString, r = Math.max, n = "[object Function]", i = function(l, u) {
    for (var h = [], c = 0; c < l.length; c += 1) h[c] = l[c];
    for (var d = 0; d < u.length; d += 1) h[d + l.length] = u[d];
    return h;
  }, s = function(l, u) {
    for (var h = [], c = u, d = 0; c < l.length; c += 1, d += 1) h[d] = l[c];
    return h;
  }, o = function(a, l) {
    for (var u = "", h = 0; h < a.length; h += 1) u += a[h], h + 1 < a.length && (u += l);
    return u;
  };
  return Ju = function(l) {
    var u = this;
    if (typeof u != "function" || e.apply(u) !== n) throw new TypeError(t5 + u);
    for (var h = s(arguments, 1), c, d = function() {
      if (this instanceof c) {
        var g = u.apply(this, i(h, arguments));
        return Object(g) === g ? g : this;
      }
      return u.apply(l, i(h, arguments));
    }, f = r(0, u.length - h.length), p = [], y = 0; y < f; y++) p[y] = "$" + y;
    if (c = Function("binder", "return function (" + o(p, ",") + "){ return binder.apply(this,arguments); }")(d), u.prototype) {
      var _ = function() {
      };
      _.prototype = u.prototype, c.prototype = new _(), _.prototype = null;
    }
    return c;
  }, Ju;
}
var eh, km;
function au() {
  if (km) return eh;
  km = 1;
  var t5 = fS();
  return eh = Function.prototype.bind || t5, eh;
}
var th, Fm;
function Of() {
  return Fm || (Fm = 1, th = Function.prototype.call), th;
}
var rh, Dm;
function M_() {
  return Dm || (Dm = 1, rh = Function.prototype.apply), rh;
}
var pS = typeof Reflect < "u" && Reflect && Reflect.apply, mS = au(), gS = M_(), yS = Of(), vS = pS, _S = vS || mS.call(yS, gS), xS = au(), wS = rs, ES = Of(), SS = _S, k_ = function(e) {
  if (e.length < 1 || typeof e[0] != "function") throw new wS("a function is required");
  return SS(xS, ES, e);
}, nh, Bm;
function TS() {
  if (Bm) return nh;
  Bm = 1;
  var t5 = k_, e = I_, r;
  try {
    r = [].__proto__ === Array.prototype;
  } catch (o) {
    if (!o || typeof o != "object" || !("code" in o) || o.code !== "ERR_PROTO_ACCESS") throw o;
  }
  var n = !!r && e && e(Object.prototype, "__proto__"), i = Object, s = i.getPrototypeOf;
  return nh = n && typeof n.get == "function" ? t5([n.get]) : typeof s == "function" ? function(a) {
    return s(a == null ? a : i(a));
  } : false, nh;
}
var ih, Nm;
function bS() {
  if (Nm) return ih;
  Nm = 1;
  var t5 = R_(), e = P_(), r = TS();
  return ih = t5 ? function(i) {
    return t5(i);
  } : e ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function") throw new TypeError("getProto: not an object");
    return e(i);
  } : r ? function(i) {
    return r(i);
  } : null, ih;
}
var sh, Om;
function AS() {
  if (Om) return sh;
  Om = 1;
  var t5 = Function.prototype.call, e = Object.prototype.hasOwnProperty, r = au();
  return sh = r.call(t5, e), sh;
}
var ne, CS = C_, IS = YE, RS = ZE, PS = KE, MS = qE, qi = QE, Bi = rs, kS = JE, FS = eS, DS = tS, BS = rS, NS = nS, OS = iS, LS = sS, US = lS, F_ = Function, oh = function(t5) {
  try {
    return F_('"use strict"; return (' + t5 + ").constructor;")();
  } catch {
  }
}, yo = I_, GS = hS, ah = function() {
  throw new Bi();
}, zS = yo ? function() {
  try {
    return arguments.callee, ah;
  } catch {
    try {
      return yo(arguments, "callee").get;
    } catch {
      return ah;
    }
  }
}() : ah, ni = dS()(), Ge = bS(), HS = P_(), jS = R_(), D_ = M_(), Co = Of(), oi = {}, VS = typeof Uint8Array > "u" || !Ge ? ne : Ge(Uint8Array), On = { __proto__: null, "%AggregateError%": typeof AggregateError > "u" ? ne : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ne : ArrayBuffer, "%ArrayIteratorPrototype%": ni && Ge ? Ge([][Symbol.iterator]()) : ne, "%AsyncFromSyncIteratorPrototype%": ne, "%AsyncFunction%": oi, "%AsyncGenerator%": oi, "%AsyncGeneratorFunction%": oi, "%AsyncIteratorPrototype%": oi, "%Atomics%": typeof Atomics > "u" ? ne : Atomics, "%BigInt%": typeof BigInt > "u" ? ne : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? ne : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? ne : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? ne : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": IS, "%eval%": eval, "%EvalError%": RS, "%Float16Array%": typeof Float16Array > "u" ? ne : Float16Array, "%Float32Array%": typeof Float32Array > "u" ? ne : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? ne : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ne : FinalizationRegistry, "%Function%": F_, "%GeneratorFunction%": oi, "%Int8Array%": typeof Int8Array > "u" ? ne : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? ne : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? ne : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": ni && Ge ? Ge(Ge([][Symbol.iterator]())) : ne, "%JSON%": typeof JSON == "object" ? JSON : ne, "%Map%": typeof Map > "u" ? ne : Map, "%MapIteratorPrototype%": typeof Map > "u" || !ni || !Ge ? ne : Ge((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": CS, "%Object.getOwnPropertyDescriptor%": yo, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? ne : Promise, "%Proxy%": typeof Proxy > "u" ? ne : Proxy, "%RangeError%": PS, "%ReferenceError%": MS, "%Reflect%": typeof Reflect > "u" ? ne : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? ne : Set, "%SetIteratorPrototype%": typeof Set > "u" || !ni || !Ge ? ne : Ge((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ne : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": ni && Ge ? Ge(""[Symbol.iterator]()) : ne, "%Symbol%": ni ? Symbol : ne, "%SyntaxError%": qi, "%ThrowTypeError%": zS, "%TypedArray%": VS, "%TypeError%": Bi, "%Uint8Array%": typeof Uint8Array > "u" ? ne : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ne : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? ne : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? ne : Uint32Array, "%URIError%": kS, "%WeakMap%": typeof WeakMap > "u" ? ne : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? ne : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? ne : WeakSet, "%Function.prototype.call%": Co, "%Function.prototype.apply%": D_, "%Object.defineProperty%": GS, "%Object.getPrototypeOf%": HS, "%Math.abs%": FS, "%Math.floor%": DS, "%Math.max%": BS, "%Math.min%": NS, "%Math.pow%": OS, "%Math.round%": LS, "%Math.sign%": US, "%Reflect.getPrototypeOf%": jS };
if (Ge) try {
  null.error;
} catch (t5) {
  var $S = Ge(Ge(t5));
  On["%Error.prototype%"] = $S;
}
var XS = function t2(e) {
  var r;
  if (e === "%AsyncFunction%") r = oh("async function () {}");
  else if (e === "%GeneratorFunction%") r = oh("function* () {}");
  else if (e === "%AsyncGeneratorFunction%") r = oh("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t2("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t2("%AsyncGenerator%");
    i && Ge && (r = Ge(i.prototype));
  }
  return On[e] = r, r;
}, Lm = { __proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, Io = au(), Sl = AS(), WS = Io.call(Co, Array.prototype.concat), YS = Io.call(D_, Array.prototype.splice), Um = Io.call(Co, String.prototype.replace), Tl = Io.call(Co, String.prototype.slice), ZS = Io.call(Co, RegExp.prototype.exec), KS = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, qS = /\\(\\)?/g, QS = function(e) {
  var r = Tl(e, 0, 1), n = Tl(e, -1);
  if (r === "%" && n !== "%") throw new qi("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%") throw new qi("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Um(e, KS, function(s, o, a, l) {
    i[i.length] = a ? Um(l, qS, "$1") : o || s;
  }), i;
}, JS = function(e, r) {
  var n = e, i;
  if (Sl(Lm, n) && (i = Lm[n], n = "%" + i[0] + "%"), Sl(On, n)) {
    var s = On[n];
    if (s === oi && (s = XS(n)), typeof s > "u" && !r) throw new Bi("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return { alias: i, name: n, value: s };
  }
  throw new qi("intrinsic " + e + " does not exist!");
}, Lf = function(e, r) {
  if (typeof e != "string" || e.length === 0) throw new Bi("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean") throw new Bi('"allowMissing" argument must be a boolean');
  if (ZS(/^%?[^%]*%?$/, e) === null) throw new qi("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = QS(e), i = n.length > 0 ? n[0] : "", s = JS("%" + i + "%", r), o = s.name, a = s.value, l = false, u = s.alias;
  u && (i = u[0], YS(n, WS([0, 1], u)));
  for (var h = 1, c = true; h < n.length; h += 1) {
    var d = n[h], f = Tl(d, 0, 1), p = Tl(d, -1);
    if ((f === '"' || f === "'" || f === "`" || p === '"' || p === "'" || p === "`") && f !== p) throw new qi("property names with quotes must have matching quotes");
    if ((d === "constructor" || !c) && (l = true), i += "." + d, o = "%" + i + "%", Sl(On, o)) a = On[o];
    else if (a != null) {
      if (!(d in a)) {
        if (!r) throw new Bi("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (yo && h + 1 >= n.length) {
        var y = yo(a, d);
        c = !!y, c && "get" in y && !("originalValue" in y.get) ? a = y.get : a = a[d];
      } else c = Sl(a, d), a = a[d];
      c && !l && (On[o] = a);
    }
  }
  return a;
}, B_ = Lf, N_ = k_, eT = N_([B_("%String.prototype.indexOf%")]), O_ = function(e, r) {
  var n = B_(e, !!r);
  return typeof n == "function" && eT(e, ".prototype.") > -1 ? N_([n]) : n;
}, tT = Lf, Ro = O_, rT = su, nT = rs, Gm = tT("%Map%", true), iT = Ro("Map.prototype.get", true), sT = Ro("Map.prototype.set", true), oT = Ro("Map.prototype.has", true), aT = Ro("Map.prototype.delete", true), lT = Ro("Map.prototype.size", true), L_ = !!Gm && function() {
  var e, r = { assert: function(n) {
    if (!r.has(n)) throw new nT("Side channel does not contain " + rT(n));
  }, delete: function(n) {
    if (e) {
      var i = aT(e, n);
      return lT(e) === 0 && (e = void 0), i;
    }
    return false;
  }, get: function(n) {
    if (e) return iT(e, n);
  }, has: function(n) {
    return e ? oT(e, n) : false;
  }, set: function(n, i) {
    e || (e = new Gm()), sT(e, n, i);
  } };
  return r;
}, uT = Lf, lu = O_, hT = su, ta = L_, cT = rs, ii = uT("%WeakMap%", true), dT = lu("WeakMap.prototype.get", true), fT = lu("WeakMap.prototype.set", true), pT = lu("WeakMap.prototype.has", true), mT = lu("WeakMap.prototype.delete", true), gT = ii ? function() {
  var e, r, n = { assert: function(i) {
    if (!n.has(i)) throw new cT("Side channel does not contain " + hT(i));
  }, delete: function(i) {
    if (ii && i && (typeof i == "object" || typeof i == "function")) {
      if (e) return mT(e, i);
    } else if (ta && r) return r.delete(i);
    return false;
  }, get: function(i) {
    return ii && i && (typeof i == "object" || typeof i == "function") && e ? dT(e, i) : r && r.get(i);
  }, has: function(i) {
    return ii && i && (typeof i == "object" || typeof i == "function") && e ? pT(e, i) : !!r && r.has(i);
  }, set: function(i, s) {
    ii && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new ii()), fT(e, i, s)) : ta && (r || (r = ta()), r.set(i, s));
  } };
  return n;
} : ta, yT = rs, vT = su, _T = WE, xT = L_, wT = gT, ET = wT || xT || _T, ST = function() {
  var e, r = { assert: function(n) {
    if (!r.has(n)) throw new yT("Side channel does not contain " + vT(n));
  }, delete: function(n) {
    return !!e && e.delete(n);
  }, get: function(n) {
    return e && e.get(n);
  }, has: function(n) {
    return !!e && e.has(n);
  }, set: function(n, i) {
    e || (e = ET()), e.set(n, i);
  } };
  return r;
}, TT = String.prototype.replace, bT = /%20/g, lh = { RFC1738: "RFC1738", RFC3986: "RFC3986" }, Uf = { default: lh.RFC3986, formatters: { RFC1738: function(t5) {
  return TT.call(t5, bT, "+");
}, RFC3986: function(t5) {
  return String(t5);
} }, RFC1738: lh.RFC1738, RFC3986: lh.RFC3986 }, AT = Uf, uh = Object.prototype.hasOwnProperty, In = Array.isArray, Kt = function() {
  for (var t5 = [], e = 0; e < 256; ++e) t5.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t5;
}(), CT = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (In(n)) {
      for (var i = [], s = 0; s < n.length; ++s) typeof n[s] < "u" && i.push(n[s]);
      r.obj[r.prop] = i;
    }
  }
}, U_ = function(e, r) {
  for (var n = r && r.plainObjects ? { __proto__: null } : {}, i = 0; i < e.length; ++i) typeof e[i] < "u" && (n[i] = e[i]);
  return n;
}, IT = function t3(e, r, n) {
  if (!r) return e;
  if (typeof r != "object" && typeof r != "function") {
    if (In(e)) e.push(r);
    else if (e && typeof e == "object") (n && (n.plainObjects || n.allowPrototypes) || !uh.call(Object.prototype, r)) && (e[r] = true);
    else return [e, r];
    return e;
  }
  if (!e || typeof e != "object") return [e].concat(r);
  var i = e;
  return In(e) && !In(r) && (i = U_(e, n)), In(e) && In(r) ? (r.forEach(function(s, o) {
    if (uh.call(e, o)) {
      var a = e[o];
      a && typeof a == "object" && s && typeof s == "object" ? e[o] = t3(a, s, n) : e.push(s);
    } else e[o] = s;
  }), e) : Object.keys(r).reduce(function(s, o) {
    var a = r[o];
    return uh.call(s, o) ? s[o] = t3(s[o], a, n) : s[o] = a, s;
  }, i);
}, RT = function(e, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, e);
}, PT = function(t5, e, r) {
  var n = t5.replace(/\+/g, " ");
  if (r === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, hh = 1024, MT = function(e, r, n, i, s) {
  if (e.length === 0) return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1") return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
    return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
  });
  for (var a = "", l = 0; l < o.length; l += hh) {
    for (var u = o.length >= hh ? o.slice(l, l + hh) : o, h = [], c = 0; c < u.length; ++c) {
      var d = u.charCodeAt(c);
      if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || s === AT.RFC1738 && (d === 40 || d === 41)) {
        h[h.length] = u.charAt(c);
        continue;
      }
      if (d < 128) {
        h[h.length] = Kt[d];
        continue;
      }
      if (d < 2048) {
        h[h.length] = Kt[192 | d >> 6] + Kt[128 | d & 63];
        continue;
      }
      if (d < 55296 || d >= 57344) {
        h[h.length] = Kt[224 | d >> 12] + Kt[128 | d >> 6 & 63] + Kt[128 | d & 63];
        continue;
      }
      c += 1, d = 65536 + ((d & 1023) << 10 | u.charCodeAt(c) & 1023), h[h.length] = Kt[240 | d >> 18] + Kt[128 | d >> 12 & 63] + Kt[128 | d >> 6 & 63] + Kt[128 | d & 63];
    }
    a += h.join("");
  }
  return a;
}, kT = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], i = 0; i < r.length; ++i) for (var s = r[i], o = s.obj[s.prop], a = Object.keys(o), l = 0; l < a.length; ++l) {
    var u = a[l], h = o[u];
    typeof h == "object" && h !== null && n.indexOf(h) === -1 && (r.push({ obj: o, prop: u }), n.push(h));
  }
  return CT(r), e;
}, FT = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, DT = function(e) {
  return !e || typeof e != "object" ? false : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, BT = function(e, r) {
  return [].concat(e, r);
}, NT = function(e, r) {
  if (In(e)) {
    for (var n = [], i = 0; i < e.length; i += 1) n.push(r(e[i]));
    return n;
  }
  return r(e);
}, G_ = { arrayToObject: U_, assign: RT, combine: BT, compact: kT, decode: PT, encode: MT, isBuffer: DT, isRegExp: FT, maybeMap: NT, merge: IT }, z_ = ST, Ga = G_, Xs = Uf, OT = Object.prototype.hasOwnProperty, H_ = { brackets: function(e) {
  return e + "[]";
}, comma: "comma", indices: function(e, r) {
  return e + "[" + r + "]";
}, repeat: function(e) {
  return e;
} }, ir = Array.isArray, LT = Array.prototype.push, j_ = function(t5, e) {
  LT.apply(t5, ir(e) ? e : [e]);
}, UT = Date.prototype.toISOString, zm = Xs.default, Ne = { addQueryPrefix: false, allowDots: false, allowEmptyArrays: false, arrayFormat: "indices", charset: "utf-8", charsetSentinel: false, commaRoundTrip: false, delimiter: "&", encode: true, encodeDotInKeys: false, encoder: Ga.encode, encodeValuesOnly: false, filter: void 0, format: zm, formatter: Xs.formatters[zm], indices: false, serializeDate: function(e) {
  return UT.call(e);
}, skipNulls: false, strictNullHandling: false }, GT = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, ch = {}, zT = function t4(e, r, n, i, s, o, a, l, u, h, c, d, f, p, y, _, g, v) {
  for (var m = e, x = v, w = 0, T = false; (x = x.get(ch)) !== void 0 && !T; ) {
    var S = x.get(e);
    if (w += 1, typeof S < "u") {
      if (S === w) throw new RangeError("Cyclic object value");
      T = true;
    }
    typeof x.get(ch) > "u" && (w = 0);
  }
  if (typeof h == "function" ? m = h(r, m) : m instanceof Date ? m = f(m) : n === "comma" && ir(m) && (m = Ga.maybeMap(m, function(b) {
    return b instanceof Date ? f(b) : b;
  })), m === null) {
    if (o) return u && !_ ? u(r, Ne.encoder, g, "key", p) : r;
    m = "";
  }
  if (GT(m) || Ga.isBuffer(m)) {
    if (u) {
      var E = _ ? r : u(r, Ne.encoder, g, "key", p);
      return [y(E) + "=" + y(u(m, Ne.encoder, g, "value", p))];
    }
    return [y(r) + "=" + y(String(m))];
  }
  var I = [];
  if (typeof m > "u") return I;
  var C;
  if (n === "comma" && ir(m)) _ && u && (m = Ga.maybeMap(m, u)), C = [{ value: m.length > 0 ? m.join(",") || null : void 0 }];
  else if (ir(h)) C = h;
  else {
    var P = Object.keys(m);
    C = c ? P.sort(c) : P;
  }
  var N = l ? String(r).replace(/\./g, "%2E") : String(r), A = i && ir(m) && m.length === 1 ? N + "[]" : N;
  if (s && ir(m) && m.length === 0) return A + "[]";
  for (var R = 0; R < C.length; ++R) {
    var $ = C[R], q = typeof $ == "object" && $ && typeof $.value < "u" ? $.value : m[$];
    if (!(a && q === null)) {
      var O = d && l ? String($).replace(/\./g, "%2E") : String($), k = ir(m) ? typeof n == "function" ? n(A, O) : A : A + (d ? "." + O : "[" + O + "]");
      v.set(e, w);
      var j = z_();
      j.set(ch, v), j_(I, t4(q, k, n, i, s, o, a, l, n === "comma" && _ && ir(m) ? null : u, h, c, d, f, p, y, _, g, j));
    }
  }
  return I;
}, HT = function(e) {
  if (!e) return Ne;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
  var r = e.charset || Ne.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Xs.default;
  if (typeof e.format < "u") {
    if (!OT.call(Xs.formatters, e.format)) throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var i = Xs.formatters[n], s = Ne.filter;
  (typeof e.filter == "function" || ir(e.filter)) && (s = e.filter);
  var o;
  if (e.arrayFormat in H_ ? o = e.arrayFormat : "indices" in e ? o = e.indices ? "indices" : "repeat" : o = Ne.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var a = typeof e.allowDots > "u" ? e.encodeDotInKeys === true ? true : Ne.allowDots : !!e.allowDots;
  return { addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Ne.addQueryPrefix, allowDots: a, allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : Ne.allowEmptyArrays, arrayFormat: o, charset: r, charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ne.charsetSentinel, commaRoundTrip: !!e.commaRoundTrip, delimiter: typeof e.delimiter > "u" ? Ne.delimiter : e.delimiter, encode: typeof e.encode == "boolean" ? e.encode : Ne.encode, encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : Ne.encodeDotInKeys, encoder: typeof e.encoder == "function" ? e.encoder : Ne.encoder, encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Ne.encodeValuesOnly, filter: s, format: n, formatter: i, serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Ne.serializeDate, skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Ne.skipNulls, sort: typeof e.sort == "function" ? e.sort : null, strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ne.strictNullHandling };
}, jT = function(t5, e) {
  var r = t5, n = HT(e), i, s;
  typeof n.filter == "function" ? (s = n.filter, r = s("", r)) : ir(n.filter) && (s = n.filter, i = s);
  var o = [];
  if (typeof r != "object" || r === null) return "";
  var a = H_[n.arrayFormat], l = a === "comma" && n.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var u = z_(), h = 0; h < i.length; ++h) {
    var c = i[h], d = r[c];
    n.skipNulls && d === null || j_(o, zT(d, c, a, l, n.allowEmptyArrays, n.strictNullHandling, n.skipNulls, n.encodeDotInKeys, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, u));
  }
  var f = o.join(n.delimiter), p = n.addQueryPrefix === true ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), f.length > 0 ? p + f : "";
}, Xn = G_, Hc = Object.prototype.hasOwnProperty, Hm = Array.isArray, Re = { allowDots: false, allowEmptyArrays: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decodeDotInKeys: false, decoder: Xn.decode, delimiter: "&", depth: 5, duplicates: "combine", ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictDepth: false, strictNullHandling: false, throwOnLimitExceeded: false }, VT = function(t5) {
  return t5.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, V_ = function(t5, e, r) {
  if (t5 && typeof t5 == "string" && e.comma && t5.indexOf(",") > -1) return t5.split(",");
  if (e.throwOnLimitExceeded && r >= e.arrayLimit) throw new RangeError("Array limit exceeded. Only " + e.arrayLimit + " element" + (e.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  return t5;
}, $T = "utf8=%26%2310003%3B", XT = "utf8=%E2%9C%93", WT = function(e, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
  i = i.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, r.throwOnLimitExceeded ? s + 1 : s);
  if (r.throwOnLimitExceeded && o.length > s) throw new RangeError("Parameter limit exceeded. Only " + s + " parameter" + (s === 1 ? "" : "s") + " allowed.");
  var a = -1, l, u = r.charset;
  if (r.charsetSentinel) for (l = 0; l < o.length; ++l) o[l].indexOf("utf8=") === 0 && (o[l] === XT ? u = "utf-8" : o[l] === $T && (u = "iso-8859-1"), a = l, l = o.length);
  for (l = 0; l < o.length; ++l) if (l !== a) {
    var h = o[l], c = h.indexOf("]="), d = c === -1 ? h.indexOf("=") : c + 1, f, p;
    d === -1 ? (f = r.decoder(h, Re.decoder, u, "key"), p = r.strictNullHandling ? null : "") : (f = r.decoder(h.slice(0, d), Re.decoder, u, "key"), p = Xn.maybeMap(V_(h.slice(d + 1), r, Hm(n[f]) ? n[f].length : 0), function(_) {
      return r.decoder(_, Re.decoder, u, "value");
    })), p && r.interpretNumericEntities && u === "iso-8859-1" && (p = VT(String(p))), h.indexOf("[]=") > -1 && (p = Hm(p) ? [p] : p);
    var y = Hc.call(n, f);
    y && r.duplicates === "combine" ? n[f] = Xn.combine(n[f], p) : (!y || r.duplicates === "last") && (n[f] = p);
  }
  return n;
}, YT = function(t5, e, r, n) {
  var i = 0;
  if (t5.length > 0 && t5[t5.length - 1] === "[]") {
    var s = t5.slice(0, -1).join("");
    i = Array.isArray(e) && e[s] ? e[s].length : 0;
  }
  for (var o = n ? e : V_(e, r, i), a = t5.length - 1; a >= 0; --a) {
    var l, u = t5[a];
    if (u === "[]" && r.parseArrays) l = r.allowEmptyArrays && (o === "" || r.strictNullHandling && o === null) ? [] : Xn.combine([], o);
    else {
      l = r.plainObjects ? { __proto__: null } : {};
      var h = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u, c = r.decodeDotInKeys ? h.replace(/%2E/g, ".") : h, d = parseInt(c, 10);
      !r.parseArrays && c === "" ? l = { 0: o } : !isNaN(d) && u !== c && String(d) === c && d >= 0 && r.parseArrays && d <= r.arrayLimit ? (l = [], l[d] = o) : c !== "__proto__" && (l[c] = o);
    }
    o = l;
  }
  return o;
}, ZT = function(e, r, n, i) {
  if (e) {
    var s = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, l = n.depth > 0 && o.exec(s), u = l ? s.slice(0, l.index) : s, h = [];
    if (u) {
      if (!n.plainObjects && Hc.call(Object.prototype, u) && !n.allowPrototypes) return;
      h.push(u);
    }
    for (var c = 0; n.depth > 0 && (l = a.exec(s)) !== null && c < n.depth; ) {
      if (c += 1, !n.plainObjects && Hc.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes) return;
      h.push(l[1]);
    }
    if (l) {
      if (n.strictDepth === true) throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      h.push("[" + s.slice(l.index) + "]");
    }
    return YT(h, r, n, i);
  }
}, KT = function(e) {
  if (!e) return Re;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  if (typeof e.throwOnLimitExceeded < "u" && typeof e.throwOnLimitExceeded != "boolean") throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
  var r = typeof e.charset > "u" ? Re.charset : e.charset, n = typeof e.duplicates > "u" ? Re.duplicates : e.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
  var i = typeof e.allowDots > "u" ? e.decodeDotInKeys === true ? true : Re.allowDots : !!e.allowDots;
  return { allowDots: i, allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : Re.allowEmptyArrays, allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Re.allowPrototypes, allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Re.allowSparse, arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Re.arrayLimit, charset: r, charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Re.charsetSentinel, comma: typeof e.comma == "boolean" ? e.comma : Re.comma, decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : Re.decodeDotInKeys, decoder: typeof e.decoder == "function" ? e.decoder : Re.decoder, delimiter: typeof e.delimiter == "string" || Xn.isRegExp(e.delimiter) ? e.delimiter : Re.delimiter, depth: typeof e.depth == "number" || e.depth === false ? +e.depth : Re.depth, duplicates: n, ignoreQueryPrefix: e.ignoreQueryPrefix === true, interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Re.interpretNumericEntities, parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Re.parameterLimit, parseArrays: e.parseArrays !== false, plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Re.plainObjects, strictDepth: typeof e.strictDepth == "boolean" ? !!e.strictDepth : Re.strictDepth, strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Re.strictNullHandling, throwOnLimitExceeded: typeof e.throwOnLimitExceeded == "boolean" ? e.throwOnLimitExceeded : false };
}, qT = function(t5, e) {
  var r = KT(e);
  if (t5 === "" || t5 === null || typeof t5 > "u") return r.plainObjects ? { __proto__: null } : {};
  for (var n = typeof t5 == "string" ? WT(t5, r) : t5, i = r.plainObjects ? { __proto__: null } : {}, s = Object.keys(n), o = 0; o < s.length; ++o) {
    var a = s[o], l = ZT(a, n[a], r, typeof t5 == "string");
    i = Xn.merge(i, l, r);
  }
  return r.allowSparse === true ? i : Xn.compact(i);
}, QT = jT, JT = qT, eb = Uf, tb = { formats: eb, parse: JT, stringify: QT }, rb = uE;
function Cr() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var nb = /^([a-z0-9.+-]+:)/i, ib = /:[0-9]*$/, sb = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, ob = ["<", ">", '"', "`", " ", "\r", `
`, "	"], ab = ["{", "}", "|", "\\", "^", "`"].concat(ob), jc = ["'"].concat(ab), jm = ["%", "/", "?", ";", "#"].concat(jc), Vm = ["/", "?", "#"], lb = 255, $m = /^[+a-z0-9A-Z_-]{0,63}$/, ub = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, hb = { javascript: true, "javascript:": true }, Vc = { javascript: true, "javascript:": true }, Ni = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true }, $c = tb;
function cb(t5, e, r) {
  if (t5 && typeof t5 == "object" && t5 instanceof Cr) return t5;
  var n = new Cr();
  return n.parse(t5, e, r), n;
}
Cr.prototype.parse = function(t5, e, r) {
  if (typeof t5 != "string") throw new TypeError("Parameter 'url' must be a string, not " + typeof t5);
  var n = t5.indexOf("?"), i = n !== -1 && n < t5.indexOf("#") ? "?" : "#", s = t5.split(i), o = /\\/g;
  s[0] = s[0].replace(o, "/"), t5 = s.join(i);
  var a = t5;
  if (a = a.trim(), !r && t5.split("#").length === 1) {
    var l = sb.exec(a);
    if (l) return this.path = a, this.href = a, this.pathname = l[1], l[2] ? (this.search = l[2], e ? this.query = $c.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
  }
  var u = nb.exec(a);
  if (u) {
    u = u[0];
    var h = u.toLowerCase();
    this.protocol = h, a = a.substr(u.length);
  }
  if (r || u || a.match(/^\/\/[^@/]+@[^@/]+/)) {
    var c = a.substr(0, 2) === "//";
    c && !(u && Vc[u]) && (a = a.substr(2), this.slashes = true);
  }
  if (!Vc[u] && (c || u && !Ni[u])) {
    for (var d = -1, f = 0; f < Vm.length; f++) {
      var p = a.indexOf(Vm[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    var y, _;
    d === -1 ? _ = a.lastIndexOf("@") : _ = a.lastIndexOf("@", d), _ !== -1 && (y = a.slice(0, _), a = a.slice(_ + 1), this.auth = decodeURIComponent(y)), d = -1;
    for (var f = 0; f < jm.length; f++) {
      var p = a.indexOf(jm[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    d === -1 && (d = a.length), this.host = a.slice(0, d), a = a.slice(d), this.parseHost(), this.hostname = this.hostname || "";
    var g = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!g) for (var v = this.hostname.split(/\./), f = 0, m = v.length; f < m; f++) {
      var x = v[f];
      if (x && !x.match($m)) {
        for (var w = "", T = 0, S = x.length; T < S; T++) x.charCodeAt(T) > 127 ? w += "x" : w += x[T];
        if (!w.match($m)) {
          var E = v.slice(0, f), I = v.slice(f + 1), C = x.match(ub);
          C && (E.push(C[1]), I.unshift(C[2])), I.length && (a = "/" + I.join(".") + a), this.hostname = E.join(".");
          break;
        }
      }
    }
    this.hostname.length > lb ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), g || (this.hostname = rb.toASCII(this.hostname));
    var P = this.port ? ":" + this.port : "", N = this.hostname || "";
    this.host = N + P, this.href += this.host, g && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a));
  }
  if (!hb[h]) for (var f = 0, m = jc.length; f < m; f++) {
    var A = jc[f];
    if (a.indexOf(A) !== -1) {
      var R = encodeURIComponent(A);
      R === A && (R = escape(A)), a = a.split(A).join(R);
    }
  }
  var $ = a.indexOf("#");
  $ !== -1 && (this.hash = a.substr($), a = a.slice(0, $));
  var q = a.indexOf("?");
  if (q !== -1 ? (this.search = a.substr(q), this.query = a.substr(q + 1), e && (this.query = $c.parse(this.query)), a = a.slice(0, q)) : e && (this.search = "", this.query = {}), a && (this.pathname = a), Ni[h] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var P = this.pathname || "", O = this.search || "";
    this.path = P + O;
  }
  return this.href = this.format(), this;
};
Cr.prototype.format = function() {
  var t5 = this.auth || "";
  t5 && (t5 = encodeURIComponent(t5), t5 = t5.replace(/%3A/i, ":"), t5 += "@");
  var e = this.protocol || "", r = this.pathname || "", n = this.hash || "", i = false, s = "";
  this.host ? i = t5 + this.host : this.hostname && (i = t5 + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && typeof this.query == "object" && Object.keys(this.query).length && (s = $c.stringify(this.query, { arrayFormat: "repeat", addQueryPrefix: false }));
  var o = this.search || s && "?" + s || "";
  return e && e.substr(-1) !== ":" && (e += ":"), this.slashes || (!e || Ni[e]) && i !== false ? (i = "//" + (i || ""), r && r.charAt(0) !== "/" && (r = "/" + r)) : i || (i = ""), n && n.charAt(0) !== "#" && (n = "#" + n), o && o.charAt(0) !== "?" && (o = "?" + o), r = r.replace(/[?#]/g, function(a) {
    return encodeURIComponent(a);
  }), o = o.replace("#", "%23"), e + i + r + o + n;
};
Cr.prototype.resolve = function(t5) {
  return this.resolveObject(cb(t5, false, true)).format();
};
Cr.prototype.resolveObject = function(t5) {
  if (typeof t5 == "string") {
    var e = new Cr();
    e.parse(t5, false, true), t5 = e;
  }
  for (var r = new Cr(), n = Object.keys(this), i = 0; i < n.length; i++) {
    var s = n[i];
    r[s] = this[s];
  }
  if (r.hash = t5.hash, t5.href === "") return r.href = r.format(), r;
  if (t5.slashes && !t5.protocol) {
    for (var o = Object.keys(t5), a = 0; a < o.length; a++) {
      var l = o[a];
      l !== "protocol" && (r[l] = t5[l]);
    }
    return Ni[r.protocol] && r.hostname && !r.pathname && (r.pathname = "/", r.path = r.pathname), r.href = r.format(), r;
  }
  if (t5.protocol && t5.protocol !== r.protocol) {
    if (!Ni[t5.protocol]) {
      for (var u = Object.keys(t5), h = 0; h < u.length; h++) {
        var c = u[h];
        r[c] = t5[c];
      }
      return r.href = r.format(), r;
    }
    if (r.protocol = t5.protocol, !t5.host && !Vc[t5.protocol]) {
      for (var m = (t5.pathname || "").split("/"); m.length && !(t5.host = m.shift()); ) ;
      t5.host || (t5.host = ""), t5.hostname || (t5.hostname = ""), m[0] !== "" && m.unshift(""), m.length < 2 && m.unshift(""), r.pathname = m.join("/");
    } else r.pathname = t5.pathname;
    if (r.search = t5.search, r.query = t5.query, r.host = t5.host || "", r.auth = t5.auth, r.hostname = t5.hostname || t5.host, r.port = t5.port, r.pathname || r.search) {
      var d = r.pathname || "", f = r.search || "";
      r.path = d + f;
    }
    return r.slashes = r.slashes || t5.slashes, r.href = r.format(), r;
  }
  var p = r.pathname && r.pathname.charAt(0) === "/", y = t5.host || t5.pathname && t5.pathname.charAt(0) === "/", _ = y || p || r.host && t5.pathname, g = _, v = r.pathname && r.pathname.split("/") || [], m = t5.pathname && t5.pathname.split("/") || [], x = r.protocol && !Ni[r.protocol];
  if (x && (r.hostname = "", r.port = null, r.host && (v[0] === "" ? v[0] = r.host : v.unshift(r.host)), r.host = "", t5.protocol && (t5.hostname = null, t5.port = null, t5.host && (m[0] === "" ? m[0] = t5.host : m.unshift(t5.host)), t5.host = null), _ = _ && (m[0] === "" || v[0] === "")), y) r.host = t5.host || t5.host === "" ? t5.host : r.host, r.hostname = t5.hostname || t5.hostname === "" ? t5.hostname : r.hostname, r.search = t5.search, r.query = t5.query, v = m;
  else if (m.length) v || (v = []), v.pop(), v = v.concat(m), r.search = t5.search, r.query = t5.query;
  else if (t5.search != null) {
    if (x) {
      r.host = v.shift(), r.hostname = r.host;
      var w = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : false;
      w && (r.auth = w.shift(), r.hostname = w.shift(), r.host = r.hostname);
    }
    return r.search = t5.search, r.query = t5.query, (r.pathname !== null || r.search !== null) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
  }
  if (!v.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
  for (var T = v.slice(-1)[0], S = (r.host || t5.host || v.length > 1) && (T === "." || T === "..") || T === "", E = 0, I = v.length; I >= 0; I--) T = v[I], T === "." ? v.splice(I, 1) : T === ".." ? (v.splice(I, 1), E++) : E && (v.splice(I, 1), E--);
  if (!_ && !g) for (; E--; E) v.unshift("..");
  _ && v[0] !== "" && (!v[0] || v[0].charAt(0) !== "/") && v.unshift(""), S && v.join("/").substr(-1) !== "/" && v.push("");
  var C = v[0] === "" || v[0] && v[0].charAt(0) === "/";
  if (x) {
    r.hostname = C ? "" : v.length ? v.shift() : "", r.host = r.hostname;
    var w = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : false;
    w && (r.auth = w.shift(), r.hostname = w.shift(), r.host = r.hostname);
  }
  return _ = _ || r.host && v.length, _ && !C && v.unshift(""), v.length > 0 ? r.pathname = v.join("/") : (r.pathname = null, r.path = null), (r.pathname !== null || r.search !== null) && (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t5.auth || r.auth, r.slashes = r.slashes || t5.slashes, r.href = r.format(), r;
};
Cr.prototype.parseHost = function() {
  var t5 = this.host, e = ib.exec(t5);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t5 = t5.substr(0, t5.length - e.length)), t5 && (this.hostname = t5);
};
const Xm = {};
function ie(t5, e, r = 3) {
  if (Xm[e]) return;
  let n = new Error().stack;
  typeof n > "u" ? console.warn("PixiJS Deprecation Warning: ", `${e}
Deprecated since v${t5}`) : (n = n.split(`
`).splice(r).join(`
`), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${e}
Deprecated since v${t5}`), console.warn(n), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${e}
Deprecated since v${t5}`), console.warn(n))), Xm[e] = true;
}
function Dt(t5) {
  if (typeof t5 != "string") throw new TypeError(`Path must be a string. Received ${JSON.stringify(t5)}`);
}
function ms(t5) {
  return t5.split("?")[0].split("#")[0];
}
function db(t5) {
  return t5.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function fb(t5, e, r) {
  return t5.replace(new RegExp(db(e), "g"), r);
}
function pb(t5, e) {
  let r = "", n = 0, i = -1, s = 0, o = -1;
  for (let a = 0; a <= t5.length; ++a) {
    if (a < t5.length) o = t5.charCodeAt(a);
    else {
      if (o === 47) break;
      o = 47;
    }
    if (o === 47) {
      if (!(i === a - 1 || s === 1)) if (i !== a - 1 && s === 2) {
        if (r.length < 2 || n !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            const l = r.lastIndexOf("/");
            if (l !== r.length - 1) {
              l === -1 ? (r = "", n = 0) : (r = r.slice(0, l), n = r.length - 1 - r.lastIndexOf("/")), i = a, s = 0;
              continue;
            }
          } else if (r.length === 2 || r.length === 1) {
            r = "", n = 0, i = a, s = 0;
            continue;
          }
        }
      } else r.length > 0 ? r += `/${t5.slice(i + 1, a)}` : r = t5.slice(i + 1, a), n = a - i - 1;
      i = a, s = 0;
    } else o === 46 && s !== -1 ? ++s : s = -1;
  }
  return r;
}
const $e = { toPosix(t5) {
  return fb(t5, "\\", "/");
}, isUrl(t5) {
  return /^https?:/.test(this.toPosix(t5));
}, isDataUrl(t5) {
  return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(t5);
}, isBlobUrl(t5) {
  return t5.startsWith("blob:");
}, hasProtocol(t5) {
  return /^[^/:]+:/.test(this.toPosix(t5));
}, getProtocol(t5) {
  Dt(t5), t5 = this.toPosix(t5);
  const e = /^file:\/\/\//.exec(t5);
  if (e) return e[0];
  const r = /^[^/:]+:\/{0,2}/.exec(t5);
  return r ? r[0] : "";
}, toAbsolute(t5, e, r) {
  if (Dt(t5), this.isDataUrl(t5) || this.isBlobUrl(t5)) return t5;
  const n = ms(this.toPosix(e ?? H.ADAPTER.getBaseUrl())), i = ms(this.toPosix(r ?? this.rootname(n)));
  return t5 = this.toPosix(t5), t5.startsWith("/") ? $e.join(i, t5.slice(1)) : this.isAbsolute(t5) ? t5 : this.join(n, t5);
}, normalize(t5) {
  if (Dt(t5), t5.length === 0) return ".";
  if (this.isDataUrl(t5) || this.isBlobUrl(t5)) return t5;
  t5 = this.toPosix(t5);
  let e = "";
  const r = t5.startsWith("/");
  this.hasProtocol(t5) && (e = this.rootname(t5), t5 = t5.slice(e.length));
  const n = t5.endsWith("/");
  return t5 = pb(t5), t5.length > 0 && n && (t5 += "/"), r ? `/${t5}` : e + t5;
}, isAbsolute(t5) {
  return Dt(t5), t5 = this.toPosix(t5), this.hasProtocol(t5) ? true : t5.startsWith("/");
}, join(...t5) {
  if (t5.length === 0) return ".";
  let e;
  for (let r = 0; r < t5.length; ++r) {
    const n = t5[r];
    if (Dt(n), n.length > 0) if (e === void 0) e = n;
    else {
      const i = t5[r - 1] ?? "";
      this.joinExtensions.includes(this.extname(i).toLowerCase()) ? e += `/../${n}` : e += `/${n}`;
    }
  }
  return e === void 0 ? "." : this.normalize(e);
}, dirname(t5) {
  if (Dt(t5), t5.length === 0) return ".";
  t5 = this.toPosix(t5);
  let e = t5.charCodeAt(0);
  const r = e === 47;
  let n = -1, i = true;
  const s = this.getProtocol(t5), o = t5;
  t5 = t5.slice(s.length);
  for (let a = t5.length - 1; a >= 1; --a) if (e = t5.charCodeAt(a), e === 47) {
    if (!i) {
      n = a;
      break;
    }
  } else i = false;
  return n === -1 ? r ? "/" : this.isUrl(o) ? s + t5 : s : r && n === 1 ? "//" : s + t5.slice(0, n);
}, rootname(t5) {
  Dt(t5), t5 = this.toPosix(t5);
  let e = "";
  if (t5.startsWith("/") ? e = "/" : e = this.getProtocol(t5), this.isUrl(t5)) {
    const r = t5.indexOf("/", e.length);
    r !== -1 ? e = t5.slice(0, r) : e = t5, e.endsWith("/") || (e += "/");
  }
  return e;
}, basename(t5, e) {
  Dt(t5), e && Dt(e), t5 = ms(this.toPosix(t5));
  let r = 0, n = -1, i = true, s;
  if (e !== void 0 && e.length > 0 && e.length <= t5.length) {
    if (e.length === t5.length && e === t5) return "";
    let o = e.length - 1, a = -1;
    for (s = t5.length - 1; s >= 0; --s) {
      const l = t5.charCodeAt(s);
      if (l === 47) {
        if (!i) {
          r = s + 1;
          break;
        }
      } else a === -1 && (i = false, a = s + 1), o >= 0 && (l === e.charCodeAt(o) ? --o === -1 && (n = s) : (o = -1, n = a));
    }
    return r === n ? n = a : n === -1 && (n = t5.length), t5.slice(r, n);
  }
  for (s = t5.length - 1; s >= 0; --s) if (t5.charCodeAt(s) === 47) {
    if (!i) {
      r = s + 1;
      break;
    }
  } else n === -1 && (i = false, n = s + 1);
  return n === -1 ? "" : t5.slice(r, n);
}, extname(t5) {
  Dt(t5), t5 = ms(this.toPosix(t5));
  let e = -1, r = 0, n = -1, i = true, s = 0;
  for (let o = t5.length - 1; o >= 0; --o) {
    const a = t5.charCodeAt(o);
    if (a === 47) {
      if (!i) {
        r = o + 1;
        break;
      }
      continue;
    }
    n === -1 && (i = false, n = o + 1), a === 46 ? e === -1 ? e = o : s !== 1 && (s = 1) : e !== -1 && (s = -1);
  }
  return e === -1 || n === -1 || s === 0 || s === 1 && e === n - 1 && e === r + 1 ? "" : t5.slice(e, n);
}, parse(t5) {
  Dt(t5);
  const e = { root: "", dir: "", base: "", ext: "", name: "" };
  if (t5.length === 0) return e;
  t5 = ms(this.toPosix(t5));
  let r = t5.charCodeAt(0);
  const n = this.isAbsolute(t5);
  let i;
  e.root = this.rootname(t5), n || this.hasProtocol(t5) ? i = 1 : i = 0;
  let s = -1, o = 0, a = -1, l = true, u = t5.length - 1, h = 0;
  for (; u >= i; --u) {
    if (r = t5.charCodeAt(u), r === 47) {
      if (!l) {
        o = u + 1;
        break;
      }
      continue;
    }
    a === -1 && (l = false, a = u + 1), r === 46 ? s === -1 ? s = u : h !== 1 && (h = 1) : s !== -1 && (h = -1);
  }
  return s === -1 || a === -1 || h === 0 || h === 1 && s === a - 1 && s === o + 1 ? a !== -1 && (o === 0 && n ? e.base = e.name = t5.slice(1, a) : e.base = e.name = t5.slice(o, a)) : (o === 0 && n ? (e.name = t5.slice(1, s), e.base = t5.slice(1, a)) : (e.name = t5.slice(o, s), e.base = t5.slice(o, a)), e.ext = t5.slice(s, a)), e.dir = this.dirname(t5), e;
}, sep: "/", delimiter: ":", joinExtensions: [".html"] };
let dh;
async function mb() {
  return dh ?? (dh = (async () => {
    var _a2;
    const t5 = document.createElement("canvas").getContext("webgl");
    if (!t5) return ht.UNPACK;
    const e = await new Promise((s) => {
      const o = document.createElement("video");
      o.onloadeddata = () => s(o), o.onerror = () => s(null), o.autoplay = false, o.crossOrigin = "anonymous", o.preload = "auto", o.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", o.load();
    });
    if (!e) return ht.UNPACK;
    const r = t5.createTexture();
    t5.bindTexture(t5.TEXTURE_2D, r);
    const n = t5.createFramebuffer();
    t5.bindFramebuffer(t5.FRAMEBUFFER, n), t5.framebufferTexture2D(t5.FRAMEBUFFER, t5.COLOR_ATTACHMENT0, t5.TEXTURE_2D, r, 0), t5.pixelStorei(t5.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false), t5.pixelStorei(t5.UNPACK_COLORSPACE_CONVERSION_WEBGL, t5.NONE), t5.texImage2D(t5.TEXTURE_2D, 0, t5.RGBA, t5.RGBA, t5.UNSIGNED_BYTE, e);
    const i = new Uint8Array(4);
    return t5.readPixels(0, 0, 1, 1, t5.RGBA, t5.UNSIGNED_BYTE, i), t5.deleteFramebuffer(n), t5.deleteTexture(r), (_a2 = t5.getExtension("WEBGL_lose_context")) == null ? void 0 : _a2.loseContext(), i[0] <= i[3] ? ht.PMA : ht.UNPACK;
  })()), dh;
}
let fh;
function gb() {
  return typeof fh > "u" && (fh = function() {
    var _a2;
    const t5 = { stencil: true, failIfMajorPerformanceCaveat: H.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT };
    try {
      if (!H.ADAPTER.getWebGLRenderingContext()) return false;
      const e = H.ADAPTER.createCanvas();
      let r = e.getContext("webgl", t5) || e.getContext("experimental-webgl", t5);
      const n = !!((_a2 = r == null ? void 0 : r.getContextAttributes()) == null ? void 0 : _a2.stencil);
      if (r) {
        const i = r.getExtension("WEBGL_lose_context");
        i && i.loseContext();
      }
      return r = null, n;
    } catch {
      return false;
    }
  }()), fh;
}
var yb = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, gr = function(t5) {
  return typeof t5 == "string" ? t5.length > 0 : typeof t5 == "number";
}, He = function(t5, e, r) {
  return e === void 0 && (e = 0), r === void 0 && (r = Math.pow(10, e)), Math.round(r * t5) / r + 0;
}, Rt = function(t5, e, r) {
  return e === void 0 && (e = 0), r === void 0 && (r = 1), t5 > r ? r : t5 > e ? t5 : e;
}, $_ = function(t5) {
  return (t5 = isFinite(t5) ? t5 % 360 : 0) > 0 ? t5 : t5 + 360;
}, Wm = function(t5) {
  return { r: Rt(t5.r, 0, 255), g: Rt(t5.g, 0, 255), b: Rt(t5.b, 0, 255), a: Rt(t5.a) };
}, ph = function(t5) {
  return { r: He(t5.r), g: He(t5.g), b: He(t5.b), a: He(t5.a, 3) };
}, vb = /^#([0-9a-f]{3,8})$/i, ra = function(t5) {
  var e = t5.toString(16);
  return e.length < 2 ? "0" + e : e;
}, X_ = function(t5) {
  var e = t5.r, r = t5.g, n = t5.b, i = t5.a, s = Math.max(e, r, n), o = s - Math.min(e, r, n), a = o ? s === e ? (r - n) / o : s === r ? 2 + (n - e) / o : 4 + (e - r) / o : 0;
  return { h: 60 * (a < 0 ? a + 6 : a), s: s ? o / s * 100 : 0, v: s / 255 * 100, a: i };
}, W_ = function(t5) {
  var e = t5.h, r = t5.s, n = t5.v, i = t5.a;
  e = e / 360 * 6, r /= 100, n /= 100;
  var s = Math.floor(e), o = n * (1 - r), a = n * (1 - (e - s) * r), l = n * (1 - (1 - e + s) * r), u = s % 6;
  return { r: 255 * [n, a, o, o, l, n][u], g: 255 * [l, n, n, a, o, o][u], b: 255 * [o, o, l, n, n, a][u], a: i };
}, Ym = function(t5) {
  return { h: $_(t5.h), s: Rt(t5.s, 0, 100), l: Rt(t5.l, 0, 100), a: Rt(t5.a) };
}, Zm = function(t5) {
  return { h: He(t5.h), s: He(t5.s), l: He(t5.l), a: He(t5.a, 3) };
}, Km = function(t5) {
  return W_((r = (e = t5).s, { h: e.h, s: (r *= ((n = e.l) < 50 ? n : 100 - n) / 100) > 0 ? 2 * r / (n + r) * 100 : 0, v: n + r, a: e.a }));
  var e, r, n;
}, Ws = function(t5) {
  return { h: (e = X_(t5)).h, s: (i = (200 - (r = e.s)) * (n = e.v) / 100) > 0 && i < 200 ? r * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0, l: i / 2, a: e.a };
  var e, r, n, i;
}, _b = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, xb = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, wb = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Eb = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Xc = { string: [[function(t5) {
  var e = vb.exec(t5);
  return e ? (t5 = e[1]).length <= 4 ? { r: parseInt(t5[0] + t5[0], 16), g: parseInt(t5[1] + t5[1], 16), b: parseInt(t5[2] + t5[2], 16), a: t5.length === 4 ? He(parseInt(t5[3] + t5[3], 16) / 255, 2) : 1 } : t5.length === 6 || t5.length === 8 ? { r: parseInt(t5.substr(0, 2), 16), g: parseInt(t5.substr(2, 2), 16), b: parseInt(t5.substr(4, 2), 16), a: t5.length === 8 ? He(parseInt(t5.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(t5) {
  var e = wb.exec(t5) || Eb.exec(t5);
  return e ? e[2] !== e[4] || e[4] !== e[6] ? null : Wm({ r: Number(e[1]) / (e[2] ? 100 / 255 : 1), g: Number(e[3]) / (e[4] ? 100 / 255 : 1), b: Number(e[5]) / (e[6] ? 100 / 255 : 1), a: e[7] === void 0 ? 1 : Number(e[7]) / (e[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t5) {
  var e = _b.exec(t5) || xb.exec(t5);
  if (!e) return null;
  var r, n, i = Ym({ h: (r = e[1], n = e[2], n === void 0 && (n = "deg"), Number(r) * (yb[n] || 1)), s: Number(e[3]), l: Number(e[4]), a: e[5] === void 0 ? 1 : Number(e[5]) / (e[6] ? 100 : 1) });
  return Km(i);
}, "hsl"]], object: [[function(t5) {
  var e = t5.r, r = t5.g, n = t5.b, i = t5.a, s = i === void 0 ? 1 : i;
  return gr(e) && gr(r) && gr(n) ? Wm({ r: Number(e), g: Number(r), b: Number(n), a: Number(s) }) : null;
}, "rgb"], [function(t5) {
  var e = t5.h, r = t5.s, n = t5.l, i = t5.a, s = i === void 0 ? 1 : i;
  if (!gr(e) || !gr(r) || !gr(n)) return null;
  var o = Ym({ h: Number(e), s: Number(r), l: Number(n), a: Number(s) });
  return Km(o);
}, "hsl"], [function(t5) {
  var e = t5.h, r = t5.s, n = t5.v, i = t5.a, s = i === void 0 ? 1 : i;
  if (!gr(e) || !gr(r) || !gr(n)) return null;
  var o = function(a) {
    return { h: $_(a.h), s: Rt(a.s, 0, 100), v: Rt(a.v, 0, 100), a: Rt(a.a) };
  }({ h: Number(e), s: Number(r), v: Number(n), a: Number(s) });
  return W_(o);
}, "hsv"]] }, qm = function(t5, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r][0](t5);
    if (n) return [n, e[r][1]];
  }
  return [null, void 0];
}, Sb = function(t5) {
  return typeof t5 == "string" ? qm(t5.trim(), Xc.string) : typeof t5 == "object" && t5 !== null ? qm(t5, Xc.object) : [null, void 0];
}, mh = function(t5, e) {
  var r = Ws(t5);
  return { h: r.h, s: Rt(r.s + 100 * e, 0, 100), l: r.l, a: r.a };
}, gh = function(t5) {
  return (299 * t5.r + 587 * t5.g + 114 * t5.b) / 1e3 / 255;
}, Qm = function(t5, e) {
  var r = Ws(t5);
  return { h: r.h, s: r.s, l: Rt(r.l + 100 * e, 0, 100), a: r.a };
}, Wc = function() {
  function t5(e) {
    this.parsed = Sb(e)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return t5.prototype.isValid = function() {
    return this.parsed !== null;
  }, t5.prototype.brightness = function() {
    return He(gh(this.rgba), 2);
  }, t5.prototype.isDark = function() {
    return gh(this.rgba) < 0.5;
  }, t5.prototype.isLight = function() {
    return gh(this.rgba) >= 0.5;
  }, t5.prototype.toHex = function() {
    return e = ph(this.rgba), r = e.r, n = e.g, i = e.b, o = (s = e.a) < 1 ? ra(He(255 * s)) : "", "#" + ra(r) + ra(n) + ra(i) + o;
    var e, r, n, i, s, o;
  }, t5.prototype.toRgb = function() {
    return ph(this.rgba);
  }, t5.prototype.toRgbString = function() {
    return e = ph(this.rgba), r = e.r, n = e.g, i = e.b, (s = e.a) < 1 ? "rgba(" + r + ", " + n + ", " + i + ", " + s + ")" : "rgb(" + r + ", " + n + ", " + i + ")";
    var e, r, n, i, s;
  }, t5.prototype.toHsl = function() {
    return Zm(Ws(this.rgba));
  }, t5.prototype.toHslString = function() {
    return e = Zm(Ws(this.rgba)), r = e.h, n = e.s, i = e.l, (s = e.a) < 1 ? "hsla(" + r + ", " + n + "%, " + i + "%, " + s + ")" : "hsl(" + r + ", " + n + "%, " + i + "%)";
    var e, r, n, i, s;
  }, t5.prototype.toHsv = function() {
    return e = X_(this.rgba), { h: He(e.h), s: He(e.s), v: He(e.v), a: He(e.a, 3) };
    var e;
  }, t5.prototype.invert = function() {
    return Qt({ r: 255 - (e = this.rgba).r, g: 255 - e.g, b: 255 - e.b, a: e.a });
    var e;
  }, t5.prototype.saturate = function(e) {
    return e === void 0 && (e = 0.1), Qt(mh(this.rgba, e));
  }, t5.prototype.desaturate = function(e) {
    return e === void 0 && (e = 0.1), Qt(mh(this.rgba, -e));
  }, t5.prototype.grayscale = function() {
    return Qt(mh(this.rgba, -1));
  }, t5.prototype.lighten = function(e) {
    return e === void 0 && (e = 0.1), Qt(Qm(this.rgba, e));
  }, t5.prototype.darken = function(e) {
    return e === void 0 && (e = 0.1), Qt(Qm(this.rgba, -e));
  }, t5.prototype.rotate = function(e) {
    return e === void 0 && (e = 15), this.hue(this.hue() + e);
  }, t5.prototype.alpha = function(e) {
    return typeof e == "number" ? Qt({ r: (r = this.rgba).r, g: r.g, b: r.b, a: e }) : He(this.rgba.a, 3);
    var r;
  }, t5.prototype.hue = function(e) {
    var r = Ws(this.rgba);
    return typeof e == "number" ? Qt({ h: e, s: r.s, l: r.l, a: r.a }) : He(r.h);
  }, t5.prototype.isEqual = function(e) {
    return this.toHex() === Qt(e).toHex();
  }, t5;
}(), Qt = function(t5) {
  return t5 instanceof Wc ? t5 : new Wc(t5);
}, Jm = [], Tb = function(t5) {
  t5.forEach(function(e) {
    Jm.indexOf(e) < 0 && (e(Wc, Xc), Jm.push(e));
  });
};
function bb(t5, e) {
  var r = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, n = {};
  for (var i in r) n[r[i]] = i;
  var s = {};
  t5.prototype.toName = function(o) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
    var a, l, u = n[this.toHex()];
    if (u) return u;
    if (o == null ? void 0 : o.closest) {
      var h = this.toRgb(), c = 1 / 0, d = "black";
      if (!s.length) for (var f in r) s[f] = new t5(r[f]).toRgb();
      for (var p in r) {
        var y = (a = h, l = s[p], Math.pow(a.r - l.r, 2) + Math.pow(a.g - l.g, 2) + Math.pow(a.b - l.b, 2));
        y < c && (c = y, d = p);
      }
      return d;
    }
  }, e.string.push([function(o) {
    var a = o.toLowerCase(), l = a === "transparent" ? "#0000" : r[a];
    return l ? new t5(l).toRgb() : null;
  }, "name"]);
}
Tb([bb]);
const ai = class za {
  constructor(e = 16777215) {
    this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = e;
  }
  get red() {
    return this._components[0];
  }
  get green() {
    return this._components[1];
  }
  get blue() {
    return this._components[2];
  }
  get alpha() {
    return this._components[3];
  }
  setValue(e) {
    return this.value = e, this;
  }
  set value(e) {
    if (e instanceof za) this._value = this.cloneSource(e._value), this._int = e._int, this._components.set(e._components);
    else {
      if (e === null) throw new Error("Cannot set PIXI.Color#value to null");
      (this._value === null || !this.isSourceEqual(this._value, e)) && (this.normalize(e), this._value = this.cloneSource(e));
    }
  }
  get value() {
    return this._value;
  }
  cloneSource(e) {
    return typeof e == "string" || typeof e == "number" || e instanceof Number || e === null ? e : Array.isArray(e) || ArrayBuffer.isView(e) ? e.slice(0) : typeof e == "object" && e !== null ? { ...e } : e;
  }
  isSourceEqual(e, r) {
    const n = typeof e;
    if (n !== typeof r) return false;
    if (n === "number" || n === "string" || e instanceof Number) return e === r;
    if (Array.isArray(e) && Array.isArray(r) || ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) return e.length !== r.length ? false : e.every((i, s) => i === r[s]);
    if (e !== null && r !== null) {
      const i = Object.keys(e), s = Object.keys(r);
      return i.length !== s.length ? false : i.every((o) => e[o] === r[o]);
    }
    return e === r;
  }
  toRgba() {
    const [e, r, n, i] = this._components;
    return { r: e, g: r, b: n, a: i };
  }
  toRgb() {
    const [e, r, n] = this._components;
    return { r: e, g: r, b: n };
  }
  toRgbaString() {
    const [e, r, n] = this.toUint8RgbArray();
    return `rgba(${e},${r},${n},${this.alpha})`;
  }
  toUint8RgbArray(e) {
    const [r, n, i] = this._components;
    return e = e ?? [], e[0] = Math.round(r * 255), e[1] = Math.round(n * 255), e[2] = Math.round(i * 255), e;
  }
  toRgbArray(e) {
    e = e ?? [];
    const [r, n, i] = this._components;
    return e[0] = r, e[1] = n, e[2] = i, e;
  }
  toNumber() {
    return this._int;
  }
  toLittleEndianNumber() {
    const e = this._int;
    return (e >> 16) + (e & 65280) + ((e & 255) << 16);
  }
  multiply(e) {
    const [r, n, i, s] = za.temp.setValue(e)._components;
    return this._components[0] *= r, this._components[1] *= n, this._components[2] *= i, this._components[3] *= s, this.refreshInt(), this._value = null, this;
  }
  premultiply(e, r = true) {
    return r && (this._components[0] *= e, this._components[1] *= e, this._components[2] *= e), this._components[3] = e, this.refreshInt(), this._value = null, this;
  }
  toPremultiplied(e, r = true) {
    if (e === 1) return (255 << 24) + this._int;
    if (e === 0) return r ? 0 : this._int;
    let n = this._int >> 16 & 255, i = this._int >> 8 & 255, s = this._int & 255;
    return r && (n = n * e + 0.5 | 0, i = i * e + 0.5 | 0, s = s * e + 0.5 | 0), (e * 255 << 24) + (n << 16) + (i << 8) + s;
  }
  toHex() {
    const e = this._int.toString(16);
    return `#${"000000".substring(0, 6 - e.length) + e}`;
  }
  toHexa() {
    const e = Math.round(this._components[3] * 255).toString(16);
    return this.toHex() + "00".substring(0, 2 - e.length) + e;
  }
  setAlpha(e) {
    return this._components[3] = this._clamp(e), this;
  }
  round(e) {
    const [r, n, i] = this._components;
    return this._components[0] = Math.round(r * e) / e, this._components[1] = Math.round(n * e) / e, this._components[2] = Math.round(i * e) / e, this.refreshInt(), this._value = null, this;
  }
  toArray(e) {
    e = e ?? [];
    const [r, n, i, s] = this._components;
    return e[0] = r, e[1] = n, e[2] = i, e[3] = s, e;
  }
  normalize(e) {
    let r, n, i, s;
    if ((typeof e == "number" || e instanceof Number) && e >= 0 && e <= 16777215) {
      const o = e;
      r = (o >> 16 & 255) / 255, n = (o >> 8 & 255) / 255, i = (o & 255) / 255, s = 1;
    } else if ((Array.isArray(e) || e instanceof Float32Array) && e.length >= 3 && e.length <= 4) e = this._clamp(e), [r, n, i, s = 1] = e;
    else if ((e instanceof Uint8Array || e instanceof Uint8ClampedArray) && e.length >= 3 && e.length <= 4) e = this._clamp(e, 0, 255), [r, n, i, s = 255] = e, r /= 255, n /= 255, i /= 255, s /= 255;
    else if (typeof e == "string" || typeof e == "object") {
      if (typeof e == "string") {
        const a = za.HEX_PATTERN.exec(e);
        a && (e = `#${a[2]}`);
      }
      const o = Qt(e);
      o.isValid() && ({ r, g: n, b: i, a: s } = o.rgba, r /= 255, n /= 255, i /= 255);
    }
    if (r !== void 0) this._components[0] = r, this._components[1] = n, this._components[2] = i, this._components[3] = s, this.refreshInt();
    else throw new Error(`Unable to convert color ${e}`);
  }
  refreshInt() {
    this._clamp(this._components);
    const [e, r, n] = this._components;
    this._int = (e * 255 << 16) + (r * 255 << 8) + (n * 255 | 0);
  }
  _clamp(e, r = 0, n = 1) {
    return typeof e == "number" ? Math.min(Math.max(e, r), n) : (e.forEach((i, s) => {
      e[s] = Math.min(Math.max(i, r), n);
    }), e);
  }
};
ai.shared = new ai(), ai.temp = new ai(), ai.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let ge = ai;
function Ab(t5) {
  return ie("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"), ge.shared.setValue(t5).toHex();
}
function Cb(t5) {
  return ie("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"), ge.shared.setValue(t5).toNumber();
}
function Ib() {
  const t5 = [], e = [];
  for (let n = 0; n < 32; n++) t5[n] = n, e[n] = n;
  t5[Q.NORMAL_NPM] = Q.NORMAL, t5[Q.ADD_NPM] = Q.ADD, t5[Q.SCREEN_NPM] = Q.SCREEN, e[Q.NORMAL] = Q.NORMAL_NPM, e[Q.ADD] = Q.ADD_NPM, e[Q.SCREEN] = Q.SCREEN_NPM;
  const r = [];
  return r.push(e), r.push(t5), r;
}
const Y_ = Ib();
function Z_(t5, e) {
  return Y_[e ? 1 : 0][t5];
}
function Rb(t5, e = null) {
  const r = t5 * 6;
  if (e = e || new Uint16Array(r), e.length !== r) throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${r}`);
  for (let n = 0, i = 0; n < r; n += 6, i += 4) e[n + 0] = i + 0, e[n + 1] = i + 1, e[n + 2] = i + 2, e[n + 3] = i + 0, e[n + 4] = i + 2, e[n + 5] = i + 3;
  return e;
}
function K_(t5) {
  if (t5.BYTES_PER_ELEMENT === 4) return t5 instanceof Float32Array ? "Float32Array" : t5 instanceof Uint32Array ? "Uint32Array" : "Int32Array";
  if (t5.BYTES_PER_ELEMENT === 2) {
    if (t5 instanceof Uint16Array) return "Uint16Array";
  } else if (t5.BYTES_PER_ELEMENT === 1 && t5 instanceof Uint8Array) return "Uint8Array";
  return null;
}
function bl(t5) {
  return t5 += t5 === 0 ? 1 : 0, --t5, t5 |= t5 >>> 1, t5 |= t5 >>> 2, t5 |= t5 >>> 4, t5 |= t5 >>> 8, t5 |= t5 >>> 16, t5 + 1;
}
function eg(t5) {
  return !(t5 & t5 - 1) && !!t5;
}
function tg(t5) {
  let e = (t5 > 65535 ? 1 : 0) << 4;
  t5 >>>= e;
  let r = (t5 > 255 ? 1 : 0) << 3;
  return t5 >>>= r, e |= r, r = (t5 > 15 ? 1 : 0) << 2, t5 >>>= r, e |= r, r = (t5 > 3 ? 1 : 0) << 1, t5 >>>= r, e |= r, e | t5 >> 1;
}
function Oi(t5, e, r) {
  const n = t5.length;
  let i;
  if (e >= n || r === 0) return;
  r = e + r > n ? n - e : r;
  const s = n - r;
  for (i = e; i < s; ++i) t5[i] = t5[i + r];
  t5.length = s;
}
function Kr(t5) {
  return t5 === 0 ? 0 : t5 < 0 ? -1 : 1;
}
let Pb = 0;
function Wn() {
  return ++Pb;
}
const Yc = class {
  constructor(t5, e, r, n) {
    this.left = t5, this.top = e, this.right = r, this.bottom = n;
  }
  get width() {
    return this.right - this.left;
  }
  get height() {
    return this.bottom - this.top;
  }
  isEmpty() {
    return this.left === this.right || this.top === this.bottom;
  }
};
Yc.EMPTY = new Yc(0, 0, 0, 0);
let rg = Yc;
const ng = {}, Jt = /* @__PURE__ */ Object.create(null), Lr = /* @__PURE__ */ Object.create(null);
class Mb {
  constructor(e, r, n) {
    this._canvas = H.ADAPTER.createCanvas(), this._context = this._canvas.getContext("2d"), this.resolution = n || H.RESOLUTION, this.resize(e, r);
  }
  clear() {
    this._checkDestroyed(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  resize(e, r) {
    this._checkDestroyed(), this._canvas.width = Math.round(e * this.resolution), this._canvas.height = Math.round(r * this.resolution);
  }
  destroy() {
    this._context = null, this._canvas = null;
  }
  get width() {
    return this._checkDestroyed(), this._canvas.width;
  }
  set width(e) {
    this._checkDestroyed(), this._canvas.width = Math.round(e);
  }
  get height() {
    return this._checkDestroyed(), this._canvas.height;
  }
  set height(e) {
    this._checkDestroyed(), this._canvas.height = Math.round(e);
  }
  get canvas() {
    return this._checkDestroyed(), this._canvas;
  }
  get context() {
    return this._checkDestroyed(), this._context;
  }
  _checkDestroyed() {
    if (this._canvas === null) throw new TypeError("The CanvasRenderTarget has already been destroyed");
  }
}
function ig(t5, e, r) {
  for (let n = 0, i = 4 * r * e; n < e; ++n, i += 4) if (t5[i + 3] !== 0) return false;
  return true;
}
function sg(t5, e, r, n, i) {
  const s = 4 * e;
  for (let o = n, a = n * s + 4 * r; o <= i; ++o, a += s) if (t5[a + 3] !== 0) return false;
  return true;
}
function kb(t5) {
  const { width: e, height: r } = t5, n = t5.getContext("2d", { willReadFrequently: true });
  if (n === null) throw new TypeError("Failed to get canvas 2D context");
  const i = n.getImageData(0, 0, e, r).data;
  let s = 0, o = 0, a = e - 1, l = r - 1;
  for (; o < r && ig(i, e, o); ) ++o;
  if (o === r) return rg.EMPTY;
  for (; ig(i, e, l); ) --l;
  for (; sg(i, e, s, o, l); ) ++s;
  for (; sg(i, e, a, o, l); ) --a;
  return ++a, ++l, new rg(s, o, a, l);
}
function Fb(t5) {
  const e = kb(t5), { width: r, height: n } = e;
  let i = null;
  if (!e.isEmpty()) {
    const s = t5.getContext("2d");
    if (s === null) throw new TypeError("Failed to get canvas 2D context");
    i = s.getImageData(e.left, e.top, r, n);
  }
  return { width: r, height: n, data: i };
}
function Db(t5, e = globalThis.location) {
  if (t5.startsWith("data:")) return "";
  e = e || globalThis.location;
  const r = new URL(t5, document.baseURI);
  return r.hostname !== e.hostname || r.port !== e.port || r.protocol !== e.protocol ? "anonymous" : "";
}
function kr(t5, e = 1) {
  var _a2;
  const r = (_a2 = H.RETINA_PREFIX) == null ? void 0 : _a2.exec(t5);
  return r ? parseFloat(r[1]) : e;
}
var L = ((t5) => (t5.Renderer = "renderer", t5.Application = "application", t5.RendererSystem = "renderer-webgl-system", t5.RendererPlugin = "renderer-webgl-plugin", t5.CanvasRendererSystem = "renderer-canvas-system", t5.CanvasRendererPlugin = "renderer-canvas-plugin", t5.Asset = "asset", t5.LoadParser = "load-parser", t5.ResolveParser = "resolve-parser", t5.CacheParser = "cache-parser", t5.DetectionParser = "detection-parser", t5))(L || {});
const Zc = (t5) => {
  if (typeof t5 == "function" || typeof t5 == "object" && t5.extension) {
    if (!t5.extension) throw new Error("Extension class must have an extension object");
    t5 = { ...typeof t5.extension != "object" ? { type: t5.extension } : t5.extension, ref: t5 };
  }
  if (typeof t5 == "object") t5 = { ...t5 };
  else throw new Error("Invalid extension type");
  return typeof t5.type == "string" && (t5.type = [t5.type]), t5;
}, og = (t5, e) => Zc(t5).priority ?? e, W = { _addHandlers: {}, _removeHandlers: {}, _queue: {}, remove(...t5) {
  return t5.map(Zc).forEach((e) => {
    e.type.forEach((r) => {
      var _a2, _b2;
      return (_b2 = (_a2 = this._removeHandlers)[r]) == null ? void 0 : _b2.call(_a2, e);
    });
  }), this;
}, add(...t5) {
  return t5.map(Zc).forEach((e) => {
    e.type.forEach((r) => {
      var _a2, _b2;
      const n = this._addHandlers, i = this._queue;
      n[r] ? (_a2 = n[r]) == null ? void 0 : _a2.call(n, e) : (i[r] = i[r] || [], (_b2 = i[r]) == null ? void 0 : _b2.push(e));
    });
  }), this;
}, handle(t5, e, r) {
  var _a2;
  const n = this._addHandlers, i = this._removeHandlers;
  if (n[t5] || i[t5]) throw new Error(`Extension type ${t5} already has a handler`);
  n[t5] = e, i[t5] = r;
  const s = this._queue;
  return s[t5] && ((_a2 = s[t5]) == null ? void 0 : _a2.forEach((o) => e(o)), delete s[t5]), this;
}, handleByMap(t5, e) {
  return this.handle(t5, (r) => {
    r.name && (e[r.name] = r.ref);
  }, (r) => {
    r.name && delete e[r.name];
  });
}, handleByList(t5, e, r = -1) {
  return this.handle(t5, (n) => {
    e.includes(n.ref) || (e.push(n.ref), e.sort((i, s) => og(s, r) - og(i, r)));
  }, (n) => {
    const i = e.indexOf(n.ref);
    i !== -1 && e.splice(i, 1);
  });
} };
class Kc {
  constructor(e) {
    typeof e == "number" ? this.rawBinaryData = new ArrayBuffer(e) : e instanceof Uint8Array ? this.rawBinaryData = e.buffer : this.rawBinaryData = e, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData);
  }
  get int8View() {
    return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View;
  }
  get uint8View() {
    return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View;
  }
  get int16View() {
    return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View;
  }
  get uint16View() {
    return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View;
  }
  get int32View() {
    return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View;
  }
  view(e) {
    return this[`${e}View`];
  }
  destroy() {
    this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null;
  }
  static sizeOf(e) {
    switch (e) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${e} isn't a valid view type`);
    }
  }
}
const Bb = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
`);
function Nb(t5) {
  let e = "";
  for (let r = 0; r < t5; ++r) r > 0 && (e += `
else `), r < t5 - 1 && (e += `if(test == ${r}.0){}`);
  return e;
}
function Ob(t5, e) {
  if (t5 === 0) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  const r = e.createShader(e.FRAGMENT_SHADER);
  for (; ; ) {
    const n = Bb.replace(/%forloop%/gi, Nb(t5));
    if (e.shaderSource(r, n), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) t5 = t5 / 2 | 0;
    else break;
  }
  return t5;
}
const yh = 0, vh = 1, _h = 2, xh = 3, wh = 4, Eh = 5;
class pr {
  constructor() {
    this.data = 0, this.blendMode = Q.NORMAL, this.polygonOffset = 0, this.blend = true, this.depthMask = true;
  }
  get blend() {
    return !!(this.data & 1 << yh);
  }
  set blend(e) {
    !!(this.data & 1 << yh) !== e && (this.data ^= 1 << yh);
  }
  get offsets() {
    return !!(this.data & 1 << vh);
  }
  set offsets(e) {
    !!(this.data & 1 << vh) !== e && (this.data ^= 1 << vh);
  }
  get culling() {
    return !!(this.data & 1 << _h);
  }
  set culling(e) {
    !!(this.data & 1 << _h) !== e && (this.data ^= 1 << _h);
  }
  get depthTest() {
    return !!(this.data & 1 << xh);
  }
  set depthTest(e) {
    !!(this.data & 1 << xh) !== e && (this.data ^= 1 << xh);
  }
  get depthMask() {
    return !!(this.data & 1 << Eh);
  }
  set depthMask(e) {
    !!(this.data & 1 << Eh) !== e && (this.data ^= 1 << Eh);
  }
  get clockwiseFrontFace() {
    return !!(this.data & 1 << wh);
  }
  set clockwiseFrontFace(e) {
    !!(this.data & 1 << wh) !== e && (this.data ^= 1 << wh);
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(e) {
    this.blend = e !== Q.NONE, this._blendMode = e;
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(e) {
    this.offsets = !!e, this._polygonOffset = e;
  }
  static for2d() {
    const e = new pr();
    return e.depthTest = false, e.blend = true, e;
  }
}
pr.prototype.toString = function() {
  return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
};
const qc = [];
function q_(t5, e) {
  if (!t5) return null;
  let r = "";
  if (typeof t5 == "string") {
    const n = /\.(\w{3,4})(?:$|\?|#)/i.exec(t5);
    n && (r = n[1].toLowerCase());
  }
  for (let n = qc.length - 1; n >= 0; --n) {
    const i = qc[n];
    if (i.test && i.test(t5, r)) return new i(t5, e);
  }
  throw new Error("Unrecognized source type to auto-detect Resource");
}
class $t {
  constructor(e) {
    this.items = [], this._name = e, this._aliasCount = 0;
  }
  emit(e, r, n, i, s, o, a, l) {
    if (arguments.length > 8) throw new Error("max arguments reached");
    const { name: u, items: h } = this;
    this._aliasCount++;
    for (let c = 0, d = h.length; c < d; c++) h[c][u](e, r, n, i, s, o, a, l);
    return h === this.items && this._aliasCount--, this;
  }
  ensureNonAliasedItems() {
    this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0));
  }
  add(e) {
    return e[this._name] && (this.ensureNonAliasedItems(), this.remove(e), this.items.push(e)), this;
  }
  remove(e) {
    const r = this.items.indexOf(e);
    return r !== -1 && (this.ensureNonAliasedItems(), this.items.splice(r, 1)), this;
  }
  contains(e) {
    return this.items.includes(e);
  }
  removeAll() {
    return this.ensureNonAliasedItems(), this.items.length = 0, this;
  }
  destroy() {
    this.removeAll(), this.items.length = 0, this._name = "";
  }
  get empty() {
    return this.items.length === 0;
  }
  get name() {
    return this._name;
  }
}
Object.defineProperties($t.prototype, { dispatch: { value: $t.prototype.emit }, run: { value: $t.prototype.emit } });
class vo {
  constructor(e = 0, r = 0) {
    this._width = e, this._height = r, this.destroyed = false, this.internal = false, this.onResize = new $t("setRealSize"), this.onUpdate = new $t("update"), this.onError = new $t("onError");
  }
  bind(e) {
    this.onResize.add(e), this.onUpdate.add(e), this.onError.add(e), (this._width || this._height) && this.onResize.emit(this._width, this._height);
  }
  unbind(e) {
    this.onResize.remove(e), this.onUpdate.remove(e), this.onError.remove(e);
  }
  resize(e, r) {
    (e !== this._width || r !== this._height) && (this._width = e, this._height = r, this.onResize.emit(e, r));
  }
  get valid() {
    return !!this._width && !!this._height;
  }
  update() {
    this.destroyed || this.onUpdate.emit();
  }
  load() {
    return Promise.resolve(this);
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  style(e, r, n) {
    return false;
  }
  dispose() {
  }
  destroy() {
    this.destroyed || (this.destroyed = true, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null);
  }
  static test(e, r) {
    return false;
  }
}
class uu extends vo {
  constructor(e, r) {
    const { width: n, height: i } = r || {};
    if (!n || !i) throw new Error("BufferResource width or height invalid");
    super(n, i), this.data = e, this.unpackAlignment = r.unpackAlignment ?? 4;
  }
  upload(e, r, n) {
    const i = e.gl;
    i.pixelStorei(i.UNPACK_ALIGNMENT, this.unpackAlignment), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.alphaMode === ht.UNPACK);
    const s = r.realWidth, o = r.realHeight;
    return n.width === s && n.height === o ? i.texSubImage2D(r.target, 0, 0, 0, s, o, r.format, n.type, this.data) : (n.width = s, n.height = o, i.texImage2D(r.target, 0, n.internalFormat, s, o, 0, r.format, n.type, this.data)), true;
  }
  dispose() {
    this.data = null;
  }
  static test(e) {
    return e === null || e instanceof Int8Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array;
  }
}
const Lb = { scaleMode: Er.NEAREST, alphaMode: ht.NPM }, Qc = class li extends Ao {
  constructor(e = null, r = null) {
    super(), r = Object.assign({}, li.defaultOptions, r);
    const { alphaMode: n, mipmap: i, anisotropicLevel: s, scaleMode: o, width: a, height: l, wrapMode: u, format: h, type: c, target: d, resolution: f, resourceOptions: p } = r;
    e && !(e instanceof vo) && (e = q_(e, p), e.internal = true), this.resolution = f || H.RESOLUTION, this.width = Math.round((a || 0) * this.resolution) / this.resolution, this.height = Math.round((l || 0) * this.resolution) / this.resolution, this._mipmap = i, this.anisotropicLevel = s, this._wrapMode = u, this._scaleMode = o, this.format = h, this.type = c, this.target = d, this.alphaMode = n, this.uid = Wn(), this.touched = 0, this.isPowerOfTwo = false, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = a > 0 && l > 0, this.textureCacheIds = [], this.destroyed = false, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.parentTextureArray = null, this.setResource(e);
  }
  get realWidth() {
    return Math.round(this.width * this.resolution);
  }
  get realHeight() {
    return Math.round(this.height * this.resolution);
  }
  get mipmap() {
    return this._mipmap;
  }
  set mipmap(e) {
    this._mipmap !== e && (this._mipmap = e, this.dirtyStyleId++);
  }
  get scaleMode() {
    return this._scaleMode;
  }
  set scaleMode(e) {
    this._scaleMode !== e && (this._scaleMode = e, this.dirtyStyleId++);
  }
  get wrapMode() {
    return this._wrapMode;
  }
  set wrapMode(e) {
    this._wrapMode !== e && (this._wrapMode = e, this.dirtyStyleId++);
  }
  setStyle(e, r) {
    let n;
    return e !== void 0 && e !== this.scaleMode && (this.scaleMode = e, n = true), r !== void 0 && r !== this.mipmap && (this.mipmap = r, n = true), n && this.dirtyStyleId++, this;
  }
  setSize(e, r, n) {
    return n = n || this.resolution, this.setRealSize(e * n, r * n, n);
  }
  setRealSize(e, r, n) {
    return this.resolution = n || this.resolution, this.width = Math.round(e) / this.resolution, this.height = Math.round(r) / this.resolution, this._refreshPOT(), this.update(), this;
  }
  _refreshPOT() {
    this.isPowerOfTwo = eg(this.realWidth) && eg(this.realHeight);
  }
  setResolution(e) {
    const r = this.resolution;
    return r === e ? this : (this.resolution = e, this.valid && (this.width = Math.round(this.width * r) / e, this.height = Math.round(this.height * r) / e, this.emit("update", this)), this._refreshPOT(), this);
  }
  setResource(e) {
    if (this.resource === e) return this;
    if (this.resource) throw new Error("Resource can be set only once");
    return e.bind(this), this.resource = e, this;
  }
  update() {
    this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = true, this.emit("loaded", this), this.emit("update", this));
  }
  onError(e) {
    this.emit("error", this, e);
  }
  destroy() {
    this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete Lr[this.cacheId], delete Jt[this.cacheId], this.cacheId = null), this.valid = false, this.dispose(), li.removeFromCache(this), this.textureCacheIds = null, this.destroyed = true, this.emit("destroyed", this), this.removeAllListeners();
  }
  dispose() {
    this.emit("dispose", this);
  }
  castToBaseTexture() {
    return this;
  }
  static from(e, r, n = H.STRICT_TEXTURE_CACHE) {
    const i = typeof e == "string";
    let s = null;
    if (i) s = e;
    else {
      if (!e._pixiId) {
        const a = (r == null ? void 0 : r.pixiIdPrefix) || "pixiid";
        e._pixiId = `${a}_${Wn()}`;
      }
      s = e._pixiId;
    }
    let o = Lr[s];
    if (i && n && !o) throw new Error(`The cacheId "${s}" does not exist in BaseTextureCache.`);
    return o || (o = new li(e, r), o.cacheId = s, li.addToCache(o, s)), o;
  }
  static fromBuffer(e, r, n, i) {
    e = e || new Float32Array(r * n * 4);
    const s = new uu(e, { width: r, height: n, ...i == null ? void 0 : i.resourceOptions });
    let o, a;
    return e instanceof Float32Array ? (o = D.RGBA, a = Z.FLOAT) : e instanceof Int32Array ? (o = D.RGBA_INTEGER, a = Z.INT) : e instanceof Uint32Array ? (o = D.RGBA_INTEGER, a = Z.UNSIGNED_INT) : e instanceof Int16Array ? (o = D.RGBA_INTEGER, a = Z.SHORT) : e instanceof Uint16Array ? (o = D.RGBA_INTEGER, a = Z.UNSIGNED_SHORT) : e instanceof Int8Array ? (o = D.RGBA, a = Z.BYTE) : (o = D.RGBA, a = Z.UNSIGNED_BYTE), s.internal = true, new li(s, Object.assign({}, Lb, { type: a, format: o }, i));
  }
  static addToCache(e, r) {
    r && (e.textureCacheIds.includes(r) || e.textureCacheIds.push(r), Lr[r] && Lr[r] !== e && console.warn(`BaseTexture added to the cache with an id [${r}] that already had an entry`), Lr[r] = e);
  }
  static removeFromCache(e) {
    if (typeof e == "string") {
      const r = Lr[e];
      if (r) {
        const n = r.textureCacheIds.indexOf(e);
        return n > -1 && r.textureCacheIds.splice(n, 1), delete Lr[e], r;
      }
    } else if (e == null ? void 0 : e.textureCacheIds) {
      for (let r = 0; r < e.textureCacheIds.length; ++r) delete Lr[e.textureCacheIds[r]];
      return e.textureCacheIds.length = 0, e;
    }
    return null;
  }
};
Qc.defaultOptions = { mipmap: fr.POW2, anisotropicLevel: 0, scaleMode: Er.LINEAR, wrapMode: an.CLAMP, alphaMode: ht.UNPACK, target: Di.TEXTURE_2D, format: D.RGBA, type: Z.UNSIGNED_BYTE }, Qc._globalBatch = 0;
let ee = Qc;
class Jc {
  constructor() {
    this.texArray = null, this.blend = 0, this.type = lr.TRIANGLES, this.start = 0, this.size = 0, this.data = null;
  }
}
let Ub = 0;
class ke {
  constructor(e, r = true, n = false) {
    this.data = e || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = n, this.static = r, this.id = Ub++, this.disposeRunner = new $t("disposeBuffer");
  }
  update(e) {
    e instanceof Array && (e = new Float32Array(e)), this.data = e || this.data, this._updateID++;
  }
  dispose() {
    this.disposeRunner.emit(this, false);
  }
  destroy() {
    this.dispose(), this.data = null;
  }
  set index(e) {
    this.type = e ? cr.ELEMENT_ARRAY_BUFFER : cr.ARRAY_BUFFER;
  }
  get index() {
    return this.type === cr.ELEMENT_ARRAY_BUFFER;
  }
  static from(e) {
    return e instanceof Array && (e = new Float32Array(e)), new ke(e);
  }
}
class Al {
  constructor(e, r = 0, n = false, i = Z.FLOAT, s, o, a, l = 1) {
    this.buffer = e, this.size = r, this.normalized = n, this.type = i, this.stride = s, this.start = o, this.instance = a, this.divisor = l;
  }
  destroy() {
    this.buffer = null;
  }
  static from(e, r, n, i, s) {
    return new Al(e, r, n, i, s);
  }
}
const Gb = { Float32Array, Uint32Array, Int32Array, Uint8Array };
function zb(t5, e) {
  let r = 0, n = 0;
  const i = {};
  for (let l = 0; l < t5.length; l++) n += e[l], r += t5[l].length;
  const s = new ArrayBuffer(r * 4);
  let o = null, a = 0;
  for (let l = 0; l < t5.length; l++) {
    const u = e[l], h = t5[l], c = K_(h);
    i[c] || (i[c] = new Gb[c](s)), o = i[c];
    for (let d = 0; d < h.length; d++) {
      const f = (d / u | 0) * n + a, p = d % u;
      o[f + p] = h[d];
    }
    a += u;
  }
  return new Float32Array(s);
}
const ag = { 5126: 4, 5123: 2, 5121: 1 };
let Hb = 0;
const jb = { Float32Array, Uint32Array, Int32Array, Uint8Array, Uint16Array };
class hn {
  constructor(e = [], r = {}) {
    this.buffers = e, this.indexBuffer = null, this.attributes = r, this.glVertexArrayObjects = {}, this.id = Hb++, this.instanced = false, this.instanceCount = 1, this.disposeRunner = new $t("disposeGeometry"), this.refCount = 0;
  }
  addAttribute(e, r, n = 0, i = false, s, o, a, l = false) {
    if (!r) throw new Error("You must pass a buffer when creating an attribute");
    r instanceof ke || (r instanceof Array && (r = new Float32Array(r)), r = new ke(r));
    const u = e.split("|");
    if (u.length > 1) {
      for (let c = 0; c < u.length; c++) this.addAttribute(u[c], r, n, i, s);
      return this;
    }
    let h = this.buffers.indexOf(r);
    return h === -1 && (this.buffers.push(r), h = this.buffers.length - 1), this.attributes[e] = new Al(h, n, i, s, o, a, l), this.instanced = this.instanced || l, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  getBuffer(e) {
    return this.buffers[this.getAttribute(e).buffer];
  }
  addIndex(e) {
    return e instanceof ke || (e instanceof Array && (e = new Uint16Array(e)), e = new ke(e)), e.type = cr.ELEMENT_ARRAY_BUFFER, this.indexBuffer = e, this.buffers.includes(e) || this.buffers.push(e), this;
  }
  getIndex() {
    return this.indexBuffer;
  }
  interleave() {
    if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer) return this;
    const e = [], r = [], n = new ke();
    let i;
    for (i in this.attributes) {
      const s = this.attributes[i], o = this.buffers[s.buffer];
      e.push(o.data), r.push(s.size * ag[s.type] / 4), s.buffer = 0;
    }
    for (n.data = zb(e, r), i = 0; i < this.buffers.length; i++) this.buffers[i] !== this.indexBuffer && this.buffers[i].destroy();
    return this.buffers = [n], this.indexBuffer && this.buffers.push(this.indexBuffer), this;
  }
  getSize() {
    for (const e in this.attributes) {
      const r = this.attributes[e];
      return this.buffers[r.buffer].data.length / (r.stride / 4 || r.size);
    }
    return 0;
  }
  dispose() {
    this.disposeRunner.emit(this, false);
  }
  destroy() {
    this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null;
  }
  clone() {
    const e = new hn();
    for (let r = 0; r < this.buffers.length; r++) e.buffers[r] = new ke(this.buffers[r].data.slice(0));
    for (const r in this.attributes) {
      const n = this.attributes[r];
      e.attributes[r] = new Al(n.buffer, n.size, n.normalized, n.type, n.stride, n.start, n.instance);
    }
    return this.indexBuffer && (e.indexBuffer = e.buffers[this.buffers.indexOf(this.indexBuffer)], e.indexBuffer.type = cr.ELEMENT_ARRAY_BUFFER), e;
  }
  static merge(e) {
    const r = new hn(), n = [], i = [], s = [];
    let o;
    for (let a = 0; a < e.length; a++) {
      o = e[a];
      for (let l = 0; l < o.buffers.length; l++) i[l] = i[l] || 0, i[l] += o.buffers[l].data.length, s[l] = 0;
    }
    for (let a = 0; a < o.buffers.length; a++) n[a] = new jb[K_(o.buffers[a].data)](i[a]), r.buffers[a] = new ke(n[a]);
    for (let a = 0; a < e.length; a++) {
      o = e[a];
      for (let l = 0; l < o.buffers.length; l++) n[l].set(o.buffers[l].data, s[l]), s[l] += o.buffers[l].data.length;
    }
    if (r.attributes = o.attributes, o.indexBuffer) {
      r.indexBuffer = r.buffers[o.buffers.indexOf(o.indexBuffer)], r.indexBuffer.type = cr.ELEMENT_ARRAY_BUFFER;
      let a = 0, l = 0, u = 0, h = 0;
      for (let c = 0; c < o.buffers.length; c++) if (o.buffers[c] !== o.indexBuffer) {
        h = c;
        break;
      }
      for (const c in o.attributes) {
        const d = o.attributes[c];
        (d.buffer | 0) === h && (l += d.size * ag[d.type] / 4);
      }
      for (let c = 0; c < e.length; c++) {
        const d = e[c].indexBuffer.data;
        for (let f = 0; f < d.length; f++) r.indexBuffer.data[f + u] += a;
        a += e[c].buffers[h].data.length / l, u += d.length;
      }
    }
    return r;
  }
}
class Q_ extends hn {
  constructor(e = false) {
    super(), this._buffer = new ke(null, e, false), this._indexBuffer = new ke(null, e, true), this.addAttribute("aVertexPosition", this._buffer, 2, false, Z.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, false, Z.FLOAT).addAttribute("aColor", this._buffer, 4, true, Z.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, true, Z.FLOAT).addIndex(this._indexBuffer);
  }
}
const Cl = Math.PI * 2, Vb = 180 / Math.PI, $b = Math.PI / 180;
var Ye = ((t5) => (t5[t5.POLY = 0] = "POLY", t5[t5.RECT = 1] = "RECT", t5[t5.CIRC = 2] = "CIRC", t5[t5.ELIP = 3] = "ELIP", t5[t5.RREC = 4] = "RREC", t5))(Ye || {});
class ae {
  constructor(e = 0, r = 0) {
    this.x = 0, this.y = 0, this.x = e, this.y = r;
  }
  clone() {
    return new ae(this.x, this.y);
  }
  copyFrom(e) {
    return this.set(e.x, e.y), this;
  }
  copyTo(e) {
    return e.set(this.x, this.y), e;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  set(e = 0, r = e) {
    return this.x = e, this.y = r, this;
  }
}
ae.prototype.toString = function() {
  return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
};
const na = [new ae(), new ae(), new ae(), new ae()];
class te {
  constructor(e = 0, r = 0, n = 0, i = 0) {
    this.x = Number(e), this.y = Number(r), this.width = Number(n), this.height = Number(i), this.type = Ye.RECT;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  static get EMPTY() {
    return new te(0, 0, 0, 0);
  }
  clone() {
    return new te(this.x, this.y, this.width, this.height);
  }
  copyFrom(e) {
    return this.x = e.x, this.y = e.y, this.width = e.width, this.height = e.height, this;
  }
  copyTo(e) {
    return e.x = this.x, e.y = this.y, e.width = this.width, e.height = this.height, e;
  }
  contains(e, r) {
    return this.width <= 0 || this.height <= 0 ? false : e >= this.x && e < this.x + this.width && r >= this.y && r < this.y + this.height;
  }
  intersects(e, r) {
    if (!r) {
      const E = this.x < e.x ? e.x : this.x;
      if ((this.right > e.right ? e.right : this.right) <= E) return false;
      const I = this.y < e.y ? e.y : this.y;
      return (this.bottom > e.bottom ? e.bottom : this.bottom) > I;
    }
    const n = this.left, i = this.right, s = this.top, o = this.bottom;
    if (i <= n || o <= s) return false;
    const a = na[0].set(e.left, e.top), l = na[1].set(e.left, e.bottom), u = na[2].set(e.right, e.top), h = na[3].set(e.right, e.bottom);
    if (u.x <= a.x || l.y <= a.y) return false;
    const c = Math.sign(r.a * r.d - r.b * r.c);
    if (c === 0 || (r.apply(a, a), r.apply(l, l), r.apply(u, u), r.apply(h, h), Math.max(a.x, l.x, u.x, h.x) <= n || Math.min(a.x, l.x, u.x, h.x) >= i || Math.max(a.y, l.y, u.y, h.y) <= s || Math.min(a.y, l.y, u.y, h.y) >= o)) return false;
    const d = c * (l.y - a.y), f = c * (a.x - l.x), p = d * n + f * s, y = d * i + f * s, _ = d * n + f * o, g = d * i + f * o;
    if (Math.max(p, y, _, g) <= d * a.x + f * a.y || Math.min(p, y, _, g) >= d * h.x + f * h.y) return false;
    const v = c * (a.y - u.y), m = c * (u.x - a.x), x = v * n + m * s, w = v * i + m * s, T = v * n + m * o, S = v * i + m * o;
    return !(Math.max(x, w, T, S) <= v * a.x + m * a.y || Math.min(x, w, T, S) >= v * h.x + m * h.y);
  }
  pad(e = 0, r = e) {
    return this.x -= e, this.y -= r, this.width += e * 2, this.height += r * 2, this;
  }
  fit(e) {
    const r = Math.max(this.x, e.x), n = Math.min(this.x + this.width, e.x + e.width), i = Math.max(this.y, e.y), s = Math.min(this.y + this.height, e.y + e.height);
    return this.x = r, this.width = Math.max(n - r, 0), this.y = i, this.height = Math.max(s - i, 0), this;
  }
  ceil(e = 1, r = 1e-3) {
    const n = Math.ceil((this.x + this.width - r) * e) / e, i = Math.ceil((this.y + this.height - r) * e) / e;
    return this.x = Math.floor((this.x + r) * e) / e, this.y = Math.floor((this.y + r) * e) / e, this.width = n - this.x, this.height = i - this.y, this;
  }
  enlarge(e) {
    const r = Math.min(this.x, e.x), n = Math.max(this.x + this.width, e.x + e.width), i = Math.min(this.y, e.y), s = Math.max(this.y + this.height, e.y + e.height);
    return this.x = r, this.width = n - r, this.y = i, this.height = s - i, this;
  }
}
te.prototype.toString = function() {
  return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class hu {
  constructor(e = 0, r = 0, n = 0) {
    this.x = e, this.y = r, this.radius = n, this.type = Ye.CIRC;
  }
  clone() {
    return new hu(this.x, this.y, this.radius);
  }
  contains(e, r) {
    if (this.radius <= 0) return false;
    const n = this.radius * this.radius;
    let i = this.x - e, s = this.y - r;
    return i *= i, s *= s, i + s <= n;
  }
  getBounds() {
    return new te(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}
hu.prototype.toString = function() {
  return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
};
class cu {
  constructor(e = 0, r = 0, n = 0, i = 0) {
    this.x = e, this.y = r, this.width = n, this.height = i, this.type = Ye.ELIP;
  }
  clone() {
    return new cu(this.x, this.y, this.width, this.height);
  }
  contains(e, r) {
    if (this.width <= 0 || this.height <= 0) return false;
    let n = (e - this.x) / this.width, i = (r - this.y) / this.height;
    return n *= n, i *= i, n + i <= 1;
  }
  getBounds() {
    return new te(this.x - this.width, this.y - this.height, this.width, this.height);
  }
}
cu.prototype.toString = function() {
  return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class Ln {
  constructor(...e) {
    let r = Array.isArray(e[0]) ? e[0] : e;
    if (typeof r[0] != "number") {
      const n = [];
      for (let i = 0, s = r.length; i < s; i++) n.push(r[i].x, r[i].y);
      r = n;
    }
    this.points = r, this.type = Ye.POLY, this.closeStroke = true;
  }
  clone() {
    const e = this.points.slice(), r = new Ln(e);
    return r.closeStroke = this.closeStroke, r;
  }
  contains(e, r) {
    let n = false;
    const i = this.points.length / 2;
    for (let s = 0, o = i - 1; s < i; o = s++) {
      const a = this.points[s * 2], l = this.points[s * 2 + 1], u = this.points[o * 2], h = this.points[o * 2 + 1];
      l > r != h > r && e < (u - a) * ((r - l) / (h - l)) + a && (n = !n);
    }
    return n;
  }
}
Ln.prototype.toString = function() {
  return `[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((t5, e) => `${t5}, ${e}`, "")}]`;
};
class du {
  constructor(e = 0, r = 0, n = 0, i = 0, s = 20) {
    this.x = e, this.y = r, this.width = n, this.height = i, this.radius = s, this.type = Ye.RREC;
  }
  clone() {
    return new du(this.x, this.y, this.width, this.height, this.radius);
  }
  contains(e, r) {
    if (this.width <= 0 || this.height <= 0) return false;
    if (e >= this.x && e <= this.x + this.width && r >= this.y && r <= this.y + this.height) {
      const n = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
      if (r >= this.y + n && r <= this.y + this.height - n || e >= this.x + n && e <= this.x + this.width - n) return true;
      let i = e - (this.x + n), s = r - (this.y + n);
      const o = n * n;
      if (i * i + s * s <= o || (i = e - (this.x + this.width - n), i * i + s * s <= o) || (s = r - (this.y + this.height - n), i * i + s * s <= o) || (i = e - (this.x + n), i * i + s * s <= o)) return true;
    }
    return false;
  }
}
du.prototype.toString = function() {
  return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
};
class ve {
  constructor(e = 1, r = 0, n = 0, i = 1, s = 0, o = 0) {
    this.array = null, this.a = e, this.b = r, this.c = n, this.d = i, this.tx = s, this.ty = o;
  }
  fromArray(e) {
    this.a = e[0], this.b = e[1], this.c = e[3], this.d = e[4], this.tx = e[2], this.ty = e[5];
  }
  set(e, r, n, i, s, o) {
    return this.a = e, this.b = r, this.c = n, this.d = i, this.tx = s, this.ty = o, this;
  }
  toArray(e, r) {
    this.array || (this.array = new Float32Array(9));
    const n = r || this.array;
    return e ? (n[0] = this.a, n[1] = this.b, n[2] = 0, n[3] = this.c, n[4] = this.d, n[5] = 0, n[6] = this.tx, n[7] = this.ty, n[8] = 1) : (n[0] = this.a, n[1] = this.c, n[2] = this.tx, n[3] = this.b, n[4] = this.d, n[5] = this.ty, n[6] = 0, n[7] = 0, n[8] = 1), n;
  }
  apply(e, r) {
    r = r || new ae();
    const n = e.x, i = e.y;
    return r.x = this.a * n + this.c * i + this.tx, r.y = this.b * n + this.d * i + this.ty, r;
  }
  applyInverse(e, r) {
    r = r || new ae();
    const n = 1 / (this.a * this.d + this.c * -this.b), i = e.x, s = e.y;
    return r.x = this.d * n * i + -this.c * n * s + (this.ty * this.c - this.tx * this.d) * n, r.y = this.a * n * s + -this.b * n * i + (-this.ty * this.a + this.tx * this.b) * n, r;
  }
  translate(e, r) {
    return this.tx += e, this.ty += r, this;
  }
  scale(e, r) {
    return this.a *= e, this.d *= r, this.c *= e, this.b *= r, this.tx *= e, this.ty *= r, this;
  }
  rotate(e) {
    const r = Math.cos(e), n = Math.sin(e), i = this.a, s = this.c, o = this.tx;
    return this.a = i * r - this.b * n, this.b = i * n + this.b * r, this.c = s * r - this.d * n, this.d = s * n + this.d * r, this.tx = o * r - this.ty * n, this.ty = o * n + this.ty * r, this;
  }
  append(e) {
    const r = this.a, n = this.b, i = this.c, s = this.d;
    return this.a = e.a * r + e.b * i, this.b = e.a * n + e.b * s, this.c = e.c * r + e.d * i, this.d = e.c * n + e.d * s, this.tx = e.tx * r + e.ty * i + this.tx, this.ty = e.tx * n + e.ty * s + this.ty, this;
  }
  setTransform(e, r, n, i, s, o, a, l, u) {
    return this.a = Math.cos(a + u) * s, this.b = Math.sin(a + u) * s, this.c = -Math.sin(a - l) * o, this.d = Math.cos(a - l) * o, this.tx = e - (n * this.a + i * this.c), this.ty = r - (n * this.b + i * this.d), this;
  }
  prepend(e) {
    const r = this.tx;
    if (e.a !== 1 || e.b !== 0 || e.c !== 0 || e.d !== 1) {
      const n = this.a, i = this.c;
      this.a = n * e.a + this.b * e.c, this.b = n * e.b + this.b * e.d, this.c = i * e.a + this.d * e.c, this.d = i * e.b + this.d * e.d;
    }
    return this.tx = r * e.a + this.ty * e.c + e.tx, this.ty = r * e.b + this.ty * e.d + e.ty, this;
  }
  decompose(e) {
    const r = this.a, n = this.b, i = this.c, s = this.d, o = e.pivot, a = -Math.atan2(-i, s), l = Math.atan2(n, r), u = Math.abs(a + l);
    return u < 1e-5 || Math.abs(Cl - u) < 1e-5 ? (e.rotation = l, e.skew.x = e.skew.y = 0) : (e.rotation = 0, e.skew.x = a, e.skew.y = l), e.scale.x = Math.sqrt(r * r + n * n), e.scale.y = Math.sqrt(i * i + s * s), e.position.x = this.tx + (o.x * r + o.y * i), e.position.y = this.ty + (o.x * n + o.y * s), e;
  }
  invert() {
    const e = this.a, r = this.b, n = this.c, i = this.d, s = this.tx, o = e * i - r * n;
    return this.a = i / o, this.b = -r / o, this.c = -n / o, this.d = e / o, this.tx = (n * this.ty - i * s) / o, this.ty = -(e * this.ty - r * s) / o, this;
  }
  identity() {
    return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
  }
  clone() {
    const e = new ve();
    return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e;
  }
  copyTo(e) {
    return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e;
  }
  copyFrom(e) {
    return this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.tx = e.tx, this.ty = e.ty, this;
  }
  static get IDENTITY() {
    return new ve();
  }
  static get TEMP_MATRIX() {
    return new ve();
  }
}
ve.prototype.toString = function() {
  return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
};
const wn = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1], En = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1], Sn = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1], Tn = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], ed = [], J_ = [], ia = Math.sign;
function Xb() {
  for (let t5 = 0; t5 < 16; t5++) {
    const e = [];
    ed.push(e);
    for (let r = 0; r < 16; r++) {
      const n = ia(wn[t5] * wn[r] + Sn[t5] * En[r]), i = ia(En[t5] * wn[r] + Tn[t5] * En[r]), s = ia(wn[t5] * Sn[r] + Sn[t5] * Tn[r]), o = ia(En[t5] * Sn[r] + Tn[t5] * Tn[r]);
      for (let a = 0; a < 16; a++) if (wn[a] === n && En[a] === i && Sn[a] === s && Tn[a] === o) {
        e.push(a);
        break;
      }
    }
  }
  for (let t5 = 0; t5 < 16; t5++) {
    const e = new ve();
    e.set(wn[t5], En[t5], Sn[t5], Tn[t5], 0, 0), J_.push(e);
  }
}
Xb();
const Ee = { E: 0, SE: 1, S: 2, SW: 3, W: 4, NW: 5, N: 6, NE: 7, MIRROR_VERTICAL: 8, MAIN_DIAGONAL: 10, MIRROR_HORIZONTAL: 12, REVERSE_DIAGONAL: 14, uX: (t5) => wn[t5], uY: (t5) => En[t5], vX: (t5) => Sn[t5], vY: (t5) => Tn[t5], inv: (t5) => t5 & 8 ? t5 & 15 : -t5 & 7, add: (t5, e) => ed[t5][e], sub: (t5, e) => ed[t5][Ee.inv(e)], rotate180: (t5) => t5 ^ 4, isVertical: (t5) => (t5 & 3) === 2, byDirection: (t5, e) => Math.abs(t5) * 2 <= Math.abs(e) ? e >= 0 ? Ee.S : Ee.N : Math.abs(e) * 2 <= Math.abs(t5) ? t5 > 0 ? Ee.E : Ee.W : e > 0 ? t5 > 0 ? Ee.SE : Ee.SW : t5 > 0 ? Ee.NE : Ee.NW, matrixAppendRotationInv: (t5, e, r = 0, n = 0) => {
  const i = J_[Ee.inv(e)];
  i.tx = r, i.ty = n, t5.append(i);
} };
class Tr {
  constructor(e, r, n = 0, i = 0) {
    this._x = n, this._y = i, this.cb = e, this.scope = r;
  }
  clone(e = this.cb, r = this.scope) {
    return new Tr(e, r, this._x, this._y);
  }
  set(e = 0, r = e) {
    return (this._x !== e || this._y !== r) && (this._x = e, this._y = r, this.cb.call(this.scope)), this;
  }
  copyFrom(e) {
    return (this._x !== e.x || this._y !== e.y) && (this._x = e.x, this._y = e.y, this.cb.call(this.scope)), this;
  }
  copyTo(e) {
    return e.set(this._x, this._y), e;
  }
  equals(e) {
    return e.x === this._x && e.y === this._y;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x !== e && (this._x = e, this.cb.call(this.scope));
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y !== e && (this._y = e, this.cb.call(this.scope));
  }
}
Tr.prototype.toString = function() {
  return `[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`;
};
const td = class {
  constructor() {
    this.worldTransform = new ve(), this.localTransform = new ve(), this.position = new Tr(this.onChange, this, 0, 0), this.scale = new Tr(this.onChange, this, 1, 1), this.pivot = new Tr(this.onChange, this, 0, 0), this.skew = new Tr(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0;
  }
  onChange() {
    this._localID++;
  }
  updateSkew() {
    this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++;
  }
  updateLocalTransform() {
    const t5 = this.localTransform;
    this._localID !== this._currentLocalID && (t5.a = this._cx * this.scale.x, t5.b = this._sx * this.scale.x, t5.c = this._cy * this.scale.y, t5.d = this._sy * this.scale.y, t5.tx = this.position.x - (this.pivot.x * t5.a + this.pivot.y * t5.c), t5.ty = this.position.y - (this.pivot.x * t5.b + this.pivot.y * t5.d), this._currentLocalID = this._localID, this._parentID = -1);
  }
  updateTransform(t5) {
    const e = this.localTransform;
    if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t5._worldID) {
      const r = t5.worldTransform, n = this.worldTransform;
      n.a = e.a * r.a + e.b * r.c, n.b = e.a * r.b + e.b * r.d, n.c = e.c * r.a + e.d * r.c, n.d = e.c * r.b + e.d * r.d, n.tx = e.tx * r.a + e.ty * r.c + r.tx, n.ty = e.tx * r.b + e.ty * r.d + r.ty, this._parentID = t5._worldID, this._worldID++;
    }
  }
  setFromMatrix(t5) {
    t5.decompose(this), this._localID++;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(t5) {
    this._rotation !== t5 && (this._rotation = t5, this.updateSkew());
  }
};
td.IDENTITY = new td();
let Gf = td;
Gf.prototype.toString = function() {
  return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
};
var Wb = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`, Yb = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
function lg(t5, e, r) {
  const n = t5.createShader(e);
  return t5.shaderSource(n, r), t5.compileShader(n), n;
}
function Sh(t5) {
  const e = new Array(t5);
  for (let r = 0; r < e.length; r++) e[r] = false;
  return e;
}
function e0(t5, e) {
  switch (t5) {
    case "float":
      return 0;
    case "vec2":
      return new Float32Array(2 * e);
    case "vec3":
      return new Float32Array(3 * e);
    case "vec4":
      return new Float32Array(4 * e);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0;
    case "ivec2":
      return new Int32Array(2 * e);
    case "ivec3":
      return new Int32Array(3 * e);
    case "ivec4":
      return new Int32Array(4 * e);
    case "uvec2":
      return new Uint32Array(2 * e);
    case "uvec3":
      return new Uint32Array(3 * e);
    case "uvec4":
      return new Uint32Array(4 * e);
    case "bool":
      return false;
    case "bvec2":
      return Sh(2 * e);
    case "bvec3":
      return Sh(3 * e);
    case "bvec4":
      return Sh(4 * e);
    case "mat2":
      return new Float32Array([1, 0, 0, 1]);
    case "mat3":
      return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4":
      return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  return null;
}
const Li = [{ test: (t5) => t5.type === "float" && t5.size === 1 && !t5.isArray, code: (t5) => `
            if(uv["${t5}"] !== ud["${t5}"].value)
            {
                ud["${t5}"].value = uv["${t5}"]
                gl.uniform1f(ud["${t5}"].location, uv["${t5}"])
            }
            ` }, { test: (t5, e) => (t5.type === "sampler2D" || t5.type === "samplerCube" || t5.type === "sampler2DArray") && t5.size === 1 && !t5.isArray && (e == null || e.castToBaseTexture !== void 0), code: (t5) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${t5}"], t);

            if(ud["${t5}"].value !== t)
            {
                ud["${t5}"].value = t;
                gl.uniform1i(ud["${t5}"].location, t);
; // eslint-disable-line max-len
            }` }, { test: (t5, e) => t5.type === "mat3" && t5.size === 1 && !t5.isArray && e.a !== void 0, code: (t5) => `
            gl.uniformMatrix3fv(ud["${t5}"].location, false, uv["${t5}"].toArray(true));
            `, codeUbo: (t5) => `
                var ${t5}_matrix = uv.${t5}.toArray(true);

                data[offset] = ${t5}_matrix[0];
                data[offset+1] = ${t5}_matrix[1];
                data[offset+2] = ${t5}_matrix[2];
        
                data[offset + 4] = ${t5}_matrix[3];
                data[offset + 5] = ${t5}_matrix[4];
                data[offset + 6] = ${t5}_matrix[5];
        
                data[offset + 8] = ${t5}_matrix[6];
                data[offset + 9] = ${t5}_matrix[7];
                data[offset + 10] = ${t5}_matrix[8];
            ` }, { test: (t5, e) => t5.type === "vec2" && t5.size === 1 && !t5.isArray && e.x !== void 0, code: (t5) => `
                cv = ud["${t5}"].value;
                v = uv["${t5}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${t5}"].location, v.x, v.y);
                }`, codeUbo: (t5) => `
                v = uv.${t5};

                data[offset] = v.x;
                data[offset+1] = v.y;
            ` }, { test: (t5) => t5.type === "vec2" && t5.size === 1 && !t5.isArray, code: (t5) => `
                cv = ud["${t5}"].value;
                v = uv["${t5}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${t5}"].location, v[0], v[1]);
                }
            ` }, { test: (t5, e) => t5.type === "vec4" && t5.size === 1 && !t5.isArray && e.width !== void 0, code: (t5) => `
                cv = ud["${t5}"].value;
                v = uv["${t5}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${t5}"].location, v.x, v.y, v.width, v.height)
                }`, codeUbo: (t5) => `
                    v = uv.${t5};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                ` }, { test: (t5, e) => t5.type === "vec4" && t5.size === 1 && !t5.isArray && e.red !== void 0, code: (t5) => `
                cv = ud["${t5}"].value;
                v = uv["${t5}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${t5}"].location, v.red, v.green, v.blue, v.alpha)
                }`, codeUbo: (t5) => `
                    v = uv.${t5};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                ` }, { test: (t5, e) => t5.type === "vec3" && t5.size === 1 && !t5.isArray && e.red !== void 0, code: (t5) => `
                cv = ud["${t5}"].value;
                v = uv["${t5}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${t5}"].location, v.red, v.green, v.blue)
                }`, codeUbo: (t5) => `
                    v = uv.${t5};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                ` }, { test: (t5) => t5.type === "vec4" && t5.size === 1 && !t5.isArray, code: (t5) => `
                cv = ud["${t5}"].value;
                v = uv["${t5}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${t5}"].location, v[0], v[1], v[2], v[3])
                }` }], Zb = { float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`, vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`, vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`, vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`, int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`, ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`, ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`, ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`, uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`, uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`, uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`, uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`, bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`, bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`, bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`, bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`, mat2: "gl.uniformMatrix2fv(location, false, v)", mat3: "gl.uniformMatrix3fv(location, false, v)", mat4: "gl.uniformMatrix4fv(location, false, v)", sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`, samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`, sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }` }, Kb = { float: "gl.uniform1fv(location, v)", vec2: "gl.uniform2fv(location, v)", vec3: "gl.uniform3fv(location, v)", vec4: "gl.uniform4fv(location, v)", mat4: "gl.uniformMatrix4fv(location, false, v)", mat3: "gl.uniformMatrix3fv(location, false, v)", mat2: "gl.uniformMatrix2fv(location, false, v)", int: "gl.uniform1iv(location, v)", ivec2: "gl.uniform2iv(location, v)", ivec3: "gl.uniform3iv(location, v)", ivec4: "gl.uniform4iv(location, v)", uint: "gl.uniform1uiv(location, v)", uvec2: "gl.uniform2uiv(location, v)", uvec3: "gl.uniform3uiv(location, v)", uvec4: "gl.uniform4uiv(location, v)", bool: "gl.uniform1iv(location, v)", bvec2: "gl.uniform2iv(location, v)", bvec3: "gl.uniform3iv(location, v)", bvec4: "gl.uniform4iv(location, v)", sampler2D: "gl.uniform1iv(location, v)", samplerCube: "gl.uniform1iv(location, v)", sampler2DArray: "gl.uniform1iv(location, v)" };
function qb(t5, e) {
  var _a2;
  const r = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
  for (const n in t5.uniforms) {
    const i = e[n];
    if (!i) {
      ((_a2 = t5.uniforms[n]) == null ? void 0 : _a2.group) === true && (t5.uniforms[n].ubo ? r.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${n}, '${n}');
                    `) : r.push(`
                        renderer.shader.syncUniformGroup(uv.${n}, syncData);
                    `));
      continue;
    }
    const s = t5.uniforms[n];
    let o = false;
    for (let a = 0; a < Li.length; a++) if (Li[a].test(i, s)) {
      r.push(Li[a].code(n, s)), o = true;
      break;
    }
    if (!o) {
      const a = (i.size === 1 && !i.isArray ? Zb : Kb)[i.type].replace("location", `ud["${n}"].location`);
      r.push(`
            cu = ud["${n}"];
            cv = cu.value;
            v = uv["${n}"];
            ${a};`);
    }
  }
  return new Function("ud", "uv", "renderer", "syncData", r.join(`
`));
}
const t0 = {};
let sa = t0;
function Qb() {
  if (sa === t0 || (sa == null ? void 0 : sa.isContextLost())) {
    const t5 = H.ADAPTER.createCanvas();
    let e;
    H.PREFER_ENV >= qn.WEBGL2 && (e = t5.getContext("webgl2", {})), e || (e = t5.getContext("webgl", {}) || t5.getContext("experimental-webgl", {}), e ? e.getExtension("WEBGL_draw_buffers") : e = null), sa = e;
  }
  return sa;
}
let oa;
function Jb() {
  if (!oa) {
    oa = It.MEDIUM;
    const t5 = Qb();
    if (t5 && t5.getShaderPrecisionFormat) {
      const e = t5.getShaderPrecisionFormat(t5.FRAGMENT_SHADER, t5.HIGH_FLOAT);
      e && (oa = e.precision ? It.HIGH : It.MEDIUM);
    }
  }
  return oa;
}
function ug(t5, e) {
  const r = t5.getShaderSource(e).split(`
`).map((u, h) => `${h}: ${u}`), n = t5.getShaderInfoLog(e), i = n.split(`
`), s = {}, o = i.map((u) => parseFloat(u.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter((u) => u && !s[u] ? (s[u] = true, true) : false), a = [""];
  o.forEach((u) => {
    r[u - 1] = `%c${r[u - 1]}%c`, a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
  });
  const l = r.join(`
`);
  a[0] = l, console.error(n), console.groupCollapsed("click to view full shader code"), console.warn(...a), console.groupEnd();
}
function eA(t5, e, r, n) {
  t5.getProgramParameter(e, t5.LINK_STATUS) || (t5.getShaderParameter(r, t5.COMPILE_STATUS) || ug(t5, r), t5.getShaderParameter(n, t5.COMPILE_STATUS) || ug(t5, n), console.error("PixiJS Error: Could not initialize shader."), t5.getProgramInfoLog(e) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", t5.getProgramInfoLog(e)));
}
const tA = { float: 1, vec2: 2, vec3: 3, vec4: 4, int: 1, ivec2: 2, ivec3: 3, ivec4: 4, uint: 1, uvec2: 2, uvec3: 3, uvec4: 4, bool: 1, bvec2: 2, bvec3: 3, bvec4: 4, mat2: 4, mat3: 9, mat4: 16, sampler2D: 1 };
function r0(t5) {
  return tA[t5];
}
let aa = null;
const hg = { FLOAT: "float", FLOAT_VEC2: "vec2", FLOAT_VEC3: "vec3", FLOAT_VEC4: "vec4", INT: "int", INT_VEC2: "ivec2", INT_VEC3: "ivec3", INT_VEC4: "ivec4", UNSIGNED_INT: "uint", UNSIGNED_INT_VEC2: "uvec2", UNSIGNED_INT_VEC3: "uvec3", UNSIGNED_INT_VEC4: "uvec4", BOOL: "bool", BOOL_VEC2: "bvec2", BOOL_VEC3: "bvec3", BOOL_VEC4: "bvec4", FLOAT_MAT2: "mat2", FLOAT_MAT3: "mat3", FLOAT_MAT4: "mat4", SAMPLER_2D: "sampler2D", INT_SAMPLER_2D: "sampler2D", UNSIGNED_INT_SAMPLER_2D: "sampler2D", SAMPLER_CUBE: "samplerCube", INT_SAMPLER_CUBE: "samplerCube", UNSIGNED_INT_SAMPLER_CUBE: "samplerCube", SAMPLER_2D_ARRAY: "sampler2DArray", INT_SAMPLER_2D_ARRAY: "sampler2DArray", UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray" };
function n0(t5, e) {
  if (!aa) {
    const r = Object.keys(hg);
    aa = {};
    for (let n = 0; n < r.length; ++n) {
      const i = r[n];
      aa[t5[i]] = hg[i];
    }
  }
  return aa[e];
}
function cg(t5, e, r) {
  if (t5.substring(0, 9) !== "precision") {
    let n = e;
    return e === It.HIGH && r !== It.HIGH && (n = It.MEDIUM), `precision ${n} float;
${t5}`;
  } else if (r !== It.HIGH && t5.substring(0, 15) === "precision highp") return t5.replace("precision highp", "precision mediump");
  return t5;
}
let gs;
function rA() {
  if (typeof gs == "boolean") return gs;
  try {
    gs = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({ a: "b" }, "a", "b") === true;
  } catch {
    gs = false;
  }
  return gs;
}
let nA = 0;
const la = {}, rd = class ui {
  constructor(e, r, n = "pixi-shader", i = {}) {
    this.extra = {}, this.id = nA++, this.vertexSrc = e || ui.defaultVertexSrc, this.fragmentSrc = r || ui.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), this.extra = i, this.vertexSrc.substring(0, 8) !== "#version" && (n = n.replace(/\s+/g, "-"), la[n] ? (la[n]++, n += `-${la[n]}`) : la[n] = 1, this.vertexSrc = `#define SHADER_NAME ${n}
${this.vertexSrc}`, this.fragmentSrc = `#define SHADER_NAME ${n}
${this.fragmentSrc}`, this.vertexSrc = cg(this.vertexSrc, ui.defaultVertexPrecision, It.HIGH), this.fragmentSrc = cg(this.fragmentSrc, ui.defaultFragmentPrecision, Jb())), this.glPrograms = {}, this.syncUniforms = null;
  }
  static get defaultVertexSrc() {
    return Yb;
  }
  static get defaultFragmentSrc() {
    return Wb;
  }
  static from(e, r, n) {
    const i = e + r;
    let s = ng[i];
    return s || (ng[i] = s = new ui(e, r, n)), s;
  }
};
rd.defaultVertexPrecision = It.HIGH, rd.defaultFragmentPrecision = Sr.apple.device ? It.HIGH : It.MEDIUM;
let br = rd, iA = 0;
class Xt {
  constructor(e, r, n) {
    this.group = true, this.syncUniforms = {}, this.dirtyId = 0, this.id = iA++, this.static = !!r, this.ubo = !!n, e instanceof ke ? (this.buffer = e, this.buffer.type = cr.UNIFORM_BUFFER, this.autoManage = false, this.ubo = true) : (this.uniforms = e, this.ubo && (this.buffer = new ke(new Float32Array(1)), this.buffer.type = cr.UNIFORM_BUFFER, this.autoManage = true));
  }
  update() {
    this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
  }
  add(e, r, n) {
    if (!this.ubo) this.uniforms[e] = new Xt(r, n);
    else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
  }
  static from(e, r, n) {
    return new Xt(e, r, n);
  }
  static uboFrom(e, r) {
    return new Xt(e, r ?? true, true);
  }
}
class dr {
  constructor(e, r) {
    this.uniformBindCount = 0, this.program = e, r ? r instanceof Xt ? this.uniformGroup = r : this.uniformGroup = new Xt(r) : this.uniformGroup = new Xt({}), this.disposeRunner = new $t("disposeShader");
  }
  checkUniformExists(e, r) {
    if (r.uniforms[e]) return true;
    for (const n in r.uniforms) {
      const i = r.uniforms[n];
      if (i.group === true && this.checkUniformExists(e, i)) return true;
    }
    return false;
  }
  destroy() {
    this.uniformGroup = null, this.disposeRunner.emit(this), this.disposeRunner.destroy();
  }
  get uniforms() {
    return this.uniformGroup.uniforms;
  }
  static from(e, r, n) {
    const i = br.from(e, r);
    return new dr(i, n);
  }
}
class sA {
  constructor(e, r) {
    if (this.vertexSrc = e, this.fragTemplate = r, this.programCache = {}, this.defaultGroupCache = {}, !r.includes("%count%")) throw new Error('Fragment template must contain "%count%".');
    if (!r.includes("%forloop%")) throw new Error('Fragment template must contain "%forloop%".');
  }
  generateShader(e) {
    if (!this.programCache[e]) {
      const n = new Int32Array(e);
      for (let s = 0; s < e; s++) n[s] = s;
      this.defaultGroupCache[e] = Xt.from({ uSamplers: n }, true);
      let i = this.fragTemplate;
      i = i.replace(/%count%/gi, `${e}`), i = i.replace(/%forloop%/gi, this.generateSampleSrc(e)), this.programCache[e] = new br(this.vertexSrc, i);
    }
    const r = { tint: new Float32Array([1, 1, 1, 1]), translationMatrix: new ve(), default: this.defaultGroupCache[e] };
    return new dr(this.programCache[e], r);
  }
  generateSampleSrc(e) {
    let r = "";
    r += `
`, r += `
`;
    for (let n = 0; n < e; n++) n > 0 && (r += `
else `), n < e - 1 && (r += `if(vTextureId < ${n}.5)`), r += `
{`, r += `
	color = texture2D(uSamplers[${n}], vTextureCoord);`, r += `
}`;
    return r += `
`, r += `
`, r;
  }
}
class nd {
  constructor() {
    this.elements = [], this.ids = [], this.count = 0;
  }
  clear() {
    for (let e = 0; e < this.count; e++) this.elements[e] = null;
    this.count = 0;
  }
}
function oA() {
  return !Sr.apple.device;
}
function aA(t5) {
  let e = true;
  const r = H.ADAPTER.getNavigator();
  if (Sr.tablet || Sr.phone) {
    if (Sr.apple.device) {
      const n = r.userAgent.match(/OS (\d+)_(\d+)?/);
      n && parseInt(n[1], 10) < 11 && (e = false);
    }
    if (Sr.android.device) {
      const n = r.userAgent.match(/Android\s([0-9.]*)/);
      n && parseInt(n[1], 10) < 7 && (e = false);
    }
  }
  return e ? t5 : 4;
}
class fu {
  constructor(e) {
    this.renderer = e;
  }
  flush() {
  }
  destroy() {
    this.renderer = null;
  }
  start() {
  }
  stop() {
    this.flush();
  }
  render(e) {
  }
}
var lA = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`, uA = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
const bs = class Nt extends fu {
  constructor(e) {
    super(e), this.setShaderGenerator(), this.geometryClass = Q_, this.vertexSize = 6, this.state = pr.for2d(), this.size = Nt.defaultBatchSize * 4, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.maxTextures = 1, this.renderer.on("prerender", this.onPrerender, this), e.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = [];
  }
  static get defaultMaxTextures() {
    return this._defaultMaxTextures = this._defaultMaxTextures ?? aA(32), this._defaultMaxTextures;
  }
  static set defaultMaxTextures(e) {
    this._defaultMaxTextures = e;
  }
  static get canUploadSameBuffer() {
    return this._canUploadSameBuffer = this._canUploadSameBuffer ?? oA(), this._canUploadSameBuffer;
  }
  static set canUploadSameBuffer(e) {
    this._canUploadSameBuffer = e;
  }
  get MAX_TEXTURES() {
    return ie("7.1.0", "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"), this.maxTextures;
  }
  static get defaultVertexSrc() {
    return uA;
  }
  static get defaultFragmentTemplate() {
    return lA;
  }
  setShaderGenerator({ vertex: e = Nt.defaultVertexSrc, fragment: r = Nt.defaultFragmentTemplate } = {}) {
    this.shaderGenerator = new sA(e, r);
  }
  contextChange() {
    const e = this.renderer.gl;
    H.PREFER_ENV === qn.WEBGL_LEGACY ? this.maxTextures = 1 : (this.maxTextures = Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), Nt.defaultMaxTextures), this.maxTextures = Ob(this.maxTextures, e)), this._shader = this.shaderGenerator.generateShader(this.maxTextures);
    for (let r = 0; r < this._packedGeometryPoolSize; r++) this._packedGeometries[r] = new this.geometryClass();
    this.initFlushBuffers();
  }
  initFlushBuffers() {
    const { _drawCallPool: e, _textureArrayPool: r } = Nt, n = this.size / 4, i = Math.floor(n / this.maxTextures) + 1;
    for (; e.length < n; ) e.push(new Jc());
    for (; r.length < i; ) r.push(new nd());
    for (let s = 0; s < this.maxTextures; s++) this._tempBoundTextures[s] = null;
  }
  onPrerender() {
    this._flushId = 0;
  }
  render(e) {
    e._texture.valid && (this._vertexCount + e.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += e.vertexData.length / 2, this._indexCount += e.indices.length, this._bufferedTextures[this._bufferSize] = e._texture.baseTexture, this._bufferedElements[this._bufferSize++] = e);
  }
  buildTexturesAndDrawCalls() {
    const { _bufferedTextures: e, maxTextures: r } = this, n = Nt._textureArrayPool, i = this.renderer.batch, s = this._tempBoundTextures, o = this.renderer.textureGC.count;
    let a = ++ee._globalBatch, l = 0, u = n[0], h = 0;
    i.copyBoundTextures(s, r);
    for (let c = 0; c < this._bufferSize; ++c) {
      const d = e[c];
      e[c] = null, d._batchEnabled !== a && (u.count >= r && (i.boundArray(u, s, a, r), this.buildDrawCalls(u, h, c), h = c, u = n[++l], ++a), d._batchEnabled = a, d.touched = o, u.elements[u.count++] = d);
    }
    u.count > 0 && (i.boundArray(u, s, a, r), this.buildDrawCalls(u, h, this._bufferSize), ++l, ++a);
    for (let c = 0; c < s.length; c++) s[c] = null;
    ee._globalBatch = a;
  }
  buildDrawCalls(e, r, n) {
    const { _bufferedElements: i, _attributeBuffer: s, _indexBuffer: o, vertexSize: a } = this, l = Nt._drawCallPool;
    let u = this._dcIndex, h = this._aIndex, c = this._iIndex, d = l[u];
    d.start = this._iIndex, d.texArray = e;
    for (let f = r; f < n; ++f) {
      const p = i[f], y = p._texture.baseTexture, _ = Y_[y.alphaMode ? 1 : 0][p.blendMode];
      i[f] = null, r < f && d.blend !== _ && (d.size = c - d.start, r = f, d = l[++u], d.texArray = e, d.start = c), this.packInterleavedGeometry(p, s, o, h, c), h += p.vertexData.length / 2 * a, c += p.indices.length, d.blend = _;
    }
    r < n && (d.size = c - d.start, ++u), this._dcIndex = u, this._aIndex = h, this._iIndex = c;
  }
  bindAndClearTexArray(e) {
    const r = this.renderer.texture;
    for (let n = 0; n < e.count; n++) r.bind(e.elements[n], e.ids[n]), e.elements[n] = null;
    e.count = 0;
  }
  updateGeometry() {
    const { _packedGeometries: e, _attributeBuffer: r, _indexBuffer: n } = this;
    Nt.canUploadSameBuffer ? (e[this._flushId]._buffer.update(r.rawBinaryData), e[this._flushId]._indexBuffer.update(n), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, e[this._flushId] = new this.geometryClass()), e[this._flushId]._buffer.update(r.rawBinaryData), e[this._flushId]._indexBuffer.update(n), this.renderer.geometry.bind(e[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++);
  }
  drawBatches() {
    const e = this._dcIndex, { gl: r, state: n } = this.renderer, i = Nt._drawCallPool;
    let s = null;
    for (let o = 0; o < e; o++) {
      const { texArray: a, type: l, size: u, start: h, blend: c } = i[o];
      s !== a && (s = a, this.bindAndClearTexArray(a)), this.state.blendMode = c, n.set(this.state), r.drawElements(l, u, r.UNSIGNED_SHORT, h * 2);
    }
  }
  flush() {
    this._vertexCount !== 0 && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0);
  }
  start() {
    this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.maxTextures), this.renderer.shader.bind(this._shader), Nt.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
  }
  stop() {
    this.flush();
  }
  destroy() {
    for (let e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] && this._packedGeometries[e].destroy();
    this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), super.destroy();
  }
  getAttributeBuffer(e) {
    const r = bl(Math.ceil(e / 8)), n = tg(r), i = r * 8;
    this._aBuffers.length <= n && (this._iBuffers.length = n + 1);
    let s = this._aBuffers[i];
    return s || (this._aBuffers[i] = s = new Kc(i * this.vertexSize * 4)), s;
  }
  getIndexBuffer(e) {
    const r = bl(Math.ceil(e / 12)), n = tg(r), i = r * 12;
    this._iBuffers.length <= n && (this._iBuffers.length = n + 1);
    let s = this._iBuffers[n];
    return s || (this._iBuffers[n] = s = new Uint16Array(i)), s;
  }
  packInterleavedGeometry(e, r, n, i, s) {
    const { uint32View: o, float32View: a } = r, l = i / this.vertexSize, u = e.uvs, h = e.indices, c = e.vertexData, d = e._texture.baseTexture._batchLocation, f = Math.min(e.worldAlpha, 1), p = ge.shared.setValue(e._tintRGB).toPremultiplied(f, e._texture.baseTexture.alphaMode > 0);
    for (let y = 0; y < c.length; y += 2) a[i++] = c[y], a[i++] = c[y + 1], a[i++] = u[y], a[i++] = u[y + 1], o[i++] = p, a[i++] = d;
    for (let y = 0; y < h.length; y++) n[s++] = l + h[y];
  }
};
bs.defaultBatchSize = 4096, bs.extension = { name: "batch", type: L.RendererPlugin }, bs._drawCallPool = [], bs._textureArrayPool = [];
let bn = bs;
W.add(bn);
var hA = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`, cA = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const id = class As extends dr {
  constructor(e, r, n) {
    const i = br.from(e || As.defaultVertexSrc, r || As.defaultFragmentSrc);
    super(i, n), this.padding = 0, this.resolution = As.defaultResolution, this.multisample = As.defaultMultisample, this.enabled = true, this.autoFit = true, this.state = new pr();
  }
  apply(e, r, n, i, s) {
    e.applyFilter(this, r, n, i);
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set blendMode(e) {
    this.state.blendMode = e;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._resolution = e;
  }
  static get defaultVertexSrc() {
    return cA;
  }
  static get defaultFragmentSrc() {
    return hA;
  }
};
id.defaultResolution = 1, id.defaultMultisample = De.NONE;
let it = id;
class Il {
  constructor() {
    this.clearBeforeRender = true, this._backgroundColor = new ge(0), this.alpha = 1;
  }
  init(e) {
    this.clearBeforeRender = e.clearBeforeRender;
    const { backgroundColor: r, background: n, backgroundAlpha: i } = e, s = n ?? r;
    s !== void 0 && (this.color = s), this.alpha = i;
  }
  get color() {
    return this._backgroundColor.value;
  }
  set color(e) {
    this._backgroundColor.setValue(e);
  }
  get alpha() {
    return this._backgroundColor.alpha;
  }
  set alpha(e) {
    this._backgroundColor.setAlpha(e);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  destroy() {
  }
}
Il.defaultOptions = { backgroundAlpha: 1, backgroundColor: 0, clearBeforeRender: true }, Il.extension = { type: [L.RendererSystem, L.CanvasRendererSystem], name: "background" };
W.add(Il);
class i0 {
  constructor(e) {
    this.renderer = e, this.emptyRenderer = new fu(e), this.currentRenderer = this.emptyRenderer;
  }
  setObjectRenderer(e) {
    this.currentRenderer !== e && (this.currentRenderer.stop(), this.currentRenderer = e, this.currentRenderer.start());
  }
  flush() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  reset() {
    this.setObjectRenderer(this.emptyRenderer);
  }
  copyBoundTextures(e, r) {
    const { boundTextures: n } = this.renderer.texture;
    for (let i = r - 1; i >= 0; --i) e[i] = n[i] || null, e[i] && (e[i]._batchLocation = i);
  }
  boundArray(e, r, n, i) {
    const { elements: s, ids: o, count: a } = e;
    let l = 0;
    for (let u = 0; u < a; u++) {
      const h = s[u], c = h._batchLocation;
      if (c >= 0 && c < i && r[c] === h) {
        o[u] = c;
        continue;
      }
      for (; l < i; ) {
        const d = r[l];
        if (d && d._batchEnabled === n && d._batchLocation === l) {
          l++;
          continue;
        }
        o[u] = l, h._batchLocation = l, r[l] = h;
        break;
      }
    }
  }
  destroy() {
    this.renderer = null;
  }
}
i0.extension = { type: L.RendererSystem, name: "batch" };
W.add(i0);
let dg = 0;
class Rl {
  constructor(e) {
    this.renderer = e, this.webGLVersion = 1, this.extensions = {}, this.supports = { uint32Indices: false }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this);
  }
  get isLost() {
    return !this.gl || this.gl.isContextLost();
  }
  contextChange(e) {
    this.gl = e, this.renderer.gl = e, this.renderer.CONTEXT_UID = dg++;
  }
  init(e) {
    if (e.context) this.initFromContext(e.context);
    else {
      const r = this.renderer.background.alpha < 1, n = e.premultipliedAlpha;
      this.preserveDrawingBuffer = e.preserveDrawingBuffer, this.useContextAlpha = e.useContextAlpha, this.powerPreference = e.powerPreference, this.initFromOptions({ alpha: r, premultipliedAlpha: n, antialias: e.antialias, stencil: true, preserveDrawingBuffer: e.preserveDrawingBuffer, powerPreference: e.powerPreference });
    }
  }
  initFromContext(e) {
    this.gl = e, this.validateContext(e), this.renderer.gl = e, this.renderer.CONTEXT_UID = dg++, this.renderer.runners.contextChange.emit(e);
    const r = this.renderer.view;
    r.addEventListener !== void 0 && (r.addEventListener("webglcontextlost", this.handleContextLost, false), r.addEventListener("webglcontextrestored", this.handleContextRestored, false));
  }
  initFromOptions(e) {
    const r = this.createContext(this.renderer.view, e);
    this.initFromContext(r);
  }
  createContext(e, r) {
    let n;
    if (H.PREFER_ENV >= qn.WEBGL2 && (n = e.getContext("webgl2", r)), n) this.webGLVersion = 2;
    else if (this.webGLVersion = 1, n = e.getContext("webgl", r) || e.getContext("experimental-webgl", r), !n) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
    return this.gl = n, this.getExtensions(), this.gl;
  }
  getExtensions() {
    const { gl: e } = this, r = { loseContext: e.getExtension("WEBGL_lose_context"), anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"), floatTextureLinear: e.getExtension("OES_texture_float_linear"), s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"), s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"), etc: e.getExtension("WEBGL_compressed_texture_etc"), etc1: e.getExtension("WEBGL_compressed_texture_etc1"), pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), atc: e.getExtension("WEBGL_compressed_texture_atc"), astc: e.getExtension("WEBGL_compressed_texture_astc"), bptc: e.getExtension("EXT_texture_compression_bptc") };
    this.webGLVersion === 1 ? Object.assign(this.extensions, r, { drawBuffers: e.getExtension("WEBGL_draw_buffers"), depthTexture: e.getExtension("WEBGL_depth_texture"), vertexArrayObject: e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object"), uint32ElementIndex: e.getExtension("OES_element_index_uint"), floatTexture: e.getExtension("OES_texture_float"), floatTextureLinear: e.getExtension("OES_texture_float_linear"), textureHalfFloat: e.getExtension("OES_texture_half_float"), textureHalfFloatLinear: e.getExtension("OES_texture_half_float_linear") }) : this.webGLVersion === 2 && Object.assign(this.extensions, r, { colorBufferFloat: e.getExtension("EXT_color_buffer_float") });
  }
  handleContextLost(e) {
    e.preventDefault(), setTimeout(() => {
      this.gl.isContextLost() && this.extensions.loseContext && this.extensions.loseContext.restoreContext();
    }, 0);
  }
  handleContextRestored() {
    this.renderer.runners.contextChange.emit(this.gl);
  }
  destroy() {
    const e = this.renderer.view;
    this.renderer = null, e.removeEventListener !== void 0 && (e.removeEventListener("webglcontextlost", this.handleContextLost), e.removeEventListener("webglcontextrestored", this.handleContextRestored)), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext();
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && this.gl.flush();
  }
  validateContext(e) {
    const r = e.getContextAttributes(), n = "WebGL2RenderingContext" in globalThis && e instanceof globalThis.WebGL2RenderingContext;
    n && (this.webGLVersion = 2), r && !r.stencil && console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
    const i = n || !!e.getExtension("OES_element_index_uint");
    this.supports.uint32Indices = i, i || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly");
  }
}
Rl.defaultOptions = { context: null, antialias: false, premultipliedAlpha: true, preserveDrawingBuffer: false, powerPreference: "default" }, Rl.extension = { type: L.RendererSystem, name: "context" };
W.add(Rl);
class sd {
  constructor(e, r) {
    if (this.width = Math.round(e), this.height = Math.round(r), !this.width || !this.height) throw new Error("Framebuffer width or height is zero");
    this.stencil = false, this.depth = false, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new $t("disposeFramebuffer"), this.multisample = De.NONE;
  }
  get colorTexture() {
    return this.colorTextures[0];
  }
  addColorTexture(e = 0, r) {
    return this.colorTextures[e] = r || new ee(null, { scaleMode: Er.NEAREST, resolution: 1, mipmap: fr.OFF, width: this.width, height: this.height }), this.dirtyId++, this.dirtyFormat++, this;
  }
  addDepthTexture(e) {
    return this.depthTexture = e || new ee(null, { scaleMode: Er.NEAREST, resolution: 1, width: this.width, height: this.height, mipmap: fr.OFF, format: D.DEPTH_COMPONENT, type: Z.UNSIGNED_SHORT }), this.dirtyId++, this.dirtyFormat++, this;
  }
  enableDepth() {
    return this.depth = true, this.dirtyId++, this.dirtyFormat++, this;
  }
  enableStencil() {
    return this.stencil = true, this.dirtyId++, this.dirtyFormat++, this;
  }
  resize(e, r) {
    if (e = Math.round(e), r = Math.round(r), !e || !r) throw new Error("Framebuffer width and height must not be zero");
    if (!(e === this.width && r === this.height)) {
      this.width = e, this.height = r, this.dirtyId++, this.dirtySize++;
      for (let n = 0; n < this.colorTextures.length; n++) {
        const i = this.colorTextures[n], s = i.resolution;
        i.setSize(e / s, r / s);
      }
      if (this.depthTexture) {
        const n = this.depthTexture.resolution;
        this.depthTexture.setSize(e / n, r / n);
      }
    }
  }
  dispose() {
    this.disposeRunner.emit(this, false);
  }
  destroyDepthTexture() {
    this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat);
  }
}
class s0 extends ee {
  constructor(e = {}) {
    if (typeof e == "number") {
      const r = arguments[0], n = arguments[1], i = arguments[2], s = arguments[3];
      e = { width: r, height: n, scaleMode: i, resolution: s };
    }
    e.width = e.width ?? 100, e.height = e.height ?? 100, e.multisample ?? (e.multisample = De.NONE), super(null, e), this.mipmap = fr.OFF, this.valid = true, this._clear = new ge([0, 0, 0, 0]), this.framebuffer = new sd(this.realWidth, this.realHeight).addColorTexture(0, this), this.framebuffer.multisample = e.multisample, this.maskStack = [], this.filterStack = [{}];
  }
  set clearColor(e) {
    this._clear.setValue(e);
  }
  get clearColor() {
    return this._clear.value;
  }
  get clear() {
    return this._clear;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(e) {
    this.framebuffer.multisample = e;
  }
  resize(e, r) {
    this.framebuffer.resize(e * this.resolution, r * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height);
  }
  dispose() {
    this.framebuffer.dispose(), super.dispose();
  }
  destroy() {
    super.destroy(), this.framebuffer.destroyDepthTexture(), this.framebuffer = null;
  }
}
class Fr extends vo {
  constructor(e) {
    const r = e, n = r.naturalWidth || r.videoWidth || r.displayWidth || r.width, i = r.naturalHeight || r.videoHeight || r.displayHeight || r.height;
    super(n, i), this.source = e, this.noSubImage = false;
  }
  static crossOrigin(e, r, n) {
    n === void 0 && !r.startsWith("data:") ? e.crossOrigin = Db(r) : n !== false && (e.crossOrigin = typeof n == "string" ? n : "anonymous");
  }
  upload(e, r, n, i) {
    const s = e.gl, o = r.realWidth, a = r.realHeight;
    if (i = i || this.source, typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) {
      if (!i.complete || i.naturalWidth === 0) return false;
    } else if (typeof HTMLVideoElement < "u" && i instanceof HTMLVideoElement && i.readyState <= 1) return false;
    return s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.alphaMode === ht.UNPACK), !this.noSubImage && r.target === s.TEXTURE_2D && n.width === o && n.height === a ? s.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, r.format, n.type, i) : (n.width = o, n.height = a, s.texImage2D(r.target, 0, n.internalFormat, r.format, n.type, i)), true;
  }
  update() {
    if (this.destroyed) return;
    const e = this.source, r = e.naturalWidth || e.videoWidth || e.width, n = e.naturalHeight || e.videoHeight || e.height;
    this.resize(r, n), super.update();
  }
  dispose() {
    this.source = null;
  }
}
class o0 extends Fr {
  constructor(e, r) {
    if (r = r || {}, typeof e == "string") {
      const n = new Image();
      Fr.crossOrigin(n, e, r.crossorigin), n.src = e, e = n;
    }
    super(e), !e.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = e.src, this._process = null, this.preserveBitmap = false, this.createBitmap = (r.createBitmap ?? H.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, this.alphaMode = typeof r.alphaMode == "number" ? r.alphaMode : null, this.bitmap = null, this._load = null, r.autoLoad !== false && this.load();
  }
  load(e) {
    return this._load ? this._load : (e !== void 0 && (this.createBitmap = e), this._load = new Promise((r, n) => {
      const i = this.source;
      this.url = i.src;
      const s = () => {
        this.destroyed || (i.onload = null, i.onerror = null, this.update(), this._load = null, this.createBitmap ? r(this.process()) : r(this));
      };
      i.complete && i.src ? s() : (i.onload = s, i.onerror = (o) => {
        n(o), this.onError.emit(o);
      });
    }), this._load);
  }
  process() {
    const e = this.source;
    if (this._process !== null) return this._process;
    if (this.bitmap !== null || !globalThis.createImageBitmap) return Promise.resolve(this);
    const r = globalThis.createImageBitmap, n = !e.crossOrigin || e.crossOrigin === "anonymous";
    return this._process = fetch(e.src, { mode: n ? "cors" : "no-cors" }).then((i) => i.blob()).then((i) => r(i, 0, 0, e.width, e.height, { premultiplyAlpha: this.alphaMode === null || this.alphaMode === ht.UNPACK ? "premultiply" : "none" })).then((i) => this.destroyed ? Promise.reject() : (this.bitmap = i, this.update(), this._process = null, Promise.resolve(this))), this._process;
  }
  upload(e, r, n) {
    if (typeof this.alphaMode == "number" && (r.alphaMode = this.alphaMode), !this.createBitmap) return super.upload(e, r, n);
    if (!this.bitmap && (this.process(), !this.bitmap)) return false;
    if (super.upload(e, r, n, this.bitmap), !this.preserveBitmap) {
      let i = true;
      const s = r._glTextures;
      for (const o in s) {
        const a = s[o];
        if (a !== n && a.dirtyId !== r.dirtyId) {
          i = false;
          break;
        }
      }
      i && (this.bitmap.close && this.bitmap.close(), this.bitmap = null);
    }
    return true;
  }
  dispose() {
    this.source.onload = null, this.source.onerror = null, super.dispose(), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null;
  }
  static test(e) {
    return typeof HTMLImageElement < "u" && (typeof e == "string" || e instanceof HTMLImageElement);
  }
}
class zf {
  constructor() {
    this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
  }
  set(e, r, n) {
    const i = r.width, s = r.height;
    if (n) {
      const o = e.width / 2 / i, a = e.height / 2 / s, l = e.x / i + o, u = e.y / s + a;
      n = Ee.add(n, Ee.NW), this.x0 = l + o * Ee.uX(n), this.y0 = u + a * Ee.uY(n), n = Ee.add(n, 2), this.x1 = l + o * Ee.uX(n), this.y1 = u + a * Ee.uY(n), n = Ee.add(n, 2), this.x2 = l + o * Ee.uX(n), this.y2 = u + a * Ee.uY(n), n = Ee.add(n, 2), this.x3 = l + o * Ee.uX(n), this.y3 = u + a * Ee.uY(n);
    } else this.x0 = e.x / i, this.y0 = e.y / s, this.x1 = (e.x + e.width) / i, this.y1 = e.y / s, this.x2 = (e.x + e.width) / i, this.y2 = (e.y + e.height) / s, this.x3 = e.x / i, this.y3 = (e.y + e.height) / s;
    this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3;
  }
}
zf.prototype.toString = function() {
  return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
};
const fg = new zf();
function ua(t5) {
  t5.destroy = function() {
  }, t5.on = function() {
  }, t5.once = function() {
  }, t5.emit = function() {
  };
}
class X extends Ao {
  constructor(e, r, n, i, s, o, a) {
    if (super(), this.noFrame = false, r || (this.noFrame = true, r = new te(0, 0, 1, 1)), e instanceof X && (e = e.baseTexture), this.baseTexture = e, this._frame = r, this.trim = i, this.valid = false, this.destroyed = false, this._uvs = fg, this.uvMatrix = null, this.orig = n || r, this._rotate = Number(s || 0), s === true) this._rotate = 2;
    else if (this._rotate % 2 !== 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
    this.defaultAnchor = o ? new ae(o.x, o.y) : new ae(0, 0), this.defaultBorders = a, this._updateID = 0, this.textureCacheIds = [], e.valid ? this.noFrame ? e.valid && this.onBaseTextureUpdated(e) : this.frame = r : e.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && e.on("update", this.onBaseTextureUpdated, this);
  }
  update() {
    this.baseTexture.resource && this.baseTexture.resource.update();
  }
  onBaseTextureUpdated(e) {
    if (this.noFrame) {
      if (!this.baseTexture.valid) return;
      this._frame.width = e.width, this._frame.height = e.height, this.valid = true, this.updateUvs();
    } else this.frame = this._frame;
    this.emit("update", this);
  }
  destroy(e) {
    if (this.baseTexture) {
      if (e) {
        const { resource: r } = this.baseTexture;
        (r == null ? void 0 : r.url) && Jt[r.url] && X.removeFromCache(r.url), this.baseTexture.destroy();
      }
      this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null;
    }
    this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = false, X.removeFromCache(this), this.textureCacheIds = null, this.destroyed = true, this.emit("destroyed", this), this.removeAllListeners();
  }
  clone() {
    var _a2;
    const e = this._frame.clone(), r = this._frame === this.orig ? e : this.orig.clone(), n = new X(this.baseTexture, !this.noFrame && e, r, (_a2 = this.trim) == null ? void 0 : _a2.clone(), this.rotate, this.defaultAnchor, this.defaultBorders);
    return this.noFrame && (n._frame = e), n;
  }
  updateUvs() {
    this._uvs === fg && (this._uvs = new zf()), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++;
  }
  static from(e, r = {}, n = H.STRICT_TEXTURE_CACHE) {
    const i = typeof e == "string";
    let s = null;
    if (i) s = e;
    else if (e instanceof ee) {
      if (!e.cacheId) {
        const a = (r == null ? void 0 : r.pixiIdPrefix) || "pixiid";
        e.cacheId = `${a}-${Wn()}`, ee.addToCache(e, e.cacheId);
      }
      s = e.cacheId;
    } else {
      if (!e._pixiId) {
        const a = (r == null ? void 0 : r.pixiIdPrefix) || "pixiid";
        e._pixiId = `${a}_${Wn()}`;
      }
      s = e._pixiId;
    }
    let o = Jt[s];
    if (i && n && !o) throw new Error(`The cacheId "${s}" does not exist in TextureCache.`);
    return !o && !(e instanceof ee) ? (r.resolution || (r.resolution = kr(e)), o = new X(new ee(e, r)), o.baseTexture.cacheId = s, ee.addToCache(o.baseTexture, s), X.addToCache(o, s)) : !o && e instanceof ee && (o = new X(e), X.addToCache(o, s)), o;
  }
  static fromURL(e, r) {
    const n = Object.assign({ autoLoad: false }, r == null ? void 0 : r.resourceOptions), i = X.from(e, Object.assign({ resourceOptions: n }, r), false), s = i.baseTexture.resource;
    return i.baseTexture.valid ? Promise.resolve(i) : s.load().then(() => Promise.resolve(i));
  }
  static fromBuffer(e, r, n, i) {
    return new X(ee.fromBuffer(e, r, n, i));
  }
  static fromLoader(e, r, n, i) {
    const s = new ee(e, Object.assign({ scaleMode: ee.defaultOptions.scaleMode, resolution: kr(r) }, i)), { resource: o } = s;
    o instanceof o0 && (o.url = r);
    const a = new X(s);
    return n || (n = r), ee.addToCache(a.baseTexture, n), X.addToCache(a, n), n !== r && (ee.addToCache(a.baseTexture, r), X.addToCache(a, r)), a.baseTexture.valid ? Promise.resolve(a) : new Promise((l) => {
      a.baseTexture.once("loaded", () => l(a));
    });
  }
  static addToCache(e, r) {
    r && (e.textureCacheIds.includes(r) || e.textureCacheIds.push(r), Jt[r] && Jt[r] !== e && console.warn(`Texture added to the cache with an id [${r}] that already had an entry`), Jt[r] = e);
  }
  static removeFromCache(e) {
    if (typeof e == "string") {
      const r = Jt[e];
      if (r) {
        const n = r.textureCacheIds.indexOf(e);
        return n > -1 && r.textureCacheIds.splice(n, 1), delete Jt[e], r;
      }
    } else if (e == null ? void 0 : e.textureCacheIds) {
      for (let r = 0; r < e.textureCacheIds.length; ++r) Jt[e.textureCacheIds[r]] === e && delete Jt[e.textureCacheIds[r]];
      return e.textureCacheIds.length = 0, e;
    }
    return null;
  }
  get resolution() {
    return this.baseTexture.resolution;
  }
  get frame() {
    return this._frame;
  }
  set frame(e) {
    this._frame = e, this.noFrame = false;
    const { x: r, y: n, width: i, height: s } = e, o = r + i > this.baseTexture.width, a = n + s > this.baseTexture.height;
    if (o || a) {
      const l = o && a ? "and" : "or", u = `X: ${r} + ${i} = ${r + i} > ${this.baseTexture.width}`, h = `Y: ${n} + ${s} = ${n + s} > ${this.baseTexture.height}`;
      throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${u} ${l} ${h}`);
    }
    this.valid = i && s && this.baseTexture.valid, !this.trim && !this.rotate && (this.orig = e), this.valid && this.updateUvs();
  }
  get rotate() {
    return this._rotate;
  }
  set rotate(e) {
    this._rotate = e, this.valid && this.updateUvs();
  }
  get width() {
    return this.orig.width;
  }
  get height() {
    return this.orig.height;
  }
  castToBaseTexture() {
    return this.baseTexture;
  }
  static get EMPTY() {
    return X._EMPTY || (X._EMPTY = new X(new ee()), ua(X._EMPTY), ua(X._EMPTY.baseTexture)), X._EMPTY;
  }
  static get WHITE() {
    if (!X._WHITE) {
      const e = H.ADAPTER.createCanvas(16, 16), r = e.getContext("2d");
      e.width = 16, e.height = 16, r.fillStyle = "white", r.fillRect(0, 0, 16, 16), X._WHITE = new X(ee.from(e)), ua(X._WHITE), ua(X._WHITE.baseTexture);
    }
    return X._WHITE;
  }
}
class Jn extends X {
  constructor(e, r) {
    super(e, r), this.valid = true, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs();
  }
  get framebuffer() {
    return this.baseTexture.framebuffer;
  }
  get multisample() {
    return this.framebuffer.multisample;
  }
  set multisample(e) {
    this.framebuffer.multisample = e;
  }
  resize(e, r, n = true) {
    const i = this.baseTexture.resolution, s = Math.round(e * i) / i, o = Math.round(r * i) / i;
    this.valid = s > 0 && o > 0, this._frame.width = this.orig.width = s, this._frame.height = this.orig.height = o, n && this.baseTexture.resize(s, o), this.updateUvs();
  }
  setResolution(e) {
    const { baseTexture: r } = this;
    r.resolution !== e && (r.setResolution(e), this.resize(r.width, r.height, false));
  }
  static create(e) {
    return new Jn(new s0(e));
  }
}
class a0 {
  constructor(e) {
    this.texturePool = {}, this.textureOptions = e || {}, this.enableFullScreen = false, this._pixelsWidth = 0, this._pixelsHeight = 0;
  }
  createTexture(e, r, n = De.NONE) {
    const i = new s0(Object.assign({ width: e, height: r, resolution: 1, multisample: n }, this.textureOptions));
    return new Jn(i);
  }
  getOptimalTexture(e, r, n = 1, i = De.NONE) {
    let s;
    e = Math.max(Math.ceil(e * n - 1e-6), 1), r = Math.max(Math.ceil(r * n - 1e-6), 1), !this.enableFullScreen || e !== this._pixelsWidth || r !== this._pixelsHeight ? (e = bl(e), r = bl(r), s = ((e & 65535) << 16 | r & 65535) >>> 0, i > 1 && (s += i * 4294967296)) : s = i > 1 ? -i : -1, this.texturePool[s] || (this.texturePool[s] = []);
    let o = this.texturePool[s].pop();
    return o || (o = this.createTexture(e, r, i)), o.filterPoolKey = s, o.setResolution(n), o;
  }
  getFilterTexture(e, r, n) {
    const i = this.getOptimalTexture(e.width, e.height, r || e.resolution, n || De.NONE);
    return i.filterFrame = e.filterFrame, i;
  }
  returnTexture(e) {
    const r = e.filterPoolKey;
    e.filterFrame = null, this.texturePool[r].push(e);
  }
  returnFilterTexture(e) {
    this.returnTexture(e);
  }
  clear(e) {
    if (e = e !== false, e) for (const r in this.texturePool) {
      const n = this.texturePool[r];
      if (n) for (let i = 0; i < n.length; i++) n[i].destroy(true);
    }
    this.texturePool = {};
  }
  setScreenSize(e) {
    if (!(e.width === this._pixelsWidth && e.height === this._pixelsHeight)) {
      this.enableFullScreen = e.width > 0 && e.height > 0;
      for (const r in this.texturePool) {
        if (!(Number(r) < 0)) continue;
        const n = this.texturePool[r];
        if (n) for (let i = 0; i < n.length; i++) n[i].destroy(true);
        this.texturePool[r] = [];
      }
      this._pixelsWidth = e.width, this._pixelsHeight = e.height;
    }
  }
}
a0.SCREEN_KEY = -1;
class dA extends hn {
  constructor() {
    super(), this.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]);
  }
}
class l0 extends hn {
  constructor() {
    super(), this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertexBuffer = new ke(this.vertices), this.uvBuffer = new ke(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
  }
  map(e, r) {
    let n = 0, i = 0;
    return this.uvs[0] = n, this.uvs[1] = i, this.uvs[2] = n + r.width / e.width, this.uvs[3] = i, this.uvs[4] = n + r.width / e.width, this.uvs[5] = i + r.height / e.height, this.uvs[6] = n, this.uvs[7] = i + r.height / e.height, n = r.x, i = r.y, this.vertices[0] = n, this.vertices[1] = i, this.vertices[2] = n + r.width, this.vertices[3] = i, this.vertices[4] = n + r.width, this.vertices[5] = i + r.height, this.vertices[6] = n, this.vertices[7] = i + r.height, this.invalidate(), this;
  }
  invalidate() {
    return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
  }
}
class fA {
  constructor() {
    this.renderTexture = null, this.target = null, this.legacy = false, this.resolution = 1, this.multisample = De.NONE, this.sourceFrame = new te(), this.destinationFrame = new te(), this.bindingSourceFrame = new te(), this.bindingDestinationFrame = new te(), this.filters = [], this.transform = null;
  }
  clear() {
    this.target = null, this.filters = null, this.renderTexture = null;
  }
}
const ha = [new ae(), new ae(), new ae(), new ae()], Th = new ve();
class u0 {
  constructor(e) {
    this.renderer = e, this.defaultFilterStack = [{}], this.texturePool = new a0(), this.statePool = [], this.quad = new dA(), this.quadUv = new l0(), this.tempRect = new te(), this.activeState = {}, this.globalUniforms = new Xt({ outputFrame: new te(), inputSize: new Float32Array(4), inputPixel: new Float32Array(4), inputClamp: new Float32Array(4), resolution: 1, filterArea: new Float32Array(4), filterClamp: new Float32Array(4) }, true), this.forceClear = false, this.useMaxPadding = false;
  }
  init() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  push(e, r) {
    const n = this.renderer, i = this.defaultFilterStack, s = this.statePool.pop() || new fA(), o = n.renderTexture;
    let a, l;
    if (o.current) {
      const _ = o.current;
      a = _.resolution, l = _.multisample;
    } else a = n.resolution, l = n.multisample;
    let u = r[0].resolution || a, h = r[0].multisample ?? l, c = r[0].padding, d = r[0].autoFit, f = r[0].legacy ?? true;
    for (let _ = 1; _ < r.length; _++) {
      const g = r[_];
      u = Math.min(u, g.resolution || a), h = Math.min(h, g.multisample ?? l), c = this.useMaxPadding ? Math.max(c, g.padding) : c + g.padding, d = d && g.autoFit, f = f || (g.legacy ?? true);
    }
    i.length === 1 && (this.defaultFilterStack[0].renderTexture = o.current), i.push(s), s.resolution = u, s.multisample = h, s.legacy = f, s.target = e, s.sourceFrame.copyFrom(e.filterArea || e.getBounds(true)), s.sourceFrame.pad(c);
    const p = this.tempRect.copyFrom(o.sourceFrame);
    n.projection.transform && this.transformAABB(Th.copyFrom(n.projection.transform).invert(), p), d ? (s.sourceFrame.fit(p), (s.sourceFrame.width <= 0 || s.sourceFrame.height <= 0) && (s.sourceFrame.width = 0, s.sourceFrame.height = 0)) : s.sourceFrame.intersects(p) || (s.sourceFrame.width = 0, s.sourceFrame.height = 0), this.roundFrame(s.sourceFrame, o.current ? o.current.resolution : n.resolution, o.sourceFrame, o.destinationFrame, n.projection.transform), s.renderTexture = this.getOptimalFilterTexture(s.sourceFrame.width, s.sourceFrame.height, u, h), s.filters = r, s.destinationFrame.width = s.renderTexture.width, s.destinationFrame.height = s.renderTexture.height;
    const y = this.tempRect;
    y.x = 0, y.y = 0, y.width = s.sourceFrame.width, y.height = s.sourceFrame.height, s.renderTexture.filterFrame = s.sourceFrame, s.bindingSourceFrame.copyFrom(o.sourceFrame), s.bindingDestinationFrame.copyFrom(o.destinationFrame), s.transform = n.projection.transform, n.projection.transform = null, o.bind(s.renderTexture, s.sourceFrame, y), n.framebuffer.clear(0, 0, 0, 0);
  }
  pop() {
    const e = this.defaultFilterStack, r = e.pop(), n = r.filters;
    this.activeState = r;
    const i = this.globalUniforms.uniforms;
    i.outputFrame = r.sourceFrame, i.resolution = r.resolution;
    const s = i.inputSize, o = i.inputPixel, a = i.inputClamp;
    if (s[0] = r.destinationFrame.width, s[1] = r.destinationFrame.height, s[2] = 1 / s[0], s[3] = 1 / s[1], o[0] = Math.round(s[0] * r.resolution), o[1] = Math.round(s[1] * r.resolution), o[2] = 1 / o[0], o[3] = 1 / o[1], a[0] = 0.5 * o[2], a[1] = 0.5 * o[3], a[2] = r.sourceFrame.width * s[2] - 0.5 * o[2], a[3] = r.sourceFrame.height * s[3] - 0.5 * o[3], r.legacy) {
      const u = i.filterArea;
      u[0] = r.destinationFrame.width, u[1] = r.destinationFrame.height, u[2] = r.sourceFrame.x, u[3] = r.sourceFrame.y, i.filterClamp = i.inputClamp;
    }
    this.globalUniforms.update();
    const l = e[e.length - 1];
    if (this.renderer.framebuffer.blit(), n.length === 1) n[0].apply(this, r.renderTexture, l.renderTexture, sr.BLEND, r), this.returnFilterTexture(r.renderTexture);
    else {
      let u = r.renderTexture, h = this.getOptimalFilterTexture(u.width, u.height, r.resolution);
      h.filterFrame = u.filterFrame;
      let c = 0;
      for (c = 0; c < n.length - 1; ++c) {
        c === 1 && r.multisample > 1 && (h = this.getOptimalFilterTexture(u.width, u.height, r.resolution), h.filterFrame = u.filterFrame), n[c].apply(this, u, h, sr.CLEAR, r);
        const d = u;
        u = h, h = d;
      }
      n[c].apply(this, u, l.renderTexture, sr.BLEND, r), c > 1 && r.multisample > 1 && this.returnFilterTexture(r.renderTexture), this.returnFilterTexture(u), this.returnFilterTexture(h);
    }
    r.clear(), this.statePool.push(r);
  }
  bindAndClear(e, r = sr.CLEAR) {
    const { renderTexture: n, state: i } = this.renderer;
    if (e === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, e == null ? void 0 : e.filterFrame) {
      const o = this.tempRect;
      o.x = 0, o.y = 0, o.width = e.filterFrame.width, o.height = e.filterFrame.height, n.bind(e, e.filterFrame, o);
    } else e !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? n.bind(e) : this.renderer.renderTexture.bind(e, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
    const s = i.stateId & 1 || this.forceClear;
    (r === sr.CLEAR || r === sr.BLIT && s) && this.renderer.framebuffer.clear(0, 0, 0, 0);
  }
  applyFilter(e, r, n, i) {
    const s = this.renderer;
    s.state.set(e.state), this.bindAndClear(n, i), e.uniforms.uSampler = r, e.uniforms.filterGlobals = this.globalUniforms, s.shader.bind(e), e.legacy = !!e.program.attributeData.aTextureCoord, e.legacy ? (this.quadUv.map(r._frame, r.filterFrame), s.geometry.bind(this.quadUv), s.geometry.draw(lr.TRIANGLES)) : (s.geometry.bind(this.quad), s.geometry.draw(lr.TRIANGLE_STRIP));
  }
  calculateSpriteMatrix(e, r) {
    const { sourceFrame: n, destinationFrame: i } = this.activeState, { orig: s } = r._texture, o = e.set(i.width, 0, 0, i.height, n.x, n.y), a = r.worldTransform.copyTo(ve.TEMP_MATRIX);
    return a.invert(), o.prepend(a), o.scale(1 / s.width, 1 / s.height), o.translate(r.anchor.x, r.anchor.y), o;
  }
  destroy() {
    this.renderer = null, this.texturePool.clear(false);
  }
  getOptimalFilterTexture(e, r, n = 1, i = De.NONE) {
    return this.texturePool.getOptimalTexture(e, r, n, i);
  }
  getFilterTexture(e, r, n) {
    if (typeof e == "number") {
      const s = e;
      e = r, r = s;
    }
    e = e || this.activeState.renderTexture;
    const i = this.texturePool.getOptimalTexture(e.width, e.height, r || e.resolution, n || De.NONE);
    return i.filterFrame = e.filterFrame, i;
  }
  returnFilterTexture(e) {
    this.texturePool.returnTexture(e);
  }
  emptyPool() {
    this.texturePool.clear(true);
  }
  resize() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  transformAABB(e, r) {
    const n = ha[0], i = ha[1], s = ha[2], o = ha[3];
    n.set(r.left, r.top), i.set(r.left, r.bottom), s.set(r.right, r.top), o.set(r.right, r.bottom), e.apply(n, n), e.apply(i, i), e.apply(s, s), e.apply(o, o);
    const a = Math.min(n.x, i.x, s.x, o.x), l = Math.min(n.y, i.y, s.y, o.y), u = Math.max(n.x, i.x, s.x, o.x), h = Math.max(n.y, i.y, s.y, o.y);
    r.x = a, r.y = l, r.width = u - a, r.height = h - l;
  }
  roundFrame(e, r, n, i, s) {
    if (!(e.width <= 0 || e.height <= 0 || n.width <= 0 || n.height <= 0)) {
      if (s) {
        const { a: o, b: a, c: l, d: u } = s;
        if ((Math.abs(a) > 1e-4 || Math.abs(l) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(u) > 1e-4)) return;
      }
      s = s ? Th.copyFrom(s) : Th.identity(), s.translate(-n.x, -n.y).scale(i.width / n.width, i.height / n.height).translate(i.x, i.y), this.transformAABB(s, e), e.ceil(r), this.transformAABB(s.invert(), e);
    }
  }
}
u0.extension = { type: L.RendererSystem, name: "filter" };
W.add(u0);
class pA {
  constructor(e) {
    this.framebuffer = e, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = De.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0;
  }
}
const mA = new te();
class h0 {
  constructor(e) {
    this.renderer = e, this.managedFramebuffers = [], this.unknownFramebuffer = new sd(10, 10), this.msaaSamples = null;
  }
  contextChange() {
    this.disposeAll(true);
    const e = this.gl = this.renderer.gl;
    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new te(), this.hasMRT = true, this.writeDepthTexture = true, this.renderer.context.webGLVersion === 1) {
      let r = this.renderer.context.extensions.drawBuffers, n = this.renderer.context.extensions.depthTexture;
      H.PREFER_ENV === qn.WEBGL_LEGACY && (r = null, n = null), r ? e.drawBuffers = (i) => r.drawBuffersWEBGL(i) : (this.hasMRT = false, e.drawBuffers = () => {
      }), n || (this.writeDepthTexture = false);
    } else this.msaaSamples = e.getInternalformatParameter(e.RENDERBUFFER, e.RGBA8, e.SAMPLES);
  }
  bind(e, r, n = 0) {
    const { gl: i } = this;
    if (e) {
      const s = e.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(e);
      this.current !== e && (this.current = e, i.bindFramebuffer(i.FRAMEBUFFER, s.framebuffer)), s.mipLevel !== n && (e.dirtyId++, e.dirtyFormat++, s.mipLevel = n), s.dirtyId !== e.dirtyId && (s.dirtyId = e.dirtyId, s.dirtyFormat !== e.dirtyFormat ? (s.dirtyFormat = e.dirtyFormat, s.dirtySize = e.dirtySize, this.updateFramebuffer(e, n)) : s.dirtySize !== e.dirtySize && (s.dirtySize = e.dirtySize, this.resizeFramebuffer(e)));
      for (let o = 0; o < e.colorTextures.length; o++) {
        const a = e.colorTextures[o];
        this.renderer.texture.unbind(a.parentTextureArray || a);
      }
      if (e.depthTexture && this.renderer.texture.unbind(e.depthTexture), r) {
        const o = r.width >> n, a = r.height >> n, l = o / r.width;
        this.setViewport(r.x * l, r.y * l, o, a);
      } else {
        const o = e.width >> n, a = e.height >> n;
        this.setViewport(0, 0, o, a);
      }
    } else this.current && (this.current = null, i.bindFramebuffer(i.FRAMEBUFFER, null)), r ? this.setViewport(r.x, r.y, r.width, r.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
  }
  setViewport(e, r, n, i) {
    const s = this.viewport;
    e = Math.round(e), r = Math.round(r), n = Math.round(n), i = Math.round(i), (s.width !== n || s.height !== i || s.x !== e || s.y !== r) && (s.x = e, s.y = r, s.width = n, s.height = i, this.gl.viewport(e, r, n, i));
  }
  get size() {
    return this.current ? { x: 0, y: 0, width: this.current.width, height: this.current.height } : { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
  }
  clear(e, r, n, i, s = Fc.COLOR | Fc.DEPTH) {
    const { gl: o } = this;
    o.clearColor(e, r, n, i), o.clear(s);
  }
  initFramebuffer(e) {
    const { gl: r } = this, n = new pA(r.createFramebuffer());
    return n.multisample = this.detectSamples(e.multisample), e.glFramebuffers[this.CONTEXT_UID] = n, this.managedFramebuffers.push(e), e.disposeRunner.add(this), n;
  }
  resizeFramebuffer(e) {
    const { gl: r } = this, n = e.glFramebuffers[this.CONTEXT_UID];
    if (n.stencil) {
      r.bindRenderbuffer(r.RENDERBUFFER, n.stencil);
      let o;
      this.renderer.context.webGLVersion === 1 ? o = r.DEPTH_STENCIL : e.depth && e.stencil ? o = r.DEPTH24_STENCIL8 : e.depth ? o = r.DEPTH_COMPONENT24 : o = r.STENCIL_INDEX8, n.msaaBuffer ? r.renderbufferStorageMultisample(r.RENDERBUFFER, n.multisample, o, e.width, e.height) : r.renderbufferStorage(r.RENDERBUFFER, o, e.width, e.height);
    }
    const i = e.colorTextures;
    let s = i.length;
    r.drawBuffers || (s = Math.min(s, 1));
    for (let o = 0; o < s; o++) {
      const a = i[o], l = a.parentTextureArray || a;
      this.renderer.texture.bind(l, 0), o === 0 && n.msaaBuffer && (r.bindRenderbuffer(r.RENDERBUFFER, n.msaaBuffer), r.renderbufferStorageMultisample(r.RENDERBUFFER, n.multisample, l._glTextures[this.CONTEXT_UID].internalFormat, e.width, e.height));
    }
    e.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(e.depthTexture, 0);
  }
  updateFramebuffer(e, r) {
    const { gl: n } = this, i = e.glFramebuffers[this.CONTEXT_UID], s = e.colorTextures;
    let o = s.length;
    n.drawBuffers || (o = Math.min(o, 1)), i.multisample > 1 && this.canMultisampleFramebuffer(e) ? i.msaaBuffer = i.msaaBuffer || n.createRenderbuffer() : i.msaaBuffer && (n.deleteRenderbuffer(i.msaaBuffer), i.msaaBuffer = null, i.blitFramebuffer && (i.blitFramebuffer.dispose(), i.blitFramebuffer = null));
    const a = [];
    for (let l = 0; l < o; l++) {
      const u = s[l], h = u.parentTextureArray || u;
      this.renderer.texture.bind(h, 0), l === 0 && i.msaaBuffer ? (n.bindRenderbuffer(n.RENDERBUFFER, i.msaaBuffer), n.renderbufferStorageMultisample(n.RENDERBUFFER, i.multisample, h._glTextures[this.CONTEXT_UID].internalFormat, e.width, e.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, i.msaaBuffer)) : (n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + l, u.target, h._glTextures[this.CONTEXT_UID].texture, r), a.push(n.COLOR_ATTACHMENT0 + l));
    }
    if (a.length > 1 && n.drawBuffers(a), e.depthTexture && this.writeDepthTexture) {
      const l = e.depthTexture;
      this.renderer.texture.bind(l, 0), n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, r);
    }
    if ((e.stencil || e.depth) && !(e.depthTexture && this.writeDepthTexture)) {
      i.stencil = i.stencil || n.createRenderbuffer();
      let l, u;
      this.renderer.context.webGLVersion === 1 ? (l = n.DEPTH_STENCIL_ATTACHMENT, u = n.DEPTH_STENCIL) : e.depth && e.stencil ? (l = n.DEPTH_STENCIL_ATTACHMENT, u = n.DEPTH24_STENCIL8) : e.depth ? (l = n.DEPTH_ATTACHMENT, u = n.DEPTH_COMPONENT24) : (l = n.STENCIL_ATTACHMENT, u = n.STENCIL_INDEX8), n.bindRenderbuffer(n.RENDERBUFFER, i.stencil), i.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, i.multisample, u, e.width, e.height) : n.renderbufferStorage(n.RENDERBUFFER, u, e.width, e.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, l, n.RENDERBUFFER, i.stencil);
    } else i.stencil && (n.deleteRenderbuffer(i.stencil), i.stencil = null);
  }
  canMultisampleFramebuffer(e) {
    return this.renderer.context.webGLVersion !== 1 && e.colorTextures.length <= 1 && !e.depthTexture;
  }
  detectSamples(e) {
    const { msaaSamples: r } = this;
    let n = De.NONE;
    if (e <= 1 || r === null) return n;
    for (let i = 0; i < r.length; i++) if (r[i] <= e) {
      n = r[i];
      break;
    }
    return n === 1 && (n = De.NONE), n;
  }
  blit(e, r, n) {
    const { current: i, renderer: s, gl: o, CONTEXT_UID: a } = this;
    if (s.context.webGLVersion !== 2 || !i) return;
    const l = i.glFramebuffers[a];
    if (!l) return;
    if (!e) {
      if (!l.msaaBuffer) return;
      const h = i.colorTextures[0];
      if (!h) return;
      l.blitFramebuffer || (l.blitFramebuffer = new sd(i.width, i.height), l.blitFramebuffer.addColorTexture(0, h)), e = l.blitFramebuffer, e.colorTextures[0] !== h && (e.colorTextures[0] = h, e.dirtyId++, e.dirtyFormat++), (e.width !== i.width || e.height !== i.height) && (e.width = i.width, e.height = i.height, e.dirtyId++, e.dirtySize++);
    }
    r || (r = mA, r.width = i.width, r.height = i.height), n || (n = r);
    const u = r.width === n.width && r.height === n.height;
    this.bind(e), o.bindFramebuffer(o.READ_FRAMEBUFFER, l.framebuffer), o.blitFramebuffer(r.left, r.top, r.right, r.bottom, n.left, n.top, n.right, n.bottom, o.COLOR_BUFFER_BIT, u ? o.NEAREST : o.LINEAR), o.bindFramebuffer(o.READ_FRAMEBUFFER, e.glFramebuffers[this.CONTEXT_UID].framebuffer);
  }
  disposeFramebuffer(e, r) {
    const n = e.glFramebuffers[this.CONTEXT_UID], i = this.gl;
    if (!n) return;
    delete e.glFramebuffers[this.CONTEXT_UID];
    const s = this.managedFramebuffers.indexOf(e);
    s >= 0 && this.managedFramebuffers.splice(s, 1), e.disposeRunner.remove(this), r || (i.deleteFramebuffer(n.framebuffer), n.msaaBuffer && i.deleteRenderbuffer(n.msaaBuffer), n.stencil && i.deleteRenderbuffer(n.stencil)), n.blitFramebuffer && this.disposeFramebuffer(n.blitFramebuffer, r);
  }
  disposeAll(e) {
    const r = this.managedFramebuffers;
    this.managedFramebuffers = [];
    for (let n = 0; n < r.length; n++) this.disposeFramebuffer(r[n], e);
  }
  forceStencil() {
    const e = this.current;
    if (!e) return;
    const r = e.glFramebuffers[this.CONTEXT_UID];
    if (!r || r.stencil && e.stencil) return;
    e.stencil = true;
    const n = e.width, i = e.height, s = this.gl, o = r.stencil = s.createRenderbuffer();
    s.bindRenderbuffer(s.RENDERBUFFER, o);
    let a, l;
    this.renderer.context.webGLVersion === 1 ? (a = s.DEPTH_STENCIL_ATTACHMENT, l = s.DEPTH_STENCIL) : e.depth ? (a = s.DEPTH_STENCIL_ATTACHMENT, l = s.DEPTH24_STENCIL8) : (a = s.STENCIL_ATTACHMENT, l = s.STENCIL_INDEX8), r.msaaBuffer ? s.renderbufferStorageMultisample(s.RENDERBUFFER, r.multisample, l, n, i) : s.renderbufferStorage(s.RENDERBUFFER, l, n, i), s.framebufferRenderbuffer(s.FRAMEBUFFER, a, s.RENDERBUFFER, o);
  }
  reset() {
    this.current = this.unknownFramebuffer, this.viewport = new te();
  }
  destroy() {
    this.renderer = null;
  }
}
h0.extension = { type: L.RendererSystem, name: "framebuffer" };
W.add(h0);
const bh = { 5126: 4, 5123: 2, 5121: 1 };
class c0 {
  constructor(e) {
    this.renderer = e, this._activeGeometry = null, this._activeVao = null, this.hasVao = true, this.hasInstance = true, this.canUseUInt32ElementIndex = false, this.managedGeometries = {};
  }
  contextChange() {
    this.disposeAll(true);
    const e = this.gl = this.renderer.gl, r = this.renderer.context;
    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, r.webGLVersion !== 2) {
      let n = this.renderer.context.extensions.vertexArrayObject;
      H.PREFER_ENV === qn.WEBGL_LEGACY && (n = null), n ? (e.createVertexArray = () => n.createVertexArrayOES(), e.bindVertexArray = (i) => n.bindVertexArrayOES(i), e.deleteVertexArray = (i) => n.deleteVertexArrayOES(i)) : (this.hasVao = false, e.createVertexArray = () => null, e.bindVertexArray = () => null, e.deleteVertexArray = () => null);
    }
    if (r.webGLVersion !== 2) {
      const n = e.getExtension("ANGLE_instanced_arrays");
      n ? (e.vertexAttribDivisor = (i, s) => n.vertexAttribDivisorANGLE(i, s), e.drawElementsInstanced = (i, s, o, a, l) => n.drawElementsInstancedANGLE(i, s, o, a, l), e.drawArraysInstanced = (i, s, o, a) => n.drawArraysInstancedANGLE(i, s, o, a)) : this.hasInstance = false;
    }
    this.canUseUInt32ElementIndex = r.webGLVersion === 2 || !!r.extensions.uint32ElementIndex;
  }
  bind(e, r) {
    r = r || this.renderer.shader.shader;
    const { gl: n } = this;
    let i = e.glVertexArrayObjects[this.CONTEXT_UID], s = false;
    i || (this.managedGeometries[e.id] = e, e.disposeRunner.add(this), e.glVertexArrayObjects[this.CONTEXT_UID] = i = {}, s = true);
    const o = i[r.program.id] || this.initGeometryVao(e, r, s);
    this._activeGeometry = e, this._activeVao !== o && (this._activeVao = o, this.hasVao ? n.bindVertexArray(o) : this.activateVao(e, r.program)), this.updateBuffers();
  }
  reset() {
    this.unbind();
  }
  updateBuffers() {
    const e = this._activeGeometry, r = this.renderer.buffer;
    for (let n = 0; n < e.buffers.length; n++) {
      const i = e.buffers[n];
      r.update(i);
    }
  }
  checkCompatibility(e, r) {
    const n = e.attributes, i = r.attributeData;
    for (const s in i) if (!n[s]) throw new Error(`shader and geometry incompatible, geometry missing the "${s}" attribute`);
  }
  getSignature(e, r) {
    const n = e.attributes, i = r.attributeData, s = ["g", e.id];
    for (const o in n) i[o] && s.push(o, i[o].location);
    return s.join("-");
  }
  initGeometryVao(e, r, n = true) {
    const i = this.gl, s = this.CONTEXT_UID, o = this.renderer.buffer, a = r.program;
    a.glPrograms[s] || this.renderer.shader.generateProgram(r), this.checkCompatibility(e, a);
    const l = this.getSignature(e, a), u = e.glVertexArrayObjects[this.CONTEXT_UID];
    let h = u[l];
    if (h) return u[a.id] = h, h;
    const c = e.buffers, d = e.attributes, f = {}, p = {};
    for (const y in c) f[y] = 0, p[y] = 0;
    for (const y in d) !d[y].size && a.attributeData[y] ? d[y].size = a.attributeData[y].size : d[y].size || console.warn(`PIXI Geometry attribute '${y}' size cannot be determined (likely the bound shader does not have the attribute)`), f[d[y].buffer] += d[y].size * bh[d[y].type];
    for (const y in d) {
      const _ = d[y], g = _.size;
      _.stride === void 0 && (f[_.buffer] === g * bh[_.type] ? _.stride = 0 : _.stride = f[_.buffer]), _.start === void 0 && (_.start = p[_.buffer], p[_.buffer] += g * bh[_.type]);
    }
    h = i.createVertexArray(), i.bindVertexArray(h);
    for (let y = 0; y < c.length; y++) {
      const _ = c[y];
      o.bind(_), n && _._glBuffers[s].refCount++;
    }
    return this.activateVao(e, a), u[a.id] = h, u[l] = h, i.bindVertexArray(null), o.unbind(cr.ARRAY_BUFFER), h;
  }
  disposeGeometry(e, r) {
    var _a2;
    if (!this.managedGeometries[e.id]) return;
    delete this.managedGeometries[e.id];
    const n = e.glVertexArrayObjects[this.CONTEXT_UID], i = this.gl, s = e.buffers, o = (_a2 = this.renderer) == null ? void 0 : _a2.buffer;
    if (e.disposeRunner.remove(this), !!n) {
      if (o) for (let a = 0; a < s.length; a++) {
        const l = s[a]._glBuffers[this.CONTEXT_UID];
        l && (l.refCount--, l.refCount === 0 && !r && o.dispose(s[a], r));
      }
      if (!r) {
        for (const a in n) if (a[0] === "g") {
          const l = n[a];
          this._activeVao === l && this.unbind(), i.deleteVertexArray(l);
        }
      }
      delete e.glVertexArrayObjects[this.CONTEXT_UID];
    }
  }
  disposeAll(e) {
    const r = Object.keys(this.managedGeometries);
    for (let n = 0; n < r.length; n++) this.disposeGeometry(this.managedGeometries[r[n]], e);
  }
  activateVao(e, r) {
    const n = this.gl, i = this.CONTEXT_UID, s = this.renderer.buffer, o = e.buffers, a = e.attributes;
    e.indexBuffer && s.bind(e.indexBuffer);
    let l = null;
    for (const u in a) {
      const h = a[u], c = o[h.buffer], d = c._glBuffers[i];
      if (r.attributeData[u]) {
        l !== d && (s.bind(c), l = d);
        const f = r.attributeData[u].location;
        if (n.enableVertexAttribArray(f), n.vertexAttribPointer(f, h.size, h.type || n.FLOAT, h.normalized, h.stride, h.start), h.instance) if (this.hasInstance) n.vertexAttribDivisor(f, h.divisor);
        else throw new Error("geometry error, GPU Instancing is not supported on this device");
      }
    }
  }
  draw(e, r, n, i) {
    const { gl: s } = this, o = this._activeGeometry;
    if (o.indexBuffer) {
      const a = o.indexBuffer.data.BYTES_PER_ELEMENT, l = a === 2 ? s.UNSIGNED_SHORT : s.UNSIGNED_INT;
      a === 2 || a === 4 && this.canUseUInt32ElementIndex ? o.instanced ? s.drawElementsInstanced(e, r || o.indexBuffer.data.length, l, (n || 0) * a, i || 1) : s.drawElements(e, r || o.indexBuffer.data.length, l, (n || 0) * a) : console.warn("unsupported index buffer type: uint32");
    } else o.instanced ? s.drawArraysInstanced(e, n, r || o.getSize(), i || 1) : s.drawArrays(e, n, r || o.getSize());
    return this;
  }
  unbind() {
    this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
  }
  destroy() {
    this.renderer = null;
  }
}
c0.extension = { type: L.RendererSystem, name: "geometry" };
W.add(c0);
const pg = new ve();
class d0 {
  constructor(e, r) {
    this._texture = e, this.mapCoord = new ve(), this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = typeof r > "u" ? 0.5 : r, this.isSimple = false;
  }
  get texture() {
    return this._texture;
  }
  set texture(e) {
    this._texture = e, this._textureID = -1;
  }
  multiplyUvs(e, r) {
    r === void 0 && (r = e);
    const n = this.mapCoord;
    for (let i = 0; i < e.length; i += 2) {
      const s = e[i], o = e[i + 1];
      r[i] = s * n.a + o * n.c + n.tx, r[i + 1] = s * n.b + o * n.d + n.ty;
    }
    return r;
  }
  update(e) {
    const r = this._texture;
    if (!r || !r.valid || !e && this._textureID === r._updateID) return false;
    this._textureID = r._updateID, this._updateID++;
    const n = r._uvs;
    this.mapCoord.set(n.x1 - n.x0, n.y1 - n.y0, n.x3 - n.x0, n.y3 - n.y0, n.x0, n.y0);
    const i = r.orig, s = r.trim;
    s && (pg.set(i.width / s.width, 0, 0, i.height / s.height, -s.x / s.width, -s.y / s.height), this.mapCoord.append(pg));
    const o = r.baseTexture, a = this.uClampFrame, l = this.clampMargin / o.resolution, u = this.clampOffset;
    return a[0] = (r._frame.x + l + u) / o.width, a[1] = (r._frame.y + l + u) / o.height, a[2] = (r._frame.x + r._frame.width - l + u) / o.width, a[3] = (r._frame.y + r._frame.height - l + u) / o.height, this.uClampOffset[0] = u / o.realWidth, this.uClampOffset[1] = u / o.realHeight, this.isSimple = r._frame.width === o.width && r._frame.height === o.height && r.rotate === 0, true;
  }
}
var gA = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`, yA = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
class vA extends it {
  constructor(e, r, n) {
    let i = null;
    typeof e != "string" && r === void 0 && n === void 0 && (i = e, e = void 0, r = void 0, n = void 0), super(e || yA, r || gA, n), this.maskSprite = i, this.maskMatrix = new ve();
  }
  get maskSprite() {
    return this._maskSprite;
  }
  set maskSprite(e) {
    this._maskSprite = e, this._maskSprite && (this._maskSprite.renderable = false);
  }
  apply(e, r, n, i) {
    const s = this._maskSprite, o = s._texture;
    o.valid && (o.uvMatrix || (o.uvMatrix = new d0(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = e.calculateSpriteMatrix(this.maskMatrix, s).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = s.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, e.applyFilter(this, r, n, i));
  }
}
class _A {
  constructor(e = null) {
    this.type = Oe.NONE, this.autoDetect = true, this.maskObject = e || null, this.pooled = false, this.isMaskData = true, this.resolution = null, this.multisample = it.defaultMultisample, this.enabled = true, this.colorMask = 15, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._colorMask = 15, this._target = null;
  }
  get filter() {
    return this._filters ? this._filters[0] : null;
  }
  set filter(e) {
    e ? this._filters ? this._filters[0] = e : this._filters = [e] : this._filters = null;
  }
  reset() {
    this.pooled && (this.maskObject = null, this.type = Oe.NONE, this.autoDetect = true), this._target = null, this._scissorRectLocal = null;
  }
  copyCountersOrReset(e) {
    e ? (this._stencilCounter = e._stencilCounter, this._scissorCounter = e._scissorCounter, this._scissorRect = e._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null);
  }
}
class f0 {
  constructor(e) {
    this.renderer = e, this.enableScissor = true, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0;
  }
  setMaskStack(e) {
    this.maskStack = e, this.renderer.scissor.setMaskStack(e), this.renderer.stencil.setMaskStack(e);
  }
  push(e, r) {
    let n = r;
    if (!n.isMaskData) {
      const s = this.maskDataPool.pop() || new _A();
      s.pooled = true, s.maskObject = r, n = s;
    }
    const i = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
    if (n.copyCountersOrReset(i), n._colorMask = i ? i._colorMask : 15, n.autoDetect && this.detect(n), n._target = e, n.type !== Oe.SPRITE && this.maskStack.push(n), n.enabled) switch (n.type) {
      case Oe.SCISSOR:
        this.renderer.scissor.push(n);
        break;
      case Oe.STENCIL:
        this.renderer.stencil.push(n);
        break;
      case Oe.SPRITE:
        n.copyCountersOrReset(null), this.pushSpriteMask(n);
        break;
      case Oe.COLOR:
        this.pushColorMask(n);
        break;
    }
    n.type === Oe.SPRITE && this.maskStack.push(n);
  }
  pop(e) {
    const r = this.maskStack.pop();
    if (!(!r || r._target !== e)) {
      if (r.enabled) switch (r.type) {
        case Oe.SCISSOR:
          this.renderer.scissor.pop(r);
          break;
        case Oe.STENCIL:
          this.renderer.stencil.pop(r.maskObject);
          break;
        case Oe.SPRITE:
          this.popSpriteMask(r);
          break;
        case Oe.COLOR:
          this.popColorMask(r);
          break;
      }
      if (r.reset(), r.pooled && this.maskDataPool.push(r), this.maskStack.length !== 0) {
        const n = this.maskStack[this.maskStack.length - 1];
        n.type === Oe.SPRITE && n._filters && (n._filters[0].maskSprite = n.maskObject);
      }
    }
  }
  detect(e) {
    const r = e.maskObject;
    r ? r.isSprite ? e.type = Oe.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(e) ? e.type = Oe.SCISSOR : e.type = Oe.STENCIL : e.type = Oe.COLOR;
  }
  pushSpriteMask(e) {
    const { maskObject: r } = e, n = e._target;
    let i = e._filters;
    i || (i = this.alphaMaskPool[this.alphaMaskIndex], i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new vA()])), i[0].resolution = e.resolution, i[0].multisample = e.multisample, i[0].maskSprite = r;
    const s = n.filterArea;
    n.filterArea = r.getBounds(true), this.renderer.filter.push(n, i), n.filterArea = s, e._filters || this.alphaMaskIndex++;
  }
  popSpriteMask(e) {
    this.renderer.filter.pop(), e._filters ? e._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null);
  }
  pushColorMask(e) {
    const r = e._colorMask, n = e._colorMask = r & e.colorMask;
    n !== r && this.renderer.gl.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0);
  }
  popColorMask(e) {
    const r = e._colorMask, n = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
    n !== r && this.renderer.gl.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0);
  }
  destroy() {
    this.renderer = null;
  }
}
f0.extension = { type: L.RendererSystem, name: "mask" };
W.add(f0);
class p0 {
  constructor(e) {
    this.renderer = e, this.maskStack = [], this.glConst = 0;
  }
  getStackLength() {
    return this.maskStack.length;
  }
  setMaskStack(e) {
    const { gl: r } = this.renderer, n = this.getStackLength();
    this.maskStack = e;
    const i = this.getStackLength();
    i !== n && (i === 0 ? r.disable(this.glConst) : (r.enable(this.glConst), this._useCurrent()));
  }
  _useCurrent() {
  }
  destroy() {
    this.renderer = null, this.maskStack = null;
  }
}
const mg = new ve(), gg = [], m0 = class Ha extends p0 {
  constructor(e) {
    super(e), this.glConst = H.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST;
  }
  getStackLength() {
    const e = this.maskStack[this.maskStack.length - 1];
    return e ? e._scissorCounter : 0;
  }
  calcScissorRect(e) {
    if (e._scissorRectLocal) return;
    const r = e._scissorRect, { maskObject: n } = e, { renderer: i } = this, s = i.renderTexture, o = n.getBounds(true, gg.pop() ?? new te());
    this.roundFrameToPixels(o, s.current ? s.current.resolution : i.resolution, s.sourceFrame, s.destinationFrame, i.projection.transform), r && o.fit(r), e._scissorRectLocal = o;
  }
  static isMatrixRotated(e) {
    if (!e) return false;
    const { a: r, b: n, c: i, d: s } = e;
    return (Math.abs(n) > 1e-4 || Math.abs(i) > 1e-4) && (Math.abs(r) > 1e-4 || Math.abs(s) > 1e-4);
  }
  testScissor(e) {
    const { maskObject: r } = e;
    if (!r.isFastRect || !r.isFastRect() || Ha.isMatrixRotated(r.worldTransform) || Ha.isMatrixRotated(this.renderer.projection.transform)) return false;
    this.calcScissorRect(e);
    const n = e._scissorRectLocal;
    return n.width > 0 && n.height > 0;
  }
  roundFrameToPixels(e, r, n, i, s) {
    Ha.isMatrixRotated(s) || (s = s ? mg.copyFrom(s) : mg.identity(), s.translate(-n.x, -n.y).scale(i.width / n.width, i.height / n.height).translate(i.x, i.y), this.renderer.filter.transformAABB(s, e), e.fit(i), e.x = Math.round(e.x * r), e.y = Math.round(e.y * r), e.width = Math.round(e.width * r), e.height = Math.round(e.height * r));
  }
  push(e) {
    e._scissorRectLocal || this.calcScissorRect(e);
    const { gl: r } = this.renderer;
    e._scissorRect || r.enable(r.SCISSOR_TEST), e._scissorCounter++, e._scissorRect = e._scissorRectLocal, this._useCurrent();
  }
  pop(e) {
    const { gl: r } = this.renderer;
    e && gg.push(e._scissorRectLocal), this.getStackLength() > 0 ? this._useCurrent() : r.disable(r.SCISSOR_TEST);
  }
  _useCurrent() {
    const e = this.maskStack[this.maskStack.length - 1]._scissorRect;
    let r;
    this.renderer.renderTexture.current ? r = e.y : r = this.renderer.height - e.height - e.y, this.renderer.gl.scissor(e.x, r, e.width, e.height);
  }
};
m0.extension = { type: L.RendererSystem, name: "scissor" };
let xA = m0;
W.add(xA);
class g0 extends p0 {
  constructor(e) {
    super(e), this.glConst = H.ADAPTER.getWebGLRenderingContext().STENCIL_TEST;
  }
  getStackLength() {
    const e = this.maskStack[this.maskStack.length - 1];
    return e ? e._stencilCounter : 0;
  }
  push(e) {
    const r = e.maskObject, { gl: n } = this.renderer, i = e._stencilCounter;
    i === 0 && (this.renderer.framebuffer.forceStencil(), n.clearStencil(0), n.clear(n.STENCIL_BUFFER_BIT), n.enable(n.STENCIL_TEST)), e._stencilCounter++;
    const s = e._colorMask;
    s !== 0 && (e._colorMask = 0, n.colorMask(false, false, false, false)), n.stencilFunc(n.EQUAL, i, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.INCR), r.renderable = true, r.render(this.renderer), this.renderer.batch.flush(), r.renderable = false, s !== 0 && (e._colorMask = s, n.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0)), this._useCurrent();
  }
  pop(e) {
    const r = this.renderer.gl;
    if (this.getStackLength() === 0) r.disable(r.STENCIL_TEST);
    else {
      const n = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null, i = n ? n._colorMask : 15;
      i !== 0 && (n._colorMask = 0, r.colorMask(false, false, false, false)), r.stencilOp(r.KEEP, r.KEEP, r.DECR), e.renderable = true, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = false, i !== 0 && (n._colorMask = i, r.colorMask((i & 1) !== 0, (i & 2) !== 0, (i & 4) !== 0, (i & 8) !== 0)), this._useCurrent();
    }
  }
  _useCurrent() {
    const e = this.renderer.gl;
    e.stencilFunc(e.EQUAL, this.getStackLength(), 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
  }
}
g0.extension = { type: L.RendererSystem, name: "stencil" };
W.add(g0);
class y0 {
  constructor(e) {
    this.renderer = e, this.plugins = {}, Object.defineProperties(this.plugins, { extract: { enumerable: false, get() {
      return ie("7.0.0", "renderer.plugins.extract has moved to renderer.extract"), e.extract;
    } }, prepare: { enumerable: false, get() {
      return ie("7.0.0", "renderer.plugins.prepare has moved to renderer.prepare"), e.prepare;
    } }, interaction: { enumerable: false, get() {
      return ie("7.0.0", "renderer.plugins.interaction has been deprecated, use renderer.events"), e.events;
    } } });
  }
  init() {
    const e = this.rendererPlugins;
    for (const r in e) this.plugins[r] = new e[r](this.renderer);
  }
  destroy() {
    for (const e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;
  }
}
y0.extension = { type: [L.RendererSystem, L.CanvasRendererSystem], name: "_plugin" };
W.add(y0);
class v0 {
  constructor(e) {
    this.renderer = e, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new ve(), this.transform = null;
  }
  update(e, r, n, i) {
    this.destinationFrame = e || this.destinationFrame || this.defaultFrame, this.sourceFrame = r || this.sourceFrame || e, this.calculateProjection(this.destinationFrame, this.sourceFrame, n, i), this.transform && this.projectionMatrix.append(this.transform);
    const s = this.renderer;
    s.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, s.globalUniforms.update(), s.shader.shader && s.shader.syncUniformGroup(s.shader.shader.uniforms.globals);
  }
  calculateProjection(e, r, n, i) {
    const s = this.projectionMatrix, o = i ? -1 : 1;
    s.identity(), s.a = 1 / r.width * 2, s.d = o * (1 / r.height * 2), s.tx = -1 - r.x * s.a, s.ty = -o - r.y * s.d;
  }
  setTransform(e) {
  }
  destroy() {
    this.renderer = null;
  }
}
v0.extension = { type: L.RendererSystem, name: "projection" };
W.add(v0);
const wA = new Gf(), yg = new te();
class _0 {
  constructor(e) {
    this.renderer = e, this._tempMatrix = new ve();
  }
  generateTexture(e, r) {
    const { region: n, ...i } = r || {}, s = (n == null ? void 0 : n.copyTo(yg)) || e.getLocalBounds(yg, true), o = i.resolution || this.renderer.resolution;
    s.width = Math.max(s.width, 1 / o), s.height = Math.max(s.height, 1 / o), i.width = s.width, i.height = s.height, i.resolution = o, i.multisample ?? (i.multisample = this.renderer.multisample);
    const a = Jn.create(i);
    this._tempMatrix.tx = -s.x, this._tempMatrix.ty = -s.y;
    const l = e.transform;
    return e.transform = wA, this.renderer.render(e, { renderTexture: a, transform: this._tempMatrix, skipUpdateTransform: !!e.parent, blit: true }), e.transform = l, a;
  }
  destroy() {
  }
}
_0.extension = { type: [L.RendererSystem, L.CanvasRendererSystem], name: "textureGenerator" };
W.add(_0);
const yn = new te(), ys = new te();
class x0 {
  constructor(e) {
    this.renderer = e, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new te(), this.destinationFrame = new te(), this.viewportFrame = new te();
  }
  contextChange() {
    var _a2;
    const e = (_a2 = this.renderer) == null ? void 0 : _a2.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!(e && e.alpha && e.premultipliedAlpha);
  }
  bind(e = null, r, n) {
    const i = this.renderer;
    this.current = e;
    let s, o, a;
    e ? (s = e.baseTexture, a = s.resolution, r || (yn.width = e.frame.width, yn.height = e.frame.height, r = yn), n || (ys.x = e.frame.x, ys.y = e.frame.y, ys.width = r.width, ys.height = r.height, n = ys), o = s.framebuffer) : (a = i.resolution, r || (yn.width = i._view.screen.width, yn.height = i._view.screen.height, r = yn), n || (n = yn, n.width = r.width, n.height = r.height));
    const l = this.viewportFrame;
    l.x = n.x * a, l.y = n.y * a, l.width = n.width * a, l.height = n.height * a, e || (l.y = i.view.height - (l.y + l.height)), l.ceil(), this.renderer.framebuffer.bind(o, l), this.renderer.projection.update(n, r, a, !o), e ? this.renderer.mask.setMaskStack(s.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(r), this.destinationFrame.copyFrom(n);
  }
  clear(e, r) {
    const n = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor, i = ge.shared.setValue(e || n);
    (this.current && this.current.baseTexture.alphaMode > 0 || !this.current && this._rendererPremultipliedAlpha) && i.premultiply(i.alpha);
    const s = this.destinationFrame, o = this.current ? this.current.baseTexture : this.renderer._view.screen, a = s.width !== o.width || s.height !== o.height;
    if (a) {
      let { x: l, y: u, width: h, height: c } = this.viewportFrame;
      l = Math.round(l), u = Math.round(u), h = Math.round(h), c = Math.round(c), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(l, u, h, c);
    }
    this.renderer.framebuffer.clear(i.red, i.green, i.blue, i.alpha, r), a && this.renderer.scissor.pop();
  }
  resize() {
    this.bind(null);
  }
  reset() {
    this.bind(null);
  }
  destroy() {
    this.renderer = null;
  }
}
x0.extension = { type: L.RendererSystem, name: "renderTexture" };
W.add(x0);
class EA {
  constructor(e, r) {
    this.program = e, this.uniformData = r, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {};
  }
  destroy() {
    this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null;
  }
}
function SA(t5, e) {
  const r = {}, n = e.getProgramParameter(t5, e.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = e.getActiveAttrib(t5, i);
    if (s.name.startsWith("gl_")) continue;
    const o = n0(e, s.type), a = { type: o, name: s.name, size: r0(o), location: e.getAttribLocation(t5, s.name) };
    r[s.name] = a;
  }
  return r;
}
function TA(t5, e) {
  const r = {}, n = e.getProgramParameter(t5, e.ACTIVE_UNIFORMS);
  for (let i = 0; i < n; i++) {
    const s = e.getActiveUniform(t5, i), o = s.name.replace(/\[.*?\]$/, ""), a = !!s.name.match(/\[.*?\]$/), l = n0(e, s.type);
    r[o] = { name: o, index: i, type: l, size: s.size, isArray: a, value: e0(l, s.size) };
  }
  return r;
}
function bA(t5, e) {
  var _a2;
  const r = lg(t5, t5.VERTEX_SHADER, e.vertexSrc), n = lg(t5, t5.FRAGMENT_SHADER, e.fragmentSrc), i = t5.createProgram();
  t5.attachShader(i, r), t5.attachShader(i, n);
  const s = (_a2 = e.extra) == null ? void 0 : _a2.transformFeedbackVaryings;
  if (s && (typeof t5.transformFeedbackVaryings != "function" ? console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : t5.transformFeedbackVaryings(i, s.names, s.bufferMode === "separate" ? t5.SEPARATE_ATTRIBS : t5.INTERLEAVED_ATTRIBS)), t5.linkProgram(i), t5.getProgramParameter(i, t5.LINK_STATUS) || eA(t5, i, r, n), e.attributeData = SA(i, t5), e.uniformData = TA(i, t5), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)) {
    const a = Object.keys(e.attributeData);
    a.sort((l, u) => l > u ? 1 : -1);
    for (let l = 0; l < a.length; l++) e.attributeData[a[l]].location = l, t5.bindAttribLocation(i, l, a[l]);
    t5.linkProgram(i);
  }
  t5.deleteShader(r), t5.deleteShader(n);
  const o = {};
  for (const a in e.uniformData) {
    const l = e.uniformData[a];
    o[a] = { location: t5.getUniformLocation(i, a), value: e0(l.type, l.size) };
  }
  return new EA(i, o);
}
function AA(t5, e, r, n, i) {
  r.buffer.update(i);
}
const CA = { float: `
        data[offset] = v;
    `, vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `, vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `, vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `, mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `, mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `, mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    ` }, w0 = { float: 4, vec2: 8, vec3: 12, vec4: 16, int: 4, ivec2: 8, ivec3: 12, ivec4: 16, uint: 4, uvec2: 8, uvec3: 12, uvec4: 16, bool: 4, bvec2: 8, bvec3: 12, bvec4: 16, mat2: 16 * 2, mat3: 16 * 3, mat4: 16 * 4 };
function IA(t5) {
  const e = t5.map((s) => ({ data: s, offset: 0, dataLen: 0, dirty: 0 }));
  let r = 0, n = 0, i = 0;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (r = w0[o.data.type], o.data.size > 1 && (r = Math.max(r, 16) * o.data.size), o.dataLen = r, n % r !== 0 && n < 16) {
      const a = n % r % 16;
      n += a, i += a;
    }
    n + r > 16 ? (i = Math.ceil(i / 16) * 16, o.offset = i, i += r, n = r) : (o.offset = i, n += r, i += r);
  }
  return i = Math.ceil(i / 16) * 16, { uboElements: e, size: i };
}
function RA(t5, e) {
  const r = [];
  for (const n in t5) e[n] && r.push(e[n]);
  return r.sort((n, i) => n.index - i.index), r;
}
function PA(t5, e) {
  if (!t5.autoManage) return { size: 0, syncFunc: AA };
  const r = RA(t5.uniforms, e), { uboElements: n, size: i } = IA(r), s = [`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];
  for (let o = 0; o < n.length; o++) {
    const a = n[o], l = t5.uniforms[a.data.name], u = a.data.name;
    let h = false;
    for (let c = 0; c < Li.length; c++) {
      const d = Li[c];
      if (d.codeUbo && d.test(a.data, l)) {
        s.push(`offset = ${a.offset / 4};`, Li[c].codeUbo(a.data.name, l)), h = true;
        break;
      }
    }
    if (!h) if (a.data.size > 1) {
      const c = r0(a.data.type), d = Math.max(w0[a.data.type] / 16, 1), f = c / d, p = (4 - f % 4) % 4;
      s.push(`
                cv = ud.${u}.value;
                v = uv.${u};
                offset = ${a.offset / 4};

                t = 0;

                for(var i=0; i < ${a.data.size * d}; i++)
                {
                    for(var j = 0; j < ${f}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${p};
                }

                `);
    } else {
      const c = CA[a.data.type];
      s.push(`
                cv = ud.${u}.value;
                v = uv.${u};
                offset = ${a.offset / 4};
                ${c};
                `);
    }
  }
  return s.push(`
       renderer.buffer.update(buffer);
    `), { size: i, syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", s.join(`
`)) };
}
let MA = 0;
const ca = { textureCount: 0, uboCount: 0 };
class E0 {
  constructor(e) {
    this.destroyed = false, this.renderer = e, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = MA++;
  }
  systemCheck() {
    if (!rA()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
  }
  contextChange(e) {
    this.gl = e, this.reset();
  }
  bind(e, r) {
    e.disposeRunner.add(this), e.uniforms.globals = this.renderer.globalUniforms;
    const n = e.program, i = n.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(e);
    return this.shader = e, this.program !== n && (this.program = n, this.gl.useProgram(i.program)), r || (ca.textureCount = 0, ca.uboCount = 0, this.syncUniformGroup(e.uniformGroup, ca)), i;
  }
  setUniforms(e) {
    const r = this.shader.program, n = r.glPrograms[this.renderer.CONTEXT_UID];
    r.syncUniforms(n.uniformData, e, this.renderer);
  }
  syncUniformGroup(e, r) {
    const n = this.getGlProgram();
    (!e.static || e.dirtyId !== n.uniformDirtyGroups[e.id]) && (n.uniformDirtyGroups[e.id] = e.dirtyId, this.syncUniforms(e, n, r));
  }
  syncUniforms(e, r, n) {
    (e.syncUniforms[this.shader.program.id] || this.createSyncGroups(e))(r.uniformData, e.uniforms, this.renderer, n);
  }
  createSyncGroups(e) {
    const r = this.getSignature(e, this.shader.program.uniformData, "u");
    return this.cache[r] || (this.cache[r] = qb(e, this.shader.program.uniformData)), e.syncUniforms[this.shader.program.id] = this.cache[r], e.syncUniforms[this.shader.program.id];
  }
  syncUniformBufferGroup(e, r) {
    const n = this.getGlProgram();
    if (!e.static || e.dirtyId !== 0 || !n.uniformGroups[e.id]) {
      e.dirtyId = 0;
      const i = n.uniformGroups[e.id] || this.createSyncBufferGroup(e, n, r);
      e.buffer.update(), i(n.uniformData, e.uniforms, this.renderer, ca, e.buffer);
    }
    this.renderer.buffer.bindBufferBase(e.buffer, n.uniformBufferBindings[r]);
  }
  createSyncBufferGroup(e, r, n) {
    const { gl: i } = this.renderer;
    this.renderer.buffer.bind(e.buffer);
    const s = this.gl.getUniformBlockIndex(r.program, n);
    r.uniformBufferBindings[n] = this.shader.uniformBindCount, i.uniformBlockBinding(r.program, s, this.shader.uniformBindCount), this.shader.uniformBindCount++;
    const o = this.getSignature(e, this.shader.program.uniformData, "ubo");
    let a = this._uboCache[o];
    if (a || (a = this._uboCache[o] = PA(e, this.shader.program.uniformData)), e.autoManage) {
      const l = new Float32Array(a.size / 4);
      e.buffer.update(l);
    }
    return r.uniformGroups[e.id] = a.syncFunc, r.uniformGroups[e.id];
  }
  getSignature(e, r, n) {
    const i = e.uniforms, s = [`${n}-`];
    for (const o in i) s.push(o), r[o] && s.push(r[o].type);
    return s.join("-");
  }
  getGlProgram() {
    return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null;
  }
  generateProgram(e) {
    const r = this.gl, n = e.program, i = bA(r, n);
    return n.glPrograms[this.renderer.CONTEXT_UID] = i, i;
  }
  reset() {
    this.program = null, this.shader = null;
  }
  disposeShader(e) {
    this.shader === e && (this.shader = null);
  }
  destroy() {
    this.renderer = null, this.destroyed = true;
  }
}
E0.extension = { type: L.RendererSystem, name: "shader" };
W.add(E0);
class Pl {
  constructor(e) {
    this.renderer = e;
  }
  run(e) {
    const { renderer: r } = this;
    r.runners.init.emit(r.options), e.hello && console.log(`PixiJS 7.4.3 - ${r.rendererLogId} - https://pixijs.com`), r.resize(r.screen.width, r.screen.height);
  }
  destroy() {
  }
}
Pl.defaultOptions = { hello: false }, Pl.extension = { type: [L.RendererSystem, L.CanvasRendererSystem], name: "startup" };
W.add(Pl);
function kA(t5, e = []) {
  return e[Q.NORMAL] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.ADD] = [t5.ONE, t5.ONE], e[Q.MULTIPLY] = [t5.DST_COLOR, t5.ONE_MINUS_SRC_ALPHA, t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.SCREEN] = [t5.ONE, t5.ONE_MINUS_SRC_COLOR, t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.OVERLAY] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.DARKEN] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.LIGHTEN] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.COLOR_DODGE] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.COLOR_BURN] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.HARD_LIGHT] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.SOFT_LIGHT] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.DIFFERENCE] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.EXCLUSION] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.HUE] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.SATURATION] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.COLOR] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.LUMINOSITY] = [t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.NONE] = [0, 0], e[Q.NORMAL_NPM] = [t5.SRC_ALPHA, t5.ONE_MINUS_SRC_ALPHA, t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.ADD_NPM] = [t5.SRC_ALPHA, t5.ONE, t5.ONE, t5.ONE], e[Q.SCREEN_NPM] = [t5.SRC_ALPHA, t5.ONE_MINUS_SRC_COLOR, t5.ONE, t5.ONE_MINUS_SRC_ALPHA], e[Q.SRC_IN] = [t5.DST_ALPHA, t5.ZERO], e[Q.SRC_OUT] = [t5.ONE_MINUS_DST_ALPHA, t5.ZERO], e[Q.SRC_ATOP] = [t5.DST_ALPHA, t5.ONE_MINUS_SRC_ALPHA], e[Q.DST_OVER] = [t5.ONE_MINUS_DST_ALPHA, t5.ONE], e[Q.DST_IN] = [t5.ZERO, t5.SRC_ALPHA], e[Q.DST_OUT] = [t5.ZERO, t5.ONE_MINUS_SRC_ALPHA], e[Q.DST_ATOP] = [t5.ONE_MINUS_DST_ALPHA, t5.SRC_ALPHA], e[Q.XOR] = [t5.ONE_MINUS_DST_ALPHA, t5.ONE_MINUS_SRC_ALPHA], e[Q.SUBTRACT] = [t5.ONE, t5.ONE, t5.ONE, t5.ONE, t5.FUNC_REVERSE_SUBTRACT, t5.FUNC_ADD], e;
}
const FA = 0, DA = 1, BA = 2, NA = 3, OA = 4, LA = 5, S0 = class od {
  constructor() {
    this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = Q.NONE, this._blendEq = false, this.map = [], this.map[FA] = this.setBlend, this.map[DA] = this.setOffset, this.map[BA] = this.setCullFace, this.map[NA] = this.setDepthTest, this.map[OA] = this.setFrontFace, this.map[LA] = this.setDepthMask, this.checks = [], this.defaultState = new pr(), this.defaultState.blend = true;
  }
  contextChange(e) {
    this.gl = e, this.blendModes = kA(e), this.set(this.defaultState), this.reset();
  }
  set(e) {
    if (e = e || this.defaultState, this.stateId !== e.data) {
      let r = this.stateId ^ e.data, n = 0;
      for (; r; ) r & 1 && this.map[n].call(this, !!(e.data & 1 << n)), r = r >> 1, n++;
      this.stateId = e.data;
    }
    for (let r = 0; r < this.checks.length; r++) this.checks[r](this, e);
  }
  forceState(e) {
    e = e || this.defaultState;
    for (let r = 0; r < this.map.length; r++) this.map[r].call(this, !!(e.data & 1 << r));
    for (let r = 0; r < this.checks.length; r++) this.checks[r](this, e);
    this.stateId = e.data;
  }
  setBlend(e) {
    this.updateCheck(od.checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND);
  }
  setOffset(e) {
    this.updateCheck(od.checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
  }
  setDepthTest(e) {
    this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST);
  }
  setDepthMask(e) {
    this.gl.depthMask(e);
  }
  setCullFace(e) {
    this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE);
  }
  setFrontFace(e) {
    this.gl.frontFace(this.gl[e ? "CW" : "CCW"]);
  }
  setBlendMode(e) {
    if (e === this.blendMode) return;
    this.blendMode = e;
    const r = this.blendModes[e], n = this.gl;
    r.length === 2 ? n.blendFunc(r[0], r[1]) : n.blendFuncSeparate(r[0], r[1], r[2], r[3]), r.length === 6 ? (this._blendEq = true, n.blendEquationSeparate(r[4], r[5])) : this._blendEq && (this._blendEq = false, n.blendEquationSeparate(n.FUNC_ADD, n.FUNC_ADD));
  }
  setPolygonOffset(e, r) {
    this.gl.polygonOffset(e, r);
  }
  reset() {
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false), this.forceState(this.defaultState), this._blendEq = true, this.blendMode = -1, this.setBlendMode(0);
  }
  updateCheck(e, r) {
    const n = this.checks.indexOf(e);
    r && n === -1 ? this.checks.push(e) : !r && n !== -1 && this.checks.splice(n, 1);
  }
  static checkBlendMode(e, r) {
    e.setBlendMode(r.blendMode);
  }
  static checkPolygonOffset(e, r) {
    e.setPolygonOffset(1, r.polygonOffset);
  }
  destroy() {
    this.gl = null;
  }
};
S0.extension = { type: L.RendererSystem, name: "state" };
let UA = S0;
W.add(UA);
class GA extends Ao {
  constructor() {
    super(...arguments), this.runners = {}, this._systemsHash = {};
  }
  setup(e) {
    this.addRunners(...e.runners);
    const r = (e.priority ?? []).filter((i) => e.systems[i]), n = [...r, ...Object.keys(e.systems).filter((i) => !r.includes(i))];
    for (const i of n) this.addSystem(e.systems[i], i);
  }
  addRunners(...e) {
    e.forEach((r) => {
      this.runners[r] = new $t(r);
    });
  }
  addSystem(e, r) {
    const n = new e(this);
    if (this[r]) throw new Error(`Whoops! The name "${r}" is already in use`);
    this[r] = n, this._systemsHash[r] = n;
    for (const i in this.runners) this.runners[i].add(n);
    return this;
  }
  emitWithCustomOptions(e, r) {
    const n = Object.keys(this._systemsHash);
    e.items.forEach((i) => {
      const s = n.find((o) => this._systemsHash[o] === i);
      i[e.name](r[s]);
    });
  }
  destroy() {
    Object.values(this.runners).forEach((e) => {
      e.destroy();
    }), this._systemsHash = {};
  }
}
const Cs = class ja {
  constructor(e) {
    this.renderer = e, this.count = 0, this.checkCount = 0, this.maxIdle = ja.defaultMaxIdle, this.checkCountMax = ja.defaultCheckCountMax, this.mode = ja.defaultMode;
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && (this.count++, this.mode !== kf.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())));
  }
  run() {
    const e = this.renderer.texture, r = e.managedTextures;
    let n = false;
    for (let i = 0; i < r.length; i++) {
      const s = r[i];
      s.resource && this.count - s.touched > this.maxIdle && (e.destroyTexture(s, true), r[i] = null, n = true);
    }
    if (n) {
      let i = 0;
      for (let s = 0; s < r.length; s++) r[s] !== null && (r[i++] = r[s]);
      r.length = i;
    }
  }
  unload(e) {
    const r = this.renderer.texture, n = e._texture;
    n && !n.framebuffer && r.destroyTexture(n);
    for (let i = e.children.length - 1; i >= 0; i--) this.unload(e.children[i]);
  }
  destroy() {
    this.renderer = null;
  }
};
Cs.defaultMode = kf.AUTO, Cs.defaultMaxIdle = 60 * 60, Cs.defaultCheckCountMax = 60 * 10, Cs.extension = { type: L.RendererSystem, name: "textureGC" };
let An = Cs;
W.add(An);
class Ah {
  constructor(e) {
    this.texture = e, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = false, this.wrapMode = 33071, this.type = Z.UNSIGNED_BYTE, this.internalFormat = D.RGBA, this.samplerType = 0;
  }
}
function zA(t5) {
  let e;
  return "WebGL2RenderingContext" in globalThis && t5 instanceof globalThis.WebGL2RenderingContext ? e = { [t5.RGB]: G.FLOAT, [t5.RGBA]: G.FLOAT, [t5.ALPHA]: G.FLOAT, [t5.LUMINANCE]: G.FLOAT, [t5.LUMINANCE_ALPHA]: G.FLOAT, [t5.R8]: G.FLOAT, [t5.R8_SNORM]: G.FLOAT, [t5.RG8]: G.FLOAT, [t5.RG8_SNORM]: G.FLOAT, [t5.RGB8]: G.FLOAT, [t5.RGB8_SNORM]: G.FLOAT, [t5.RGB565]: G.FLOAT, [t5.RGBA4]: G.FLOAT, [t5.RGB5_A1]: G.FLOAT, [t5.RGBA8]: G.FLOAT, [t5.RGBA8_SNORM]: G.FLOAT, [t5.RGB10_A2]: G.FLOAT, [t5.RGB10_A2UI]: G.FLOAT, [t5.SRGB8]: G.FLOAT, [t5.SRGB8_ALPHA8]: G.FLOAT, [t5.R16F]: G.FLOAT, [t5.RG16F]: G.FLOAT, [t5.RGB16F]: G.FLOAT, [t5.RGBA16F]: G.FLOAT, [t5.R32F]: G.FLOAT, [t5.RG32F]: G.FLOAT, [t5.RGB32F]: G.FLOAT, [t5.RGBA32F]: G.FLOAT, [t5.R11F_G11F_B10F]: G.FLOAT, [t5.RGB9_E5]: G.FLOAT, [t5.R8I]: G.INT, [t5.R8UI]: G.UINT, [t5.R16I]: G.INT, [t5.R16UI]: G.UINT, [t5.R32I]: G.INT, [t5.R32UI]: G.UINT, [t5.RG8I]: G.INT, [t5.RG8UI]: G.UINT, [t5.RG16I]: G.INT, [t5.RG16UI]: G.UINT, [t5.RG32I]: G.INT, [t5.RG32UI]: G.UINT, [t5.RGB8I]: G.INT, [t5.RGB8UI]: G.UINT, [t5.RGB16I]: G.INT, [t5.RGB16UI]: G.UINT, [t5.RGB32I]: G.INT, [t5.RGB32UI]: G.UINT, [t5.RGBA8I]: G.INT, [t5.RGBA8UI]: G.UINT, [t5.RGBA16I]: G.INT, [t5.RGBA16UI]: G.UINT, [t5.RGBA32I]: G.INT, [t5.RGBA32UI]: G.UINT, [t5.DEPTH_COMPONENT16]: G.FLOAT, [t5.DEPTH_COMPONENT24]: G.FLOAT, [t5.DEPTH_COMPONENT32F]: G.FLOAT, [t5.DEPTH_STENCIL]: G.FLOAT, [t5.DEPTH24_STENCIL8]: G.FLOAT, [t5.DEPTH32F_STENCIL8]: G.FLOAT } : e = { [t5.RGB]: G.FLOAT, [t5.RGBA]: G.FLOAT, [t5.ALPHA]: G.FLOAT, [t5.LUMINANCE]: G.FLOAT, [t5.LUMINANCE_ALPHA]: G.FLOAT, [t5.DEPTH_STENCIL]: G.FLOAT }, e;
}
function HA(t5) {
  let e;
  return "WebGL2RenderingContext" in globalThis && t5 instanceof globalThis.WebGL2RenderingContext ? e = { [Z.UNSIGNED_BYTE]: { [D.RGBA]: t5.RGBA8, [D.RGB]: t5.RGB8, [D.RG]: t5.RG8, [D.RED]: t5.R8, [D.RGBA_INTEGER]: t5.RGBA8UI, [D.RGB_INTEGER]: t5.RGB8UI, [D.RG_INTEGER]: t5.RG8UI, [D.RED_INTEGER]: t5.R8UI, [D.ALPHA]: t5.ALPHA, [D.LUMINANCE]: t5.LUMINANCE, [D.LUMINANCE_ALPHA]: t5.LUMINANCE_ALPHA }, [Z.BYTE]: { [D.RGBA]: t5.RGBA8_SNORM, [D.RGB]: t5.RGB8_SNORM, [D.RG]: t5.RG8_SNORM, [D.RED]: t5.R8_SNORM, [D.RGBA_INTEGER]: t5.RGBA8I, [D.RGB_INTEGER]: t5.RGB8I, [D.RG_INTEGER]: t5.RG8I, [D.RED_INTEGER]: t5.R8I }, [Z.UNSIGNED_SHORT]: { [D.RGBA_INTEGER]: t5.RGBA16UI, [D.RGB_INTEGER]: t5.RGB16UI, [D.RG_INTEGER]: t5.RG16UI, [D.RED_INTEGER]: t5.R16UI, [D.DEPTH_COMPONENT]: t5.DEPTH_COMPONENT16 }, [Z.SHORT]: { [D.RGBA_INTEGER]: t5.RGBA16I, [D.RGB_INTEGER]: t5.RGB16I, [D.RG_INTEGER]: t5.RG16I, [D.RED_INTEGER]: t5.R16I }, [Z.UNSIGNED_INT]: { [D.RGBA_INTEGER]: t5.RGBA32UI, [D.RGB_INTEGER]: t5.RGB32UI, [D.RG_INTEGER]: t5.RG32UI, [D.RED_INTEGER]: t5.R32UI, [D.DEPTH_COMPONENT]: t5.DEPTH_COMPONENT24 }, [Z.INT]: { [D.RGBA_INTEGER]: t5.RGBA32I, [D.RGB_INTEGER]: t5.RGB32I, [D.RG_INTEGER]: t5.RG32I, [D.RED_INTEGER]: t5.R32I }, [Z.FLOAT]: { [D.RGBA]: t5.RGBA32F, [D.RGB]: t5.RGB32F, [D.RG]: t5.RG32F, [D.RED]: t5.R32F, [D.DEPTH_COMPONENT]: t5.DEPTH_COMPONENT32F }, [Z.HALF_FLOAT]: { [D.RGBA]: t5.RGBA16F, [D.RGB]: t5.RGB16F, [D.RG]: t5.RG16F, [D.RED]: t5.R16F }, [Z.UNSIGNED_SHORT_5_6_5]: { [D.RGB]: t5.RGB565 }, [Z.UNSIGNED_SHORT_4_4_4_4]: { [D.RGBA]: t5.RGBA4 }, [Z.UNSIGNED_SHORT_5_5_5_1]: { [D.RGBA]: t5.RGB5_A1 }, [Z.UNSIGNED_INT_2_10_10_10_REV]: { [D.RGBA]: t5.RGB10_A2, [D.RGBA_INTEGER]: t5.RGB10_A2UI }, [Z.UNSIGNED_INT_10F_11F_11F_REV]: { [D.RGB]: t5.R11F_G11F_B10F }, [Z.UNSIGNED_INT_5_9_9_9_REV]: { [D.RGB]: t5.RGB9_E5 }, [Z.UNSIGNED_INT_24_8]: { [D.DEPTH_STENCIL]: t5.DEPTH24_STENCIL8 }, [Z.FLOAT_32_UNSIGNED_INT_24_8_REV]: { [D.DEPTH_STENCIL]: t5.DEPTH32F_STENCIL8 } } : e = { [Z.UNSIGNED_BYTE]: { [D.RGBA]: t5.RGBA, [D.RGB]: t5.RGB, [D.ALPHA]: t5.ALPHA, [D.LUMINANCE]: t5.LUMINANCE, [D.LUMINANCE_ALPHA]: t5.LUMINANCE_ALPHA }, [Z.UNSIGNED_SHORT_5_6_5]: { [D.RGB]: t5.RGB }, [Z.UNSIGNED_SHORT_4_4_4_4]: { [D.RGBA]: t5.RGBA }, [Z.UNSIGNED_SHORT_5_5_5_1]: { [D.RGBA]: t5.RGBA } }, e;
}
class T0 {
  constructor(e) {
    this.renderer = e, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = false, this.unknownTexture = new ee(), this.hasIntegerTextures = false;
  }
  contextChange() {
    const e = this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = HA(e), this.samplerTypes = zA(e);
    const r = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
    this.boundTextures.length = r;
    for (let i = 0; i < r; i++) this.boundTextures[i] = null;
    this.emptyTextures = {};
    const n = new Ah(e.createTexture());
    e.bindTexture(e.TEXTURE_2D, n.texture), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[e.TEXTURE_2D] = n, this.emptyTextures[e.TEXTURE_CUBE_MAP] = new Ah(e.createTexture()), e.bindTexture(e.TEXTURE_CUBE_MAP, this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);
    for (let i = 0; i < 6; i++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, null);
    e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR);
    for (let i = 0; i < this.boundTextures.length; i++) this.bind(null, i);
  }
  bind(e, r = 0) {
    const { gl: n } = this;
    if (e = e == null ? void 0 : e.castToBaseTexture(), (e == null ? void 0 : e.valid) && !e.parentTextureArray) {
      e.touched = this.renderer.textureGC.count;
      const i = e._glTextures[this.CONTEXT_UID] || this.initTexture(e);
      this.boundTextures[r] !== e && (this.currentLocation !== r && (this.currentLocation = r, n.activeTexture(n.TEXTURE0 + r)), n.bindTexture(e.target, i.texture)), i.dirtyId !== e.dirtyId ? (this.currentLocation !== r && (this.currentLocation = r, n.activeTexture(n.TEXTURE0 + r)), this.updateTexture(e)) : i.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(e), this.boundTextures[r] = e;
    } else this.currentLocation !== r && (this.currentLocation = r, n.activeTexture(n.TEXTURE0 + r)), n.bindTexture(n.TEXTURE_2D, this.emptyTextures[n.TEXTURE_2D].texture), this.boundTextures[r] = null;
  }
  reset() {
    this._unknownBoundTextures = true, this.hasIntegerTextures = false, this.currentLocation = -1;
    for (let e = 0; e < this.boundTextures.length; e++) this.boundTextures[e] = this.unknownTexture;
  }
  unbind(e) {
    const { gl: r, boundTextures: n } = this;
    if (this._unknownBoundTextures) {
      this._unknownBoundTextures = false;
      for (let i = 0; i < n.length; i++) n[i] === this.unknownTexture && this.bind(null, i);
    }
    for (let i = 0; i < n.length; i++) n[i] === e && (this.currentLocation !== i && (r.activeTexture(r.TEXTURE0 + i), this.currentLocation = i), r.bindTexture(e.target, this.emptyTextures[e.target].texture), n[i] = null);
  }
  ensureSamplerType(e) {
    const { boundTextures: r, hasIntegerTextures: n, CONTEXT_UID: i } = this;
    if (n) for (let s = e - 1; s >= 0; --s) {
      const o = r[s];
      o && o._glTextures[i].samplerType !== G.FLOAT && this.renderer.texture.unbind(o);
    }
  }
  initTexture(e) {
    const r = new Ah(this.gl.createTexture());
    return r.dirtyId = -1, e._glTextures[this.CONTEXT_UID] = r, this.managedTextures.push(e), e.on("dispose", this.destroyTexture, this), r;
  }
  initTextureType(e, r) {
    var _a2;
    r.internalFormat = ((_a2 = this.internalFormats[e.type]) == null ? void 0 : _a2[e.format]) ?? e.format, r.samplerType = this.samplerTypes[r.internalFormat] ?? G.FLOAT, this.webGLVersion === 2 && e.type === Z.HALF_FLOAT ? r.type = this.gl.HALF_FLOAT : r.type = e.type;
  }
  updateTexture(e) {
    var _a2;
    const r = e._glTextures[this.CONTEXT_UID];
    if (!r) return;
    const n = this.renderer;
    if (this.initTextureType(e, r), (_a2 = e.resource) == null ? void 0 : _a2.upload(n, e, r)) r.samplerType !== G.FLOAT && (this.hasIntegerTextures = true);
    else {
      const i = e.realWidth, s = e.realHeight, o = n.gl;
      (r.width !== i || r.height !== s || r.dirtyId < 0) && (r.width = i, r.height = s, o.texImage2D(e.target, 0, r.internalFormat, i, s, 0, e.format, r.type, null));
    }
    e.dirtyStyleId !== r.dirtyStyleId && this.updateTextureStyle(e), r.dirtyId = e.dirtyId;
  }
  destroyTexture(e, r) {
    const { gl: n } = this;
    if (e = e.castToBaseTexture(), e._glTextures[this.CONTEXT_UID] && (this.unbind(e), n.deleteTexture(e._glTextures[this.CONTEXT_UID].texture), e.off("dispose", this.destroyTexture, this), delete e._glTextures[this.CONTEXT_UID], !r)) {
      const i = this.managedTextures.indexOf(e);
      i !== -1 && Oi(this.managedTextures, i, 1);
    }
  }
  updateTextureStyle(e) {
    var _a2;
    const r = e._glTextures[this.CONTEXT_UID];
    r && ((e.mipmap === fr.POW2 || this.webGLVersion !== 2) && !e.isPowerOfTwo ? r.mipmap = false : r.mipmap = e.mipmap >= 1, this.webGLVersion !== 2 && !e.isPowerOfTwo ? r.wrapMode = an.CLAMP : r.wrapMode = e.wrapMode, ((_a2 = e.resource) == null ? void 0 : _a2.style(this.renderer, e, r)) || this.setStyle(e, r), r.dirtyStyleId = e.dirtyStyleId);
  }
  setStyle(e, r) {
    const n = this.gl;
    if (r.mipmap && e.mipmap !== fr.ON_MANUAL && n.generateMipmap(e.target), n.texParameteri(e.target, n.TEXTURE_WRAP_S, r.wrapMode), n.texParameteri(e.target, n.TEXTURE_WRAP_T, r.wrapMode), r.mipmap) {
      n.texParameteri(e.target, n.TEXTURE_MIN_FILTER, e.scaleMode === Er.LINEAR ? n.LINEAR_MIPMAP_LINEAR : n.NEAREST_MIPMAP_NEAREST);
      const i = this.renderer.context.extensions.anisotropicFiltering;
      if (i && e.anisotropicLevel > 0 && e.scaleMode === Er.LINEAR) {
        const s = Math.min(e.anisotropicLevel, n.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
        n.texParameterf(e.target, i.TEXTURE_MAX_ANISOTROPY_EXT, s);
      }
    } else n.texParameteri(e.target, n.TEXTURE_MIN_FILTER, e.scaleMode === Er.LINEAR ? n.LINEAR : n.NEAREST);
    n.texParameteri(e.target, n.TEXTURE_MAG_FILTER, e.scaleMode === Er.LINEAR ? n.LINEAR : n.NEAREST);
  }
  destroy() {
    this.renderer = null;
  }
}
T0.extension = { type: L.RendererSystem, name: "texture" };
W.add(T0);
class b0 {
  constructor(e) {
    this.renderer = e;
  }
  contextChange() {
    this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  bind(e) {
    const { gl: r, CONTEXT_UID: n } = this, i = e._glTransformFeedbacks[n] || this.createGLTransformFeedback(e);
    r.bindTransformFeedback(r.TRANSFORM_FEEDBACK, i);
  }
  unbind() {
    const { gl: e } = this;
    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null);
  }
  beginTransformFeedback(e, r) {
    const { gl: n, renderer: i } = this;
    r && i.shader.bind(r), n.beginTransformFeedback(e);
  }
  endTransformFeedback() {
    const { gl: e } = this;
    e.endTransformFeedback();
  }
  createGLTransformFeedback(e) {
    const { gl: r, renderer: n, CONTEXT_UID: i } = this, s = r.createTransformFeedback();
    e._glTransformFeedbacks[i] = s, r.bindTransformFeedback(r.TRANSFORM_FEEDBACK, s);
    for (let o = 0; o < e.buffers.length; o++) {
      const a = e.buffers[o];
      a && (n.buffer.update(a), a._glBuffers[i].refCount++, r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER, o, a._glBuffers[i].buffer || null));
    }
    return r.bindTransformFeedback(r.TRANSFORM_FEEDBACK, null), e.disposeRunner.add(this), s;
  }
  disposeTransformFeedback(e, r) {
    const n = e._glTransformFeedbacks[this.CONTEXT_UID], i = this.gl;
    e.disposeRunner.remove(this);
    const s = this.renderer.buffer;
    if (s) for (let o = 0; o < e.buffers.length; o++) {
      const a = e.buffers[o];
      if (!a) continue;
      const l = a._glBuffers[this.CONTEXT_UID];
      l && (l.refCount--, l.refCount === 0 && !r && s.dispose(a, r));
    }
    n && (r || i.deleteTransformFeedback(n), delete e._glTransformFeedbacks[this.CONTEXT_UID]);
  }
  destroy() {
    this.renderer = null;
  }
}
b0.extension = { type: L.RendererSystem, name: "transformFeedback" };
W.add(b0);
class Ml {
  constructor(e) {
    this.renderer = e;
  }
  init(e) {
    this.screen = new te(0, 0, e.width, e.height), this.element = e.view || H.ADAPTER.createCanvas(), this.resolution = e.resolution || H.RESOLUTION, this.autoDensity = !!e.autoDensity;
  }
  resizeView(e, r) {
    this.element.width = Math.round(e * this.resolution), this.element.height = Math.round(r * this.resolution);
    const n = this.element.width / this.resolution, i = this.element.height / this.resolution;
    this.screen.width = n, this.screen.height = i, this.autoDensity && (this.element.style.width = `${n}px`, this.element.style.height = `${i}px`), this.renderer.emit("resize", n, i), this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
  }
  destroy(e) {
    var _a2;
    e && ((_a2 = this.element.parentNode) == null ? void 0 : _a2.removeChild(this.element)), this.renderer = null, this.element = null, this.screen = null;
  }
}
Ml.defaultOptions = { width: 800, height: 600, resolution: void 0, autoDensity: false }, Ml.extension = { type: [L.RendererSystem, L.CanvasRendererSystem], name: "_view" };
W.add(Ml);
H.PREFER_ENV = qn.WEBGL2;
H.STRICT_TEXTURE_CACHE = false;
H.RENDER_OPTIONS = { ...Rl.defaultOptions, ...Il.defaultOptions, ...Ml.defaultOptions, ...Pl.defaultOptions };
Object.defineProperties(H, { WRAP_MODE: { get() {
  return ee.defaultOptions.wrapMode;
}, set(t5) {
  ie("7.1.0", "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"), ee.defaultOptions.wrapMode = t5;
} }, SCALE_MODE: { get() {
  return ee.defaultOptions.scaleMode;
}, set(t5) {
  ie("7.1.0", "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"), ee.defaultOptions.scaleMode = t5;
} }, MIPMAP_TEXTURES: { get() {
  return ee.defaultOptions.mipmap;
}, set(t5) {
  ie("7.1.0", "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"), ee.defaultOptions.mipmap = t5;
} }, ANISOTROPIC_LEVEL: { get() {
  return ee.defaultOptions.anisotropicLevel;
}, set(t5) {
  ie("7.1.0", "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"), ee.defaultOptions.anisotropicLevel = t5;
} }, FILTER_RESOLUTION: { get() {
  return ie("7.1.0", "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"), it.defaultResolution;
}, set(t5) {
  it.defaultResolution = t5;
} }, FILTER_MULTISAMPLE: { get() {
  return ie("7.1.0", "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"), it.defaultMultisample;
}, set(t5) {
  it.defaultMultisample = t5;
} }, SPRITE_MAX_TEXTURES: { get() {
  return bn.defaultMaxTextures;
}, set(t5) {
  ie("7.1.0", "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"), bn.defaultMaxTextures = t5;
} }, SPRITE_BATCH_SIZE: { get() {
  return bn.defaultBatchSize;
}, set(t5) {
  ie("7.1.0", "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"), bn.defaultBatchSize = t5;
} }, CAN_UPLOAD_SAME_BUFFER: { get() {
  return bn.canUploadSameBuffer;
}, set(t5) {
  ie("7.1.0", "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"), bn.canUploadSameBuffer = t5;
} }, GC_MODE: { get() {
  return An.defaultMode;
}, set(t5) {
  ie("7.1.0", "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"), An.defaultMode = t5;
} }, GC_MAX_IDLE: { get() {
  return An.defaultMaxIdle;
}, set(t5) {
  ie("7.1.0", "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"), An.defaultMaxIdle = t5;
} }, GC_MAX_CHECK_COUNT: { get() {
  return An.defaultCheckCountMax;
}, set(t5) {
  ie("7.1.0", "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"), An.defaultCheckCountMax = t5;
} }, PRECISION_VERTEX: { get() {
  return br.defaultVertexPrecision;
}, set(t5) {
  ie("7.1.0", "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"), br.defaultVertexPrecision = t5;
} }, PRECISION_FRAGMENT: { get() {
  return br.defaultFragmentPrecision;
}, set(t5) {
  ie("7.1.0", "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"), br.defaultFragmentPrecision = t5;
} } });
var Yn = ((t5) => (t5[t5.INTERACTION = 50] = "INTERACTION", t5[t5.HIGH = 25] = "HIGH", t5[t5.NORMAL = 0] = "NORMAL", t5[t5.LOW = -25] = "LOW", t5[t5.UTILITY = -50] = "UTILITY", t5))(Yn || {});
class Ch {
  constructor(e, r = null, n = 0, i = false) {
    this.next = null, this.previous = null, this._destroyed = false, this.fn = e, this.context = r, this.priority = n, this.once = i;
  }
  match(e, r = null) {
    return this.fn === e && this.context === r;
  }
  emit(e) {
    this.fn && (this.context ? this.fn.call(this.context, e) : this.fn(e));
    const r = this.next;
    return this.once && this.destroy(true), this._destroyed && (this.next = null), r;
  }
  connect(e) {
    this.previous = e, e.next && (e.next.previous = this), this.next = e.next, e.next = this;
  }
  destroy(e = false) {
    this._destroyed = true, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
    const r = this.next;
    return this.next = e ? null : r, this.previous = null, r;
  }
}
const A0 = class pt {
  constructor() {
    this.autoStart = false, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = false, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = false, this._lastFrame = -1, this._head = new Ch(null, null, 1 / 0), this.deltaMS = 1 / pt.targetFPMS, this.elapsedMS = 1 / pt.targetFPMS, this._tick = (e) => {
      this._requestId = null, this.started && (this.update(e), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)));
    };
  }
  _requestIfNeeded() {
    this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick));
  }
  _cancelIfNeeded() {
    this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null);
  }
  _startIfPossible() {
    this.started ? this._requestIfNeeded() : this.autoStart && this.start();
  }
  add(e, r, n = Yn.NORMAL) {
    return this._addListener(new Ch(e, r, n));
  }
  addOnce(e, r, n = Yn.NORMAL) {
    return this._addListener(new Ch(e, r, n, true));
  }
  _addListener(e) {
    let r = this._head.next, n = this._head;
    if (!r) e.connect(n);
    else {
      for (; r; ) {
        if (e.priority > r.priority) {
          e.connect(n);
          break;
        }
        n = r, r = r.next;
      }
      e.previous || e.connect(n);
    }
    return this._startIfPossible(), this;
  }
  remove(e, r) {
    let n = this._head.next;
    for (; n; ) n.match(e, r) ? n = n.destroy() : n = n.next;
    return this._head.next || this._cancelIfNeeded(), this;
  }
  get count() {
    if (!this._head) return 0;
    let e = 0, r = this._head;
    for (; r = r.next; ) e++;
    return e;
  }
  start() {
    this.started || (this.started = true, this._requestIfNeeded());
  }
  stop() {
    this.started && (this.started = false, this._cancelIfNeeded());
  }
  destroy() {
    if (!this._protected) {
      this.stop();
      let e = this._head.next;
      for (; e; ) e = e.destroy(true);
      this._head.destroy(), this._head = null;
    }
  }
  update(e = performance.now()) {
    let r;
    if (e > this.lastTime) {
      if (r = this.elapsedMS = e - this.lastTime, r > this._maxElapsedMS && (r = this._maxElapsedMS), r *= this.speed, this._minElapsedMS) {
        const s = e - this._lastFrame | 0;
        if (s < this._minElapsedMS) return;
        this._lastFrame = e - s % this._minElapsedMS;
      }
      this.deltaMS = r, this.deltaTime = this.deltaMS * pt.targetFPMS;
      const n = this._head;
      let i = n.next;
      for (; i; ) i = i.emit(this.deltaTime);
      n.next || this._cancelIfNeeded();
    } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    this.lastTime = e;
  }
  get FPS() {
    return 1e3 / this.elapsedMS;
  }
  get minFPS() {
    return 1e3 / this._maxElapsedMS;
  }
  set minFPS(e) {
    const r = Math.min(this.maxFPS, e), n = Math.min(Math.max(0, r) / 1e3, pt.targetFPMS);
    this._maxElapsedMS = 1 / n;
  }
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
  }
  set maxFPS(e) {
    if (e === 0) this._minElapsedMS = 0;
    else {
      const r = Math.max(this.minFPS, e);
      this._minElapsedMS = 1 / (r / 1e3);
    }
  }
  static get shared() {
    if (!pt._shared) {
      const e = pt._shared = new pt();
      e.autoStart = true, e._protected = true;
    }
    return pt._shared;
  }
  static get system() {
    if (!pt._system) {
      const e = pt._system = new pt();
      e.autoStart = true, e._protected = true;
    }
    return pt._system;
  }
};
A0.targetFPMS = 0.06;
let yt = A0;
Object.defineProperties(H, { TARGET_FPMS: { get() {
  return yt.targetFPMS;
}, set(t5) {
  ie("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"), yt.targetFPMS = t5;
} } });
class C0 {
  static init(e) {
    e = Object.assign({ autoStart: true, sharedTicker: false }, e), Object.defineProperty(this, "ticker", { set(r) {
      this._ticker && this._ticker.remove(this.render, this), this._ticker = r, r && r.add(this.render, this, Yn.LOW);
    }, get() {
      return this._ticker;
    } }), this.stop = () => {
      this._ticker.stop();
    }, this.start = () => {
      this._ticker.start();
    }, this._ticker = null, this.ticker = e.sharedTicker ? yt.shared : new yt(), e.autoStart && this.start();
  }
  static destroy() {
    if (this._ticker) {
      const e = this._ticker;
      this.ticker = null, e.destroy();
    }
  }
}
C0.extension = L.Application;
W.add(C0);
const I0 = [];
W.handleByList(L.Renderer, I0);
function jA(t5) {
  for (const e of I0) if (e.test(t5)) return new e(t5);
  throw new Error("Unable to auto-detect a suitable renderer.");
}
var VA = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`, $A = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const XA = VA, R0 = $A;
class P0 {
  constructor(e) {
    this.renderer = e;
  }
  contextChange(e) {
    let r;
    if (this.renderer.context.webGLVersion === 1) {
      const n = e.getParameter(e.FRAMEBUFFER_BINDING);
      e.bindFramebuffer(e.FRAMEBUFFER, null), r = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.FRAMEBUFFER, n);
    } else {
      const n = e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);
      e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), r = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, n);
    }
    r >= De.HIGH ? this.multisample = De.HIGH : r >= De.MEDIUM ? this.multisample = De.MEDIUM : r >= De.LOW ? this.multisample = De.LOW : this.multisample = De.NONE;
  }
  destroy() {
  }
}
P0.extension = { type: L.RendererSystem, name: "_multisample" };
W.add(P0);
class WA {
  constructor(e) {
    this.buffer = e || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0;
  }
}
class M0 {
  constructor(e) {
    this.renderer = e, this.managedBuffers = {}, this.boundBufferBases = {};
  }
  destroy() {
    this.renderer = null;
  }
  contextChange() {
    this.disposeAll(true), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  bind(e) {
    const { gl: r, CONTEXT_UID: n } = this, i = e._glBuffers[n] || this.createGLBuffer(e);
    r.bindBuffer(e.type, i.buffer);
  }
  unbind(e) {
    const { gl: r } = this;
    r.bindBuffer(e, null);
  }
  bindBufferBase(e, r) {
    const { gl: n, CONTEXT_UID: i } = this;
    if (this.boundBufferBases[r] !== e) {
      const s = e._glBuffers[i] || this.createGLBuffer(e);
      this.boundBufferBases[r] = e, n.bindBufferBase(n.UNIFORM_BUFFER, r, s.buffer);
    }
  }
  bindBufferRange(e, r, n) {
    const { gl: i, CONTEXT_UID: s } = this;
    n = n || 0;
    const o = e._glBuffers[s] || this.createGLBuffer(e);
    i.bindBufferRange(i.UNIFORM_BUFFER, r || 0, o.buffer, n * 256, 256);
  }
  update(e) {
    const { gl: r, CONTEXT_UID: n } = this, i = e._glBuffers[n] || this.createGLBuffer(e);
    if (e._updateID !== i.updateID) if (i.updateID = e._updateID, r.bindBuffer(e.type, i.buffer), i.byteLength >= e.data.byteLength) r.bufferSubData(e.type, 0, e.data);
    else {
      const s = e.static ? r.STATIC_DRAW : r.DYNAMIC_DRAW;
      i.byteLength = e.data.byteLength, r.bufferData(e.type, e.data, s);
    }
  }
  dispose(e, r) {
    if (!this.managedBuffers[e.id]) return;
    delete this.managedBuffers[e.id];
    const n = e._glBuffers[this.CONTEXT_UID], i = this.gl;
    e.disposeRunner.remove(this), n && (r || i.deleteBuffer(n.buffer), delete e._glBuffers[this.CONTEXT_UID]);
  }
  disposeAll(e) {
    const r = Object.keys(this.managedBuffers);
    for (let n = 0; n < r.length; n++) this.dispose(this.managedBuffers[r[n]], e);
  }
  createGLBuffer(e) {
    const { CONTEXT_UID: r, gl: n } = this;
    return e._glBuffers[r] = new WA(n.createBuffer()), this.managedBuffers[e.id] = e, e.disposeRunner.add(this), e._glBuffers[r];
  }
}
M0.extension = { type: L.RendererSystem, name: "buffer" };
W.add(M0);
class k0 {
  constructor(e) {
    this.renderer = e;
  }
  render(e, r) {
    const n = this.renderer;
    let i, s, o, a;
    if (r && (i = r.renderTexture, s = r.clear, o = r.transform, a = r.skipUpdateTransform), this.renderingToScreen = !i, n.runners.prerender.emit(), n.emit("prerender"), n.projection.transform = o, !n.context.isLost) {
      if (i || (this.lastObjectRendered = e), !a) {
        const l = e.enableTempParent();
        e.updateTransform(), e.disableTempParent(l);
      }
      n.renderTexture.bind(i), n.batch.currentRenderer.start(), (s ?? n.background.clearBeforeRender) && n.renderTexture.clear(), e.render(n), n.batch.currentRenderer.flush(), i && (r.blit && n.framebuffer.blit(), i.baseTexture.update()), n.runners.postrender.emit(), n.projection.transform = null, n.emit("postrender");
    }
  }
  destroy() {
    this.renderer = null, this.lastObjectRendered = null;
  }
}
k0.extension = { type: L.RendererSystem, name: "objectRenderer" };
W.add(k0);
const Va = class ad extends GA {
  constructor(e) {
    super(), this.type = m_.WEBGL, e = Object.assign({}, H.RENDER_OPTIONS, e), this.gl = null, this.CONTEXT_UID = 0, this.globalUniforms = new Xt({ projectionMatrix: new ve() }, true);
    const r = { runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"], systems: ad.__systems, priority: ["_view", "textureGenerator", "background", "_plugin", "startup", "context", "state", "texture", "buffer", "geometry", "framebuffer", "transformFeedback", "mask", "scissor", "stencil", "projection", "textureGC", "filter", "renderTexture", "batch", "objectRenderer", "_multisample"] };
    this.setup(r), "useContextAlpha" in e && (ie("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"), e.premultipliedAlpha = e.useContextAlpha && e.useContextAlpha !== "notMultiplied", e.backgroundAlpha = e.useContextAlpha === false ? 1 : e.backgroundAlpha), this._plugin.rendererPlugins = ad.__plugins, this.options = e, this.startup.run(this.options);
  }
  static test(e) {
    return (e == null ? void 0 : e.forceCanvas) ? false : gb();
  }
  render(e, r) {
    this.objectRenderer.render(e, r);
  }
  resize(e, r) {
    this._view.resizeView(e, r);
  }
  reset() {
    return this.runners.reset.emit(), this;
  }
  clear() {
    this.renderTexture.bind(), this.renderTexture.clear();
  }
  destroy(e = false) {
    this.runners.destroy.items.reverse(), this.emitWithCustomOptions(this.runners.destroy, { _view: e }), super.destroy();
  }
  get plugins() {
    return this._plugin.plugins;
  }
  get multisample() {
    return this._multisample.multisample;
  }
  get width() {
    return this._view.element.width;
  }
  get height() {
    return this._view.element.height;
  }
  get resolution() {
    return this._view.resolution;
  }
  set resolution(e) {
    this._view.resolution = e, this.runners.resolutionChange.emit(e);
  }
  get autoDensity() {
    return this._view.autoDensity;
  }
  get view() {
    return this._view.element;
  }
  get screen() {
    return this._view.screen;
  }
  get lastObjectRendered() {
    return this.objectRenderer.lastObjectRendered;
  }
  get renderingToScreen() {
    return this.objectRenderer.renderingToScreen;
  }
  get rendererLogId() {
    return `WebGL ${this.context.webGLVersion}`;
  }
  get clearBeforeRender() {
    return ie("7.0.0", "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."), this.background.clearBeforeRender;
  }
  get useContextAlpha() {
    return ie("7.0.0", "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."), this.context.useContextAlpha;
  }
  get preserveDrawingBuffer() {
    return ie("7.0.0", "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"), this.context.preserveDrawingBuffer;
  }
  get backgroundColor() {
    return ie("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color;
  }
  set backgroundColor(e) {
    ie("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color = e;
  }
  get backgroundAlpha() {
    return ie("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha;
  }
  set backgroundAlpha(e) {
    ie("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha = e;
  }
  get powerPreference() {
    return ie("7.0.0", "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"), this.context.powerPreference;
  }
  generateTexture(e, r) {
    return this.textureGenerator.generateTexture(e, r);
  }
};
Va.extension = { type: L.Renderer, priority: 1 }, Va.__plugins = {}, Va.__systems = {};
let Hf = Va;
W.handleByMap(L.RendererPlugin, Hf.__plugins);
W.handleByMap(L.RendererSystem, Hf.__systems);
W.add(Hf);
class F0 extends vo {
  constructor(e, r) {
    const { width: n, height: i } = r || {};
    super(n, i), this.items = [], this.itemDirtyIds = [];
    for (let s = 0; s < e; s++) {
      const o = new ee();
      this.items.push(o), this.itemDirtyIds.push(-2);
    }
    this.length = e, this._load = null, this.baseTexture = null;
  }
  initFromArray(e, r) {
    for (let n = 0; n < this.length; n++) e[n] && (e[n].castToBaseTexture ? this.addBaseTextureAt(e[n].castToBaseTexture(), n) : e[n] instanceof vo ? this.addResourceAt(e[n], n) : this.addResourceAt(q_(e[n], r), n));
  }
  dispose() {
    for (let e = 0, r = this.length; e < r; e++) this.items[e].destroy();
    this.items = null, this.itemDirtyIds = null, this._load = null;
  }
  addResourceAt(e, r) {
    if (!this.items[r]) throw new Error(`Index ${r} is out of bounds`);
    return e.valid && !this.valid && this.resize(e.width, e.height), this.items[r].setResource(e), this;
  }
  bind(e) {
    if (this.baseTexture !== null) throw new Error("Only one base texture per TextureArray is allowed");
    super.bind(e);
    for (let r = 0; r < this.length; r++) this.items[r].parentTextureArray = e, this.items[r].on("update", e.update, e);
  }
  unbind(e) {
    super.unbind(e);
    for (let r = 0; r < this.length; r++) this.items[r].parentTextureArray = null, this.items[r].off("update", e.update, e);
  }
  load() {
    if (this._load) return this._load;
    const e = this.items.map((r) => r.resource).filter((r) => r).map((r) => r.load());
    return this._load = Promise.all(e).then(() => {
      const { realWidth: r, realHeight: n } = this.items[0];
      return this.resize(r, n), this.update(), Promise.resolve(this);
    }), this._load;
  }
}
class YA extends F0 {
  constructor(e, r) {
    const { width: n, height: i } = r || {};
    let s, o;
    Array.isArray(e) ? (s = e, o = e.length) : o = e, super(o, { width: n, height: i }), s && this.initFromArray(s, r);
  }
  addBaseTextureAt(e, r) {
    if (e.resource) this.addResourceAt(e.resource, r);
    else throw new Error("ArrayResource does not support RenderTexture");
    return this;
  }
  bind(e) {
    super.bind(e), e.target = Di.TEXTURE_2D_ARRAY;
  }
  upload(e, r, n) {
    const { length: i, itemDirtyIds: s, items: o } = this, { gl: a } = e;
    n.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, n.internalFormat, this._width, this._height, i, 0, r.format, n.type, null);
    for (let l = 0; l < i; l++) {
      const u = o[l];
      s[l] < u.dirtyId && (s[l] = u.dirtyId, u.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, l, u.resource.width, u.resource.height, 1, r.format, n.type, u.resource.source));
    }
    return true;
  }
}
class ZA extends Fr {
  constructor(e) {
    super(e);
  }
  static test(e) {
    const { OffscreenCanvas: r } = globalThis;
    return r && e instanceof r ? true : globalThis.HTMLCanvasElement && e instanceof HTMLCanvasElement;
  }
}
const D0 = class Is extends F0 {
  constructor(e, r) {
    const { width: n, height: i, autoLoad: s, linkBaseTexture: o } = r || {};
    if (e && e.length !== Is.SIDES) throw new Error(`Invalid length. Got ${e.length}, expected 6`);
    super(6, { width: n, height: i });
    for (let a = 0; a < Is.SIDES; a++) this.items[a].target = Di.TEXTURE_CUBE_MAP_POSITIVE_X + a;
    this.linkBaseTexture = o !== false, e && this.initFromArray(e, r), s !== false && this.load();
  }
  bind(e) {
    super.bind(e), e.target = Di.TEXTURE_CUBE_MAP;
  }
  addBaseTextureAt(e, r, n) {
    if (n === void 0 && (n = this.linkBaseTexture), !this.items[r]) throw new Error(`Index ${r} is out of bounds`);
    if (!this.linkBaseTexture || e.parentTextureArray || Object.keys(e._glTextures).length > 0) if (e.resource) this.addResourceAt(e.resource, r);
    else throw new Error("CubeResource does not support copying of renderTexture.");
    else e.target = Di.TEXTURE_CUBE_MAP_POSITIVE_X + r, e.parentTextureArray = this.baseTexture, this.items[r] = e;
    return e.valid && !this.valid && this.resize(e.realWidth, e.realHeight), this.items[r] = e, this;
  }
  upload(e, r, n) {
    const i = this.itemDirtyIds;
    for (let s = 0; s < Is.SIDES; s++) {
      const o = this.items[s];
      (i[s] < o.dirtyId || n.dirtyId < r.dirtyId) && (o.valid && o.resource ? (o.resource.upload(e, o, n), i[s] = o.dirtyId) : i[s] < -1 && (e.gl.texImage2D(o.target, 0, n.internalFormat, r.realWidth, r.realHeight, 0, r.format, n.type, null), i[s] = -1));
    }
    return true;
  }
  static test(e) {
    return Array.isArray(e) && e.length === Is.SIDES;
  }
};
D0.SIDES = 6;
let KA = D0;
class Ai extends Fr {
  constructor(e, r) {
    r = r || {};
    let n, i, s;
    typeof e == "string" ? (n = Ai.EMPTY, i = e, s = true) : (n = e, i = null, s = false), super(n), this.url = i, this.crossOrigin = r.crossOrigin ?? true, this.alphaMode = typeof r.alphaMode == "number" ? r.alphaMode : null, this.ownsImageBitmap = r.ownsImageBitmap ?? s, this._load = null, r.autoLoad !== false && this.load();
  }
  load() {
    return this._load ? this._load : (this._load = new Promise(async (e, r) => {
      if (this.url === null) {
        e(this);
        return;
      }
      try {
        const n = await H.ADAPTER.fetch(this.url, { mode: this.crossOrigin ? "cors" : "no-cors" });
        if (this.destroyed) return;
        const i = await n.blob();
        if (this.destroyed) return;
        const s = await createImageBitmap(i, { premultiplyAlpha: this.alphaMode === null || this.alphaMode === ht.UNPACK ? "premultiply" : "none" });
        if (this.destroyed) {
          s.close();
          return;
        }
        this.source = s, this.update(), e(this);
      } catch (n) {
        if (this.destroyed) return;
        r(n), this.onError.emit(n);
      }
    }), this._load);
  }
  upload(e, r, n) {
    return this.source instanceof ImageBitmap ? (typeof this.alphaMode == "number" && (r.alphaMode = this.alphaMode), super.upload(e, r, n)) : (this.load(), false);
  }
  dispose() {
    this.ownsImageBitmap && this.source instanceof ImageBitmap && this.source.close(), super.dispose(), this._load = null;
  }
  static test(e) {
    return !!globalThis.createImageBitmap && typeof ImageBitmap < "u" && (typeof e == "string" || e instanceof ImageBitmap);
  }
  static get EMPTY() {
    return Ai._EMPTY = Ai._EMPTY ?? H.ADAPTER.createCanvas(0, 0), Ai._EMPTY;
  }
}
const ld = class $a extends Fr {
  constructor(e, r) {
    r = r || {}, super(H.ADAPTER.createCanvas()), this._width = 0, this._height = 0, this.svg = e, this.scale = r.scale || 1, this._overrideWidth = r.width, this._overrideHeight = r.height, this._resolve = null, this._crossorigin = r.crossorigin, this._load = null, r.autoLoad !== false && this.load();
  }
  load() {
    return this._load ? this._load : (this._load = new Promise((e) => {
      if (this._resolve = () => {
        this.update(), e(this);
      }, $a.SVG_XML.test(this.svg.trim())) {
        if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
        this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`;
      }
      this._loadSvg();
    }), this._load);
  }
  _loadSvg() {
    const e = new Image();
    Fr.crossOrigin(e, this.svg, this._crossorigin), e.src = this.svg, e.onerror = (r) => {
      this._resolve && (e.onerror = null, this.onError.emit(r));
    }, e.onload = () => {
      if (!this._resolve) return;
      const r = e.width, n = e.height;
      if (!r || !n) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
      let i = r * this.scale, s = n * this.scale;
      (this._overrideWidth || this._overrideHeight) && (i = this._overrideWidth || this._overrideHeight / n * r, s = this._overrideHeight || this._overrideWidth / r * n), i = Math.round(i), s = Math.round(s);
      const o = this.source;
      o.width = i, o.height = s, o._pixiId = `canvas_${Wn()}`, o.getContext("2d").drawImage(e, 0, 0, r, n, 0, 0, i, s), this._resolve(), this._resolve = null;
    };
  }
  static getSize(e) {
    const r = $a.SVG_SIZE.exec(e), n = {};
    return r && (n[r[1]] = Math.round(parseFloat(r[3])), n[r[5]] = Math.round(parseFloat(r[7]))), n;
  }
  dispose() {
    super.dispose(), this._resolve = null, this._crossorigin = null;
  }
  static test(e, r) {
    return r === "svg" || typeof e == "string" && e.startsWith("data:image/svg+xml") || typeof e == "string" && $a.SVG_XML.test(e);
  }
};
ld.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, ld.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
let ud = ld;
class qA extends Fr {
  constructor(e) {
    super(e);
  }
  static test(e) {
    return !!globalThis.VideoFrame && e instanceof globalThis.VideoFrame;
  }
}
const hd = class cd extends Fr {
  constructor(e, r) {
    if (r = r || {}, !(e instanceof HTMLVideoElement)) {
      const n = document.createElement("video");
      r.autoLoad !== false && n.setAttribute("preload", "auto"), r.playsinline !== false && (n.setAttribute("webkit-playsinline", ""), n.setAttribute("playsinline", "")), r.muted === true && (n.setAttribute("muted", ""), n.muted = true), r.loop === true && n.setAttribute("loop", ""), r.autoPlay !== false && n.setAttribute("autoplay", ""), typeof e == "string" && (e = [e]);
      const i = e[0].src || e[0];
      Fr.crossOrigin(n, i, r.crossorigin);
      for (let s = 0; s < e.length; ++s) {
        const o = document.createElement("source");
        let { src: a, mime: l } = e[s];
        if (a = a || e[s], a.startsWith("data:")) l = a.slice(5, a.indexOf(";"));
        else if (!a.startsWith("blob:")) {
          const u = a.split("?").shift().toLowerCase(), h = u.slice(u.lastIndexOf(".") + 1);
          l = l || cd.MIME_TYPES[h] || `video/${h}`;
        }
        o.src = a, l && (o.type = l), n.appendChild(o);
      }
      e = n;
    }
    super(e), this.noSubImage = true, this._autoUpdate = true, this._isConnectedToTicker = false, this._updateFPS = r.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = r.autoPlay !== false, this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), r.autoLoad !== false && this.load();
  }
  update(e = 0) {
    if (!this.destroyed) {
      if (this._updateFPS) {
        const r = yt.shared.elapsedMS * this.source.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - r);
      }
      (!this._updateFPS || this._msToNextUpdate <= 0) && (super.update(), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0);
    }
  }
  _videoFrameRequestCallback() {
    this.update(), this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback);
  }
  load() {
    if (this._load) return this._load;
    const e = this.source;
    return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = true), e.addEventListener("play", this._onPlayStart), e.addEventListener("pause", this._onPlayStop), e.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, true)), this._load = new Promise((r, n) => {
      this.valid ? r(this) : (this._resolve = r, this._reject = n, e.load());
    }), this._load;
  }
  _onError(e) {
    this.source.removeEventListener("error", this._onError, true), this.onError.emit(e), this._reject && (this._reject(e), this._reject = null, this._resolve = null);
  }
  _isSourcePlaying() {
    const e = this.source;
    return !e.paused && !e.ended;
  }
  _isSourceReady() {
    return this.source.readyState > 2;
  }
  _onPlayStart() {
    this.valid || this._onCanPlay(), this._configureAutoUpdate();
  }
  _onPlayStop() {
    this._configureAutoUpdate();
  }
  _onSeeked() {
    this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.update(), this._msToNextUpdate = 0);
  }
  _onCanPlay() {
    const e = this.source;
    e.removeEventListener("canplay", this._onCanPlay), e.removeEventListener("canplaythrough", this._onCanPlay);
    const r = this.valid;
    this._msToNextUpdate = 0, this.update(), this._msToNextUpdate = 0, !r && this._resolve && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && e.play();
  }
  dispose() {
    this._configureAutoUpdate();
    const e = this.source;
    e && (e.removeEventListener("play", this._onPlayStart), e.removeEventListener("pause", this._onPlayStop), e.removeEventListener("seeked", this._onSeeked), e.removeEventListener("canplay", this._onCanPlay), e.removeEventListener("canplaythrough", this._onCanPlay), e.removeEventListener("error", this._onError, true), e.pause(), e.src = "", e.load()), super.dispose();
  }
  get autoUpdate() {
    return this._autoUpdate;
  }
  set autoUpdate(e) {
    e !== this._autoUpdate && (this._autoUpdate = e, this._configureAutoUpdate());
  }
  get updateFPS() {
    return this._updateFPS;
  }
  set updateFPS(e) {
    e !== this._updateFPS && (this._updateFPS = e, this._configureAutoUpdate());
  }
  _configureAutoUpdate() {
    this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.source.requestVideoFrameCallback ? (this._isConnectedToTicker && (yt.shared.remove(this.update, this), this._isConnectedToTicker = false, this._msToNextUpdate = 0), this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (yt.shared.add(this.update, this), this._isConnectedToTicker = true, this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (yt.shared.remove(this.update, this), this._isConnectedToTicker = false, this._msToNextUpdate = 0));
  }
  static test(e, r) {
    return globalThis.HTMLVideoElement && e instanceof HTMLVideoElement || cd.TYPES.includes(r);
  }
};
hd.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], hd.MIME_TYPES = { ogv: "video/ogg", mov: "video/quicktime", m4v: "video/mp4" };
let B0 = hd;
qc.push(Ai, o0, ZA, B0, qA, ud, uu, KA, YA);
class kl {
  constructor() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1;
  }
  isEmpty() {
    return this.minX > this.maxX || this.minY > this.maxY;
  }
  clear() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
  }
  getRectangle(e) {
    return this.minX > this.maxX || this.minY > this.maxY ? te.EMPTY : (e = e || new te(0, 0, 1, 1), e.x = this.minX, e.y = this.minY, e.width = this.maxX - this.minX, e.height = this.maxY - this.minY, e);
  }
  addPoint(e) {
    this.minX = Math.min(this.minX, e.x), this.maxX = Math.max(this.maxX, e.x), this.minY = Math.min(this.minY, e.y), this.maxY = Math.max(this.maxY, e.y);
  }
  addPointMatrix(e, r) {
    const { a: n, b: i, c: s, d: o, tx: a, ty: l } = e, u = n * r.x + s * r.y + a, h = i * r.x + o * r.y + l;
    this.minX = Math.min(this.minX, u), this.maxX = Math.max(this.maxX, u), this.minY = Math.min(this.minY, h), this.maxY = Math.max(this.maxY, h);
  }
  addQuad(e) {
    let r = this.minX, n = this.minY, i = this.maxX, s = this.maxY, o = e[0], a = e[1];
    r = o < r ? o : r, n = a < n ? a : n, i = o > i ? o : i, s = a > s ? a : s, o = e[2], a = e[3], r = o < r ? o : r, n = a < n ? a : n, i = o > i ? o : i, s = a > s ? a : s, o = e[4], a = e[5], r = o < r ? o : r, n = a < n ? a : n, i = o > i ? o : i, s = a > s ? a : s, o = e[6], a = e[7], r = o < r ? o : r, n = a < n ? a : n, i = o > i ? o : i, s = a > s ? a : s, this.minX = r, this.minY = n, this.maxX = i, this.maxY = s;
  }
  addFrame(e, r, n, i, s) {
    this.addFrameMatrix(e.worldTransform, r, n, i, s);
  }
  addFrameMatrix(e, r, n, i, s) {
    const o = e.a, a = e.b, l = e.c, u = e.d, h = e.tx, c = e.ty;
    let d = this.minX, f = this.minY, p = this.maxX, y = this.maxY, _ = o * r + l * n + h, g = a * r + u * n + c;
    d = _ < d ? _ : d, f = g < f ? g : f, p = _ > p ? _ : p, y = g > y ? g : y, _ = o * i + l * n + h, g = a * i + u * n + c, d = _ < d ? _ : d, f = g < f ? g : f, p = _ > p ? _ : p, y = g > y ? g : y, _ = o * r + l * s + h, g = a * r + u * s + c, d = _ < d ? _ : d, f = g < f ? g : f, p = _ > p ? _ : p, y = g > y ? g : y, _ = o * i + l * s + h, g = a * i + u * s + c, d = _ < d ? _ : d, f = g < f ? g : f, p = _ > p ? _ : p, y = g > y ? g : y, this.minX = d, this.minY = f, this.maxX = p, this.maxY = y;
  }
  addVertexData(e, r, n) {
    let i = this.minX, s = this.minY, o = this.maxX, a = this.maxY;
    for (let l = r; l < n; l += 2) {
      const u = e[l], h = e[l + 1];
      i = u < i ? u : i, s = h < s ? h : s, o = u > o ? u : o, a = h > a ? h : a;
    }
    this.minX = i, this.minY = s, this.maxX = o, this.maxY = a;
  }
  addVertices(e, r, n, i) {
    this.addVerticesMatrix(e.worldTransform, r, n, i);
  }
  addVerticesMatrix(e, r, n, i, s = 0, o = s) {
    const a = e.a, l = e.b, u = e.c, h = e.d, c = e.tx, d = e.ty;
    let f = this.minX, p = this.minY, y = this.maxX, _ = this.maxY;
    for (let g = n; g < i; g += 2) {
      const v = r[g], m = r[g + 1], x = a * v + u * m + c, w = h * m + l * v + d;
      f = Math.min(f, x - s), y = Math.max(y, x + s), p = Math.min(p, w - o), _ = Math.max(_, w + o);
    }
    this.minX = f, this.minY = p, this.maxX = y, this.maxY = _;
  }
  addBounds(e) {
    const r = this.minX, n = this.minY, i = this.maxX, s = this.maxY;
    this.minX = e.minX < r ? e.minX : r, this.minY = e.minY < n ? e.minY : n, this.maxX = e.maxX > i ? e.maxX : i, this.maxY = e.maxY > s ? e.maxY : s;
  }
  addBoundsMask(e, r) {
    const n = e.minX > r.minX ? e.minX : r.minX, i = e.minY > r.minY ? e.minY : r.minY, s = e.maxX < r.maxX ? e.maxX : r.maxX, o = e.maxY < r.maxY ? e.maxY : r.maxY;
    if (n <= s && i <= o) {
      const a = this.minX, l = this.minY, u = this.maxX, h = this.maxY;
      this.minX = n < a ? n : a, this.minY = i < l ? i : l, this.maxX = s > u ? s : u, this.maxY = o > h ? o : h;
    }
  }
  addBoundsMatrix(e, r) {
    this.addFrameMatrix(r, e.minX, e.minY, e.maxX, e.maxY);
  }
  addBoundsArea(e, r) {
    const n = e.minX > r.x ? e.minX : r.x, i = e.minY > r.y ? e.minY : r.y, s = e.maxX < r.x + r.width ? e.maxX : r.x + r.width, o = e.maxY < r.y + r.height ? e.maxY : r.y + r.height;
    if (n <= s && i <= o) {
      const a = this.minX, l = this.minY, u = this.maxX, h = this.maxY;
      this.minX = n < a ? n : a, this.minY = i < l ? i : l, this.maxX = s > u ? s : u, this.maxY = o > h ? o : h;
    }
  }
  pad(e = 0, r = e) {
    this.isEmpty() || (this.minX -= e, this.maxX += e, this.minY -= r, this.maxY += r);
  }
  addFramePad(e, r, n, i, s, o) {
    e -= s, r -= o, n += s, i += o, this.minX = this.minX < e ? this.minX : e, this.maxX = this.maxX > n ? this.maxX : n, this.minY = this.minY < r ? this.minY : r, this.maxY = this.maxY > i ? this.maxY : i;
  }
}
class Ce extends Ao {
  constructor() {
    super(), this.tempDisplayObjectParent = null, this.transform = new Gf(), this.alpha = 1, this.visible = true, this.renderable = true, this.cullable = false, this.cullArea = null, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new kl(), this._localBounds = null, this._boundsID = 0, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._maskRefCount = 0, this._destroyed = false, this.isSprite = false, this.isMask = false;
  }
  static mixin(e) {
    const r = Object.keys(e);
    for (let n = 0; n < r.length; ++n) {
      const i = r[n];
      Object.defineProperty(Ce.prototype, i, Object.getOwnPropertyDescriptor(e, i));
    }
  }
  get destroyed() {
    return this._destroyed;
  }
  _recursivePostUpdateTransform() {
    this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform);
  }
  updateTransform() {
    this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
  }
  getBounds(e, r) {
    return e || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), r || (this._boundsRect || (this._boundsRect = new te()), r = this._boundsRect), this._bounds.getRectangle(r);
  }
  getLocalBounds(e) {
    e || (this._localBoundsRect || (this._localBoundsRect = new te()), e = this._localBoundsRect), this._localBounds || (this._localBounds = new kl());
    const r = this.transform, n = this.parent;
    this.parent = null, this._tempDisplayObjectParent.worldAlpha = (n == null ? void 0 : n.worldAlpha) ?? 1, this.transform = this._tempDisplayObjectParent.transform;
    const i = this._bounds, s = this._boundsID;
    this._bounds = this._localBounds;
    const o = this.getBounds(false, e);
    return this.parent = n, this.transform = r, this._bounds = i, this._bounds.updateID += this._boundsID - s, o;
  }
  toGlobal(e, r, n = false) {
    return n || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(e, r);
  }
  toLocal(e, r, n, i) {
    return r && (e = r.toGlobal(e, n, i)), i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(e, n);
  }
  setParent(e) {
    if (!e || !e.addChild) throw new Error("setParent: Argument must be a Container");
    return e.addChild(this), e;
  }
  removeFromParent() {
    var _a2;
    (_a2 = this.parent) == null ? void 0 : _a2.removeChild(this);
  }
  setTransform(e = 0, r = 0, n = 1, i = 1, s = 0, o = 0, a = 0, l = 0, u = 0) {
    return this.position.x = e, this.position.y = r, this.scale.x = n || 1, this.scale.y = i || 1, this.rotation = s, this.skew.x = o, this.skew.y = a, this.pivot.x = l, this.pivot.y = u, this;
  }
  destroy(e) {
    this.removeFromParent(), this._destroyed = true, this.transform = null, this.parent = null, this._bounds = null, this.mask = null, this.cullArea = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.eventMode = "auto", this.interactiveChildren = false, this.emit("destroyed"), this.removeAllListeners();
  }
  get _tempDisplayObjectParent() {
    return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new QA()), this.tempDisplayObjectParent;
  }
  enableTempParent() {
    const e = this.parent;
    return this.parent = this._tempDisplayObjectParent, e;
  }
  disableTempParent(e) {
    this.parent = e;
  }
  get x() {
    return this.position.x;
  }
  set x(e) {
    this.transform.position.x = e;
  }
  get y() {
    return this.position.y;
  }
  set y(e) {
    this.transform.position.y = e;
  }
  get worldTransform() {
    return this.transform.worldTransform;
  }
  get localTransform() {
    return this.transform.localTransform;
  }
  get position() {
    return this.transform.position;
  }
  set position(e) {
    this.transform.position.copyFrom(e);
  }
  get scale() {
    return this.transform.scale;
  }
  set scale(e) {
    this.transform.scale.copyFrom(e);
  }
  get pivot() {
    return this.transform.pivot;
  }
  set pivot(e) {
    this.transform.pivot.copyFrom(e);
  }
  get skew() {
    return this.transform.skew;
  }
  set skew(e) {
    this.transform.skew.copyFrom(e);
  }
  get rotation() {
    return this.transform.rotation;
  }
  set rotation(e) {
    this.transform.rotation = e;
  }
  get angle() {
    return this.transform.rotation * Vb;
  }
  set angle(e) {
    this.transform.rotation = e * $b;
  }
  get zIndex() {
    return this._zIndex;
  }
  set zIndex(e) {
    this._zIndex !== e && (this._zIndex = e, this.parent && (this.parent.sortDirty = true));
  }
  get worldVisible() {
    let e = this;
    do {
      if (!e.visible) return false;
      e = e.parent;
    } while (e);
    return true;
  }
  get mask() {
    return this._mask;
  }
  set mask(e) {
    if (this._mask !== e) {
      if (this._mask) {
        const r = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        r && (r._maskRefCount--, r._maskRefCount === 0 && (r.renderable = true, r.isMask = false));
      }
      if (this._mask = e, this._mask) {
        const r = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        r && (r._maskRefCount === 0 && (r.renderable = false, r.isMask = true), r._maskRefCount++);
      }
    }
  }
}
class QA extends Ce {
  constructor() {
    super(...arguments), this.sortDirty = null;
  }
}
Ce.prototype.displayObjectUpdateTransform = Ce.prototype.updateTransform;
const JA = new ve();
function eC(t5, e) {
  return t5.zIndex === e.zIndex ? t5._lastSortedIndex - e._lastSortedIndex : t5.zIndex - e.zIndex;
}
const N0 = class dd extends Ce {
  constructor() {
    super(), this.children = [], this.sortableChildren = dd.defaultSortableChildren, this.sortDirty = false;
  }
  onChildrenChange(e) {
  }
  addChild(...e) {
    if (e.length > 1) for (let r = 0; r < e.length; r++) this.addChild(e[r]);
    else {
      const r = e[0];
      r.parent && r.parent.removeChild(r), r.parent = this, this.sortDirty = true, r.transform._parentID = -1, this.children.push(r), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", r, this, this.children.length - 1), r.emit("added", this);
    }
    return e[0];
  }
  addChildAt(e, r) {
    if (r < 0 || r > this.children.length) throw new Error(`${e}addChildAt: The index ${r} supplied is out of bounds ${this.children.length}`);
    return e.parent && e.parent.removeChild(e), e.parent = this, this.sortDirty = true, e.transform._parentID = -1, this.children.splice(r, 0, e), this._boundsID++, this.onChildrenChange(r), e.emit("added", this), this.emit("childAdded", e, this, r), e;
  }
  swapChildren(e, r) {
    if (e === r) return;
    const n = this.getChildIndex(e), i = this.getChildIndex(r);
    this.children[n] = r, this.children[i] = e, this.onChildrenChange(n < i ? n : i);
  }
  getChildIndex(e) {
    const r = this.children.indexOf(e);
    if (r === -1) throw new Error("The supplied DisplayObject must be a child of the caller");
    return r;
  }
  setChildIndex(e, r) {
    if (r < 0 || r >= this.children.length) throw new Error(`The index ${r} supplied is out of bounds ${this.children.length}`);
    const n = this.getChildIndex(e);
    Oi(this.children, n, 1), this.children.splice(r, 0, e), this.onChildrenChange(r);
  }
  getChildAt(e) {
    if (e < 0 || e >= this.children.length) throw new Error(`getChildAt: Index (${e}) does not exist.`);
    return this.children[e];
  }
  removeChild(...e) {
    if (e.length > 1) for (let r = 0; r < e.length; r++) this.removeChild(e[r]);
    else {
      const r = e[0], n = this.children.indexOf(r);
      if (n === -1) return null;
      r.parent = null, r.transform._parentID = -1, Oi(this.children, n, 1), this._boundsID++, this.onChildrenChange(n), r.emit("removed", this), this.emit("childRemoved", r, this, n);
    }
    return e[0];
  }
  removeChildAt(e) {
    const r = this.getChildAt(e);
    return r.parent = null, r.transform._parentID = -1, Oi(this.children, e, 1), this._boundsID++, this.onChildrenChange(e), r.emit("removed", this), this.emit("childRemoved", r, this, e), r;
  }
  removeChildren(e = 0, r = this.children.length) {
    const n = e, i = r, s = i - n;
    let o;
    if (s > 0 && s <= i) {
      o = this.children.splice(n, s);
      for (let a = 0; a < o.length; ++a) o[a].parent = null, o[a].transform && (o[a].transform._parentID = -1);
      this._boundsID++, this.onChildrenChange(e);
      for (let a = 0; a < o.length; ++a) o[a].emit("removed", this), this.emit("childRemoved", o[a], this, a);
      return o;
    } else if (s === 0 && this.children.length === 0) return [];
    throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
  }
  sortChildren() {
    let e = false;
    for (let r = 0, n = this.children.length; r < n; ++r) {
      const i = this.children[r];
      i._lastSortedIndex = r, !e && i.zIndex !== 0 && (e = true);
    }
    e && this.children.length > 1 && this.children.sort(eC), this.sortDirty = false;
  }
  updateTransform() {
    this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
    for (let e = 0, r = this.children.length; e < r; ++e) {
      const n = this.children[e];
      n.visible && n.updateTransform();
    }
  }
  calculateBounds() {
    this._bounds.clear(), this._calculateBounds();
    for (let e = 0; e < this.children.length; e++) {
      const r = this.children[e];
      if (!(!r.visible || !r.renderable)) if (r.calculateBounds(), r._mask) {
        const n = r._mask.isMaskData ? r._mask.maskObject : r._mask;
        n ? (n.calculateBounds(), this._bounds.addBoundsMask(r._bounds, n._bounds)) : this._bounds.addBounds(r._bounds);
      } else r.filterArea ? this._bounds.addBoundsArea(r._bounds, r.filterArea) : this._bounds.addBounds(r._bounds);
    }
    this._bounds.updateID = this._boundsID;
  }
  getLocalBounds(e, r = false) {
    const n = super.getLocalBounds(e);
    if (!r) for (let i = 0, s = this.children.length; i < s; ++i) {
      const o = this.children[i];
      o.visible && o.updateTransform();
    }
    return n;
  }
  _calculateBounds() {
  }
  _renderWithCulling(e) {
    const r = e.renderTexture.sourceFrame;
    if (!(r.width > 0 && r.height > 0)) return;
    let n, i;
    this.cullArea ? (n = this.cullArea, i = this.worldTransform) : this._render !== dd.prototype._render && (n = this.getBounds(true));
    const s = e.projection.transform;
    if (s && (i ? (i = JA.copyFrom(i), i.prepend(s)) : i = s), n && r.intersects(n, i)) this._render(e);
    else if (this.cullArea) return;
    for (let o = 0, a = this.children.length; o < a; ++o) {
      const l = this.children[o], u = l.cullable;
      l.cullable = u || !this.cullArea, l.render(e), l.cullable = u;
    }
  }
  render(e) {
    var _a2;
    if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable)) if (this._mask || ((_a2 = this.filters) == null ? void 0 : _a2.length)) this.renderAdvanced(e);
    else if (this.cullable) this._renderWithCulling(e);
    else {
      this._render(e);
      for (let r = 0, n = this.children.length; r < n; ++r) this.children[r].render(e);
    }
  }
  renderAdvanced(e) {
    var _a2, _b2, _c2;
    const r = this.filters, n = this._mask;
    if (r) {
      this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
      for (let s = 0; s < r.length; s++) r[s].enabled && this._enabledFilters.push(r[s]);
    }
    const i = r && ((_a2 = this._enabledFilters) == null ? void 0 : _a2.length) || n && (!n.isMaskData || n.enabled && (n.autoDetect || n.type !== Oe.NONE));
    if (i && e.batch.flush(), r && ((_b2 = this._enabledFilters) == null ? void 0 : _b2.length) && e.filter.push(this, this._enabledFilters), n && e.mask.push(this, this._mask), this.cullable) this._renderWithCulling(e);
    else {
      this._render(e);
      for (let s = 0, o = this.children.length; s < o; ++s) this.children[s].render(e);
    }
    i && e.batch.flush(), n && e.mask.pop(this), r && ((_c2 = this._enabledFilters) == null ? void 0 : _c2.length) && e.filter.pop();
  }
  _render(e) {
  }
  destroy(e) {
    super.destroy(), this.sortDirty = false;
    const r = typeof e == "boolean" ? e : e == null ? void 0 : e.children, n = this.removeChildren(0, this.children.length);
    if (r) for (let i = 0; i < n.length; ++i) n[i].destroy(e);
  }
  get width() {
    return this.scale.x * this.getLocalBounds().width;
  }
  set width(e) {
    const r = this.getLocalBounds().width;
    r !== 0 ? this.scale.x = e / r : this.scale.x = 1, this._width = e;
  }
  get height() {
    return this.scale.y * this.getLocalBounds().height;
  }
  set height(e) {
    const r = this.getLocalBounds().height;
    r !== 0 ? this.scale.y = e / r : this.scale.y = 1, this._height = e;
  }
};
N0.defaultSortableChildren = false;
let et = N0;
et.prototype.containerUpdateTransform = et.prototype.updateTransform;
Object.defineProperties(H, { SORTABLE_CHILDREN: { get() {
  return et.defaultSortableChildren;
}, set(t5) {
  ie("7.1.0", "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"), et.defaultSortableChildren = t5;
} } });
const vs = new ae(), tC = new Uint16Array([0, 1, 2, 0, 2, 3]);
class ns extends et {
  constructor(e) {
    super(), this._anchor = new Tr(this._onAnchorUpdate, this, e ? e.defaultAnchor.x : 0, e ? e.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tintColor = new ge(16777215), this._tintRGB = null, this.tint = 16777215, this.blendMode = Q.NORMAL, this._cachedTint = 16777215, this.uvs = null, this.texture = e || X.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = tC, this.pluginName = "batch", this.isSprite = true, this._roundPixels = H.ROUND_PIXELS;
  }
  _onTextureUpdate() {
    this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = Kr(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = Kr(this.scale.y) * this._height / this._texture.orig.height);
  }
  _onAnchorUpdate() {
    this._transformID = -1, this._transformTrimmedID = -1;
  }
  calculateVertices() {
    const e = this._texture;
    if (this._transformID === this.transform._worldID && this._textureID === e._updateID) return;
    this._textureID !== e._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = e._updateID;
    const r = this.transform.worldTransform, n = r.a, i = r.b, s = r.c, o = r.d, a = r.tx, l = r.ty, u = this.vertexData, h = e.trim, c = e.orig, d = this._anchor;
    let f = 0, p = 0, y = 0, _ = 0;
    if (h ? (p = h.x - d._x * c.width, f = p + h.width, _ = h.y - d._y * c.height, y = _ + h.height) : (p = -d._x * c.width, f = p + c.width, _ = -d._y * c.height, y = _ + c.height), u[0] = n * p + s * _ + a, u[1] = o * _ + i * p + l, u[2] = n * f + s * _ + a, u[3] = o * _ + i * f + l, u[4] = n * f + s * y + a, u[5] = o * y + i * f + l, u[6] = n * p + s * y + a, u[7] = o * y + i * p + l, this._roundPixels) {
      const g = H.RESOLUTION;
      for (let v = 0; v < u.length; ++v) u[v] = Math.round(u[v] * g) / g;
    }
  }
  calculateTrimmedVertices() {
    if (!this.vertexTrimmedData) this.vertexTrimmedData = new Float32Array(8);
    else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return;
    this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
    const e = this._texture, r = this.vertexTrimmedData, n = e.orig, i = this._anchor, s = this.transform.worldTransform, o = s.a, a = s.b, l = s.c, u = s.d, h = s.tx, c = s.ty, d = -i._x * n.width, f = d + n.width, p = -i._y * n.height, y = p + n.height;
    if (r[0] = o * d + l * p + h, r[1] = u * p + a * d + c, r[2] = o * f + l * p + h, r[3] = u * p + a * f + c, r[4] = o * f + l * y + h, r[5] = u * y + a * f + c, r[6] = o * d + l * y + h, r[7] = u * y + a * d + c, this._roundPixels) {
      const _ = H.RESOLUTION;
      for (let g = 0; g < r.length; ++g) r[g] = Math.round(r[g] * _) / _;
    }
  }
  _render(e) {
    this.calculateVertices(), e.batch.setObjectRenderer(e.plugins[this.pluginName]), e.plugins[this.pluginName].render(this);
  }
  _calculateBounds() {
    const e = this._texture.trim, r = this._texture.orig;
    !e || e.width === r.width && e.height === r.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
  }
  getLocalBounds(e) {
    return this.children.length === 0 ? (this._localBounds || (this._localBounds = new kl()), this._localBounds.minX = this._texture.orig.width * -this._anchor._x, this._localBounds.minY = this._texture.orig.height * -this._anchor._y, this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new te()), e = this._localBoundsRect), this._localBounds.getRectangle(e)) : super.getLocalBounds.call(this, e);
  }
  containsPoint(e) {
    this.worldTransform.applyInverse(e, vs);
    const r = this._texture.orig.width, n = this._texture.orig.height, i = -r * this.anchor.x;
    let s = 0;
    return vs.x >= i && vs.x < i + r && (s = -n * this.anchor.y, vs.y >= s && vs.y < s + n);
  }
  destroy(e) {
    if (super.destroy(e), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, typeof e == "boolean" ? e : e == null ? void 0 : e.texture) {
      const r = typeof e == "boolean" ? e : e == null ? void 0 : e.baseTexture;
      this._texture.destroy(!!r);
    }
    this._texture = null;
  }
  static from(e, r) {
    const n = e instanceof X ? e : X.from(e, r);
    return new ns(n);
  }
  set roundPixels(e) {
    this._roundPixels !== e && (this._transformID = -1, this._transformTrimmedID = -1), this._roundPixels = e;
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(e) {
    const r = Kr(this.scale.x) || 1;
    this.scale.x = r * e / this._texture.orig.width, this._width = e;
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(e) {
    const r = Kr(this.scale.y) || 1;
    this.scale.y = r * e / this._texture.orig.height, this._height = e;
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(e) {
    this._anchor.copyFrom(e);
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(e) {
    this._tintColor.setValue(e), this._tintRGB = this._tintColor.toLittleEndianNumber();
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  get texture() {
    return this._texture;
  }
  set texture(e) {
    this._texture !== e && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = e || X.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, e && (e.baseTexture.valid ? this._onTextureUpdate() : e.once("update", this._onTextureUpdate, this)));
  }
}
const O0 = new ve();
Ce.prototype._cacheAsBitmap = false;
Ce.prototype._cacheData = null;
Ce.prototype._cacheAsBitmapResolution = null;
Ce.prototype._cacheAsBitmapMultisample = null;
class rC {
  constructor() {
    this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null;
  }
}
Object.defineProperties(Ce.prototype, { cacheAsBitmapResolution: { get() {
  return this._cacheAsBitmapResolution;
}, set(t5) {
  t5 !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = t5, this.cacheAsBitmap && (this.cacheAsBitmap = false, this.cacheAsBitmap = true));
} }, cacheAsBitmapMultisample: { get() {
  return this._cacheAsBitmapMultisample;
}, set(t5) {
  t5 !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = t5, this.cacheAsBitmap && (this.cacheAsBitmap = false, this.cacheAsBitmap = true));
} }, cacheAsBitmap: { get() {
  return this._cacheAsBitmap;
}, set(t5) {
  if (this._cacheAsBitmap === t5) return;
  this._cacheAsBitmap = t5;
  let e;
  t5 ? (this._cacheData || (this._cacheData = new rC()), e = this._cacheData, e.originalRender = this.render, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (e = this._cacheData, e.sprite && this._destroyCachedDisplayObject(), this.render = e.originalRender, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea);
} } });
Ce.prototype._renderCached = function(t5) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t5), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t5));
};
Ce.prototype._initCachedDisplayObject = function(t5) {
  var _a2, _b2;
  if ((_a2 = this._cacheData) == null ? void 0 : _a2.sprite) return;
  const e = this.alpha;
  this.alpha = 1, t5.batch.flush();
  const r = this.getLocalBounds(new te(), true);
  if ((_b2 = this.filters) == null ? void 0 : _b2.length) {
    const d = this.filters[0].padding;
    r.pad(d);
  }
  const n = this.cacheAsBitmapResolution || t5.resolution;
  r.ceil(n), r.width = Math.max(r.width, 1 / n), r.height = Math.max(r.height, 1 / n);
  const i = t5.renderTexture.current, s = t5.renderTexture.sourceFrame.clone(), o = t5.renderTexture.destinationFrame.clone(), a = t5.projection.transform, l = Jn.create({ width: r.width, height: r.height, resolution: n, multisample: this.cacheAsBitmapMultisample ?? t5.multisample }), u = `cacheAsBitmap_${Wn()}`;
  this._cacheData.textureCacheId = u, ee.addToCache(l.baseTexture, u), X.addToCache(l, u);
  const h = this.transform.localTransform.copyTo(O0).invert().translate(-r.x, -r.y);
  this.render = this._cacheData.originalRender, t5.render(this, { renderTexture: l, clear: true, transform: h, skipUpdateTransform: false }), t5.framebuffer.blit(), t5.projection.transform = a, t5.renderTexture.bind(i, s, o), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = e;
  const c = new ns(l);
  c.transform.worldTransform = this.transform.worldTransform, c.anchor.x = -(r.x / r.width), c.anchor.y = -(r.y / r.height), c.alpha = e, c._bounds = this._bounds, this._cacheData.sprite = c, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = c.containsPoint.bind(c);
};
Ce.prototype._renderCachedCanvas = function(t5) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t5), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t5));
};
Ce.prototype._initCachedDisplayObjectCanvas = function(t5) {
  var _a2;
  if ((_a2 = this._cacheData) == null ? void 0 : _a2.sprite) return;
  const e = this.getLocalBounds(new te(), true), r = this.alpha;
  this.alpha = 1;
  const n = t5.canvasContext.activeContext, i = t5._projTransform, s = this.cacheAsBitmapResolution || t5.resolution;
  e.ceil(s), e.width = Math.max(e.width, 1 / s), e.height = Math.max(e.height, 1 / s);
  const o = Jn.create({ width: e.width, height: e.height, resolution: s }), a = `cacheAsBitmap_${Wn()}`;
  this._cacheData.textureCacheId = a, ee.addToCache(o.baseTexture, a), X.addToCache(o, a);
  const l = O0;
  this.transform.localTransform.copyTo(l), l.invert(), l.tx -= e.x, l.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t5.render(this, { renderTexture: o, clear: true, transform: l, skipUpdateTransform: false }), t5.canvasContext.activeContext = n, t5._projTransform = i, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = r;
  const u = new ns(o);
  u.transform.worldTransform = this.transform.worldTransform, u.anchor.x = -(e.x / e.width), u.anchor.y = -(e.y / e.height), u.alpha = r, u._bounds = this._bounds, this._cacheData.sprite = u, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t5._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = u.containsPoint.bind(u);
};
Ce.prototype._calculateCachedBounds = function() {
  this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID;
};
Ce.prototype._getCachedLocalBounds = function() {
  return this._cacheData.sprite.getLocalBounds(null);
};
Ce.prototype._destroyCachedDisplayObject = function() {
  this._cacheData.sprite._texture.destroy(true), this._cacheData.sprite = null, ee.removeFromCache(this._cacheData.textureCacheId), X.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
};
Ce.prototype._cacheAsBitmapDestroy = function(t5) {
  this.cacheAsBitmap = false, this.destroy(t5);
};
Ce.prototype.name = null;
et.prototype.getChildByName = function(t5, e) {
  for (let r = 0, n = this.children.length; r < n; r++) if (this.children[r].name === t5) return this.children[r];
  if (e) for (let r = 0, n = this.children.length; r < n; r++) {
    const i = this.children[r];
    if (!i.getChildByName) continue;
    const s = i.getChildByName(t5, true);
    if (s) return s;
  }
  return null;
};
Ce.prototype.getGlobalPosition = function(t5 = new ae(), e = false) {
  return this.parent ? this.parent.toGlobal(this.position, t5, e) : (t5.x = this.position.x, t5.y = this.position.y), t5;
};
var nC = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
class iC extends it {
  constructor(e = 1) {
    super(XA, nC, { uAlpha: 1 }), this.alpha = e;
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(e) {
    this.uniforms.uAlpha = e;
  }
}
const sC = { 5: [0.153388, 0.221461, 0.250301], 7: [0.071303, 0.131514, 0.189879, 0.214607], 9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236], 11: [93e-4, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596], 13: [2406e-6, 9255e-6, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641], 15: [489e-6, 2403e-6, 9246e-6, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448] }, oC = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join(`
`);
function aC(t5) {
  const e = sC[t5], r = e.length;
  let n = oC, i = "";
  const s = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
  let o;
  for (let a = 0; a < t5; a++) {
    let l = s.replace("%index%", a.toString());
    o = a, a >= r && (o = t5 - a - 1), l = l.replace("%value%", e[o].toString()), i += l, i += `
`;
  }
  return n = n.replace("%blur%", i), n = n.replace("%size%", t5.toString()), n;
}
const lC = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function uC(t5, e) {
  const r = Math.ceil(t5 / 2);
  let n = lC, i = "", s;
  e ? s = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : s = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
  for (let o = 0; o < t5; o++) {
    let a = s.replace("%index%", o.toString());
    a = a.replace("%sampleIndex%", `${o - (r - 1)}.0`), i += a, i += `
`;
  }
  return n = n.replace("%blur%", i), n = n.replace("%size%", t5.toString()), n;
}
class fd extends it {
  constructor(e, r = 8, n = 4, i = it.defaultResolution, s = 5) {
    const o = uC(s, e), a = aC(s);
    super(o, a), this.horizontal = e, this.resolution = i, this._quality = 0, this.quality = n, this.blur = r;
  }
  apply(e, r, n, i) {
    if (n ? this.horizontal ? this.uniforms.strength = 1 / n.width * (n.width / r.width) : this.uniforms.strength = 1 / n.height * (n.height / r.height) : this.horizontal ? this.uniforms.strength = 1 / e.renderer.width * (e.renderer.width / r.width) : this.uniforms.strength = 1 / e.renderer.height * (e.renderer.height / r.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, this.passes === 1) e.applyFilter(this, r, n, i);
    else {
      const s = e.getFilterTexture(), o = e.renderer;
      let a = r, l = s;
      this.state.blend = false, e.applyFilter(this, a, l, sr.CLEAR);
      for (let u = 1; u < this.passes - 1; u++) {
        e.bindAndClear(a, sr.BLIT), this.uniforms.uSampler = l;
        const h = l;
        l = a, a = h, o.shader.bind(this), o.geometry.draw(5);
      }
      this.state.blend = true, e.applyFilter(this, l, n, i), e.returnFilterTexture(s);
    }
  }
  get blur() {
    return this.strength;
  }
  set blur(e) {
    this.padding = 1 + Math.abs(e) * 2, this.strength = e;
  }
  get quality() {
    return this._quality;
  }
  set quality(e) {
    this._quality = e, this.passes = e;
  }
}
class hC extends it {
  constructor(e = 8, r = 4, n = it.defaultResolution, i = 5) {
    super(), this._repeatEdgePixels = false, this.blurXFilter = new fd(true, e, r, n, i), this.blurYFilter = new fd(false, e, r, n, i), this.resolution = n, this.quality = r, this.blur = e, this.repeatEdgePixels = false;
  }
  apply(e, r, n, i) {
    const s = Math.abs(this.blurXFilter.strength), o = Math.abs(this.blurYFilter.strength);
    if (s && o) {
      const a = e.getFilterTexture();
      this.blurXFilter.apply(e, r, a, sr.CLEAR), this.blurYFilter.apply(e, a, n, i), e.returnFilterTexture(a);
    } else o ? this.blurYFilter.apply(e, r, n, i) : this.blurXFilter.apply(e, r, n, i);
  }
  updatePadding() {
    this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2;
  }
  get blur() {
    return this.blurXFilter.blur;
  }
  set blur(e) {
    this.blurXFilter.blur = this.blurYFilter.blur = e, this.updatePadding();
  }
  get quality() {
    return this.blurXFilter.quality;
  }
  set quality(e) {
    this.blurXFilter.quality = this.blurYFilter.quality = e;
  }
  get blurX() {
    return this.blurXFilter.blur;
  }
  set blurX(e) {
    this.blurXFilter.blur = e, this.updatePadding();
  }
  get blurY() {
    return this.blurYFilter.blur;
  }
  set blurY(e) {
    this.blurYFilter.blur = e, this.updatePadding();
  }
  get blendMode() {
    return this.blurYFilter.blendMode;
  }
  set blendMode(e) {
    this.blurYFilter.blendMode = e;
  }
  get repeatEdgePixels() {
    return this._repeatEdgePixels;
  }
  set repeatEdgePixels(e) {
    this._repeatEdgePixels = e, this.updatePadding();
  }
}
var cC = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
class pd extends it {
  constructor() {
    const e = { m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]), uAlpha: 1 };
    super(R0, cC, e), this.alpha = 1;
  }
  _loadMatrix(e, r = false) {
    let n = e;
    r && (this._multiply(n, this.uniforms.m, e), n = this._colorMatrix(n)), this.uniforms.m = n;
  }
  _multiply(e, r, n) {
    return e[0] = r[0] * n[0] + r[1] * n[5] + r[2] * n[10] + r[3] * n[15], e[1] = r[0] * n[1] + r[1] * n[6] + r[2] * n[11] + r[3] * n[16], e[2] = r[0] * n[2] + r[1] * n[7] + r[2] * n[12] + r[3] * n[17], e[3] = r[0] * n[3] + r[1] * n[8] + r[2] * n[13] + r[3] * n[18], e[4] = r[0] * n[4] + r[1] * n[9] + r[2] * n[14] + r[3] * n[19] + r[4], e[5] = r[5] * n[0] + r[6] * n[5] + r[7] * n[10] + r[8] * n[15], e[6] = r[5] * n[1] + r[6] * n[6] + r[7] * n[11] + r[8] * n[16], e[7] = r[5] * n[2] + r[6] * n[7] + r[7] * n[12] + r[8] * n[17], e[8] = r[5] * n[3] + r[6] * n[8] + r[7] * n[13] + r[8] * n[18], e[9] = r[5] * n[4] + r[6] * n[9] + r[7] * n[14] + r[8] * n[19] + r[9], e[10] = r[10] * n[0] + r[11] * n[5] + r[12] * n[10] + r[13] * n[15], e[11] = r[10] * n[1] + r[11] * n[6] + r[12] * n[11] + r[13] * n[16], e[12] = r[10] * n[2] + r[11] * n[7] + r[12] * n[12] + r[13] * n[17], e[13] = r[10] * n[3] + r[11] * n[8] + r[12] * n[13] + r[13] * n[18], e[14] = r[10] * n[4] + r[11] * n[9] + r[12] * n[14] + r[13] * n[19] + r[14], e[15] = r[15] * n[0] + r[16] * n[5] + r[17] * n[10] + r[18] * n[15], e[16] = r[15] * n[1] + r[16] * n[6] + r[17] * n[11] + r[18] * n[16], e[17] = r[15] * n[2] + r[16] * n[7] + r[17] * n[12] + r[18] * n[17], e[18] = r[15] * n[3] + r[16] * n[8] + r[17] * n[13] + r[18] * n[18], e[19] = r[15] * n[4] + r[16] * n[9] + r[17] * n[14] + r[18] * n[19] + r[19], e;
  }
  _colorMatrix(e) {
    const r = new Float32Array(e);
    return r[4] /= 255, r[9] /= 255, r[14] /= 255, r[19] /= 255, r;
  }
  brightness(e, r) {
    const n = [e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(n, r);
  }
  tint(e, r) {
    const [n, i, s] = ge.shared.setValue(e).toArray(), o = [n, 0, 0, 0, 0, 0, i, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(o, r);
  }
  greyscale(e, r) {
    const n = [e, e, e, 0, 0, e, e, e, 0, 0, e, e, e, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(n, r);
  }
  blackAndWhite(e) {
    const r = [0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  hue(e, r) {
    e = (e || 0) / 180 * Math.PI;
    const n = Math.cos(e), i = Math.sin(e), s = Math.sqrt, o = 1 / 3, a = s(o), l = n + (1 - n) * o, u = o * (1 - n) - a * i, h = o * (1 - n) + a * i, c = o * (1 - n) + a * i, d = n + o * (1 - n), f = o * (1 - n) - a * i, p = o * (1 - n) - a * i, y = o * (1 - n) + a * i, _ = n + o * (1 - n), g = [l, u, h, 0, 0, c, d, f, 0, 0, p, y, _, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(g, r);
  }
  contrast(e, r) {
    const n = (e || 0) + 1, i = -0.5 * (n - 1), s = [n, 0, 0, 0, i, 0, n, 0, 0, i, 0, 0, n, 0, i, 0, 0, 0, 1, 0];
    this._loadMatrix(s, r);
  }
  saturate(e = 0, r) {
    const n = e * 2 / 3 + 1, i = (n - 1) * -0.5, s = [n, i, i, 0, 0, i, n, i, 0, 0, i, i, n, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(s, r);
  }
  desaturate() {
    this.saturate(-1);
  }
  negative(e) {
    const r = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  sepia(e) {
    const r = [0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  technicolor(e) {
    const r = [1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0, 11.793603434377337, -0.3087833385928097, 1.7658908555458428, -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616, -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  polaroid(e) {
    const r = [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  toBGR(e) {
    const r = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  kodachrome(e) {
    const r = [1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502, -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  browni(e) {
    const r = [0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0, 47.43192855600873, -0.037703249837783157, 0.8609577587992641, 0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335, -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  vintage(e) {
    const r = [0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 9.651285835294123, 0.02578397704808868, 0.6441188644374771, 0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719, -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  colorTone(e, r, n, i, s) {
    e = e || 0.2, r = r || 0.15, n = n || 16770432, i = i || 3375104;
    const o = ge.shared, [a, l, u] = o.setValue(n).toArray(), [h, c, d] = o.setValue(i).toArray(), f = [0.3, 0.59, 0.11, 0, 0, a, l, u, e, 0, h, c, d, r, 0, a - h, l - c, u - d, 0, 0];
    this._loadMatrix(f, s);
  }
  night(e, r) {
    e = e || 0.1;
    const n = [e * -2, -e, 0, 0, 0, -e, 0, e, 0, 0, 0, e, e * 2, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(n, r);
  }
  predator(e, r) {
    const n = [11.224130630493164 * e, -4.794486999511719 * e, -2.8746118545532227 * e, 0 * e, 0.40342438220977783 * e, -3.6330697536468506 * e, 9.193157196044922 * e, -2.951810836791992 * e, 0 * e, -1.316135048866272 * e, -3.2184197902679443 * e, -4.2375030517578125 * e, 7.476448059082031 * e, 0 * e, 0.8044459223747253 * e, 0, 0, 0, 1, 0];
    this._loadMatrix(n, r);
  }
  lsd(e) {
    const r = [2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(r, e);
  }
  reset() {
    const e = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(e, false);
  }
  get matrix() {
    return this.uniforms.m;
  }
  set matrix(e) {
    this.uniforms.m = e;
  }
  get alpha() {
    return this.uniforms.uAlpha;
  }
  set alpha(e) {
    this.uniforms.uAlpha = e;
  }
}
pd.prototype.grayscale = pd.prototype.greyscale;
var dC = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`, fC = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;
class pC extends it {
  constructor(e, r) {
    const n = new ve();
    e.renderable = false, super(fC, dC, { mapSampler: e._texture, filterMatrix: n, scale: { x: 1, y: 1 }, rotation: new Float32Array([1, 0, 0, 1]) }), this.maskSprite = e, this.maskMatrix = n, r == null && (r = 20), this.scale = new ae(r, r);
  }
  apply(e, r, n, i) {
    this.uniforms.filterMatrix = e.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
    const s = this.maskSprite.worldTransform, o = Math.sqrt(s.a * s.a + s.b * s.b), a = Math.sqrt(s.c * s.c + s.d * s.d);
    o !== 0 && a !== 0 && (this.uniforms.rotation[0] = s.a / o, this.uniforms.rotation[1] = s.b / o, this.uniforms.rotation[2] = s.c / a, this.uniforms.rotation[3] = s.d / a), e.applyFilter(this, r, n, i);
  }
  get map() {
    return this.uniforms.mapSampler;
  }
  set map(e) {
    this.uniforms.mapSampler = e;
  }
}
var mC = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`, gC = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;
class yC extends it {
  constructor() {
    super(gC, mC);
  }
}
var vC = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
class _C extends it {
  constructor(e = 0.5, r = Math.random()) {
    super(R0, vC, { uNoise: 0, uSeed: 0 }), this.noise = e, this.seed = r;
  }
  get noise() {
    return this.uniforms.uNoise;
  }
  set noise(e) {
    this.uniforms.uNoise = e;
  }
  get seed() {
    return this.uniforms.uSeed;
  }
  set seed(e) {
    this.uniforms.uSeed = e;
  }
}
const vg = { AlphaFilter: iC, BlurFilter: hC, BlurFilterPass: fd, ColorMatrixFilter: pd, DisplacementFilter: pC, FXAAFilter: yC, NoiseFilter: _C };
Object.entries(vg).forEach(([t5, e]) => {
  Object.defineProperty(vg, t5, { get() {
    return ie("7.1.0", `filters.${t5} has moved to ${t5}`), e;
  } });
});
class xC {
  constructor() {
    this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = false, this.tickerAdded = false, this._pauseUpdate = true;
  }
  init(e) {
    this.removeTickerListener(), this.events = e, this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = false, this.tickerAdded = false, this._pauseUpdate = true;
  }
  get pauseUpdate() {
    return this._pauseUpdate;
  }
  set pauseUpdate(e) {
    this._pauseUpdate = e;
  }
  addTickerListener() {
    this.tickerAdded || !this.domElement || (yt.system.add(this.tickerUpdate, this, Yn.INTERACTION), this.tickerAdded = true);
  }
  removeTickerListener() {
    this.tickerAdded && (yt.system.remove(this.tickerUpdate, this), this.tickerAdded = false);
  }
  pointerMoved() {
    this._didMove = true;
  }
  update() {
    if (!this.domElement || this._pauseUpdate) return;
    if (this._didMove) {
      this._didMove = false;
      return;
    }
    const e = this.events.rootPointerEvent;
    this.events.supportsTouchEvents && e.pointerType === "touch" || globalThis.document.dispatchEvent(new PointerEvent("pointermove", { clientX: e.clientX, clientY: e.clientY }));
  }
  tickerUpdate(e) {
    this._deltaTime += e, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.update());
  }
}
const Xr = new xC();
class Po {
  constructor(e) {
    this.bubbles = true, this.cancelBubble = true, this.cancelable = false, this.composed = false, this.defaultPrevented = false, this.eventPhase = Po.prototype.NONE, this.propagationStopped = false, this.propagationImmediatelyStopped = false, this.layer = new ae(), this.page = new ae(), this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = e;
  }
  get layerX() {
    return this.layer.x;
  }
  get layerY() {
    return this.layer.y;
  }
  get pageX() {
    return this.page.x;
  }
  get pageY() {
    return this.page.y;
  }
  get data() {
    return this;
  }
  composedPath() {
    return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path;
  }
  initEvent(e, r, n) {
    throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  initUIEvent(e, r, n, i, s) {
    throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  preventDefault() {
    this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = true;
  }
  stopImmediatePropagation() {
    this.propagationImmediatelyStopped = true;
  }
  stopPropagation() {
    this.propagationStopped = true;
  }
}
class Fl extends Po {
  constructor() {
    super(...arguments), this.client = new ae(), this.movement = new ae(), this.offset = new ae(), this.global = new ae(), this.screen = new ae();
  }
  get clientX() {
    return this.client.x;
  }
  get clientY() {
    return this.client.y;
  }
  get x() {
    return this.clientX;
  }
  get y() {
    return this.clientY;
  }
  get movementX() {
    return this.movement.x;
  }
  get movementY() {
    return this.movement.y;
  }
  get offsetX() {
    return this.offset.x;
  }
  get offsetY() {
    return this.offset.y;
  }
  get globalX() {
    return this.global.x;
  }
  get globalY() {
    return this.global.y;
  }
  get screenX() {
    return this.screen.x;
  }
  get screenY() {
    return this.screen.y;
  }
  getLocalPosition(e, r, n) {
    return e.worldTransform.applyInverse(n || this.global, r);
  }
  getModifierState(e) {
    return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(e);
  }
  initMouseEvent(e, r, n, i, s, o, a, l, u, h, c, d, f, p, y) {
    throw new Error("Method not implemented.");
  }
}
class Ot extends Fl {
  constructor() {
    super(...arguments), this.width = 0, this.height = 0, this.isPrimary = false;
  }
  getCoalescedEvents() {
    return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : [];
  }
  getPredictedEvents() {
    throw new Error("getPredictedEvents is not supported!");
  }
}
class Ui extends Fl {
  constructor() {
    super(...arguments), this.DOM_DELTA_PIXEL = 0, this.DOM_DELTA_LINE = 1, this.DOM_DELTA_PAGE = 2;
  }
}
Ui.DOM_DELTA_PIXEL = 0, Ui.DOM_DELTA_LINE = 1, Ui.DOM_DELTA_PAGE = 2;
const wC = 2048, EC = new ae(), Ih = new ae();
class SC {
  constructor(e) {
    this.dispatch = new Ao(), this.moveOnAll = false, this.enableGlobalMoveEvents = true, this.mappingState = { trackingData: {} }, this.eventPool = /* @__PURE__ */ new Map(), this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = false, this.rootTarget = e, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel);
  }
  addEventMapping(e, r) {
    this.mappingTable[e] || (this.mappingTable[e] = []), this.mappingTable[e].push({ fn: r, priority: 0 }), this.mappingTable[e].sort((n, i) => n.priority - i.priority);
  }
  dispatchEvent(e, r) {
    e.propagationStopped = false, e.propagationImmediatelyStopped = false, this.propagate(e, r), this.dispatch.emit(r || e.type, e);
  }
  mapEvent(e) {
    if (!this.rootTarget) return;
    const r = this.mappingTable[e.type];
    if (r) for (let n = 0, i = r.length; n < i; n++) r[n].fn(e);
    else console.warn(`[EventBoundary]: Event mapping not defined for ${e.type}`);
  }
  hitTest(e, r) {
    Xr.pauseUpdate = true;
    const n = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive", i = this[n](this.rootTarget, this.rootTarget.eventMode, EC.set(e, r), this.hitTestFn, this.hitPruneFn);
    return i && i[0];
  }
  propagate(e, r) {
    if (!e.target) return;
    const n = e.composedPath();
    e.eventPhase = e.CAPTURING_PHASE;
    for (let i = 0, s = n.length - 1; i < s; i++) if (e.currentTarget = n[i], this.notifyTarget(e, r), e.propagationStopped || e.propagationImmediatelyStopped) return;
    if (e.eventPhase = e.AT_TARGET, e.currentTarget = e.target, this.notifyTarget(e, r), !(e.propagationStopped || e.propagationImmediatelyStopped)) {
      e.eventPhase = e.BUBBLING_PHASE;
      for (let i = n.length - 2; i >= 0; i--) if (e.currentTarget = n[i], this.notifyTarget(e, r), e.propagationStopped || e.propagationImmediatelyStopped) return;
    }
  }
  all(e, r, n = this._allInteractiveElements) {
    if (n.length === 0) return;
    e.eventPhase = e.BUBBLING_PHASE;
    const i = Array.isArray(r) ? r : [r];
    for (let s = n.length - 1; s >= 0; s--) i.forEach((o) => {
      e.currentTarget = n[s], this.notifyTarget(e, o);
    });
  }
  propagationPath(e) {
    const r = [e];
    for (let n = 0; n < wC && e !== this.rootTarget; n++) {
      if (!e.parent) throw new Error("Cannot find propagation path to disconnected target");
      r.push(e.parent), e = e.parent;
    }
    return r.reverse(), r;
  }
  hitTestMoveRecursive(e, r, n, i, s, o = false) {
    let a = false;
    if (this._interactivePrune(e)) return null;
    if ((e.eventMode === "dynamic" || r === "dynamic") && (Xr.pauseUpdate = false), e.interactiveChildren && e.children) {
      const h = e.children;
      for (let c = h.length - 1; c >= 0; c--) {
        const d = h[c], f = this.hitTestMoveRecursive(d, this._isInteractive(r) ? r : d.eventMode, n, i, s, o || s(e, n));
        if (f) {
          if (f.length > 0 && !f[f.length - 1].parent) continue;
          const p = e.isInteractive();
          (f.length > 0 || p) && (p && this._allInteractiveElements.push(e), f.push(e)), this._hitElements.length === 0 && (this._hitElements = f), a = true;
        }
      }
    }
    const l = this._isInteractive(r), u = e.isInteractive();
    return l && u && this._allInteractiveElements.push(e), o || this._hitElements.length > 0 ? null : a ? this._hitElements : l && !s(e, n) && i(e, n) ? u ? [e] : [] : null;
  }
  hitTestRecursive(e, r, n, i, s) {
    if (this._interactivePrune(e) || s(e, n)) return null;
    if ((e.eventMode === "dynamic" || r === "dynamic") && (Xr.pauseUpdate = false), e.interactiveChildren && e.children) {
      const l = e.children;
      for (let u = l.length - 1; u >= 0; u--) {
        const h = l[u], c = this.hitTestRecursive(h, this._isInteractive(r) ? r : h.eventMode, n, i, s);
        if (c) {
          if (c.length > 0 && !c[c.length - 1].parent) continue;
          const d = e.isInteractive();
          return (c.length > 0 || d) && c.push(e), c;
        }
      }
    }
    const o = this._isInteractive(r), a = e.isInteractive();
    return o && i(e, n) ? a ? [e] : [] : null;
  }
  _isInteractive(e) {
    return e === "static" || e === "dynamic";
  }
  _interactivePrune(e) {
    return !!(!e || e.isMask || !e.visible || !e.renderable || e.eventMode === "none" || e.eventMode === "passive" && !e.interactiveChildren || e.isMask);
  }
  hitPruneFn(e, r) {
    var _a2;
    if (e.hitArea && (e.worldTransform.applyInverse(r, Ih), !e.hitArea.contains(Ih.x, Ih.y))) return true;
    if (e._mask) {
      const n = e._mask.isMaskData ? e._mask.maskObject : e._mask;
      if (n && !((_a2 = n.containsPoint) == null ? void 0 : _a2.call(n, r))) return true;
    }
    return false;
  }
  hitTestFn(e, r) {
    return e.eventMode === "passive" ? false : e.hitArea ? true : e.containsPoint ? e.containsPoint(r) : false;
  }
  notifyTarget(e, r) {
    var _a2, _b2;
    r = r ?? e.type;
    const n = `on${r}`;
    (_b2 = (_a2 = e.currentTarget)[n]) == null ? void 0 : _b2.call(_a2, e);
    const i = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? `${r}capture` : r;
    this.notifyListeners(e, i), e.eventPhase === e.AT_TARGET && this.notifyListeners(e, r);
  }
  mapPointerDown(e) {
    if (!(e instanceof Ot)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const r = this.createPointerEvent(e);
    if (this.dispatchEvent(r, "pointerdown"), r.pointerType === "touch") this.dispatchEvent(r, "touchstart");
    else if (r.pointerType === "mouse" || r.pointerType === "pen") {
      const i = r.button === 2;
      this.dispatchEvent(r, i ? "rightdown" : "mousedown");
    }
    const n = this.trackingData(e.pointerId);
    n.pressTargetsByButton[e.button] = r.composedPath(), this.freeEvent(r);
  }
  mapPointerMove(e) {
    var _a2, _b2;
    if (!(e instanceof Ot)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = true;
    const r = this.createPointerEvent(e);
    this._isPointerMoveEvent = false;
    const n = r.pointerType === "mouse" || r.pointerType === "pen", i = this.trackingData(e.pointerId), s = this.findMountedTarget(i.overTargets);
    if (((_a2 = i.overTargets) == null ? void 0 : _a2.length) > 0 && s !== r.target) {
      const l = e.type === "mousemove" ? "mouseout" : "pointerout", u = this.createPointerEvent(e, l, s);
      if (this.dispatchEvent(u, "pointerout"), n && this.dispatchEvent(u, "mouseout"), !r.composedPath().includes(s)) {
        const h = this.createPointerEvent(e, "pointerleave", s);
        for (h.eventPhase = h.AT_TARGET; h.target && !r.composedPath().includes(h.target); ) h.currentTarget = h.target, this.notifyTarget(h), n && this.notifyTarget(h, "mouseleave"), h.target = h.target.parent;
        this.freeEvent(h);
      }
      this.freeEvent(u);
    }
    if (s !== r.target) {
      const l = e.type === "mousemove" ? "mouseover" : "pointerover", u = this.clonePointerEvent(r, l);
      this.dispatchEvent(u, "pointerover"), n && this.dispatchEvent(u, "mouseover");
      let h = s == null ? void 0 : s.parent;
      for (; h && h !== this.rootTarget.parent && h !== r.target; ) h = h.parent;
      if (!h || h === this.rootTarget.parent) {
        const c = this.clonePointerEvent(r, "pointerenter");
        for (c.eventPhase = c.AT_TARGET; c.target && c.target !== s && c.target !== this.rootTarget.parent; ) c.currentTarget = c.target, this.notifyTarget(c), n && this.notifyTarget(c, "mouseenter"), c.target = c.target.parent;
        this.freeEvent(c);
      }
      this.freeEvent(u);
    }
    const o = [], a = this.enableGlobalMoveEvents ?? true;
    this.moveOnAll ? o.push("pointermove") : this.dispatchEvent(r, "pointermove"), a && o.push("globalpointermove"), r.pointerType === "touch" && (this.moveOnAll ? o.splice(1, 0, "touchmove") : this.dispatchEvent(r, "touchmove"), a && o.push("globaltouchmove")), n && (this.moveOnAll ? o.splice(1, 0, "mousemove") : this.dispatchEvent(r, "mousemove"), a && o.push("globalmousemove"), this.cursor = (_b2 = r.target) == null ? void 0 : _b2.cursor), o.length > 0 && this.all(r, o), this._allInteractiveElements.length = 0, this._hitElements.length = 0, i.overTargets = r.composedPath(), this.freeEvent(r);
  }
  mapPointerOver(e) {
    var _a2;
    if (!(e instanceof Ot)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const r = this.trackingData(e.pointerId), n = this.createPointerEvent(e), i = n.pointerType === "mouse" || n.pointerType === "pen";
    this.dispatchEvent(n, "pointerover"), i && this.dispatchEvent(n, "mouseover"), n.pointerType === "mouse" && (this.cursor = (_a2 = n.target) == null ? void 0 : _a2.cursor);
    const s = this.clonePointerEvent(n, "pointerenter");
    for (s.eventPhase = s.AT_TARGET; s.target && s.target !== this.rootTarget.parent; ) s.currentTarget = s.target, this.notifyTarget(s), i && this.notifyTarget(s, "mouseenter"), s.target = s.target.parent;
    r.overTargets = n.composedPath(), this.freeEvent(n), this.freeEvent(s);
  }
  mapPointerOut(e) {
    if (!(e instanceof Ot)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const r = this.trackingData(e.pointerId);
    if (r.overTargets) {
      const n = e.pointerType === "mouse" || e.pointerType === "pen", i = this.findMountedTarget(r.overTargets), s = this.createPointerEvent(e, "pointerout", i);
      this.dispatchEvent(s), n && this.dispatchEvent(s, "mouseout");
      const o = this.createPointerEvent(e, "pointerleave", i);
      for (o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent; ) o.currentTarget = o.target, this.notifyTarget(o), n && this.notifyTarget(o, "mouseleave"), o.target = o.target.parent;
      r.overTargets = null, this.freeEvent(s), this.freeEvent(o);
    }
    this.cursor = null;
  }
  mapPointerUp(e) {
    if (!(e instanceof Ot)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const r = performance.now(), n = this.createPointerEvent(e);
    if (this.dispatchEvent(n, "pointerup"), n.pointerType === "touch") this.dispatchEvent(n, "touchend");
    else if (n.pointerType === "mouse" || n.pointerType === "pen") {
      const a = n.button === 2;
      this.dispatchEvent(n, a ? "rightup" : "mouseup");
    }
    const i = this.trackingData(e.pointerId), s = this.findMountedTarget(i.pressTargetsByButton[e.button]);
    let o = s;
    if (s && !n.composedPath().includes(s)) {
      let a = s;
      for (; a && !n.composedPath().includes(a); ) {
        if (n.currentTarget = a, this.notifyTarget(n, "pointerupoutside"), n.pointerType === "touch") this.notifyTarget(n, "touchendoutside");
        else if (n.pointerType === "mouse" || n.pointerType === "pen") {
          const l = n.button === 2;
          this.notifyTarget(n, l ? "rightupoutside" : "mouseupoutside");
        }
        a = a.parent;
      }
      delete i.pressTargetsByButton[e.button], o = a;
    }
    if (o) {
      const a = this.clonePointerEvent(n, "click");
      a.target = o, a.path = null, i.clicksByButton[e.button] || (i.clicksByButton[e.button] = { clickCount: 0, target: a.target, timeStamp: r });
      const l = i.clicksByButton[e.button];
      if (l.target === a.target && r - l.timeStamp < 200 ? ++l.clickCount : l.clickCount = 1, l.target = a.target, l.timeStamp = r, a.detail = l.clickCount, a.pointerType === "mouse") {
        const u = a.button === 2;
        this.dispatchEvent(a, u ? "rightclick" : "click");
      } else a.pointerType === "touch" && this.dispatchEvent(a, "tap");
      this.dispatchEvent(a, "pointertap"), this.freeEvent(a);
    }
    this.freeEvent(n);
  }
  mapPointerUpOutside(e) {
    if (!(e instanceof Ot)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const r = this.trackingData(e.pointerId), n = this.findMountedTarget(r.pressTargetsByButton[e.button]), i = this.createPointerEvent(e);
    if (n) {
      let s = n;
      for (; s; ) i.currentTarget = s, this.notifyTarget(i, "pointerupoutside"), i.pointerType === "touch" ? this.notifyTarget(i, "touchendoutside") : (i.pointerType === "mouse" || i.pointerType === "pen") && this.notifyTarget(i, i.button === 2 ? "rightupoutside" : "mouseupoutside"), s = s.parent;
      delete r.pressTargetsByButton[e.button];
    }
    this.freeEvent(i);
  }
  mapWheel(e) {
    if (!(e instanceof Ui)) {
      console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
      return;
    }
    const r = this.createWheelEvent(e);
    this.dispatchEvent(r), this.freeEvent(r);
  }
  findMountedTarget(e) {
    if (!e) return null;
    let r = e[0];
    for (let n = 1; n < e.length && e[n].parent === r; n++) r = e[n];
    return r;
  }
  createPointerEvent(e, r, n) {
    const i = this.allocateEvent(Ot);
    return this.copyPointerData(e, i), this.copyMouseData(e, i), this.copyData(e, i), i.nativeEvent = e.nativeEvent, i.originalEvent = e, i.target = n ?? this.hitTest(i.global.x, i.global.y) ?? this._hitElements[0], typeof r == "string" && (i.type = r), i;
  }
  createWheelEvent(e) {
    const r = this.allocateEvent(Ui);
    return this.copyWheelData(e, r), this.copyMouseData(e, r), this.copyData(e, r), r.nativeEvent = e.nativeEvent, r.originalEvent = e, r.target = this.hitTest(r.global.x, r.global.y), r;
  }
  clonePointerEvent(e, r) {
    const n = this.allocateEvent(Ot);
    return n.nativeEvent = e.nativeEvent, n.originalEvent = e.originalEvent, this.copyPointerData(e, n), this.copyMouseData(e, n), this.copyData(e, n), n.target = e.target, n.path = e.composedPath().slice(), n.type = r ?? n.type, n;
  }
  copyWheelData(e, r) {
    r.deltaMode = e.deltaMode, r.deltaX = e.deltaX, r.deltaY = e.deltaY, r.deltaZ = e.deltaZ;
  }
  copyPointerData(e, r) {
    e instanceof Ot && r instanceof Ot && (r.pointerId = e.pointerId, r.width = e.width, r.height = e.height, r.isPrimary = e.isPrimary, r.pointerType = e.pointerType, r.pressure = e.pressure, r.tangentialPressure = e.tangentialPressure, r.tiltX = e.tiltX, r.tiltY = e.tiltY, r.twist = e.twist);
  }
  copyMouseData(e, r) {
    e instanceof Fl && r instanceof Fl && (r.altKey = e.altKey, r.button = e.button, r.buttons = e.buttons, r.client.copyFrom(e.client), r.ctrlKey = e.ctrlKey, r.metaKey = e.metaKey, r.movement.copyFrom(e.movement), r.screen.copyFrom(e.screen), r.shiftKey = e.shiftKey, r.global.copyFrom(e.global));
  }
  copyData(e, r) {
    r.isTrusted = e.isTrusted, r.srcElement = e.srcElement, r.timeStamp = performance.now(), r.type = e.type, r.detail = e.detail, r.view = e.view, r.which = e.which, r.layer.copyFrom(e.layer), r.page.copyFrom(e.page);
  }
  trackingData(e) {
    return this.mappingState.trackingData[e] || (this.mappingState.trackingData[e] = { pressTargetsByButton: {}, clicksByButton: {}, overTarget: null }), this.mappingState.trackingData[e];
  }
  allocateEvent(e) {
    this.eventPool.has(e) || this.eventPool.set(e, []);
    const r = this.eventPool.get(e).pop() || new e(this);
    return r.eventPhase = r.NONE, r.currentTarget = null, r.path = null, r.target = null, r;
  }
  freeEvent(e) {
    if (e.manager !== this) throw new Error("It is illegal to free an event not managed by this EventBoundary!");
    const r = e.constructor;
    this.eventPool.has(r) || this.eventPool.set(r, []), this.eventPool.get(r).push(e);
  }
  notifyListeners(e, r) {
    const n = e.currentTarget._events[r];
    if (n && e.currentTarget.isInteractive()) if ("fn" in n) n.once && e.currentTarget.removeListener(r, n.fn, void 0, true), n.fn.call(n.context, e);
    else for (let i = 0, s = n.length; i < s && !e.propagationImmediatelyStopped; i++) n[i].once && e.currentTarget.removeListener(r, n[i].fn, void 0, true), n[i].fn.call(n[i].context, e);
  }
}
const TC = 1, bC = { touchstart: "pointerdown", touchend: "pointerup", touchendoutside: "pointerupoutside", touchmove: "pointermove", touchcancel: "pointercancel" }, md = class gd {
  constructor(e) {
    this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = e, this.rootBoundary = new SC(null), Xr.init(this), this.autoPreventDefault = true, this.eventsAdded = false, this.rootPointerEvent = new Ot(null), this.rootWheelEvent = new Ui(null), this.cursorStyles = { default: "inherit", pointer: "pointer" }, this.features = new Proxy({ ...gd.defaultEventFeatures }, { set: (r, n, i) => (n === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = i), r[n] = i, true) }), this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerOverOut = this.onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this);
  }
  static get defaultEventMode() {
    return this._defaultEventMode;
  }
  init(e) {
    const { view: r, resolution: n } = this.renderer;
    this.setTargetElement(r), this.resolution = n, gd._defaultEventMode = e.eventMode ?? "auto", Object.assign(this.features, e.eventFeatures ?? {}), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove;
  }
  resolutionChange(e) {
    this.resolution = e;
  }
  destroy() {
    this.setTargetElement(null), this.renderer = null;
  }
  setCursor(e) {
    e = e || "default";
    let r = true;
    if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (r = false), this.currentCursor === e) return;
    this.currentCursor = e;
    const n = this.cursorStyles[e];
    if (n) switch (typeof n) {
      case "string":
        r && (this.domElement.style.cursor = n);
        break;
      case "function":
        n(e);
        break;
      case "object":
        r && Object.assign(this.domElement.style, n);
        break;
    }
    else r && typeof e == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, e) && (this.domElement.style.cursor = e);
  }
  get pointer() {
    return this.rootPointerEvent;
  }
  onPointerDown(e) {
    if (!this.features.click) return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    const r = this.normalizeToPointerData(e);
    this.autoPreventDefault && r[0].isNormalized && (e.cancelable || !("cancelable" in e)) && e.preventDefault();
    for (let n = 0, i = r.length; n < i; n++) {
      const s = r[n], o = this.bootstrapEvent(this.rootPointerEvent, s);
      this.rootBoundary.mapEvent(o);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerMove(e) {
    if (!this.features.move) return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, Xr.pointerMoved();
    const r = this.normalizeToPointerData(e);
    for (let n = 0, i = r.length; n < i; n++) {
      const s = this.bootstrapEvent(this.rootPointerEvent, r[n]);
      this.rootBoundary.mapEvent(s);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerUp(e) {
    if (!this.features.click) return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    let r = e.target;
    e.composedPath && e.composedPath().length > 0 && (r = e.composedPath()[0]);
    const n = r !== this.domElement ? "outside" : "", i = this.normalizeToPointerData(e);
    for (let s = 0, o = i.length; s < o; s++) {
      const a = this.bootstrapEvent(this.rootPointerEvent, i[s]);
      a.type += n, this.rootBoundary.mapEvent(a);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerOverOut(e) {
    if (!this.features.click) return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    const r = this.normalizeToPointerData(e);
    for (let n = 0, i = r.length; n < i; n++) {
      const s = this.bootstrapEvent(this.rootPointerEvent, r[n]);
      this.rootBoundary.mapEvent(s);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onWheel(e) {
    if (!this.features.wheel) return;
    const r = this.normalizeWheelEvent(e);
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(r);
  }
  setTargetElement(e) {
    this.removeEvents(), this.domElement = e, Xr.domElement = e, this.addEvents();
  }
  addEvents() {
    if (this.eventsAdded || !this.domElement) return;
    Xr.addTickerListener();
    const e = this.domElement.style;
    e && (globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "none", e.msTouchAction = "none") : this.supportsPointerEvents && (e.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, true), this.domElement.addEventListener("pointerdown", this.onPointerDown, true), this.domElement.addEventListener("pointerleave", this.onPointerOverOut, true), this.domElement.addEventListener("pointerover", this.onPointerOverOut, true), globalThis.addEventListener("pointerup", this.onPointerUp, true)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, true), this.domElement.addEventListener("mousedown", this.onPointerDown, true), this.domElement.addEventListener("mouseout", this.onPointerOverOut, true), this.domElement.addEventListener("mouseover", this.onPointerOverOut, true), globalThis.addEventListener("mouseup", this.onPointerUp, true), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this.onPointerDown, true), this.domElement.addEventListener("touchend", this.onPointerUp, true), this.domElement.addEventListener("touchmove", this.onPointerMove, true))), this.domElement.addEventListener("wheel", this.onWheel, { passive: true, capture: true }), this.eventsAdded = true;
  }
  removeEvents() {
    if (!this.eventsAdded || !this.domElement) return;
    Xr.removeTickerListener();
    const e = this.domElement.style;
    globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "", e.msTouchAction = "") : this.supportsPointerEvents && (e.touchAction = ""), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, true), this.domElement.removeEventListener("pointerdown", this.onPointerDown, true), this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, true), this.domElement.removeEventListener("pointerover", this.onPointerOverOut, true), globalThis.removeEventListener("pointerup", this.onPointerUp, true)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, true), this.domElement.removeEventListener("mousedown", this.onPointerDown, true), this.domElement.removeEventListener("mouseout", this.onPointerOverOut, true), this.domElement.removeEventListener("mouseover", this.onPointerOverOut, true), globalThis.removeEventListener("mouseup", this.onPointerUp, true), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this.onPointerDown, true), this.domElement.removeEventListener("touchend", this.onPointerUp, true), this.domElement.removeEventListener("touchmove", this.onPointerMove, true))), this.domElement.removeEventListener("wheel", this.onWheel, true), this.domElement = null, this.eventsAdded = false;
  }
  mapPositionToPoint(e, r, n) {
    const i = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : { width: this.domElement.width, height: this.domElement.height, left: 0, top: 0 }, s = 1 / this.resolution;
    e.x = (r - i.left) * (this.domElement.width / i.width) * s, e.y = (n - i.top) * (this.domElement.height / i.height) * s;
  }
  normalizeToPointerData(e) {
    const r = [];
    if (this.supportsTouchEvents && e instanceof TouchEvent) for (let n = 0, i = e.changedTouches.length; n < i; n++) {
      const s = e.changedTouches[n];
      typeof s.button > "u" && (s.button = 0), typeof s.buttons > "u" && (s.buttons = 1), typeof s.isPrimary > "u" && (s.isPrimary = e.touches.length === 1 && e.type === "touchstart"), typeof s.width > "u" && (s.width = s.radiusX || 1), typeof s.height > "u" && (s.height = s.radiusY || 1), typeof s.tiltX > "u" && (s.tiltX = 0), typeof s.tiltY > "u" && (s.tiltY = 0), typeof s.pointerType > "u" && (s.pointerType = "touch"), typeof s.pointerId > "u" && (s.pointerId = s.identifier || 0), typeof s.pressure > "u" && (s.pressure = s.force || 0.5), typeof s.twist > "u" && (s.twist = 0), typeof s.tangentialPressure > "u" && (s.tangentialPressure = 0), typeof s.layerX > "u" && (s.layerX = s.offsetX = s.clientX), typeof s.layerY > "u" && (s.layerY = s.offsetY = s.clientY), s.isNormalized = true, s.type = e.type, r.push(s);
    }
    else if (!globalThis.MouseEvent || e instanceof MouseEvent && (!this.supportsPointerEvents || !(e instanceof globalThis.PointerEvent))) {
      const n = e;
      typeof n.isPrimary > "u" && (n.isPrimary = true), typeof n.width > "u" && (n.width = 1), typeof n.height > "u" && (n.height = 1), typeof n.tiltX > "u" && (n.tiltX = 0), typeof n.tiltY > "u" && (n.tiltY = 0), typeof n.pointerType > "u" && (n.pointerType = "mouse"), typeof n.pointerId > "u" && (n.pointerId = TC), typeof n.pressure > "u" && (n.pressure = 0.5), typeof n.twist > "u" && (n.twist = 0), typeof n.tangentialPressure > "u" && (n.tangentialPressure = 0), n.isNormalized = true, r.push(n);
    } else r.push(e);
    return r;
  }
  normalizeWheelEvent(e) {
    const r = this.rootWheelEvent;
    return this.transferMouseData(r, e), r.deltaX = e.deltaX, r.deltaY = e.deltaY, r.deltaZ = e.deltaZ, r.deltaMode = e.deltaMode, this.mapPositionToPoint(r.screen, e.clientX, e.clientY), r.global.copyFrom(r.screen), r.offset.copyFrom(r.screen), r.nativeEvent = e, r.type = e.type, r;
  }
  bootstrapEvent(e, r) {
    return e.originalEvent = null, e.nativeEvent = r, e.pointerId = r.pointerId, e.width = r.width, e.height = r.height, e.isPrimary = r.isPrimary, e.pointerType = r.pointerType, e.pressure = r.pressure, e.tangentialPressure = r.tangentialPressure, e.tiltX = r.tiltX, e.tiltY = r.tiltY, e.twist = r.twist, this.transferMouseData(e, r), this.mapPositionToPoint(e.screen, r.clientX, r.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.isTrusted = r.isTrusted, e.type === "pointerleave" && (e.type = "pointerout"), e.type.startsWith("mouse") && (e.type = e.type.replace("mouse", "pointer")), e.type.startsWith("touch") && (e.type = bC[e.type] || e.type), e;
  }
  transferMouseData(e, r) {
    e.isTrusted = r.isTrusted, e.srcElement = r.srcElement, e.timeStamp = performance.now(), e.type = r.type, e.altKey = r.altKey, e.button = r.button, e.buttons = r.buttons, e.client.x = r.clientX, e.client.y = r.clientY, e.ctrlKey = r.ctrlKey, e.metaKey = r.metaKey, e.movement.x = r.movementX, e.movement.y = r.movementY, e.page.x = r.pageX, e.page.y = r.pageY, e.relatedTarget = null, e.shiftKey = r.shiftKey;
  }
};
md.extension = { name: "events", type: [L.RendererSystem, L.CanvasRendererSystem] }, md.defaultEventFeatures = { move: true, globalMove: true, click: true, wheel: true };
let yd = md;
W.add(yd);
function _g(t5) {
  return t5 === "dynamic" || t5 === "static";
}
const AC = { onclick: null, onmousedown: null, onmouseenter: null, onmouseleave: null, onmousemove: null, onglobalmousemove: null, onmouseout: null, onmouseover: null, onmouseup: null, onmouseupoutside: null, onpointercancel: null, onpointerdown: null, onpointerenter: null, onpointerleave: null, onpointermove: null, onglobalpointermove: null, onpointerout: null, onpointerover: null, onpointertap: null, onpointerup: null, onpointerupoutside: null, onrightclick: null, onrightdown: null, onrightup: null, onrightupoutside: null, ontap: null, ontouchcancel: null, ontouchend: null, ontouchendoutside: null, ontouchmove: null, onglobaltouchmove: null, ontouchstart: null, onwheel: null, _internalInteractive: void 0, get interactive() {
  return this._internalInteractive ?? _g(yd.defaultEventMode);
}, set interactive(t5) {
  ie("7.2.0", "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."), this._internalInteractive = t5, this.eventMode = t5 ? "static" : "auto";
}, _internalEventMode: void 0, get eventMode() {
  return this._internalEventMode ?? yd.defaultEventMode;
}, set eventMode(t5) {
  this._internalInteractive = _g(t5), this._internalEventMode = t5;
}, isInteractive() {
  return this.eventMode === "static" || this.eventMode === "dynamic";
}, interactiveChildren: true, hitArea: null, addEventListener(t5, e, r) {
  const n = typeof r == "boolean" && r || typeof r == "object" && r.capture, i = typeof r == "object" ? r.signal : void 0, s = typeof r == "object" ? r.once === true : false, o = typeof e == "function" ? void 0 : e;
  t5 = n ? `${t5}capture` : t5;
  const a = typeof e == "function" ? e : e.handleEvent, l = this;
  i && i.addEventListener("abort", () => {
    l.off(t5, a, o);
  }), s ? l.once(t5, a, o) : l.on(t5, a, o);
}, removeEventListener(t5, e, r) {
  const n = typeof r == "boolean" && r || typeof r == "object" && r.capture, i = typeof e == "function" ? void 0 : e;
  t5 = n ? `${t5}capture` : t5, e = typeof e == "function" ? e : e.handleEvent, this.off(t5, e, i);
}, dispatchEvent(t5) {
  if (!(t5 instanceof Po)) throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
  return t5.defaultPrevented = false, t5.path = null, t5.target = this, t5.manager.dispatchEvent(t5), !t5.defaultPrevented;
} };
Ce.mixin(AC);
const CC = { accessible: false, accessibleTitle: null, accessibleHint: null, tabIndex: 0, _accessibleActive: false, _accessibleDiv: null, accessibleType: "button", accessiblePointerEvents: "auto", accessibleChildren: true, renderId: -1 };
Ce.mixin(CC);
const IC = 9, da = 100, RC = 0, PC = 0, xg = 2, wg = 1, MC = -1e3, kC = -1e3, FC = 2;
class L0 {
  constructor(e) {
    this.debug = false, this._isActive = false, this._isMobileAccessibility = false, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, (Sr.tablet || Sr.phone) && this.createTouchHook();
    const r = document.createElement("div");
    r.style.width = `${da}px`, r.style.height = `${da}px`, r.style.position = "absolute", r.style.top = `${RC}px`, r.style.left = `${PC}px`, r.style.zIndex = xg.toString(), this.div = r, this.renderer = e, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, false);
  }
  get isActive() {
    return this._isActive;
  }
  get isMobileAccessibility() {
    return this._isMobileAccessibility;
  }
  createTouchHook() {
    const e = document.createElement("button");
    e.style.width = `${wg}px`, e.style.height = `${wg}px`, e.style.position = "absolute", e.style.top = `${MC}px`, e.style.left = `${kC}px`, e.style.zIndex = FC.toString(), e.style.backgroundColor = "#FF0000", e.title = "select to enable accessibility for this content", e.addEventListener("focus", () => {
      this._isMobileAccessibility = true, this.activate(), this.destroyTouchHook();
    }), document.body.appendChild(e), this._hookDiv = e;
  }
  destroyTouchHook() {
    this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null);
  }
  activate() {
    var _a2;
    this._isActive || (this._isActive = true, globalThis.document.addEventListener("mousemove", this._onMouseMove, true), globalThis.removeEventListener("keydown", this._onKeyDown, false), this.renderer.on("postrender", this.update, this), (_a2 = this.renderer.view.parentNode) == null ? void 0 : _a2.appendChild(this.div));
  }
  deactivate() {
    var _a2;
    !this._isActive || this._isMobileAccessibility || (this._isActive = false, globalThis.document.removeEventListener("mousemove", this._onMouseMove, true), globalThis.addEventListener("keydown", this._onKeyDown, false), this.renderer.off("postrender", this.update), (_a2 = this.div.parentNode) == null ? void 0 : _a2.removeChild(this.div));
  }
  updateAccessibleObjects(e) {
    if (!e.visible || !e.accessibleChildren) return;
    e.accessible && e.isInteractive() && (e._accessibleActive || this.addChild(e), e.renderId = this.renderId);
    const r = e.children;
    if (r) for (let n = 0; n < r.length; n++) this.updateAccessibleObjects(r[n]);
  }
  update() {
    const e = performance.now();
    if (Sr.android.device && e < this.androidUpdateCount || (this.androidUpdateCount = e + this.androidUpdateFrequency, !this.renderer.renderingToScreen)) return;
    this.renderer.lastObjectRendered && this.updateAccessibleObjects(this.renderer.lastObjectRendered);
    const { x: r, y: n, width: i, height: s } = this.renderer.view.getBoundingClientRect(), { width: o, height: a, resolution: l } = this.renderer, u = i / o * l, h = s / a * l;
    let c = this.div;
    c.style.left = `${r}px`, c.style.top = `${n}px`, c.style.width = `${o}px`, c.style.height = `${a}px`;
    for (let d = 0; d < this.children.length; d++) {
      const f = this.children[d];
      if (f.renderId !== this.renderId) f._accessibleActive = false, Oi(this.children, d, 1), this.div.removeChild(f._accessibleDiv), this.pool.push(f._accessibleDiv), f._accessibleDiv = null, d--;
      else {
        c = f._accessibleDiv;
        let p = f.hitArea;
        const y = f.worldTransform;
        f.hitArea ? (c.style.left = `${(y.tx + p.x * y.a) * u}px`, c.style.top = `${(y.ty + p.y * y.d) * h}px`, c.style.width = `${p.width * y.a * u}px`, c.style.height = `${p.height * y.d * h}px`) : (p = f.getBounds(), this.capHitArea(p), c.style.left = `${p.x * u}px`, c.style.top = `${p.y * h}px`, c.style.width = `${p.width * u}px`, c.style.height = `${p.height * h}px`, c.title !== f.accessibleTitle && f.accessibleTitle !== null && (c.title = f.accessibleTitle), c.getAttribute("aria-label") !== f.accessibleHint && f.accessibleHint !== null && c.setAttribute("aria-label", f.accessibleHint)), (f.accessibleTitle !== c.title || f.tabIndex !== c.tabIndex) && (c.title = f.accessibleTitle, c.tabIndex = f.tabIndex, this.debug && this.updateDebugHTML(c));
      }
    }
    this.renderId++;
  }
  updateDebugHTML(e) {
    e.innerHTML = `type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`;
  }
  capHitArea(e) {
    e.x < 0 && (e.width += e.x, e.x = 0), e.y < 0 && (e.height += e.y, e.y = 0);
    const { width: r, height: n } = this.renderer;
    e.x + e.width > r && (e.width = r - e.x), e.y + e.height > n && (e.height = n - e.y);
  }
  addChild(e) {
    let r = this.pool.pop();
    r || (r = document.createElement("button"), r.style.width = `${da}px`, r.style.height = `${da}px`, r.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", r.style.position = "absolute", r.style.zIndex = xg.toString(), r.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? r.setAttribute("aria-live", "off") : r.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? r.setAttribute("aria-relevant", "additions") : r.setAttribute("aria-relevant", "text"), r.addEventListener("click", this._onClick.bind(this)), r.addEventListener("focus", this._onFocus.bind(this)), r.addEventListener("focusout", this._onFocusOut.bind(this))), r.style.pointerEvents = e.accessiblePointerEvents, r.type = e.accessibleType, e.accessibleTitle && e.accessibleTitle !== null ? r.title = e.accessibleTitle : (!e.accessibleHint || e.accessibleHint === null) && (r.title = `displayObject ${e.tabIndex}`), e.accessibleHint && e.accessibleHint !== null && r.setAttribute("aria-label", e.accessibleHint), this.debug && this.updateDebugHTML(r), e._accessibleActive = true, e._accessibleDiv = r, r.displayObject = e, this.children.push(e), this.div.appendChild(e._accessibleDiv), e._accessibleDiv.tabIndex = e.tabIndex;
  }
  _dispatchEvent(e, r) {
    const { displayObject: n } = e.target, i = this.renderer.events.rootBoundary, s = Object.assign(new Po(i), { target: n });
    i.rootTarget = this.renderer.lastObjectRendered, r.forEach((o) => i.dispatchEvent(s, o));
  }
  _onClick(e) {
    this._dispatchEvent(e, ["click", "pointertap", "tap"]);
  }
  _onFocus(e) {
    e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(e, ["mouseover"]);
  }
  _onFocusOut(e) {
    e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "polite"), this._dispatchEvent(e, ["mouseout"]);
  }
  _onKeyDown(e) {
    e.keyCode === IC && this.activate();
  }
  _onMouseMove(e) {
    e.movementX === 0 && e.movementY === 0 || this.deactivate();
  }
  destroy() {
    this.destroyTouchHook(), this.div = null, globalThis.document.removeEventListener("mousemove", this._onMouseMove, true), globalThis.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null;
  }
}
L0.extension = { name: "accessibility", type: [L.RendererPlugin, L.CanvasRendererPlugin] };
W.add(L0);
const U0 = class vd {
  constructor(e) {
    this.stage = new et(), e = Object.assign({ forceCanvas: false }, e), this.renderer = jA(e), vd._plugins.forEach((r) => {
      r.init.call(this, e);
    });
  }
  render() {
    this.renderer.render(this.stage);
  }
  get view() {
    var _a2;
    return (_a2 = this.renderer) == null ? void 0 : _a2.view;
  }
  get screen() {
    var _a2;
    return (_a2 = this.renderer) == null ? void 0 : _a2.screen;
  }
  destroy(e, r) {
    const n = vd._plugins.slice(0);
    n.reverse(), n.forEach((i) => {
      i.destroy.call(this);
    }), this.stage.destroy(r), this.stage = null, this.renderer.destroy(e), this.renderer = null;
  }
};
U0._plugins = [];
let G0 = U0;
W.handleByList(L.Application, G0._plugins);
class z0 {
  static init(e) {
    Object.defineProperty(this, "resizeTo", { set(r) {
      globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = r, r && (globalThis.addEventListener("resize", this.queueResize), this.resize());
    }, get() {
      return this._resizeTo;
    } }), this.queueResize = () => {
      this._resizeTo && (this.cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize()));
    }, this.cancelResize = () => {
      this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null);
    }, this.resize = () => {
      if (!this._resizeTo) return;
      this.cancelResize();
      let r, n;
      if (this._resizeTo === globalThis.window) r = globalThis.innerWidth, n = globalThis.innerHeight;
      else {
        const { clientWidth: i, clientHeight: s } = this._resizeTo;
        r = i, n = s;
      }
      this.renderer.resize(r, n), this.render();
    }, this._resizeId = null, this._resizeTo = null, this.resizeTo = e.resizeTo || null;
  }
  static destroy() {
    globalThis.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null;
  }
}
z0.extension = L.Application;
W.add(z0);
const Eg = { loader: L.LoadParser, resolver: L.ResolveParser, cache: L.CacheParser, detection: L.DetectionParser };
W.handle(L.Asset, (t5) => {
  const e = t5.ref;
  Object.entries(Eg).filter(([r]) => !!e[r]).forEach(([r, n]) => W.add(Object.assign(e[r], { extension: e[r].extension ?? n })));
}, (t5) => {
  const e = t5.ref;
  Object.keys(Eg).filter((r) => !!e[r]).forEach((r) => W.remove(e[r]));
});
class DC {
  constructor(e, r = false) {
    this._loader = e, this._assetList = [], this._isLoading = false, this._maxConcurrent = 1, this.verbose = r;
  }
  add(e) {
    e.forEach((r) => {
      this._assetList.push(r);
    }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next();
  }
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = true;
      const e = [], r = Math.min(this._assetList.length, this._maxConcurrent);
      for (let n = 0; n < r; n++) e.push(this._assetList.pop());
      await this._loader.load(e), this._isLoading = false, this._next();
    }
  }
  get active() {
    return this._isActive;
  }
  set active(e) {
    this._isActive !== e && (this._isActive = e, e && !this._isLoading && this._next());
  }
}
function is(t5, e) {
  if (Array.isArray(e)) {
    for (const r of e) if (t5.startsWith(`data:${r}`)) return true;
    return false;
  }
  return t5.startsWith(`data:${e}`);
}
function gn(t5, e) {
  const r = t5.split("?")[0], n = $e.extname(r).toLowerCase();
  return Array.isArray(e) ? e.includes(n) : n === e;
}
const Ht = (t5, e, r = false) => (Array.isArray(t5) || (t5 = [t5]), e ? t5.map((n) => typeof n == "string" || r ? e(n) : n) : t5), _d = (t5, e) => {
  const r = e.split("?")[1];
  return r && (t5 += `?${r}`), t5;
};
function H0(t5, e, r, n, i) {
  const s = e[r];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    r < e.length - 1 ? H0(t5.replace(n[r], a), e, r + 1, n, i) : i.push(t5.replace(n[r], a));
  }
}
function BC(t5) {
  const e = /\{(.*?)\}/g, r = t5.match(e), n = [];
  if (r) {
    const i = [];
    r.forEach((s) => {
      const o = s.substring(1, s.length - 1).split(",");
      i.push(o);
    }), H0(t5, i, 0, r, n);
  } else n.push(t5);
  return n;
}
const Dl = (t5) => !Array.isArray(t5);
class NC {
  constructor() {
    this._parsers = [], this._cache = /* @__PURE__ */ new Map(), this._cacheMap = /* @__PURE__ */ new Map();
  }
  reset() {
    this._cacheMap.clear(), this._cache.clear();
  }
  has(e) {
    return this._cache.has(e);
  }
  get(e) {
    const r = this._cache.get(e);
    return r || console.warn(`[Assets] Asset id ${e} was not found in the Cache`), r;
  }
  set(e, r) {
    const n = Ht(e);
    let i;
    for (let a = 0; a < this.parsers.length; a++) {
      const l = this.parsers[a];
      if (l.test(r)) {
        i = l.getCacheableAssets(n, r);
        break;
      }
    }
    i || (i = {}, n.forEach((a) => {
      i[a] = r;
    }));
    const s = Object.keys(i), o = { cacheKeys: s, keys: n };
    if (n.forEach((a) => {
      this._cacheMap.set(a, o);
    }), s.forEach((a) => {
      const l = i ? i[a] : r;
      this._cache.has(a) && this._cache.get(a) !== l && console.warn("[Cache] already has key:", a), this._cache.set(a, i[a]);
    }), r instanceof X) {
      const a = r;
      n.forEach((l) => {
        a.baseTexture !== X.EMPTY.baseTexture && ee.addToCache(a.baseTexture, l), X.addToCache(a, l);
      });
    }
  }
  remove(e) {
    if (!this._cacheMap.has(e)) {
      console.warn(`[Assets] Asset id ${e} was not found in the Cache`);
      return;
    }
    const r = this._cacheMap.get(e);
    r.cacheKeys.forEach((n) => {
      this._cache.delete(n);
    }), r.keys.forEach((n) => {
      this._cacheMap.delete(n);
    });
  }
  get parsers() {
    return this._parsers;
  }
}
const Rn = new NC();
class OC {
  constructor() {
    this._parsers = [], this._parsersValidated = false, this.parsers = new Proxy(this._parsers, { set: (e, r, n) => (this._parsersValidated = false, e[r] = n, true) }), this.promiseCache = {};
  }
  reset() {
    this._parsersValidated = false, this.promiseCache = {};
  }
  _getLoadPromiseAndParser(e, r) {
    const n = { promise: null, parser: null };
    return n.promise = (async () => {
      var _a2, _b2;
      let i = null, s = null;
      if (r.loadParser && (s = this._parserHash[r.loadParser], s || console.warn(`[Assets] specified load parser "${r.loadParser}" not found while loading ${e}`)), !s) {
        for (let o = 0; o < this.parsers.length; o++) {
          const a = this.parsers[o];
          if (a.load && ((_a2 = a.test) == null ? void 0 : _a2.call(a, e, r, this))) {
            s = a;
            break;
          }
        }
        if (!s) return console.warn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null;
      }
      i = await s.load(e, r, this), n.parser = s;
      for (let o = 0; o < this.parsers.length; o++) {
        const a = this.parsers[o];
        a.parse && a.parse && await ((_b2 = a.testParse) == null ? void 0 : _b2.call(a, i, r, this)) && (i = await a.parse(i, r, this) || i, n.parser = a);
      }
      return i;
    })(), n;
  }
  async load(e, r) {
    this._parsersValidated || this._validateParsers();
    let n = 0;
    const i = {}, s = Dl(e), o = Ht(e, (u) => ({ alias: [u], src: u })), a = o.length, l = o.map(async (u) => {
      const h = $e.toAbsolute(u.src);
      if (!i[u.src]) try {
        this.promiseCache[h] || (this.promiseCache[h] = this._getLoadPromiseAndParser(h, u)), i[u.src] = await this.promiseCache[h].promise, r && r(++n / a);
      } catch (c) {
        throw delete this.promiseCache[h], delete i[u.src], new Error(`[Loader.load] Failed to load ${h}.
${c}`);
      }
    });
    return await Promise.all(l), s ? i[o[0].src] : i;
  }
  async unload(e) {
    const r = Ht(e, (n) => ({ alias: [n], src: n })).map(async (n) => {
      var _a2, _b2;
      const i = $e.toAbsolute(n.src), s = this.promiseCache[i];
      if (s) {
        const o = await s.promise;
        delete this.promiseCache[i], (_b2 = (_a2 = s.parser) == null ? void 0 : _a2.unload) == null ? void 0 : _b2.call(_a2, o, n, this);
      }
    });
    await Promise.all(r);
  }
  _validateParsers() {
    this._parsersValidated = true, this._parserHash = this._parsers.filter((e) => e.name).reduce((e, r) => (e[r.name] && console.warn(`[Assets] loadParser name conflict "${r.name}"`), { ...e, [r.name]: r }), {});
  }
}
var Yt = ((t5) => (t5[t5.Low = 0] = "Low", t5[t5.Normal = 1] = "Normal", t5[t5.High = 2] = "High", t5))(Yt || {});
const LC = ".json", UC = "application/json", GC = { extension: { type: L.LoadParser, priority: Yt.Low }, name: "loadJson", test(t5) {
  return is(t5, UC) || gn(t5, LC);
}, async load(t5) {
  return await (await H.ADAPTER.fetch(t5)).json();
} };
W.add(GC);
const zC = ".txt", HC = "text/plain", jC = { name: "loadTxt", extension: { type: L.LoadParser, priority: Yt.Low }, test(t5) {
  return is(t5, HC) || gn(t5, zC);
}, async load(t5) {
  return await (await H.ADAPTER.fetch(t5)).text();
} };
W.add(jC);
const VC = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"], $C = [".ttf", ".otf", ".woff", ".woff2"], XC = ["font/ttf", "font/otf", "font/woff", "font/woff2"], WC = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function YC(t5) {
  const e = $e.extname(t5), r = $e.basename(t5, e).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.slice(1));
  let n = r.length > 0;
  for (const s of r) if (!s.match(WC)) {
    n = false;
    break;
  }
  let i = r.join(" ");
  return n || (i = `"${i.replace(/[\\"]/g, "\\$&")}"`), i;
}
const ZC = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function KC(t5) {
  return ZC.test(t5) ? t5 : encodeURI(t5);
}
const qC = { extension: { type: L.LoadParser, priority: Yt.Low }, name: "loadWebFont", test(t5) {
  return is(t5, XC) || gn(t5, $C);
}, async load(t5, e) {
  var _a2, _b2, _c2;
  const r = H.ADAPTER.getFontFaceSet();
  if (r) {
    const n = [], i = ((_a2 = e.data) == null ? void 0 : _a2.family) ?? YC(t5), s = ((_c2 = (_b2 = e.data) == null ? void 0 : _b2.weights) == null ? void 0 : _c2.filter((a) => VC.includes(a))) ?? ["normal"], o = e.data ?? {};
    for (let a = 0; a < s.length; a++) {
      const l = s[a], u = new FontFace(i, `url(${KC(t5)})`, { ...o, weight: l });
      await u.load(), r.add(u), n.push(u);
    }
    return n.length === 1 ? n[0] : n;
  }
  return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"), null;
}, unload(t5) {
  (Array.isArray(t5) ? t5 : [t5]).forEach((e) => H.ADAPTER.getFontFaceSet().delete(e));
} };
W.add(qC);
const QC = `(function() {
  "use strict";
  const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
  async function checkImageBitmap() {
    try {
      if (typeof createImageBitmap != "function")
        return !1;
      const imageBlob = await (await fetch(WHITE_PNG)).blob(), imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap.width === 1 && imageBitmap.height === 1;
    } catch {
      return !1;
    }
  }
  checkImageBitmap().then((result) => {
    self.postMessage(result);
  });
})();
`;
let Gi = null, xd = class {
  constructor() {
    Gi || (Gi = URL.createObjectURL(new Blob([QC], { type: "application/javascript" }))), this.worker = new Worker(Gi);
  }
};
xd.revokeObjectURL = function() {
  Gi && (URL.revokeObjectURL(Gi), Gi = null);
};
const JC = `(function() {
  "use strict";
  async function loadImageBitmap(url) {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
    const imageBlob = await response.blob();
    return await createImageBitmap(imageBlob);
  }
  self.onmessage = async (event) => {
    try {
      const imageBitmap = await loadImageBitmap(event.data.data[0]);
      self.postMessage({
        data: imageBitmap,
        uuid: event.data.uuid,
        id: event.data.id
      }, [imageBitmap]);
    } catch (e) {
      self.postMessage({
        error: e,
        uuid: event.data.uuid,
        id: event.data.id
      });
    }
  };
})();
`;
let zi = null;
class j0 {
  constructor() {
    zi || (zi = URL.createObjectURL(new Blob([JC], { type: "application/javascript" }))), this.worker = new Worker(zi);
  }
}
j0.revokeObjectURL = function() {
  zi && (URL.revokeObjectURL(zi), zi = null);
};
let Sg = 0, Rh;
class eI {
  constructor() {
    this._initialized = false, this._createdWorkers = 0, this.workerPool = [], this.queue = [], this.resolveHash = {};
  }
  isImageBitmapSupported() {
    return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise((e) => {
      const { worker: r } = new xd();
      r.addEventListener("message", (n) => {
        r.terminate(), xd.revokeObjectURL(), e(n.data);
      });
    }), this._isImageBitmapSupported);
  }
  loadImageBitmap(e) {
    return this._run("loadImageBitmap", [e]);
  }
  async _initWorkers() {
    this._initialized || (this._initialized = true);
  }
  getWorker() {
    Rh === void 0 && (Rh = navigator.hardwareConcurrency || 4);
    let e = this.workerPool.pop();
    return !e && this._createdWorkers < Rh && (this._createdWorkers++, e = new j0().worker, e.addEventListener("message", (r) => {
      this.complete(r.data), this.returnWorker(r.target), this.next();
    })), e;
  }
  returnWorker(e) {
    this.workerPool.push(e);
  }
  complete(e) {
    e.error !== void 0 ? this.resolveHash[e.uuid].reject(e.error) : this.resolveHash[e.uuid].resolve(e.data), this.resolveHash[e.uuid] = null;
  }
  async _run(e, r) {
    await this._initWorkers();
    const n = new Promise((i, s) => {
      this.queue.push({ id: e, arguments: r, resolve: i, reject: s });
    });
    return this.next(), n;
  }
  next() {
    if (!this.queue.length) return;
    const e = this.getWorker();
    if (!e) return;
    const r = this.queue.pop(), n = r.id;
    this.resolveHash[Sg] = { resolve: r.resolve, reject: r.reject }, e.postMessage({ data: r.arguments, uuid: Sg++, id: n });
  }
}
const Tg = new eI();
function Mo(t5, e, r) {
  t5.resource.internal = true;
  const n = new X(t5), i = () => {
    delete e.promiseCache[r], Rn.has(r) && Rn.remove(r);
  };
  return n.baseTexture.once("destroyed", () => {
    r in e.promiseCache && (console.warn("[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."), i());
  }), n.once("destroyed", () => {
    t5.destroyed || (console.warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."), i());
  }), n;
}
const tI = [".jpeg", ".jpg", ".png", ".webp", ".avif"], rI = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function nI(t5) {
  const e = await H.ADAPTER.fetch(t5);
  if (!e.ok) throw new Error(`[loadImageBitmap] Failed to fetch ${t5}: ${e.status} ${e.statusText}`);
  const r = await e.blob();
  return await createImageBitmap(r);
}
const pu = { name: "loadTextures", extension: { type: L.LoadParser, priority: Yt.High }, config: { preferWorkers: true, preferCreateImageBitmap: true, crossOrigin: "anonymous" }, test(t5) {
  return is(t5, rI) || gn(t5, tI);
}, async load(t5, e, r) {
  var _a2;
  const n = globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
  let i;
  n ? this.config.preferWorkers && await Tg.isImageBitmapSupported() ? i = await Tg.loadImageBitmap(t5) : i = await nI(t5) : i = await new Promise((a, l) => {
    const u = new Image();
    u.crossOrigin = this.config.crossOrigin, u.src = t5, u.complete ? a(u) : (u.onload = () => a(u), u.onerror = (h) => l(h));
  });
  const s = { ...e.data };
  s.resolution ?? (s.resolution = kr(t5)), n && ((_a2 = s.resourceOptions) == null ? void 0 : _a2.ownsImageBitmap) === void 0 && (s.resourceOptions = { ...s.resourceOptions }, s.resourceOptions.ownsImageBitmap = true);
  const o = new ee(i, s);
  return o.resource.src = t5, Mo(o, r, t5);
}, unload(t5) {
  t5.destroy(true);
} };
W.add(pu);
const iI = ".svg", sI = "image/svg+xml", oI = { extension: { type: L.LoadParser, priority: Yt.High }, name: "loadSVG", test(t5) {
  return is(t5, sI) || gn(t5, iI);
}, async testParse(t5) {
  return ud.test(t5);
}, async parse(t5, e, r) {
  var _a2;
  const n = new ud(t5, (_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.resourceOptions);
  await n.load();
  const i = new ee(n, { resolution: kr(t5), ...e == null ? void 0 : e.data });
  return i.resource.src = e.src, Mo(i, r, e.src);
}, async load(t5, e) {
  return (await H.ADAPTER.fetch(t5)).text();
}, unload: pu.unload };
W.add(oI);
const aI = [".mp4", ".m4v", ".webm", ".ogv"], lI = ["video/mp4", "video/webm", "video/ogg"], uI = { name: "loadVideo", extension: { type: L.LoadParser, priority: Yt.High }, config: { defaultAutoPlay: true, defaultUpdateFPS: 0, defaultLoop: false, defaultMuted: false, defaultPlaysinline: true }, test(t5) {
  return is(t5, lI) || gn(t5, aI);
}, async load(t5, e, r) {
  var _a2;
  let n;
  const i = await (await H.ADAPTER.fetch(t5)).blob(), s = URL.createObjectURL(i);
  try {
    const o = { autoPlay: this.config.defaultAutoPlay, updateFPS: this.config.defaultUpdateFPS, loop: this.config.defaultLoop, muted: this.config.defaultMuted, playsinline: this.config.defaultPlaysinline, ...(_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.resourceOptions, autoLoad: true }, a = new B0(s, o);
    await a.load();
    const l = new ee(a, { alphaMode: await mb(), resolution: kr(t5), ...e == null ? void 0 : e.data });
    l.resource.src = t5, n = Mo(l, r, t5), n.baseTexture.once("destroyed", () => {
      URL.revokeObjectURL(s);
    });
  } catch (o) {
    throw URL.revokeObjectURL(s), o;
  }
  return n;
}, unload(t5) {
  t5.destroy(true);
} };
W.add(uI);
class hI {
  constructor() {
    this._defaultBundleIdentifierOptions = { connector: "-", createBundleAssetId: (e, r) => `${e}${this._bundleIdConnector}${r}`, extractAssetIdFromBundle: (e, r) => r.replace(`${e}${this._bundleIdConnector}`, "") }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
  }
  setBundleIdentifier(e) {
    if (this._bundleIdConnector = e.connector ?? this._bundleIdConnector, this._createBundleAssetId = e.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = e.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar") throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
  }
  prefer(...e) {
    e.forEach((r) => {
      this._preferredOrder.push(r), r.priority || (r.priority = Object.keys(r.params));
    }), this._resolverHash = {};
  }
  set basePath(e) {
    this._basePath = e;
  }
  get basePath() {
    return this._basePath;
  }
  set rootPath(e) {
    this._rootPath = e;
  }
  get rootPath() {
    return this._rootPath;
  }
  get parsers() {
    return this._parsers;
  }
  reset() {
    this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null;
  }
  setDefaultSearchParams(e) {
    if (typeof e == "string") this._defaultSearchParams = e;
    else {
      const r = e;
      this._defaultSearchParams = Object.keys(r).map((n) => `${encodeURIComponent(n)}=${encodeURIComponent(r[n])}`).join("&");
    }
  }
  getAlias(e) {
    const { alias: r, name: n, src: i, srcs: s } = e;
    return Ht(r || n || i || s, (o) => typeof o == "string" ? o : Array.isArray(o) ? o.map((a) => (a == null ? void 0 : a.src) ?? (a == null ? void 0 : a.srcs) ?? a) : (o == null ? void 0 : o.src) || (o == null ? void 0 : o.srcs) ? o.src ?? o.srcs : o, true);
  }
  addManifest(e) {
    this._manifest && console.warn("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = e, e.bundles.forEach((r) => {
      this.addBundle(r.name, r.assets);
    });
  }
  addBundle(e, r) {
    const n = [];
    Array.isArray(r) ? r.forEach((i) => {
      const s = i.src ?? i.srcs, o = i.alias ?? i.name;
      let a;
      if (typeof o == "string") {
        const l = this._createBundleAssetId(e, o);
        n.push(l), a = [o, l];
      } else {
        const l = o.map((u) => this._createBundleAssetId(e, u));
        n.push(...l), a = [...o, ...l];
      }
      this.add({ ...i, alias: a, src: s });
    }) : Object.keys(r).forEach((i) => {
      const s = [i, this._createBundleAssetId(e, i)];
      if (typeof r[i] == "string") this.add({ alias: s, src: r[i] });
      else if (Array.isArray(r[i])) this.add({ alias: s, src: r[i] });
      else {
        const o = r[i], a = o.src ?? o.srcs;
        this.add({ ...o, alias: s, src: Array.isArray(a) ? a : [a] });
      }
      n.push(...s);
    }), this._bundles[e] = n;
  }
  add(e, r, n, i, s) {
    const o = [];
    typeof e == "string" || Array.isArray(e) && typeof e[0] == "string" ? (ie("7.2.0", `Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`), o.push({ alias: e, src: r, data: n, format: i, loadParser: s })) : Array.isArray(e) ? o.push(...e) : o.push(e);
    let a;
    a = (l) => {
      this.hasKey(l) && console.warn(`[Resolver] already has key: ${l} overwriting`);
    }, Ht(o).forEach((l) => {
      const { src: u, srcs: h } = l;
      let { data: c, format: d, loadParser: f } = l;
      const p = Ht(u || h).map((g) => typeof g == "string" ? BC(g) : Array.isArray(g) ? g : [g]), y = this.getAlias(l);
      Array.isArray(y) ? y.forEach(a) : a(y);
      const _ = [];
      p.forEach((g) => {
        g.forEach((v) => {
          let m = {};
          if (typeof v != "object") {
            m.src = v;
            for (let x = 0; x < this._parsers.length; x++) {
              const w = this._parsers[x];
              if (w.test(v)) {
                m = w.parse(v);
                break;
              }
            }
          } else c = v.data ?? c, d = v.format ?? d, f = v.loadParser ?? f, m = { ...m, ...v };
          if (!y) throw new Error(`[Resolver] alias is undefined for this asset: ${m.src}`);
          m = this.buildResolvedAsset(m, { aliases: y, data: c, format: d, loadParser: f }), _.push(m);
        });
      }), y.forEach((g) => {
        this._assetMap[g] = _;
      });
    });
  }
  resolveBundle(e) {
    const r = Dl(e);
    e = Ht(e);
    const n = {};
    return e.forEach((i) => {
      const s = this._bundles[i];
      if (s) {
        const o = this.resolve(s), a = {};
        for (const l in o) {
          const u = o[l];
          a[this._extractAssetIdFromBundle(i, l)] = u;
        }
        n[i] = a;
      }
    }), r ? n[e[0]] : n;
  }
  resolveUrl(e) {
    const r = this.resolve(e);
    if (typeof e != "string") {
      const n = {};
      for (const i in r) n[i] = r[i].src;
      return n;
    }
    return r.src;
  }
  resolve(e) {
    const r = Dl(e);
    e = Ht(e);
    const n = {};
    return e.forEach((i) => {
      if (!this._resolverHash[i]) if (this._assetMap[i]) {
        let s = this._assetMap[i];
        const o = s[0], a = this._getPreferredOrder(s);
        a == null ? void 0 : a.priority.forEach((l) => {
          a.params[l].forEach((u) => {
            const h = s.filter((c) => c[l] ? c[l] === u : false);
            h.length && (s = h);
          });
        }), this._resolverHash[i] = s[0] ?? o;
      } else this._resolverHash[i] = this.buildResolvedAsset({ alias: [i], src: i }, {});
      n[i] = this._resolverHash[i];
    }), r ? n[e[0]] : n;
  }
  hasKey(e) {
    return !!this._assetMap[e];
  }
  hasBundle(e) {
    return !!this._bundles[e];
  }
  _getPreferredOrder(e) {
    for (let r = 0; r < e.length; r++) {
      const n = e[0], i = this._preferredOrder.find((s) => s.params.format.includes(n.format));
      if (i) return i;
    }
    return this._preferredOrder[0];
  }
  _appendDefaultSearchParams(e) {
    if (!this._defaultSearchParams) return e;
    const r = /\?/.test(e) ? "&" : "?";
    return `${e}${r}${this._defaultSearchParams}`;
  }
  buildResolvedAsset(e, r) {
    const { aliases: n, data: i, loadParser: s, format: o } = r;
    return (this._basePath || this._rootPath) && (e.src = $e.toAbsolute(e.src, this._basePath, this._rootPath)), e.alias = n ?? e.alias ?? [e.src], e.src = this._appendDefaultSearchParams(e.src), e.data = { ...i || {}, ...e.data }, e.loadParser = s ?? e.loadParser, e.format = o ?? e.format ?? $e.extname(e.src).slice(1), e.srcs = e.src, e.name = e.alias, e;
  }
}
class cI {
  constructor() {
    this._detections = [], this._initialized = false, this.resolver = new hI(), this.loader = new OC(), this.cache = Rn, this._backgroundLoader = new DC(this.loader), this._backgroundLoader.active = true, this.reset();
  }
  async init(e = {}) {
    var _a2, _b2;
    if (this._initialized) {
      console.warn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
      return;
    }
    if (this._initialized = true, e.defaultSearchParams && this.resolver.setDefaultSearchParams(e.defaultSearchParams), e.basePath && (this.resolver.basePath = e.basePath), e.bundleIdentifier && this.resolver.setBundleIdentifier(e.bundleIdentifier), e.manifest) {
      let s = e.manifest;
      typeof s == "string" && (s = await this.load(s)), this.resolver.addManifest(s);
    }
    const r = ((_a2 = e.texturePreference) == null ? void 0 : _a2.resolution) ?? 1, n = typeof r == "number" ? [r] : r, i = await this._detectFormats({ preferredFormats: (_b2 = e.texturePreference) == null ? void 0 : _b2.format, skipDetections: e.skipDetections, detections: this._detections });
    this.resolver.prefer({ params: { format: i, resolution: n } }), e.preferences && this.setPreferences(e.preferences);
  }
  add(e, r, n, i, s) {
    this.resolver.add(e, r, n, i, s);
  }
  async load(e, r) {
    this._initialized || await this.init();
    const n = Dl(e), i = Ht(e).map((a) => {
      if (typeof a != "string") {
        const l = this.resolver.getAlias(a);
        return l.some((u) => !this.resolver.hasKey(u)) && this.add(a), Array.isArray(l) ? l[0] : l;
      }
      return this.resolver.hasKey(a) || this.add({ alias: a, src: a }), a;
    }), s = this.resolver.resolve(i), o = await this._mapLoadToResolve(s, r);
    return n ? o[i[0]] : o;
  }
  addBundle(e, r) {
    this.resolver.addBundle(e, r);
  }
  async loadBundle(e, r) {
    this._initialized || await this.init();
    let n = false;
    typeof e == "string" && (n = true, e = [e]);
    const i = this.resolver.resolveBundle(e), s = {}, o = Object.keys(i);
    let a = 0, l = 0;
    const u = () => {
      r == null ? void 0 : r(++a / l);
    }, h = o.map((c) => {
      const d = i[c];
      return l += Object.keys(d).length, this._mapLoadToResolve(d, u).then((f) => {
        s[c] = f;
      });
    });
    return await Promise.all(h), n ? s[e[0]] : s;
  }
  async backgroundLoad(e) {
    this._initialized || await this.init(), typeof e == "string" && (e = [e]);
    const r = this.resolver.resolve(e);
    this._backgroundLoader.add(Object.values(r));
  }
  async backgroundLoadBundle(e) {
    this._initialized || await this.init(), typeof e == "string" && (e = [e]);
    const r = this.resolver.resolveBundle(e);
    Object.values(r).forEach((n) => {
      this._backgroundLoader.add(Object.values(n));
    });
  }
  reset() {
    this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = false;
  }
  get(e) {
    if (typeof e == "string") return Rn.get(e);
    const r = {};
    for (let n = 0; n < e.length; n++) r[n] = Rn.get(e[n]);
    return r;
  }
  async _mapLoadToResolve(e, r) {
    const n = Object.values(e), i = Object.keys(e);
    this._backgroundLoader.active = false;
    const s = await this.loader.load(n, r);
    this._backgroundLoader.active = true;
    const o = {};
    return n.forEach((a, l) => {
      const u = s[a.src], h = [a.src];
      a.alias && h.push(...a.alias), o[i[l]] = u, Rn.set(h, u);
    }), o;
  }
  async unload(e) {
    this._initialized || await this.init();
    const r = Ht(e).map((i) => typeof i != "string" ? i.src : i), n = this.resolver.resolve(r);
    await this._unloadFromResolved(n);
  }
  async unloadBundle(e) {
    this._initialized || await this.init(), e = Ht(e);
    const r = this.resolver.resolveBundle(e), n = Object.keys(r).map((i) => this._unloadFromResolved(r[i]));
    await Promise.all(n);
  }
  async _unloadFromResolved(e) {
    const r = Object.values(e);
    r.forEach((n) => {
      Rn.remove(n.src);
    }), await this.loader.unload(r);
  }
  async _detectFormats(e) {
    let r = [];
    e.preferredFormats && (r = Array.isArray(e.preferredFormats) ? e.preferredFormats : [e.preferredFormats]);
    for (const n of e.detections) e.skipDetections || await n.test() ? r = await n.add(r) : e.skipDetections || (r = await n.remove(r));
    return r = r.filter((n, i) => r.indexOf(n) === i), r;
  }
  get detections() {
    return this._detections;
  }
  get preferWorkers() {
    return pu.config.preferWorkers;
  }
  set preferWorkers(e) {
    ie("7.2.0", "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."), this.setPreferences({ preferWorkers: e });
  }
  setPreferences(e) {
    this.loader.parsers.forEach((r) => {
      r.config && Object.keys(r.config).filter((n) => n in e).forEach((n) => {
        r.config[n] = e[n];
      });
    });
  }
}
const fa = new cI();
W.handleByList(L.LoadParser, fa.loader.parsers).handleByList(L.ResolveParser, fa.resolver.parsers).handleByList(L.CacheParser, fa.cache.parsers).handleByList(L.DetectionParser, fa.detections);
const dI = { extension: L.CacheParser, test: (t5) => Array.isArray(t5) && t5.every((e) => e instanceof X), getCacheableAssets: (t5, e) => {
  const r = {};
  return t5.forEach((n) => {
    e.forEach((i, s) => {
      r[n + (s === 0 ? "" : s + 1)] = i;
    });
  }), r;
} };
W.add(dI);
async function V0(t5) {
  if ("Image" in globalThis) return new Promise((e) => {
    const r = new Image();
    r.onload = () => {
      e(true);
    }, r.onerror = () => {
      e(false);
    }, r.src = t5;
  });
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      const e = await (await fetch(t5)).blob();
      await createImageBitmap(e);
    } catch {
      return false;
    }
    return true;
  }
  return false;
}
const fI = { extension: { type: L.DetectionParser, priority: 1 }, test: async () => V0("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="), add: async (t5) => [...t5, "avif"], remove: async (t5) => t5.filter((e) => e !== "avif") };
W.add(fI);
const pI = { extension: { type: L.DetectionParser, priority: 0 }, test: async () => V0("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="), add: async (t5) => [...t5, "webp"], remove: async (t5) => t5.filter((e) => e !== "webp") };
W.add(pI);
const bg = ["png", "jpg", "jpeg"], mI = { extension: { type: L.DetectionParser, priority: -1 }, test: () => Promise.resolve(true), add: async (t5) => [...t5, ...bg], remove: async (t5) => t5.filter((e) => !bg.includes(e)) };
W.add(mI);
const gI = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function jf(t5) {
  return gI ? false : document.createElement("video").canPlayType(t5) !== "";
}
const yI = { extension: { type: L.DetectionParser, priority: 0 }, test: async () => jf("video/webm"), add: async (t5) => [...t5, "webm"], remove: async (t5) => t5.filter((e) => e !== "webm") };
W.add(yI);
const vI = { extension: { type: L.DetectionParser, priority: 0 }, test: async () => jf("video/mp4"), add: async (t5) => [...t5, "mp4", "m4v"], remove: async (t5) => t5.filter((e) => e !== "mp4" && e !== "m4v") };
W.add(vI);
const _I = { extension: { type: L.DetectionParser, priority: 0 }, test: async () => jf("video/ogg"), add: async (t5) => [...t5, "ogv"], remove: async (t5) => t5.filter((e) => e !== "ogv") };
W.add(_I);
const xI = { extension: L.ResolveParser, test: pu.test, parse: (t5) => {
  var _a2;
  return { resolution: parseFloat(((_a2 = H.RETINA_PREFIX.exec(t5)) == null ? void 0 : _a2[1]) ?? "1"), format: $e.extname(t5).slice(1), src: t5 };
} };
W.add(xI);
var Xe = ((t5) => (t5[t5.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", t5[t5.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", t5[t5.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", t5[t5.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", t5[t5.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", t5[t5.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", t5[t5.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", t5[t5.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", t5[t5.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", t5[t5.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", t5[t5.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", t5[t5.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", t5[t5.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", t5[t5.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", t5[t5.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", t5[t5.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", t5[t5.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", t5[t5.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", t5[t5.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", t5[t5.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", t5[t5.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", t5[t5.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", t5[t5.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", t5[t5.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", t5[t5.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35987] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", t5[t5.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL", t5[t5.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR", t5[t5.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", t5[t5.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493] = "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", t5[t5.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494] = "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", t5[t5.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495] = "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", t5))(Xe || {});
const Bl = { 33776: 0.5, 33777: 0.5, 33778: 1, 33779: 1, 35916: 0.5, 35917: 0.5, 35918: 1, 35919: 1, 37488: 0.5, 37489: 0.5, 37490: 1, 37491: 1, 37492: 0.5, 37496: 1, 37493: 0.5, 37497: 1, 37494: 0.5, 37495: 0.5, 35840: 0.5, 35842: 0.5, 35841: 0.25, 35843: 0.25, 36196: 0.5, 35986: 0.5, 35987: 1, 34798: 1, 37808: 1, 36492: 1, 36493: 1, 36494: 1, 36495: 1 };
let er, hi;
function Ag() {
  hi = { bptc: er.getExtension("EXT_texture_compression_bptc"), astc: er.getExtension("WEBGL_compressed_texture_astc"), etc: er.getExtension("WEBGL_compressed_texture_etc"), s3tc: er.getExtension("WEBGL_compressed_texture_s3tc"), s3tc_sRGB: er.getExtension("WEBGL_compressed_texture_s3tc_srgb"), pvrtc: er.getExtension("WEBGL_compressed_texture_pvrtc") || er.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), etc1: er.getExtension("WEBGL_compressed_texture_etc1"), atc: er.getExtension("WEBGL_compressed_texture_atc") };
}
const wI = { extension: { type: L.DetectionParser, priority: 2 }, test: async () => {
  const t5 = H.ADAPTER.createCanvas().getContext("webgl");
  return t5 ? (er = t5, true) : (console.warn("WebGL not available for compressed textures."), false);
}, add: async (t5) => {
  hi || Ag();
  const e = [];
  for (const r in hi) hi[r] && e.push(r);
  return [...e, ...t5];
}, remove: async (t5) => (hi || Ag(), t5.filter((e) => !(e in hi))) };
W.add(wI);
class EI extends uu {
  constructor(e, r = { width: 1, height: 1, autoLoad: true }) {
    let n, i;
    typeof e == "string" ? (n = e, i = new Uint8Array()) : (n = null, i = e), super(i, r), this.origin = n, this.buffer = i ? new Kc(i) : null, this._load = null, this.loaded = false, this.origin !== null && r.autoLoad !== false && this.load(), this.origin === null && this.buffer && (this._load = Promise.resolve(this), this.loaded = true, this.onBlobLoaded(this.buffer.rawBinaryData));
  }
  onBlobLoaded(e) {
  }
  load() {
    return this._load ? this._load : (this._load = fetch(this.origin).then((e) => e.blob()).then((e) => e.arrayBuffer()).then((e) => (this.data = new Uint32Array(e), this.buffer = new Kc(e), this.loaded = true, this.onBlobLoaded(e), this.update(), this)), this._load);
  }
}
class Un extends EI {
  constructor(e, r) {
    super(e, r), this.format = r.format, this.levels = r.levels || 1, this._width = r.width, this._height = r.height, this._extension = Un._formatToExtension(this.format), (r.levelBuffers || this.buffer) && (this._levelBuffers = r.levelBuffers || Un._createLevelBuffers(e instanceof Uint8Array ? e : this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height));
  }
  upload(e, r, n) {
    const i = e.gl;
    if (!e.context.extensions[this._extension]) throw new Error(`${this._extension} textures are not supported on the current machine`);
    if (!this._levelBuffers) return false;
    i.pixelStorei(i.UNPACK_ALIGNMENT, 4);
    for (let s = 0, o = this.levels; s < o; s++) {
      const { levelID: a, levelWidth: l, levelHeight: u, levelBuffer: h } = this._levelBuffers[s];
      i.compressedTexImage2D(i.TEXTURE_2D, a, this.format, l, u, 0, h);
    }
    return true;
  }
  onBlobLoaded() {
    this._levelBuffers = Un._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height);
  }
  static _formatToExtension(e) {
    if (e >= 33776 && e <= 33779) return "s3tc";
    if (e >= 35916 && e <= 35919) return "s3tc_sRGB";
    if (e >= 37488 && e <= 37497) return "etc";
    if (e >= 35840 && e <= 35843) return "pvrtc";
    if (e === 36196) return "etc1";
    if (e === 35986 || e === 35987 || e === 34798) return "atc";
    if (e >= 36492 && e <= 36495) return "bptc";
    if (e === 37808) return "astc";
    throw new Error(`Invalid (compressed) texture format given: ${e}`);
  }
  static _createLevelBuffers(e, r, n, i, s, o, a) {
    const l = new Array(n);
    let u = e.byteOffset, h = o, c = a, d = h + i - 1 & ~(i - 1), f = c + s - 1 & ~(s - 1), p = d * f * Bl[r];
    for (let y = 0; y < n; y++) l[y] = { levelID: y, levelWidth: n > 1 ? h : d, levelHeight: n > 1 ? c : f, levelBuffer: new Uint8Array(e.buffer, u, p) }, u += p, h = h >> 1 || 1, c = c >> 1 || 1, d = h + i - 1 & ~(i - 1), f = c + s - 1 & ~(s - 1), p = d * f * Bl[r];
    return l;
  }
}
const Ph = 4, pa = 124, SI = 32, Cg = 20, TI = 542327876, ma = { HEIGHT: 3, WIDTH: 4, MIPMAP_COUNT: 7, PIXEL_FORMAT: 19 }, bI = { FOURCC: 2 }, ga = { DXGI_FORMAT: 0, RESOURCE_DIMENSION: 1, MISC_FLAG: 2, ARRAY_SIZE: 3 }, AI = 1, CI = 2, II = 4, RI = 64, PI = 512, MI = 131072, kI = 827611204, FI = 861165636, DI = 894720068, BI = 808540228, NI = 4, OI = { [kI]: Xe.COMPRESSED_RGBA_S3TC_DXT1_EXT, [FI]: Xe.COMPRESSED_RGBA_S3TC_DXT3_EXT, [DI]: Xe.COMPRESSED_RGBA_S3TC_DXT5_EXT }, LI = { 70: Xe.COMPRESSED_RGBA_S3TC_DXT1_EXT, 71: Xe.COMPRESSED_RGBA_S3TC_DXT1_EXT, 73: Xe.COMPRESSED_RGBA_S3TC_DXT3_EXT, 74: Xe.COMPRESSED_RGBA_S3TC_DXT3_EXT, 76: Xe.COMPRESSED_RGBA_S3TC_DXT5_EXT, 77: Xe.COMPRESSED_RGBA_S3TC_DXT5_EXT, 72: Xe.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, 75: Xe.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, 78: Xe.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT, 96: Xe.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT, 95: Xe.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT, 98: Xe.COMPRESSED_RGBA_BPTC_UNORM_EXT, 99: Xe.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT };
function UI(t5) {
  const e = new Uint32Array(t5);
  if (e[0] !== TI) throw new Error("Invalid DDS file magic word");
  const r = new Uint32Array(t5, 0, pa / Uint32Array.BYTES_PER_ELEMENT), n = r[ma.HEIGHT], i = r[ma.WIDTH], s = r[ma.MIPMAP_COUNT], o = new Uint32Array(t5, ma.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT, SI / Uint32Array.BYTES_PER_ELEMENT), a = o[AI];
  if (a & II) {
    const l = o[bI.FOURCC];
    if (l !== BI) {
      const v = OI[l], m = Ph + pa, x = new Uint8Array(t5, m);
      return [new Un(x, { format: v, width: i, height: n, levels: s })];
    }
    const u = Ph + pa, h = new Uint32Array(e.buffer, u, Cg / Uint32Array.BYTES_PER_ELEMENT), c = h[ga.DXGI_FORMAT], d = h[ga.RESOURCE_DIMENSION], f = h[ga.MISC_FLAG], p = h[ga.ARRAY_SIZE], y = LI[c];
    if (y === void 0) throw new Error(`DDSParser cannot parse texture data with DXGI format ${c}`);
    if (f === NI) throw new Error("DDSParser does not support cubemap textures");
    if (d === 6) throw new Error("DDSParser does not supported 3D texture data");
    const _ = new Array(), g = Ph + pa + Cg;
    if (p === 1) _.push(new Uint8Array(t5, g));
    else {
      const v = Bl[y];
      let m = 0, x = i, w = n;
      for (let S = 0; S < s; S++) {
        const E = Math.max(1, x + 3 & -4), I = Math.max(1, w + 3 & -4), C = E * I * v;
        m += C, x = x >>> 1, w = w >>> 1;
      }
      let T = g;
      for (let S = 0; S < p; S++) _.push(new Uint8Array(t5, T, m)), T += m;
    }
    return _.map((v) => new Un(v, { format: y, width: i, height: n, levels: s }));
  }
  throw a & RI ? new Error("DDSParser does not support uncompressed texture data.") : a & PI ? new Error("DDSParser does not supported YUV uncompressed texture data.") : a & MI ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : a & CI ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!");
}
const Ig = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10], GI = 67305985, Bt = { ENDIANNESS: 12, GL_TYPE: 16, GL_FORMAT: 24, GL_INTERNAL_FORMAT: 28, PIXEL_WIDTH: 36, PIXEL_HEIGHT: 40, PIXEL_DEPTH: 44, NUMBER_OF_ARRAY_ELEMENTS: 48, NUMBER_OF_FACES: 52, NUMBER_OF_MIPMAP_LEVELS: 56, BYTES_OF_KEY_VALUE_DATA: 60 }, wd = 64, Rg = { [Z.UNSIGNED_BYTE]: 1, [Z.UNSIGNED_SHORT]: 2, [Z.INT]: 4, [Z.UNSIGNED_INT]: 4, [Z.FLOAT]: 4, [Z.HALF_FLOAT]: 8 }, zI = { [D.RGBA]: 4, [D.RGB]: 3, [D.RG]: 2, [D.RED]: 1, [D.LUMINANCE]: 1, [D.LUMINANCE_ALPHA]: 2, [D.ALPHA]: 1 }, HI = { [Z.UNSIGNED_SHORT_4_4_4_4]: 2, [Z.UNSIGNED_SHORT_5_5_5_1]: 2, [Z.UNSIGNED_SHORT_5_6_5]: 2 };
function jI(t5, e, r = false) {
  const n = new DataView(e);
  if (!VI(t5, n)) return null;
  const i = n.getUint32(Bt.ENDIANNESS, true) === GI, s = n.getUint32(Bt.GL_TYPE, i), o = n.getUint32(Bt.GL_FORMAT, i), a = n.getUint32(Bt.GL_INTERNAL_FORMAT, i), l = n.getUint32(Bt.PIXEL_WIDTH, i), u = n.getUint32(Bt.PIXEL_HEIGHT, i) || 1, h = n.getUint32(Bt.PIXEL_DEPTH, i) || 1, c = n.getUint32(Bt.NUMBER_OF_ARRAY_ELEMENTS, i) || 1, d = n.getUint32(Bt.NUMBER_OF_FACES, i), f = n.getUint32(Bt.NUMBER_OF_MIPMAP_LEVELS, i), p = n.getUint32(Bt.BYTES_OF_KEY_VALUE_DATA, i);
  if (u === 0 || h !== 1) throw new Error("Only 2D textures are supported");
  if (d !== 1) throw new Error("CubeTextures are not supported by KTXLoader yet!");
  if (c !== 1) throw new Error("WebGL does not support array textures");
  const y = 4, _ = 4, g = l + 3 & -4, v = u + 3 & -4, m = new Array(c);
  let x = l * u;
  s === 0 && (x = g * v);
  let w;
  if (s !== 0 ? Rg[s] ? w = Rg[s] * zI[o] : w = HI[s] : w = Bl[a], w === void 0) throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
  const T = r ? XI(n, p, i) : null;
  let S = x * w, E = l, I = u, C = g, P = v, N = wd + p;
  for (let A = 0; A < f; A++) {
    const R = n.getUint32(N, i);
    let $ = N + 4;
    for (let q = 0; q < c; q++) {
      let O = m[q];
      O || (O = m[q] = new Array(f)), O[A] = { levelID: A, levelWidth: f > 1 || s !== 0 ? E : C, levelHeight: f > 1 || s !== 0 ? I : P, levelBuffer: new Uint8Array(e, $, S) }, $ += S;
    }
    N += R + 4, N = N % 4 !== 0 ? N + 4 - N % 4 : N, E = E >> 1 || 1, I = I >> 1 || 1, C = E + y - 1 & -4, P = I + _ - 1 & -4, S = C * P * w;
  }
  return s !== 0 ? { uncompressed: m.map((A) => {
    let R = A[0].levelBuffer, $ = false;
    return s === Z.FLOAT ? R = new Float32Array(A[0].levelBuffer.buffer, A[0].levelBuffer.byteOffset, A[0].levelBuffer.byteLength / 4) : s === Z.UNSIGNED_INT ? ($ = true, R = new Uint32Array(A[0].levelBuffer.buffer, A[0].levelBuffer.byteOffset, A[0].levelBuffer.byteLength / 4)) : s === Z.INT && ($ = true, R = new Int32Array(A[0].levelBuffer.buffer, A[0].levelBuffer.byteOffset, A[0].levelBuffer.byteLength / 4)), { resource: new uu(R, { width: A[0].levelWidth, height: A[0].levelHeight }), type: s, format: $ ? $I(o) : o };
  }), kvData: T } : { compressed: m.map((A) => new Un(null, { format: a, width: l, height: u, levels: f, levelBuffers: A })), kvData: T };
}
function VI(t5, e) {
  for (let r = 0; r < Ig.length; r++) if (e.getUint8(r) !== Ig[r]) return console.error(`${t5} is not a valid *.ktx file!`), false;
  return true;
}
function $I(t5) {
  switch (t5) {
    case D.RGBA:
      return D.RGBA_INTEGER;
    case D.RGB:
      return D.RGB_INTEGER;
    case D.RG:
      return D.RG_INTEGER;
    case D.RED:
      return D.RED_INTEGER;
    default:
      return t5;
  }
}
function XI(t5, e, r) {
  const n = /* @__PURE__ */ new Map();
  let i = 0;
  for (; i < e; ) {
    const s = t5.getUint32(wd + i, r), o = wd + i + 4, a = 3 - (s + 3) % 4;
    if (s === 0 || s > e - i) {
      console.error("KTXLoader: keyAndValueByteSize out of bounds");
      break;
    }
    let l = 0;
    for (; l < s && t5.getUint8(o + l) !== 0; l++) ;
    if (l === -1) {
      console.error("KTXLoader: Failed to find null byte terminating kvData key");
      break;
    }
    const u = new TextDecoder().decode(new Uint8Array(t5.buffer, o, l)), h = new DataView(t5.buffer, o + l + 1, s - l - 1);
    n.set(u, h), i += 4 + s + a;
  }
  return n;
}
const WI = { extension: { type: L.LoadParser, priority: Yt.High }, name: "loadDDS", test(t5) {
  return gn(t5, ".dds");
}, async load(t5, e, r) {
  const n = await (await H.ADAPTER.fetch(t5)).arrayBuffer(), i = UI(n).map((s) => {
    const o = new ee(s, { mipmap: fr.OFF, alphaMode: ht.NO_PREMULTIPLIED_ALPHA, resolution: kr(t5), ...e.data });
    return Mo(o, r, t5);
  });
  return i.length === 1 ? i[0] : i;
}, unload(t5) {
  Array.isArray(t5) ? t5.forEach((e) => e.destroy(true)) : t5.destroy(true);
} };
W.add(WI);
const YI = { extension: { type: L.LoadParser, priority: Yt.High }, name: "loadKTX", test(t5) {
  return gn(t5, ".ktx");
}, async load(t5, e, r) {
  const n = await (await H.ADAPTER.fetch(t5)).arrayBuffer(), { compressed: i, uncompressed: s, kvData: o } = jI(t5, n), a = i ?? s, l = { mipmap: fr.OFF, alphaMode: ht.NO_PREMULTIPLIED_ALPHA, resolution: kr(t5), ...e.data }, u = a.map((h) => {
    a === s && Object.assign(l, { type: h.type, format: h.format });
    const c = h.resource ?? h, d = new ee(c, l);
    return d.ktxKeyValueData = o, Mo(d, r, t5);
  });
  return u.length === 1 ? u[0] : u;
}, unload(t5) {
  Array.isArray(t5) ? t5.forEach((e) => e.destroy(true)) : t5.destroy(true);
} };
W.add(YI);
const ZI = ["s3tc", "s3tc_sRGB", "etc", "etc1", "pvrtc", "atc", "astc", "bptc"], KI = { extension: L.ResolveParser, test: (t5) => {
  const e = $e.extname(t5).slice(1);
  return ["basis", "ktx", "dds"].includes(e);
}, parse: (t5) => {
  var _a2, _b2;
  const e = t5.split("."), r = e.pop();
  if (["ktx", "dds"].includes(r)) {
    const n = e.pop();
    if (ZI.includes(n)) return { resolution: parseFloat(((_a2 = H.RETINA_PREFIX.exec(t5)) == null ? void 0 : _a2[1]) ?? "1"), format: n, src: t5 };
  }
  return { resolution: parseFloat(((_b2 = H.RETINA_PREFIX.exec(t5)) == null ? void 0 : _b2[1]) ?? "1"), format: r, src: t5 };
} };
W.add(KI);
const ya = new te(), qI = 4, $0 = class Rs {
  constructor(e) {
    this.renderer = e, this._rendererPremultipliedAlpha = false;
  }
  contextChange() {
    var _a2;
    const e = (_a2 = this.renderer) == null ? void 0 : _a2.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!(e && e.alpha && e.premultipliedAlpha);
  }
  async image(e, r, n, i) {
    const s = new Image();
    return s.src = await this.base64(e, r, n, i), s;
  }
  async base64(e, r, n, i) {
    const s = this.canvas(e, i);
    if (s.toBlob !== void 0) return new Promise((o, a) => {
      s.toBlob((l) => {
        if (!l) {
          a(new Error("ICanvas.toBlob failed!"));
          return;
        }
        const u = new FileReader();
        u.onload = () => o(u.result), u.onerror = a, u.readAsDataURL(l);
      }, r, n);
    });
    if (s.toDataURL !== void 0) return s.toDataURL(r, n);
    if (s.convertToBlob !== void 0) {
      const o = await s.convertToBlob({ type: r, quality: n });
      return new Promise((a, l) => {
        const u = new FileReader();
        u.onload = () => a(u.result), u.onerror = l, u.readAsDataURL(o);
      });
    }
    throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
  }
  canvas(e, r) {
    const { pixels: n, width: i, height: s, flipY: o, premultipliedAlpha: a } = this._rawPixels(e, r);
    o && Rs._flipY(n, i, s), a && Rs._unpremultiplyAlpha(n);
    const l = new Mb(i, s, 1), u = new ImageData(new Uint8ClampedArray(n.buffer), i, s);
    return l.context.putImageData(u, 0, 0), l.canvas;
  }
  pixels(e, r) {
    const { pixels: n, width: i, height: s, flipY: o, premultipliedAlpha: a } = this._rawPixels(e, r);
    return o && Rs._flipY(n, i, s), a && Rs._unpremultiplyAlpha(n), n;
  }
  _rawPixels(e, r) {
    const n = this.renderer;
    if (!n) throw new Error("The Extract has already been destroyed");
    let i, s = false, o = false, a, l = false;
    e && (e instanceof Jn ? a = e : (a = n.generateTexture(e, { region: r, resolution: n.resolution, multisample: n.multisample }), l = true, r && (ya.width = r.width, ya.height = r.height, r = ya)));
    const u = n.gl;
    if (a) {
      if (i = a.baseTexture.resolution, r = r ?? a.frame, s = false, o = a.baseTexture.alphaMode > 0 && a.baseTexture.format === D.RGBA, !l) {
        n.renderTexture.bind(a);
        const f = a.framebuffer.glFramebuffers[n.CONTEXT_UID];
        f.blitFramebuffer && n.framebuffer.bind(f.blitFramebuffer);
      }
    } else i = n.resolution, r || (r = ya, r.width = n.width / i, r.height = n.height / i), s = true, o = this._rendererPremultipliedAlpha, n.renderTexture.bind();
    const h = Math.max(Math.round(r.width * i), 1), c = Math.max(Math.round(r.height * i), 1), d = new Uint8Array(qI * h * c);
    return u.readPixels(Math.round(r.x * i), Math.round(r.y * i), h, c, u.RGBA, u.UNSIGNED_BYTE, d), l && (a == null ? void 0 : a.destroy(true)), { pixels: d, width: h, height: c, flipY: s, premultipliedAlpha: o };
  }
  destroy() {
    this.renderer = null;
  }
  static _flipY(e, r, n) {
    const i = r << 2, s = n >> 1, o = new Uint8Array(i);
    for (let a = 0; a < s; a++) {
      const l = a * i, u = (n - a - 1) * i;
      o.set(e.subarray(l, l + i)), e.copyWithin(l, u, u + i), e.set(o, u);
    }
  }
  static _unpremultiplyAlpha(e) {
    e instanceof Uint8ClampedArray && (e = new Uint8Array(e.buffer));
    const r = e.length;
    for (let n = 0; n < r; n += 4) {
      const i = e[n + 3];
      if (i !== 0) {
        const s = 255.001 / i;
        e[n] = e[n] * s + 0.5, e[n + 1] = e[n + 1] * s + 0.5, e[n + 2] = e[n + 2] * s + 0.5;
      }
    }
  }
};
$0.extension = { name: "extract", type: L.RendererSystem };
let QI = $0;
W.add(QI);
const Nl = { build(t5) {
  const e = t5.points;
  let r, n, i, s, o, a;
  if (t5.type === Ye.CIRC) {
    const p = t5.shape;
    r = p.x, n = p.y, o = a = p.radius, i = s = 0;
  } else if (t5.type === Ye.ELIP) {
    const p = t5.shape;
    r = p.x, n = p.y, o = p.width, a = p.height, i = s = 0;
  } else {
    const p = t5.shape, y = p.width / 2, _ = p.height / 2;
    r = p.x + y, n = p.y + _, o = a = Math.max(0, Math.min(p.radius, Math.min(y, _))), i = y - o, s = _ - a;
  }
  if (!(o >= 0 && a >= 0 && i >= 0 && s >= 0)) {
    e.length = 0;
    return;
  }
  const l = Math.ceil(2.3 * Math.sqrt(o + a)), u = l * 8 + (i ? 4 : 0) + (s ? 4 : 0);
  if (e.length = u, u === 0) return;
  if (l === 0) {
    e.length = 8, e[0] = e[6] = r + i, e[1] = e[3] = n + s, e[2] = e[4] = r - i, e[5] = e[7] = n - s;
    return;
  }
  let h = 0, c = l * 4 + (i ? 2 : 0) + 2, d = c, f = u;
  {
    const p = i + o, y = s, _ = r + p, g = r - p, v = n + y;
    if (e[h++] = _, e[h++] = v, e[--c] = v, e[--c] = g, s) {
      const m = n - y;
      e[d++] = g, e[d++] = m, e[--f] = m, e[--f] = _;
    }
  }
  for (let p = 1; p < l; p++) {
    const y = Math.PI / 2 * (p / l), _ = i + Math.cos(y) * o, g = s + Math.sin(y) * a, v = r + _, m = r - _, x = n + g, w = n - g;
    e[h++] = v, e[h++] = x, e[--c] = x, e[--c] = m, e[d++] = m, e[d++] = w, e[--f] = w, e[--f] = v;
  }
  {
    const p = i, y = s + a, _ = r + p, g = r - p, v = n + y, m = n - y;
    e[h++] = _, e[h++] = v, e[--f] = m, e[--f] = _, i && (e[h++] = g, e[h++] = v, e[--f] = m, e[--f] = g);
  }
}, triangulate(t5, e) {
  const r = t5.points, n = e.points, i = e.indices;
  if (r.length === 0) return;
  let s = n.length / 2;
  const o = s;
  let a, l;
  if (t5.type !== Ye.RREC) {
    const h = t5.shape;
    a = h.x, l = h.y;
  } else {
    const h = t5.shape;
    a = h.x + h.width / 2, l = h.y + h.height / 2;
  }
  const u = t5.matrix;
  n.push(t5.matrix ? u.a * a + u.c * l + u.tx : a, t5.matrix ? u.b * a + u.d * l + u.ty : l), s++, n.push(r[0], r[1]);
  for (let h = 2; h < r.length; h += 2) n.push(r[h], r[h + 1]), i.push(s++, o, s);
  i.push(o + 1, o, s);
} };
function Pg(t5, e = false) {
  const r = t5.length;
  if (r < 6) return;
  let n = 0;
  for (let i = 0, s = t5[r - 2], o = t5[r - 1]; i < r; i += 2) {
    const a = t5[i], l = t5[i + 1];
    n += (a - s) * (l + o), s = a, o = l;
  }
  if (!e && n > 0 || e && n <= 0) {
    const i = r / 2;
    for (let s = i + i % 2; s < r; s += 2) {
      const o = r - s - 2, a = r - s - 1, l = s, u = s + 1;
      [t5[o], t5[l]] = [t5[l], t5[o]], [t5[a], t5[u]] = [t5[u], t5[a]];
    }
  }
}
const X0 = { build(t5) {
  t5.points = t5.shape.points.slice();
}, triangulate(t5, e) {
  let r = t5.points;
  const n = t5.holes, i = e.points, s = e.indices;
  if (r.length >= 6) {
    Pg(r, false);
    const o = [];
    for (let u = 0; u < n.length; u++) {
      const h = n[u];
      Pg(h.points, true), o.push(r.length / 2), r = r.concat(h.points);
    }
    const a = lE(r, o, 2);
    if (!a) return;
    const l = i.length / 2;
    for (let u = 0; u < a.length; u += 3) s.push(a[u] + l), s.push(a[u + 1] + l), s.push(a[u + 2] + l);
    for (let u = 0; u < r.length; u++) i.push(r[u]);
  }
} }, JI = { build(t5) {
  const e = t5.shape, r = e.x, n = e.y, i = e.width, s = e.height, o = t5.points;
  o.length = 0, i >= 0 && s >= 0 && o.push(r, n, r + i, n, r + i, n + s, r, n + s);
}, triangulate(t5, e) {
  const r = t5.points, n = e.points;
  if (r.length === 0) return;
  const i = n.length / 2;
  n.push(r[0], r[1], r[2], r[3], r[6], r[7], r[4], r[5]), e.indices.push(i, i + 1, i + 2, i + 1, i + 2, i + 3);
} }, eR = { build(t5) {
  Nl.build(t5);
}, triangulate(t5, e) {
  Nl.triangulate(t5, e);
} };
var Tt = ((t5) => (t5.MITER = "miter", t5.BEVEL = "bevel", t5.ROUND = "round", t5))(Tt || {}), qr = ((t5) => (t5.BUTT = "butt", t5.ROUND = "round", t5.SQUARE = "square", t5))(qr || {});
const Qi = { adaptive: true, maxLength: 10, minSegments: 8, maxSegments: 2048, epsilon: 1e-4, _segmentsCount(t5, e = 20) {
  if (!this.adaptive || !t5 || isNaN(t5)) return e;
  let r = Math.ceil(t5 / this.maxLength);
  return r < this.minSegments ? r = this.minSegments : r > this.maxSegments && (r = this.maxSegments), r;
} };
class Mg {
  static curveTo(e, r, n, i, s, o) {
    const a = o[o.length - 2], l = o[o.length - 1] - r, u = a - e, h = i - r, c = n - e, d = Math.abs(l * c - u * h);
    if (d < 1e-8 || s === 0) return (o[o.length - 2] !== e || o[o.length - 1] !== r) && o.push(e, r), null;
    const f = l * l + u * u, p = h * h + c * c, y = l * h + u * c, _ = s * Math.sqrt(f) / d, g = s * Math.sqrt(p) / d, v = _ * y / f, m = g * y / p, x = _ * c + g * u, w = _ * h + g * l, T = u * (g + v), S = l * (g + v), E = c * (_ + m), I = h * (_ + m), C = Math.atan2(S - w, T - x), P = Math.atan2(I - w, E - x);
    return { cx: x + e, cy: w + r, radius: s, startAngle: C, endAngle: P, anticlockwise: u * h > c * l };
  }
  static arc(e, r, n, i, s, o, a, l, u) {
    const h = a - o, c = Qi._segmentsCount(Math.abs(h) * s, Math.ceil(Math.abs(h) / Cl) * 40), d = h / (c * 2), f = d * 2, p = Math.cos(d), y = Math.sin(d), _ = c - 1, g = _ % 1 / _;
    for (let v = 0; v <= _; ++v) {
      const m = v + g * v, x = d + o + f * m, w = Math.cos(x), T = -Math.sin(x);
      u.push((p * w + y * T) * s + n, (p * -T + y * w) * s + i);
    }
  }
}
class tR {
  constructor() {
    this.reset();
  }
  begin(e, r, n) {
    this.reset(), this.style = e, this.start = r, this.attribStart = n;
  }
  end(e, r) {
    this.attribSize = r - this.attribStart, this.size = e - this.start;
  }
  reset() {
    this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0;
  }
}
class Vf {
  static curveLength(e, r, n, i, s, o, a, l) {
    let u = 0, h = 0, c = 0, d = 0, f = 0, p = 0, y = 0, _ = 0, g = 0, v = 0, m = 0, x = e, w = r;
    for (let T = 1; T <= 10; ++T) h = T / 10, c = h * h, d = c * h, f = 1 - h, p = f * f, y = p * f, _ = y * e + 3 * p * h * n + 3 * f * c * s + d * a, g = y * r + 3 * p * h * i + 3 * f * c * o + d * l, v = x - _, m = w - g, x = _, w = g, u += Math.sqrt(v * v + m * m);
    return u;
  }
  static curveTo(e, r, n, i, s, o, a) {
    const l = a[a.length - 2], u = a[a.length - 1];
    a.length -= 2;
    const h = Qi._segmentsCount(Vf.curveLength(l, u, e, r, n, i, s, o));
    let c = 0, d = 0, f = 0, p = 0, y = 0;
    a.push(l, u);
    for (let _ = 1, g = 0; _ <= h; ++_) g = _ / h, c = 1 - g, d = c * c, f = d * c, p = g * g, y = p * g, a.push(f * l + 3 * d * g * e + 3 * c * p * n + y * s, f * u + 3 * d * g * r + 3 * c * p * i + y * o);
  }
}
function kg(t5, e, r, n, i, s, o, a) {
  const l = t5 - r * i, u = e - n * i, h = t5 + r * s, c = e + n * s;
  let d, f;
  o ? (d = n, f = -r) : (d = -n, f = r);
  const p = l + d, y = u + f, _ = h + d, g = c + f;
  return a.push(p, y, _, g), 2;
}
function vn(t5, e, r, n, i, s, o, a) {
  const l = r - t5, u = n - e;
  let h = Math.atan2(l, u), c = Math.atan2(i - t5, s - e);
  a && h < c ? h += Math.PI * 2 : !a && h > c && (c += Math.PI * 2);
  let d = h;
  const f = c - h, p = Math.abs(f), y = Math.sqrt(l * l + u * u), _ = (15 * p * Math.sqrt(y) / Math.PI >> 0) + 1, g = f / _;
  if (d += g, a) {
    o.push(t5, e, r, n);
    for (let v = 1, m = d; v < _; v++, m += g) o.push(t5, e, t5 + Math.sin(m) * y, e + Math.cos(m) * y);
    o.push(t5, e, i, s);
  } else {
    o.push(r, n, t5, e);
    for (let v = 1, m = d; v < _; v++, m += g) o.push(t5 + Math.sin(m) * y, e + Math.cos(m) * y, t5, e);
    o.push(i, s, t5, e);
  }
  return _ * 2;
}
function rR(t5, e) {
  const r = t5.shape;
  let n = t5.points || r.points.slice();
  const i = e.closePointEps;
  if (n.length === 0) return;
  const s = t5.lineStyle, o = new ae(n[0], n[1]), a = new ae(n[n.length - 2], n[n.length - 1]), l = r.type !== Ye.POLY || r.closeStroke, u = Math.abs(o.x - a.x) < i && Math.abs(o.y - a.y) < i;
  if (l) {
    n = n.slice(), u && (n.pop(), n.pop(), a.set(n[n.length - 2], n[n.length - 1]));
    const O = (o.x + a.x) * 0.5, k = (a.y + o.y) * 0.5;
    n.unshift(O, k), n.push(O, k);
  }
  const h = e.points, c = n.length / 2;
  let d = n.length;
  const f = h.length / 2, p = s.width / 2, y = p * p, _ = s.miterLimit * s.miterLimit;
  let g = n[0], v = n[1], m = n[2], x = n[3], w = 0, T = 0, S = -(v - x), E = g - m, I = 0, C = 0, P = Math.sqrt(S * S + E * E);
  S /= P, E /= P, S *= p, E *= p;
  const N = s.alignment, A = (1 - N) * 2, R = N * 2;
  l || (s.cap === qr.ROUND ? d += vn(g - S * (A - R) * 0.5, v - E * (A - R) * 0.5, g - S * A, v - E * A, g + S * R, v + E * R, h, true) + 2 : s.cap === qr.SQUARE && (d += kg(g, v, S, E, A, R, true, h))), h.push(g - S * A, v - E * A, g + S * R, v + E * R);
  for (let O = 1; O < c - 1; ++O) {
    g = n[(O - 1) * 2], v = n[(O - 1) * 2 + 1], m = n[O * 2], x = n[O * 2 + 1], w = n[(O + 1) * 2], T = n[(O + 1) * 2 + 1], S = -(v - x), E = g - m, P = Math.sqrt(S * S + E * E), S /= P, E /= P, S *= p, E *= p, I = -(x - T), C = m - w, P = Math.sqrt(I * I + C * C), I /= P, C /= P, I *= p, C *= p;
    const k = m - g, j = v - x, b = m - w, U = T - x, K = k * b + j * U, oe = j * b - U * k, re = oe < 0;
    if (Math.abs(oe) < 1e-3 * Math.abs(K)) {
      h.push(m - S * A, x - E * A, m + S * R, x + E * R), K >= 0 && (s.join === Tt.ROUND ? d += vn(m, x, m - S * A, x - E * A, m - I * A, x - C * A, h, false) + 4 : d += 2, h.push(m - I * R, x - C * R, m + I * A, x + C * A));
      continue;
    }
    const _e = (-S + g) * (-E + x) - (-S + m) * (-E + v), he = (-I + w) * (-C + x) - (-I + m) * (-C + T), J = (k * he - b * _e) / oe, ce = (U * _e - j * he) / oe, pe = (J - m) * (J - m) + (ce - x) * (ce - x), xe = m + (J - m) * A, ue = x + (ce - x) * A, Ie = m - (J - m) * R, Me = x - (ce - x) * R, Et = Math.min(k * k + j * j, b * b + U * U), St = re ? A : R, Nr = Et + St * St * y, fx = pe <= Nr;
    let Fo = s.join;
    if (Fo === Tt.MITER && pe / y > _ && (Fo = Tt.BEVEL), fx) switch (Fo) {
      case Tt.MITER: {
        h.push(xe, ue, Ie, Me);
        break;
      }
      case Tt.BEVEL: {
        re ? h.push(xe, ue, m + S * R, x + E * R, xe, ue, m + I * R, x + C * R) : h.push(m - S * A, x - E * A, Ie, Me, m - I * A, x - C * A, Ie, Me), d += 2;
        break;
      }
      case Tt.ROUND: {
        re ? (h.push(xe, ue, m + S * R, x + E * R), d += vn(m, x, m + S * R, x + E * R, m + I * R, x + C * R, h, true) + 4, h.push(xe, ue, m + I * R, x + C * R)) : (h.push(m - S * A, x - E * A, Ie, Me), d += vn(m, x, m - S * A, x - E * A, m - I * A, x - C * A, h, false) + 4, h.push(m - I * A, x - C * A, Ie, Me));
        break;
      }
    }
    else {
      switch (h.push(m - S * A, x - E * A, m + S * R, x + E * R), Fo) {
        case Tt.MITER: {
          re ? h.push(Ie, Me, Ie, Me) : h.push(xe, ue, xe, ue), d += 2;
          break;
        }
        case Tt.ROUND: {
          re ? d += vn(m, x, m + S * R, x + E * R, m + I * R, x + C * R, h, true) + 2 : d += vn(m, x, m - S * A, x - E * A, m - I * A, x - C * A, h, false) + 2;
          break;
        }
      }
      h.push(m - I * A, x - C * A, m + I * R, x + C * R), d += 2;
    }
  }
  g = n[(c - 2) * 2], v = n[(c - 2) * 2 + 1], m = n[(c - 1) * 2], x = n[(c - 1) * 2 + 1], S = -(v - x), E = g - m, P = Math.sqrt(S * S + E * E), S /= P, E /= P, S *= p, E *= p, h.push(m - S * A, x - E * A, m + S * R, x + E * R), l || (s.cap === qr.ROUND ? d += vn(m - S * (A - R) * 0.5, x - E * (A - R) * 0.5, m - S * A, x - E * A, m + S * R, x + E * R, h, false) + 2 : s.cap === qr.SQUARE && (d += kg(m, x, S, E, A, R, false, h)));
  const $ = e.indices, q = Qi.epsilon * Qi.epsilon;
  for (let O = f; O < d + f - 2; ++O) g = h[O * 2], v = h[O * 2 + 1], m = h[(O + 1) * 2], x = h[(O + 1) * 2 + 1], w = h[(O + 2) * 2], T = h[(O + 2) * 2 + 1], !(Math.abs(g * (x - T) + m * (T - v) + w * (v - x)) < q) && $.push(O, O + 1, O + 2);
}
function nR(t5, e) {
  let r = 0;
  const n = t5.shape, i = t5.points || n.points, s = n.type !== Ye.POLY || n.closeStroke;
  if (i.length === 0) return;
  const o = e.points, a = e.indices, l = i.length / 2, u = o.length / 2;
  let h = u;
  for (o.push(i[0], i[1]), r = 1; r < l; r++) o.push(i[r * 2], i[r * 2 + 1]), a.push(h, h + 1), h++;
  s && a.push(h, u);
}
function Fg(t5, e) {
  t5.lineStyle.native ? nR(t5, e) : rR(t5, e);
}
class $f {
  static curveLength(e, r, n, i, s, o) {
    const a = e - 2 * n + s, l = r - 2 * i + o, u = 2 * n - 2 * e, h = 2 * i - 2 * r, c = 4 * (a * a + l * l), d = 4 * (a * u + l * h), f = u * u + h * h, p = 2 * Math.sqrt(c + d + f), y = Math.sqrt(c), _ = 2 * c * y, g = 2 * Math.sqrt(f), v = d / y;
    return (_ * p + y * d * (p - g) + (4 * f * c - d * d) * Math.log((2 * y + v + p) / (v + g))) / (4 * _);
  }
  static curveTo(e, r, n, i, s) {
    const o = s[s.length - 2], a = s[s.length - 1], l = Qi._segmentsCount($f.curveLength(o, a, e, r, n, i));
    let u = 0, h = 0;
    for (let c = 1; c <= l; ++c) {
      const d = c / l;
      u = o + (e - o) * d, h = a + (r - a) * d, s.push(u + (e + (n - e) * d - u) * d, h + (r + (i - r) * d - h) * d);
    }
  }
}
const Mh = { [Ye.POLY]: X0, [Ye.CIRC]: Nl, [Ye.ELIP]: Nl, [Ye.RECT]: JI, [Ye.RREC]: eR }, Dg = [], va = [];
class Ol {
  constructor(e, r = null, n = null, i = null) {
    this.points = [], this.holes = [], this.shape = e, this.lineStyle = n, this.fillStyle = r, this.matrix = i, this.type = e.type;
  }
  clone() {
    return new Ol(this.shape, this.fillStyle, this.lineStyle, this.matrix);
  }
  destroy() {
    this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null;
  }
}
const si = new ae(), W0 = class Y0 extends Q_ {
  constructor() {
    super(), this.closePointEps = 1e-4, this.boundsPadding = 0, this.uvsFloat32 = null, this.indicesUint16 = null, this.batchable = false, this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.drawCalls = [], this.batchDirty = -1, this.batches = [], this.dirty = 0, this.cacheDirty = -1, this.clearDirty = 0, this.shapeIndex = 0, this._bounds = new kl(), this.boundsDirty = -1;
  }
  get bounds() {
    return this.updateBatches(), this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds;
  }
  invalidate() {
    this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
    for (let e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].texArray.clear(), va.push(this.drawCalls[e]);
    this.drawCalls.length = 0;
    for (let e = 0; e < this.batches.length; e++) {
      const r = this.batches[e];
      r.reset(), Dg.push(r);
    }
    this.batches.length = 0;
  }
  clear() {
    return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this;
  }
  drawShape(e, r = null, n = null, i = null) {
    const s = new Ol(e, r, n, i);
    return this.graphicsData.push(s), this.dirty++, this;
  }
  drawHole(e, r = null) {
    if (!this.graphicsData.length) return null;
    const n = new Ol(e, null, null, r), i = this.graphicsData[this.graphicsData.length - 1];
    return n.lineStyle = i.lineStyle, i.holes.push(n), this.dirty++, this;
  }
  destroy() {
    super.destroy();
    for (let e = 0; e < this.graphicsData.length; ++e) this.graphicsData[e].destroy();
    this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null;
  }
  containsPoint(e) {
    const r = this.graphicsData;
    for (let n = 0; n < r.length; ++n) {
      const i = r[n];
      if (i.fillStyle.visible && i.shape && (i.matrix ? i.matrix.applyInverse(e, si) : si.copyFrom(e), i.shape.contains(si.x, si.y))) {
        let s = false;
        if (i.holes) {
          for (let o = 0; o < i.holes.length; o++) if (i.holes[o].shape.contains(si.x, si.y)) {
            s = true;
            break;
          }
        }
        if (!s) return true;
      }
    }
    return false;
  }
  updateBatches() {
    if (!this.graphicsData.length) {
      this.batchable = true;
      return;
    }
    if (!this.validateBatching()) return;
    this.cacheDirty = this.dirty;
    const e = this.uvs, r = this.graphicsData;
    let n = null, i = null;
    this.batches.length > 0 && (n = this.batches[this.batches.length - 1], i = n.style);
    for (let l = this.shapeIndex; l < r.length; l++) {
      this.shapeIndex++;
      const u = r[l], h = u.fillStyle, c = u.lineStyle;
      Mh[u.type].build(u), u.matrix && this.transformPoints(u.points, u.matrix), (h.visible || c.visible) && this.processHoles(u.holes);
      for (let d = 0; d < 2; d++) {
        const f = d === 0 ? h : c;
        if (!f.visible) continue;
        const p = f.texture.baseTexture, y = this.indices.length, _ = this.points.length / 2;
        p.wrapMode = an.REPEAT, d === 0 ? this.processFill(u) : this.processLine(u);
        const g = this.points.length / 2 - _;
        g !== 0 && (n && !this._compareStyles(i, f) && (n.end(y, _), n = null), n || (n = Dg.pop() || new tR(), n.begin(f, y, _), this.batches.push(n), i = f), this.addUvs(this.points, e, f.texture, _, g, f.matrix));
      }
    }
    const s = this.indices.length, o = this.points.length / 2;
    if (n && n.end(s, o), this.batches.length === 0) {
      this.batchable = true;
      return;
    }
    const a = o > 65535;
    this.indicesUint16 && this.indices.length === this.indicesUint16.length && a === this.indicesUint16.BYTES_PER_ELEMENT > 2 ? this.indicesUint16.set(this.indices) : this.indicesUint16 = a ? new Uint32Array(this.indices) : new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls();
  }
  _compareStyles(e, r) {
    return !(!e || !r || e.texture.baseTexture !== r.texture.baseTexture || e.color + e.alpha !== r.color + r.alpha || !!e.native != !!r.native);
  }
  validateBatching() {
    if (this.dirty === this.cacheDirty || !this.graphicsData.length) return false;
    for (let e = 0, r = this.graphicsData.length; e < r; e++) {
      const n = this.graphicsData[e], i = n.fillStyle, s = n.lineStyle;
      if (i && !i.texture.baseTexture.valid || s && !s.texture.baseTexture.valid) return false;
    }
    return true;
  }
  packBatches() {
    this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
    const e = this.batches;
    for (let r = 0, n = e.length; r < n; r++) {
      const i = e[r];
      for (let s = 0; s < i.size; s++) {
        const o = i.start + s;
        this.indicesUint16[o] = this.indicesUint16[o] - i.attribStart;
      }
    }
  }
  isBatchable() {
    if (this.points.length > 65535 * 2) return false;
    const e = this.batches;
    for (let r = 0; r < e.length; r++) if (e[r].style.native) return false;
    return this.points.length < Y0.BATCHABLE_SIZE * 2;
  }
  buildDrawCalls() {
    let e = ++ee._globalBatch;
    for (let c = 0; c < this.drawCalls.length; c++) this.drawCalls[c].texArray.clear(), va.push(this.drawCalls[c]);
    this.drawCalls.length = 0;
    const r = this.colors, n = this.textureIds;
    let i = va.pop();
    i || (i = new Jc(), i.texArray = new nd()), i.texArray.count = 0, i.start = 0, i.size = 0, i.type = lr.TRIANGLES;
    let s = 0, o = null, a = 0, l = false, u = lr.TRIANGLES, h = 0;
    this.drawCalls.push(i);
    for (let c = 0; c < this.batches.length; c++) {
      const d = this.batches[c], f = 8, p = d.style, y = p.texture.baseTexture;
      l !== !!p.native && (l = !!p.native, u = l ? lr.LINES : lr.TRIANGLES, o = null, s = f, e++), o !== y && (o = y, y._batchEnabled !== e && (s === f && (e++, s = 0, i.size > 0 && (i = va.pop(), i || (i = new Jc(), i.texArray = new nd()), this.drawCalls.push(i)), i.start = h, i.size = 0, i.texArray.count = 0, i.type = u), y.touched = 1, y._batchEnabled = e, y._batchLocation = s, y.wrapMode = an.REPEAT, i.texArray.elements[i.texArray.count++] = y, s++)), i.size += d.size, h += d.size, a = y._batchLocation, this.addColors(r, p.color, p.alpha, d.attribSize, d.attribStart), this.addTextureIds(n, a, d.attribSize, d.attribStart);
    }
    ee._globalBatch = e, this.packAttributes();
  }
  packAttributes() {
    const e = this.points, r = this.uvs, n = this.colors, i = this.textureIds, s = new ArrayBuffer(e.length * 3 * 4), o = new Float32Array(s), a = new Uint32Array(s);
    let l = 0;
    for (let u = 0; u < e.length / 2; u++) o[l++] = e[u * 2], o[l++] = e[u * 2 + 1], o[l++] = r[u * 2], o[l++] = r[u * 2 + 1], a[l++] = n[u], o[l++] = i[u];
    this._buffer.update(s), this._indexBuffer.update(this.indicesUint16);
  }
  processFill(e) {
    e.holes.length ? X0.triangulate(e, this) : Mh[e.type].triangulate(e, this);
  }
  processLine(e) {
    Fg(e, this);
    for (let r = 0; r < e.holes.length; r++) Fg(e.holes[r], this);
  }
  processHoles(e) {
    for (let r = 0; r < e.length; r++) {
      const n = e[r];
      Mh[n.type].build(n), n.matrix && this.transformPoints(n.points, n.matrix);
    }
  }
  calculateBounds() {
    const e = this._bounds;
    e.clear(), e.addVertexData(this.points, 0, this.points.length), e.pad(this.boundsPadding, this.boundsPadding);
  }
  transformPoints(e, r) {
    for (let n = 0; n < e.length / 2; n++) {
      const i = e[n * 2], s = e[n * 2 + 1];
      e[n * 2] = r.a * i + r.c * s + r.tx, e[n * 2 + 1] = r.b * i + r.d * s + r.ty;
    }
  }
  addColors(e, r, n, i, s = 0) {
    const o = ge.shared.setValue(r).toLittleEndianNumber(), a = ge.shared.setValue(o).toPremultiplied(n);
    e.length = Math.max(e.length, s + i);
    for (let l = 0; l < i; l++) e[s + l] = a;
  }
  addTextureIds(e, r, n, i = 0) {
    e.length = Math.max(e.length, i + n);
    for (let s = 0; s < n; s++) e[i + s] = r;
  }
  addUvs(e, r, n, i, s, o = null) {
    let a = 0;
    const l = r.length, u = n.frame;
    for (; a < s; ) {
      let c = e[(i + a) * 2], d = e[(i + a) * 2 + 1];
      if (o) {
        const f = o.a * c + o.c * d + o.tx;
        d = o.b * c + o.d * d + o.ty, c = f;
      }
      a++, r.push(c / u.width, d / u.height);
    }
    const h = n.baseTexture;
    (u.width < h.width || u.height < h.height) && this.adjustUvs(r, n, l, s);
  }
  adjustUvs(e, r, n, i) {
    const s = r.baseTexture, o = 1e-6, a = n + i * 2, l = r.frame, u = l.width / s.width, h = l.height / s.height;
    let c = l.x / l.width, d = l.y / l.height, f = Math.floor(e[n] + o), p = Math.floor(e[n + 1] + o);
    for (let y = n + 2; y < a; y += 2) f = Math.min(f, Math.floor(e[y] + o)), p = Math.min(p, Math.floor(e[y + 1] + o));
    c -= f, d -= p;
    for (let y = n; y < a; y += 2) e[y] = (e[y] + c) * u, e[y + 1] = (e[y + 1] + d) * h;
  }
};
W0.BATCHABLE_SIZE = 100;
let iR = W0;
class mu {
  constructor() {
    this.color = 16777215, this.alpha = 1, this.texture = X.WHITE, this.matrix = null, this.visible = false, this.reset();
  }
  clone() {
    const e = new mu();
    return e.color = this.color, e.alpha = this.alpha, e.texture = this.texture, e.matrix = this.matrix, e.visible = this.visible, e;
  }
  reset() {
    this.color = 16777215, this.alpha = 1, this.texture = X.WHITE, this.matrix = null, this.visible = false;
  }
  destroy() {
    this.texture = null, this.matrix = null;
  }
}
class Xf extends mu {
  constructor() {
    super(...arguments), this.width = 0, this.alignment = 0.5, this.native = false, this.cap = qr.BUTT, this.join = Tt.MITER, this.miterLimit = 10;
  }
  clone() {
    const e = new Xf();
    return e.color = this.color, e.alpha = this.alpha, e.texture = this.texture, e.matrix = this.matrix, e.visible = this.visible, e.width = this.width, e.alignment = this.alignment, e.native = this.native, e.cap = this.cap, e.join = this.join, e.miterLimit = this.miterLimit, e;
  }
  reset() {
    super.reset(), this.color = 0, this.alignment = 0.5, this.width = 0, this.native = false, this.cap = qr.BUTT, this.join = Tt.MITER, this.miterLimit = 10;
  }
}
const kh = {}, Ed = class Xa extends et {
  constructor(e = null) {
    super(), this.shader = null, this.pluginName = "batch", this.currentPath = null, this.batches = [], this.batchTint = -1, this.batchDirty = -1, this.vertexData = null, this._fillStyle = new mu(), this._lineStyle = new Xf(), this._matrix = null, this._holeMode = false, this.state = pr.for2d(), this._geometry = e || new iR(), this._geometry.refCount++, this._transformID = -1, this._tintColor = new ge(16777215), this.blendMode = Q.NORMAL;
  }
  get geometry() {
    return this._geometry;
  }
  clone() {
    return this.finishPoly(), new Xa(this._geometry);
  }
  set blendMode(e) {
    this.state.blendMode = e;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(e) {
    this._tintColor.setValue(e);
  }
  get fill() {
    return this._fillStyle;
  }
  get line() {
    return this._lineStyle;
  }
  lineStyle(e = null, r = 0, n, i = 0.5, s = false) {
    return typeof e == "number" && (e = { width: e, color: r, alpha: n, alignment: i, native: s }), this.lineTextureStyle(e);
  }
  lineTextureStyle(e) {
    const r = { width: 0, texture: X.WHITE, color: (e == null ? void 0 : e.texture) ? 16777215 : 0, matrix: null, alignment: 0.5, native: false, cap: qr.BUTT, join: Tt.MITER, miterLimit: 10 };
    e = Object.assign(r, e), this.normalizeColor(e), this.currentPath && this.startPoly();
    const n = e.width > 0 && e.alpha > 0;
    return n ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._lineStyle, { visible: n }, e)) : this._lineStyle.reset(), this;
  }
  startPoly() {
    if (this.currentPath) {
      const e = this.currentPath.points, r = this.currentPath.points.length;
      r > 2 && (this.drawShape(this.currentPath), this.currentPath = new Ln(), this.currentPath.closeStroke = false, this.currentPath.points.push(e[r - 2], e[r - 1]));
    } else this.currentPath = new Ln(), this.currentPath.closeStroke = false;
  }
  finishPoly() {
    this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0);
  }
  moveTo(e, r) {
    return this.startPoly(), this.currentPath.points[0] = e, this.currentPath.points[1] = r, this;
  }
  lineTo(e, r) {
    this.currentPath || this.moveTo(0, 0);
    const n = this.currentPath.points, i = n[n.length - 2], s = n[n.length - 1];
    return (i !== e || s !== r) && n.push(e, r), this;
  }
  _initCurve(e = 0, r = 0) {
    this.currentPath ? this.currentPath.points.length === 0 && (this.currentPath.points = [e, r]) : this.moveTo(e, r);
  }
  quadraticCurveTo(e, r, n, i) {
    this._initCurve();
    const s = this.currentPath.points;
    return s.length === 0 && this.moveTo(0, 0), $f.curveTo(e, r, n, i, s), this;
  }
  bezierCurveTo(e, r, n, i, s, o) {
    return this._initCurve(), Vf.curveTo(e, r, n, i, s, o, this.currentPath.points), this;
  }
  arcTo(e, r, n, i, s) {
    this._initCurve(e, r);
    const o = this.currentPath.points, a = Mg.curveTo(e, r, n, i, s, o);
    if (a) {
      const { cx: l, cy: u, radius: h, startAngle: c, endAngle: d, anticlockwise: f } = a;
      this.arc(l, u, h, c, d, f);
    }
    return this;
  }
  arc(e, r, n, i, s, o = false) {
    if (i === s) return this;
    if (!o && s <= i ? s += Cl : o && i <= s && (i += Cl), s - i === 0) return this;
    const a = e + Math.cos(i) * n, l = r + Math.sin(i) * n, u = this._geometry.closePointEps;
    let h = this.currentPath ? this.currentPath.points : null;
    if (h) {
      const c = Math.abs(h[h.length - 2] - a), d = Math.abs(h[h.length - 1] - l);
      c < u && d < u || h.push(a, l);
    } else this.moveTo(a, l), h = this.currentPath.points;
    return Mg.arc(a, l, e, r, n, i, s, o, h), this;
  }
  beginFill(e = 0, r) {
    return this.beginTextureFill({ texture: X.WHITE, color: e, alpha: r });
  }
  normalizeColor(e) {
    const r = ge.shared.setValue(e.color ?? 0);
    e.color = r.toNumber(), e.alpha ?? (e.alpha = r.alpha);
  }
  beginTextureFill(e) {
    const r = { texture: X.WHITE, color: 16777215, matrix: null };
    e = Object.assign(r, e), this.normalizeColor(e), this.currentPath && this.startPoly();
    const n = e.alpha > 0;
    return n ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._fillStyle, { visible: n }, e)) : this._fillStyle.reset(), this;
  }
  endFill() {
    return this.finishPoly(), this._fillStyle.reset(), this;
  }
  drawRect(e, r, n, i) {
    return this.drawShape(new te(e, r, n, i));
  }
  drawRoundedRect(e, r, n, i, s) {
    return this.drawShape(new du(e, r, n, i, s));
  }
  drawCircle(e, r, n) {
    return this.drawShape(new hu(e, r, n));
  }
  drawEllipse(e, r, n, i) {
    return this.drawShape(new cu(e, r, n, i));
  }
  drawPolygon(...e) {
    let r, n = true;
    const i = e[0];
    i.points ? (n = i.closeStroke, r = i.points) : Array.isArray(e[0]) ? r = e[0] : r = e;
    const s = new Ln(r);
    return s.closeStroke = n, this.drawShape(s), this;
  }
  drawShape(e) {
    return this._holeMode ? this._geometry.drawHole(e, this._matrix) : this._geometry.drawShape(e, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this;
  }
  clear() {
    return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = false, this.currentPath = null, this;
  }
  isFastRect() {
    const e = this._geometry.graphicsData;
    return e.length === 1 && e[0].shape.type === Ye.RECT && !e[0].matrix && !e[0].holes.length && !(e[0].lineStyle.visible && e[0].lineStyle.width);
  }
  _render(e) {
    this.finishPoly();
    const r = this._geometry;
    r.updateBatches(), r.batchable ? (this.batchDirty !== r.batchDirty && this._populateBatches(), this._renderBatched(e)) : (e.batch.flush(), this._renderDirect(e));
  }
  _populateBatches() {
    const e = this._geometry, r = this.blendMode, n = e.batches.length;
    this.batchTint = -1, this._transformID = -1, this.batchDirty = e.batchDirty, this.batches.length = n, this.vertexData = new Float32Array(e.points);
    for (let i = 0; i < n; i++) {
      const s = e.batches[i], o = s.style.color, a = new Float32Array(this.vertexData.buffer, s.attribStart * 4 * 2, s.attribSize * 2), l = new Float32Array(e.uvsFloat32.buffer, s.attribStart * 4 * 2, s.attribSize * 2), u = new Uint16Array(e.indicesUint16.buffer, s.start * 2, s.size), h = { vertexData: a, blendMode: r, indices: u, uvs: l, _batchRGB: ge.shared.setValue(o).toRgbArray(), _tintRGB: o, _texture: s.style.texture, alpha: s.style.alpha, worldAlpha: 1 };
      this.batches[i] = h;
    }
  }
  _renderBatched(e) {
    if (this.batches.length) {
      e.batch.setObjectRenderer(e.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
      for (let r = 0, n = this.batches.length; r < n; r++) {
        const i = this.batches[r];
        i.worldAlpha = this.worldAlpha * i.alpha, e.plugins[this.pluginName].render(i);
      }
    }
  }
  _renderDirect(e) {
    const r = this._resolveDirectShader(e), n = this._geometry, i = this.worldAlpha, s = r.uniforms, o = n.drawCalls;
    s.translationMatrix = this.transform.worldTransform, ge.shared.setValue(this._tintColor).premultiply(i).toArray(s.tint), e.shader.bind(r), e.geometry.bind(n, r), e.state.set(this.state);
    for (let a = 0, l = o.length; a < l; a++) this._renderDrawCallDirect(e, n.drawCalls[a]);
  }
  _renderDrawCallDirect(e, r) {
    const { texArray: n, type: i, size: s, start: o } = r, a = n.count;
    for (let l = 0; l < a; l++) e.texture.bind(n.elements[l], l);
    e.geometry.draw(i, s, o);
  }
  _resolveDirectShader(e) {
    let r = this.shader;
    const n = this.pluginName;
    if (!r) {
      if (!kh[n]) {
        const { maxTextures: i } = e.plugins[n], s = new Int32Array(i);
        for (let l = 0; l < i; l++) s[l] = l;
        const o = { tint: new Float32Array([1, 1, 1, 1]), translationMatrix: new ve(), default: Xt.from({ uSamplers: s }, true) }, a = e.plugins[n]._shader.program;
        kh[n] = new dr(a, o);
      }
      r = kh[n];
    }
    return r;
  }
  _calculateBounds() {
    this.finishPoly();
    const e = this._geometry;
    if (!e.graphicsData.length) return;
    const { minX: r, minY: n, maxX: i, maxY: s } = e.bounds;
    this._bounds.addFrame(this.transform, r, n, i, s);
  }
  containsPoint(e) {
    return this.worldTransform.applyInverse(e, Xa._TEMP_POINT), this._geometry.containsPoint(Xa._TEMP_POINT);
  }
  calculateTints() {
    if (this.batchTint !== this.tint) {
      this.batchTint = this._tintColor.toNumber();
      for (let e = 0; e < this.batches.length; e++) {
        const r = this.batches[e];
        r._tintRGB = ge.shared.setValue(this._tintColor).multiply(r._batchRGB).toLittleEndianNumber();
      }
    }
  }
  calculateVertices() {
    const e = this.transform._worldID;
    if (this._transformID === e) return;
    this._transformID = e;
    const r = this.transform.worldTransform, n = r.a, i = r.b, s = r.c, o = r.d, a = r.tx, l = r.ty, u = this._geometry.points, h = this.vertexData;
    let c = 0;
    for (let d = 0; d < u.length; d += 2) {
      const f = u[d], p = u[d + 1];
      h[c++] = n * f + s * p + a, h[c++] = o * p + i * f + l;
    }
  }
  closePath() {
    const e = this.currentPath;
    return e && (e.closeStroke = true, this.finishPoly()), this;
  }
  setMatrix(e) {
    return this._matrix = e, this;
  }
  beginHole() {
    return this.finishPoly(), this._holeMode = true, this;
  }
  endHole() {
    return this.finishPoly(), this._holeMode = false, this;
  }
  destroy(e) {
    this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, super.destroy(e);
  }
};
Ed.curves = Qi, Ed._TEMP_POINT = new ae();
let Pn = Ed;
class sR {
  constructor(e, r) {
    this.uvBuffer = e, this.uvMatrix = r, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0;
  }
  update(e) {
    if (!e && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID) return;
    this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
    const r = this.uvBuffer.data;
    (!this.data || this.data.length !== r.length) && (this.data = new Float32Array(r.length)), this.uvMatrix.multiplyUvs(r, this.data), this._updateID++;
  }
}
const Fh = new ae(), Bg = new Ln(), Z0 = class K0 extends et {
  constructor(e, r, n, i = lr.TRIANGLES) {
    super(), this.geometry = e, this.shader = r, this.state = n || pr.for2d(), this.drawMode = i, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = -1, this._transformID = -1, this._roundPixels = H.ROUND_PIXELS, this.batchUvs = null;
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e) {
    this._geometry !== e && (this._geometry && (this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose()), this._geometry = e, this._geometry && this._geometry.refCount++, this.vertexDirty = -1);
  }
  get uvBuffer() {
    return this.geometry.buffers[1];
  }
  get verticesBuffer() {
    return this.geometry.buffers[0];
  }
  set material(e) {
    this.shader = e;
  }
  get material() {
    return this.shader;
  }
  set blendMode(e) {
    this.state.blendMode = e;
  }
  get blendMode() {
    return this.state.blendMode;
  }
  set roundPixels(e) {
    this._roundPixels !== e && (this._transformID = -1), this._roundPixels = e;
  }
  get roundPixels() {
    return this._roundPixels;
  }
  get tint() {
    return "tint" in this.shader ? this.shader.tint : null;
  }
  set tint(e) {
    this.shader.tint = e;
  }
  get tintValue() {
    return this.shader.tintValue;
  }
  get texture() {
    return "texture" in this.shader ? this.shader.texture : null;
  }
  set texture(e) {
    this.shader.texture = e;
  }
  _render(e) {
    const r = this.geometry.buffers[0].data;
    this.shader.batchable && this.drawMode === lr.TRIANGLES && r.length < K0.BATCHABLE_SIZE * 2 ? this._renderToBatch(e) : this._renderDefault(e);
  }
  _renderDefault(e) {
    const r = this.shader;
    r.alpha = this.worldAlpha, r.update && r.update(), e.batch.flush(), r.uniforms.translationMatrix = this.transform.worldTransform.toArray(true), e.shader.bind(r), e.state.set(this.state), e.geometry.bind(this.geometry, r), e.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
  }
  _renderToBatch(e) {
    const r = this.geometry, n = this.shader;
    n.uvMatrix && (n.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = r.indexBuffer.data, this._tintRGB = n._tintRGB, this._texture = n.texture;
    const i = this.material.pluginName;
    e.batch.setObjectRenderer(e.plugins[i]), e.plugins[i].render(this);
  }
  calculateVertices() {
    const e = this.geometry.buffers[0], r = e.data, n = e._updateID;
    if (n === this.vertexDirty && this._transformID === this.transform._worldID) return;
    this._transformID = this.transform._worldID, this.vertexData.length !== r.length && (this.vertexData = new Float32Array(r.length));
    const i = this.transform.worldTransform, s = i.a, o = i.b, a = i.c, l = i.d, u = i.tx, h = i.ty, c = this.vertexData;
    for (let d = 0; d < c.length / 2; d++) {
      const f = r[d * 2], p = r[d * 2 + 1];
      c[d * 2] = s * f + a * p + u, c[d * 2 + 1] = o * f + l * p + h;
    }
    if (this._roundPixels) {
      const d = H.RESOLUTION;
      for (let f = 0; f < c.length; ++f) c[f] = Math.round(c[f] * d) / d;
    }
    this.vertexDirty = n;
  }
  calculateUvs() {
    const e = this.geometry.buffers[1], r = this.shader;
    r.uvMatrix.isSimple ? this.uvs = e.data : (this.batchUvs || (this.batchUvs = new sR(e, r.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data);
  }
  _calculateBounds() {
    this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
  }
  containsPoint(e) {
    if (!this.getBounds().contains(e.x, e.y)) return false;
    this.worldTransform.applyInverse(e, Fh);
    const r = this.geometry.getBuffer("aVertexPosition").data, n = Bg.points, i = this.geometry.getIndex().data, s = i.length, o = this.drawMode === 4 ? 3 : 1;
    for (let a = 0; a + 2 < s; a += o) {
      const l = i[a] * 2, u = i[a + 1] * 2, h = i[a + 2] * 2;
      if (n[0] = r[l], n[1] = r[l + 1], n[2] = r[u], n[3] = r[u + 1], n[4] = r[h], n[5] = r[h + 1], Bg.contains(Fh.x, Fh.y)) return true;
    }
    return false;
  }
  destroy(e) {
    super.destroy(e), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null;
  }
};
Z0.BATCHABLE_SIZE = 100;
let Ng = Z0;
class oR extends hn {
  constructor(e, r, n) {
    super();
    const i = new ke(e), s = new ke(r, true), o = new ke(n, true, true);
    this.addAttribute("aVertexPosition", i, 2, false, Z.FLOAT).addAttribute("aTextureCoord", s, 2, false, Z.FLOAT).addIndex(o), this._updateId = -1;
  }
  get vertexDirtyId() {
    return this.buffers[0]._updateID;
  }
}
var aR = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`, lR = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
class Og extends dr {
  constructor(e, r) {
    const n = { uSampler: e, alpha: 1, uTextureMatrix: ve.IDENTITY, uColor: new Float32Array([1, 1, 1, 1]) };
    r = Object.assign({ tint: 16777215, alpha: 1, pluginName: "batch" }, r), r.uniforms && Object.assign(n, r.uniforms), super(r.program || br.from(lR, aR), n), this._colorDirty = false, this.uvMatrix = new d0(e), this.batchable = r.program === void 0, this.pluginName = r.pluginName, this._tintColor = new ge(r.tint), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = true, this.alpha = r.alpha;
  }
  get texture() {
    return this.uniforms.uSampler;
  }
  set texture(e) {
    this.uniforms.uSampler !== e && (!this.uniforms.uSampler.baseTexture.alphaMode != !e.baseTexture.alphaMode && (this._colorDirty = true), this.uniforms.uSampler = e, this.uvMatrix.texture = e);
  }
  set alpha(e) {
    e !== this._alpha && (this._alpha = e, this._colorDirty = true);
  }
  get alpha() {
    return this._alpha;
  }
  set tint(e) {
    e !== this.tint && (this._tintColor.setValue(e), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = true);
  }
  get tint() {
    return this._tintColor.value;
  }
  get tintValue() {
    return this._tintColor.toNumber();
  }
  update() {
    if (this._colorDirty) {
      this._colorDirty = false;
      const e = this.texture.baseTexture.alphaMode;
      ge.shared.setValue(this._tintColor).premultiply(this._alpha, e).toArray(this.uniforms.uColor);
    }
    this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
  }
}
class Lg {
  constructor(e, r, n) {
    this.geometry = new hn(), this.indexBuffer = null, this.size = n, this.dynamicProperties = [], this.staticProperties = [];
    for (let i = 0; i < e.length; ++i) {
      let s = e[i];
      s = { attributeName: s.attributeName, size: s.size, uploadFunction: s.uploadFunction, type: s.type || Z.FLOAT, offset: s.offset }, r[i] ? this.dynamicProperties.push(s) : this.staticProperties.push(s);
    }
    this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers();
  }
  initBuffers() {
    const e = this.geometry;
    let r = 0;
    this.indexBuffer = new ke(Rb(this.size), true, true), e.addIndex(this.indexBuffer), this.dynamicStride = 0;
    for (let o = 0; o < this.dynamicProperties.length; ++o) {
      const a = this.dynamicProperties[o];
      a.offset = r, r += a.size, this.dynamicStride += a.size;
    }
    const n = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
    this.dynamicData = new Float32Array(n), this.dynamicDataUint32 = new Uint32Array(n), this.dynamicBuffer = new ke(this.dynamicData, false, false);
    let i = 0;
    this.staticStride = 0;
    for (let o = 0; o < this.staticProperties.length; ++o) {
      const a = this.staticProperties[o];
      a.offset = i, i += a.size, this.staticStride += a.size;
    }
    const s = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
    this.staticData = new Float32Array(s), this.staticDataUint32 = new Uint32Array(s), this.staticBuffer = new ke(this.staticData, true, false);
    for (let o = 0; o < this.dynamicProperties.length; ++o) {
      const a = this.dynamicProperties[o];
      e.addAttribute(a.attributeName, this.dynamicBuffer, 0, a.type === Z.UNSIGNED_BYTE, a.type, this.dynamicStride * 4, a.offset * 4);
    }
    for (let o = 0; o < this.staticProperties.length; ++o) {
      const a = this.staticProperties[o];
      e.addAttribute(a.attributeName, this.staticBuffer, 0, a.type === Z.UNSIGNED_BYTE, a.type, this.staticStride * 4, a.offset * 4);
    }
  }
  uploadDynamic(e, r, n) {
    for (let i = 0; i < this.dynamicProperties.length; i++) {
      const s = this.dynamicProperties[i];
      s.uploadFunction(e, r, n, s.type === Z.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, s.offset);
    }
    this.dynamicBuffer._updateID++;
  }
  uploadStatic(e, r, n) {
    for (let i = 0; i < this.staticProperties.length; i++) {
      const s = this.staticProperties[i];
      s.uploadFunction(e, r, n, s.type === Z.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, s.offset);
    }
    this.staticBuffer._updateID++;
  }
  destroy() {
    this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy();
  }
}
var uR = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`, hR = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
class q0 extends fu {
  constructor(e) {
    super(e), this.shader = null, this.properties = null, this.tempMatrix = new ve(), this.properties = [{ attributeName: "aVertexPosition", size: 2, uploadFunction: this.uploadVertices, offset: 0 }, { attributeName: "aPositionCoord", size: 2, uploadFunction: this.uploadPosition, offset: 0 }, { attributeName: "aRotation", size: 1, uploadFunction: this.uploadRotation, offset: 0 }, { attributeName: "aTextureCoord", size: 2, uploadFunction: this.uploadUvs, offset: 0 }, { attributeName: "aColor", size: 1, type: Z.UNSIGNED_BYTE, uploadFunction: this.uploadTint, offset: 0 }], this.shader = dr.from(hR, uR, {}), this.state = pr.for2d();
  }
  render(e) {
    const r = e.children, n = e._maxSize, i = e._batchSize, s = this.renderer;
    let o = r.length;
    if (o === 0) return;
    o > n && !e.autoResize && (o = n);
    let a = e._buffers;
    a || (a = e._buffers = this.generateBuffers(e));
    const l = r[0]._texture.baseTexture, u = l.alphaMode > 0;
    this.state.blendMode = Z_(e.blendMode, u), s.state.set(this.state);
    const h = s.gl, c = e.worldTransform.copyTo(this.tempMatrix);
    c.prepend(s.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = c.toArray(true), this.shader.uniforms.uColor = ge.shared.setValue(e.tintRgb).premultiply(e.worldAlpha, u).toArray(this.shader.uniforms.uColor), this.shader.uniforms.uSampler = l, this.renderer.shader.bind(this.shader);
    let d = false;
    for (let f = 0, p = 0; f < o; f += i, p += 1) {
      let y = o - f;
      y > i && (y = i), p >= a.length && a.push(this._generateOneMoreBuffer(e));
      const _ = a[p];
      _.uploadDynamic(r, f, y);
      const g = e._bufferUpdateIDs[p] || 0;
      d = d || _._updateID < g, d && (_._updateID = e._updateID, _.uploadStatic(r, f, y)), s.geometry.bind(_.geometry), h.drawElements(h.TRIANGLES, y * 6, h.UNSIGNED_SHORT, 0);
    }
  }
  generateBuffers(e) {
    const r = [], n = e._maxSize, i = e._batchSize, s = e._properties;
    for (let o = 0; o < n; o += i) r.push(new Lg(this.properties, s, i));
    return r;
  }
  _generateOneMoreBuffer(e) {
    const r = e._batchSize, n = e._properties;
    return new Lg(this.properties, n, r);
  }
  uploadVertices(e, r, n, i, s, o) {
    let a = 0, l = 0, u = 0, h = 0;
    for (let c = 0; c < n; ++c) {
      const d = e[r + c], f = d._texture, p = d.scale.x, y = d.scale.y, _ = f.trim, g = f.orig;
      _ ? (l = _.x - d.anchor.x * g.width, a = l + _.width, h = _.y - d.anchor.y * g.height, u = h + _.height) : (a = g.width * (1 - d.anchor.x), l = g.width * -d.anchor.x, u = g.height * (1 - d.anchor.y), h = g.height * -d.anchor.y), i[o] = l * p, i[o + 1] = h * y, i[o + s] = a * p, i[o + s + 1] = h * y, i[o + s * 2] = a * p, i[o + s * 2 + 1] = u * y, i[o + s * 3] = l * p, i[o + s * 3 + 1] = u * y, o += s * 4;
    }
  }
  uploadPosition(e, r, n, i, s, o) {
    for (let a = 0; a < n; a++) {
      const l = e[r + a].position;
      i[o] = l.x, i[o + 1] = l.y, i[o + s] = l.x, i[o + s + 1] = l.y, i[o + s * 2] = l.x, i[o + s * 2 + 1] = l.y, i[o + s * 3] = l.x, i[o + s * 3 + 1] = l.y, o += s * 4;
    }
  }
  uploadRotation(e, r, n, i, s, o) {
    for (let a = 0; a < n; a++) {
      const l = e[r + a].rotation;
      i[o] = l, i[o + s] = l, i[o + s * 2] = l, i[o + s * 3] = l, o += s * 4;
    }
  }
  uploadUvs(e, r, n, i, s, o) {
    for (let a = 0; a < n; ++a) {
      const l = e[r + a]._texture._uvs;
      l ? (i[o] = l.x0, i[o + 1] = l.y0, i[o + s] = l.x1, i[o + s + 1] = l.y1, i[o + s * 2] = l.x2, i[o + s * 2 + 1] = l.y2, i[o + s * 3] = l.x3, i[o + s * 3 + 1] = l.y3, o += s * 4) : (i[o] = 0, i[o + 1] = 0, i[o + s] = 0, i[o + s + 1] = 0, i[o + s * 2] = 0, i[o + s * 2 + 1] = 0, i[o + s * 3] = 0, i[o + s * 3 + 1] = 0, o += s * 4);
    }
  }
  uploadTint(e, r, n, i, s, o) {
    for (let a = 0; a < n; ++a) {
      const l = e[r + a], u = ge.shared.setValue(l._tintRGB).toPremultiplied(l.alpha, l.texture.baseTexture.alphaMode > 0);
      i[o] = u, i[o + s] = u, i[o + s * 2] = u, i[o + s * 3] = u, o += s * 4;
    }
  }
  destroy() {
    super.destroy(), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null;
  }
}
q0.extension = { name: "particle", type: L.RendererPlugin };
W.add(q0);
var gu = ((t5) => (t5[t5.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", t5[t5.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL", t5))(gu || {});
const _a = { willReadFrequently: true }, tr = class Y {
  static get experimentalLetterSpacingSupported() {
    let e = Y._experimentalLetterSpacingSupported;
    if (e !== void 0) {
      const r = H.ADAPTER.getCanvasRenderingContext2D().prototype;
      e = Y._experimentalLetterSpacingSupported = "letterSpacing" in r || "textLetterSpacing" in r;
    }
    return e;
  }
  constructor(e, r, n, i, s, o, a, l, u) {
    this.text = e, this.style = r, this.width = n, this.height = i, this.lines = s, this.lineWidths = o, this.lineHeight = a, this.maxLineWidth = l, this.fontProperties = u;
  }
  static measureText(e, r, n, i = Y._canvas) {
    n = n ?? r.wordWrap;
    const s = r.toFontString(), o = Y.measureFont(s);
    o.fontSize === 0 && (o.fontSize = r.fontSize, o.ascent = r.fontSize);
    const a = i.getContext("2d", _a);
    a.font = s;
    const l = (n ? Y.wordWrap(e, r, i) : e).split(/(?:\r\n|\r|\n)/), u = new Array(l.length);
    let h = 0;
    for (let p = 0; p < l.length; p++) {
      const y = Y._measureText(l[p], r.letterSpacing, a);
      u[p] = y, h = Math.max(h, y);
    }
    let c = h + r.strokeThickness;
    r.dropShadow && (c += r.dropShadowDistance);
    const d = r.lineHeight || o.fontSize + r.strokeThickness;
    let f = Math.max(d, o.fontSize + r.strokeThickness * 2) + r.leading + (l.length - 1) * (d + r.leading);
    return r.dropShadow && (f += r.dropShadowDistance), new Y(e, r, c, f, l, u, d + r.leading, h, o);
  }
  static _measureText(e, r, n) {
    let i = false;
    Y.experimentalLetterSpacingSupported && (Y.experimentalLetterSpacing ? (n.letterSpacing = `${r}px`, n.textLetterSpacing = `${r}px`, i = true) : (n.letterSpacing = "0px", n.textLetterSpacing = "0px"));
    let s = n.measureText(e).width;
    return s > 0 && (i ? s -= r : s += (Y.graphemeSegmenter(e).length - 1) * r), s;
  }
  static wordWrap(e, r, n = Y._canvas) {
    const i = n.getContext("2d", _a);
    let s = 0, o = "", a = "";
    const l = /* @__PURE__ */ Object.create(null), { letterSpacing: u, whiteSpace: h } = r, c = Y.collapseSpaces(h), d = Y.collapseNewlines(h);
    let f = !c;
    const p = r.wordWrapWidth + u, y = Y.tokenize(e);
    for (let _ = 0; _ < y.length; _++) {
      let g = y[_];
      if (Y.isNewline(g)) {
        if (!d) {
          a += Y.addLine(o), f = !c, o = "", s = 0;
          continue;
        }
        g = " ";
      }
      if (c) {
        const m = Y.isBreakingSpace(g), x = Y.isBreakingSpace(o[o.length - 1]);
        if (m && x) continue;
      }
      const v = Y.getFromCache(g, u, l, i);
      if (v > p) if (o !== "" && (a += Y.addLine(o), o = "", s = 0), Y.canBreakWords(g, r.breakWords)) {
        const m = Y.wordWrapSplit(g);
        for (let x = 0; x < m.length; x++) {
          let w = m[x], T = w, S = 1;
          for (; m[x + S]; ) {
            const I = m[x + S];
            if (!Y.canBreakChars(T, I, g, x, r.breakWords)) w += I;
            else break;
            T = I, S++;
          }
          x += S - 1;
          const E = Y.getFromCache(w, u, l, i);
          E + s > p && (a += Y.addLine(o), f = false, o = "", s = 0), o += w, s += E;
        }
      } else {
        o.length > 0 && (a += Y.addLine(o), o = "", s = 0);
        const m = _ === y.length - 1;
        a += Y.addLine(g, !m), f = false, o = "", s = 0;
      }
      else v + s > p && (f = false, a += Y.addLine(o), o = "", s = 0), (o.length > 0 || !Y.isBreakingSpace(g) || f) && (o += g, s += v);
    }
    return a += Y.addLine(o, false), a;
  }
  static addLine(e, r = true) {
    return e = Y.trimRight(e), e = r ? `${e}
` : e, e;
  }
  static getFromCache(e, r, n, i) {
    let s = n[e];
    return typeof s != "number" && (s = Y._measureText(e, r, i) + r, n[e] = s), s;
  }
  static collapseSpaces(e) {
    return e === "normal" || e === "pre-line";
  }
  static collapseNewlines(e) {
    return e === "normal";
  }
  static trimRight(e) {
    if (typeof e != "string") return "";
    for (let r = e.length - 1; r >= 0; r--) {
      const n = e[r];
      if (!Y.isBreakingSpace(n)) break;
      e = e.slice(0, -1);
    }
    return e;
  }
  static isNewline(e) {
    return typeof e != "string" ? false : Y._newlines.includes(e.charCodeAt(0));
  }
  static isBreakingSpace(e, r) {
    return typeof e != "string" ? false : Y._breakingSpaces.includes(e.charCodeAt(0));
  }
  static tokenize(e) {
    const r = [];
    let n = "";
    if (typeof e != "string") return r;
    for (let i = 0; i < e.length; i++) {
      const s = e[i], o = e[i + 1];
      if (Y.isBreakingSpace(s, o) || Y.isNewline(s)) {
        n !== "" && (r.push(n), n = ""), r.push(s);
        continue;
      }
      n += s;
    }
    return n !== "" && r.push(n), r;
  }
  static canBreakWords(e, r) {
    return r;
  }
  static canBreakChars(e, r, n, i, s) {
    return true;
  }
  static wordWrapSplit(e) {
    return Y.graphemeSegmenter(e);
  }
  static measureFont(e) {
    if (Y._fonts[e]) return Y._fonts[e];
    const r = { ascent: 0, descent: 0, fontSize: 0 }, n = Y._canvas, i = Y._context;
    i.font = e;
    const s = Y.METRICS_STRING + Y.BASELINE_SYMBOL, o = Math.ceil(i.measureText(s).width);
    let a = Math.ceil(i.measureText(Y.BASELINE_SYMBOL).width);
    const l = Math.ceil(Y.HEIGHT_MULTIPLIER * a);
    if (a = a * Y.BASELINE_MULTIPLIER | 0, o === 0 || l === 0) return Y._fonts[e] = r, r;
    n.width = o, n.height = l, i.fillStyle = "#f00", i.fillRect(0, 0, o, l), i.font = e, i.textBaseline = "alphabetic", i.fillStyle = "#000", i.fillText(s, 0, a);
    const u = i.getImageData(0, 0, o, l).data, h = u.length, c = o * 4;
    let d = 0, f = 0, p = false;
    for (d = 0; d < a; ++d) {
      for (let y = 0; y < c; y += 4) if (u[f + y] !== 255) {
        p = true;
        break;
      }
      if (!p) f += c;
      else break;
    }
    for (r.ascent = a - d, f = h - c, p = false, d = l; d > a; --d) {
      for (let y = 0; y < c; y += 4) if (u[f + y] !== 255) {
        p = true;
        break;
      }
      if (!p) f -= c;
      else break;
    }
    return r.descent = d - a, r.fontSize = r.ascent + r.descent, Y._fonts[e] = r, r;
  }
  static clearMetrics(e = "") {
    e ? delete Y._fonts[e] : Y._fonts = {};
  }
  static get _canvas() {
    var _a2;
    if (!Y.__canvas) {
      let e;
      try {
        const r = new OffscreenCanvas(0, 0);
        if ((_a2 = r.getContext("2d", _a)) == null ? void 0 : _a2.measureText) return Y.__canvas = r, r;
        e = H.ADAPTER.createCanvas();
      } catch {
        e = H.ADAPTER.createCanvas();
      }
      e.width = e.height = 10, Y.__canvas = e;
    }
    return Y.__canvas;
  }
  static get _context() {
    return Y.__context || (Y.__context = Y._canvas.getContext("2d", _a)), Y.__context;
  }
};
tr.METRICS_STRING = "|\xC9q\xC5", tr.BASELINE_SYMBOL = "M", tr.BASELINE_MULTIPLIER = 1.4, tr.HEIGHT_MULTIPLIER = 2, tr.graphemeSegmenter = (() => {
  if (typeof (Intl == null ? void 0 : Intl.Segmenter) == "function") {
    const t5 = new Intl.Segmenter();
    return (e) => [...t5.segment(e)].map((r) => r.segment);
  }
  return (t5) => [...t5];
})(), tr.experimentalLetterSpacing = false, tr._fonts = {}, tr._newlines = [10, 13], tr._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
let jr = tr;
const cR = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"], Q0 = class Ps {
  constructor(e) {
    this.styleID = 0, this.reset(), Bh(this, e, e);
  }
  clone() {
    const e = {};
    return Bh(e, this, Ps.defaultStyle), new Ps(e);
  }
  reset() {
    Bh(this, Ps.defaultStyle, Ps.defaultStyle);
  }
  get align() {
    return this._align;
  }
  set align(e) {
    this._align !== e && (this._align = e, this.styleID++);
  }
  get breakWords() {
    return this._breakWords;
  }
  set breakWords(e) {
    this._breakWords !== e && (this._breakWords = e, this.styleID++);
  }
  get dropShadow() {
    return this._dropShadow;
  }
  set dropShadow(e) {
    this._dropShadow !== e && (this._dropShadow = e, this.styleID++);
  }
  get dropShadowAlpha() {
    return this._dropShadowAlpha;
  }
  set dropShadowAlpha(e) {
    this._dropShadowAlpha !== e && (this._dropShadowAlpha = e, this.styleID++);
  }
  get dropShadowAngle() {
    return this._dropShadowAngle;
  }
  set dropShadowAngle(e) {
    this._dropShadowAngle !== e && (this._dropShadowAngle = e, this.styleID++);
  }
  get dropShadowBlur() {
    return this._dropShadowBlur;
  }
  set dropShadowBlur(e) {
    this._dropShadowBlur !== e && (this._dropShadowBlur = e, this.styleID++);
  }
  get dropShadowColor() {
    return this._dropShadowColor;
  }
  set dropShadowColor(e) {
    const r = Dh(e);
    this._dropShadowColor !== r && (this._dropShadowColor = r, this.styleID++);
  }
  get dropShadowDistance() {
    return this._dropShadowDistance;
  }
  set dropShadowDistance(e) {
    this._dropShadowDistance !== e && (this._dropShadowDistance = e, this.styleID++);
  }
  get fill() {
    return this._fill;
  }
  set fill(e) {
    const r = Dh(e);
    this._fill !== r && (this._fill = r, this.styleID++);
  }
  get fillGradientType() {
    return this._fillGradientType;
  }
  set fillGradientType(e) {
    this._fillGradientType !== e && (this._fillGradientType = e, this.styleID++);
  }
  get fillGradientStops() {
    return this._fillGradientStops;
  }
  set fillGradientStops(e) {
    dR(this._fillGradientStops, e) || (this._fillGradientStops = e, this.styleID++);
  }
  get fontFamily() {
    return this._fontFamily;
  }
  set fontFamily(e) {
    this.fontFamily !== e && (this._fontFamily = e, this.styleID++);
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(e) {
    this._fontSize !== e && (this._fontSize = e, this.styleID++);
  }
  get fontStyle() {
    return this._fontStyle;
  }
  set fontStyle(e) {
    this._fontStyle !== e && (this._fontStyle = e, this.styleID++);
  }
  get fontVariant() {
    return this._fontVariant;
  }
  set fontVariant(e) {
    this._fontVariant !== e && (this._fontVariant = e, this.styleID++);
  }
  get fontWeight() {
    return this._fontWeight;
  }
  set fontWeight(e) {
    this._fontWeight !== e && (this._fontWeight = e, this.styleID++);
  }
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(e) {
    this._letterSpacing !== e && (this._letterSpacing = e, this.styleID++);
  }
  get lineHeight() {
    return this._lineHeight;
  }
  set lineHeight(e) {
    this._lineHeight !== e && (this._lineHeight = e, this.styleID++);
  }
  get leading() {
    return this._leading;
  }
  set leading(e) {
    this._leading !== e && (this._leading = e, this.styleID++);
  }
  get lineJoin() {
    return this._lineJoin;
  }
  set lineJoin(e) {
    this._lineJoin !== e && (this._lineJoin = e, this.styleID++);
  }
  get miterLimit() {
    return this._miterLimit;
  }
  set miterLimit(e) {
    this._miterLimit !== e && (this._miterLimit = e, this.styleID++);
  }
  get padding() {
    return this._padding;
  }
  set padding(e) {
    this._padding !== e && (this._padding = e, this.styleID++);
  }
  get stroke() {
    return this._stroke;
  }
  set stroke(e) {
    const r = Dh(e);
    this._stroke !== r && (this._stroke = r, this.styleID++);
  }
  get strokeThickness() {
    return this._strokeThickness;
  }
  set strokeThickness(e) {
    this._strokeThickness !== e && (this._strokeThickness = e, this.styleID++);
  }
  get textBaseline() {
    return this._textBaseline;
  }
  set textBaseline(e) {
    this._textBaseline !== e && (this._textBaseline = e, this.styleID++);
  }
  get trim() {
    return this._trim;
  }
  set trim(e) {
    this._trim !== e && (this._trim = e, this.styleID++);
  }
  get whiteSpace() {
    return this._whiteSpace;
  }
  set whiteSpace(e) {
    this._whiteSpace !== e && (this._whiteSpace = e, this.styleID++);
  }
  get wordWrap() {
    return this._wordWrap;
  }
  set wordWrap(e) {
    this._wordWrap !== e && (this._wordWrap = e, this.styleID++);
  }
  get wordWrapWidth() {
    return this._wordWrapWidth;
  }
  set wordWrapWidth(e) {
    this._wordWrapWidth !== e && (this._wordWrapWidth = e, this.styleID++);
  }
  toFontString() {
    const e = typeof this.fontSize == "number" ? `${this.fontSize}px` : this.fontSize;
    let r = this.fontFamily;
    Array.isArray(this.fontFamily) || (r = this.fontFamily.split(","));
    for (let n = r.length - 1; n >= 0; n--) {
      let i = r[n].trim();
      !/([\"\'])[^\'\"]+\1/.test(i) && !cR.includes(i) && (i = `"${i}"`), r[n] = i;
    }
    return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${e} ${r.join(",")}`;
  }
};
Q0.defaultStyle = { align: "left", breakWords: false, dropShadow: false, dropShadowAlpha: 1, dropShadowAngle: Math.PI / 6, dropShadowBlur: 0, dropShadowColor: "black", dropShadowDistance: 5, fill: "black", fillGradientType: gu.LINEAR_VERTICAL, fillGradientStops: [], fontFamily: "Arial", fontSize: 26, fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", leading: 0, letterSpacing: 0, lineHeight: 0, lineJoin: "miter", miterLimit: 10, padding: 0, stroke: "black", strokeThickness: 0, textBaseline: "alphabetic", trim: false, whiteSpace: "pre", wordWrap: false, wordWrapWidth: 100 };
let cn = Q0;
function Dh(t5) {
  const e = ge.shared, r = (n) => {
    const i = e.setValue(n);
    return i.alpha === 1 ? i.toHex() : i.toRgbaString();
  };
  return Array.isArray(t5) ? t5.map(r) : r(t5);
}
function dR(t5, e) {
  if (!Array.isArray(t5) || !Array.isArray(e) || t5.length !== e.length) return false;
  for (let r = 0; r < t5.length; ++r) if (t5[r] !== e[r]) return false;
  return true;
}
function Bh(t5, e, r) {
  for (const n in r) Array.isArray(e[n]) ? t5[n] = e[n].slice() : t5[n] = e[n];
}
const fR = { texture: true, children: false, baseTexture: true }, J0 = class Sd extends ns {
  constructor(e, r, n) {
    let i = false;
    n || (n = H.ADAPTER.createCanvas(), i = true), n.width = 3, n.height = 3;
    const s = X.from(n);
    s.orig = new te(), s.trim = new te(), super(s), this._ownCanvas = i, this.canvas = n, this.context = n.getContext("2d", { willReadFrequently: true }), this._resolution = Sd.defaultResolution ?? H.RESOLUTION, this._autoResolution = Sd.defaultAutoResolution, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = e, this.style = r, this.localStyleID = -1;
  }
  static get experimentalLetterSpacing() {
    return jr.experimentalLetterSpacing;
  }
  static set experimentalLetterSpacing(e) {
    ie("7.1.0", "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"), jr.experimentalLetterSpacing = e;
  }
  updateText(e) {
    const r = this._style;
    if (this.localStyleID !== r.styleID && (this.dirty = true, this.localStyleID = r.styleID), !this.dirty && e) return;
    this._font = this._style.toFontString();
    const n = this.context, i = jr.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas), s = i.width, o = i.height, a = i.lines, l = i.lineHeight, u = i.lineWidths, h = i.maxLineWidth, c = i.fontProperties;
    this.canvas.width = Math.ceil(Math.ceil(Math.max(1, s) + r.padding * 2) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, o) + r.padding * 2) * this._resolution), n.scale(this._resolution, this._resolution), n.clearRect(0, 0, this.canvas.width, this.canvas.height), n.font = this._font, n.lineWidth = r.strokeThickness, n.textBaseline = r.textBaseline, n.lineJoin = r.lineJoin, n.miterLimit = r.miterLimit;
    let d, f;
    const p = r.dropShadow ? 2 : 1;
    for (let y = 0; y < p; ++y) {
      const _ = r.dropShadow && y === 0, g = _ ? Math.ceil(Math.max(1, o) + r.padding * 2) : 0, v = g * this._resolution;
      if (_) {
        n.fillStyle = "black", n.strokeStyle = "black";
        const x = r.dropShadowColor, w = r.dropShadowBlur * this._resolution, T = r.dropShadowDistance * this._resolution;
        n.shadowColor = ge.shared.setValue(x).setAlpha(r.dropShadowAlpha).toRgbaString(), n.shadowBlur = w, n.shadowOffsetX = Math.cos(r.dropShadowAngle) * T, n.shadowOffsetY = Math.sin(r.dropShadowAngle) * T + v;
      } else n.fillStyle = this._generateFillStyle(r, a, i), n.strokeStyle = r.stroke, n.shadowColor = "black", n.shadowBlur = 0, n.shadowOffsetX = 0, n.shadowOffsetY = 0;
      let m = (l - c.fontSize) / 2;
      l - c.fontSize < 0 && (m = 0);
      for (let x = 0; x < a.length; x++) d = r.strokeThickness / 2, f = r.strokeThickness / 2 + x * l + c.ascent + m, r.align === "right" ? d += h - u[x] : r.align === "center" && (d += (h - u[x]) / 2), r.stroke && r.strokeThickness && this.drawLetterSpacing(a[x], d + r.padding, f + r.padding - g, true), r.fill && this.drawLetterSpacing(a[x], d + r.padding, f + r.padding - g);
    }
    this.updateTexture();
  }
  drawLetterSpacing(e, r, n, i = false) {
    const s = this._style.letterSpacing;
    let o = false;
    if (jr.experimentalLetterSpacingSupported && (jr.experimentalLetterSpacing ? (this.context.letterSpacing = `${s}px`, this.context.textLetterSpacing = `${s}px`, o = true) : (this.context.letterSpacing = "0px", this.context.textLetterSpacing = "0px")), s === 0 || o) {
      i ? this.context.strokeText(e, r, n) : this.context.fillText(e, r, n);
      return;
    }
    let a = r;
    const l = jr.graphemeSegmenter(e);
    let u = this.context.measureText(e).width, h = 0;
    for (let c = 0; c < l.length; ++c) {
      const d = l[c];
      i ? this.context.strokeText(d, a, n) : this.context.fillText(d, a, n);
      let f = "";
      for (let p = c + 1; p < l.length; ++p) f += l[p];
      h = this.context.measureText(f).width, a += u - h + s, u = h;
    }
  }
  updateTexture() {
    const e = this.canvas;
    if (this._style.trim) {
      const o = Fb(e);
      o.data && (e.width = o.width, e.height = o.height, this.context.putImageData(o.data, 0, 0));
    }
    const r = this._texture, n = this._style, i = n.trim ? 0 : n.padding, s = r.baseTexture;
    r.trim.width = r._frame.width = e.width / this._resolution, r.trim.height = r._frame.height = e.height / this._resolution, r.trim.x = -i, r.trim.y = -i, r.orig.width = r._frame.width - i * 2, r.orig.height = r._frame.height - i * 2, this._onTextureUpdate(), s.setRealSize(e.width, e.height, this._resolution), r.updateUvs(), this.dirty = false;
  }
  _render(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = true), this.updateText(true), super._render(e);
  }
  updateTransform() {
    this.updateText(true), super.updateTransform();
  }
  getBounds(e, r) {
    return this.updateText(true), this._textureID === -1 && (e = false), super.getBounds(e, r);
  }
  getLocalBounds(e) {
    return this.updateText(true), super.getLocalBounds.call(this, e);
  }
  _calculateBounds() {
    this.calculateVertices(), this._bounds.addQuad(this.vertexData);
  }
  _generateFillStyle(e, r, n) {
    const i = e.fill;
    if (Array.isArray(i)) {
      if (i.length === 1) return i[0];
    } else return i;
    let s;
    const o = e.dropShadow ? e.dropShadowDistance : 0, a = e.padding || 0, l = this.canvas.width / this._resolution - o - a * 2, u = this.canvas.height / this._resolution - o - a * 2, h = i.slice(), c = e.fillGradientStops.slice();
    if (!c.length) {
      const d = h.length + 1;
      for (let f = 1; f < d; ++f) c.push(f / d);
    }
    if (h.unshift(i[0]), c.unshift(0), h.push(i[i.length - 1]), c.push(1), e.fillGradientType === gu.LINEAR_VERTICAL) {
      s = this.context.createLinearGradient(l / 2, a, l / 2, u + a);
      const d = n.fontProperties.fontSize + e.strokeThickness;
      for (let f = 0; f < r.length; f++) {
        const p = n.lineHeight * (f - 1) + d, y = n.lineHeight * f;
        let _ = y;
        f > 0 && p > y && (_ = (y + p) / 2);
        const g = y + d, v = n.lineHeight * (f + 1);
        let m = g;
        f + 1 < r.length && v < g && (m = (g + v) / 2);
        const x = (m - _) / u;
        for (let w = 0; w < h.length; w++) {
          let T = 0;
          typeof c[w] == "number" ? T = c[w] : T = w / h.length;
          let S = Math.min(1, Math.max(0, _ / u + T * x));
          S = Number(S.toFixed(5)), s.addColorStop(S, h[w]);
        }
      }
    } else {
      s = this.context.createLinearGradient(a, u / 2, l + a, u / 2);
      const d = h.length + 1;
      let f = 1;
      for (let p = 0; p < h.length; p++) {
        let y;
        typeof c[p] == "number" ? y = c[p] : y = f / d, s.addColorStop(y, h[p]), f++;
      }
    }
    return s;
  }
  destroy(e) {
    typeof e == "boolean" && (e = { children: e }), e = Object.assign({}, fR, e), super.destroy(e), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null;
  }
  get width() {
    return this.updateText(true), Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(e) {
    this.updateText(true);
    const r = Kr(this.scale.x) || 1;
    this.scale.x = r * e / this._texture.orig.width, this._width = e;
  }
  get height() {
    return this.updateText(true), Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(e) {
    this.updateText(true);
    const r = Kr(this.scale.y) || 1;
    this.scale.y = r * e / this._texture.orig.height, this._height = e;
  }
  get style() {
    return this._style;
  }
  set style(e) {
    e = e || {}, e instanceof cn ? this._style = e : this._style = new cn(e), this.localStyleID = -1, this.dirty = true;
  }
  get text() {
    return this._text;
  }
  set text(e) {
    e = String(e ?? ""), this._text !== e && (this._text = e, this.dirty = true);
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._autoResolution = false, this._resolution !== e && (this._resolution = e, this.dirty = true);
  }
};
J0.defaultAutoResolution = true;
let ex = J0;
class pR {
  constructor(e) {
    this.maxItemsPerFrame = e, this.itemsLeft = 0;
  }
  beginFrame() {
    this.itemsLeft = this.maxItemsPerFrame;
  }
  allowedToUpload() {
    return this.itemsLeft-- > 0;
  }
}
function mR(t5, e) {
  var _a2;
  let r = false;
  if ((_a2 = t5 == null ? void 0 : t5._textures) == null ? void 0 : _a2.length) {
    for (let n = 0; n < t5._textures.length; n++) if (t5._textures[n] instanceof X) {
      const i = t5._textures[n].baseTexture;
      e.includes(i) || (e.push(i), r = true);
    }
  }
  return r;
}
function gR(t5, e) {
  if (t5.baseTexture instanceof ee) {
    const r = t5.baseTexture;
    return e.includes(r) || e.push(r), true;
  }
  return false;
}
function yR(t5, e) {
  if (t5._texture && t5._texture instanceof X) {
    const r = t5._texture.baseTexture;
    return e.includes(r) || e.push(r), true;
  }
  return false;
}
function vR(t5, e) {
  return e instanceof ex ? (e.updateText(true), true) : false;
}
function _R(t5, e) {
  if (e instanceof cn) {
    const r = e.toFontString();
    return jr.measureFont(r), true;
  }
  return false;
}
function xR(t5, e) {
  if (t5 instanceof ex) {
    e.includes(t5.style) || e.push(t5.style), e.includes(t5) || e.push(t5);
    const r = t5._texture.baseTexture;
    return e.includes(r) || e.push(r), true;
  }
  return false;
}
function wR(t5, e) {
  return t5 instanceof cn ? (e.includes(t5) || e.push(t5), true) : false;
}
const tx = class rx {
  constructor(e) {
    this.limiter = new pR(rx.uploadsPerFrame), this.renderer = e, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = false, this.delayedTick = () => {
      this.queue && this.prepareItems();
    }, this.registerFindHook(xR), this.registerFindHook(wR), this.registerFindHook(mR), this.registerFindHook(gR), this.registerFindHook(yR), this.registerUploadHook(vR), this.registerUploadHook(_R);
  }
  upload(e) {
    return new Promise((r) => {
      e && this.add(e), this.queue.length ? (this.completes.push(r), this.ticking || (this.ticking = true, yt.system.addOnce(this.tick, this, Yn.UTILITY))) : r();
    });
  }
  tick() {
    setTimeout(this.delayedTick, 0);
  }
  prepareItems() {
    for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
      const e = this.queue[0];
      let r = false;
      if (e && !e._destroyed) {
        for (let n = 0, i = this.uploadHooks.length; n < i; n++) if (this.uploadHooks[n](this.uploadHookHelper, e)) {
          this.queue.shift(), r = true;
          break;
        }
      }
      r || this.queue.shift();
    }
    if (this.queue.length) yt.system.addOnce(this.tick, this, Yn.UTILITY);
    else {
      this.ticking = false;
      const e = this.completes.slice(0);
      this.completes.length = 0;
      for (let r = 0, n = e.length; r < n; r++) e[r]();
    }
  }
  registerFindHook(e) {
    return e && this.addHooks.push(e), this;
  }
  registerUploadHook(e) {
    return e && this.uploadHooks.push(e), this;
  }
  add(e) {
    for (let r = 0, n = this.addHooks.length; r < n && !this.addHooks[r](e, this.queue); r++) ;
    if (e instanceof et) for (let r = e.children.length - 1; r >= 0; r--) this.add(e.children[r]);
    return this;
  }
  destroy() {
    this.ticking && yt.system.remove(this.tick, this), this.ticking = false, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null;
  }
};
tx.uploadsPerFrame = 4;
let Td = tx;
Object.defineProperties(H, { UPLOADS_PER_FRAME: { get() {
  return Td.uploadsPerFrame;
}, set(t5) {
  ie("7.1.0", "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"), Td.uploadsPerFrame = t5;
} } });
function nx(t5, e) {
  return e instanceof ee ? (e._glTextures[t5.CONTEXT_UID] || t5.texture.bind(e), true) : false;
}
function ER(t5, e) {
  if (!(e instanceof Pn)) return false;
  const { geometry: r } = e;
  e.finishPoly(), r.updateBatches();
  const { batches: n } = r;
  for (let i = 0; i < n.length; i++) {
    const { texture: s } = n[i].style;
    s && nx(t5, s.baseTexture);
  }
  return r.batchable || t5.geometry.bind(r, e._resolveDirectShader(t5)), true;
}
function SR(t5, e) {
  return t5 instanceof Pn ? (e.push(t5), true) : false;
}
class ix extends Td {
  constructor(e) {
    super(e), this.uploadHookHelper = this.renderer, this.registerFindHook(SR), this.registerUploadHook(nx), this.registerUploadHook(ER);
  }
}
ix.extension = { name: "prepare", type: L.RendererSystem };
W.add(ix);
var TR = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`, bR = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`, AR = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`, Ug = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`, CR = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
const xa = new ve();
class sx extends fu {
  constructor(e) {
    super(e), e.runners.contextChange.add(this), this.quad = new l0(), this.state = pr.for2d();
  }
  contextChange() {
    const e = this.renderer, r = { globals: e.globalUniforms };
    this.simpleShader = dr.from(Ug, CR, r), this.shader = e.context.webGLVersion > 1 ? dr.from(bR, TR, r) : dr.from(Ug, AR, r);
  }
  render(e) {
    const r = this.renderer, n = this.quad;
    let i = n.vertices;
    i[0] = i[6] = e._width * -e.anchor.x, i[1] = i[3] = e._height * -e.anchor.y, i[2] = i[4] = e._width * (1 - e.anchor.x), i[5] = i[7] = e._height * (1 - e.anchor.y);
    const s = e.uvRespectAnchor ? e.anchor.x : 0, o = e.uvRespectAnchor ? e.anchor.y : 0;
    i = n.uvs, i[0] = i[6] = -s, i[1] = i[3] = -o, i[2] = i[4] = 1 - s, i[5] = i[7] = 1 - o, n.invalidate();
    const a = e._texture, l = a.baseTexture, u = l.alphaMode > 0, h = e.tileTransform.localTransform, c = e.uvMatrix;
    let d = l.isPowerOfTwo && a.frame.width === l.width && a.frame.height === l.height;
    d && (l._glTextures[r.CONTEXT_UID] ? d = l.wrapMode !== an.CLAMP : l.wrapMode === an.CLAMP && (l.wrapMode = an.REPEAT));
    const f = d ? this.simpleShader : this.shader, p = a.width, y = a.height, _ = e._width, g = e._height;
    xa.set(h.a * p / _, h.b * p / g, h.c * y / _, h.d * y / g, h.tx / _, h.ty / g), xa.invert(), d ? xa.prepend(c.mapCoord) : (f.uniforms.uMapCoord = c.mapCoord.toArray(true), f.uniforms.uClampFrame = c.uClampFrame, f.uniforms.uClampOffset = c.uClampOffset), f.uniforms.uTransform = xa.toArray(true), f.uniforms.uColor = ge.shared.setValue(e.tint).premultiply(e.worldAlpha, u).toArray(f.uniforms.uColor), f.uniforms.translationMatrix = e.transform.worldTransform.toArray(true), f.uniforms.uSampler = a, r.shader.bind(f), r.geometry.bind(n), this.state.blendMode = Z_(e.blendMode, u), r.state.set(this.state), r.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
  }
}
sx.extension = { name: "tilingSprite", type: L.RendererPlugin };
W.add(sx);
const ox = class Ms {
  constructor(e, r, n) {
    this.linkedSheets = [], (e instanceof ee || e instanceof X) && (e = { texture: e, data: r, resolutionFilename: n });
    const { texture: i, data: s, resolutionFilename: o = null, cachePrefix: a = "" } = e;
    this.cachePrefix = a, this._texture = i instanceof X ? i : null, this.baseTexture = i instanceof ee ? i : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = s;
    const l = this.baseTexture.resource;
    this.resolution = this._updateResolution(o || (l ? l.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
  }
  _updateResolution(e = null) {
    const { scale: r } = this.data.meta;
    let n = kr(e, null);
    return n === null && (n = typeof r == "number" ? r : parseFloat(r ?? "1")), n !== 1 && this.baseTexture.setResolution(n), n;
  }
  parse() {
    return new Promise((e) => {
      this._callback = e, this._batchIndex = 0, this._frameKeys.length <= Ms.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
    });
  }
  _processFrames(e) {
    let r = e;
    const n = Ms.BATCH_SIZE;
    for (; r - e < n && r < this._frameKeys.length; ) {
      const i = this._frameKeys[r], s = this._frames[i], o = s.frame;
      if (o) {
        let a = null, l = null;
        const u = s.trimmed !== false && s.sourceSize ? s.sourceSize : s.frame, h = new te(0, 0, Math.floor(u.w) / this.resolution, Math.floor(u.h) / this.resolution);
        s.rotated ? a = new te(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.h) / this.resolution, Math.floor(o.w) / this.resolution) : a = new te(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution), s.trimmed !== false && s.spriteSourceSize && (l = new te(Math.floor(s.spriteSourceSize.x) / this.resolution, Math.floor(s.spriteSourceSize.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution)), this.textures[i] = new X(this.baseTexture, a, h, l, s.rotated ? 2 : 0, s.anchor, s.borders), X.addToCache(this.textures[i], this.cachePrefix + i.toString());
      }
      r++;
    }
  }
  _processAnimations() {
    const e = this.data.animations || {};
    for (const r in e) {
      this.animations[r] = [];
      for (let n = 0; n < e[r].length; n++) {
        const i = e[r][n];
        this.animations[r].push(this.textures[i]);
      }
    }
  }
  _parseComplete() {
    const e = this._callback;
    this._callback = null, this._batchIndex = 0, e.call(this, this.textures);
  }
  _nextBatch() {
    this._processFrames(this._batchIndex * Ms.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
      this._batchIndex * Ms.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete());
    }, 0);
  }
  destroy(e = false) {
    var _a2;
    for (const r in this.textures) this.textures[r].destroy();
    this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, e && ((_a2 = this._texture) == null ? void 0 : _a2.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null, this.linkedSheets = [];
  }
};
ox.BATCH_SIZE = 1e3;
let Gg = ox;
const IR = ["jpg", "png", "jpeg", "avif", "webp", "s3tc", "s3tc_sRGB", "etc", "etc1", "pvrtc", "atc", "astc", "bptc"];
function ax(t5, e, r) {
  const n = {};
  if (t5.forEach((i) => {
    n[i] = e;
  }), Object.keys(e.textures).forEach((i) => {
    n[`${e.cachePrefix}${i}`] = e.textures[i];
  }), !r) {
    const i = $e.dirname(t5[0]);
    e.linkedSheets.forEach((s, o) => {
      Object.assign(n, ax([`${i}/${e.data.meta.related_multi_packs[o]}`], s, true));
    });
  }
  return n;
}
const RR = { extension: L.Asset, cache: { test: (t5) => t5 instanceof Gg, getCacheableAssets: (t5, e) => ax(t5, e, false) }, resolver: { test: (t5) => {
  const e = t5.split("?")[0].split("."), r = e.pop(), n = e.pop();
  return r === "json" && IR.includes(n);
}, parse: (t5) => {
  var _a2;
  const e = t5.split(".");
  return { resolution: parseFloat(((_a2 = H.RETINA_PREFIX.exec(t5)) == null ? void 0 : _a2[1]) ?? "1"), format: e[e.length - 2], src: t5 };
} }, loader: { name: "spritesheetLoader", extension: { type: L.LoadParser, priority: Yt.Normal }, async testParse(t5, e) {
  return $e.extname(e.src).toLowerCase() === ".json" && !!t5.frames;
}, async parse(t5, e, r) {
  var _a2, _b2;
  const { texture: n, imageFilename: i, cachePrefix: s } = (e == null ? void 0 : e.data) ?? {};
  let o = $e.dirname(e.src);
  o && o.lastIndexOf("/") !== o.length - 1 && (o += "/");
  let a;
  if (n && n.baseTexture) a = n;
  else {
    const h = _d(o + (i ?? t5.meta.image), e.src);
    a = (await r.load([h]))[h];
  }
  const l = new Gg({ texture: a.baseTexture, data: t5, resolutionFilename: e.src, cachePrefix: s });
  await l.parse();
  const u = (_a2 = t5 == null ? void 0 : t5.meta) == null ? void 0 : _a2.related_multi_packs;
  if (Array.isArray(u)) {
    const h = [];
    for (const d of u) {
      if (typeof d != "string") continue;
      let f = o + d;
      ((_b2 = e.data) == null ? void 0 : _b2.ignoreMultiPack) || (f = _d(f, e.src), h.push(r.load({ src: f, data: { ignoreMultiPack: true } })));
    }
    const c = await Promise.all(h);
    l.linkedSheets = c, c.forEach((d) => {
      d.linkedSheets = [l].concat(l.linkedSheets.filter((f) => f !== d));
    });
  }
  return l;
}, unload(t5) {
  t5.destroy(true);
} } };
W.add(RR);
class Ll {
  constructor() {
    this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [], this.distanceField = [];
  }
}
class Wa {
  static test(e) {
    return typeof e == "string" && e.startsWith("info face=");
  }
  static parse(e) {
    const r = e.match(/^[a-z]+\s+.+$/gm), n = { info: [], common: [], page: [], char: [], chars: [], kerning: [], kernings: [], distanceField: [] };
    for (const s in r) {
      const o = r[s].match(/^[a-z]+/gm)[0], a = r[s].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), l = {};
      for (const u in a) {
        const h = a[u].split("="), c = h[0], d = h[1].replace(/"/gm, ""), f = parseFloat(d), p = isNaN(f) ? d : f;
        l[c] = p;
      }
      n[o].push(l);
    }
    const i = new Ll();
    return n.info.forEach((s) => i.info.push({ face: s.face, size: parseInt(s.size, 10) })), n.common.forEach((s) => i.common.push({ lineHeight: parseInt(s.lineHeight, 10) })), n.page.forEach((s) => i.page.push({ id: parseInt(s.id, 10), file: s.file })), n.char.forEach((s) => i.char.push({ id: parseInt(s.id, 10), page: parseInt(s.page, 10), x: parseInt(s.x, 10), y: parseInt(s.y, 10), width: parseInt(s.width, 10), height: parseInt(s.height, 10), xoffset: parseInt(s.xoffset, 10), yoffset: parseInt(s.yoffset, 10), xadvance: parseInt(s.xadvance, 10) })), n.kerning.forEach((s) => i.kerning.push({ first: parseInt(s.first, 10), second: parseInt(s.second, 10), amount: parseInt(s.amount, 10) })), n.distanceField.forEach((s) => i.distanceField.push({ distanceRange: parseInt(s.distanceRange, 10), fieldType: s.fieldType })), i;
  }
}
class bd {
  static test(e) {
    const r = e;
    return typeof e != "string" && "getElementsByTagName" in e && r.getElementsByTagName("page").length && r.getElementsByTagName("info")[0].getAttribute("face") !== null;
  }
  static parse(e) {
    const r = new Ll(), n = e.getElementsByTagName("info"), i = e.getElementsByTagName("common"), s = e.getElementsByTagName("page"), o = e.getElementsByTagName("char"), a = e.getElementsByTagName("kerning"), l = e.getElementsByTagName("distanceField");
    for (let u = 0; u < n.length; u++) r.info.push({ face: n[u].getAttribute("face"), size: parseInt(n[u].getAttribute("size"), 10) });
    for (let u = 0; u < i.length; u++) r.common.push({ lineHeight: parseInt(i[u].getAttribute("lineHeight"), 10) });
    for (let u = 0; u < s.length; u++) r.page.push({ id: parseInt(s[u].getAttribute("id"), 10) || 0, file: s[u].getAttribute("file") });
    for (let u = 0; u < o.length; u++) {
      const h = o[u];
      r.char.push({ id: parseInt(h.getAttribute("id"), 10), page: parseInt(h.getAttribute("page"), 10) || 0, x: parseInt(h.getAttribute("x"), 10), y: parseInt(h.getAttribute("y"), 10), width: parseInt(h.getAttribute("width"), 10), height: parseInt(h.getAttribute("height"), 10), xoffset: parseInt(h.getAttribute("xoffset"), 10), yoffset: parseInt(h.getAttribute("yoffset"), 10), xadvance: parseInt(h.getAttribute("xadvance"), 10) });
    }
    for (let u = 0; u < a.length; u++) r.kerning.push({ first: parseInt(a[u].getAttribute("first"), 10), second: parseInt(a[u].getAttribute("second"), 10), amount: parseInt(a[u].getAttribute("amount"), 10) });
    for (let u = 0; u < l.length; u++) r.distanceField.push({ fieldType: l[u].getAttribute("fieldType"), distanceRange: parseInt(l[u].getAttribute("distanceRange"), 10) });
    return r;
  }
}
class Ad {
  static test(e) {
    return typeof e == "string" && e.includes("<font>") ? bd.test(H.ADAPTER.parseXML(e)) : false;
  }
  static parse(e) {
    return bd.parse(H.ADAPTER.parseXML(e));
  }
}
const Nh = [Wa, bd, Ad];
function PR(t5) {
  for (let e = 0; e < Nh.length; e++) if (Nh[e].test(t5)) return Nh[e];
  return null;
}
function MR(t5, e, r, n, i, s) {
  const o = r.fill;
  if (Array.isArray(o)) {
    if (o.length === 1) return o[0];
  } else return o;
  let a;
  const l = r.dropShadow ? r.dropShadowDistance : 0, u = r.padding || 0, h = t5.width / n - l - u * 2, c = t5.height / n - l - u * 2, d = o.slice(), f = r.fillGradientStops.slice();
  if (!f.length) {
    const p = d.length + 1;
    for (let y = 1; y < p; ++y) f.push(y / p);
  }
  if (d.unshift(o[0]), f.unshift(0), d.push(o[o.length - 1]), f.push(1), r.fillGradientType === gu.LINEAR_VERTICAL) {
    a = e.createLinearGradient(h / 2, u, h / 2, c + u);
    let p = 0;
    const y = (s.fontProperties.fontSize + r.strokeThickness) / c;
    for (let _ = 0; _ < i.length; _++) {
      const g = s.lineHeight * _;
      for (let v = 0; v < d.length; v++) {
        let m = 0;
        typeof f[v] == "number" ? m = f[v] : m = v / d.length;
        const x = g / c + m * y;
        let w = Math.max(p, x);
        w = Math.min(w, 1), a.addColorStop(w, d[v]), p = w;
      }
    }
  } else {
    a = e.createLinearGradient(u, c / 2, h + u, c / 2);
    const p = d.length + 1;
    let y = 1;
    for (let _ = 0; _ < d.length; _++) {
      let g;
      typeof f[_] == "number" ? g = f[_] : g = y / p, a.addColorStop(g, d[_]), y++;
    }
  }
  return a;
}
function kR(t5, e, r, n, i, s, o) {
  const a = r.text, l = r.fontProperties;
  e.translate(n, i), e.scale(s, s);
  const u = o.strokeThickness / 2, h = -(o.strokeThickness / 2);
  if (e.font = o.toFontString(), e.lineWidth = o.strokeThickness, e.textBaseline = o.textBaseline, e.lineJoin = o.lineJoin, e.miterLimit = o.miterLimit, e.fillStyle = MR(t5, e, o, s, [a], r), e.strokeStyle = o.stroke, o.dropShadow) {
    const c = o.dropShadowColor, d = o.dropShadowBlur * s, f = o.dropShadowDistance * s;
    e.shadowColor = ge.shared.setValue(c).setAlpha(o.dropShadowAlpha).toRgbaString(), e.shadowBlur = d, e.shadowOffsetX = Math.cos(o.dropShadowAngle) * f, e.shadowOffsetY = Math.sin(o.dropShadowAngle) * f;
  } else e.shadowColor = "black", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;
  o.stroke && o.strokeThickness && e.strokeText(a, u, h + r.lineHeight - l.descent), o.fill && e.fillText(a, u, h + r.lineHeight - l.descent), e.setTransform(1, 0, 0, 1, 0, 0), e.fillStyle = "rgba(0, 0, 0, 0)";
}
function Ya(t5) {
  return t5.codePointAt ? t5.codePointAt(0) : t5.charCodeAt(0);
}
function lx(t5) {
  return Array.from ? Array.from(t5) : t5.split("");
}
function FR(t5) {
  typeof t5 == "string" && (t5 = [t5]);
  const e = [];
  for (let r = 0, n = t5.length; r < n; r++) {
    const i = t5[r];
    if (Array.isArray(i)) {
      if (i.length !== 2) throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);
      const s = i[0].charCodeAt(0), o = i[1].charCodeAt(0);
      if (o < s) throw new Error("[BitmapFont]: Invalid character range.");
      for (let a = s, l = o; a <= l; a++) e.push(String.fromCharCode(a));
    } else e.push(...lx(i));
  }
  if (e.length === 0) throw new Error("[BitmapFont]: Empty set when resolving characters.");
  return e;
}
const Ur = class rr {
  constructor(e, r, n) {
    var _a2;
    const [i] = e.info, [s] = e.common, [o] = e.page, [a] = e.distanceField, l = kr(o.file), u = {};
    this._ownsTextures = n, this.font = i.face, this.size = i.size, this.lineHeight = s.lineHeight / l, this.chars = {}, this.pageTextures = u;
    for (let h = 0; h < e.page.length; h++) {
      const { id: c, file: d } = e.page[h];
      u[c] = r instanceof Array ? r[h] : r[d], (a == null ? void 0 : a.fieldType) && a.fieldType !== "none" && (u[c].baseTexture.alphaMode = ht.NO_PREMULTIPLIED_ALPHA, u[c].baseTexture.mipmap = fr.OFF);
    }
    for (let h = 0; h < e.char.length; h++) {
      const { id: c, page: d } = e.char[h];
      let { x: f, y: p, width: y, height: _, xoffset: g, yoffset: v, xadvance: m } = e.char[h];
      f /= l, p /= l, y /= l, _ /= l, g /= l, v /= l, m /= l;
      const x = new te(f + u[d].frame.x / l, p + u[d].frame.y / l, y, _);
      this.chars[c] = { xOffset: g, yOffset: v, xAdvance: m, kerning: {}, texture: new X(u[d].baseTexture, x), page: d };
    }
    for (let h = 0; h < e.kerning.length; h++) {
      let { first: c, second: d, amount: f } = e.kerning[h];
      c /= l, d /= l, f /= l, this.chars[d] && (this.chars[d].kerning[c] = f);
    }
    this.distanceFieldRange = a == null ? void 0 : a.distanceRange, this.distanceFieldType = ((_a2 = a == null ? void 0 : a.fieldType) == null ? void 0 : _a2.toLowerCase()) ?? "none";
  }
  destroy() {
    for (const e in this.chars) this.chars[e].texture.destroy(), this.chars[e].texture = null;
    for (const e in this.pageTextures) this._ownsTextures && this.pageTextures[e].destroy(true), this.pageTextures[e] = null;
    this.chars = null, this.pageTextures = null;
  }
  static install(e, r, n) {
    let i;
    if (e instanceof Ll) i = e;
    else {
      const o = PR(e);
      if (!o) throw new Error("Unrecognized data format for font.");
      i = o.parse(e);
    }
    r instanceof X && (r = [r]);
    const s = new rr(i, r, n);
    return rr.available[s.font] = s, s;
  }
  static uninstall(e) {
    const r = rr.available[e];
    if (!r) throw new Error(`No font found named '${e}'`);
    r.destroy(), delete rr.available[e];
  }
  static from(e, r, n) {
    if (!e) throw new Error("[BitmapFont] Property `name` is required.");
    const { chars: i, padding: s, resolution: o, textureWidth: a, textureHeight: l, ...u } = Object.assign({}, rr.defaultOptions, n), h = FR(i), c = r instanceof cn ? r : new cn(r), d = a, f = new Ll();
    f.info[0] = { face: c.fontFamily, size: c.fontSize }, f.common[0] = { lineHeight: c.fontSize };
    let p = 0, y = 0, _, g, v, m = 0;
    const x = [];
    for (let T = 0; T < h.length; T++) {
      _ || (_ = H.ADAPTER.createCanvas(), _.width = a, _.height = l, g = _.getContext("2d"), v = new ee(_, { resolution: o, ...u }), x.push(new X(v)), f.page.push({ id: x.length - 1, file: "" }));
      const S = h[T], E = jr.measureText(S, c, false, _), I = E.width, C = Math.ceil(E.height), P = Math.ceil((c.fontStyle === "italic" ? 2 : 1) * I);
      if (y >= l - C * o) {
        if (y === 0) throw new Error(`[BitmapFont] textureHeight ${l}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${S}')`);
        --T, _ = null, g = null, v = null, y = 0, p = 0, m = 0;
        continue;
      }
      if (m = Math.max(C + E.fontProperties.descent, m), P * o + p >= d) {
        if (p === 0) throw new Error(`[BitmapFont] textureWidth ${a}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${S}')`);
        --T, y += m * o, y = Math.ceil(y), p = 0, m = 0;
        continue;
      }
      kR(_, g, E, p, y, o, c);
      const N = Ya(E.text);
      f.char.push({ id: N, page: x.length - 1, x: p / o, y: y / o, width: P, height: C, xoffset: 0, yoffset: 0, xadvance: I - (c.dropShadow ? c.dropShadowDistance : 0) - (c.stroke ? c.strokeThickness : 0) }), p += (P + 2 * s) * o, p = Math.ceil(p);
    }
    if (!(n == null ? void 0 : n.skipKerning)) for (let T = 0, S = h.length; T < S; T++) {
      const E = h[T];
      for (let I = 0; I < S; I++) {
        const C = h[I], P = g.measureText(E).width, N = g.measureText(C).width, A = g.measureText(E + C).width - (P + N);
        A && f.kerning.push({ first: Ya(E), second: Ya(C), amount: A });
      }
    }
    const w = new rr(f, x, true);
    return rr.available[e] !== void 0 && rr.uninstall(e), rr.available[e] = w, w;
  }
};
Ur.ALPHA = [["a", "z"], ["A", "Z"], " "], Ur.NUMERIC = [["0", "9"]], Ur.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "], Ur.ASCII = [[" ", "~"]], Ur.defaultOptions = { resolution: 1, textureWidth: 512, textureHeight: 512, padding: 4, chars: Ur.ALPHANUMERIC }, Ur.available = {};
let Gr = Ur;
var DR = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`, BR = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
const zg = [], Hg = [], jg = [], NR = class ux extends et {
  constructor(e, r = {}) {
    super();
    const { align: n, tint: i, maxWidth: s, letterSpacing: o, fontName: a, fontSize: l } = Object.assign({}, ux.styleDefaults, r);
    if (!Gr.available[a]) throw new Error(`Missing BitmapFont "${a}"`);
    this._activePagesMeshData = [], this._textWidth = 0, this._textHeight = 0, this._align = n, this._tintColor = new ge(i), this._font = void 0, this._fontName = a, this._fontSize = l, this.text = e, this._maxWidth = s, this._maxLineHeight = 0, this._letterSpacing = o, this._anchor = new Tr(() => {
      this.dirty = true;
    }, this, 0, 0), this._roundPixels = H.ROUND_PIXELS, this.dirty = true, this._resolution = H.RESOLUTION, this._autoResolution = true, this._textureCache = {};
  }
  updateText() {
    var _a2;
    const e = Gr.available[this._fontName], r = this.fontSize, n = r / e.size, i = new ae(), s = [], o = [], a = [], l = this._text.replace(/(?:\r\n|\r)/g, `
`) || " ", u = lx(l), h = this._maxWidth * e.size / r, c = e.distanceFieldType === "none" ? zg : Hg;
    let d = null, f = 0, p = 0, y = 0, _ = -1, g = 0, v = 0, m = 0, x = 0;
    for (let P = 0; P < u.length; P++) {
      const N = u[P], A = Ya(N);
      if (/(?:\s)/.test(N) && (_ = P, g = f, x++), N === "\r" || N === `
`) {
        o.push(f), a.push(-1), p = Math.max(p, f), ++y, ++v, i.x = 0, i.y += e.lineHeight, d = null, x = 0;
        continue;
      }
      const R = e.chars[A];
      if (!R) continue;
      d && R.kerning[d] && (i.x += R.kerning[d]);
      const $ = jg.pop() || { texture: X.EMPTY, line: 0, charCode: 0, prevSpaces: 0, position: new ae() };
      $.texture = R.texture, $.line = y, $.charCode = A, $.position.x = Math.round(i.x + R.xOffset + this._letterSpacing / 2), $.position.y = Math.round(i.y + R.yOffset), $.prevSpaces = x, s.push($), f = $.position.x + Math.max(R.xAdvance - R.xOffset, R.texture.orig.width), i.x += R.xAdvance + this._letterSpacing, m = Math.max(m, R.yOffset + R.texture.height), d = A, _ !== -1 && h > 0 && i.x > h && (++v, Oi(s, 1 + _ - v, 1 + P - _), P = _, _ = -1, o.push(g), a.push(s.length > 0 ? s[s.length - 1].prevSpaces : 0), p = Math.max(p, g), y++, i.x = 0, i.y += e.lineHeight, d = null, x = 0);
    }
    const w = u[u.length - 1];
    w !== "\r" && w !== `
` && (/(?:\s)/.test(w) && (f = g), o.push(f), p = Math.max(p, f), a.push(-1));
    const T = [];
    for (let P = 0; P <= y; P++) {
      let N = 0;
      this._align === "right" ? N = p - o[P] : this._align === "center" ? N = (p - o[P]) / 2 : this._align === "justify" && (N = a[P] < 0 ? 0 : (p - o[P]) / a[P]), T.push(N);
    }
    const S = s.length, E = {}, I = [], C = this._activePagesMeshData;
    c.push(...C);
    for (let P = 0; P < S; P++) {
      const N = s[P].texture, A = N.baseTexture.uid;
      if (!E[A]) {
        let R = c.pop();
        if (!R) {
          const q = new oR();
          let O, k;
          e.distanceFieldType === "none" ? (O = new Og(X.EMPTY), k = Q.NORMAL) : (O = new Og(X.EMPTY, { program: br.from(BR, DR), uniforms: { uFWidth: 0 } }), k = Q.NORMAL_NPM);
          const j = new Ng(q, O);
          j.blendMode = k, R = { index: 0, indexCount: 0, vertexCount: 0, uvsCount: 0, total: 0, mesh: j, vertices: null, uvs: null, indices: null };
        }
        R.index = 0, R.indexCount = 0, R.vertexCount = 0, R.uvsCount = 0, R.total = 0;
        const { _textureCache: $ } = this;
        $[A] = $[A] || new X(N.baseTexture), R.mesh.texture = $[A], R.mesh.tint = this._tintColor.value, I.push(R), E[A] = R;
      }
      E[A].total++;
    }
    for (let P = 0; P < C.length; P++) I.includes(C[P]) || this.removeChild(C[P].mesh);
    for (let P = 0; P < I.length; P++) I[P].mesh.parent !== this && this.addChild(I[P].mesh);
    this._activePagesMeshData = I;
    for (const P in E) {
      const N = E[P], A = N.total;
      if (!(((_a2 = N.indices) == null ? void 0 : _a2.length) > 6 * A) || N.vertices.length < Ng.BATCHABLE_SIZE * 2) N.vertices = new Float32Array(4 * 2 * A), N.uvs = new Float32Array(4 * 2 * A), N.indices = new Uint16Array(6 * A);
      else {
        const R = N.total, $ = N.vertices;
        for (let q = R * 4 * 2; q < $.length; q++) $[q] = 0;
      }
      N.mesh.size = 6 * A;
    }
    for (let P = 0; P < S; P++) {
      const N = s[P];
      let A = N.position.x + T[N.line] * (this._align === "justify" ? N.prevSpaces : 1);
      this._roundPixels && (A = Math.round(A));
      const R = A * n, $ = N.position.y * n, q = N.texture, O = E[q.baseTexture.uid], k = q.frame, j = q._uvs, b = O.index++;
      O.indices[b * 6 + 0] = 0 + b * 4, O.indices[b * 6 + 1] = 1 + b * 4, O.indices[b * 6 + 2] = 2 + b * 4, O.indices[b * 6 + 3] = 0 + b * 4, O.indices[b * 6 + 4] = 2 + b * 4, O.indices[b * 6 + 5] = 3 + b * 4, O.vertices[b * 8 + 0] = R, O.vertices[b * 8 + 1] = $, O.vertices[b * 8 + 2] = R + k.width * n, O.vertices[b * 8 + 3] = $, O.vertices[b * 8 + 4] = R + k.width * n, O.vertices[b * 8 + 5] = $ + k.height * n, O.vertices[b * 8 + 6] = R, O.vertices[b * 8 + 7] = $ + k.height * n, O.uvs[b * 8 + 0] = j.x0, O.uvs[b * 8 + 1] = j.y0, O.uvs[b * 8 + 2] = j.x1, O.uvs[b * 8 + 3] = j.y1, O.uvs[b * 8 + 4] = j.x2, O.uvs[b * 8 + 5] = j.y2, O.uvs[b * 8 + 6] = j.x3, O.uvs[b * 8 + 7] = j.y3;
    }
    this._textWidth = p * n, this._textHeight = (i.y + e.lineHeight) * n;
    for (const P in E) {
      const N = E[P];
      if (this.anchor.x !== 0 || this.anchor.y !== 0) {
        let q = 0;
        const O = this._textWidth * this.anchor.x, k = this._textHeight * this.anchor.y;
        for (let j = 0; j < N.total; j++) N.vertices[q++] -= O, N.vertices[q++] -= k, N.vertices[q++] -= O, N.vertices[q++] -= k, N.vertices[q++] -= O, N.vertices[q++] -= k, N.vertices[q++] -= O, N.vertices[q++] -= k;
      }
      this._maxLineHeight = m * n;
      const A = N.mesh.geometry.getBuffer("aVertexPosition"), R = N.mesh.geometry.getBuffer("aTextureCoord"), $ = N.mesh.geometry.getIndex();
      A.data = N.vertices, R.data = N.uvs, $.data = N.indices, A.update(), R.update(), $.update();
    }
    for (let P = 0; P < s.length; P++) jg.push(s[P]);
    this._font = e, this.dirty = false;
  }
  updateTransform() {
    this.validate(), this.containerUpdateTransform();
  }
  _render(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = true);
    const { distanceFieldRange: r, distanceFieldType: n, size: i } = Gr.available[this._fontName];
    if (n !== "none") {
      const { a: s, b: o, c: a, d: l } = this.worldTransform, u = Math.sqrt(s * s + o * o), h = Math.sqrt(a * a + l * l), c = (Math.abs(u) + Math.abs(h)) / 2, d = this.fontSize / i, f = e._view.resolution;
      for (const p of this._activePagesMeshData) p.mesh.shader.uniforms.uFWidth = c * r * d * f;
    }
    super._render(e);
  }
  getLocalBounds() {
    return this.validate(), super.getLocalBounds();
  }
  validate() {
    const e = Gr.available[this._fontName];
    if (!e) throw new Error(`Missing BitmapFont "${this._fontName}"`);
    this._font !== e && (this.dirty = true), this.dirty && this.updateText();
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(e) {
    if (this.tint !== e) {
      this._tintColor.setValue(e);
      for (let r = 0; r < this._activePagesMeshData.length; r++) this._activePagesMeshData[r].mesh.tint = e;
    }
  }
  get align() {
    return this._align;
  }
  set align(e) {
    this._align !== e && (this._align = e, this.dirty = true);
  }
  get fontName() {
    return this._fontName;
  }
  set fontName(e) {
    if (!Gr.available[e]) throw new Error(`Missing BitmapFont "${e}"`);
    this._fontName !== e && (this._fontName = e, this.dirty = true);
  }
  get fontSize() {
    return this._fontSize ?? Gr.available[this._fontName].size;
  }
  set fontSize(e) {
    this._fontSize !== e && (this._fontSize = e, this.dirty = true);
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(e) {
    typeof e == "number" ? this._anchor.set(e) : this._anchor.copyFrom(e);
  }
  get text() {
    return this._text;
  }
  set text(e) {
    e = String(e ?? ""), this._text !== e && (this._text = e, this.dirty = true);
  }
  get maxWidth() {
    return this._maxWidth;
  }
  set maxWidth(e) {
    this._maxWidth !== e && (this._maxWidth = e, this.dirty = true);
  }
  get maxLineHeight() {
    return this.validate(), this._maxLineHeight;
  }
  get textWidth() {
    return this.validate(), this._textWidth;
  }
  get letterSpacing() {
    return this._letterSpacing;
  }
  set letterSpacing(e) {
    this._letterSpacing !== e && (this._letterSpacing = e, this.dirty = true);
  }
  get roundPixels() {
    return this._roundPixels;
  }
  set roundPixels(e) {
    e !== this._roundPixels && (this._roundPixels = e, this.dirty = true);
  }
  get textHeight() {
    return this.validate(), this._textHeight;
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._autoResolution = false, this._resolution !== e && (this._resolution = e, this.dirty = true);
  }
  destroy(e) {
    const { _textureCache: r } = this, n = Gr.available[this._fontName].distanceFieldType === "none" ? zg : Hg;
    n.push(...this._activePagesMeshData);
    for (const i of this._activePagesMeshData) this.removeChild(i.mesh);
    this._activePagesMeshData = [], n.filter((i) => r[i.mesh.texture.baseTexture.uid]).forEach((i) => {
      i.mesh.texture = X.EMPTY;
    });
    for (const i in r) r[i].destroy(), delete r[i];
    this._font = null, this._tintColor = null, this._textureCache = null, super.destroy(e);
  }
};
NR.styleDefaults = { align: "left", tint: 16777215, maxWidth: 0, letterSpacing: 0 };
const OR = [".xml", ".fnt"], LR = { extension: { type: L.LoadParser, priority: Yt.Normal }, name: "loadBitmapFont", test(t5) {
  return OR.includes($e.extname(t5).toLowerCase());
}, async testParse(t5) {
  return Wa.test(t5) || Ad.test(t5);
}, async parse(t5, e, r) {
  const n = Wa.test(t5) ? Wa.parse(t5) : Ad.parse(t5), { src: i } = e, { page: s } = n, o = [];
  for (let u = 0; u < s.length; ++u) {
    const h = s[u].file;
    let c = $e.join($e.dirname(i), h);
    c = _d(c, i), o.push(c);
  }
  const a = await r.load(o), l = o.map((u) => a[u]);
  return Gr.install(n, l, true);
}, async load(t5, e) {
  return (await H.ADAPTER.fetch(t5)).text();
}, unload(t5) {
  t5.destroy();
} };
W.add(LR);
const Cd = class ci extends cn {
  constructor() {
    super(...arguments), this._fonts = [], this._overrides = [], this._stylesheet = "", this.fontsDirty = false;
  }
  static from(e) {
    return new ci(Object.keys(ci.defaultOptions).reduce((r, n) => ({ ...r, [n]: e[n] }), {}));
  }
  cleanFonts() {
    this._fonts.length > 0 && (this._fonts.forEach((e) => {
      URL.revokeObjectURL(e.src), e.refs--, e.refs === 0 && (e.fontFace && document.fonts.delete(e.fontFace), delete ci.availableFonts[e.originalUrl]);
    }), this.fontFamily = "Arial", this._fonts.length = 0, this.styleID++, this.fontsDirty = true);
  }
  loadFont(e, r = {}) {
    const { availableFonts: n } = ci;
    if (n[e]) {
      const i = n[e];
      return this._fonts.push(i), i.refs++, this.styleID++, this.fontsDirty = true, Promise.resolve();
    }
    return H.ADAPTER.fetch(e).then((i) => i.blob()).then(async (i) => new Promise((s, o) => {
      const a = URL.createObjectURL(i), l = new FileReader();
      l.onload = () => s([a, l.result]), l.onerror = o, l.readAsDataURL(i);
    })).then(async ([i, s]) => {
      const o = Object.assign({ family: $e.basename(e, $e.extname(e)), weight: "normal", style: "normal", display: "auto", src: i, dataSrc: s, refs: 1, originalUrl: e, fontFace: null }, r);
      n[e] = o, this._fonts.push(o), this.styleID++;
      const a = new FontFace(o.family, `url(${o.src})`, { weight: o.weight, style: o.style, display: o.display });
      o.fontFace = a, await a.load(), document.fonts.add(a), await document.fonts.ready, this.styleID++, this.fontsDirty = true;
    });
  }
  addOverride(...e) {
    const r = e.filter((n) => !this._overrides.includes(n));
    r.length > 0 && (this._overrides.push(...r), this.styleID++);
  }
  removeOverride(...e) {
    const r = e.filter((n) => this._overrides.includes(n));
    r.length > 0 && (this._overrides = this._overrides.filter((n) => !r.includes(n)), this.styleID++);
  }
  toCSS(e) {
    return [`transform: scale(${e})`, "transform-origin: top left", "display: inline-block", `color: ${this.normalizeColor(this.fill)}`, `font-size: ${this.fontSize}px`, `font-family: ${this.fontFamily}`, `font-weight: ${this.fontWeight}`, `font-style: ${this.fontStyle}`, `font-variant: ${this.fontVariant}`, `letter-spacing: ${this.letterSpacing}px`, `text-align: ${this.align}`, `padding: ${this.padding}px`, `white-space: ${this.whiteSpace}`, ...this.lineHeight ? [`line-height: ${this.lineHeight}px`] : [], ...this.wordWrap ? [`word-wrap: ${this.breakWords ? "break-all" : "break-word"}`, `max-width: ${this.wordWrapWidth}px`] : [], ...this.strokeThickness ? [`-webkit-text-stroke-width: ${this.strokeThickness}px`, `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`, `text-stroke-width: ${this.strokeThickness}px`, `text-stroke-color: ${this.normalizeColor(this.stroke)}`, "paint-order: stroke"] : [], ...this.dropShadow ? [this.dropShadowToCSS()] : [], ...this._overrides].join(";");
  }
  toGlobalCSS() {
    return this._fonts.reduce((e, r) => `${e}
            @font-face {
                font-family: "${r.family}";
                src: url('${r.dataSrc}');
                font-weight: ${r.weight};
                font-style: ${r.style};
                font-display: ${r.display};
            }`, this._stylesheet);
  }
  get stylesheet() {
    return this._stylesheet;
  }
  set stylesheet(e) {
    this._stylesheet !== e && (this._stylesheet = e, this.styleID++);
  }
  normalizeColor(e) {
    return Array.isArray(e) && (e = Cb(e)), typeof e == "number" ? Ab(e) : e;
  }
  dropShadowToCSS() {
    let e = this.normalizeColor(this.dropShadowColor);
    const r = this.dropShadowAlpha, n = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance), i = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
    e.startsWith("#") && r < 1 && (e += (r * 255 | 0).toString(16).padStart(2, "0"));
    const s = `${n}px ${i}px`;
    return this.dropShadowBlur > 0 ? `text-shadow: ${s} ${this.dropShadowBlur}px ${e}` : `text-shadow: ${s} ${e}`;
  }
  reset() {
    Object.assign(this, ci.defaultOptions);
  }
  onBeforeDraw() {
    const { fontsDirty: e } = this;
    return this.fontsDirty = false, this.isSafari && this._fonts.length > 0 && e ? new Promise((r) => setTimeout(r, 100)) : Promise.resolve();
  }
  get isSafari() {
    const { userAgent: e } = H.ADAPTER.getNavigator();
    return /^((?!chrome|android).)*safari/i.test(e);
  }
  set fillGradientStops(e) {
    console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText");
  }
  get fillGradientStops() {
    return super.fillGradientStops;
  }
  set fillGradientType(e) {
    console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText");
  }
  get fillGradientType() {
    return super.fillGradientType;
  }
  set miterLimit(e) {
    console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText");
  }
  get miterLimit() {
    return super.miterLimit;
  }
  set trim(e) {
    console.warn("[HTMLTextStyle] trim is not supported by HTMLText");
  }
  get trim() {
    return super.trim;
  }
  set textBaseline(e) {
    console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText");
  }
  get textBaseline() {
    return super.textBaseline;
  }
  set leading(e) {
    console.warn("[HTMLTextStyle] leading is not supported by HTMLText");
  }
  get leading() {
    return super.leading;
  }
  set lineJoin(e) {
    console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText");
  }
  get lineJoin() {
    return super.lineJoin;
  }
};
Cd.availableFonts = {}, Cd.defaultOptions = { align: "left", breakWords: false, dropShadow: false, dropShadowAlpha: 1, dropShadowAngle: Math.PI / 6, dropShadowBlur: 0, dropShadowColor: "black", dropShadowDistance: 5, fill: "black", fontFamily: "Arial", fontSize: 26, fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", letterSpacing: 0, lineHeight: 0, padding: 0, stroke: "black", strokeThickness: 0, whiteSpace: "normal", wordWrap: false, wordWrapWidth: 100 };
let Oh = Cd;
const wa = class di extends ns {
  constructor(e = "", r = {}) {
    super(X.EMPTY), this._text = null, this._style = null, this._autoResolution = true, this.localStyleID = -1, this.dirty = false, this._updateID = 0, this.ownsStyle = false;
    const n = new Image(), i = X.from(n, { scaleMode: H.SCALE_MODE, resourceOptions: { autoLoad: false } });
    i.orig = new te(), i.trim = new te(), this.texture = i;
    const s = "http://www.w3.org/2000/svg", o = "http://www.w3.org/1999/xhtml", a = document.createElementNS(s, "svg"), l = document.createElementNS(s, "foreignObject"), u = document.createElementNS(o, "div"), h = document.createElementNS(o, "style");
    l.setAttribute("width", "10000"), l.setAttribute("height", "10000"), l.style.overflow = "hidden", a.appendChild(l), this.maxWidth = di.defaultMaxWidth, this.maxHeight = di.defaultMaxHeight, this._domElement = u, this._styleElement = h, this._svgRoot = a, this._foreignObject = l, this._foreignObject.appendChild(h), this._foreignObject.appendChild(u), this._image = n, this._loadImage = new Image(), this._autoResolution = di.defaultAutoResolution, this._resolution = di.defaultResolution ?? H.RESOLUTION, this.text = e, this.style = r;
  }
  measureText(e) {
    var _a2, _b2;
    const { text: r, style: n, resolution: i } = Object.assign({ text: this._text, style: this._style, resolution: this._resolution }, e);
    Object.assign(this._domElement, { innerHTML: r, style: n.toCSS(i) }), this._styleElement.textContent = n.toGlobalCSS(), document.body.appendChild(this._svgRoot);
    const s = this._domElement.getBoundingClientRect();
    this._svgRoot.remove();
    const { width: o, height: a } = s;
    (o > this.maxWidth || a > this.maxHeight) && console.warn("[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property.");
    const l = Math.min(this.maxWidth, Math.ceil(o)), u = Math.min(this.maxHeight, Math.ceil(a));
    return this._svgRoot.setAttribute("width", l.toString()), this._svgRoot.setAttribute("height", u.toString()), r !== this._text && (this._domElement.innerHTML = this._text), n !== this._style && (Object.assign(this._domElement, { style: (_a2 = this._style) == null ? void 0 : _a2.toCSS(i) }), this._styleElement.textContent = (_b2 = this._style) == null ? void 0 : _b2.toGlobalCSS()), { width: l + n.padding * 2, height: u + n.padding * 2 };
  }
  async updateText(e = true) {
    const { style: r, _image: n, _loadImage: i } = this;
    if (this.localStyleID !== r.styleID && (this.dirty = true, this.localStyleID = r.styleID), !this.dirty && e) return;
    const { width: s, height: o } = this.measureText();
    n.width = i.width = Math.ceil(Math.max(1, s)), n.height = i.height = Math.ceil(Math.max(1, o)), this._updateID++;
    const a = this._updateID;
    await new Promise((l) => {
      i.onload = async () => {
        if (a < this._updateID) {
          l();
          return;
        }
        await r.onBeforeDraw(), n.src = i.src, i.onload = null, i.src = "", this.updateTexture(), l();
      };
      const u = new XMLSerializer().serializeToString(this._svgRoot);
      i.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(u)}`;
    });
  }
  get source() {
    return this._image;
  }
  updateTexture() {
    const { style: e, texture: r, _image: n, resolution: i } = this, { padding: s } = e, { baseTexture: o } = r;
    r.trim.width = r._frame.width = n.width / i, r.trim.height = r._frame.height = n.height / i, r.trim.x = -s, r.trim.y = -s, r.orig.width = r._frame.width - s * 2, r.orig.height = r._frame.height - s * 2, this._onTextureUpdate(), o.setRealSize(n.width, n.height, i), this.dirty = false;
  }
  _render(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = true), this.updateText(true), super._render(e);
  }
  _renderCanvas(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = true), this.updateText(true), super._renderCanvas(e);
  }
  getLocalBounds(e) {
    return this.updateText(true), super.getLocalBounds(e);
  }
  _calculateBounds() {
    this.updateText(true), this.calculateVertices(), this._bounds.addQuad(this.vertexData);
  }
  _onStyleChange() {
    this.dirty = true;
  }
  destroy(e) {
    var _a2, _b2, _c2, _d2, _e;
    typeof e == "boolean" && (e = { children: e }), e = Object.assign({}, di.defaultDestroyOptions, e), super.destroy(e);
    const r = null;
    this.ownsStyle && ((_a2 = this._style) == null ? void 0 : _a2.cleanFonts()), this._style = r, (_b2 = this._svgRoot) == null ? void 0 : _b2.remove(), this._svgRoot = r, (_c2 = this._domElement) == null ? void 0 : _c2.remove(), this._domElement = r, (_d2 = this._foreignObject) == null ? void 0 : _d2.remove(), this._foreignObject = r, (_e = this._styleElement) == null ? void 0 : _e.remove(), this._styleElement = r, this._loadImage.src = "", this._loadImage.onload = null, this._loadImage = r, this._image.src = "", this._image = r;
  }
  get width() {
    return this.updateText(true), Math.abs(this.scale.x) * this._image.width / this.resolution;
  }
  set width(e) {
    this.updateText(true);
    const r = Kr(this.scale.x) || 1;
    this.scale.x = r * e / this._image.width / this.resolution, this._width = e;
  }
  get height() {
    return this.updateText(true), Math.abs(this.scale.y) * this._image.height / this.resolution;
  }
  set height(e) {
    this.updateText(true);
    const r = Kr(this.scale.y) || 1;
    this.scale.y = r * e / this._image.height / this.resolution, this._height = e;
  }
  get style() {
    return this._style;
  }
  set style(e) {
    this._style !== e && (e = e || {}, e instanceof Oh ? (this.ownsStyle = false, this._style = e) : e instanceof cn ? (console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"), this.ownsStyle = true, this._style = Oh.from(e)) : (this.ownsStyle = true, this._style = new Oh(e)), this.localStyleID = -1, this.dirty = true);
  }
  get text() {
    return this._text;
  }
  set text(e) {
    e = String(e === "" || e === null || e === void 0 ? " " : e), e = this.sanitiseText(e), this._text !== e && (this._text = e, this.dirty = true);
  }
  get resolution() {
    return this._resolution;
  }
  set resolution(e) {
    this._autoResolution = false, this._resolution !== e && (this._resolution = e, this.dirty = true);
  }
  sanitiseText(e) {
    return e.replace(/<br>/gi, "<br/>").replace(/<hr>/gi, "<hr/>").replace(/&nbsp;/gi, "&#160;");
  }
};
wa.defaultDestroyOptions = { texture: true, children: false, baseTexture: true }, wa.defaultMaxWidth = 2024, wa.defaultMaxHeight = 2024, wa.defaultAutoResolution = true;
function UR(t5, e, r, n) {
  const s = t5 * Math.PI / 180, o = r * Math.PI / 180, a = (r - t5) * Math.PI / 180, l = (n - e) * Math.PI / 180, u = Math.sin(a / 2) * Math.sin(a / 2) + Math.cos(s) * Math.cos(o) * Math.sin(l / 2) * Math.sin(l / 2);
  return 6371e3 * (2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u)));
}
function Ci(t5, e, r, n, i, s = 20) {
  const o = n - 2 * s, a = i - 2 * s, l = s + (e - r.minLon) / (r.maxLon - r.minLon) * o, u = s + (r.maxLat - t5) / (r.maxLat - r.minLat) * a;
  return { x: l, y: u };
}
function _s(t5, e) {
  return `${t5.toFixed(5)},${e.toFixed(5)}`;
}
function GR(t5) {
  const e = /* @__PURE__ */ new Map(), r = [], n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (const s of t5.ways) {
    for (const o of s.geometry) {
      const a = _s(o.lat, o.lon);
      i.set(a, (i.get(a) || 0) + 1);
    }
    if (s.geometry.length > 0) {
      const o = s.geometry[0], a = s.geometry[s.geometry.length - 1];
      i.set(_s(o.lat, o.lon), 2), i.set(_s(a.lat, a.lon), 2);
    }
  }
  for (const s of t5.ways) {
    const o = s.geometry;
    if (o.length < 2) continue;
    let a = 0;
    for (let l = 0; l < o.length; l++) {
      const u = o[l], h = _s(u.lat, u.lon), c = (i.get(h) || 0) > 1, d = l === 0 || l === o.length - 1;
      if (c || d) {
        if (e.has(h) || e.set(h, { id: h, lat: u.lat, lon: u.lon }), l > a) {
          const f = o[a], p = _s(f.lat, f.lon);
          let y = 0;
          for (let v = a; v < l; v++) y += UR(o[v].lat, o[v].lon, o[v + 1].lat, o[v + 1].lon);
          const _ = { from: p, to: h, weight: y, wayId: s.id }, g = { from: h, to: p, weight: y, wayId: s.id };
          r.push(_, g), n.has(p) || n.set(p, []), n.has(h) || n.set(h, []), n.get(p).push(_), n.get(h).push(g);
        }
        a = l;
      }
    }
  }
  return { nodes: e, edges: r, adjacency: n };
}
function zR(t5, e, r, n) {
  const i = [];
  for (const s of t5.ways) {
    const o = s.geometry.map((a) => Ci(a.lat, a.lon, e, r, n));
    i.push({ points: o, wayId: s.id, highway: s.tags.highway || "unknown" });
  }
  return i;
}
function HR(t5, e, r, n, i, s, o = 30) {
  let a = null, l = 1 / 0;
  for (const u of t5.nodes.values()) {
    const h = Ci(u.lat, u.lon, n, i, s), c = e - h.x, d = r - h.y, f = Math.sqrt(c * c + d * d);
    f < l && f < o && (l = f, a = u);
  }
  return a;
}
function _o(t5, e) {
  const n = Math.PI / 180, i = (t5.lat + e.lat) / 2 * n, s = Math.cos(i), o = (e.lon - t5.lon) * n * s, a = (e.lat - t5.lat) * n;
  return 6371e3 * Math.sqrt(o * o + a * a);
}
const hx = { visited: 65535, visitedBackward: 16711808, path: 65535, startMarker: 65280, endMarker: 16711808 }, Lt = 2e3, Vg = 0.2, $g = 5, Ea = 0.25;
class jR {
  constructor(e) {
    __publicField(this, "mainContainer");
    __publicField(this, "roadsContainer");
    __publicField(this, "visitedContainer");
    __publicField(this, "pathContainer");
    __publicField(this, "markersContainer");
    __publicField(this, "roadGraphics");
    __publicField(this, "visitedGraphics");
    __publicField(this, "pathGraphics");
    __publicField(this, "bounds", null);
    __publicField(this, "screenWidth", 0);
    __publicField(this, "screenHeight", 0);
    __publicField(this, "startMarker", null);
    __publicField(this, "endMarker", null);
    __publicField(this, "theme", { ...hx });
    __publicField(this, "animationFrameId", null);
    __publicField(this, "_zoom", 1);
    __publicField(this, "_panX", 0);
    __publicField(this, "_panY", 0);
    __publicField(this, "isDragging", false);
    __publicField(this, "dragStartX", 0);
    __publicField(this, "dragStartY", 0);
    __publicField(this, "panStartX", 0);
    __publicField(this, "panStartY", 0);
    this.screenWidth = e.screen.width, this.screenHeight = e.screen.height, this.mainContainer = new et(), this.roadsContainer = new et(), this.visitedContainer = new et(), this.pathContainer = new et(), this.markersContainer = new et(), this.roadGraphics = new Pn(), this.visitedGraphics = new Pn(), this.pathGraphics = new Pn(), this.roadsContainer.addChild(this.roadGraphics), this.visitedContainer.addChild(this.visitedGraphics), this.pathContainer.addChild(this.pathGraphics), this.mainContainer.addChild(this.roadsContainer), this.mainContainer.addChild(this.visitedContainer), this.mainContainer.addChild(this.pathContainer), this.mainContainer.addChild(this.markersContainer), e.stage.addChild(this.mainContainer), this.setupInteraction(e), this.centerView();
  }
  setupInteraction(e) {
    const r = e.view;
    r.addEventListener("wheel", (n) => {
      n.preventDefault();
      const i = n.deltaY > 0 ? -Ea : Ea, s = r.getBoundingClientRect(), o = n.clientX - s.left, a = n.clientY - s.top;
      this.zoomAt(o, a, i);
    }, { passive: false }), r.addEventListener("mousedown", (n) => {
      (n.button === 1 || n.button === 0 && n.shiftKey) && (n.preventDefault(), this.isDragging = true, this.dragStartX = n.clientX, this.dragStartY = n.clientY, this.panStartX = this._panX, this.panStartY = this._panY, r.style.cursor = "grabbing");
    }), r.addEventListener("mousemove", (n) => {
      if (this.isDragging) {
        const i = n.clientX - this.dragStartX, s = n.clientY - this.dragStartY;
        this._panX = this.panStartX + i, this._panY = this.panStartY + s, this.updateTransform();
      }
    }), r.addEventListener("mouseup", () => {
      this.isDragging && (this.isDragging = false, r.style.cursor = "default");
    }), r.addEventListener("mouseleave", () => {
      this.isDragging && (this.isDragging = false, r.style.cursor = "default");
    }), r.addEventListener("contextmenu", (n) => n.preventDefault());
  }
  updateTransform() {
    this.mainContainer.scale.set(this._zoom), this.mainContainer.position.set(this._panX, this._panY);
  }
  centerView() {
    this._panX = (this.screenWidth - Lt * this._zoom) / 2, this._panY = (this.screenHeight - Lt * this._zoom) / 2, this.updateTransform();
  }
  setBounds(e) {
    this.bounds = e;
  }
  resize(e, r) {
    this.screenWidth = e, this.screenHeight = r;
  }
  get zoom() {
    return this._zoom;
  }
  zoomIn() {
    this.setZoom(this._zoom + Ea);
  }
  zoomOut() {
    this.setZoom(this._zoom - Ea);
  }
  setZoom(e) {
    const r = this._zoom;
    this._zoom = Math.max(Vg, Math.min($g, e));
    const n = this.screenWidth / 2, i = this.screenHeight / 2, s = this._zoom / r;
    this._panX = n - (n - this._panX) * s, this._panY = i - (i - this._panY) * s, this.updateTransform();
  }
  zoomAt(e, r, n) {
    const i = this._zoom;
    this._zoom = Math.max(Vg, Math.min($g, this._zoom + n));
    const s = this._zoom / i;
    this._panX = e - (e - this._panX) * s, this._panY = r - (r - this._panY) * s, this.updateTransform();
  }
  resetView() {
    this._zoom = 1, this.centerView();
  }
  screenToMap(e, r) {
    const n = (e - this._panX) / this._zoom, i = (r - this._panY) / this._zoom;
    return { x: n, y: i };
  }
  get panX() {
    return this._panX;
  }
  get panY() {
    return this._panY;
  }
  get dragging() {
    return this.isDragging;
  }
  drawRoads(e) {
    if (this.roadGraphics.clear(), e.length !== 0) {
      for (const r of e) {
        if (r.points.length < 2) continue;
        const n = this.getRoadWidth(r.highway);
        this.roadGraphics.lineStyle(n, 16777215, 0.6), this.roadGraphics.moveTo(r.points[0].x, r.points[0].y);
        for (let i = 1; i < r.points.length; i++) this.roadGraphics.lineTo(r.points[i].x, r.points[i].y);
      }
      this.centerView();
    }
  }
  getRoadWidth(e) {
    switch (e) {
      case "motorway":
      case "motorway_link":
        return 2.5;
      case "trunk":
      case "trunk_link":
        return 2;
      case "primary":
      case "primary_link":
        return 1.8;
      case "secondary":
      case "secondary_link":
        return 1.5;
      case "tertiary":
      case "tertiary_link":
        return 1.2;
      case "residential":
      case "living_street":
        return 0.8;
      default:
        return 0.6;
    }
  }
  drawVisitedNode(e, r) {
    if (!this.bounds) return;
    const n = Ci(e.lat, e.lon, this.bounds, Lt, Lt), i = r === "backward" ? this.theme.visitedBackward : this.theme.visited;
    this.visitedGraphics.beginFill(i, 0.4), this.visitedGraphics.drawCircle(n.x, n.y, 3), this.visitedGraphics.endFill();
  }
  setTheme(e) {
    this.theme = { ...this.theme, ...e };
  }
  getTheme() {
    return { ...this.theme };
  }
  drawPath(e) {
    if (!this.bounds || e.length < 2) return;
    this.pathGraphics.clear();
    const r = e.map((i) => Ci(i.lat, i.lon, this.bounds, Lt, Lt)), n = this.theme.path;
    this.pathGraphics.lineStyle(12, n, 0.2), this.pathGraphics.moveTo(r[0].x, r[0].y);
    for (let i = 1; i < r.length; i++) this.pathGraphics.lineTo(r[i].x, r[i].y);
    this.pathGraphics.lineStyle(6, n, 0.4), this.pathGraphics.moveTo(r[0].x, r[0].y);
    for (let i = 1; i < r.length; i++) this.pathGraphics.lineTo(r[i].x, r[i].y);
    this.pathGraphics.lineStyle(3, n, 0.7), this.pathGraphics.moveTo(r[0].x, r[0].y);
    for (let i = 1; i < r.length; i++) this.pathGraphics.lineTo(r[i].x, r[i].y);
    this.pathGraphics.lineStyle(1.5, 16777215, 1), this.pathGraphics.moveTo(r[0].x, r[0].y);
    for (let i = 1; i < r.length; i++) this.pathGraphics.lineTo(r[i].x, r[i].y);
  }
  animatePathFound(e = 500) {
    this.animationFrameId && cancelAnimationFrame(this.animationFrameId);
    const r = performance.now(), n = this.roadsContainer.alpha, i = this.visitedContainer.alpha, s = 0.2, o = 0.15, a = (l) => {
      const u = l - r, h = Math.min(u / e, 1), c = 1 - Math.pow(1 - h, 3);
      this.roadsContainer.alpha = n + (s - n) * c, this.visitedContainer.alpha = i + (o - i) * c, h < 1 ? this.animationFrameId = requestAnimationFrame(a) : this.animationFrameId = null;
    };
    this.animationFrameId = requestAnimationFrame(a);
  }
  resetAlpha() {
    this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null), this.roadsContainer.alpha = 1, this.visitedContainer.alpha = 1;
  }
  setStartMarker(e) {
    if (this.startMarker && (this.markersContainer.removeChild(this.startMarker), this.startMarker.destroy(), this.startMarker = null), e && this.bounds) {
      const r = Ci(e.lat, e.lon, this.bounds, Lt, Lt), n = this.theme.startMarker;
      this.startMarker = new Pn(), this.startMarker.beginFill(n, 0.2), this.startMarker.drawCircle(r.x, r.y, 16), this.startMarker.endFill(), this.startMarker.beginFill(n, 0.4), this.startMarker.drawCircle(r.x, r.y, 10), this.startMarker.endFill(), this.startMarker.beginFill(n, 0.8), this.startMarker.drawCircle(r.x, r.y, 6), this.startMarker.endFill(), this.startMarker.beginFill(16777215, 1), this.startMarker.drawCircle(r.x, r.y, 3), this.startMarker.endFill(), this.markersContainer.addChild(this.startMarker);
    }
  }
  setEndMarker(e) {
    if (this.endMarker && (this.markersContainer.removeChild(this.endMarker), this.endMarker.destroy(), this.endMarker = null), e && this.bounds) {
      const r = Ci(e.lat, e.lon, this.bounds, Lt, Lt), n = this.theme.endMarker;
      this.endMarker = new Pn(), this.endMarker.beginFill(n, 0.2), this.endMarker.drawCircle(r.x, r.y, 16), this.endMarker.endFill(), this.endMarker.beginFill(n, 0.4), this.endMarker.drawCircle(r.x, r.y, 10), this.endMarker.endFill(), this.endMarker.beginFill(n, 0.8), this.endMarker.drawCircle(r.x, r.y, 6), this.endMarker.endFill(), this.endMarker.beginFill(16777215, 1), this.endMarker.drawCircle(r.x, r.y, 3), this.endMarker.endFill(), this.markersContainer.addChild(this.endMarker);
    }
  }
  clearVisited() {
    this.visitedGraphics.clear();
  }
  clearPath() {
    this.pathGraphics.clear();
  }
  clearAll() {
    this.clearVisited(), this.clearPath(), this.setStartMarker(null), this.setEndMarker(null), this.resetAlpha(), this.resetView();
  }
  destroy() {
    this.roadGraphics.destroy(), this.visitedGraphics.destroy(), this.pathGraphics.destroy(), this.startMarker && this.startMarker.destroy(), this.endMarker && this.endMarker.destroy(), this.roadsContainer.destroy(), this.visitedContainer.destroy(), this.pathContainer.destroy(), this.markersContainer.destroy(), this.mainContainer.destroy();
  }
}
const Ul = Lt, VR = "https://overpass-api.de/api/interpreter";
function $R(t5) {
  const [e, r, n, i] = t5.boundingBox;
  return `
    [out:json][timeout:120];
    (
      way["highway"~"^(motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link|tertiary|tertiary_link|residential|unclassified|living_street)$"]
        (${e},${n},${r},${i});
    );
    out body geom;
  `.trim();
}
async function XR(t5) {
  const e = $R(t5), r = await fetch(VR, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: `data=${encodeURIComponent(e)}` });
  if (!r.ok) throw new Error(`Overpass API error: ${r.status}`);
  const n = await r.json();
  return WR(n, t5.boundingBox);
}
function WR(t5, e) {
  const r = /* @__PURE__ */ new Map(), n = [], [i, s, o, a] = e.map(parseFloat), l = { minLat: i, maxLat: s, minLon: o, maxLon: a };
  for (const u of t5.elements) if (u.type === "way" && u.geometry) {
    const h = u.geometry, c = [];
    h.forEach((d, f) => {
      const p = u.id * 1e3 + f;
      r.set(p, { id: p, lat: d.lat, lon: d.lon }), c.push(p);
    }), n.push({ id: u.id, nodes: c, geometry: h.map((d) => ({ lat: d.lat, lon: d.lon })), tags: u.tags || {} });
  }
  return { nodes: r, ways: n, bounds: l };
}
function YR() {
  const [t5, e] = z.useState(null), [r, n] = z.useState(null), [i, s] = z.useState([]), [o, a] = z.useState(null), [l, u] = z.useState(false), [h, c] = z.useState(null), d = z.useCallback(async (p) => {
    u(true), c(null);
    try {
      const y = await XR(p);
      e(y), a(y.bounds);
      const _ = GR(y);
      n(_);
      const g = zR(y, y.bounds, Ul, Ul);
      s(g);
    } catch (y) {
      const _ = y instanceof Error ? y.message : "Failed to load city data";
      c(_), console.error("Failed to load city:", y);
    } finally {
      u(false);
    }
  }, []), f = z.useCallback(() => {
    e(null), n(null), s([]), a(null), c(null);
  }, []);
  return { osmData: t5, graph: r, roadSegments: i, bounds: o, isLoading: l, error: h, loadCity: d, clear: f };
}
class xo {
  constructor() {
    __publicField(this, "heap", []);
  }
  push(e, r) {
    this.heap.push({ priority: r, value: e }), this.bubbleUp(this.heap.length - 1);
  }
  pop() {
    if (this.heap.length === 0) return;
    const e = this.heap[0].value, r = this.heap.pop();
    return this.heap.length > 0 && (this.heap[0] = r, this.bubbleDown(0)), e;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  size() {
    return this.heap.length;
  }
  bubbleUp(e) {
    for (; e > 0; ) {
      const r = Math.floor((e - 1) / 2);
      if (this.heap[r].priority <= this.heap[e].priority) break;
      [this.heap[r], this.heap[e]] = [this.heap[e], this.heap[r]], e = r;
    }
  }
  bubbleDown(e) {
    const r = this.heap.length;
    for (; ; ) {
      const n = 2 * e + 1, i = 2 * e + 2;
      let s = e;
      if (n < r && this.heap[n].priority < this.heap[s].priority && (s = n), i < r && this.heap[i].priority < this.heap[s].priority && (s = i), s === e) break;
      [this.heap[e], this.heap[s]] = [this.heap[s], this.heap[e]], e = s;
    }
  }
}
function ko(t5, e, r) {
  const n = [];
  let i = e;
  for (; t5.has(i); ) n.unshift(r.nodes.get(i)), i = t5.get(i);
  return n.unshift(r.nodes.get(i)), n;
}
function* Xg(t5) {
  const { graph: e, start: r, end: n } = t5;
  yield { type: "start", nodeId: r.id, node: r };
  const i = new xo(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = (c) => {
    let d = l.get(c);
    if (d === void 0) {
      const f = e.nodes.get(c);
      d = _o(f, n), l.set(c, d);
    }
    return d;
  };
  o.set(r.id, 0), i.push(r.id, u(r.id));
  let h = 0;
  for (; !i.isEmpty(); ) {
    const c = i.pop();
    if (a.has(c)) continue;
    a.add(c);
    const d = e.nodes.get(c);
    if (h++, yield { type: "visit", nodeId: c, node: d, visitedCount: h }, c === n.id) {
      yield { type: "complete", path: ko(s, c, e), visitedCount: h };
      return;
    }
    const f = e.adjacency.get(c) || [], p = o.get(c);
    for (const y of f) {
      if (a.has(y.to)) continue;
      const _ = p + y.weight, g = o.get(y.to) ?? 1 / 0;
      if (_ < g) {
        s.set(y.to, c), o.set(y.to, _);
        const v = _ + u(y.to);
        i.push(y.to, v);
      }
    }
  }
  yield { type: "complete", path: [], visitedCount: h };
}
function* ZR(t5) {
  const { graph: e, start: r, end: n } = t5;
  yield { type: "start", nodeId: r.id, node: r };
  const i = new xo(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  o.set(r.id, 0), i.push(r.id, 0);
  let l = 0;
  for (; !i.isEmpty(); ) {
    const u = i.pop();
    if (a.has(u)) continue;
    a.add(u);
    const h = e.nodes.get(u);
    if (l++, yield { type: "visit", nodeId: u, node: h, visitedCount: l }, u === n.id) {
      yield { type: "complete", path: ko(s, u, e), visitedCount: l };
      return;
    }
    const c = e.adjacency.get(u) || [];
    for (const d of c) {
      if (a.has(d.to)) continue;
      const f = (o.get(u) ?? 1 / 0) + d.weight, p = o.get(d.to) ?? 1 / 0;
      f < p && (s.set(d.to, u), o.set(d.to, f), i.push(d.to, f));
    }
  }
  yield { type: "complete", path: [], visitedCount: l };
}
function* KR(t5) {
  const { graph: e, start: r, end: n } = t5;
  yield { type: "start", nodeId: r.id, node: r };
  const i = [r.id];
  let s = 0;
  const o = /* @__PURE__ */ new Set([r.id]), a = /* @__PURE__ */ new Map();
  let l = 0;
  for (; s < i.length; ) {
    const u = i[s++], h = e.nodes.get(u);
    if (l++, yield { type: "visit", nodeId: u, node: h, visitedCount: l }, u === n.id) {
      yield { type: "complete", path: ko(a, u, e), visitedCount: l };
      return;
    }
    const c = e.adjacency.get(u) || [];
    for (const d of c) o.has(d.to) || (o.add(d.to), a.set(d.to, u), i.push(d.to));
  }
  yield { type: "complete", path: [], visitedCount: l };
}
function* qR(t5) {
  const { graph: e, start: r, end: n } = t5;
  yield { type: "start", nodeId: r.id, node: r };
  const i = [r.id], s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
  let a = 0;
  for (; i.length > 0; ) {
    const l = i.pop();
    if (s.has(l)) continue;
    s.add(l);
    const u = e.nodes.get(l);
    if (a++, yield { type: "visit", nodeId: l, node: u, visitedCount: a }, l === n.id) {
      yield { type: "complete", path: ko(o, l, e), visitedCount: a };
      return;
    }
    const h = e.adjacency.get(l) || [];
    for (let c = h.length - 1; c >= 0; c--) {
      const d = h[c];
      s.has(d.to) || (o.set(d.to, l), i.push(d.to));
    }
  }
  yield { type: "complete", path: [], visitedCount: a };
}
function* QR(t5) {
  const { graph: e, start: r, end: n } = t5;
  yield { type: "start", nodeId: r.id, node: r };
  const i = new xo(), s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
  i.push(r.id, _o(r, n));
  let a = 0;
  for (; !i.isEmpty(); ) {
    const l = i.pop();
    if (s.has(l)) continue;
    s.add(l);
    const u = e.nodes.get(l);
    if (a++, yield { type: "visit", nodeId: l, node: u, visitedCount: a }, l === n.id) {
      yield { type: "complete", path: ko(o, l, e), visitedCount: a };
      return;
    }
    const h = e.adjacency.get(l) || [];
    for (const c of h) if (!s.has(c.to)) {
      const d = e.nodes.get(c.to);
      o.set(c.to, l), i.push(c.to, _o(d, n));
    }
  }
  yield { type: "complete", path: [], visitedCount: a };
}
function* JR(t5) {
  const { graph: e, start: r, end: n } = t5;
  yield { type: "start", nodeId: r.id, node: r };
  const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = (x) => {
    let w = i.get(x);
    return w === void 0 && (w = _o(e.nodes.get(x), n), i.set(x, w)), w;
  }, a = (x) => {
    let w = s.get(x);
    return w === void 0 && (w = _o(e.nodes.get(x), r), s.set(x, w)), w;
  }, l = new xo(), u = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), d = new xo(), f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set();
  h.set(r.id, 0), l.push(r.id, o(r.id)), p.set(n.id, 0), d.push(n.id, a(n.id));
  let _ = 0, g = null, v = 1 / 0, m = null;
  for (; !l.isEmpty() || !d.isEmpty(); ) {
    if (!l.isEmpty()) {
      const x = l.pop();
      if (!c.has(x)) {
        c.add(x);
        const w = e.nodes.get(x);
        if (_++, yield { type: "visit", nodeId: x, node: w, visitedCount: _, fromDirection: "forward" }, y.has(x)) {
          const E = (h.get(x) || 0) + (p.get(x) || 0);
          E < v && (v = E, m = x);
        }
        const T = e.adjacency.get(x) || [], S = h.get(x);
        for (const E of T) {
          const I = S + E.weight;
          I < (h.get(E.to) ?? 1 / 0) && (u.set(E.to, x), h.set(E.to, I), l.push(E.to, I + o(E.to)));
        }
      }
    }
    if (!d.isEmpty()) {
      const x = d.pop();
      if (!y.has(x)) {
        y.add(x);
        const w = e.nodes.get(x);
        if (_++, yield { type: "visit", nodeId: x, node: w, visitedCount: _, fromDirection: "backward" }, c.has(x)) {
          const E = (h.get(x) || 0) + (p.get(x) || 0);
          E < v && (v = E, m = x);
        }
        const T = e.adjacency.get(x) || [], S = p.get(x);
        for (const E of T) {
          const I = S + E.weight;
          I < (p.get(E.to) ?? 1 / 0) && (f.set(E.to, x), p.set(E.to, I), d.push(E.to, I + a(E.to)));
        }
      }
    }
    if (m !== null) {
      const x = [];
      let w = m;
      for (; u.has(w); ) x.push(e.nodes.get(w)), w = u.get(w);
      x.push(e.nodes.get(w)), x.reverse();
      const T = [];
      for (w = m; f.has(w); ) w = f.get(w), T.push(e.nodes.get(w));
      g = [...x, ...T];
      break;
    }
  }
  g ? yield { type: "complete", path: g, visitedCount: _ } : yield { type: "complete", path: [], visitedCount: _ };
}
function cx(t5) {
  const e = [], r = [];
  for (const [, n] of t5.nodes) e.push({ id: n.id, lat: n.lat, lon: n.lon });
  for (const [n, i] of t5.adjacency) r.push({ from: n, edges: i.map((s) => ({ to: s.to, weight: s.weight })) });
  return { nodes: e, adjacency: r };
}
let B;
function eP(t5) {
  const e = B.__externref_table_alloc();
  return B.__wbindgen_externrefs.set(e, t5), e;
}
function ss(t5, e) {
  if (!(t5 instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
function Id(t5) {
  const e = typeof t5;
  if (e == "number" || e == "boolean" || t5 == null) return `${t5}`;
  if (e == "string") return `"${t5}"`;
  if (e == "symbol") {
    const i = t5.description;
    return i == null ? "Symbol" : `Symbol(${i})`;
  }
  if (e == "function") {
    const i = t5.name;
    return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
  }
  if (Array.isArray(t5)) {
    const i = t5.length;
    let s = "[";
    i > 0 && (s += Id(t5[0]));
    for (let o = 1; o < i; o++) s += ", " + Id(t5[o]);
    return s += "]", s;
  }
  const r = /\[object ([^\]]+)\]/.exec(toString.call(t5));
  let n;
  if (r && r.length > 1) n = r[1];
  else return toString.call(t5);
  if (n == "Object") try {
    return "Object(" + JSON.stringify(t5) + ")";
  } catch {
    return "Object";
  }
  return t5 instanceof Error ? `${t5.name}: ${t5.message}
${t5.stack}` : n;
}
function tP(t5, e) {
  return t5 = t5 >>> 0, Ys().subarray(t5 / 1, t5 / 1 + e);
}
let Cn = null;
function qt() {
  return (Cn === null || Cn.buffer.detached === true || Cn.buffer.detached === void 0 && Cn.buffer !== B.memory.buffer) && (Cn = new DataView(B.memory.buffer)), Cn;
}
function Sa(t5, e) {
  return t5 = t5 >>> 0, nP(t5, e);
}
let ks = null;
function Ys() {
  return (ks === null || ks.byteLength === 0) && (ks = new Uint8Array(B.memory.buffer)), ks;
}
function Lh(t5, e) {
  try {
    return t5.apply(this, e);
  } catch (r) {
    const n = eP(r);
    B.__wbindgen_exn_store(n);
  }
}
function Ta(t5) {
  return t5 == null;
}
function tt(t5, e, r) {
  if (r === void 0) {
    const a = Zs.encode(t5), l = e(a.length, 1) >>> 0;
    return Ys().subarray(l, l + a.length).set(a), je = a.length, l;
  }
  let n = t5.length, i = e(n, 1) >>> 0;
  const s = Ys();
  let o = 0;
  for (; o < n; o++) {
    const a = t5.charCodeAt(o);
    if (a > 127) break;
    s[i + o] = a;
  }
  if (o !== n) {
    o !== 0 && (t5 = t5.slice(o)), i = r(i, n, n = o + t5.length * 3, 1) >>> 0;
    const a = Ys().subarray(i + o, i + n), l = Zs.encodeInto(t5, a);
    o += l.written, i = r(i, n, o, 1) >>> 0;
  }
  return je = o, i;
}
function ei(t5) {
  const e = B.__wbindgen_externrefs.get(t5);
  return B.__externref_table_dealloc(t5), e;
}
let Za = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Za.decode();
const rP = 2146435072;
let Uh = 0;
function nP(t5, e) {
  return Uh += e, Uh >= rP && (Za = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Za.decode(), Uh = e), Za.decode(Ys().subarray(t5, t5 + e));
}
const Zs = new TextEncoder();
"encodeInto" in Zs || (Zs.encodeInto = function(t5, e) {
  const r = Zs.encode(t5);
  return e.set(r), { read: t5.length, written: r.length };
});
let je = 0;
const Wg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t5) => B.__wbg_astarsolver_free(t5 >>> 0, 1)), Yg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t5) => B.__wbg_bfssolver_free(t5 >>> 0, 1)), Zg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t5) => B.__wbg_bidirectionalsolver_free(t5 >>> 0, 1)), Kg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t5) => B.__wbg_dfssolver_free(t5 >>> 0, 1)), qg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t5) => B.__wbg_dijkstrasolver_free(t5 >>> 0, 1)), Qg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t5) => B.__wbg_greedysolver_free(t5 >>> 0, 1)), Jg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t5) => B.__wbg_wasmgraphhandle_free(t5 >>> 0, 1));
class Gl {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Wg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_astarsolver_free(e, 0);
  }
  runToCompletion() {
    return B.astarsolver_runToCompletion(this.__wbg_ptr);
  }
  constructor(e, r, n) {
    ss(e, Dr);
    const i = tt(r, B.__wbindgen_malloc, B.__wbindgen_realloc), s = je, o = tt(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = je, l = B.astarsolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw ei(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, Wg.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.astarsolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.astarsolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (Gl.prototype[Symbol.dispose] = Gl.prototype.free);
class Rd {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Yg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_bfssolver_free(e, 0);
  }
  runToCompletion() {
    return B.bfssolver_runToCompletion(this.__wbg_ptr);
  }
  constructor(e, r, n) {
    ss(e, Dr);
    const i = tt(r, B.__wbindgen_malloc, B.__wbindgen_realloc), s = je, o = tt(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = je, l = B.bfssolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw ei(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, Yg.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.bfssolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.bfssolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (Rd.prototype[Symbol.dispose] = Rd.prototype.free);
class Pd {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Zg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_bidirectionalsolver_free(e, 0);
  }
  runToCompletion() {
    return B.bidirectionalsolver_runToCompletion(this.__wbg_ptr);
  }
  constructor(e, r, n) {
    ss(e, Dr);
    const i = tt(r, B.__wbindgen_malloc, B.__wbindgen_realloc), s = je, o = tt(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = je, l = B.bidirectionalsolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw ei(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, Zg.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.bidirectionalsolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.bidirectionalsolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (Pd.prototype[Symbol.dispose] = Pd.prototype.free);
class Md {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Kg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_dfssolver_free(e, 0);
  }
  runToCompletion() {
    return B.dfssolver_runToCompletion(this.__wbg_ptr);
  }
  constructor(e, r, n) {
    ss(e, Dr);
    const i = tt(r, B.__wbindgen_malloc, B.__wbindgen_realloc), s = je, o = tt(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = je, l = B.dfssolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw ei(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, Kg.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.dfssolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.dfssolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (Md.prototype[Symbol.dispose] = Md.prototype.free);
class kd {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_dijkstrasolver_free(e, 0);
  }
  runToCompletion() {
    return B.dijkstrasolver_runToCompletion(this.__wbg_ptr);
  }
  constructor(e, r, n) {
    ss(e, Dr);
    const i = tt(r, B.__wbindgen_malloc, B.__wbindgen_realloc), s = je, o = tt(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = je, l = B.dijkstrasolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw ei(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, qg.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.dijkstrasolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.dijkstrasolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (kd.prototype[Symbol.dispose] = kd.prototype.free);
class Fd {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Qg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_greedysolver_free(e, 0);
  }
  runToCompletion() {
    return B.greedysolver_runToCompletion(this.__wbg_ptr);
  }
  constructor(e, r, n) {
    ss(e, Dr);
    const i = tt(r, B.__wbindgen_malloc, B.__wbindgen_realloc), s = je, o = tt(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = je, l = B.greedysolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw ei(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, Qg.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.greedysolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.greedysolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (Fd.prototype[Symbol.dispose] = Fd.prototype.free);
class Dr {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Jg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_wasmgraphhandle_free(e, 0);
  }
  nodeCount() {
    return B.wasmgraphhandle_nodeCount(this.__wbg_ptr) >>> 0;
  }
  constructor(e) {
    const r = B.wasmgraphhandle_new(e);
    if (r[2]) throw ei(r[1]);
    return this.__wbg_ptr = r[0] >>> 0, Jg.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (Dr.prototype[Symbol.dispose] = Dr.prototype.free);
const iP = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function sP(t5, e) {
  if (typeof Response == "function" && t5 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(t5, e);
    } catch (n) {
      if (t5.ok && iP.has(t5.type) && t5.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
      else throw n;
    }
    const r = await t5.arrayBuffer();
    return await WebAssembly.instantiate(r, e);
  } else {
    const r = await WebAssembly.instantiate(t5, e);
    return r instanceof WebAssembly.Instance ? { instance: r, module: t5 } : r;
  }
}
function oP() {
  const t5 = {};
  return t5.wbg = {}, t5.wbg.__wbg_Error_52673b7de5a0ca89 = function(e, r) {
    return Error(Sa(e, r));
  }, t5.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(e, r) {
    const n = String(r), i = tt(n, B.__wbindgen_malloc, B.__wbindgen_realloc), s = je;
    qt().setInt32(e + 4 * 1, s, true), qt().setInt32(e + 4 * 0, i, true);
  }, t5.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(e) {
    const r = e, n = typeof r == "boolean" ? r : void 0;
    return Ta(n) ? 16777215 : n ? 1 : 0;
  }, t5.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(e, r) {
    const n = Id(r), i = tt(n, B.__wbindgen_malloc, B.__wbindgen_realloc), s = je;
    qt().setInt32(e + 4 * 1, s, true), qt().setInt32(e + 4 * 0, i, true);
  }, t5.wbg.__wbg___wbindgen_in_0d3e1e8f0c669317 = function(e, r) {
    return e in r;
  }, t5.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(e) {
    return typeof e == "function";
  }, t5.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(e) {
    const r = e;
    return typeof r == "object" && r !== null;
  }, t5.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(e) {
    return e === void 0;
  }, t5.wbg.__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d = function(e, r) {
    return e == r;
  }, t5.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(e, r) {
    const n = r, i = typeof n == "number" ? n : void 0;
    qt().setFloat64(e + 8 * 1, Ta(i) ? 0 : i, true), qt().setInt32(e + 4 * 0, !Ta(i), true);
  }, t5.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(e, r) {
    const n = r, i = typeof n == "string" ? n : void 0;
    var s = Ta(i) ? 0 : tt(i, B.__wbindgen_malloc, B.__wbindgen_realloc), o = je;
    qt().setInt32(e + 4 * 1, o, true), qt().setInt32(e + 4 * 0, s, true);
  }, t5.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(e, r) {
    throw new Error(Sa(e, r));
  }, t5.wbg.__wbg_call_abb4ff46ce38be40 = function() {
    return Lh(function(e, r) {
      return e.call(r);
    }, arguments);
  }, t5.wbg.__wbg_done_62ea16af4ce34b24 = function(e) {
    return e.done;
  }, t5.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e, r) {
    let n, i;
    try {
      n = e, i = r, console.error(Sa(e, r));
    } finally {
      B.__wbindgen_free(n, i, 1);
    }
  }, t5.wbg.__wbg_get_6b7bd52aca3f9671 = function(e, r) {
    return e[r >>> 0];
  }, t5.wbg.__wbg_get_af9dab7e9603ea93 = function() {
    return Lh(function(e, r) {
      return Reflect.get(e, r);
    }, arguments);
  }, t5.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(e, r) {
    return e[r];
  }, t5.wbg.__wbg_instanceof_ArrayBuffer_f3320d2419cd0355 = function(e) {
    let r;
    try {
      r = e instanceof ArrayBuffer;
    } catch {
      r = false;
    }
    return r;
  }, t5.wbg.__wbg_instanceof_Uint8Array_da54ccc9d3e09434 = function(e) {
    let r;
    try {
      r = e instanceof Uint8Array;
    } catch {
      r = false;
    }
    return r;
  }, t5.wbg.__wbg_isArray_51fd9e6422c0a395 = function(e) {
    return Array.isArray(e);
  }, t5.wbg.__wbg_iterator_27b7c8b35ab3e86b = function() {
    return Symbol.iterator;
  }, t5.wbg.__wbg_length_22ac23eaec9d8053 = function(e) {
    return e.length;
  }, t5.wbg.__wbg_length_d45040a40c570362 = function(e) {
    return e.length;
  }, t5.wbg.__wbg_new_1ba21ce319a06297 = function() {
    return new Object();
  }, t5.wbg.__wbg_new_25f239778d6112b9 = function() {
    return new Array();
  }, t5.wbg.__wbg_new_6421f6084cc5bc5a = function(e) {
    return new Uint8Array(e);
  }, t5.wbg.__wbg_new_8a6f238a6ece86ea = function() {
    return new Error();
  }, t5.wbg.__wbg_next_138a17bbf04e926c = function(e) {
    return e.next;
  }, t5.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
    return Lh(function(e) {
      return e.next();
    }, arguments);
  }, t5.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(e, r, n) {
    Uint8Array.prototype.set.call(tP(e, r), n);
  }, t5.wbg.__wbg_set_3f1d0b984ed272ed = function(e, r, n) {
    e[r] = n;
  }, t5.wbg.__wbg_set_7df433eea03a5c14 = function(e, r, n) {
    e[r >>> 0] = n;
  }, t5.wbg.__wbg_stack_0ed75d68575b0f3c = function(e, r) {
    const n = r.stack, i = tt(n, B.__wbindgen_malloc, B.__wbindgen_realloc), s = je;
    qt().setInt32(e + 4 * 1, s, true), qt().setInt32(e + 4 * 0, i, true);
  }, t5.wbg.__wbg_value_57b7b035e117f7ee = function(e) {
    return e.value;
  }, t5.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(e, r) {
    return Sa(e, r);
  }, t5.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(e) {
    return e;
  }, t5.wbg.__wbindgen_init_externref_table = function() {
    const e = B.__wbindgen_externrefs, r = e.grow(4);
    e.set(0, void 0), e.set(r + 0, void 0), e.set(r + 1, null), e.set(r + 2, true), e.set(r + 3, false);
  }, t5;
}
function aP(t5, e) {
  return B = t5.exports, dx.__wbindgen_wasm_module = e, Cn = null, ks = null, B.__wbindgen_start(), B;
}
async function dx(t5) {
  if (B !== void 0) return B;
  typeof t5 < "u" && (Object.getPrototypeOf(t5) === Object.prototype ? { module_or_path: t5 } = t5 : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof t5 > "u" && (t5 = new URL("/path_planning/assets/pathfinding_wasm_bg-BaqswDVV.wasm", import.meta.url));
  const e = oP();
  (typeof t5 == "string" || typeof Request == "function" && t5 instanceof Request || typeof URL == "function" && t5 instanceof URL) && (t5 = fetch(t5));
  const { instance: r, module: n } = await sP(await t5, e);
  return aP(r, n);
}
let Dd = false, ba = null;
async function lP() {
  if (!Dd) return ba || (ba = dx().then(() => {
    Dd = true, console.log("[WASM] Pathfinding module initialized");
  }), ba);
}
function uP() {
  return Dd;
}
function hP(t5, e, r, n) {
  switch (t5) {
    case "astar":
      return new Gl(e, r, n);
    case "dijkstra":
      return new kd(e, r, n);
    case "bfs":
      return new Rd(e, r, n);
    case "dfs":
      return new Md(e, r, n);
    case "greedy":
      return new Fd(e, r, n);
    case "bidirectional":
      return new Pd(e, r, n);
    default:
      return new Gl(e, r, n);
  }
}
function cP(t5, e) {
  var _a2;
  switch (t5.type) {
    case "start":
      return { type: "start", nodeId: t5.nodeId, node: t5.nodeId ? e.nodes.get(t5.nodeId) : void 0 };
    case "visit":
      return { type: "visit", nodeId: t5.nodeId, node: t5.nodeId ? e.nodes.get(t5.nodeId) : void 0, visitedCount: t5.visitedCount, fromDirection: t5.fromDirection };
    case "complete":
      return { type: "complete", path: ((_a2 = t5.path) == null ? void 0 : _a2.map((r) => ({ id: r.id, lat: r.lat, lon: r.lon }))) ?? [], visitedCount: t5.visitedCount };
    default:
      throw new Error(`Unknown step type: ${t5.type}`);
  }
}
function* dP(t5, e) {
  try {
    for (; !t5.isDone(); ) {
      const r = t5.nextStep(), n = cP(r, e);
      if (yield n, n.type === "complete") return;
    }
  } finally {
    t5.free();
  }
}
let Mn = null, Bd = null;
function fP(t5) {
  const e = Array.from(t5.nodes.keys());
  return `${e.length}-${e[0]}-${e[e.length - 1]}`;
}
function pP(t5, e, r, n, i = true) {
  if (i && uP()) try {
    const o = fP(e);
    if (Bd !== o || !Mn) {
      Mn == null ? void 0 : Mn.free();
      const l = cx(e);
      Mn = new Dr(l), Bd = o, console.log(`[WASM] Created graph with ${Mn.nodeCount()} nodes`);
    }
    const a = hP(t5, Mn, r.id, n.id);
    return dP(a, e);
  } catch (o) {
    console.warn("[WASM] Pathfinding failed, falling back to JS:", o);
  }
  const s = { graph: e, start: r, end: n };
  switch (t5) {
    case "astar":
      return Xg(s);
    case "dijkstra":
      return ZR(s);
    case "bfs":
      return KR(s);
    case "dfs":
      return qR(s);
    case "greedy":
      return QR(s);
    case "bidirectional":
      return JR(s);
    default:
      return Xg(s);
  }
}
function mP() {
  Mn == null ? void 0 : Mn.free(), Mn = null, Bd = null;
}
let Hi = null;
function gP() {
  if (!Hi) {
    const t5 = new URL("data:video/mp2t;base64,LyoqCiAqIFdlYiBXb3JrZXIgZm9yIGluc3RhbnQgbW9kZSBwYXRoZmluZGluZy4KICogUnVucyB0aGUgZW50aXJlIGFsZ29yaXRobSBpbiBhIHNlcGFyYXRlIHRocmVhZCBhbmQgcmV0dXJucyB0aGUgcmVzdWx0LgogKi8KCmltcG9ydCBpbml0LCB7CiAgV2FzbUdyYXBoSGFuZGxlLAogIEFTdGFyU29sdmVyLAogIERpamtzdHJhU29sdmVyLAogIEJmc1NvbHZlciwKICBEZnNTb2x2ZXIsCiAgR3JlZWR5U29sdmVyLAogIEJpZGlyZWN0aW9uYWxTb2x2ZXIsCn0gZnJvbSAnLi4vLi4vd2FzbS9wa2cvcGF0aGZpbmRpbmdfd2FzbSc7CgppbXBvcnQgdHlwZSB7IEFsZ29yaXRobVR5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzJzsKaW1wb3J0IHR5cGUgeyBTZXJpYWxpemVkR3JhcGggfSBmcm9tICcuLi9jb3JlL2dyYXBoLXNlcmlhbGl6ZXInOwoKaW50ZXJmYWNlIFdvcmtlclJlcXVlc3QgewogIHR5cGU6ICdydW4nOwogIGdyYXBoOiBTZXJpYWxpemVkR3JhcGg7CiAgc3RhcnRJZDogc3RyaW5nOwogIGVuZElkOiBzdHJpbmc7CiAgYWxnb3JpdGhtOiBBbGdvcml0aG1UeXBlOwp9CgppbnRlcmZhY2UgV29ya2VyUmVzcG9uc2UgewogIHR5cGU6ICdyZXN1bHQnOwogIHBhdGg6IEFycmF5PHsgaWQ6IHN0cmluZzsgbGF0OiBudW1iZXI7IGxvbjogbnVtYmVyIH0+OwogIHZpc2l0ZWRDb3VudDogbnVtYmVyOwogIHRpbWVNczogbnVtYmVyOwp9CgppbnRlcmZhY2UgV29ya2VyRXJyb3IgewogIHR5cGU6ICdlcnJvcic7CiAgbWVzc2FnZTogc3RyaW5nOwp9CgpsZXQgd2FzbUluaXRpYWxpemVkID0gZmFsc2U7Cgphc3luYyBmdW5jdGlvbiBlbnN1cmVXYXNtSW5pdGlhbGl6ZWQoKTogUHJvbWlzZTx2b2lkPiB7CiAgaWYgKCF3YXNtSW5pdGlhbGl6ZWQpIHsKICAgIGF3YWl0IGluaXQoKTsKICAgIHdhc21Jbml0aWFsaXplZCA9IHRydWU7CiAgfQp9CgpmdW5jdGlvbiBjcmVhdGVTb2x2ZXIoCiAgYWxnb3JpdGhtOiBBbGdvcml0aG1UeXBlLAogIGdyYXBoSGFuZGxlOiBXYXNtR3JhcGhIYW5kbGUsCiAgc3RhcnRJZDogc3RyaW5nLAogIGVuZElkOiBzdHJpbmcKKSB7CiAgc3dpdGNoIChhbGdvcml0aG0pIHsKICAgIGNhc2UgJ2FzdGFyJzoKICAgICAgcmV0dXJuIG5ldyBBU3RhclNvbHZlcihncmFwaEhhbmRsZSwgc3RhcnRJZCwgZW5kSWQpOwogICAgY2FzZSAnZGlqa3N0cmEnOgogICAgICByZXR1cm4gbmV3IERpamtzdHJhU29sdmVyKGdyYXBoSGFuZGxlLCBzdGFydElkLCBlbmRJZCk7CiAgICBjYXNlICdiZnMnOgogICAgICByZXR1cm4gbmV3IEJmc1NvbHZlcihncmFwaEhhbmRsZSwgc3RhcnRJZCwgZW5kSWQpOwogICAgY2FzZSAnZGZzJzoKICAgICAgcmV0dXJuIG5ldyBEZnNTb2x2ZXIoZ3JhcGhIYW5kbGUsIHN0YXJ0SWQsIGVuZElkKTsKICAgIGNhc2UgJ2dyZWVkeSc6CiAgICAgIHJldHVybiBuZXcgR3JlZWR5U29sdmVyKGdyYXBoSGFuZGxlLCBzdGFydElkLCBlbmRJZCk7CiAgICBjYXNlICdiaWRpcmVjdGlvbmFsJzoKICAgICAgcmV0dXJuIG5ldyBCaWRpcmVjdGlvbmFsU29sdmVyKGdyYXBoSGFuZGxlLCBzdGFydElkLCBlbmRJZCk7CiAgICBkZWZhdWx0OgogICAgICByZXR1cm4gbmV3IEFTdGFyU29sdmVyKGdyYXBoSGFuZGxlLCBzdGFydElkLCBlbmRJZCk7CiAgfQp9CgpzZWxmLm9ubWVzc2FnZSA9IGFzeW5jIChldmVudDogTWVzc2FnZUV2ZW50PFdvcmtlclJlcXVlc3Q+KSA9PiB7CiAgY29uc3QgeyB0eXBlLCBncmFwaCwgc3RhcnRJZCwgZW5kSWQsIGFsZ29yaXRobSB9ID0gZXZlbnQuZGF0YTsKCiAgaWYgKHR5cGUgIT09ICdydW4nKSB7CiAgICByZXR1cm47CiAgfQoKICB0cnkgewogICAgYXdhaXQgZW5zdXJlV2FzbUluaXRpYWxpemVkKCk7CgogICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7CgogICAgLy8gQ3JlYXRlIGdyYXBoIGhhbmRsZQogICAgY29uc3QgZ3JhcGhIYW5kbGUgPSBuZXcgV2FzbUdyYXBoSGFuZGxlKGdyYXBoKTsKCiAgICAvLyBDcmVhdGUgYW5kIHJ1biBzb2x2ZXIKICAgIGNvbnN0IHNvbHZlciA9IGNyZWF0ZVNvbHZlcihhbGdvcml0aG0sIGdyYXBoSGFuZGxlLCBzdGFydElkLCBlbmRJZCk7CiAgICBjb25zdCByZXN1bHQgPSBzb2x2ZXIucnVuVG9Db21wbGV0aW9uKCk7CgogICAgY29uc3QgZW5kVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpOwoKICAgIC8vIENsZWFuIHVwCiAgICBzb2x2ZXIuZnJlZSgpOwogICAgZ3JhcGhIYW5kbGUuZnJlZSgpOwoKICAgIC8vIFNlbmQgcmVzdWx0CiAgICBjb25zdCByZXNwb25zZTogV29ya2VyUmVzcG9uc2UgPSB7CiAgICAgIHR5cGU6ICdyZXN1bHQnLAogICAgICBwYXRoOiByZXN1bHQucGF0aCB8fCBbXSwKICAgICAgdmlzaXRlZENvdW50OiByZXN1bHQudmlzaXRlZENvdW50IHx8IDAsCiAgICAgIHRpbWVNczogZW5kVGltZSAtIHN0YXJ0VGltZSwKICAgIH07CgogICAgc2VsZi5wb3N0TWVzc2FnZShyZXNwb25zZSk7CiAgfSBjYXRjaCAoZXJyb3IpIHsKICAgIGNvbnN0IGVycm9yUmVzcG9uc2U6IFdvcmtlckVycm9yID0gewogICAgICB0eXBlOiAnZXJyb3InLAogICAgICBtZXNzYWdlOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdVbmtub3duIGVycm9yJywKICAgIH07CiAgICBzZWxmLnBvc3RNZXNzYWdlKGVycm9yUmVzcG9uc2UpOwogIH0KfTsK", import.meta.url);
    Hi = new Worker(t5, { type: "module" });
  }
  return Hi;
}
function yP(t5, e, r, n) {
  return new Promise((i, s) => {
    const o = gP(), a = (h) => {
      if (o.removeEventListener("message", a), o.removeEventListener("error", l), h.data.type === "result") {
        const c = h.data.path.map((d) => ({ id: d.id, lat: d.lat, lon: d.lon }));
        i({ path: c, visitedCount: h.data.visitedCount, timeMs: h.data.timeMs });
      } else h.data.type === "error" && s(new Error(h.data.message));
    }, l = (h) => {
      o.removeEventListener("message", a), o.removeEventListener("error", l), s(new Error(h.message));
    };
    o.addEventListener("message", a), o.addEventListener("error", l);
    const u = cx(t5);
    o.postMessage({ type: "run", graph: u, startId: e.id, endId: r.id, algorithm: n });
  });
}
function vP() {
  Hi && (Hi.terminate(), Hi = null);
}
function _P() {
  const [t5, e] = z.useState(false), [r, n] = z.useState(/* @__PURE__ */ new Set()), [i, s] = z.useState([]), [o, a] = z.useState(0), [l, u] = z.useState(50), [h, c] = z.useState(false), [d, f] = z.useState(null), p = z.useRef(null), y = z.useRef(null), _ = z.useRef(null), g = z.useRef(1);
  z.useEffect(() => {
    g.current = Math.max(1, Math.floor(l / 2));
  }, [l]);
  const v = z.useCallback(() => {
    if (p.current) try {
      const S = g.current;
      for (let E = 0; E < S; E++) {
        const I = p.current.next();
        if (I.done) {
          e(false);
          return;
        }
        const C = I.value;
        if (C.type === "visit" && C.nodeId ? (n((P) => new Set(P).add(C.nodeId)), a(C.visitedCount || 0)) : C.type === "complete" && C.path && (s(C.path), a(C.visitedCount || 0)), _.current && _.current(C), C.type === "complete") {
          e(false);
          return;
        }
      }
      y.current = requestAnimationFrame(v);
    } catch (S) {
      console.error("Pathfinding error:", S), e(false);
    }
  }, []), m = z.useCallback((S, E, I, C) => {
    n(/* @__PURE__ */ new Set()), s([]), a(0), f(null), h ? (e(true), yP(S, E, I, C).then((P) => {
      s(P.path), a(P.visitedCount), f(P.timeMs), e(false), _.current && _.current({ type: "complete", path: P.path, visitedCount: P.visitedCount }), console.log(`[Instant Mode] Completed in ${P.timeMs.toFixed(2)}ms, visited ${P.visitedCount} nodes`);
    }).catch((P) => {
      console.error("Instant mode error:", P), e(false);
    })) : (p.current = pP(C, S, E, I), e(true), y.current = requestAnimationFrame(v));
  }, [v, h]), x = z.useCallback(() => {
    y.current && (cancelAnimationFrame(y.current), y.current = null), e(false);
  }, []), w = z.useCallback(() => {
    x(), n(/* @__PURE__ */ new Set()), s([]), a(0), f(null), p.current = null;
  }, [x]), T = z.useCallback((S) => {
    _.current = S;
  }, []);
  return z.useEffect(() => () => {
    y.current && cancelAnimationFrame(y.current), vP();
  }, []), { isRunning: t5, visitedNodes: r, currentPath: i, visitedCount: o, start: m, stop: x, reset: w, speed: l, setSpeed: u, onStep: T, instantMode: h, setInstantMode: c, executionTime: d };
}
function xP(t5, e) {
  const [r, n] = z.useState(null), [i, s] = z.useState(null), o = z.useCallback((l, u) => {
    if (!t5 || !e) return;
    const h = HR(t5, l, u, e, Ul, Ul, 50);
    h && (r ? i ? (n(h), s(null)) : s(h) : n(h));
  }, [t5, e, r, i]), a = z.useCallback(() => {
    n(null), s(null);
  }, []);
  return { startNode: r, endNode: i, handleClick: o, reset: a, setStartNode: n, setEndNode: s };
}
const wP = "https://nominatim.openstreetmap.org";
async function EP(t5) {
  if (!t5.trim()) return [];
  const e = new URLSearchParams({ q: t5, format: "json", addressdetails: "1", limit: "5", featuretype: "city,town,village" }), r = await fetch(`${wP}/search?${e}`, { headers: { "User-Agent": "PathPlanningVisualizer/1.0" } });
  if (!r.ok) throw new Error("Failed to search for city");
  return (await r.json()).filter((i) => i.class === "place" || i.class === "boundary").map((i) => ({ displayName: i.display_name, lat: parseFloat(i.lat), lon: parseFloat(i.lon), boundingBox: i.boundingbox, osmId: i.osm_id, osmType: i.osm_type }));
}
function SP({ onSelect: t5, disabled: e }) {
  const [r, n] = z.useState(""), [i, s] = z.useState([]), [o, a] = z.useState(false), [l, u] = z.useState(false), h = z.useRef(null), c = z.useRef(null), d = z.useCallback(async (_) => {
    if (!_.trim()) {
      s([]);
      return;
    }
    a(true);
    try {
      const g = await EP(_);
      s(g), u(g.length > 0);
    } catch (g) {
      console.error("Search failed:", g), s([]);
    } finally {
      a(false);
    }
  }, []), f = z.useCallback((_) => {
    const g = _.target.value;
    n(g), h.current && clearTimeout(h.current), h.current = setTimeout(() => {
      d(g);
    }, 300);
  }, [d]), p = z.useCallback((_) => {
    n(_.displayName.split(",")[0]), u(false), s([]), t5(_);
  }, [t5]), y = z.useCallback((_) => {
    _.preventDefault(), i.length > 0 && p(i[0]);
  }, [i, p]);
  return z.useEffect(() => {
    const _ = (g) => {
      c.current && !c.current.contains(g.target) && u(false);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, []), M.jsxs("div", { className: "control-group", ref: c, children: [M.jsx("label", { children: "City" }), M.jsxs("form", { className: "city-search", onSubmit: y, children: [M.jsx("input", { type: "text", value: r, onChange: f, placeholder: "Search for a city...", disabled: e, onFocus: () => i.length > 0 && u(true) }), M.jsx("button", { type: "submit", className: "btn btn-primary", disabled: e || o || i.length === 0, children: o ? "..." : "Load" })] }), l && i.length > 0 && M.jsx("div", { style: { position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(0, 0, 0, 0.95)", border: "1px solid rgba(0, 255, 255, 0.3)", borderRadius: "6px", marginTop: "4px", maxHeight: "200px", overflowY: "auto", zIndex: 1e3 }, children: i.map((_, g) => M.jsx("div", { onClick: () => p(_), style: { padding: "10px 14px", cursor: "pointer", borderBottom: g < i.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none", fontSize: "13px", color: "rgba(255,255,255,0.8)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, onMouseEnter: (v) => {
    v.currentTarget.style.background = "rgba(0, 255, 255, 0.1)";
  }, onMouseLeave: (v) => {
    v.currentTarget.style.background = "transparent";
  }, children: _.displayName }, `${_.osmId}-${g}`)) })] });
}
const ey = [{ id: "astar", name: "A* Search", description: "Optimal pathfinding with heuristic guidance", optimal: true, usesHeuristic: true }, { id: "dijkstra", name: "Dijkstra's Algorithm", description: "Optimal shortest path, explores uniformly", optimal: true, usesHeuristic: false }, { id: "bfs", name: "Breadth-First Search", description: "Finds shortest path by hop count", optimal: true, usesHeuristic: false }, { id: "dfs", name: "Depth-First Search", description: "Explores deeply first, not optimal", optimal: false, usesHeuristic: false }, { id: "greedy", name: "Greedy Best-First", description: "Fast but not optimal, follows heuristic", optimal: false, usesHeuristic: true }, { id: "bidirectional", name: "Bidirectional A*", description: "Searches from both ends simultaneously", optimal: true, usesHeuristic: true }];
function TP({ value: t5, onChange: e, disabled: r }) {
  var _a2;
  return M.jsxs("div", { className: "control-group", children: [M.jsx("label", { children: "Algorithm" }), M.jsx("select", { value: t5, onChange: (n) => e(n.target.value), disabled: r, children: ey.map((n) => M.jsx("option", { value: n.id, children: n.name }, n.id)) }), M.jsx("div", { style: { fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }, children: (_a2 = ey.find((n) => n.id === t5)) == null ? void 0 : _a2.description })] });
}
function bP({ canStart: t5, isRunning: e, speed: r, instantMode: n, executionTime: i, onStart: s, onStop: o, onReset: a, onSpeedChange: l, onInstantModeChange: u }) {
  return M.jsxs(M.Fragment, { children: [M.jsxs("div", { className: "control-group", children: [M.jsxs("label", { className: "toggle-label", children: [M.jsx("input", { type: "checkbox", checked: n, onChange: (h) => u(h.target.checked), disabled: e }), M.jsx("span", { className: "toggle-text", children: "Instant Mode" }), n && M.jsx("span", { className: "instant-badge", children: "FAST" })] }), n && M.jsx("span", { className: "instant-hint", children: "No visualization, maximum speed" })] }), !n && M.jsxs("div", { className: "control-group", children: [M.jsx("label", { children: "Speed" }), M.jsxs("div", { className: "speed-control", children: [M.jsx("input", { type: "range", min: "1", max: "100", value: r, onChange: (h) => l(parseInt(h.target.value)) }), M.jsxs("span", { children: [r, "x"] })] })] }), i !== null && M.jsxs("div", { className: "execution-time", children: ["Completed in ", M.jsxs("span", { className: "highlight", children: [i.toFixed(2), "ms"] })] }), M.jsxs("div", { className: "button-row", children: [e ? M.jsx("button", { className: "btn", onClick: o, disabled: n, children: n ? "Running..." : "Pause" }) : M.jsx("button", { className: "btn btn-primary", onClick: s, disabled: !t5, children: n ? "Run Instant" : "Start" }), M.jsx("button", { className: "btn btn-danger", onClick: a, disabled: e, children: "Reset" })] })] });
}
function AP({ visitedCount: t5, pathLength: e }) {
  return M.jsxs("div", { className: "legend", children: [M.jsxs("div", { className: "legend-item", children: [M.jsx("div", { className: "legend-color roads" }), M.jsx("span", { children: "Roads" })] }), M.jsxs("div", { className: "legend-item", children: [M.jsx("div", { className: "legend-color start" }), M.jsx("span", { children: "Start Point" })] }), M.jsxs("div", { className: "legend-item", children: [M.jsx("div", { className: "legend-color end" }), M.jsx("span", { children: "End Point" })] }), M.jsxs("div", { className: "legend-item", children: [M.jsx("div", { className: "legend-color visited" }), M.jsxs("span", { children: ["Visited (", t5, ")"] })] }), M.jsxs("div", { className: "legend-item", children: [M.jsx("div", { className: "legend-color path" }), M.jsxs("span", { children: ["Path (", e, " nodes)"] })] })] });
}
const ty = [{ name: "Cyan", value: 65535 }, { name: "Magenta", value: 16711808 }, { name: "Green", value: 65280 }, { name: "Orange", value: 16744448 }, { name: "Purple", value: 8388863 }, { name: "Yellow", value: 16776960 }, { name: "Red", value: 16711680 }, { name: "Blue", value: 33023 }], CP = [{ name: "Tron (Default)", theme: { visited: 65535, visitedBackward: 16711808, path: 65535, startMarker: 65280, endMarker: 16711808 } }, { name: "Sunset", theme: { visited: 16744448, visitedBackward: 16711808, path: 16744448, startMarker: 16776960, endMarker: 16711680 } }, { name: "Ocean", theme: { visited: 33023, visitedBackward: 65535, path: 33023, startMarker: 65408, endMarker: 65535 } }, { name: "Neon Purple", theme: { visited: 8388863, visitedBackward: 16711935, path: 8388863, startMarker: 65280, endMarker: 16711935 } }, { name: "Matrix", theme: { visited: 65280, visitedBackward: 65408, path: 65280, startMarker: 65535, endMarker: 65408 } }];
function xs(t5) {
  return "#" + t5.toString(16).padStart(6, "0");
}
function ry(t5) {
  return parseInt(t5.replace("#", ""), 16);
}
function IP({ theme: t5, onChange: e, disabled: r }) {
  const [n, i] = z.useState(false);
  return M.jsxs("div", { className: "color-picker", children: [M.jsxs("button", { className: "color-picker-toggle", onClick: () => i(!n), disabled: r, children: ["Colors ", n ? "\u25B2" : "\u25BC"] }), n && M.jsxs("div", { className: "color-picker-panel", children: [M.jsxs("div", { className: "color-presets", children: [M.jsx("label", { children: "Theme Presets" }), M.jsx("div", { className: "preset-buttons", children: CP.map((s) => M.jsxs("button", { className: "preset-button", onClick: () => e(s.theme), disabled: r, title: s.name, children: [M.jsx("span", { className: "preset-swatch", style: { backgroundColor: xs(s.theme.path) } }), s.name] }, s.name)) })] }), M.jsxs("div", { className: "color-options", children: [M.jsxs("div", { className: "color-option", children: [M.jsx("label", { children: "Path Color" }), M.jsxs("div", { className: "color-swatches", children: [ty.map((s) => M.jsx("button", { className: `color-swatch ${t5.path === s.value ? "active" : ""}`, style: { backgroundColor: xs(s.value) }, onClick: () => e({ path: s.value, visited: s.value }), disabled: r, title: s.name }, s.value)), M.jsx("input", { type: "color", value: xs(t5.path), onChange: (s) => {
    const o = ry(s.target.value);
    e({ path: o, visited: o });
  }, disabled: r, className: "color-input", title: "Custom color" })] })] }), M.jsxs("div", { className: "color-option", children: [M.jsx("label", { children: "Visited Nodes" }), M.jsxs("div", { className: "color-swatches", children: [ty.map((s) => M.jsx("button", { className: `color-swatch ${t5.visited === s.value ? "active" : ""}`, style: { backgroundColor: xs(s.value) }, onClick: () => e({ visited: s.value }), disabled: r, title: s.name }, s.value)), M.jsx("input", { type: "color", value: xs(t5.visited), onChange: (s) => e({ visited: ry(s.target.value) }), disabled: r, className: "color-input", title: "Custom color" })] })] })] })] })] });
}
function RP() {
  const t5 = z.useRef(null), e = z.useRef(null), r = z.useRef(null), [n, i] = z.useState({ width: 800, height: 600 }), [s, o] = z.useState(null), [a, l] = z.useState("astar"), [u, h] = z.useState(false), [c, d] = z.useState({ ...hx }), { graph: f, roadSegments: p, bounds: y, isLoading: _, error: g, loadCity: v } = YR(), { isRunning: m, currentPath: x, visitedCount: w, start: T, stop: S, reset: E, speed: I, setSpeed: C, onStep: P, instantMode: N, setInstantMode: A, executionTime: R } = _P(), { startNode: $, endNode: q, handleClick: O, reset: k } = xP(f, y);
  z.useEffect(() => {
    lP().catch((J) => {
      console.warn("Failed to initialize WASM, will use JS fallback:", J);
    });
  }, []), z.useEffect(() => {
    if (!t5.current || e.current) return;
    const J = t5.current;
    let ce = J.clientWidth, pe = J.clientHeight;
    (ce < 100 || pe < 100) && (ce = window.innerWidth, pe = window.innerHeight - 100);
    const xe = new G0({ width: ce, height: pe, backgroundColor: 0, antialias: true, resolution: window.devicePixelRatio || 1, autoDensity: true });
    J.appendChild(xe.view), e.current = xe;
    const ue = new jR(xe);
    r.current = ue, i({ width: ce, height: pe }), h(true);
  }, []), z.useEffect(() => {
    const J = () => {
      if (!t5.current || !e.current) return;
      const ce = t5.current.clientWidth, pe = t5.current.clientHeight;
      i({ width: ce, height: pe }), e.current.renderer.resize(ce, pe), r.current && r.current.resize(ce, pe);
    };
    return window.addEventListener("resize", J), () => window.removeEventListener("resize", J);
  }, []), z.useEffect(() => {
    if (!e.current || !r.current) return;
    const J = e.current.view, ce = r.current, pe = (xe) => {
      if (_ || m || ce.dragging) return;
      const ue = J.getBoundingClientRect(), Ie = n.width / ue.width, Me = n.height / ue.height, Et = (xe.clientX - ue.left) * Ie, St = (xe.clientY - ue.top) * Me, Nr = ce.screenToMap(Et, St);
      O(Nr.x, Nr.y);
    };
    return J.addEventListener("click", pe), () => J.removeEventListener("click", pe);
  }, [O, n, _, m]), z.useEffect(() => {
    P((J) => {
      !r.current || !y || J.type === "visit" && J.node && r.current.drawVisitedNode(J.node, J.fromDirection);
    });
  }, [P, y]), z.useEffect(() => {
    if (!r.current || p.length === 0 || !u) return;
    const J = setTimeout(() => {
      r.current && r.current.drawRoads(p);
    }, 100);
    return () => clearTimeout(J);
  }, [p, u]), z.useEffect(() => {
    !r.current || !y || !u || r.current.setBounds(y);
  }, [y, u]), z.useEffect(() => {
    !r.current || !u || r.current.setStartMarker($);
  }, [$, u]), z.useEffect(() => {
    !r.current || !u || r.current.setEndMarker(q);
  }, [q, u]), z.useEffect(() => {
    !r.current || !u || x.length > 0 && (r.current.drawPath(x), r.current.animatePathFound(600));
  }, [x, u]);
  const j = z.useCallback((J) => {
    d((ce) => ({ ...ce, ...J })), r.current && r.current.setTheme(J);
  }, []), b = z.useCallback(async (J) => {
    o(J), E(), k(), mP(), r.current && r.current.clearAll(), await v(J);
  }, [v, E, k]), U = z.useCallback(() => {
    !f || !$ || !q || (r.current && (r.current.resetAlpha(), r.current.clearVisited(), r.current.clearPath()), T(f, $, q, a));
  }, [f, $, q, a, T]), K = z.useCallback(() => {
    E(), k(), r.current && (r.current.resetAlpha(), r.current.clearVisited(), r.current.clearPath());
  }, [E, k]), oe = z.useCallback(() => {
    r.current && r.current.zoomIn();
  }, []), re = z.useCallback(() => {
    r.current && r.current.zoomOut();
  }, []), _e = z.useCallback(() => {
    r.current && r.current.resetView();
  }, []), he = !!f && !!$ && !!q && !m;
  return M.jsxs("div", { className: "app", children: [M.jsxs("div", { className: "control-panel", children: [M.jsx("h1", { children: "Path Planning Visualizer" }), M.jsx(SP, { onSelect: b, disabled: _ }), g && M.jsx("div", { className: "error-message", children: g }), M.jsx(TP, { value: a, onChange: l, disabled: m }), M.jsx(bP, { canStart: he, isRunning: m, speed: I, instantMode: N, executionTime: R, onStart: U, onStop: S, onReset: K, onSpeedChange: C, onInstantModeChange: A }), M.jsx(IP, { theme: c, onChange: j, disabled: m }), M.jsxs("div", { className: "status", children: [!s && M.jsx("span", { children: "Search for a city to begin" }), s && !f && !_ && M.jsx("span", { children: "Loading city data..." }), f && !$ && M.jsxs("span", { children: ["Click on the map to set ", M.jsx("span", { className: "highlight", children: "start point" })] }), f && $ && !q && M.jsxs("span", { children: ["Click on the map to set ", M.jsx("span", { className: "highlight", children: "end point" })] }), f && $ && q && !m && x.length === 0 && M.jsxs("span", { children: ["Click ", M.jsx("span", { className: "highlight", children: "Start" }), " to begin pathfinding"] }), m && M.jsxs("span", { children: ["Searching... ", M.jsx("span", { className: "highlight", children: w }), " nodes visited"] }), !m && x.length > 0 && M.jsxs("span", { children: ["Path found! ", M.jsx("span", { className: "highlight", children: x.length }), " nodes, ", M.jsx("span", { className: "highlight", children: w }), " visited"] })] })] }), f && M.jsx(AP, { visitedCount: w, pathLength: x.length }), M.jsx("div", { ref: t5, className: "canvas-container", style: { flex: 1 } }), f && M.jsxs("div", { className: "zoom-controls", children: [M.jsx("button", { onClick: oe, title: "Zoom In", children: "+" }), M.jsx("button", { onClick: re, title: "Zoom Out", children: "\u2212" }), M.jsx("button", { onClick: _e, title: "Reset View", children: "\u27F2" })] }), _ && M.jsx("div", { className: "loading-overlay", children: M.jsxs("div", { className: "loading-spinner", children: [M.jsx("div", { className: "spinner" }), M.jsx("span", { className: "loading-text", children: "Loading road data..." })] }) }), !f && !_ && M.jsxs("div", { className: "instructions", children: [M.jsx("p", { children: "Search for a city to visualize path planning algorithms" }), M.jsx("p", { style: { color: "rgba(0, 255, 255, 0.6)" }, children: "on real street networks" })] })] });
}
Gh.createRoot(document.getElementById("root")).render(M.jsx(Px.StrictMode, { children: M.jsx(RP, {}) }));
