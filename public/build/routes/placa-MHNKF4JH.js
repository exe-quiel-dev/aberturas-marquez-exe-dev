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

// public/imgs/PINO-MARC-DE-ALUM-min-800x800.png
var PINO_MARC_DE_ALUM_min_800x800_default = "/build/_assets/PINO-MARC-DE-ALUM-min-800x800-ATJQ4OF2.png";

// public/imgs/CEDRO-MARCO-DE-ALUM-min-800x800.png
var CEDRO_MARCO_DE_ALUM_min_800x800_default = "/build/_assets/CEDRO-MARCO-DE-ALUM-min-800x800-EYG4V5L3.png";

// public/imgs/Copia-de-PRESTIGE-ALUM-2-min-800x800.png
var Copia_de_PRESTIGE_ALUM_2_min_800x800_default = "/build/_assets/Copia-de-PRESTIGE-ALUM-2-min-800x800-M7M7WZQC.png";

// app/productos/puertas_placa.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\productos\\puertas_placa.js"
  );
  import.meta.hot.lastModified = "1691354271021.121";
}
var placa = [
  {
    id: 1,
    nombre: "Linea pino",
    categoria: "Puerta placa",
    marco: "Chapa BWG N\xB0 24 Y  N\xB020: de 12 cm y 15 cm / De aluminio: 7cm y 12cm / De madera (pino finger): 12cm y 15cm",
    hoja: "Pino, calidad XX - 60 / 70 / 80 cm.",
    bisagras: " - ",
    cerradura: "Simple paleta con 1 llave y 2 bocallaves",
    img: PINO_MARC_DE_ALUM_min_800x800_default
  },
  {
    id: 2,
    nombre: "Linea cedro",
    categoria: "Puerta placa",
    marco: "Chapa BWG N\xB0 24 Y  N\xB020: de 12 cm y 15 cm / De aluminio: 7cm y 12cm / De madera (pino finger): 12cm y 15cm",
    hoja: "Pino, calidad XX - 60 / 70 / 80 cm.",
    bisagras: " - ",
    cerradura: "Simple paleta con 1 llave y 2 bocallaves",
    img: CEDRO_MARCO_DE_ALUM_min_800x800_default
  },
  {
    id: 3,
    nombre: "Linea Crafmaster",
    categoria: "Puerta placa",
    marco: "Chapa BWG N\xB0 24 Y  N\xB020: de 12 cm y 15 cm / De aluminio: 7cm y 12cm / De madera (pino finger): 12cm y 15cm",
    hoja: "Pino, calidad XX - 60 / 70 / 80 cm.",
    bisagras: " - ",
    cerradura: "Simple paleta con 1 llave y 2 bocallaves",
    img: Copia_de_PRESTIGE_ALUM_2_min_800x800_default
  }
];

// app/routes/placa.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\placa.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\placa.jsx"
  );
  import.meta.hot.lastModified = "1691431220499.028";
}
function meta() {
  return [{
    title: "Aberturas Marquez - Puertas Placa",
    description: "Venta de aberturas"
  }];
}
function Placa() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(categorias_default, { children: placa.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { nombre: puerta.nombre, marco: puerta.marco, hoja: puerta.hoja, bisagras: puerta.bisagras, cerradura: puerta.cerradura, img: puerta.img }, void 0, false, {
    fileName: "app/routes/placa.jsx",
    lineNumber: 34,
    columnNumber: 52
  }, this)), categoria: "Puertas placa" }, void 0, false, {
    fileName: "app/routes/placa.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c = Placa;
var placa_default = Placa;
var _c;
$RefreshReg$(_c, "Placa");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  placa_default as default,
  meta
};
//# sourceMappingURL=/build/routes/placa-MHNKF4JH.js.map
