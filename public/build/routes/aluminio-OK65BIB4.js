import {
  card_default,
  categorias_default
} from "/build/_shared/chunk-HATNZKE2.js";
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

// public/imgs/PA301-min-800x800.png
var PA301_min_800x800_default = "/build/_assets/PA301-min-800x800-AWD6CQLG.png";

// public/imgs/PA302-min-800x800.png
var PA302_min_800x800_default = "/build/_assets/PA302-min-800x800-BSMHRTFD.png";

// public/imgs/PA303-min-800x800.png
var PA303_min_800x800_default = "/build/_assets/PA303-min-800x800-5JRE24BE.png";

// app/productos/puertas_aluminio.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\productos\\puertas_aluminio.js"
  );
  import.meta.hot.lastModified = "1691414812963.855";
}
var aluminio = [
  {
    id: 1,
    nombre: "Puerta de aluminio - Mod PA-301",
    categoria: " - ",
    marco: " - ",
    hoja: "Hoja simple de 0,80 x 2,00 mts",
    bisagras: " - ",
    cerradura: " - ",
    img: PA301_min_800x800_default
  },
  {
    id: 2,
    nombre: "Puerta de aluminio - Mod PA-302",
    categoria: " - ",
    marco: " - ",
    hoja: "De hoja simple y modelos premium de doble hoja de 0,80 x 2,00 mts",
    bisagras: " - ",
    cerradura: " - ",
    img: PA302_min_800x800_default
  },
  {
    id: 3,
    nombre: "Puerta de aluminio - Mod PA-303",
    categoria: " - ",
    marco: " - ",
    hoja: "Hoja simple de 0,80 x 2,00 mts - 1/2 vidrio colocado",
    bisagras: " - ",
    cerradura: " - ",
    img: PA303_min_800x800_default
  },
  {
    id: 4,
    nombre: "Puerta de aluminio - Mod PA-304",
    categoria: " - ",
    marco: " - ",
    hoja: "Hoja simple de 0,80 x 2,00 mts",
    bisagras: " - ",
    cerradura: " - ",
    img: PA301_min_800x800_default
  }
];

// app/routes/aluminio.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\aluminio.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\aluminio.jsx"
  );
  import.meta.hot.lastModified = "1691414878981.2605";
}
function Aluminio() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(categorias_default, { children: aluminio.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { nombre: puerta.nombre, marco: puerta.marco, hoja: puerta.hoja, bisagras: puerta.bisagras, cerradura: puerta.cerradura, img: puerta.img }, void 0, false, {
    fileName: "app/routes/aluminio.jsx",
    lineNumber: 28,
    columnNumber: 55
  }, this)), categoria: "Puertas chapa simple" }, void 0, false, {
    fileName: "app/routes/aluminio.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = Aluminio;
var aluminio_default = Aluminio;
var _c;
$RefreshReg$(_c, "Aluminio");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  aluminio_default as default
};
//# sourceMappingURL=/build/routes/aluminio-OK65BIB4.js.map
