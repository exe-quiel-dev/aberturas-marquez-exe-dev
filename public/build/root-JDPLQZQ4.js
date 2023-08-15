import {
  Link,
  Links,
  Meta,
  Outlet,
  useLocation
} from "/build/_shared/chunk-ZRIOWOYL.js";
import {
  createHotContext
} from "/build/_shared/chunk-CKVHI6DB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/styles/index.css
var styles_default = "/build/_assets/index-N46MWICJ.css";

// app/components/nav.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\nav.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\nav.jsx"
  );
  import.meta.hot.lastModified = "1691094896469.4272";
}
function Nav() {
  _s();
  const location = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "w-full text-white flex justify-between items-center text-lg font-light py-5 md:py-0 px-4 flex-wrap gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: location.pathname === "/" ? "bg-amber-500 rounded p-1" : "hover:text-gray-300 transition-colors hover:cursor-pointer", children: "Inicio" }, void 0, false, {
      fileName: "app/components/nav.jsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/nosotros", className: location.pathname === "/nosotros" ? "bg-amber-500 rounded p-1" : "hover:text-gray-300 transition-colors hover:cursor-pointer", children: "Quienes somos" }, void 0, false, {
      fileName: "app/components/nav.jsx",
      lineNumber: 29,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/puertas", className: location.pathname === "/puertas" ? "bg-amber-500 rounded p-1" : "hover:text-gray-300 transition-colors hover:cursor-pointer", children: "Puertas" }, void 0, false, {
      fileName: "app/components/nav.jsx",
      lineNumber: 30,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/ventanas", className: location.pathname === "/ventanas" ? "bg-amber-500 rounded p-1" : "hover:text-gray-300 transition-colors hover:cursor-pointer", children: "Ventanas" }, void 0, false, {
      fileName: "app/components/nav.jsx",
      lineNumber: 31,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/pvc", className: location.pathname === "/pvc" ? "bg-amber-500 rounded p-1" : "hover:text-gray-300 transition-colors hover:cursor-pointer", children: "Linea pvc" }, void 0, false, {
      fileName: "app/components/nav.jsx",
      lineNumber: 32,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/nav.jsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/nav.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_s(Nav, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
  return [useLocation];
});
_c = Nav;
var nav_default = Nav;
var _c;
$RefreshReg$(_c, "Nav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/react-icons/lib/esm/iconBase.js
var import_react3 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react2 = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react2.default.createContext && import_react2.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react3.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react3.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react3.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react3.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react3.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/ai/index.esm.js
function AiOutlineEnvironment(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M854.6 289.1a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z" } }] })(props);
}
function AiOutlineInstagram(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" } }] })(props);
}
function AiOutlineWhatsApp(props) {
  return GenIcon({ "tag": "svg", "attr": { "t": "1569683925316", "viewBox": "0 0 1024 1024", "version": "1.1" }, "child": [{ "tag": "defs", "attr": {}, "child": [] }, { "tag": "path", "attr": { "d": "M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z" } }, { "tag": "path", "attr": { "d": "M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z" } }] })(props);
}

// public/imgs/logo.png
var logo_default = "/build/_assets/logo-4PXBK5NH.png";

// app/components/header.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\header.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\header.jsx"
  );
  import.meta.hot.lastModified = "1692068506667.0667";
}
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "flex flex-col md:flex-row items-center justify-center bg-slate-900/50 py-5 border-b border-gray-300 sticky top-0 w-full z-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-col items-center justify-center w-44 me-4 container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: logo_default, alt: "Imagen logotipo", className: "w-auto hidden md:inline" }, void 0, false, {
      fileName: "app/components/header.jsx",
      lineNumber: 32,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/components/header.jsx",
      lineNumber: 32,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/header.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(nav_default, {}, void 0, false, {
      fileName: "app/components/header.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-1/3 text-white flex items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "www.youtube.com", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AiOutlineInstagram, { className: "mx-2 w-4 h-4 hover:text-violet-500 transition-colors hover:cursor-pointer" }, void 0, false, {
        fileName: "app/components/header.jsx",
        lineNumber: 36,
        columnNumber: 53
      }, this) }, void 0, false, {
        fileName: "app/components/header.jsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "www.youtube.com", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AiOutlineWhatsApp, { className: "mx-2 w-4 h-4 hover:text-green-500 transition-colors hover:cursor-pointer" }, void 0, false, {
        fileName: "app/components/header.jsx",
        lineNumber: 37,
        columnNumber: 53
      }, this) }, void 0, false, {
        fileName: "app/components/header.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "www.youtube.com", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AiOutlineEnvironment, { className: "mx-2 w-4 h-4 hover:text-red-500 transition-colors hover:cursor-pointer" }, void 0, false, {
        fileName: "app/components/header.jsx",
        lineNumber: 38,
        columnNumber: 53
      }, this) }, void 0, false, {
        fileName: "app/components/header.jsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/header.jsx",
      lineNumber: 35,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/header.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_c2 = Header;
var header_default = Header;
var _c2;
$RefreshReg$(_c2, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/footer.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\footer.jsx"
  );
  import.meta.hot.lastModified = "1691092050288.6787";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto p-10 pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(nav_default, {}, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 25,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c3 = Footer;
var footer_default = Footer;
var _c3;
$RefreshReg$(_c3, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.jsx"
  );
}
function meta() {
  return [{
    charset: "utf-8"
  }, {
    title: "Aberturas Marquez"
  }, {
    description: "Tienda de aberturas online"
  }, {
    viewport: "width=device-width, initial-scale=1.0"
  }];
}
function links() {
  return [{
    rel: "stylesheet",
    href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
  }, {
    rel: "stylesheet",
    href: styles_default
  }, {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }, {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: true
  }, {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
  }];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 58,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}
_c4 = App;
function Document({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 68,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "bg-cyan-900", id: "root", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(header_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(footer_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 73,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 70,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_c22 = Document;
var _c4;
var _c22;
$RefreshReg$(_c4, "App");
$RefreshReg$(_c22, "Document");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-JDPLQZQ4.js.map
