import {
  createHotContext
} from "/build/_shared/chunk-CKVHI6DB.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/cardpvc.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\cardpvc.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\cardpvc.jsx"
  );
  import.meta.hot.lastModified = "1691420624458.2766";
}
function Cardpvc({
  nombre,
  info,
  img
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center w-full min-h-full bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: img, alt: nombre, className: "w-full" }, void 0, false, {
      fileName: "app/components/cardpvc.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 w-full text-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-bold uppercase text-xl mb-4 border-b border-gray-200 text-center", children: nombre }, void 0, false, {
        fileName: "app/components/cardpvc.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold py-2", children: [
        "Descripcion: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-light text-sm md:text-lg", children: info }, void 0, false, {
          fileName: "app/components/cardpvc.jsx",
          lineNumber: 31,
          columnNumber: 54
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/cardpvc.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/cardpvc.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/cardpvc.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/cardpvc.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = Cardpvc;
var cardpvc_default = Cardpvc;
var _c;
$RefreshReg$(_c, "Cardpvc");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/categoriasPvc.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\categoriasPvc.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\categoriasPvc.jsx"
  );
  import.meta.hot.lastModified = "1692199237527.5068";
}
function CategoriasPvc({
  children,
  categoria,
  subcategoria
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "min-h-screen bg-categorias border-b border-gray-300 flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black pb-4 text-white text-center w-full drop-shadow bg-gray-600/50 py-6", children: categoria }, void 0, false, {
      fileName: "app/components/categoriasPvc.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items center justify-items-center gap-4 w-full min-h-screen bg-gray-600/50 py-10 px-5 rounded", children }, void 0, false, {
      fileName: "app/components/categoriasPvc.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/categoriasPvc.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c2 = CategoriasPvc;
var categoriasPvc_default = CategoriasPvc;
var _c2;
$RefreshReg$(_c2, "CategoriasPvc");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  cardpvc_default,
  categoriasPvc_default
};
//# sourceMappingURL=/build/_shared/chunk-AWNHQIUF.js.map
