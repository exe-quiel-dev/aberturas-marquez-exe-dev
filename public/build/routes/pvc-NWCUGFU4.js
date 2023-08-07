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
  import.meta.hot.lastModified = "1691424760927.4336";
}
function Pvc() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "min-h-screen flex flex-col items-center justify-center bg-categorias", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-400/50 flex flex-col items-center justify-center p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow", children: "PVC" }, void 0, false, {
      fileName: "app/routes/pvc.jsx",
      lineNumber: 26,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-3 items-center justify-items-center p-10 w-full gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/ventanasPvc", className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full", children: "Ventanas" }, void 0, false, {
        fileName: "app/routes/pvc.jsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/tecnodeck", className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full", children: "Tecno Deck" }, void 0, false, {
        fileName: "app/routes/pvc.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/zocalos", className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full", children: "Zocalos" }, void 0, false, {
        fileName: "app/routes/pvc.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/pvc.jsx",
      lineNumber: 27,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/pvc.jsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/pvc.jsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/pvc.jsx",
    lineNumber: 23,
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
  pvc_default as default
};
//# sourceMappingURL=/build/routes/pvc-NWCUGFU4.js.map
