import {
  createHotContext
} from "/build/_shared/chunk-CKVHI6DB.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/card.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\card.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\card.jsx"
  );
  import.meta.hot.lastModified = "1692051286525.083";
}
var Card = ({
  nombre,
  marco,
  hoja,
  bisagras,
  cerradura,
  img
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center w-full h-full bg-white shadow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: img, alt: nombre, className: "w-full" }, void 0, false, {
      fileName: "app/components/card.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 w-full text-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-bold uppercase text-xl mb-4 border-b border-gray-200 text-center", children: nombre }, void 0, false, {
        fileName: "app/components/card.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 items-center text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold py-2", children: [
          "Marco: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-light", children: marco }, void 0, false, {
            fileName: "app/components/card.jsx",
            lineNumber: 34,
            columnNumber: 48
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/card.jsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold py-2", children: [
          "Hoja: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-light", children: hoja }, void 0, false, {
            fileName: "app/components/card.jsx",
            lineNumber: 35,
            columnNumber: 47
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/card.jsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold py-2", children: [
          "Bisagras: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-light", children: bisagras }, void 0, false, {
            fileName: "app/components/card.jsx",
            lineNumber: 36,
            columnNumber: 51
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/card.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold py-2", children: [
          "Cerradura: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-light", children: cerradura }, void 0, false, {
            fileName: "app/components/card.jsx",
            lineNumber: 37,
            columnNumber: 52
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/card.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/card.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/card.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/card.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c = Card;
var card_default = Card;
var _c;
$RefreshReg$(_c, "Card");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/categorias.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\categorias.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\categorias.jsx"
  );
  import.meta.hot.lastModified = "1692095855907.387";
}
var Categorias = ({
  children,
  categoria,
  subcategoria
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "min-h-screen bg-categorias border-b border-gray-300 flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black py-6 text-white text-center w-full drop-shadow bg-slate-600/50", children: categoria }, void 0, false, {
      fileName: "app/components/categorias.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-4 w-full min-h-screen bg-slate-600/50 py-10 px-5 rounded", children }, void 0, false, {
      fileName: "app/components/categorias.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/categorias.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c2 = Categorias;
var categorias_default = Categorias;
var _c2;
$RefreshReg$(_c2, "Categorias");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  card_default,
  categorias_default
};
//# sourceMappingURL=/build/_shared/chunk-QYHZSCTZ.js.map
