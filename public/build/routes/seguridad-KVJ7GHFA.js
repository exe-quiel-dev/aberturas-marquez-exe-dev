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

// public/imgs/puertas-de-seguridad-1.jpg
var puertas_de_seguridad_1_default = "/build/_assets/puertas-de-seguridad-1-M2EOA4Y2.jpg";

// app/productos/puertas_seguridad.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\productos\\puertas_seguridad.js"
  );
  import.meta.hot.lastModified = "1691354007503.8274";
}
var seguridad = [
  {
    id: 1,
    nombre: "Lineas 510 - 710 - 111 - 121 - 145",
    categoria: "Chapa doble inyectada con poliuretano expandido de alta densidad",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa B.W.G N\xBA 18 (Opcional barral y vistas de acero inox)",
    bisagras: "4 Cerraduras munici\xF3n reforzadas de 124 x 45 x 3 mm",
    cerradura: "Dos cerrojos de seguridad doble paleta",
    img: puertas_de_seguridad_1_default
  }
];

// app/routes/seguridad.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\seguridad.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\seguridad.jsx"
  );
  import.meta.hot.lastModified = "1693047740902.9683";
}
function meta() {
  return [{
    charset: "utf-8"
  }, {
    title: "Aberturas Marquez"
  }, {
    name: "description",
    content: "Tienda de aberturas online"
  }, {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }];
}
function Seguridad() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(categorias_default, { children: seguridad.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { nombre: puerta.nombre, marco: puerta.marco, hoja: puerta.hoja, bisagras: puerta.bisagras, cerradura: puerta.cerradura, img: puerta.img }, void 0, false, {
    fileName: "app/routes/seguridad.jsx",
    lineNumber: 41,
    columnNumber: 56
  }, this)), categoria: "Puertas de seguridad" }, void 0, false, {
    fileName: "app/routes/seguridad.jsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c = Seguridad;
var seguridad_default = Seguridad;
var _c;
$RefreshReg$(_c, "Seguridad");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  seguridad_default as default,
  meta
};
//# sourceMappingURL=/build/routes/seguridad-KVJ7GHFA.js.map
