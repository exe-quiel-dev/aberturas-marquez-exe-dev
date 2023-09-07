import {
  cardPlegadizasNobel_default
} from "/build/_shared/chunk-HGP47JZS.js";
import {
  categorias_default
} from "/build/_shared/chunk-DA27BJI7.js";
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

// public/imgs/modena--corrediza.jpg
var modena_corrediza_default = "/build/_assets/modena--corrediza-MTIVZL63.jpg";

// public/imgs/A30.webp
var A30_default = "/build/_assets/A30-HWJNDSIY.webp";

// public/imgs/herrero-corrediza.jpg
var herrero_corrediza_default = "/build/_assets/herrero-corrediza-DWNG5E5M.jpg";

// public/imgs/rotonda-corrediza.jpg
var rotonda_corrediza_default = "/build/_assets/rotonda-corrediza-R62ILDX3.jpg";

// public/imgs/rotonda_640.jpg
var rotonda_640_default = "/build/_assets/rotonda_640-H42B567N.jpg";

// app/productos/ventanas.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\productos\\ventanas.js"
  );
  import.meta.hot.lastModified = "1694048415596.0347";
}
var ventanas = [
  {
    id: 3,
    nombre: "L\xEDnea Herrero",
    caracteristicas: "Es una l\xEDnea de dise\xF1o cl\xE1sico y el m\xE1s tradicional en el mercado de aberturas de aluminio. Las mismas pueden ser confeccionadas con vidrio entero o vidrio repartido, con un sistema de cierre central manual y tiradores laterales. Posee un tipo de perfileria (liviana ) que contiene menos espesor que las dem\xE1s l\xEDneas, pero con la misma funcionalidad. Es un Sistema de Carpinter\xEDa liviano y dise\xF1ado para satisfacer las necesidades b\xE1sicas del segmento en viviendas unifamiliares. Est\xE1 l\xEDnea permite una baja considerable en los costos finales a un valor extremadamente accesible.",
    img: herrero_corrediza_default
  },
  {
    id: 1,
    nombre: "L\xEDnea Modena",
    caracteristicas: "Posee un dise\xF1o moderno y gran equilibrio en la relaci\xF3n peso-resistencia. Posibilita gran variedad de combinaciones. Se puede utilizar vidrio simple o Doble Vidriado Herm\xE9tico (DVH). Todas las aberturas son doble contacto y en la ventana de abrir tiene la opci\xF3n de utilizar c\xE1mara condensadora de presiones, lo que le otorga gran resistencia a la infiltraci\xF3n de agua y aire.",
    img: modena_corrediza_default
  },
  {
    id: 2,
    nombre: "L\xEDnea A30",
    caracteristicas: "Destacado por su dise\xF1o y excelente performance. Sus amplias posibilidades constructivas y la variedad de tipolog\xEDas, ofrecen una herramienta de alta prestaci\xF3n en la realizaci\xF3n de los proyectos. Se puede utilizar vidrio simple o Doble Vidriado Herm\xE9tico (DVH), en las corredizas de aplicaci\xF3n encapsulada y en las batientes con contravidrio de borde recto o curvo. Resiste el paso del tiempo, sus perfiles no requieren ning\xFAn tipo de mantenimiento y admiten tratamiento superficial como el pintado o anodizado. A30 New s\xF3lo admite accesorios de alta calidad, lo cual garantiza un \xF3ptimo funcionamiento de las aberturas en su uso cotidiano.",
    img: A30_default
  },
  {
    id: 4,
    nombre: "L\xEDnea Rotonda 750",
    caracteristicas: "Es la l\xEDnea de mediana prestaci\xF3n m\xE1s completa del mercado. Vers\xE1til, resistente y adaptable a m\xFAltiples requerimientos, la Serie 750 se ha redefinido incluyendo en su dise\xF1o las formas redondeadas que caracterizan a la l\xEDnea",
    img: rotonda_corrediza_default
  },
  {
    id: 5,
    nombre: "L\xEDnea Rotonda 640",
    caracteristicas: "La Serie 640 responde a las nuevas tendencias de los profesionales de la arquitectura. Su dise\xF1o de anticipaci\xF3n y sus terminaciones son un ejemplo de la evoluci\xF3n de este sistema. Delicadas formas redondas, robustez y sobriedad, visi\xF3n coplanar: caracter\xEDsticas de un producto superior.",
    img: rotonda_640_default
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
  import.meta.hot.lastModified = "1693781794396.224";
}
function meta() {
  return [{
    charset: "utf-8"
  }, {
    title: "Aberturas Marquez - Ventanas"
  }, {
    name: "description",
    content: "Tienda de aberturas online"
  }, {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }];
}
function Ventanas() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(categorias_default, { children: ventanas.map((ventana) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(cardPlegadizasNobel_default, { nombre: ventana.nombre, img: ventana.img, caracteristicas: ventana.caracteristicas }, void 0, false, {
    fileName: "app/routes/ventanas.jsx",
    lineNumber: 41,
    columnNumber: 56
  }, this)), categoria: "Puertas chapa simple" }, void 0, false, {
    fileName: "app/routes/ventanas.jsx",
    lineNumber: 41,
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
  ventanas_default as default,
  meta
};
//# sourceMappingURL=/build/routes/ventanas-AI56RWWV.js.map
