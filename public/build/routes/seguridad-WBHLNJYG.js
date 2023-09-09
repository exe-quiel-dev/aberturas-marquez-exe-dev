import {
  card_default
} from "/build/_shared/chunk-5AYT3QIO.js";
import {
  categorias_default
} from "/build/_shared/chunk-XTBCWN6Y.js";
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
var puertas_de_seguridad_1_default = "/build/_assets/puertas-de-seguridad-1-TVEZNEF4.jpg";

// public/imgs/2000-1.png
var __default = "/build/_assets/2000-1-Q4HPLTXK.png";

// public/imgs/2000-2.png
var __default2 = "/build/_assets/2000-2-CVFPMY3G.png";

// public/imgs/2000-3.png
var __default3 = "/build/_assets/2000-3-4NJDQOKB.png";

// public/imgs/2000-4.png
var __default4 = "/build/_assets/2000-4-SXLSZ2PX.png";

// app/productos/puertas_seguridad.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\productos\\puertas_seguridad.js"
  );
  import.meta.hot.lastModified = "1694052694000";
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
  },
  {
    id: 2,
    nombre: "Linea 2000",
    categoria: "Chapa doble inyectada con poliuretano expandido de alta densidad",
    marco: " - ",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "A bolilla",
    cerradura: "2 Pernos superiores - 2 Inferiores - 4 Centrales - 3 Pernos fijos del lateral de las bisagras / Llave codificada",
    img: __default
  },
  {
    id: 3,
    nombre: "Linea 2000",
    categoria: "Chapa doble inyectada con poliuretano expandido de alta densidad",
    marco: " - ",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "A bolilla",
    cerradura: "2 Pernos superiores - 2 Inferiores - 4 Centrales - 3 Pernos fijos del lateral de las bisagras / Llave codificada",
    img: __default2
  },
  {
    id: 4,
    nombre: "Linea 2000",
    categoria: "Chapa doble inyectada con poliuretano expandido de alta densidad",
    marco: " - ",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "A bolilla",
    cerradura: "2 Pernos superiores - 2 Inferiores - 4 Centrales - 3 Pernos fijos del lateral de las bisagras / Llave codificada",
    img: __default3
  },
  {
    id: 5,
    nombre: "Linea 2000",
    categoria: "Chapa doble inyectada con poliuretano expandido de alta densidad",
    marco: " - ",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "A bolilla",
    cerradura: "2 Pernos superiores - 2 Inferiores - 4 Centrales - 3 Pernos fijos del lateral de las bisagras / Llave codificada",
    img: __default4
  },
  {
    id: 6,
    nombre: "Linea 2000",
    categoria: "Chapa doble inyectada con poliuretano expandido de alta densidad",
    marco: " - ",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "A bolilla",
    cerradura: "2 Pernos superiores - 2 Inferiores - 4 Centrales - 3 Pernos fijos del lateral de las bisagras / Llave codificada",
    img: __default4
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
  import.meta.hot.lastModified = "1694052694000";
}
function meta() {
  return [{
    charset: "utf-8"
  }, {
    title: "Aberturas Marquez - Seguridad"
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
//# sourceMappingURL=/build/routes/seguridad-WBHLNJYG.js.map
