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

// public/imgs/linea-100-1.jpg
var linea_100_1_default = "/build/_assets/linea-100-1-LP4RNFJN.jpg";

// public/imgs/linea-100-2.jpg
var linea_100_2_default = "/build/_assets/linea-100-2-IRSOKMCU.jpg";

// public/imgs/linea-100-3.jpg
var linea_100_3_default = "/build/_assets/linea-100-3-PXBMA6LI.jpg";

// public/imgs/chapa-doble-sin-inyectar-1.jpg
var chapa_doble_sin_inyectar_1_default = "/build/_assets/chapa-doble-sin-inyectar-1-AVJTP3Y2.jpg";

// app/productos/puertas_doble_ch.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\productos\\puertas_doble_ch.js"
  );
  import.meta.hot.lastModified = "1691097228082.197";
}
var chapaDoble = [
  {
    id: 1,
    nombre: "Linea 100 marco pesado - Mod 100 / 110 / 112",
    categoria: "Chapa doble inyectada con poliuretano expandido de alta densidad",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa B.W.G N\xBA 22 (Opcional barral y vistas de acero inox)",
    bisagras: "Municion",
    cerradura: "Com\xFAn sin combinaci\xF3n",
    img: linea_100_1_default
  },
  {
    id: 2,
    nombre: "Linea 100 marco pesado - Mod 126 / 140 / 142",
    categoria: "Chapa doble inyectada con poliuretano expandido de alta densidad",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa B.W.G N\xBA 22 (Opcional barral y vistas de acero inox)",
    bisagras: "Municion",
    cerradura: "Com\xFAn sin combinaci\xF3n",
    img: linea_100_2_default
  },
  {
    id: 3,
    nombre: "Linea 100 marco pesado - Mod 143 / 141 / 146",
    categoria: "Chapa doble inyectada con poliuretano expandido de alta densidad",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa B.W.G N\xBA 22 (Opcional barral y vistas de acero inox)",
    bisagras: "Municion",
    cerradura: "Com\xFAn sin combinaci\xF3n",
    img: linea_100_3_default
  },
  {
    id: 4,
    nombre: "Linea 400 marco pesado - Mod 420 / 460",
    categoria: "Chapa doble sin inyectar",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa B.W.G N\xBA 22",
    bisagras: "Municion",
    cerradura: "No especificado",
    img: chapa_doble_sin_inyectar_1_default
  }
];

// app/routes/doblechapa.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\doblechapa.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\doblechapa.jsx"
  );
  import.meta.hot.lastModified = "1691096954578.752";
}
function Doblechapa() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "min-h-screen bg-ch-simple py-10 border-b border-gray-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow", children: "Puertas chapa doble" }, void 0, false, {
      fileName: "app/routes/doblechapa.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-wrap lg:flex-row items-center justify-center gap-6 container mx-auto min-h-screen", children: chapaDoble.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { nombre: puerta.nombre, marco: puerta.marco, hoja: puerta.hoja, bisagras: puerta.bisagras, cerradura: puerta.cerradura, img: puerta.img }, void 0, false, {
      fileName: "app/routes/doblechapa.jsx",
      lineNumber: 30,
      columnNumber: 35
    }, this)) }, void 0, false, {
      fileName: "app/routes/doblechapa.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/doblechapa.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = Doblechapa;
var doblechapa_default = Doblechapa;
var _c;
$RefreshReg$(_c, "Doblechapa");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  doblechapa_default as default
};
//# sourceMappingURL=/build/routes/doblechapa-MZ5ZQEN2.js.map
