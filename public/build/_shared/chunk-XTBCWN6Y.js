import {
  createHotContext
} from "/build/_shared/chunk-CKVHI6DB.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/categorias.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
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
  import.meta.hot.lastModified = "1694052694000";
}
var Categorias = ({
  children,
  categoria,
  subcategoria
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "min-h-screen bg-categorias border-b border-gray-300 flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black py-6 text-white text-center w-full drop-shadow bg-slate-600/50", children: categoria }, void 0, false, {
      fileName: "app/components/categorias.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-4 w-full min-h-screen bg-slate-600/50 py-10 px-5 rounded", children }, void 0, false, {
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
_c = Categorias;
var categorias_default = Categorias;
var _c;
$RefreshReg$(_c, "Categorias");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  categorias_default
};
//# sourceMappingURL=/build/_shared/chunk-XTBCWN6Y.js.map
