import {
  cardpvc_default,
  categoriasPvc_default
} from "/build/_shared/chunk-CFCHPMEZ.js";
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

// public/imgs/tecno-zocalos-02.png
var tecno_zocalos_02_default = "/build/_assets/tecno-zocalos-02-YVTUOCWS.png";

// app/productos/zocalos.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\productos\\zocalos.js"
  );
  import.meta.hot.lastModified = "1691424649076.3318";
}
var zocalos = [
  {
    id: 1,
    nombre: "Tecno Zocalos",
    info: "Fabricados con todo el know how de TECNOPERFILES en PVC, con la m\xE1xima calidad y tecnolog\xEDa. Para todo tipo de ambientes, inclusive donde se extreman condiciones de salubridad e higiene. Se pueden cortar, ingletar, atornillar o pegar con silicona facilitando el montaje, como los z\xF3calos tradicionales de madera o mdf, pero con las ventajas del PVC. Dise\xF1o compuesto por dos piezas: una base m\xE1s embellecedor, permitiendo una segunda funci\xF3n de cable canal y brindando resistencia a los impactos.",
    img: tecno_zocalos_02_default
  }
];

// app/routes/zocalos.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\zocalos.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\zocalos.jsx"
  );
  import.meta.hot.lastModified = "1691424725204.4707";
}
function Zocalos() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(categoriasPvc_default, { children: zocalos.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(cardpvc_default, { nombre: prod.nombre, info: prod.info, img: prod.img }, void 0, false, {
    fileName: "app/routes/zocalos.jsx",
    lineNumber: 28,
    columnNumber: 55
  }, this)), categoria: "PVC", subcategoria: "Ventanas Corredizas" }, void 0, false, {
    fileName: "app/routes/zocalos.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = Zocalos;
var zocalos_default = Zocalos;
var _c;
$RefreshReg$(_c, "Zocalos");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  zocalos_default as default
};
//# sourceMappingURL=/build/routes/zocalos-OFDGCKVM.js.map
