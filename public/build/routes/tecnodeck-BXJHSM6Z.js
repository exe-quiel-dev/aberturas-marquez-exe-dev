import {
  cardpvc_default,
  categoriasPvc_default
} from "/build/_shared/chunk-AWNHQIUF.js";
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

// public/imgs/tecno_deck.jpg
var tecno_deck_default = "/build/_assets/tecno_deck-MFA2L5YI.jpg";

// app/productos/tecnodeck.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\productos\\tecnodeck.js"
  );
  import.meta.hot.lastModified = "1691424429118.6357";
}
var tecnodeck = [
  {
    id: 1,
    nombre: "Tecno Deck",
    info: "Una nueva l\xEDnea de decks sint\xE9ticos que combina el aspecto natural y la c\xE1lida sensaci\xF3n de la madera con la facilidad de uso, la duraci\xF3n y simplicidad de mantenimiento. Un innovador producto desarrollado principalmente para uso exterior, que no necesita tratamiento alguno, no se pudre ni se astilla, es resistente a la radiaci\xF3n ultravioleta, al agua salina, al hielo, al moho y a los insectos. TECNO DECK se destaca por su gran resistencia frente a las inclemencias clim\xE1ticas y su inalterabilidad frente al paso del tiempo.",
    img: tecno_deck_default
  }
];

// app/routes/tecnodeck.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\tecnodeck.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\tecnodeck.jsx"
  );
  import.meta.hot.lastModified = "1693780676588.7832";
}
function meta() {
  return [{
    charset: "utf-8"
  }, {
    title: "Aberturas Marquez - TecnoDeck"
  }, {
    name: "description",
    content: "Tienda de aberturas online"
  }, {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }];
}
function Tecnodeck() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(categoriasPvc_default, { children: tecnodeck.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(cardpvc_default, { nombre: prod.nombre, info: prod.info, img: prod.img }, void 0, false, {
    fileName: "app/routes/tecnodeck.jsx",
    lineNumber: 41,
    columnNumber: 57
  }, this)), categoria: "PVC", subcategoria: "Ventanas Corredizas" }, void 0, false, {
    fileName: "app/routes/tecnodeck.jsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c = Tecnodeck;
var tecnodeck_default = Tecnodeck;
var _c;
$RefreshReg$(_c, "Tecnodeck");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  tecnodeck_default as default,
  meta
};
//# sourceMappingURL=/build/routes/tecnodeck-BXJHSM6Z.js.map
