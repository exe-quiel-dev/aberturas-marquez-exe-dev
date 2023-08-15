import {
  Link
} from "/build/_shared/chunk-ZRIOWOYL.js";
import {
  createHotContext
} from "/build/_shared/chunk-CKVHI6DB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/pvc.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\pvc.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\pvc.jsx"
  );
  import.meta.hot.lastModified = "1692068605146.5784";
}
function meta() {
  return [{
    title: "Aberturas Marquez - PVC",
    description: "Venta de aberturas"
  }];
}
function Pvc() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "min-h-screen flex flex-col items-center justify-center bg-categorias", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow", children: "PVC" }, void 0, false, {
      fileName: "app/routes/pvc.jsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 items-center justify-items-center p-10 w-full gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/ventanasPvc", className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full", children: "Ventanas" }, void 0, false, {
        fileName: "app/routes/pvc.jsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tecnodeck", className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full", children: "Tecno Deck" }, void 0, false, {
        fileName: "app/routes/pvc.jsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/zocalos", className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full", children: "Zocalos" }, void 0, false, {
        fileName: "app/routes/pvc.jsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/pvc.jsx",
      lineNumber: 33,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/pvc.jsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/pvc.jsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/pvc.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = Pvc;
var pvc_default = Pvc;
var _c;
$RefreshReg$(_c, "Pvc");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  pvc_default as default,
  meta
};
//# sourceMappingURL=/build/routes/pvc-6GBICGIG.js.map
