import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CKVHI6DB.js";
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
  import.meta.hot.lastModified = "1691096089484.303";
}
var Card = ({
  nombre,
  marco,
  hoja,
  bisagras,
  cerradura,
  img
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center w-4/5 lg:w-1/3 bg-white shadow", children: [
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

export {
  card_default
};
//# sourceMappingURL=/build/_shared/chunk-EJQCBRAT.js.map
