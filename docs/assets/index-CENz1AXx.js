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
  function t(i) {
    const s = {};
    return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(i) {
    if (i.ep) return;
    i.ep = true;
    const s = t(i);
    fetch(i.href, s);
  }
})();
var ks = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kd(r5) {
  return r5 && r5.__esModule && Object.prototype.hasOwnProperty.call(r5, "default") ? r5.default : r5;
}
function ax(r5) {
  if (r5.__esModule) return r5;
  var e = r5.default;
  if (typeof e == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: true }), Object.keys(r5).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(r5, n);
    Object.defineProperty(t, n, i.get ? i : { enumerable: true, get: function() {
      return r5[n];
    } });
  }), t;
}
var Zg = { exports: {} }, Gl = {}, Qg = { exports: {} }, se = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var xo = Symbol.for("react.element"), lx = Symbol.for("react.portal"), ux = Symbol.for("react.fragment"), hx = Symbol.for("react.strict_mode"), cx = Symbol.for("react.profiler"), dx = Symbol.for("react.provider"), fx = Symbol.for("react.context"), px = Symbol.for("react.forward_ref"), mx = Symbol.for("react.suspense"), gx = Symbol.for("react.memo"), yx = Symbol.for("react.lazy"), $f = Symbol.iterator;
function vx(r5) {
  return r5 === null || typeof r5 != "object" ? null : (r5 = $f && r5[$f] || r5["@@iterator"], typeof r5 == "function" ? r5 : null);
}
var Jg = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ey = Object.assign, ty = {};
function Zi(r5, e, t) {
  this.props = r5, this.context = e, this.refs = ty, this.updater = t || Jg;
}
Zi.prototype.isReactComponent = {};
Zi.prototype.setState = function(r5, e) {
  if (typeof r5 != "object" && typeof r5 != "function" && r5 != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, r5, e, "setState");
};
Zi.prototype.forceUpdate = function(r5) {
  this.updater.enqueueForceUpdate(this, r5, "forceUpdate");
};
function ry() {
}
ry.prototype = Zi.prototype;
function Dd(r5, e, t) {
  this.props = r5, this.context = e, this.refs = ty, this.updater = t || Jg;
}
var Fd = Dd.prototype = new ry();
Fd.constructor = Dd;
ey(Fd, Zi.prototype);
Fd.isPureReactComponent = true;
var jf = Array.isArray, ny = Object.prototype.hasOwnProperty, Nd = { current: null }, iy = { key: true, ref: true, __self: true, __source: true };
function sy(r5, e, t) {
  var n, i = {}, s = null, o = null;
  if (e != null) for (n in e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (s = "" + e.key), e) ny.call(e, n) && !iy.hasOwnProperty(n) && (i[n] = e[n]);
  var a = arguments.length - 2;
  if (a === 1) i.children = t;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (r5 && r5.defaultProps) for (n in a = r5.defaultProps, a) i[n] === void 0 && (i[n] = a[n]);
  return { $$typeof: xo, type: r5, key: s, ref: o, props: i, _owner: Nd.current };
}
function _x(r5, e) {
  return { $$typeof: xo, type: r5.type, key: e, ref: r5.ref, props: r5.props, _owner: r5._owner };
}
function Bd(r5) {
  return typeof r5 == "object" && r5 !== null && r5.$$typeof === xo;
}
function xx(r5) {
  var e = { "=": "=0", ":": "=2" };
  return "$" + r5.replace(/[=:]/g, function(t) {
    return e[t];
  });
}
var Vf = /\/+/g;
function gu(r5, e) {
  return typeof r5 == "object" && r5 !== null && r5.key != null ? xx("" + r5.key) : e.toString(36);
}
function ba(r5, e, t, n, i) {
  var s = typeof r5;
  (s === "undefined" || s === "boolean") && (r5 = null);
  var o = false;
  if (r5 === null) o = true;
  else switch (s) {
    case "string":
    case "number":
      o = true;
      break;
    case "object":
      switch (r5.$$typeof) {
        case xo:
        case lx:
          o = true;
      }
  }
  if (o) return o = r5, i = i(o), r5 = n === "" ? "." + gu(o, 0) : n, jf(i) ? (t = "", r5 != null && (t = r5.replace(Vf, "$&/") + "/"), ba(i, e, t, "", function(u) {
    return u;
  })) : i != null && (Bd(i) && (i = _x(i, t + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Vf, "$&/") + "/") + r5)), e.push(i)), 1;
  if (o = 0, n = n === "" ? "." : n + ":", jf(r5)) for (var a = 0; a < r5.length; a++) {
    s = r5[a];
    var l = n + gu(s, a);
    o += ba(s, e, t, l, i);
  }
  else if (l = vx(r5), typeof l == "function") for (r5 = l.call(r5), a = 0; !(s = r5.next()).done; ) s = s.value, l = n + gu(s, a++), o += ba(s, e, t, l, i);
  else if (s === "object") throw e = String(r5), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(r5).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Do(r5, e, t) {
  if (r5 == null) return r5;
  var n = [], i = 0;
  return ba(r5, n, "", "", function(s) {
    return e.call(t, s, i++);
  }), n;
}
function wx(r5) {
  if (r5._status === -1) {
    var e = r5._result;
    e = e(), e.then(function(t) {
      (r5._status === 0 || r5._status === -1) && (r5._status = 1, r5._result = t);
    }, function(t) {
      (r5._status === 0 || r5._status === -1) && (r5._status = 2, r5._result = t);
    }), r5._status === -1 && (r5._status = 0, r5._result = e);
  }
  if (r5._status === 1) return r5._result.default;
  throw r5._result;
}
var ot = { current: null }, Aa = { transition: null }, Ex = { ReactCurrentDispatcher: ot, ReactCurrentBatchConfig: Aa, ReactCurrentOwner: Nd };
function oy() {
  throw Error("act(...) is not supported in production builds of React.");
}
se.Children = { map: Do, forEach: function(r5, e, t) {
  Do(r5, function() {
    e.apply(this, arguments);
  }, t);
}, count: function(r5) {
  var e = 0;
  return Do(r5, function() {
    e++;
  }), e;
}, toArray: function(r5) {
  return Do(r5, function(e) {
    return e;
  }) || [];
}, only: function(r5) {
  if (!Bd(r5)) throw Error("React.Children.only expected to receive a single React element child.");
  return r5;
} };
se.Component = Zi;
se.Fragment = ux;
se.Profiler = cx;
se.PureComponent = Dd;
se.StrictMode = hx;
se.Suspense = mx;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ex;
se.act = oy;
se.cloneElement = function(r5, e, t) {
  if (r5 == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r5 + ".");
  var n = ey({}, r5.props), i = r5.key, s = r5.ref, o = r5._owner;
  if (e != null) {
    if (e.ref !== void 0 && (s = e.ref, o = Nd.current), e.key !== void 0 && (i = "" + e.key), r5.type && r5.type.defaultProps) var a = r5.type.defaultProps;
    for (l in e) ny.call(e, l) && !iy.hasOwnProperty(l) && (n[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = t;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: xo, type: r5.type, key: i, ref: s, props: n, _owner: o };
};
se.createContext = function(r5) {
  return r5 = { $$typeof: fx, _currentValue: r5, _currentValue2: r5, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r5.Provider = { $$typeof: dx, _context: r5 }, r5.Consumer = r5;
};
se.createElement = sy;
se.createFactory = function(r5) {
  var e = sy.bind(null, r5);
  return e.type = r5, e;
};
se.createRef = function() {
  return { current: null };
};
se.forwardRef = function(r5) {
  return { $$typeof: px, render: r5 };
};
se.isValidElement = Bd;
se.lazy = function(r5) {
  return { $$typeof: yx, _payload: { _status: -1, _result: r5 }, _init: wx };
};
se.memo = function(r5, e) {
  return { $$typeof: gx, type: r5, compare: e === void 0 ? null : e };
};
se.startTransition = function(r5) {
  var e = Aa.transition;
  Aa.transition = {};
  try {
    r5();
  } finally {
    Aa.transition = e;
  }
};
se.unstable_act = oy;
se.useCallback = function(r5, e) {
  return ot.current.useCallback(r5, e);
};
se.useContext = function(r5) {
  return ot.current.useContext(r5);
};
se.useDebugValue = function() {
};
se.useDeferredValue = function(r5) {
  return ot.current.useDeferredValue(r5);
};
se.useEffect = function(r5, e) {
  return ot.current.useEffect(r5, e);
};
se.useId = function() {
  return ot.current.useId();
};
se.useImperativeHandle = function(r5, e, t) {
  return ot.current.useImperativeHandle(r5, e, t);
};
se.useInsertionEffect = function(r5, e) {
  return ot.current.useInsertionEffect(r5, e);
};
se.useLayoutEffect = function(r5, e) {
  return ot.current.useLayoutEffect(r5, e);
};
se.useMemo = function(r5, e) {
  return ot.current.useMemo(r5, e);
};
se.useReducer = function(r5, e, t) {
  return ot.current.useReducer(r5, e, t);
};
se.useRef = function(r5) {
  return ot.current.useRef(r5);
};
se.useState = function(r5) {
  return ot.current.useState(r5);
};
se.useSyncExternalStore = function(r5, e, t) {
  return ot.current.useSyncExternalStore(r5, e, t);
};
se.useTransition = function() {
  return ot.current.useTransition();
};
se.version = "18.3.1";
Qg.exports = se;
var $ = Qg.exports;
const Tx = kd($);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Sx = $, bx = Symbol.for("react.element"), Ax = Symbol.for("react.fragment"), Cx = Object.prototype.hasOwnProperty, Ix = Sx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Px = { key: true, ref: true, __self: true, __source: true };
function ay(r5, e, t) {
  var n, i = {}, s = null, o = null;
  t !== void 0 && (s = "" + t), e.key !== void 0 && (s = "" + e.key), e.ref !== void 0 && (o = e.ref);
  for (n in e) Cx.call(e, n) && !Px.hasOwnProperty(n) && (i[n] = e[n]);
  if (r5 && r5.defaultProps) for (n in e = r5.defaultProps, e) i[n] === void 0 && (i[n] = e[n]);
  return { $$typeof: bx, type: r5, key: s, ref: o, props: i, _owner: Ix.current };
}
Gl.Fragment = Ax;
Gl.jsx = ay;
Gl.jsxs = ay;
Zg.exports = Gl;
var R = Zg.exports, Bh = {}, ly = { exports: {} }, xt = {}, uy = { exports: {} }, hy = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(r5) {
  function e(M, H) {
    var b = M.length;
    M.push(H);
    e: for (; 0 < b; ) {
      var U = b - 1 >>> 1, Z = M[U];
      if (0 < i(Z, H)) M[U] = H, M[b] = Z, b = U;
      else break e;
    }
  }
  function t(M) {
    return M.length === 0 ? null : M[0];
  }
  function n(M) {
    if (M.length === 0) return null;
    var H = M[0], b = M.pop();
    if (b !== H) {
      M[0] = b;
      e: for (var U = 0, Z = M.length, ae = Z >>> 1; U < ae; ) {
        var V = 2 * (U + 1) - 1, oe = M[V], re = V + 1, he = M[re];
        if (0 > i(oe, b)) re < Z && 0 > i(he, oe) ? (M[U] = he, M[re] = b, U = re) : (M[U] = oe, M[V] = b, U = V);
        else if (re < Z && 0 > i(he, b)) M[U] = he, M[re] = b, U = re;
        else break e;
      }
    }
    return H;
  }
  function i(M, H) {
    var b = M.sortIndex - H.sortIndex;
    return b !== 0 ? b : M.id - H.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    r5.unstable_now = function() {
      return s.now();
    };
  } else {
    var o = Date, a = o.now();
    r5.unstable_now = function() {
      return o.now() - a;
    };
  }
  var l = [], u = [], h = 1, c = null, d = 3, f = false, p = false, v = false, _ = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(M) {
    for (var H = t(u); H !== null; ) {
      if (H.callback === null) n(u);
      else if (H.startTime <= M) n(u), H.sortIndex = H.expirationTime, e(l, H);
      else break;
      H = t(u);
    }
  }
  function x(M) {
    if (v = false, m(M), !p) if (t(l) !== null) p = true, J(w);
    else {
      var H = t(u);
      H !== null && O(x, H.startTime - M);
    }
  }
  function w(M, H) {
    p = false, v && (v = false, g(E), E = -1), f = true;
    var b = d;
    try {
      for (m(H), c = t(l); c !== null && (!(c.expirationTime > H) || M && !D()); ) {
        var U = c.callback;
        if (typeof U == "function") {
          c.callback = null, d = c.priorityLevel;
          var Z = U(c.expirationTime <= H);
          H = r5.unstable_now(), typeof Z == "function" ? c.callback = Z : c === t(l) && n(l), m(H);
        } else n(l);
        c = t(l);
      }
      if (c !== null) var ae = true;
      else {
        var V = t(u);
        V !== null && O(x, V.startTime - H), ae = false;
      }
      return ae;
    } finally {
      c = null, d = b, f = false;
    }
  }
  var S = false, T = null, E = -1, I = 5, P = -1;
  function D() {
    return !(r5.unstable_now() - P < I);
  }
  function N() {
    if (T !== null) {
      var M = r5.unstable_now();
      P = M;
      var H = true;
      try {
        H = T(true, M);
      } finally {
        H ? A() : (S = false, T = null);
      }
    } else S = false;
  }
  var A;
  if (typeof y == "function") A = function() {
    y(N);
  };
  else if (typeof MessageChannel < "u") {
    var C = new MessageChannel(), q = C.port2;
    C.port1.onmessage = N, A = function() {
      q.postMessage(null);
    };
  } else A = function() {
    _(N, 0);
  };
  function J(M) {
    T = M, S || (S = true, A());
  }
  function O(M, H) {
    E = _(function() {
      M(r5.unstable_now());
    }, H);
  }
  r5.unstable_IdlePriority = 5, r5.unstable_ImmediatePriority = 1, r5.unstable_LowPriority = 4, r5.unstable_NormalPriority = 3, r5.unstable_Profiling = null, r5.unstable_UserBlockingPriority = 2, r5.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, r5.unstable_continueExecution = function() {
    p || f || (p = true, J(w));
  }, r5.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < M ? Math.floor(1e3 / M) : 5;
  }, r5.unstable_getCurrentPriorityLevel = function() {
    return d;
  }, r5.unstable_getFirstCallbackNode = function() {
    return t(l);
  }, r5.unstable_next = function(M) {
    switch (d) {
      case 1:
      case 2:
      case 3:
        var H = 3;
        break;
      default:
        H = d;
    }
    var b = d;
    d = H;
    try {
      return M();
    } finally {
      d = b;
    }
  }, r5.unstable_pauseExecution = function() {
  }, r5.unstable_requestPaint = function() {
  }, r5.unstable_runWithPriority = function(M, H) {
    switch (M) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        M = 3;
    }
    var b = d;
    d = M;
    try {
      return H();
    } finally {
      d = b;
    }
  }, r5.unstable_scheduleCallback = function(M, H, b) {
    var U = r5.unstable_now();
    switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? U + b : U) : b = U, M) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = b + Z, M = { id: h++, callback: H, priorityLevel: M, startTime: b, expirationTime: Z, sortIndex: -1 }, b > U ? (M.sortIndex = b, e(u, M), t(l) === null && M === t(u) && (v ? (g(E), E = -1) : v = true, O(x, b - U))) : (M.sortIndex = Z, e(l, M), p || f || (p = true, J(w))), M;
  }, r5.unstable_shouldYield = D, r5.unstable_wrapCallback = function(M) {
    var H = d;
    return function() {
      var b = d;
      d = H;
      try {
        return M.apply(this, arguments);
      } finally {
        d = b;
      }
    };
  };
})(hy);
uy.exports = hy;
var Rx = uy.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Mx = $, _t = Rx;
function k(r5) {
  for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + r5, t = 1; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + r5 + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var cy = /* @__PURE__ */ new Set(), Ks = {};
function Yn(r5, e) {
  zi(r5, e), zi(r5 + "Capture", e);
}
function zi(r5, e) {
  for (Ks[r5] = e, r5 = 0; r5 < e.length; r5++) cy.add(e[r5]);
}
var Ir = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Oh = Object.prototype.hasOwnProperty, kx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Wf = {}, Xf = {};
function Dx(r5) {
  return Oh.call(Xf, r5) ? true : Oh.call(Wf, r5) ? false : kx.test(r5) ? Xf[r5] = true : (Wf[r5] = true, false);
}
function Fx(r5, e, t, n) {
  if (t !== null && t.type === 0) return false;
  switch (typeof e) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return n ? false : t !== null ? !t.acceptsBooleans : (r5 = r5.toLowerCase().slice(0, 5), r5 !== "data-" && r5 !== "aria-");
    default:
      return false;
  }
}
function Nx(r5, e, t, n) {
  if (e === null || typeof e > "u" || Fx(r5, e, t, n)) return true;
  if (n) return false;
  if (t !== null) switch (t.type) {
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
function at(r5, e, t, n, i, s, o) {
  this.acceptsBooleans = e === 2 || e === 3 || e === 4, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = t, this.propertyName = r5, this.type = e, this.sanitizeURL = s, this.removeEmptyString = o;
}
var Ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r5) {
  Ke[r5] = new at(r5, 0, false, r5, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r5) {
  var e = r5[0];
  Ke[e] = new at(e, 1, false, r5[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r5) {
  Ke[r5] = new at(r5, 2, false, r5.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r5) {
  Ke[r5] = new at(r5, 2, false, r5, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r5) {
  Ke[r5] = new at(r5, 3, false, r5.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(r5) {
  Ke[r5] = new at(r5, 3, true, r5, null, false, false);
});
["capture", "download"].forEach(function(r5) {
  Ke[r5] = new at(r5, 4, false, r5, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(r5) {
  Ke[r5] = new at(r5, 6, false, r5, null, false, false);
});
["rowSpan", "start"].forEach(function(r5) {
  Ke[r5] = new at(r5, 5, false, r5.toLowerCase(), null, false, false);
});
var Od = /[\-:]([a-z])/g;
function Ld(r5) {
  return r5[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r5) {
  var e = r5.replace(Od, Ld);
  Ke[e] = new at(e, 1, false, r5, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r5) {
  var e = r5.replace(Od, Ld);
  Ke[e] = new at(e, 1, false, r5, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(r5) {
  var e = r5.replace(Od, Ld);
  Ke[e] = new at(e, 1, false, r5, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(r5) {
  Ke[r5] = new at(r5, 1, false, r5.toLowerCase(), null, false, false);
});
Ke.xlinkHref = new at("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(r5) {
  Ke[r5] = new at(r5, 1, false, r5.toLowerCase(), null, true, true);
});
function Ud(r5, e, t, n) {
  var i = Ke.hasOwnProperty(e) ? Ke[e] : null;
  (i !== null ? i.type !== 0 : n || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (Nx(e, t, i, n) && (t = null), n || i === null ? Dx(e) && (t === null ? r5.removeAttribute(e) : r5.setAttribute(e, "" + t)) : i.mustUseProperty ? r5[i.propertyName] = t === null ? i.type === 3 ? false : "" : t : (e = i.attributeName, n = i.attributeNamespace, t === null ? r5.removeAttribute(e) : (i = i.type, t = i === 3 || i === 4 && t === true ? "" : "" + t, n ? r5.setAttributeNS(n, e, t) : r5.setAttribute(e, t))));
}
var Nr = Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Fo = Symbol.for("react.element"), di = Symbol.for("react.portal"), fi = Symbol.for("react.fragment"), Gd = Symbol.for("react.strict_mode"), Lh = Symbol.for("react.profiler"), dy = Symbol.for("react.provider"), fy = Symbol.for("react.context"), zd = Symbol.for("react.forward_ref"), Uh = Symbol.for("react.suspense"), Gh = Symbol.for("react.suspense_list"), Hd = Symbol.for("react.memo"), Gr = Symbol.for("react.lazy"), py = Symbol.for("react.offscreen"), Yf = Symbol.iterator;
function ss(r5) {
  return r5 === null || typeof r5 != "object" ? null : (r5 = Yf && r5[Yf] || r5["@@iterator"], typeof r5 == "function" ? r5 : null);
}
var Se = Object.assign, yu;
function xs(r5) {
  if (yu === void 0) try {
    throw Error();
  } catch (t) {
    var e = t.stack.trim().match(/\n( *(at )?)/);
    yu = e && e[1] || "";
  }
  return `
` + yu + r5;
}
var vu = false;
function _u(r5, e) {
  if (!r5 || vu) return "";
  vu = true;
  var t = Error.prepareStackTrace;
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
      Reflect.construct(r5, [], e);
    } else {
      try {
        e.call();
      } catch (u) {
        n = u;
      }
      r5.call(e.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      r5();
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
            return r5.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", r5.displayName)), l;
          }
        while (1 <= o && 0 <= a);
        break;
      }
    }
  } finally {
    vu = false, Error.prepareStackTrace = t;
  }
  return (r5 = r5 ? r5.displayName || r5.name : "") ? xs(r5) : "";
}
function Bx(r5) {
  switch (r5.tag) {
    case 5:
      return xs(r5.type);
    case 16:
      return xs("Lazy");
    case 13:
      return xs("Suspense");
    case 19:
      return xs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return r5 = _u(r5.type, false), r5;
    case 11:
      return r5 = _u(r5.type.render, false), r5;
    case 1:
      return r5 = _u(r5.type, true), r5;
    default:
      return "";
  }
}
function zh(r5) {
  if (r5 == null) return null;
  if (typeof r5 == "function") return r5.displayName || r5.name || null;
  if (typeof r5 == "string") return r5;
  switch (r5) {
    case fi:
      return "Fragment";
    case di:
      return "Portal";
    case Lh:
      return "Profiler";
    case Gd:
      return "StrictMode";
    case Uh:
      return "Suspense";
    case Gh:
      return "SuspenseList";
  }
  if (typeof r5 == "object") switch (r5.$$typeof) {
    case fy:
      return (r5.displayName || "Context") + ".Consumer";
    case dy:
      return (r5._context.displayName || "Context") + ".Provider";
    case zd:
      var e = r5.render;
      return r5 = r5.displayName, r5 || (r5 = e.displayName || e.name || "", r5 = r5 !== "" ? "ForwardRef(" + r5 + ")" : "ForwardRef"), r5;
    case Hd:
      return e = r5.displayName || null, e !== null ? e : zh(r5.type) || "Memo";
    case Gr:
      e = r5._payload, r5 = r5._init;
      try {
        return zh(r5(e));
      } catch {
      }
  }
  return null;
}
function Ox(r5) {
  var e = r5.type;
  switch (r5.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return r5 = e.render, r5 = r5.displayName || r5.name || "", e.displayName || (r5 !== "" ? "ForwardRef(" + r5 + ")" : "ForwardRef");
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
      return zh(e);
    case 8:
      return e === Gd ? "StrictMode" : "Mode";
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
function an(r5) {
  switch (typeof r5) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return r5;
    case "object":
      return r5;
    default:
      return "";
  }
}
function my(r5) {
  var e = r5.type;
  return (r5 = r5.nodeName) && r5.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function Lx(r5) {
  var e = my(r5) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(r5.constructor.prototype, e), n = "" + r5[e];
  if (!r5.hasOwnProperty(e) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var i = t.get, s = t.set;
    return Object.defineProperty(r5, e, { configurable: true, get: function() {
      return i.call(this);
    }, set: function(o) {
      n = "" + o, s.call(this, o);
    } }), Object.defineProperty(r5, e, { enumerable: t.enumerable }), { getValue: function() {
      return n;
    }, setValue: function(o) {
      n = "" + o;
    }, stopTracking: function() {
      r5._valueTracker = null, delete r5[e];
    } };
  }
}
function No(r5) {
  r5._valueTracker || (r5._valueTracker = Lx(r5));
}
function gy(r5) {
  if (!r5) return false;
  var e = r5._valueTracker;
  if (!e) return true;
  var t = e.getValue(), n = "";
  return r5 && (n = my(r5) ? r5.checked ? "true" : "false" : r5.value), r5 = n, r5 !== t ? (e.setValue(r5), true) : false;
}
function Ka(r5) {
  if (r5 = r5 || (typeof document < "u" ? document : void 0), typeof r5 > "u") return null;
  try {
    return r5.activeElement || r5.body;
  } catch {
    return r5.body;
  }
}
function Hh(r5, e) {
  var t = e.checked;
  return Se({}, e, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? r5._wrapperState.initialChecked });
}
function Kf(r5, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue, n = e.checked != null ? e.checked : e.defaultChecked;
  t = an(e.value != null ? e.value : t), r5._wrapperState = { initialChecked: n, initialValue: t, controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null };
}
function yy(r5, e) {
  e = e.checked, e != null && Ud(r5, "checked", e, false);
}
function $h(r5, e) {
  yy(r5, e);
  var t = an(e.value), n = e.type;
  if (t != null) n === "number" ? (t === 0 && r5.value === "" || r5.value != t) && (r5.value = "" + t) : r5.value !== "" + t && (r5.value = "" + t);
  else if (n === "submit" || n === "reset") {
    r5.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value") ? jh(r5, e.type, t) : e.hasOwnProperty("defaultValue") && jh(r5, e.type, an(e.defaultValue)), e.checked == null && e.defaultChecked != null && (r5.defaultChecked = !!e.defaultChecked);
}
function qf(r5, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var n = e.type;
    if (!(n !== "submit" && n !== "reset" || e.value !== void 0 && e.value !== null)) return;
    e = "" + r5._wrapperState.initialValue, t || e === r5.value || (r5.value = e), r5.defaultValue = e;
  }
  t = r5.name, t !== "" && (r5.name = ""), r5.defaultChecked = !!r5._wrapperState.initialChecked, t !== "" && (r5.name = t);
}
function jh(r5, e, t) {
  (e !== "number" || Ka(r5.ownerDocument) !== r5) && (t == null ? r5.defaultValue = "" + r5._wrapperState.initialValue : r5.defaultValue !== "" + t && (r5.defaultValue = "" + t));
}
var ws = Array.isArray;
function Ci(r5, e, t, n) {
  if (r5 = r5.options, e) {
    e = {};
    for (var i = 0; i < t.length; i++) e["$" + t[i]] = true;
    for (t = 0; t < r5.length; t++) i = e.hasOwnProperty("$" + r5[t].value), r5[t].selected !== i && (r5[t].selected = i), i && n && (r5[t].defaultSelected = true);
  } else {
    for (t = "" + an(t), e = null, i = 0; i < r5.length; i++) {
      if (r5[i].value === t) {
        r5[i].selected = true, n && (r5[i].defaultSelected = true);
        return;
      }
      e !== null || r5[i].disabled || (e = r5[i]);
    }
    e !== null && (e.selected = true);
  }
}
function Vh(r5, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(k(91));
  return Se({}, e, { value: void 0, defaultValue: void 0, children: "" + r5._wrapperState.initialValue });
}
function Zf(r5, e) {
  var t = e.value;
  if (t == null) {
    if (t = e.children, e = e.defaultValue, t != null) {
      if (e != null) throw Error(k(92));
      if (ws(t)) {
        if (1 < t.length) throw Error(k(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), t = e;
  }
  r5._wrapperState = { initialValue: an(t) };
}
function vy(r5, e) {
  var t = an(e.value), n = an(e.defaultValue);
  t != null && (t = "" + t, t !== r5.value && (r5.value = t), e.defaultValue == null && r5.defaultValue !== t && (r5.defaultValue = t)), n != null && (r5.defaultValue = "" + n);
}
function Qf(r5) {
  var e = r5.textContent;
  e === r5._wrapperState.initialValue && e !== "" && e !== null && (r5.value = e);
}
function _y(r5) {
  switch (r5) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wh(r5, e) {
  return r5 == null || r5 === "http://www.w3.org/1999/xhtml" ? _y(e) : r5 === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : r5;
}
var Bo, xy = function(r5) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, t, n, i) {
    MSApp.execUnsafeLocalFunction(function() {
      return r5(e, t, n, i);
    });
  } : r5;
}(function(r5, e) {
  if (r5.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in r5) r5.innerHTML = e;
  else {
    for (Bo = Bo || document.createElement("div"), Bo.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = Bo.firstChild; r5.firstChild; ) r5.removeChild(r5.firstChild);
    for (; e.firstChild; ) r5.appendChild(e.firstChild);
  }
});
function qs(r5, e) {
  if (e) {
    var t = r5.firstChild;
    if (t && t === r5.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  r5.textContent = e;
}
var Ds = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, Ux = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ds).forEach(function(r5) {
  Ux.forEach(function(e) {
    e = e + r5.charAt(0).toUpperCase() + r5.substring(1), Ds[e] = Ds[r5];
  });
});
function wy(r5, e, t) {
  return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || Ds.hasOwnProperty(r5) && Ds[r5] ? ("" + e).trim() : e + "px";
}
function Ey(r5, e) {
  r5 = r5.style;
  for (var t in e) if (e.hasOwnProperty(t)) {
    var n = t.indexOf("--") === 0, i = wy(t, e[t], n);
    t === "float" && (t = "cssFloat"), n ? r5.setProperty(t, i) : r5[t] = i;
  }
}
var Gx = Se({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function Xh(r5, e) {
  if (e) {
    if (Gx[r5] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(k(137, r5));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(k(60));
      if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(k(62));
  }
}
function Yh(r5, e) {
  if (r5.indexOf("-") === -1) return typeof e.is == "string";
  switch (r5) {
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
var Kh = null;
function $d(r5) {
  return r5 = r5.target || r5.srcElement || window, r5.correspondingUseElement && (r5 = r5.correspondingUseElement), r5.nodeType === 3 ? r5.parentNode : r5;
}
var qh = null, Ii = null, Pi = null;
function Jf(r5) {
  if (r5 = To(r5)) {
    if (typeof qh != "function") throw Error(k(280));
    var e = r5.stateNode;
    e && (e = Vl(e), qh(r5.stateNode, r5.type, e));
  }
}
function Ty(r5) {
  Ii ? Pi ? Pi.push(r5) : Pi = [r5] : Ii = r5;
}
function Sy() {
  if (Ii) {
    var r5 = Ii, e = Pi;
    if (Pi = Ii = null, Jf(r5), e) for (r5 = 0; r5 < e.length; r5++) Jf(e[r5]);
  }
}
function by(r5, e) {
  return r5(e);
}
function Ay() {
}
var xu = false;
function Cy(r5, e, t) {
  if (xu) return r5(e, t);
  xu = true;
  try {
    return by(r5, e, t);
  } finally {
    xu = false, (Ii !== null || Pi !== null) && (Ay(), Sy());
  }
}
function Zs(r5, e) {
  var t = r5.stateNode;
  if (t === null) return null;
  var n = Vl(t);
  if (n === null) return null;
  t = n[e];
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
      (n = !n.disabled) || (r5 = r5.type, n = !(r5 === "button" || r5 === "input" || r5 === "select" || r5 === "textarea")), r5 = !n;
      break e;
    default:
      r5 = false;
  }
  if (r5) return null;
  if (t && typeof t != "function") throw Error(k(231, e, typeof t));
  return t;
}
var Zh = false;
if (Ir) try {
  var os = {};
  Object.defineProperty(os, "passive", { get: function() {
    Zh = true;
  } }), window.addEventListener("test", os, os), window.removeEventListener("test", os, os);
} catch {
  Zh = false;
}
function zx(r5, e, t, n, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, u);
  } catch (h) {
    this.onError(h);
  }
}
var Fs = false, qa = null, Za = false, Qh = null, Hx = { onError: function(r5) {
  Fs = true, qa = r5;
} };
function $x(r5, e, t, n, i, s, o, a, l) {
  Fs = false, qa = null, zx.apply(Hx, arguments);
}
function jx(r5, e, t, n, i, s, o, a, l) {
  if ($x.apply(this, arguments), Fs) {
    if (Fs) {
      var u = qa;
      Fs = false, qa = null;
    } else throw Error(k(198));
    Za || (Za = true, Qh = u);
  }
}
function Kn(r5) {
  var e = r5, t = r5;
  if (r5.alternate) for (; e.return; ) e = e.return;
  else {
    r5 = e;
    do
      e = r5, e.flags & 4098 && (t = e.return), r5 = e.return;
    while (r5);
  }
  return e.tag === 3 ? t : null;
}
function Iy(r5) {
  if (r5.tag === 13) {
    var e = r5.memoizedState;
    if (e === null && (r5 = r5.alternate, r5 !== null && (e = r5.memoizedState)), e !== null) return e.dehydrated;
  }
  return null;
}
function ep(r5) {
  if (Kn(r5) !== r5) throw Error(k(188));
}
function Vx(r5) {
  var e = r5.alternate;
  if (!e) {
    if (e = Kn(r5), e === null) throw Error(k(188));
    return e !== r5 ? null : r5;
  }
  for (var t = r5, n = e; ; ) {
    var i = t.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (n = i.return, n !== null) {
        t = n;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === t) return ep(i), r5;
        if (s === n) return ep(i), e;
        s = s.sibling;
      }
      throw Error(k(188));
    }
    if (t.return !== n.return) t = i, n = s;
    else {
      for (var o = false, a = i.child; a; ) {
        if (a === t) {
          o = true, t = i, n = s;
          break;
        }
        if (a === n) {
          o = true, n = i, t = s;
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === t) {
            o = true, t = s, n = i;
            break;
          }
          if (a === n) {
            o = true, n = s, t = i;
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (t.alternate !== n) throw Error(k(190));
  }
  if (t.tag !== 3) throw Error(k(188));
  return t.stateNode.current === t ? r5 : e;
}
function Py(r5) {
  return r5 = Vx(r5), r5 !== null ? Ry(r5) : null;
}
function Ry(r5) {
  if (r5.tag === 5 || r5.tag === 6) return r5;
  for (r5 = r5.child; r5 !== null; ) {
    var e = Ry(r5);
    if (e !== null) return e;
    r5 = r5.sibling;
  }
  return null;
}
var My = _t.unstable_scheduleCallback, tp = _t.unstable_cancelCallback, Wx = _t.unstable_shouldYield, Xx = _t.unstable_requestPaint, Me = _t.unstable_now, Yx = _t.unstable_getCurrentPriorityLevel, jd = _t.unstable_ImmediatePriority, ky = _t.unstable_UserBlockingPriority, Qa = _t.unstable_NormalPriority, Kx = _t.unstable_LowPriority, Dy = _t.unstable_IdlePriority, zl = null, ur = null;
function qx(r5) {
  if (ur && typeof ur.onCommitFiberRoot == "function") try {
    ur.onCommitFiberRoot(zl, r5, void 0, (r5.current.flags & 128) === 128);
  } catch {
  }
}
var zt = Math.clz32 ? Math.clz32 : Jx, Zx = Math.log, Qx = Math.LN2;
function Jx(r5) {
  return r5 >>>= 0, r5 === 0 ? 32 : 31 - (Zx(r5) / Qx | 0) | 0;
}
var Oo = 64, Lo = 4194304;
function Es(r5) {
  switch (r5 & -r5) {
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
      return r5 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return r5 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return r5;
  }
}
function Ja(r5, e) {
  var t = r5.pendingLanes;
  if (t === 0) return 0;
  var n = 0, i = r5.suspendedLanes, s = r5.pingedLanes, o = t & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? n = Es(a) : (s &= o, s !== 0 && (n = Es(s)));
  } else o = t & ~i, o !== 0 ? n = Es(o) : s !== 0 && (n = Es(s));
  if (n === 0) return 0;
  if (e !== 0 && e !== n && !(e & i) && (i = n & -n, s = e & -e, i >= s || i === 16 && (s & 4194240) !== 0)) return e;
  if (n & 4 && (n |= t & 16), e = r5.entangledLanes, e !== 0) for (r5 = r5.entanglements, e &= n; 0 < e; ) t = 31 - zt(e), i = 1 << t, n |= r5[t], e &= ~i;
  return n;
}
function ew(r5, e) {
  switch (r5) {
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
function tw(r5, e) {
  for (var t = r5.suspendedLanes, n = r5.pingedLanes, i = r5.expirationTimes, s = r5.pendingLanes; 0 < s; ) {
    var o = 31 - zt(s), a = 1 << o, l = i[o];
    l === -1 ? (!(a & t) || a & n) && (i[o] = ew(a, e)) : l <= e && (r5.expiredLanes |= a), s &= ~a;
  }
}
function Jh(r5) {
  return r5 = r5.pendingLanes & -1073741825, r5 !== 0 ? r5 : r5 & 1073741824 ? 1073741824 : 0;
}
function Fy() {
  var r5 = Oo;
  return Oo <<= 1, !(Oo & 4194240) && (Oo = 64), r5;
}
function wu(r5) {
  for (var e = [], t = 0; 31 > t; t++) e.push(r5);
  return e;
}
function wo(r5, e, t) {
  r5.pendingLanes |= e, e !== 536870912 && (r5.suspendedLanes = 0, r5.pingedLanes = 0), r5 = r5.eventTimes, e = 31 - zt(e), r5[e] = t;
}
function rw(r5, e) {
  var t = r5.pendingLanes & ~e;
  r5.pendingLanes = e, r5.suspendedLanes = 0, r5.pingedLanes = 0, r5.expiredLanes &= e, r5.mutableReadLanes &= e, r5.entangledLanes &= e, e = r5.entanglements;
  var n = r5.eventTimes;
  for (r5 = r5.expirationTimes; 0 < t; ) {
    var i = 31 - zt(t), s = 1 << i;
    e[i] = 0, n[i] = -1, r5[i] = -1, t &= ~s;
  }
}
function Vd(r5, e) {
  var t = r5.entangledLanes |= e;
  for (r5 = r5.entanglements; t; ) {
    var n = 31 - zt(t), i = 1 << n;
    i & e | r5[n] & e && (r5[n] |= e), t &= ~i;
  }
}
var ce = 0;
function Ny(r5) {
  return r5 &= -r5, 1 < r5 ? 4 < r5 ? r5 & 268435455 ? 16 : 536870912 : 4 : 1;
}
var By, Wd, Oy, Ly, Uy, ec = false, Uo = [], Zr = null, Qr = null, Jr = null, Qs = /* @__PURE__ */ new Map(), Js = /* @__PURE__ */ new Map(), $r = [], nw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rp(r5, e) {
  switch (r5) {
    case "focusin":
    case "focusout":
      Zr = null;
      break;
    case "dragenter":
    case "dragleave":
      Qr = null;
      break;
    case "mouseover":
    case "mouseout":
      Jr = null;
      break;
    case "pointerover":
    case "pointerout":
      Qs.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Js.delete(e.pointerId);
  }
}
function as(r5, e, t, n, i, s) {
  return r5 === null || r5.nativeEvent !== s ? (r5 = { blockedOn: e, domEventName: t, eventSystemFlags: n, nativeEvent: s, targetContainers: [i] }, e !== null && (e = To(e), e !== null && Wd(e)), r5) : (r5.eventSystemFlags |= n, e = r5.targetContainers, i !== null && e.indexOf(i) === -1 && e.push(i), r5);
}
function iw(r5, e, t, n, i) {
  switch (e) {
    case "focusin":
      return Zr = as(Zr, r5, e, t, n, i), true;
    case "dragenter":
      return Qr = as(Qr, r5, e, t, n, i), true;
    case "mouseover":
      return Jr = as(Jr, r5, e, t, n, i), true;
    case "pointerover":
      var s = i.pointerId;
      return Qs.set(s, as(Qs.get(s) || null, r5, e, t, n, i)), true;
    case "gotpointercapture":
      return s = i.pointerId, Js.set(s, as(Js.get(s) || null, r5, e, t, n, i)), true;
  }
  return false;
}
function Gy(r5) {
  var e = Mn(r5.target);
  if (e !== null) {
    var t = Kn(e);
    if (t !== null) {
      if (e = t.tag, e === 13) {
        if (e = Iy(t), e !== null) {
          r5.blockedOn = e, Uy(r5.priority, function() {
            Oy(t);
          });
          return;
        }
      } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        r5.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  r5.blockedOn = null;
}
function Ca(r5) {
  if (r5.blockedOn !== null) return false;
  for (var e = r5.targetContainers; 0 < e.length; ) {
    var t = tc(r5.domEventName, r5.eventSystemFlags, e[0], r5.nativeEvent);
    if (t === null) {
      t = r5.nativeEvent;
      var n = new t.constructor(t.type, t);
      Kh = n, t.target.dispatchEvent(n), Kh = null;
    } else return e = To(t), e !== null && Wd(e), r5.blockedOn = t, false;
    e.shift();
  }
  return true;
}
function np(r5, e, t) {
  Ca(r5) && t.delete(e);
}
function sw() {
  ec = false, Zr !== null && Ca(Zr) && (Zr = null), Qr !== null && Ca(Qr) && (Qr = null), Jr !== null && Ca(Jr) && (Jr = null), Qs.forEach(np), Js.forEach(np);
}
function ls(r5, e) {
  r5.blockedOn === e && (r5.blockedOn = null, ec || (ec = true, _t.unstable_scheduleCallback(_t.unstable_NormalPriority, sw)));
}
function eo(r5) {
  function e(i) {
    return ls(i, r5);
  }
  if (0 < Uo.length) {
    ls(Uo[0], r5);
    for (var t = 1; t < Uo.length; t++) {
      var n = Uo[t];
      n.blockedOn === r5 && (n.blockedOn = null);
    }
  }
  for (Zr !== null && ls(Zr, r5), Qr !== null && ls(Qr, r5), Jr !== null && ls(Jr, r5), Qs.forEach(e), Js.forEach(e), t = 0; t < $r.length; t++) n = $r[t], n.blockedOn === r5 && (n.blockedOn = null);
  for (; 0 < $r.length && (t = $r[0], t.blockedOn === null); ) Gy(t), t.blockedOn === null && $r.shift();
}
var Ri = Nr.ReactCurrentBatchConfig, el = true;
function ow(r5, e, t, n) {
  var i = ce, s = Ri.transition;
  Ri.transition = null;
  try {
    ce = 1, Xd(r5, e, t, n);
  } finally {
    ce = i, Ri.transition = s;
  }
}
function aw(r5, e, t, n) {
  var i = ce, s = Ri.transition;
  Ri.transition = null;
  try {
    ce = 4, Xd(r5, e, t, n);
  } finally {
    ce = i, Ri.transition = s;
  }
}
function Xd(r5, e, t, n) {
  if (el) {
    var i = tc(r5, e, t, n);
    if (i === null) Mu(r5, e, n, tl, t), rp(r5, n);
    else if (iw(i, r5, e, t, n)) n.stopPropagation();
    else if (rp(r5, n), e & 4 && -1 < nw.indexOf(r5)) {
      for (; i !== null; ) {
        var s = To(i);
        if (s !== null && By(s), s = tc(r5, e, t, n), s === null && Mu(r5, e, n, tl, t), s === i) break;
        i = s;
      }
      i !== null && n.stopPropagation();
    } else Mu(r5, e, n, null, t);
  }
}
var tl = null;
function tc(r5, e, t, n) {
  if (tl = null, r5 = $d(n), r5 = Mn(r5), r5 !== null) if (e = Kn(r5), e === null) r5 = null;
  else if (t = e.tag, t === 13) {
    if (r5 = Iy(e), r5 !== null) return r5;
    r5 = null;
  } else if (t === 3) {
    if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
    r5 = null;
  } else e !== r5 && (r5 = null);
  return tl = r5, null;
}
function zy(r5) {
  switch (r5) {
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
      switch (Yx()) {
        case jd:
          return 1;
        case ky:
          return 4;
        case Qa:
        case Kx:
          return 16;
        case Dy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wr = null, Yd = null, Ia = null;
function Hy() {
  if (Ia) return Ia;
  var r5, e = Yd, t = e.length, n, i = "value" in Wr ? Wr.value : Wr.textContent, s = i.length;
  for (r5 = 0; r5 < t && e[r5] === i[r5]; r5++) ;
  var o = t - r5;
  for (n = 1; n <= o && e[t - n] === i[s - n]; n++) ;
  return Ia = i.slice(r5, 1 < n ? 1 - n : void 0);
}
function Pa(r5) {
  var e = r5.keyCode;
  return "charCode" in r5 ? (r5 = r5.charCode, r5 === 0 && e === 13 && (r5 = 13)) : r5 = e, r5 === 10 && (r5 = 13), 32 <= r5 || r5 === 13 ? r5 : 0;
}
function Go() {
  return true;
}
function ip() {
  return false;
}
function wt(r5) {
  function e(t, n, i, s, o) {
    this._reactName = t, this._targetInst = i, this.type = n, this.nativeEvent = s, this.target = o, this.currentTarget = null;
    for (var a in r5) r5.hasOwnProperty(a) && (t = r5[a], this[a] = t ? t(s) : s[a]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === false) ? Go : ip, this.isPropagationStopped = ip, this;
  }
  return Se(e.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = false), this.isDefaultPrevented = Go);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = true), this.isPropagationStopped = Go);
  }, persist: function() {
  }, isPersistent: Go }), e;
}
var Qi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(r5) {
  return r5.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Kd = wt(Qi), Eo = Se({}, Qi, { view: 0, detail: 0 }), lw = wt(Eo), Eu, Tu, us, Hl = Se({}, Eo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: qd, button: 0, buttons: 0, relatedTarget: function(r5) {
  return r5.relatedTarget === void 0 ? r5.fromElement === r5.srcElement ? r5.toElement : r5.fromElement : r5.relatedTarget;
}, movementX: function(r5) {
  return "movementX" in r5 ? r5.movementX : (r5 !== us && (us && r5.type === "mousemove" ? (Eu = r5.screenX - us.screenX, Tu = r5.screenY - us.screenY) : Tu = Eu = 0, us = r5), Eu);
}, movementY: function(r5) {
  return "movementY" in r5 ? r5.movementY : Tu;
} }), sp = wt(Hl), uw = Se({}, Hl, { dataTransfer: 0 }), hw = wt(uw), cw = Se({}, Eo, { relatedTarget: 0 }), Su = wt(cw), dw = Se({}, Qi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fw = wt(dw), pw = Se({}, Qi, { clipboardData: function(r5) {
  return "clipboardData" in r5 ? r5.clipboardData : window.clipboardData;
} }), mw = wt(pw), gw = Se({}, Qi, { data: 0 }), op = wt(gw), yw = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, vw = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, _w = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function xw(r5) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(r5) : (r5 = _w[r5]) ? !!e[r5] : false;
}
function qd() {
  return xw;
}
var ww = Se({}, Eo, { key: function(r5) {
  if (r5.key) {
    var e = yw[r5.key] || r5.key;
    if (e !== "Unidentified") return e;
  }
  return r5.type === "keypress" ? (r5 = Pa(r5), r5 === 13 ? "Enter" : String.fromCharCode(r5)) : r5.type === "keydown" || r5.type === "keyup" ? vw[r5.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: qd, charCode: function(r5) {
  return r5.type === "keypress" ? Pa(r5) : 0;
}, keyCode: function(r5) {
  return r5.type === "keydown" || r5.type === "keyup" ? r5.keyCode : 0;
}, which: function(r5) {
  return r5.type === "keypress" ? Pa(r5) : r5.type === "keydown" || r5.type === "keyup" ? r5.keyCode : 0;
} }), Ew = wt(ww), Tw = Se({}, Hl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ap = wt(Tw), Sw = Se({}, Eo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: qd }), bw = wt(Sw), Aw = Se({}, Qi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Cw = wt(Aw), Iw = Se({}, Hl, { deltaX: function(r5) {
  return "deltaX" in r5 ? r5.deltaX : "wheelDeltaX" in r5 ? -r5.wheelDeltaX : 0;
}, deltaY: function(r5) {
  return "deltaY" in r5 ? r5.deltaY : "wheelDeltaY" in r5 ? -r5.wheelDeltaY : "wheelDelta" in r5 ? -r5.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), Pw = wt(Iw), Rw = [9, 13, 27, 32], Zd = Ir && "CompositionEvent" in window, Ns = null;
Ir && "documentMode" in document && (Ns = document.documentMode);
var Mw = Ir && "TextEvent" in window && !Ns, $y = Ir && (!Zd || Ns && 8 < Ns && 11 >= Ns), lp = " ", up = false;
function jy(r5, e) {
  switch (r5) {
    case "keyup":
      return Rw.indexOf(e.keyCode) !== -1;
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
function Vy(r5) {
  return r5 = r5.detail, typeof r5 == "object" && "data" in r5 ? r5.data : null;
}
var pi = false;
function kw(r5, e) {
  switch (r5) {
    case "compositionend":
      return Vy(e);
    case "keypress":
      return e.which !== 32 ? null : (up = true, lp);
    case "textInput":
      return r5 = e.data, r5 === lp && up ? null : r5;
    default:
      return null;
  }
}
function Dw(r5, e) {
  if (pi) return r5 === "compositionend" || !Zd && jy(r5, e) ? (r5 = Hy(), Ia = Yd = Wr = null, pi = false, r5) : null;
  switch (r5) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return $y && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Fw = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function hp(r5) {
  var e = r5 && r5.nodeName && r5.nodeName.toLowerCase();
  return e === "input" ? !!Fw[r5.type] : e === "textarea";
}
function Wy(r5, e, t, n) {
  Ty(n), e = rl(e, "onChange"), 0 < e.length && (t = new Kd("onChange", "change", null, t, n), r5.push({ event: t, listeners: e }));
}
var Bs = null, to = null;
function Nw(r5) {
  nv(r5, 0);
}
function $l(r5) {
  var e = yi(r5);
  if (gy(e)) return r5;
}
function Bw(r5, e) {
  if (r5 === "change") return e;
}
var Xy = false;
if (Ir) {
  var bu;
  if (Ir) {
    var Au = "oninput" in document;
    if (!Au) {
      var cp = document.createElement("div");
      cp.setAttribute("oninput", "return;"), Au = typeof cp.oninput == "function";
    }
    bu = Au;
  } else bu = false;
  Xy = bu && (!document.documentMode || 9 < document.documentMode);
}
function dp() {
  Bs && (Bs.detachEvent("onpropertychange", Yy), to = Bs = null);
}
function Yy(r5) {
  if (r5.propertyName === "value" && $l(to)) {
    var e = [];
    Wy(e, to, r5, $d(r5)), Cy(Nw, e);
  }
}
function Ow(r5, e, t) {
  r5 === "focusin" ? (dp(), Bs = e, to = t, Bs.attachEvent("onpropertychange", Yy)) : r5 === "focusout" && dp();
}
function Lw(r5) {
  if (r5 === "selectionchange" || r5 === "keyup" || r5 === "keydown") return $l(to);
}
function Uw(r5, e) {
  if (r5 === "click") return $l(e);
}
function Gw(r5, e) {
  if (r5 === "input" || r5 === "change") return $l(e);
}
function zw(r5, e) {
  return r5 === e && (r5 !== 0 || 1 / r5 === 1 / e) || r5 !== r5 && e !== e;
}
var Vt = typeof Object.is == "function" ? Object.is : zw;
function ro(r5, e) {
  if (Vt(r5, e)) return true;
  if (typeof r5 != "object" || r5 === null || typeof e != "object" || e === null) return false;
  var t = Object.keys(r5), n = Object.keys(e);
  if (t.length !== n.length) return false;
  for (n = 0; n < t.length; n++) {
    var i = t[n];
    if (!Oh.call(e, i) || !Vt(r5[i], e[i])) return false;
  }
  return true;
}
function fp(r5) {
  for (; r5 && r5.firstChild; ) r5 = r5.firstChild;
  return r5;
}
function pp(r5, e) {
  var t = fp(r5);
  r5 = 0;
  for (var n; t; ) {
    if (t.nodeType === 3) {
      if (n = r5 + t.textContent.length, r5 <= e && n >= e) return { node: t, offset: e - r5 };
      r5 = n;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = fp(t);
  }
}
function Ky(r5, e) {
  return r5 && e ? r5 === e ? true : r5 && r5.nodeType === 3 ? false : e && e.nodeType === 3 ? Ky(r5, e.parentNode) : "contains" in r5 ? r5.contains(e) : r5.compareDocumentPosition ? !!(r5.compareDocumentPosition(e) & 16) : false : false;
}
function qy() {
  for (var r5 = window, e = Ka(); e instanceof r5.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = false;
    }
    if (t) r5 = e.contentWindow;
    else break;
    e = Ka(r5.document);
  }
  return e;
}
function Qd(r5) {
  var e = r5 && r5.nodeName && r5.nodeName.toLowerCase();
  return e && (e === "input" && (r5.type === "text" || r5.type === "search" || r5.type === "tel" || r5.type === "url" || r5.type === "password") || e === "textarea" || r5.contentEditable === "true");
}
function Hw(r5) {
  var e = qy(), t = r5.focusedElem, n = r5.selectionRange;
  if (e !== t && t && t.ownerDocument && Ky(t.ownerDocument.documentElement, t)) {
    if (n !== null && Qd(t)) {
      if (e = n.start, r5 = n.end, r5 === void 0 && (r5 = e), "selectionStart" in t) t.selectionStart = e, t.selectionEnd = Math.min(r5, t.value.length);
      else if (r5 = (e = t.ownerDocument || document) && e.defaultView || window, r5.getSelection) {
        r5 = r5.getSelection();
        var i = t.textContent.length, s = Math.min(n.start, i);
        n = n.end === void 0 ? s : Math.min(n.end, i), !r5.extend && s > n && (i = n, n = s, s = i), i = pp(t, s);
        var o = pp(t, n);
        i && o && (r5.rangeCount !== 1 || r5.anchorNode !== i.node || r5.anchorOffset !== i.offset || r5.focusNode !== o.node || r5.focusOffset !== o.offset) && (e = e.createRange(), e.setStart(i.node, i.offset), r5.removeAllRanges(), s > n ? (r5.addRange(e), r5.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), r5.addRange(e)));
      }
    }
    for (e = [], r5 = t; r5 = r5.parentNode; ) r5.nodeType === 1 && e.push({ element: r5, left: r5.scrollLeft, top: r5.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++) r5 = e[t], r5.element.scrollLeft = r5.left, r5.element.scrollTop = r5.top;
  }
}
var $w = Ir && "documentMode" in document && 11 >= document.documentMode, mi = null, rc = null, Os = null, nc = false;
function mp(r5, e, t) {
  var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  nc || mi == null || mi !== Ka(n) || (n = mi, "selectionStart" in n && Qd(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }), Os && ro(Os, n) || (Os = n, n = rl(rc, "onSelect"), 0 < n.length && (e = new Kd("onSelect", "select", null, e, t), r5.push({ event: e, listeners: n }), e.target = mi)));
}
function zo(r5, e) {
  var t = {};
  return t[r5.toLowerCase()] = e.toLowerCase(), t["Webkit" + r5] = "webkit" + e, t["Moz" + r5] = "moz" + e, t;
}
var gi = { animationend: zo("Animation", "AnimationEnd"), animationiteration: zo("Animation", "AnimationIteration"), animationstart: zo("Animation", "AnimationStart"), transitionend: zo("Transition", "TransitionEnd") }, Cu = {}, Zy = {};
Ir && (Zy = document.createElement("div").style, "AnimationEvent" in window || (delete gi.animationend.animation, delete gi.animationiteration.animation, delete gi.animationstart.animation), "TransitionEvent" in window || delete gi.transitionend.transition);
function jl(r5) {
  if (Cu[r5]) return Cu[r5];
  if (!gi[r5]) return r5;
  var e = gi[r5], t;
  for (t in e) if (e.hasOwnProperty(t) && t in Zy) return Cu[r5] = e[t];
  return r5;
}
var Qy = jl("animationend"), Jy = jl("animationiteration"), ev = jl("animationstart"), tv = jl("transitionend"), rv = /* @__PURE__ */ new Map(), gp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(r5, e) {
  rv.set(r5, e), Yn(e, [r5]);
}
for (var Iu = 0; Iu < gp.length; Iu++) {
  var Pu = gp[Iu], jw = Pu.toLowerCase(), Vw = Pu[0].toUpperCase() + Pu.slice(1);
  cn(jw, "on" + Vw);
}
cn(Qy, "onAnimationEnd");
cn(Jy, "onAnimationIteration");
cn(ev, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(tv, "onTransitionEnd");
zi("onMouseEnter", ["mouseout", "mouseover"]);
zi("onMouseLeave", ["mouseout", "mouseover"]);
zi("onPointerEnter", ["pointerout", "pointerover"]);
zi("onPointerLeave", ["pointerout", "pointerover"]);
Yn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Yn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Yn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Yn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ww = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));
function yp(r5, e, t) {
  var n = r5.type || "unknown-event";
  r5.currentTarget = t, jx(n, e, void 0, r5), r5.currentTarget = null;
}
function nv(r5, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < r5.length; t++) {
    var n = r5[t], i = n.event;
    n = n.listeners;
    e: {
      var s = void 0;
      if (e) for (var o = n.length - 1; 0 <= o; o--) {
        var a = n[o], l = a.instance, u = a.currentTarget;
        if (a = a.listener, l !== s && i.isPropagationStopped()) break e;
        yp(i, a, u), s = l;
      }
      else for (o = 0; o < n.length; o++) {
        if (a = n[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped()) break e;
        yp(i, a, u), s = l;
      }
    }
  }
  if (Za) throw r5 = Qh, Za = false, Qh = null, r5;
}
function pe(r5, e) {
  var t = e[lc];
  t === void 0 && (t = e[lc] = /* @__PURE__ */ new Set());
  var n = r5 + "__bubble";
  t.has(n) || (iv(e, r5, 2, false), t.add(n));
}
function Ru(r5, e, t) {
  var n = 0;
  e && (n |= 4), iv(t, r5, n, e);
}
var Ho = "_reactListening" + Math.random().toString(36).slice(2);
function no(r5) {
  if (!r5[Ho]) {
    r5[Ho] = true, cy.forEach(function(t) {
      t !== "selectionchange" && (Ww.has(t) || Ru(t, false, r5), Ru(t, true, r5));
    });
    var e = r5.nodeType === 9 ? r5 : r5.ownerDocument;
    e === null || e[Ho] || (e[Ho] = true, Ru("selectionchange", false, e));
  }
}
function iv(r5, e, t, n) {
  switch (zy(e)) {
    case 1:
      var i = ow;
      break;
    case 4:
      i = aw;
      break;
    default:
      i = Xd;
  }
  t = i.bind(null, e, t, r5), i = void 0, !Zh || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (i = true), n ? i !== void 0 ? r5.addEventListener(e, t, { capture: true, passive: i }) : r5.addEventListener(e, t, true) : i !== void 0 ? r5.addEventListener(e, t, { passive: i }) : r5.addEventListener(e, t, false);
}
function Mu(r5, e, t, n, i) {
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
        if (o = Mn(a), o === null) return;
        if (l = o.tag, l === 5 || l === 6) {
          n = s = o;
          continue e;
        }
        a = a.parentNode;
      }
    }
    n = n.return;
  }
  Cy(function() {
    var u = s, h = $d(t), c = [];
    e: {
      var d = rv.get(r5);
      if (d !== void 0) {
        var f = Kd, p = r5;
        switch (r5) {
          case "keypress":
            if (Pa(t) === 0) break e;
          case "keydown":
          case "keyup":
            f = Ew;
            break;
          case "focusin":
            p = "focus", f = Su;
            break;
          case "focusout":
            p = "blur", f = Su;
            break;
          case "beforeblur":
          case "afterblur":
            f = Su;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            f = sp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = hw;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = bw;
            break;
          case Qy:
          case Jy:
          case ev:
            f = fw;
            break;
          case tv:
            f = Cw;
            break;
          case "scroll":
            f = lw;
            break;
          case "wheel":
            f = Pw;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = mw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = ap;
        }
        var v = (e & 4) !== 0, _ = !v && r5 === "scroll", g = v ? d !== null ? d + "Capture" : null : d;
        v = [];
        for (var y = u, m; y !== null; ) {
          m = y;
          var x = m.stateNode;
          if (m.tag === 5 && x !== null && (m = x, g !== null && (x = Zs(y, g), x != null && v.push(io(y, x, m)))), _) break;
          y = y.return;
        }
        0 < v.length && (d = new f(d, p, null, t, h), c.push({ event: d, listeners: v }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (d = r5 === "mouseover" || r5 === "pointerover", f = r5 === "mouseout" || r5 === "pointerout", d && t !== Kh && (p = t.relatedTarget || t.fromElement) && (Mn(p) || p[Pr])) break e;
        if ((f || d) && (d = h.window === h ? h : (d = h.ownerDocument) ? d.defaultView || d.parentWindow : window, f ? (p = t.relatedTarget || t.toElement, f = u, p = p ? Mn(p) : null, p !== null && (_ = Kn(p), p !== _ || p.tag !== 5 && p.tag !== 6) && (p = null)) : (f = null, p = u), f !== p)) {
          if (v = sp, x = "onMouseLeave", g = "onMouseEnter", y = "mouse", (r5 === "pointerout" || r5 === "pointerover") && (v = ap, x = "onPointerLeave", g = "onPointerEnter", y = "pointer"), _ = f == null ? d : yi(f), m = p == null ? d : yi(p), d = new v(x, y + "leave", f, t, h), d.target = _, d.relatedTarget = m, x = null, Mn(h) === u && (v = new v(g, y + "enter", p, t, h), v.target = m, v.relatedTarget = _, x = v), _ = x, f && p) t: {
            for (v = f, g = p, y = 0, m = v; m; m = ei(m)) y++;
            for (m = 0, x = g; x; x = ei(x)) m++;
            for (; 0 < y - m; ) v = ei(v), y--;
            for (; 0 < m - y; ) g = ei(g), m--;
            for (; y--; ) {
              if (v === g || g !== null && v === g.alternate) break t;
              v = ei(v), g = ei(g);
            }
            v = null;
          }
          else v = null;
          f !== null && vp(c, d, f, v, false), p !== null && _ !== null && vp(c, _, p, v, true);
        }
      }
      e: {
        if (d = u ? yi(u) : window, f = d.nodeName && d.nodeName.toLowerCase(), f === "select" || f === "input" && d.type === "file") var w = Bw;
        else if (hp(d)) if (Xy) w = Gw;
        else {
          w = Lw;
          var S = Ow;
        }
        else (f = d.nodeName) && f.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (w = Uw);
        if (w && (w = w(r5, u))) {
          Wy(c, w, t, h);
          break e;
        }
        S && S(r5, d, u), r5 === "focusout" && (S = d._wrapperState) && S.controlled && d.type === "number" && jh(d, "number", d.value);
      }
      switch (S = u ? yi(u) : window, r5) {
        case "focusin":
          (hp(S) || S.contentEditable === "true") && (mi = S, rc = u, Os = null);
          break;
        case "focusout":
          Os = rc = mi = null;
          break;
        case "mousedown":
          nc = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          nc = false, mp(c, t, h);
          break;
        case "selectionchange":
          if ($w) break;
        case "keydown":
        case "keyup":
          mp(c, t, h);
      }
      var T;
      if (Zd) e: {
        switch (r5) {
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
      else pi ? jy(r5, t) && (E = "onCompositionEnd") : r5 === "keydown" && t.keyCode === 229 && (E = "onCompositionStart");
      E && ($y && t.locale !== "ko" && (pi || E !== "onCompositionStart" ? E === "onCompositionEnd" && pi && (T = Hy()) : (Wr = h, Yd = "value" in Wr ? Wr.value : Wr.textContent, pi = true)), S = rl(u, E), 0 < S.length && (E = new op(E, r5, null, t, h), c.push({ event: E, listeners: S }), T ? E.data = T : (T = Vy(t), T !== null && (E.data = T)))), (T = Mw ? kw(r5, t) : Dw(r5, t)) && (u = rl(u, "onBeforeInput"), 0 < u.length && (h = new op("onBeforeInput", "beforeinput", null, t, h), c.push({ event: h, listeners: u }), h.data = T));
    }
    nv(c, e);
  });
}
function io(r5, e, t) {
  return { instance: r5, listener: e, currentTarget: t };
}
function rl(r5, e) {
  for (var t = e + "Capture", n = []; r5 !== null; ) {
    var i = r5, s = i.stateNode;
    i.tag === 5 && s !== null && (i = s, s = Zs(r5, t), s != null && n.unshift(io(r5, s, i)), s = Zs(r5, e), s != null && n.push(io(r5, s, i))), r5 = r5.return;
  }
  return n;
}
function ei(r5) {
  if (r5 === null) return null;
  do
    r5 = r5.return;
  while (r5 && r5.tag !== 5);
  return r5 || null;
}
function vp(r5, e, t, n, i) {
  for (var s = e._reactName, o = []; t !== null && t !== n; ) {
    var a = t, l = a.alternate, u = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 && u !== null && (a = u, i ? (l = Zs(t, s), l != null && o.unshift(io(t, l, a))) : i || (l = Zs(t, s), l != null && o.push(io(t, l, a)))), t = t.return;
  }
  o.length !== 0 && r5.push({ event: e, listeners: o });
}
var Xw = /\r\n?/g, Yw = /\u0000|\uFFFD/g;
function _p(r5) {
  return (typeof r5 == "string" ? r5 : "" + r5).replace(Xw, `
`).replace(Yw, "");
}
function $o(r5, e, t) {
  if (e = _p(e), _p(r5) !== e && t) throw Error(k(425));
}
function nl() {
}
var ic = null, sc = null;
function oc(r5, e) {
  return r5 === "textarea" || r5 === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
}
var ac = typeof setTimeout == "function" ? setTimeout : void 0, Kw = typeof clearTimeout == "function" ? clearTimeout : void 0, xp = typeof Promise == "function" ? Promise : void 0, qw = typeof queueMicrotask == "function" ? queueMicrotask : typeof xp < "u" ? function(r5) {
  return xp.resolve(null).then(r5).catch(Zw);
} : ac;
function Zw(r5) {
  setTimeout(function() {
    throw r5;
  });
}
function ku(r5, e) {
  var t = e, n = 0;
  do {
    var i = t.nextSibling;
    if (r5.removeChild(t), i && i.nodeType === 8) if (t = i.data, t === "/$") {
      if (n === 0) {
        r5.removeChild(i), eo(e);
        return;
      }
      n--;
    } else t !== "$" && t !== "$?" && t !== "$!" || n++;
    t = i;
  } while (t);
  eo(e);
}
function en(r5) {
  for (; r5 != null; r5 = r5.nextSibling) {
    var e = r5.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (e = r5.data, e === "$" || e === "$!" || e === "$?") break;
      if (e === "/$") return null;
    }
  }
  return r5;
}
function wp(r5) {
  r5 = r5.previousSibling;
  for (var e = 0; r5; ) {
    if (r5.nodeType === 8) {
      var t = r5.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (e === 0) return r5;
        e--;
      } else t === "/$" && e++;
    }
    r5 = r5.previousSibling;
  }
  return null;
}
var Ji = Math.random().toString(36).slice(2), ar = "__reactFiber$" + Ji, so = "__reactProps$" + Ji, Pr = "__reactContainer$" + Ji, lc = "__reactEvents$" + Ji, Qw = "__reactListeners$" + Ji, Jw = "__reactHandles$" + Ji;
function Mn(r5) {
  var e = r5[ar];
  if (e) return e;
  for (var t = r5.parentNode; t; ) {
    if (e = t[Pr] || t[ar]) {
      if (t = e.alternate, e.child !== null || t !== null && t.child !== null) for (r5 = wp(r5); r5 !== null; ) {
        if (t = r5[ar]) return t;
        r5 = wp(r5);
      }
      return e;
    }
    r5 = t, t = r5.parentNode;
  }
  return null;
}
function To(r5) {
  return r5 = r5[ar] || r5[Pr], !r5 || r5.tag !== 5 && r5.tag !== 6 && r5.tag !== 13 && r5.tag !== 3 ? null : r5;
}
function yi(r5) {
  if (r5.tag === 5 || r5.tag === 6) return r5.stateNode;
  throw Error(k(33));
}
function Vl(r5) {
  return r5[so] || null;
}
var uc = [], vi = -1;
function dn(r5) {
  return { current: r5 };
}
function ge(r5) {
  0 > vi || (r5.current = uc[vi], uc[vi] = null, vi--);
}
function fe(r5, e) {
  vi++, uc[vi] = r5.current, r5.current = e;
}
var ln = {}, tt = dn(ln), ct = dn(false), Un = ln;
function Hi(r5, e) {
  var t = r5.type.contextTypes;
  if (!t) return ln;
  var n = r5.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === e) return n.__reactInternalMemoizedMaskedChildContext;
  var i = {}, s;
  for (s in t) i[s] = e[s];
  return n && (r5 = r5.stateNode, r5.__reactInternalMemoizedUnmaskedChildContext = e, r5.__reactInternalMemoizedMaskedChildContext = i), i;
}
function dt(r5) {
  return r5 = r5.childContextTypes, r5 != null;
}
function il() {
  ge(ct), ge(tt);
}
function Ep(r5, e, t) {
  if (tt.current !== ln) throw Error(k(168));
  fe(tt, e), fe(ct, t);
}
function sv(r5, e, t) {
  var n = r5.stateNode;
  if (e = e.childContextTypes, typeof n.getChildContext != "function") return t;
  n = n.getChildContext();
  for (var i in n) if (!(i in e)) throw Error(k(108, Ox(r5) || "Unknown", i));
  return Se({}, t, n);
}
function sl(r5) {
  return r5 = (r5 = r5.stateNode) && r5.__reactInternalMemoizedMergedChildContext || ln, Un = tt.current, fe(tt, r5), fe(ct, ct.current), true;
}
function Tp(r5, e, t) {
  var n = r5.stateNode;
  if (!n) throw Error(k(169));
  t ? (r5 = sv(r5, e, Un), n.__reactInternalMemoizedMergedChildContext = r5, ge(ct), ge(tt), fe(tt, r5)) : ge(ct), fe(ct, t);
}
var _r = null, Wl = false, Du = false;
function ov(r5) {
  _r === null ? _r = [r5] : _r.push(r5);
}
function e1(r5) {
  Wl = true, ov(r5);
}
function fn() {
  if (!Du && _r !== null) {
    Du = true;
    var r5 = 0, e = ce;
    try {
      var t = _r;
      for (ce = 1; r5 < t.length; r5++) {
        var n = t[r5];
        do
          n = n(true);
        while (n !== null);
      }
      _r = null, Wl = false;
    } catch (i) {
      throw _r !== null && (_r = _r.slice(r5 + 1)), My(jd, fn), i;
    } finally {
      ce = e, Du = false;
    }
  }
  return null;
}
var _i = [], xi = 0, ol = null, al = 0, Tt = [], St = 0, Gn = null, xr = 1, wr = "";
function vn(r5, e) {
  _i[xi++] = al, _i[xi++] = ol, ol = r5, al = e;
}
function av(r5, e, t) {
  Tt[St++] = xr, Tt[St++] = wr, Tt[St++] = Gn, Gn = r5;
  var n = xr;
  r5 = wr;
  var i = 32 - zt(n) - 1;
  n &= ~(1 << i), t += 1;
  var s = 32 - zt(e) + i;
  if (30 < s) {
    var o = i - i % 5;
    s = (n & (1 << o) - 1).toString(32), n >>= o, i -= o, xr = 1 << 32 - zt(e) + i | t << i | n, wr = s + r5;
  } else xr = 1 << s | t << i | n, wr = r5;
}
function Jd(r5) {
  r5.return !== null && (vn(r5, 1), av(r5, 1, 0));
}
function ef(r5) {
  for (; r5 === ol; ) ol = _i[--xi], _i[xi] = null, al = _i[--xi], _i[xi] = null;
  for (; r5 === Gn; ) Gn = Tt[--St], Tt[St] = null, wr = Tt[--St], Tt[St] = null, xr = Tt[--St], Tt[St] = null;
}
var vt = null, gt = null, ve = false, Ut = null;
function lv(r5, e) {
  var t = bt(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = e, t.return = r5, e = r5.deletions, e === null ? (r5.deletions = [t], r5.flags |= 16) : e.push(t);
}
function Sp(r5, e) {
  switch (r5.tag) {
    case 5:
      var t = r5.type;
      return e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e, e !== null ? (r5.stateNode = e, vt = r5, gt = en(e.firstChild), true) : false;
    case 6:
      return e = r5.pendingProps === "" || e.nodeType !== 3 ? null : e, e !== null ? (r5.stateNode = e, vt = r5, gt = null, true) : false;
    case 13:
      return e = e.nodeType !== 8 ? null : e, e !== null ? (t = Gn !== null ? { id: xr, overflow: wr } : null, r5.memoizedState = { dehydrated: e, treeContext: t, retryLane: 1073741824 }, t = bt(18, null, null, 0), t.stateNode = e, t.return = r5, r5.child = t, vt = r5, gt = null, true) : false;
    default:
      return false;
  }
}
function hc(r5) {
  return (r5.mode & 1) !== 0 && (r5.flags & 128) === 0;
}
function cc(r5) {
  if (ve) {
    var e = gt;
    if (e) {
      var t = e;
      if (!Sp(r5, e)) {
        if (hc(r5)) throw Error(k(418));
        e = en(t.nextSibling);
        var n = vt;
        e && Sp(r5, e) ? lv(n, t) : (r5.flags = r5.flags & -4097 | 2, ve = false, vt = r5);
      }
    } else {
      if (hc(r5)) throw Error(k(418));
      r5.flags = r5.flags & -4097 | 2, ve = false, vt = r5;
    }
  }
}
function bp(r5) {
  for (r5 = r5.return; r5 !== null && r5.tag !== 5 && r5.tag !== 3 && r5.tag !== 13; ) r5 = r5.return;
  vt = r5;
}
function jo(r5) {
  if (r5 !== vt) return false;
  if (!ve) return bp(r5), ve = true, false;
  var e;
  if ((e = r5.tag !== 3) && !(e = r5.tag !== 5) && (e = r5.type, e = e !== "head" && e !== "body" && !oc(r5.type, r5.memoizedProps)), e && (e = gt)) {
    if (hc(r5)) throw uv(), Error(k(418));
    for (; e; ) lv(r5, e), e = en(e.nextSibling);
  }
  if (bp(r5), r5.tag === 13) {
    if (r5 = r5.memoizedState, r5 = r5 !== null ? r5.dehydrated : null, !r5) throw Error(k(317));
    e: {
      for (r5 = r5.nextSibling, e = 0; r5; ) {
        if (r5.nodeType === 8) {
          var t = r5.data;
          if (t === "/$") {
            if (e === 0) {
              gt = en(r5.nextSibling);
              break e;
            }
            e--;
          } else t !== "$" && t !== "$!" && t !== "$?" || e++;
        }
        r5 = r5.nextSibling;
      }
      gt = null;
    }
  } else gt = vt ? en(r5.stateNode.nextSibling) : null;
  return true;
}
function uv() {
  for (var r5 = gt; r5; ) r5 = en(r5.nextSibling);
}
function $i() {
  gt = vt = null, ve = false;
}
function tf(r5) {
  Ut === null ? Ut = [r5] : Ut.push(r5);
}
var t1 = Nr.ReactCurrentBatchConfig;
function hs(r5, e, t) {
  if (r5 = t.ref, r5 !== null && typeof r5 != "function" && typeof r5 != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1) throw Error(k(309));
        var n = t.stateNode;
      }
      if (!n) throw Error(k(147, r5));
      var i = n, s = "" + r5;
      return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s ? e.ref : (e = function(o) {
        var a = i.refs;
        o === null ? delete a[s] : a[s] = o;
      }, e._stringRef = s, e);
    }
    if (typeof r5 != "string") throw Error(k(284));
    if (!t._owner) throw Error(k(290, r5));
  }
  return r5;
}
function Vo(r5, e) {
  throw r5 = Object.prototype.toString.call(e), Error(k(31, r5 === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r5));
}
function Ap(r5) {
  var e = r5._init;
  return e(r5._payload);
}
function hv(r5) {
  function e(g, y) {
    if (r5) {
      var m = g.deletions;
      m === null ? (g.deletions = [y], g.flags |= 16) : m.push(y);
    }
  }
  function t(g, y) {
    if (!r5) return null;
    for (; y !== null; ) e(g, y), y = y.sibling;
    return null;
  }
  function n(g, y) {
    for (g = /* @__PURE__ */ new Map(); y !== null; ) y.key !== null ? g.set(y.key, y) : g.set(y.index, y), y = y.sibling;
    return g;
  }
  function i(g, y) {
    return g = sn(g, y), g.index = 0, g.sibling = null, g;
  }
  function s(g, y, m) {
    return g.index = m, r5 ? (m = g.alternate, m !== null ? (m = m.index, m < y ? (g.flags |= 2, y) : m) : (g.flags |= 2, y)) : (g.flags |= 1048576, y);
  }
  function o(g) {
    return r5 && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, y, m, x) {
    return y === null || y.tag !== 6 ? (y = Gu(m, g.mode, x), y.return = g, y) : (y = i(y, m), y.return = g, y);
  }
  function l(g, y, m, x) {
    var w = m.type;
    return w === fi ? h(g, y, m.props.children, x, m.key) : y !== null && (y.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Gr && Ap(w) === y.type) ? (x = i(y, m.props), x.ref = hs(g, y, m), x.return = g, x) : (x = Ba(m.type, m.key, m.props, null, g.mode, x), x.ref = hs(g, y, m), x.return = g, x);
  }
  function u(g, y, m, x) {
    return y === null || y.tag !== 4 || y.stateNode.containerInfo !== m.containerInfo || y.stateNode.implementation !== m.implementation ? (y = zu(m, g.mode, x), y.return = g, y) : (y = i(y, m.children || []), y.return = g, y);
  }
  function h(g, y, m, x, w) {
    return y === null || y.tag !== 7 ? (y = Nn(m, g.mode, x, w), y.return = g, y) : (y = i(y, m), y.return = g, y);
  }
  function c(g, y, m) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return y = Gu("" + y, g.mode, m), y.return = g, y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Fo:
          return m = Ba(y.type, y.key, y.props, null, g.mode, m), m.ref = hs(g, null, y), m.return = g, m;
        case di:
          return y = zu(y, g.mode, m), y.return = g, y;
        case Gr:
          var x = y._init;
          return c(g, x(y._payload), m);
      }
      if (ws(y) || ss(y)) return y = Nn(y, g.mode, m, null), y.return = g, y;
      Vo(g, y);
    }
    return null;
  }
  function d(g, y, m, x) {
    var w = y !== null ? y.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return w !== null ? null : a(g, y, "" + m, x);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Fo:
          return m.key === w ? l(g, y, m, x) : null;
        case di:
          return m.key === w ? u(g, y, m, x) : null;
        case Gr:
          return w = m._init, d(g, y, w(m._payload), x);
      }
      if (ws(m) || ss(m)) return w !== null ? null : h(g, y, m, x, null);
      Vo(g, m);
    }
    return null;
  }
  function f(g, y, m, x, w) {
    if (typeof x == "string" && x !== "" || typeof x == "number") return g = g.get(m) || null, a(y, g, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Fo:
          return g = g.get(x.key === null ? m : x.key) || null, l(y, g, x, w);
        case di:
          return g = g.get(x.key === null ? m : x.key) || null, u(y, g, x, w);
        case Gr:
          var S = x._init;
          return f(g, y, m, S(x._payload), w);
      }
      if (ws(x) || ss(x)) return g = g.get(m) || null, h(y, g, x, w, null);
      Vo(y, x);
    }
    return null;
  }
  function p(g, y, m, x) {
    for (var w = null, S = null, T = y, E = y = 0, I = null; T !== null && E < m.length; E++) {
      T.index > E ? (I = T, T = null) : I = T.sibling;
      var P = d(g, T, m[E], x);
      if (P === null) {
        T === null && (T = I);
        break;
      }
      r5 && T && P.alternate === null && e(g, T), y = s(P, y, E), S === null ? w = P : S.sibling = P, S = P, T = I;
    }
    if (E === m.length) return t(g, T), ve && vn(g, E), w;
    if (T === null) {
      for (; E < m.length; E++) T = c(g, m[E], x), T !== null && (y = s(T, y, E), S === null ? w = T : S.sibling = T, S = T);
      return ve && vn(g, E), w;
    }
    for (T = n(g, T); E < m.length; E++) I = f(T, g, E, m[E], x), I !== null && (r5 && I.alternate !== null && T.delete(I.key === null ? E : I.key), y = s(I, y, E), S === null ? w = I : S.sibling = I, S = I);
    return r5 && T.forEach(function(D) {
      return e(g, D);
    }), ve && vn(g, E), w;
  }
  function v(g, y, m, x) {
    var w = ss(m);
    if (typeof w != "function") throw Error(k(150));
    if (m = w.call(m), m == null) throw Error(k(151));
    for (var S = w = null, T = y, E = y = 0, I = null, P = m.next(); T !== null && !P.done; E++, P = m.next()) {
      T.index > E ? (I = T, T = null) : I = T.sibling;
      var D = d(g, T, P.value, x);
      if (D === null) {
        T === null && (T = I);
        break;
      }
      r5 && T && D.alternate === null && e(g, T), y = s(D, y, E), S === null ? w = D : S.sibling = D, S = D, T = I;
    }
    if (P.done) return t(g, T), ve && vn(g, E), w;
    if (T === null) {
      for (; !P.done; E++, P = m.next()) P = c(g, P.value, x), P !== null && (y = s(P, y, E), S === null ? w = P : S.sibling = P, S = P);
      return ve && vn(g, E), w;
    }
    for (T = n(g, T); !P.done; E++, P = m.next()) P = f(T, g, E, P.value, x), P !== null && (r5 && P.alternate !== null && T.delete(P.key === null ? E : P.key), y = s(P, y, E), S === null ? w = P : S.sibling = P, S = P);
    return r5 && T.forEach(function(N) {
      return e(g, N);
    }), ve && vn(g, E), w;
  }
  function _(g, y, m, x) {
    if (typeof m == "object" && m !== null && m.type === fi && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Fo:
          e: {
            for (var w = m.key, S = y; S !== null; ) {
              if (S.key === w) {
                if (w = m.type, w === fi) {
                  if (S.tag === 7) {
                    t(g, S.sibling), y = i(S, m.props.children), y.return = g, g = y;
                    break e;
                  }
                } else if (S.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Gr && Ap(w) === S.type) {
                  t(g, S.sibling), y = i(S, m.props), y.ref = hs(g, S, m), y.return = g, g = y;
                  break e;
                }
                t(g, S);
                break;
              } else e(g, S);
              S = S.sibling;
            }
            m.type === fi ? (y = Nn(m.props.children, g.mode, x, m.key), y.return = g, g = y) : (x = Ba(m.type, m.key, m.props, null, g.mode, x), x.ref = hs(g, y, m), x.return = g, g = x);
          }
          return o(g);
        case di:
          e: {
            for (S = m.key; y !== null; ) {
              if (y.key === S) if (y.tag === 4 && y.stateNode.containerInfo === m.containerInfo && y.stateNode.implementation === m.implementation) {
                t(g, y.sibling), y = i(y, m.children || []), y.return = g, g = y;
                break e;
              } else {
                t(g, y);
                break;
              }
              else e(g, y);
              y = y.sibling;
            }
            y = zu(m, g.mode, x), y.return = g, g = y;
          }
          return o(g);
        case Gr:
          return S = m._init, _(g, y, S(m._payload), x);
      }
      if (ws(m)) return p(g, y, m, x);
      if (ss(m)) return v(g, y, m, x);
      Vo(g, m);
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, y !== null && y.tag === 6 ? (t(g, y.sibling), y = i(y, m), y.return = g, g = y) : (t(g, y), y = Gu(m, g.mode, x), y.return = g, g = y), o(g)) : t(g, y);
  }
  return _;
}
var ji = hv(true), cv = hv(false), ll = dn(null), ul = null, wi = null, rf = null;
function nf() {
  rf = wi = ul = null;
}
function sf(r5) {
  var e = ll.current;
  ge(ll), r5._currentValue = e;
}
function dc(r5, e, t) {
  for (; r5 !== null; ) {
    var n = r5.alternate;
    if ((r5.childLanes & e) !== e ? (r5.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), r5 === t) break;
    r5 = r5.return;
  }
}
function Mi(r5, e) {
  ul = r5, rf = wi = null, r5 = r5.dependencies, r5 !== null && r5.firstContext !== null && (r5.lanes & e && (ut = true), r5.firstContext = null);
}
function Pt(r5) {
  var e = r5._currentValue;
  if (rf !== r5) if (r5 = { context: r5, memoizedValue: e, next: null }, wi === null) {
    if (ul === null) throw Error(k(308));
    wi = r5, ul.dependencies = { lanes: 0, firstContext: r5 };
  } else wi = wi.next = r5;
  return e;
}
var kn = null;
function of(r5) {
  kn === null ? kn = [r5] : kn.push(r5);
}
function dv(r5, e, t, n) {
  var i = e.interleaved;
  return i === null ? (t.next = t, of(e)) : (t.next = i.next, i.next = t), e.interleaved = t, Rr(r5, n);
}
function Rr(r5, e) {
  r5.lanes |= e;
  var t = r5.alternate;
  for (t !== null && (t.lanes |= e), t = r5, r5 = r5.return; r5 !== null; ) r5.childLanes |= e, t = r5.alternate, t !== null && (t.childLanes |= e), t = r5, r5 = r5.return;
  return t.tag === 3 ? t.stateNode : null;
}
var zr = false;
function af(r5) {
  r5.updateQueue = { baseState: r5.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function fv(r5, e) {
  r5 = r5.updateQueue, e.updateQueue === r5 && (e.updateQueue = { baseState: r5.baseState, firstBaseUpdate: r5.firstBaseUpdate, lastBaseUpdate: r5.lastBaseUpdate, shared: r5.shared, effects: r5.effects });
}
function Ar(r5, e) {
  return { eventTime: r5, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function tn(r5, e, t) {
  var n = r5.updateQueue;
  if (n === null) return null;
  if (n = n.shared, ue & 2) {
    var i = n.pending;
    return i === null ? e.next = e : (e.next = i.next, i.next = e), n.pending = e, Rr(r5, t);
  }
  return i = n.interleaved, i === null ? (e.next = e, of(n)) : (e.next = i.next, i.next = e), n.interleaved = e, Rr(r5, t);
}
function Ra(r5, e, t) {
  if (e = e.updateQueue, e !== null && (e = e.shared, (t & 4194240) !== 0)) {
    var n = e.lanes;
    n &= r5.pendingLanes, t |= n, e.lanes = t, Vd(r5, t);
  }
}
function Cp(r5, e) {
  var t = r5.updateQueue, n = r5.alternate;
  if (n !== null && (n = n.updateQueue, t === n)) {
    var i = null, s = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var o = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        s === null ? i = s = o : s = s.next = o, t = t.next;
      } while (t !== null);
      s === null ? i = s = e : s = s.next = e;
    } else i = s = e;
    t = { baseState: n.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: n.shared, effects: n.effects }, r5.updateQueue = t;
    return;
  }
  r5 = t.lastBaseUpdate, r5 === null ? t.firstBaseUpdate = e : r5.next = e, t.lastBaseUpdate = e;
}
function hl(r5, e, t, n) {
  var i = r5.updateQueue;
  zr = false;
  var s = i.firstBaseUpdate, o = i.lastBaseUpdate, a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a, u = l.next;
    l.next = null, o === null ? s = u : o.next = u, o = l;
    var h = r5.alternate;
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
          var p = r5, v = a;
          switch (d = e, f = t, v.tag) {
            case 1:
              if (p = v.payload, typeof p == "function") {
                c = p.call(f, c, d);
                break e;
              }
              c = p;
              break e;
            case 3:
              p.flags = p.flags & -65537 | 128;
            case 0:
              if (p = v.payload, d = typeof p == "function" ? p.call(f, c, d) : p, d == null) break e;
              c = Se({}, c, d);
              break e;
            case 2:
              zr = true;
          }
        }
        a.callback !== null && a.lane !== 0 && (r5.flags |= 64, d = i.effects, d === null ? i.effects = [a] : d.push(a));
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
    Hn |= o, r5.lanes = o, r5.memoizedState = c;
  }
}
function Ip(r5, e, t) {
  if (r5 = e.effects, e.effects = null, r5 !== null) for (e = 0; e < r5.length; e++) {
    var n = r5[e], i = n.callback;
    if (i !== null) {
      if (n.callback = null, n = t, typeof i != "function") throw Error(k(191, i));
      i.call(n);
    }
  }
}
var So = {}, hr = dn(So), oo = dn(So), ao = dn(So);
function Dn(r5) {
  if (r5 === So) throw Error(k(174));
  return r5;
}
function lf(r5, e) {
  switch (fe(ao, e), fe(oo, r5), fe(hr, So), r5 = e.nodeType, r5) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Wh(null, "");
      break;
    default:
      r5 = r5 === 8 ? e.parentNode : e, e = r5.namespaceURI || null, r5 = r5.tagName, e = Wh(e, r5);
  }
  ge(hr), fe(hr, e);
}
function Vi() {
  ge(hr), ge(oo), ge(ao);
}
function pv(r5) {
  Dn(ao.current);
  var e = Dn(hr.current), t = Wh(e, r5.type);
  e !== t && (fe(oo, r5), fe(hr, t));
}
function uf(r5) {
  oo.current === r5 && (ge(hr), ge(oo));
}
var we = dn(0);
function cl(r5) {
  for (var e = r5; e !== null; ) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      e.child.return = e, e = e.child;
      continue;
    }
    if (e === r5) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === r5) return null;
      e = e.return;
    }
    e.sibling.return = e.return, e = e.sibling;
  }
  return null;
}
var Fu = [];
function hf() {
  for (var r5 = 0; r5 < Fu.length; r5++) Fu[r5]._workInProgressVersionPrimary = null;
  Fu.length = 0;
}
var Ma = Nr.ReactCurrentDispatcher, Nu = Nr.ReactCurrentBatchConfig, zn = 0, Te = null, Oe = null, Ge = null, dl = false, Ls = false, lo = 0, r1 = 0;
function qe() {
  throw Error(k(321));
}
function cf(r5, e) {
  if (e === null) return false;
  for (var t = 0; t < e.length && t < r5.length; t++) if (!Vt(r5[t], e[t])) return false;
  return true;
}
function df(r5, e, t, n, i, s) {
  if (zn = s, Te = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Ma.current = r5 === null || r5.memoizedState === null ? o1 : a1, r5 = t(n, i), Ls) {
    s = 0;
    do {
      if (Ls = false, lo = 0, 25 <= s) throw Error(k(301));
      s += 1, Ge = Oe = null, e.updateQueue = null, Ma.current = l1, r5 = t(n, i);
    } while (Ls);
  }
  if (Ma.current = fl, e = Oe !== null && Oe.next !== null, zn = 0, Ge = Oe = Te = null, dl = false, e) throw Error(k(300));
  return r5;
}
function ff() {
  var r5 = lo !== 0;
  return lo = 0, r5;
}
function nr() {
  var r5 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ge === null ? Te.memoizedState = Ge = r5 : Ge = Ge.next = r5, Ge;
}
function Rt() {
  if (Oe === null) {
    var r5 = Te.alternate;
    r5 = r5 !== null ? r5.memoizedState : null;
  } else r5 = Oe.next;
  var e = Ge === null ? Te.memoizedState : Ge.next;
  if (e !== null) Ge = e, Oe = r5;
  else {
    if (r5 === null) throw Error(k(310));
    Oe = r5, r5 = { memoizedState: Oe.memoizedState, baseState: Oe.baseState, baseQueue: Oe.baseQueue, queue: Oe.queue, next: null }, Ge === null ? Te.memoizedState = Ge = r5 : Ge = Ge.next = r5;
  }
  return Ge;
}
function uo(r5, e) {
  return typeof e == "function" ? e(r5) : e;
}
function Bu(r5) {
  var e = Rt(), t = e.queue;
  if (t === null) throw Error(k(311));
  t.lastRenderedReducer = r5;
  var n = Oe, i = n.baseQueue, s = t.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      i.next = s.next, s.next = o;
    }
    n.baseQueue = i = s, t.pending = null;
  }
  if (i !== null) {
    s = i.next, n = n.baseState;
    var a = o = null, l = null, u = s;
    do {
      var h = u.lane;
      if ((zn & h) === h) l !== null && (l = l.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), n = u.hasEagerState ? u.eagerState : r5(n, u.action);
      else {
        var c = { lane: h, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        l === null ? (a = l = c, o = n) : l = l.next = c, Te.lanes |= h, Hn |= h;
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? o = n : l.next = a, Vt(n, e.memoizedState) || (ut = true), e.memoizedState = n, e.baseState = o, e.baseQueue = l, t.lastRenderedState = n;
  }
  if (r5 = t.interleaved, r5 !== null) {
    i = r5;
    do
      s = i.lane, Te.lanes |= s, Hn |= s, i = i.next;
    while (i !== r5);
  } else i === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function Ou(r5) {
  var e = Rt(), t = e.queue;
  if (t === null) throw Error(k(311));
  t.lastRenderedReducer = r5;
  var n = t.dispatch, i = t.pending, s = e.memoizedState;
  if (i !== null) {
    t.pending = null;
    var o = i = i.next;
    do
      s = r5(s, o.action), o = o.next;
    while (o !== i);
    Vt(s, e.memoizedState) || (ut = true), e.memoizedState = s, e.baseQueue === null && (e.baseState = s), t.lastRenderedState = s;
  }
  return [s, n];
}
function mv() {
}
function gv(r5, e) {
  var t = Te, n = Rt(), i = e(), s = !Vt(n.memoizedState, i);
  if (s && (n.memoizedState = i, ut = true), n = n.queue, pf(_v.bind(null, t, n, r5), [r5]), n.getSnapshot !== e || s || Ge !== null && Ge.memoizedState.tag & 1) {
    if (t.flags |= 2048, ho(9, vv.bind(null, t, n, i, e), void 0, null), $e === null) throw Error(k(349));
    zn & 30 || yv(t, e, i);
  }
  return i;
}
function yv(r5, e, t) {
  r5.flags |= 16384, r5 = { getSnapshot: e, value: t }, e = Te.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, Te.updateQueue = e, e.stores = [r5]) : (t = e.stores, t === null ? e.stores = [r5] : t.push(r5));
}
function vv(r5, e, t, n) {
  e.value = t, e.getSnapshot = n, xv(e) && wv(r5);
}
function _v(r5, e, t) {
  return t(function() {
    xv(e) && wv(r5);
  });
}
function xv(r5) {
  var e = r5.getSnapshot;
  r5 = r5.value;
  try {
    var t = e();
    return !Vt(r5, t);
  } catch {
    return true;
  }
}
function wv(r5) {
  var e = Rr(r5, 1);
  e !== null && Ht(e, r5, 1, -1);
}
function Pp(r5) {
  var e = nr();
  return typeof r5 == "function" && (r5 = r5()), e.memoizedState = e.baseState = r5, r5 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: uo, lastRenderedState: r5 }, e.queue = r5, r5 = r5.dispatch = s1.bind(null, Te, r5), [e.memoizedState, r5];
}
function ho(r5, e, t, n) {
  return r5 = { tag: r5, create: e, destroy: t, deps: n, next: null }, e = Te.updateQueue, e === null ? (e = { lastEffect: null, stores: null }, Te.updateQueue = e, e.lastEffect = r5.next = r5) : (t = e.lastEffect, t === null ? e.lastEffect = r5.next = r5 : (n = t.next, t.next = r5, r5.next = n, e.lastEffect = r5)), r5;
}
function Ev() {
  return Rt().memoizedState;
}
function ka(r5, e, t, n) {
  var i = nr();
  Te.flags |= r5, i.memoizedState = ho(1 | e, t, void 0, n === void 0 ? null : n);
}
function Xl(r5, e, t, n) {
  var i = Rt();
  n = n === void 0 ? null : n;
  var s = void 0;
  if (Oe !== null) {
    var o = Oe.memoizedState;
    if (s = o.destroy, n !== null && cf(n, o.deps)) {
      i.memoizedState = ho(e, t, s, n);
      return;
    }
  }
  Te.flags |= r5, i.memoizedState = ho(1 | e, t, s, n);
}
function Rp(r5, e) {
  return ka(8390656, 8, r5, e);
}
function pf(r5, e) {
  return Xl(2048, 8, r5, e);
}
function Tv(r5, e) {
  return Xl(4, 2, r5, e);
}
function Sv(r5, e) {
  return Xl(4, 4, r5, e);
}
function bv(r5, e) {
  if (typeof e == "function") return r5 = r5(), e(r5), function() {
    e(null);
  };
  if (e != null) return r5 = r5(), e.current = r5, function() {
    e.current = null;
  };
}
function Av(r5, e, t) {
  return t = t != null ? t.concat([r5]) : null, Xl(4, 4, bv.bind(null, e, r5), t);
}
function mf() {
}
function Cv(r5, e) {
  var t = Rt();
  e = e === void 0 ? null : e;
  var n = t.memoizedState;
  return n !== null && e !== null && cf(e, n[1]) ? n[0] : (t.memoizedState = [r5, e], r5);
}
function Iv(r5, e) {
  var t = Rt();
  e = e === void 0 ? null : e;
  var n = t.memoizedState;
  return n !== null && e !== null && cf(e, n[1]) ? n[0] : (r5 = r5(), t.memoizedState = [r5, e], r5);
}
function Pv(r5, e, t) {
  return zn & 21 ? (Vt(t, e) || (t = Fy(), Te.lanes |= t, Hn |= t, r5.baseState = true), e) : (r5.baseState && (r5.baseState = false, ut = true), r5.memoizedState = t);
}
function n1(r5, e) {
  var t = ce;
  ce = t !== 0 && 4 > t ? t : 4, r5(true);
  var n = Nu.transition;
  Nu.transition = {};
  try {
    r5(false), e();
  } finally {
    ce = t, Nu.transition = n;
  }
}
function Rv() {
  return Rt().memoizedState;
}
function i1(r5, e, t) {
  var n = nn(r5);
  if (t = { lane: n, action: t, hasEagerState: false, eagerState: null, next: null }, Mv(r5)) kv(e, t);
  else if (t = dv(r5, e, t, n), t !== null) {
    var i = st();
    Ht(t, r5, n, i), Dv(t, e, n);
  }
}
function s1(r5, e, t) {
  var n = nn(r5), i = { lane: n, action: t, hasEagerState: false, eagerState: null, next: null };
  if (Mv(r5)) kv(e, i);
  else {
    var s = r5.alternate;
    if (r5.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer, s !== null)) try {
      var o = e.lastRenderedState, a = s(o, t);
      if (i.hasEagerState = true, i.eagerState = a, Vt(a, o)) {
        var l = e.interleaved;
        l === null ? (i.next = i, of(e)) : (i.next = l.next, l.next = i), e.interleaved = i;
        return;
      }
    } catch {
    } finally {
    }
    t = dv(r5, e, i, n), t !== null && (i = st(), Ht(t, r5, n, i), Dv(t, e, n));
  }
}
function Mv(r5) {
  var e = r5.alternate;
  return r5 === Te || e !== null && e === Te;
}
function kv(r5, e) {
  Ls = dl = true;
  var t = r5.pending;
  t === null ? e.next = e : (e.next = t.next, t.next = e), r5.pending = e;
}
function Dv(r5, e, t) {
  if (t & 4194240) {
    var n = e.lanes;
    n &= r5.pendingLanes, t |= n, e.lanes = t, Vd(r5, t);
  }
}
var fl = { readContext: Pt, useCallback: qe, useContext: qe, useEffect: qe, useImperativeHandle: qe, useInsertionEffect: qe, useLayoutEffect: qe, useMemo: qe, useReducer: qe, useRef: qe, useState: qe, useDebugValue: qe, useDeferredValue: qe, useTransition: qe, useMutableSource: qe, useSyncExternalStore: qe, useId: qe, unstable_isNewReconciler: false }, o1 = { readContext: Pt, useCallback: function(r5, e) {
  return nr().memoizedState = [r5, e === void 0 ? null : e], r5;
}, useContext: Pt, useEffect: Rp, useImperativeHandle: function(r5, e, t) {
  return t = t != null ? t.concat([r5]) : null, ka(4194308, 4, bv.bind(null, e, r5), t);
}, useLayoutEffect: function(r5, e) {
  return ka(4194308, 4, r5, e);
}, useInsertionEffect: function(r5, e) {
  return ka(4, 2, r5, e);
}, useMemo: function(r5, e) {
  var t = nr();
  return e = e === void 0 ? null : e, r5 = r5(), t.memoizedState = [r5, e], r5;
}, useReducer: function(r5, e, t) {
  var n = nr();
  return e = t !== void 0 ? t(e) : e, n.memoizedState = n.baseState = e, r5 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: r5, lastRenderedState: e }, n.queue = r5, r5 = r5.dispatch = i1.bind(null, Te, r5), [n.memoizedState, r5];
}, useRef: function(r5) {
  var e = nr();
  return r5 = { current: r5 }, e.memoizedState = r5;
}, useState: Pp, useDebugValue: mf, useDeferredValue: function(r5) {
  return nr().memoizedState = r5;
}, useTransition: function() {
  var r5 = Pp(false), e = r5[0];
  return r5 = n1.bind(null, r5[1]), nr().memoizedState = r5, [e, r5];
}, useMutableSource: function() {
}, useSyncExternalStore: function(r5, e, t) {
  var n = Te, i = nr();
  if (ve) {
    if (t === void 0) throw Error(k(407));
    t = t();
  } else {
    if (t = e(), $e === null) throw Error(k(349));
    zn & 30 || yv(n, e, t);
  }
  i.memoizedState = t;
  var s = { value: t, getSnapshot: e };
  return i.queue = s, Rp(_v.bind(null, n, s, r5), [r5]), n.flags |= 2048, ho(9, vv.bind(null, n, s, t, e), void 0, null), t;
}, useId: function() {
  var r5 = nr(), e = $e.identifierPrefix;
  if (ve) {
    var t = wr, n = xr;
    t = (n & ~(1 << 32 - zt(n) - 1)).toString(32) + t, e = ":" + e + "R" + t, t = lo++, 0 < t && (e += "H" + t.toString(32)), e += ":";
  } else t = r1++, e = ":" + e + "r" + t.toString(32) + ":";
  return r5.memoizedState = e;
}, unstable_isNewReconciler: false }, a1 = { readContext: Pt, useCallback: Cv, useContext: Pt, useEffect: pf, useImperativeHandle: Av, useInsertionEffect: Tv, useLayoutEffect: Sv, useMemo: Iv, useReducer: Bu, useRef: Ev, useState: function() {
  return Bu(uo);
}, useDebugValue: mf, useDeferredValue: function(r5) {
  var e = Rt();
  return Pv(e, Oe.memoizedState, r5);
}, useTransition: function() {
  var r5 = Bu(uo)[0], e = Rt().memoizedState;
  return [r5, e];
}, useMutableSource: mv, useSyncExternalStore: gv, useId: Rv, unstable_isNewReconciler: false }, l1 = { readContext: Pt, useCallback: Cv, useContext: Pt, useEffect: pf, useImperativeHandle: Av, useInsertionEffect: Tv, useLayoutEffect: Sv, useMemo: Iv, useReducer: Ou, useRef: Ev, useState: function() {
  return Ou(uo);
}, useDebugValue: mf, useDeferredValue: function(r5) {
  var e = Rt();
  return Oe === null ? e.memoizedState = r5 : Pv(e, Oe.memoizedState, r5);
}, useTransition: function() {
  var r5 = Ou(uo)[0], e = Rt().memoizedState;
  return [r5, e];
}, useMutableSource: mv, useSyncExternalStore: gv, useId: Rv, unstable_isNewReconciler: false };
function Ot(r5, e) {
  if (r5 && r5.defaultProps) {
    e = Se({}, e), r5 = r5.defaultProps;
    for (var t in r5) e[t] === void 0 && (e[t] = r5[t]);
    return e;
  }
  return e;
}
function fc(r5, e, t, n) {
  e = r5.memoizedState, t = t(n, e), t = t == null ? e : Se({}, e, t), r5.memoizedState = t, r5.lanes === 0 && (r5.updateQueue.baseState = t);
}
var Yl = { isMounted: function(r5) {
  return (r5 = r5._reactInternals) ? Kn(r5) === r5 : false;
}, enqueueSetState: function(r5, e, t) {
  r5 = r5._reactInternals;
  var n = st(), i = nn(r5), s = Ar(n, i);
  s.payload = e, t != null && (s.callback = t), e = tn(r5, s, i), e !== null && (Ht(e, r5, i, n), Ra(e, r5, i));
}, enqueueReplaceState: function(r5, e, t) {
  r5 = r5._reactInternals;
  var n = st(), i = nn(r5), s = Ar(n, i);
  s.tag = 1, s.payload = e, t != null && (s.callback = t), e = tn(r5, s, i), e !== null && (Ht(e, r5, i, n), Ra(e, r5, i));
}, enqueueForceUpdate: function(r5, e) {
  r5 = r5._reactInternals;
  var t = st(), n = nn(r5), i = Ar(t, n);
  i.tag = 2, e != null && (i.callback = e), e = tn(r5, i, n), e !== null && (Ht(e, r5, n, t), Ra(e, r5, n));
} };
function Mp(r5, e, t, n, i, s, o) {
  return r5 = r5.stateNode, typeof r5.shouldComponentUpdate == "function" ? r5.shouldComponentUpdate(n, s, o) : e.prototype && e.prototype.isPureReactComponent ? !ro(t, n) || !ro(i, s) : true;
}
function Fv(r5, e, t) {
  var n = false, i = ln, s = e.contextType;
  return typeof s == "object" && s !== null ? s = Pt(s) : (i = dt(e) ? Un : tt.current, n = e.contextTypes, s = (n = n != null) ? Hi(r5, i) : ln), e = new e(t, s), r5.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = Yl, r5.stateNode = e, e._reactInternals = r5, n && (r5 = r5.stateNode, r5.__reactInternalMemoizedUnmaskedChildContext = i, r5.__reactInternalMemoizedMaskedChildContext = s), e;
}
function kp(r5, e, t, n) {
  r5 = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, n), e.state !== r5 && Yl.enqueueReplaceState(e, e.state, null);
}
function pc(r5, e, t, n) {
  var i = r5.stateNode;
  i.props = t, i.state = r5.memoizedState, i.refs = {}, af(r5);
  var s = e.contextType;
  typeof s == "object" && s !== null ? i.context = Pt(s) : (s = dt(e) ? Un : tt.current, i.context = Hi(r5, s)), i.state = r5.memoizedState, s = e.getDerivedStateFromProps, typeof s == "function" && (fc(r5, e, s, t), i.state = r5.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (e = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), e !== i.state && Yl.enqueueReplaceState(i, i.state, null), hl(r5, t, i, n), i.state = r5.memoizedState), typeof i.componentDidMount == "function" && (r5.flags |= 4194308);
}
function Wi(r5, e) {
  try {
    var t = "", n = e;
    do
      t += Bx(n), n = n.return;
    while (n);
    var i = t;
  } catch (s) {
    i = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: r5, source: e, stack: i, digest: null };
}
function Lu(r5, e, t) {
  return { value: r5, source: null, stack: t ?? null, digest: e ?? null };
}
function mc(r5, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var u1 = typeof WeakMap == "function" ? WeakMap : Map;
function Nv(r5, e, t) {
  t = Ar(-1, t), t.tag = 3, t.payload = { element: null };
  var n = e.value;
  return t.callback = function() {
    ml || (ml = true, bc = n), mc(r5, e);
  }, t;
}
function Bv(r5, e, t) {
  t = Ar(-1, t), t.tag = 3;
  var n = r5.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = e.value;
    t.payload = function() {
      return n(i);
    }, t.callback = function() {
      mc(r5, e);
    };
  }
  var s = r5.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
    mc(r5, e), typeof n != "function" && (rn === null ? rn = /* @__PURE__ */ new Set([this]) : rn.add(this));
    var o = e.stack;
    this.componentDidCatch(e.value, { componentStack: o !== null ? o : "" });
  }), t;
}
function Dp(r5, e, t) {
  var n = r5.pingCache;
  if (n === null) {
    n = r5.pingCache = new u1();
    var i = /* @__PURE__ */ new Set();
    n.set(e, i);
  } else i = n.get(e), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(e, i));
  i.has(t) || (i.add(t), r5 = T1.bind(null, r5, e, t), e.then(r5, r5));
}
function Fp(r5) {
  do {
    var e;
    if ((e = r5.tag === 13) && (e = r5.memoizedState, e = e !== null ? e.dehydrated !== null : true), e) return r5;
    r5 = r5.return;
  } while (r5 !== null);
  return null;
}
function Np(r5, e, t, n, i) {
  return r5.mode & 1 ? (r5.flags |= 65536, r5.lanes = i, r5) : (r5 === e ? r5.flags |= 65536 : (r5.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = Ar(-1, 1), e.tag = 2, tn(t, e, 1))), t.lanes |= 1), r5);
}
var h1 = Nr.ReactCurrentOwner, ut = false;
function nt(r5, e, t, n) {
  e.child = r5 === null ? cv(e, null, t, n) : ji(e, r5.child, t, n);
}
function Bp(r5, e, t, n, i) {
  t = t.render;
  var s = e.ref;
  return Mi(e, i), n = df(r5, e, t, n, s, i), t = ff(), r5 !== null && !ut ? (e.updateQueue = r5.updateQueue, e.flags &= -2053, r5.lanes &= ~i, Mr(r5, e, i)) : (ve && t && Jd(e), e.flags |= 1, nt(r5, e, n, i), e.child);
}
function Op(r5, e, t, n, i) {
  if (r5 === null) {
    var s = t.type;
    return typeof s == "function" && !Tf(s) && s.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15, e.type = s, Ov(r5, e, s, n, i)) : (r5 = Ba(t.type, null, n, e, e.mode, i), r5.ref = e.ref, r5.return = e, e.child = r5);
  }
  if (s = r5.child, !(r5.lanes & i)) {
    var o = s.memoizedProps;
    if (t = t.compare, t = t !== null ? t : ro, t(o, n) && r5.ref === e.ref) return Mr(r5, e, i);
  }
  return e.flags |= 1, r5 = sn(s, n), r5.ref = e.ref, r5.return = e, e.child = r5;
}
function Ov(r5, e, t, n, i) {
  if (r5 !== null) {
    var s = r5.memoizedProps;
    if (ro(s, n) && r5.ref === e.ref) if (ut = false, e.pendingProps = n = s, (r5.lanes & i) !== 0) r5.flags & 131072 && (ut = true);
    else return e.lanes = r5.lanes, Mr(r5, e, i);
  }
  return gc(r5, e, t, n, i);
}
function Lv(r5, e, t) {
  var n = e.pendingProps, i = n.children, s = r5 !== null ? r5.memoizedState : null;
  if (n.mode === "hidden") if (!(e.mode & 1)) e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, fe(Ti, mt), mt |= t;
  else {
    if (!(t & 1073741824)) return r5 = s !== null ? s.baseLanes | t : t, e.lanes = e.childLanes = 1073741824, e.memoizedState = { baseLanes: r5, cachePool: null, transitions: null }, e.updateQueue = null, fe(Ti, mt), mt |= r5, null;
    e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, n = s !== null ? s.baseLanes : t, fe(Ti, mt), mt |= n;
  }
  else s !== null ? (n = s.baseLanes | t, e.memoizedState = null) : n = t, fe(Ti, mt), mt |= n;
  return nt(r5, e, i, t), e.child;
}
function Uv(r5, e) {
  var t = e.ref;
  (r5 === null && t !== null || r5 !== null && r5.ref !== t) && (e.flags |= 512, e.flags |= 2097152);
}
function gc(r5, e, t, n, i) {
  var s = dt(t) ? Un : tt.current;
  return s = Hi(e, s), Mi(e, i), t = df(r5, e, t, n, s, i), n = ff(), r5 !== null && !ut ? (e.updateQueue = r5.updateQueue, e.flags &= -2053, r5.lanes &= ~i, Mr(r5, e, i)) : (ve && n && Jd(e), e.flags |= 1, nt(r5, e, t, i), e.child);
}
function Lp(r5, e, t, n, i) {
  if (dt(t)) {
    var s = true;
    sl(e);
  } else s = false;
  if (Mi(e, i), e.stateNode === null) Da(r5, e), Fv(e, t, n), pc(e, t, n, i), n = true;
  else if (r5 === null) {
    var o = e.stateNode, a = e.memoizedProps;
    o.props = a;
    var l = o.context, u = t.contextType;
    typeof u == "object" && u !== null ? u = Pt(u) : (u = dt(t) ? Un : tt.current, u = Hi(e, u));
    var h = t.getDerivedStateFromProps, c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    c || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== n || l !== u) && kp(e, o, n, u), zr = false;
    var d = e.memoizedState;
    o.state = d, hl(e, n, o, i), l = e.memoizedState, a !== n || d !== l || ct.current || zr ? (typeof h == "function" && (fc(e, t, h, n), l = e.memoizedState), (a = zr || Mp(e, t, a, n, d, l, u)) ? (c || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = l), o.props = n, o.state = l, o.context = u, n = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), n = false);
  } else {
    o = e.stateNode, fv(r5, e), a = e.memoizedProps, u = e.type === e.elementType ? a : Ot(e.type, a), o.props = u, c = e.pendingProps, d = o.context, l = t.contextType, typeof l == "object" && l !== null ? l = Pt(l) : (l = dt(t) ? Un : tt.current, l = Hi(e, l));
    var f = t.getDerivedStateFromProps;
    (h = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== c || d !== l) && kp(e, o, n, l), zr = false, d = e.memoizedState, o.state = d, hl(e, n, o, i);
    var p = e.memoizedState;
    a !== c || d !== p || ct.current || zr ? (typeof f == "function" && (fc(e, t, f, n), p = e.memoizedState), (u = zr || Mp(e, t, u, n, d, p, l) || false) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(n, p, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(n, p, l)), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === r5.memoizedProps && d === r5.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === r5.memoizedProps && d === r5.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = p), o.props = n, o.state = p, o.context = l, n = u) : (typeof o.componentDidUpdate != "function" || a === r5.memoizedProps && d === r5.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === r5.memoizedProps && d === r5.memoizedState || (e.flags |= 1024), n = false);
  }
  return yc(r5, e, t, n, s, i);
}
function yc(r5, e, t, n, i, s) {
  Uv(r5, e);
  var o = (e.flags & 128) !== 0;
  if (!n && !o) return i && Tp(e, t, false), Mr(r5, e, s);
  n = e.stateNode, h1.current = e;
  var a = o && typeof t.getDerivedStateFromError != "function" ? null : n.render();
  return e.flags |= 1, r5 !== null && o ? (e.child = ji(e, r5.child, null, s), e.child = ji(e, null, a, s)) : nt(r5, e, a, s), e.memoizedState = n.state, i && Tp(e, t, true), e.child;
}
function Gv(r5) {
  var e = r5.stateNode;
  e.pendingContext ? Ep(r5, e.pendingContext, e.pendingContext !== e.context) : e.context && Ep(r5, e.context, false), lf(r5, e.containerInfo);
}
function Up(r5, e, t, n, i) {
  return $i(), tf(i), e.flags |= 256, nt(r5, e, t, n), e.child;
}
var vc = { dehydrated: null, treeContext: null, retryLane: 0 };
function _c(r5) {
  return { baseLanes: r5, cachePool: null, transitions: null };
}
function zv(r5, e, t) {
  var n = e.pendingProps, i = we.current, s = false, o = (e.flags & 128) !== 0, a;
  if ((a = o) || (a = r5 !== null && r5.memoizedState === null ? false : (i & 2) !== 0), a ? (s = true, e.flags &= -129) : (r5 === null || r5.memoizedState !== null) && (i |= 1), fe(we, i & 1), r5 === null) return cc(e), r5 = e.memoizedState, r5 !== null && (r5 = r5.dehydrated, r5 !== null) ? (e.mode & 1 ? r5.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1, null) : (o = n.children, r5 = n.fallback, s ? (n = e.mode, s = e.child, o = { mode: "hidden", children: o }, !(n & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = Zl(o, n, 0, null), r5 = Nn(r5, n, t, null), s.return = e, r5.return = e, s.sibling = r5, e.child = s, e.child.memoizedState = _c(t), e.memoizedState = vc, r5) : gf(e, o));
  if (i = r5.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return c1(r5, e, o, n, a, i, t);
  if (s) {
    s = n.fallback, o = e.mode, i = r5.child, a = i.sibling;
    var l = { mode: "hidden", children: n.children };
    return !(o & 1) && e.child !== i ? (n = e.child, n.childLanes = 0, n.pendingProps = l, e.deletions = null) : (n = sn(i, l), n.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = sn(a, s) : (s = Nn(s, o, t, null), s.flags |= 2), s.return = e, n.return = e, n.sibling = s, e.child = n, n = s, s = e.child, o = r5.child.memoizedState, o = o === null ? _c(t) : { baseLanes: o.baseLanes | t, cachePool: null, transitions: o.transitions }, s.memoizedState = o, s.childLanes = r5.childLanes & ~t, e.memoizedState = vc, n;
  }
  return s = r5.child, r5 = s.sibling, n = sn(s, { mode: "visible", children: n.children }), !(e.mode & 1) && (n.lanes = t), n.return = e, n.sibling = null, r5 !== null && (t = e.deletions, t === null ? (e.deletions = [r5], e.flags |= 16) : t.push(r5)), e.child = n, e.memoizedState = null, n;
}
function gf(r5, e) {
  return e = Zl({ mode: "visible", children: e }, r5.mode, 0, null), e.return = r5, r5.child = e;
}
function Wo(r5, e, t, n) {
  return n !== null && tf(n), ji(e, r5.child, null, t), r5 = gf(e, e.pendingProps.children), r5.flags |= 2, e.memoizedState = null, r5;
}
function c1(r5, e, t, n, i, s, o) {
  if (t) return e.flags & 256 ? (e.flags &= -257, n = Lu(Error(k(422))), Wo(r5, e, o, n)) : e.memoizedState !== null ? (e.child = r5.child, e.flags |= 128, null) : (s = n.fallback, i = e.mode, n = Zl({ mode: "visible", children: n.children }, i, 0, null), s = Nn(s, i, o, null), s.flags |= 2, n.return = e, s.return = e, n.sibling = s, e.child = n, e.mode & 1 && ji(e, r5.child, null, o), e.child.memoizedState = _c(o), e.memoizedState = vc, s);
  if (!(e.mode & 1)) return Wo(r5, e, o, null);
  if (i.data === "$!") {
    if (n = i.nextSibling && i.nextSibling.dataset, n) var a = n.dgst;
    return n = a, s = Error(k(419)), n = Lu(s, n, void 0), Wo(r5, e, o, n);
  }
  if (a = (o & r5.childLanes) !== 0, ut || a) {
    if (n = $e, n !== null) {
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
      i = i & (n.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, Rr(r5, i), Ht(n, r5, i, -1));
    }
    return Ef(), n = Lu(Error(k(421))), Wo(r5, e, o, n);
  }
  return i.data === "$?" ? (e.flags |= 128, e.child = r5.child, e = S1.bind(null, r5), i._reactRetry = e, null) : (r5 = s.treeContext, gt = en(i.nextSibling), vt = e, ve = true, Ut = null, r5 !== null && (Tt[St++] = xr, Tt[St++] = wr, Tt[St++] = Gn, xr = r5.id, wr = r5.overflow, Gn = e), e = gf(e, n.children), e.flags |= 4096, e);
}
function Gp(r5, e, t) {
  r5.lanes |= e;
  var n = r5.alternate;
  n !== null && (n.lanes |= e), dc(r5.return, e, t);
}
function Uu(r5, e, t, n, i) {
  var s = r5.memoizedState;
  s === null ? r5.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: n, tail: t, tailMode: i } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = t, s.tailMode = i);
}
function Hv(r5, e, t) {
  var n = e.pendingProps, i = n.revealOrder, s = n.tail;
  if (nt(r5, e, n.children, t), n = we.current, n & 2) n = n & 1 | 2, e.flags |= 128;
  else {
    if (r5 !== null && r5.flags & 128) e: for (r5 = e.child; r5 !== null; ) {
      if (r5.tag === 13) r5.memoizedState !== null && Gp(r5, t, e);
      else if (r5.tag === 19) Gp(r5, t, e);
      else if (r5.child !== null) {
        r5.child.return = r5, r5 = r5.child;
        continue;
      }
      if (r5 === e) break e;
      for (; r5.sibling === null; ) {
        if (r5.return === null || r5.return === e) break e;
        r5 = r5.return;
      }
      r5.sibling.return = r5.return, r5 = r5.sibling;
    }
    n &= 1;
  }
  if (fe(we, n), !(e.mode & 1)) e.memoizedState = null;
  else switch (i) {
    case "forwards":
      for (t = e.child, i = null; t !== null; ) r5 = t.alternate, r5 !== null && cl(r5) === null && (i = t), t = t.sibling;
      t = i, t === null ? (i = e.child, e.child = null) : (i = t.sibling, t.sibling = null), Uu(e, false, i, t, s);
      break;
    case "backwards":
      for (t = null, i = e.child, e.child = null; i !== null; ) {
        if (r5 = i.alternate, r5 !== null && cl(r5) === null) {
          e.child = i;
          break;
        }
        r5 = i.sibling, i.sibling = t, t = i, i = r5;
      }
      Uu(e, true, t, null, s);
      break;
    case "together":
      Uu(e, false, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function Da(r5, e) {
  !(e.mode & 1) && r5 !== null && (r5.alternate = null, e.alternate = null, e.flags |= 2);
}
function Mr(r5, e, t) {
  if (r5 !== null && (e.dependencies = r5.dependencies), Hn |= e.lanes, !(t & e.childLanes)) return null;
  if (r5 !== null && e.child !== r5.child) throw Error(k(153));
  if (e.child !== null) {
    for (r5 = e.child, t = sn(r5, r5.pendingProps), e.child = t, t.return = e; r5.sibling !== null; ) r5 = r5.sibling, t = t.sibling = sn(r5, r5.pendingProps), t.return = e;
    t.sibling = null;
  }
  return e.child;
}
function d1(r5, e, t) {
  switch (e.tag) {
    case 3:
      Gv(e), $i();
      break;
    case 5:
      pv(e);
      break;
    case 1:
      dt(e.type) && sl(e);
      break;
    case 4:
      lf(e, e.stateNode.containerInfo);
      break;
    case 10:
      var n = e.type._context, i = e.memoizedProps.value;
      fe(ll, n._currentValue), n._currentValue = i;
      break;
    case 13:
      if (n = e.memoizedState, n !== null) return n.dehydrated !== null ? (fe(we, we.current & 1), e.flags |= 128, null) : t & e.child.childLanes ? zv(r5, e, t) : (fe(we, we.current & 1), r5 = Mr(r5, e, t), r5 !== null ? r5.sibling : null);
      fe(we, we.current & 1);
      break;
    case 19:
      if (n = (t & e.childLanes) !== 0, r5.flags & 128) {
        if (n) return Hv(r5, e, t);
        e.flags |= 128;
      }
      if (i = e.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), fe(we, we.current), n) break;
      return null;
    case 22:
    case 23:
      return e.lanes = 0, Lv(r5, e, t);
  }
  return Mr(r5, e, t);
}
var $v, xc, jv, Vv;
$v = function(r5, e) {
  for (var t = e.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) r5.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
xc = function() {
};
jv = function(r5, e, t, n) {
  var i = r5.memoizedProps;
  if (i !== n) {
    r5 = e.stateNode, Dn(hr.current);
    var s = null;
    switch (t) {
      case "input":
        i = Hh(r5, i), n = Hh(r5, n), s = [];
        break;
      case "select":
        i = Se({}, i, { value: void 0 }), n = Se({}, n, { value: void 0 }), s = [];
        break;
      case "textarea":
        i = Vh(r5, i), n = Vh(r5, n), s = [];
        break;
      default:
        typeof i.onClick != "function" && typeof n.onClick == "function" && (r5.onclick = nl);
    }
    Xh(t, n);
    var o;
    t = null;
    for (u in i) if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) if (u === "style") {
      var a = i[u];
      for (o in a) a.hasOwnProperty(o) && (t || (t = {}), t[o] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ks.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (a = i == null ? void 0 : i[u], n.hasOwnProperty(u) && l !== a && (l != null || a != null)) if (u === "style") if (a) {
        for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (t || (t = {}), t[o] = "");
        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (t || (t = {}), t[o] = l[o]);
      } else t || (s || (s = []), s.push(u, t)), t = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ks.hasOwnProperty(u) ? (l != null && u === "onScroll" && pe("scroll", r5), s || a === l || (s = [])) : (s = s || []).push(u, l));
    }
    t && (s = s || []).push("style", t);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Vv = function(r5, e, t, n) {
  t !== n && (e.flags |= 4);
};
function cs(r5, e) {
  if (!ve) switch (r5.tailMode) {
    case "hidden":
      e = r5.tail;
      for (var t = null; e !== null; ) e.alternate !== null && (t = e), e = e.sibling;
      t === null ? r5.tail = null : t.sibling = null;
      break;
    case "collapsed":
      t = r5.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e || r5.tail === null ? r5.tail = null : r5.tail.sibling = null : n.sibling = null;
  }
}
function Ze(r5) {
  var e = r5.alternate !== null && r5.alternate.child === r5.child, t = 0, n = 0;
  if (e) for (var i = r5.child; i !== null; ) t |= i.lanes | i.childLanes, n |= i.subtreeFlags & 14680064, n |= i.flags & 14680064, i.return = r5, i = i.sibling;
  else for (i = r5.child; i !== null; ) t |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = r5, i = i.sibling;
  return r5.subtreeFlags |= n, r5.childLanes = t, e;
}
function f1(r5, e, t) {
  var n = e.pendingProps;
  switch (ef(e), e.tag) {
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
      return Ze(e), null;
    case 1:
      return dt(e.type) && il(), Ze(e), null;
    case 3:
      return n = e.stateNode, Vi(), ge(ct), ge(tt), hf(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (r5 === null || r5.child === null) && (jo(e) ? e.flags |= 4 : r5 === null || r5.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024, Ut !== null && (Ic(Ut), Ut = null))), xc(r5, e), Ze(e), null;
    case 5:
      uf(e);
      var i = Dn(ao.current);
      if (t = e.type, r5 !== null && e.stateNode != null) jv(r5, e, t, n, i), r5.ref !== e.ref && (e.flags |= 512, e.flags |= 2097152);
      else {
        if (!n) {
          if (e.stateNode === null) throw Error(k(166));
          return Ze(e), null;
        }
        if (r5 = Dn(hr.current), jo(e)) {
          n = e.stateNode, t = e.type;
          var s = e.memoizedProps;
          switch (n[ar] = e, n[so] = s, r5 = (e.mode & 1) !== 0, t) {
            case "dialog":
              pe("cancel", n), pe("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              pe("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ts.length; i++) pe(Ts[i], n);
              break;
            case "source":
              pe("error", n);
              break;
            case "img":
            case "image":
            case "link":
              pe("error", n), pe("load", n);
              break;
            case "details":
              pe("toggle", n);
              break;
            case "input":
              Kf(n, s), pe("invalid", n);
              break;
            case "select":
              n._wrapperState = { wasMultiple: !!s.multiple }, pe("invalid", n);
              break;
            case "textarea":
              Zf(n, s), pe("invalid", n);
          }
          Xh(t, s), i = null;
          for (var o in s) if (s.hasOwnProperty(o)) {
            var a = s[o];
            o === "children" ? typeof a == "string" ? n.textContent !== a && (s.suppressHydrationWarning !== true && $o(n.textContent, a, r5), i = ["children", a]) : typeof a == "number" && n.textContent !== "" + a && (s.suppressHydrationWarning !== true && $o(n.textContent, a, r5), i = ["children", "" + a]) : Ks.hasOwnProperty(o) && a != null && o === "onScroll" && pe("scroll", n);
          }
          switch (t) {
            case "input":
              No(n), qf(n, s, true);
              break;
            case "textarea":
              No(n), Qf(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (n.onclick = nl);
          }
          n = i, e.updateQueue = n, n !== null && (e.flags |= 4);
        } else {
          o = i.nodeType === 9 ? i : i.ownerDocument, r5 === "http://www.w3.org/1999/xhtml" && (r5 = _y(t)), r5 === "http://www.w3.org/1999/xhtml" ? t === "script" ? (r5 = o.createElement("div"), r5.innerHTML = "<script><\/script>", r5 = r5.removeChild(r5.firstChild)) : typeof n.is == "string" ? r5 = o.createElement(t, { is: n.is }) : (r5 = o.createElement(t), t === "select" && (o = r5, n.multiple ? o.multiple = true : n.size && (o.size = n.size))) : r5 = o.createElementNS(r5, t), r5[ar] = e, r5[so] = n, $v(r5, e, false, false), e.stateNode = r5;
          e: {
            switch (o = Yh(t, n), t) {
              case "dialog":
                pe("cancel", r5), pe("close", r5), i = n;
                break;
              case "iframe":
              case "object":
              case "embed":
                pe("load", r5), i = n;
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ts.length; i++) pe(Ts[i], r5);
                i = n;
                break;
              case "source":
                pe("error", r5), i = n;
                break;
              case "img":
              case "image":
              case "link":
                pe("error", r5), pe("load", r5), i = n;
                break;
              case "details":
                pe("toggle", r5), i = n;
                break;
              case "input":
                Kf(r5, n), i = Hh(r5, n), pe("invalid", r5);
                break;
              case "option":
                i = n;
                break;
              case "select":
                r5._wrapperState = { wasMultiple: !!n.multiple }, i = Se({}, n, { value: void 0 }), pe("invalid", r5);
                break;
              case "textarea":
                Zf(r5, n), i = Vh(r5, n), pe("invalid", r5);
                break;
              default:
                i = n;
            }
            Xh(t, i), a = i;
            for (s in a) if (a.hasOwnProperty(s)) {
              var l = a[s];
              s === "style" ? Ey(r5, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && xy(r5, l)) : s === "children" ? typeof l == "string" ? (t !== "textarea" || l !== "") && qs(r5, l) : typeof l == "number" && qs(r5, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ks.hasOwnProperty(s) ? l != null && s === "onScroll" && pe("scroll", r5) : l != null && Ud(r5, s, l, o));
            }
            switch (t) {
              case "input":
                No(r5), qf(r5, n, false);
                break;
              case "textarea":
                No(r5), Qf(r5);
                break;
              case "option":
                n.value != null && r5.setAttribute("value", "" + an(n.value));
                break;
              case "select":
                r5.multiple = !!n.multiple, s = n.value, s != null ? Ci(r5, !!n.multiple, s, false) : n.defaultValue != null && Ci(r5, !!n.multiple, n.defaultValue, true);
                break;
              default:
                typeof i.onClick == "function" && (r5.onclick = nl);
            }
            switch (t) {
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
      return Ze(e), null;
    case 6:
      if (r5 && e.stateNode != null) Vv(r5, e, r5.memoizedProps, n);
      else {
        if (typeof n != "string" && e.stateNode === null) throw Error(k(166));
        if (t = Dn(ao.current), Dn(hr.current), jo(e)) {
          if (n = e.stateNode, t = e.memoizedProps, n[ar] = e, (s = n.nodeValue !== t) && (r5 = vt, r5 !== null)) switch (r5.tag) {
            case 3:
              $o(n.nodeValue, t, (r5.mode & 1) !== 0);
              break;
            case 5:
              r5.memoizedProps.suppressHydrationWarning !== true && $o(n.nodeValue, t, (r5.mode & 1) !== 0);
          }
          s && (e.flags |= 4);
        } else n = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(n), n[ar] = e, e.stateNode = n;
      }
      return Ze(e), null;
    case 13:
      if (ge(we), n = e.memoizedState, r5 === null || r5.memoizedState !== null && r5.memoizedState.dehydrated !== null) {
        if (ve && gt !== null && e.mode & 1 && !(e.flags & 128)) uv(), $i(), e.flags |= 98560, s = false;
        else if (s = jo(e), n !== null && n.dehydrated !== null) {
          if (r5 === null) {
            if (!s) throw Error(k(318));
            if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(k(317));
            s[ar] = e;
          } else $i(), !(e.flags & 128) && (e.memoizedState = null), e.flags |= 4;
          Ze(e), s = false;
        } else Ut !== null && (Ic(Ut), Ut = null), s = true;
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128 ? (e.lanes = t, e) : (n = n !== null, n !== (r5 !== null && r5.memoizedState !== null) && n && (e.child.flags |= 8192, e.mode & 1 && (r5 === null || we.current & 1 ? Le === 0 && (Le = 3) : Ef())), e.updateQueue !== null && (e.flags |= 4), Ze(e), null);
    case 4:
      return Vi(), xc(r5, e), r5 === null && no(e.stateNode.containerInfo), Ze(e), null;
    case 10:
      return sf(e.type._context), Ze(e), null;
    case 17:
      return dt(e.type) && il(), Ze(e), null;
    case 19:
      if (ge(we), s = e.memoizedState, s === null) return Ze(e), null;
      if (n = (e.flags & 128) !== 0, o = s.rendering, o === null) if (n) cs(s, false);
      else {
        if (Le !== 0 || r5 !== null && r5.flags & 128) for (r5 = e.child; r5 !== null; ) {
          if (o = cl(r5), o !== null) {
            for (e.flags |= 128, cs(s, false), n = o.updateQueue, n !== null && (e.updateQueue = n, e.flags |= 4), e.subtreeFlags = 0, n = t, t = e.child; t !== null; ) s = t, r5 = n, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = r5, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, r5 = o.dependencies, s.dependencies = r5 === null ? null : { lanes: r5.lanes, firstContext: r5.firstContext }), t = t.sibling;
            return fe(we, we.current & 1 | 2), e.child;
          }
          r5 = r5.sibling;
        }
        s.tail !== null && Me() > Xi && (e.flags |= 128, n = true, cs(s, false), e.lanes = 4194304);
      }
      else {
        if (!n) if (r5 = cl(o), r5 !== null) {
          if (e.flags |= 128, n = true, t = r5.updateQueue, t !== null && (e.updateQueue = t, e.flags |= 4), cs(s, true), s.tail === null && s.tailMode === "hidden" && !o.alternate && !ve) return Ze(e), null;
        } else 2 * Me() - s.renderingStartTime > Xi && t !== 1073741824 && (e.flags |= 128, n = true, cs(s, false), e.lanes = 4194304);
        s.isBackwards ? (o.sibling = e.child, e.child = o) : (t = s.last, t !== null ? t.sibling = o : e.child = o, s.last = o);
      }
      return s.tail !== null ? (e = s.tail, s.rendering = e, s.tail = e.sibling, s.renderingStartTime = Me(), e.sibling = null, t = we.current, fe(we, n ? t & 1 | 2 : t & 1), e) : (Ze(e), null);
    case 22:
    case 23:
      return wf(), n = e.memoizedState !== null, r5 !== null && r5.memoizedState !== null !== n && (e.flags |= 8192), n && e.mode & 1 ? mt & 1073741824 && (Ze(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ze(e), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, e.tag));
}
function p1(r5, e) {
  switch (ef(e), e.tag) {
    case 1:
      return dt(e.type) && il(), r5 = e.flags, r5 & 65536 ? (e.flags = r5 & -65537 | 128, e) : null;
    case 3:
      return Vi(), ge(ct), ge(tt), hf(), r5 = e.flags, r5 & 65536 && !(r5 & 128) ? (e.flags = r5 & -65537 | 128, e) : null;
    case 5:
      return uf(e), null;
    case 13:
      if (ge(we), r5 = e.memoizedState, r5 !== null && r5.dehydrated !== null) {
        if (e.alternate === null) throw Error(k(340));
        $i();
      }
      return r5 = e.flags, r5 & 65536 ? (e.flags = r5 & -65537 | 128, e) : null;
    case 19:
      return ge(we), null;
    case 4:
      return Vi(), null;
    case 10:
      return sf(e.type._context), null;
    case 22:
    case 23:
      return wf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xo = false, Qe = false, m1 = typeof WeakSet == "function" ? WeakSet : Set, j = null;
function Ei(r5, e) {
  var t = r5.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    Pe(r5, e, n);
  }
  else t.current = null;
}
function wc(r5, e, t) {
  try {
    t();
  } catch (n) {
    Pe(r5, e, n);
  }
}
var zp = false;
function g1(r5, e) {
  if (ic = el, r5 = qy(), Qd(r5)) {
    if ("selectionStart" in r5) var t = { start: r5.selectionStart, end: r5.selectionEnd };
    else e: {
      t = (t = r5.ownerDocument) && t.defaultView || window;
      var n = t.getSelection && t.getSelection();
      if (n && n.rangeCount !== 0) {
        t = n.anchorNode;
        var i = n.anchorOffset, s = n.focusNode;
        n = n.focusOffset;
        try {
          t.nodeType, s.nodeType;
        } catch {
          t = null;
          break e;
        }
        var o = 0, a = -1, l = -1, u = 0, h = 0, c = r5, d = null;
        t: for (; ; ) {
          for (var f; c !== t || i !== 0 && c.nodeType !== 3 || (a = o + i), c !== s || n !== 0 && c.nodeType !== 3 || (l = o + n), c.nodeType === 3 && (o += c.nodeValue.length), (f = c.firstChild) !== null; ) d = c, c = f;
          for (; ; ) {
            if (c === r5) break t;
            if (d === t && ++u === i && (a = o), d === s && ++h === n && (l = o), (f = c.nextSibling) !== null) break;
            c = d, d = c.parentNode;
          }
          c = f;
        }
        t = a === -1 || l === -1 ? null : { start: a, end: l };
      } else t = null;
    }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (sc = { focusedElem: r5, selectionRange: t }, el = false, j = e; j !== null; ) if (e = j, r5 = e.child, (e.subtreeFlags & 1028) !== 0 && r5 !== null) r5.return = e, j = r5;
  else for (; j !== null; ) {
    e = j;
    try {
      var p = e.alternate;
      if (e.flags & 1024) switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (p !== null) {
            var v = p.memoizedProps, _ = p.memoizedState, g = e.stateNode, y = g.getSnapshotBeforeUpdate(e.elementType === e.type ? v : Ot(e.type, v), _);
            g.__reactInternalSnapshotBeforeUpdate = y;
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
          throw Error(k(163));
      }
    } catch (x) {
      Pe(e, e.return, x);
    }
    if (r5 = e.sibling, r5 !== null) {
      r5.return = e.return, j = r5;
      break;
    }
    j = e.return;
  }
  return p = zp, zp = false, p;
}
function Us(r5, e, t) {
  var n = e.updateQueue;
  if (n = n !== null ? n.lastEffect : null, n !== null) {
    var i = n = n.next;
    do {
      if ((i.tag & r5) === r5) {
        var s = i.destroy;
        i.destroy = void 0, s !== void 0 && wc(e, t, s);
      }
      i = i.next;
    } while (i !== n);
  }
}
function Kl(r5, e) {
  if (e = e.updateQueue, e = e !== null ? e.lastEffect : null, e !== null) {
    var t = e = e.next;
    do {
      if ((t.tag & r5) === r5) {
        var n = t.create;
        t.destroy = n();
      }
      t = t.next;
    } while (t !== e);
  }
}
function Ec(r5) {
  var e = r5.ref;
  if (e !== null) {
    var t = r5.stateNode;
    switch (r5.tag) {
      case 5:
        r5 = t;
        break;
      default:
        r5 = t;
    }
    typeof e == "function" ? e(r5) : e.current = r5;
  }
}
function Wv(r5) {
  var e = r5.alternate;
  e !== null && (r5.alternate = null, Wv(e)), r5.child = null, r5.deletions = null, r5.sibling = null, r5.tag === 5 && (e = r5.stateNode, e !== null && (delete e[ar], delete e[so], delete e[lc], delete e[Qw], delete e[Jw])), r5.stateNode = null, r5.return = null, r5.dependencies = null, r5.memoizedProps = null, r5.memoizedState = null, r5.pendingProps = null, r5.stateNode = null, r5.updateQueue = null;
}
function Xv(r5) {
  return r5.tag === 5 || r5.tag === 3 || r5.tag === 4;
}
function Hp(r5) {
  e: for (; ; ) {
    for (; r5.sibling === null; ) {
      if (r5.return === null || Xv(r5.return)) return null;
      r5 = r5.return;
    }
    for (r5.sibling.return = r5.return, r5 = r5.sibling; r5.tag !== 5 && r5.tag !== 6 && r5.tag !== 18; ) {
      if (r5.flags & 2 || r5.child === null || r5.tag === 4) continue e;
      r5.child.return = r5, r5 = r5.child;
    }
    if (!(r5.flags & 2)) return r5.stateNode;
  }
}
function Tc(r5, e, t) {
  var n = r5.tag;
  if (n === 5 || n === 6) r5 = r5.stateNode, e ? t.nodeType === 8 ? t.parentNode.insertBefore(r5, e) : t.insertBefore(r5, e) : (t.nodeType === 8 ? (e = t.parentNode, e.insertBefore(r5, t)) : (e = t, e.appendChild(r5)), t = t._reactRootContainer, t != null || e.onclick !== null || (e.onclick = nl));
  else if (n !== 4 && (r5 = r5.child, r5 !== null)) for (Tc(r5, e, t), r5 = r5.sibling; r5 !== null; ) Tc(r5, e, t), r5 = r5.sibling;
}
function Sc(r5, e, t) {
  var n = r5.tag;
  if (n === 5 || n === 6) r5 = r5.stateNode, e ? t.insertBefore(r5, e) : t.appendChild(r5);
  else if (n !== 4 && (r5 = r5.child, r5 !== null)) for (Sc(r5, e, t), r5 = r5.sibling; r5 !== null; ) Sc(r5, e, t), r5 = r5.sibling;
}
var We = null, Lt = false;
function Br(r5, e, t) {
  for (t = t.child; t !== null; ) Yv(r5, e, t), t = t.sibling;
}
function Yv(r5, e, t) {
  if (ur && typeof ur.onCommitFiberUnmount == "function") try {
    ur.onCommitFiberUnmount(zl, t);
  } catch {
  }
  switch (t.tag) {
    case 5:
      Qe || Ei(t, e);
    case 6:
      var n = We, i = Lt;
      We = null, Br(r5, e, t), We = n, Lt = i, We !== null && (Lt ? (r5 = We, t = t.stateNode, r5.nodeType === 8 ? r5.parentNode.removeChild(t) : r5.removeChild(t)) : We.removeChild(t.stateNode));
      break;
    case 18:
      We !== null && (Lt ? (r5 = We, t = t.stateNode, r5.nodeType === 8 ? ku(r5.parentNode, t) : r5.nodeType === 1 && ku(r5, t), eo(r5)) : ku(We, t.stateNode));
      break;
    case 4:
      n = We, i = Lt, We = t.stateNode.containerInfo, Lt = true, Br(r5, e, t), We = n, Lt = i;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Qe && (n = t.updateQueue, n !== null && (n = n.lastEffect, n !== null))) {
        i = n = n.next;
        do {
          var s = i, o = s.destroy;
          s = s.tag, o !== void 0 && (s & 2 || s & 4) && wc(t, e, o), i = i.next;
        } while (i !== n);
      }
      Br(r5, e, t);
      break;
    case 1:
      if (!Qe && (Ei(t, e), n = t.stateNode, typeof n.componentWillUnmount == "function")) try {
        n.props = t.memoizedProps, n.state = t.memoizedState, n.componentWillUnmount();
      } catch (a) {
        Pe(t, e, a);
      }
      Br(r5, e, t);
      break;
    case 21:
      Br(r5, e, t);
      break;
    case 22:
      t.mode & 1 ? (Qe = (n = Qe) || t.memoizedState !== null, Br(r5, e, t), Qe = n) : Br(r5, e, t);
      break;
    default:
      Br(r5, e, t);
  }
}
function $p(r5) {
  var e = r5.updateQueue;
  if (e !== null) {
    r5.updateQueue = null;
    var t = r5.stateNode;
    t === null && (t = r5.stateNode = new m1()), e.forEach(function(n) {
      var i = b1.bind(null, r5, n);
      t.has(n) || (t.add(n), n.then(i, i));
    });
  }
}
function Mt(r5, e) {
  var t = e.deletions;
  if (t !== null) for (var n = 0; n < t.length; n++) {
    var i = t[n];
    try {
      var s = r5, o = e, a = o;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            We = a.stateNode, Lt = false;
            break e;
          case 3:
            We = a.stateNode.containerInfo, Lt = true;
            break e;
          case 4:
            We = a.stateNode.containerInfo, Lt = true;
            break e;
        }
        a = a.return;
      }
      if (We === null) throw Error(k(160));
      Yv(s, o, i), We = null, Lt = false;
      var l = i.alternate;
      l !== null && (l.return = null), i.return = null;
    } catch (u) {
      Pe(i, e, u);
    }
  }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) Kv(e, r5), e = e.sibling;
}
function Kv(r5, e) {
  var t = r5.alternate, n = r5.flags;
  switch (r5.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Mt(e, r5), Kt(r5), n & 4) {
        try {
          Us(3, r5, r5.return), Kl(3, r5);
        } catch (v) {
          Pe(r5, r5.return, v);
        }
        try {
          Us(5, r5, r5.return);
        } catch (v) {
          Pe(r5, r5.return, v);
        }
      }
      break;
    case 1:
      Mt(e, r5), Kt(r5), n & 512 && t !== null && Ei(t, t.return);
      break;
    case 5:
      if (Mt(e, r5), Kt(r5), n & 512 && t !== null && Ei(t, t.return), r5.flags & 32) {
        var i = r5.stateNode;
        try {
          qs(i, "");
        } catch (v) {
          Pe(r5, r5.return, v);
        }
      }
      if (n & 4 && (i = r5.stateNode, i != null)) {
        var s = r5.memoizedProps, o = t !== null ? t.memoizedProps : s, a = r5.type, l = r5.updateQueue;
        if (r5.updateQueue = null, l !== null) try {
          a === "input" && s.type === "radio" && s.name != null && yy(i, s), Yh(a, o);
          var u = Yh(a, s);
          for (o = 0; o < l.length; o += 2) {
            var h = l[o], c = l[o + 1];
            h === "style" ? Ey(i, c) : h === "dangerouslySetInnerHTML" ? xy(i, c) : h === "children" ? qs(i, c) : Ud(i, h, c, u);
          }
          switch (a) {
            case "input":
              $h(i, s);
              break;
            case "textarea":
              vy(i, s);
              break;
            case "select":
              var d = i._wrapperState.wasMultiple;
              i._wrapperState.wasMultiple = !!s.multiple;
              var f = s.value;
              f != null ? Ci(i, !!s.multiple, f, false) : d !== !!s.multiple && (s.defaultValue != null ? Ci(i, !!s.multiple, s.defaultValue, true) : Ci(i, !!s.multiple, s.multiple ? [] : "", false));
          }
          i[so] = s;
        } catch (v) {
          Pe(r5, r5.return, v);
        }
      }
      break;
    case 6:
      if (Mt(e, r5), Kt(r5), n & 4) {
        if (r5.stateNode === null) throw Error(k(162));
        i = r5.stateNode, s = r5.memoizedProps;
        try {
          i.nodeValue = s;
        } catch (v) {
          Pe(r5, r5.return, v);
        }
      }
      break;
    case 3:
      if (Mt(e, r5), Kt(r5), n & 4 && t !== null && t.memoizedState.isDehydrated) try {
        eo(e.containerInfo);
      } catch (v) {
        Pe(r5, r5.return, v);
      }
      break;
    case 4:
      Mt(e, r5), Kt(r5);
      break;
    case 13:
      Mt(e, r5), Kt(r5), i = r5.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (_f = Me())), n & 4 && $p(r5);
      break;
    case 22:
      if (h = t !== null && t.memoizedState !== null, r5.mode & 1 ? (Qe = (u = Qe) || h, Mt(e, r5), Qe = u) : Mt(e, r5), Kt(r5), n & 8192) {
        if (u = r5.memoizedState !== null, (r5.stateNode.isHidden = u) && !h && r5.mode & 1) for (j = r5, h = r5.child; h !== null; ) {
          for (c = j = h; j !== null; ) {
            switch (d = j, f = d.child, d.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Us(4, d, d.return);
                break;
              case 1:
                Ei(d, d.return);
                var p = d.stateNode;
                if (typeof p.componentWillUnmount == "function") {
                  n = d, t = d.return;
                  try {
                    e = n, p.props = e.memoizedProps, p.state = e.memoizedState, p.componentWillUnmount();
                  } catch (v) {
                    Pe(n, t, v);
                  }
                }
                break;
              case 5:
                Ei(d, d.return);
                break;
              case 22:
                if (d.memoizedState !== null) {
                  Vp(c);
                  continue;
                }
            }
            f !== null ? (f.return = d, j = f) : Vp(c);
          }
          h = h.sibling;
        }
        e: for (h = null, c = r5; ; ) {
          if (c.tag === 5) {
            if (h === null) {
              h = c;
              try {
                i = c.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = c.stateNode, l = c.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = wy("display", o));
              } catch (v) {
                Pe(r5, r5.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (h === null) try {
              c.stateNode.nodeValue = u ? "" : c.memoizedProps;
            } catch (v) {
              Pe(r5, r5.return, v);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === r5) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === r5) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === r5) break e;
            h === c && (h = null), c = c.return;
          }
          h === c && (h = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      Mt(e, r5), Kt(r5), n & 4 && $p(r5);
      break;
    case 21:
      break;
    default:
      Mt(e, r5), Kt(r5);
  }
}
function Kt(r5) {
  var e = r5.flags;
  if (e & 2) {
    try {
      e: {
        for (var t = r5.return; t !== null; ) {
          if (Xv(t)) {
            var n = t;
            break e;
          }
          t = t.return;
        }
        throw Error(k(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (qs(i, ""), n.flags &= -33);
          var s = Hp(r5);
          Sc(r5, s, i);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo, a = Hp(r5);
          Tc(r5, a, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (l) {
      Pe(r5, r5.return, l);
    }
    r5.flags &= -3;
  }
  e & 4096 && (r5.flags &= -4097);
}
function y1(r5, e, t) {
  j = r5, qv(r5);
}
function qv(r5, e, t) {
  for (var n = (r5.mode & 1) !== 0; j !== null; ) {
    var i = j, s = i.child;
    if (i.tag === 22 && n) {
      var o = i.memoizedState !== null || Xo;
      if (!o) {
        var a = i.alternate, l = a !== null && a.memoizedState !== null || Qe;
        a = Xo;
        var u = Qe;
        if (Xo = o, (Qe = l) && !u) for (j = i; j !== null; ) o = j, l = o.child, o.tag === 22 && o.memoizedState !== null ? Wp(i) : l !== null ? (l.return = o, j = l) : Wp(i);
        for (; s !== null; ) j = s, qv(s), s = s.sibling;
        j = i, Xo = a, Qe = u;
      }
      jp(r5);
    } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, j = s) : jp(r5);
  }
}
function jp(r5) {
  for (; j !== null; ) {
    var e = j;
    if (e.flags & 8772) {
      var t = e.alternate;
      try {
        if (e.flags & 8772) switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Qe || Kl(5, e);
            break;
          case 1:
            var n = e.stateNode;
            if (e.flags & 4 && !Qe) if (t === null) n.componentDidMount();
            else {
              var i = e.elementType === e.type ? t.memoizedProps : Ot(e.type, t.memoizedProps);
              n.componentDidUpdate(i, t.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
            }
            var s = e.updateQueue;
            s !== null && Ip(e, s, n);
            break;
          case 3:
            var o = e.updateQueue;
            if (o !== null) {
              if (t = null, e.child !== null) switch (e.child.tag) {
                case 5:
                  t = e.child.stateNode;
                  break;
                case 1:
                  t = e.child.stateNode;
              }
              Ip(e, o, t);
            }
            break;
          case 5:
            var a = e.stateNode;
            if (t === null && e.flags & 4) {
              t = a;
              var l = e.memoizedProps;
              switch (e.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && t.focus();
                  break;
                case "img":
                  l.src && (t.src = l.src);
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
                  c !== null && eo(c);
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
            throw Error(k(163));
        }
        Qe || e.flags & 512 && Ec(e);
      } catch (d) {
        Pe(e, e.return, d);
      }
    }
    if (e === r5) {
      j = null;
      break;
    }
    if (t = e.sibling, t !== null) {
      t.return = e.return, j = t;
      break;
    }
    j = e.return;
  }
}
function Vp(r5) {
  for (; j !== null; ) {
    var e = j;
    if (e === r5) {
      j = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      t.return = e.return, j = t;
      break;
    }
    j = e.return;
  }
}
function Wp(r5) {
  for (; j !== null; ) {
    var e = j;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            Kl(4, e);
          } catch (l) {
            Pe(e, t, l);
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
            Ec(e);
          } catch (l) {
            Pe(e, s, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Ec(e);
          } catch (l) {
            Pe(e, o, l);
          }
      }
    } catch (l) {
      Pe(e, e.return, l);
    }
    if (e === r5) {
      j = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      a.return = e.return, j = a;
      break;
    }
    j = e.return;
  }
}
var v1 = Math.ceil, pl = Nr.ReactCurrentDispatcher, yf = Nr.ReactCurrentOwner, It = Nr.ReactCurrentBatchConfig, ue = 0, $e = null, De = null, Ye = 0, mt = 0, Ti = dn(0), Le = 0, co = null, Hn = 0, ql = 0, vf = 0, Gs = null, lt = null, _f = 0, Xi = 1 / 0, yr = null, ml = false, bc = null, rn = null, Yo = false, Xr = null, gl = 0, zs = 0, Ac = null, Fa = -1, Na = 0;
function st() {
  return ue & 6 ? Me() : Fa !== -1 ? Fa : Fa = Me();
}
function nn(r5) {
  return r5.mode & 1 ? ue & 2 && Ye !== 0 ? Ye & -Ye : t1.transition !== null ? (Na === 0 && (Na = Fy()), Na) : (r5 = ce, r5 !== 0 || (r5 = window.event, r5 = r5 === void 0 ? 16 : zy(r5.type)), r5) : 1;
}
function Ht(r5, e, t, n) {
  if (50 < zs) throw zs = 0, Ac = null, Error(k(185));
  wo(r5, t, n), (!(ue & 2) || r5 !== $e) && (r5 === $e && (!(ue & 2) && (ql |= t), Le === 4 && jr(r5, Ye)), ft(r5, n), t === 1 && ue === 0 && !(e.mode & 1) && (Xi = Me() + 500, Wl && fn()));
}
function ft(r5, e) {
  var t = r5.callbackNode;
  tw(r5, e);
  var n = Ja(r5, r5 === $e ? Ye : 0);
  if (n === 0) t !== null && tp(t), r5.callbackNode = null, r5.callbackPriority = 0;
  else if (e = n & -n, r5.callbackPriority !== e) {
    if (t != null && tp(t), e === 1) r5.tag === 0 ? e1(Xp.bind(null, r5)) : ov(Xp.bind(null, r5)), qw(function() {
      !(ue & 6) && fn();
    }), t = null;
    else {
      switch (Ny(n)) {
        case 1:
          t = jd;
          break;
        case 4:
          t = ky;
          break;
        case 16:
          t = Qa;
          break;
        case 536870912:
          t = Dy;
          break;
        default:
          t = Qa;
      }
      t = i_(t, Zv.bind(null, r5));
    }
    r5.callbackPriority = e, r5.callbackNode = t;
  }
}
function Zv(r5, e) {
  if (Fa = -1, Na = 0, ue & 6) throw Error(k(327));
  var t = r5.callbackNode;
  if (ki() && r5.callbackNode !== t) return null;
  var n = Ja(r5, r5 === $e ? Ye : 0);
  if (n === 0) return null;
  if (n & 30 || n & r5.expiredLanes || e) e = yl(r5, n);
  else {
    e = n;
    var i = ue;
    ue |= 2;
    var s = Jv();
    ($e !== r5 || Ye !== e) && (yr = null, Xi = Me() + 500, Fn(r5, e));
    do
      try {
        w1();
        break;
      } catch (a) {
        Qv(r5, a);
      }
    while (true);
    nf(), pl.current = s, ue = i, De !== null ? e = 0 : ($e = null, Ye = 0, e = Le);
  }
  if (e !== 0) {
    if (e === 2 && (i = Jh(r5), i !== 0 && (n = i, e = Cc(r5, i))), e === 1) throw t = co, Fn(r5, 0), jr(r5, n), ft(r5, Me()), t;
    if (e === 6) jr(r5, n);
    else {
      if (i = r5.current.alternate, !(n & 30) && !_1(i) && (e = yl(r5, n), e === 2 && (s = Jh(r5), s !== 0 && (n = s, e = Cc(r5, s))), e === 1)) throw t = co, Fn(r5, 0), jr(r5, n), ft(r5, Me()), t;
      switch (r5.finishedWork = i, r5.finishedLanes = n, e) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          _n(r5, lt, yr);
          break;
        case 3:
          if (jr(r5, n), (n & 130023424) === n && (e = _f + 500 - Me(), 10 < e)) {
            if (Ja(r5, 0) !== 0) break;
            if (i = r5.suspendedLanes, (i & n) !== n) {
              st(), r5.pingedLanes |= r5.suspendedLanes & i;
              break;
            }
            r5.timeoutHandle = ac(_n.bind(null, r5, lt, yr), e);
            break;
          }
          _n(r5, lt, yr);
          break;
        case 4:
          if (jr(r5, n), (n & 4194240) === n) break;
          for (e = r5.eventTimes, i = -1; 0 < n; ) {
            var o = 31 - zt(n);
            s = 1 << o, o = e[o], o > i && (i = o), n &= ~s;
          }
          if (n = i, n = Me() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * v1(n / 1960)) - n, 10 < n) {
            r5.timeoutHandle = ac(_n.bind(null, r5, lt, yr), n);
            break;
          }
          _n(r5, lt, yr);
          break;
        case 5:
          _n(r5, lt, yr);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ft(r5, Me()), r5.callbackNode === t ? Zv.bind(null, r5) : null;
}
function Cc(r5, e) {
  var t = Gs;
  return r5.current.memoizedState.isDehydrated && (Fn(r5, e).flags |= 256), r5 = yl(r5, e), r5 !== 2 && (e = lt, lt = t, e !== null && Ic(e)), r5;
}
function Ic(r5) {
  lt === null ? lt = r5 : lt.push.apply(lt, r5);
}
function _1(r5) {
  for (var e = r5; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && (t = t.stores, t !== null)) for (var n = 0; n < t.length; n++) {
        var i = t[n], s = i.getSnapshot;
        i = i.value;
        try {
          if (!Vt(s(), i)) return false;
        } catch {
          return false;
        }
      }
    }
    if (t = e.child, e.subtreeFlags & 16384 && t !== null) t.return = e, e = t;
    else {
      if (e === r5) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === r5) return true;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
  }
  return true;
}
function jr(r5, e) {
  for (e &= ~vf, e &= ~ql, r5.suspendedLanes |= e, r5.pingedLanes &= ~e, r5 = r5.expirationTimes; 0 < e; ) {
    var t = 31 - zt(e), n = 1 << t;
    r5[t] = -1, e &= ~n;
  }
}
function Xp(r5) {
  if (ue & 6) throw Error(k(327));
  ki();
  var e = Ja(r5, 0);
  if (!(e & 1)) return ft(r5, Me()), null;
  var t = yl(r5, e);
  if (r5.tag !== 0 && t === 2) {
    var n = Jh(r5);
    n !== 0 && (e = n, t = Cc(r5, n));
  }
  if (t === 1) throw t = co, Fn(r5, 0), jr(r5, e), ft(r5, Me()), t;
  if (t === 6) throw Error(k(345));
  return r5.finishedWork = r5.current.alternate, r5.finishedLanes = e, _n(r5, lt, yr), ft(r5, Me()), null;
}
function xf(r5, e) {
  var t = ue;
  ue |= 1;
  try {
    return r5(e);
  } finally {
    ue = t, ue === 0 && (Xi = Me() + 500, Wl && fn());
  }
}
function $n(r5) {
  Xr !== null && Xr.tag === 0 && !(ue & 6) && ki();
  var e = ue;
  ue |= 1;
  var t = It.transition, n = ce;
  try {
    if (It.transition = null, ce = 1, r5) return r5();
  } finally {
    ce = n, It.transition = t, ue = e, !(ue & 6) && fn();
  }
}
function wf() {
  mt = Ti.current, ge(Ti);
}
function Fn(r5, e) {
  r5.finishedWork = null, r5.finishedLanes = 0;
  var t = r5.timeoutHandle;
  if (t !== -1 && (r5.timeoutHandle = -1, Kw(t)), De !== null) for (t = De.return; t !== null; ) {
    var n = t;
    switch (ef(n), n.tag) {
      case 1:
        n = n.type.childContextTypes, n != null && il();
        break;
      case 3:
        Vi(), ge(ct), ge(tt), hf();
        break;
      case 5:
        uf(n);
        break;
      case 4:
        Vi();
        break;
      case 13:
        ge(we);
        break;
      case 19:
        ge(we);
        break;
      case 10:
        sf(n.type._context);
        break;
      case 22:
      case 23:
        wf();
    }
    t = t.return;
  }
  if ($e = r5, De = r5 = sn(r5.current, null), Ye = mt = e, Le = 0, co = null, vf = ql = Hn = 0, lt = Gs = null, kn !== null) {
    for (e = 0; e < kn.length; e++) if (t = kn[e], n = t.interleaved, n !== null) {
      t.interleaved = null;
      var i = n.next, s = t.pending;
      if (s !== null) {
        var o = s.next;
        s.next = i, n.next = o;
      }
      t.pending = n;
    }
    kn = null;
  }
  return r5;
}
function Qv(r5, e) {
  do {
    var t = De;
    try {
      if (nf(), Ma.current = fl, dl) {
        for (var n = Te.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), n = n.next;
        }
        dl = false;
      }
      if (zn = 0, Ge = Oe = Te = null, Ls = false, lo = 0, yf.current = null, t === null || t.return === null) {
        Le = 1, co = e, De = null;
        break;
      }
      e: {
        var s = r5, o = t.return, a = t, l = e;
        if (e = Ye, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l, h = a, c = h.tag;
          if (!(h.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = h.alternate;
            d ? (h.updateQueue = d.updateQueue, h.memoizedState = d.memoizedState, h.lanes = d.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var f = Fp(o);
          if (f !== null) {
            f.flags &= -257, Np(f, o, a, s, e), f.mode & 1 && Dp(s, u, e), e = f, l = u;
            var p = e.updateQueue;
            if (p === null) {
              var v = /* @__PURE__ */ new Set();
              v.add(l), e.updateQueue = v;
            } else p.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              Dp(s, u, e), Ef();
              break e;
            }
            l = Error(k(426));
          }
        } else if (ve && a.mode & 1) {
          var _ = Fp(o);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), Np(_, o, a, s, e), tf(Wi(l, a));
            break e;
          }
        }
        s = l = Wi(l, a), Le !== 4 && (Le = 2), Gs === null ? Gs = [s] : Gs.push(s), s = o;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, e &= -e, s.lanes |= e;
              var g = Nv(s, l, e);
              Cp(s, g);
              break e;
            case 1:
              a = l;
              var y = s.type, m = s.stateNode;
              if (!(s.flags & 128) && (typeof y.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (rn === null || !rn.has(m)))) {
                s.flags |= 65536, e &= -e, s.lanes |= e;
                var x = Bv(s, a, e);
                Cp(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      t_(t);
    } catch (w) {
      e = w, De === t && t !== null && (De = t = t.return);
      continue;
    }
    break;
  } while (true);
}
function Jv() {
  var r5 = pl.current;
  return pl.current = fl, r5 === null ? fl : r5;
}
function Ef() {
  (Le === 0 || Le === 3 || Le === 2) && (Le = 4), $e === null || !(Hn & 268435455) && !(ql & 268435455) || jr($e, Ye);
}
function yl(r5, e) {
  var t = ue;
  ue |= 2;
  var n = Jv();
  ($e !== r5 || Ye !== e) && (yr = null, Fn(r5, e));
  do
    try {
      x1();
      break;
    } catch (i) {
      Qv(r5, i);
    }
  while (true);
  if (nf(), ue = t, pl.current = n, De !== null) throw Error(k(261));
  return $e = null, Ye = 0, Le;
}
function x1() {
  for (; De !== null; ) e_(De);
}
function w1() {
  for (; De !== null && !Wx(); ) e_(De);
}
function e_(r5) {
  var e = n_(r5.alternate, r5, mt);
  r5.memoizedProps = r5.pendingProps, e === null ? t_(r5) : De = e, yf.current = null;
}
function t_(r5) {
  var e = r5;
  do {
    var t = e.alternate;
    if (r5 = e.return, e.flags & 32768) {
      if (t = p1(t, e), t !== null) {
        t.flags &= 32767, De = t;
        return;
      }
      if (r5 !== null) r5.flags |= 32768, r5.subtreeFlags = 0, r5.deletions = null;
      else {
        Le = 6, De = null;
        return;
      }
    } else if (t = f1(t, e, mt), t !== null) {
      De = t;
      return;
    }
    if (e = e.sibling, e !== null) {
      De = e;
      return;
    }
    De = e = r5;
  } while (e !== null);
  Le === 0 && (Le = 5);
}
function _n(r5, e, t) {
  var n = ce, i = It.transition;
  try {
    It.transition = null, ce = 1, E1(r5, e, t, n);
  } finally {
    It.transition = i, ce = n;
  }
  return null;
}
function E1(r5, e, t, n) {
  do
    ki();
  while (Xr !== null);
  if (ue & 6) throw Error(k(327));
  t = r5.finishedWork;
  var i = r5.finishedLanes;
  if (t === null) return null;
  if (r5.finishedWork = null, r5.finishedLanes = 0, t === r5.current) throw Error(k(177));
  r5.callbackNode = null, r5.callbackPriority = 0;
  var s = t.lanes | t.childLanes;
  if (rw(r5, s), r5 === $e && (De = $e = null, Ye = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Yo || (Yo = true, i_(Qa, function() {
    return ki(), null;
  })), s = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || s) {
    s = It.transition, It.transition = null;
    var o = ce;
    ce = 1;
    var a = ue;
    ue |= 4, yf.current = null, g1(r5, t), Kv(t, r5), Hw(sc), el = !!ic, sc = ic = null, r5.current = t, y1(t), Xx(), ue = a, ce = o, It.transition = s;
  } else r5.current = t;
  if (Yo && (Yo = false, Xr = r5, gl = i), s = r5.pendingLanes, s === 0 && (rn = null), qx(t.stateNode), ft(r5, Me()), e !== null) for (n = r5.onRecoverableError, t = 0; t < e.length; t++) i = e[t], n(i.value, { componentStack: i.stack, digest: i.digest });
  if (ml) throw ml = false, r5 = bc, bc = null, r5;
  return gl & 1 && r5.tag !== 0 && ki(), s = r5.pendingLanes, s & 1 ? r5 === Ac ? zs++ : (zs = 0, Ac = r5) : zs = 0, fn(), null;
}
function ki() {
  if (Xr !== null) {
    var r5 = Ny(gl), e = It.transition, t = ce;
    try {
      if (It.transition = null, ce = 16 > r5 ? 16 : r5, Xr === null) var n = false;
      else {
        if (r5 = Xr, Xr = null, gl = 0, ue & 6) throw Error(k(331));
        var i = ue;
        for (ue |= 4, j = r5.current; j !== null; ) {
          var s = j, o = s.child;
          if (j.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (j = u; j !== null; ) {
                  var h = j;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Us(8, h, s);
                  }
                  var c = h.child;
                  if (c !== null) c.return = h, j = c;
                  else for (; j !== null; ) {
                    h = j;
                    var d = h.sibling, f = h.return;
                    if (Wv(h), h === u) {
                      j = null;
                      break;
                    }
                    if (d !== null) {
                      d.return = f, j = d;
                      break;
                    }
                    j = f;
                  }
                }
              }
              var p = s.alternate;
              if (p !== null) {
                var v = p.child;
                if (v !== null) {
                  p.child = null;
                  do {
                    var _ = v.sibling;
                    v.sibling = null, v = _;
                  } while (v !== null);
                }
              }
              j = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) o.return = s, j = o;
          else e: for (; j !== null; ) {
            if (s = j, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Us(9, s, s.return);
            }
            var g = s.sibling;
            if (g !== null) {
              g.return = s.return, j = g;
              break e;
            }
            j = s.return;
          }
        }
        var y = r5.current;
        for (j = y; j !== null; ) {
          o = j;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) m.return = o, j = m;
          else e: for (o = y; j !== null; ) {
            if (a = j, a.flags & 2048) try {
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
              j = null;
              break e;
            }
            var x = a.sibling;
            if (x !== null) {
              x.return = a.return, j = x;
              break e;
            }
            j = a.return;
          }
        }
        if (ue = i, fn(), ur && typeof ur.onPostCommitFiberRoot == "function") try {
          ur.onPostCommitFiberRoot(zl, r5);
        } catch {
        }
        n = true;
      }
      return n;
    } finally {
      ce = t, It.transition = e;
    }
  }
  return false;
}
function Yp(r5, e, t) {
  e = Wi(t, e), e = Nv(r5, e, 1), r5 = tn(r5, e, 1), e = st(), r5 !== null && (wo(r5, 1, e), ft(r5, e));
}
function Pe(r5, e, t) {
  if (r5.tag === 3) Yp(r5, r5, t);
  else for (; e !== null; ) {
    if (e.tag === 3) {
      Yp(e, r5, t);
      break;
    } else if (e.tag === 1) {
      var n = e.stateNode;
      if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (rn === null || !rn.has(n))) {
        r5 = Wi(t, r5), r5 = Bv(e, r5, 1), e = tn(e, r5, 1), r5 = st(), e !== null && (wo(e, 1, r5), ft(e, r5));
        break;
      }
    }
    e = e.return;
  }
}
function T1(r5, e, t) {
  var n = r5.pingCache;
  n !== null && n.delete(e), e = st(), r5.pingedLanes |= r5.suspendedLanes & t, $e === r5 && (Ye & t) === t && (Le === 4 || Le === 3 && (Ye & 130023424) === Ye && 500 > Me() - _f ? Fn(r5, 0) : vf |= t), ft(r5, e);
}
function r_(r5, e) {
  e === 0 && (r5.mode & 1 ? (e = Lo, Lo <<= 1, !(Lo & 130023424) && (Lo = 4194304)) : e = 1);
  var t = st();
  r5 = Rr(r5, e), r5 !== null && (wo(r5, e, t), ft(r5, t));
}
function S1(r5) {
  var e = r5.memoizedState, t = 0;
  e !== null && (t = e.retryLane), r_(r5, t);
}
function b1(r5, e) {
  var t = 0;
  switch (r5.tag) {
    case 13:
      var n = r5.stateNode, i = r5.memoizedState;
      i !== null && (t = i.retryLane);
      break;
    case 19:
      n = r5.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  n !== null && n.delete(e), r_(r5, t);
}
var n_;
n_ = function(r5, e, t) {
  if (r5 !== null) if (r5.memoizedProps !== e.pendingProps || ct.current) ut = true;
  else {
    if (!(r5.lanes & t) && !(e.flags & 128)) return ut = false, d1(r5, e, t);
    ut = !!(r5.flags & 131072);
  }
  else ut = false, ve && e.flags & 1048576 && av(e, al, e.index);
  switch (e.lanes = 0, e.tag) {
    case 2:
      var n = e.type;
      Da(r5, e), r5 = e.pendingProps;
      var i = Hi(e, tt.current);
      Mi(e, t), i = df(null, e, n, r5, i, t);
      var s = ff();
      return e.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (e.tag = 1, e.memoizedState = null, e.updateQueue = null, dt(n) ? (s = true, sl(e)) : s = false, e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, af(e), i.updater = Yl, e.stateNode = i, i._reactInternals = e, pc(e, n, r5, t), e = yc(null, e, n, true, s, t)) : (e.tag = 0, ve && s && Jd(e), nt(null, e, i, t), e = e.child), e;
    case 16:
      n = e.elementType;
      e: {
        switch (Da(r5, e), r5 = e.pendingProps, i = n._init, n = i(n._payload), e.type = n, i = e.tag = C1(n), r5 = Ot(n, r5), i) {
          case 0:
            e = gc(null, e, n, r5, t);
            break e;
          case 1:
            e = Lp(null, e, n, r5, t);
            break e;
          case 11:
            e = Bp(null, e, n, r5, t);
            break e;
          case 14:
            e = Op(null, e, n, Ot(n.type, r5), t);
            break e;
        }
        throw Error(k(306, n, ""));
      }
      return e;
    case 0:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Ot(n, i), gc(r5, e, n, i, t);
    case 1:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Ot(n, i), Lp(r5, e, n, i, t);
    case 3:
      e: {
        if (Gv(e), r5 === null) throw Error(k(387));
        n = e.pendingProps, s = e.memoizedState, i = s.element, fv(r5, e), hl(e, n, null, t);
        var o = e.memoizedState;
        if (n = o.element, s.isDehydrated) if (s = { element: n, isDehydrated: false, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, e.updateQueue.baseState = s, e.memoizedState = s, e.flags & 256) {
          i = Wi(Error(k(423)), e), e = Up(r5, e, n, t, i);
          break e;
        } else if (n !== i) {
          i = Wi(Error(k(424)), e), e = Up(r5, e, n, t, i);
          break e;
        } else for (gt = en(e.stateNode.containerInfo.firstChild), vt = e, ve = true, Ut = null, t = cv(e, null, n, t), e.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if ($i(), n === i) {
            e = Mr(r5, e, t);
            break e;
          }
          nt(r5, e, n, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return pv(e), r5 === null && cc(e), n = e.type, i = e.pendingProps, s = r5 !== null ? r5.memoizedProps : null, o = i.children, oc(n, i) ? o = null : s !== null && oc(n, s) && (e.flags |= 32), Uv(r5, e), nt(r5, e, o, t), e.child;
    case 6:
      return r5 === null && cc(e), null;
    case 13:
      return zv(r5, e, t);
    case 4:
      return lf(e, e.stateNode.containerInfo), n = e.pendingProps, r5 === null ? e.child = ji(e, null, n, t) : nt(r5, e, n, t), e.child;
    case 11:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Ot(n, i), Bp(r5, e, n, i, t);
    case 7:
      return nt(r5, e, e.pendingProps, t), e.child;
    case 8:
      return nt(r5, e, e.pendingProps.children, t), e.child;
    case 12:
      return nt(r5, e, e.pendingProps.children, t), e.child;
    case 10:
      e: {
        if (n = e.type._context, i = e.pendingProps, s = e.memoizedProps, o = i.value, fe(ll, n._currentValue), n._currentValue = o, s !== null) if (Vt(s.value, o)) {
          if (s.children === i.children && !ct.current) {
            e = Mr(r5, e, t);
            break e;
          }
        } else for (s = e.child, s !== null && (s.return = e); s !== null; ) {
          var a = s.dependencies;
          if (a !== null) {
            o = s.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === n) {
                if (s.tag === 1) {
                  l = Ar(-1, t & -t), l.tag = 2;
                  var u = s.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var h = u.pending;
                    h === null ? l.next = l : (l.next = h.next, h.next = l), u.pending = l;
                  }
                }
                s.lanes |= t, l = s.alternate, l !== null && (l.lanes |= t), dc(s.return, t, e), a.lanes |= t;
                break;
              }
              l = l.next;
            }
          } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
          else if (s.tag === 18) {
            if (o = s.return, o === null) throw Error(k(341));
            o.lanes |= t, a = o.alternate, a !== null && (a.lanes |= t), dc(o, t, e), o = s.sibling;
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
        nt(r5, e, i.children, t), e = e.child;
      }
      return e;
    case 9:
      return i = e.type, n = e.pendingProps.children, Mi(e, t), i = Pt(i), n = n(i), e.flags |= 1, nt(r5, e, n, t), e.child;
    case 14:
      return n = e.type, i = Ot(n, e.pendingProps), i = Ot(n.type, i), Op(r5, e, n, i, t);
    case 15:
      return Ov(r5, e, e.type, e.pendingProps, t);
    case 17:
      return n = e.type, i = e.pendingProps, i = e.elementType === n ? i : Ot(n, i), Da(r5, e), e.tag = 1, dt(n) ? (r5 = true, sl(e)) : r5 = false, Mi(e, t), Fv(e, n, i), pc(e, n, i, t), yc(null, e, n, true, r5, t);
    case 19:
      return Hv(r5, e, t);
    case 22:
      return Lv(r5, e, t);
  }
  throw Error(k(156, e.tag));
};
function i_(r5, e) {
  return My(r5, e);
}
function A1(r5, e, t, n) {
  this.tag = r5, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function bt(r5, e, t, n) {
  return new A1(r5, e, t, n);
}
function Tf(r5) {
  return r5 = r5.prototype, !(!r5 || !r5.isReactComponent);
}
function C1(r5) {
  if (typeof r5 == "function") return Tf(r5) ? 1 : 0;
  if (r5 != null) {
    if (r5 = r5.$$typeof, r5 === zd) return 11;
    if (r5 === Hd) return 14;
  }
  return 2;
}
function sn(r5, e) {
  var t = r5.alternate;
  return t === null ? (t = bt(r5.tag, e, r5.key, r5.mode), t.elementType = r5.elementType, t.type = r5.type, t.stateNode = r5.stateNode, t.alternate = r5, r5.alternate = t) : (t.pendingProps = e, t.type = r5.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = r5.flags & 14680064, t.childLanes = r5.childLanes, t.lanes = r5.lanes, t.child = r5.child, t.memoizedProps = r5.memoizedProps, t.memoizedState = r5.memoizedState, t.updateQueue = r5.updateQueue, e = r5.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, t.sibling = r5.sibling, t.index = r5.index, t.ref = r5.ref, t;
}
function Ba(r5, e, t, n, i, s) {
  var o = 2;
  if (n = r5, typeof r5 == "function") Tf(r5) && (o = 1);
  else if (typeof r5 == "string") o = 5;
  else e: switch (r5) {
    case fi:
      return Nn(t.children, i, s, e);
    case Gd:
      o = 8, i |= 8;
      break;
    case Lh:
      return r5 = bt(12, t, e, i | 2), r5.elementType = Lh, r5.lanes = s, r5;
    case Uh:
      return r5 = bt(13, t, e, i), r5.elementType = Uh, r5.lanes = s, r5;
    case Gh:
      return r5 = bt(19, t, e, i), r5.elementType = Gh, r5.lanes = s, r5;
    case py:
      return Zl(t, i, s, e);
    default:
      if (typeof r5 == "object" && r5 !== null) switch (r5.$$typeof) {
        case dy:
          o = 10;
          break e;
        case fy:
          o = 9;
          break e;
        case zd:
          o = 11;
          break e;
        case Hd:
          o = 14;
          break e;
        case Gr:
          o = 16, n = null;
          break e;
      }
      throw Error(k(130, r5 == null ? r5 : typeof r5, ""));
  }
  return e = bt(o, t, e, i), e.elementType = r5, e.type = n, e.lanes = s, e;
}
function Nn(r5, e, t, n) {
  return r5 = bt(7, r5, n, e), r5.lanes = t, r5;
}
function Zl(r5, e, t, n) {
  return r5 = bt(22, r5, n, e), r5.elementType = py, r5.lanes = t, r5.stateNode = { isHidden: false }, r5;
}
function Gu(r5, e, t) {
  return r5 = bt(6, r5, null, e), r5.lanes = t, r5;
}
function zu(r5, e, t) {
  return e = bt(4, r5.children !== null ? r5.children : [], r5.key, e), e.lanes = t, e.stateNode = { containerInfo: r5.containerInfo, pendingChildren: null, implementation: r5.implementation }, e;
}
function I1(r5, e, t, n, i) {
  this.tag = e, this.containerInfo = r5, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = wu(0), this.expirationTimes = wu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wu(0), this.identifierPrefix = n, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null;
}
function Sf(r5, e, t, n, i, s, o, a, l) {
  return r5 = new I1(r5, e, t, a, l), e === 1 ? (e = 1, s === true && (e |= 8)) : e = 0, s = bt(3, null, null, e), r5.current = s, s.stateNode = r5, s.memoizedState = { element: n, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, af(s), r5;
}
function P1(r5, e, t) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: di, key: n == null ? null : "" + n, children: r5, containerInfo: e, implementation: t };
}
function s_(r5) {
  if (!r5) return ln;
  r5 = r5._reactInternals;
  e: {
    if (Kn(r5) !== r5 || r5.tag !== 1) throw Error(k(170));
    var e = r5;
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
    throw Error(k(171));
  }
  if (r5.tag === 1) {
    var t = r5.type;
    if (dt(t)) return sv(r5, t, e);
  }
  return e;
}
function o_(r5, e, t, n, i, s, o, a, l) {
  return r5 = Sf(t, n, true, r5, i, s, o, a, l), r5.context = s_(null), t = r5.current, n = st(), i = nn(t), s = Ar(n, i), s.callback = e ?? null, tn(t, s, i), r5.current.lanes = i, wo(r5, i, n), ft(r5, n), r5;
}
function Ql(r5, e, t, n) {
  var i = e.current, s = st(), o = nn(i);
  return t = s_(t), e.context === null ? e.context = t : e.pendingContext = t, e = Ar(s, o), e.payload = { element: r5 }, n = n === void 0 ? null : n, n !== null && (e.callback = n), r5 = tn(i, e, o), r5 !== null && (Ht(r5, i, o, s), Ra(r5, i, o)), o;
}
function vl(r5) {
  if (r5 = r5.current, !r5.child) return null;
  switch (r5.child.tag) {
    case 5:
      return r5.child.stateNode;
    default:
      return r5.child.stateNode;
  }
}
function Kp(r5, e) {
  if (r5 = r5.memoizedState, r5 !== null && r5.dehydrated !== null) {
    var t = r5.retryLane;
    r5.retryLane = t !== 0 && t < e ? t : e;
  }
}
function bf(r5, e) {
  Kp(r5, e), (r5 = r5.alternate) && Kp(r5, e);
}
function R1() {
  return null;
}
var a_ = typeof reportError == "function" ? reportError : function(r5) {
  console.error(r5);
};
function Af(r5) {
  this._internalRoot = r5;
}
Jl.prototype.render = Af.prototype.render = function(r5) {
  var e = this._internalRoot;
  if (e === null) throw Error(k(409));
  Ql(r5, e, null, null);
};
Jl.prototype.unmount = Af.prototype.unmount = function() {
  var r5 = this._internalRoot;
  if (r5 !== null) {
    this._internalRoot = null;
    var e = r5.containerInfo;
    $n(function() {
      Ql(null, r5, null, null);
    }), e[Pr] = null;
  }
};
function Jl(r5) {
  this._internalRoot = r5;
}
Jl.prototype.unstable_scheduleHydration = function(r5) {
  if (r5) {
    var e = Ly();
    r5 = { blockedOn: null, target: r5, priority: e };
    for (var t = 0; t < $r.length && e !== 0 && e < $r[t].priority; t++) ;
    $r.splice(t, 0, r5), t === 0 && Gy(r5);
  }
};
function Cf(r5) {
  return !(!r5 || r5.nodeType !== 1 && r5.nodeType !== 9 && r5.nodeType !== 11);
}
function eu(r5) {
  return !(!r5 || r5.nodeType !== 1 && r5.nodeType !== 9 && r5.nodeType !== 11 && (r5.nodeType !== 8 || r5.nodeValue !== " react-mount-point-unstable "));
}
function qp() {
}
function M1(r5, e, t, n, i) {
  if (i) {
    if (typeof n == "function") {
      var s = n;
      n = function() {
        var u = vl(o);
        s.call(u);
      };
    }
    var o = o_(e, n, r5, 0, null, false, false, "", qp);
    return r5._reactRootContainer = o, r5[Pr] = o.current, no(r5.nodeType === 8 ? r5.parentNode : r5), $n(), o;
  }
  for (; i = r5.lastChild; ) r5.removeChild(i);
  if (typeof n == "function") {
    var a = n;
    n = function() {
      var u = vl(l);
      a.call(u);
    };
  }
  var l = Sf(r5, 0, false, null, null, false, false, "", qp);
  return r5._reactRootContainer = l, r5[Pr] = l.current, no(r5.nodeType === 8 ? r5.parentNode : r5), $n(function() {
    Ql(e, l, t, n);
  }), l;
}
function tu(r5, e, t, n, i) {
  var s = t._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function() {
        var l = vl(o);
        a.call(l);
      };
    }
    Ql(e, o, r5, i);
  } else o = M1(t, e, r5, i, n);
  return vl(o);
}
By = function(r5) {
  switch (r5.tag) {
    case 3:
      var e = r5.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = Es(e.pendingLanes);
        t !== 0 && (Vd(e, t | 1), ft(e, Me()), !(ue & 6) && (Xi = Me() + 500, fn()));
      }
      break;
    case 13:
      $n(function() {
        var n = Rr(r5, 1);
        if (n !== null) {
          var i = st();
          Ht(n, r5, 1, i);
        }
      }), bf(r5, 1);
  }
};
Wd = function(r5) {
  if (r5.tag === 13) {
    var e = Rr(r5, 134217728);
    if (e !== null) {
      var t = st();
      Ht(e, r5, 134217728, t);
    }
    bf(r5, 134217728);
  }
};
Oy = function(r5) {
  if (r5.tag === 13) {
    var e = nn(r5), t = Rr(r5, e);
    if (t !== null) {
      var n = st();
      Ht(t, r5, e, n);
    }
    bf(r5, e);
  }
};
Ly = function() {
  return ce;
};
Uy = function(r5, e) {
  var t = ce;
  try {
    return ce = r5, e();
  } finally {
    ce = t;
  }
};
qh = function(r5, e, t) {
  switch (e) {
    case "input":
      if ($h(r5, t), e = t.name, t.type === "radio" && e != null) {
        for (t = r5; t.parentNode; ) t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < t.length; e++) {
          var n = t[e];
          if (n !== r5 && n.form === r5.form) {
            var i = Vl(n);
            if (!i) throw Error(k(90));
            gy(n), $h(n, i);
          }
        }
      }
      break;
    case "textarea":
      vy(r5, t);
      break;
    case "select":
      e = t.value, e != null && Ci(r5, !!t.multiple, e, false);
  }
};
by = xf;
Ay = $n;
var k1 = { usingClientEntryPoint: false, Events: [To, yi, Vl, Ty, Sy, xf] }, ds = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, D1 = { bundleType: ds.bundleType, version: ds.version, rendererPackageName: ds.rendererPackageName, rendererConfig: ds.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Nr.ReactCurrentDispatcher, findHostInstanceByFiber: function(r5) {
  return r5 = Py(r5), r5 === null ? null : r5.stateNode;
}, findFiberByHostInstance: ds.findFiberByHostInstance || R1, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ko = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ko.isDisabled && Ko.supportsFiber) try {
    zl = Ko.inject(D1), ur = Ko;
  } catch {
  }
}
xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = k1;
xt.createPortal = function(r5, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Cf(e)) throw Error(k(200));
  return P1(r5, e, null, t);
};
xt.createRoot = function(r5, e) {
  if (!Cf(r5)) throw Error(k(299));
  var t = false, n = "", i = a_;
  return e != null && (e.unstable_strictMode === true && (t = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Sf(r5, 1, false, null, null, t, false, n, i), r5[Pr] = e.current, no(r5.nodeType === 8 ? r5.parentNode : r5), new Af(e);
};
xt.findDOMNode = function(r5) {
  if (r5 == null) return null;
  if (r5.nodeType === 1) return r5;
  var e = r5._reactInternals;
  if (e === void 0) throw typeof r5.render == "function" ? Error(k(188)) : (r5 = Object.keys(r5).join(","), Error(k(268, r5)));
  return r5 = Py(e), r5 = r5 === null ? null : r5.stateNode, r5;
};
xt.flushSync = function(r5) {
  return $n(r5);
};
xt.hydrate = function(r5, e, t) {
  if (!eu(e)) throw Error(k(200));
  return tu(null, r5, e, true, t);
};
xt.hydrateRoot = function(r5, e, t) {
  if (!Cf(r5)) throw Error(k(405));
  var n = t != null && t.hydratedSources || null, i = false, s = "", o = a_;
  if (t != null && (t.unstable_strictMode === true && (i = true), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), e = o_(e, null, r5, 1, t ?? null, i, false, s, o), r5[Pr] = e.current, no(r5), n) for (r5 = 0; r5 < n.length; r5++) t = n[r5], i = t._getVersion, i = i(t._source), e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
  return new Jl(e);
};
xt.render = function(r5, e, t) {
  if (!eu(e)) throw Error(k(200));
  return tu(null, r5, e, false, t);
};
xt.unmountComponentAtNode = function(r5) {
  if (!eu(r5)) throw Error(k(40));
  return r5._reactRootContainer ? ($n(function() {
    tu(null, null, r5, false, function() {
      r5._reactRootContainer = null, r5[Pr] = null;
    });
  }), true) : false;
};
xt.unstable_batchedUpdates = xf;
xt.unstable_renderSubtreeIntoContainer = function(r5, e, t, n) {
  if (!eu(t)) throw Error(k(200));
  if (r5 == null || r5._reactInternals === void 0) throw Error(k(38));
  return tu(r5, e, t, false, n);
};
xt.version = "18.3.1-next-f1338f8080-20240426";
function l_() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l_);
  } catch (r5) {
    console.error(r5);
  }
}
l_(), ly.exports = xt;
var F1 = ly.exports, Zp = F1;
Bh.createRoot = Zp.createRoot, Bh.hydrateRoot = Zp.hydrateRoot;
var qn = ((r5) => (r5[r5.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", r5[r5.WEBGL = 1] = "WEBGL", r5[r5.WEBGL2 = 2] = "WEBGL2", r5))(qn || {}), u_ = ((r5) => (r5[r5.UNKNOWN = 0] = "UNKNOWN", r5[r5.WEBGL = 1] = "WEBGL", r5[r5.CANVAS = 2] = "CANVAS", r5))(u_ || {}), Pc = ((r5) => (r5[r5.COLOR = 16384] = "COLOR", r5[r5.DEPTH = 256] = "DEPTH", r5[r5.STENCIL = 1024] = "STENCIL", r5))(Pc || {}), Q = ((r5) => (r5[r5.NORMAL = 0] = "NORMAL", r5[r5.ADD = 1] = "ADD", r5[r5.MULTIPLY = 2] = "MULTIPLY", r5[r5.SCREEN = 3] = "SCREEN", r5[r5.OVERLAY = 4] = "OVERLAY", r5[r5.DARKEN = 5] = "DARKEN", r5[r5.LIGHTEN = 6] = "LIGHTEN", r5[r5.COLOR_DODGE = 7] = "COLOR_DODGE", r5[r5.COLOR_BURN = 8] = "COLOR_BURN", r5[r5.HARD_LIGHT = 9] = "HARD_LIGHT", r5[r5.SOFT_LIGHT = 10] = "SOFT_LIGHT", r5[r5.DIFFERENCE = 11] = "DIFFERENCE", r5[r5.EXCLUSION = 12] = "EXCLUSION", r5[r5.HUE = 13] = "HUE", r5[r5.SATURATION = 14] = "SATURATION", r5[r5.COLOR = 15] = "COLOR", r5[r5.LUMINOSITY = 16] = "LUMINOSITY", r5[r5.NORMAL_NPM = 17] = "NORMAL_NPM", r5[r5.ADD_NPM = 18] = "ADD_NPM", r5[r5.SCREEN_NPM = 19] = "SCREEN_NPM", r5[r5.NONE = 20] = "NONE", r5[r5.SRC_OVER = 0] = "SRC_OVER", r5[r5.SRC_IN = 21] = "SRC_IN", r5[r5.SRC_OUT = 22] = "SRC_OUT", r5[r5.SRC_ATOP = 23] = "SRC_ATOP", r5[r5.DST_OVER = 24] = "DST_OVER", r5[r5.DST_IN = 25] = "DST_IN", r5[r5.DST_OUT = 26] = "DST_OUT", r5[r5.DST_ATOP = 27] = "DST_ATOP", r5[r5.ERASE = 26] = "ERASE", r5[r5.SUBTRACT = 28] = "SUBTRACT", r5[r5.XOR = 29] = "XOR", r5))(Q || {}), lr = ((r5) => (r5[r5.POINTS = 0] = "POINTS", r5[r5.LINES = 1] = "LINES", r5[r5.LINE_LOOP = 2] = "LINE_LOOP", r5[r5.LINE_STRIP = 3] = "LINE_STRIP", r5[r5.TRIANGLES = 4] = "TRIANGLES", r5[r5.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", r5[r5.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", r5))(lr || {}), F = ((r5) => (r5[r5.RGBA = 6408] = "RGBA", r5[r5.RGB = 6407] = "RGB", r5[r5.RG = 33319] = "RG", r5[r5.RED = 6403] = "RED", r5[r5.RGBA_INTEGER = 36249] = "RGBA_INTEGER", r5[r5.RGB_INTEGER = 36248] = "RGB_INTEGER", r5[r5.RG_INTEGER = 33320] = "RG_INTEGER", r5[r5.RED_INTEGER = 36244] = "RED_INTEGER", r5[r5.ALPHA = 6406] = "ALPHA", r5[r5.LUMINANCE = 6409] = "LUMINANCE", r5[r5.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", r5[r5.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", r5[r5.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", r5))(F || {}), Di = ((r5) => (r5[r5.TEXTURE_2D = 3553] = "TEXTURE_2D", r5[r5.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", r5[r5.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", r5[r5.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", r5[r5.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", r5[r5.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", r5[r5.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", r5[r5.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", r5[r5.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", r5))(Di || {}), K = ((r5) => (r5[r5.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", r5[r5.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", r5[r5.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", r5[r5.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", r5[r5.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", r5[r5.UNSIGNED_INT = 5125] = "UNSIGNED_INT", r5[r5.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", r5[r5.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", r5[r5.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", r5[r5.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", r5[r5.BYTE = 5120] = "BYTE", r5[r5.SHORT = 5122] = "SHORT", r5[r5.INT = 5124] = "INT", r5[r5.FLOAT = 5126] = "FLOAT", r5[r5.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", r5[r5.HALF_FLOAT = 36193] = "HALF_FLOAT", r5))(K || {}), G = ((r5) => (r5[r5.FLOAT = 0] = "FLOAT", r5[r5.INT = 1] = "INT", r5[r5.UINT = 2] = "UINT", r5))(G || {}), Er = ((r5) => (r5[r5.NEAREST = 0] = "NEAREST", r5[r5.LINEAR = 1] = "LINEAR", r5))(Er || {}), on = ((r5) => (r5[r5.CLAMP = 33071] = "CLAMP", r5[r5.REPEAT = 10497] = "REPEAT", r5[r5.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", r5))(on || {}), fr = ((r5) => (r5[r5.OFF = 0] = "OFF", r5[r5.POW2 = 1] = "POW2", r5[r5.ON = 2] = "ON", r5[r5.ON_MANUAL = 3] = "ON_MANUAL", r5))(fr || {}), ht = ((r5) => (r5[r5.NPM = 0] = "NPM", r5[r5.UNPACK = 1] = "UNPACK", r5[r5.PMA = 2] = "PMA", r5[r5.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", r5[r5.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", r5[r5.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA", r5))(ht || {}), sr = ((r5) => (r5[r5.NO = 0] = "NO", r5[r5.YES = 1] = "YES", r5[r5.AUTO = 2] = "AUTO", r5[r5.BLEND = 0] = "BLEND", r5[r5.CLEAR = 1] = "CLEAR", r5[r5.BLIT = 2] = "BLIT", r5))(sr || {}), If = ((r5) => (r5[r5.AUTO = 0] = "AUTO", r5[r5.MANUAL = 1] = "MANUAL", r5))(If || {}), At = ((r5) => (r5.LOW = "lowp", r5.MEDIUM = "mediump", r5.HIGH = "highp", r5))(At || {}), Be = ((r5) => (r5[r5.NONE = 0] = "NONE", r5[r5.SCISSOR = 1] = "SCISSOR", r5[r5.STENCIL = 2] = "STENCIL", r5[r5.SPRITE = 3] = "SPRITE", r5[r5.COLOR = 4] = "COLOR", r5))(Be || {}), ke = ((r5) => (r5[r5.NONE = 0] = "NONE", r5[r5.LOW = 2] = "LOW", r5[r5.MEDIUM = 4] = "MEDIUM", r5[r5.HIGH = 8] = "HIGH", r5))(ke || {}), cr = ((r5) => (r5[r5.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", r5[r5.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", r5[r5.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", r5))(cr || {});
const N1 = { createCanvas: (r5, e) => {
  const t = document.createElement("canvas");
  return t.width = r5, t.height = e, t;
}, getCanvasRenderingContext2D: () => CanvasRenderingContext2D, getWebGLRenderingContext: () => WebGLRenderingContext, getNavigator: () => navigator, getBaseUrl: () => document.baseURI ?? window.location.href, getFontFaceSet: () => document.fonts, fetch: (r5, e) => fetch(r5, e), parseXML: (r5) => new DOMParser().parseFromString(r5, "text/xml") }, z = { ADAPTER: N1, RESOLUTION: 1, CREATE_IMAGE_BITMAP: false, ROUND_PIXELS: false };
var Hu = /iPhone/i, Qp = /iPod/i, Jp = /iPad/i, em = /\biOS-universal(?:.+)Mac\b/i, $u = /\bAndroid(?:.+)Mobile\b/i, tm = /Android/i, ti = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i, qo = /Silk/i, mr = /Windows Phone/i, rm = /\bWindows(?:.+)ARM\b/i, nm = /BlackBerry/i, im = /BB10/i, sm = /Opera Mini/i, om = /\b(CriOS|Chrome)(?:.+)Mobile/i, am = /Mobile(?:.+)Firefox\b/i, lm = function(r5) {
  return typeof r5 < "u" && r5.platform === "MacIntel" && typeof r5.maxTouchPoints == "number" && r5.maxTouchPoints > 1 && typeof MSStream > "u";
};
function B1(r5) {
  return function(e) {
    return e.test(r5);
  };
}
function um(r5) {
  var e = { userAgent: "", platform: "", maxTouchPoints: 0 };
  !r5 && typeof navigator < "u" ? e = { userAgent: navigator.userAgent, platform: navigator.platform, maxTouchPoints: navigator.maxTouchPoints || 0 } : typeof r5 == "string" ? e.userAgent = r5 : r5 && r5.userAgent && (e = { userAgent: r5.userAgent, platform: r5.platform, maxTouchPoints: r5.maxTouchPoints || 0 });
  var t = e.userAgent, n = t.split("[FBAN");
  typeof n[1] < "u" && (t = n[0]), n = t.split("Twitter"), typeof n[1] < "u" && (t = n[0]);
  var i = B1(t), s = { apple: { phone: i(Hu) && !i(mr), ipod: i(Qp), tablet: !i(Hu) && (i(Jp) || lm(e)) && !i(mr), universal: i(em), device: (i(Hu) || i(Qp) || i(Jp) || i(em) || lm(e)) && !i(mr) }, amazon: { phone: i(ti), tablet: !i(ti) && i(qo), device: i(ti) || i(qo) }, android: { phone: !i(mr) && i(ti) || !i(mr) && i($u), tablet: !i(mr) && !i(ti) && !i($u) && (i(qo) || i(tm)), device: !i(mr) && (i(ti) || i(qo) || i($u) || i(tm)) || i(/\bokhttp\b/i) }, windows: { phone: i(mr), tablet: i(rm), device: i(mr) || i(rm) }, other: { blackberry: i(nm), blackberry10: i(im), opera: i(sm), firefox: i(am), chrome: i(om), device: i(nm) || i(im) || i(sm) || i(am) || i(om) }, any: false, phone: false, tablet: false };
  return s.any = s.apple.device || s.android.device || s.windows.device || s.other.device, s.phone = s.apple.phone || s.android.phone || s.windows.phone, s.tablet = s.apple.tablet || s.android.tablet || s.windows.tablet, s;
}
const O1 = um.default ?? um, Tr = O1(globalThis.navigator);
z.RETINA_PREFIX = /@([0-9\.]+)x/;
z.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;
var h_ = { exports: {} };
(function(r5) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (t = false));
  function i(l, u, h) {
    this.fn = l, this.context = u, this.once = h || false;
  }
  function s(l, u, h, c, d) {
    if (typeof h != "function") throw new TypeError("The listener must be a function");
    var f = new i(h, c || l, d), p = t ? t + u : u;
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
    for (c in h = this._events) e.call(h, c) && u.push(t ? c.slice(1) : c);
    return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(h)) : u;
  }, a.prototype.listeners = function(u) {
    var h = t ? t + u : u, c = this._events[h];
    if (!c) return [];
    if (c.fn) return [c.fn];
    for (var d = 0, f = c.length, p = new Array(f); d < f; d++) p[d] = c[d].fn;
    return p;
  }, a.prototype.listenerCount = function(u) {
    var h = t ? t + u : u, c = this._events[h];
    return c ? c.fn ? 1 : c.length : 0;
  }, a.prototype.emit = function(u, h, c, d, f, p) {
    var v = t ? t + u : u;
    if (!this._events[v]) return false;
    var _ = this._events[v], g = arguments.length, y, m;
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
      for (m = 1, y = new Array(g - 1); m < g; m++) y[m - 1] = arguments[m];
      _.fn.apply(_.context, y);
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
          if (!y) for (w = 1, y = new Array(g - 1); w < g; w++) y[w - 1] = arguments[w];
          _[m].fn.apply(_[m].context, y);
      }
    }
    return true;
  }, a.prototype.on = function(u, h, c) {
    return s(this, u, h, c, false);
  }, a.prototype.once = function(u, h, c) {
    return s(this, u, h, c, true);
  }, a.prototype.removeListener = function(u, h, c, d) {
    var f = t ? t + u : u;
    if (!this._events[f]) return this;
    if (!h) return o(this, f), this;
    var p = this._events[f];
    if (p.fn) p.fn === h && (!d || p.once) && (!c || p.context === c) && o(this, f);
    else {
      for (var v = 0, _ = [], g = p.length; v < g; v++) (p[v].fn !== h || d && !p[v].once || c && p[v].context !== c) && _.push(p[v]);
      _.length ? this._events[f] = _.length === 1 ? _[0] : _ : o(this, f);
    }
    return this;
  }, a.prototype.removeAllListeners = function(u) {
    var h;
    return u ? (h = t ? t + u : u, this._events[h] && o(this, h)) : (this._events = new n(), this._eventsCount = 0), this;
  }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = t, a.EventEmitter = a, r5.exports = a;
})(h_);
var L1 = h_.exports;
const bo = kd(L1);
var Pf = { exports: {} };
Pf.exports = ru;
Pf.exports.default = ru;
function ru(r5, e, t) {
  t = t || 2;
  var n = e && e.length, i = n ? e[0] * t : r5.length, s = c_(r5, 0, i, t, true), o = [];
  if (!s || s.next === s.prev) return o;
  var a, l, u, h, c, d, f;
  if (n && (s = $1(r5, e, s, t)), r5.length > 80 * t) {
    a = u = r5[0], l = h = r5[1];
    for (var p = t; p < i; p += t) c = r5[p], d = r5[p + 1], c < a && (a = c), d < l && (l = d), c > u && (u = c), d > h && (h = d);
    f = Math.max(u - a, h - l), f = f !== 0 ? 32767 / f : 0;
  }
  return fo(s, o, t, a, l, f, 0), o;
}
function c_(r5, e, t, n, i) {
  var s, o;
  if (i === kc(r5, e, t, n) > 0) for (s = e; s < t; s += n) o = hm(s, r5[s], r5[s + 1], o);
  else for (s = t - n; s >= e; s -= n) o = hm(s, r5[s], r5[s + 1], o);
  return o && nu(o, o.next) && (mo(o), o = o.next), o;
}
function jn(r5, e) {
  if (!r5) return r5;
  e || (e = r5);
  var t = r5, n;
  do
    if (n = false, !t.steiner && (nu(t, t.next) || Ee(t.prev, t, t.next) === 0)) {
      if (mo(t), t = e = t.prev, t === t.next) break;
      n = true;
    } else t = t.next;
  while (n || t !== e);
  return e;
}
function fo(r5, e, t, n, i, s, o) {
  if (r5) {
    !o && s && Y1(r5, n, i, s);
    for (var a = r5, l, u; r5.prev !== r5.next; ) {
      if (l = r5.prev, u = r5.next, s ? G1(r5, n, i, s) : U1(r5)) {
        e.push(l.i / t | 0), e.push(r5.i / t | 0), e.push(u.i / t | 0), mo(r5), r5 = u.next, a = u.next;
        continue;
      }
      if (r5 = u, r5 === a) {
        o ? o === 1 ? (r5 = z1(jn(r5), e, t), fo(r5, e, t, n, i, s, 2)) : o === 2 && H1(r5, e, t, n, i, s) : fo(jn(r5), e, t, n, i, s, 1);
        break;
      }
    }
  }
}
function U1(r5) {
  var e = r5.prev, t = r5, n = r5.next;
  if (Ee(e, t, n) >= 0) return false;
  for (var i = e.x, s = t.x, o = n.x, a = e.y, l = t.y, u = n.y, h = i < s ? i < o ? i : o : s < o ? s : o, c = a < l ? a < u ? a : u : l < u ? l : u, d = i > s ? i > o ? i : o : s > o ? s : o, f = a > l ? a > u ? a : u : l > u ? l : u, p = n.next; p !== e; ) {
    if (p.x >= h && p.x <= d && p.y >= c && p.y <= f && Si(i, a, s, l, o, u, p.x, p.y) && Ee(p.prev, p, p.next) >= 0) return false;
    p = p.next;
  }
  return true;
}
function G1(r5, e, t, n) {
  var i = r5.prev, s = r5, o = r5.next;
  if (Ee(i, s, o) >= 0) return false;
  for (var a = i.x, l = s.x, u = o.x, h = i.y, c = s.y, d = o.y, f = a < l ? a < u ? a : u : l < u ? l : u, p = h < c ? h < d ? h : d : c < d ? c : d, v = a > l ? a > u ? a : u : l > u ? l : u, _ = h > c ? h > d ? h : d : c > d ? c : d, g = Rc(f, p, e, t, n), y = Rc(v, _, e, t, n), m = r5.prevZ, x = r5.nextZ; m && m.z >= g && x && x.z <= y; ) {
    if (m.x >= f && m.x <= v && m.y >= p && m.y <= _ && m !== i && m !== o && Si(a, h, l, c, u, d, m.x, m.y) && Ee(m.prev, m, m.next) >= 0 || (m = m.prevZ, x.x >= f && x.x <= v && x.y >= p && x.y <= _ && x !== i && x !== o && Si(a, h, l, c, u, d, x.x, x.y) && Ee(x.prev, x, x.next) >= 0)) return false;
    x = x.nextZ;
  }
  for (; m && m.z >= g; ) {
    if (m.x >= f && m.x <= v && m.y >= p && m.y <= _ && m !== i && m !== o && Si(a, h, l, c, u, d, m.x, m.y) && Ee(m.prev, m, m.next) >= 0) return false;
    m = m.prevZ;
  }
  for (; x && x.z <= y; ) {
    if (x.x >= f && x.x <= v && x.y >= p && x.y <= _ && x !== i && x !== o && Si(a, h, l, c, u, d, x.x, x.y) && Ee(x.prev, x, x.next) >= 0) return false;
    x = x.nextZ;
  }
  return true;
}
function z1(r5, e, t) {
  var n = r5;
  do {
    var i = n.prev, s = n.next.next;
    !nu(i, s) && d_(i, n, n.next, s) && po(i, s) && po(s, i) && (e.push(i.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), mo(n), mo(n.next), n = r5 = s), n = n.next;
  } while (n !== r5);
  return jn(n);
}
function H1(r5, e, t, n, i, s) {
  var o = r5;
  do {
    for (var a = o.next.next; a !== o.prev; ) {
      if (o.i !== a.i && Z1(o, a)) {
        var l = f_(o, a);
        o = jn(o, o.next), l = jn(l, l.next), fo(o, e, t, n, i, s, 0), fo(l, e, t, n, i, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== r5);
}
function $1(r5, e, t, n) {
  var i = [], s, o, a, l, u;
  for (s = 0, o = e.length; s < o; s++) a = e[s] * n, l = s < o - 1 ? e[s + 1] * n : r5.length, u = c_(r5, a, l, n, false), u === u.next && (u.steiner = true), i.push(q1(u));
  for (i.sort(j1), s = 0; s < i.length; s++) t = V1(i[s], t);
  return t;
}
function j1(r5, e) {
  return r5.x - e.x;
}
function V1(r5, e) {
  var t = W1(r5, e);
  if (!t) return e;
  var n = f_(t, r5);
  return jn(n, n.next), jn(t, t.next);
}
function W1(r5, e) {
  var t = e, n = r5.x, i = r5.y, s = -1 / 0, o;
  do {
    if (i <= t.y && i >= t.next.y && t.next.y !== t.y) {
      var a = t.x + (i - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (a <= n && a > s && (s = a, o = t.x < t.next.x ? t : t.next, a === n)) return o;
    }
    t = t.next;
  } while (t !== e);
  if (!o) return null;
  var l = o, u = o.x, h = o.y, c = 1 / 0, d;
  t = o;
  do
    n >= t.x && t.x >= u && n !== t.x && Si(i < h ? n : s, i, u, h, i < h ? s : n, i, t.x, t.y) && (d = Math.abs(i - t.y) / (n - t.x), po(t, r5) && (d < c || d === c && (t.x > o.x || t.x === o.x && X1(o, t))) && (o = t, c = d)), t = t.next;
  while (t !== l);
  return o;
}
function X1(r5, e) {
  return Ee(r5.prev, r5, e.prev) < 0 && Ee(e.next, r5, r5.next) < 0;
}
function Y1(r5, e, t, n) {
  var i = r5;
  do
    i.z === 0 && (i.z = Rc(i.x, i.y, e, t, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== r5);
  i.prevZ.nextZ = null, i.prevZ = null, K1(i);
}
function K1(r5) {
  var e, t, n, i, s, o, a, l, u = 1;
  do {
    for (t = r5, r5 = null, s = null, o = 0; t; ) {
      for (o++, n = t, a = 0, e = 0; e < u && (a++, n = n.nextZ, !!n); e++) ;
      for (l = u; a > 0 || l > 0 && n; ) a !== 0 && (l === 0 || !n || t.z <= n.z) ? (i = t, t = t.nextZ, a--) : (i = n, n = n.nextZ, l--), s ? s.nextZ = i : r5 = i, i.prevZ = s, s = i;
      t = n;
    }
    s.nextZ = null, u *= 2;
  } while (o > 1);
  return r5;
}
function Rc(r5, e, t, n, i) {
  return r5 = (r5 - t) * i | 0, e = (e - n) * i | 0, r5 = (r5 | r5 << 8) & 16711935, r5 = (r5 | r5 << 4) & 252645135, r5 = (r5 | r5 << 2) & 858993459, r5 = (r5 | r5 << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, r5 | e << 1;
}
function q1(r5) {
  var e = r5, t = r5;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== r5);
  return t;
}
function Si(r5, e, t, n, i, s, o, a) {
  return (i - o) * (e - a) >= (r5 - o) * (s - a) && (r5 - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (s - a) >= (i - o) * (n - a);
}
function Z1(r5, e) {
  return r5.next.i !== e.i && r5.prev.i !== e.i && !Q1(r5, e) && (po(r5, e) && po(e, r5) && J1(r5, e) && (Ee(r5.prev, r5, e.prev) || Ee(r5, e.prev, e)) || nu(r5, e) && Ee(r5.prev, r5, r5.next) > 0 && Ee(e.prev, e, e.next) > 0);
}
function Ee(r5, e, t) {
  return (e.y - r5.y) * (t.x - e.x) - (e.x - r5.x) * (t.y - e.y);
}
function nu(r5, e) {
  return r5.x === e.x && r5.y === e.y;
}
function d_(r5, e, t, n) {
  var i = Qo(Ee(r5, e, t)), s = Qo(Ee(r5, e, n)), o = Qo(Ee(t, n, r5)), a = Qo(Ee(t, n, e));
  return !!(i !== s && o !== a || i === 0 && Zo(r5, t, e) || s === 0 && Zo(r5, n, e) || o === 0 && Zo(t, r5, n) || a === 0 && Zo(t, e, n));
}
function Zo(r5, e, t) {
  return e.x <= Math.max(r5.x, t.x) && e.x >= Math.min(r5.x, t.x) && e.y <= Math.max(r5.y, t.y) && e.y >= Math.min(r5.y, t.y);
}
function Qo(r5) {
  return r5 > 0 ? 1 : r5 < 0 ? -1 : 0;
}
function Q1(r5, e) {
  var t = r5;
  do {
    if (t.i !== r5.i && t.next.i !== r5.i && t.i !== e.i && t.next.i !== e.i && d_(t, t.next, r5, e)) return true;
    t = t.next;
  } while (t !== r5);
  return false;
}
function po(r5, e) {
  return Ee(r5.prev, r5, r5.next) < 0 ? Ee(r5, e, r5.next) >= 0 && Ee(r5, r5.prev, e) >= 0 : Ee(r5, e, r5.prev) < 0 || Ee(r5, r5.next, e) < 0;
}
function J1(r5, e) {
  var t = r5, n = false, i = (r5.x + e.x) / 2, s = (r5.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && i < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== r5);
  return n;
}
function f_(r5, e) {
  var t = new Mc(r5.i, r5.x, r5.y), n = new Mc(e.i, e.x, e.y), i = r5.next, s = e.prev;
  return r5.next = e, e.prev = r5, t.next = i, i.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function hm(r5, e, t, n) {
  var i = new Mc(r5, e, t);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function mo(r5) {
  r5.next.prev = r5.prev, r5.prev.next = r5.next, r5.prevZ && (r5.prevZ.nextZ = r5.nextZ), r5.nextZ && (r5.nextZ.prevZ = r5.prevZ);
}
function Mc(r5, e, t) {
  this.i = r5, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
}
ru.deviation = function(r5, e, t, n) {
  var i = e && e.length, s = i ? e[0] * t : r5.length, o = Math.abs(kc(r5, 0, s, t));
  if (i) for (var a = 0, l = e.length; a < l; a++) {
    var u = e[a] * t, h = a < l - 1 ? e[a + 1] * t : r5.length;
    o -= Math.abs(kc(r5, u, h, t));
  }
  var c = 0;
  for (a = 0; a < n.length; a += 3) {
    var d = n[a] * t, f = n[a + 1] * t, p = n[a + 2] * t;
    c += Math.abs((r5[d] - r5[p]) * (r5[f + 1] - r5[d + 1]) - (r5[d] - r5[f]) * (r5[p + 1] - r5[d + 1]));
  }
  return o === 0 && c === 0 ? 0 : Math.abs((c - o) / o);
};
function kc(r5, e, t, n) {
  for (var i = 0, s = e, o = t - n; s < t; s += n) i += (r5[o] - r5[s]) * (r5[s + 1] + r5[o + 1]), o = s;
  return i;
}
ru.flatten = function(r5) {
  for (var e = r5[0][0].length, t = { vertices: [], holes: [], dimensions: e }, n = 0, i = 0; i < r5.length; i++) {
    for (var s = 0; s < r5[i].length; s++) for (var o = 0; o < e; o++) t.vertices.push(r5[i][s][o]);
    i > 0 && (n += r5[i - 1].length, t.holes.push(n));
  }
  return t;
};
var eE = Pf.exports;
const tE = kd(eE);
var _l = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */
_l.exports;
(function(r5, e) {
  (function(t) {
    var n = e && !e.nodeType && e, i = r5 && !r5.nodeType && r5, s = typeof ks == "object" && ks;
    (s.global === s || s.window === s || s.self === s) && (t = s);
    var o, a = 2147483647, l = 36, u = 1, h = 26, c = 38, d = 700, f = 72, p = 128, v = "-", _ = /^xn--/, g = /[^\x20-\x7E]/, y = /[\x2E\u3002\uFF0E\uFF61]/g, m = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, x = l - u, w = Math.floor, S = String.fromCharCode, T;
    function E(b) {
      throw new RangeError(m[b]);
    }
    function I(b, U) {
      for (var Z = b.length, ae = []; Z--; ) ae[Z] = U(b[Z]);
      return ae;
    }
    function P(b, U) {
      var Z = b.split("@"), ae = "";
      Z.length > 1 && (ae = Z[0] + "@", b = Z[1]), b = b.replace(y, ".");
      var V = b.split("."), oe = I(V, U).join(".");
      return ae + oe;
    }
    function D(b) {
      for (var U = [], Z = 0, ae = b.length, V, oe; Z < ae; ) V = b.charCodeAt(Z++), V >= 55296 && V <= 56319 && Z < ae ? (oe = b.charCodeAt(Z++), (oe & 64512) == 56320 ? U.push(((V & 1023) << 10) + (oe & 1023) + 65536) : (U.push(V), Z--)) : U.push(V);
      return U;
    }
    function N(b) {
      return I(b, function(U) {
        var Z = "";
        return U > 65535 && (U -= 65536, Z += S(U >>> 10 & 1023 | 55296), U = 56320 | U & 1023), Z += S(U), Z;
      }).join("");
    }
    function A(b) {
      return b - 48 < 10 ? b - 22 : b - 65 < 26 ? b - 65 : b - 97 < 26 ? b - 97 : l;
    }
    function C(b, U) {
      return b + 22 + 75 * (b < 26) - ((U != 0) << 5);
    }
    function q(b, U, Z) {
      var ae = 0;
      for (b = Z ? w(b / d) : b >> 1, b += w(b / U); b > x * h >> 1; ae += l) b = w(b / x);
      return w(ae + (x + 1) * b / (b + c));
    }
    function J(b) {
      var U = [], Z = b.length, ae, V = 0, oe = p, re = f, he, _e, rt, Fe, de, Ae, Ce, Xt, Yt;
      for (he = b.lastIndexOf(v), he < 0 && (he = 0), _e = 0; _e < he; ++_e) b.charCodeAt(_e) >= 128 && E("not-basic"), U.push(b.charCodeAt(_e));
      for (rt = he > 0 ? he + 1 : 0; rt < Z; ) {
        for (Fe = V, de = 1, Ae = l; rt >= Z && E("invalid-input"), Ce = A(b.charCodeAt(rt++)), (Ce >= l || Ce > w((a - V) / de)) && E("overflow"), V += Ce * de, Xt = Ae <= re ? u : Ae >= re + h ? h : Ae - re, !(Ce < Xt); Ae += l) Yt = l - Xt, de > w(a / Yt) && E("overflow"), de *= Yt;
        ae = U.length + 1, re = q(V - Fe, ae, Fe == 0), w(V / ae) > a - oe && E("overflow"), oe += w(V / ae), V %= ae, U.splice(V++, 0, oe);
      }
      return N(U);
    }
    function O(b) {
      var U, Z, ae, V, oe, re, he, _e, rt, Fe, de, Ae = [], Ce, Xt, Yt, is;
      for (b = D(b), Ce = b.length, U = p, Z = 0, oe = f, re = 0; re < Ce; ++re) de = b[re], de < 128 && Ae.push(S(de));
      for (ae = V = Ae.length, V && Ae.push(v); ae < Ce; ) {
        for (he = a, re = 0; re < Ce; ++re) de = b[re], de >= U && de < he && (he = de);
        for (Xt = ae + 1, he - U > w((a - Z) / Xt) && E("overflow"), Z += (he - U) * Xt, U = he, re = 0; re < Ce; ++re) if (de = b[re], de < U && ++Z > a && E("overflow"), de == U) {
          for (_e = Z, rt = l; Fe = rt <= oe ? u : rt >= oe + h ? h : rt - oe, !(_e < Fe); rt += l) is = _e - Fe, Yt = l - Fe, Ae.push(S(C(Fe + is % Yt, 0))), _e = w(is / Yt);
          Ae.push(S(C(_e, 0))), oe = q(Z, Xt, ae == V), Z = 0, ++ae;
        }
        ++Z, ++U;
      }
      return Ae.join("");
    }
    function M(b) {
      return P(b, function(U) {
        return _.test(U) ? J(U.slice(4).toLowerCase()) : U;
      });
    }
    function H(b) {
      return P(b, function(U) {
        return g.test(U) ? "xn--" + O(U) : U;
      });
    }
    if (o = { version: "1.4.1", ucs2: { decode: D, encode: N }, decode: J, encode: O, toASCII: H, toUnicode: M }, n && i) if (r5.exports == n) i.exports = o;
    else for (T in o) o.hasOwnProperty(T) && (n[T] = o[T]);
    else t.punycode = o;
  })(ks);
})(_l, _l.exports);
var rE = _l.exports, es = TypeError;
const nE = {}, iE = Object.freeze(Object.defineProperty({ __proto__: null, default: nE }, Symbol.toStringTag, { value: "Module" })), sE = ax(iE);
var Rf = typeof Map == "function" && Map.prototype, ju = Object.getOwnPropertyDescriptor && Rf ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, xl = Rf && ju && typeof ju.get == "function" ? ju.get : null, cm = Rf && Map.prototype.forEach, Mf = typeof Set == "function" && Set.prototype, Vu = Object.getOwnPropertyDescriptor && Mf ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, wl = Mf && Vu && typeof Vu.get == "function" ? Vu.get : null, dm = Mf && Set.prototype.forEach, oE = typeof WeakMap == "function" && WeakMap.prototype, Hs = oE ? WeakMap.prototype.has : null, aE = typeof WeakSet == "function" && WeakSet.prototype, $s = aE ? WeakSet.prototype.has : null, lE = typeof WeakRef == "function" && WeakRef.prototype, fm = lE ? WeakRef.prototype.deref : null, uE = Boolean.prototype.valueOf, hE = Object.prototype.toString, cE = Function.prototype.toString, dE = String.prototype.match, kf = String.prototype.slice, Yr = String.prototype.replace, fE = String.prototype.toUpperCase, pm = String.prototype.toLowerCase, p_ = RegExp.prototype.test, mm = Array.prototype.concat, or = Array.prototype.join, pE = Array.prototype.slice, gm = Math.floor, Dc = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Wu = Object.getOwnPropertySymbols, Fc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Yi = typeof Symbol == "function" && typeof Symbol.iterator == "object", js = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Yi || true) ? Symbol.toStringTag : null, m_ = Object.prototype.propertyIsEnumerable, ym = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(r5) {
  return r5.__proto__;
} : null);
function vm(r5, e) {
  if (r5 === 1 / 0 || r5 === -1 / 0 || r5 !== r5 || r5 && r5 > -1e3 && r5 < 1e3 || p_.call(/e/, e)) return e;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof r5 == "number") {
    var n = r5 < 0 ? -gm(-r5) : gm(r5);
    if (n !== r5) {
      var i = String(n), s = kf.call(e, i.length + 1);
      return Yr.call(i, t, "$&_") + "." + Yr.call(Yr.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Yr.call(e, t, "$&_");
}
var Nc = sE, _m = Nc.custom, xm = v_(_m) ? _m : null, g_ = { __proto__: null, double: '"', single: "'" }, mE = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g }, iu = function r(e, t, n, i) {
  var s = t || {};
  if (vr(s, "quoteStyle") && !vr(g_, s.quoteStyle)) throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (vr(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = vr(s, "customInspect") ? s.customInspect : true;
  if (typeof o != "boolean" && o !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (vr(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (vr(s, "numericSeparator") && typeof s.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = s.numericSeparator;
  if (typeof e > "u") return "undefined";
  if (e === null) return "null";
  if (typeof e == "boolean") return e ? "true" : "false";
  if (typeof e == "string") return x_(e, s);
  if (typeof e == "number") {
    if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
    var l = String(e);
    return a ? vm(e, l) : l;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return a ? vm(e, u) : u;
  }
  var h = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof n > "u" && (n = 0), n >= h && h > 0 && typeof e == "object") return Bc(e) ? "[Array]" : "[Object]";
  var c = DE(s, n);
  if (typeof i > "u") i = [];
  else if (__(i, e) >= 0) return "[Circular]";
  function d(A, C, q) {
    if (C && (i = pE.call(i), i.push(C)), q) {
      var J = { depth: s.depth };
      return vr(s, "quoteStyle") && (J.quoteStyle = s.quoteStyle), r(A, J, n + 1, i);
    }
    return r(A, s, n + 1, i);
  }
  if (typeof e == "function" && !wm(e)) {
    var f = SE(e), p = Jo(e, d);
    return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (p.length > 0 ? " { " + or.call(p, ", ") + " }" : "");
  }
  if (v_(e)) {
    var v = Yi ? Yr.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Fc.call(e);
    return typeof e == "object" && !Yi ? fs(v) : v;
  }
  if (RE(e)) {
    for (var _ = "<" + pm.call(String(e.nodeName)), g = e.attributes || [], y = 0; y < g.length; y++) _ += " " + g[y].name + "=" + y_(gE(g[y].value), "double", s);
    return _ += ">", e.childNodes && e.childNodes.length && (_ += "..."), _ += "</" + pm.call(String(e.nodeName)) + ">", _;
  }
  if (Bc(e)) {
    if (e.length === 0) return "[]";
    var m = Jo(e, d);
    return c && !kE(m) ? "[" + Oc(m, c) + "]" : "[ " + or.call(m, ", ") + " ]";
  }
  if (vE(e)) {
    var x = Jo(e, d);
    return !("cause" in Error.prototype) && "cause" in e && !m_.call(e, "cause") ? "{ [" + String(e) + "] " + or.call(mm.call("[cause]: " + d(e.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + or.call(x, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (xm && typeof e[xm] == "function" && Nc) return Nc(e, { depth: h - n });
    if (o !== "symbol" && typeof e.inspect == "function") return e.inspect();
  }
  if (bE(e)) {
    var w = [];
    return cm && cm.call(e, function(A, C) {
      w.push(d(C, e, true) + " => " + d(A, e));
    }), Em("Map", xl.call(e), w, c);
  }
  if (IE(e)) {
    var S = [];
    return dm && dm.call(e, function(A) {
      S.push(d(A, e));
    }), Em("Set", wl.call(e), S, c);
  }
  if (AE(e)) return Xu("WeakMap");
  if (PE(e)) return Xu("WeakSet");
  if (CE(e)) return Xu("WeakRef");
  if (xE(e)) return fs(d(Number(e)));
  if (EE(e)) return fs(d(Dc.call(e)));
  if (wE(e)) return fs(uE.call(e));
  if (_E(e)) return fs(d(String(e)));
  if (typeof window < "u" && e === window) return "{ [object Window] }";
  if (typeof globalThis < "u" && e === globalThis || typeof ks < "u" && e === ks) return "{ [object globalThis] }";
  if (!yE(e) && !wm(e)) {
    var T = Jo(e, d), E = ym ? ym(e) === Object.prototype : e instanceof Object || e.constructor === Object, I = e instanceof Object ? "" : "null prototype", P = !E && js && Object(e) === e && js in e ? kf.call(pn(e), 8, -1) : I ? "Object" : "", D = E || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", N = D + (P || I ? "[" + or.call(mm.call([], P || [], I || []), ": ") + "] " : "");
    return T.length === 0 ? N + "{}" : c ? N + "{" + Oc(T, c) + "}" : N + "{ " + or.call(T, ", ") + " }";
  }
  return String(e);
};
function y_(r5, e, t) {
  var n = t.quoteStyle || e, i = g_[n];
  return i + r5 + i;
}
function gE(r5) {
  return Yr.call(String(r5), /"/g, "&quot;");
}
function Zn(r5) {
  return !js || !(typeof r5 == "object" && (js in r5 || typeof r5[js] < "u"));
}
function Bc(r5) {
  return pn(r5) === "[object Array]" && Zn(r5);
}
function yE(r5) {
  return pn(r5) === "[object Date]" && Zn(r5);
}
function wm(r5) {
  return pn(r5) === "[object RegExp]" && Zn(r5);
}
function vE(r5) {
  return pn(r5) === "[object Error]" && Zn(r5);
}
function _E(r5) {
  return pn(r5) === "[object String]" && Zn(r5);
}
function xE(r5) {
  return pn(r5) === "[object Number]" && Zn(r5);
}
function wE(r5) {
  return pn(r5) === "[object Boolean]" && Zn(r5);
}
function v_(r5) {
  if (Yi) return r5 && typeof r5 == "object" && r5 instanceof Symbol;
  if (typeof r5 == "symbol") return true;
  if (!r5 || typeof r5 != "object" || !Fc) return false;
  try {
    return Fc.call(r5), true;
  } catch {
  }
  return false;
}
function EE(r5) {
  if (!r5 || typeof r5 != "object" || !Dc) return false;
  try {
    return Dc.call(r5), true;
  } catch {
  }
  return false;
}
var TE = Object.prototype.hasOwnProperty || function(r5) {
  return r5 in this;
};
function vr(r5, e) {
  return TE.call(r5, e);
}
function pn(r5) {
  return hE.call(r5);
}
function SE(r5) {
  if (r5.name) return r5.name;
  var e = dE.call(cE.call(r5), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function __(r5, e) {
  if (r5.indexOf) return r5.indexOf(e);
  for (var t = 0, n = r5.length; t < n; t++) if (r5[t] === e) return t;
  return -1;
}
function bE(r5) {
  if (!xl || !r5 || typeof r5 != "object") return false;
  try {
    xl.call(r5);
    try {
      wl.call(r5);
    } catch {
      return true;
    }
    return r5 instanceof Map;
  } catch {
  }
  return false;
}
function AE(r5) {
  if (!Hs || !r5 || typeof r5 != "object") return false;
  try {
    Hs.call(r5, Hs);
    try {
      $s.call(r5, $s);
    } catch {
      return true;
    }
    return r5 instanceof WeakMap;
  } catch {
  }
  return false;
}
function CE(r5) {
  if (!fm || !r5 || typeof r5 != "object") return false;
  try {
    return fm.call(r5), true;
  } catch {
  }
  return false;
}
function IE(r5) {
  if (!wl || !r5 || typeof r5 != "object") return false;
  try {
    wl.call(r5);
    try {
      xl.call(r5);
    } catch {
      return true;
    }
    return r5 instanceof Set;
  } catch {
  }
  return false;
}
function PE(r5) {
  if (!$s || !r5 || typeof r5 != "object") return false;
  try {
    $s.call(r5, $s);
    try {
      Hs.call(r5, Hs);
    } catch {
      return true;
    }
    return r5 instanceof WeakSet;
  } catch {
  }
  return false;
}
function RE(r5) {
  return !r5 || typeof r5 != "object" ? false : typeof HTMLElement < "u" && r5 instanceof HTMLElement ? true : typeof r5.nodeName == "string" && typeof r5.getAttribute == "function";
}
function x_(r5, e) {
  if (r5.length > e.maxStringLength) {
    var t = r5.length - e.maxStringLength, n = "... " + t + " more character" + (t > 1 ? "s" : "");
    return x_(kf.call(r5, 0, e.maxStringLength), e) + n;
  }
  var i = mE[e.quoteStyle || "single"];
  i.lastIndex = 0;
  var s = Yr.call(Yr.call(r5, i, "\\$1"), /[\x00-\x1f]/g, ME);
  return y_(s, "single", e);
}
function ME(r5) {
  var e = r5.charCodeAt(0), t = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[e];
  return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + fE.call(e.toString(16));
}
function fs(r5) {
  return "Object(" + r5 + ")";
}
function Xu(r5) {
  return r5 + " { ? }";
}
function Em(r5, e, t, n) {
  var i = n ? Oc(t, n) : or.call(t, ", ");
  return r5 + " (" + e + ") {" + i + "}";
}
function kE(r5) {
  for (var e = 0; e < r5.length; e++) if (__(r5[e], `
`) >= 0) return false;
  return true;
}
function DE(r5, e) {
  var t;
  if (r5.indent === "	") t = "	";
  else if (typeof r5.indent == "number" && r5.indent > 0) t = or.call(Array(r5.indent + 1), " ");
  else return null;
  return { base: t, prev: or.call(Array(e + 1), t) };
}
function Oc(r5, e) {
  if (r5.length === 0) return "";
  var t = `
` + e.prev + e.base;
  return t + or.call(r5, "," + t) + `
` + e.prev;
}
function Jo(r5, e) {
  var t = Bc(r5), n = [];
  if (t) {
    n.length = r5.length;
    for (var i = 0; i < r5.length; i++) n[i] = vr(r5, i) ? e(r5[i], r5) : "";
  }
  var s = typeof Wu == "function" ? Wu(r5) : [], o;
  if (Yi) {
    o = {};
    for (var a = 0; a < s.length; a++) o["$" + s[a]] = s[a];
  }
  for (var l in r5) vr(r5, l) && (t && String(Number(l)) === l && l < r5.length || Yi && o["$" + l] instanceof Symbol || (p_.call(/[^\w$]/, l) ? n.push(e(l, r5) + ": " + e(r5[l], r5)) : n.push(l + ": " + e(r5[l], r5))));
  if (typeof Wu == "function") for (var u = 0; u < s.length; u++) m_.call(r5, s[u]) && n.push("[" + e(s[u]) + "]: " + e(r5[s[u]], r5));
  return n;
}
var FE = iu, NE = es, su = function(r5, e, t) {
  for (var n = r5, i; (i = n.next) != null; n = i) if (i.key === e) return n.next = i.next, t || (i.next = r5.next, r5.next = i), i;
}, BE = function(r5, e) {
  if (r5) {
    var t = su(r5, e);
    return t && t.value;
  }
}, OE = function(r5, e, t) {
  var n = su(r5, e);
  n ? n.value = t : r5.next = { key: e, next: r5.next, value: t };
}, LE = function(r5, e) {
  return r5 ? !!su(r5, e) : false;
}, UE = function(r5, e) {
  if (r5) return su(r5, e, true);
}, GE = function() {
  var e, t = { assert: function(n) {
    if (!t.has(n)) throw new NE("Side channel does not contain " + FE(n));
  }, delete: function(n) {
    var i = e && e.next, s = UE(e, n);
    return s && i && i === s && (e = void 0), !!s;
  }, get: function(n) {
    return BE(e, n);
  }, has: function(n) {
    return LE(e, n);
  }, set: function(n, i) {
    e || (e = { next: void 0 }), OE(e, n, i);
  } };
  return t;
}, w_ = Object, zE = Error, HE = EvalError, $E = RangeError, jE = ReferenceError, VE = SyntaxError, WE = URIError, XE = Math.abs, YE = Math.floor, KE = Math.max, qE = Math.min, ZE = Math.pow, QE = Math.round, JE = Number.isNaN || function(e) {
  return e !== e;
}, eT = JE, tT = function(e) {
  return eT(e) || e === 0 ? e : e < 0 ? -1 : 1;
}, rT = Object.getOwnPropertyDescriptor, Oa = rT;
if (Oa) try {
  Oa([], "length");
} catch {
  Oa = null;
}
var E_ = Oa, La = Object.defineProperty || false;
if (La) try {
  La({}, "a", { value: 1 });
} catch {
  La = false;
}
var nT = La, Yu, Tm;
function iT() {
  return Tm || (Tm = 1, Yu = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return false;
    if (typeof Symbol.iterator == "symbol") return true;
    var e = {}, t = Symbol("test"), n = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]") return false;
    var i = 42;
    e[t] = i;
    for (var s in e) return false;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return false;
    var o = Object.getOwnPropertySymbols(e);
    if (o.length !== 1 || o[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return false;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = Object.getOwnPropertyDescriptor(e, t);
      if (a.value !== i || a.enumerable !== true) return false;
    }
    return true;
  }), Yu;
}
var Ku, Sm;
function sT() {
  if (Sm) return Ku;
  Sm = 1;
  var r5 = typeof Symbol < "u" && Symbol, e = iT();
  return Ku = function() {
    return typeof r5 != "function" || typeof Symbol != "function" || typeof r5("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : e();
  }, Ku;
}
var qu, bm;
function T_() {
  return bm || (bm = 1, qu = typeof Reflect < "u" && Reflect.getPrototypeOf || null), qu;
}
var Zu, Am;
function S_() {
  if (Am) return Zu;
  Am = 1;
  var r5 = w_;
  return Zu = r5.getPrototypeOf || null, Zu;
}
var oT = "Function.prototype.bind called on incompatible ", aT = Object.prototype.toString, lT = Math.max, uT = "[object Function]", Cm = function(e, t) {
  for (var n = [], i = 0; i < e.length; i += 1) n[i] = e[i];
  for (var s = 0; s < t.length; s += 1) n[s + e.length] = t[s];
  return n;
}, hT = function(e, t) {
  for (var n = [], i = t, s = 0; i < e.length; i += 1, s += 1) n[s] = e[i];
  return n;
}, cT = function(r5, e) {
  for (var t = "", n = 0; n < r5.length; n += 1) t += r5[n], n + 1 < r5.length && (t += e);
  return t;
}, dT = function(e) {
  var t = this;
  if (typeof t != "function" || aT.apply(t) !== uT) throw new TypeError(oT + t);
  for (var n = hT(arguments, 1), i, s = function() {
    if (this instanceof i) {
      var h = t.apply(this, Cm(n, arguments));
      return Object(h) === h ? h : this;
    }
    return t.apply(e, Cm(n, arguments));
  }, o = lT(0, t.length - n.length), a = [], l = 0; l < o; l++) a[l] = "$" + l;
  if (i = Function("binder", "return function (" + cT(a, ",") + "){ return binder.apply(this,arguments); }")(s), t.prototype) {
    var u = function() {
    };
    u.prototype = t.prototype, i.prototype = new u(), u.prototype = null;
  }
  return i;
}, fT = dT, ou = Function.prototype.bind || fT, Df = Function.prototype.call, Qu, Im;
function b_() {
  return Im || (Im = 1, Qu = Function.prototype.apply), Qu;
}
var pT = typeof Reflect < "u" && Reflect && Reflect.apply, mT = ou, gT = b_(), yT = Df, vT = pT, _T = vT || mT.call(yT, gT), xT = ou, wT = es, ET = Df, TT = _T, A_ = function(e) {
  if (e.length < 1 || typeof e[0] != "function") throw new wT("a function is required");
  return TT(xT, ET, e);
}, Ju, Pm;
function ST() {
  if (Pm) return Ju;
  Pm = 1;
  var r5 = A_, e = E_, t;
  try {
    t = [].__proto__ === Array.prototype;
  } catch (o) {
    if (!o || typeof o != "object" || !("code" in o) || o.code !== "ERR_PROTO_ACCESS") throw o;
  }
  var n = !!t && e && e(Object.prototype, "__proto__"), i = Object, s = i.getPrototypeOf;
  return Ju = n && typeof n.get == "function" ? r5([n.get]) : typeof s == "function" ? function(a) {
    return s(a == null ? a : i(a));
  } : false, Ju;
}
var eh, Rm;
function bT() {
  if (Rm) return eh;
  Rm = 1;
  var r5 = T_(), e = S_(), t = ST();
  return eh = r5 ? function(i) {
    return r5(i);
  } : e ? function(i) {
    if (!i || typeof i != "object" && typeof i != "function") throw new TypeError("getProto: not an object");
    return e(i);
  } : t ? function(i) {
    return t(i);
  } : null, eh;
}
var th, Mm;
function AT() {
  if (Mm) return th;
  Mm = 1;
  var r5 = Function.prototype.call, e = Object.prototype.hasOwnProperty, t = ou;
  return th = t.call(r5, e), th;
}
var ne, CT = w_, IT = zE, PT = HE, RT = $E, MT = jE, Ki = VE, Fi = es, kT = WE, DT = XE, FT = YE, NT = KE, BT = qE, OT = ZE, LT = QE, UT = tT, C_ = Function, rh = function(r5) {
  try {
    return C_('"use strict"; return (' + r5 + ").constructor;")();
  } catch {
  }
}, go = E_, GT = nT, nh = function() {
  throw new Fi();
}, zT = go ? function() {
  try {
    return arguments.callee, nh;
  } catch {
    try {
      return go(arguments, "callee").get;
    } catch {
      return nh;
    }
  }
}() : nh, ri = sT()(), Ue = bT(), HT = S_(), $T = T_(), I_ = b_(), Ao = Df, si = {}, jT = typeof Uint8Array > "u" || !Ue ? ne : Ue(Uint8Array), Bn = { __proto__: null, "%AggregateError%": typeof AggregateError > "u" ? ne : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? ne : ArrayBuffer, "%ArrayIteratorPrototype%": ri && Ue ? Ue([][Symbol.iterator]()) : ne, "%AsyncFromSyncIteratorPrototype%": ne, "%AsyncFunction%": si, "%AsyncGenerator%": si, "%AsyncGeneratorFunction%": si, "%AsyncIteratorPrototype%": si, "%Atomics%": typeof Atomics > "u" ? ne : Atomics, "%BigInt%": typeof BigInt > "u" ? ne : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? ne : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? ne : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? ne : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": IT, "%eval%": eval, "%EvalError%": PT, "%Float16Array%": typeof Float16Array > "u" ? ne : Float16Array, "%Float32Array%": typeof Float32Array > "u" ? ne : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? ne : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? ne : FinalizationRegistry, "%Function%": C_, "%GeneratorFunction%": si, "%Int8Array%": typeof Int8Array > "u" ? ne : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? ne : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? ne : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": ri && Ue ? Ue(Ue([][Symbol.iterator]())) : ne, "%JSON%": typeof JSON == "object" ? JSON : ne, "%Map%": typeof Map > "u" ? ne : Map, "%MapIteratorPrototype%": typeof Map > "u" || !ri || !Ue ? ne : Ue((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": CT, "%Object.getOwnPropertyDescriptor%": go, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? ne : Promise, "%Proxy%": typeof Proxy > "u" ? ne : Proxy, "%RangeError%": RT, "%ReferenceError%": MT, "%Reflect%": typeof Reflect > "u" ? ne : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? ne : Set, "%SetIteratorPrototype%": typeof Set > "u" || !ri || !Ue ? ne : Ue((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? ne : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": ri && Ue ? Ue(""[Symbol.iterator]()) : ne, "%Symbol%": ri ? Symbol : ne, "%SyntaxError%": Ki, "%ThrowTypeError%": zT, "%TypedArray%": jT, "%TypeError%": Fi, "%Uint8Array%": typeof Uint8Array > "u" ? ne : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? ne : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? ne : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? ne : Uint32Array, "%URIError%": kT, "%WeakMap%": typeof WeakMap > "u" ? ne : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? ne : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? ne : WeakSet, "%Function.prototype.call%": Ao, "%Function.prototype.apply%": I_, "%Object.defineProperty%": GT, "%Object.getPrototypeOf%": HT, "%Math.abs%": DT, "%Math.floor%": FT, "%Math.max%": NT, "%Math.min%": BT, "%Math.pow%": OT, "%Math.round%": LT, "%Math.sign%": UT, "%Reflect.getPrototypeOf%": $T };
if (Ue) try {
  null.error;
} catch (r5) {
  var VT = Ue(Ue(r5));
  Bn["%Error.prototype%"] = VT;
}
var WT = function r2(e) {
  var t;
  if (e === "%AsyncFunction%") t = rh("async function () {}");
  else if (e === "%GeneratorFunction%") t = rh("function* () {}");
  else if (e === "%AsyncGeneratorFunction%") t = rh("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = r2("%AsyncGeneratorFunction%");
    n && (t = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = r2("%AsyncGenerator%");
    i && Ue && (t = Ue(i.prototype));
  }
  return Bn[e] = t, t;
}, km = { __proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, Co = ou, El = AT(), XT = Co.call(Ao, Array.prototype.concat), YT = Co.call(I_, Array.prototype.splice), Dm = Co.call(Ao, String.prototype.replace), Tl = Co.call(Ao, String.prototype.slice), KT = Co.call(Ao, RegExp.prototype.exec), qT = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ZT = /\\(\\)?/g, QT = function(e) {
  var t = Tl(e, 0, 1), n = Tl(e, -1);
  if (t === "%" && n !== "%") throw new Ki("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && t !== "%") throw new Ki("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return Dm(e, qT, function(s, o, a, l) {
    i[i.length] = a ? Dm(l, ZT, "$1") : o || s;
  }), i;
}, JT = function(e, t) {
  var n = e, i;
  if (El(km, n) && (i = km[n], n = "%" + i[0] + "%"), El(Bn, n)) {
    var s = Bn[n];
    if (s === si && (s = WT(n)), typeof s > "u" && !t) throw new Fi("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return { alias: i, name: n, value: s };
  }
  throw new Ki("intrinsic " + e + " does not exist!");
}, Ff = function(e, t) {
  if (typeof e != "string" || e.length === 0) throw new Fi("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof t != "boolean") throw new Fi('"allowMissing" argument must be a boolean');
  if (KT(/^%?[^%]*%?$/, e) === null) throw new Ki("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = QT(e), i = n.length > 0 ? n[0] : "", s = JT("%" + i + "%", t), o = s.name, a = s.value, l = false, u = s.alias;
  u && (i = u[0], YT(n, XT([0, 1], u)));
  for (var h = 1, c = true; h < n.length; h += 1) {
    var d = n[h], f = Tl(d, 0, 1), p = Tl(d, -1);
    if ((f === '"' || f === "'" || f === "`" || p === '"' || p === "'" || p === "`") && f !== p) throw new Ki("property names with quotes must have matching quotes");
    if ((d === "constructor" || !c) && (l = true), i += "." + d, o = "%" + i + "%", El(Bn, o)) a = Bn[o];
    else if (a != null) {
      if (!(d in a)) {
        if (!t) throw new Fi("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (go && h + 1 >= n.length) {
        var v = go(a, d);
        c = !!v, c && "get" in v && !("originalValue" in v.get) ? a = v.get : a = a[d];
      } else c = El(a, d), a = a[d];
      c && !l && (Bn[o] = a);
    }
  }
  return a;
}, P_ = Ff, R_ = A_, eS = R_([P_("%String.prototype.indexOf%")]), M_ = function(e, t) {
  var n = P_(e, !!t);
  return typeof n == "function" && eS(e, ".prototype.") > -1 ? R_([n]) : n;
}, tS = Ff, Io = M_, rS = iu, nS = es, Fm = tS("%Map%", true), iS = Io("Map.prototype.get", true), sS = Io("Map.prototype.set", true), oS = Io("Map.prototype.has", true), aS = Io("Map.prototype.delete", true), lS = Io("Map.prototype.size", true), k_ = !!Fm && function() {
  var e, t = { assert: function(n) {
    if (!t.has(n)) throw new nS("Side channel does not contain " + rS(n));
  }, delete: function(n) {
    if (e) {
      var i = aS(e, n);
      return lS(e) === 0 && (e = void 0), i;
    }
    return false;
  }, get: function(n) {
    if (e) return iS(e, n);
  }, has: function(n) {
    return e ? oS(e, n) : false;
  }, set: function(n, i) {
    e || (e = new Fm()), sS(e, n, i);
  } };
  return t;
}, uS = Ff, au = M_, hS = iu, ea = k_, cS = es, ni = uS("%WeakMap%", true), dS = au("WeakMap.prototype.get", true), fS = au("WeakMap.prototype.set", true), pS = au("WeakMap.prototype.has", true), mS = au("WeakMap.prototype.delete", true), gS = ni ? function() {
  var e, t, n = { assert: function(i) {
    if (!n.has(i)) throw new cS("Side channel does not contain " + hS(i));
  }, delete: function(i) {
    if (ni && i && (typeof i == "object" || typeof i == "function")) {
      if (e) return mS(e, i);
    } else if (ea && t) return t.delete(i);
    return false;
  }, get: function(i) {
    return ni && i && (typeof i == "object" || typeof i == "function") && e ? dS(e, i) : t && t.get(i);
  }, has: function(i) {
    return ni && i && (typeof i == "object" || typeof i == "function") && e ? pS(e, i) : !!t && t.has(i);
  }, set: function(i, s) {
    ni && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new ni()), fS(e, i, s)) : ea && (t || (t = ea()), t.set(i, s));
  } };
  return n;
} : ea, yS = es, vS = iu, _S = GE, xS = k_, wS = gS, ES = wS || xS || _S, TS = function() {
  var e, t = { assert: function(n) {
    if (!t.has(n)) throw new yS("Side channel does not contain " + vS(n));
  }, delete: function(n) {
    return !!e && e.delete(n);
  }, get: function(n) {
    return e && e.get(n);
  }, has: function(n) {
    return !!e && e.has(n);
  }, set: function(n, i) {
    e || (e = ES()), e.set(n, i);
  } };
  return t;
}, SS = String.prototype.replace, bS = /%20/g, ih = { RFC1738: "RFC1738", RFC3986: "RFC3986" }, Nf = { default: ih.RFC3986, formatters: { RFC1738: function(r5) {
  return SS.call(r5, bS, "+");
}, RFC3986: function(r5) {
  return String(r5);
} }, RFC1738: ih.RFC1738, RFC3986: ih.RFC3986 }, AS = Nf, sh = Object.prototype.hasOwnProperty, Cn = Array.isArray, qt = function() {
  for (var r5 = [], e = 0; e < 256; ++e) r5.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return r5;
}(), CS = function(e) {
  for (; e.length > 1; ) {
    var t = e.pop(), n = t.obj[t.prop];
    if (Cn(n)) {
      for (var i = [], s = 0; s < n.length; ++s) typeof n[s] < "u" && i.push(n[s]);
      t.obj[t.prop] = i;
    }
  }
}, D_ = function(e, t) {
  for (var n = t && t.plainObjects ? { __proto__: null } : {}, i = 0; i < e.length; ++i) typeof e[i] < "u" && (n[i] = e[i]);
  return n;
}, IS = function r3(e, t, n) {
  if (!t) return e;
  if (typeof t != "object" && typeof t != "function") {
    if (Cn(e)) e.push(t);
    else if (e && typeof e == "object") (n && (n.plainObjects || n.allowPrototypes) || !sh.call(Object.prototype, t)) && (e[t] = true);
    else return [e, t];
    return e;
  }
  if (!e || typeof e != "object") return [e].concat(t);
  var i = e;
  return Cn(e) && !Cn(t) && (i = D_(e, n)), Cn(e) && Cn(t) ? (t.forEach(function(s, o) {
    if (sh.call(e, o)) {
      var a = e[o];
      a && typeof a == "object" && s && typeof s == "object" ? e[o] = r3(a, s, n) : e.push(s);
    } else e[o] = s;
  }), e) : Object.keys(t).reduce(function(s, o) {
    var a = t[o];
    return sh.call(s, o) ? s[o] = r3(s[o], a, n) : s[o] = a, s;
  }, i);
}, PS = function(e, t) {
  return Object.keys(t).reduce(function(n, i) {
    return n[i] = t[i], n;
  }, e);
}, RS = function(r5, e, t) {
  var n = r5.replace(/\+/g, " ");
  if (t === "iso-8859-1") return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, oh = 1024, MS = function(e, t, n, i, s) {
  if (e.length === 0) return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1") return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
    return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
  });
  for (var a = "", l = 0; l < o.length; l += oh) {
    for (var u = o.length >= oh ? o.slice(l, l + oh) : o, h = [], c = 0; c < u.length; ++c) {
      var d = u.charCodeAt(c);
      if (d === 45 || d === 46 || d === 95 || d === 126 || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || s === AS.RFC1738 && (d === 40 || d === 41)) {
        h[h.length] = u.charAt(c);
        continue;
      }
      if (d < 128) {
        h[h.length] = qt[d];
        continue;
      }
      if (d < 2048) {
        h[h.length] = qt[192 | d >> 6] + qt[128 | d & 63];
        continue;
      }
      if (d < 55296 || d >= 57344) {
        h[h.length] = qt[224 | d >> 12] + qt[128 | d >> 6 & 63] + qt[128 | d & 63];
        continue;
      }
      c += 1, d = 65536 + ((d & 1023) << 10 | u.charCodeAt(c) & 1023), h[h.length] = qt[240 | d >> 18] + qt[128 | d >> 12 & 63] + qt[128 | d >> 6 & 63] + qt[128 | d & 63];
    }
    a += h.join("");
  }
  return a;
}, kS = function(e) {
  for (var t = [{ obj: { o: e }, prop: "o" }], n = [], i = 0; i < t.length; ++i) for (var s = t[i], o = s.obj[s.prop], a = Object.keys(o), l = 0; l < a.length; ++l) {
    var u = a[l], h = o[u];
    typeof h == "object" && h !== null && n.indexOf(h) === -1 && (t.push({ obj: o, prop: u }), n.push(h));
  }
  return CS(t), e;
}, DS = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, FS = function(e) {
  return !e || typeof e != "object" ? false : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, NS = function(e, t) {
  return [].concat(e, t);
}, BS = function(e, t) {
  if (Cn(e)) {
    for (var n = [], i = 0; i < e.length; i += 1) n.push(t(e[i]));
    return n;
  }
  return t(e);
}, F_ = { arrayToObject: D_, assign: PS, combine: NS, compact: kS, decode: RS, encode: MS, isBuffer: FS, isRegExp: DS, maybeMap: BS, merge: IS }, N_ = TS, Ua = F_, Vs = Nf, OS = Object.prototype.hasOwnProperty, B_ = { brackets: function(e) {
  return e + "[]";
}, comma: "comma", indices: function(e, t) {
  return e + "[" + t + "]";
}, repeat: function(e) {
  return e;
} }, ir = Array.isArray, LS = Array.prototype.push, O_ = function(r5, e) {
  LS.apply(r5, ir(e) ? e : [e]);
}, US = Date.prototype.toISOString, Nm = Vs.default, Ne = { addQueryPrefix: false, allowDots: false, allowEmptyArrays: false, arrayFormat: "indices", charset: "utf-8", charsetSentinel: false, commaRoundTrip: false, delimiter: "&", encode: true, encodeDotInKeys: false, encoder: Ua.encode, encodeValuesOnly: false, filter: void 0, format: Nm, formatter: Vs.formatters[Nm], indices: false, serializeDate: function(e) {
  return US.call(e);
}, skipNulls: false, strictNullHandling: false }, GS = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, ah = {}, zS = function r4(e, t, n, i, s, o, a, l, u, h, c, d, f, p, v, _, g, y) {
  for (var m = e, x = y, w = 0, S = false; (x = x.get(ah)) !== void 0 && !S; ) {
    var T = x.get(e);
    if (w += 1, typeof T < "u") {
      if (T === w) throw new RangeError("Cyclic object value");
      S = true;
    }
    typeof x.get(ah) > "u" && (w = 0);
  }
  if (typeof h == "function" ? m = h(t, m) : m instanceof Date ? m = f(m) : n === "comma" && ir(m) && (m = Ua.maybeMap(m, function(b) {
    return b instanceof Date ? f(b) : b;
  })), m === null) {
    if (o) return u && !_ ? u(t, Ne.encoder, g, "key", p) : t;
    m = "";
  }
  if (GS(m) || Ua.isBuffer(m)) {
    if (u) {
      var E = _ ? t : u(t, Ne.encoder, g, "key", p);
      return [v(E) + "=" + v(u(m, Ne.encoder, g, "value", p))];
    }
    return [v(t) + "=" + v(String(m))];
  }
  var I = [];
  if (typeof m > "u") return I;
  var P;
  if (n === "comma" && ir(m)) _ && u && (m = Ua.maybeMap(m, u)), P = [{ value: m.length > 0 ? m.join(",") || null : void 0 }];
  else if (ir(h)) P = h;
  else {
    var D = Object.keys(m);
    P = c ? D.sort(c) : D;
  }
  var N = l ? String(t).replace(/\./g, "%2E") : String(t), A = i && ir(m) && m.length === 1 ? N + "[]" : N;
  if (s && ir(m) && m.length === 0) return A + "[]";
  for (var C = 0; C < P.length; ++C) {
    var q = P[C], J = typeof q == "object" && q && typeof q.value < "u" ? q.value : m[q];
    if (!(a && J === null)) {
      var O = d && l ? String(q).replace(/\./g, "%2E") : String(q), M = ir(m) ? typeof n == "function" ? n(A, O) : A : A + (d ? "." + O : "[" + O + "]");
      y.set(e, w);
      var H = N_();
      H.set(ah, y), O_(I, r4(J, M, n, i, s, o, a, l, n === "comma" && _ && ir(m) ? null : u, h, c, d, f, p, v, _, g, H));
    }
  }
  return I;
}, HS = function(e) {
  if (!e) return Ne;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.encodeDotInKeys < "u" && typeof e.encodeDotInKeys != "boolean") throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
  var t = e.charset || Ne.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Vs.default;
  if (typeof e.format < "u") {
    if (!OS.call(Vs.formatters, e.format)) throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var i = Vs.formatters[n], s = Ne.filter;
  (typeof e.filter == "function" || ir(e.filter)) && (s = e.filter);
  var o;
  if (e.arrayFormat in B_ ? o = e.arrayFormat : "indices" in e ? o = e.indices ? "indices" : "repeat" : o = Ne.arrayFormat, "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var a = typeof e.allowDots > "u" ? e.encodeDotInKeys === true ? true : Ne.allowDots : !!e.allowDots;
  return { addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Ne.addQueryPrefix, allowDots: a, allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : Ne.allowEmptyArrays, arrayFormat: o, charset: t, charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ne.charsetSentinel, commaRoundTrip: !!e.commaRoundTrip, delimiter: typeof e.delimiter > "u" ? Ne.delimiter : e.delimiter, encode: typeof e.encode == "boolean" ? e.encode : Ne.encode, encodeDotInKeys: typeof e.encodeDotInKeys == "boolean" ? e.encodeDotInKeys : Ne.encodeDotInKeys, encoder: typeof e.encoder == "function" ? e.encoder : Ne.encoder, encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Ne.encodeValuesOnly, filter: s, format: n, formatter: i, serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Ne.serializeDate, skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Ne.skipNulls, sort: typeof e.sort == "function" ? e.sort : null, strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ne.strictNullHandling };
}, $S = function(r5, e) {
  var t = r5, n = HS(e), i, s;
  typeof n.filter == "function" ? (s = n.filter, t = s("", t)) : ir(n.filter) && (s = n.filter, i = s);
  var o = [];
  if (typeof t != "object" || t === null) return "";
  var a = B_[n.arrayFormat], l = a === "comma" && n.commaRoundTrip;
  i || (i = Object.keys(t)), n.sort && i.sort(n.sort);
  for (var u = N_(), h = 0; h < i.length; ++h) {
    var c = i[h], d = t[c];
    n.skipNulls && d === null || O_(o, zS(d, c, a, l, n.allowEmptyArrays, n.strictNullHandling, n.skipNulls, n.encodeDotInKeys, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.format, n.formatter, n.encodeValuesOnly, n.charset, u));
  }
  var f = o.join(n.delimiter), p = n.addQueryPrefix === true ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), f.length > 0 ? p + f : "";
}, Vn = F_, Lc = Object.prototype.hasOwnProperty, Bm = Array.isArray, Ie = { allowDots: false, allowEmptyArrays: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decodeDotInKeys: false, decoder: Vn.decode, delimiter: "&", depth: 5, duplicates: "combine", ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictDepth: false, strictNullHandling: false, throwOnLimitExceeded: false }, jS = function(r5) {
  return r5.replace(/&#(\d+);/g, function(e, t) {
    return String.fromCharCode(parseInt(t, 10));
  });
}, L_ = function(r5, e, t) {
  if (r5 && typeof r5 == "string" && e.comma && r5.indexOf(",") > -1) return r5.split(",");
  if (e.throwOnLimitExceeded && t >= e.arrayLimit) throw new RangeError("Array limit exceeded. Only " + e.arrayLimit + " element" + (e.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  return r5;
}, VS = "utf8=%26%2310003%3B", WS = "utf8=%E2%9C%93", XS = function(e, t) {
  var n = { __proto__: null }, i = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
  i = i.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var s = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, o = i.split(t.delimiter, t.throwOnLimitExceeded ? s + 1 : s);
  if (t.throwOnLimitExceeded && o.length > s) throw new RangeError("Parameter limit exceeded. Only " + s + " parameter" + (s === 1 ? "" : "s") + " allowed.");
  var a = -1, l, u = t.charset;
  if (t.charsetSentinel) for (l = 0; l < o.length; ++l) o[l].indexOf("utf8=") === 0 && (o[l] === WS ? u = "utf-8" : o[l] === VS && (u = "iso-8859-1"), a = l, l = o.length);
  for (l = 0; l < o.length; ++l) if (l !== a) {
    var h = o[l], c = h.indexOf("]="), d = c === -1 ? h.indexOf("=") : c + 1, f, p;
    d === -1 ? (f = t.decoder(h, Ie.decoder, u, "key"), p = t.strictNullHandling ? null : "") : (f = t.decoder(h.slice(0, d), Ie.decoder, u, "key"), p = Vn.maybeMap(L_(h.slice(d + 1), t, Bm(n[f]) ? n[f].length : 0), function(_) {
      return t.decoder(_, Ie.decoder, u, "value");
    })), p && t.interpretNumericEntities && u === "iso-8859-1" && (p = jS(String(p))), h.indexOf("[]=") > -1 && (p = Bm(p) ? [p] : p);
    var v = Lc.call(n, f);
    v && t.duplicates === "combine" ? n[f] = Vn.combine(n[f], p) : (!v || t.duplicates === "last") && (n[f] = p);
  }
  return n;
}, YS = function(r5, e, t, n) {
  var i = 0;
  if (r5.length > 0 && r5[r5.length - 1] === "[]") {
    var s = r5.slice(0, -1).join("");
    i = Array.isArray(e) && e[s] ? e[s].length : 0;
  }
  for (var o = n ? e : L_(e, t, i), a = r5.length - 1; a >= 0; --a) {
    var l, u = r5[a];
    if (u === "[]" && t.parseArrays) l = t.allowEmptyArrays && (o === "" || t.strictNullHandling && o === null) ? [] : Vn.combine([], o);
    else {
      l = t.plainObjects ? { __proto__: null } : {};
      var h = u.charAt(0) === "[" && u.charAt(u.length - 1) === "]" ? u.slice(1, -1) : u, c = t.decodeDotInKeys ? h.replace(/%2E/g, ".") : h, d = parseInt(c, 10);
      !t.parseArrays && c === "" ? l = { 0: o } : !isNaN(d) && u !== c && String(d) === c && d >= 0 && t.parseArrays && d <= t.arrayLimit ? (l = [], l[d] = o) : c !== "__proto__" && (l[c] = o);
    }
    o = l;
  }
  return o;
}, KS = function(e, t, n, i) {
  if (e) {
    var s = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, l = n.depth > 0 && o.exec(s), u = l ? s.slice(0, l.index) : s, h = [];
    if (u) {
      if (!n.plainObjects && Lc.call(Object.prototype, u) && !n.allowPrototypes) return;
      h.push(u);
    }
    for (var c = 0; n.depth > 0 && (l = a.exec(s)) !== null && c < n.depth; ) {
      if (c += 1, !n.plainObjects && Lc.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes) return;
      h.push(l[1]);
    }
    if (l) {
      if (n.strictDepth === true) throw new RangeError("Input depth exceeded depth option of " + n.depth + " and strictDepth is true");
      h.push("[" + s.slice(l.index) + "]");
    }
    return YS(h, t, n, i);
  }
}, qS = function(e) {
  if (!e) return Ie;
  if (typeof e.allowEmptyArrays < "u" && typeof e.allowEmptyArrays != "boolean") throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  if (typeof e.decodeDotInKeys < "u" && typeof e.decodeDotInKeys != "boolean") throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  if (e.decoder !== null && typeof e.decoder < "u" && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  if (typeof e.throwOnLimitExceeded < "u" && typeof e.throwOnLimitExceeded != "boolean") throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
  var t = typeof e.charset > "u" ? Ie.charset : e.charset, n = typeof e.duplicates > "u" ? Ie.duplicates : e.duplicates;
  if (n !== "combine" && n !== "first" && n !== "last") throw new TypeError("The duplicates option must be either combine, first, or last");
  var i = typeof e.allowDots > "u" ? e.decodeDotInKeys === true ? true : Ie.allowDots : !!e.allowDots;
  return { allowDots: i, allowEmptyArrays: typeof e.allowEmptyArrays == "boolean" ? !!e.allowEmptyArrays : Ie.allowEmptyArrays, allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Ie.allowPrototypes, allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Ie.allowSparse, arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Ie.arrayLimit, charset: t, charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ie.charsetSentinel, comma: typeof e.comma == "boolean" ? e.comma : Ie.comma, decodeDotInKeys: typeof e.decodeDotInKeys == "boolean" ? e.decodeDotInKeys : Ie.decodeDotInKeys, decoder: typeof e.decoder == "function" ? e.decoder : Ie.decoder, delimiter: typeof e.delimiter == "string" || Vn.isRegExp(e.delimiter) ? e.delimiter : Ie.delimiter, depth: typeof e.depth == "number" || e.depth === false ? +e.depth : Ie.depth, duplicates: n, ignoreQueryPrefix: e.ignoreQueryPrefix === true, interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Ie.interpretNumericEntities, parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Ie.parameterLimit, parseArrays: e.parseArrays !== false, plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Ie.plainObjects, strictDepth: typeof e.strictDepth == "boolean" ? !!e.strictDepth : Ie.strictDepth, strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ie.strictNullHandling, throwOnLimitExceeded: typeof e.throwOnLimitExceeded == "boolean" ? e.throwOnLimitExceeded : false };
}, ZS = function(r5, e) {
  var t = qS(e);
  if (r5 === "" || r5 === null || typeof r5 > "u") return t.plainObjects ? { __proto__: null } : {};
  for (var n = typeof r5 == "string" ? XS(r5, t) : r5, i = t.plainObjects ? { __proto__: null } : {}, s = Object.keys(n), o = 0; o < s.length; ++o) {
    var a = s[o], l = KS(a, n[a], t, typeof r5 == "string");
    i = Vn.merge(i, l, t);
  }
  return t.allowSparse === true ? i : Vn.compact(i);
}, QS = $S, JS = ZS, eb = Nf, tb = { formats: eb, parse: JS, stringify: QS }, rb = rE;
function Cr() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
var nb = /^([a-z0-9.+-]+:)/i, ib = /:[0-9]*$/, sb = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/, ob = ["<", ">", '"', "`", " ", "\r", `
`, "	"], ab = ["{", "}", "|", "\\", "^", "`"].concat(ob), Uc = ["'"].concat(ab), Om = ["%", "/", "?", ";", "#"].concat(Uc), Lm = ["/", "?", "#"], lb = 255, Um = /^[+a-z0-9A-Z_-]{0,63}$/, ub = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, hb = { javascript: true, "javascript:": true }, Gc = { javascript: true, "javascript:": true }, Ni = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true }, zc = tb;
function cb(r5, e, t) {
  if (r5 && typeof r5 == "object" && r5 instanceof Cr) return r5;
  var n = new Cr();
  return n.parse(r5, e, t), n;
}
Cr.prototype.parse = function(r5, e, t) {
  if (typeof r5 != "string") throw new TypeError("Parameter 'url' must be a string, not " + typeof r5);
  var n = r5.indexOf("?"), i = n !== -1 && n < r5.indexOf("#") ? "?" : "#", s = r5.split(i), o = /\\/g;
  s[0] = s[0].replace(o, "/"), r5 = s.join(i);
  var a = r5;
  if (a = a.trim(), !t && r5.split("#").length === 1) {
    var l = sb.exec(a);
    if (l) return this.path = a, this.href = a, this.pathname = l[1], l[2] ? (this.search = l[2], e ? this.query = zc.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
  }
  var u = nb.exec(a);
  if (u) {
    u = u[0];
    var h = u.toLowerCase();
    this.protocol = h, a = a.substr(u.length);
  }
  if (t || u || a.match(/^\/\/[^@/]+@[^@/]+/)) {
    var c = a.substr(0, 2) === "//";
    c && !(u && Gc[u]) && (a = a.substr(2), this.slashes = true);
  }
  if (!Gc[u] && (c || u && !Ni[u])) {
    for (var d = -1, f = 0; f < Lm.length; f++) {
      var p = a.indexOf(Lm[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    var v, _;
    d === -1 ? _ = a.lastIndexOf("@") : _ = a.lastIndexOf("@", d), _ !== -1 && (v = a.slice(0, _), a = a.slice(_ + 1), this.auth = decodeURIComponent(v)), d = -1;
    for (var f = 0; f < Om.length; f++) {
      var p = a.indexOf(Om[f]);
      p !== -1 && (d === -1 || p < d) && (d = p);
    }
    d === -1 && (d = a.length), this.host = a.slice(0, d), a = a.slice(d), this.parseHost(), this.hostname = this.hostname || "";
    var g = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!g) for (var y = this.hostname.split(/\./), f = 0, m = y.length; f < m; f++) {
      var x = y[f];
      if (x && !x.match(Um)) {
        for (var w = "", S = 0, T = x.length; S < T; S++) x.charCodeAt(S) > 127 ? w += "x" : w += x[S];
        if (!w.match(Um)) {
          var E = y.slice(0, f), I = y.slice(f + 1), P = x.match(ub);
          P && (E.push(P[1]), I.unshift(P[2])), I.length && (a = "/" + I.join(".") + a), this.hostname = E.join(".");
          break;
        }
      }
    }
    this.hostname.length > lb ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), g || (this.hostname = rb.toASCII(this.hostname));
    var D = this.port ? ":" + this.port : "", N = this.hostname || "";
    this.host = N + D, this.href += this.host, g && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a));
  }
  if (!hb[h]) for (var f = 0, m = Uc.length; f < m; f++) {
    var A = Uc[f];
    if (a.indexOf(A) !== -1) {
      var C = encodeURIComponent(A);
      C === A && (C = escape(A)), a = a.split(A).join(C);
    }
  }
  var q = a.indexOf("#");
  q !== -1 && (this.hash = a.substr(q), a = a.slice(0, q));
  var J = a.indexOf("?");
  if (J !== -1 ? (this.search = a.substr(J), this.query = a.substr(J + 1), e && (this.query = zc.parse(this.query)), a = a.slice(0, J)) : e && (this.search = "", this.query = {}), a && (this.pathname = a), Ni[h] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    var D = this.pathname || "", O = this.search || "";
    this.path = D + O;
  }
  return this.href = this.format(), this;
};
Cr.prototype.format = function() {
  var r5 = this.auth || "";
  r5 && (r5 = encodeURIComponent(r5), r5 = r5.replace(/%3A/i, ":"), r5 += "@");
  var e = this.protocol || "", t = this.pathname || "", n = this.hash || "", i = false, s = "";
  this.host ? i = r5 + this.host : this.hostname && (i = r5 + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && typeof this.query == "object" && Object.keys(this.query).length && (s = zc.stringify(this.query, { arrayFormat: "repeat", addQueryPrefix: false }));
  var o = this.search || s && "?" + s || "";
  return e && e.substr(-1) !== ":" && (e += ":"), this.slashes || (!e || Ni[e]) && i !== false ? (i = "//" + (i || ""), t && t.charAt(0) !== "/" && (t = "/" + t)) : i || (i = ""), n && n.charAt(0) !== "#" && (n = "#" + n), o && o.charAt(0) !== "?" && (o = "?" + o), t = t.replace(/[?#]/g, function(a) {
    return encodeURIComponent(a);
  }), o = o.replace("#", "%23"), e + i + t + o + n;
};
Cr.prototype.resolve = function(r5) {
  return this.resolveObject(cb(r5, false, true)).format();
};
Cr.prototype.resolveObject = function(r5) {
  if (typeof r5 == "string") {
    var e = new Cr();
    e.parse(r5, false, true), r5 = e;
  }
  for (var t = new Cr(), n = Object.keys(this), i = 0; i < n.length; i++) {
    var s = n[i];
    t[s] = this[s];
  }
  if (t.hash = r5.hash, r5.href === "") return t.href = t.format(), t;
  if (r5.slashes && !r5.protocol) {
    for (var o = Object.keys(r5), a = 0; a < o.length; a++) {
      var l = o[a];
      l !== "protocol" && (t[l] = r5[l]);
    }
    return Ni[t.protocol] && t.hostname && !t.pathname && (t.pathname = "/", t.path = t.pathname), t.href = t.format(), t;
  }
  if (r5.protocol && r5.protocol !== t.protocol) {
    if (!Ni[r5.protocol]) {
      for (var u = Object.keys(r5), h = 0; h < u.length; h++) {
        var c = u[h];
        t[c] = r5[c];
      }
      return t.href = t.format(), t;
    }
    if (t.protocol = r5.protocol, !r5.host && !Gc[r5.protocol]) {
      for (var m = (r5.pathname || "").split("/"); m.length && !(r5.host = m.shift()); ) ;
      r5.host || (r5.host = ""), r5.hostname || (r5.hostname = ""), m[0] !== "" && m.unshift(""), m.length < 2 && m.unshift(""), t.pathname = m.join("/");
    } else t.pathname = r5.pathname;
    if (t.search = r5.search, t.query = r5.query, t.host = r5.host || "", t.auth = r5.auth, t.hostname = r5.hostname || r5.host, t.port = r5.port, t.pathname || t.search) {
      var d = t.pathname || "", f = t.search || "";
      t.path = d + f;
    }
    return t.slashes = t.slashes || r5.slashes, t.href = t.format(), t;
  }
  var p = t.pathname && t.pathname.charAt(0) === "/", v = r5.host || r5.pathname && r5.pathname.charAt(0) === "/", _ = v || p || t.host && r5.pathname, g = _, y = t.pathname && t.pathname.split("/") || [], m = r5.pathname && r5.pathname.split("/") || [], x = t.protocol && !Ni[t.protocol];
  if (x && (t.hostname = "", t.port = null, t.host && (y[0] === "" ? y[0] = t.host : y.unshift(t.host)), t.host = "", r5.protocol && (r5.hostname = null, r5.port = null, r5.host && (m[0] === "" ? m[0] = r5.host : m.unshift(r5.host)), r5.host = null), _ = _ && (m[0] === "" || y[0] === "")), v) t.host = r5.host || r5.host === "" ? r5.host : t.host, t.hostname = r5.hostname || r5.hostname === "" ? r5.hostname : t.hostname, t.search = r5.search, t.query = r5.query, y = m;
  else if (m.length) y || (y = []), y.pop(), y = y.concat(m), t.search = r5.search, t.query = r5.query;
  else if (r5.search != null) {
    if (x) {
      t.host = y.shift(), t.hostname = t.host;
      var w = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : false;
      w && (t.auth = w.shift(), t.hostname = w.shift(), t.host = t.hostname);
    }
    return t.search = r5.search, t.query = r5.query, (t.pathname !== null || t.search !== null) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.href = t.format(), t;
  }
  if (!y.length) return t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null, t.href = t.format(), t;
  for (var S = y.slice(-1)[0], T = (t.host || r5.host || y.length > 1) && (S === "." || S === "..") || S === "", E = 0, I = y.length; I >= 0; I--) S = y[I], S === "." ? y.splice(I, 1) : S === ".." ? (y.splice(I, 1), E++) : E && (y.splice(I, 1), E--);
  if (!_ && !g) for (; E--; E) y.unshift("..");
  _ && y[0] !== "" && (!y[0] || y[0].charAt(0) !== "/") && y.unshift(""), T && y.join("/").substr(-1) !== "/" && y.push("");
  var P = y[0] === "" || y[0] && y[0].charAt(0) === "/";
  if (x) {
    t.hostname = P ? "" : y.length ? y.shift() : "", t.host = t.hostname;
    var w = t.host && t.host.indexOf("@") > 0 ? t.host.split("@") : false;
    w && (t.auth = w.shift(), t.hostname = w.shift(), t.host = t.hostname);
  }
  return _ = _ || t.host && y.length, _ && !P && y.unshift(""), y.length > 0 ? t.pathname = y.join("/") : (t.pathname = null, t.path = null), (t.pathname !== null || t.search !== null) && (t.path = (t.pathname ? t.pathname : "") + (t.search ? t.search : "")), t.auth = r5.auth || t.auth, t.slashes = t.slashes || r5.slashes, t.href = t.format(), t;
};
Cr.prototype.parseHost = function() {
  var r5 = this.host, e = ib.exec(r5);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), r5 = r5.substr(0, r5.length - e.length)), r5 && (this.hostname = r5);
};
const Gm = {};
function ie(r5, e, t = 3) {
  if (Gm[e]) return;
  let n = new Error().stack;
  typeof n > "u" ? console.warn("PixiJS Deprecation Warning: ", `${e}
Deprecated since v${r5}`) : (n = n.split(`
`).splice(t).join(`
`), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${e}
Deprecated since v${r5}`), console.warn(n), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${e}
Deprecated since v${r5}`), console.warn(n))), Gm[e] = true;
}
function kt(r5) {
  if (typeof r5 != "string") throw new TypeError(`Path must be a string. Received ${JSON.stringify(r5)}`);
}
function ps(r5) {
  return r5.split("?")[0].split("#")[0];
}
function db(r5) {
  return r5.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function fb(r5, e, t) {
  return r5.replace(new RegExp(db(e), "g"), t);
}
function pb(r5, e) {
  let t = "", n = 0, i = -1, s = 0, o = -1;
  for (let a = 0; a <= r5.length; ++a) {
    if (a < r5.length) o = r5.charCodeAt(a);
    else {
      if (o === 47) break;
      o = 47;
    }
    if (o === 47) {
      if (!(i === a - 1 || s === 1)) if (i !== a - 1 && s === 2) {
        if (t.length < 2 || n !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
          if (t.length > 2) {
            const l = t.lastIndexOf("/");
            if (l !== t.length - 1) {
              l === -1 ? (t = "", n = 0) : (t = t.slice(0, l), n = t.length - 1 - t.lastIndexOf("/")), i = a, s = 0;
              continue;
            }
          } else if (t.length === 2 || t.length === 1) {
            t = "", n = 0, i = a, s = 0;
            continue;
          }
        }
      } else t.length > 0 ? t += `/${r5.slice(i + 1, a)}` : t = r5.slice(i + 1, a), n = a - i - 1;
      i = a, s = 0;
    } else o === 46 && s !== -1 ? ++s : s = -1;
  }
  return t;
}
const je = { toPosix(r5) {
  return fb(r5, "\\", "/");
}, isUrl(r5) {
  return /^https?:/.test(this.toPosix(r5));
}, isDataUrl(r5) {
  return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(r5);
}, isBlobUrl(r5) {
  return r5.startsWith("blob:");
}, hasProtocol(r5) {
  return /^[^/:]+:/.test(this.toPosix(r5));
}, getProtocol(r5) {
  kt(r5), r5 = this.toPosix(r5);
  const e = /^file:\/\/\//.exec(r5);
  if (e) return e[0];
  const t = /^[^/:]+:\/{0,2}/.exec(r5);
  return t ? t[0] : "";
}, toAbsolute(r5, e, t) {
  if (kt(r5), this.isDataUrl(r5) || this.isBlobUrl(r5)) return r5;
  const n = ps(this.toPosix(e ?? z.ADAPTER.getBaseUrl())), i = ps(this.toPosix(t ?? this.rootname(n)));
  return r5 = this.toPosix(r5), r5.startsWith("/") ? je.join(i, r5.slice(1)) : this.isAbsolute(r5) ? r5 : this.join(n, r5);
}, normalize(r5) {
  if (kt(r5), r5.length === 0) return ".";
  if (this.isDataUrl(r5) || this.isBlobUrl(r5)) return r5;
  r5 = this.toPosix(r5);
  let e = "";
  const t = r5.startsWith("/");
  this.hasProtocol(r5) && (e = this.rootname(r5), r5 = r5.slice(e.length));
  const n = r5.endsWith("/");
  return r5 = pb(r5), r5.length > 0 && n && (r5 += "/"), t ? `/${r5}` : e + r5;
}, isAbsolute(r5) {
  return kt(r5), r5 = this.toPosix(r5), this.hasProtocol(r5) ? true : r5.startsWith("/");
}, join(...r5) {
  if (r5.length === 0) return ".";
  let e;
  for (let t = 0; t < r5.length; ++t) {
    const n = r5[t];
    if (kt(n), n.length > 0) if (e === void 0) e = n;
    else {
      const i = r5[t - 1] ?? "";
      this.joinExtensions.includes(this.extname(i).toLowerCase()) ? e += `/../${n}` : e += `/${n}`;
    }
  }
  return e === void 0 ? "." : this.normalize(e);
}, dirname(r5) {
  if (kt(r5), r5.length === 0) return ".";
  r5 = this.toPosix(r5);
  let e = r5.charCodeAt(0);
  const t = e === 47;
  let n = -1, i = true;
  const s = this.getProtocol(r5), o = r5;
  r5 = r5.slice(s.length);
  for (let a = r5.length - 1; a >= 1; --a) if (e = r5.charCodeAt(a), e === 47) {
    if (!i) {
      n = a;
      break;
    }
  } else i = false;
  return n === -1 ? t ? "/" : this.isUrl(o) ? s + r5 : s : t && n === 1 ? "//" : s + r5.slice(0, n);
}, rootname(r5) {
  kt(r5), r5 = this.toPosix(r5);
  let e = "";
  if (r5.startsWith("/") ? e = "/" : e = this.getProtocol(r5), this.isUrl(r5)) {
    const t = r5.indexOf("/", e.length);
    t !== -1 ? e = r5.slice(0, t) : e = r5, e.endsWith("/") || (e += "/");
  }
  return e;
}, basename(r5, e) {
  kt(r5), e && kt(e), r5 = ps(this.toPosix(r5));
  let t = 0, n = -1, i = true, s;
  if (e !== void 0 && e.length > 0 && e.length <= r5.length) {
    if (e.length === r5.length && e === r5) return "";
    let o = e.length - 1, a = -1;
    for (s = r5.length - 1; s >= 0; --s) {
      const l = r5.charCodeAt(s);
      if (l === 47) {
        if (!i) {
          t = s + 1;
          break;
        }
      } else a === -1 && (i = false, a = s + 1), o >= 0 && (l === e.charCodeAt(o) ? --o === -1 && (n = s) : (o = -1, n = a));
    }
    return t === n ? n = a : n === -1 && (n = r5.length), r5.slice(t, n);
  }
  for (s = r5.length - 1; s >= 0; --s) if (r5.charCodeAt(s) === 47) {
    if (!i) {
      t = s + 1;
      break;
    }
  } else n === -1 && (i = false, n = s + 1);
  return n === -1 ? "" : r5.slice(t, n);
}, extname(r5) {
  kt(r5), r5 = ps(this.toPosix(r5));
  let e = -1, t = 0, n = -1, i = true, s = 0;
  for (let o = r5.length - 1; o >= 0; --o) {
    const a = r5.charCodeAt(o);
    if (a === 47) {
      if (!i) {
        t = o + 1;
        break;
      }
      continue;
    }
    n === -1 && (i = false, n = o + 1), a === 46 ? e === -1 ? e = o : s !== 1 && (s = 1) : e !== -1 && (s = -1);
  }
  return e === -1 || n === -1 || s === 0 || s === 1 && e === n - 1 && e === t + 1 ? "" : r5.slice(e, n);
}, parse(r5) {
  kt(r5);
  const e = { root: "", dir: "", base: "", ext: "", name: "" };
  if (r5.length === 0) return e;
  r5 = ps(this.toPosix(r5));
  let t = r5.charCodeAt(0);
  const n = this.isAbsolute(r5);
  let i;
  e.root = this.rootname(r5), n || this.hasProtocol(r5) ? i = 1 : i = 0;
  let s = -1, o = 0, a = -1, l = true, u = r5.length - 1, h = 0;
  for (; u >= i; --u) {
    if (t = r5.charCodeAt(u), t === 47) {
      if (!l) {
        o = u + 1;
        break;
      }
      continue;
    }
    a === -1 && (l = false, a = u + 1), t === 46 ? s === -1 ? s = u : h !== 1 && (h = 1) : s !== -1 && (h = -1);
  }
  return s === -1 || a === -1 || h === 0 || h === 1 && s === a - 1 && s === o + 1 ? a !== -1 && (o === 0 && n ? e.base = e.name = r5.slice(1, a) : e.base = e.name = r5.slice(o, a)) : (o === 0 && n ? (e.name = r5.slice(1, s), e.base = r5.slice(1, a)) : (e.name = r5.slice(o, s), e.base = r5.slice(o, a)), e.ext = r5.slice(s, a)), e.dir = this.dirname(r5), e;
}, sep: "/", delimiter: ":", joinExtensions: [".html"] };
let lh;
async function mb() {
  return lh ?? (lh = (async () => {
    var _a2;
    const r5 = document.createElement("canvas").getContext("webgl");
    if (!r5) return ht.UNPACK;
    const e = await new Promise((s) => {
      const o = document.createElement("video");
      o.onloadeddata = () => s(o), o.onerror = () => s(null), o.autoplay = false, o.crossOrigin = "anonymous", o.preload = "auto", o.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", o.load();
    });
    if (!e) return ht.UNPACK;
    const t = r5.createTexture();
    r5.bindTexture(r5.TEXTURE_2D, t);
    const n = r5.createFramebuffer();
    r5.bindFramebuffer(r5.FRAMEBUFFER, n), r5.framebufferTexture2D(r5.FRAMEBUFFER, r5.COLOR_ATTACHMENT0, r5.TEXTURE_2D, t, 0), r5.pixelStorei(r5.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false), r5.pixelStorei(r5.UNPACK_COLORSPACE_CONVERSION_WEBGL, r5.NONE), r5.texImage2D(r5.TEXTURE_2D, 0, r5.RGBA, r5.RGBA, r5.UNSIGNED_BYTE, e);
    const i = new Uint8Array(4);
    return r5.readPixels(0, 0, 1, 1, r5.RGBA, r5.UNSIGNED_BYTE, i), r5.deleteFramebuffer(n), r5.deleteTexture(t), (_a2 = r5.getExtension("WEBGL_lose_context")) == null ? void 0 : _a2.loseContext(), i[0] <= i[3] ? ht.PMA : ht.UNPACK;
  })()), lh;
}
let uh;
function gb() {
  return typeof uh > "u" && (uh = function() {
    var _a2;
    const r5 = { stencil: true, failIfMajorPerformanceCaveat: z.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT };
    try {
      if (!z.ADAPTER.getWebGLRenderingContext()) return false;
      const e = z.ADAPTER.createCanvas();
      let t = e.getContext("webgl", r5) || e.getContext("experimental-webgl", r5);
      const n = !!((_a2 = t == null ? void 0 : t.getContextAttributes()) == null ? void 0 : _a2.stencil);
      if (t) {
        const i = t.getExtension("WEBGL_lose_context");
        i && i.loseContext();
      }
      return t = null, n;
    } catch {
      return false;
    }
  }()), uh;
}
var yb = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, gr = function(r5) {
  return typeof r5 == "string" ? r5.length > 0 : typeof r5 == "number";
}, ze = function(r5, e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = Math.pow(10, e)), Math.round(t * r5) / t + 0;
}, Ct = function(r5, e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = 1), r5 > t ? t : r5 > e ? r5 : e;
}, U_ = function(r5) {
  return (r5 = isFinite(r5) ? r5 % 360 : 0) > 0 ? r5 : r5 + 360;
}, zm = function(r5) {
  return { r: Ct(r5.r, 0, 255), g: Ct(r5.g, 0, 255), b: Ct(r5.b, 0, 255), a: Ct(r5.a) };
}, hh = function(r5) {
  return { r: ze(r5.r), g: ze(r5.g), b: ze(r5.b), a: ze(r5.a, 3) };
}, vb = /^#([0-9a-f]{3,8})$/i, ta = function(r5) {
  var e = r5.toString(16);
  return e.length < 2 ? "0" + e : e;
}, G_ = function(r5) {
  var e = r5.r, t = r5.g, n = r5.b, i = r5.a, s = Math.max(e, t, n), o = s - Math.min(e, t, n), a = o ? s === e ? (t - n) / o : s === t ? 2 + (n - e) / o : 4 + (e - t) / o : 0;
  return { h: 60 * (a < 0 ? a + 6 : a), s: s ? o / s * 100 : 0, v: s / 255 * 100, a: i };
}, z_ = function(r5) {
  var e = r5.h, t = r5.s, n = r5.v, i = r5.a;
  e = e / 360 * 6, t /= 100, n /= 100;
  var s = Math.floor(e), o = n * (1 - t), a = n * (1 - (e - s) * t), l = n * (1 - (1 - e + s) * t), u = s % 6;
  return { r: 255 * [n, a, o, o, l, n][u], g: 255 * [l, n, n, a, o, o][u], b: 255 * [o, o, l, n, n, a][u], a: i };
}, Hm = function(r5) {
  return { h: U_(r5.h), s: Ct(r5.s, 0, 100), l: Ct(r5.l, 0, 100), a: Ct(r5.a) };
}, $m = function(r5) {
  return { h: ze(r5.h), s: ze(r5.s), l: ze(r5.l), a: ze(r5.a, 3) };
}, jm = function(r5) {
  return z_((t = (e = r5).s, { h: e.h, s: (t *= ((n = e.l) < 50 ? n : 100 - n) / 100) > 0 ? 2 * t / (n + t) * 100 : 0, v: n + t, a: e.a }));
  var e, t, n;
}, Ws = function(r5) {
  return { h: (e = G_(r5)).h, s: (i = (200 - (t = e.s)) * (n = e.v) / 100) > 0 && i < 200 ? t * n / 100 / (i <= 100 ? i : 200 - i) * 100 : 0, l: i / 2, a: e.a };
  var e, t, n, i;
}, _b = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, xb = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, wb = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Eb = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, Hc = { string: [[function(r5) {
  var e = vb.exec(r5);
  return e ? (r5 = e[1]).length <= 4 ? { r: parseInt(r5[0] + r5[0], 16), g: parseInt(r5[1] + r5[1], 16), b: parseInt(r5[2] + r5[2], 16), a: r5.length === 4 ? ze(parseInt(r5[3] + r5[3], 16) / 255, 2) : 1 } : r5.length === 6 || r5.length === 8 ? { r: parseInt(r5.substr(0, 2), 16), g: parseInt(r5.substr(2, 2), 16), b: parseInt(r5.substr(4, 2), 16), a: r5.length === 8 ? ze(parseInt(r5.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r5) {
  var e = wb.exec(r5) || Eb.exec(r5);
  return e ? e[2] !== e[4] || e[4] !== e[6] ? null : zm({ r: Number(e[1]) / (e[2] ? 100 / 255 : 1), g: Number(e[3]) / (e[4] ? 100 / 255 : 1), b: Number(e[5]) / (e[6] ? 100 / 255 : 1), a: e[7] === void 0 ? 1 : Number(e[7]) / (e[8] ? 100 : 1) }) : null;
}, "rgb"], [function(r5) {
  var e = _b.exec(r5) || xb.exec(r5);
  if (!e) return null;
  var t, n, i = Hm({ h: (t = e[1], n = e[2], n === void 0 && (n = "deg"), Number(t) * (yb[n] || 1)), s: Number(e[3]), l: Number(e[4]), a: e[5] === void 0 ? 1 : Number(e[5]) / (e[6] ? 100 : 1) });
  return jm(i);
}, "hsl"]], object: [[function(r5) {
  var e = r5.r, t = r5.g, n = r5.b, i = r5.a, s = i === void 0 ? 1 : i;
  return gr(e) && gr(t) && gr(n) ? zm({ r: Number(e), g: Number(t), b: Number(n), a: Number(s) }) : null;
}, "rgb"], [function(r5) {
  var e = r5.h, t = r5.s, n = r5.l, i = r5.a, s = i === void 0 ? 1 : i;
  if (!gr(e) || !gr(t) || !gr(n)) return null;
  var o = Hm({ h: Number(e), s: Number(t), l: Number(n), a: Number(s) });
  return jm(o);
}, "hsl"], [function(r5) {
  var e = r5.h, t = r5.s, n = r5.v, i = r5.a, s = i === void 0 ? 1 : i;
  if (!gr(e) || !gr(t) || !gr(n)) return null;
  var o = function(a) {
    return { h: U_(a.h), s: Ct(a.s, 0, 100), v: Ct(a.v, 0, 100), a: Ct(a.a) };
  }({ h: Number(e), s: Number(t), v: Number(n), a: Number(s) });
  return z_(o);
}, "hsv"]] }, Vm = function(r5, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t][0](r5);
    if (n) return [n, e[t][1]];
  }
  return [null, void 0];
}, Tb = function(r5) {
  return typeof r5 == "string" ? Vm(r5.trim(), Hc.string) : typeof r5 == "object" && r5 !== null ? Vm(r5, Hc.object) : [null, void 0];
}, ch = function(r5, e) {
  var t = Ws(r5);
  return { h: t.h, s: Ct(t.s + 100 * e, 0, 100), l: t.l, a: t.a };
}, dh = function(r5) {
  return (299 * r5.r + 587 * r5.g + 114 * r5.b) / 1e3 / 255;
}, Wm = function(r5, e) {
  var t = Ws(r5);
  return { h: t.h, s: t.s, l: Ct(t.l + 100 * e, 0, 100), a: t.a };
}, $c = function() {
  function r5(e) {
    this.parsed = Tb(e)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r5.prototype.isValid = function() {
    return this.parsed !== null;
  }, r5.prototype.brightness = function() {
    return ze(dh(this.rgba), 2);
  }, r5.prototype.isDark = function() {
    return dh(this.rgba) < 0.5;
  }, r5.prototype.isLight = function() {
    return dh(this.rgba) >= 0.5;
  }, r5.prototype.toHex = function() {
    return e = hh(this.rgba), t = e.r, n = e.g, i = e.b, o = (s = e.a) < 1 ? ta(ze(255 * s)) : "", "#" + ta(t) + ta(n) + ta(i) + o;
    var e, t, n, i, s, o;
  }, r5.prototype.toRgb = function() {
    return hh(this.rgba);
  }, r5.prototype.toRgbString = function() {
    return e = hh(this.rgba), t = e.r, n = e.g, i = e.b, (s = e.a) < 1 ? "rgba(" + t + ", " + n + ", " + i + ", " + s + ")" : "rgb(" + t + ", " + n + ", " + i + ")";
    var e, t, n, i, s;
  }, r5.prototype.toHsl = function() {
    return $m(Ws(this.rgba));
  }, r5.prototype.toHslString = function() {
    return e = $m(Ws(this.rgba)), t = e.h, n = e.s, i = e.l, (s = e.a) < 1 ? "hsla(" + t + ", " + n + "%, " + i + "%, " + s + ")" : "hsl(" + t + ", " + n + "%, " + i + "%)";
    var e, t, n, i, s;
  }, r5.prototype.toHsv = function() {
    return e = G_(this.rgba), { h: ze(e.h), s: ze(e.s), v: ze(e.v), a: ze(e.a, 3) };
    var e;
  }, r5.prototype.invert = function() {
    return Qt({ r: 255 - (e = this.rgba).r, g: 255 - e.g, b: 255 - e.b, a: e.a });
    var e;
  }, r5.prototype.saturate = function(e) {
    return e === void 0 && (e = 0.1), Qt(ch(this.rgba, e));
  }, r5.prototype.desaturate = function(e) {
    return e === void 0 && (e = 0.1), Qt(ch(this.rgba, -e));
  }, r5.prototype.grayscale = function() {
    return Qt(ch(this.rgba, -1));
  }, r5.prototype.lighten = function(e) {
    return e === void 0 && (e = 0.1), Qt(Wm(this.rgba, e));
  }, r5.prototype.darken = function(e) {
    return e === void 0 && (e = 0.1), Qt(Wm(this.rgba, -e));
  }, r5.prototype.rotate = function(e) {
    return e === void 0 && (e = 15), this.hue(this.hue() + e);
  }, r5.prototype.alpha = function(e) {
    return typeof e == "number" ? Qt({ r: (t = this.rgba).r, g: t.g, b: t.b, a: e }) : ze(this.rgba.a, 3);
    var t;
  }, r5.prototype.hue = function(e) {
    var t = Ws(this.rgba);
    return typeof e == "number" ? Qt({ h: e, s: t.s, l: t.l, a: t.a }) : ze(t.h);
  }, r5.prototype.isEqual = function(e) {
    return this.toHex() === Qt(e).toHex();
  }, r5;
}(), Qt = function(r5) {
  return r5 instanceof $c ? r5 : new $c(r5);
}, Xm = [], Sb = function(r5) {
  r5.forEach(function(e) {
    Xm.indexOf(e) < 0 && (e($c, Hc), Xm.push(e));
  });
};
function bb(r5, e) {
  var t = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, n = {};
  for (var i in t) n[t[i]] = i;
  var s = {};
  r5.prototype.toName = function(o) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
    var a, l, u = n[this.toHex()];
    if (u) return u;
    if (o == null ? void 0 : o.closest) {
      var h = this.toRgb(), c = 1 / 0, d = "black";
      if (!s.length) for (var f in t) s[f] = new r5(t[f]).toRgb();
      for (var p in t) {
        var v = (a = h, l = s[p], Math.pow(a.r - l.r, 2) + Math.pow(a.g - l.g, 2) + Math.pow(a.b - l.b, 2));
        v < c && (c = v, d = p);
      }
      return d;
    }
  }, e.string.push([function(o) {
    var a = o.toLowerCase(), l = a === "transparent" ? "#0000" : t[a];
    return l ? new r5(l).toRgb() : null;
  }, "name"]);
}
Sb([bb]);
const oi = class Ga {
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
    if (e instanceof Ga) this._value = this.cloneSource(e._value), this._int = e._int, this._components.set(e._components);
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
  isSourceEqual(e, t) {
    const n = typeof e;
    if (n !== typeof t) return false;
    if (n === "number" || n === "string" || e instanceof Number) return e === t;
    if (Array.isArray(e) && Array.isArray(t) || ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return e.length !== t.length ? false : e.every((i, s) => i === t[s]);
    if (e !== null && t !== null) {
      const i = Object.keys(e), s = Object.keys(t);
      return i.length !== s.length ? false : i.every((o) => e[o] === t[o]);
    }
    return e === t;
  }
  toRgba() {
    const [e, t, n, i] = this._components;
    return { r: e, g: t, b: n, a: i };
  }
  toRgb() {
    const [e, t, n] = this._components;
    return { r: e, g: t, b: n };
  }
  toRgbaString() {
    const [e, t, n] = this.toUint8RgbArray();
    return `rgba(${e},${t},${n},${this.alpha})`;
  }
  toUint8RgbArray(e) {
    const [t, n, i] = this._components;
    return e = e ?? [], e[0] = Math.round(t * 255), e[1] = Math.round(n * 255), e[2] = Math.round(i * 255), e;
  }
  toRgbArray(e) {
    e = e ?? [];
    const [t, n, i] = this._components;
    return e[0] = t, e[1] = n, e[2] = i, e;
  }
  toNumber() {
    return this._int;
  }
  toLittleEndianNumber() {
    const e = this._int;
    return (e >> 16) + (e & 65280) + ((e & 255) << 16);
  }
  multiply(e) {
    const [t, n, i, s] = Ga.temp.setValue(e)._components;
    return this._components[0] *= t, this._components[1] *= n, this._components[2] *= i, this._components[3] *= s, this.refreshInt(), this._value = null, this;
  }
  premultiply(e, t = true) {
    return t && (this._components[0] *= e, this._components[1] *= e, this._components[2] *= e), this._components[3] = e, this.refreshInt(), this._value = null, this;
  }
  toPremultiplied(e, t = true) {
    if (e === 1) return (255 << 24) + this._int;
    if (e === 0) return t ? 0 : this._int;
    let n = this._int >> 16 & 255, i = this._int >> 8 & 255, s = this._int & 255;
    return t && (n = n * e + 0.5 | 0, i = i * e + 0.5 | 0, s = s * e + 0.5 | 0), (e * 255 << 24) + (n << 16) + (i << 8) + s;
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
    const [t, n, i] = this._components;
    return this._components[0] = Math.round(t * e) / e, this._components[1] = Math.round(n * e) / e, this._components[2] = Math.round(i * e) / e, this.refreshInt(), this._value = null, this;
  }
  toArray(e) {
    e = e ?? [];
    const [t, n, i, s] = this._components;
    return e[0] = t, e[1] = n, e[2] = i, e[3] = s, e;
  }
  normalize(e) {
    let t, n, i, s;
    if ((typeof e == "number" || e instanceof Number) && e >= 0 && e <= 16777215) {
      const o = e;
      t = (o >> 16 & 255) / 255, n = (o >> 8 & 255) / 255, i = (o & 255) / 255, s = 1;
    } else if ((Array.isArray(e) || e instanceof Float32Array) && e.length >= 3 && e.length <= 4) e = this._clamp(e), [t, n, i, s = 1] = e;
    else if ((e instanceof Uint8Array || e instanceof Uint8ClampedArray) && e.length >= 3 && e.length <= 4) e = this._clamp(e, 0, 255), [t, n, i, s = 255] = e, t /= 255, n /= 255, i /= 255, s /= 255;
    else if (typeof e == "string" || typeof e == "object") {
      if (typeof e == "string") {
        const a = Ga.HEX_PATTERN.exec(e);
        a && (e = `#${a[2]}`);
      }
      const o = Qt(e);
      o.isValid() && ({ r: t, g: n, b: i, a: s } = o.rgba, t /= 255, n /= 255, i /= 255);
    }
    if (t !== void 0) this._components[0] = t, this._components[1] = n, this._components[2] = i, this._components[3] = s, this.refreshInt();
    else throw new Error(`Unable to convert color ${e}`);
  }
  refreshInt() {
    this._clamp(this._components);
    const [e, t, n] = this._components;
    this._int = (e * 255 << 16) + (t * 255 << 8) + (n * 255 | 0);
  }
  _clamp(e, t = 0, n = 1) {
    return typeof e == "number" ? Math.min(Math.max(e, t), n) : (e.forEach((i, s) => {
      e[s] = Math.min(Math.max(i, t), n);
    }), e);
  }
};
oi.shared = new oi(), oi.temp = new oi(), oi.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let me = oi;
function Ab(r5) {
  return ie("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"), me.shared.setValue(r5).toHex();
}
function Cb(r5) {
  return ie("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"), me.shared.setValue(r5).toNumber();
}
function Ib() {
  const r5 = [], e = [];
  for (let n = 0; n < 32; n++) r5[n] = n, e[n] = n;
  r5[Q.NORMAL_NPM] = Q.NORMAL, r5[Q.ADD_NPM] = Q.ADD, r5[Q.SCREEN_NPM] = Q.SCREEN, e[Q.NORMAL] = Q.NORMAL_NPM, e[Q.ADD] = Q.ADD_NPM, e[Q.SCREEN] = Q.SCREEN_NPM;
  const t = [];
  return t.push(e), t.push(r5), t;
}
const H_ = Ib();
function $_(r5, e) {
  return H_[e ? 1 : 0][r5];
}
function Pb(r5, e = null) {
  const t = r5 * 6;
  if (e = e || new Uint16Array(t), e.length !== t) throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${t}`);
  for (let n = 0, i = 0; n < t; n += 6, i += 4) e[n + 0] = i + 0, e[n + 1] = i + 1, e[n + 2] = i + 2, e[n + 3] = i + 0, e[n + 4] = i + 2, e[n + 5] = i + 3;
  return e;
}
function j_(r5) {
  if (r5.BYTES_PER_ELEMENT === 4) return r5 instanceof Float32Array ? "Float32Array" : r5 instanceof Uint32Array ? "Uint32Array" : "Int32Array";
  if (r5.BYTES_PER_ELEMENT === 2) {
    if (r5 instanceof Uint16Array) return "Uint16Array";
  } else if (r5.BYTES_PER_ELEMENT === 1 && r5 instanceof Uint8Array) return "Uint8Array";
  return null;
}
function Sl(r5) {
  return r5 += r5 === 0 ? 1 : 0, --r5, r5 |= r5 >>> 1, r5 |= r5 >>> 2, r5 |= r5 >>> 4, r5 |= r5 >>> 8, r5 |= r5 >>> 16, r5 + 1;
}
function Ym(r5) {
  return !(r5 & r5 - 1) && !!r5;
}
function Km(r5) {
  let e = (r5 > 65535 ? 1 : 0) << 4;
  r5 >>>= e;
  let t = (r5 > 255 ? 1 : 0) << 3;
  return r5 >>>= t, e |= t, t = (r5 > 15 ? 1 : 0) << 2, r5 >>>= t, e |= t, t = (r5 > 3 ? 1 : 0) << 1, r5 >>>= t, e |= t, e | r5 >> 1;
}
function Bi(r5, e, t) {
  const n = r5.length;
  let i;
  if (e >= n || t === 0) return;
  t = e + t > n ? n - e : t;
  const s = n - t;
  for (i = e; i < s; ++i) r5[i] = r5[i + t];
  r5.length = s;
}
function Kr(r5) {
  return r5 === 0 ? 0 : r5 < 0 ? -1 : 1;
}
let Rb = 0;
function Wn() {
  return ++Rb;
}
const jc = class {
  constructor(r5, e, t, n) {
    this.left = r5, this.top = e, this.right = t, this.bottom = n;
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
jc.EMPTY = new jc(0, 0, 0, 0);
let qm = jc;
const Zm = {}, Jt = /* @__PURE__ */ Object.create(null), Or = /* @__PURE__ */ Object.create(null);
class Mb {
  constructor(e, t, n) {
    this._canvas = z.ADAPTER.createCanvas(), this._context = this._canvas.getContext("2d"), this.resolution = n || z.RESOLUTION, this.resize(e, t);
  }
  clear() {
    this._checkDestroyed(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }
  resize(e, t) {
    this._checkDestroyed(), this._canvas.width = Math.round(e * this.resolution), this._canvas.height = Math.round(t * this.resolution);
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
function Qm(r5, e, t) {
  for (let n = 0, i = 4 * t * e; n < e; ++n, i += 4) if (r5[i + 3] !== 0) return false;
  return true;
}
function Jm(r5, e, t, n, i) {
  const s = 4 * e;
  for (let o = n, a = n * s + 4 * t; o <= i; ++o, a += s) if (r5[a + 3] !== 0) return false;
  return true;
}
function kb(r5) {
  const { width: e, height: t } = r5, n = r5.getContext("2d", { willReadFrequently: true });
  if (n === null) throw new TypeError("Failed to get canvas 2D context");
  const i = n.getImageData(0, 0, e, t).data;
  let s = 0, o = 0, a = e - 1, l = t - 1;
  for (; o < t && Qm(i, e, o); ) ++o;
  if (o === t) return qm.EMPTY;
  for (; Qm(i, e, l); ) --l;
  for (; Jm(i, e, s, o, l); ) ++s;
  for (; Jm(i, e, a, o, l); ) --a;
  return ++a, ++l, new qm(s, o, a, l);
}
function Db(r5) {
  const e = kb(r5), { width: t, height: n } = e;
  let i = null;
  if (!e.isEmpty()) {
    const s = r5.getContext("2d");
    if (s === null) throw new TypeError("Failed to get canvas 2D context");
    i = s.getImageData(e.left, e.top, t, n);
  }
  return { width: t, height: n, data: i };
}
function Fb(r5, e = globalThis.location) {
  if (r5.startsWith("data:")) return "";
  e = e || globalThis.location;
  const t = new URL(r5, document.baseURI);
  return t.hostname !== e.hostname || t.port !== e.port || t.protocol !== e.protocol ? "anonymous" : "";
}
function kr(r5, e = 1) {
  var _a2;
  const t = (_a2 = z.RETINA_PREFIX) == null ? void 0 : _a2.exec(r5);
  return t ? parseFloat(t[1]) : e;
}
var L = ((r5) => (r5.Renderer = "renderer", r5.Application = "application", r5.RendererSystem = "renderer-webgl-system", r5.RendererPlugin = "renderer-webgl-plugin", r5.CanvasRendererSystem = "renderer-canvas-system", r5.CanvasRendererPlugin = "renderer-canvas-plugin", r5.Asset = "asset", r5.LoadParser = "load-parser", r5.ResolveParser = "resolve-parser", r5.CacheParser = "cache-parser", r5.DetectionParser = "detection-parser", r5))(L || {});
const Vc = (r5) => {
  if (typeof r5 == "function" || typeof r5 == "object" && r5.extension) {
    if (!r5.extension) throw new Error("Extension class must have an extension object");
    r5 = { ...typeof r5.extension != "object" ? { type: r5.extension } : r5.extension, ref: r5 };
  }
  if (typeof r5 == "object") r5 = { ...r5 };
  else throw new Error("Invalid extension type");
  return typeof r5.type == "string" && (r5.type = [r5.type]), r5;
}, eg = (r5, e) => Vc(r5).priority ?? e, X = { _addHandlers: {}, _removeHandlers: {}, _queue: {}, remove(...r5) {
  return r5.map(Vc).forEach((e) => {
    e.type.forEach((t) => {
      var _a2, _b2;
      return (_b2 = (_a2 = this._removeHandlers)[t]) == null ? void 0 : _b2.call(_a2, e);
    });
  }), this;
}, add(...r5) {
  return r5.map(Vc).forEach((e) => {
    e.type.forEach((t) => {
      var _a2, _b2;
      const n = this._addHandlers, i = this._queue;
      n[t] ? (_a2 = n[t]) == null ? void 0 : _a2.call(n, e) : (i[t] = i[t] || [], (_b2 = i[t]) == null ? void 0 : _b2.push(e));
    });
  }), this;
}, handle(r5, e, t) {
  var _a2;
  const n = this._addHandlers, i = this._removeHandlers;
  if (n[r5] || i[r5]) throw new Error(`Extension type ${r5} already has a handler`);
  n[r5] = e, i[r5] = t;
  const s = this._queue;
  return s[r5] && ((_a2 = s[r5]) == null ? void 0 : _a2.forEach((o) => e(o)), delete s[r5]), this;
}, handleByMap(r5, e) {
  return this.handle(r5, (t) => {
    t.name && (e[t.name] = t.ref);
  }, (t) => {
    t.name && delete e[t.name];
  });
}, handleByList(r5, e, t = -1) {
  return this.handle(r5, (n) => {
    e.includes(n.ref) || (e.push(n.ref), e.sort((i, s) => eg(s, t) - eg(i, t)));
  }, (n) => {
    const i = e.indexOf(n.ref);
    i !== -1 && e.splice(i, 1);
  });
} };
class Wc {
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
const Nb = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
`);
function Bb(r5) {
  let e = "";
  for (let t = 0; t < r5; ++t) t > 0 && (e += `
else `), t < r5 - 1 && (e += `if(test == ${t}.0){}`);
  return e;
}
function Ob(r5, e) {
  if (r5 === 0) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  const t = e.createShader(e.FRAGMENT_SHADER);
  for (; ; ) {
    const n = Nb.replace(/%forloop%/gi, Bb(r5));
    if (e.shaderSource(t, n), e.compileShader(t), !e.getShaderParameter(t, e.COMPILE_STATUS)) r5 = r5 / 2 | 0;
    else break;
  }
  return r5;
}
const fh = 0, ph = 1, mh = 2, gh = 3, yh = 4, vh = 5;
class pr {
  constructor() {
    this.data = 0, this.blendMode = Q.NORMAL, this.polygonOffset = 0, this.blend = true, this.depthMask = true;
  }
  get blend() {
    return !!(this.data & 1 << fh);
  }
  set blend(e) {
    !!(this.data & 1 << fh) !== e && (this.data ^= 1 << fh);
  }
  get offsets() {
    return !!(this.data & 1 << ph);
  }
  set offsets(e) {
    !!(this.data & 1 << ph) !== e && (this.data ^= 1 << ph);
  }
  get culling() {
    return !!(this.data & 1 << mh);
  }
  set culling(e) {
    !!(this.data & 1 << mh) !== e && (this.data ^= 1 << mh);
  }
  get depthTest() {
    return !!(this.data & 1 << gh);
  }
  set depthTest(e) {
    !!(this.data & 1 << gh) !== e && (this.data ^= 1 << gh);
  }
  get depthMask() {
    return !!(this.data & 1 << vh);
  }
  set depthMask(e) {
    !!(this.data & 1 << vh) !== e && (this.data ^= 1 << vh);
  }
  get clockwiseFrontFace() {
    return !!(this.data & 1 << yh);
  }
  set clockwiseFrontFace(e) {
    !!(this.data & 1 << yh) !== e && (this.data ^= 1 << yh);
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
const Xc = [];
function V_(r5, e) {
  if (!r5) return null;
  let t = "";
  if (typeof r5 == "string") {
    const n = /\.(\w{3,4})(?:$|\?|#)/i.exec(r5);
    n && (t = n[1].toLowerCase());
  }
  for (let n = Xc.length - 1; n >= 0; --n) {
    const i = Xc[n];
    if (i.test && i.test(r5, t)) return new i(r5, e);
  }
  throw new Error("Unrecognized source type to auto-detect Resource");
}
class $t {
  constructor(e) {
    this.items = [], this._name = e, this._aliasCount = 0;
  }
  emit(e, t, n, i, s, o, a, l) {
    if (arguments.length > 8) throw new Error("max arguments reached");
    const { name: u, items: h } = this;
    this._aliasCount++;
    for (let c = 0, d = h.length; c < d; c++) h[c][u](e, t, n, i, s, o, a, l);
    return h === this.items && this._aliasCount--, this;
  }
  ensureNonAliasedItems() {
    this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0));
  }
  add(e) {
    return e[this._name] && (this.ensureNonAliasedItems(), this.remove(e), this.items.push(e)), this;
  }
  remove(e) {
    const t = this.items.indexOf(e);
    return t !== -1 && (this.ensureNonAliasedItems(), this.items.splice(t, 1)), this;
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
class yo {
  constructor(e = 0, t = 0) {
    this._width = e, this._height = t, this.destroyed = false, this.internal = false, this.onResize = new $t("setRealSize"), this.onUpdate = new $t("update"), this.onError = new $t("onError");
  }
  bind(e) {
    this.onResize.add(e), this.onUpdate.add(e), this.onError.add(e), (this._width || this._height) && this.onResize.emit(this._width, this._height);
  }
  unbind(e) {
    this.onResize.remove(e), this.onUpdate.remove(e), this.onError.remove(e);
  }
  resize(e, t) {
    (e !== this._width || t !== this._height) && (this._width = e, this._height = t, this.onResize.emit(e, t));
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
  style(e, t, n) {
    return false;
  }
  dispose() {
  }
  destroy() {
    this.destroyed || (this.destroyed = true, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null);
  }
  static test(e, t) {
    return false;
  }
}
class lu extends yo {
  constructor(e, t) {
    const { width: n, height: i } = t || {};
    if (!n || !i) throw new Error("BufferResource width or height invalid");
    super(n, i), this.data = e, this.unpackAlignment = t.unpackAlignment ?? 4;
  }
  upload(e, t, n) {
    const i = e.gl;
    i.pixelStorei(i.UNPACK_ALIGNMENT, this.unpackAlignment), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === ht.UNPACK);
    const s = t.realWidth, o = t.realHeight;
    return n.width === s && n.height === o ? i.texSubImage2D(t.target, 0, 0, 0, s, o, t.format, n.type, this.data) : (n.width = s, n.height = o, i.texImage2D(t.target, 0, n.internalFormat, s, o, 0, t.format, n.type, this.data)), true;
  }
  dispose() {
    this.data = null;
  }
  static test(e) {
    return e === null || e instanceof Int8Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array;
  }
}
const Lb = { scaleMode: Er.NEAREST, alphaMode: ht.NPM }, Yc = class ai extends bo {
  constructor(e = null, t = null) {
    super(), t = Object.assign({}, ai.defaultOptions, t);
    const { alphaMode: n, mipmap: i, anisotropicLevel: s, scaleMode: o, width: a, height: l, wrapMode: u, format: h, type: c, target: d, resolution: f, resourceOptions: p } = t;
    e && !(e instanceof yo) && (e = V_(e, p), e.internal = true), this.resolution = f || z.RESOLUTION, this.width = Math.round((a || 0) * this.resolution) / this.resolution, this.height = Math.round((l || 0) * this.resolution) / this.resolution, this._mipmap = i, this.anisotropicLevel = s, this._wrapMode = u, this._scaleMode = o, this.format = h, this.type = c, this.target = d, this.alphaMode = n, this.uid = Wn(), this.touched = 0, this.isPowerOfTwo = false, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = a > 0 && l > 0, this.textureCacheIds = [], this.destroyed = false, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.parentTextureArray = null, this.setResource(e);
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
  setStyle(e, t) {
    let n;
    return e !== void 0 && e !== this.scaleMode && (this.scaleMode = e, n = true), t !== void 0 && t !== this.mipmap && (this.mipmap = t, n = true), n && this.dirtyStyleId++, this;
  }
  setSize(e, t, n) {
    return n = n || this.resolution, this.setRealSize(e * n, t * n, n);
  }
  setRealSize(e, t, n) {
    return this.resolution = n || this.resolution, this.width = Math.round(e) / this.resolution, this.height = Math.round(t) / this.resolution, this._refreshPOT(), this.update(), this;
  }
  _refreshPOT() {
    this.isPowerOfTwo = Ym(this.realWidth) && Ym(this.realHeight);
  }
  setResolution(e) {
    const t = this.resolution;
    return t === e ? this : (this.resolution = e, this.valid && (this.width = Math.round(this.width * t) / e, this.height = Math.round(this.height * t) / e, this.emit("update", this)), this._refreshPOT(), this);
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
    this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete Or[this.cacheId], delete Jt[this.cacheId], this.cacheId = null), this.valid = false, this.dispose(), ai.removeFromCache(this), this.textureCacheIds = null, this.destroyed = true, this.emit("destroyed", this), this.removeAllListeners();
  }
  dispose() {
    this.emit("dispose", this);
  }
  castToBaseTexture() {
    return this;
  }
  static from(e, t, n = z.STRICT_TEXTURE_CACHE) {
    const i = typeof e == "string";
    let s = null;
    if (i) s = e;
    else {
      if (!e._pixiId) {
        const a = (t == null ? void 0 : t.pixiIdPrefix) || "pixiid";
        e._pixiId = `${a}_${Wn()}`;
      }
      s = e._pixiId;
    }
    let o = Or[s];
    if (i && n && !o) throw new Error(`The cacheId "${s}" does not exist in BaseTextureCache.`);
    return o || (o = new ai(e, t), o.cacheId = s, ai.addToCache(o, s)), o;
  }
  static fromBuffer(e, t, n, i) {
    e = e || new Float32Array(t * n * 4);
    const s = new lu(e, { width: t, height: n, ...i == null ? void 0 : i.resourceOptions });
    let o, a;
    return e instanceof Float32Array ? (o = F.RGBA, a = K.FLOAT) : e instanceof Int32Array ? (o = F.RGBA_INTEGER, a = K.INT) : e instanceof Uint32Array ? (o = F.RGBA_INTEGER, a = K.UNSIGNED_INT) : e instanceof Int16Array ? (o = F.RGBA_INTEGER, a = K.SHORT) : e instanceof Uint16Array ? (o = F.RGBA_INTEGER, a = K.UNSIGNED_SHORT) : e instanceof Int8Array ? (o = F.RGBA, a = K.BYTE) : (o = F.RGBA, a = K.UNSIGNED_BYTE), s.internal = true, new ai(s, Object.assign({}, Lb, { type: a, format: o }, i));
  }
  static addToCache(e, t) {
    t && (e.textureCacheIds.includes(t) || e.textureCacheIds.push(t), Or[t] && Or[t] !== e && console.warn(`BaseTexture added to the cache with an id [${t}] that already had an entry`), Or[t] = e);
  }
  static removeFromCache(e) {
    if (typeof e == "string") {
      const t = Or[e];
      if (t) {
        const n = t.textureCacheIds.indexOf(e);
        return n > -1 && t.textureCacheIds.splice(n, 1), delete Or[e], t;
      }
    } else if (e == null ? void 0 : e.textureCacheIds) {
      for (let t = 0; t < e.textureCacheIds.length; ++t) delete Or[e.textureCacheIds[t]];
      return e.textureCacheIds.length = 0, e;
    }
    return null;
  }
};
Yc.defaultOptions = { mipmap: fr.POW2, anisotropicLevel: 0, scaleMode: Er.LINEAR, wrapMode: on.CLAMP, alphaMode: ht.UNPACK, target: Di.TEXTURE_2D, format: F.RGBA, type: K.UNSIGNED_BYTE }, Yc._globalBatch = 0;
let ee = Yc;
class Kc {
  constructor() {
    this.texArray = null, this.blend = 0, this.type = lr.TRIANGLES, this.start = 0, this.size = 0, this.data = null;
  }
}
let Ub = 0;
class Re {
  constructor(e, t = true, n = false) {
    this.data = e || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = n, this.static = t, this.id = Ub++, this.disposeRunner = new $t("disposeBuffer");
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
    return e instanceof Array && (e = new Float32Array(e)), new Re(e);
  }
}
class bl {
  constructor(e, t = 0, n = false, i = K.FLOAT, s, o, a, l = 1) {
    this.buffer = e, this.size = t, this.normalized = n, this.type = i, this.stride = s, this.start = o, this.instance = a, this.divisor = l;
  }
  destroy() {
    this.buffer = null;
  }
  static from(e, t, n, i, s) {
    return new bl(e, t, n, i, s);
  }
}
const Gb = { Float32Array, Uint32Array, Int32Array, Uint8Array };
function zb(r5, e) {
  let t = 0, n = 0;
  const i = {};
  for (let l = 0; l < r5.length; l++) n += e[l], t += r5[l].length;
  const s = new ArrayBuffer(t * 4);
  let o = null, a = 0;
  for (let l = 0; l < r5.length; l++) {
    const u = e[l], h = r5[l], c = j_(h);
    i[c] || (i[c] = new Gb[c](s)), o = i[c];
    for (let d = 0; d < h.length; d++) {
      const f = (d / u | 0) * n + a, p = d % u;
      o[f + p] = h[d];
    }
    a += u;
  }
  return new Float32Array(s);
}
const tg = { 5126: 4, 5123: 2, 5121: 1 };
let Hb = 0;
const $b = { Float32Array, Uint32Array, Int32Array, Uint8Array, Uint16Array };
class un {
  constructor(e = [], t = {}) {
    this.buffers = e, this.indexBuffer = null, this.attributes = t, this.glVertexArrayObjects = {}, this.id = Hb++, this.instanced = false, this.instanceCount = 1, this.disposeRunner = new $t("disposeGeometry"), this.refCount = 0;
  }
  addAttribute(e, t, n = 0, i = false, s, o, a, l = false) {
    if (!t) throw new Error("You must pass a buffer when creating an attribute");
    t instanceof Re || (t instanceof Array && (t = new Float32Array(t)), t = new Re(t));
    const u = e.split("|");
    if (u.length > 1) {
      for (let c = 0; c < u.length; c++) this.addAttribute(u[c], t, n, i, s);
      return this;
    }
    let h = this.buffers.indexOf(t);
    return h === -1 && (this.buffers.push(t), h = this.buffers.length - 1), this.attributes[e] = new bl(h, n, i, s, o, a, l), this.instanced = this.instanced || l, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  getBuffer(e) {
    return this.buffers[this.getAttribute(e).buffer];
  }
  addIndex(e) {
    return e instanceof Re || (e instanceof Array && (e = new Uint16Array(e)), e = new Re(e)), e.type = cr.ELEMENT_ARRAY_BUFFER, this.indexBuffer = e, this.buffers.includes(e) || this.buffers.push(e), this;
  }
  getIndex() {
    return this.indexBuffer;
  }
  interleave() {
    if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer) return this;
    const e = [], t = [], n = new Re();
    let i;
    for (i in this.attributes) {
      const s = this.attributes[i], o = this.buffers[s.buffer];
      e.push(o.data), t.push(s.size * tg[s.type] / 4), s.buffer = 0;
    }
    for (n.data = zb(e, t), i = 0; i < this.buffers.length; i++) this.buffers[i] !== this.indexBuffer && this.buffers[i].destroy();
    return this.buffers = [n], this.indexBuffer && this.buffers.push(this.indexBuffer), this;
  }
  getSize() {
    for (const e in this.attributes) {
      const t = this.attributes[e];
      return this.buffers[t.buffer].data.length / (t.stride / 4 || t.size);
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
    const e = new un();
    for (let t = 0; t < this.buffers.length; t++) e.buffers[t] = new Re(this.buffers[t].data.slice(0));
    for (const t in this.attributes) {
      const n = this.attributes[t];
      e.attributes[t] = new bl(n.buffer, n.size, n.normalized, n.type, n.stride, n.start, n.instance);
    }
    return this.indexBuffer && (e.indexBuffer = e.buffers[this.buffers.indexOf(this.indexBuffer)], e.indexBuffer.type = cr.ELEMENT_ARRAY_BUFFER), e;
  }
  static merge(e) {
    const t = new un(), n = [], i = [], s = [];
    let o;
    for (let a = 0; a < e.length; a++) {
      o = e[a];
      for (let l = 0; l < o.buffers.length; l++) i[l] = i[l] || 0, i[l] += o.buffers[l].data.length, s[l] = 0;
    }
    for (let a = 0; a < o.buffers.length; a++) n[a] = new $b[j_(o.buffers[a].data)](i[a]), t.buffers[a] = new Re(n[a]);
    for (let a = 0; a < e.length; a++) {
      o = e[a];
      for (let l = 0; l < o.buffers.length; l++) n[l].set(o.buffers[l].data, s[l]), s[l] += o.buffers[l].data.length;
    }
    if (t.attributes = o.attributes, o.indexBuffer) {
      t.indexBuffer = t.buffers[o.buffers.indexOf(o.indexBuffer)], t.indexBuffer.type = cr.ELEMENT_ARRAY_BUFFER;
      let a = 0, l = 0, u = 0, h = 0;
      for (let c = 0; c < o.buffers.length; c++) if (o.buffers[c] !== o.indexBuffer) {
        h = c;
        break;
      }
      for (const c in o.attributes) {
        const d = o.attributes[c];
        (d.buffer | 0) === h && (l += d.size * tg[d.type] / 4);
      }
      for (let c = 0; c < e.length; c++) {
        const d = e[c].indexBuffer.data;
        for (let f = 0; f < d.length; f++) t.indexBuffer.data[f + u] += a;
        a += e[c].buffers[h].data.length / l, u += d.length;
      }
    }
    return t;
  }
}
class W_ extends un {
  constructor(e = false) {
    super(), this._buffer = new Re(null, e, false), this._indexBuffer = new Re(null, e, true), this.addAttribute("aVertexPosition", this._buffer, 2, false, K.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, false, K.FLOAT).addAttribute("aColor", this._buffer, 4, true, K.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, true, K.FLOAT).addIndex(this._indexBuffer);
  }
}
const Al = Math.PI * 2, jb = 180 / Math.PI, Vb = Math.PI / 180;
var Xe = ((r5) => (r5[r5.POLY = 0] = "POLY", r5[r5.RECT = 1] = "RECT", r5[r5.CIRC = 2] = "CIRC", r5[r5.ELIP = 3] = "ELIP", r5[r5.RREC = 4] = "RREC", r5))(Xe || {});
class le {
  constructor(e = 0, t = 0) {
    this.x = 0, this.y = 0, this.x = e, this.y = t;
  }
  clone() {
    return new le(this.x, this.y);
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
  set(e = 0, t = e) {
    return this.x = e, this.y = t, this;
  }
}
le.prototype.toString = function() {
  return `[@pixi/math:Point x=${this.x} y=${this.y}]`;
};
const ra = [new le(), new le(), new le(), new le()];
class te {
  constructor(e = 0, t = 0, n = 0, i = 0) {
    this.x = Number(e), this.y = Number(t), this.width = Number(n), this.height = Number(i), this.type = Xe.RECT;
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
  contains(e, t) {
    return this.width <= 0 || this.height <= 0 ? false : e >= this.x && e < this.x + this.width && t >= this.y && t < this.y + this.height;
  }
  intersects(e, t) {
    if (!t) {
      const E = this.x < e.x ? e.x : this.x;
      if ((this.right > e.right ? e.right : this.right) <= E) return false;
      const I = this.y < e.y ? e.y : this.y;
      return (this.bottom > e.bottom ? e.bottom : this.bottom) > I;
    }
    const n = this.left, i = this.right, s = this.top, o = this.bottom;
    if (i <= n || o <= s) return false;
    const a = ra[0].set(e.left, e.top), l = ra[1].set(e.left, e.bottom), u = ra[2].set(e.right, e.top), h = ra[3].set(e.right, e.bottom);
    if (u.x <= a.x || l.y <= a.y) return false;
    const c = Math.sign(t.a * t.d - t.b * t.c);
    if (c === 0 || (t.apply(a, a), t.apply(l, l), t.apply(u, u), t.apply(h, h), Math.max(a.x, l.x, u.x, h.x) <= n || Math.min(a.x, l.x, u.x, h.x) >= i || Math.max(a.y, l.y, u.y, h.y) <= s || Math.min(a.y, l.y, u.y, h.y) >= o)) return false;
    const d = c * (l.y - a.y), f = c * (a.x - l.x), p = d * n + f * s, v = d * i + f * s, _ = d * n + f * o, g = d * i + f * o;
    if (Math.max(p, v, _, g) <= d * a.x + f * a.y || Math.min(p, v, _, g) >= d * h.x + f * h.y) return false;
    const y = c * (a.y - u.y), m = c * (u.x - a.x), x = y * n + m * s, w = y * i + m * s, S = y * n + m * o, T = y * i + m * o;
    return !(Math.max(x, w, S, T) <= y * a.x + m * a.y || Math.min(x, w, S, T) >= y * h.x + m * h.y);
  }
  pad(e = 0, t = e) {
    return this.x -= e, this.y -= t, this.width += e * 2, this.height += t * 2, this;
  }
  fit(e) {
    const t = Math.max(this.x, e.x), n = Math.min(this.x + this.width, e.x + e.width), i = Math.max(this.y, e.y), s = Math.min(this.y + this.height, e.y + e.height);
    return this.x = t, this.width = Math.max(n - t, 0), this.y = i, this.height = Math.max(s - i, 0), this;
  }
  ceil(e = 1, t = 1e-3) {
    const n = Math.ceil((this.x + this.width - t) * e) / e, i = Math.ceil((this.y + this.height - t) * e) / e;
    return this.x = Math.floor((this.x + t) * e) / e, this.y = Math.floor((this.y + t) * e) / e, this.width = n - this.x, this.height = i - this.y, this;
  }
  enlarge(e) {
    const t = Math.min(this.x, e.x), n = Math.max(this.x + this.width, e.x + e.width), i = Math.min(this.y, e.y), s = Math.max(this.y + this.height, e.y + e.height);
    return this.x = t, this.width = n - t, this.y = i, this.height = s - i, this;
  }
}
te.prototype.toString = function() {
  return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class uu {
  constructor(e = 0, t = 0, n = 0) {
    this.x = e, this.y = t, this.radius = n, this.type = Xe.CIRC;
  }
  clone() {
    return new uu(this.x, this.y, this.radius);
  }
  contains(e, t) {
    if (this.radius <= 0) return false;
    const n = this.radius * this.radius;
    let i = this.x - e, s = this.y - t;
    return i *= i, s *= s, i + s <= n;
  }
  getBounds() {
    return new te(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
  }
}
uu.prototype.toString = function() {
  return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`;
};
class hu {
  constructor(e = 0, t = 0, n = 0, i = 0) {
    this.x = e, this.y = t, this.width = n, this.height = i, this.type = Xe.ELIP;
  }
  clone() {
    return new hu(this.x, this.y, this.width, this.height);
  }
  contains(e, t) {
    if (this.width <= 0 || this.height <= 0) return false;
    let n = (e - this.x) / this.width, i = (t - this.y) / this.height;
    return n *= n, i *= i, n + i <= 1;
  }
  getBounds() {
    return new te(this.x - this.width, this.y - this.height, this.width, this.height);
  }
}
hu.prototype.toString = function() {
  return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`;
};
class On {
  constructor(...e) {
    let t = Array.isArray(e[0]) ? e[0] : e;
    if (typeof t[0] != "number") {
      const n = [];
      for (let i = 0, s = t.length; i < s; i++) n.push(t[i].x, t[i].y);
      t = n;
    }
    this.points = t, this.type = Xe.POLY, this.closeStroke = true;
  }
  clone() {
    const e = this.points.slice(), t = new On(e);
    return t.closeStroke = this.closeStroke, t;
  }
  contains(e, t) {
    let n = false;
    const i = this.points.length / 2;
    for (let s = 0, o = i - 1; s < i; o = s++) {
      const a = this.points[s * 2], l = this.points[s * 2 + 1], u = this.points[o * 2], h = this.points[o * 2 + 1];
      l > t != h > t && e < (u - a) * ((t - l) / (h - l)) + a && (n = !n);
    }
    return n;
  }
}
On.prototype.toString = function() {
  return `[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((r5, e) => `${r5}, ${e}`, "")}]`;
};
class cu {
  constructor(e = 0, t = 0, n = 0, i = 0, s = 20) {
    this.x = e, this.y = t, this.width = n, this.height = i, this.radius = s, this.type = Xe.RREC;
  }
  clone() {
    return new cu(this.x, this.y, this.width, this.height, this.radius);
  }
  contains(e, t) {
    if (this.width <= 0 || this.height <= 0) return false;
    if (e >= this.x && e <= this.x + this.width && t >= this.y && t <= this.y + this.height) {
      const n = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
      if (t >= this.y + n && t <= this.y + this.height - n || e >= this.x + n && e <= this.x + this.width - n) return true;
      let i = e - (this.x + n), s = t - (this.y + n);
      const o = n * n;
      if (i * i + s * s <= o || (i = e - (this.x + this.width - n), i * i + s * s <= o) || (s = t - (this.y + this.height - n), i * i + s * s <= o) || (i = e - (this.x + n), i * i + s * s <= o)) return true;
    }
    return false;
  }
}
cu.prototype.toString = function() {
  return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`;
};
class ye {
  constructor(e = 1, t = 0, n = 0, i = 1, s = 0, o = 0) {
    this.array = null, this.a = e, this.b = t, this.c = n, this.d = i, this.tx = s, this.ty = o;
  }
  fromArray(e) {
    this.a = e[0], this.b = e[1], this.c = e[3], this.d = e[4], this.tx = e[2], this.ty = e[5];
  }
  set(e, t, n, i, s, o) {
    return this.a = e, this.b = t, this.c = n, this.d = i, this.tx = s, this.ty = o, this;
  }
  toArray(e, t) {
    this.array || (this.array = new Float32Array(9));
    const n = t || this.array;
    return e ? (n[0] = this.a, n[1] = this.b, n[2] = 0, n[3] = this.c, n[4] = this.d, n[5] = 0, n[6] = this.tx, n[7] = this.ty, n[8] = 1) : (n[0] = this.a, n[1] = this.c, n[2] = this.tx, n[3] = this.b, n[4] = this.d, n[5] = this.ty, n[6] = 0, n[7] = 0, n[8] = 1), n;
  }
  apply(e, t) {
    t = t || new le();
    const n = e.x, i = e.y;
    return t.x = this.a * n + this.c * i + this.tx, t.y = this.b * n + this.d * i + this.ty, t;
  }
  applyInverse(e, t) {
    t = t || new le();
    const n = 1 / (this.a * this.d + this.c * -this.b), i = e.x, s = e.y;
    return t.x = this.d * n * i + -this.c * n * s + (this.ty * this.c - this.tx * this.d) * n, t.y = this.a * n * s + -this.b * n * i + (-this.ty * this.a + this.tx * this.b) * n, t;
  }
  translate(e, t) {
    return this.tx += e, this.ty += t, this;
  }
  scale(e, t) {
    return this.a *= e, this.d *= t, this.c *= e, this.b *= t, this.tx *= e, this.ty *= t, this;
  }
  rotate(e) {
    const t = Math.cos(e), n = Math.sin(e), i = this.a, s = this.c, o = this.tx;
    return this.a = i * t - this.b * n, this.b = i * n + this.b * t, this.c = s * t - this.d * n, this.d = s * n + this.d * t, this.tx = o * t - this.ty * n, this.ty = o * n + this.ty * t, this;
  }
  append(e) {
    const t = this.a, n = this.b, i = this.c, s = this.d;
    return this.a = e.a * t + e.b * i, this.b = e.a * n + e.b * s, this.c = e.c * t + e.d * i, this.d = e.c * n + e.d * s, this.tx = e.tx * t + e.ty * i + this.tx, this.ty = e.tx * n + e.ty * s + this.ty, this;
  }
  setTransform(e, t, n, i, s, o, a, l, u) {
    return this.a = Math.cos(a + u) * s, this.b = Math.sin(a + u) * s, this.c = -Math.sin(a - l) * o, this.d = Math.cos(a - l) * o, this.tx = e - (n * this.a + i * this.c), this.ty = t - (n * this.b + i * this.d), this;
  }
  prepend(e) {
    const t = this.tx;
    if (e.a !== 1 || e.b !== 0 || e.c !== 0 || e.d !== 1) {
      const n = this.a, i = this.c;
      this.a = n * e.a + this.b * e.c, this.b = n * e.b + this.b * e.d, this.c = i * e.a + this.d * e.c, this.d = i * e.b + this.d * e.d;
    }
    return this.tx = t * e.a + this.ty * e.c + e.tx, this.ty = t * e.b + this.ty * e.d + e.ty, this;
  }
  decompose(e) {
    const t = this.a, n = this.b, i = this.c, s = this.d, o = e.pivot, a = -Math.atan2(-i, s), l = Math.atan2(n, t), u = Math.abs(a + l);
    return u < 1e-5 || Math.abs(Al - u) < 1e-5 ? (e.rotation = l, e.skew.x = e.skew.y = 0) : (e.rotation = 0, e.skew.x = a, e.skew.y = l), e.scale.x = Math.sqrt(t * t + n * n), e.scale.y = Math.sqrt(i * i + s * s), e.position.x = this.tx + (o.x * t + o.y * i), e.position.y = this.ty + (o.x * n + o.y * s), e;
  }
  invert() {
    const e = this.a, t = this.b, n = this.c, i = this.d, s = this.tx, o = e * i - t * n;
    return this.a = i / o, this.b = -t / o, this.c = -n / o, this.d = e / o, this.tx = (n * this.ty - i * s) / o, this.ty = -(e * this.ty - t * s) / o, this;
  }
  identity() {
    return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
  }
  clone() {
    const e = new ye();
    return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e;
  }
  copyTo(e) {
    return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e;
  }
  copyFrom(e) {
    return this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.tx = e.tx, this.ty = e.ty, this;
  }
  static get IDENTITY() {
    return new ye();
  }
  static get TEMP_MATRIX() {
    return new ye();
  }
}
ye.prototype.toString = function() {
  return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`;
};
const xn = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1], wn = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1], En = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1], Tn = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1], qc = [], X_ = [], na = Math.sign;
function Wb() {
  for (let r5 = 0; r5 < 16; r5++) {
    const e = [];
    qc.push(e);
    for (let t = 0; t < 16; t++) {
      const n = na(xn[r5] * xn[t] + En[r5] * wn[t]), i = na(wn[r5] * xn[t] + Tn[r5] * wn[t]), s = na(xn[r5] * En[t] + En[r5] * Tn[t]), o = na(wn[r5] * En[t] + Tn[r5] * Tn[t]);
      for (let a = 0; a < 16; a++) if (xn[a] === n && wn[a] === i && En[a] === s && Tn[a] === o) {
        e.push(a);
        break;
      }
    }
  }
  for (let r5 = 0; r5 < 16; r5++) {
    const e = new ye();
    e.set(xn[r5], wn[r5], En[r5], Tn[r5], 0, 0), X_.push(e);
  }
}
Wb();
const xe = { E: 0, SE: 1, S: 2, SW: 3, W: 4, NW: 5, N: 6, NE: 7, MIRROR_VERTICAL: 8, MAIN_DIAGONAL: 10, MIRROR_HORIZONTAL: 12, REVERSE_DIAGONAL: 14, uX: (r5) => xn[r5], uY: (r5) => wn[r5], vX: (r5) => En[r5], vY: (r5) => Tn[r5], inv: (r5) => r5 & 8 ? r5 & 15 : -r5 & 7, add: (r5, e) => qc[r5][e], sub: (r5, e) => qc[r5][xe.inv(e)], rotate180: (r5) => r5 ^ 4, isVertical: (r5) => (r5 & 3) === 2, byDirection: (r5, e) => Math.abs(r5) * 2 <= Math.abs(e) ? e >= 0 ? xe.S : xe.N : Math.abs(e) * 2 <= Math.abs(r5) ? r5 > 0 ? xe.E : xe.W : e > 0 ? r5 > 0 ? xe.SE : xe.SW : r5 > 0 ? xe.NE : xe.NW, matrixAppendRotationInv: (r5, e, t = 0, n = 0) => {
  const i = X_[xe.inv(e)];
  i.tx = t, i.ty = n, r5.append(i);
} };
class Sr {
  constructor(e, t, n = 0, i = 0) {
    this._x = n, this._y = i, this.cb = e, this.scope = t;
  }
  clone(e = this.cb, t = this.scope) {
    return new Sr(e, t, this._x, this._y);
  }
  set(e = 0, t = e) {
    return (this._x !== e || this._y !== t) && (this._x = e, this._y = t, this.cb.call(this.scope)), this;
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
Sr.prototype.toString = function() {
  return `[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`;
};
const Zc = class {
  constructor() {
    this.worldTransform = new ye(), this.localTransform = new ye(), this.position = new Sr(this.onChange, this, 0, 0), this.scale = new Sr(this.onChange, this, 1, 1), this.pivot = new Sr(this.onChange, this, 0, 0), this.skew = new Sr(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0;
  }
  onChange() {
    this._localID++;
  }
  updateSkew() {
    this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++;
  }
  updateLocalTransform() {
    const r5 = this.localTransform;
    this._localID !== this._currentLocalID && (r5.a = this._cx * this.scale.x, r5.b = this._sx * this.scale.x, r5.c = this._cy * this.scale.y, r5.d = this._sy * this.scale.y, r5.tx = this.position.x - (this.pivot.x * r5.a + this.pivot.y * r5.c), r5.ty = this.position.y - (this.pivot.x * r5.b + this.pivot.y * r5.d), this._currentLocalID = this._localID, this._parentID = -1);
  }
  updateTransform(r5) {
    const e = this.localTransform;
    if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== r5._worldID) {
      const t = r5.worldTransform, n = this.worldTransform;
      n.a = e.a * t.a + e.b * t.c, n.b = e.a * t.b + e.b * t.d, n.c = e.c * t.a + e.d * t.c, n.d = e.c * t.b + e.d * t.d, n.tx = e.tx * t.a + e.ty * t.c + t.tx, n.ty = e.tx * t.b + e.ty * t.d + t.ty, this._parentID = r5._worldID, this._worldID++;
    }
  }
  setFromMatrix(r5) {
    r5.decompose(this), this._localID++;
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(r5) {
    this._rotation !== r5 && (this._rotation = r5, this.updateSkew());
  }
};
Zc.IDENTITY = new Zc();
let Bf = Zc;
Bf.prototype.toString = function() {
  return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`;
};
var Xb = `varying vec2 vTextureCoord;

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
function rg(r5, e, t) {
  const n = r5.createShader(e);
  return r5.shaderSource(n, t), r5.compileShader(n), n;
}
function _h(r5) {
  const e = new Array(r5);
  for (let t = 0; t < e.length; t++) e[t] = false;
  return e;
}
function Y_(r5, e) {
  switch (r5) {
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
      return _h(2 * e);
    case "bvec3":
      return _h(3 * e);
    case "bvec4":
      return _h(4 * e);
    case "mat2":
      return new Float32Array([1, 0, 0, 1]);
    case "mat3":
      return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4":
      return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  return null;
}
const Oi = [{ test: (r5) => r5.type === "float" && r5.size === 1 && !r5.isArray, code: (r5) => `
            if(uv["${r5}"] !== ud["${r5}"].value)
            {
                ud["${r5}"].value = uv["${r5}"]
                gl.uniform1f(ud["${r5}"].location, uv["${r5}"])
            }
            ` }, { test: (r5, e) => (r5.type === "sampler2D" || r5.type === "samplerCube" || r5.type === "sampler2DArray") && r5.size === 1 && !r5.isArray && (e == null || e.castToBaseTexture !== void 0), code: (r5) => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${r5}"], t);

            if(ud["${r5}"].value !== t)
            {
                ud["${r5}"].value = t;
                gl.uniform1i(ud["${r5}"].location, t);
; // eslint-disable-line max-len
            }` }, { test: (r5, e) => r5.type === "mat3" && r5.size === 1 && !r5.isArray && e.a !== void 0, code: (r5) => `
            gl.uniformMatrix3fv(ud["${r5}"].location, false, uv["${r5}"].toArray(true));
            `, codeUbo: (r5) => `
                var ${r5}_matrix = uv.${r5}.toArray(true);

                data[offset] = ${r5}_matrix[0];
                data[offset+1] = ${r5}_matrix[1];
                data[offset+2] = ${r5}_matrix[2];
        
                data[offset + 4] = ${r5}_matrix[3];
                data[offset + 5] = ${r5}_matrix[4];
                data[offset + 6] = ${r5}_matrix[5];
        
                data[offset + 8] = ${r5}_matrix[6];
                data[offset + 9] = ${r5}_matrix[7];
                data[offset + 10] = ${r5}_matrix[8];
            ` }, { test: (r5, e) => r5.type === "vec2" && r5.size === 1 && !r5.isArray && e.x !== void 0, code: (r5) => `
                cv = ud["${r5}"].value;
                v = uv["${r5}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${r5}"].location, v.x, v.y);
                }`, codeUbo: (r5) => `
                v = uv.${r5};

                data[offset] = v.x;
                data[offset+1] = v.y;
            ` }, { test: (r5) => r5.type === "vec2" && r5.size === 1 && !r5.isArray, code: (r5) => `
                cv = ud["${r5}"].value;
                v = uv["${r5}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${r5}"].location, v[0], v[1]);
                }
            ` }, { test: (r5, e) => r5.type === "vec4" && r5.size === 1 && !r5.isArray && e.width !== void 0, code: (r5) => `
                cv = ud["${r5}"].value;
                v = uv["${r5}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${r5}"].location, v.x, v.y, v.width, v.height)
                }`, codeUbo: (r5) => `
                    v = uv.${r5};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                ` }, { test: (r5, e) => r5.type === "vec4" && r5.size === 1 && !r5.isArray && e.red !== void 0, code: (r5) => `
                cv = ud["${r5}"].value;
                v = uv["${r5}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${r5}"].location, v.red, v.green, v.blue, v.alpha)
                }`, codeUbo: (r5) => `
                    v = uv.${r5};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                ` }, { test: (r5, e) => r5.type === "vec3" && r5.size === 1 && !r5.isArray && e.red !== void 0, code: (r5) => `
                cv = ud["${r5}"].value;
                v = uv["${r5}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${r5}"].location, v.red, v.green, v.blue)
                }`, codeUbo: (r5) => `
                    v = uv.${r5};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                ` }, { test: (r5) => r5.type === "vec4" && r5.size === 1 && !r5.isArray, code: (r5) => `
                cv = ud["${r5}"].value;
                v = uv["${r5}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${r5}"].location, v[0], v[1], v[2], v[3])
                }` }], Kb = { float: `
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
    }` }, qb = { float: "gl.uniform1fv(location, v)", vec2: "gl.uniform2fv(location, v)", vec3: "gl.uniform3fv(location, v)", vec4: "gl.uniform4fv(location, v)", mat4: "gl.uniformMatrix4fv(location, false, v)", mat3: "gl.uniformMatrix3fv(location, false, v)", mat2: "gl.uniformMatrix2fv(location, false, v)", int: "gl.uniform1iv(location, v)", ivec2: "gl.uniform2iv(location, v)", ivec3: "gl.uniform3iv(location, v)", ivec4: "gl.uniform4iv(location, v)", uint: "gl.uniform1uiv(location, v)", uvec2: "gl.uniform2uiv(location, v)", uvec3: "gl.uniform3uiv(location, v)", uvec4: "gl.uniform4uiv(location, v)", bool: "gl.uniform1iv(location, v)", bvec2: "gl.uniform2iv(location, v)", bvec3: "gl.uniform3iv(location, v)", bvec4: "gl.uniform4iv(location, v)", sampler2D: "gl.uniform1iv(location, v)", samplerCube: "gl.uniform1iv(location, v)", sampler2DArray: "gl.uniform1iv(location, v)" };
function Zb(r5, e) {
  var _a2;
  const t = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
  for (const n in r5.uniforms) {
    const i = e[n];
    if (!i) {
      ((_a2 = r5.uniforms[n]) == null ? void 0 : _a2.group) === true && (r5.uniforms[n].ubo ? t.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${n}, '${n}');
                    `) : t.push(`
                        renderer.shader.syncUniformGroup(uv.${n}, syncData);
                    `));
      continue;
    }
    const s = r5.uniforms[n];
    let o = false;
    for (let a = 0; a < Oi.length; a++) if (Oi[a].test(i, s)) {
      t.push(Oi[a].code(n, s)), o = true;
      break;
    }
    if (!o) {
      const a = (i.size === 1 && !i.isArray ? Kb : qb)[i.type].replace("location", `ud["${n}"].location`);
      t.push(`
            cu = ud["${n}"];
            cv = cu.value;
            v = uv["${n}"];
            ${a};`);
    }
  }
  return new Function("ud", "uv", "renderer", "syncData", t.join(`
`));
}
const K_ = {};
let ia = K_;
function Qb() {
  if (ia === K_ || (ia == null ? void 0 : ia.isContextLost())) {
    const r5 = z.ADAPTER.createCanvas();
    let e;
    z.PREFER_ENV >= qn.WEBGL2 && (e = r5.getContext("webgl2", {})), e || (e = r5.getContext("webgl", {}) || r5.getContext("experimental-webgl", {}), e ? e.getExtension("WEBGL_draw_buffers") : e = null), ia = e;
  }
  return ia;
}
let sa;
function Jb() {
  if (!sa) {
    sa = At.MEDIUM;
    const r5 = Qb();
    if (r5 && r5.getShaderPrecisionFormat) {
      const e = r5.getShaderPrecisionFormat(r5.FRAGMENT_SHADER, r5.HIGH_FLOAT);
      e && (sa = e.precision ? At.HIGH : At.MEDIUM);
    }
  }
  return sa;
}
function ng(r5, e) {
  const t = r5.getShaderSource(e).split(`
`).map((u, h) => `${h}: ${u}`), n = r5.getShaderInfoLog(e), i = n.split(`
`), s = {}, o = i.map((u) => parseFloat(u.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter((u) => u && !s[u] ? (s[u] = true, true) : false), a = [""];
  o.forEach((u) => {
    t[u - 1] = `%c${t[u - 1]}%c`, a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
  });
  const l = t.join(`
`);
  a[0] = l, console.error(n), console.groupCollapsed("click to view full shader code"), console.warn(...a), console.groupEnd();
}
function eA(r5, e, t, n) {
  r5.getProgramParameter(e, r5.LINK_STATUS) || (r5.getShaderParameter(t, r5.COMPILE_STATUS) || ng(r5, t), r5.getShaderParameter(n, r5.COMPILE_STATUS) || ng(r5, n), console.error("PixiJS Error: Could not initialize shader."), r5.getProgramInfoLog(e) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", r5.getProgramInfoLog(e)));
}
const tA = { float: 1, vec2: 2, vec3: 3, vec4: 4, int: 1, ivec2: 2, ivec3: 3, ivec4: 4, uint: 1, uvec2: 2, uvec3: 3, uvec4: 4, bool: 1, bvec2: 2, bvec3: 3, bvec4: 4, mat2: 4, mat3: 9, mat4: 16, sampler2D: 1 };
function q_(r5) {
  return tA[r5];
}
let oa = null;
const ig = { FLOAT: "float", FLOAT_VEC2: "vec2", FLOAT_VEC3: "vec3", FLOAT_VEC4: "vec4", INT: "int", INT_VEC2: "ivec2", INT_VEC3: "ivec3", INT_VEC4: "ivec4", UNSIGNED_INT: "uint", UNSIGNED_INT_VEC2: "uvec2", UNSIGNED_INT_VEC3: "uvec3", UNSIGNED_INT_VEC4: "uvec4", BOOL: "bool", BOOL_VEC2: "bvec2", BOOL_VEC3: "bvec3", BOOL_VEC4: "bvec4", FLOAT_MAT2: "mat2", FLOAT_MAT3: "mat3", FLOAT_MAT4: "mat4", SAMPLER_2D: "sampler2D", INT_SAMPLER_2D: "sampler2D", UNSIGNED_INT_SAMPLER_2D: "sampler2D", SAMPLER_CUBE: "samplerCube", INT_SAMPLER_CUBE: "samplerCube", UNSIGNED_INT_SAMPLER_CUBE: "samplerCube", SAMPLER_2D_ARRAY: "sampler2DArray", INT_SAMPLER_2D_ARRAY: "sampler2DArray", UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray" };
function Z_(r5, e) {
  if (!oa) {
    const t = Object.keys(ig);
    oa = {};
    for (let n = 0; n < t.length; ++n) {
      const i = t[n];
      oa[r5[i]] = ig[i];
    }
  }
  return oa[e];
}
function sg(r5, e, t) {
  if (r5.substring(0, 9) !== "precision") {
    let n = e;
    return e === At.HIGH && t !== At.HIGH && (n = At.MEDIUM), `precision ${n} float;
${r5}`;
  } else if (t !== At.HIGH && r5.substring(0, 15) === "precision highp") return r5.replace("precision highp", "precision mediump");
  return r5;
}
let ms;
function rA() {
  if (typeof ms == "boolean") return ms;
  try {
    ms = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({ a: "b" }, "a", "b") === true;
  } catch {
    ms = false;
  }
  return ms;
}
let nA = 0;
const aa = {}, Qc = class li {
  constructor(e, t, n = "pixi-shader", i = {}) {
    this.extra = {}, this.id = nA++, this.vertexSrc = e || li.defaultVertexSrc, this.fragmentSrc = t || li.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), this.extra = i, this.vertexSrc.substring(0, 8) !== "#version" && (n = n.replace(/\s+/g, "-"), aa[n] ? (aa[n]++, n += `-${aa[n]}`) : aa[n] = 1, this.vertexSrc = `#define SHADER_NAME ${n}
${this.vertexSrc}`, this.fragmentSrc = `#define SHADER_NAME ${n}
${this.fragmentSrc}`, this.vertexSrc = sg(this.vertexSrc, li.defaultVertexPrecision, At.HIGH), this.fragmentSrc = sg(this.fragmentSrc, li.defaultFragmentPrecision, Jb())), this.glPrograms = {}, this.syncUniforms = null;
  }
  static get defaultVertexSrc() {
    return Yb;
  }
  static get defaultFragmentSrc() {
    return Xb;
  }
  static from(e, t, n) {
    const i = e + t;
    let s = Zm[i];
    return s || (Zm[i] = s = new li(e, t, n)), s;
  }
};
Qc.defaultVertexPrecision = At.HIGH, Qc.defaultFragmentPrecision = Tr.apple.device ? At.HIGH : At.MEDIUM;
let br = Qc, iA = 0;
class jt {
  constructor(e, t, n) {
    this.group = true, this.syncUniforms = {}, this.dirtyId = 0, this.id = iA++, this.static = !!t, this.ubo = !!n, e instanceof Re ? (this.buffer = e, this.buffer.type = cr.UNIFORM_BUFFER, this.autoManage = false, this.ubo = true) : (this.uniforms = e, this.ubo && (this.buffer = new Re(new Float32Array(1)), this.buffer.type = cr.UNIFORM_BUFFER, this.autoManage = true));
  }
  update() {
    this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update();
  }
  add(e, t, n) {
    if (!this.ubo) this.uniforms[e] = new jt(t, n);
    else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
  }
  static from(e, t, n) {
    return new jt(e, t, n);
  }
  static uboFrom(e, t) {
    return new jt(e, t ?? true, true);
  }
}
class dr {
  constructor(e, t) {
    this.uniformBindCount = 0, this.program = e, t ? t instanceof jt ? this.uniformGroup = t : this.uniformGroup = new jt(t) : this.uniformGroup = new jt({}), this.disposeRunner = new $t("disposeShader");
  }
  checkUniformExists(e, t) {
    if (t.uniforms[e]) return true;
    for (const n in t.uniforms) {
      const i = t.uniforms[n];
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
  static from(e, t, n) {
    const i = br.from(e, t);
    return new dr(i, n);
  }
}
class sA {
  constructor(e, t) {
    if (this.vertexSrc = e, this.fragTemplate = t, this.programCache = {}, this.defaultGroupCache = {}, !t.includes("%count%")) throw new Error('Fragment template must contain "%count%".');
    if (!t.includes("%forloop%")) throw new Error('Fragment template must contain "%forloop%".');
  }
  generateShader(e) {
    if (!this.programCache[e]) {
      const n = new Int32Array(e);
      for (let s = 0; s < e; s++) n[s] = s;
      this.defaultGroupCache[e] = jt.from({ uSamplers: n }, true);
      let i = this.fragTemplate;
      i = i.replace(/%count%/gi, `${e}`), i = i.replace(/%forloop%/gi, this.generateSampleSrc(e)), this.programCache[e] = new br(this.vertexSrc, i);
    }
    const t = { tint: new Float32Array([1, 1, 1, 1]), translationMatrix: new ye(), default: this.defaultGroupCache[e] };
    return new dr(this.programCache[e], t);
  }
  generateSampleSrc(e) {
    let t = "";
    t += `
`, t += `
`;
    for (let n = 0; n < e; n++) n > 0 && (t += `
else `), n < e - 1 && (t += `if(vTextureId < ${n}.5)`), t += `
{`, t += `
	color = texture2D(uSamplers[${n}], vTextureCoord);`, t += `
}`;
    return t += `
`, t += `
`, t;
  }
}
class Jc {
  constructor() {
    this.elements = [], this.ids = [], this.count = 0;
  }
  clear() {
    for (let e = 0; e < this.count; e++) this.elements[e] = null;
    this.count = 0;
  }
}
function oA() {
  return !Tr.apple.device;
}
function aA(r5) {
  let e = true;
  const t = z.ADAPTER.getNavigator();
  if (Tr.tablet || Tr.phone) {
    if (Tr.apple.device) {
      const n = t.userAgent.match(/OS (\d+)_(\d+)?/);
      n && parseInt(n[1], 10) < 11 && (e = false);
    }
    if (Tr.android.device) {
      const n = t.userAgent.match(/Android\s([0-9.]*)/);
      n && parseInt(n[1], 10) < 7 && (e = false);
    }
  }
  return e ? r5 : 4;
}
class du {
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
const Ss = class Ft extends du {
  constructor(e) {
    super(e), this.setShaderGenerator(), this.geometryClass = W_, this.vertexSize = 6, this.state = pr.for2d(), this.size = Ft.defaultBatchSize * 4, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.maxTextures = 1, this.renderer.on("prerender", this.onPrerender, this), e.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = [];
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
  setShaderGenerator({ vertex: e = Ft.defaultVertexSrc, fragment: t = Ft.defaultFragmentTemplate } = {}) {
    this.shaderGenerator = new sA(e, t);
  }
  contextChange() {
    const e = this.renderer.gl;
    z.PREFER_ENV === qn.WEBGL_LEGACY ? this.maxTextures = 1 : (this.maxTextures = Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), Ft.defaultMaxTextures), this.maxTextures = Ob(this.maxTextures, e)), this._shader = this.shaderGenerator.generateShader(this.maxTextures);
    for (let t = 0; t < this._packedGeometryPoolSize; t++) this._packedGeometries[t] = new this.geometryClass();
    this.initFlushBuffers();
  }
  initFlushBuffers() {
    const { _drawCallPool: e, _textureArrayPool: t } = Ft, n = this.size / 4, i = Math.floor(n / this.maxTextures) + 1;
    for (; e.length < n; ) e.push(new Kc());
    for (; t.length < i; ) t.push(new Jc());
    for (let s = 0; s < this.maxTextures; s++) this._tempBoundTextures[s] = null;
  }
  onPrerender() {
    this._flushId = 0;
  }
  render(e) {
    e._texture.valid && (this._vertexCount + e.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += e.vertexData.length / 2, this._indexCount += e.indices.length, this._bufferedTextures[this._bufferSize] = e._texture.baseTexture, this._bufferedElements[this._bufferSize++] = e);
  }
  buildTexturesAndDrawCalls() {
    const { _bufferedTextures: e, maxTextures: t } = this, n = Ft._textureArrayPool, i = this.renderer.batch, s = this._tempBoundTextures, o = this.renderer.textureGC.count;
    let a = ++ee._globalBatch, l = 0, u = n[0], h = 0;
    i.copyBoundTextures(s, t);
    for (let c = 0; c < this._bufferSize; ++c) {
      const d = e[c];
      e[c] = null, d._batchEnabled !== a && (u.count >= t && (i.boundArray(u, s, a, t), this.buildDrawCalls(u, h, c), h = c, u = n[++l], ++a), d._batchEnabled = a, d.touched = o, u.elements[u.count++] = d);
    }
    u.count > 0 && (i.boundArray(u, s, a, t), this.buildDrawCalls(u, h, this._bufferSize), ++l, ++a);
    for (let c = 0; c < s.length; c++) s[c] = null;
    ee._globalBatch = a;
  }
  buildDrawCalls(e, t, n) {
    const { _bufferedElements: i, _attributeBuffer: s, _indexBuffer: o, vertexSize: a } = this, l = Ft._drawCallPool;
    let u = this._dcIndex, h = this._aIndex, c = this._iIndex, d = l[u];
    d.start = this._iIndex, d.texArray = e;
    for (let f = t; f < n; ++f) {
      const p = i[f], v = p._texture.baseTexture, _ = H_[v.alphaMode ? 1 : 0][p.blendMode];
      i[f] = null, t < f && d.blend !== _ && (d.size = c - d.start, t = f, d = l[++u], d.texArray = e, d.start = c), this.packInterleavedGeometry(p, s, o, h, c), h += p.vertexData.length / 2 * a, c += p.indices.length, d.blend = _;
    }
    t < n && (d.size = c - d.start, ++u), this._dcIndex = u, this._aIndex = h, this._iIndex = c;
  }
  bindAndClearTexArray(e) {
    const t = this.renderer.texture;
    for (let n = 0; n < e.count; n++) t.bind(e.elements[n], e.ids[n]), e.elements[n] = null;
    e.count = 0;
  }
  updateGeometry() {
    const { _packedGeometries: e, _attributeBuffer: t, _indexBuffer: n } = this;
    Ft.canUploadSameBuffer ? (e[this._flushId]._buffer.update(t.rawBinaryData), e[this._flushId]._indexBuffer.update(n), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, e[this._flushId] = new this.geometryClass()), e[this._flushId]._buffer.update(t.rawBinaryData), e[this._flushId]._indexBuffer.update(n), this.renderer.geometry.bind(e[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++);
  }
  drawBatches() {
    const e = this._dcIndex, { gl: t, state: n } = this.renderer, i = Ft._drawCallPool;
    let s = null;
    for (let o = 0; o < e; o++) {
      const { texArray: a, type: l, size: u, start: h, blend: c } = i[o];
      s !== a && (s = a, this.bindAndClearTexArray(a)), this.state.blendMode = c, n.set(this.state), t.drawElements(l, u, t.UNSIGNED_SHORT, h * 2);
    }
  }
  flush() {
    this._vertexCount !== 0 && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0);
  }
  start() {
    this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.maxTextures), this.renderer.shader.bind(this._shader), Ft.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
  }
  stop() {
    this.flush();
  }
  destroy() {
    for (let e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] && this._packedGeometries[e].destroy();
    this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), super.destroy();
  }
  getAttributeBuffer(e) {
    const t = Sl(Math.ceil(e / 8)), n = Km(t), i = t * 8;
    this._aBuffers.length <= n && (this._iBuffers.length = n + 1);
    let s = this._aBuffers[i];
    return s || (this._aBuffers[i] = s = new Wc(i * this.vertexSize * 4)), s;
  }
  getIndexBuffer(e) {
    const t = Sl(Math.ceil(e / 12)), n = Km(t), i = t * 12;
    this._iBuffers.length <= n && (this._iBuffers.length = n + 1);
    let s = this._iBuffers[n];
    return s || (this._iBuffers[n] = s = new Uint16Array(i)), s;
  }
  packInterleavedGeometry(e, t, n, i, s) {
    const { uint32View: o, float32View: a } = t, l = i / this.vertexSize, u = e.uvs, h = e.indices, c = e.vertexData, d = e._texture.baseTexture._batchLocation, f = Math.min(e.worldAlpha, 1), p = me.shared.setValue(e._tintRGB).toPremultiplied(f, e._texture.baseTexture.alphaMode > 0);
    for (let v = 0; v < c.length; v += 2) a[i++] = c[v], a[i++] = c[v + 1], a[i++] = u[v], a[i++] = u[v + 1], o[i++] = p, a[i++] = d;
    for (let v = 0; v < h.length; v++) n[s++] = l + h[v];
  }
};
Ss.defaultBatchSize = 4096, Ss.extension = { name: "batch", type: L.RendererPlugin }, Ss._drawCallPool = [], Ss._textureArrayPool = [];
let Sn = Ss;
X.add(Sn);
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
const ed = class bs extends dr {
  constructor(e, t, n) {
    const i = br.from(e || bs.defaultVertexSrc, t || bs.defaultFragmentSrc);
    super(i, n), this.padding = 0, this.resolution = bs.defaultResolution, this.multisample = bs.defaultMultisample, this.enabled = true, this.autoFit = true, this.state = new pr();
  }
  apply(e, t, n, i, s) {
    e.applyFilter(this, t, n, i);
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
ed.defaultResolution = 1, ed.defaultMultisample = ke.NONE;
let it = ed;
class Cl {
  constructor() {
    this.clearBeforeRender = true, this._backgroundColor = new me(0), this.alpha = 1;
  }
  init(e) {
    this.clearBeforeRender = e.clearBeforeRender;
    const { backgroundColor: t, background: n, backgroundAlpha: i } = e, s = n ?? t;
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
Cl.defaultOptions = { backgroundAlpha: 1, backgroundColor: 0, clearBeforeRender: true }, Cl.extension = { type: [L.RendererSystem, L.CanvasRendererSystem], name: "background" };
X.add(Cl);
class Q_ {
  constructor(e) {
    this.renderer = e, this.emptyRenderer = new du(e), this.currentRenderer = this.emptyRenderer;
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
  copyBoundTextures(e, t) {
    const { boundTextures: n } = this.renderer.texture;
    for (let i = t - 1; i >= 0; --i) e[i] = n[i] || null, e[i] && (e[i]._batchLocation = i);
  }
  boundArray(e, t, n, i) {
    const { elements: s, ids: o, count: a } = e;
    let l = 0;
    for (let u = 0; u < a; u++) {
      const h = s[u], c = h._batchLocation;
      if (c >= 0 && c < i && t[c] === h) {
        o[u] = c;
        continue;
      }
      for (; l < i; ) {
        const d = t[l];
        if (d && d._batchEnabled === n && d._batchLocation === l) {
          l++;
          continue;
        }
        o[u] = l, h._batchLocation = l, t[l] = h;
        break;
      }
    }
  }
  destroy() {
    this.renderer = null;
  }
}
Q_.extension = { type: L.RendererSystem, name: "batch" };
X.add(Q_);
let og = 0;
class Il {
  constructor(e) {
    this.renderer = e, this.webGLVersion = 1, this.extensions = {}, this.supports = { uint32Indices: false }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this);
  }
  get isLost() {
    return !this.gl || this.gl.isContextLost();
  }
  contextChange(e) {
    this.gl = e, this.renderer.gl = e, this.renderer.CONTEXT_UID = og++;
  }
  init(e) {
    if (e.context) this.initFromContext(e.context);
    else {
      const t = this.renderer.background.alpha < 1, n = e.premultipliedAlpha;
      this.preserveDrawingBuffer = e.preserveDrawingBuffer, this.useContextAlpha = e.useContextAlpha, this.powerPreference = e.powerPreference, this.initFromOptions({ alpha: t, premultipliedAlpha: n, antialias: e.antialias, stencil: true, preserveDrawingBuffer: e.preserveDrawingBuffer, powerPreference: e.powerPreference });
    }
  }
  initFromContext(e) {
    this.gl = e, this.validateContext(e), this.renderer.gl = e, this.renderer.CONTEXT_UID = og++, this.renderer.runners.contextChange.emit(e);
    const t = this.renderer.view;
    t.addEventListener !== void 0 && (t.addEventListener("webglcontextlost", this.handleContextLost, false), t.addEventListener("webglcontextrestored", this.handleContextRestored, false));
  }
  initFromOptions(e) {
    const t = this.createContext(this.renderer.view, e);
    this.initFromContext(t);
  }
  createContext(e, t) {
    let n;
    if (z.PREFER_ENV >= qn.WEBGL2 && (n = e.getContext("webgl2", t)), n) this.webGLVersion = 2;
    else if (this.webGLVersion = 1, n = e.getContext("webgl", t) || e.getContext("experimental-webgl", t), !n) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
    return this.gl = n, this.getExtensions(), this.gl;
  }
  getExtensions() {
    const { gl: e } = this, t = { loseContext: e.getExtension("WEBGL_lose_context"), anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"), floatTextureLinear: e.getExtension("OES_texture_float_linear"), s3tc: e.getExtension("WEBGL_compressed_texture_s3tc"), s3tc_sRGB: e.getExtension("WEBGL_compressed_texture_s3tc_srgb"), etc: e.getExtension("WEBGL_compressed_texture_etc"), etc1: e.getExtension("WEBGL_compressed_texture_etc1"), pvrtc: e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), atc: e.getExtension("WEBGL_compressed_texture_atc"), astc: e.getExtension("WEBGL_compressed_texture_astc"), bptc: e.getExtension("EXT_texture_compression_bptc") };
    this.webGLVersion === 1 ? Object.assign(this.extensions, t, { drawBuffers: e.getExtension("WEBGL_draw_buffers"), depthTexture: e.getExtension("WEBGL_depth_texture"), vertexArrayObject: e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object"), uint32ElementIndex: e.getExtension("OES_element_index_uint"), floatTexture: e.getExtension("OES_texture_float"), floatTextureLinear: e.getExtension("OES_texture_float_linear"), textureHalfFloat: e.getExtension("OES_texture_half_float"), textureHalfFloatLinear: e.getExtension("OES_texture_half_float_linear") }) : this.webGLVersion === 2 && Object.assign(this.extensions, t, { colorBufferFloat: e.getExtension("EXT_color_buffer_float") });
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
    const t = e.getContextAttributes(), n = "WebGL2RenderingContext" in globalThis && e instanceof globalThis.WebGL2RenderingContext;
    n && (this.webGLVersion = 2), t && !t.stencil && console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
    const i = n || !!e.getExtension("OES_element_index_uint");
    this.supports.uint32Indices = i, i || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly");
  }
}
Il.defaultOptions = { context: null, antialias: false, premultipliedAlpha: true, preserveDrawingBuffer: false, powerPreference: "default" }, Il.extension = { type: L.RendererSystem, name: "context" };
X.add(Il);
class td {
  constructor(e, t) {
    if (this.width = Math.round(e), this.height = Math.round(t), !this.width || !this.height) throw new Error("Framebuffer width or height is zero");
    this.stencil = false, this.depth = false, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new $t("disposeFramebuffer"), this.multisample = ke.NONE;
  }
  get colorTexture() {
    return this.colorTextures[0];
  }
  addColorTexture(e = 0, t) {
    return this.colorTextures[e] = t || new ee(null, { scaleMode: Er.NEAREST, resolution: 1, mipmap: fr.OFF, width: this.width, height: this.height }), this.dirtyId++, this.dirtyFormat++, this;
  }
  addDepthTexture(e) {
    return this.depthTexture = e || new ee(null, { scaleMode: Er.NEAREST, resolution: 1, width: this.width, height: this.height, mipmap: fr.OFF, format: F.DEPTH_COMPONENT, type: K.UNSIGNED_SHORT }), this.dirtyId++, this.dirtyFormat++, this;
  }
  enableDepth() {
    return this.depth = true, this.dirtyId++, this.dirtyFormat++, this;
  }
  enableStencil() {
    return this.stencil = true, this.dirtyId++, this.dirtyFormat++, this;
  }
  resize(e, t) {
    if (e = Math.round(e), t = Math.round(t), !e || !t) throw new Error("Framebuffer width and height must not be zero");
    if (!(e === this.width && t === this.height)) {
      this.width = e, this.height = t, this.dirtyId++, this.dirtySize++;
      for (let n = 0; n < this.colorTextures.length; n++) {
        const i = this.colorTextures[n], s = i.resolution;
        i.setSize(e / s, t / s);
      }
      if (this.depthTexture) {
        const n = this.depthTexture.resolution;
        this.depthTexture.setSize(e / n, t / n);
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
class J_ extends ee {
  constructor(e = {}) {
    if (typeof e == "number") {
      const t = arguments[0], n = arguments[1], i = arguments[2], s = arguments[3];
      e = { width: t, height: n, scaleMode: i, resolution: s };
    }
    e.width = e.width ?? 100, e.height = e.height ?? 100, e.multisample ?? (e.multisample = ke.NONE), super(null, e), this.mipmap = fr.OFF, this.valid = true, this._clear = new me([0, 0, 0, 0]), this.framebuffer = new td(this.realWidth, this.realHeight).addColorTexture(0, this), this.framebuffer.multisample = e.multisample, this.maskStack = [], this.filterStack = [{}];
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
  resize(e, t) {
    this.framebuffer.resize(e * this.resolution, t * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height);
  }
  dispose() {
    this.framebuffer.dispose(), super.dispose();
  }
  destroy() {
    super.destroy(), this.framebuffer.destroyDepthTexture(), this.framebuffer = null;
  }
}
class Dr extends yo {
  constructor(e) {
    const t = e, n = t.naturalWidth || t.videoWidth || t.displayWidth || t.width, i = t.naturalHeight || t.videoHeight || t.displayHeight || t.height;
    super(n, i), this.source = e, this.noSubImage = false;
  }
  static crossOrigin(e, t, n) {
    n === void 0 && !t.startsWith("data:") ? e.crossOrigin = Fb(t) : n !== false && (e.crossOrigin = typeof n == "string" ? n : "anonymous");
  }
  upload(e, t, n, i) {
    const s = e.gl, o = t.realWidth, a = t.realHeight;
    if (i = i || this.source, typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) {
      if (!i.complete || i.naturalWidth === 0) return false;
    } else if (typeof HTMLVideoElement < "u" && i instanceof HTMLVideoElement && i.readyState <= 1) return false;
    return s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === ht.UNPACK), !this.noSubImage && t.target === s.TEXTURE_2D && n.width === o && n.height === a ? s.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, t.format, n.type, i) : (n.width = o, n.height = a, s.texImage2D(t.target, 0, n.internalFormat, t.format, n.type, i)), true;
  }
  update() {
    if (this.destroyed) return;
    const e = this.source, t = e.naturalWidth || e.videoWidth || e.width, n = e.naturalHeight || e.videoHeight || e.height;
    this.resize(t, n), super.update();
  }
  dispose() {
    this.source = null;
  }
}
class e0 extends Dr {
  constructor(e, t) {
    if (t = t || {}, typeof e == "string") {
      const n = new Image();
      Dr.crossOrigin(n, e, t.crossorigin), n.src = e, e = n;
    }
    super(e), !e.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = e.src, this._process = null, this.preserveBitmap = false, this.createBitmap = (t.createBitmap ?? z.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, this.alphaMode = typeof t.alphaMode == "number" ? t.alphaMode : null, this.bitmap = null, this._load = null, t.autoLoad !== false && this.load();
  }
  load(e) {
    return this._load ? this._load : (e !== void 0 && (this.createBitmap = e), this._load = new Promise((t, n) => {
      const i = this.source;
      this.url = i.src;
      const s = () => {
        this.destroyed || (i.onload = null, i.onerror = null, this.update(), this._load = null, this.createBitmap ? t(this.process()) : t(this));
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
    const t = globalThis.createImageBitmap, n = !e.crossOrigin || e.crossOrigin === "anonymous";
    return this._process = fetch(e.src, { mode: n ? "cors" : "no-cors" }).then((i) => i.blob()).then((i) => t(i, 0, 0, e.width, e.height, { premultiplyAlpha: this.alphaMode === null || this.alphaMode === ht.UNPACK ? "premultiply" : "none" })).then((i) => this.destroyed ? Promise.reject() : (this.bitmap = i, this.update(), this._process = null, Promise.resolve(this))), this._process;
  }
  upload(e, t, n) {
    if (typeof this.alphaMode == "number" && (t.alphaMode = this.alphaMode), !this.createBitmap) return super.upload(e, t, n);
    if (!this.bitmap && (this.process(), !this.bitmap)) return false;
    if (super.upload(e, t, n, this.bitmap), !this.preserveBitmap) {
      let i = true;
      const s = t._glTextures;
      for (const o in s) {
        const a = s[o];
        if (a !== n && a.dirtyId !== t.dirtyId) {
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
class Of {
  constructor() {
    this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8);
  }
  set(e, t, n) {
    const i = t.width, s = t.height;
    if (n) {
      const o = e.width / 2 / i, a = e.height / 2 / s, l = e.x / i + o, u = e.y / s + a;
      n = xe.add(n, xe.NW), this.x0 = l + o * xe.uX(n), this.y0 = u + a * xe.uY(n), n = xe.add(n, 2), this.x1 = l + o * xe.uX(n), this.y1 = u + a * xe.uY(n), n = xe.add(n, 2), this.x2 = l + o * xe.uX(n), this.y2 = u + a * xe.uY(n), n = xe.add(n, 2), this.x3 = l + o * xe.uX(n), this.y3 = u + a * xe.uY(n);
    } else this.x0 = e.x / i, this.y0 = e.y / s, this.x1 = (e.x + e.width) / i, this.y1 = e.y / s, this.x2 = (e.x + e.width) / i, this.y2 = (e.y + e.height) / s, this.x3 = e.x / i, this.y3 = (e.y + e.height) / s;
    this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3;
  }
}
Of.prototype.toString = function() {
  return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`;
};
const ag = new Of();
function la(r5) {
  r5.destroy = function() {
  }, r5.on = function() {
  }, r5.once = function() {
  }, r5.emit = function() {
  };
}
class W extends bo {
  constructor(e, t, n, i, s, o, a) {
    if (super(), this.noFrame = false, t || (this.noFrame = true, t = new te(0, 0, 1, 1)), e instanceof W && (e = e.baseTexture), this.baseTexture = e, this._frame = t, this.trim = i, this.valid = false, this.destroyed = false, this._uvs = ag, this.uvMatrix = null, this.orig = n || t, this._rotate = Number(s || 0), s === true) this._rotate = 2;
    else if (this._rotate % 2 !== 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
    this.defaultAnchor = o ? new le(o.x, o.y) : new le(0, 0), this.defaultBorders = a, this._updateID = 0, this.textureCacheIds = [], e.valid ? this.noFrame ? e.valid && this.onBaseTextureUpdated(e) : this.frame = t : e.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && e.on("update", this.onBaseTextureUpdated, this);
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
        const { resource: t } = this.baseTexture;
        (t == null ? void 0 : t.url) && Jt[t.url] && W.removeFromCache(t.url), this.baseTexture.destroy();
      }
      this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null;
    }
    this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = false, W.removeFromCache(this), this.textureCacheIds = null, this.destroyed = true, this.emit("destroyed", this), this.removeAllListeners();
  }
  clone() {
    var _a2;
    const e = this._frame.clone(), t = this._frame === this.orig ? e : this.orig.clone(), n = new W(this.baseTexture, !this.noFrame && e, t, (_a2 = this.trim) == null ? void 0 : _a2.clone(), this.rotate, this.defaultAnchor, this.defaultBorders);
    return this.noFrame && (n._frame = e), n;
  }
  updateUvs() {
    this._uvs === ag && (this._uvs = new Of()), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++;
  }
  static from(e, t = {}, n = z.STRICT_TEXTURE_CACHE) {
    const i = typeof e == "string";
    let s = null;
    if (i) s = e;
    else if (e instanceof ee) {
      if (!e.cacheId) {
        const a = (t == null ? void 0 : t.pixiIdPrefix) || "pixiid";
        e.cacheId = `${a}-${Wn()}`, ee.addToCache(e, e.cacheId);
      }
      s = e.cacheId;
    } else {
      if (!e._pixiId) {
        const a = (t == null ? void 0 : t.pixiIdPrefix) || "pixiid";
        e._pixiId = `${a}_${Wn()}`;
      }
      s = e._pixiId;
    }
    let o = Jt[s];
    if (i && n && !o) throw new Error(`The cacheId "${s}" does not exist in TextureCache.`);
    return !o && !(e instanceof ee) ? (t.resolution || (t.resolution = kr(e)), o = new W(new ee(e, t)), o.baseTexture.cacheId = s, ee.addToCache(o.baseTexture, s), W.addToCache(o, s)) : !o && e instanceof ee && (o = new W(e), W.addToCache(o, s)), o;
  }
  static fromURL(e, t) {
    const n = Object.assign({ autoLoad: false }, t == null ? void 0 : t.resourceOptions), i = W.from(e, Object.assign({ resourceOptions: n }, t), false), s = i.baseTexture.resource;
    return i.baseTexture.valid ? Promise.resolve(i) : s.load().then(() => Promise.resolve(i));
  }
  static fromBuffer(e, t, n, i) {
    return new W(ee.fromBuffer(e, t, n, i));
  }
  static fromLoader(e, t, n, i) {
    const s = new ee(e, Object.assign({ scaleMode: ee.defaultOptions.scaleMode, resolution: kr(t) }, i)), { resource: o } = s;
    o instanceof e0 && (o.url = t);
    const a = new W(s);
    return n || (n = t), ee.addToCache(a.baseTexture, n), W.addToCache(a, n), n !== t && (ee.addToCache(a.baseTexture, t), W.addToCache(a, t)), a.baseTexture.valid ? Promise.resolve(a) : new Promise((l) => {
      a.baseTexture.once("loaded", () => l(a));
    });
  }
  static addToCache(e, t) {
    t && (e.textureCacheIds.includes(t) || e.textureCacheIds.push(t), Jt[t] && Jt[t] !== e && console.warn(`Texture added to the cache with an id [${t}] that already had an entry`), Jt[t] = e);
  }
  static removeFromCache(e) {
    if (typeof e == "string") {
      const t = Jt[e];
      if (t) {
        const n = t.textureCacheIds.indexOf(e);
        return n > -1 && t.textureCacheIds.splice(n, 1), delete Jt[e], t;
      }
    } else if (e == null ? void 0 : e.textureCacheIds) {
      for (let t = 0; t < e.textureCacheIds.length; ++t) Jt[e.textureCacheIds[t]] === e && delete Jt[e.textureCacheIds[t]];
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
    const { x: t, y: n, width: i, height: s } = e, o = t + i > this.baseTexture.width, a = n + s > this.baseTexture.height;
    if (o || a) {
      const l = o && a ? "and" : "or", u = `X: ${t} + ${i} = ${t + i} > ${this.baseTexture.width}`, h = `Y: ${n} + ${s} = ${n + s} > ${this.baseTexture.height}`;
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
    return W._EMPTY || (W._EMPTY = new W(new ee()), la(W._EMPTY), la(W._EMPTY.baseTexture)), W._EMPTY;
  }
  static get WHITE() {
    if (!W._WHITE) {
      const e = z.ADAPTER.createCanvas(16, 16), t = e.getContext("2d");
      e.width = 16, e.height = 16, t.fillStyle = "white", t.fillRect(0, 0, 16, 16), W._WHITE = new W(ee.from(e)), la(W._WHITE), la(W._WHITE.baseTexture);
    }
    return W._WHITE;
  }
}
class Qn extends W {
  constructor(e, t) {
    super(e, t), this.valid = true, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs();
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
  resize(e, t, n = true) {
    const i = this.baseTexture.resolution, s = Math.round(e * i) / i, o = Math.round(t * i) / i;
    this.valid = s > 0 && o > 0, this._frame.width = this.orig.width = s, this._frame.height = this.orig.height = o, n && this.baseTexture.resize(s, o), this.updateUvs();
  }
  setResolution(e) {
    const { baseTexture: t } = this;
    t.resolution !== e && (t.setResolution(e), this.resize(t.width, t.height, false));
  }
  static create(e) {
    return new Qn(new J_(e));
  }
}
class t0 {
  constructor(e) {
    this.texturePool = {}, this.textureOptions = e || {}, this.enableFullScreen = false, this._pixelsWidth = 0, this._pixelsHeight = 0;
  }
  createTexture(e, t, n = ke.NONE) {
    const i = new J_(Object.assign({ width: e, height: t, resolution: 1, multisample: n }, this.textureOptions));
    return new Qn(i);
  }
  getOptimalTexture(e, t, n = 1, i = ke.NONE) {
    let s;
    e = Math.max(Math.ceil(e * n - 1e-6), 1), t = Math.max(Math.ceil(t * n - 1e-6), 1), !this.enableFullScreen || e !== this._pixelsWidth || t !== this._pixelsHeight ? (e = Sl(e), t = Sl(t), s = ((e & 65535) << 16 | t & 65535) >>> 0, i > 1 && (s += i * 4294967296)) : s = i > 1 ? -i : -1, this.texturePool[s] || (this.texturePool[s] = []);
    let o = this.texturePool[s].pop();
    return o || (o = this.createTexture(e, t, i)), o.filterPoolKey = s, o.setResolution(n), o;
  }
  getFilterTexture(e, t, n) {
    const i = this.getOptimalTexture(e.width, e.height, t || e.resolution, n || ke.NONE);
    return i.filterFrame = e.filterFrame, i;
  }
  returnTexture(e) {
    const t = e.filterPoolKey;
    e.filterFrame = null, this.texturePool[t].push(e);
  }
  returnFilterTexture(e) {
    this.returnTexture(e);
  }
  clear(e) {
    if (e = e !== false, e) for (const t in this.texturePool) {
      const n = this.texturePool[t];
      if (n) for (let i = 0; i < n.length; i++) n[i].destroy(true);
    }
    this.texturePool = {};
  }
  setScreenSize(e) {
    if (!(e.width === this._pixelsWidth && e.height === this._pixelsHeight)) {
      this.enableFullScreen = e.width > 0 && e.height > 0;
      for (const t in this.texturePool) {
        if (!(Number(t) < 0)) continue;
        const n = this.texturePool[t];
        if (n) for (let i = 0; i < n.length; i++) n[i].destroy(true);
        this.texturePool[t] = [];
      }
      this._pixelsWidth = e.width, this._pixelsHeight = e.height;
    }
  }
}
t0.SCREEN_KEY = -1;
class dA extends un {
  constructor() {
    super(), this.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2]);
  }
}
class r0 extends un {
  constructor() {
    super(), this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertexBuffer = new Re(this.vertices), this.uvBuffer = new Re(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
  }
  map(e, t) {
    let n = 0, i = 0;
    return this.uvs[0] = n, this.uvs[1] = i, this.uvs[2] = n + t.width / e.width, this.uvs[3] = i, this.uvs[4] = n + t.width / e.width, this.uvs[5] = i + t.height / e.height, this.uvs[6] = n, this.uvs[7] = i + t.height / e.height, n = t.x, i = t.y, this.vertices[0] = n, this.vertices[1] = i, this.vertices[2] = n + t.width, this.vertices[3] = i, this.vertices[4] = n + t.width, this.vertices[5] = i + t.height, this.vertices[6] = n, this.vertices[7] = i + t.height, this.invalidate(), this;
  }
  invalidate() {
    return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this;
  }
}
class fA {
  constructor() {
    this.renderTexture = null, this.target = null, this.legacy = false, this.resolution = 1, this.multisample = ke.NONE, this.sourceFrame = new te(), this.destinationFrame = new te(), this.bindingSourceFrame = new te(), this.bindingDestinationFrame = new te(), this.filters = [], this.transform = null;
  }
  clear() {
    this.target = null, this.filters = null, this.renderTexture = null;
  }
}
const ua = [new le(), new le(), new le(), new le()], xh = new ye();
class n0 {
  constructor(e) {
    this.renderer = e, this.defaultFilterStack = [{}], this.texturePool = new t0(), this.statePool = [], this.quad = new dA(), this.quadUv = new r0(), this.tempRect = new te(), this.activeState = {}, this.globalUniforms = new jt({ outputFrame: new te(), inputSize: new Float32Array(4), inputPixel: new Float32Array(4), inputClamp: new Float32Array(4), resolution: 1, filterArea: new Float32Array(4), filterClamp: new Float32Array(4) }, true), this.forceClear = false, this.useMaxPadding = false;
  }
  init() {
    this.texturePool.setScreenSize(this.renderer.view);
  }
  push(e, t) {
    const n = this.renderer, i = this.defaultFilterStack, s = this.statePool.pop() || new fA(), o = n.renderTexture;
    let a, l;
    if (o.current) {
      const _ = o.current;
      a = _.resolution, l = _.multisample;
    } else a = n.resolution, l = n.multisample;
    let u = t[0].resolution || a, h = t[0].multisample ?? l, c = t[0].padding, d = t[0].autoFit, f = t[0].legacy ?? true;
    for (let _ = 1; _ < t.length; _++) {
      const g = t[_];
      u = Math.min(u, g.resolution || a), h = Math.min(h, g.multisample ?? l), c = this.useMaxPadding ? Math.max(c, g.padding) : c + g.padding, d = d && g.autoFit, f = f || (g.legacy ?? true);
    }
    i.length === 1 && (this.defaultFilterStack[0].renderTexture = o.current), i.push(s), s.resolution = u, s.multisample = h, s.legacy = f, s.target = e, s.sourceFrame.copyFrom(e.filterArea || e.getBounds(true)), s.sourceFrame.pad(c);
    const p = this.tempRect.copyFrom(o.sourceFrame);
    n.projection.transform && this.transformAABB(xh.copyFrom(n.projection.transform).invert(), p), d ? (s.sourceFrame.fit(p), (s.sourceFrame.width <= 0 || s.sourceFrame.height <= 0) && (s.sourceFrame.width = 0, s.sourceFrame.height = 0)) : s.sourceFrame.intersects(p) || (s.sourceFrame.width = 0, s.sourceFrame.height = 0), this.roundFrame(s.sourceFrame, o.current ? o.current.resolution : n.resolution, o.sourceFrame, o.destinationFrame, n.projection.transform), s.renderTexture = this.getOptimalFilterTexture(s.sourceFrame.width, s.sourceFrame.height, u, h), s.filters = t, s.destinationFrame.width = s.renderTexture.width, s.destinationFrame.height = s.renderTexture.height;
    const v = this.tempRect;
    v.x = 0, v.y = 0, v.width = s.sourceFrame.width, v.height = s.sourceFrame.height, s.renderTexture.filterFrame = s.sourceFrame, s.bindingSourceFrame.copyFrom(o.sourceFrame), s.bindingDestinationFrame.copyFrom(o.destinationFrame), s.transform = n.projection.transform, n.projection.transform = null, o.bind(s.renderTexture, s.sourceFrame, v), n.framebuffer.clear(0, 0, 0, 0);
  }
  pop() {
    const e = this.defaultFilterStack, t = e.pop(), n = t.filters;
    this.activeState = t;
    const i = this.globalUniforms.uniforms;
    i.outputFrame = t.sourceFrame, i.resolution = t.resolution;
    const s = i.inputSize, o = i.inputPixel, a = i.inputClamp;
    if (s[0] = t.destinationFrame.width, s[1] = t.destinationFrame.height, s[2] = 1 / s[0], s[3] = 1 / s[1], o[0] = Math.round(s[0] * t.resolution), o[1] = Math.round(s[1] * t.resolution), o[2] = 1 / o[0], o[3] = 1 / o[1], a[0] = 0.5 * o[2], a[1] = 0.5 * o[3], a[2] = t.sourceFrame.width * s[2] - 0.5 * o[2], a[3] = t.sourceFrame.height * s[3] - 0.5 * o[3], t.legacy) {
      const u = i.filterArea;
      u[0] = t.destinationFrame.width, u[1] = t.destinationFrame.height, u[2] = t.sourceFrame.x, u[3] = t.sourceFrame.y, i.filterClamp = i.inputClamp;
    }
    this.globalUniforms.update();
    const l = e[e.length - 1];
    if (this.renderer.framebuffer.blit(), n.length === 1) n[0].apply(this, t.renderTexture, l.renderTexture, sr.BLEND, t), this.returnFilterTexture(t.renderTexture);
    else {
      let u = t.renderTexture, h = this.getOptimalFilterTexture(u.width, u.height, t.resolution);
      h.filterFrame = u.filterFrame;
      let c = 0;
      for (c = 0; c < n.length - 1; ++c) {
        c === 1 && t.multisample > 1 && (h = this.getOptimalFilterTexture(u.width, u.height, t.resolution), h.filterFrame = u.filterFrame), n[c].apply(this, u, h, sr.CLEAR, t);
        const d = u;
        u = h, h = d;
      }
      n[c].apply(this, u, l.renderTexture, sr.BLEND, t), c > 1 && t.multisample > 1 && this.returnFilterTexture(t.renderTexture), this.returnFilterTexture(u), this.returnFilterTexture(h);
    }
    t.clear(), this.statePool.push(t);
  }
  bindAndClear(e, t = sr.CLEAR) {
    const { renderTexture: n, state: i } = this.renderer;
    if (e === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, e == null ? void 0 : e.filterFrame) {
      const o = this.tempRect;
      o.x = 0, o.y = 0, o.width = e.filterFrame.width, o.height = e.filterFrame.height, n.bind(e, e.filterFrame, o);
    } else e !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? n.bind(e) : this.renderer.renderTexture.bind(e, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
    const s = i.stateId & 1 || this.forceClear;
    (t === sr.CLEAR || t === sr.BLIT && s) && this.renderer.framebuffer.clear(0, 0, 0, 0);
  }
  applyFilter(e, t, n, i) {
    const s = this.renderer;
    s.state.set(e.state), this.bindAndClear(n, i), e.uniforms.uSampler = t, e.uniforms.filterGlobals = this.globalUniforms, s.shader.bind(e), e.legacy = !!e.program.attributeData.aTextureCoord, e.legacy ? (this.quadUv.map(t._frame, t.filterFrame), s.geometry.bind(this.quadUv), s.geometry.draw(lr.TRIANGLES)) : (s.geometry.bind(this.quad), s.geometry.draw(lr.TRIANGLE_STRIP));
  }
  calculateSpriteMatrix(e, t) {
    const { sourceFrame: n, destinationFrame: i } = this.activeState, { orig: s } = t._texture, o = e.set(i.width, 0, 0, i.height, n.x, n.y), a = t.worldTransform.copyTo(ye.TEMP_MATRIX);
    return a.invert(), o.prepend(a), o.scale(1 / s.width, 1 / s.height), o.translate(t.anchor.x, t.anchor.y), o;
  }
  destroy() {
    this.renderer = null, this.texturePool.clear(false);
  }
  getOptimalFilterTexture(e, t, n = 1, i = ke.NONE) {
    return this.texturePool.getOptimalTexture(e, t, n, i);
  }
  getFilterTexture(e, t, n) {
    if (typeof e == "number") {
      const s = e;
      e = t, t = s;
    }
    e = e || this.activeState.renderTexture;
    const i = this.texturePool.getOptimalTexture(e.width, e.height, t || e.resolution, n || ke.NONE);
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
  transformAABB(e, t) {
    const n = ua[0], i = ua[1], s = ua[2], o = ua[3];
    n.set(t.left, t.top), i.set(t.left, t.bottom), s.set(t.right, t.top), o.set(t.right, t.bottom), e.apply(n, n), e.apply(i, i), e.apply(s, s), e.apply(o, o);
    const a = Math.min(n.x, i.x, s.x, o.x), l = Math.min(n.y, i.y, s.y, o.y), u = Math.max(n.x, i.x, s.x, o.x), h = Math.max(n.y, i.y, s.y, o.y);
    t.x = a, t.y = l, t.width = u - a, t.height = h - l;
  }
  roundFrame(e, t, n, i, s) {
    if (!(e.width <= 0 || e.height <= 0 || n.width <= 0 || n.height <= 0)) {
      if (s) {
        const { a: o, b: a, c: l, d: u } = s;
        if ((Math.abs(a) > 1e-4 || Math.abs(l) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(u) > 1e-4)) return;
      }
      s = s ? xh.copyFrom(s) : xh.identity(), s.translate(-n.x, -n.y).scale(i.width / n.width, i.height / n.height).translate(i.x, i.y), this.transformAABB(s, e), e.ceil(t), this.transformAABB(s.invert(), e);
    }
  }
}
n0.extension = { type: L.RendererSystem, name: "filter" };
X.add(n0);
class pA {
  constructor(e) {
    this.framebuffer = e, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = ke.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0;
  }
}
const mA = new te();
class i0 {
  constructor(e) {
    this.renderer = e, this.managedFramebuffers = [], this.unknownFramebuffer = new td(10, 10), this.msaaSamples = null;
  }
  contextChange() {
    this.disposeAll(true);
    const e = this.gl = this.renderer.gl;
    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new te(), this.hasMRT = true, this.writeDepthTexture = true, this.renderer.context.webGLVersion === 1) {
      let t = this.renderer.context.extensions.drawBuffers, n = this.renderer.context.extensions.depthTexture;
      z.PREFER_ENV === qn.WEBGL_LEGACY && (t = null, n = null), t ? e.drawBuffers = (i) => t.drawBuffersWEBGL(i) : (this.hasMRT = false, e.drawBuffers = () => {
      }), n || (this.writeDepthTexture = false);
    } else this.msaaSamples = e.getInternalformatParameter(e.RENDERBUFFER, e.RGBA8, e.SAMPLES);
  }
  bind(e, t, n = 0) {
    const { gl: i } = this;
    if (e) {
      const s = e.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(e);
      this.current !== e && (this.current = e, i.bindFramebuffer(i.FRAMEBUFFER, s.framebuffer)), s.mipLevel !== n && (e.dirtyId++, e.dirtyFormat++, s.mipLevel = n), s.dirtyId !== e.dirtyId && (s.dirtyId = e.dirtyId, s.dirtyFormat !== e.dirtyFormat ? (s.dirtyFormat = e.dirtyFormat, s.dirtySize = e.dirtySize, this.updateFramebuffer(e, n)) : s.dirtySize !== e.dirtySize && (s.dirtySize = e.dirtySize, this.resizeFramebuffer(e)));
      for (let o = 0; o < e.colorTextures.length; o++) {
        const a = e.colorTextures[o];
        this.renderer.texture.unbind(a.parentTextureArray || a);
      }
      if (e.depthTexture && this.renderer.texture.unbind(e.depthTexture), t) {
        const o = t.width >> n, a = t.height >> n, l = o / t.width;
        this.setViewport(t.x * l, t.y * l, o, a);
      } else {
        const o = e.width >> n, a = e.height >> n;
        this.setViewport(0, 0, o, a);
      }
    } else this.current && (this.current = null, i.bindFramebuffer(i.FRAMEBUFFER, null)), t ? this.setViewport(t.x, t.y, t.width, t.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
  }
  setViewport(e, t, n, i) {
    const s = this.viewport;
    e = Math.round(e), t = Math.round(t), n = Math.round(n), i = Math.round(i), (s.width !== n || s.height !== i || s.x !== e || s.y !== t) && (s.x = e, s.y = t, s.width = n, s.height = i, this.gl.viewport(e, t, n, i));
  }
  get size() {
    return this.current ? { x: 0, y: 0, width: this.current.width, height: this.current.height } : { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
  }
  clear(e, t, n, i, s = Pc.COLOR | Pc.DEPTH) {
    const { gl: o } = this;
    o.clearColor(e, t, n, i), o.clear(s);
  }
  initFramebuffer(e) {
    const { gl: t } = this, n = new pA(t.createFramebuffer());
    return n.multisample = this.detectSamples(e.multisample), e.glFramebuffers[this.CONTEXT_UID] = n, this.managedFramebuffers.push(e), e.disposeRunner.add(this), n;
  }
  resizeFramebuffer(e) {
    const { gl: t } = this, n = e.glFramebuffers[this.CONTEXT_UID];
    if (n.stencil) {
      t.bindRenderbuffer(t.RENDERBUFFER, n.stencil);
      let o;
      this.renderer.context.webGLVersion === 1 ? o = t.DEPTH_STENCIL : e.depth && e.stencil ? o = t.DEPTH24_STENCIL8 : e.depth ? o = t.DEPTH_COMPONENT24 : o = t.STENCIL_INDEX8, n.msaaBuffer ? t.renderbufferStorageMultisample(t.RENDERBUFFER, n.multisample, o, e.width, e.height) : t.renderbufferStorage(t.RENDERBUFFER, o, e.width, e.height);
    }
    const i = e.colorTextures;
    let s = i.length;
    t.drawBuffers || (s = Math.min(s, 1));
    for (let o = 0; o < s; o++) {
      const a = i[o], l = a.parentTextureArray || a;
      this.renderer.texture.bind(l, 0), o === 0 && n.msaaBuffer && (t.bindRenderbuffer(t.RENDERBUFFER, n.msaaBuffer), t.renderbufferStorageMultisample(t.RENDERBUFFER, n.multisample, l._glTextures[this.CONTEXT_UID].internalFormat, e.width, e.height));
    }
    e.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(e.depthTexture, 0);
  }
  updateFramebuffer(e, t) {
    const { gl: n } = this, i = e.glFramebuffers[this.CONTEXT_UID], s = e.colorTextures;
    let o = s.length;
    n.drawBuffers || (o = Math.min(o, 1)), i.multisample > 1 && this.canMultisampleFramebuffer(e) ? i.msaaBuffer = i.msaaBuffer || n.createRenderbuffer() : i.msaaBuffer && (n.deleteRenderbuffer(i.msaaBuffer), i.msaaBuffer = null, i.blitFramebuffer && (i.blitFramebuffer.dispose(), i.blitFramebuffer = null));
    const a = [];
    for (let l = 0; l < o; l++) {
      const u = s[l], h = u.parentTextureArray || u;
      this.renderer.texture.bind(h, 0), l === 0 && i.msaaBuffer ? (n.bindRenderbuffer(n.RENDERBUFFER, i.msaaBuffer), n.renderbufferStorageMultisample(n.RENDERBUFFER, i.multisample, h._glTextures[this.CONTEXT_UID].internalFormat, e.width, e.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, i.msaaBuffer)) : (n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + l, u.target, h._glTextures[this.CONTEXT_UID].texture, t), a.push(n.COLOR_ATTACHMENT0 + l));
    }
    if (a.length > 1 && n.drawBuffers(a), e.depthTexture && this.writeDepthTexture) {
      const l = e.depthTexture;
      this.renderer.texture.bind(l, 0), n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, t);
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
    const { msaaSamples: t } = this;
    let n = ke.NONE;
    if (e <= 1 || t === null) return n;
    for (let i = 0; i < t.length; i++) if (t[i] <= e) {
      n = t[i];
      break;
    }
    return n === 1 && (n = ke.NONE), n;
  }
  blit(e, t, n) {
    const { current: i, renderer: s, gl: o, CONTEXT_UID: a } = this;
    if (s.context.webGLVersion !== 2 || !i) return;
    const l = i.glFramebuffers[a];
    if (!l) return;
    if (!e) {
      if (!l.msaaBuffer) return;
      const h = i.colorTextures[0];
      if (!h) return;
      l.blitFramebuffer || (l.blitFramebuffer = new td(i.width, i.height), l.blitFramebuffer.addColorTexture(0, h)), e = l.blitFramebuffer, e.colorTextures[0] !== h && (e.colorTextures[0] = h, e.dirtyId++, e.dirtyFormat++), (e.width !== i.width || e.height !== i.height) && (e.width = i.width, e.height = i.height, e.dirtyId++, e.dirtySize++);
    }
    t || (t = mA, t.width = i.width, t.height = i.height), n || (n = t);
    const u = t.width === n.width && t.height === n.height;
    this.bind(e), o.bindFramebuffer(o.READ_FRAMEBUFFER, l.framebuffer), o.blitFramebuffer(t.left, t.top, t.right, t.bottom, n.left, n.top, n.right, n.bottom, o.COLOR_BUFFER_BIT, u ? o.NEAREST : o.LINEAR), o.bindFramebuffer(o.READ_FRAMEBUFFER, e.glFramebuffers[this.CONTEXT_UID].framebuffer);
  }
  disposeFramebuffer(e, t) {
    const n = e.glFramebuffers[this.CONTEXT_UID], i = this.gl;
    if (!n) return;
    delete e.glFramebuffers[this.CONTEXT_UID];
    const s = this.managedFramebuffers.indexOf(e);
    s >= 0 && this.managedFramebuffers.splice(s, 1), e.disposeRunner.remove(this), t || (i.deleteFramebuffer(n.framebuffer), n.msaaBuffer && i.deleteRenderbuffer(n.msaaBuffer), n.stencil && i.deleteRenderbuffer(n.stencil)), n.blitFramebuffer && this.disposeFramebuffer(n.blitFramebuffer, t);
  }
  disposeAll(e) {
    const t = this.managedFramebuffers;
    this.managedFramebuffers = [];
    for (let n = 0; n < t.length; n++) this.disposeFramebuffer(t[n], e);
  }
  forceStencil() {
    const e = this.current;
    if (!e) return;
    const t = e.glFramebuffers[this.CONTEXT_UID];
    if (!t || t.stencil && e.stencil) return;
    e.stencil = true;
    const n = e.width, i = e.height, s = this.gl, o = t.stencil = s.createRenderbuffer();
    s.bindRenderbuffer(s.RENDERBUFFER, o);
    let a, l;
    this.renderer.context.webGLVersion === 1 ? (a = s.DEPTH_STENCIL_ATTACHMENT, l = s.DEPTH_STENCIL) : e.depth ? (a = s.DEPTH_STENCIL_ATTACHMENT, l = s.DEPTH24_STENCIL8) : (a = s.STENCIL_ATTACHMENT, l = s.STENCIL_INDEX8), t.msaaBuffer ? s.renderbufferStorageMultisample(s.RENDERBUFFER, t.multisample, l, n, i) : s.renderbufferStorage(s.RENDERBUFFER, l, n, i), s.framebufferRenderbuffer(s.FRAMEBUFFER, a, s.RENDERBUFFER, o);
  }
  reset() {
    this.current = this.unknownFramebuffer, this.viewport = new te();
  }
  destroy() {
    this.renderer = null;
  }
}
i0.extension = { type: L.RendererSystem, name: "framebuffer" };
X.add(i0);
const wh = { 5126: 4, 5123: 2, 5121: 1 };
class s0 {
  constructor(e) {
    this.renderer = e, this._activeGeometry = null, this._activeVao = null, this.hasVao = true, this.hasInstance = true, this.canUseUInt32ElementIndex = false, this.managedGeometries = {};
  }
  contextChange() {
    this.disposeAll(true);
    const e = this.gl = this.renderer.gl, t = this.renderer.context;
    if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, t.webGLVersion !== 2) {
      let n = this.renderer.context.extensions.vertexArrayObject;
      z.PREFER_ENV === qn.WEBGL_LEGACY && (n = null), n ? (e.createVertexArray = () => n.createVertexArrayOES(), e.bindVertexArray = (i) => n.bindVertexArrayOES(i), e.deleteVertexArray = (i) => n.deleteVertexArrayOES(i)) : (this.hasVao = false, e.createVertexArray = () => null, e.bindVertexArray = () => null, e.deleteVertexArray = () => null);
    }
    if (t.webGLVersion !== 2) {
      const n = e.getExtension("ANGLE_instanced_arrays");
      n ? (e.vertexAttribDivisor = (i, s) => n.vertexAttribDivisorANGLE(i, s), e.drawElementsInstanced = (i, s, o, a, l) => n.drawElementsInstancedANGLE(i, s, o, a, l), e.drawArraysInstanced = (i, s, o, a) => n.drawArraysInstancedANGLE(i, s, o, a)) : this.hasInstance = false;
    }
    this.canUseUInt32ElementIndex = t.webGLVersion === 2 || !!t.extensions.uint32ElementIndex;
  }
  bind(e, t) {
    t = t || this.renderer.shader.shader;
    const { gl: n } = this;
    let i = e.glVertexArrayObjects[this.CONTEXT_UID], s = false;
    i || (this.managedGeometries[e.id] = e, e.disposeRunner.add(this), e.glVertexArrayObjects[this.CONTEXT_UID] = i = {}, s = true);
    const o = i[t.program.id] || this.initGeometryVao(e, t, s);
    this._activeGeometry = e, this._activeVao !== o && (this._activeVao = o, this.hasVao ? n.bindVertexArray(o) : this.activateVao(e, t.program)), this.updateBuffers();
  }
  reset() {
    this.unbind();
  }
  updateBuffers() {
    const e = this._activeGeometry, t = this.renderer.buffer;
    for (let n = 0; n < e.buffers.length; n++) {
      const i = e.buffers[n];
      t.update(i);
    }
  }
  checkCompatibility(e, t) {
    const n = e.attributes, i = t.attributeData;
    for (const s in i) if (!n[s]) throw new Error(`shader and geometry incompatible, geometry missing the "${s}" attribute`);
  }
  getSignature(e, t) {
    const n = e.attributes, i = t.attributeData, s = ["g", e.id];
    for (const o in n) i[o] && s.push(o, i[o].location);
    return s.join("-");
  }
  initGeometryVao(e, t, n = true) {
    const i = this.gl, s = this.CONTEXT_UID, o = this.renderer.buffer, a = t.program;
    a.glPrograms[s] || this.renderer.shader.generateProgram(t), this.checkCompatibility(e, a);
    const l = this.getSignature(e, a), u = e.glVertexArrayObjects[this.CONTEXT_UID];
    let h = u[l];
    if (h) return u[a.id] = h, h;
    const c = e.buffers, d = e.attributes, f = {}, p = {};
    for (const v in c) f[v] = 0, p[v] = 0;
    for (const v in d) !d[v].size && a.attributeData[v] ? d[v].size = a.attributeData[v].size : d[v].size || console.warn(`PIXI Geometry attribute '${v}' size cannot be determined (likely the bound shader does not have the attribute)`), f[d[v].buffer] += d[v].size * wh[d[v].type];
    for (const v in d) {
      const _ = d[v], g = _.size;
      _.stride === void 0 && (f[_.buffer] === g * wh[_.type] ? _.stride = 0 : _.stride = f[_.buffer]), _.start === void 0 && (_.start = p[_.buffer], p[_.buffer] += g * wh[_.type]);
    }
    h = i.createVertexArray(), i.bindVertexArray(h);
    for (let v = 0; v < c.length; v++) {
      const _ = c[v];
      o.bind(_), n && _._glBuffers[s].refCount++;
    }
    return this.activateVao(e, a), u[a.id] = h, u[l] = h, i.bindVertexArray(null), o.unbind(cr.ARRAY_BUFFER), h;
  }
  disposeGeometry(e, t) {
    var _a2;
    if (!this.managedGeometries[e.id]) return;
    delete this.managedGeometries[e.id];
    const n = e.glVertexArrayObjects[this.CONTEXT_UID], i = this.gl, s = e.buffers, o = (_a2 = this.renderer) == null ? void 0 : _a2.buffer;
    if (e.disposeRunner.remove(this), !!n) {
      if (o) for (let a = 0; a < s.length; a++) {
        const l = s[a]._glBuffers[this.CONTEXT_UID];
        l && (l.refCount--, l.refCount === 0 && !t && o.dispose(s[a], t));
      }
      if (!t) {
        for (const a in n) if (a[0] === "g") {
          const l = n[a];
          this._activeVao === l && this.unbind(), i.deleteVertexArray(l);
        }
      }
      delete e.glVertexArrayObjects[this.CONTEXT_UID];
    }
  }
  disposeAll(e) {
    const t = Object.keys(this.managedGeometries);
    for (let n = 0; n < t.length; n++) this.disposeGeometry(this.managedGeometries[t[n]], e);
  }
  activateVao(e, t) {
    const n = this.gl, i = this.CONTEXT_UID, s = this.renderer.buffer, o = e.buffers, a = e.attributes;
    e.indexBuffer && s.bind(e.indexBuffer);
    let l = null;
    for (const u in a) {
      const h = a[u], c = o[h.buffer], d = c._glBuffers[i];
      if (t.attributeData[u]) {
        l !== d && (s.bind(c), l = d);
        const f = t.attributeData[u].location;
        if (n.enableVertexAttribArray(f), n.vertexAttribPointer(f, h.size, h.type || n.FLOAT, h.normalized, h.stride, h.start), h.instance) if (this.hasInstance) n.vertexAttribDivisor(f, h.divisor);
        else throw new Error("geometry error, GPU Instancing is not supported on this device");
      }
    }
  }
  draw(e, t, n, i) {
    const { gl: s } = this, o = this._activeGeometry;
    if (o.indexBuffer) {
      const a = o.indexBuffer.data.BYTES_PER_ELEMENT, l = a === 2 ? s.UNSIGNED_SHORT : s.UNSIGNED_INT;
      a === 2 || a === 4 && this.canUseUInt32ElementIndex ? o.instanced ? s.drawElementsInstanced(e, t || o.indexBuffer.data.length, l, (n || 0) * a, i || 1) : s.drawElements(e, t || o.indexBuffer.data.length, l, (n || 0) * a) : console.warn("unsupported index buffer type: uint32");
    } else o.instanced ? s.drawArraysInstanced(e, n, t || o.getSize(), i || 1) : s.drawArrays(e, n, t || o.getSize());
    return this;
  }
  unbind() {
    this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null;
  }
  destroy() {
    this.renderer = null;
  }
}
s0.extension = { type: L.RendererSystem, name: "geometry" };
X.add(s0);
const lg = new ye();
class o0 {
  constructor(e, t) {
    this._texture = e, this.mapCoord = new ye(), this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = typeof t > "u" ? 0.5 : t, this.isSimple = false;
  }
  get texture() {
    return this._texture;
  }
  set texture(e) {
    this._texture = e, this._textureID = -1;
  }
  multiplyUvs(e, t) {
    t === void 0 && (t = e);
    const n = this.mapCoord;
    for (let i = 0; i < e.length; i += 2) {
      const s = e[i], o = e[i + 1];
      t[i] = s * n.a + o * n.c + n.tx, t[i + 1] = s * n.b + o * n.d + n.ty;
    }
    return t;
  }
  update(e) {
    const t = this._texture;
    if (!t || !t.valid || !e && this._textureID === t._updateID) return false;
    this._textureID = t._updateID, this._updateID++;
    const n = t._uvs;
    this.mapCoord.set(n.x1 - n.x0, n.y1 - n.y0, n.x3 - n.x0, n.y3 - n.y0, n.x0, n.y0);
    const i = t.orig, s = t.trim;
    s && (lg.set(i.width / s.width, 0, 0, i.height / s.height, -s.x / s.width, -s.y / s.height), this.mapCoord.append(lg));
    const o = t.baseTexture, a = this.uClampFrame, l = this.clampMargin / o.resolution, u = this.clampOffset;
    return a[0] = (t._frame.x + l + u) / o.width, a[1] = (t._frame.y + l + u) / o.height, a[2] = (t._frame.x + t._frame.width - l + u) / o.width, a[3] = (t._frame.y + t._frame.height - l + u) / o.height, this.uClampOffset[0] = u / o.realWidth, this.uClampOffset[1] = u / o.realHeight, this.isSimple = t._frame.width === o.width && t._frame.height === o.height && t.rotate === 0, true;
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
  constructor(e, t, n) {
    let i = null;
    typeof e != "string" && t === void 0 && n === void 0 && (i = e, e = void 0, t = void 0, n = void 0), super(e || yA, t || gA, n), this.maskSprite = i, this.maskMatrix = new ye();
  }
  get maskSprite() {
    return this._maskSprite;
  }
  set maskSprite(e) {
    this._maskSprite = e, this._maskSprite && (this._maskSprite.renderable = false);
  }
  apply(e, t, n, i) {
    const s = this._maskSprite, o = s._texture;
    o.valid && (o.uvMatrix || (o.uvMatrix = new o0(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = e.calculateSpriteMatrix(this.maskMatrix, s).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = s.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, e.applyFilter(this, t, n, i));
  }
}
class _A {
  constructor(e = null) {
    this.type = Be.NONE, this.autoDetect = true, this.maskObject = e || null, this.pooled = false, this.isMaskData = true, this.resolution = null, this.multisample = it.defaultMultisample, this.enabled = true, this.colorMask = 15, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._colorMask = 15, this._target = null;
  }
  get filter() {
    return this._filters ? this._filters[0] : null;
  }
  set filter(e) {
    e ? this._filters ? this._filters[0] = e : this._filters = [e] : this._filters = null;
  }
  reset() {
    this.pooled && (this.maskObject = null, this.type = Be.NONE, this.autoDetect = true), this._target = null, this._scissorRectLocal = null;
  }
  copyCountersOrReset(e) {
    e ? (this._stencilCounter = e._stencilCounter, this._scissorCounter = e._scissorCounter, this._scissorRect = e._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null);
  }
}
class a0 {
  constructor(e) {
    this.renderer = e, this.enableScissor = true, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0;
  }
  setMaskStack(e) {
    this.maskStack = e, this.renderer.scissor.setMaskStack(e), this.renderer.stencil.setMaskStack(e);
  }
  push(e, t) {
    let n = t;
    if (!n.isMaskData) {
      const s = this.maskDataPool.pop() || new _A();
      s.pooled = true, s.maskObject = t, n = s;
    }
    const i = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
    if (n.copyCountersOrReset(i), n._colorMask = i ? i._colorMask : 15, n.autoDetect && this.detect(n), n._target = e, n.type !== Be.SPRITE && this.maskStack.push(n), n.enabled) switch (n.type) {
      case Be.SCISSOR:
        this.renderer.scissor.push(n);
        break;
      case Be.STENCIL:
        this.renderer.stencil.push(n);
        break;
      case Be.SPRITE:
        n.copyCountersOrReset(null), this.pushSpriteMask(n);
        break;
      case Be.COLOR:
        this.pushColorMask(n);
        break;
    }
    n.type === Be.SPRITE && this.maskStack.push(n);
  }
  pop(e) {
    const t = this.maskStack.pop();
    if (!(!t || t._target !== e)) {
      if (t.enabled) switch (t.type) {
        case Be.SCISSOR:
          this.renderer.scissor.pop(t);
          break;
        case Be.STENCIL:
          this.renderer.stencil.pop(t.maskObject);
          break;
        case Be.SPRITE:
          this.popSpriteMask(t);
          break;
        case Be.COLOR:
          this.popColorMask(t);
          break;
      }
      if (t.reset(), t.pooled && this.maskDataPool.push(t), this.maskStack.length !== 0) {
        const n = this.maskStack[this.maskStack.length - 1];
        n.type === Be.SPRITE && n._filters && (n._filters[0].maskSprite = n.maskObject);
      }
    }
  }
  detect(e) {
    const t = e.maskObject;
    t ? t.isSprite ? e.type = Be.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(e) ? e.type = Be.SCISSOR : e.type = Be.STENCIL : e.type = Be.COLOR;
  }
  pushSpriteMask(e) {
    const { maskObject: t } = e, n = e._target;
    let i = e._filters;
    i || (i = this.alphaMaskPool[this.alphaMaskIndex], i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new vA()])), i[0].resolution = e.resolution, i[0].multisample = e.multisample, i[0].maskSprite = t;
    const s = n.filterArea;
    n.filterArea = t.getBounds(true), this.renderer.filter.push(n, i), n.filterArea = s, e._filters || this.alphaMaskIndex++;
  }
  popSpriteMask(e) {
    this.renderer.filter.pop(), e._filters ? e._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null);
  }
  pushColorMask(e) {
    const t = e._colorMask, n = e._colorMask = t & e.colorMask;
    n !== t && this.renderer.gl.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0);
  }
  popColorMask(e) {
    const t = e._colorMask, n = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
    n !== t && this.renderer.gl.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0);
  }
  destroy() {
    this.renderer = null;
  }
}
a0.extension = { type: L.RendererSystem, name: "mask" };
X.add(a0);
class l0 {
  constructor(e) {
    this.renderer = e, this.maskStack = [], this.glConst = 0;
  }
  getStackLength() {
    return this.maskStack.length;
  }
  setMaskStack(e) {
    const { gl: t } = this.renderer, n = this.getStackLength();
    this.maskStack = e;
    const i = this.getStackLength();
    i !== n && (i === 0 ? t.disable(this.glConst) : (t.enable(this.glConst), this._useCurrent()));
  }
  _useCurrent() {
  }
  destroy() {
    this.renderer = null, this.maskStack = null;
  }
}
const ug = new ye(), hg = [], u0 = class za extends l0 {
  constructor(e) {
    super(e), this.glConst = z.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST;
  }
  getStackLength() {
    const e = this.maskStack[this.maskStack.length - 1];
    return e ? e._scissorCounter : 0;
  }
  calcScissorRect(e) {
    if (e._scissorRectLocal) return;
    const t = e._scissorRect, { maskObject: n } = e, { renderer: i } = this, s = i.renderTexture, o = n.getBounds(true, hg.pop() ?? new te());
    this.roundFrameToPixels(o, s.current ? s.current.resolution : i.resolution, s.sourceFrame, s.destinationFrame, i.projection.transform), t && o.fit(t), e._scissorRectLocal = o;
  }
  static isMatrixRotated(e) {
    if (!e) return false;
    const { a: t, b: n, c: i, d: s } = e;
    return (Math.abs(n) > 1e-4 || Math.abs(i) > 1e-4) && (Math.abs(t) > 1e-4 || Math.abs(s) > 1e-4);
  }
  testScissor(e) {
    const { maskObject: t } = e;
    if (!t.isFastRect || !t.isFastRect() || za.isMatrixRotated(t.worldTransform) || za.isMatrixRotated(this.renderer.projection.transform)) return false;
    this.calcScissorRect(e);
    const n = e._scissorRectLocal;
    return n.width > 0 && n.height > 0;
  }
  roundFrameToPixels(e, t, n, i, s) {
    za.isMatrixRotated(s) || (s = s ? ug.copyFrom(s) : ug.identity(), s.translate(-n.x, -n.y).scale(i.width / n.width, i.height / n.height).translate(i.x, i.y), this.renderer.filter.transformAABB(s, e), e.fit(i), e.x = Math.round(e.x * t), e.y = Math.round(e.y * t), e.width = Math.round(e.width * t), e.height = Math.round(e.height * t));
  }
  push(e) {
    e._scissorRectLocal || this.calcScissorRect(e);
    const { gl: t } = this.renderer;
    e._scissorRect || t.enable(t.SCISSOR_TEST), e._scissorCounter++, e._scissorRect = e._scissorRectLocal, this._useCurrent();
  }
  pop(e) {
    const { gl: t } = this.renderer;
    e && hg.push(e._scissorRectLocal), this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST);
  }
  _useCurrent() {
    const e = this.maskStack[this.maskStack.length - 1]._scissorRect;
    let t;
    this.renderer.renderTexture.current ? t = e.y : t = this.renderer.height - e.height - e.y, this.renderer.gl.scissor(e.x, t, e.width, e.height);
  }
};
u0.extension = { type: L.RendererSystem, name: "scissor" };
let xA = u0;
X.add(xA);
class h0 extends l0 {
  constructor(e) {
    super(e), this.glConst = z.ADAPTER.getWebGLRenderingContext().STENCIL_TEST;
  }
  getStackLength() {
    const e = this.maskStack[this.maskStack.length - 1];
    return e ? e._stencilCounter : 0;
  }
  push(e) {
    const t = e.maskObject, { gl: n } = this.renderer, i = e._stencilCounter;
    i === 0 && (this.renderer.framebuffer.forceStencil(), n.clearStencil(0), n.clear(n.STENCIL_BUFFER_BIT), n.enable(n.STENCIL_TEST)), e._stencilCounter++;
    const s = e._colorMask;
    s !== 0 && (e._colorMask = 0, n.colorMask(false, false, false, false)), n.stencilFunc(n.EQUAL, i, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.INCR), t.renderable = true, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = false, s !== 0 && (e._colorMask = s, n.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0)), this._useCurrent();
  }
  pop(e) {
    const t = this.renderer.gl;
    if (this.getStackLength() === 0) t.disable(t.STENCIL_TEST);
    else {
      const n = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null, i = n ? n._colorMask : 15;
      i !== 0 && (n._colorMask = 0, t.colorMask(false, false, false, false)), t.stencilOp(t.KEEP, t.KEEP, t.DECR), e.renderable = true, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = false, i !== 0 && (n._colorMask = i, t.colorMask((i & 1) !== 0, (i & 2) !== 0, (i & 4) !== 0, (i & 8) !== 0)), this._useCurrent();
    }
  }
  _useCurrent() {
    const e = this.renderer.gl;
    e.stencilFunc(e.EQUAL, this.getStackLength(), 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
  }
}
h0.extension = { type: L.RendererSystem, name: "stencil" };
X.add(h0);
class c0 {
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
    for (const t in e) this.plugins[t] = new e[t](this.renderer);
  }
  destroy() {
    for (const e in this.plugins) this.plugins[e].destroy(), this.plugins[e] = null;
  }
}
c0.extension = { type: [L.RendererSystem, L.CanvasRendererSystem], name: "_plugin" };
X.add(c0);
class d0 {
  constructor(e) {
    this.renderer = e, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new ye(), this.transform = null;
  }
  update(e, t, n, i) {
    this.destinationFrame = e || this.destinationFrame || this.defaultFrame, this.sourceFrame = t || this.sourceFrame || e, this.calculateProjection(this.destinationFrame, this.sourceFrame, n, i), this.transform && this.projectionMatrix.append(this.transform);
    const s = this.renderer;
    s.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, s.globalUniforms.update(), s.shader.shader && s.shader.syncUniformGroup(s.shader.shader.uniforms.globals);
  }
  calculateProjection(e, t, n, i) {
    const s = this.projectionMatrix, o = i ? -1 : 1;
    s.identity(), s.a = 1 / t.width * 2, s.d = o * (1 / t.height * 2), s.tx = -1 - t.x * s.a, s.ty = -o - t.y * s.d;
  }
  setTransform(e) {
  }
  destroy() {
    this.renderer = null;
  }
}
d0.extension = { type: L.RendererSystem, name: "projection" };
X.add(d0);
const wA = new Bf(), cg = new te();
class f0 {
  constructor(e) {
    this.renderer = e, this._tempMatrix = new ye();
  }
  generateTexture(e, t) {
    const { region: n, ...i } = t || {}, s = (n == null ? void 0 : n.copyTo(cg)) || e.getLocalBounds(cg, true), o = i.resolution || this.renderer.resolution;
    s.width = Math.max(s.width, 1 / o), s.height = Math.max(s.height, 1 / o), i.width = s.width, i.height = s.height, i.resolution = o, i.multisample ?? (i.multisample = this.renderer.multisample);
    const a = Qn.create(i);
    this._tempMatrix.tx = -s.x, this._tempMatrix.ty = -s.y;
    const l = e.transform;
    return e.transform = wA, this.renderer.render(e, { renderTexture: a, transform: this._tempMatrix, skipUpdateTransform: !!e.parent, blit: true }), e.transform = l, a;
  }
  destroy() {
  }
}
f0.extension = { type: [L.RendererSystem, L.CanvasRendererSystem], name: "textureGenerator" };
X.add(f0);
const gn = new te(), gs = new te();
class p0 {
  constructor(e) {
    this.renderer = e, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new te(), this.destinationFrame = new te(), this.viewportFrame = new te();
  }
  contextChange() {
    var _a2;
    const e = (_a2 = this.renderer) == null ? void 0 : _a2.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!(e && e.alpha && e.premultipliedAlpha);
  }
  bind(e = null, t, n) {
    const i = this.renderer;
    this.current = e;
    let s, o, a;
    e ? (s = e.baseTexture, a = s.resolution, t || (gn.width = e.frame.width, gn.height = e.frame.height, t = gn), n || (gs.x = e.frame.x, gs.y = e.frame.y, gs.width = t.width, gs.height = t.height, n = gs), o = s.framebuffer) : (a = i.resolution, t || (gn.width = i._view.screen.width, gn.height = i._view.screen.height, t = gn), n || (n = gn, n.width = t.width, n.height = t.height));
    const l = this.viewportFrame;
    l.x = n.x * a, l.y = n.y * a, l.width = n.width * a, l.height = n.height * a, e || (l.y = i.view.height - (l.y + l.height)), l.ceil(), this.renderer.framebuffer.bind(o, l), this.renderer.projection.update(n, t, a, !o), e ? this.renderer.mask.setMaskStack(s.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(t), this.destinationFrame.copyFrom(n);
  }
  clear(e, t) {
    const n = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor, i = me.shared.setValue(e || n);
    (this.current && this.current.baseTexture.alphaMode > 0 || !this.current && this._rendererPremultipliedAlpha) && i.premultiply(i.alpha);
    const s = this.destinationFrame, o = this.current ? this.current.baseTexture : this.renderer._view.screen, a = s.width !== o.width || s.height !== o.height;
    if (a) {
      let { x: l, y: u, width: h, height: c } = this.viewportFrame;
      l = Math.round(l), u = Math.round(u), h = Math.round(h), c = Math.round(c), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(l, u, h, c);
    }
    this.renderer.framebuffer.clear(i.red, i.green, i.blue, i.alpha, t), a && this.renderer.scissor.pop();
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
p0.extension = { type: L.RendererSystem, name: "renderTexture" };
X.add(p0);
class EA {
  constructor(e, t) {
    this.program = e, this.uniformData = t, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {};
  }
  destroy() {
    this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null;
  }
}
function TA(r5, e) {
  const t = {}, n = e.getProgramParameter(r5, e.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = e.getActiveAttrib(r5, i);
    if (s.name.startsWith("gl_")) continue;
    const o = Z_(e, s.type), a = { type: o, name: s.name, size: q_(o), location: e.getAttribLocation(r5, s.name) };
    t[s.name] = a;
  }
  return t;
}
function SA(r5, e) {
  const t = {}, n = e.getProgramParameter(r5, e.ACTIVE_UNIFORMS);
  for (let i = 0; i < n; i++) {
    const s = e.getActiveUniform(r5, i), o = s.name.replace(/\[.*?\]$/, ""), a = !!s.name.match(/\[.*?\]$/), l = Z_(e, s.type);
    t[o] = { name: o, index: i, type: l, size: s.size, isArray: a, value: Y_(l, s.size) };
  }
  return t;
}
function bA(r5, e) {
  var _a2;
  const t = rg(r5, r5.VERTEX_SHADER, e.vertexSrc), n = rg(r5, r5.FRAGMENT_SHADER, e.fragmentSrc), i = r5.createProgram();
  r5.attachShader(i, t), r5.attachShader(i, n);
  const s = (_a2 = e.extra) == null ? void 0 : _a2.transformFeedbackVaryings;
  if (s && (typeof r5.transformFeedbackVaryings != "function" ? console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : r5.transformFeedbackVaryings(i, s.names, s.bufferMode === "separate" ? r5.SEPARATE_ATTRIBS : r5.INTERLEAVED_ATTRIBS)), r5.linkProgram(i), r5.getProgramParameter(i, r5.LINK_STATUS) || eA(r5, i, t, n), e.attributeData = TA(i, r5), e.uniformData = SA(i, r5), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)) {
    const a = Object.keys(e.attributeData);
    a.sort((l, u) => l > u ? 1 : -1);
    for (let l = 0; l < a.length; l++) e.attributeData[a[l]].location = l, r5.bindAttribLocation(i, l, a[l]);
    r5.linkProgram(i);
  }
  r5.deleteShader(t), r5.deleteShader(n);
  const o = {};
  for (const a in e.uniformData) {
    const l = e.uniformData[a];
    o[a] = { location: r5.getUniformLocation(i, a), value: Y_(l.type, l.size) };
  }
  return new EA(i, o);
}
function AA(r5, e, t, n, i) {
  t.buffer.update(i);
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
    ` }, m0 = { float: 4, vec2: 8, vec3: 12, vec4: 16, int: 4, ivec2: 8, ivec3: 12, ivec4: 16, uint: 4, uvec2: 8, uvec3: 12, uvec4: 16, bool: 4, bvec2: 8, bvec3: 12, bvec4: 16, mat2: 16 * 2, mat3: 16 * 3, mat4: 16 * 4 };
function IA(r5) {
  const e = r5.map((s) => ({ data: s, offset: 0, dataLen: 0, dirty: 0 }));
  let t = 0, n = 0, i = 0;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (t = m0[o.data.type], o.data.size > 1 && (t = Math.max(t, 16) * o.data.size), o.dataLen = t, n % t !== 0 && n < 16) {
      const a = n % t % 16;
      n += a, i += a;
    }
    n + t > 16 ? (i = Math.ceil(i / 16) * 16, o.offset = i, i += t, n = t) : (o.offset = i, n += t, i += t);
  }
  return i = Math.ceil(i / 16) * 16, { uboElements: e, size: i };
}
function PA(r5, e) {
  const t = [];
  for (const n in r5) e[n] && t.push(e[n]);
  return t.sort((n, i) => n.index - i.index), t;
}
function RA(r5, e) {
  if (!r5.autoManage) return { size: 0, syncFunc: AA };
  const t = PA(r5.uniforms, e), { uboElements: n, size: i } = IA(t), s = [`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];
  for (let o = 0; o < n.length; o++) {
    const a = n[o], l = r5.uniforms[a.data.name], u = a.data.name;
    let h = false;
    for (let c = 0; c < Oi.length; c++) {
      const d = Oi[c];
      if (d.codeUbo && d.test(a.data, l)) {
        s.push(`offset = ${a.offset / 4};`, Oi[c].codeUbo(a.data.name, l)), h = true;
        break;
      }
    }
    if (!h) if (a.data.size > 1) {
      const c = q_(a.data.type), d = Math.max(m0[a.data.type] / 16, 1), f = c / d, p = (4 - f % 4) % 4;
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
const ha = { textureCount: 0, uboCount: 0 };
class g0 {
  constructor(e) {
    this.destroyed = false, this.renderer = e, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = MA++;
  }
  systemCheck() {
    if (!rA()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
  }
  contextChange(e) {
    this.gl = e, this.reset();
  }
  bind(e, t) {
    e.disposeRunner.add(this), e.uniforms.globals = this.renderer.globalUniforms;
    const n = e.program, i = n.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(e);
    return this.shader = e, this.program !== n && (this.program = n, this.gl.useProgram(i.program)), t || (ha.textureCount = 0, ha.uboCount = 0, this.syncUniformGroup(e.uniformGroup, ha)), i;
  }
  setUniforms(e) {
    const t = this.shader.program, n = t.glPrograms[this.renderer.CONTEXT_UID];
    t.syncUniforms(n.uniformData, e, this.renderer);
  }
  syncUniformGroup(e, t) {
    const n = this.getGlProgram();
    (!e.static || e.dirtyId !== n.uniformDirtyGroups[e.id]) && (n.uniformDirtyGroups[e.id] = e.dirtyId, this.syncUniforms(e, n, t));
  }
  syncUniforms(e, t, n) {
    (e.syncUniforms[this.shader.program.id] || this.createSyncGroups(e))(t.uniformData, e.uniforms, this.renderer, n);
  }
  createSyncGroups(e) {
    const t = this.getSignature(e, this.shader.program.uniformData, "u");
    return this.cache[t] || (this.cache[t] = Zb(e, this.shader.program.uniformData)), e.syncUniforms[this.shader.program.id] = this.cache[t], e.syncUniforms[this.shader.program.id];
  }
  syncUniformBufferGroup(e, t) {
    const n = this.getGlProgram();
    if (!e.static || e.dirtyId !== 0 || !n.uniformGroups[e.id]) {
      e.dirtyId = 0;
      const i = n.uniformGroups[e.id] || this.createSyncBufferGroup(e, n, t);
      e.buffer.update(), i(n.uniformData, e.uniforms, this.renderer, ha, e.buffer);
    }
    this.renderer.buffer.bindBufferBase(e.buffer, n.uniformBufferBindings[t]);
  }
  createSyncBufferGroup(e, t, n) {
    const { gl: i } = this.renderer;
    this.renderer.buffer.bind(e.buffer);
    const s = this.gl.getUniformBlockIndex(t.program, n);
    t.uniformBufferBindings[n] = this.shader.uniformBindCount, i.uniformBlockBinding(t.program, s, this.shader.uniformBindCount), this.shader.uniformBindCount++;
    const o = this.getSignature(e, this.shader.program.uniformData, "ubo");
    let a = this._uboCache[o];
    if (a || (a = this._uboCache[o] = RA(e, this.shader.program.uniformData)), e.autoManage) {
      const l = new Float32Array(a.size / 4);
      e.buffer.update(l);
    }
    return t.uniformGroups[e.id] = a.syncFunc, t.uniformGroups[e.id];
  }
  getSignature(e, t, n) {
    const i = e.uniforms, s = [`${n}-`];
    for (const o in i) s.push(o), t[o] && s.push(t[o].type);
    return s.join("-");
  }
  getGlProgram() {
    return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null;
  }
  generateProgram(e) {
    const t = this.gl, n = e.program, i = bA(t, n);
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
g0.extension = { type: L.RendererSystem, name: "shader" };
X.add(g0);
class Pl {
  constructor(e) {
    this.renderer = e;
  }
  run(e) {
    const { renderer: t } = this;
    t.runners.init.emit(t.options), e.hello && console.log(`PixiJS 7.4.3 - ${t.rendererLogId} - https://pixijs.com`), t.resize(t.screen.width, t.screen.height);
  }
  destroy() {
  }
}
Pl.defaultOptions = { hello: false }, Pl.extension = { type: [L.RendererSystem, L.CanvasRendererSystem], name: "startup" };
X.add(Pl);
function kA(r5, e = []) {
  return e[Q.NORMAL] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.ADD] = [r5.ONE, r5.ONE], e[Q.MULTIPLY] = [r5.DST_COLOR, r5.ONE_MINUS_SRC_ALPHA, r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.SCREEN] = [r5.ONE, r5.ONE_MINUS_SRC_COLOR, r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.OVERLAY] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.DARKEN] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.LIGHTEN] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.COLOR_DODGE] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.COLOR_BURN] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.HARD_LIGHT] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.SOFT_LIGHT] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.DIFFERENCE] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.EXCLUSION] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.HUE] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.SATURATION] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.COLOR] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.LUMINOSITY] = [r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.NONE] = [0, 0], e[Q.NORMAL_NPM] = [r5.SRC_ALPHA, r5.ONE_MINUS_SRC_ALPHA, r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.ADD_NPM] = [r5.SRC_ALPHA, r5.ONE, r5.ONE, r5.ONE], e[Q.SCREEN_NPM] = [r5.SRC_ALPHA, r5.ONE_MINUS_SRC_COLOR, r5.ONE, r5.ONE_MINUS_SRC_ALPHA], e[Q.SRC_IN] = [r5.DST_ALPHA, r5.ZERO], e[Q.SRC_OUT] = [r5.ONE_MINUS_DST_ALPHA, r5.ZERO], e[Q.SRC_ATOP] = [r5.DST_ALPHA, r5.ONE_MINUS_SRC_ALPHA], e[Q.DST_OVER] = [r5.ONE_MINUS_DST_ALPHA, r5.ONE], e[Q.DST_IN] = [r5.ZERO, r5.SRC_ALPHA], e[Q.DST_OUT] = [r5.ZERO, r5.ONE_MINUS_SRC_ALPHA], e[Q.DST_ATOP] = [r5.ONE_MINUS_DST_ALPHA, r5.SRC_ALPHA], e[Q.XOR] = [r5.ONE_MINUS_DST_ALPHA, r5.ONE_MINUS_SRC_ALPHA], e[Q.SUBTRACT] = [r5.ONE, r5.ONE, r5.ONE, r5.ONE, r5.FUNC_REVERSE_SUBTRACT, r5.FUNC_ADD], e;
}
const DA = 0, FA = 1, NA = 2, BA = 3, OA = 4, LA = 5, y0 = class rd {
  constructor() {
    this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = Q.NONE, this._blendEq = false, this.map = [], this.map[DA] = this.setBlend, this.map[FA] = this.setOffset, this.map[NA] = this.setCullFace, this.map[BA] = this.setDepthTest, this.map[OA] = this.setFrontFace, this.map[LA] = this.setDepthMask, this.checks = [], this.defaultState = new pr(), this.defaultState.blend = true;
  }
  contextChange(e) {
    this.gl = e, this.blendModes = kA(e), this.set(this.defaultState), this.reset();
  }
  set(e) {
    if (e = e || this.defaultState, this.stateId !== e.data) {
      let t = this.stateId ^ e.data, n = 0;
      for (; t; ) t & 1 && this.map[n].call(this, !!(e.data & 1 << n)), t = t >> 1, n++;
      this.stateId = e.data;
    }
    for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e);
  }
  forceState(e) {
    e = e || this.defaultState;
    for (let t = 0; t < this.map.length; t++) this.map[t].call(this, !!(e.data & 1 << t));
    for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e);
    this.stateId = e.data;
  }
  setBlend(e) {
    this.updateCheck(rd.checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND);
  }
  setOffset(e) {
    this.updateCheck(rd.checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
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
    const t = this.blendModes[e], n = this.gl;
    t.length === 2 ? n.blendFunc(t[0], t[1]) : n.blendFuncSeparate(t[0], t[1], t[2], t[3]), t.length === 6 ? (this._blendEq = true, n.blendEquationSeparate(t[4], t[5])) : this._blendEq && (this._blendEq = false, n.blendEquationSeparate(n.FUNC_ADD, n.FUNC_ADD));
  }
  setPolygonOffset(e, t) {
    this.gl.polygonOffset(e, t);
  }
  reset() {
    this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false), this.forceState(this.defaultState), this._blendEq = true, this.blendMode = -1, this.setBlendMode(0);
  }
  updateCheck(e, t) {
    const n = this.checks.indexOf(e);
    t && n === -1 ? this.checks.push(e) : !t && n !== -1 && this.checks.splice(n, 1);
  }
  static checkBlendMode(e, t) {
    e.setBlendMode(t.blendMode);
  }
  static checkPolygonOffset(e, t) {
    e.setPolygonOffset(1, t.polygonOffset);
  }
  destroy() {
    this.gl = null;
  }
};
y0.extension = { type: L.RendererSystem, name: "state" };
let UA = y0;
X.add(UA);
class GA extends bo {
  constructor() {
    super(...arguments), this.runners = {}, this._systemsHash = {};
  }
  setup(e) {
    this.addRunners(...e.runners);
    const t = (e.priority ?? []).filter((i) => e.systems[i]), n = [...t, ...Object.keys(e.systems).filter((i) => !t.includes(i))];
    for (const i of n) this.addSystem(e.systems[i], i);
  }
  addRunners(...e) {
    e.forEach((t) => {
      this.runners[t] = new $t(t);
    });
  }
  addSystem(e, t) {
    const n = new e(this);
    if (this[t]) throw new Error(`Whoops! The name "${t}" is already in use`);
    this[t] = n, this._systemsHash[t] = n;
    for (const i in this.runners) this.runners[i].add(n);
    return this;
  }
  emitWithCustomOptions(e, t) {
    const n = Object.keys(this._systemsHash);
    e.items.forEach((i) => {
      const s = n.find((o) => this._systemsHash[o] === i);
      i[e.name](t[s]);
    });
  }
  destroy() {
    Object.values(this.runners).forEach((e) => {
      e.destroy();
    }), this._systemsHash = {};
  }
}
const As = class Ha {
  constructor(e) {
    this.renderer = e, this.count = 0, this.checkCount = 0, this.maxIdle = Ha.defaultMaxIdle, this.checkCountMax = Ha.defaultCheckCountMax, this.mode = Ha.defaultMode;
  }
  postrender() {
    this.renderer.objectRenderer.renderingToScreen && (this.count++, this.mode !== If.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())));
  }
  run() {
    const e = this.renderer.texture, t = e.managedTextures;
    let n = false;
    for (let i = 0; i < t.length; i++) {
      const s = t[i];
      s.resource && this.count - s.touched > this.maxIdle && (e.destroyTexture(s, true), t[i] = null, n = true);
    }
    if (n) {
      let i = 0;
      for (let s = 0; s < t.length; s++) t[s] !== null && (t[i++] = t[s]);
      t.length = i;
    }
  }
  unload(e) {
    const t = this.renderer.texture, n = e._texture;
    n && !n.framebuffer && t.destroyTexture(n);
    for (let i = e.children.length - 1; i >= 0; i--) this.unload(e.children[i]);
  }
  destroy() {
    this.renderer = null;
  }
};
As.defaultMode = If.AUTO, As.defaultMaxIdle = 60 * 60, As.defaultCheckCountMax = 60 * 10, As.extension = { type: L.RendererSystem, name: "textureGC" };
let bn = As;
X.add(bn);
class Eh {
  constructor(e) {
    this.texture = e, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = false, this.wrapMode = 33071, this.type = K.UNSIGNED_BYTE, this.internalFormat = F.RGBA, this.samplerType = 0;
  }
}
function zA(r5) {
  let e;
  return "WebGL2RenderingContext" in globalThis && r5 instanceof globalThis.WebGL2RenderingContext ? e = { [r5.RGB]: G.FLOAT, [r5.RGBA]: G.FLOAT, [r5.ALPHA]: G.FLOAT, [r5.LUMINANCE]: G.FLOAT, [r5.LUMINANCE_ALPHA]: G.FLOAT, [r5.R8]: G.FLOAT, [r5.R8_SNORM]: G.FLOAT, [r5.RG8]: G.FLOAT, [r5.RG8_SNORM]: G.FLOAT, [r5.RGB8]: G.FLOAT, [r5.RGB8_SNORM]: G.FLOAT, [r5.RGB565]: G.FLOAT, [r5.RGBA4]: G.FLOAT, [r5.RGB5_A1]: G.FLOAT, [r5.RGBA8]: G.FLOAT, [r5.RGBA8_SNORM]: G.FLOAT, [r5.RGB10_A2]: G.FLOAT, [r5.RGB10_A2UI]: G.FLOAT, [r5.SRGB8]: G.FLOAT, [r5.SRGB8_ALPHA8]: G.FLOAT, [r5.R16F]: G.FLOAT, [r5.RG16F]: G.FLOAT, [r5.RGB16F]: G.FLOAT, [r5.RGBA16F]: G.FLOAT, [r5.R32F]: G.FLOAT, [r5.RG32F]: G.FLOAT, [r5.RGB32F]: G.FLOAT, [r5.RGBA32F]: G.FLOAT, [r5.R11F_G11F_B10F]: G.FLOAT, [r5.RGB9_E5]: G.FLOAT, [r5.R8I]: G.INT, [r5.R8UI]: G.UINT, [r5.R16I]: G.INT, [r5.R16UI]: G.UINT, [r5.R32I]: G.INT, [r5.R32UI]: G.UINT, [r5.RG8I]: G.INT, [r5.RG8UI]: G.UINT, [r5.RG16I]: G.INT, [r5.RG16UI]: G.UINT, [r5.RG32I]: G.INT, [r5.RG32UI]: G.UINT, [r5.RGB8I]: G.INT, [r5.RGB8UI]: G.UINT, [r5.RGB16I]: G.INT, [r5.RGB16UI]: G.UINT, [r5.RGB32I]: G.INT, [r5.RGB32UI]: G.UINT, [r5.RGBA8I]: G.INT, [r5.RGBA8UI]: G.UINT, [r5.RGBA16I]: G.INT, [r5.RGBA16UI]: G.UINT, [r5.RGBA32I]: G.INT, [r5.RGBA32UI]: G.UINT, [r5.DEPTH_COMPONENT16]: G.FLOAT, [r5.DEPTH_COMPONENT24]: G.FLOAT, [r5.DEPTH_COMPONENT32F]: G.FLOAT, [r5.DEPTH_STENCIL]: G.FLOAT, [r5.DEPTH24_STENCIL8]: G.FLOAT, [r5.DEPTH32F_STENCIL8]: G.FLOAT } : e = { [r5.RGB]: G.FLOAT, [r5.RGBA]: G.FLOAT, [r5.ALPHA]: G.FLOAT, [r5.LUMINANCE]: G.FLOAT, [r5.LUMINANCE_ALPHA]: G.FLOAT, [r5.DEPTH_STENCIL]: G.FLOAT }, e;
}
function HA(r5) {
  let e;
  return "WebGL2RenderingContext" in globalThis && r5 instanceof globalThis.WebGL2RenderingContext ? e = { [K.UNSIGNED_BYTE]: { [F.RGBA]: r5.RGBA8, [F.RGB]: r5.RGB8, [F.RG]: r5.RG8, [F.RED]: r5.R8, [F.RGBA_INTEGER]: r5.RGBA8UI, [F.RGB_INTEGER]: r5.RGB8UI, [F.RG_INTEGER]: r5.RG8UI, [F.RED_INTEGER]: r5.R8UI, [F.ALPHA]: r5.ALPHA, [F.LUMINANCE]: r5.LUMINANCE, [F.LUMINANCE_ALPHA]: r5.LUMINANCE_ALPHA }, [K.BYTE]: { [F.RGBA]: r5.RGBA8_SNORM, [F.RGB]: r5.RGB8_SNORM, [F.RG]: r5.RG8_SNORM, [F.RED]: r5.R8_SNORM, [F.RGBA_INTEGER]: r5.RGBA8I, [F.RGB_INTEGER]: r5.RGB8I, [F.RG_INTEGER]: r5.RG8I, [F.RED_INTEGER]: r5.R8I }, [K.UNSIGNED_SHORT]: { [F.RGBA_INTEGER]: r5.RGBA16UI, [F.RGB_INTEGER]: r5.RGB16UI, [F.RG_INTEGER]: r5.RG16UI, [F.RED_INTEGER]: r5.R16UI, [F.DEPTH_COMPONENT]: r5.DEPTH_COMPONENT16 }, [K.SHORT]: { [F.RGBA_INTEGER]: r5.RGBA16I, [F.RGB_INTEGER]: r5.RGB16I, [F.RG_INTEGER]: r5.RG16I, [F.RED_INTEGER]: r5.R16I }, [K.UNSIGNED_INT]: { [F.RGBA_INTEGER]: r5.RGBA32UI, [F.RGB_INTEGER]: r5.RGB32UI, [F.RG_INTEGER]: r5.RG32UI, [F.RED_INTEGER]: r5.R32UI, [F.DEPTH_COMPONENT]: r5.DEPTH_COMPONENT24 }, [K.INT]: { [F.RGBA_INTEGER]: r5.RGBA32I, [F.RGB_INTEGER]: r5.RGB32I, [F.RG_INTEGER]: r5.RG32I, [F.RED_INTEGER]: r5.R32I }, [K.FLOAT]: { [F.RGBA]: r5.RGBA32F, [F.RGB]: r5.RGB32F, [F.RG]: r5.RG32F, [F.RED]: r5.R32F, [F.DEPTH_COMPONENT]: r5.DEPTH_COMPONENT32F }, [K.HALF_FLOAT]: { [F.RGBA]: r5.RGBA16F, [F.RGB]: r5.RGB16F, [F.RG]: r5.RG16F, [F.RED]: r5.R16F }, [K.UNSIGNED_SHORT_5_6_5]: { [F.RGB]: r5.RGB565 }, [K.UNSIGNED_SHORT_4_4_4_4]: { [F.RGBA]: r5.RGBA4 }, [K.UNSIGNED_SHORT_5_5_5_1]: { [F.RGBA]: r5.RGB5_A1 }, [K.UNSIGNED_INT_2_10_10_10_REV]: { [F.RGBA]: r5.RGB10_A2, [F.RGBA_INTEGER]: r5.RGB10_A2UI }, [K.UNSIGNED_INT_10F_11F_11F_REV]: { [F.RGB]: r5.R11F_G11F_B10F }, [K.UNSIGNED_INT_5_9_9_9_REV]: { [F.RGB]: r5.RGB9_E5 }, [K.UNSIGNED_INT_24_8]: { [F.DEPTH_STENCIL]: r5.DEPTH24_STENCIL8 }, [K.FLOAT_32_UNSIGNED_INT_24_8_REV]: { [F.DEPTH_STENCIL]: r5.DEPTH32F_STENCIL8 } } : e = { [K.UNSIGNED_BYTE]: { [F.RGBA]: r5.RGBA, [F.RGB]: r5.RGB, [F.ALPHA]: r5.ALPHA, [F.LUMINANCE]: r5.LUMINANCE, [F.LUMINANCE_ALPHA]: r5.LUMINANCE_ALPHA }, [K.UNSIGNED_SHORT_5_6_5]: { [F.RGB]: r5.RGB }, [K.UNSIGNED_SHORT_4_4_4_4]: { [F.RGBA]: r5.RGBA }, [K.UNSIGNED_SHORT_5_5_5_1]: { [F.RGBA]: r5.RGBA } }, e;
}
class v0 {
  constructor(e) {
    this.renderer = e, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = false, this.unknownTexture = new ee(), this.hasIntegerTextures = false;
  }
  contextChange() {
    const e = this.gl = this.renderer.gl;
    this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = HA(e), this.samplerTypes = zA(e);
    const t = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);
    this.boundTextures.length = t;
    for (let i = 0; i < t; i++) this.boundTextures[i] = null;
    this.emptyTextures = {};
    const n = new Eh(e.createTexture());
    e.bindTexture(e.TEXTURE_2D, n.texture), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[e.TEXTURE_2D] = n, this.emptyTextures[e.TEXTURE_CUBE_MAP] = new Eh(e.createTexture()), e.bindTexture(e.TEXTURE_CUBE_MAP, this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);
    for (let i = 0; i < 6; i++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, null);
    e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR);
    for (let i = 0; i < this.boundTextures.length; i++) this.bind(null, i);
  }
  bind(e, t = 0) {
    const { gl: n } = this;
    if (e = e == null ? void 0 : e.castToBaseTexture(), (e == null ? void 0 : e.valid) && !e.parentTextureArray) {
      e.touched = this.renderer.textureGC.count;
      const i = e._glTextures[this.CONTEXT_UID] || this.initTexture(e);
      this.boundTextures[t] !== e && (this.currentLocation !== t && (this.currentLocation = t, n.activeTexture(n.TEXTURE0 + t)), n.bindTexture(e.target, i.texture)), i.dirtyId !== e.dirtyId ? (this.currentLocation !== t && (this.currentLocation = t, n.activeTexture(n.TEXTURE0 + t)), this.updateTexture(e)) : i.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(e), this.boundTextures[t] = e;
    } else this.currentLocation !== t && (this.currentLocation = t, n.activeTexture(n.TEXTURE0 + t)), n.bindTexture(n.TEXTURE_2D, this.emptyTextures[n.TEXTURE_2D].texture), this.boundTextures[t] = null;
  }
  reset() {
    this._unknownBoundTextures = true, this.hasIntegerTextures = false, this.currentLocation = -1;
    for (let e = 0; e < this.boundTextures.length; e++) this.boundTextures[e] = this.unknownTexture;
  }
  unbind(e) {
    const { gl: t, boundTextures: n } = this;
    if (this._unknownBoundTextures) {
      this._unknownBoundTextures = false;
      for (let i = 0; i < n.length; i++) n[i] === this.unknownTexture && this.bind(null, i);
    }
    for (let i = 0; i < n.length; i++) n[i] === e && (this.currentLocation !== i && (t.activeTexture(t.TEXTURE0 + i), this.currentLocation = i), t.bindTexture(e.target, this.emptyTextures[e.target].texture), n[i] = null);
  }
  ensureSamplerType(e) {
    const { boundTextures: t, hasIntegerTextures: n, CONTEXT_UID: i } = this;
    if (n) for (let s = e - 1; s >= 0; --s) {
      const o = t[s];
      o && o._glTextures[i].samplerType !== G.FLOAT && this.renderer.texture.unbind(o);
    }
  }
  initTexture(e) {
    const t = new Eh(this.gl.createTexture());
    return t.dirtyId = -1, e._glTextures[this.CONTEXT_UID] = t, this.managedTextures.push(e), e.on("dispose", this.destroyTexture, this), t;
  }
  initTextureType(e, t) {
    var _a2;
    t.internalFormat = ((_a2 = this.internalFormats[e.type]) == null ? void 0 : _a2[e.format]) ?? e.format, t.samplerType = this.samplerTypes[t.internalFormat] ?? G.FLOAT, this.webGLVersion === 2 && e.type === K.HALF_FLOAT ? t.type = this.gl.HALF_FLOAT : t.type = e.type;
  }
  updateTexture(e) {
    var _a2;
    const t = e._glTextures[this.CONTEXT_UID];
    if (!t) return;
    const n = this.renderer;
    if (this.initTextureType(e, t), (_a2 = e.resource) == null ? void 0 : _a2.upload(n, e, t)) t.samplerType !== G.FLOAT && (this.hasIntegerTextures = true);
    else {
      const i = e.realWidth, s = e.realHeight, o = n.gl;
      (t.width !== i || t.height !== s || t.dirtyId < 0) && (t.width = i, t.height = s, o.texImage2D(e.target, 0, t.internalFormat, i, s, 0, e.format, t.type, null));
    }
    e.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(e), t.dirtyId = e.dirtyId;
  }
  destroyTexture(e, t) {
    const { gl: n } = this;
    if (e = e.castToBaseTexture(), e._glTextures[this.CONTEXT_UID] && (this.unbind(e), n.deleteTexture(e._glTextures[this.CONTEXT_UID].texture), e.off("dispose", this.destroyTexture, this), delete e._glTextures[this.CONTEXT_UID], !t)) {
      const i = this.managedTextures.indexOf(e);
      i !== -1 && Bi(this.managedTextures, i, 1);
    }
  }
  updateTextureStyle(e) {
    var _a2;
    const t = e._glTextures[this.CONTEXT_UID];
    t && ((e.mipmap === fr.POW2 || this.webGLVersion !== 2) && !e.isPowerOfTwo ? t.mipmap = false : t.mipmap = e.mipmap >= 1, this.webGLVersion !== 2 && !e.isPowerOfTwo ? t.wrapMode = on.CLAMP : t.wrapMode = e.wrapMode, ((_a2 = e.resource) == null ? void 0 : _a2.style(this.renderer, e, t)) || this.setStyle(e, t), t.dirtyStyleId = e.dirtyStyleId);
  }
  setStyle(e, t) {
    const n = this.gl;
    if (t.mipmap && e.mipmap !== fr.ON_MANUAL && n.generateMipmap(e.target), n.texParameteri(e.target, n.TEXTURE_WRAP_S, t.wrapMode), n.texParameteri(e.target, n.TEXTURE_WRAP_T, t.wrapMode), t.mipmap) {
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
v0.extension = { type: L.RendererSystem, name: "texture" };
X.add(v0);
class _0 {
  constructor(e) {
    this.renderer = e;
  }
  contextChange() {
    this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID;
  }
  bind(e) {
    const { gl: t, CONTEXT_UID: n } = this, i = e._glTransformFeedbacks[n] || this.createGLTransformFeedback(e);
    t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, i);
  }
  unbind() {
    const { gl: e } = this;
    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null);
  }
  beginTransformFeedback(e, t) {
    const { gl: n, renderer: i } = this;
    t && i.shader.bind(t), n.beginTransformFeedback(e);
  }
  endTransformFeedback() {
    const { gl: e } = this;
    e.endTransformFeedback();
  }
  createGLTransformFeedback(e) {
    const { gl: t, renderer: n, CONTEXT_UID: i } = this, s = t.createTransformFeedback();
    e._glTransformFeedbacks[i] = s, t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, s);
    for (let o = 0; o < e.buffers.length; o++) {
      const a = e.buffers[o];
      a && (n.buffer.update(a), a._glBuffers[i].refCount++, t.bindBufferBase(t.TRANSFORM_FEEDBACK_BUFFER, o, a._glBuffers[i].buffer || null));
    }
    return t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null), e.disposeRunner.add(this), s;
  }
  disposeTransformFeedback(e, t) {
    const n = e._glTransformFeedbacks[this.CONTEXT_UID], i = this.gl;
    e.disposeRunner.remove(this);
    const s = this.renderer.buffer;
    if (s) for (let o = 0; o < e.buffers.length; o++) {
      const a = e.buffers[o];
      if (!a) continue;
      const l = a._glBuffers[this.CONTEXT_UID];
      l && (l.refCount--, l.refCount === 0 && !t && s.dispose(a, t));
    }
    n && (t || i.deleteTransformFeedback(n), delete e._glTransformFeedbacks[this.CONTEXT_UID]);
  }
  destroy() {
    this.renderer = null;
  }
}
_0.extension = { type: L.RendererSystem, name: "transformFeedback" };
X.add(_0);
class Rl {
  constructor(e) {
    this.renderer = e;
  }
  init(e) {
    this.screen = new te(0, 0, e.width, e.height), this.element = e.view || z.ADAPTER.createCanvas(), this.resolution = e.resolution || z.RESOLUTION, this.autoDensity = !!e.autoDensity;
  }
  resizeView(e, t) {
    this.element.width = Math.round(e * this.resolution), this.element.height = Math.round(t * this.resolution);
    const n = this.element.width / this.resolution, i = this.element.height / this.resolution;
    this.screen.width = n, this.screen.height = i, this.autoDensity && (this.element.style.width = `${n}px`, this.element.style.height = `${i}px`), this.renderer.emit("resize", n, i), this.renderer.runners.resize.emit(this.screen.width, this.screen.height);
  }
  destroy(e) {
    var _a2;
    e && ((_a2 = this.element.parentNode) == null ? void 0 : _a2.removeChild(this.element)), this.renderer = null, this.element = null, this.screen = null;
  }
}
Rl.defaultOptions = { width: 800, height: 600, resolution: void 0, autoDensity: false }, Rl.extension = { type: [L.RendererSystem, L.CanvasRendererSystem], name: "_view" };
X.add(Rl);
z.PREFER_ENV = qn.WEBGL2;
z.STRICT_TEXTURE_CACHE = false;
z.RENDER_OPTIONS = { ...Il.defaultOptions, ...Cl.defaultOptions, ...Rl.defaultOptions, ...Pl.defaultOptions };
Object.defineProperties(z, { WRAP_MODE: { get() {
  return ee.defaultOptions.wrapMode;
}, set(r5) {
  ie("7.1.0", "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"), ee.defaultOptions.wrapMode = r5;
} }, SCALE_MODE: { get() {
  return ee.defaultOptions.scaleMode;
}, set(r5) {
  ie("7.1.0", "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"), ee.defaultOptions.scaleMode = r5;
} }, MIPMAP_TEXTURES: { get() {
  return ee.defaultOptions.mipmap;
}, set(r5) {
  ie("7.1.0", "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"), ee.defaultOptions.mipmap = r5;
} }, ANISOTROPIC_LEVEL: { get() {
  return ee.defaultOptions.anisotropicLevel;
}, set(r5) {
  ie("7.1.0", "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"), ee.defaultOptions.anisotropicLevel = r5;
} }, FILTER_RESOLUTION: { get() {
  return ie("7.1.0", "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"), it.defaultResolution;
}, set(r5) {
  it.defaultResolution = r5;
} }, FILTER_MULTISAMPLE: { get() {
  return ie("7.1.0", "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"), it.defaultMultisample;
}, set(r5) {
  it.defaultMultisample = r5;
} }, SPRITE_MAX_TEXTURES: { get() {
  return Sn.defaultMaxTextures;
}, set(r5) {
  ie("7.1.0", "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"), Sn.defaultMaxTextures = r5;
} }, SPRITE_BATCH_SIZE: { get() {
  return Sn.defaultBatchSize;
}, set(r5) {
  ie("7.1.0", "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"), Sn.defaultBatchSize = r5;
} }, CAN_UPLOAD_SAME_BUFFER: { get() {
  return Sn.canUploadSameBuffer;
}, set(r5) {
  ie("7.1.0", "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"), Sn.canUploadSameBuffer = r5;
} }, GC_MODE: { get() {
  return bn.defaultMode;
}, set(r5) {
  ie("7.1.0", "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"), bn.defaultMode = r5;
} }, GC_MAX_IDLE: { get() {
  return bn.defaultMaxIdle;
}, set(r5) {
  ie("7.1.0", "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"), bn.defaultMaxIdle = r5;
} }, GC_MAX_CHECK_COUNT: { get() {
  return bn.defaultCheckCountMax;
}, set(r5) {
  ie("7.1.0", "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"), bn.defaultCheckCountMax = r5;
} }, PRECISION_VERTEX: { get() {
  return br.defaultVertexPrecision;
}, set(r5) {
  ie("7.1.0", "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"), br.defaultVertexPrecision = r5;
} }, PRECISION_FRAGMENT: { get() {
  return br.defaultFragmentPrecision;
}, set(r5) {
  ie("7.1.0", "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"), br.defaultFragmentPrecision = r5;
} } });
var Xn = ((r5) => (r5[r5.INTERACTION = 50] = "INTERACTION", r5[r5.HIGH = 25] = "HIGH", r5[r5.NORMAL = 0] = "NORMAL", r5[r5.LOW = -25] = "LOW", r5[r5.UTILITY = -50] = "UTILITY", r5))(Xn || {});
class Th {
  constructor(e, t = null, n = 0, i = false) {
    this.next = null, this.previous = null, this._destroyed = false, this.fn = e, this.context = t, this.priority = n, this.once = i;
  }
  match(e, t = null) {
    return this.fn === e && this.context === t;
  }
  emit(e) {
    this.fn && (this.context ? this.fn.call(this.context, e) : this.fn(e));
    const t = this.next;
    return this.once && this.destroy(true), this._destroyed && (this.next = null), t;
  }
  connect(e) {
    this.previous = e, e.next && (e.next.previous = this), this.next = e.next, e.next = this;
  }
  destroy(e = false) {
    this._destroyed = true, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
    const t = this.next;
    return this.next = e ? null : t, this.previous = null, t;
  }
}
const x0 = class pt {
  constructor() {
    this.autoStart = false, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = false, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = false, this._lastFrame = -1, this._head = new Th(null, null, 1 / 0), this.deltaMS = 1 / pt.targetFPMS, this.elapsedMS = 1 / pt.targetFPMS, this._tick = (e) => {
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
  add(e, t, n = Xn.NORMAL) {
    return this._addListener(new Th(e, t, n));
  }
  addOnce(e, t, n = Xn.NORMAL) {
    return this._addListener(new Th(e, t, n, true));
  }
  _addListener(e) {
    let t = this._head.next, n = this._head;
    if (!t) e.connect(n);
    else {
      for (; t; ) {
        if (e.priority > t.priority) {
          e.connect(n);
          break;
        }
        n = t, t = t.next;
      }
      e.previous || e.connect(n);
    }
    return this._startIfPossible(), this;
  }
  remove(e, t) {
    let n = this._head.next;
    for (; n; ) n.match(e, t) ? n = n.destroy() : n = n.next;
    return this._head.next || this._cancelIfNeeded(), this;
  }
  get count() {
    if (!this._head) return 0;
    let e = 0, t = this._head;
    for (; t = t.next; ) e++;
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
    let t;
    if (e > this.lastTime) {
      if (t = this.elapsedMS = e - this.lastTime, t > this._maxElapsedMS && (t = this._maxElapsedMS), t *= this.speed, this._minElapsedMS) {
        const s = e - this._lastFrame | 0;
        if (s < this._minElapsedMS) return;
        this._lastFrame = e - s % this._minElapsedMS;
      }
      this.deltaMS = t, this.deltaTime = this.deltaMS * pt.targetFPMS;
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
    const t = Math.min(this.maxFPS, e), n = Math.min(Math.max(0, t) / 1e3, pt.targetFPMS);
    this._maxElapsedMS = 1 / n;
  }
  get maxFPS() {
    return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0;
  }
  set maxFPS(e) {
    if (e === 0) this._minElapsedMS = 0;
    else {
      const t = Math.max(this.minFPS, e);
      this._minElapsedMS = 1 / (t / 1e3);
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
x0.targetFPMS = 0.06;
let yt = x0;
Object.defineProperties(z, { TARGET_FPMS: { get() {
  return yt.targetFPMS;
}, set(r5) {
  ie("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"), yt.targetFPMS = r5;
} } });
class w0 {
  static init(e) {
    e = Object.assign({ autoStart: true, sharedTicker: false }, e), Object.defineProperty(this, "ticker", { set(t) {
      this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, Xn.LOW);
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
w0.extension = L.Application;
X.add(w0);
const E0 = [];
X.handleByList(L.Renderer, E0);
function $A(r5) {
  for (const e of E0) if (e.test(r5)) return new e(r5);
  throw new Error("Unable to auto-detect a suitable renderer.");
}
var jA = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`, VA = `attribute vec2 aVertexPosition;

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
const WA = jA, T0 = VA;
class S0 {
  constructor(e) {
    this.renderer = e;
  }
  contextChange(e) {
    let t;
    if (this.renderer.context.webGLVersion === 1) {
      const n = e.getParameter(e.FRAMEBUFFER_BINDING);
      e.bindFramebuffer(e.FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.FRAMEBUFFER, n);
    } else {
      const n = e.getParameter(e.DRAW_FRAMEBUFFER_BINDING);
      e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), t = e.getParameter(e.SAMPLES), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, n);
    }
    t >= ke.HIGH ? this.multisample = ke.HIGH : t >= ke.MEDIUM ? this.multisample = ke.MEDIUM : t >= ke.LOW ? this.multisample = ke.LOW : this.multisample = ke.NONE;
  }
  destroy() {
  }
}
S0.extension = { type: L.RendererSystem, name: "_multisample" };
X.add(S0);
class XA {
  constructor(e) {
    this.buffer = e || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0;
  }
}
class b0 {
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
    const { gl: t, CONTEXT_UID: n } = this, i = e._glBuffers[n] || this.createGLBuffer(e);
    t.bindBuffer(e.type, i.buffer);
  }
  unbind(e) {
    const { gl: t } = this;
    t.bindBuffer(e, null);
  }
  bindBufferBase(e, t) {
    const { gl: n, CONTEXT_UID: i } = this;
    if (this.boundBufferBases[t] !== e) {
      const s = e._glBuffers[i] || this.createGLBuffer(e);
      this.boundBufferBases[t] = e, n.bindBufferBase(n.UNIFORM_BUFFER, t, s.buffer);
    }
  }
  bindBufferRange(e, t, n) {
    const { gl: i, CONTEXT_UID: s } = this;
    n = n || 0;
    const o = e._glBuffers[s] || this.createGLBuffer(e);
    i.bindBufferRange(i.UNIFORM_BUFFER, t || 0, o.buffer, n * 256, 256);
  }
  update(e) {
    const { gl: t, CONTEXT_UID: n } = this, i = e._glBuffers[n] || this.createGLBuffer(e);
    if (e._updateID !== i.updateID) if (i.updateID = e._updateID, t.bindBuffer(e.type, i.buffer), i.byteLength >= e.data.byteLength) t.bufferSubData(e.type, 0, e.data);
    else {
      const s = e.static ? t.STATIC_DRAW : t.DYNAMIC_DRAW;
      i.byteLength = e.data.byteLength, t.bufferData(e.type, e.data, s);
    }
  }
  dispose(e, t) {
    if (!this.managedBuffers[e.id]) return;
    delete this.managedBuffers[e.id];
    const n = e._glBuffers[this.CONTEXT_UID], i = this.gl;
    e.disposeRunner.remove(this), n && (t || i.deleteBuffer(n.buffer), delete e._glBuffers[this.CONTEXT_UID]);
  }
  disposeAll(e) {
    const t = Object.keys(this.managedBuffers);
    for (let n = 0; n < t.length; n++) this.dispose(this.managedBuffers[t[n]], e);
  }
  createGLBuffer(e) {
    const { CONTEXT_UID: t, gl: n } = this;
    return e._glBuffers[t] = new XA(n.createBuffer()), this.managedBuffers[e.id] = e, e.disposeRunner.add(this), e._glBuffers[t];
  }
}
b0.extension = { type: L.RendererSystem, name: "buffer" };
X.add(b0);
class A0 {
  constructor(e) {
    this.renderer = e;
  }
  render(e, t) {
    const n = this.renderer;
    let i, s, o, a;
    if (t && (i = t.renderTexture, s = t.clear, o = t.transform, a = t.skipUpdateTransform), this.renderingToScreen = !i, n.runners.prerender.emit(), n.emit("prerender"), n.projection.transform = o, !n.context.isLost) {
      if (i || (this.lastObjectRendered = e), !a) {
        const l = e.enableTempParent();
        e.updateTransform(), e.disableTempParent(l);
      }
      n.renderTexture.bind(i), n.batch.currentRenderer.start(), (s ?? n.background.clearBeforeRender) && n.renderTexture.clear(), e.render(n), n.batch.currentRenderer.flush(), i && (t.blit && n.framebuffer.blit(), i.baseTexture.update()), n.runners.postrender.emit(), n.projection.transform = null, n.emit("postrender");
    }
  }
  destroy() {
    this.renderer = null, this.lastObjectRendered = null;
  }
}
A0.extension = { type: L.RendererSystem, name: "objectRenderer" };
X.add(A0);
const $a = class nd extends GA {
  constructor(e) {
    super(), this.type = u_.WEBGL, e = Object.assign({}, z.RENDER_OPTIONS, e), this.gl = null, this.CONTEXT_UID = 0, this.globalUniforms = new jt({ projectionMatrix: new ye() }, true);
    const t = { runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"], systems: nd.__systems, priority: ["_view", "textureGenerator", "background", "_plugin", "startup", "context", "state", "texture", "buffer", "geometry", "framebuffer", "transformFeedback", "mask", "scissor", "stencil", "projection", "textureGC", "filter", "renderTexture", "batch", "objectRenderer", "_multisample"] };
    this.setup(t), "useContextAlpha" in e && (ie("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"), e.premultipliedAlpha = e.useContextAlpha && e.useContextAlpha !== "notMultiplied", e.backgroundAlpha = e.useContextAlpha === false ? 1 : e.backgroundAlpha), this._plugin.rendererPlugins = nd.__plugins, this.options = e, this.startup.run(this.options);
  }
  static test(e) {
    return (e == null ? void 0 : e.forceCanvas) ? false : gb();
  }
  render(e, t) {
    this.objectRenderer.render(e, t);
  }
  resize(e, t) {
    this._view.resizeView(e, t);
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
  generateTexture(e, t) {
    return this.textureGenerator.generateTexture(e, t);
  }
};
$a.extension = { type: L.Renderer, priority: 1 }, $a.__plugins = {}, $a.__systems = {};
let Lf = $a;
X.handleByMap(L.RendererPlugin, Lf.__plugins);
X.handleByMap(L.RendererSystem, Lf.__systems);
X.add(Lf);
class C0 extends yo {
  constructor(e, t) {
    const { width: n, height: i } = t || {};
    super(n, i), this.items = [], this.itemDirtyIds = [];
    for (let s = 0; s < e; s++) {
      const o = new ee();
      this.items.push(o), this.itemDirtyIds.push(-2);
    }
    this.length = e, this._load = null, this.baseTexture = null;
  }
  initFromArray(e, t) {
    for (let n = 0; n < this.length; n++) e[n] && (e[n].castToBaseTexture ? this.addBaseTextureAt(e[n].castToBaseTexture(), n) : e[n] instanceof yo ? this.addResourceAt(e[n], n) : this.addResourceAt(V_(e[n], t), n));
  }
  dispose() {
    for (let e = 0, t = this.length; e < t; e++) this.items[e].destroy();
    this.items = null, this.itemDirtyIds = null, this._load = null;
  }
  addResourceAt(e, t) {
    if (!this.items[t]) throw new Error(`Index ${t} is out of bounds`);
    return e.valid && !this.valid && this.resize(e.width, e.height), this.items[t].setResource(e), this;
  }
  bind(e) {
    if (this.baseTexture !== null) throw new Error("Only one base texture per TextureArray is allowed");
    super.bind(e);
    for (let t = 0; t < this.length; t++) this.items[t].parentTextureArray = e, this.items[t].on("update", e.update, e);
  }
  unbind(e) {
    super.unbind(e);
    for (let t = 0; t < this.length; t++) this.items[t].parentTextureArray = null, this.items[t].off("update", e.update, e);
  }
  load() {
    if (this._load) return this._load;
    const e = this.items.map((t) => t.resource).filter((t) => t).map((t) => t.load());
    return this._load = Promise.all(e).then(() => {
      const { realWidth: t, realHeight: n } = this.items[0];
      return this.resize(t, n), this.update(), Promise.resolve(this);
    }), this._load;
  }
}
class YA extends C0 {
  constructor(e, t) {
    const { width: n, height: i } = t || {};
    let s, o;
    Array.isArray(e) ? (s = e, o = e.length) : o = e, super(o, { width: n, height: i }), s && this.initFromArray(s, t);
  }
  addBaseTextureAt(e, t) {
    if (e.resource) this.addResourceAt(e.resource, t);
    else throw new Error("ArrayResource does not support RenderTexture");
    return this;
  }
  bind(e) {
    super.bind(e), e.target = Di.TEXTURE_2D_ARRAY;
  }
  upload(e, t, n) {
    const { length: i, itemDirtyIds: s, items: o } = this, { gl: a } = e;
    n.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, n.internalFormat, this._width, this._height, i, 0, t.format, n.type, null);
    for (let l = 0; l < i; l++) {
      const u = o[l];
      s[l] < u.dirtyId && (s[l] = u.dirtyId, u.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, l, u.resource.width, u.resource.height, 1, t.format, n.type, u.resource.source));
    }
    return true;
  }
}
class KA extends Dr {
  constructor(e) {
    super(e);
  }
  static test(e) {
    const { OffscreenCanvas: t } = globalThis;
    return t && e instanceof t ? true : globalThis.HTMLCanvasElement && e instanceof HTMLCanvasElement;
  }
}
const I0 = class Cs extends C0 {
  constructor(e, t) {
    const { width: n, height: i, autoLoad: s, linkBaseTexture: o } = t || {};
    if (e && e.length !== Cs.SIDES) throw new Error(`Invalid length. Got ${e.length}, expected 6`);
    super(6, { width: n, height: i });
    for (let a = 0; a < Cs.SIDES; a++) this.items[a].target = Di.TEXTURE_CUBE_MAP_POSITIVE_X + a;
    this.linkBaseTexture = o !== false, e && this.initFromArray(e, t), s !== false && this.load();
  }
  bind(e) {
    super.bind(e), e.target = Di.TEXTURE_CUBE_MAP;
  }
  addBaseTextureAt(e, t, n) {
    if (n === void 0 && (n = this.linkBaseTexture), !this.items[t]) throw new Error(`Index ${t} is out of bounds`);
    if (!this.linkBaseTexture || e.parentTextureArray || Object.keys(e._glTextures).length > 0) if (e.resource) this.addResourceAt(e.resource, t);
    else throw new Error("CubeResource does not support copying of renderTexture.");
    else e.target = Di.TEXTURE_CUBE_MAP_POSITIVE_X + t, e.parentTextureArray = this.baseTexture, this.items[t] = e;
    return e.valid && !this.valid && this.resize(e.realWidth, e.realHeight), this.items[t] = e, this;
  }
  upload(e, t, n) {
    const i = this.itemDirtyIds;
    for (let s = 0; s < Cs.SIDES; s++) {
      const o = this.items[s];
      (i[s] < o.dirtyId || n.dirtyId < t.dirtyId) && (o.valid && o.resource ? (o.resource.upload(e, o, n), i[s] = o.dirtyId) : i[s] < -1 && (e.gl.texImage2D(o.target, 0, n.internalFormat, t.realWidth, t.realHeight, 0, t.format, n.type, null), i[s] = -1));
    }
    return true;
  }
  static test(e) {
    return Array.isArray(e) && e.length === Cs.SIDES;
  }
};
I0.SIDES = 6;
let qA = I0;
class bi extends Dr {
  constructor(e, t) {
    t = t || {};
    let n, i, s;
    typeof e == "string" ? (n = bi.EMPTY, i = e, s = true) : (n = e, i = null, s = false), super(n), this.url = i, this.crossOrigin = t.crossOrigin ?? true, this.alphaMode = typeof t.alphaMode == "number" ? t.alphaMode : null, this.ownsImageBitmap = t.ownsImageBitmap ?? s, this._load = null, t.autoLoad !== false && this.load();
  }
  load() {
    return this._load ? this._load : (this._load = new Promise(async (e, t) => {
      if (this.url === null) {
        e(this);
        return;
      }
      try {
        const n = await z.ADAPTER.fetch(this.url, { mode: this.crossOrigin ? "cors" : "no-cors" });
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
        t(n), this.onError.emit(n);
      }
    }), this._load);
  }
  upload(e, t, n) {
    return this.source instanceof ImageBitmap ? (typeof this.alphaMode == "number" && (t.alphaMode = this.alphaMode), super.upload(e, t, n)) : (this.load(), false);
  }
  dispose() {
    this.ownsImageBitmap && this.source instanceof ImageBitmap && this.source.close(), super.dispose(), this._load = null;
  }
  static test(e) {
    return !!globalThis.createImageBitmap && typeof ImageBitmap < "u" && (typeof e == "string" || e instanceof ImageBitmap);
  }
  static get EMPTY() {
    return bi._EMPTY = bi._EMPTY ?? z.ADAPTER.createCanvas(0, 0), bi._EMPTY;
  }
}
const id = class ja extends Dr {
  constructor(e, t) {
    t = t || {}, super(z.ADAPTER.createCanvas()), this._width = 0, this._height = 0, this.svg = e, this.scale = t.scale || 1, this._overrideWidth = t.width, this._overrideHeight = t.height, this._resolve = null, this._crossorigin = t.crossorigin, this._load = null, t.autoLoad !== false && this.load();
  }
  load() {
    return this._load ? this._load : (this._load = new Promise((e) => {
      if (this._resolve = () => {
        this.update(), e(this);
      }, ja.SVG_XML.test(this.svg.trim())) {
        if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
        this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`;
      }
      this._loadSvg();
    }), this._load);
  }
  _loadSvg() {
    const e = new Image();
    Dr.crossOrigin(e, this.svg, this._crossorigin), e.src = this.svg, e.onerror = (t) => {
      this._resolve && (e.onerror = null, this.onError.emit(t));
    }, e.onload = () => {
      if (!this._resolve) return;
      const t = e.width, n = e.height;
      if (!t || !n) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
      let i = t * this.scale, s = n * this.scale;
      (this._overrideWidth || this._overrideHeight) && (i = this._overrideWidth || this._overrideHeight / n * t, s = this._overrideHeight || this._overrideWidth / t * n), i = Math.round(i), s = Math.round(s);
      const o = this.source;
      o.width = i, o.height = s, o._pixiId = `canvas_${Wn()}`, o.getContext("2d").drawImage(e, 0, 0, t, n, 0, 0, i, s), this._resolve(), this._resolve = null;
    };
  }
  static getSize(e) {
    const t = ja.SVG_SIZE.exec(e), n = {};
    return t && (n[t[1]] = Math.round(parseFloat(t[3])), n[t[5]] = Math.round(parseFloat(t[7]))), n;
  }
  dispose() {
    super.dispose(), this._resolve = null, this._crossorigin = null;
  }
  static test(e, t) {
    return t === "svg" || typeof e == "string" && e.startsWith("data:image/svg+xml") || typeof e == "string" && ja.SVG_XML.test(e);
  }
};
id.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, id.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
let sd = id;
class ZA extends Dr {
  constructor(e) {
    super(e);
  }
  static test(e) {
    return !!globalThis.VideoFrame && e instanceof globalThis.VideoFrame;
  }
}
const od = class ad extends Dr {
  constructor(e, t) {
    if (t = t || {}, !(e instanceof HTMLVideoElement)) {
      const n = document.createElement("video");
      t.autoLoad !== false && n.setAttribute("preload", "auto"), t.playsinline !== false && (n.setAttribute("webkit-playsinline", ""), n.setAttribute("playsinline", "")), t.muted === true && (n.setAttribute("muted", ""), n.muted = true), t.loop === true && n.setAttribute("loop", ""), t.autoPlay !== false && n.setAttribute("autoplay", ""), typeof e == "string" && (e = [e]);
      const i = e[0].src || e[0];
      Dr.crossOrigin(n, i, t.crossorigin);
      for (let s = 0; s < e.length; ++s) {
        const o = document.createElement("source");
        let { src: a, mime: l } = e[s];
        if (a = a || e[s], a.startsWith("data:")) l = a.slice(5, a.indexOf(";"));
        else if (!a.startsWith("blob:")) {
          const u = a.split("?").shift().toLowerCase(), h = u.slice(u.lastIndexOf(".") + 1);
          l = l || ad.MIME_TYPES[h] || `video/${h}`;
        }
        o.src = a, l && (o.type = l), n.appendChild(o);
      }
      e = n;
    }
    super(e), this.noSubImage = true, this._autoUpdate = true, this._isConnectedToTicker = false, this._updateFPS = t.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = t.autoPlay !== false, this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), t.autoLoad !== false && this.load();
  }
  update(e = 0) {
    if (!this.destroyed) {
      if (this._updateFPS) {
        const t = yt.shared.elapsedMS * this.source.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - t);
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
    return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = true), e.addEventListener("play", this._onPlayStart), e.addEventListener("pause", this._onPlayStop), e.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, true)), this._load = new Promise((t, n) => {
      this.valid ? t(this) : (this._resolve = t, this._reject = n, e.load());
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
    const t = this.valid;
    this._msToNextUpdate = 0, this.update(), this._msToNextUpdate = 0, !t && this._resolve && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && e.play();
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
  static test(e, t) {
    return globalThis.HTMLVideoElement && e instanceof HTMLVideoElement || ad.TYPES.includes(t);
  }
};
od.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], od.MIME_TYPES = { ogv: "video/ogg", mov: "video/quicktime", m4v: "video/mp4" };
let P0 = od;
Xc.push(bi, e0, KA, P0, ZA, sd, lu, qA, YA);
class Ml {
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
  addPointMatrix(e, t) {
    const { a: n, b: i, c: s, d: o, tx: a, ty: l } = e, u = n * t.x + s * t.y + a, h = i * t.x + o * t.y + l;
    this.minX = Math.min(this.minX, u), this.maxX = Math.max(this.maxX, u), this.minY = Math.min(this.minY, h), this.maxY = Math.max(this.maxY, h);
  }
  addQuad(e) {
    let t = this.minX, n = this.minY, i = this.maxX, s = this.maxY, o = e[0], a = e[1];
    t = o < t ? o : t, n = a < n ? a : n, i = o > i ? o : i, s = a > s ? a : s, o = e[2], a = e[3], t = o < t ? o : t, n = a < n ? a : n, i = o > i ? o : i, s = a > s ? a : s, o = e[4], a = e[5], t = o < t ? o : t, n = a < n ? a : n, i = o > i ? o : i, s = a > s ? a : s, o = e[6], a = e[7], t = o < t ? o : t, n = a < n ? a : n, i = o > i ? o : i, s = a > s ? a : s, this.minX = t, this.minY = n, this.maxX = i, this.maxY = s;
  }
  addFrame(e, t, n, i, s) {
    this.addFrameMatrix(e.worldTransform, t, n, i, s);
  }
  addFrameMatrix(e, t, n, i, s) {
    const o = e.a, a = e.b, l = e.c, u = e.d, h = e.tx, c = e.ty;
    let d = this.minX, f = this.minY, p = this.maxX, v = this.maxY, _ = o * t + l * n + h, g = a * t + u * n + c;
    d = _ < d ? _ : d, f = g < f ? g : f, p = _ > p ? _ : p, v = g > v ? g : v, _ = o * i + l * n + h, g = a * i + u * n + c, d = _ < d ? _ : d, f = g < f ? g : f, p = _ > p ? _ : p, v = g > v ? g : v, _ = o * t + l * s + h, g = a * t + u * s + c, d = _ < d ? _ : d, f = g < f ? g : f, p = _ > p ? _ : p, v = g > v ? g : v, _ = o * i + l * s + h, g = a * i + u * s + c, d = _ < d ? _ : d, f = g < f ? g : f, p = _ > p ? _ : p, v = g > v ? g : v, this.minX = d, this.minY = f, this.maxX = p, this.maxY = v;
  }
  addVertexData(e, t, n) {
    let i = this.minX, s = this.minY, o = this.maxX, a = this.maxY;
    for (let l = t; l < n; l += 2) {
      const u = e[l], h = e[l + 1];
      i = u < i ? u : i, s = h < s ? h : s, o = u > o ? u : o, a = h > a ? h : a;
    }
    this.minX = i, this.minY = s, this.maxX = o, this.maxY = a;
  }
  addVertices(e, t, n, i) {
    this.addVerticesMatrix(e.worldTransform, t, n, i);
  }
  addVerticesMatrix(e, t, n, i, s = 0, o = s) {
    const a = e.a, l = e.b, u = e.c, h = e.d, c = e.tx, d = e.ty;
    let f = this.minX, p = this.minY, v = this.maxX, _ = this.maxY;
    for (let g = n; g < i; g += 2) {
      const y = t[g], m = t[g + 1], x = a * y + u * m + c, w = h * m + l * y + d;
      f = Math.min(f, x - s), v = Math.max(v, x + s), p = Math.min(p, w - o), _ = Math.max(_, w + o);
    }
    this.minX = f, this.minY = p, this.maxX = v, this.maxY = _;
  }
  addBounds(e) {
    const t = this.minX, n = this.minY, i = this.maxX, s = this.maxY;
    this.minX = e.minX < t ? e.minX : t, this.minY = e.minY < n ? e.minY : n, this.maxX = e.maxX > i ? e.maxX : i, this.maxY = e.maxY > s ? e.maxY : s;
  }
  addBoundsMask(e, t) {
    const n = e.minX > t.minX ? e.minX : t.minX, i = e.minY > t.minY ? e.minY : t.minY, s = e.maxX < t.maxX ? e.maxX : t.maxX, o = e.maxY < t.maxY ? e.maxY : t.maxY;
    if (n <= s && i <= o) {
      const a = this.minX, l = this.minY, u = this.maxX, h = this.maxY;
      this.minX = n < a ? n : a, this.minY = i < l ? i : l, this.maxX = s > u ? s : u, this.maxY = o > h ? o : h;
    }
  }
  addBoundsMatrix(e, t) {
    this.addFrameMatrix(t, e.minX, e.minY, e.maxX, e.maxY);
  }
  addBoundsArea(e, t) {
    const n = e.minX > t.x ? e.minX : t.x, i = e.minY > t.y ? e.minY : t.y, s = e.maxX < t.x + t.width ? e.maxX : t.x + t.width, o = e.maxY < t.y + t.height ? e.maxY : t.y + t.height;
    if (n <= s && i <= o) {
      const a = this.minX, l = this.minY, u = this.maxX, h = this.maxY;
      this.minX = n < a ? n : a, this.minY = i < l ? i : l, this.maxX = s > u ? s : u, this.maxY = o > h ? o : h;
    }
  }
  pad(e = 0, t = e) {
    this.isEmpty() || (this.minX -= e, this.maxX += e, this.minY -= t, this.maxY += t);
  }
  addFramePad(e, t, n, i, s, o) {
    e -= s, t -= o, n += s, i += o, this.minX = this.minX < e ? this.minX : e, this.maxX = this.maxX > n ? this.maxX : n, this.minY = this.minY < t ? this.minY : t, this.maxY = this.maxY > i ? this.maxY : i;
  }
}
class be extends bo {
  constructor() {
    super(), this.tempDisplayObjectParent = null, this.transform = new Bf(), this.alpha = 1, this.visible = true, this.renderable = true, this.cullable = false, this.cullArea = null, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new Ml(), this._localBounds = null, this._boundsID = 0, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._maskRefCount = 0, this._destroyed = false, this.isSprite = false, this.isMask = false;
  }
  static mixin(e) {
    const t = Object.keys(e);
    for (let n = 0; n < t.length; ++n) {
      const i = t[n];
      Object.defineProperty(be.prototype, i, Object.getOwnPropertyDescriptor(e, i));
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
  getBounds(e, t) {
    return e || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), t || (this._boundsRect || (this._boundsRect = new te()), t = this._boundsRect), this._bounds.getRectangle(t);
  }
  getLocalBounds(e) {
    e || (this._localBoundsRect || (this._localBoundsRect = new te()), e = this._localBoundsRect), this._localBounds || (this._localBounds = new Ml());
    const t = this.transform, n = this.parent;
    this.parent = null, this._tempDisplayObjectParent.worldAlpha = (n == null ? void 0 : n.worldAlpha) ?? 1, this.transform = this._tempDisplayObjectParent.transform;
    const i = this._bounds, s = this._boundsID;
    this._bounds = this._localBounds;
    const o = this.getBounds(false, e);
    return this.parent = n, this.transform = t, this._bounds = i, this._bounds.updateID += this._boundsID - s, o;
  }
  toGlobal(e, t, n = false) {
    return n || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(e, t);
  }
  toLocal(e, t, n, i) {
    return t && (e = t.toGlobal(e, n, i)), i || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(e, n);
  }
  setParent(e) {
    if (!e || !e.addChild) throw new Error("setParent: Argument must be a Container");
    return e.addChild(this), e;
  }
  removeFromParent() {
    var _a2;
    (_a2 = this.parent) == null ? void 0 : _a2.removeChild(this);
  }
  setTransform(e = 0, t = 0, n = 1, i = 1, s = 0, o = 0, a = 0, l = 0, u = 0) {
    return this.position.x = e, this.position.y = t, this.scale.x = n || 1, this.scale.y = i || 1, this.rotation = s, this.skew.x = o, this.skew.y = a, this.pivot.x = l, this.pivot.y = u, this;
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
    return this.transform.rotation * jb;
  }
  set angle(e) {
    this.transform.rotation = e * Vb;
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
        const t = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        t && (t._maskRefCount--, t._maskRefCount === 0 && (t.renderable = true, t.isMask = false));
      }
      if (this._mask = e, this._mask) {
        const t = this._mask.isMaskData ? this._mask.maskObject : this._mask;
        t && (t._maskRefCount === 0 && (t.renderable = false, t.isMask = true), t._maskRefCount++);
      }
    }
  }
}
class QA extends be {
  constructor() {
    super(...arguments), this.sortDirty = null;
  }
}
be.prototype.displayObjectUpdateTransform = be.prototype.updateTransform;
const JA = new ye();
function eC(r5, e) {
  return r5.zIndex === e.zIndex ? r5._lastSortedIndex - e._lastSortedIndex : r5.zIndex - e.zIndex;
}
const R0 = class ld extends be {
  constructor() {
    super(), this.children = [], this.sortableChildren = ld.defaultSortableChildren, this.sortDirty = false;
  }
  onChildrenChange(e) {
  }
  addChild(...e) {
    if (e.length > 1) for (let t = 0; t < e.length; t++) this.addChild(e[t]);
    else {
      const t = e[0];
      t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = true, t.transform._parentID = -1, this.children.push(t), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", t, this, this.children.length - 1), t.emit("added", this);
    }
    return e[0];
  }
  addChildAt(e, t) {
    if (t < 0 || t > this.children.length) throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${this.children.length}`);
    return e.parent && e.parent.removeChild(e), e.parent = this, this.sortDirty = true, e.transform._parentID = -1, this.children.splice(t, 0, e), this._boundsID++, this.onChildrenChange(t), e.emit("added", this), this.emit("childAdded", e, this, t), e;
  }
  swapChildren(e, t) {
    if (e === t) return;
    const n = this.getChildIndex(e), i = this.getChildIndex(t);
    this.children[n] = t, this.children[i] = e, this.onChildrenChange(n < i ? n : i);
  }
  getChildIndex(e) {
    const t = this.children.indexOf(e);
    if (t === -1) throw new Error("The supplied DisplayObject must be a child of the caller");
    return t;
  }
  setChildIndex(e, t) {
    if (t < 0 || t >= this.children.length) throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
    const n = this.getChildIndex(e);
    Bi(this.children, n, 1), this.children.splice(t, 0, e), this.onChildrenChange(t);
  }
  getChildAt(e) {
    if (e < 0 || e >= this.children.length) throw new Error(`getChildAt: Index (${e}) does not exist.`);
    return this.children[e];
  }
  removeChild(...e) {
    if (e.length > 1) for (let t = 0; t < e.length; t++) this.removeChild(e[t]);
    else {
      const t = e[0], n = this.children.indexOf(t);
      if (n === -1) return null;
      t.parent = null, t.transform._parentID = -1, Bi(this.children, n, 1), this._boundsID++, this.onChildrenChange(n), t.emit("removed", this), this.emit("childRemoved", t, this, n);
    }
    return e[0];
  }
  removeChildAt(e) {
    const t = this.getChildAt(e);
    return t.parent = null, t.transform._parentID = -1, Bi(this.children, e, 1), this._boundsID++, this.onChildrenChange(e), t.emit("removed", this), this.emit("childRemoved", t, this, e), t;
  }
  removeChildren(e = 0, t = this.children.length) {
    const n = e, i = t, s = i - n;
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
    for (let t = 0, n = this.children.length; t < n; ++t) {
      const i = this.children[t];
      i._lastSortedIndex = t, !e && i.zIndex !== 0 && (e = true);
    }
    e && this.children.length > 1 && this.children.sort(eC), this.sortDirty = false;
  }
  updateTransform() {
    this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
    for (let e = 0, t = this.children.length; e < t; ++e) {
      const n = this.children[e];
      n.visible && n.updateTransform();
    }
  }
  calculateBounds() {
    this._bounds.clear(), this._calculateBounds();
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      if (!(!t.visible || !t.renderable)) if (t.calculateBounds(), t._mask) {
        const n = t._mask.isMaskData ? t._mask.maskObject : t._mask;
        n ? (n.calculateBounds(), this._bounds.addBoundsMask(t._bounds, n._bounds)) : this._bounds.addBounds(t._bounds);
      } else t.filterArea ? this._bounds.addBoundsArea(t._bounds, t.filterArea) : this._bounds.addBounds(t._bounds);
    }
    this._bounds.updateID = this._boundsID;
  }
  getLocalBounds(e, t = false) {
    const n = super.getLocalBounds(e);
    if (!t) for (let i = 0, s = this.children.length; i < s; ++i) {
      const o = this.children[i];
      o.visible && o.updateTransform();
    }
    return n;
  }
  _calculateBounds() {
  }
  _renderWithCulling(e) {
    const t = e.renderTexture.sourceFrame;
    if (!(t.width > 0 && t.height > 0)) return;
    let n, i;
    this.cullArea ? (n = this.cullArea, i = this.worldTransform) : this._render !== ld.prototype._render && (n = this.getBounds(true));
    const s = e.projection.transform;
    if (s && (i ? (i = JA.copyFrom(i), i.prepend(s)) : i = s), n && t.intersects(n, i)) this._render(e);
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
      for (let t = 0, n = this.children.length; t < n; ++t) this.children[t].render(e);
    }
  }
  renderAdvanced(e) {
    var _a2, _b2, _c2;
    const t = this.filters, n = this._mask;
    if (t) {
      this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
      for (let s = 0; s < t.length; s++) t[s].enabled && this._enabledFilters.push(t[s]);
    }
    const i = t && ((_a2 = this._enabledFilters) == null ? void 0 : _a2.length) || n && (!n.isMaskData || n.enabled && (n.autoDetect || n.type !== Be.NONE));
    if (i && e.batch.flush(), t && ((_b2 = this._enabledFilters) == null ? void 0 : _b2.length) && e.filter.push(this, this._enabledFilters), n && e.mask.push(this, this._mask), this.cullable) this._renderWithCulling(e);
    else {
      this._render(e);
      for (let s = 0, o = this.children.length; s < o; ++s) this.children[s].render(e);
    }
    i && e.batch.flush(), n && e.mask.pop(this), t && ((_c2 = this._enabledFilters) == null ? void 0 : _c2.length) && e.filter.pop();
  }
  _render(e) {
  }
  destroy(e) {
    super.destroy(), this.sortDirty = false;
    const t = typeof e == "boolean" ? e : e == null ? void 0 : e.children, n = this.removeChildren(0, this.children.length);
    if (t) for (let i = 0; i < n.length; ++i) n[i].destroy(e);
  }
  get width() {
    return this.scale.x * this.getLocalBounds().width;
  }
  set width(e) {
    const t = this.getLocalBounds().width;
    t !== 0 ? this.scale.x = e / t : this.scale.x = 1, this._width = e;
  }
  get height() {
    return this.scale.y * this.getLocalBounds().height;
  }
  set height(e) {
    const t = this.getLocalBounds().height;
    t !== 0 ? this.scale.y = e / t : this.scale.y = 1, this._height = e;
  }
};
R0.defaultSortableChildren = false;
let Je = R0;
Je.prototype.containerUpdateTransform = Je.prototype.updateTransform;
Object.defineProperties(z, { SORTABLE_CHILDREN: { get() {
  return Je.defaultSortableChildren;
}, set(r5) {
  ie("7.1.0", "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"), Je.defaultSortableChildren = r5;
} } });
const ys = new le(), tC = new Uint16Array([0, 1, 2, 0, 2, 3]);
class ts extends Je {
  constructor(e) {
    super(), this._anchor = new Sr(this._onAnchorUpdate, this, e ? e.defaultAnchor.x : 0, e ? e.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tintColor = new me(16777215), this._tintRGB = null, this.tint = 16777215, this.blendMode = Q.NORMAL, this._cachedTint = 16777215, this.uvs = null, this.texture = e || W.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = tC, this.pluginName = "batch", this.isSprite = true, this._roundPixels = z.ROUND_PIXELS;
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
    const t = this.transform.worldTransform, n = t.a, i = t.b, s = t.c, o = t.d, a = t.tx, l = t.ty, u = this.vertexData, h = e.trim, c = e.orig, d = this._anchor;
    let f = 0, p = 0, v = 0, _ = 0;
    if (h ? (p = h.x - d._x * c.width, f = p + h.width, _ = h.y - d._y * c.height, v = _ + h.height) : (p = -d._x * c.width, f = p + c.width, _ = -d._y * c.height, v = _ + c.height), u[0] = n * p + s * _ + a, u[1] = o * _ + i * p + l, u[2] = n * f + s * _ + a, u[3] = o * _ + i * f + l, u[4] = n * f + s * v + a, u[5] = o * v + i * f + l, u[6] = n * p + s * v + a, u[7] = o * v + i * p + l, this._roundPixels) {
      const g = z.RESOLUTION;
      for (let y = 0; y < u.length; ++y) u[y] = Math.round(u[y] * g) / g;
    }
  }
  calculateTrimmedVertices() {
    if (!this.vertexTrimmedData) this.vertexTrimmedData = new Float32Array(8);
    else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return;
    this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
    const e = this._texture, t = this.vertexTrimmedData, n = e.orig, i = this._anchor, s = this.transform.worldTransform, o = s.a, a = s.b, l = s.c, u = s.d, h = s.tx, c = s.ty, d = -i._x * n.width, f = d + n.width, p = -i._y * n.height, v = p + n.height;
    if (t[0] = o * d + l * p + h, t[1] = u * p + a * d + c, t[2] = o * f + l * p + h, t[3] = u * p + a * f + c, t[4] = o * f + l * v + h, t[5] = u * v + a * f + c, t[6] = o * d + l * v + h, t[7] = u * v + a * d + c, this._roundPixels) {
      const _ = z.RESOLUTION;
      for (let g = 0; g < t.length; ++g) t[g] = Math.round(t[g] * _) / _;
    }
  }
  _render(e) {
    this.calculateVertices(), e.batch.setObjectRenderer(e.plugins[this.pluginName]), e.plugins[this.pluginName].render(this);
  }
  _calculateBounds() {
    const e = this._texture.trim, t = this._texture.orig;
    !e || e.width === t.width && e.height === t.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData));
  }
  getLocalBounds(e) {
    return this.children.length === 0 ? (this._localBounds || (this._localBounds = new Ml()), this._localBounds.minX = this._texture.orig.width * -this._anchor._x, this._localBounds.minY = this._texture.orig.height * -this._anchor._y, this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new te()), e = this._localBoundsRect), this._localBounds.getRectangle(e)) : super.getLocalBounds.call(this, e);
  }
  containsPoint(e) {
    this.worldTransform.applyInverse(e, ys);
    const t = this._texture.orig.width, n = this._texture.orig.height, i = -t * this.anchor.x;
    let s = 0;
    return ys.x >= i && ys.x < i + t && (s = -n * this.anchor.y, ys.y >= s && ys.y < s + n);
  }
  destroy(e) {
    if (super.destroy(e), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, typeof e == "boolean" ? e : e == null ? void 0 : e.texture) {
      const t = typeof e == "boolean" ? e : e == null ? void 0 : e.baseTexture;
      this._texture.destroy(!!t);
    }
    this._texture = null;
  }
  static from(e, t) {
    const n = e instanceof W ? e : W.from(e, t);
    return new ts(n);
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
    const t = Kr(this.scale.x) || 1;
    this.scale.x = t * e / this._texture.orig.width, this._width = e;
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(e) {
    const t = Kr(this.scale.y) || 1;
    this.scale.y = t * e / this._texture.orig.height, this._height = e;
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
    this._texture !== e && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = e || W.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, e && (e.baseTexture.valid ? this._onTextureUpdate() : e.once("update", this._onTextureUpdate, this)));
  }
}
const M0 = new ye();
be.prototype._cacheAsBitmap = false;
be.prototype._cacheData = null;
be.prototype._cacheAsBitmapResolution = null;
be.prototype._cacheAsBitmapMultisample = null;
class rC {
  constructor() {
    this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null;
  }
}
Object.defineProperties(be.prototype, { cacheAsBitmapResolution: { get() {
  return this._cacheAsBitmapResolution;
}, set(r5) {
  r5 !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = r5, this.cacheAsBitmap && (this.cacheAsBitmap = false, this.cacheAsBitmap = true));
} }, cacheAsBitmapMultisample: { get() {
  return this._cacheAsBitmapMultisample;
}, set(r5) {
  r5 !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = r5, this.cacheAsBitmap && (this.cacheAsBitmap = false, this.cacheAsBitmap = true));
} }, cacheAsBitmap: { get() {
  return this._cacheAsBitmap;
}, set(r5) {
  if (this._cacheAsBitmap === r5) return;
  this._cacheAsBitmap = r5;
  let e;
  r5 ? (this._cacheData || (this._cacheData = new rC()), e = this._cacheData, e.originalRender = this.render, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (e = this._cacheData, e.sprite && this._destroyCachedDisplayObject(), this.render = e.originalRender, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea);
} } });
be.prototype._renderCached = function(r5) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(r5), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(r5));
};
be.prototype._initCachedDisplayObject = function(r5) {
  var _a2, _b2;
  if ((_a2 = this._cacheData) == null ? void 0 : _a2.sprite) return;
  const e = this.alpha;
  this.alpha = 1, r5.batch.flush();
  const t = this.getLocalBounds(new te(), true);
  if ((_b2 = this.filters) == null ? void 0 : _b2.length) {
    const d = this.filters[0].padding;
    t.pad(d);
  }
  const n = this.cacheAsBitmapResolution || r5.resolution;
  t.ceil(n), t.width = Math.max(t.width, 1 / n), t.height = Math.max(t.height, 1 / n);
  const i = r5.renderTexture.current, s = r5.renderTexture.sourceFrame.clone(), o = r5.renderTexture.destinationFrame.clone(), a = r5.projection.transform, l = Qn.create({ width: t.width, height: t.height, resolution: n, multisample: this.cacheAsBitmapMultisample ?? r5.multisample }), u = `cacheAsBitmap_${Wn()}`;
  this._cacheData.textureCacheId = u, ee.addToCache(l.baseTexture, u), W.addToCache(l, u);
  const h = this.transform.localTransform.copyTo(M0).invert().translate(-t.x, -t.y);
  this.render = this._cacheData.originalRender, r5.render(this, { renderTexture: l, clear: true, transform: h, skipUpdateTransform: false }), r5.framebuffer.blit(), r5.projection.transform = a, r5.renderTexture.bind(i, s, o), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = e;
  const c = new ts(l);
  c.transform.worldTransform = this.transform.worldTransform, c.anchor.x = -(t.x / t.width), c.anchor.y = -(t.y / t.height), c.alpha = e, c._bounds = this._bounds, this._cacheData.sprite = c, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = c.containsPoint.bind(c);
};
be.prototype._renderCachedCanvas = function(r5) {
  !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(r5), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(r5));
};
be.prototype._initCachedDisplayObjectCanvas = function(r5) {
  var _a2;
  if ((_a2 = this._cacheData) == null ? void 0 : _a2.sprite) return;
  const e = this.getLocalBounds(new te(), true), t = this.alpha;
  this.alpha = 1;
  const n = r5.canvasContext.activeContext, i = r5._projTransform, s = this.cacheAsBitmapResolution || r5.resolution;
  e.ceil(s), e.width = Math.max(e.width, 1 / s), e.height = Math.max(e.height, 1 / s);
  const o = Qn.create({ width: e.width, height: e.height, resolution: s }), a = `cacheAsBitmap_${Wn()}`;
  this._cacheData.textureCacheId = a, ee.addToCache(o.baseTexture, a), W.addToCache(o, a);
  const l = M0;
  this.transform.localTransform.copyTo(l), l.invert(), l.tx -= e.x, l.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, r5.render(this, { renderTexture: o, clear: true, transform: l, skipUpdateTransform: false }), r5.canvasContext.activeContext = n, r5._projTransform = i, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = t;
  const u = new ts(o);
  u.transform.worldTransform = this.transform.worldTransform, u.anchor.x = -(e.x / e.width), u.anchor.y = -(e.y / e.height), u.alpha = t, u._bounds = this._bounds, this._cacheData.sprite = u, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = r5._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = u.containsPoint.bind(u);
};
be.prototype._calculateCachedBounds = function() {
  this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID;
};
be.prototype._getCachedLocalBounds = function() {
  return this._cacheData.sprite.getLocalBounds(null);
};
be.prototype._destroyCachedDisplayObject = function() {
  this._cacheData.sprite._texture.destroy(true), this._cacheData.sprite = null, ee.removeFromCache(this._cacheData.textureCacheId), W.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null;
};
be.prototype._cacheAsBitmapDestroy = function(r5) {
  this.cacheAsBitmap = false, this.destroy(r5);
};
be.prototype.name = null;
Je.prototype.getChildByName = function(r5, e) {
  for (let t = 0, n = this.children.length; t < n; t++) if (this.children[t].name === r5) return this.children[t];
  if (e) for (let t = 0, n = this.children.length; t < n; t++) {
    const i = this.children[t];
    if (!i.getChildByName) continue;
    const s = i.getChildByName(r5, true);
    if (s) return s;
  }
  return null;
};
be.prototype.getGlobalPosition = function(r5 = new le(), e = false) {
  return this.parent ? this.parent.toGlobal(this.position, r5, e) : (r5.x = this.position.x, r5.y = this.position.y), r5;
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
    super(WA, nC, { uAlpha: 1 }), this.alpha = e;
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
function aC(r5) {
  const e = sC[r5], t = e.length;
  let n = oC, i = "";
  const s = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
  let o;
  for (let a = 0; a < r5; a++) {
    let l = s.replace("%index%", a.toString());
    o = a, a >= t && (o = r5 - a - 1), l = l.replace("%value%", e[o].toString()), i += l, i += `
`;
  }
  return n = n.replace("%blur%", i), n = n.replace("%size%", r5.toString()), n;
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
function uC(r5, e) {
  const t = Math.ceil(r5 / 2);
  let n = lC, i = "", s;
  e ? s = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : s = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
  for (let o = 0; o < r5; o++) {
    let a = s.replace("%index%", o.toString());
    a = a.replace("%sampleIndex%", `${o - (t - 1)}.0`), i += a, i += `
`;
  }
  return n = n.replace("%blur%", i), n = n.replace("%size%", r5.toString()), n;
}
class ud extends it {
  constructor(e, t = 8, n = 4, i = it.defaultResolution, s = 5) {
    const o = uC(s, e), a = aC(s);
    super(o, a), this.horizontal = e, this.resolution = i, this._quality = 0, this.quality = n, this.blur = t;
  }
  apply(e, t, n, i) {
    if (n ? this.horizontal ? this.uniforms.strength = 1 / n.width * (n.width / t.width) : this.uniforms.strength = 1 / n.height * (n.height / t.height) : this.horizontal ? this.uniforms.strength = 1 / e.renderer.width * (e.renderer.width / t.width) : this.uniforms.strength = 1 / e.renderer.height * (e.renderer.height / t.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, this.passes === 1) e.applyFilter(this, t, n, i);
    else {
      const s = e.getFilterTexture(), o = e.renderer;
      let a = t, l = s;
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
  constructor(e = 8, t = 4, n = it.defaultResolution, i = 5) {
    super(), this._repeatEdgePixels = false, this.blurXFilter = new ud(true, e, t, n, i), this.blurYFilter = new ud(false, e, t, n, i), this.resolution = n, this.quality = t, this.blur = e, this.repeatEdgePixels = false;
  }
  apply(e, t, n, i) {
    const s = Math.abs(this.blurXFilter.strength), o = Math.abs(this.blurYFilter.strength);
    if (s && o) {
      const a = e.getFilterTexture();
      this.blurXFilter.apply(e, t, a, sr.CLEAR), this.blurYFilter.apply(e, a, n, i), e.returnFilterTexture(a);
    } else o ? this.blurYFilter.apply(e, t, n, i) : this.blurXFilter.apply(e, t, n, i);
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
class hd extends it {
  constructor() {
    const e = { m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]), uAlpha: 1 };
    super(T0, cC, e), this.alpha = 1;
  }
  _loadMatrix(e, t = false) {
    let n = e;
    t && (this._multiply(n, this.uniforms.m, e), n = this._colorMatrix(n)), this.uniforms.m = n;
  }
  _multiply(e, t, n) {
    return e[0] = t[0] * n[0] + t[1] * n[5] + t[2] * n[10] + t[3] * n[15], e[1] = t[0] * n[1] + t[1] * n[6] + t[2] * n[11] + t[3] * n[16], e[2] = t[0] * n[2] + t[1] * n[7] + t[2] * n[12] + t[3] * n[17], e[3] = t[0] * n[3] + t[1] * n[8] + t[2] * n[13] + t[3] * n[18], e[4] = t[0] * n[4] + t[1] * n[9] + t[2] * n[14] + t[3] * n[19] + t[4], e[5] = t[5] * n[0] + t[6] * n[5] + t[7] * n[10] + t[8] * n[15], e[6] = t[5] * n[1] + t[6] * n[6] + t[7] * n[11] + t[8] * n[16], e[7] = t[5] * n[2] + t[6] * n[7] + t[7] * n[12] + t[8] * n[17], e[8] = t[5] * n[3] + t[6] * n[8] + t[7] * n[13] + t[8] * n[18], e[9] = t[5] * n[4] + t[6] * n[9] + t[7] * n[14] + t[8] * n[19] + t[9], e[10] = t[10] * n[0] + t[11] * n[5] + t[12] * n[10] + t[13] * n[15], e[11] = t[10] * n[1] + t[11] * n[6] + t[12] * n[11] + t[13] * n[16], e[12] = t[10] * n[2] + t[11] * n[7] + t[12] * n[12] + t[13] * n[17], e[13] = t[10] * n[3] + t[11] * n[8] + t[12] * n[13] + t[13] * n[18], e[14] = t[10] * n[4] + t[11] * n[9] + t[12] * n[14] + t[13] * n[19] + t[14], e[15] = t[15] * n[0] + t[16] * n[5] + t[17] * n[10] + t[18] * n[15], e[16] = t[15] * n[1] + t[16] * n[6] + t[17] * n[11] + t[18] * n[16], e[17] = t[15] * n[2] + t[16] * n[7] + t[17] * n[12] + t[18] * n[17], e[18] = t[15] * n[3] + t[16] * n[8] + t[17] * n[13] + t[18] * n[18], e[19] = t[15] * n[4] + t[16] * n[9] + t[17] * n[14] + t[18] * n[19] + t[19], e;
  }
  _colorMatrix(e) {
    const t = new Float32Array(e);
    return t[4] /= 255, t[9] /= 255, t[14] /= 255, t[19] /= 255, t;
  }
  brightness(e, t) {
    const n = [e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(n, t);
  }
  tint(e, t) {
    const [n, i, s] = me.shared.setValue(e).toArray(), o = [n, 0, 0, 0, 0, 0, i, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(o, t);
  }
  greyscale(e, t) {
    const n = [e, e, e, 0, 0, e, e, e, 0, 0, e, e, e, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(n, t);
  }
  blackAndWhite(e) {
    const t = [0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, e);
  }
  hue(e, t) {
    e = (e || 0) / 180 * Math.PI;
    const n = Math.cos(e), i = Math.sin(e), s = Math.sqrt, o = 1 / 3, a = s(o), l = n + (1 - n) * o, u = o * (1 - n) - a * i, h = o * (1 - n) + a * i, c = o * (1 - n) + a * i, d = n + o * (1 - n), f = o * (1 - n) - a * i, p = o * (1 - n) - a * i, v = o * (1 - n) + a * i, _ = n + o * (1 - n), g = [l, u, h, 0, 0, c, d, f, 0, 0, p, v, _, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(g, t);
  }
  contrast(e, t) {
    const n = (e || 0) + 1, i = -0.5 * (n - 1), s = [n, 0, 0, 0, i, 0, n, 0, 0, i, 0, 0, n, 0, i, 0, 0, 0, 1, 0];
    this._loadMatrix(s, t);
  }
  saturate(e = 0, t) {
    const n = e * 2 / 3 + 1, i = (n - 1) * -0.5, s = [n, i, i, 0, 0, i, n, i, 0, 0, i, i, n, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(s, t);
  }
  desaturate() {
    this.saturate(-1);
  }
  negative(e) {
    const t = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, e);
  }
  sepia(e) {
    const t = [0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, e);
  }
  technicolor(e) {
    const t = [1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0, 11.793603434377337, -0.3087833385928097, 1.7658908555458428, -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616, -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
    this._loadMatrix(t, e);
  }
  polaroid(e) {
    const t = [1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, e);
  }
  toBGR(e) {
    const t = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, e);
  }
  kodachrome(e) {
    const t = [1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502, -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
    this._loadMatrix(t, e);
  }
  browni(e) {
    const t = [0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0, 47.43192855600873, -0.037703249837783157, 0.8609577587992641, 0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335, -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
    this._loadMatrix(t, e);
  }
  vintage(e) {
    const t = [0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 9.651285835294123, 0.02578397704808868, 0.6441188644374771, 0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719, -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
    this._loadMatrix(t, e);
  }
  colorTone(e, t, n, i, s) {
    e = e || 0.2, t = t || 0.15, n = n || 16770432, i = i || 3375104;
    const o = me.shared, [a, l, u] = o.setValue(n).toArray(), [h, c, d] = o.setValue(i).toArray(), f = [0.3, 0.59, 0.11, 0, 0, a, l, u, e, 0, h, c, d, t, 0, a - h, l - c, u - d, 0, 0];
    this._loadMatrix(f, s);
  }
  night(e, t) {
    e = e || 0.1;
    const n = [e * -2, -e, 0, 0, 0, -e, 0, e, 0, 0, 0, e, e * 2, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(n, t);
  }
  predator(e, t) {
    const n = [11.224130630493164 * e, -4.794486999511719 * e, -2.8746118545532227 * e, 0 * e, 0.40342438220977783 * e, -3.6330697536468506 * e, 9.193157196044922 * e, -2.951810836791992 * e, 0 * e, -1.316135048866272 * e, -3.2184197902679443 * e, -4.2375030517578125 * e, 7.476448059082031 * e, 0 * e, 0.8044459223747253 * e, 0, 0, 0, 1, 0];
    this._loadMatrix(n, t);
  }
  lsd(e) {
    const t = [2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0, 1, 0];
    this._loadMatrix(t, e);
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
hd.prototype.grayscale = hd.prototype.greyscale;
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
  constructor(e, t) {
    const n = new ye();
    e.renderable = false, super(fC, dC, { mapSampler: e._texture, filterMatrix: n, scale: { x: 1, y: 1 }, rotation: new Float32Array([1, 0, 0, 1]) }), this.maskSprite = e, this.maskMatrix = n, t == null && (t = 20), this.scale = new le(t, t);
  }
  apply(e, t, n, i) {
    this.uniforms.filterMatrix = e.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
    const s = this.maskSprite.worldTransform, o = Math.sqrt(s.a * s.a + s.b * s.b), a = Math.sqrt(s.c * s.c + s.d * s.d);
    o !== 0 && a !== 0 && (this.uniforms.rotation[0] = s.a / o, this.uniforms.rotation[1] = s.b / o, this.uniforms.rotation[2] = s.c / a, this.uniforms.rotation[3] = s.d / a), e.applyFilter(this, t, n, i);
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
  constructor(e = 0.5, t = Math.random()) {
    super(T0, vC, { uNoise: 0, uSeed: 0 }), this.noise = e, this.seed = t;
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
const dg = { AlphaFilter: iC, BlurFilter: hC, BlurFilterPass: ud, ColorMatrixFilter: hd, DisplacementFilter: pC, FXAAFilter: yC, NoiseFilter: _C };
Object.entries(dg).forEach(([r5, e]) => {
  Object.defineProperty(dg, r5, { get() {
    return ie("7.1.0", `filters.${r5} has moved to ${r5}`), e;
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
    this.tickerAdded || !this.domElement || (yt.system.add(this.tickerUpdate, this, Xn.INTERACTION), this.tickerAdded = true);
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
const Vr = new xC();
class Po {
  constructor(e) {
    this.bubbles = true, this.cancelBubble = true, this.cancelable = false, this.composed = false, this.defaultPrevented = false, this.eventPhase = Po.prototype.NONE, this.propagationStopped = false, this.propagationImmediatelyStopped = false, this.layer = new le(), this.page = new le(), this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = e;
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
  initEvent(e, t, n) {
    throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.");
  }
  initUIEvent(e, t, n, i, s) {
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
class kl extends Po {
  constructor() {
    super(...arguments), this.client = new le(), this.movement = new le(), this.offset = new le(), this.global = new le(), this.screen = new le();
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
  getLocalPosition(e, t, n) {
    return e.worldTransform.applyInverse(n || this.global, t);
  }
  getModifierState(e) {
    return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(e);
  }
  initMouseEvent(e, t, n, i, s, o, a, l, u, h, c, d, f, p, v) {
    throw new Error("Method not implemented.");
  }
}
class Nt extends kl {
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
class Li extends kl {
  constructor() {
    super(...arguments), this.DOM_DELTA_PIXEL = 0, this.DOM_DELTA_LINE = 1, this.DOM_DELTA_PAGE = 2;
  }
}
Li.DOM_DELTA_PIXEL = 0, Li.DOM_DELTA_LINE = 1, Li.DOM_DELTA_PAGE = 2;
const wC = 2048, EC = new le(), Sh = new le();
class TC {
  constructor(e) {
    this.dispatch = new bo(), this.moveOnAll = false, this.enableGlobalMoveEvents = true, this.mappingState = { trackingData: {} }, this.eventPool = /* @__PURE__ */ new Map(), this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = false, this.rootTarget = e, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel);
  }
  addEventMapping(e, t) {
    this.mappingTable[e] || (this.mappingTable[e] = []), this.mappingTable[e].push({ fn: t, priority: 0 }), this.mappingTable[e].sort((n, i) => n.priority - i.priority);
  }
  dispatchEvent(e, t) {
    e.propagationStopped = false, e.propagationImmediatelyStopped = false, this.propagate(e, t), this.dispatch.emit(t || e.type, e);
  }
  mapEvent(e) {
    if (!this.rootTarget) return;
    const t = this.mappingTable[e.type];
    if (t) for (let n = 0, i = t.length; n < i; n++) t[n].fn(e);
    else console.warn(`[EventBoundary]: Event mapping not defined for ${e.type}`);
  }
  hitTest(e, t) {
    Vr.pauseUpdate = true;
    const n = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive", i = this[n](this.rootTarget, this.rootTarget.eventMode, EC.set(e, t), this.hitTestFn, this.hitPruneFn);
    return i && i[0];
  }
  propagate(e, t) {
    if (!e.target) return;
    const n = e.composedPath();
    e.eventPhase = e.CAPTURING_PHASE;
    for (let i = 0, s = n.length - 1; i < s; i++) if (e.currentTarget = n[i], this.notifyTarget(e, t), e.propagationStopped || e.propagationImmediatelyStopped) return;
    if (e.eventPhase = e.AT_TARGET, e.currentTarget = e.target, this.notifyTarget(e, t), !(e.propagationStopped || e.propagationImmediatelyStopped)) {
      e.eventPhase = e.BUBBLING_PHASE;
      for (let i = n.length - 2; i >= 0; i--) if (e.currentTarget = n[i], this.notifyTarget(e, t), e.propagationStopped || e.propagationImmediatelyStopped) return;
    }
  }
  all(e, t, n = this._allInteractiveElements) {
    if (n.length === 0) return;
    e.eventPhase = e.BUBBLING_PHASE;
    const i = Array.isArray(t) ? t : [t];
    for (let s = n.length - 1; s >= 0; s--) i.forEach((o) => {
      e.currentTarget = n[s], this.notifyTarget(e, o);
    });
  }
  propagationPath(e) {
    const t = [e];
    for (let n = 0; n < wC && e !== this.rootTarget; n++) {
      if (!e.parent) throw new Error("Cannot find propagation path to disconnected target");
      t.push(e.parent), e = e.parent;
    }
    return t.reverse(), t;
  }
  hitTestMoveRecursive(e, t, n, i, s, o = false) {
    let a = false;
    if (this._interactivePrune(e)) return null;
    if ((e.eventMode === "dynamic" || t === "dynamic") && (Vr.pauseUpdate = false), e.interactiveChildren && e.children) {
      const h = e.children;
      for (let c = h.length - 1; c >= 0; c--) {
        const d = h[c], f = this.hitTestMoveRecursive(d, this._isInteractive(t) ? t : d.eventMode, n, i, s, o || s(e, n));
        if (f) {
          if (f.length > 0 && !f[f.length - 1].parent) continue;
          const p = e.isInteractive();
          (f.length > 0 || p) && (p && this._allInteractiveElements.push(e), f.push(e)), this._hitElements.length === 0 && (this._hitElements = f), a = true;
        }
      }
    }
    const l = this._isInteractive(t), u = e.isInteractive();
    return l && u && this._allInteractiveElements.push(e), o || this._hitElements.length > 0 ? null : a ? this._hitElements : l && !s(e, n) && i(e, n) ? u ? [e] : [] : null;
  }
  hitTestRecursive(e, t, n, i, s) {
    if (this._interactivePrune(e) || s(e, n)) return null;
    if ((e.eventMode === "dynamic" || t === "dynamic") && (Vr.pauseUpdate = false), e.interactiveChildren && e.children) {
      const l = e.children;
      for (let u = l.length - 1; u >= 0; u--) {
        const h = l[u], c = this.hitTestRecursive(h, this._isInteractive(t) ? t : h.eventMode, n, i, s);
        if (c) {
          if (c.length > 0 && !c[c.length - 1].parent) continue;
          const d = e.isInteractive();
          return (c.length > 0 || d) && c.push(e), c;
        }
      }
    }
    const o = this._isInteractive(t), a = e.isInteractive();
    return o && i(e, n) ? a ? [e] : [] : null;
  }
  _isInteractive(e) {
    return e === "static" || e === "dynamic";
  }
  _interactivePrune(e) {
    return !!(!e || e.isMask || !e.visible || !e.renderable || e.eventMode === "none" || e.eventMode === "passive" && !e.interactiveChildren || e.isMask);
  }
  hitPruneFn(e, t) {
    var _a2;
    if (e.hitArea && (e.worldTransform.applyInverse(t, Sh), !e.hitArea.contains(Sh.x, Sh.y))) return true;
    if (e._mask) {
      const n = e._mask.isMaskData ? e._mask.maskObject : e._mask;
      if (n && !((_a2 = n.containsPoint) == null ? void 0 : _a2.call(n, t))) return true;
    }
    return false;
  }
  hitTestFn(e, t) {
    return e.eventMode === "passive" ? false : e.hitArea ? true : e.containsPoint ? e.containsPoint(t) : false;
  }
  notifyTarget(e, t) {
    var _a2, _b2;
    t = t ?? e.type;
    const n = `on${t}`;
    (_b2 = (_a2 = e.currentTarget)[n]) == null ? void 0 : _b2.call(_a2, e);
    const i = e.eventPhase === e.CAPTURING_PHASE || e.eventPhase === e.AT_TARGET ? `${t}capture` : t;
    this.notifyListeners(e, i), e.eventPhase === e.AT_TARGET && this.notifyListeners(e, t);
  }
  mapPointerDown(e) {
    if (!(e instanceof Nt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const t = this.createPointerEvent(e);
    if (this.dispatchEvent(t, "pointerdown"), t.pointerType === "touch") this.dispatchEvent(t, "touchstart");
    else if (t.pointerType === "mouse" || t.pointerType === "pen") {
      const i = t.button === 2;
      this.dispatchEvent(t, i ? "rightdown" : "mousedown");
    }
    const n = this.trackingData(e.pointerId);
    n.pressTargetsByButton[e.button] = t.composedPath(), this.freeEvent(t);
  }
  mapPointerMove(e) {
    var _a2, _b2;
    if (!(e instanceof Nt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = true;
    const t = this.createPointerEvent(e);
    this._isPointerMoveEvent = false;
    const n = t.pointerType === "mouse" || t.pointerType === "pen", i = this.trackingData(e.pointerId), s = this.findMountedTarget(i.overTargets);
    if (((_a2 = i.overTargets) == null ? void 0 : _a2.length) > 0 && s !== t.target) {
      const l = e.type === "mousemove" ? "mouseout" : "pointerout", u = this.createPointerEvent(e, l, s);
      if (this.dispatchEvent(u, "pointerout"), n && this.dispatchEvent(u, "mouseout"), !t.composedPath().includes(s)) {
        const h = this.createPointerEvent(e, "pointerleave", s);
        for (h.eventPhase = h.AT_TARGET; h.target && !t.composedPath().includes(h.target); ) h.currentTarget = h.target, this.notifyTarget(h), n && this.notifyTarget(h, "mouseleave"), h.target = h.target.parent;
        this.freeEvent(h);
      }
      this.freeEvent(u);
    }
    if (s !== t.target) {
      const l = e.type === "mousemove" ? "mouseover" : "pointerover", u = this.clonePointerEvent(t, l);
      this.dispatchEvent(u, "pointerover"), n && this.dispatchEvent(u, "mouseover");
      let h = s == null ? void 0 : s.parent;
      for (; h && h !== this.rootTarget.parent && h !== t.target; ) h = h.parent;
      if (!h || h === this.rootTarget.parent) {
        const c = this.clonePointerEvent(t, "pointerenter");
        for (c.eventPhase = c.AT_TARGET; c.target && c.target !== s && c.target !== this.rootTarget.parent; ) c.currentTarget = c.target, this.notifyTarget(c), n && this.notifyTarget(c, "mouseenter"), c.target = c.target.parent;
        this.freeEvent(c);
      }
      this.freeEvent(u);
    }
    const o = [], a = this.enableGlobalMoveEvents ?? true;
    this.moveOnAll ? o.push("pointermove") : this.dispatchEvent(t, "pointermove"), a && o.push("globalpointermove"), t.pointerType === "touch" && (this.moveOnAll ? o.splice(1, 0, "touchmove") : this.dispatchEvent(t, "touchmove"), a && o.push("globaltouchmove")), n && (this.moveOnAll ? o.splice(1, 0, "mousemove") : this.dispatchEvent(t, "mousemove"), a && o.push("globalmousemove"), this.cursor = (_b2 = t.target) == null ? void 0 : _b2.cursor), o.length > 0 && this.all(t, o), this._allInteractiveElements.length = 0, this._hitElements.length = 0, i.overTargets = t.composedPath(), this.freeEvent(t);
  }
  mapPointerOver(e) {
    var _a2;
    if (!(e instanceof Nt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const t = this.trackingData(e.pointerId), n = this.createPointerEvent(e), i = n.pointerType === "mouse" || n.pointerType === "pen";
    this.dispatchEvent(n, "pointerover"), i && this.dispatchEvent(n, "mouseover"), n.pointerType === "mouse" && (this.cursor = (_a2 = n.target) == null ? void 0 : _a2.cursor);
    const s = this.clonePointerEvent(n, "pointerenter");
    for (s.eventPhase = s.AT_TARGET; s.target && s.target !== this.rootTarget.parent; ) s.currentTarget = s.target, this.notifyTarget(s), i && this.notifyTarget(s, "mouseenter"), s.target = s.target.parent;
    t.overTargets = n.composedPath(), this.freeEvent(n), this.freeEvent(s);
  }
  mapPointerOut(e) {
    if (!(e instanceof Nt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const t = this.trackingData(e.pointerId);
    if (t.overTargets) {
      const n = e.pointerType === "mouse" || e.pointerType === "pen", i = this.findMountedTarget(t.overTargets), s = this.createPointerEvent(e, "pointerout", i);
      this.dispatchEvent(s), n && this.dispatchEvent(s, "mouseout");
      const o = this.createPointerEvent(e, "pointerleave", i);
      for (o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent; ) o.currentTarget = o.target, this.notifyTarget(o), n && this.notifyTarget(o, "mouseleave"), o.target = o.target.parent;
      t.overTargets = null, this.freeEvent(s), this.freeEvent(o);
    }
    this.cursor = null;
  }
  mapPointerUp(e) {
    if (!(e instanceof Nt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const t = performance.now(), n = this.createPointerEvent(e);
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
      a.target = o, a.path = null, i.clicksByButton[e.button] || (i.clicksByButton[e.button] = { clickCount: 0, target: a.target, timeStamp: t });
      const l = i.clicksByButton[e.button];
      if (l.target === a.target && t - l.timeStamp < 200 ? ++l.clickCount : l.clickCount = 1, l.target = a.target, l.timeStamp = t, a.detail = l.clickCount, a.pointerType === "mouse") {
        const u = a.button === 2;
        this.dispatchEvent(a, u ? "rightclick" : "click");
      } else a.pointerType === "touch" && this.dispatchEvent(a, "tap");
      this.dispatchEvent(a, "pointertap"), this.freeEvent(a);
    }
    this.freeEvent(n);
  }
  mapPointerUpOutside(e) {
    if (!(e instanceof Nt)) {
      console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
      return;
    }
    const t = this.trackingData(e.pointerId), n = this.findMountedTarget(t.pressTargetsByButton[e.button]), i = this.createPointerEvent(e);
    if (n) {
      let s = n;
      for (; s; ) i.currentTarget = s, this.notifyTarget(i, "pointerupoutside"), i.pointerType === "touch" ? this.notifyTarget(i, "touchendoutside") : (i.pointerType === "mouse" || i.pointerType === "pen") && this.notifyTarget(i, i.button === 2 ? "rightupoutside" : "mouseupoutside"), s = s.parent;
      delete t.pressTargetsByButton[e.button];
    }
    this.freeEvent(i);
  }
  mapWheel(e) {
    if (!(e instanceof Li)) {
      console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
      return;
    }
    const t = this.createWheelEvent(e);
    this.dispatchEvent(t), this.freeEvent(t);
  }
  findMountedTarget(e) {
    if (!e) return null;
    let t = e[0];
    for (let n = 1; n < e.length && e[n].parent === t; n++) t = e[n];
    return t;
  }
  createPointerEvent(e, t, n) {
    const i = this.allocateEvent(Nt);
    return this.copyPointerData(e, i), this.copyMouseData(e, i), this.copyData(e, i), i.nativeEvent = e.nativeEvent, i.originalEvent = e, i.target = n ?? this.hitTest(i.global.x, i.global.y) ?? this._hitElements[0], typeof t == "string" && (i.type = t), i;
  }
  createWheelEvent(e) {
    const t = this.allocateEvent(Li);
    return this.copyWheelData(e, t), this.copyMouseData(e, t), this.copyData(e, t), t.nativeEvent = e.nativeEvent, t.originalEvent = e, t.target = this.hitTest(t.global.x, t.global.y), t;
  }
  clonePointerEvent(e, t) {
    const n = this.allocateEvent(Nt);
    return n.nativeEvent = e.nativeEvent, n.originalEvent = e.originalEvent, this.copyPointerData(e, n), this.copyMouseData(e, n), this.copyData(e, n), n.target = e.target, n.path = e.composedPath().slice(), n.type = t ?? n.type, n;
  }
  copyWheelData(e, t) {
    t.deltaMode = e.deltaMode, t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ;
  }
  copyPointerData(e, t) {
    e instanceof Nt && t instanceof Nt && (t.pointerId = e.pointerId, t.width = e.width, t.height = e.height, t.isPrimary = e.isPrimary, t.pointerType = e.pointerType, t.pressure = e.pressure, t.tangentialPressure = e.tangentialPressure, t.tiltX = e.tiltX, t.tiltY = e.tiltY, t.twist = e.twist);
  }
  copyMouseData(e, t) {
    e instanceof kl && t instanceof kl && (t.altKey = e.altKey, t.button = e.button, t.buttons = e.buttons, t.client.copyFrom(e.client), t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.movement.copyFrom(e.movement), t.screen.copyFrom(e.screen), t.shiftKey = e.shiftKey, t.global.copyFrom(e.global));
  }
  copyData(e, t) {
    t.isTrusted = e.isTrusted, t.srcElement = e.srcElement, t.timeStamp = performance.now(), t.type = e.type, t.detail = e.detail, t.view = e.view, t.which = e.which, t.layer.copyFrom(e.layer), t.page.copyFrom(e.page);
  }
  trackingData(e) {
    return this.mappingState.trackingData[e] || (this.mappingState.trackingData[e] = { pressTargetsByButton: {}, clicksByButton: {}, overTarget: null }), this.mappingState.trackingData[e];
  }
  allocateEvent(e) {
    this.eventPool.has(e) || this.eventPool.set(e, []);
    const t = this.eventPool.get(e).pop() || new e(this);
    return t.eventPhase = t.NONE, t.currentTarget = null, t.path = null, t.target = null, t;
  }
  freeEvent(e) {
    if (e.manager !== this) throw new Error("It is illegal to free an event not managed by this EventBoundary!");
    const t = e.constructor;
    this.eventPool.has(t) || this.eventPool.set(t, []), this.eventPool.get(t).push(e);
  }
  notifyListeners(e, t) {
    const n = e.currentTarget._events[t];
    if (n && e.currentTarget.isInteractive()) if ("fn" in n) n.once && e.currentTarget.removeListener(t, n.fn, void 0, true), n.fn.call(n.context, e);
    else for (let i = 0, s = n.length; i < s && !e.propagationImmediatelyStopped; i++) n[i].once && e.currentTarget.removeListener(t, n[i].fn, void 0, true), n[i].fn.call(n[i].context, e);
  }
}
const SC = 1, bC = { touchstart: "pointerdown", touchend: "pointerup", touchendoutside: "pointerupoutside", touchmove: "pointermove", touchcancel: "pointercancel" }, cd = class dd {
  constructor(e) {
    this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = e, this.rootBoundary = new TC(null), Vr.init(this), this.autoPreventDefault = true, this.eventsAdded = false, this.rootPointerEvent = new Nt(null), this.rootWheelEvent = new Li(null), this.cursorStyles = { default: "inherit", pointer: "pointer" }, this.features = new Proxy({ ...dd.defaultEventFeatures }, { set: (t, n, i) => (n === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = i), t[n] = i, true) }), this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerOverOut = this.onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this);
  }
  static get defaultEventMode() {
    return this._defaultEventMode;
  }
  init(e) {
    const { view: t, resolution: n } = this.renderer;
    this.setTargetElement(t), this.resolution = n, dd._defaultEventMode = e.eventMode ?? "auto", Object.assign(this.features, e.eventFeatures ?? {}), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove;
  }
  resolutionChange(e) {
    this.resolution = e;
  }
  destroy() {
    this.setTargetElement(null), this.renderer = null;
  }
  setCursor(e) {
    e = e || "default";
    let t = true;
    if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (t = false), this.currentCursor === e) return;
    this.currentCursor = e;
    const n = this.cursorStyles[e];
    if (n) switch (typeof n) {
      case "string":
        t && (this.domElement.style.cursor = n);
        break;
      case "function":
        n(e);
        break;
      case "object":
        t && Object.assign(this.domElement.style, n);
        break;
    }
    else t && typeof e == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, e) && (this.domElement.style.cursor = e);
  }
  get pointer() {
    return this.rootPointerEvent;
  }
  onPointerDown(e) {
    if (!this.features.click) return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    const t = this.normalizeToPointerData(e);
    this.autoPreventDefault && t[0].isNormalized && (e.cancelable || !("cancelable" in e)) && e.preventDefault();
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n], o = this.bootstrapEvent(this.rootPointerEvent, s);
      this.rootBoundary.mapEvent(o);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerMove(e) {
    if (!this.features.move) return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, Vr.pointerMoved();
    const t = this.normalizeToPointerData(e);
    for (let n = 0, i = t.length; n < i; n++) {
      const s = this.bootstrapEvent(this.rootPointerEvent, t[n]);
      this.rootBoundary.mapEvent(s);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerUp(e) {
    if (!this.features.click) return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    let t = e.target;
    e.composedPath && e.composedPath().length > 0 && (t = e.composedPath()[0]);
    const n = t !== this.domElement ? "outside" : "", i = this.normalizeToPointerData(e);
    for (let s = 0, o = i.length; s < o; s++) {
      const a = this.bootstrapEvent(this.rootPointerEvent, i[s]);
      a.type += n, this.rootBoundary.mapEvent(a);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onPointerOverOut(e) {
    if (!this.features.click) return;
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
    const t = this.normalizeToPointerData(e);
    for (let n = 0, i = t.length; n < i; n++) {
      const s = this.bootstrapEvent(this.rootPointerEvent, t[n]);
      this.rootBoundary.mapEvent(s);
    }
    this.setCursor(this.rootBoundary.cursor);
  }
  onWheel(e) {
    if (!this.features.wheel) return;
    const t = this.normalizeWheelEvent(e);
    this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(t);
  }
  setTargetElement(e) {
    this.removeEvents(), this.domElement = e, Vr.domElement = e, this.addEvents();
  }
  addEvents() {
    if (this.eventsAdded || !this.domElement) return;
    Vr.addTickerListener();
    const e = this.domElement.style;
    e && (globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "none", e.msTouchAction = "none") : this.supportsPointerEvents && (e.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, true), this.domElement.addEventListener("pointerdown", this.onPointerDown, true), this.domElement.addEventListener("pointerleave", this.onPointerOverOut, true), this.domElement.addEventListener("pointerover", this.onPointerOverOut, true), globalThis.addEventListener("pointerup", this.onPointerUp, true)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, true), this.domElement.addEventListener("mousedown", this.onPointerDown, true), this.domElement.addEventListener("mouseout", this.onPointerOverOut, true), this.domElement.addEventListener("mouseover", this.onPointerOverOut, true), globalThis.addEventListener("mouseup", this.onPointerUp, true), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this.onPointerDown, true), this.domElement.addEventListener("touchend", this.onPointerUp, true), this.domElement.addEventListener("touchmove", this.onPointerMove, true))), this.domElement.addEventListener("wheel", this.onWheel, { passive: true, capture: true }), this.eventsAdded = true;
  }
  removeEvents() {
    if (!this.eventsAdded || !this.domElement) return;
    Vr.removeTickerListener();
    const e = this.domElement.style;
    globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "", e.msTouchAction = "") : this.supportsPointerEvents && (e.touchAction = ""), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, true), this.domElement.removeEventListener("pointerdown", this.onPointerDown, true), this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, true), this.domElement.removeEventListener("pointerover", this.onPointerOverOut, true), globalThis.removeEventListener("pointerup", this.onPointerUp, true)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, true), this.domElement.removeEventListener("mousedown", this.onPointerDown, true), this.domElement.removeEventListener("mouseout", this.onPointerOverOut, true), this.domElement.removeEventListener("mouseover", this.onPointerOverOut, true), globalThis.removeEventListener("mouseup", this.onPointerUp, true), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this.onPointerDown, true), this.domElement.removeEventListener("touchend", this.onPointerUp, true), this.domElement.removeEventListener("touchmove", this.onPointerMove, true))), this.domElement.removeEventListener("wheel", this.onWheel, true), this.domElement = null, this.eventsAdded = false;
  }
  mapPositionToPoint(e, t, n) {
    const i = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : { width: this.domElement.width, height: this.domElement.height, left: 0, top: 0 }, s = 1 / this.resolution;
    e.x = (t - i.left) * (this.domElement.width / i.width) * s, e.y = (n - i.top) * (this.domElement.height / i.height) * s;
  }
  normalizeToPointerData(e) {
    const t = [];
    if (this.supportsTouchEvents && e instanceof TouchEvent) for (let n = 0, i = e.changedTouches.length; n < i; n++) {
      const s = e.changedTouches[n];
      typeof s.button > "u" && (s.button = 0), typeof s.buttons > "u" && (s.buttons = 1), typeof s.isPrimary > "u" && (s.isPrimary = e.touches.length === 1 && e.type === "touchstart"), typeof s.width > "u" && (s.width = s.radiusX || 1), typeof s.height > "u" && (s.height = s.radiusY || 1), typeof s.tiltX > "u" && (s.tiltX = 0), typeof s.tiltY > "u" && (s.tiltY = 0), typeof s.pointerType > "u" && (s.pointerType = "touch"), typeof s.pointerId > "u" && (s.pointerId = s.identifier || 0), typeof s.pressure > "u" && (s.pressure = s.force || 0.5), typeof s.twist > "u" && (s.twist = 0), typeof s.tangentialPressure > "u" && (s.tangentialPressure = 0), typeof s.layerX > "u" && (s.layerX = s.offsetX = s.clientX), typeof s.layerY > "u" && (s.layerY = s.offsetY = s.clientY), s.isNormalized = true, s.type = e.type, t.push(s);
    }
    else if (!globalThis.MouseEvent || e instanceof MouseEvent && (!this.supportsPointerEvents || !(e instanceof globalThis.PointerEvent))) {
      const n = e;
      typeof n.isPrimary > "u" && (n.isPrimary = true), typeof n.width > "u" && (n.width = 1), typeof n.height > "u" && (n.height = 1), typeof n.tiltX > "u" && (n.tiltX = 0), typeof n.tiltY > "u" && (n.tiltY = 0), typeof n.pointerType > "u" && (n.pointerType = "mouse"), typeof n.pointerId > "u" && (n.pointerId = SC), typeof n.pressure > "u" && (n.pressure = 0.5), typeof n.twist > "u" && (n.twist = 0), typeof n.tangentialPressure > "u" && (n.tangentialPressure = 0), n.isNormalized = true, t.push(n);
    } else t.push(e);
    return t;
  }
  normalizeWheelEvent(e) {
    const t = this.rootWheelEvent;
    return this.transferMouseData(t, e), t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ, t.deltaMode = e.deltaMode, this.mapPositionToPoint(t.screen, e.clientX, e.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.nativeEvent = e, t.type = e.type, t;
  }
  bootstrapEvent(e, t) {
    return e.originalEvent = null, e.nativeEvent = t, e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist, this.transferMouseData(e, t), this.mapPositionToPoint(e.screen, t.clientX, t.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.isTrusted = t.isTrusted, e.type === "pointerleave" && (e.type = "pointerout"), e.type.startsWith("mouse") && (e.type = e.type.replace("mouse", "pointer")), e.type.startsWith("touch") && (e.type = bC[e.type] || e.type), e;
  }
  transferMouseData(e, t) {
    e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = performance.now(), e.type = t.type, e.altKey = t.altKey, e.button = t.button, e.buttons = t.buttons, e.client.x = t.clientX, e.client.y = t.clientY, e.ctrlKey = t.ctrlKey, e.metaKey = t.metaKey, e.movement.x = t.movementX, e.movement.y = t.movementY, e.page.x = t.pageX, e.page.y = t.pageY, e.relatedTarget = null, e.shiftKey = t.shiftKey;
  }
};
cd.extension = { name: "events", type: [L.RendererSystem, L.CanvasRendererSystem] }, cd.defaultEventFeatures = { move: true, globalMove: true, click: true, wheel: true };
let fd = cd;
X.add(fd);
function fg(r5) {
  return r5 === "dynamic" || r5 === "static";
}
const AC = { onclick: null, onmousedown: null, onmouseenter: null, onmouseleave: null, onmousemove: null, onglobalmousemove: null, onmouseout: null, onmouseover: null, onmouseup: null, onmouseupoutside: null, onpointercancel: null, onpointerdown: null, onpointerenter: null, onpointerleave: null, onpointermove: null, onglobalpointermove: null, onpointerout: null, onpointerover: null, onpointertap: null, onpointerup: null, onpointerupoutside: null, onrightclick: null, onrightdown: null, onrightup: null, onrightupoutside: null, ontap: null, ontouchcancel: null, ontouchend: null, ontouchendoutside: null, ontouchmove: null, onglobaltouchmove: null, ontouchstart: null, onwheel: null, _internalInteractive: void 0, get interactive() {
  return this._internalInteractive ?? fg(fd.defaultEventMode);
}, set interactive(r5) {
  ie("7.2.0", "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."), this._internalInteractive = r5, this.eventMode = r5 ? "static" : "auto";
}, _internalEventMode: void 0, get eventMode() {
  return this._internalEventMode ?? fd.defaultEventMode;
}, set eventMode(r5) {
  this._internalInteractive = fg(r5), this._internalEventMode = r5;
}, isInteractive() {
  return this.eventMode === "static" || this.eventMode === "dynamic";
}, interactiveChildren: true, hitArea: null, addEventListener(r5, e, t) {
  const n = typeof t == "boolean" && t || typeof t == "object" && t.capture, i = typeof t == "object" ? t.signal : void 0, s = typeof t == "object" ? t.once === true : false, o = typeof e == "function" ? void 0 : e;
  r5 = n ? `${r5}capture` : r5;
  const a = typeof e == "function" ? e : e.handleEvent, l = this;
  i && i.addEventListener("abort", () => {
    l.off(r5, a, o);
  }), s ? l.once(r5, a, o) : l.on(r5, a, o);
}, removeEventListener(r5, e, t) {
  const n = typeof t == "boolean" && t || typeof t == "object" && t.capture, i = typeof e == "function" ? void 0 : e;
  r5 = n ? `${r5}capture` : r5, e = typeof e == "function" ? e : e.handleEvent, this.off(r5, e, i);
}, dispatchEvent(r5) {
  if (!(r5 instanceof Po)) throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
  return r5.defaultPrevented = false, r5.path = null, r5.target = this, r5.manager.dispatchEvent(r5), !r5.defaultPrevented;
} };
be.mixin(AC);
const CC = { accessible: false, accessibleTitle: null, accessibleHint: null, tabIndex: 0, _accessibleActive: false, _accessibleDiv: null, accessibleType: "button", accessiblePointerEvents: "auto", accessibleChildren: true, renderId: -1 };
be.mixin(CC);
const IC = 9, ca = 100, PC = 0, RC = 0, pg = 2, mg = 1, MC = -1e3, kC = -1e3, DC = 2;
class k0 {
  constructor(e) {
    this.debug = false, this._isActive = false, this._isMobileAccessibility = false, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, (Tr.tablet || Tr.phone) && this.createTouchHook();
    const t = document.createElement("div");
    t.style.width = `${ca}px`, t.style.height = `${ca}px`, t.style.position = "absolute", t.style.top = `${PC}px`, t.style.left = `${RC}px`, t.style.zIndex = pg.toString(), this.div = t, this.renderer = e, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, false);
  }
  get isActive() {
    return this._isActive;
  }
  get isMobileAccessibility() {
    return this._isMobileAccessibility;
  }
  createTouchHook() {
    const e = document.createElement("button");
    e.style.width = `${mg}px`, e.style.height = `${mg}px`, e.style.position = "absolute", e.style.top = `${MC}px`, e.style.left = `${kC}px`, e.style.zIndex = DC.toString(), e.style.backgroundColor = "#FF0000", e.title = "select to enable accessibility for this content", e.addEventListener("focus", () => {
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
    const t = e.children;
    if (t) for (let n = 0; n < t.length; n++) this.updateAccessibleObjects(t[n]);
  }
  update() {
    const e = performance.now();
    if (Tr.android.device && e < this.androidUpdateCount || (this.androidUpdateCount = e + this.androidUpdateFrequency, !this.renderer.renderingToScreen)) return;
    this.renderer.lastObjectRendered && this.updateAccessibleObjects(this.renderer.lastObjectRendered);
    const { x: t, y: n, width: i, height: s } = this.renderer.view.getBoundingClientRect(), { width: o, height: a, resolution: l } = this.renderer, u = i / o * l, h = s / a * l;
    let c = this.div;
    c.style.left = `${t}px`, c.style.top = `${n}px`, c.style.width = `${o}px`, c.style.height = `${a}px`;
    for (let d = 0; d < this.children.length; d++) {
      const f = this.children[d];
      if (f.renderId !== this.renderId) f._accessibleActive = false, Bi(this.children, d, 1), this.div.removeChild(f._accessibleDiv), this.pool.push(f._accessibleDiv), f._accessibleDiv = null, d--;
      else {
        c = f._accessibleDiv;
        let p = f.hitArea;
        const v = f.worldTransform;
        f.hitArea ? (c.style.left = `${(v.tx + p.x * v.a) * u}px`, c.style.top = `${(v.ty + p.y * v.d) * h}px`, c.style.width = `${p.width * v.a * u}px`, c.style.height = `${p.height * v.d * h}px`) : (p = f.getBounds(), this.capHitArea(p), c.style.left = `${p.x * u}px`, c.style.top = `${p.y * h}px`, c.style.width = `${p.width * u}px`, c.style.height = `${p.height * h}px`, c.title !== f.accessibleTitle && f.accessibleTitle !== null && (c.title = f.accessibleTitle), c.getAttribute("aria-label") !== f.accessibleHint && f.accessibleHint !== null && c.setAttribute("aria-label", f.accessibleHint)), (f.accessibleTitle !== c.title || f.tabIndex !== c.tabIndex) && (c.title = f.accessibleTitle, c.tabIndex = f.tabIndex, this.debug && this.updateDebugHTML(c));
      }
    }
    this.renderId++;
  }
  updateDebugHTML(e) {
    e.innerHTML = `type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`;
  }
  capHitArea(e) {
    e.x < 0 && (e.width += e.x, e.x = 0), e.y < 0 && (e.height += e.y, e.y = 0);
    const { width: t, height: n } = this.renderer;
    e.x + e.width > t && (e.width = t - e.x), e.y + e.height > n && (e.height = n - e.y);
  }
  addChild(e) {
    let t = this.pool.pop();
    t || (t = document.createElement("button"), t.style.width = `${ca}px`, t.style.height = `${ca}px`, t.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", t.style.position = "absolute", t.style.zIndex = pg.toString(), t.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? t.setAttribute("aria-live", "off") : t.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? t.setAttribute("aria-relevant", "additions") : t.setAttribute("aria-relevant", "text"), t.addEventListener("click", this._onClick.bind(this)), t.addEventListener("focus", this._onFocus.bind(this)), t.addEventListener("focusout", this._onFocusOut.bind(this))), t.style.pointerEvents = e.accessiblePointerEvents, t.type = e.accessibleType, e.accessibleTitle && e.accessibleTitle !== null ? t.title = e.accessibleTitle : (!e.accessibleHint || e.accessibleHint === null) && (t.title = `displayObject ${e.tabIndex}`), e.accessibleHint && e.accessibleHint !== null && t.setAttribute("aria-label", e.accessibleHint), this.debug && this.updateDebugHTML(t), e._accessibleActive = true, e._accessibleDiv = t, t.displayObject = e, this.children.push(e), this.div.appendChild(e._accessibleDiv), e._accessibleDiv.tabIndex = e.tabIndex;
  }
  _dispatchEvent(e, t) {
    const { displayObject: n } = e.target, i = this.renderer.events.rootBoundary, s = Object.assign(new Po(i), { target: n });
    i.rootTarget = this.renderer.lastObjectRendered, t.forEach((o) => i.dispatchEvent(s, o));
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
k0.extension = { name: "accessibility", type: [L.RendererPlugin, L.CanvasRendererPlugin] };
X.add(k0);
const D0 = class pd {
  constructor(e) {
    this.stage = new Je(), e = Object.assign({ forceCanvas: false }, e), this.renderer = $A(e), pd._plugins.forEach((t) => {
      t.init.call(this, e);
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
  destroy(e, t) {
    const n = pd._plugins.slice(0);
    n.reverse(), n.forEach((i) => {
      i.destroy.call(this);
    }), this.stage.destroy(t), this.stage = null, this.renderer.destroy(e), this.renderer = null;
  }
};
D0._plugins = [];
let F0 = D0;
X.handleByList(L.Application, F0._plugins);
class N0 {
  static init(e) {
    Object.defineProperty(this, "resizeTo", { set(t) {
      globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = t, t && (globalThis.addEventListener("resize", this.queueResize), this.resize());
    }, get() {
      return this._resizeTo;
    } }), this.queueResize = () => {
      this._resizeTo && (this.cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize()));
    }, this.cancelResize = () => {
      this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null);
    }, this.resize = () => {
      if (!this._resizeTo) return;
      this.cancelResize();
      let t, n;
      if (this._resizeTo === globalThis.window) t = globalThis.innerWidth, n = globalThis.innerHeight;
      else {
        const { clientWidth: i, clientHeight: s } = this._resizeTo;
        t = i, n = s;
      }
      this.renderer.resize(t, n), this.render();
    }, this._resizeId = null, this._resizeTo = null, this.resizeTo = e.resizeTo || null;
  }
  static destroy() {
    globalThis.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null;
  }
}
N0.extension = L.Application;
X.add(N0);
const gg = { loader: L.LoadParser, resolver: L.ResolveParser, cache: L.CacheParser, detection: L.DetectionParser };
X.handle(L.Asset, (r5) => {
  const e = r5.ref;
  Object.entries(gg).filter(([t]) => !!e[t]).forEach(([t, n]) => X.add(Object.assign(e[t], { extension: e[t].extension ?? n })));
}, (r5) => {
  const e = r5.ref;
  Object.keys(gg).filter((t) => !!e[t]).forEach((t) => X.remove(e[t]));
});
class FC {
  constructor(e, t = false) {
    this._loader = e, this._assetList = [], this._isLoading = false, this._maxConcurrent = 1, this.verbose = t;
  }
  add(e) {
    e.forEach((t) => {
      this._assetList.push(t);
    }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next();
  }
  async _next() {
    if (this._assetList.length && this._isActive) {
      this._isLoading = true;
      const e = [], t = Math.min(this._assetList.length, this._maxConcurrent);
      for (let n = 0; n < t; n++) e.push(this._assetList.pop());
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
function rs(r5, e) {
  if (Array.isArray(e)) {
    for (const t of e) if (r5.startsWith(`data:${t}`)) return true;
    return false;
  }
  return r5.startsWith(`data:${e}`);
}
function mn(r5, e) {
  const t = r5.split("?")[0], n = je.extname(t).toLowerCase();
  return Array.isArray(e) ? e.includes(n) : n === e;
}
const Gt = (r5, e, t = false) => (Array.isArray(r5) || (r5 = [r5]), e ? r5.map((n) => typeof n == "string" || t ? e(n) : n) : r5), md = (r5, e) => {
  const t = e.split("?")[1];
  return t && (r5 += `?${t}`), r5;
};
function B0(r5, e, t, n, i) {
  const s = e[t];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    t < e.length - 1 ? B0(r5.replace(n[t], a), e, t + 1, n, i) : i.push(r5.replace(n[t], a));
  }
}
function NC(r5) {
  const e = /\{(.*?)\}/g, t = r5.match(e), n = [];
  if (t) {
    const i = [];
    t.forEach((s) => {
      const o = s.substring(1, s.length - 1).split(",");
      i.push(o);
    }), B0(r5, i, 0, t, n);
  } else n.push(r5);
  return n;
}
const Dl = (r5) => !Array.isArray(r5);
class BC {
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
    const t = this._cache.get(e);
    return t || console.warn(`[Assets] Asset id ${e} was not found in the Cache`), t;
  }
  set(e, t) {
    const n = Gt(e);
    let i;
    for (let a = 0; a < this.parsers.length; a++) {
      const l = this.parsers[a];
      if (l.test(t)) {
        i = l.getCacheableAssets(n, t);
        break;
      }
    }
    i || (i = {}, n.forEach((a) => {
      i[a] = t;
    }));
    const s = Object.keys(i), o = { cacheKeys: s, keys: n };
    if (n.forEach((a) => {
      this._cacheMap.set(a, o);
    }), s.forEach((a) => {
      const l = i ? i[a] : t;
      this._cache.has(a) && this._cache.get(a) !== l && console.warn("[Cache] already has key:", a), this._cache.set(a, i[a]);
    }), t instanceof W) {
      const a = t;
      n.forEach((l) => {
        a.baseTexture !== W.EMPTY.baseTexture && ee.addToCache(a.baseTexture, l), W.addToCache(a, l);
      });
    }
  }
  remove(e) {
    if (!this._cacheMap.has(e)) {
      console.warn(`[Assets] Asset id ${e} was not found in the Cache`);
      return;
    }
    const t = this._cacheMap.get(e);
    t.cacheKeys.forEach((n) => {
      this._cache.delete(n);
    }), t.keys.forEach((n) => {
      this._cacheMap.delete(n);
    });
  }
  get parsers() {
    return this._parsers;
  }
}
const In = new BC();
class OC {
  constructor() {
    this._parsers = [], this._parsersValidated = false, this.parsers = new Proxy(this._parsers, { set: (e, t, n) => (this._parsersValidated = false, e[t] = n, true) }), this.promiseCache = {};
  }
  reset() {
    this._parsersValidated = false, this.promiseCache = {};
  }
  _getLoadPromiseAndParser(e, t) {
    const n = { promise: null, parser: null };
    return n.promise = (async () => {
      var _a2, _b2;
      let i = null, s = null;
      if (t.loadParser && (s = this._parserHash[t.loadParser], s || console.warn(`[Assets] specified load parser "${t.loadParser}" not found while loading ${e}`)), !s) {
        for (let o = 0; o < this.parsers.length; o++) {
          const a = this.parsers[o];
          if (a.load && ((_a2 = a.test) == null ? void 0 : _a2.call(a, e, t, this))) {
            s = a;
            break;
          }
        }
        if (!s) return console.warn(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null;
      }
      i = await s.load(e, t, this), n.parser = s;
      for (let o = 0; o < this.parsers.length; o++) {
        const a = this.parsers[o];
        a.parse && a.parse && await ((_b2 = a.testParse) == null ? void 0 : _b2.call(a, i, t, this)) && (i = await a.parse(i, t, this) || i, n.parser = a);
      }
      return i;
    })(), n;
  }
  async load(e, t) {
    this._parsersValidated || this._validateParsers();
    let n = 0;
    const i = {}, s = Dl(e), o = Gt(e, (u) => ({ alias: [u], src: u })), a = o.length, l = o.map(async (u) => {
      const h = je.toAbsolute(u.src);
      if (!i[u.src]) try {
        this.promiseCache[h] || (this.promiseCache[h] = this._getLoadPromiseAndParser(h, u)), i[u.src] = await this.promiseCache[h].promise, t && t(++n / a);
      } catch (c) {
        throw delete this.promiseCache[h], delete i[u.src], new Error(`[Loader.load] Failed to load ${h}.
${c}`);
      }
    });
    return await Promise.all(l), s ? i[o[0].src] : i;
  }
  async unload(e) {
    const t = Gt(e, (n) => ({ alias: [n], src: n })).map(async (n) => {
      var _a2, _b2;
      const i = je.toAbsolute(n.src), s = this.promiseCache[i];
      if (s) {
        const o = await s.promise;
        delete this.promiseCache[i], (_b2 = (_a2 = s.parser) == null ? void 0 : _a2.unload) == null ? void 0 : _b2.call(_a2, o, n, this);
      }
    });
    await Promise.all(t);
  }
  _validateParsers() {
    this._parsersValidated = true, this._parserHash = this._parsers.filter((e) => e.name).reduce((e, t) => (e[t.name] && console.warn(`[Assets] loadParser name conflict "${t.name}"`), { ...e, [t.name]: t }), {});
  }
}
var Wt = ((r5) => (r5[r5.Low = 0] = "Low", r5[r5.Normal = 1] = "Normal", r5[r5.High = 2] = "High", r5))(Wt || {});
const LC = ".json", UC = "application/json", GC = { extension: { type: L.LoadParser, priority: Wt.Low }, name: "loadJson", test(r5) {
  return rs(r5, UC) || mn(r5, LC);
}, async load(r5) {
  return await (await z.ADAPTER.fetch(r5)).json();
} };
X.add(GC);
const zC = ".txt", HC = "text/plain", $C = { name: "loadTxt", extension: { type: L.LoadParser, priority: Wt.Low }, test(r5) {
  return rs(r5, HC) || mn(r5, zC);
}, async load(r5) {
  return await (await z.ADAPTER.fetch(r5)).text();
} };
X.add($C);
const jC = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"], VC = [".ttf", ".otf", ".woff", ".woff2"], WC = ["font/ttf", "font/otf", "font/woff", "font/woff2"], XC = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function YC(r5) {
  const e = je.extname(r5), t = je.basename(r5, e).replace(/(-|_)/g, " ").toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.slice(1));
  let n = t.length > 0;
  for (const s of t) if (!s.match(XC)) {
    n = false;
    break;
  }
  let i = t.join(" ");
  return n || (i = `"${i.replace(/[\\"]/g, "\\$&")}"`), i;
}
const KC = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function qC(r5) {
  return KC.test(r5) ? r5 : encodeURI(r5);
}
const ZC = { extension: { type: L.LoadParser, priority: Wt.Low }, name: "loadWebFont", test(r5) {
  return rs(r5, WC) || mn(r5, VC);
}, async load(r5, e) {
  var _a2, _b2, _c2;
  const t = z.ADAPTER.getFontFaceSet();
  if (t) {
    const n = [], i = ((_a2 = e.data) == null ? void 0 : _a2.family) ?? YC(r5), s = ((_c2 = (_b2 = e.data) == null ? void 0 : _b2.weights) == null ? void 0 : _c2.filter((a) => jC.includes(a))) ?? ["normal"], o = e.data ?? {};
    for (let a = 0; a < s.length; a++) {
      const l = s[a], u = new FontFace(i, `url(${qC(r5)})`, { ...o, weight: l });
      await u.load(), t.add(u), n.push(u);
    }
    return n.length === 1 ? n[0] : n;
  }
  return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"), null;
}, unload(r5) {
  (Array.isArray(r5) ? r5 : [r5]).forEach((e) => z.ADAPTER.getFontFaceSet().delete(e));
} };
X.add(ZC);
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
let Ui = null, gd = class {
  constructor() {
    Ui || (Ui = URL.createObjectURL(new Blob([QC], { type: "application/javascript" }))), this.worker = new Worker(Ui);
  }
};
gd.revokeObjectURL = function() {
  Ui && (URL.revokeObjectURL(Ui), Ui = null);
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
let Gi = null;
class O0 {
  constructor() {
    Gi || (Gi = URL.createObjectURL(new Blob([JC], { type: "application/javascript" }))), this.worker = new Worker(Gi);
  }
}
O0.revokeObjectURL = function() {
  Gi && (URL.revokeObjectURL(Gi), Gi = null);
};
let yg = 0, bh;
class eI {
  constructor() {
    this._initialized = false, this._createdWorkers = 0, this.workerPool = [], this.queue = [], this.resolveHash = {};
  }
  isImageBitmapSupported() {
    return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise((e) => {
      const { worker: t } = new gd();
      t.addEventListener("message", (n) => {
        t.terminate(), gd.revokeObjectURL(), e(n.data);
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
    bh === void 0 && (bh = navigator.hardwareConcurrency || 4);
    let e = this.workerPool.pop();
    return !e && this._createdWorkers < bh && (this._createdWorkers++, e = new O0().worker, e.addEventListener("message", (t) => {
      this.complete(t.data), this.returnWorker(t.target), this.next();
    })), e;
  }
  returnWorker(e) {
    this.workerPool.push(e);
  }
  complete(e) {
    e.error !== void 0 ? this.resolveHash[e.uuid].reject(e.error) : this.resolveHash[e.uuid].resolve(e.data), this.resolveHash[e.uuid] = null;
  }
  async _run(e, t) {
    await this._initWorkers();
    const n = new Promise((i, s) => {
      this.queue.push({ id: e, arguments: t, resolve: i, reject: s });
    });
    return this.next(), n;
  }
  next() {
    if (!this.queue.length) return;
    const e = this.getWorker();
    if (!e) return;
    const t = this.queue.pop(), n = t.id;
    this.resolveHash[yg] = { resolve: t.resolve, reject: t.reject }, e.postMessage({ data: t.arguments, uuid: yg++, id: n });
  }
}
const vg = new eI();
function Ro(r5, e, t) {
  r5.resource.internal = true;
  const n = new W(r5), i = () => {
    delete e.promiseCache[t], In.has(t) && In.remove(t);
  };
  return n.baseTexture.once("destroyed", () => {
    t in e.promiseCache && (console.warn("[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."), i());
  }), n.once("destroyed", () => {
    r5.destroyed || (console.warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."), i());
  }), n;
}
const tI = [".jpeg", ".jpg", ".png", ".webp", ".avif"], rI = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function nI(r5) {
  const e = await z.ADAPTER.fetch(r5);
  if (!e.ok) throw new Error(`[loadImageBitmap] Failed to fetch ${r5}: ${e.status} ${e.statusText}`);
  const t = await e.blob();
  return await createImageBitmap(t);
}
const fu = { name: "loadTextures", extension: { type: L.LoadParser, priority: Wt.High }, config: { preferWorkers: true, preferCreateImageBitmap: true, crossOrigin: "anonymous" }, test(r5) {
  return rs(r5, rI) || mn(r5, tI);
}, async load(r5, e, t) {
  var _a2;
  const n = globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
  let i;
  n ? this.config.preferWorkers && await vg.isImageBitmapSupported() ? i = await vg.loadImageBitmap(r5) : i = await nI(r5) : i = await new Promise((a, l) => {
    const u = new Image();
    u.crossOrigin = this.config.crossOrigin, u.src = r5, u.complete ? a(u) : (u.onload = () => a(u), u.onerror = (h) => l(h));
  });
  const s = { ...e.data };
  s.resolution ?? (s.resolution = kr(r5)), n && ((_a2 = s.resourceOptions) == null ? void 0 : _a2.ownsImageBitmap) === void 0 && (s.resourceOptions = { ...s.resourceOptions }, s.resourceOptions.ownsImageBitmap = true);
  const o = new ee(i, s);
  return o.resource.src = r5, Ro(o, t, r5);
}, unload(r5) {
  r5.destroy(true);
} };
X.add(fu);
const iI = ".svg", sI = "image/svg+xml", oI = { extension: { type: L.LoadParser, priority: Wt.High }, name: "loadSVG", test(r5) {
  return rs(r5, sI) || mn(r5, iI);
}, async testParse(r5) {
  return sd.test(r5);
}, async parse(r5, e, t) {
  var _a2;
  const n = new sd(r5, (_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.resourceOptions);
  await n.load();
  const i = new ee(n, { resolution: kr(r5), ...e == null ? void 0 : e.data });
  return i.resource.src = e.src, Ro(i, t, e.src);
}, async load(r5, e) {
  return (await z.ADAPTER.fetch(r5)).text();
}, unload: fu.unload };
X.add(oI);
const aI = [".mp4", ".m4v", ".webm", ".ogv"], lI = ["video/mp4", "video/webm", "video/ogg"], uI = { name: "loadVideo", extension: { type: L.LoadParser, priority: Wt.High }, config: { defaultAutoPlay: true, defaultUpdateFPS: 0, defaultLoop: false, defaultMuted: false, defaultPlaysinline: true }, test(r5) {
  return rs(r5, lI) || mn(r5, aI);
}, async load(r5, e, t) {
  var _a2;
  let n;
  const i = await (await z.ADAPTER.fetch(r5)).blob(), s = URL.createObjectURL(i);
  try {
    const o = { autoPlay: this.config.defaultAutoPlay, updateFPS: this.config.defaultUpdateFPS, loop: this.config.defaultLoop, muted: this.config.defaultMuted, playsinline: this.config.defaultPlaysinline, ...(_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.resourceOptions, autoLoad: true }, a = new P0(s, o);
    await a.load();
    const l = new ee(a, { alphaMode: await mb(), resolution: kr(r5), ...e == null ? void 0 : e.data });
    l.resource.src = r5, n = Ro(l, t, r5), n.baseTexture.once("destroyed", () => {
      URL.revokeObjectURL(s);
    });
  } catch (o) {
    throw URL.revokeObjectURL(s), o;
  }
  return n;
}, unload(r5) {
  r5.destroy(true);
} };
X.add(uI);
class hI {
  constructor() {
    this._defaultBundleIdentifierOptions = { connector: "-", createBundleAssetId: (e, t) => `${e}${this._bundleIdConnector}${t}`, extractAssetIdFromBundle: (e, t) => t.replace(`${e}${this._bundleIdConnector}`, "") }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {};
  }
  setBundleIdentifier(e) {
    if (this._bundleIdConnector = e.connector ?? this._bundleIdConnector, this._createBundleAssetId = e.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = e.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar") throw new Error("[Resolver] GenerateBundleAssetId are not working correctly");
  }
  prefer(...e) {
    e.forEach((t) => {
      this._preferredOrder.push(t), t.priority || (t.priority = Object.keys(t.params));
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
      const t = e;
      this._defaultSearchParams = Object.keys(t).map((n) => `${encodeURIComponent(n)}=${encodeURIComponent(t[n])}`).join("&");
    }
  }
  getAlias(e) {
    const { alias: t, name: n, src: i, srcs: s } = e;
    return Gt(t || n || i || s, (o) => typeof o == "string" ? o : Array.isArray(o) ? o.map((a) => (a == null ? void 0 : a.src) ?? (a == null ? void 0 : a.srcs) ?? a) : (o == null ? void 0 : o.src) || (o == null ? void 0 : o.srcs) ? o.src ?? o.srcs : o, true);
  }
  addManifest(e) {
    this._manifest && console.warn("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = e, e.bundles.forEach((t) => {
      this.addBundle(t.name, t.assets);
    });
  }
  addBundle(e, t) {
    const n = [];
    Array.isArray(t) ? t.forEach((i) => {
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
    }) : Object.keys(t).forEach((i) => {
      const s = [i, this._createBundleAssetId(e, i)];
      if (typeof t[i] == "string") this.add({ alias: s, src: t[i] });
      else if (Array.isArray(t[i])) this.add({ alias: s, src: t[i] });
      else {
        const o = t[i], a = o.src ?? o.srcs;
        this.add({ ...o, alias: s, src: Array.isArray(a) ? a : [a] });
      }
      n.push(...s);
    }), this._bundles[e] = n;
  }
  add(e, t, n, i, s) {
    const o = [];
    typeof e == "string" || Array.isArray(e) && typeof e[0] == "string" ? (ie("7.2.0", `Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`), o.push({ alias: e, src: t, data: n, format: i, loadParser: s })) : Array.isArray(e) ? o.push(...e) : o.push(e);
    let a;
    a = (l) => {
      this.hasKey(l) && console.warn(`[Resolver] already has key: ${l} overwriting`);
    }, Gt(o).forEach((l) => {
      const { src: u, srcs: h } = l;
      let { data: c, format: d, loadParser: f } = l;
      const p = Gt(u || h).map((g) => typeof g == "string" ? NC(g) : Array.isArray(g) ? g : [g]), v = this.getAlias(l);
      Array.isArray(v) ? v.forEach(a) : a(v);
      const _ = [];
      p.forEach((g) => {
        g.forEach((y) => {
          let m = {};
          if (typeof y != "object") {
            m.src = y;
            for (let x = 0; x < this._parsers.length; x++) {
              const w = this._parsers[x];
              if (w.test(y)) {
                m = w.parse(y);
                break;
              }
            }
          } else c = y.data ?? c, d = y.format ?? d, f = y.loadParser ?? f, m = { ...m, ...y };
          if (!v) throw new Error(`[Resolver] alias is undefined for this asset: ${m.src}`);
          m = this.buildResolvedAsset(m, { aliases: v, data: c, format: d, loadParser: f }), _.push(m);
        });
      }), v.forEach((g) => {
        this._assetMap[g] = _;
      });
    });
  }
  resolveBundle(e) {
    const t = Dl(e);
    e = Gt(e);
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
    }), t ? n[e[0]] : n;
  }
  resolveUrl(e) {
    const t = this.resolve(e);
    if (typeof e != "string") {
      const n = {};
      for (const i in t) n[i] = t[i].src;
      return n;
    }
    return t.src;
  }
  resolve(e) {
    const t = Dl(e);
    e = Gt(e);
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
    }), t ? n[e[0]] : n;
  }
  hasKey(e) {
    return !!this._assetMap[e];
  }
  hasBundle(e) {
    return !!this._bundles[e];
  }
  _getPreferredOrder(e) {
    for (let t = 0; t < e.length; t++) {
      const n = e[0], i = this._preferredOrder.find((s) => s.params.format.includes(n.format));
      if (i) return i;
    }
    return this._preferredOrder[0];
  }
  _appendDefaultSearchParams(e) {
    if (!this._defaultSearchParams) return e;
    const t = /\?/.test(e) ? "&" : "?";
    return `${e}${t}${this._defaultSearchParams}`;
  }
  buildResolvedAsset(e, t) {
    const { aliases: n, data: i, loadParser: s, format: o } = t;
    return (this._basePath || this._rootPath) && (e.src = je.toAbsolute(e.src, this._basePath, this._rootPath)), e.alias = n ?? e.alias ?? [e.src], e.src = this._appendDefaultSearchParams(e.src), e.data = { ...i || {}, ...e.data }, e.loadParser = s ?? e.loadParser, e.format = o ?? e.format ?? je.extname(e.src).slice(1), e.srcs = e.src, e.name = e.alias, e;
  }
}
class cI {
  constructor() {
    this._detections = [], this._initialized = false, this.resolver = new hI(), this.loader = new OC(), this.cache = In, this._backgroundLoader = new FC(this.loader), this._backgroundLoader.active = true, this.reset();
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
    const t = ((_a2 = e.texturePreference) == null ? void 0 : _a2.resolution) ?? 1, n = typeof t == "number" ? [t] : t, i = await this._detectFormats({ preferredFormats: (_b2 = e.texturePreference) == null ? void 0 : _b2.format, skipDetections: e.skipDetections, detections: this._detections });
    this.resolver.prefer({ params: { format: i, resolution: n } }), e.preferences && this.setPreferences(e.preferences);
  }
  add(e, t, n, i, s) {
    this.resolver.add(e, t, n, i, s);
  }
  async load(e, t) {
    this._initialized || await this.init();
    const n = Dl(e), i = Gt(e).map((a) => {
      if (typeof a != "string") {
        const l = this.resolver.getAlias(a);
        return l.some((u) => !this.resolver.hasKey(u)) && this.add(a), Array.isArray(l) ? l[0] : l;
      }
      return this.resolver.hasKey(a) || this.add({ alias: a, src: a }), a;
    }), s = this.resolver.resolve(i), o = await this._mapLoadToResolve(s, t);
    return n ? o[i[0]] : o;
  }
  addBundle(e, t) {
    this.resolver.addBundle(e, t);
  }
  async loadBundle(e, t) {
    this._initialized || await this.init();
    let n = false;
    typeof e == "string" && (n = true, e = [e]);
    const i = this.resolver.resolveBundle(e), s = {}, o = Object.keys(i);
    let a = 0, l = 0;
    const u = () => {
      t == null ? void 0 : t(++a / l);
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
    const t = this.resolver.resolve(e);
    this._backgroundLoader.add(Object.values(t));
  }
  async backgroundLoadBundle(e) {
    this._initialized || await this.init(), typeof e == "string" && (e = [e]);
    const t = this.resolver.resolveBundle(e);
    Object.values(t).forEach((n) => {
      this._backgroundLoader.add(Object.values(n));
    });
  }
  reset() {
    this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = false;
  }
  get(e) {
    if (typeof e == "string") return In.get(e);
    const t = {};
    for (let n = 0; n < e.length; n++) t[n] = In.get(e[n]);
    return t;
  }
  async _mapLoadToResolve(e, t) {
    const n = Object.values(e), i = Object.keys(e);
    this._backgroundLoader.active = false;
    const s = await this.loader.load(n, t);
    this._backgroundLoader.active = true;
    const o = {};
    return n.forEach((a, l) => {
      const u = s[a.src], h = [a.src];
      a.alias && h.push(...a.alias), o[i[l]] = u, In.set(h, u);
    }), o;
  }
  async unload(e) {
    this._initialized || await this.init();
    const t = Gt(e).map((i) => typeof i != "string" ? i.src : i), n = this.resolver.resolve(t);
    await this._unloadFromResolved(n);
  }
  async unloadBundle(e) {
    this._initialized || await this.init(), e = Gt(e);
    const t = this.resolver.resolveBundle(e), n = Object.keys(t).map((i) => this._unloadFromResolved(t[i]));
    await Promise.all(n);
  }
  async _unloadFromResolved(e) {
    const t = Object.values(e);
    t.forEach((n) => {
      In.remove(n.src);
    }), await this.loader.unload(t);
  }
  async _detectFormats(e) {
    let t = [];
    e.preferredFormats && (t = Array.isArray(e.preferredFormats) ? e.preferredFormats : [e.preferredFormats]);
    for (const n of e.detections) e.skipDetections || await n.test() ? t = await n.add(t) : e.skipDetections || (t = await n.remove(t));
    return t = t.filter((n, i) => t.indexOf(n) === i), t;
  }
  get detections() {
    return this._detections;
  }
  get preferWorkers() {
    return fu.config.preferWorkers;
  }
  set preferWorkers(e) {
    ie("7.2.0", "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."), this.setPreferences({ preferWorkers: e });
  }
  setPreferences(e) {
    this.loader.parsers.forEach((t) => {
      t.config && Object.keys(t.config).filter((n) => n in e).forEach((n) => {
        t.config[n] = e[n];
      });
    });
  }
}
const da = new cI();
X.handleByList(L.LoadParser, da.loader.parsers).handleByList(L.ResolveParser, da.resolver.parsers).handleByList(L.CacheParser, da.cache.parsers).handleByList(L.DetectionParser, da.detections);
const dI = { extension: L.CacheParser, test: (r5) => Array.isArray(r5) && r5.every((e) => e instanceof W), getCacheableAssets: (r5, e) => {
  const t = {};
  return r5.forEach((n) => {
    e.forEach((i, s) => {
      t[n + (s === 0 ? "" : s + 1)] = i;
    });
  }), t;
} };
X.add(dI);
async function L0(r5) {
  if ("Image" in globalThis) return new Promise((e) => {
    const t = new Image();
    t.onload = () => {
      e(true);
    }, t.onerror = () => {
      e(false);
    }, t.src = r5;
  });
  if ("createImageBitmap" in globalThis && "fetch" in globalThis) {
    try {
      const e = await (await fetch(r5)).blob();
      await createImageBitmap(e);
    } catch {
      return false;
    }
    return true;
  }
  return false;
}
const fI = { extension: { type: L.DetectionParser, priority: 1 }, test: async () => L0("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="), add: async (r5) => [...r5, "avif"], remove: async (r5) => r5.filter((e) => e !== "avif") };
X.add(fI);
const pI = { extension: { type: L.DetectionParser, priority: 0 }, test: async () => L0("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="), add: async (r5) => [...r5, "webp"], remove: async (r5) => r5.filter((e) => e !== "webp") };
X.add(pI);
const _g = ["png", "jpg", "jpeg"], mI = { extension: { type: L.DetectionParser, priority: -1 }, test: () => Promise.resolve(true), add: async (r5) => [...r5, ..._g], remove: async (r5) => r5.filter((e) => !_g.includes(e)) };
X.add(mI);
const gI = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function Uf(r5) {
  return gI ? false : document.createElement("video").canPlayType(r5) !== "";
}
const yI = { extension: { type: L.DetectionParser, priority: 0 }, test: async () => Uf("video/webm"), add: async (r5) => [...r5, "webm"], remove: async (r5) => r5.filter((e) => e !== "webm") };
X.add(yI);
const vI = { extension: { type: L.DetectionParser, priority: 0 }, test: async () => Uf("video/mp4"), add: async (r5) => [...r5, "mp4", "m4v"], remove: async (r5) => r5.filter((e) => e !== "mp4" && e !== "m4v") };
X.add(vI);
const _I = { extension: { type: L.DetectionParser, priority: 0 }, test: async () => Uf("video/ogg"), add: async (r5) => [...r5, "ogv"], remove: async (r5) => r5.filter((e) => e !== "ogv") };
X.add(_I);
const xI = { extension: L.ResolveParser, test: fu.test, parse: (r5) => {
  var _a2;
  return { resolution: parseFloat(((_a2 = z.RETINA_PREFIX.exec(r5)) == null ? void 0 : _a2[1]) ?? "1"), format: je.extname(r5).slice(1), src: r5 };
} };
X.add(xI);
var Ve = ((r5) => (r5[r5.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", r5[r5.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", r5[r5.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", r5[r5.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", r5[r5.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", r5[r5.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", r5[r5.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", r5[r5.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", r5[r5.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", r5[r5.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", r5[r5.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", r5[r5.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", r5[r5.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", r5[r5.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", r5[r5.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", r5[r5.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", r5[r5.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", r5[r5.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", r5[r5.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", r5[r5.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", r5[r5.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", r5[r5.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", r5[r5.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", r5[r5.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", r5[r5.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35987] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", r5[r5.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL", r5[r5.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR", r5[r5.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT", r5[r5.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493] = "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT", r5[r5.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494] = "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT", r5[r5.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495] = "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT", r5))(Ve || {});
const Fl = { 33776: 0.5, 33777: 0.5, 33778: 1, 33779: 1, 35916: 0.5, 35917: 0.5, 35918: 1, 35919: 1, 37488: 0.5, 37489: 0.5, 37490: 1, 37491: 1, 37492: 0.5, 37496: 1, 37493: 0.5, 37497: 1, 37494: 0.5, 37495: 0.5, 35840: 0.5, 35842: 0.5, 35841: 0.25, 35843: 0.25, 36196: 0.5, 35986: 0.5, 35987: 1, 34798: 1, 37808: 1, 36492: 1, 36493: 1, 36494: 1, 36495: 1 };
let er, ui;
function xg() {
  ui = { bptc: er.getExtension("EXT_texture_compression_bptc"), astc: er.getExtension("WEBGL_compressed_texture_astc"), etc: er.getExtension("WEBGL_compressed_texture_etc"), s3tc: er.getExtension("WEBGL_compressed_texture_s3tc"), s3tc_sRGB: er.getExtension("WEBGL_compressed_texture_s3tc_srgb"), pvrtc: er.getExtension("WEBGL_compressed_texture_pvrtc") || er.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), etc1: er.getExtension("WEBGL_compressed_texture_etc1"), atc: er.getExtension("WEBGL_compressed_texture_atc") };
}
const wI = { extension: { type: L.DetectionParser, priority: 2 }, test: async () => {
  const r5 = z.ADAPTER.createCanvas().getContext("webgl");
  return r5 ? (er = r5, true) : (console.warn("WebGL not available for compressed textures."), false);
}, add: async (r5) => {
  ui || xg();
  const e = [];
  for (const t in ui) ui[t] && e.push(t);
  return [...e, ...r5];
}, remove: async (r5) => (ui || xg(), r5.filter((e) => !(e in ui))) };
X.add(wI);
class EI extends lu {
  constructor(e, t = { width: 1, height: 1, autoLoad: true }) {
    let n, i;
    typeof e == "string" ? (n = e, i = new Uint8Array()) : (n = null, i = e), super(i, t), this.origin = n, this.buffer = i ? new Wc(i) : null, this._load = null, this.loaded = false, this.origin !== null && t.autoLoad !== false && this.load(), this.origin === null && this.buffer && (this._load = Promise.resolve(this), this.loaded = true, this.onBlobLoaded(this.buffer.rawBinaryData));
  }
  onBlobLoaded(e) {
  }
  load() {
    return this._load ? this._load : (this._load = fetch(this.origin).then((e) => e.blob()).then((e) => e.arrayBuffer()).then((e) => (this.data = new Uint32Array(e), this.buffer = new Wc(e), this.loaded = true, this.onBlobLoaded(e), this.update(), this)), this._load);
  }
}
class Ln extends EI {
  constructor(e, t) {
    super(e, t), this.format = t.format, this.levels = t.levels || 1, this._width = t.width, this._height = t.height, this._extension = Ln._formatToExtension(this.format), (t.levelBuffers || this.buffer) && (this._levelBuffers = t.levelBuffers || Ln._createLevelBuffers(e instanceof Uint8Array ? e : this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height));
  }
  upload(e, t, n) {
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
    this._levelBuffers = Ln._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height);
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
  static _createLevelBuffers(e, t, n, i, s, o, a) {
    const l = new Array(n);
    let u = e.byteOffset, h = o, c = a, d = h + i - 1 & ~(i - 1), f = c + s - 1 & ~(s - 1), p = d * f * Fl[t];
    for (let v = 0; v < n; v++) l[v] = { levelID: v, levelWidth: n > 1 ? h : d, levelHeight: n > 1 ? c : f, levelBuffer: new Uint8Array(e.buffer, u, p) }, u += p, h = h >> 1 || 1, c = c >> 1 || 1, d = h + i - 1 & ~(i - 1), f = c + s - 1 & ~(s - 1), p = d * f * Fl[t];
    return l;
  }
}
const Ah = 4, fa = 124, TI = 32, wg = 20, SI = 542327876, pa = { HEIGHT: 3, WIDTH: 4, MIPMAP_COUNT: 7, PIXEL_FORMAT: 19 }, bI = { FOURCC: 2 }, ma = { DXGI_FORMAT: 0, RESOURCE_DIMENSION: 1, MISC_FLAG: 2, ARRAY_SIZE: 3 }, AI = 1, CI = 2, II = 4, PI = 64, RI = 512, MI = 131072, kI = 827611204, DI = 861165636, FI = 894720068, NI = 808540228, BI = 4, OI = { [kI]: Ve.COMPRESSED_RGBA_S3TC_DXT1_EXT, [DI]: Ve.COMPRESSED_RGBA_S3TC_DXT3_EXT, [FI]: Ve.COMPRESSED_RGBA_S3TC_DXT5_EXT }, LI = { 70: Ve.COMPRESSED_RGBA_S3TC_DXT1_EXT, 71: Ve.COMPRESSED_RGBA_S3TC_DXT1_EXT, 73: Ve.COMPRESSED_RGBA_S3TC_DXT3_EXT, 74: Ve.COMPRESSED_RGBA_S3TC_DXT3_EXT, 76: Ve.COMPRESSED_RGBA_S3TC_DXT5_EXT, 77: Ve.COMPRESSED_RGBA_S3TC_DXT5_EXT, 72: Ve.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, 75: Ve.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT, 78: Ve.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT, 96: Ve.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT, 95: Ve.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT, 98: Ve.COMPRESSED_RGBA_BPTC_UNORM_EXT, 99: Ve.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT };
function UI(r5) {
  const e = new Uint32Array(r5);
  if (e[0] !== SI) throw new Error("Invalid DDS file magic word");
  const t = new Uint32Array(r5, 0, fa / Uint32Array.BYTES_PER_ELEMENT), n = t[pa.HEIGHT], i = t[pa.WIDTH], s = t[pa.MIPMAP_COUNT], o = new Uint32Array(r5, pa.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT, TI / Uint32Array.BYTES_PER_ELEMENT), a = o[AI];
  if (a & II) {
    const l = o[bI.FOURCC];
    if (l !== NI) {
      const y = OI[l], m = Ah + fa, x = new Uint8Array(r5, m);
      return [new Ln(x, { format: y, width: i, height: n, levels: s })];
    }
    const u = Ah + fa, h = new Uint32Array(e.buffer, u, wg / Uint32Array.BYTES_PER_ELEMENT), c = h[ma.DXGI_FORMAT], d = h[ma.RESOURCE_DIMENSION], f = h[ma.MISC_FLAG], p = h[ma.ARRAY_SIZE], v = LI[c];
    if (v === void 0) throw new Error(`DDSParser cannot parse texture data with DXGI format ${c}`);
    if (f === BI) throw new Error("DDSParser does not support cubemap textures");
    if (d === 6) throw new Error("DDSParser does not supported 3D texture data");
    const _ = new Array(), g = Ah + fa + wg;
    if (p === 1) _.push(new Uint8Array(r5, g));
    else {
      const y = Fl[v];
      let m = 0, x = i, w = n;
      for (let T = 0; T < s; T++) {
        const E = Math.max(1, x + 3 & -4), I = Math.max(1, w + 3 & -4), P = E * I * y;
        m += P, x = x >>> 1, w = w >>> 1;
      }
      let S = g;
      for (let T = 0; T < p; T++) _.push(new Uint8Array(r5, S, m)), S += m;
    }
    return _.map((y) => new Ln(y, { format: v, width: i, height: n, levels: s }));
  }
  throw a & PI ? new Error("DDSParser does not support uncompressed texture data.") : a & RI ? new Error("DDSParser does not supported YUV uncompressed texture data.") : a & MI ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : a & CI ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!");
}
const Eg = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10], GI = 67305985, Dt = { ENDIANNESS: 12, GL_TYPE: 16, GL_FORMAT: 24, GL_INTERNAL_FORMAT: 28, PIXEL_WIDTH: 36, PIXEL_HEIGHT: 40, PIXEL_DEPTH: 44, NUMBER_OF_ARRAY_ELEMENTS: 48, NUMBER_OF_FACES: 52, NUMBER_OF_MIPMAP_LEVELS: 56, BYTES_OF_KEY_VALUE_DATA: 60 }, yd = 64, Tg = { [K.UNSIGNED_BYTE]: 1, [K.UNSIGNED_SHORT]: 2, [K.INT]: 4, [K.UNSIGNED_INT]: 4, [K.FLOAT]: 4, [K.HALF_FLOAT]: 8 }, zI = { [F.RGBA]: 4, [F.RGB]: 3, [F.RG]: 2, [F.RED]: 1, [F.LUMINANCE]: 1, [F.LUMINANCE_ALPHA]: 2, [F.ALPHA]: 1 }, HI = { [K.UNSIGNED_SHORT_4_4_4_4]: 2, [K.UNSIGNED_SHORT_5_5_5_1]: 2, [K.UNSIGNED_SHORT_5_6_5]: 2 };
function $I(r5, e, t = false) {
  const n = new DataView(e);
  if (!jI(r5, n)) return null;
  const i = n.getUint32(Dt.ENDIANNESS, true) === GI, s = n.getUint32(Dt.GL_TYPE, i), o = n.getUint32(Dt.GL_FORMAT, i), a = n.getUint32(Dt.GL_INTERNAL_FORMAT, i), l = n.getUint32(Dt.PIXEL_WIDTH, i), u = n.getUint32(Dt.PIXEL_HEIGHT, i) || 1, h = n.getUint32(Dt.PIXEL_DEPTH, i) || 1, c = n.getUint32(Dt.NUMBER_OF_ARRAY_ELEMENTS, i) || 1, d = n.getUint32(Dt.NUMBER_OF_FACES, i), f = n.getUint32(Dt.NUMBER_OF_MIPMAP_LEVELS, i), p = n.getUint32(Dt.BYTES_OF_KEY_VALUE_DATA, i);
  if (u === 0 || h !== 1) throw new Error("Only 2D textures are supported");
  if (d !== 1) throw new Error("CubeTextures are not supported by KTXLoader yet!");
  if (c !== 1) throw new Error("WebGL does not support array textures");
  const v = 4, _ = 4, g = l + 3 & -4, y = u + 3 & -4, m = new Array(c);
  let x = l * u;
  s === 0 && (x = g * y);
  let w;
  if (s !== 0 ? Tg[s] ? w = Tg[s] * zI[o] : w = HI[s] : w = Fl[a], w === void 0) throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
  const S = t ? WI(n, p, i) : null;
  let T = x * w, E = l, I = u, P = g, D = y, N = yd + p;
  for (let A = 0; A < f; A++) {
    const C = n.getUint32(N, i);
    let q = N + 4;
    for (let J = 0; J < c; J++) {
      let O = m[J];
      O || (O = m[J] = new Array(f)), O[A] = { levelID: A, levelWidth: f > 1 || s !== 0 ? E : P, levelHeight: f > 1 || s !== 0 ? I : D, levelBuffer: new Uint8Array(e, q, T) }, q += T;
    }
    N += C + 4, N = N % 4 !== 0 ? N + 4 - N % 4 : N, E = E >> 1 || 1, I = I >> 1 || 1, P = E + v - 1 & -4, D = I + _ - 1 & -4, T = P * D * w;
  }
  return s !== 0 ? { uncompressed: m.map((A) => {
    let C = A[0].levelBuffer, q = false;
    return s === K.FLOAT ? C = new Float32Array(A[0].levelBuffer.buffer, A[0].levelBuffer.byteOffset, A[0].levelBuffer.byteLength / 4) : s === K.UNSIGNED_INT ? (q = true, C = new Uint32Array(A[0].levelBuffer.buffer, A[0].levelBuffer.byteOffset, A[0].levelBuffer.byteLength / 4)) : s === K.INT && (q = true, C = new Int32Array(A[0].levelBuffer.buffer, A[0].levelBuffer.byteOffset, A[0].levelBuffer.byteLength / 4)), { resource: new lu(C, { width: A[0].levelWidth, height: A[0].levelHeight }), type: s, format: q ? VI(o) : o };
  }), kvData: S } : { compressed: m.map((A) => new Ln(null, { format: a, width: l, height: u, levels: f, levelBuffers: A })), kvData: S };
}
function jI(r5, e) {
  for (let t = 0; t < Eg.length; t++) if (e.getUint8(t) !== Eg[t]) return console.error(`${r5} is not a valid *.ktx file!`), false;
  return true;
}
function VI(r5) {
  switch (r5) {
    case F.RGBA:
      return F.RGBA_INTEGER;
    case F.RGB:
      return F.RGB_INTEGER;
    case F.RG:
      return F.RG_INTEGER;
    case F.RED:
      return F.RED_INTEGER;
    default:
      return r5;
  }
}
function WI(r5, e, t) {
  const n = /* @__PURE__ */ new Map();
  let i = 0;
  for (; i < e; ) {
    const s = r5.getUint32(yd + i, t), o = yd + i + 4, a = 3 - (s + 3) % 4;
    if (s === 0 || s > e - i) {
      console.error("KTXLoader: keyAndValueByteSize out of bounds");
      break;
    }
    let l = 0;
    for (; l < s && r5.getUint8(o + l) !== 0; l++) ;
    if (l === -1) {
      console.error("KTXLoader: Failed to find null byte terminating kvData key");
      break;
    }
    const u = new TextDecoder().decode(new Uint8Array(r5.buffer, o, l)), h = new DataView(r5.buffer, o + l + 1, s - l - 1);
    n.set(u, h), i += 4 + s + a;
  }
  return n;
}
const XI = { extension: { type: L.LoadParser, priority: Wt.High }, name: "loadDDS", test(r5) {
  return mn(r5, ".dds");
}, async load(r5, e, t) {
  const n = await (await z.ADAPTER.fetch(r5)).arrayBuffer(), i = UI(n).map((s) => {
    const o = new ee(s, { mipmap: fr.OFF, alphaMode: ht.NO_PREMULTIPLIED_ALPHA, resolution: kr(r5), ...e.data });
    return Ro(o, t, r5);
  });
  return i.length === 1 ? i[0] : i;
}, unload(r5) {
  Array.isArray(r5) ? r5.forEach((e) => e.destroy(true)) : r5.destroy(true);
} };
X.add(XI);
const YI = { extension: { type: L.LoadParser, priority: Wt.High }, name: "loadKTX", test(r5) {
  return mn(r5, ".ktx");
}, async load(r5, e, t) {
  const n = await (await z.ADAPTER.fetch(r5)).arrayBuffer(), { compressed: i, uncompressed: s, kvData: o } = $I(r5, n), a = i ?? s, l = { mipmap: fr.OFF, alphaMode: ht.NO_PREMULTIPLIED_ALPHA, resolution: kr(r5), ...e.data }, u = a.map((h) => {
    a === s && Object.assign(l, { type: h.type, format: h.format });
    const c = h.resource ?? h, d = new ee(c, l);
    return d.ktxKeyValueData = o, Ro(d, t, r5);
  });
  return u.length === 1 ? u[0] : u;
}, unload(r5) {
  Array.isArray(r5) ? r5.forEach((e) => e.destroy(true)) : r5.destroy(true);
} };
X.add(YI);
const KI = ["s3tc", "s3tc_sRGB", "etc", "etc1", "pvrtc", "atc", "astc", "bptc"], qI = { extension: L.ResolveParser, test: (r5) => {
  const e = je.extname(r5).slice(1);
  return ["basis", "ktx", "dds"].includes(e);
}, parse: (r5) => {
  var _a2, _b2;
  const e = r5.split("."), t = e.pop();
  if (["ktx", "dds"].includes(t)) {
    const n = e.pop();
    if (KI.includes(n)) return { resolution: parseFloat(((_a2 = z.RETINA_PREFIX.exec(r5)) == null ? void 0 : _a2[1]) ?? "1"), format: n, src: r5 };
  }
  return { resolution: parseFloat(((_b2 = z.RETINA_PREFIX.exec(r5)) == null ? void 0 : _b2[1]) ?? "1"), format: t, src: r5 };
} };
X.add(qI);
const ga = new te(), ZI = 4, U0 = class Is {
  constructor(e) {
    this.renderer = e, this._rendererPremultipliedAlpha = false;
  }
  contextChange() {
    var _a2;
    const e = (_a2 = this.renderer) == null ? void 0 : _a2.gl.getContextAttributes();
    this._rendererPremultipliedAlpha = !!(e && e.alpha && e.premultipliedAlpha);
  }
  async image(e, t, n, i) {
    const s = new Image();
    return s.src = await this.base64(e, t, n, i), s;
  }
  async base64(e, t, n, i) {
    const s = this.canvas(e, i);
    if (s.toBlob !== void 0) return new Promise((o, a) => {
      s.toBlob((l) => {
        if (!l) {
          a(new Error("ICanvas.toBlob failed!"));
          return;
        }
        const u = new FileReader();
        u.onload = () => o(u.result), u.onerror = a, u.readAsDataURL(l);
      }, t, n);
    });
    if (s.toDataURL !== void 0) return s.toDataURL(t, n);
    if (s.convertToBlob !== void 0) {
      const o = await s.convertToBlob({ type: t, quality: n });
      return new Promise((a, l) => {
        const u = new FileReader();
        u.onload = () => a(u.result), u.onerror = l, u.readAsDataURL(o);
      });
    }
    throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
  }
  canvas(e, t) {
    const { pixels: n, width: i, height: s, flipY: o, premultipliedAlpha: a } = this._rawPixels(e, t);
    o && Is._flipY(n, i, s), a && Is._unpremultiplyAlpha(n);
    const l = new Mb(i, s, 1), u = new ImageData(new Uint8ClampedArray(n.buffer), i, s);
    return l.context.putImageData(u, 0, 0), l.canvas;
  }
  pixels(e, t) {
    const { pixels: n, width: i, height: s, flipY: o, premultipliedAlpha: a } = this._rawPixels(e, t);
    return o && Is._flipY(n, i, s), a && Is._unpremultiplyAlpha(n), n;
  }
  _rawPixels(e, t) {
    const n = this.renderer;
    if (!n) throw new Error("The Extract has already been destroyed");
    let i, s = false, o = false, a, l = false;
    e && (e instanceof Qn ? a = e : (a = n.generateTexture(e, { region: t, resolution: n.resolution, multisample: n.multisample }), l = true, t && (ga.width = t.width, ga.height = t.height, t = ga)));
    const u = n.gl;
    if (a) {
      if (i = a.baseTexture.resolution, t = t ?? a.frame, s = false, o = a.baseTexture.alphaMode > 0 && a.baseTexture.format === F.RGBA, !l) {
        n.renderTexture.bind(a);
        const f = a.framebuffer.glFramebuffers[n.CONTEXT_UID];
        f.blitFramebuffer && n.framebuffer.bind(f.blitFramebuffer);
      }
    } else i = n.resolution, t || (t = ga, t.width = n.width / i, t.height = n.height / i), s = true, o = this._rendererPremultipliedAlpha, n.renderTexture.bind();
    const h = Math.max(Math.round(t.width * i), 1), c = Math.max(Math.round(t.height * i), 1), d = new Uint8Array(ZI * h * c);
    return u.readPixels(Math.round(t.x * i), Math.round(t.y * i), h, c, u.RGBA, u.UNSIGNED_BYTE, d), l && (a == null ? void 0 : a.destroy(true)), { pixels: d, width: h, height: c, flipY: s, premultipliedAlpha: o };
  }
  destroy() {
    this.renderer = null;
  }
  static _flipY(e, t, n) {
    const i = t << 2, s = n >> 1, o = new Uint8Array(i);
    for (let a = 0; a < s; a++) {
      const l = a * i, u = (n - a - 1) * i;
      o.set(e.subarray(l, l + i)), e.copyWithin(l, u, u + i), e.set(o, u);
    }
  }
  static _unpremultiplyAlpha(e) {
    e instanceof Uint8ClampedArray && (e = new Uint8Array(e.buffer));
    const t = e.length;
    for (let n = 0; n < t; n += 4) {
      const i = e[n + 3];
      if (i !== 0) {
        const s = 255.001 / i;
        e[n] = e[n] * s + 0.5, e[n + 1] = e[n + 1] * s + 0.5, e[n + 2] = e[n + 2] * s + 0.5;
      }
    }
  }
};
U0.extension = { name: "extract", type: L.RendererSystem };
let QI = U0;
X.add(QI);
const Nl = { build(r5) {
  const e = r5.points;
  let t, n, i, s, o, a;
  if (r5.type === Xe.CIRC) {
    const p = r5.shape;
    t = p.x, n = p.y, o = a = p.radius, i = s = 0;
  } else if (r5.type === Xe.ELIP) {
    const p = r5.shape;
    t = p.x, n = p.y, o = p.width, a = p.height, i = s = 0;
  } else {
    const p = r5.shape, v = p.width / 2, _ = p.height / 2;
    t = p.x + v, n = p.y + _, o = a = Math.max(0, Math.min(p.radius, Math.min(v, _))), i = v - o, s = _ - a;
  }
  if (!(o >= 0 && a >= 0 && i >= 0 && s >= 0)) {
    e.length = 0;
    return;
  }
  const l = Math.ceil(2.3 * Math.sqrt(o + a)), u = l * 8 + (i ? 4 : 0) + (s ? 4 : 0);
  if (e.length = u, u === 0) return;
  if (l === 0) {
    e.length = 8, e[0] = e[6] = t + i, e[1] = e[3] = n + s, e[2] = e[4] = t - i, e[5] = e[7] = n - s;
    return;
  }
  let h = 0, c = l * 4 + (i ? 2 : 0) + 2, d = c, f = u;
  {
    const p = i + o, v = s, _ = t + p, g = t - p, y = n + v;
    if (e[h++] = _, e[h++] = y, e[--c] = y, e[--c] = g, s) {
      const m = n - v;
      e[d++] = g, e[d++] = m, e[--f] = m, e[--f] = _;
    }
  }
  for (let p = 1; p < l; p++) {
    const v = Math.PI / 2 * (p / l), _ = i + Math.cos(v) * o, g = s + Math.sin(v) * a, y = t + _, m = t - _, x = n + g, w = n - g;
    e[h++] = y, e[h++] = x, e[--c] = x, e[--c] = m, e[d++] = m, e[d++] = w, e[--f] = w, e[--f] = y;
  }
  {
    const p = i, v = s + a, _ = t + p, g = t - p, y = n + v, m = n - v;
    e[h++] = _, e[h++] = y, e[--f] = m, e[--f] = _, i && (e[h++] = g, e[h++] = y, e[--f] = m, e[--f] = g);
  }
}, triangulate(r5, e) {
  const t = r5.points, n = e.points, i = e.indices;
  if (t.length === 0) return;
  let s = n.length / 2;
  const o = s;
  let a, l;
  if (r5.type !== Xe.RREC) {
    const h = r5.shape;
    a = h.x, l = h.y;
  } else {
    const h = r5.shape;
    a = h.x + h.width / 2, l = h.y + h.height / 2;
  }
  const u = r5.matrix;
  n.push(r5.matrix ? u.a * a + u.c * l + u.tx : a, r5.matrix ? u.b * a + u.d * l + u.ty : l), s++, n.push(t[0], t[1]);
  for (let h = 2; h < t.length; h += 2) n.push(t[h], t[h + 1]), i.push(s++, o, s);
  i.push(o + 1, o, s);
} };
function Sg(r5, e = false) {
  const t = r5.length;
  if (t < 6) return;
  let n = 0;
  for (let i = 0, s = r5[t - 2], o = r5[t - 1]; i < t; i += 2) {
    const a = r5[i], l = r5[i + 1];
    n += (a - s) * (l + o), s = a, o = l;
  }
  if (!e && n > 0 || e && n <= 0) {
    const i = t / 2;
    for (let s = i + i % 2; s < t; s += 2) {
      const o = t - s - 2, a = t - s - 1, l = s, u = s + 1;
      [r5[o], r5[l]] = [r5[l], r5[o]], [r5[a], r5[u]] = [r5[u], r5[a]];
    }
  }
}
const G0 = { build(r5) {
  r5.points = r5.shape.points.slice();
}, triangulate(r5, e) {
  let t = r5.points;
  const n = r5.holes, i = e.points, s = e.indices;
  if (t.length >= 6) {
    Sg(t, false);
    const o = [];
    for (let u = 0; u < n.length; u++) {
      const h = n[u];
      Sg(h.points, true), o.push(t.length / 2), t = t.concat(h.points);
    }
    const a = tE(t, o, 2);
    if (!a) return;
    const l = i.length / 2;
    for (let u = 0; u < a.length; u += 3) s.push(a[u] + l), s.push(a[u + 1] + l), s.push(a[u + 2] + l);
    for (let u = 0; u < t.length; u++) i.push(t[u]);
  }
} }, JI = { build(r5) {
  const e = r5.shape, t = e.x, n = e.y, i = e.width, s = e.height, o = r5.points;
  o.length = 0, i >= 0 && s >= 0 && o.push(t, n, t + i, n, t + i, n + s, t, n + s);
}, triangulate(r5, e) {
  const t = r5.points, n = e.points;
  if (t.length === 0) return;
  const i = n.length / 2;
  n.push(t[0], t[1], t[2], t[3], t[6], t[7], t[4], t[5]), e.indices.push(i, i + 1, i + 2, i + 1, i + 2, i + 3);
} }, eP = { build(r5) {
  Nl.build(r5);
}, triangulate(r5, e) {
  Nl.triangulate(r5, e);
} };
var Et = ((r5) => (r5.MITER = "miter", r5.BEVEL = "bevel", r5.ROUND = "round", r5))(Et || {}), qr = ((r5) => (r5.BUTT = "butt", r5.ROUND = "round", r5.SQUARE = "square", r5))(qr || {});
const qi = { adaptive: true, maxLength: 10, minSegments: 8, maxSegments: 2048, epsilon: 1e-4, _segmentsCount(r5, e = 20) {
  if (!this.adaptive || !r5 || isNaN(r5)) return e;
  let t = Math.ceil(r5 / this.maxLength);
  return t < this.minSegments ? t = this.minSegments : t > this.maxSegments && (t = this.maxSegments), t;
} };
class bg {
  static curveTo(e, t, n, i, s, o) {
    const a = o[o.length - 2], l = o[o.length - 1] - t, u = a - e, h = i - t, c = n - e, d = Math.abs(l * c - u * h);
    if (d < 1e-8 || s === 0) return (o[o.length - 2] !== e || o[o.length - 1] !== t) && o.push(e, t), null;
    const f = l * l + u * u, p = h * h + c * c, v = l * h + u * c, _ = s * Math.sqrt(f) / d, g = s * Math.sqrt(p) / d, y = _ * v / f, m = g * v / p, x = _ * c + g * u, w = _ * h + g * l, S = u * (g + y), T = l * (g + y), E = c * (_ + m), I = h * (_ + m), P = Math.atan2(T - w, S - x), D = Math.atan2(I - w, E - x);
    return { cx: x + e, cy: w + t, radius: s, startAngle: P, endAngle: D, anticlockwise: u * h > c * l };
  }
  static arc(e, t, n, i, s, o, a, l, u) {
    const h = a - o, c = qi._segmentsCount(Math.abs(h) * s, Math.ceil(Math.abs(h) / Al) * 40), d = h / (c * 2), f = d * 2, p = Math.cos(d), v = Math.sin(d), _ = c - 1, g = _ % 1 / _;
    for (let y = 0; y <= _; ++y) {
      const m = y + g * y, x = d + o + f * m, w = Math.cos(x), S = -Math.sin(x);
      u.push((p * w + v * S) * s + n, (p * -S + v * w) * s + i);
    }
  }
}
class tP {
  constructor() {
    this.reset();
  }
  begin(e, t, n) {
    this.reset(), this.style = e, this.start = t, this.attribStart = n;
  }
  end(e, t) {
    this.attribSize = t - this.attribStart, this.size = e - this.start;
  }
  reset() {
    this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0;
  }
}
class Gf {
  static curveLength(e, t, n, i, s, o, a, l) {
    let u = 0, h = 0, c = 0, d = 0, f = 0, p = 0, v = 0, _ = 0, g = 0, y = 0, m = 0, x = e, w = t;
    for (let S = 1; S <= 10; ++S) h = S / 10, c = h * h, d = c * h, f = 1 - h, p = f * f, v = p * f, _ = v * e + 3 * p * h * n + 3 * f * c * s + d * a, g = v * t + 3 * p * h * i + 3 * f * c * o + d * l, y = x - _, m = w - g, x = _, w = g, u += Math.sqrt(y * y + m * m);
    return u;
  }
  static curveTo(e, t, n, i, s, o, a) {
    const l = a[a.length - 2], u = a[a.length - 1];
    a.length -= 2;
    const h = qi._segmentsCount(Gf.curveLength(l, u, e, t, n, i, s, o));
    let c = 0, d = 0, f = 0, p = 0, v = 0;
    a.push(l, u);
    for (let _ = 1, g = 0; _ <= h; ++_) g = _ / h, c = 1 - g, d = c * c, f = d * c, p = g * g, v = p * g, a.push(f * l + 3 * d * g * e + 3 * c * p * n + v * s, f * u + 3 * d * g * t + 3 * c * p * i + v * o);
  }
}
function Ag(r5, e, t, n, i, s, o, a) {
  const l = r5 - t * i, u = e - n * i, h = r5 + t * s, c = e + n * s;
  let d, f;
  o ? (d = n, f = -t) : (d = -n, f = t);
  const p = l + d, v = u + f, _ = h + d, g = c + f;
  return a.push(p, v, _, g), 2;
}
function yn(r5, e, t, n, i, s, o, a) {
  const l = t - r5, u = n - e;
  let h = Math.atan2(l, u), c = Math.atan2(i - r5, s - e);
  a && h < c ? h += Math.PI * 2 : !a && h > c && (c += Math.PI * 2);
  let d = h;
  const f = c - h, p = Math.abs(f), v = Math.sqrt(l * l + u * u), _ = (15 * p * Math.sqrt(v) / Math.PI >> 0) + 1, g = f / _;
  if (d += g, a) {
    o.push(r5, e, t, n);
    for (let y = 1, m = d; y < _; y++, m += g) o.push(r5, e, r5 + Math.sin(m) * v, e + Math.cos(m) * v);
    o.push(r5, e, i, s);
  } else {
    o.push(t, n, r5, e);
    for (let y = 1, m = d; y < _; y++, m += g) o.push(r5 + Math.sin(m) * v, e + Math.cos(m) * v, r5, e);
    o.push(i, s, r5, e);
  }
  return _ * 2;
}
function rP(r5, e) {
  const t = r5.shape;
  let n = r5.points || t.points.slice();
  const i = e.closePointEps;
  if (n.length === 0) return;
  const s = r5.lineStyle, o = new le(n[0], n[1]), a = new le(n[n.length - 2], n[n.length - 1]), l = t.type !== Xe.POLY || t.closeStroke, u = Math.abs(o.x - a.x) < i && Math.abs(o.y - a.y) < i;
  if (l) {
    n = n.slice(), u && (n.pop(), n.pop(), a.set(n[n.length - 2], n[n.length - 1]));
    const O = (o.x + a.x) * 0.5, M = (a.y + o.y) * 0.5;
    n.unshift(O, M), n.push(O, M);
  }
  const h = e.points, c = n.length / 2;
  let d = n.length;
  const f = h.length / 2, p = s.width / 2, v = p * p, _ = s.miterLimit * s.miterLimit;
  let g = n[0], y = n[1], m = n[2], x = n[3], w = 0, S = 0, T = -(y - x), E = g - m, I = 0, P = 0, D = Math.sqrt(T * T + E * E);
  T /= D, E /= D, T *= p, E *= p;
  const N = s.alignment, A = (1 - N) * 2, C = N * 2;
  l || (s.cap === qr.ROUND ? d += yn(g - T * (A - C) * 0.5, y - E * (A - C) * 0.5, g - T * A, y - E * A, g + T * C, y + E * C, h, true) + 2 : s.cap === qr.SQUARE && (d += Ag(g, y, T, E, A, C, true, h))), h.push(g - T * A, y - E * A, g + T * C, y + E * C);
  for (let O = 1; O < c - 1; ++O) {
    g = n[(O - 1) * 2], y = n[(O - 1) * 2 + 1], m = n[O * 2], x = n[O * 2 + 1], w = n[(O + 1) * 2], S = n[(O + 1) * 2 + 1], T = -(y - x), E = g - m, D = Math.sqrt(T * T + E * E), T /= D, E /= D, T *= p, E *= p, I = -(x - S), P = m - w, D = Math.sqrt(I * I + P * P), I /= D, P /= D, I *= p, P *= p;
    const M = m - g, H = y - x, b = m - w, U = S - x, Z = M * b + H * U, ae = H * b - U * M, V = ae < 0;
    if (Math.abs(ae) < 1e-3 * Math.abs(Z)) {
      h.push(m - T * A, x - E * A, m + T * C, x + E * C), Z >= 0 && (s.join === Et.ROUND ? d += yn(m, x, m - T * A, x - E * A, m - I * A, x - P * A, h, false) + 4 : d += 2, h.push(m - I * C, x - P * C, m + I * A, x + P * A));
      continue;
    }
    const oe = (-T + g) * (-E + x) - (-T + m) * (-E + y), re = (-I + w) * (-P + x) - (-I + m) * (-P + S), he = (M * re - b * oe) / ae, _e = (U * oe - H * re) / ae, rt = (he - m) * (he - m) + (_e - x) * (_e - x), Fe = m + (he - m) * A, de = x + (_e - x) * A, Ae = m - (he - m) * C, Ce = x - (_e - x) * C, Xt = Math.min(M * M + H * H, b * b + U * U), Yt = V ? A : C, is = Xt + Yt * Yt * v, ox = rt <= is;
    let ko = s.join;
    if (ko === Et.MITER && rt / v > _ && (ko = Et.BEVEL), ox) switch (ko) {
      case Et.MITER: {
        h.push(Fe, de, Ae, Ce);
        break;
      }
      case Et.BEVEL: {
        V ? h.push(Fe, de, m + T * C, x + E * C, Fe, de, m + I * C, x + P * C) : h.push(m - T * A, x - E * A, Ae, Ce, m - I * A, x - P * A, Ae, Ce), d += 2;
        break;
      }
      case Et.ROUND: {
        V ? (h.push(Fe, de, m + T * C, x + E * C), d += yn(m, x, m + T * C, x + E * C, m + I * C, x + P * C, h, true) + 4, h.push(Fe, de, m + I * C, x + P * C)) : (h.push(m - T * A, x - E * A, Ae, Ce), d += yn(m, x, m - T * A, x - E * A, m - I * A, x - P * A, h, false) + 4, h.push(m - I * A, x - P * A, Ae, Ce));
        break;
      }
    }
    else {
      switch (h.push(m - T * A, x - E * A, m + T * C, x + E * C), ko) {
        case Et.MITER: {
          V ? h.push(Ae, Ce, Ae, Ce) : h.push(Fe, de, Fe, de), d += 2;
          break;
        }
        case Et.ROUND: {
          V ? d += yn(m, x, m + T * C, x + E * C, m + I * C, x + P * C, h, true) + 2 : d += yn(m, x, m - T * A, x - E * A, m - I * A, x - P * A, h, false) + 2;
          break;
        }
      }
      h.push(m - I * A, x - P * A, m + I * C, x + P * C), d += 2;
    }
  }
  g = n[(c - 2) * 2], y = n[(c - 2) * 2 + 1], m = n[(c - 1) * 2], x = n[(c - 1) * 2 + 1], T = -(y - x), E = g - m, D = Math.sqrt(T * T + E * E), T /= D, E /= D, T *= p, E *= p, h.push(m - T * A, x - E * A, m + T * C, x + E * C), l || (s.cap === qr.ROUND ? d += yn(m - T * (A - C) * 0.5, x - E * (A - C) * 0.5, m - T * A, x - E * A, m + T * C, x + E * C, h, false) + 2 : s.cap === qr.SQUARE && (d += Ag(m, x, T, E, A, C, false, h)));
  const q = e.indices, J = qi.epsilon * qi.epsilon;
  for (let O = f; O < d + f - 2; ++O) g = h[O * 2], y = h[O * 2 + 1], m = h[(O + 1) * 2], x = h[(O + 1) * 2 + 1], w = h[(O + 2) * 2], S = h[(O + 2) * 2 + 1], !(Math.abs(g * (x - S) + m * (S - y) + w * (y - x)) < J) && q.push(O, O + 1, O + 2);
}
function nP(r5, e) {
  let t = 0;
  const n = r5.shape, i = r5.points || n.points, s = n.type !== Xe.POLY || n.closeStroke;
  if (i.length === 0) return;
  const o = e.points, a = e.indices, l = i.length / 2, u = o.length / 2;
  let h = u;
  for (o.push(i[0], i[1]), t = 1; t < l; t++) o.push(i[t * 2], i[t * 2 + 1]), a.push(h, h + 1), h++;
  s && a.push(h, u);
}
function Cg(r5, e) {
  r5.lineStyle.native ? nP(r5, e) : rP(r5, e);
}
class zf {
  static curveLength(e, t, n, i, s, o) {
    const a = e - 2 * n + s, l = t - 2 * i + o, u = 2 * n - 2 * e, h = 2 * i - 2 * t, c = 4 * (a * a + l * l), d = 4 * (a * u + l * h), f = u * u + h * h, p = 2 * Math.sqrt(c + d + f), v = Math.sqrt(c), _ = 2 * c * v, g = 2 * Math.sqrt(f), y = d / v;
    return (_ * p + v * d * (p - g) + (4 * f * c - d * d) * Math.log((2 * v + y + p) / (y + g))) / (4 * _);
  }
  static curveTo(e, t, n, i, s) {
    const o = s[s.length - 2], a = s[s.length - 1], l = qi._segmentsCount(zf.curveLength(o, a, e, t, n, i));
    let u = 0, h = 0;
    for (let c = 1; c <= l; ++c) {
      const d = c / l;
      u = o + (e - o) * d, h = a + (t - a) * d, s.push(u + (e + (n - e) * d - u) * d, h + (t + (i - t) * d - h) * d);
    }
  }
}
const Ch = { [Xe.POLY]: G0, [Xe.CIRC]: Nl, [Xe.ELIP]: Nl, [Xe.RECT]: JI, [Xe.RREC]: eP }, Ig = [], ya = [];
class Bl {
  constructor(e, t = null, n = null, i = null) {
    this.points = [], this.holes = [], this.shape = e, this.lineStyle = n, this.fillStyle = t, this.matrix = i, this.type = e.type;
  }
  clone() {
    return new Bl(this.shape, this.fillStyle, this.lineStyle, this.matrix);
  }
  destroy() {
    this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null;
  }
}
const ii = new le(), z0 = class H0 extends W_ {
  constructor() {
    super(), this.closePointEps = 1e-4, this.boundsPadding = 0, this.uvsFloat32 = null, this.indicesUint16 = null, this.batchable = false, this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.drawCalls = [], this.batchDirty = -1, this.batches = [], this.dirty = 0, this.cacheDirty = -1, this.clearDirty = 0, this.shapeIndex = 0, this._bounds = new Ml(), this.boundsDirty = -1;
  }
  get bounds() {
    return this.updateBatches(), this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds;
  }
  invalidate() {
    this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
    for (let e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].texArray.clear(), ya.push(this.drawCalls[e]);
    this.drawCalls.length = 0;
    for (let e = 0; e < this.batches.length; e++) {
      const t = this.batches[e];
      t.reset(), Ig.push(t);
    }
    this.batches.length = 0;
  }
  clear() {
    return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this;
  }
  drawShape(e, t = null, n = null, i = null) {
    const s = new Bl(e, t, n, i);
    return this.graphicsData.push(s), this.dirty++, this;
  }
  drawHole(e, t = null) {
    if (!this.graphicsData.length) return null;
    const n = new Bl(e, null, null, t), i = this.graphicsData[this.graphicsData.length - 1];
    return n.lineStyle = i.lineStyle, i.holes.push(n), this.dirty++, this;
  }
  destroy() {
    super.destroy();
    for (let e = 0; e < this.graphicsData.length; ++e) this.graphicsData[e].destroy();
    this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null;
  }
  containsPoint(e) {
    const t = this.graphicsData;
    for (let n = 0; n < t.length; ++n) {
      const i = t[n];
      if (i.fillStyle.visible && i.shape && (i.matrix ? i.matrix.applyInverse(e, ii) : ii.copyFrom(e), i.shape.contains(ii.x, ii.y))) {
        let s = false;
        if (i.holes) {
          for (let o = 0; o < i.holes.length; o++) if (i.holes[o].shape.contains(ii.x, ii.y)) {
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
    const e = this.uvs, t = this.graphicsData;
    let n = null, i = null;
    this.batches.length > 0 && (n = this.batches[this.batches.length - 1], i = n.style);
    for (let l = this.shapeIndex; l < t.length; l++) {
      this.shapeIndex++;
      const u = t[l], h = u.fillStyle, c = u.lineStyle;
      Ch[u.type].build(u), u.matrix && this.transformPoints(u.points, u.matrix), (h.visible || c.visible) && this.processHoles(u.holes);
      for (let d = 0; d < 2; d++) {
        const f = d === 0 ? h : c;
        if (!f.visible) continue;
        const p = f.texture.baseTexture, v = this.indices.length, _ = this.points.length / 2;
        p.wrapMode = on.REPEAT, d === 0 ? this.processFill(u) : this.processLine(u);
        const g = this.points.length / 2 - _;
        g !== 0 && (n && !this._compareStyles(i, f) && (n.end(v, _), n = null), n || (n = Ig.pop() || new tP(), n.begin(f, v, _), this.batches.push(n), i = f), this.addUvs(this.points, e, f.texture, _, g, f.matrix));
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
  _compareStyles(e, t) {
    return !(!e || !t || e.texture.baseTexture !== t.texture.baseTexture || e.color + e.alpha !== t.color + t.alpha || !!e.native != !!t.native);
  }
  validateBatching() {
    if (this.dirty === this.cacheDirty || !this.graphicsData.length) return false;
    for (let e = 0, t = this.graphicsData.length; e < t; e++) {
      const n = this.graphicsData[e], i = n.fillStyle, s = n.lineStyle;
      if (i && !i.texture.baseTexture.valid || s && !s.texture.baseTexture.valid) return false;
    }
    return true;
  }
  packBatches() {
    this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
    const e = this.batches;
    for (let t = 0, n = e.length; t < n; t++) {
      const i = e[t];
      for (let s = 0; s < i.size; s++) {
        const o = i.start + s;
        this.indicesUint16[o] = this.indicesUint16[o] - i.attribStart;
      }
    }
  }
  isBatchable() {
    if (this.points.length > 65535 * 2) return false;
    const e = this.batches;
    for (let t = 0; t < e.length; t++) if (e[t].style.native) return false;
    return this.points.length < H0.BATCHABLE_SIZE * 2;
  }
  buildDrawCalls() {
    let e = ++ee._globalBatch;
    for (let c = 0; c < this.drawCalls.length; c++) this.drawCalls[c].texArray.clear(), ya.push(this.drawCalls[c]);
    this.drawCalls.length = 0;
    const t = this.colors, n = this.textureIds;
    let i = ya.pop();
    i || (i = new Kc(), i.texArray = new Jc()), i.texArray.count = 0, i.start = 0, i.size = 0, i.type = lr.TRIANGLES;
    let s = 0, o = null, a = 0, l = false, u = lr.TRIANGLES, h = 0;
    this.drawCalls.push(i);
    for (let c = 0; c < this.batches.length; c++) {
      const d = this.batches[c], f = 8, p = d.style, v = p.texture.baseTexture;
      l !== !!p.native && (l = !!p.native, u = l ? lr.LINES : lr.TRIANGLES, o = null, s = f, e++), o !== v && (o = v, v._batchEnabled !== e && (s === f && (e++, s = 0, i.size > 0 && (i = ya.pop(), i || (i = new Kc(), i.texArray = new Jc()), this.drawCalls.push(i)), i.start = h, i.size = 0, i.texArray.count = 0, i.type = u), v.touched = 1, v._batchEnabled = e, v._batchLocation = s, v.wrapMode = on.REPEAT, i.texArray.elements[i.texArray.count++] = v, s++)), i.size += d.size, h += d.size, a = v._batchLocation, this.addColors(t, p.color, p.alpha, d.attribSize, d.attribStart), this.addTextureIds(n, a, d.attribSize, d.attribStart);
    }
    ee._globalBatch = e, this.packAttributes();
  }
  packAttributes() {
    const e = this.points, t = this.uvs, n = this.colors, i = this.textureIds, s = new ArrayBuffer(e.length * 3 * 4), o = new Float32Array(s), a = new Uint32Array(s);
    let l = 0;
    for (let u = 0; u < e.length / 2; u++) o[l++] = e[u * 2], o[l++] = e[u * 2 + 1], o[l++] = t[u * 2], o[l++] = t[u * 2 + 1], a[l++] = n[u], o[l++] = i[u];
    this._buffer.update(s), this._indexBuffer.update(this.indicesUint16);
  }
  processFill(e) {
    e.holes.length ? G0.triangulate(e, this) : Ch[e.type].triangulate(e, this);
  }
  processLine(e) {
    Cg(e, this);
    for (let t = 0; t < e.holes.length; t++) Cg(e.holes[t], this);
  }
  processHoles(e) {
    for (let t = 0; t < e.length; t++) {
      const n = e[t];
      Ch[n.type].build(n), n.matrix && this.transformPoints(n.points, n.matrix);
    }
  }
  calculateBounds() {
    const e = this._bounds;
    e.clear(), e.addVertexData(this.points, 0, this.points.length), e.pad(this.boundsPadding, this.boundsPadding);
  }
  transformPoints(e, t) {
    for (let n = 0; n < e.length / 2; n++) {
      const i = e[n * 2], s = e[n * 2 + 1];
      e[n * 2] = t.a * i + t.c * s + t.tx, e[n * 2 + 1] = t.b * i + t.d * s + t.ty;
    }
  }
  addColors(e, t, n, i, s = 0) {
    const o = me.shared.setValue(t).toLittleEndianNumber(), a = me.shared.setValue(o).toPremultiplied(n);
    e.length = Math.max(e.length, s + i);
    for (let l = 0; l < i; l++) e[s + l] = a;
  }
  addTextureIds(e, t, n, i = 0) {
    e.length = Math.max(e.length, i + n);
    for (let s = 0; s < n; s++) e[i + s] = t;
  }
  addUvs(e, t, n, i, s, o = null) {
    let a = 0;
    const l = t.length, u = n.frame;
    for (; a < s; ) {
      let c = e[(i + a) * 2], d = e[(i + a) * 2 + 1];
      if (o) {
        const f = o.a * c + o.c * d + o.tx;
        d = o.b * c + o.d * d + o.ty, c = f;
      }
      a++, t.push(c / u.width, d / u.height);
    }
    const h = n.baseTexture;
    (u.width < h.width || u.height < h.height) && this.adjustUvs(t, n, l, s);
  }
  adjustUvs(e, t, n, i) {
    const s = t.baseTexture, o = 1e-6, a = n + i * 2, l = t.frame, u = l.width / s.width, h = l.height / s.height;
    let c = l.x / l.width, d = l.y / l.height, f = Math.floor(e[n] + o), p = Math.floor(e[n + 1] + o);
    for (let v = n + 2; v < a; v += 2) f = Math.min(f, Math.floor(e[v] + o)), p = Math.min(p, Math.floor(e[v + 1] + o));
    c -= f, d -= p;
    for (let v = n; v < a; v += 2) e[v] = (e[v] + c) * u, e[v + 1] = (e[v + 1] + d) * h;
  }
};
z0.BATCHABLE_SIZE = 100;
let iP = z0;
class pu {
  constructor() {
    this.color = 16777215, this.alpha = 1, this.texture = W.WHITE, this.matrix = null, this.visible = false, this.reset();
  }
  clone() {
    const e = new pu();
    return e.color = this.color, e.alpha = this.alpha, e.texture = this.texture, e.matrix = this.matrix, e.visible = this.visible, e;
  }
  reset() {
    this.color = 16777215, this.alpha = 1, this.texture = W.WHITE, this.matrix = null, this.visible = false;
  }
  destroy() {
    this.texture = null, this.matrix = null;
  }
}
class Hf extends pu {
  constructor() {
    super(...arguments), this.width = 0, this.alignment = 0.5, this.native = false, this.cap = qr.BUTT, this.join = Et.MITER, this.miterLimit = 10;
  }
  clone() {
    const e = new Hf();
    return e.color = this.color, e.alpha = this.alpha, e.texture = this.texture, e.matrix = this.matrix, e.visible = this.visible, e.width = this.width, e.alignment = this.alignment, e.native = this.native, e.cap = this.cap, e.join = this.join, e.miterLimit = this.miterLimit, e;
  }
  reset() {
    super.reset(), this.color = 0, this.alignment = 0.5, this.width = 0, this.native = false, this.cap = qr.BUTT, this.join = Et.MITER, this.miterLimit = 10;
  }
}
const Ih = {}, vd = class Va extends Je {
  constructor(e = null) {
    super(), this.shader = null, this.pluginName = "batch", this.currentPath = null, this.batches = [], this.batchTint = -1, this.batchDirty = -1, this.vertexData = null, this._fillStyle = new pu(), this._lineStyle = new Hf(), this._matrix = null, this._holeMode = false, this.state = pr.for2d(), this._geometry = e || new iP(), this._geometry.refCount++, this._transformID = -1, this._tintColor = new me(16777215), this.blendMode = Q.NORMAL;
  }
  get geometry() {
    return this._geometry;
  }
  clone() {
    return this.finishPoly(), new Va(this._geometry);
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
  lineStyle(e = null, t = 0, n, i = 0.5, s = false) {
    return typeof e == "number" && (e = { width: e, color: t, alpha: n, alignment: i, native: s }), this.lineTextureStyle(e);
  }
  lineTextureStyle(e) {
    const t = { width: 0, texture: W.WHITE, color: (e == null ? void 0 : e.texture) ? 16777215 : 0, matrix: null, alignment: 0.5, native: false, cap: qr.BUTT, join: Et.MITER, miterLimit: 10 };
    e = Object.assign(t, e), this.normalizeColor(e), this.currentPath && this.startPoly();
    const n = e.width > 0 && e.alpha > 0;
    return n ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._lineStyle, { visible: n }, e)) : this._lineStyle.reset(), this;
  }
  startPoly() {
    if (this.currentPath) {
      const e = this.currentPath.points, t = this.currentPath.points.length;
      t > 2 && (this.drawShape(this.currentPath), this.currentPath = new On(), this.currentPath.closeStroke = false, this.currentPath.points.push(e[t - 2], e[t - 1]));
    } else this.currentPath = new On(), this.currentPath.closeStroke = false;
  }
  finishPoly() {
    this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0);
  }
  moveTo(e, t) {
    return this.startPoly(), this.currentPath.points[0] = e, this.currentPath.points[1] = t, this;
  }
  lineTo(e, t) {
    this.currentPath || this.moveTo(0, 0);
    const n = this.currentPath.points, i = n[n.length - 2], s = n[n.length - 1];
    return (i !== e || s !== t) && n.push(e, t), this;
  }
  _initCurve(e = 0, t = 0) {
    this.currentPath ? this.currentPath.points.length === 0 && (this.currentPath.points = [e, t]) : this.moveTo(e, t);
  }
  quadraticCurveTo(e, t, n, i) {
    this._initCurve();
    const s = this.currentPath.points;
    return s.length === 0 && this.moveTo(0, 0), zf.curveTo(e, t, n, i, s), this;
  }
  bezierCurveTo(e, t, n, i, s, o) {
    return this._initCurve(), Gf.curveTo(e, t, n, i, s, o, this.currentPath.points), this;
  }
  arcTo(e, t, n, i, s) {
    this._initCurve(e, t);
    const o = this.currentPath.points, a = bg.curveTo(e, t, n, i, s, o);
    if (a) {
      const { cx: l, cy: u, radius: h, startAngle: c, endAngle: d, anticlockwise: f } = a;
      this.arc(l, u, h, c, d, f);
    }
    return this;
  }
  arc(e, t, n, i, s, o = false) {
    if (i === s) return this;
    if (!o && s <= i ? s += Al : o && i <= s && (i += Al), s - i === 0) return this;
    const a = e + Math.cos(i) * n, l = t + Math.sin(i) * n, u = this._geometry.closePointEps;
    let h = this.currentPath ? this.currentPath.points : null;
    if (h) {
      const c = Math.abs(h[h.length - 2] - a), d = Math.abs(h[h.length - 1] - l);
      c < u && d < u || h.push(a, l);
    } else this.moveTo(a, l), h = this.currentPath.points;
    return bg.arc(a, l, e, t, n, i, s, o, h), this;
  }
  beginFill(e = 0, t) {
    return this.beginTextureFill({ texture: W.WHITE, color: e, alpha: t });
  }
  normalizeColor(e) {
    const t = me.shared.setValue(e.color ?? 0);
    e.color = t.toNumber(), e.alpha ?? (e.alpha = t.alpha);
  }
  beginTextureFill(e) {
    const t = { texture: W.WHITE, color: 16777215, matrix: null };
    e = Object.assign(t, e), this.normalizeColor(e), this.currentPath && this.startPoly();
    const n = e.alpha > 0;
    return n ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._fillStyle, { visible: n }, e)) : this._fillStyle.reset(), this;
  }
  endFill() {
    return this.finishPoly(), this._fillStyle.reset(), this;
  }
  drawRect(e, t, n, i) {
    return this.drawShape(new te(e, t, n, i));
  }
  drawRoundedRect(e, t, n, i, s) {
    return this.drawShape(new cu(e, t, n, i, s));
  }
  drawCircle(e, t, n) {
    return this.drawShape(new uu(e, t, n));
  }
  drawEllipse(e, t, n, i) {
    return this.drawShape(new hu(e, t, n, i));
  }
  drawPolygon(...e) {
    let t, n = true;
    const i = e[0];
    i.points ? (n = i.closeStroke, t = i.points) : Array.isArray(e[0]) ? t = e[0] : t = e;
    const s = new On(t);
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
    return e.length === 1 && e[0].shape.type === Xe.RECT && !e[0].matrix && !e[0].holes.length && !(e[0].lineStyle.visible && e[0].lineStyle.width);
  }
  _render(e) {
    this.finishPoly();
    const t = this._geometry;
    t.updateBatches(), t.batchable ? (this.batchDirty !== t.batchDirty && this._populateBatches(), this._renderBatched(e)) : (e.batch.flush(), this._renderDirect(e));
  }
  _populateBatches() {
    const e = this._geometry, t = this.blendMode, n = e.batches.length;
    this.batchTint = -1, this._transformID = -1, this.batchDirty = e.batchDirty, this.batches.length = n, this.vertexData = new Float32Array(e.points);
    for (let i = 0; i < n; i++) {
      const s = e.batches[i], o = s.style.color, a = new Float32Array(this.vertexData.buffer, s.attribStart * 4 * 2, s.attribSize * 2), l = new Float32Array(e.uvsFloat32.buffer, s.attribStart * 4 * 2, s.attribSize * 2), u = new Uint16Array(e.indicesUint16.buffer, s.start * 2, s.size), h = { vertexData: a, blendMode: t, indices: u, uvs: l, _batchRGB: me.shared.setValue(o).toRgbArray(), _tintRGB: o, _texture: s.style.texture, alpha: s.style.alpha, worldAlpha: 1 };
      this.batches[i] = h;
    }
  }
  _renderBatched(e) {
    if (this.batches.length) {
      e.batch.setObjectRenderer(e.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
      for (let t = 0, n = this.batches.length; t < n; t++) {
        const i = this.batches[t];
        i.worldAlpha = this.worldAlpha * i.alpha, e.plugins[this.pluginName].render(i);
      }
    }
  }
  _renderDirect(e) {
    const t = this._resolveDirectShader(e), n = this._geometry, i = this.worldAlpha, s = t.uniforms, o = n.drawCalls;
    s.translationMatrix = this.transform.worldTransform, me.shared.setValue(this._tintColor).premultiply(i).toArray(s.tint), e.shader.bind(t), e.geometry.bind(n, t), e.state.set(this.state);
    for (let a = 0, l = o.length; a < l; a++) this._renderDrawCallDirect(e, n.drawCalls[a]);
  }
  _renderDrawCallDirect(e, t) {
    const { texArray: n, type: i, size: s, start: o } = t, a = n.count;
    for (let l = 0; l < a; l++) e.texture.bind(n.elements[l], l);
    e.geometry.draw(i, s, o);
  }
  _resolveDirectShader(e) {
    let t = this.shader;
    const n = this.pluginName;
    if (!t) {
      if (!Ih[n]) {
        const { maxTextures: i } = e.plugins[n], s = new Int32Array(i);
        for (let l = 0; l < i; l++) s[l] = l;
        const o = { tint: new Float32Array([1, 1, 1, 1]), translationMatrix: new ye(), default: jt.from({ uSamplers: s }, true) }, a = e.plugins[n]._shader.program;
        Ih[n] = new dr(a, o);
      }
      t = Ih[n];
    }
    return t;
  }
  _calculateBounds() {
    this.finishPoly();
    const e = this._geometry;
    if (!e.graphicsData.length) return;
    const { minX: t, minY: n, maxX: i, maxY: s } = e.bounds;
    this._bounds.addFrame(this.transform, t, n, i, s);
  }
  containsPoint(e) {
    return this.worldTransform.applyInverse(e, Va._TEMP_POINT), this._geometry.containsPoint(Va._TEMP_POINT);
  }
  calculateTints() {
    if (this.batchTint !== this.tint) {
      this.batchTint = this._tintColor.toNumber();
      for (let e = 0; e < this.batches.length; e++) {
        const t = this.batches[e];
        t._tintRGB = me.shared.setValue(this._tintColor).multiply(t._batchRGB).toLittleEndianNumber();
      }
    }
  }
  calculateVertices() {
    const e = this.transform._worldID;
    if (this._transformID === e) return;
    this._transformID = e;
    const t = this.transform.worldTransform, n = t.a, i = t.b, s = t.c, o = t.d, a = t.tx, l = t.ty, u = this._geometry.points, h = this.vertexData;
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
vd.curves = qi, vd._TEMP_POINT = new le();
let Pn = vd;
class sP {
  constructor(e, t) {
    this.uvBuffer = e, this.uvMatrix = t, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0;
  }
  update(e) {
    if (!e && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID) return;
    this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
    const t = this.uvBuffer.data;
    (!this.data || this.data.length !== t.length) && (this.data = new Float32Array(t.length)), this.uvMatrix.multiplyUvs(t, this.data), this._updateID++;
  }
}
const Ph = new le(), Pg = new On(), $0 = class j0 extends Je {
  constructor(e, t, n, i = lr.TRIANGLES) {
    super(), this.geometry = e, this.shader = t, this.state = n || pr.for2d(), this.drawMode = i, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = -1, this._transformID = -1, this._roundPixels = z.ROUND_PIXELS, this.batchUvs = null;
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
    const t = this.geometry.buffers[0].data;
    this.shader.batchable && this.drawMode === lr.TRIANGLES && t.length < j0.BATCHABLE_SIZE * 2 ? this._renderToBatch(e) : this._renderDefault(e);
  }
  _renderDefault(e) {
    const t = this.shader;
    t.alpha = this.worldAlpha, t.update && t.update(), e.batch.flush(), t.uniforms.translationMatrix = this.transform.worldTransform.toArray(true), e.shader.bind(t), e.state.set(this.state), e.geometry.bind(this.geometry, t), e.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount);
  }
  _renderToBatch(e) {
    const t = this.geometry, n = this.shader;
    n.uvMatrix && (n.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = t.indexBuffer.data, this._tintRGB = n._tintRGB, this._texture = n.texture;
    const i = this.material.pluginName;
    e.batch.setObjectRenderer(e.plugins[i]), e.plugins[i].render(this);
  }
  calculateVertices() {
    const e = this.geometry.buffers[0], t = e.data, n = e._updateID;
    if (n === this.vertexDirty && this._transformID === this.transform._worldID) return;
    this._transformID = this.transform._worldID, this.vertexData.length !== t.length && (this.vertexData = new Float32Array(t.length));
    const i = this.transform.worldTransform, s = i.a, o = i.b, a = i.c, l = i.d, u = i.tx, h = i.ty, c = this.vertexData;
    for (let d = 0; d < c.length / 2; d++) {
      const f = t[d * 2], p = t[d * 2 + 1];
      c[d * 2] = s * f + a * p + u, c[d * 2 + 1] = o * f + l * p + h;
    }
    if (this._roundPixels) {
      const d = z.RESOLUTION;
      for (let f = 0; f < c.length; ++f) c[f] = Math.round(c[f] * d) / d;
    }
    this.vertexDirty = n;
  }
  calculateUvs() {
    const e = this.geometry.buffers[1], t = this.shader;
    t.uvMatrix.isSimple ? this.uvs = e.data : (this.batchUvs || (this.batchUvs = new sP(e, t.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data);
  }
  _calculateBounds() {
    this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length);
  }
  containsPoint(e) {
    if (!this.getBounds().contains(e.x, e.y)) return false;
    this.worldTransform.applyInverse(e, Ph);
    const t = this.geometry.getBuffer("aVertexPosition").data, n = Pg.points, i = this.geometry.getIndex().data, s = i.length, o = this.drawMode === 4 ? 3 : 1;
    for (let a = 0; a + 2 < s; a += o) {
      const l = i[a] * 2, u = i[a + 1] * 2, h = i[a + 2] * 2;
      if (n[0] = t[l], n[1] = t[l + 1], n[2] = t[u], n[3] = t[u + 1], n[4] = t[h], n[5] = t[h + 1], Pg.contains(Ph.x, Ph.y)) return true;
    }
    return false;
  }
  destroy(e) {
    super.destroy(e), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null;
  }
};
$0.BATCHABLE_SIZE = 100;
let Rg = $0;
class oP extends un {
  constructor(e, t, n) {
    super();
    const i = new Re(e), s = new Re(t, true), o = new Re(n, true, true);
    this.addAttribute("aVertexPosition", i, 2, false, K.FLOAT).addAttribute("aTextureCoord", s, 2, false, K.FLOAT).addIndex(o), this._updateId = -1;
  }
  get vertexDirtyId() {
    return this.buffers[0]._updateID;
  }
}
var aP = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`, lP = `attribute vec2 aVertexPosition;
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
class Mg extends dr {
  constructor(e, t) {
    const n = { uSampler: e, alpha: 1, uTextureMatrix: ye.IDENTITY, uColor: new Float32Array([1, 1, 1, 1]) };
    t = Object.assign({ tint: 16777215, alpha: 1, pluginName: "batch" }, t), t.uniforms && Object.assign(n, t.uniforms), super(t.program || br.from(lP, aP), n), this._colorDirty = false, this.uvMatrix = new o0(e), this.batchable = t.program === void 0, this.pluginName = t.pluginName, this._tintColor = new me(t.tint), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = true, this.alpha = t.alpha;
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
      me.shared.setValue(this._tintColor).premultiply(this._alpha, e).toArray(this.uniforms.uColor);
    }
    this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
  }
}
class kg {
  constructor(e, t, n) {
    this.geometry = new un(), this.indexBuffer = null, this.size = n, this.dynamicProperties = [], this.staticProperties = [];
    for (let i = 0; i < e.length; ++i) {
      let s = e[i];
      s = { attributeName: s.attributeName, size: s.size, uploadFunction: s.uploadFunction, type: s.type || K.FLOAT, offset: s.offset }, t[i] ? this.dynamicProperties.push(s) : this.staticProperties.push(s);
    }
    this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers();
  }
  initBuffers() {
    const e = this.geometry;
    let t = 0;
    this.indexBuffer = new Re(Pb(this.size), true, true), e.addIndex(this.indexBuffer), this.dynamicStride = 0;
    for (let o = 0; o < this.dynamicProperties.length; ++o) {
      const a = this.dynamicProperties[o];
      a.offset = t, t += a.size, this.dynamicStride += a.size;
    }
    const n = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
    this.dynamicData = new Float32Array(n), this.dynamicDataUint32 = new Uint32Array(n), this.dynamicBuffer = new Re(this.dynamicData, false, false);
    let i = 0;
    this.staticStride = 0;
    for (let o = 0; o < this.staticProperties.length; ++o) {
      const a = this.staticProperties[o];
      a.offset = i, i += a.size, this.staticStride += a.size;
    }
    const s = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
    this.staticData = new Float32Array(s), this.staticDataUint32 = new Uint32Array(s), this.staticBuffer = new Re(this.staticData, true, false);
    for (let o = 0; o < this.dynamicProperties.length; ++o) {
      const a = this.dynamicProperties[o];
      e.addAttribute(a.attributeName, this.dynamicBuffer, 0, a.type === K.UNSIGNED_BYTE, a.type, this.dynamicStride * 4, a.offset * 4);
    }
    for (let o = 0; o < this.staticProperties.length; ++o) {
      const a = this.staticProperties[o];
      e.addAttribute(a.attributeName, this.staticBuffer, 0, a.type === K.UNSIGNED_BYTE, a.type, this.staticStride * 4, a.offset * 4);
    }
  }
  uploadDynamic(e, t, n) {
    for (let i = 0; i < this.dynamicProperties.length; i++) {
      const s = this.dynamicProperties[i];
      s.uploadFunction(e, t, n, s.type === K.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, s.offset);
    }
    this.dynamicBuffer._updateID++;
  }
  uploadStatic(e, t, n) {
    for (let i = 0; i < this.staticProperties.length; i++) {
      const s = this.staticProperties[i];
      s.uploadFunction(e, t, n, s.type === K.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, s.offset);
    }
    this.staticBuffer._updateID++;
  }
  destroy() {
    this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy();
  }
}
var uP = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`, hP = `attribute vec2 aVertexPosition;
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
class V0 extends du {
  constructor(e) {
    super(e), this.shader = null, this.properties = null, this.tempMatrix = new ye(), this.properties = [{ attributeName: "aVertexPosition", size: 2, uploadFunction: this.uploadVertices, offset: 0 }, { attributeName: "aPositionCoord", size: 2, uploadFunction: this.uploadPosition, offset: 0 }, { attributeName: "aRotation", size: 1, uploadFunction: this.uploadRotation, offset: 0 }, { attributeName: "aTextureCoord", size: 2, uploadFunction: this.uploadUvs, offset: 0 }, { attributeName: "aColor", size: 1, type: K.UNSIGNED_BYTE, uploadFunction: this.uploadTint, offset: 0 }], this.shader = dr.from(hP, uP, {}), this.state = pr.for2d();
  }
  render(e) {
    const t = e.children, n = e._maxSize, i = e._batchSize, s = this.renderer;
    let o = t.length;
    if (o === 0) return;
    o > n && !e.autoResize && (o = n);
    let a = e._buffers;
    a || (a = e._buffers = this.generateBuffers(e));
    const l = t[0]._texture.baseTexture, u = l.alphaMode > 0;
    this.state.blendMode = $_(e.blendMode, u), s.state.set(this.state);
    const h = s.gl, c = e.worldTransform.copyTo(this.tempMatrix);
    c.prepend(s.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = c.toArray(true), this.shader.uniforms.uColor = me.shared.setValue(e.tintRgb).premultiply(e.worldAlpha, u).toArray(this.shader.uniforms.uColor), this.shader.uniforms.uSampler = l, this.renderer.shader.bind(this.shader);
    let d = false;
    for (let f = 0, p = 0; f < o; f += i, p += 1) {
      let v = o - f;
      v > i && (v = i), p >= a.length && a.push(this._generateOneMoreBuffer(e));
      const _ = a[p];
      _.uploadDynamic(t, f, v);
      const g = e._bufferUpdateIDs[p] || 0;
      d = d || _._updateID < g, d && (_._updateID = e._updateID, _.uploadStatic(t, f, v)), s.geometry.bind(_.geometry), h.drawElements(h.TRIANGLES, v * 6, h.UNSIGNED_SHORT, 0);
    }
  }
  generateBuffers(e) {
    const t = [], n = e._maxSize, i = e._batchSize, s = e._properties;
    for (let o = 0; o < n; o += i) t.push(new kg(this.properties, s, i));
    return t;
  }
  _generateOneMoreBuffer(e) {
    const t = e._batchSize, n = e._properties;
    return new kg(this.properties, n, t);
  }
  uploadVertices(e, t, n, i, s, o) {
    let a = 0, l = 0, u = 0, h = 0;
    for (let c = 0; c < n; ++c) {
      const d = e[t + c], f = d._texture, p = d.scale.x, v = d.scale.y, _ = f.trim, g = f.orig;
      _ ? (l = _.x - d.anchor.x * g.width, a = l + _.width, h = _.y - d.anchor.y * g.height, u = h + _.height) : (a = g.width * (1 - d.anchor.x), l = g.width * -d.anchor.x, u = g.height * (1 - d.anchor.y), h = g.height * -d.anchor.y), i[o] = l * p, i[o + 1] = h * v, i[o + s] = a * p, i[o + s + 1] = h * v, i[o + s * 2] = a * p, i[o + s * 2 + 1] = u * v, i[o + s * 3] = l * p, i[o + s * 3 + 1] = u * v, o += s * 4;
    }
  }
  uploadPosition(e, t, n, i, s, o) {
    for (let a = 0; a < n; a++) {
      const l = e[t + a].position;
      i[o] = l.x, i[o + 1] = l.y, i[o + s] = l.x, i[o + s + 1] = l.y, i[o + s * 2] = l.x, i[o + s * 2 + 1] = l.y, i[o + s * 3] = l.x, i[o + s * 3 + 1] = l.y, o += s * 4;
    }
  }
  uploadRotation(e, t, n, i, s, o) {
    for (let a = 0; a < n; a++) {
      const l = e[t + a].rotation;
      i[o] = l, i[o + s] = l, i[o + s * 2] = l, i[o + s * 3] = l, o += s * 4;
    }
  }
  uploadUvs(e, t, n, i, s, o) {
    for (let a = 0; a < n; ++a) {
      const l = e[t + a]._texture._uvs;
      l ? (i[o] = l.x0, i[o + 1] = l.y0, i[o + s] = l.x1, i[o + s + 1] = l.y1, i[o + s * 2] = l.x2, i[o + s * 2 + 1] = l.y2, i[o + s * 3] = l.x3, i[o + s * 3 + 1] = l.y3, o += s * 4) : (i[o] = 0, i[o + 1] = 0, i[o + s] = 0, i[o + s + 1] = 0, i[o + s * 2] = 0, i[o + s * 2 + 1] = 0, i[o + s * 3] = 0, i[o + s * 3 + 1] = 0, o += s * 4);
    }
  }
  uploadTint(e, t, n, i, s, o) {
    for (let a = 0; a < n; ++a) {
      const l = e[t + a], u = me.shared.setValue(l._tintRGB).toPremultiplied(l.alpha, l.texture.baseTexture.alphaMode > 0);
      i[o] = u, i[o + s] = u, i[o + s * 2] = u, i[o + s * 3] = u, o += s * 4;
    }
  }
  destroy() {
    super.destroy(), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null;
  }
}
V0.extension = { name: "particle", type: L.RendererPlugin };
X.add(V0);
var mu = ((r5) => (r5[r5.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", r5[r5.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL", r5))(mu || {});
const va = { willReadFrequently: true }, tr = class Y {
  static get experimentalLetterSpacingSupported() {
    let e = Y._experimentalLetterSpacingSupported;
    if (e !== void 0) {
      const t = z.ADAPTER.getCanvasRenderingContext2D().prototype;
      e = Y._experimentalLetterSpacingSupported = "letterSpacing" in t || "textLetterSpacing" in t;
    }
    return e;
  }
  constructor(e, t, n, i, s, o, a, l, u) {
    this.text = e, this.style = t, this.width = n, this.height = i, this.lines = s, this.lineWidths = o, this.lineHeight = a, this.maxLineWidth = l, this.fontProperties = u;
  }
  static measureText(e, t, n, i = Y._canvas) {
    n = n ?? t.wordWrap;
    const s = t.toFontString(), o = Y.measureFont(s);
    o.fontSize === 0 && (o.fontSize = t.fontSize, o.ascent = t.fontSize);
    const a = i.getContext("2d", va);
    a.font = s;
    const l = (n ? Y.wordWrap(e, t, i) : e).split(/(?:\r\n|\r|\n)/), u = new Array(l.length);
    let h = 0;
    for (let p = 0; p < l.length; p++) {
      const v = Y._measureText(l[p], t.letterSpacing, a);
      u[p] = v, h = Math.max(h, v);
    }
    let c = h + t.strokeThickness;
    t.dropShadow && (c += t.dropShadowDistance);
    const d = t.lineHeight || o.fontSize + t.strokeThickness;
    let f = Math.max(d, o.fontSize + t.strokeThickness * 2) + t.leading + (l.length - 1) * (d + t.leading);
    return t.dropShadow && (f += t.dropShadowDistance), new Y(e, t, c, f, l, u, d + t.leading, h, o);
  }
  static _measureText(e, t, n) {
    let i = false;
    Y.experimentalLetterSpacingSupported && (Y.experimentalLetterSpacing ? (n.letterSpacing = `${t}px`, n.textLetterSpacing = `${t}px`, i = true) : (n.letterSpacing = "0px", n.textLetterSpacing = "0px"));
    let s = n.measureText(e).width;
    return s > 0 && (i ? s -= t : s += (Y.graphemeSegmenter(e).length - 1) * t), s;
  }
  static wordWrap(e, t, n = Y._canvas) {
    const i = n.getContext("2d", va);
    let s = 0, o = "", a = "";
    const l = /* @__PURE__ */ Object.create(null), { letterSpacing: u, whiteSpace: h } = t, c = Y.collapseSpaces(h), d = Y.collapseNewlines(h);
    let f = !c;
    const p = t.wordWrapWidth + u, v = Y.tokenize(e);
    for (let _ = 0; _ < v.length; _++) {
      let g = v[_];
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
      const y = Y.getFromCache(g, u, l, i);
      if (y > p) if (o !== "" && (a += Y.addLine(o), o = "", s = 0), Y.canBreakWords(g, t.breakWords)) {
        const m = Y.wordWrapSplit(g);
        for (let x = 0; x < m.length; x++) {
          let w = m[x], S = w, T = 1;
          for (; m[x + T]; ) {
            const I = m[x + T];
            if (!Y.canBreakChars(S, I, g, x, t.breakWords)) w += I;
            else break;
            S = I, T++;
          }
          x += T - 1;
          const E = Y.getFromCache(w, u, l, i);
          E + s > p && (a += Y.addLine(o), f = false, o = "", s = 0), o += w, s += E;
        }
      } else {
        o.length > 0 && (a += Y.addLine(o), o = "", s = 0);
        const m = _ === v.length - 1;
        a += Y.addLine(g, !m), f = false, o = "", s = 0;
      }
      else y + s > p && (f = false, a += Y.addLine(o), o = "", s = 0), (o.length > 0 || !Y.isBreakingSpace(g) || f) && (o += g, s += y);
    }
    return a += Y.addLine(o, false), a;
  }
  static addLine(e, t = true) {
    return e = Y.trimRight(e), e = t ? `${e}
` : e, e;
  }
  static getFromCache(e, t, n, i) {
    let s = n[e];
    return typeof s != "number" && (s = Y._measureText(e, t, i) + t, n[e] = s), s;
  }
  static collapseSpaces(e) {
    return e === "normal" || e === "pre-line";
  }
  static collapseNewlines(e) {
    return e === "normal";
  }
  static trimRight(e) {
    if (typeof e != "string") return "";
    for (let t = e.length - 1; t >= 0; t--) {
      const n = e[t];
      if (!Y.isBreakingSpace(n)) break;
      e = e.slice(0, -1);
    }
    return e;
  }
  static isNewline(e) {
    return typeof e != "string" ? false : Y._newlines.includes(e.charCodeAt(0));
  }
  static isBreakingSpace(e, t) {
    return typeof e != "string" ? false : Y._breakingSpaces.includes(e.charCodeAt(0));
  }
  static tokenize(e) {
    const t = [];
    let n = "";
    if (typeof e != "string") return t;
    for (let i = 0; i < e.length; i++) {
      const s = e[i], o = e[i + 1];
      if (Y.isBreakingSpace(s, o) || Y.isNewline(s)) {
        n !== "" && (t.push(n), n = ""), t.push(s);
        continue;
      }
      n += s;
    }
    return n !== "" && t.push(n), t;
  }
  static canBreakWords(e, t) {
    return t;
  }
  static canBreakChars(e, t, n, i, s) {
    return true;
  }
  static wordWrapSplit(e) {
    return Y.graphemeSegmenter(e);
  }
  static measureFont(e) {
    if (Y._fonts[e]) return Y._fonts[e];
    const t = { ascent: 0, descent: 0, fontSize: 0 }, n = Y._canvas, i = Y._context;
    i.font = e;
    const s = Y.METRICS_STRING + Y.BASELINE_SYMBOL, o = Math.ceil(i.measureText(s).width);
    let a = Math.ceil(i.measureText(Y.BASELINE_SYMBOL).width);
    const l = Math.ceil(Y.HEIGHT_MULTIPLIER * a);
    if (a = a * Y.BASELINE_MULTIPLIER | 0, o === 0 || l === 0) return Y._fonts[e] = t, t;
    n.width = o, n.height = l, i.fillStyle = "#f00", i.fillRect(0, 0, o, l), i.font = e, i.textBaseline = "alphabetic", i.fillStyle = "#000", i.fillText(s, 0, a);
    const u = i.getImageData(0, 0, o, l).data, h = u.length, c = o * 4;
    let d = 0, f = 0, p = false;
    for (d = 0; d < a; ++d) {
      for (let v = 0; v < c; v += 4) if (u[f + v] !== 255) {
        p = true;
        break;
      }
      if (!p) f += c;
      else break;
    }
    for (t.ascent = a - d, f = h - c, p = false, d = l; d > a; --d) {
      for (let v = 0; v < c; v += 4) if (u[f + v] !== 255) {
        p = true;
        break;
      }
      if (!p) f -= c;
      else break;
    }
    return t.descent = d - a, t.fontSize = t.ascent + t.descent, Y._fonts[e] = t, t;
  }
  static clearMetrics(e = "") {
    e ? delete Y._fonts[e] : Y._fonts = {};
  }
  static get _canvas() {
    var _a2;
    if (!Y.__canvas) {
      let e;
      try {
        const t = new OffscreenCanvas(0, 0);
        if ((_a2 = t.getContext("2d", va)) == null ? void 0 : _a2.measureText) return Y.__canvas = t, t;
        e = z.ADAPTER.createCanvas();
      } catch {
        e = z.ADAPTER.createCanvas();
      }
      e.width = e.height = 10, Y.__canvas = e;
    }
    return Y.__canvas;
  }
  static get _context() {
    return Y.__context || (Y.__context = Y._canvas.getContext("2d", va)), Y.__context;
  }
};
tr.METRICS_STRING = "|\xC9q\xC5", tr.BASELINE_SYMBOL = "M", tr.BASELINE_MULTIPLIER = 1.4, tr.HEIGHT_MULTIPLIER = 2, tr.graphemeSegmenter = (() => {
  if (typeof (Intl == null ? void 0 : Intl.Segmenter) == "function") {
    const r5 = new Intl.Segmenter();
    return (e) => [...r5.segment(e)].map((t) => t.segment);
  }
  return (r5) => [...r5];
})(), tr.experimentalLetterSpacing = false, tr._fonts = {}, tr._newlines = [10, 13], tr._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
let Hr = tr;
const cP = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"], W0 = class Ps {
  constructor(e) {
    this.styleID = 0, this.reset(), Mh(this, e, e);
  }
  clone() {
    const e = {};
    return Mh(e, this, Ps.defaultStyle), new Ps(e);
  }
  reset() {
    Mh(this, Ps.defaultStyle, Ps.defaultStyle);
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
    const t = Rh(e);
    this._dropShadowColor !== t && (this._dropShadowColor = t, this.styleID++);
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
    const t = Rh(e);
    this._fill !== t && (this._fill = t, this.styleID++);
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
    dP(this._fillGradientStops, e) || (this._fillGradientStops = e, this.styleID++);
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
    const t = Rh(e);
    this._stroke !== t && (this._stroke = t, this.styleID++);
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
    let t = this.fontFamily;
    Array.isArray(this.fontFamily) || (t = this.fontFamily.split(","));
    for (let n = t.length - 1; n >= 0; n--) {
      let i = t[n].trim();
      !/([\"\'])[^\'\"]+\1/.test(i) && !cP.includes(i) && (i = `"${i}"`), t[n] = i;
    }
    return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${e} ${t.join(",")}`;
  }
};
W0.defaultStyle = { align: "left", breakWords: false, dropShadow: false, dropShadowAlpha: 1, dropShadowAngle: Math.PI / 6, dropShadowBlur: 0, dropShadowColor: "black", dropShadowDistance: 5, fill: "black", fillGradientType: mu.LINEAR_VERTICAL, fillGradientStops: [], fontFamily: "Arial", fontSize: 26, fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", leading: 0, letterSpacing: 0, lineHeight: 0, lineJoin: "miter", miterLimit: 10, padding: 0, stroke: "black", strokeThickness: 0, textBaseline: "alphabetic", trim: false, whiteSpace: "pre", wordWrap: false, wordWrapWidth: 100 };
let hn = W0;
function Rh(r5) {
  const e = me.shared, t = (n) => {
    const i = e.setValue(n);
    return i.alpha === 1 ? i.toHex() : i.toRgbaString();
  };
  return Array.isArray(r5) ? r5.map(t) : t(r5);
}
function dP(r5, e) {
  if (!Array.isArray(r5) || !Array.isArray(e) || r5.length !== e.length) return false;
  for (let t = 0; t < r5.length; ++t) if (r5[t] !== e[t]) return false;
  return true;
}
function Mh(r5, e, t) {
  for (const n in t) Array.isArray(e[n]) ? r5[n] = e[n].slice() : r5[n] = e[n];
}
const fP = { texture: true, children: false, baseTexture: true }, X0 = class _d extends ts {
  constructor(e, t, n) {
    let i = false;
    n || (n = z.ADAPTER.createCanvas(), i = true), n.width = 3, n.height = 3;
    const s = W.from(n);
    s.orig = new te(), s.trim = new te(), super(s), this._ownCanvas = i, this.canvas = n, this.context = n.getContext("2d", { willReadFrequently: true }), this._resolution = _d.defaultResolution ?? z.RESOLUTION, this._autoResolution = _d.defaultAutoResolution, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = e, this.style = t, this.localStyleID = -1;
  }
  static get experimentalLetterSpacing() {
    return Hr.experimentalLetterSpacing;
  }
  static set experimentalLetterSpacing(e) {
    ie("7.1.0", "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"), Hr.experimentalLetterSpacing = e;
  }
  updateText(e) {
    const t = this._style;
    if (this.localStyleID !== t.styleID && (this.dirty = true, this.localStyleID = t.styleID), !this.dirty && e) return;
    this._font = this._style.toFontString();
    const n = this.context, i = Hr.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas), s = i.width, o = i.height, a = i.lines, l = i.lineHeight, u = i.lineWidths, h = i.maxLineWidth, c = i.fontProperties;
    this.canvas.width = Math.ceil(Math.ceil(Math.max(1, s) + t.padding * 2) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, o) + t.padding * 2) * this._resolution), n.scale(this._resolution, this._resolution), n.clearRect(0, 0, this.canvas.width, this.canvas.height), n.font = this._font, n.lineWidth = t.strokeThickness, n.textBaseline = t.textBaseline, n.lineJoin = t.lineJoin, n.miterLimit = t.miterLimit;
    let d, f;
    const p = t.dropShadow ? 2 : 1;
    for (let v = 0; v < p; ++v) {
      const _ = t.dropShadow && v === 0, g = _ ? Math.ceil(Math.max(1, o) + t.padding * 2) : 0, y = g * this._resolution;
      if (_) {
        n.fillStyle = "black", n.strokeStyle = "black";
        const x = t.dropShadowColor, w = t.dropShadowBlur * this._resolution, S = t.dropShadowDistance * this._resolution;
        n.shadowColor = me.shared.setValue(x).setAlpha(t.dropShadowAlpha).toRgbaString(), n.shadowBlur = w, n.shadowOffsetX = Math.cos(t.dropShadowAngle) * S, n.shadowOffsetY = Math.sin(t.dropShadowAngle) * S + y;
      } else n.fillStyle = this._generateFillStyle(t, a, i), n.strokeStyle = t.stroke, n.shadowColor = "black", n.shadowBlur = 0, n.shadowOffsetX = 0, n.shadowOffsetY = 0;
      let m = (l - c.fontSize) / 2;
      l - c.fontSize < 0 && (m = 0);
      for (let x = 0; x < a.length; x++) d = t.strokeThickness / 2, f = t.strokeThickness / 2 + x * l + c.ascent + m, t.align === "right" ? d += h - u[x] : t.align === "center" && (d += (h - u[x]) / 2), t.stroke && t.strokeThickness && this.drawLetterSpacing(a[x], d + t.padding, f + t.padding - g, true), t.fill && this.drawLetterSpacing(a[x], d + t.padding, f + t.padding - g);
    }
    this.updateTexture();
  }
  drawLetterSpacing(e, t, n, i = false) {
    const s = this._style.letterSpacing;
    let o = false;
    if (Hr.experimentalLetterSpacingSupported && (Hr.experimentalLetterSpacing ? (this.context.letterSpacing = `${s}px`, this.context.textLetterSpacing = `${s}px`, o = true) : (this.context.letterSpacing = "0px", this.context.textLetterSpacing = "0px")), s === 0 || o) {
      i ? this.context.strokeText(e, t, n) : this.context.fillText(e, t, n);
      return;
    }
    let a = t;
    const l = Hr.graphemeSegmenter(e);
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
      const o = Db(e);
      o.data && (e.width = o.width, e.height = o.height, this.context.putImageData(o.data, 0, 0));
    }
    const t = this._texture, n = this._style, i = n.trim ? 0 : n.padding, s = t.baseTexture;
    t.trim.width = t._frame.width = e.width / this._resolution, t.trim.height = t._frame.height = e.height / this._resolution, t.trim.x = -i, t.trim.y = -i, t.orig.width = t._frame.width - i * 2, t.orig.height = t._frame.height - i * 2, this._onTextureUpdate(), s.setRealSize(e.width, e.height, this._resolution), t.updateUvs(), this.dirty = false;
  }
  _render(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = true), this.updateText(true), super._render(e);
  }
  updateTransform() {
    this.updateText(true), super.updateTransform();
  }
  getBounds(e, t) {
    return this.updateText(true), this._textureID === -1 && (e = false), super.getBounds(e, t);
  }
  getLocalBounds(e) {
    return this.updateText(true), super.getLocalBounds.call(this, e);
  }
  _calculateBounds() {
    this.calculateVertices(), this._bounds.addQuad(this.vertexData);
  }
  _generateFillStyle(e, t, n) {
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
    if (h.unshift(i[0]), c.unshift(0), h.push(i[i.length - 1]), c.push(1), e.fillGradientType === mu.LINEAR_VERTICAL) {
      s = this.context.createLinearGradient(l / 2, a, l / 2, u + a);
      const d = n.fontProperties.fontSize + e.strokeThickness;
      for (let f = 0; f < t.length; f++) {
        const p = n.lineHeight * (f - 1) + d, v = n.lineHeight * f;
        let _ = v;
        f > 0 && p > v && (_ = (v + p) / 2);
        const g = v + d, y = n.lineHeight * (f + 1);
        let m = g;
        f + 1 < t.length && y < g && (m = (g + y) / 2);
        const x = (m - _) / u;
        for (let w = 0; w < h.length; w++) {
          let S = 0;
          typeof c[w] == "number" ? S = c[w] : S = w / h.length;
          let T = Math.min(1, Math.max(0, _ / u + S * x));
          T = Number(T.toFixed(5)), s.addColorStop(T, h[w]);
        }
      }
    } else {
      s = this.context.createLinearGradient(a, u / 2, l + a, u / 2);
      const d = h.length + 1;
      let f = 1;
      for (let p = 0; p < h.length; p++) {
        let v;
        typeof c[p] == "number" ? v = c[p] : v = f / d, s.addColorStop(v, h[p]), f++;
      }
    }
    return s;
  }
  destroy(e) {
    typeof e == "boolean" && (e = { children: e }), e = Object.assign({}, fP, e), super.destroy(e), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null;
  }
  get width() {
    return this.updateText(true), Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(e) {
    this.updateText(true);
    const t = Kr(this.scale.x) || 1;
    this.scale.x = t * e / this._texture.orig.width, this._width = e;
  }
  get height() {
    return this.updateText(true), Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(e) {
    this.updateText(true);
    const t = Kr(this.scale.y) || 1;
    this.scale.y = t * e / this._texture.orig.height, this._height = e;
  }
  get style() {
    return this._style;
  }
  set style(e) {
    e = e || {}, e instanceof hn ? this._style = e : this._style = new hn(e), this.localStyleID = -1, this.dirty = true;
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
X0.defaultAutoResolution = true;
let Y0 = X0;
class pP {
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
function mP(r5, e) {
  var _a2;
  let t = false;
  if ((_a2 = r5 == null ? void 0 : r5._textures) == null ? void 0 : _a2.length) {
    for (let n = 0; n < r5._textures.length; n++) if (r5._textures[n] instanceof W) {
      const i = r5._textures[n].baseTexture;
      e.includes(i) || (e.push(i), t = true);
    }
  }
  return t;
}
function gP(r5, e) {
  if (r5.baseTexture instanceof ee) {
    const t = r5.baseTexture;
    return e.includes(t) || e.push(t), true;
  }
  return false;
}
function yP(r5, e) {
  if (r5._texture && r5._texture instanceof W) {
    const t = r5._texture.baseTexture;
    return e.includes(t) || e.push(t), true;
  }
  return false;
}
function vP(r5, e) {
  return e instanceof Y0 ? (e.updateText(true), true) : false;
}
function _P(r5, e) {
  if (e instanceof hn) {
    const t = e.toFontString();
    return Hr.measureFont(t), true;
  }
  return false;
}
function xP(r5, e) {
  if (r5 instanceof Y0) {
    e.includes(r5.style) || e.push(r5.style), e.includes(r5) || e.push(r5);
    const t = r5._texture.baseTexture;
    return e.includes(t) || e.push(t), true;
  }
  return false;
}
function wP(r5, e) {
  return r5 instanceof hn ? (e.includes(r5) || e.push(r5), true) : false;
}
const K0 = class q0 {
  constructor(e) {
    this.limiter = new pP(q0.uploadsPerFrame), this.renderer = e, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = false, this.delayedTick = () => {
      this.queue && this.prepareItems();
    }, this.registerFindHook(xP), this.registerFindHook(wP), this.registerFindHook(mP), this.registerFindHook(gP), this.registerFindHook(yP), this.registerUploadHook(vP), this.registerUploadHook(_P);
  }
  upload(e) {
    return new Promise((t) => {
      e && this.add(e), this.queue.length ? (this.completes.push(t), this.ticking || (this.ticking = true, yt.system.addOnce(this.tick, this, Xn.UTILITY))) : t();
    });
  }
  tick() {
    setTimeout(this.delayedTick, 0);
  }
  prepareItems() {
    for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
      const e = this.queue[0];
      let t = false;
      if (e && !e._destroyed) {
        for (let n = 0, i = this.uploadHooks.length; n < i; n++) if (this.uploadHooks[n](this.uploadHookHelper, e)) {
          this.queue.shift(), t = true;
          break;
        }
      }
      t || this.queue.shift();
    }
    if (this.queue.length) yt.system.addOnce(this.tick, this, Xn.UTILITY);
    else {
      this.ticking = false;
      const e = this.completes.slice(0);
      this.completes.length = 0;
      for (let t = 0, n = e.length; t < n; t++) e[t]();
    }
  }
  registerFindHook(e) {
    return e && this.addHooks.push(e), this;
  }
  registerUploadHook(e) {
    return e && this.uploadHooks.push(e), this;
  }
  add(e) {
    for (let t = 0, n = this.addHooks.length; t < n && !this.addHooks[t](e, this.queue); t++) ;
    if (e instanceof Je) for (let t = e.children.length - 1; t >= 0; t--) this.add(e.children[t]);
    return this;
  }
  destroy() {
    this.ticking && yt.system.remove(this.tick, this), this.ticking = false, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null;
  }
};
K0.uploadsPerFrame = 4;
let xd = K0;
Object.defineProperties(z, { UPLOADS_PER_FRAME: { get() {
  return xd.uploadsPerFrame;
}, set(r5) {
  ie("7.1.0", "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"), xd.uploadsPerFrame = r5;
} } });
function Z0(r5, e) {
  return e instanceof ee ? (e._glTextures[r5.CONTEXT_UID] || r5.texture.bind(e), true) : false;
}
function EP(r5, e) {
  if (!(e instanceof Pn)) return false;
  const { geometry: t } = e;
  e.finishPoly(), t.updateBatches();
  const { batches: n } = t;
  for (let i = 0; i < n.length; i++) {
    const { texture: s } = n[i].style;
    s && Z0(r5, s.baseTexture);
  }
  return t.batchable || r5.geometry.bind(t, e._resolveDirectShader(r5)), true;
}
function TP(r5, e) {
  return r5 instanceof Pn ? (e.push(r5), true) : false;
}
class Q0 extends xd {
  constructor(e) {
    super(e), this.uploadHookHelper = this.renderer, this.registerFindHook(TP), this.registerUploadHook(Z0), this.registerUploadHook(EP);
  }
}
Q0.extension = { name: "prepare", type: L.RendererSystem };
X.add(Q0);
var SP = `#version 300 es
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
`, bP = `#version 300 es
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
`, AP = `#version 100
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
`, Dg = `#version 100
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
`, CP = `#version 100
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
const _a = new ye();
class J0 extends du {
  constructor(e) {
    super(e), e.runners.contextChange.add(this), this.quad = new r0(), this.state = pr.for2d();
  }
  contextChange() {
    const e = this.renderer, t = { globals: e.globalUniforms };
    this.simpleShader = dr.from(Dg, CP, t), this.shader = e.context.webGLVersion > 1 ? dr.from(bP, SP, t) : dr.from(Dg, AP, t);
  }
  render(e) {
    const t = this.renderer, n = this.quad;
    let i = n.vertices;
    i[0] = i[6] = e._width * -e.anchor.x, i[1] = i[3] = e._height * -e.anchor.y, i[2] = i[4] = e._width * (1 - e.anchor.x), i[5] = i[7] = e._height * (1 - e.anchor.y);
    const s = e.uvRespectAnchor ? e.anchor.x : 0, o = e.uvRespectAnchor ? e.anchor.y : 0;
    i = n.uvs, i[0] = i[6] = -s, i[1] = i[3] = -o, i[2] = i[4] = 1 - s, i[5] = i[7] = 1 - o, n.invalidate();
    const a = e._texture, l = a.baseTexture, u = l.alphaMode > 0, h = e.tileTransform.localTransform, c = e.uvMatrix;
    let d = l.isPowerOfTwo && a.frame.width === l.width && a.frame.height === l.height;
    d && (l._glTextures[t.CONTEXT_UID] ? d = l.wrapMode !== on.CLAMP : l.wrapMode === on.CLAMP && (l.wrapMode = on.REPEAT));
    const f = d ? this.simpleShader : this.shader, p = a.width, v = a.height, _ = e._width, g = e._height;
    _a.set(h.a * p / _, h.b * p / g, h.c * v / _, h.d * v / g, h.tx / _, h.ty / g), _a.invert(), d ? _a.prepend(c.mapCoord) : (f.uniforms.uMapCoord = c.mapCoord.toArray(true), f.uniforms.uClampFrame = c.uClampFrame, f.uniforms.uClampOffset = c.uClampOffset), f.uniforms.uTransform = _a.toArray(true), f.uniforms.uColor = me.shared.setValue(e.tint).premultiply(e.worldAlpha, u).toArray(f.uniforms.uColor), f.uniforms.translationMatrix = e.transform.worldTransform.toArray(true), f.uniforms.uSampler = a, t.shader.bind(f), t.geometry.bind(n), this.state.blendMode = $_(e.blendMode, u), t.state.set(this.state), t.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
  }
}
J0.extension = { name: "tilingSprite", type: L.RendererPlugin };
X.add(J0);
const ex = class Rs {
  constructor(e, t, n) {
    this.linkedSheets = [], (e instanceof ee || e instanceof W) && (e = { texture: e, data: t, resolutionFilename: n });
    const { texture: i, data: s, resolutionFilename: o = null, cachePrefix: a = "" } = e;
    this.cachePrefix = a, this._texture = i instanceof W ? i : null, this.baseTexture = i instanceof ee ? i : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = s;
    const l = this.baseTexture.resource;
    this.resolution = this._updateResolution(o || (l ? l.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null;
  }
  _updateResolution(e = null) {
    const { scale: t } = this.data.meta;
    let n = kr(e, null);
    return n === null && (n = typeof t == "number" ? t : parseFloat(t ?? "1")), n !== 1 && this.baseTexture.setResolution(n), n;
  }
  parse() {
    return new Promise((e) => {
      this._callback = e, this._batchIndex = 0, this._frameKeys.length <= Rs.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch();
    });
  }
  _processFrames(e) {
    let t = e;
    const n = Rs.BATCH_SIZE;
    for (; t - e < n && t < this._frameKeys.length; ) {
      const i = this._frameKeys[t], s = this._frames[i], o = s.frame;
      if (o) {
        let a = null, l = null;
        const u = s.trimmed !== false && s.sourceSize ? s.sourceSize : s.frame, h = new te(0, 0, Math.floor(u.w) / this.resolution, Math.floor(u.h) / this.resolution);
        s.rotated ? a = new te(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.h) / this.resolution, Math.floor(o.w) / this.resolution) : a = new te(Math.floor(o.x) / this.resolution, Math.floor(o.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution), s.trimmed !== false && s.spriteSourceSize && (l = new te(Math.floor(s.spriteSourceSize.x) / this.resolution, Math.floor(s.spriteSourceSize.y) / this.resolution, Math.floor(o.w) / this.resolution, Math.floor(o.h) / this.resolution)), this.textures[i] = new W(this.baseTexture, a, h, l, s.rotated ? 2 : 0, s.anchor, s.borders), W.addToCache(this.textures[i], this.cachePrefix + i.toString());
      }
      t++;
    }
  }
  _processAnimations() {
    const e = this.data.animations || {};
    for (const t in e) {
      this.animations[t] = [];
      for (let n = 0; n < e[t].length; n++) {
        const i = e[t][n];
        this.animations[t].push(this.textures[i]);
      }
    }
  }
  _parseComplete() {
    const e = this._callback;
    this._callback = null, this._batchIndex = 0, e.call(this, this.textures);
  }
  _nextBatch() {
    this._processFrames(this._batchIndex * Rs.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
      this._batchIndex * Rs.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete());
    }, 0);
  }
  destroy(e = false) {
    var _a2;
    for (const t in this.textures) this.textures[t].destroy();
    this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, e && ((_a2 = this._texture) == null ? void 0 : _a2.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null, this.linkedSheets = [];
  }
};
ex.BATCH_SIZE = 1e3;
let Fg = ex;
const IP = ["jpg", "png", "jpeg", "avif", "webp", "s3tc", "s3tc_sRGB", "etc", "etc1", "pvrtc", "atc", "astc", "bptc"];
function tx(r5, e, t) {
  const n = {};
  if (r5.forEach((i) => {
    n[i] = e;
  }), Object.keys(e.textures).forEach((i) => {
    n[`${e.cachePrefix}${i}`] = e.textures[i];
  }), !t) {
    const i = je.dirname(r5[0]);
    e.linkedSheets.forEach((s, o) => {
      Object.assign(n, tx([`${i}/${e.data.meta.related_multi_packs[o]}`], s, true));
    });
  }
  return n;
}
const PP = { extension: L.Asset, cache: { test: (r5) => r5 instanceof Fg, getCacheableAssets: (r5, e) => tx(r5, e, false) }, resolver: { test: (r5) => {
  const e = r5.split("?")[0].split("."), t = e.pop(), n = e.pop();
  return t === "json" && IP.includes(n);
}, parse: (r5) => {
  var _a2;
  const e = r5.split(".");
  return { resolution: parseFloat(((_a2 = z.RETINA_PREFIX.exec(r5)) == null ? void 0 : _a2[1]) ?? "1"), format: e[e.length - 2], src: r5 };
} }, loader: { name: "spritesheetLoader", extension: { type: L.LoadParser, priority: Wt.Normal }, async testParse(r5, e) {
  return je.extname(e.src).toLowerCase() === ".json" && !!r5.frames;
}, async parse(r5, e, t) {
  var _a2, _b2;
  const { texture: n, imageFilename: i, cachePrefix: s } = (e == null ? void 0 : e.data) ?? {};
  let o = je.dirname(e.src);
  o && o.lastIndexOf("/") !== o.length - 1 && (o += "/");
  let a;
  if (n && n.baseTexture) a = n;
  else {
    const h = md(o + (i ?? r5.meta.image), e.src);
    a = (await t.load([h]))[h];
  }
  const l = new Fg({ texture: a.baseTexture, data: r5, resolutionFilename: e.src, cachePrefix: s });
  await l.parse();
  const u = (_a2 = r5 == null ? void 0 : r5.meta) == null ? void 0 : _a2.related_multi_packs;
  if (Array.isArray(u)) {
    const h = [];
    for (const d of u) {
      if (typeof d != "string") continue;
      let f = o + d;
      ((_b2 = e.data) == null ? void 0 : _b2.ignoreMultiPack) || (f = md(f, e.src), h.push(t.load({ src: f, data: { ignoreMultiPack: true } })));
    }
    const c = await Promise.all(h);
    l.linkedSheets = c, c.forEach((d) => {
      d.linkedSheets = [l].concat(l.linkedSheets.filter((f) => f !== d));
    });
  }
  return l;
}, unload(r5) {
  r5.destroy(true);
} } };
X.add(PP);
class Ol {
  constructor() {
    this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [], this.distanceField = [];
  }
}
class Wa {
  static test(e) {
    return typeof e == "string" && e.startsWith("info face=");
  }
  static parse(e) {
    const t = e.match(/^[a-z]+\s+.+$/gm), n = { info: [], common: [], page: [], char: [], chars: [], kerning: [], kernings: [], distanceField: [] };
    for (const s in t) {
      const o = t[s].match(/^[a-z]+/gm)[0], a = t[s].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm), l = {};
      for (const u in a) {
        const h = a[u].split("="), c = h[0], d = h[1].replace(/"/gm, ""), f = parseFloat(d), p = isNaN(f) ? d : f;
        l[c] = p;
      }
      n[o].push(l);
    }
    const i = new Ol();
    return n.info.forEach((s) => i.info.push({ face: s.face, size: parseInt(s.size, 10) })), n.common.forEach((s) => i.common.push({ lineHeight: parseInt(s.lineHeight, 10) })), n.page.forEach((s) => i.page.push({ id: parseInt(s.id, 10), file: s.file })), n.char.forEach((s) => i.char.push({ id: parseInt(s.id, 10), page: parseInt(s.page, 10), x: parseInt(s.x, 10), y: parseInt(s.y, 10), width: parseInt(s.width, 10), height: parseInt(s.height, 10), xoffset: parseInt(s.xoffset, 10), yoffset: parseInt(s.yoffset, 10), xadvance: parseInt(s.xadvance, 10) })), n.kerning.forEach((s) => i.kerning.push({ first: parseInt(s.first, 10), second: parseInt(s.second, 10), amount: parseInt(s.amount, 10) })), n.distanceField.forEach((s) => i.distanceField.push({ distanceRange: parseInt(s.distanceRange, 10), fieldType: s.fieldType })), i;
  }
}
class wd {
  static test(e) {
    const t = e;
    return typeof e != "string" && "getElementsByTagName" in e && t.getElementsByTagName("page").length && t.getElementsByTagName("info")[0].getAttribute("face") !== null;
  }
  static parse(e) {
    const t = new Ol(), n = e.getElementsByTagName("info"), i = e.getElementsByTagName("common"), s = e.getElementsByTagName("page"), o = e.getElementsByTagName("char"), a = e.getElementsByTagName("kerning"), l = e.getElementsByTagName("distanceField");
    for (let u = 0; u < n.length; u++) t.info.push({ face: n[u].getAttribute("face"), size: parseInt(n[u].getAttribute("size"), 10) });
    for (let u = 0; u < i.length; u++) t.common.push({ lineHeight: parseInt(i[u].getAttribute("lineHeight"), 10) });
    for (let u = 0; u < s.length; u++) t.page.push({ id: parseInt(s[u].getAttribute("id"), 10) || 0, file: s[u].getAttribute("file") });
    for (let u = 0; u < o.length; u++) {
      const h = o[u];
      t.char.push({ id: parseInt(h.getAttribute("id"), 10), page: parseInt(h.getAttribute("page"), 10) || 0, x: parseInt(h.getAttribute("x"), 10), y: parseInt(h.getAttribute("y"), 10), width: parseInt(h.getAttribute("width"), 10), height: parseInt(h.getAttribute("height"), 10), xoffset: parseInt(h.getAttribute("xoffset"), 10), yoffset: parseInt(h.getAttribute("yoffset"), 10), xadvance: parseInt(h.getAttribute("xadvance"), 10) });
    }
    for (let u = 0; u < a.length; u++) t.kerning.push({ first: parseInt(a[u].getAttribute("first"), 10), second: parseInt(a[u].getAttribute("second"), 10), amount: parseInt(a[u].getAttribute("amount"), 10) });
    for (let u = 0; u < l.length; u++) t.distanceField.push({ fieldType: l[u].getAttribute("fieldType"), distanceRange: parseInt(l[u].getAttribute("distanceRange"), 10) });
    return t;
  }
}
class Ed {
  static test(e) {
    return typeof e == "string" && e.includes("<font>") ? wd.test(z.ADAPTER.parseXML(e)) : false;
  }
  static parse(e) {
    return wd.parse(z.ADAPTER.parseXML(e));
  }
}
const kh = [Wa, wd, Ed];
function RP(r5) {
  for (let e = 0; e < kh.length; e++) if (kh[e].test(r5)) return kh[e];
  return null;
}
function MP(r5, e, t, n, i, s) {
  const o = t.fill;
  if (Array.isArray(o)) {
    if (o.length === 1) return o[0];
  } else return o;
  let a;
  const l = t.dropShadow ? t.dropShadowDistance : 0, u = t.padding || 0, h = r5.width / n - l - u * 2, c = r5.height / n - l - u * 2, d = o.slice(), f = t.fillGradientStops.slice();
  if (!f.length) {
    const p = d.length + 1;
    for (let v = 1; v < p; ++v) f.push(v / p);
  }
  if (d.unshift(o[0]), f.unshift(0), d.push(o[o.length - 1]), f.push(1), t.fillGradientType === mu.LINEAR_VERTICAL) {
    a = e.createLinearGradient(h / 2, u, h / 2, c + u);
    let p = 0;
    const v = (s.fontProperties.fontSize + t.strokeThickness) / c;
    for (let _ = 0; _ < i.length; _++) {
      const g = s.lineHeight * _;
      for (let y = 0; y < d.length; y++) {
        let m = 0;
        typeof f[y] == "number" ? m = f[y] : m = y / d.length;
        const x = g / c + m * v;
        let w = Math.max(p, x);
        w = Math.min(w, 1), a.addColorStop(w, d[y]), p = w;
      }
    }
  } else {
    a = e.createLinearGradient(u, c / 2, h + u, c / 2);
    const p = d.length + 1;
    let v = 1;
    for (let _ = 0; _ < d.length; _++) {
      let g;
      typeof f[_] == "number" ? g = f[_] : g = v / p, a.addColorStop(g, d[_]), v++;
    }
  }
  return a;
}
function kP(r5, e, t, n, i, s, o) {
  const a = t.text, l = t.fontProperties;
  e.translate(n, i), e.scale(s, s);
  const u = o.strokeThickness / 2, h = -(o.strokeThickness / 2);
  if (e.font = o.toFontString(), e.lineWidth = o.strokeThickness, e.textBaseline = o.textBaseline, e.lineJoin = o.lineJoin, e.miterLimit = o.miterLimit, e.fillStyle = MP(r5, e, o, s, [a], t), e.strokeStyle = o.stroke, o.dropShadow) {
    const c = o.dropShadowColor, d = o.dropShadowBlur * s, f = o.dropShadowDistance * s;
    e.shadowColor = me.shared.setValue(c).setAlpha(o.dropShadowAlpha).toRgbaString(), e.shadowBlur = d, e.shadowOffsetX = Math.cos(o.dropShadowAngle) * f, e.shadowOffsetY = Math.sin(o.dropShadowAngle) * f;
  } else e.shadowColor = "black", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0;
  o.stroke && o.strokeThickness && e.strokeText(a, u, h + t.lineHeight - l.descent), o.fill && e.fillText(a, u, h + t.lineHeight - l.descent), e.setTransform(1, 0, 0, 1, 0, 0), e.fillStyle = "rgba(0, 0, 0, 0)";
}
function Xa(r5) {
  return r5.codePointAt ? r5.codePointAt(0) : r5.charCodeAt(0);
}
function rx(r5) {
  return Array.from ? Array.from(r5) : r5.split("");
}
function DP(r5) {
  typeof r5 == "string" && (r5 = [r5]);
  const e = [];
  for (let t = 0, n = r5.length; t < n; t++) {
    const i = r5[t];
    if (Array.isArray(i)) {
      if (i.length !== 2) throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);
      const s = i[0].charCodeAt(0), o = i[1].charCodeAt(0);
      if (o < s) throw new Error("[BitmapFont]: Invalid character range.");
      for (let a = s, l = o; a <= l; a++) e.push(String.fromCharCode(a));
    } else e.push(...rx(i));
  }
  if (e.length === 0) throw new Error("[BitmapFont]: Empty set when resolving characters.");
  return e;
}
const Lr = class rr {
  constructor(e, t, n) {
    var _a2;
    const [i] = e.info, [s] = e.common, [o] = e.page, [a] = e.distanceField, l = kr(o.file), u = {};
    this._ownsTextures = n, this.font = i.face, this.size = i.size, this.lineHeight = s.lineHeight / l, this.chars = {}, this.pageTextures = u;
    for (let h = 0; h < e.page.length; h++) {
      const { id: c, file: d } = e.page[h];
      u[c] = t instanceof Array ? t[h] : t[d], (a == null ? void 0 : a.fieldType) && a.fieldType !== "none" && (u[c].baseTexture.alphaMode = ht.NO_PREMULTIPLIED_ALPHA, u[c].baseTexture.mipmap = fr.OFF);
    }
    for (let h = 0; h < e.char.length; h++) {
      const { id: c, page: d } = e.char[h];
      let { x: f, y: p, width: v, height: _, xoffset: g, yoffset: y, xadvance: m } = e.char[h];
      f /= l, p /= l, v /= l, _ /= l, g /= l, y /= l, m /= l;
      const x = new te(f + u[d].frame.x / l, p + u[d].frame.y / l, v, _);
      this.chars[c] = { xOffset: g, yOffset: y, xAdvance: m, kerning: {}, texture: new W(u[d].baseTexture, x), page: d };
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
  static install(e, t, n) {
    let i;
    if (e instanceof Ol) i = e;
    else {
      const o = RP(e);
      if (!o) throw new Error("Unrecognized data format for font.");
      i = o.parse(e);
    }
    t instanceof W && (t = [t]);
    const s = new rr(i, t, n);
    return rr.available[s.font] = s, s;
  }
  static uninstall(e) {
    const t = rr.available[e];
    if (!t) throw new Error(`No font found named '${e}'`);
    t.destroy(), delete rr.available[e];
  }
  static from(e, t, n) {
    if (!e) throw new Error("[BitmapFont] Property `name` is required.");
    const { chars: i, padding: s, resolution: o, textureWidth: a, textureHeight: l, ...u } = Object.assign({}, rr.defaultOptions, n), h = DP(i), c = t instanceof hn ? t : new hn(t), d = a, f = new Ol();
    f.info[0] = { face: c.fontFamily, size: c.fontSize }, f.common[0] = { lineHeight: c.fontSize };
    let p = 0, v = 0, _, g, y, m = 0;
    const x = [];
    for (let S = 0; S < h.length; S++) {
      _ || (_ = z.ADAPTER.createCanvas(), _.width = a, _.height = l, g = _.getContext("2d"), y = new ee(_, { resolution: o, ...u }), x.push(new W(y)), f.page.push({ id: x.length - 1, file: "" }));
      const T = h[S], E = Hr.measureText(T, c, false, _), I = E.width, P = Math.ceil(E.height), D = Math.ceil((c.fontStyle === "italic" ? 2 : 1) * I);
      if (v >= l - P * o) {
        if (v === 0) throw new Error(`[BitmapFont] textureHeight ${l}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${T}')`);
        --S, _ = null, g = null, y = null, v = 0, p = 0, m = 0;
        continue;
      }
      if (m = Math.max(P + E.fontProperties.descent, m), D * o + p >= d) {
        if (p === 0) throw new Error(`[BitmapFont] textureWidth ${a}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${T}')`);
        --S, v += m * o, v = Math.ceil(v), p = 0, m = 0;
        continue;
      }
      kP(_, g, E, p, v, o, c);
      const N = Xa(E.text);
      f.char.push({ id: N, page: x.length - 1, x: p / o, y: v / o, width: D, height: P, xoffset: 0, yoffset: 0, xadvance: I - (c.dropShadow ? c.dropShadowDistance : 0) - (c.stroke ? c.strokeThickness : 0) }), p += (D + 2 * s) * o, p = Math.ceil(p);
    }
    if (!(n == null ? void 0 : n.skipKerning)) for (let S = 0, T = h.length; S < T; S++) {
      const E = h[S];
      for (let I = 0; I < T; I++) {
        const P = h[I], D = g.measureText(E).width, N = g.measureText(P).width, A = g.measureText(E + P).width - (D + N);
        A && f.kerning.push({ first: Xa(E), second: Xa(P), amount: A });
      }
    }
    const w = new rr(f, x, true);
    return rr.available[e] !== void 0 && rr.uninstall(e), rr.available[e] = w, w;
  }
};
Lr.ALPHA = [["a", "z"], ["A", "Z"], " "], Lr.NUMERIC = [["0", "9"]], Lr.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "], Lr.ASCII = [[" ", "~"]], Lr.defaultOptions = { resolution: 1, textureWidth: 512, textureHeight: 512, padding: 4, chars: Lr.ALPHANUMERIC }, Lr.available = {};
let Ur = Lr;
var FP = `// Pixi texture info\r
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
`, NP = `// Mesh material default fragment\r
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
const Ng = [], Bg = [], Og = [], BP = class nx extends Je {
  constructor(e, t = {}) {
    super();
    const { align: n, tint: i, maxWidth: s, letterSpacing: o, fontName: a, fontSize: l } = Object.assign({}, nx.styleDefaults, t);
    if (!Ur.available[a]) throw new Error(`Missing BitmapFont "${a}"`);
    this._activePagesMeshData = [], this._textWidth = 0, this._textHeight = 0, this._align = n, this._tintColor = new me(i), this._font = void 0, this._fontName = a, this._fontSize = l, this.text = e, this._maxWidth = s, this._maxLineHeight = 0, this._letterSpacing = o, this._anchor = new Sr(() => {
      this.dirty = true;
    }, this, 0, 0), this._roundPixels = z.ROUND_PIXELS, this.dirty = true, this._resolution = z.RESOLUTION, this._autoResolution = true, this._textureCache = {};
  }
  updateText() {
    var _a2;
    const e = Ur.available[this._fontName], t = this.fontSize, n = t / e.size, i = new le(), s = [], o = [], a = [], l = this._text.replace(/(?:\r\n|\r)/g, `
`) || " ", u = rx(l), h = this._maxWidth * e.size / t, c = e.distanceFieldType === "none" ? Ng : Bg;
    let d = null, f = 0, p = 0, v = 0, _ = -1, g = 0, y = 0, m = 0, x = 0;
    for (let D = 0; D < u.length; D++) {
      const N = u[D], A = Xa(N);
      if (/(?:\s)/.test(N) && (_ = D, g = f, x++), N === "\r" || N === `
`) {
        o.push(f), a.push(-1), p = Math.max(p, f), ++v, ++y, i.x = 0, i.y += e.lineHeight, d = null, x = 0;
        continue;
      }
      const C = e.chars[A];
      if (!C) continue;
      d && C.kerning[d] && (i.x += C.kerning[d]);
      const q = Og.pop() || { texture: W.EMPTY, line: 0, charCode: 0, prevSpaces: 0, position: new le() };
      q.texture = C.texture, q.line = v, q.charCode = A, q.position.x = Math.round(i.x + C.xOffset + this._letterSpacing / 2), q.position.y = Math.round(i.y + C.yOffset), q.prevSpaces = x, s.push(q), f = q.position.x + Math.max(C.xAdvance - C.xOffset, C.texture.orig.width), i.x += C.xAdvance + this._letterSpacing, m = Math.max(m, C.yOffset + C.texture.height), d = A, _ !== -1 && h > 0 && i.x > h && (++y, Bi(s, 1 + _ - y, 1 + D - _), D = _, _ = -1, o.push(g), a.push(s.length > 0 ? s[s.length - 1].prevSpaces : 0), p = Math.max(p, g), v++, i.x = 0, i.y += e.lineHeight, d = null, x = 0);
    }
    const w = u[u.length - 1];
    w !== "\r" && w !== `
` && (/(?:\s)/.test(w) && (f = g), o.push(f), p = Math.max(p, f), a.push(-1));
    const S = [];
    for (let D = 0; D <= v; D++) {
      let N = 0;
      this._align === "right" ? N = p - o[D] : this._align === "center" ? N = (p - o[D]) / 2 : this._align === "justify" && (N = a[D] < 0 ? 0 : (p - o[D]) / a[D]), S.push(N);
    }
    const T = s.length, E = {}, I = [], P = this._activePagesMeshData;
    c.push(...P);
    for (let D = 0; D < T; D++) {
      const N = s[D].texture, A = N.baseTexture.uid;
      if (!E[A]) {
        let C = c.pop();
        if (!C) {
          const J = new oP();
          let O, M;
          e.distanceFieldType === "none" ? (O = new Mg(W.EMPTY), M = Q.NORMAL) : (O = new Mg(W.EMPTY, { program: br.from(NP, FP), uniforms: { uFWidth: 0 } }), M = Q.NORMAL_NPM);
          const H = new Rg(J, O);
          H.blendMode = M, C = { index: 0, indexCount: 0, vertexCount: 0, uvsCount: 0, total: 0, mesh: H, vertices: null, uvs: null, indices: null };
        }
        C.index = 0, C.indexCount = 0, C.vertexCount = 0, C.uvsCount = 0, C.total = 0;
        const { _textureCache: q } = this;
        q[A] = q[A] || new W(N.baseTexture), C.mesh.texture = q[A], C.mesh.tint = this._tintColor.value, I.push(C), E[A] = C;
      }
      E[A].total++;
    }
    for (let D = 0; D < P.length; D++) I.includes(P[D]) || this.removeChild(P[D].mesh);
    for (let D = 0; D < I.length; D++) I[D].mesh.parent !== this && this.addChild(I[D].mesh);
    this._activePagesMeshData = I;
    for (const D in E) {
      const N = E[D], A = N.total;
      if (!(((_a2 = N.indices) == null ? void 0 : _a2.length) > 6 * A) || N.vertices.length < Rg.BATCHABLE_SIZE * 2) N.vertices = new Float32Array(4 * 2 * A), N.uvs = new Float32Array(4 * 2 * A), N.indices = new Uint16Array(6 * A);
      else {
        const C = N.total, q = N.vertices;
        for (let J = C * 4 * 2; J < q.length; J++) q[J] = 0;
      }
      N.mesh.size = 6 * A;
    }
    for (let D = 0; D < T; D++) {
      const N = s[D];
      let A = N.position.x + S[N.line] * (this._align === "justify" ? N.prevSpaces : 1);
      this._roundPixels && (A = Math.round(A));
      const C = A * n, q = N.position.y * n, J = N.texture, O = E[J.baseTexture.uid], M = J.frame, H = J._uvs, b = O.index++;
      O.indices[b * 6 + 0] = 0 + b * 4, O.indices[b * 6 + 1] = 1 + b * 4, O.indices[b * 6 + 2] = 2 + b * 4, O.indices[b * 6 + 3] = 0 + b * 4, O.indices[b * 6 + 4] = 2 + b * 4, O.indices[b * 6 + 5] = 3 + b * 4, O.vertices[b * 8 + 0] = C, O.vertices[b * 8 + 1] = q, O.vertices[b * 8 + 2] = C + M.width * n, O.vertices[b * 8 + 3] = q, O.vertices[b * 8 + 4] = C + M.width * n, O.vertices[b * 8 + 5] = q + M.height * n, O.vertices[b * 8 + 6] = C, O.vertices[b * 8 + 7] = q + M.height * n, O.uvs[b * 8 + 0] = H.x0, O.uvs[b * 8 + 1] = H.y0, O.uvs[b * 8 + 2] = H.x1, O.uvs[b * 8 + 3] = H.y1, O.uvs[b * 8 + 4] = H.x2, O.uvs[b * 8 + 5] = H.y2, O.uvs[b * 8 + 6] = H.x3, O.uvs[b * 8 + 7] = H.y3;
    }
    this._textWidth = p * n, this._textHeight = (i.y + e.lineHeight) * n;
    for (const D in E) {
      const N = E[D];
      if (this.anchor.x !== 0 || this.anchor.y !== 0) {
        let J = 0;
        const O = this._textWidth * this.anchor.x, M = this._textHeight * this.anchor.y;
        for (let H = 0; H < N.total; H++) N.vertices[J++] -= O, N.vertices[J++] -= M, N.vertices[J++] -= O, N.vertices[J++] -= M, N.vertices[J++] -= O, N.vertices[J++] -= M, N.vertices[J++] -= O, N.vertices[J++] -= M;
      }
      this._maxLineHeight = m * n;
      const A = N.mesh.geometry.getBuffer("aVertexPosition"), C = N.mesh.geometry.getBuffer("aTextureCoord"), q = N.mesh.geometry.getIndex();
      A.data = N.vertices, C.data = N.uvs, q.data = N.indices, A.update(), C.update(), q.update();
    }
    for (let D = 0; D < s.length; D++) Og.push(s[D]);
    this._font = e, this.dirty = false;
  }
  updateTransform() {
    this.validate(), this.containerUpdateTransform();
  }
  _render(e) {
    this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = true);
    const { distanceFieldRange: t, distanceFieldType: n, size: i } = Ur.available[this._fontName];
    if (n !== "none") {
      const { a: s, b: o, c: a, d: l } = this.worldTransform, u = Math.sqrt(s * s + o * o), h = Math.sqrt(a * a + l * l), c = (Math.abs(u) + Math.abs(h)) / 2, d = this.fontSize / i, f = e._view.resolution;
      for (const p of this._activePagesMeshData) p.mesh.shader.uniforms.uFWidth = c * t * d * f;
    }
    super._render(e);
  }
  getLocalBounds() {
    return this.validate(), super.getLocalBounds();
  }
  validate() {
    const e = Ur.available[this._fontName];
    if (!e) throw new Error(`Missing BitmapFont "${this._fontName}"`);
    this._font !== e && (this.dirty = true), this.dirty && this.updateText();
  }
  get tint() {
    return this._tintColor.value;
  }
  set tint(e) {
    if (this.tint !== e) {
      this._tintColor.setValue(e);
      for (let t = 0; t < this._activePagesMeshData.length; t++) this._activePagesMeshData[t].mesh.tint = e;
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
    if (!Ur.available[e]) throw new Error(`Missing BitmapFont "${e}"`);
    this._fontName !== e && (this._fontName = e, this.dirty = true);
  }
  get fontSize() {
    return this._fontSize ?? Ur.available[this._fontName].size;
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
    const { _textureCache: t } = this, n = Ur.available[this._fontName].distanceFieldType === "none" ? Ng : Bg;
    n.push(...this._activePagesMeshData);
    for (const i of this._activePagesMeshData) this.removeChild(i.mesh);
    this._activePagesMeshData = [], n.filter((i) => t[i.mesh.texture.baseTexture.uid]).forEach((i) => {
      i.mesh.texture = W.EMPTY;
    });
    for (const i in t) t[i].destroy(), delete t[i];
    this._font = null, this._tintColor = null, this._textureCache = null, super.destroy(e);
  }
};
BP.styleDefaults = { align: "left", tint: 16777215, maxWidth: 0, letterSpacing: 0 };
const OP = [".xml", ".fnt"], LP = { extension: { type: L.LoadParser, priority: Wt.Normal }, name: "loadBitmapFont", test(r5) {
  return OP.includes(je.extname(r5).toLowerCase());
}, async testParse(r5) {
  return Wa.test(r5) || Ed.test(r5);
}, async parse(r5, e, t) {
  const n = Wa.test(r5) ? Wa.parse(r5) : Ed.parse(r5), { src: i } = e, { page: s } = n, o = [];
  for (let u = 0; u < s.length; ++u) {
    const h = s[u].file;
    let c = je.join(je.dirname(i), h);
    c = md(c, i), o.push(c);
  }
  const a = await t.load(o), l = o.map((u) => a[u]);
  return Ur.install(n, l, true);
}, async load(r5, e) {
  return (await z.ADAPTER.fetch(r5)).text();
}, unload(r5) {
  r5.destroy();
} };
X.add(LP);
const Td = class hi extends hn {
  constructor() {
    super(...arguments), this._fonts = [], this._overrides = [], this._stylesheet = "", this.fontsDirty = false;
  }
  static from(e) {
    return new hi(Object.keys(hi.defaultOptions).reduce((t, n) => ({ ...t, [n]: e[n] }), {}));
  }
  cleanFonts() {
    this._fonts.length > 0 && (this._fonts.forEach((e) => {
      URL.revokeObjectURL(e.src), e.refs--, e.refs === 0 && (e.fontFace && document.fonts.delete(e.fontFace), delete hi.availableFonts[e.originalUrl]);
    }), this.fontFamily = "Arial", this._fonts.length = 0, this.styleID++, this.fontsDirty = true);
  }
  loadFont(e, t = {}) {
    const { availableFonts: n } = hi;
    if (n[e]) {
      const i = n[e];
      return this._fonts.push(i), i.refs++, this.styleID++, this.fontsDirty = true, Promise.resolve();
    }
    return z.ADAPTER.fetch(e).then((i) => i.blob()).then(async (i) => new Promise((s, o) => {
      const a = URL.createObjectURL(i), l = new FileReader();
      l.onload = () => s([a, l.result]), l.onerror = o, l.readAsDataURL(i);
    })).then(async ([i, s]) => {
      const o = Object.assign({ family: je.basename(e, je.extname(e)), weight: "normal", style: "normal", display: "auto", src: i, dataSrc: s, refs: 1, originalUrl: e, fontFace: null }, t);
      n[e] = o, this._fonts.push(o), this.styleID++;
      const a = new FontFace(o.family, `url(${o.src})`, { weight: o.weight, style: o.style, display: o.display });
      o.fontFace = a, await a.load(), document.fonts.add(a), await document.fonts.ready, this.styleID++, this.fontsDirty = true;
    });
  }
  addOverride(...e) {
    const t = e.filter((n) => !this._overrides.includes(n));
    t.length > 0 && (this._overrides.push(...t), this.styleID++);
  }
  removeOverride(...e) {
    const t = e.filter((n) => this._overrides.includes(n));
    t.length > 0 && (this._overrides = this._overrides.filter((n) => !t.includes(n)), this.styleID++);
  }
  toCSS(e) {
    return [`transform: scale(${e})`, "transform-origin: top left", "display: inline-block", `color: ${this.normalizeColor(this.fill)}`, `font-size: ${this.fontSize}px`, `font-family: ${this.fontFamily}`, `font-weight: ${this.fontWeight}`, `font-style: ${this.fontStyle}`, `font-variant: ${this.fontVariant}`, `letter-spacing: ${this.letterSpacing}px`, `text-align: ${this.align}`, `padding: ${this.padding}px`, `white-space: ${this.whiteSpace}`, ...this.lineHeight ? [`line-height: ${this.lineHeight}px`] : [], ...this.wordWrap ? [`word-wrap: ${this.breakWords ? "break-all" : "break-word"}`, `max-width: ${this.wordWrapWidth}px`] : [], ...this.strokeThickness ? [`-webkit-text-stroke-width: ${this.strokeThickness}px`, `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`, `text-stroke-width: ${this.strokeThickness}px`, `text-stroke-color: ${this.normalizeColor(this.stroke)}`, "paint-order: stroke"] : [], ...this.dropShadow ? [this.dropShadowToCSS()] : [], ...this._overrides].join(";");
  }
  toGlobalCSS() {
    return this._fonts.reduce((e, t) => `${e}
            @font-face {
                font-family: "${t.family}";
                src: url('${t.dataSrc}');
                font-weight: ${t.weight};
                font-style: ${t.style};
                font-display: ${t.display};
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
    const t = this.dropShadowAlpha, n = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance), i = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
    e.startsWith("#") && t < 1 && (e += (t * 255 | 0).toString(16).padStart(2, "0"));
    const s = `${n}px ${i}px`;
    return this.dropShadowBlur > 0 ? `text-shadow: ${s} ${this.dropShadowBlur}px ${e}` : `text-shadow: ${s} ${e}`;
  }
  reset() {
    Object.assign(this, hi.defaultOptions);
  }
  onBeforeDraw() {
    const { fontsDirty: e } = this;
    return this.fontsDirty = false, this.isSafari && this._fonts.length > 0 && e ? new Promise((t) => setTimeout(t, 100)) : Promise.resolve();
  }
  get isSafari() {
    const { userAgent: e } = z.ADAPTER.getNavigator();
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
Td.availableFonts = {}, Td.defaultOptions = { align: "left", breakWords: false, dropShadow: false, dropShadowAlpha: 1, dropShadowAngle: Math.PI / 6, dropShadowBlur: 0, dropShadowColor: "black", dropShadowDistance: 5, fill: "black", fontFamily: "Arial", fontSize: 26, fontStyle: "normal", fontVariant: "normal", fontWeight: "normal", letterSpacing: 0, lineHeight: 0, padding: 0, stroke: "black", strokeThickness: 0, whiteSpace: "normal", wordWrap: false, wordWrapWidth: 100 };
let Dh = Td;
const xa = class ci extends ts {
  constructor(e = "", t = {}) {
    super(W.EMPTY), this._text = null, this._style = null, this._autoResolution = true, this.localStyleID = -1, this.dirty = false, this._updateID = 0, this.ownsStyle = false;
    const n = new Image(), i = W.from(n, { scaleMode: z.SCALE_MODE, resourceOptions: { autoLoad: false } });
    i.orig = new te(), i.trim = new te(), this.texture = i;
    const s = "http://www.w3.org/2000/svg", o = "http://www.w3.org/1999/xhtml", a = document.createElementNS(s, "svg"), l = document.createElementNS(s, "foreignObject"), u = document.createElementNS(o, "div"), h = document.createElementNS(o, "style");
    l.setAttribute("width", "10000"), l.setAttribute("height", "10000"), l.style.overflow = "hidden", a.appendChild(l), this.maxWidth = ci.defaultMaxWidth, this.maxHeight = ci.defaultMaxHeight, this._domElement = u, this._styleElement = h, this._svgRoot = a, this._foreignObject = l, this._foreignObject.appendChild(h), this._foreignObject.appendChild(u), this._image = n, this._loadImage = new Image(), this._autoResolution = ci.defaultAutoResolution, this._resolution = ci.defaultResolution ?? z.RESOLUTION, this.text = e, this.style = t;
  }
  measureText(e) {
    var _a2, _b2;
    const { text: t, style: n, resolution: i } = Object.assign({ text: this._text, style: this._style, resolution: this._resolution }, e);
    Object.assign(this._domElement, { innerHTML: t, style: n.toCSS(i) }), this._styleElement.textContent = n.toGlobalCSS(), document.body.appendChild(this._svgRoot);
    const s = this._domElement.getBoundingClientRect();
    this._svgRoot.remove();
    const { width: o, height: a } = s;
    (o > this.maxWidth || a > this.maxHeight) && console.warn("[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property.");
    const l = Math.min(this.maxWidth, Math.ceil(o)), u = Math.min(this.maxHeight, Math.ceil(a));
    return this._svgRoot.setAttribute("width", l.toString()), this._svgRoot.setAttribute("height", u.toString()), t !== this._text && (this._domElement.innerHTML = this._text), n !== this._style && (Object.assign(this._domElement, { style: (_a2 = this._style) == null ? void 0 : _a2.toCSS(i) }), this._styleElement.textContent = (_b2 = this._style) == null ? void 0 : _b2.toGlobalCSS()), { width: l + n.padding * 2, height: u + n.padding * 2 };
  }
  async updateText(e = true) {
    const { style: t, _image: n, _loadImage: i } = this;
    if (this.localStyleID !== t.styleID && (this.dirty = true, this.localStyleID = t.styleID), !this.dirty && e) return;
    const { width: s, height: o } = this.measureText();
    n.width = i.width = Math.ceil(Math.max(1, s)), n.height = i.height = Math.ceil(Math.max(1, o)), this._updateID++;
    const a = this._updateID;
    await new Promise((l) => {
      i.onload = async () => {
        if (a < this._updateID) {
          l();
          return;
        }
        await t.onBeforeDraw(), n.src = i.src, i.onload = null, i.src = "", this.updateTexture(), l();
      };
      const u = new XMLSerializer().serializeToString(this._svgRoot);
      i.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(u)}`;
    });
  }
  get source() {
    return this._image;
  }
  updateTexture() {
    const { style: e, texture: t, _image: n, resolution: i } = this, { padding: s } = e, { baseTexture: o } = t;
    t.trim.width = t._frame.width = n.width / i, t.trim.height = t._frame.height = n.height / i, t.trim.x = -s, t.trim.y = -s, t.orig.width = t._frame.width - s * 2, t.orig.height = t._frame.height - s * 2, this._onTextureUpdate(), o.setRealSize(n.width, n.height, i), this.dirty = false;
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
    typeof e == "boolean" && (e = { children: e }), e = Object.assign({}, ci.defaultDestroyOptions, e), super.destroy(e);
    const t = null;
    this.ownsStyle && ((_a2 = this._style) == null ? void 0 : _a2.cleanFonts()), this._style = t, (_b2 = this._svgRoot) == null ? void 0 : _b2.remove(), this._svgRoot = t, (_c2 = this._domElement) == null ? void 0 : _c2.remove(), this._domElement = t, (_d2 = this._foreignObject) == null ? void 0 : _d2.remove(), this._foreignObject = t, (_e = this._styleElement) == null ? void 0 : _e.remove(), this._styleElement = t, this._loadImage.src = "", this._loadImage.onload = null, this._loadImage = t, this._image.src = "", this._image = t;
  }
  get width() {
    return this.updateText(true), Math.abs(this.scale.x) * this._image.width / this.resolution;
  }
  set width(e) {
    this.updateText(true);
    const t = Kr(this.scale.x) || 1;
    this.scale.x = t * e / this._image.width / this.resolution, this._width = e;
  }
  get height() {
    return this.updateText(true), Math.abs(this.scale.y) * this._image.height / this.resolution;
  }
  set height(e) {
    this.updateText(true);
    const t = Kr(this.scale.y) || 1;
    this.scale.y = t * e / this._image.height / this.resolution, this._height = e;
  }
  get style() {
    return this._style;
  }
  set style(e) {
    this._style !== e && (e = e || {}, e instanceof Dh ? (this.ownsStyle = false, this._style = e) : e instanceof hn ? (console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"), this.ownsStyle = true, this._style = Dh.from(e)) : (this.ownsStyle = true, this._style = new Dh(e)), this.localStyleID = -1, this.dirty = true);
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
xa.defaultDestroyOptions = { texture: true, children: false, baseTexture: true }, xa.defaultMaxWidth = 2024, xa.defaultMaxHeight = 2024, xa.defaultAutoResolution = true;
function UP(r5, e, t, n) {
  const s = r5 * Math.PI / 180, o = t * Math.PI / 180, a = (t - r5) * Math.PI / 180, l = (n - e) * Math.PI / 180, u = Math.sin(a / 2) * Math.sin(a / 2) + Math.cos(s) * Math.cos(o) * Math.sin(l / 2) * Math.sin(l / 2);
  return 6371e3 * (2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u)));
}
function Ai(r5, e, t, n, i, s = 20) {
  const o = n - 2 * s, a = i - 2 * s, l = s + (e - t.minLon) / (t.maxLon - t.minLon) * o, u = s + (t.maxLat - r5) / (t.maxLat - t.minLat) * a;
  return { x: l, y: u };
}
function vs(r5, e) {
  return `${r5.toFixed(5)},${e.toFixed(5)}`;
}
function GP(r5) {
  const e = /* @__PURE__ */ new Map(), t = [], n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (const s of r5.ways) {
    for (const o of s.geometry) {
      const a = vs(o.lat, o.lon);
      i.set(a, (i.get(a) || 0) + 1);
    }
    if (s.geometry.length > 0) {
      const o = s.geometry[0], a = s.geometry[s.geometry.length - 1];
      i.set(vs(o.lat, o.lon), 2), i.set(vs(a.lat, a.lon), 2);
    }
  }
  for (const s of r5.ways) {
    const o = s.geometry;
    if (o.length < 2) continue;
    let a = 0;
    for (let l = 0; l < o.length; l++) {
      const u = o[l], h = vs(u.lat, u.lon), c = (i.get(h) || 0) > 1, d = l === 0 || l === o.length - 1;
      if (c || d) {
        if (e.has(h) || e.set(h, { id: h, lat: u.lat, lon: u.lon }), l > a) {
          const f = o[a], p = vs(f.lat, f.lon);
          let v = 0;
          for (let y = a; y < l; y++) v += UP(o[y].lat, o[y].lon, o[y + 1].lat, o[y + 1].lon);
          const _ = { from: p, to: h, weight: v, wayId: s.id }, g = { from: h, to: p, weight: v, wayId: s.id };
          t.push(_, g), n.has(p) || n.set(p, []), n.has(h) || n.set(h, []), n.get(p).push(_), n.get(h).push(g);
        }
        a = l;
      }
    }
  }
  return { nodes: e, edges: t, adjacency: n };
}
function zP(r5, e, t, n) {
  const i = [];
  for (const s of r5.ways) {
    const o = s.geometry.map((a) => Ai(a.lat, a.lon, e, t, n));
    i.push({ points: o, wayId: s.id, highway: s.tags.highway || "unknown" });
  }
  return i;
}
function HP(r5, e, t, n, i, s, o = 30) {
  let a = null, l = 1 / 0;
  for (const u of r5.nodes.values()) {
    const h = Ai(u.lat, u.lon, n, i, s), c = e - h.x, d = t - h.y, f = Math.sqrt(c * c + d * d);
    f < l && f < o && (l = f, a = u);
  }
  return a;
}
function vo(r5, e) {
  const n = Math.PI / 180, i = (r5.lat + e.lat) / 2 * n, s = Math.cos(i), o = (e.lon - r5.lon) * n * s, a = (e.lat - r5.lat) * n;
  return 6371e3 * Math.sqrt(o * o + a * a);
}
const ix = { visited: 65535, visitedBackward: 16711808, path: 65535, startMarker: 65280, endMarker: 16711808 }, Bt = 2e3, Lg = 0.2, Ug = 5, wa = 0.25;
class $P {
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
    __publicField(this, "theme", { ...ix });
    __publicField(this, "animationFrameId", null);
    __publicField(this, "_zoom", 1);
    __publicField(this, "_panX", 0);
    __publicField(this, "_panY", 0);
    __publicField(this, "isDragging", false);
    __publicField(this, "dragStartX", 0);
    __publicField(this, "dragStartY", 0);
    __publicField(this, "panStartX", 0);
    __publicField(this, "panStartY", 0);
    this.screenWidth = e.screen.width, this.screenHeight = e.screen.height, this.mainContainer = new Je(), this.roadsContainer = new Je(), this.visitedContainer = new Je(), this.pathContainer = new Je(), this.markersContainer = new Je(), this.roadGraphics = new Pn(), this.visitedGraphics = new Pn(), this.pathGraphics = new Pn(), this.roadsContainer.addChild(this.roadGraphics), this.visitedContainer.addChild(this.visitedGraphics), this.pathContainer.addChild(this.pathGraphics), this.mainContainer.addChild(this.roadsContainer), this.mainContainer.addChild(this.visitedContainer), this.mainContainer.addChild(this.pathContainer), this.mainContainer.addChild(this.markersContainer), e.stage.addChild(this.mainContainer), this.setupInteraction(e), this.centerView();
  }
  setupInteraction(e) {
    const t = e.view;
    t.addEventListener("wheel", (n) => {
      n.preventDefault();
      const i = n.deltaY > 0 ? -wa : wa, s = t.getBoundingClientRect(), o = n.clientX - s.left, a = n.clientY - s.top;
      this.zoomAt(o, a, i);
    }, { passive: false }), t.addEventListener("mousedown", (n) => {
      (n.button === 1 || n.button === 0 && n.shiftKey) && (n.preventDefault(), this.isDragging = true, this.dragStartX = n.clientX, this.dragStartY = n.clientY, this.panStartX = this._panX, this.panStartY = this._panY, t.style.cursor = "grabbing");
    }), t.addEventListener("mousemove", (n) => {
      if (this.isDragging) {
        const i = n.clientX - this.dragStartX, s = n.clientY - this.dragStartY;
        this._panX = this.panStartX + i, this._panY = this.panStartY + s, this.updateTransform();
      }
    }), t.addEventListener("mouseup", () => {
      this.isDragging && (this.isDragging = false, t.style.cursor = "default");
    }), t.addEventListener("mouseleave", () => {
      this.isDragging && (this.isDragging = false, t.style.cursor = "default");
    }), t.addEventListener("contextmenu", (n) => n.preventDefault());
  }
  updateTransform() {
    this.mainContainer.scale.set(this._zoom), this.mainContainer.position.set(this._panX, this._panY);
  }
  centerView() {
    this._panX = (this.screenWidth - Bt * this._zoom) / 2, this._panY = (this.screenHeight - Bt * this._zoom) / 2, this.updateTransform();
  }
  setBounds(e) {
    this.bounds = e;
  }
  resize(e, t) {
    this.screenWidth = e, this.screenHeight = t;
  }
  get zoom() {
    return this._zoom;
  }
  zoomIn() {
    this.setZoom(this._zoom + wa);
  }
  zoomOut() {
    this.setZoom(this._zoom - wa);
  }
  setZoom(e) {
    const t = this._zoom;
    this._zoom = Math.max(Lg, Math.min(Ug, e));
    const n = this.screenWidth / 2, i = this.screenHeight / 2, s = this._zoom / t;
    this._panX = n - (n - this._panX) * s, this._panY = i - (i - this._panY) * s, this.updateTransform();
  }
  zoomAt(e, t, n) {
    const i = this._zoom;
    this._zoom = Math.max(Lg, Math.min(Ug, this._zoom + n));
    const s = this._zoom / i;
    this._panX = e - (e - this._panX) * s, this._panY = t - (t - this._panY) * s, this.updateTransform();
  }
  resetView() {
    this._zoom = 1, this.centerView();
  }
  screenToMap(e, t) {
    const n = (e - this._panX) / this._zoom, i = (t - this._panY) / this._zoom;
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
      for (const t of e) {
        if (t.points.length < 2) continue;
        const n = this.getRoadWidth(t.highway);
        this.roadGraphics.lineStyle(n, 16777215, 0.6), this.roadGraphics.moveTo(t.points[0].x, t.points[0].y);
        for (let i = 1; i < t.points.length; i++) this.roadGraphics.lineTo(t.points[i].x, t.points[i].y);
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
  drawVisitedNode(e, t) {
    if (!this.bounds) return;
    const n = Ai(e.lat, e.lon, this.bounds, Bt, Bt), i = t === "backward" ? this.theme.visitedBackward : this.theme.visited;
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
    const t = e.map((i) => Ai(i.lat, i.lon, this.bounds, Bt, Bt)), n = this.theme.path;
    this.pathGraphics.lineStyle(12, n, 0.2), this.pathGraphics.moveTo(t[0].x, t[0].y);
    for (let i = 1; i < t.length; i++) this.pathGraphics.lineTo(t[i].x, t[i].y);
    this.pathGraphics.lineStyle(6, n, 0.4), this.pathGraphics.moveTo(t[0].x, t[0].y);
    for (let i = 1; i < t.length; i++) this.pathGraphics.lineTo(t[i].x, t[i].y);
    this.pathGraphics.lineStyle(3, n, 0.7), this.pathGraphics.moveTo(t[0].x, t[0].y);
    for (let i = 1; i < t.length; i++) this.pathGraphics.lineTo(t[i].x, t[i].y);
    this.pathGraphics.lineStyle(1.5, 16777215, 1), this.pathGraphics.moveTo(t[0].x, t[0].y);
    for (let i = 1; i < t.length; i++) this.pathGraphics.lineTo(t[i].x, t[i].y);
  }
  animatePathFound(e = 500) {
    this.animationFrameId && cancelAnimationFrame(this.animationFrameId);
    const t = performance.now(), n = this.roadsContainer.alpha, i = this.visitedContainer.alpha, s = 0.2, o = 0.15, a = (l) => {
      const u = l - t, h = Math.min(u / e, 1), c = 1 - Math.pow(1 - h, 3);
      this.roadsContainer.alpha = n + (s - n) * c, this.visitedContainer.alpha = i + (o - i) * c, h < 1 ? this.animationFrameId = requestAnimationFrame(a) : this.animationFrameId = null;
    };
    this.animationFrameId = requestAnimationFrame(a);
  }
  resetAlpha() {
    this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null), this.roadsContainer.alpha = 1, this.visitedContainer.alpha = 1;
  }
  setStartMarker(e) {
    if (this.startMarker && (this.markersContainer.removeChild(this.startMarker), this.startMarker.destroy(), this.startMarker = null), e && this.bounds) {
      const t = Ai(e.lat, e.lon, this.bounds, Bt, Bt), n = this.theme.startMarker;
      this.startMarker = new Pn(), this.startMarker.beginFill(n, 0.2), this.startMarker.drawCircle(t.x, t.y, 16), this.startMarker.endFill(), this.startMarker.beginFill(n, 0.4), this.startMarker.drawCircle(t.x, t.y, 10), this.startMarker.endFill(), this.startMarker.beginFill(n, 0.8), this.startMarker.drawCircle(t.x, t.y, 6), this.startMarker.endFill(), this.startMarker.beginFill(16777215, 1), this.startMarker.drawCircle(t.x, t.y, 3), this.startMarker.endFill(), this.markersContainer.addChild(this.startMarker);
    }
  }
  setEndMarker(e) {
    if (this.endMarker && (this.markersContainer.removeChild(this.endMarker), this.endMarker.destroy(), this.endMarker = null), e && this.bounds) {
      const t = Ai(e.lat, e.lon, this.bounds, Bt, Bt), n = this.theme.endMarker;
      this.endMarker = new Pn(), this.endMarker.beginFill(n, 0.2), this.endMarker.drawCircle(t.x, t.y, 16), this.endMarker.endFill(), this.endMarker.beginFill(n, 0.4), this.endMarker.drawCircle(t.x, t.y, 10), this.endMarker.endFill(), this.endMarker.beginFill(n, 0.8), this.endMarker.drawCircle(t.x, t.y, 6), this.endMarker.endFill(), this.endMarker.beginFill(16777215, 1), this.endMarker.drawCircle(t.x, t.y, 3), this.endMarker.endFill(), this.markersContainer.addChild(this.endMarker);
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
const Ll = Bt, jP = "https://overpass-api.de/api/interpreter";
function VP(r5) {
  const [e, t, n, i] = r5.boundingBox;
  return `
    [out:json][timeout:120];
    (
      way["highway"~"^(motorway|motorway_link|trunk|trunk_link|primary|primary_link|secondary|secondary_link|tertiary|tertiary_link|residential|unclassified|living_street)$"]
        (${e},${n},${t},${i});
    );
    out body geom;
  `.trim();
}
async function WP(r5) {
  const e = VP(r5), t = await fetch(jP, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: `data=${encodeURIComponent(e)}` });
  if (!t.ok) throw new Error(`Overpass API error: ${t.status}`);
  const n = await t.json();
  return XP(n, r5.boundingBox);
}
function XP(r5, e) {
  const t = /* @__PURE__ */ new Map(), n = [], [i, s, o, a] = e.map(parseFloat), l = { minLat: i, maxLat: s, minLon: o, maxLon: a };
  for (const u of r5.elements) if (u.type === "way" && u.geometry) {
    const h = u.geometry, c = [];
    h.forEach((d, f) => {
      const p = u.id * 1e3 + f;
      t.set(p, { id: p, lat: d.lat, lon: d.lon }), c.push(p);
    }), n.push({ id: u.id, nodes: c, geometry: h.map((d) => ({ lat: d.lat, lon: d.lon })), tags: u.tags || {} });
  }
  return { nodes: t, ways: n, bounds: l };
}
function YP() {
  const [r5, e] = $.useState(null), [t, n] = $.useState(null), [i, s] = $.useState([]), [o, a] = $.useState(null), [l, u] = $.useState(false), [h, c] = $.useState(null), d = $.useCallback(async (p) => {
    u(true), c(null);
    try {
      const v = await WP(p);
      e(v), a(v.bounds);
      const _ = GP(v);
      n(_);
      const g = zP(v, v.bounds, Ll, Ll);
      s(g);
    } catch (v) {
      const _ = v instanceof Error ? v.message : "Failed to load city data";
      c(_), console.error("Failed to load city:", v);
    } finally {
      u(false);
    }
  }, []), f = $.useCallback(() => {
    e(null), n(null), s([]), a(null), c(null);
  }, []);
  return { osmData: r5, graph: t, roadSegments: i, bounds: o, isLoading: l, error: h, loadCity: d, clear: f };
}
class _o {
  constructor() {
    __publicField(this, "heap", []);
  }
  push(e, t) {
    this.heap.push({ priority: t, value: e }), this.bubbleUp(this.heap.length - 1);
  }
  pop() {
    if (this.heap.length === 0) return;
    const e = this.heap[0].value, t = this.heap.pop();
    return this.heap.length > 0 && (this.heap[0] = t, this.bubbleDown(0)), e;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  size() {
    return this.heap.length;
  }
  bubbleUp(e) {
    for (; e > 0; ) {
      const t = Math.floor((e - 1) / 2);
      if (this.heap[t].priority <= this.heap[e].priority) break;
      [this.heap[t], this.heap[e]] = [this.heap[e], this.heap[t]], e = t;
    }
  }
  bubbleDown(e) {
    const t = this.heap.length;
    for (; ; ) {
      const n = 2 * e + 1, i = 2 * e + 2;
      let s = e;
      if (n < t && this.heap[n].priority < this.heap[s].priority && (s = n), i < t && this.heap[i].priority < this.heap[s].priority && (s = i), s === e) break;
      [this.heap[e], this.heap[s]] = [this.heap[s], this.heap[e]], e = s;
    }
  }
}
function Mo(r5, e, t) {
  const n = [];
  let i = e;
  for (; r5.has(i); ) n.unshift(t.nodes.get(i)), i = r5.get(i);
  return n.unshift(t.nodes.get(i)), n;
}
function* Gg(r5) {
  const { graph: e, start: t, end: n } = r5;
  yield { type: "start", nodeId: t.id, node: t };
  const i = new _o(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = (c) => {
    let d = l.get(c);
    if (d === void 0) {
      const f = e.nodes.get(c);
      d = vo(f, n), l.set(c, d);
    }
    return d;
  };
  o.set(t.id, 0), i.push(t.id, u(t.id));
  let h = 0;
  for (; !i.isEmpty(); ) {
    const c = i.pop();
    if (a.has(c)) continue;
    a.add(c);
    const d = e.nodes.get(c);
    if (h++, yield { type: "visit", nodeId: c, node: d, visitedCount: h }, c === n.id) {
      yield { type: "complete", path: Mo(s, c, e), visitedCount: h };
      return;
    }
    const f = e.adjacency.get(c) || [], p = o.get(c);
    for (const v of f) {
      if (a.has(v.to)) continue;
      const _ = p + v.weight, g = o.get(v.to) ?? 1 / 0;
      if (_ < g) {
        s.set(v.to, c), o.set(v.to, _);
        const y = _ + u(v.to);
        i.push(v.to, y);
      }
    }
  }
  yield { type: "complete", path: [], visitedCount: h };
}
function* KP(r5) {
  const { graph: e, start: t, end: n } = r5;
  yield { type: "start", nodeId: t.id, node: t };
  const i = new _o(), s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
  o.set(t.id, 0), i.push(t.id, 0);
  let l = 0;
  for (; !i.isEmpty(); ) {
    const u = i.pop();
    if (a.has(u)) continue;
    a.add(u);
    const h = e.nodes.get(u);
    if (l++, yield { type: "visit", nodeId: u, node: h, visitedCount: l }, u === n.id) {
      yield { type: "complete", path: Mo(s, u, e), visitedCount: l };
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
function* qP(r5) {
  const { graph: e, start: t, end: n } = r5;
  yield { type: "start", nodeId: t.id, node: t };
  const i = [t.id];
  let s = 0;
  const o = /* @__PURE__ */ new Set([t.id]), a = /* @__PURE__ */ new Map();
  let l = 0;
  for (; s < i.length; ) {
    const u = i[s++], h = e.nodes.get(u);
    if (l++, yield { type: "visit", nodeId: u, node: h, visitedCount: l }, u === n.id) {
      yield { type: "complete", path: Mo(a, u, e), visitedCount: l };
      return;
    }
    const c = e.adjacency.get(u) || [];
    for (const d of c) o.has(d.to) || (o.add(d.to), a.set(d.to, u), i.push(d.to));
  }
  yield { type: "complete", path: [], visitedCount: l };
}
function* ZP(r5) {
  const { graph: e, start: t, end: n } = r5;
  yield { type: "start", nodeId: t.id, node: t };
  const i = [t.id], s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
  let a = 0;
  for (; i.length > 0; ) {
    const l = i.pop();
    if (s.has(l)) continue;
    s.add(l);
    const u = e.nodes.get(l);
    if (a++, yield { type: "visit", nodeId: l, node: u, visitedCount: a }, l === n.id) {
      yield { type: "complete", path: Mo(o, l, e), visitedCount: a };
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
function* QP(r5) {
  const { graph: e, start: t, end: n } = r5;
  yield { type: "start", nodeId: t.id, node: t };
  const i = new _o(), s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
  i.push(t.id, vo(t, n));
  let a = 0;
  for (; !i.isEmpty(); ) {
    const l = i.pop();
    if (s.has(l)) continue;
    s.add(l);
    const u = e.nodes.get(l);
    if (a++, yield { type: "visit", nodeId: l, node: u, visitedCount: a }, l === n.id) {
      yield { type: "complete", path: Mo(o, l, e), visitedCount: a };
      return;
    }
    const h = e.adjacency.get(l) || [];
    for (const c of h) if (!s.has(c.to)) {
      const d = e.nodes.get(c.to);
      o.set(c.to, l), i.push(c.to, vo(d, n));
    }
  }
  yield { type: "complete", path: [], visitedCount: a };
}
function* JP(r5) {
  const { graph: e, start: t, end: n } = r5;
  yield { type: "start", nodeId: t.id, node: t };
  const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = (x) => {
    let w = i.get(x);
    return w === void 0 && (w = vo(e.nodes.get(x), n), i.set(x, w)), w;
  }, a = (x) => {
    let w = s.get(x);
    return w === void 0 && (w = vo(e.nodes.get(x), t), s.set(x, w)), w;
  }, l = new _o(), u = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), d = new _o(), f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Set();
  h.set(t.id, 0), l.push(t.id, o(t.id)), p.set(n.id, 0), d.push(n.id, a(n.id));
  let _ = 0, g = null, y = 1 / 0, m = null;
  for (; !l.isEmpty() || !d.isEmpty(); ) {
    if (!l.isEmpty()) {
      const x = l.pop();
      if (!c.has(x)) {
        c.add(x);
        const w = e.nodes.get(x);
        if (_++, yield { type: "visit", nodeId: x, node: w, visitedCount: _, fromDirection: "forward" }, v.has(x)) {
          const E = (h.get(x) || 0) + (p.get(x) || 0);
          E < y && (y = E, m = x);
        }
        const S = e.adjacency.get(x) || [], T = h.get(x);
        for (const E of S) {
          const I = T + E.weight;
          I < (h.get(E.to) ?? 1 / 0) && (u.set(E.to, x), h.set(E.to, I), l.push(E.to, I + o(E.to)));
        }
      }
    }
    if (!d.isEmpty()) {
      const x = d.pop();
      if (!v.has(x)) {
        v.add(x);
        const w = e.nodes.get(x);
        if (_++, yield { type: "visit", nodeId: x, node: w, visitedCount: _, fromDirection: "backward" }, c.has(x)) {
          const E = (h.get(x) || 0) + (p.get(x) || 0);
          E < y && (y = E, m = x);
        }
        const S = e.adjacency.get(x) || [], T = p.get(x);
        for (const E of S) {
          const I = T + E.weight;
          I < (p.get(E.to) ?? 1 / 0) && (f.set(E.to, x), p.set(E.to, I), d.push(E.to, I + a(E.to)));
        }
      }
    }
    if (m !== null) {
      const x = [];
      let w = m;
      for (; u.has(w); ) x.push(e.nodes.get(w)), w = u.get(w);
      x.push(e.nodes.get(w)), x.reverse();
      const S = [];
      for (w = m; f.has(w); ) w = f.get(w), S.push(e.nodes.get(w));
      g = [...x, ...S];
      break;
    }
  }
  g ? yield { type: "complete", path: g, visitedCount: _ } : yield { type: "complete", path: [], visitedCount: _ };
}
function eR(r5) {
  const e = [], t = [];
  for (const [, n] of r5.nodes) e.push({ id: n.id, lat: n.lat, lon: n.lon });
  for (const [n, i] of r5.adjacency) t.push({ from: n, edges: i.map((s) => ({ to: s.to, weight: s.weight })) });
  return { nodes: e, adjacency: t };
}
let B;
function tR(r5) {
  const e = B.__externref_table_alloc();
  return B.__wbindgen_externrefs.set(e, r5), e;
}
function ns(r5, e) {
  if (!(r5 instanceof e)) throw new Error(`expected instance of ${e.name}`);
}
function Sd(r5) {
  const e = typeof r5;
  if (e == "number" || e == "boolean" || r5 == null) return `${r5}`;
  if (e == "string") return `"${r5}"`;
  if (e == "symbol") {
    const i = r5.description;
    return i == null ? "Symbol" : `Symbol(${i})`;
  }
  if (e == "function") {
    const i = r5.name;
    return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
  }
  if (Array.isArray(r5)) {
    const i = r5.length;
    let s = "[";
    i > 0 && (s += Sd(r5[0]));
    for (let o = 1; o < i; o++) s += ", " + Sd(r5[o]);
    return s += "]", s;
  }
  const t = /\[object ([^\]]+)\]/.exec(toString.call(r5));
  let n;
  if (t && t.length > 1) n = t[1];
  else return toString.call(r5);
  if (n == "Object") try {
    return "Object(" + JSON.stringify(r5) + ")";
  } catch {
    return "Object";
  }
  return r5 instanceof Error ? `${r5.name}: ${r5.message}
${r5.stack}` : n;
}
function rR(r5, e) {
  return r5 = r5 >>> 0, Xs().subarray(r5 / 1, r5 / 1 + e);
}
let An = null;
function Zt() {
  return (An === null || An.buffer.detached === true || An.buffer.detached === void 0 && An.buffer !== B.memory.buffer) && (An = new DataView(B.memory.buffer)), An;
}
function Ea(r5, e) {
  return r5 = r5 >>> 0, iR(r5, e);
}
let Ms = null;
function Xs() {
  return (Ms === null || Ms.byteLength === 0) && (Ms = new Uint8Array(B.memory.buffer)), Ms;
}
function Fh(r5, e) {
  try {
    return r5.apply(this, e);
  } catch (t) {
    const n = tR(t);
    B.__wbindgen_exn_store(n);
  }
}
function Ta(r5) {
  return r5 == null;
}
function et(r5, e, t) {
  if (t === void 0) {
    const a = Ys.encode(r5), l = e(a.length, 1) >>> 0;
    return Xs().subarray(l, l + a.length).set(a), He = a.length, l;
  }
  let n = r5.length, i = e(n, 1) >>> 0;
  const s = Xs();
  let o = 0;
  for (; o < n; o++) {
    const a = r5.charCodeAt(o);
    if (a > 127) break;
    s[i + o] = a;
  }
  if (o !== n) {
    o !== 0 && (r5 = r5.slice(o)), i = t(i, n, n = o + r5.length * 3, 1) >>> 0;
    const a = Xs().subarray(i + o, i + n), l = Ys.encodeInto(r5, a);
    o += l.written, i = t(i, n, o, 1) >>> 0;
  }
  return He = o, i;
}
function Jn(r5) {
  const e = B.__wbindgen_externrefs.get(r5);
  return B.__externref_table_dealloc(r5), e;
}
let Ya = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Ya.decode();
const nR = 2146435072;
let Nh = 0;
function iR(r5, e) {
  return Nh += e, Nh >= nR && (Ya = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Ya.decode(), Nh = e), Ya.decode(Xs().subarray(r5, r5 + e));
}
const Ys = new TextEncoder();
"encodeInto" in Ys || (Ys.encodeInto = function(r5, e) {
  const t = Ys.encode(r5);
  return e.set(t), { read: r5.length, written: t.length };
});
let He = 0;
const zg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((r5) => B.__wbg_astarsolver_free(r5 >>> 0, 1)), Hg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((r5) => B.__wbg_bfssolver_free(r5 >>> 0, 1)), $g = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((r5) => B.__wbg_bidirectionalsolver_free(r5 >>> 0, 1)), jg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((r5) => B.__wbg_dfssolver_free(r5 >>> 0, 1)), Vg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((r5) => B.__wbg_dijkstrasolver_free(r5 >>> 0, 1)), Wg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((r5) => B.__wbg_greedysolver_free(r5 >>> 0, 1)), Xg = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((r5) => B.__wbg_wasmgraphhandle_free(r5 >>> 0, 1));
class Ul {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_astarsolver_free(e, 0);
  }
  constructor(e, t, n) {
    ns(e, Fr);
    const i = et(t, B.__wbindgen_malloc, B.__wbindgen_realloc), s = He, o = et(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = He, l = B.astarsolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw Jn(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, zg.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.astarsolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.astarsolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (Ul.prototype[Symbol.dispose] = Ul.prototype.free);
class bd {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Hg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_bfssolver_free(e, 0);
  }
  constructor(e, t, n) {
    ns(e, Fr);
    const i = et(t, B.__wbindgen_malloc, B.__wbindgen_realloc), s = He, o = et(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = He, l = B.bfssolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw Jn(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, Hg.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.bfssolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.bfssolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (bd.prototype[Symbol.dispose] = bd.prototype.free);
class Ad {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, $g.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_bidirectionalsolver_free(e, 0);
  }
  constructor(e, t, n) {
    ns(e, Fr);
    const i = et(t, B.__wbindgen_malloc, B.__wbindgen_realloc), s = He, o = et(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = He, l = B.bidirectionalsolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw Jn(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, $g.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.bidirectionalsolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.bidirectionalsolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (Ad.prototype[Symbol.dispose] = Ad.prototype.free);
class Cd {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, jg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_dfssolver_free(e, 0);
  }
  constructor(e, t, n) {
    ns(e, Fr);
    const i = et(t, B.__wbindgen_malloc, B.__wbindgen_realloc), s = He, o = et(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = He, l = B.dfssolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw Jn(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, jg.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.dfssolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.dfssolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (Cd.prototype[Symbol.dispose] = Cd.prototype.free);
class Id {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Vg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_dijkstrasolver_free(e, 0);
  }
  constructor(e, t, n) {
    ns(e, Fr);
    const i = et(t, B.__wbindgen_malloc, B.__wbindgen_realloc), s = He, o = et(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = He, l = B.dijkstrasolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw Jn(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, Vg.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.dijkstrasolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.dijkstrasolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (Id.prototype[Symbol.dispose] = Id.prototype.free);
class Pd {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Wg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_greedysolver_free(e, 0);
  }
  constructor(e, t, n) {
    ns(e, Fr);
    const i = et(t, B.__wbindgen_malloc, B.__wbindgen_realloc), s = He, o = et(n, B.__wbindgen_malloc, B.__wbindgen_realloc), a = He, l = B.greedysolver_new(e.__wbg_ptr, i, s, o, a);
    if (l[2]) throw Jn(l[1]);
    return this.__wbg_ptr = l[0] >>> 0, Wg.register(this, this.__wbg_ptr, this), this;
  }
  isDone() {
    return B.greedysolver_isDone(this.__wbg_ptr) !== 0;
  }
  nextStep() {
    return B.greedysolver_nextStep(this.__wbg_ptr);
  }
}
Symbol.dispose && (Pd.prototype[Symbol.dispose] = Pd.prototype.free);
class Fr {
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Xg.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    B.__wbg_wasmgraphhandle_free(e, 0);
  }
  nodeCount() {
    return B.wasmgraphhandle_nodeCount(this.__wbg_ptr) >>> 0;
  }
  constructor(e) {
    const t = B.wasmgraphhandle_new(e);
    if (t[2]) throw Jn(t[1]);
    return this.__wbg_ptr = t[0] >>> 0, Xg.register(this, this.__wbg_ptr, this), this;
  }
}
Symbol.dispose && (Fr.prototype[Symbol.dispose] = Fr.prototype.free);
const sR = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function oR(r5, e) {
  if (typeof Response == "function" && r5 instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(r5, e);
    } catch (n) {
      if (r5.ok && sR.has(r5.type) && r5.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n);
      else throw n;
    }
    const t = await r5.arrayBuffer();
    return await WebAssembly.instantiate(t, e);
  } else {
    const t = await WebAssembly.instantiate(r5, e);
    return t instanceof WebAssembly.Instance ? { instance: t, module: r5 } : t;
  }
}
function aR() {
  const r5 = {};
  return r5.wbg = {}, r5.wbg.__wbg_Error_52673b7de5a0ca89 = function(e, t) {
    return Error(Ea(e, t));
  }, r5.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(e, t) {
    const n = String(t), i = et(n, B.__wbindgen_malloc, B.__wbindgen_realloc), s = He;
    Zt().setInt32(e + 4 * 1, s, true), Zt().setInt32(e + 4 * 0, i, true);
  }, r5.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(e) {
    const t = e, n = typeof t == "boolean" ? t : void 0;
    return Ta(n) ? 16777215 : n ? 1 : 0;
  }, r5.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(e, t) {
    const n = Sd(t), i = et(n, B.__wbindgen_malloc, B.__wbindgen_realloc), s = He;
    Zt().setInt32(e + 4 * 1, s, true), Zt().setInt32(e + 4 * 0, i, true);
  }, r5.wbg.__wbg___wbindgen_in_0d3e1e8f0c669317 = function(e, t) {
    return e in t;
  }, r5.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(e) {
    return typeof e == "function";
  }, r5.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(e) {
    const t = e;
    return typeof t == "object" && t !== null;
  }, r5.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(e) {
    return e === void 0;
  }, r5.wbg.__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d = function(e, t) {
    return e == t;
  }, r5.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(e, t) {
    const n = t, i = typeof n == "number" ? n : void 0;
    Zt().setFloat64(e + 8 * 1, Ta(i) ? 0 : i, true), Zt().setInt32(e + 4 * 0, !Ta(i), true);
  }, r5.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(e, t) {
    const n = t, i = typeof n == "string" ? n : void 0;
    var s = Ta(i) ? 0 : et(i, B.__wbindgen_malloc, B.__wbindgen_realloc), o = He;
    Zt().setInt32(e + 4 * 1, o, true), Zt().setInt32(e + 4 * 0, s, true);
  }, r5.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(e, t) {
    throw new Error(Ea(e, t));
  }, r5.wbg.__wbg_call_abb4ff46ce38be40 = function() {
    return Fh(function(e, t) {
      return e.call(t);
    }, arguments);
  }, r5.wbg.__wbg_done_62ea16af4ce34b24 = function(e) {
    return e.done;
  }, r5.wbg.__wbg_error_7534b8e9a36f1ab4 = function(e, t) {
    let n, i;
    try {
      n = e, i = t, console.error(Ea(e, t));
    } finally {
      B.__wbindgen_free(n, i, 1);
    }
  }, r5.wbg.__wbg_get_6b7bd52aca3f9671 = function(e, t) {
    return e[t >>> 0];
  }, r5.wbg.__wbg_get_af9dab7e9603ea93 = function() {
    return Fh(function(e, t) {
      return Reflect.get(e, t);
    }, arguments);
  }, r5.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(e, t) {
    return e[t];
  }, r5.wbg.__wbg_instanceof_ArrayBuffer_f3320d2419cd0355 = function(e) {
    let t;
    try {
      t = e instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }, r5.wbg.__wbg_instanceof_Uint8Array_da54ccc9d3e09434 = function(e) {
    let t;
    try {
      t = e instanceof Uint8Array;
    } catch {
      t = false;
    }
    return t;
  }, r5.wbg.__wbg_isArray_51fd9e6422c0a395 = function(e) {
    return Array.isArray(e);
  }, r5.wbg.__wbg_iterator_27b7c8b35ab3e86b = function() {
    return Symbol.iterator;
  }, r5.wbg.__wbg_length_22ac23eaec9d8053 = function(e) {
    return e.length;
  }, r5.wbg.__wbg_length_d45040a40c570362 = function(e) {
    return e.length;
  }, r5.wbg.__wbg_new_1ba21ce319a06297 = function() {
    return new Object();
  }, r5.wbg.__wbg_new_25f239778d6112b9 = function() {
    return new Array();
  }, r5.wbg.__wbg_new_6421f6084cc5bc5a = function(e) {
    return new Uint8Array(e);
  }, r5.wbg.__wbg_new_8a6f238a6ece86ea = function() {
    return new Error();
  }, r5.wbg.__wbg_next_138a17bbf04e926c = function(e) {
    return e.next;
  }, r5.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
    return Fh(function(e) {
      return e.next();
    }, arguments);
  }, r5.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(e, t, n) {
    Uint8Array.prototype.set.call(rR(e, t), n);
  }, r5.wbg.__wbg_set_3f1d0b984ed272ed = function(e, t, n) {
    e[t] = n;
  }, r5.wbg.__wbg_set_7df433eea03a5c14 = function(e, t, n) {
    e[t >>> 0] = n;
  }, r5.wbg.__wbg_stack_0ed75d68575b0f3c = function(e, t) {
    const n = t.stack, i = et(n, B.__wbindgen_malloc, B.__wbindgen_realloc), s = He;
    Zt().setInt32(e + 4 * 1, s, true), Zt().setInt32(e + 4 * 0, i, true);
  }, r5.wbg.__wbg_value_57b7b035e117f7ee = function(e) {
    return e.value;
  }, r5.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(e, t) {
    return Ea(e, t);
  }, r5.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(e) {
    return e;
  }, r5.wbg.__wbindgen_init_externref_table = function() {
    const e = B.__wbindgen_externrefs, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }, r5;
}
function lR(r5, e) {
  return B = r5.exports, sx.__wbindgen_wasm_module = e, An = null, Ms = null, B.__wbindgen_start(), B;
}
async function sx(r5) {
  if (B !== void 0) return B;
  typeof r5 < "u" && (Object.getPrototypeOf(r5) === Object.prototype ? { module_or_path: r5 } = r5 : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof r5 > "u" && (r5 = new URL("/path_planning/assets/pathfinding_wasm_bg-CdVJ-fB-.wasm", import.meta.url));
  const e = aR();
  (typeof r5 == "string" || typeof Request == "function" && r5 instanceof Request || typeof URL == "function" && r5 instanceof URL) && (r5 = fetch(r5));
  const { instance: t, module: n } = await oR(await r5, e);
  return lR(t, n);
}
let Rd = false, Sa = null;
async function uR() {
  if (!Rd) return Sa || (Sa = sx().then(() => {
    Rd = true, console.log("[WASM] Pathfinding module initialized");
  }), Sa);
}
function hR() {
  return Rd;
}
function cR(r5, e, t, n) {
  switch (r5) {
    case "astar":
      return new Ul(e, t, n);
    case "dijkstra":
      return new Id(e, t, n);
    case "bfs":
      return new bd(e, t, n);
    case "dfs":
      return new Cd(e, t, n);
    case "greedy":
      return new Pd(e, t, n);
    case "bidirectional":
      return new Ad(e, t, n);
    default:
      return new Ul(e, t, n);
  }
}
function dR(r5, e) {
  var _a2;
  switch (r5.type) {
    case "start":
      return { type: "start", nodeId: r5.nodeId, node: r5.nodeId ? e.nodes.get(r5.nodeId) : void 0 };
    case "visit":
      return { type: "visit", nodeId: r5.nodeId, node: r5.nodeId ? e.nodes.get(r5.nodeId) : void 0, visitedCount: r5.visitedCount, fromDirection: r5.fromDirection };
    case "complete":
      return { type: "complete", path: ((_a2 = r5.path) == null ? void 0 : _a2.map((t) => ({ id: t.id, lat: t.lat, lon: t.lon }))) ?? [], visitedCount: r5.visitedCount };
    default:
      throw new Error(`Unknown step type: ${r5.type}`);
  }
}
function* fR(r5, e) {
  try {
    for (; !r5.isDone(); ) {
      const t = r5.nextStep(), n = dR(t, e);
      if (yield n, n.type === "complete") return;
    }
  } finally {
    r5.free();
  }
}
let Rn = null, Md = null;
function pR(r5) {
  const e = Array.from(r5.nodes.keys());
  return `${e.length}-${e[0]}-${e[e.length - 1]}`;
}
function mR(r5, e, t, n, i = true) {
  if (i && hR()) try {
    const o = pR(e);
    if (Md !== o || !Rn) {
      Rn == null ? void 0 : Rn.free();
      const l = eR(e);
      Rn = new Fr(l), Md = o, console.log(`[WASM] Created graph with ${Rn.nodeCount()} nodes`);
    }
    const a = cR(r5, Rn, t.id, n.id);
    return fR(a, e);
  } catch (o) {
    console.warn("[WASM] Pathfinding failed, falling back to JS:", o);
  }
  const s = { graph: e, start: t, end: n };
  switch (r5) {
    case "astar":
      return Gg(s);
    case "dijkstra":
      return KP(s);
    case "bfs":
      return qP(s);
    case "dfs":
      return ZP(s);
    case "greedy":
      return QP(s);
    case "bidirectional":
      return JP(s);
    default:
      return Gg(s);
  }
}
function gR() {
  Rn == null ? void 0 : Rn.free(), Rn = null, Md = null;
}
function yR() {
  const [r5, e] = $.useState(false), [t, n] = $.useState(/* @__PURE__ */ new Set()), [i, s] = $.useState([]), [o, a] = $.useState(0), [l, u] = $.useState(50), h = $.useRef(null), c = $.useRef(null), d = $.useRef(null), f = $.useRef(1);
  $.useEffect(() => {
    f.current = Math.max(1, Math.floor(l / 2));
  }, [l]);
  const p = $.useCallback(() => {
    if (h.current) try {
      const m = f.current;
      for (let x = 0; x < m; x++) {
        const w = h.current.next();
        if (w.done) {
          e(false);
          return;
        }
        const S = w.value;
        if (S.type === "visit" && S.nodeId ? (n((T) => new Set(T).add(S.nodeId)), a(S.visitedCount || 0)) : S.type === "complete" && S.path && (s(S.path), a(S.visitedCount || 0)), d.current && d.current(S), S.type === "complete") {
          e(false);
          return;
        }
      }
      c.current = requestAnimationFrame(p);
    } catch (m) {
      console.error("Pathfinding error:", m), e(false);
    }
  }, []), v = $.useCallback((m, x, w, S) => {
    n(/* @__PURE__ */ new Set()), s([]), a(0), h.current = mR(S, m, x, w), e(true), c.current = requestAnimationFrame(p);
  }, [p]), _ = $.useCallback(() => {
    c.current && (cancelAnimationFrame(c.current), c.current = null), e(false);
  }, []), g = $.useCallback(() => {
    _(), n(/* @__PURE__ */ new Set()), s([]), a(0), h.current = null;
  }, [_]), y = $.useCallback((m) => {
    d.current = m;
  }, []);
  return $.useEffect(() => () => {
    c.current && cancelAnimationFrame(c.current);
  }, []), { isRunning: r5, visitedNodes: t, currentPath: i, visitedCount: o, start: v, stop: _, reset: g, speed: l, setSpeed: u, onStep: y };
}
function vR(r5, e) {
  const [t, n] = $.useState(null), [i, s] = $.useState(null), o = $.useCallback((l, u) => {
    if (!r5 || !e) return;
    const h = HP(r5, l, u, e, Ll, Ll, 50);
    h && (t ? i ? (n(h), s(null)) : s(h) : n(h));
  }, [r5, e, t, i]), a = $.useCallback(() => {
    n(null), s(null);
  }, []);
  return { startNode: t, endNode: i, handleClick: o, reset: a, setStartNode: n, setEndNode: s };
}
const _R = "https://nominatim.openstreetmap.org";
async function xR(r5) {
  if (!r5.trim()) return [];
  const e = new URLSearchParams({ q: r5, format: "json", addressdetails: "1", limit: "5", featuretype: "city,town,village" }), t = await fetch(`${_R}/search?${e}`, { headers: { "User-Agent": "PathPlanningVisualizer/1.0" } });
  if (!t.ok) throw new Error("Failed to search for city");
  return (await t.json()).filter((i) => i.class === "place" || i.class === "boundary").map((i) => ({ displayName: i.display_name, lat: parseFloat(i.lat), lon: parseFloat(i.lon), boundingBox: i.boundingbox, osmId: i.osm_id, osmType: i.osm_type }));
}
function wR({ onSelect: r5, disabled: e }) {
  const [t, n] = $.useState(""), [i, s] = $.useState([]), [o, a] = $.useState(false), [l, u] = $.useState(false), h = $.useRef(null), c = $.useRef(null), d = $.useCallback(async (_) => {
    if (!_.trim()) {
      s([]);
      return;
    }
    a(true);
    try {
      const g = await xR(_);
      s(g), u(g.length > 0);
    } catch (g) {
      console.error("Search failed:", g), s([]);
    } finally {
      a(false);
    }
  }, []), f = $.useCallback((_) => {
    const g = _.target.value;
    n(g), h.current && clearTimeout(h.current), h.current = setTimeout(() => {
      d(g);
    }, 300);
  }, [d]), p = $.useCallback((_) => {
    n(_.displayName.split(",")[0]), u(false), s([]), r5(_);
  }, [r5]), v = $.useCallback((_) => {
    _.preventDefault(), i.length > 0 && p(i[0]);
  }, [i, p]);
  return $.useEffect(() => {
    const _ = (g) => {
      c.current && !c.current.contains(g.target) && u(false);
    };
    return document.addEventListener("mousedown", _), () => document.removeEventListener("mousedown", _);
  }, []), R.jsxs("div", { className: "control-group", ref: c, children: [R.jsx("label", { children: "City" }), R.jsxs("form", { className: "city-search", onSubmit: v, children: [R.jsx("input", { type: "text", value: t, onChange: f, placeholder: "Search for a city...", disabled: e, onFocus: () => i.length > 0 && u(true) }), R.jsx("button", { type: "submit", className: "btn btn-primary", disabled: e || o || i.length === 0, children: o ? "..." : "Load" })] }), l && i.length > 0 && R.jsx("div", { style: { position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(0, 0, 0, 0.95)", border: "1px solid rgba(0, 255, 255, 0.3)", borderRadius: "6px", marginTop: "4px", maxHeight: "200px", overflowY: "auto", zIndex: 1e3 }, children: i.map((_, g) => R.jsx("div", { onClick: () => p(_), style: { padding: "10px 14px", cursor: "pointer", borderBottom: g < i.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none", fontSize: "13px", color: "rgba(255,255,255,0.8)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, onMouseEnter: (y) => {
    y.currentTarget.style.background = "rgba(0, 255, 255, 0.1)";
  }, onMouseLeave: (y) => {
    y.currentTarget.style.background = "transparent";
  }, children: _.displayName }, `${_.osmId}-${g}`)) })] });
}
const Yg = [{ id: "astar", name: "A* Search", description: "Optimal pathfinding with heuristic guidance", optimal: true, usesHeuristic: true }, { id: "dijkstra", name: "Dijkstra's Algorithm", description: "Optimal shortest path, explores uniformly", optimal: true, usesHeuristic: false }, { id: "bfs", name: "Breadth-First Search", description: "Finds shortest path by hop count", optimal: true, usesHeuristic: false }, { id: "dfs", name: "Depth-First Search", description: "Explores deeply first, not optimal", optimal: false, usesHeuristic: false }, { id: "greedy", name: "Greedy Best-First", description: "Fast but not optimal, follows heuristic", optimal: false, usesHeuristic: true }, { id: "bidirectional", name: "Bidirectional A*", description: "Searches from both ends simultaneously", optimal: true, usesHeuristic: true }];
function ER({ value: r5, onChange: e, disabled: t }) {
  var _a2;
  return R.jsxs("div", { className: "control-group", children: [R.jsx("label", { children: "Algorithm" }), R.jsx("select", { value: r5, onChange: (n) => e(n.target.value), disabled: t, children: Yg.map((n) => R.jsx("option", { value: n.id, children: n.name }, n.id)) }), R.jsx("div", { style: { fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }, children: (_a2 = Yg.find((n) => n.id === r5)) == null ? void 0 : _a2.description })] });
}
function TR({ canStart: r5, isRunning: e, speed: t, onStart: n, onStop: i, onReset: s, onSpeedChange: o }) {
  return R.jsxs(R.Fragment, { children: [R.jsxs("div", { className: "control-group", children: [R.jsx("label", { children: "Speed" }), R.jsxs("div", { className: "speed-control", children: [R.jsx("input", { type: "range", min: "1", max: "100", value: t, onChange: (a) => o(parseInt(a.target.value)) }), R.jsxs("span", { children: [t, "x"] })] })] }), R.jsxs("div", { className: "button-row", children: [e ? R.jsx("button", { className: "btn", onClick: i, children: "Pause" }) : R.jsx("button", { className: "btn btn-primary", onClick: n, disabled: !r5, children: "Start" }), R.jsx("button", { className: "btn btn-danger", onClick: s, disabled: e, children: "Reset" })] })] });
}
function SR({ visitedCount: r5, pathLength: e }) {
  return R.jsxs("div", { className: "legend", children: [R.jsxs("div", { className: "legend-item", children: [R.jsx("div", { className: "legend-color roads" }), R.jsx("span", { children: "Roads" })] }), R.jsxs("div", { className: "legend-item", children: [R.jsx("div", { className: "legend-color start" }), R.jsx("span", { children: "Start Point" })] }), R.jsxs("div", { className: "legend-item", children: [R.jsx("div", { className: "legend-color end" }), R.jsx("span", { children: "End Point" })] }), R.jsxs("div", { className: "legend-item", children: [R.jsx("div", { className: "legend-color visited" }), R.jsxs("span", { children: ["Visited (", r5, ")"] })] }), R.jsxs("div", { className: "legend-item", children: [R.jsx("div", { className: "legend-color path" }), R.jsxs("span", { children: ["Path (", e, " nodes)"] })] })] });
}
const Kg = [{ name: "Cyan", value: 65535 }, { name: "Magenta", value: 16711808 }, { name: "Green", value: 65280 }, { name: "Orange", value: 16744448 }, { name: "Purple", value: 8388863 }, { name: "Yellow", value: 16776960 }, { name: "Red", value: 16711680 }, { name: "Blue", value: 33023 }], bR = [{ name: "Tron (Default)", theme: { visited: 65535, visitedBackward: 16711808, path: 65535, startMarker: 65280, endMarker: 16711808 } }, { name: "Sunset", theme: { visited: 16744448, visitedBackward: 16711808, path: 16744448, startMarker: 16776960, endMarker: 16711680 } }, { name: "Ocean", theme: { visited: 33023, visitedBackward: 65535, path: 33023, startMarker: 65408, endMarker: 65535 } }, { name: "Neon Purple", theme: { visited: 8388863, visitedBackward: 16711935, path: 8388863, startMarker: 65280, endMarker: 16711935 } }, { name: "Matrix", theme: { visited: 65280, visitedBackward: 65408, path: 65280, startMarker: 65535, endMarker: 65408 } }];
function _s(r5) {
  return "#" + r5.toString(16).padStart(6, "0");
}
function qg(r5) {
  return parseInt(r5.replace("#", ""), 16);
}
function AR({ theme: r5, onChange: e, disabled: t }) {
  const [n, i] = $.useState(false);
  return R.jsxs("div", { className: "color-picker", children: [R.jsxs("button", { className: "color-picker-toggle", onClick: () => i(!n), disabled: t, children: ["Colors ", n ? "\u25B2" : "\u25BC"] }), n && R.jsxs("div", { className: "color-picker-panel", children: [R.jsxs("div", { className: "color-presets", children: [R.jsx("label", { children: "Theme Presets" }), R.jsx("div", { className: "preset-buttons", children: bR.map((s) => R.jsxs("button", { className: "preset-button", onClick: () => e(s.theme), disabled: t, title: s.name, children: [R.jsx("span", { className: "preset-swatch", style: { backgroundColor: _s(s.theme.path) } }), s.name] }, s.name)) })] }), R.jsxs("div", { className: "color-options", children: [R.jsxs("div", { className: "color-option", children: [R.jsx("label", { children: "Path Color" }), R.jsxs("div", { className: "color-swatches", children: [Kg.map((s) => R.jsx("button", { className: `color-swatch ${r5.path === s.value ? "active" : ""}`, style: { backgroundColor: _s(s.value) }, onClick: () => e({ path: s.value, visited: s.value }), disabled: t, title: s.name }, s.value)), R.jsx("input", { type: "color", value: _s(r5.path), onChange: (s) => {
    const o = qg(s.target.value);
    e({ path: o, visited: o });
  }, disabled: t, className: "color-input", title: "Custom color" })] })] }), R.jsxs("div", { className: "color-option", children: [R.jsx("label", { children: "Visited Nodes" }), R.jsxs("div", { className: "color-swatches", children: [Kg.map((s) => R.jsx("button", { className: `color-swatch ${r5.visited === s.value ? "active" : ""}`, style: { backgroundColor: _s(s.value) }, onClick: () => e({ visited: s.value }), disabled: t, title: s.name }, s.value)), R.jsx("input", { type: "color", value: _s(r5.visited), onChange: (s) => e({ visited: qg(s.target.value) }), disabled: t, className: "color-input", title: "Custom color" })] })] })] })] })] });
}
function CR() {
  const r5 = $.useRef(null), e = $.useRef(null), t = $.useRef(null), [n, i] = $.useState({ width: 800, height: 600 }), [s, o] = $.useState(null), [a, l] = $.useState("astar"), [u, h] = $.useState(false), [c, d] = $.useState({ ...ix }), { graph: f, roadSegments: p, bounds: v, isLoading: _, error: g, loadCity: y } = YP(), { isRunning: m, currentPath: x, visitedCount: w, start: S, stop: T, reset: E, speed: I, setSpeed: P, onStep: D } = yR(), { startNode: N, endNode: A, handleClick: C, reset: q } = vR(f, v);
  $.useEffect(() => {
    uR().catch((V) => {
      console.warn("Failed to initialize WASM, will use JS fallback:", V);
    });
  }, []), $.useEffect(() => {
    if (!r5.current || e.current) return;
    const V = r5.current;
    let oe = V.clientWidth, re = V.clientHeight;
    (oe < 100 || re < 100) && (oe = window.innerWidth, re = window.innerHeight - 100);
    const he = new F0({ width: oe, height: re, backgroundColor: 0, antialias: true, resolution: window.devicePixelRatio || 1, autoDensity: true });
    V.appendChild(he.view), e.current = he;
    const _e = new $P(he);
    t.current = _e, i({ width: oe, height: re }), h(true);
  }, []), $.useEffect(() => {
    const V = () => {
      if (!r5.current || !e.current) return;
      const oe = r5.current.clientWidth, re = r5.current.clientHeight;
      i({ width: oe, height: re }), e.current.renderer.resize(oe, re), t.current && t.current.resize(oe, re);
    };
    return window.addEventListener("resize", V), () => window.removeEventListener("resize", V);
  }, []), $.useEffect(() => {
    if (!e.current || !t.current) return;
    const V = e.current.view, oe = t.current, re = (he) => {
      if (_ || m || oe.dragging) return;
      const _e = V.getBoundingClientRect(), rt = n.width / _e.width, Fe = n.height / _e.height, de = (he.clientX - _e.left) * rt, Ae = (he.clientY - _e.top) * Fe, Ce = oe.screenToMap(de, Ae);
      C(Ce.x, Ce.y);
    };
    return V.addEventListener("click", re), () => V.removeEventListener("click", re);
  }, [C, n, _, m]), $.useEffect(() => {
    D((V) => {
      !t.current || !v || V.type === "visit" && V.node && t.current.drawVisitedNode(V.node, V.fromDirection);
    });
  }, [D, v]), $.useEffect(() => {
    if (!t.current || p.length === 0 || !u) return;
    const V = setTimeout(() => {
      t.current && t.current.drawRoads(p);
    }, 100);
    return () => clearTimeout(V);
  }, [p, u]), $.useEffect(() => {
    !t.current || !v || !u || t.current.setBounds(v);
  }, [v, u]), $.useEffect(() => {
    !t.current || !u || t.current.setStartMarker(N);
  }, [N, u]), $.useEffect(() => {
    !t.current || !u || t.current.setEndMarker(A);
  }, [A, u]), $.useEffect(() => {
    !t.current || !u || x.length > 0 && (t.current.drawPath(x), t.current.animatePathFound(600));
  }, [x, u]);
  const J = $.useCallback((V) => {
    d((oe) => ({ ...oe, ...V })), t.current && t.current.setTheme(V);
  }, []), O = $.useCallback(async (V) => {
    o(V), E(), q(), gR(), t.current && t.current.clearAll(), await y(V);
  }, [y, E, q]), M = $.useCallback(() => {
    !f || !N || !A || (t.current && (t.current.resetAlpha(), t.current.clearVisited(), t.current.clearPath()), S(f, N, A, a));
  }, [f, N, A, a, S]), H = $.useCallback(() => {
    E(), q(), t.current && (t.current.resetAlpha(), t.current.clearVisited(), t.current.clearPath());
  }, [E, q]), b = $.useCallback(() => {
    t.current && t.current.zoomIn();
  }, []), U = $.useCallback(() => {
    t.current && t.current.zoomOut();
  }, []), Z = $.useCallback(() => {
    t.current && t.current.resetView();
  }, []), ae = !!f && !!N && !!A && !m;
  return R.jsxs("div", { className: "app", children: [R.jsxs("div", { className: "control-panel", children: [R.jsx("h1", { children: "Path Planning Visualizer" }), R.jsx(wR, { onSelect: O, disabled: _ }), g && R.jsx("div", { className: "error-message", children: g }), R.jsx(ER, { value: a, onChange: l, disabled: m }), R.jsx(TR, { canStart: ae, isRunning: m, speed: I, onStart: M, onStop: T, onReset: H, onSpeedChange: P }), R.jsx(AR, { theme: c, onChange: J, disabled: m }), R.jsxs("div", { className: "status", children: [!s && R.jsx("span", { children: "Search for a city to begin" }), s && !f && !_ && R.jsx("span", { children: "Loading city data..." }), f && !N && R.jsxs("span", { children: ["Click on the map to set ", R.jsx("span", { className: "highlight", children: "start point" })] }), f && N && !A && R.jsxs("span", { children: ["Click on the map to set ", R.jsx("span", { className: "highlight", children: "end point" })] }), f && N && A && !m && x.length === 0 && R.jsxs("span", { children: ["Click ", R.jsx("span", { className: "highlight", children: "Start" }), " to begin pathfinding"] }), m && R.jsxs("span", { children: ["Searching... ", R.jsx("span", { className: "highlight", children: w }), " nodes visited"] }), !m && x.length > 0 && R.jsxs("span", { children: ["Path found! ", R.jsx("span", { className: "highlight", children: x.length }), " nodes, ", R.jsx("span", { className: "highlight", children: w }), " visited"] })] })] }), f && R.jsx(SR, { visitedCount: w, pathLength: x.length }), R.jsx("div", { ref: r5, className: "canvas-container", style: { flex: 1 } }), f && R.jsxs("div", { className: "zoom-controls", children: [R.jsx("button", { onClick: b, title: "Zoom In", children: "+" }), R.jsx("button", { onClick: U, title: "Zoom Out", children: "\u2212" }), R.jsx("button", { onClick: Z, title: "Reset View", children: "\u27F2" })] }), _ && R.jsx("div", { className: "loading-overlay", children: R.jsxs("div", { className: "loading-spinner", children: [R.jsx("div", { className: "spinner" }), R.jsx("span", { className: "loading-text", children: "Loading road data..." })] }) }), !f && !_ && R.jsxs("div", { className: "instructions", children: [R.jsx("p", { children: "Search for a city to visualize path planning algorithms" }), R.jsx("p", { style: { color: "rgba(0, 255, 255, 0.6)" }, children: "on real street networks" })] })] });
}
Bh.createRoot(document.getElementById("root")).render(R.jsx(Tx.StrictMode, { children: R.jsx(CR, {}) }));
