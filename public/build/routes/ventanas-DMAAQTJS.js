import {
  card_default,
  categorias_default
} from "/build/_shared/chunk-FB7R36IV.js";
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

// app/productos/ventanas.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\productos\\ventanas.js"
  );
  import.meta.hot.lastModified = "1693391645274.5977";
}
var ventanas = [
  {
    id: 1,
    nombre: "",
    desc: "",
    info: "",
    img: ""
  }
];

// app/routes/ventanas.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\ventanas.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\ventanas.jsx"
  );
  import.meta.hot.lastModified = "1693391687149.0095";
}
function Ventanas() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(categorias_default, { children: ventanas.map((ventana) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { nombre: ventana.nombre, marco: ventana.marco, hoja: ventana.hoja, bisagras: ventana.bisagras, cerradura: ventana.cerradura, img: ventana.img }, void 0, false, {
    fileName: "app/routes/ventanas.jsx",
    lineNumber: 28,
    columnNumber: 56
  }, this)), categoria: "Puertas chapa simple" }, void 0, false, {
    fileName: "app/routes/ventanas.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = Ventanas;
var ventanas_default = Ventanas;
var _c;
$RefreshReg$(_c, "Ventanas");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ventanas_default as default
};
//# sourceMappingURL=/build/routes/ventanas-DMAAQTJS.js.map
