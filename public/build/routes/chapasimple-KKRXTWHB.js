import {
  simple_chapa_linea_100_default
} from "/build/_shared/chunk-4C27JRJE.js";
import {
  card_default
} from "/build/_shared/chunk-EJQCBRAT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CKVHI6DB.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// public/imgs/chapa-simple-estampado-econocmico.jpg
var chapa_simple_estampado_econocmico_default = "/build/_assets/chapa-simple-estampado-econocmico-O4EOPGY6.jpg";

// public/imgs/chapa-simple-linea-300.jpg
var chapa_simple_linea_300_default = "/build/_assets/chapa-simple-linea-300-6SGY6CEJ.jpg";

// public/imgs/chapa-simple-linea-800.jpg
var chapa_simple_linea_800_default = "/build/_assets/chapa-simple-linea-800-YPFHON3E.jpg";

// app/productos/puertas_ch_simple.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\productos\\puertas_ch_simple.js"
  );
  import.meta.hot.lastModified = "1691092074505.8445";
}
var chapaSimple = [
  {
    id: 1,
    nombre: "Puerta chapa simple estampada economica - Mod 525 / 925 / 983",
    categoria: "Chapa simple",
    marco: "Chapa B.W.G N\xBA 24",
    hoja: "Chapa B.W.G N\xBA 24",
    bisagras: "Pomelas",
    cerradura: "Com\xFAn sin combinaci\xF3n",
    img: chapa_simple_estampado_econocmico_default
  },
  {
    id: 2,
    nombre: "Puerta chapa simple - Mod 840 / 860 / 861 / 880",
    categoria: "Chapa simple",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa B.W.G N\xBA 22",
    bisagras: "Municion",
    cerradura: "De seguridad doble paleta",
    img: chapa_simple_linea_800_default
  },
  {
    id: 3,
    nombre: "Puerta chapa simple - Mod 525 (ciega) / 925 / 983 (ciega)",
    categoria: "Chapa simple",
    marco: "Chapa B.W.G N\xBA 24",
    hoja: "Chapa B.W.G N\xBA 24",
    bisagras: "Pomelas",
    cerradura: "Comun sin combinacion",
    img: chapa_simple_linea_300_default
  },
  {
    id: 4,
    nombre: "Puerta chapa simple Linea 100 marco pesado",
    categoria: "Chapa simple",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa B.W.G N\xBA 22 (vistas de acero inox. opcional)",
    bisagras: "Municion",
    cerradura: "De seguridad doble paleta",
    img: simple_chapa_linea_100_default
  }
];

// app/routes/chapasimple.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\chapasimple.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\chapasimple.jsx"
  );
  import.meta.hot.lastModified = "1691167437630.5273";
}
function Chapasimple() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "min-h-screen bg-ch-simple py-10 border-b border-gray-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow", children: "Puertas chapa simple" }, void 0, false, {
      fileName: "app/routes/chapasimple.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-wrap lg:flex-row items-center justify-center gap-6 container mx-auto min-h-screen bg-gray-100/75 py-10", children: chapaSimple.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { nombre: puerta.nombre, marco: puerta.marco, hoja: puerta.hoja, bisagras: puerta.bisagras, cerradura: puerta.cerradura, img: puerta.img }, void 0, false, {
      fileName: "app/routes/chapasimple.jsx",
      lineNumber: 30,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/chapasimple.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/chapasimple.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = Chapasimple;
var chapasimple_default = Chapasimple;
var _c;
$RefreshReg$(_c, "Chapasimple");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  chapasimple_default as default
};
//# sourceMappingURL=/build/routes/chapasimple-KKRXTWHB.js.map
