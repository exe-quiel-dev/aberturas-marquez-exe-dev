var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-CV77PSO3.css";

// app/components/nav.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Nav() {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "w-full text-white flex justify-between items-center text-lg font-light py-0 px-4 flex-wrap gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/",
        className: location.pathname === "/" ? "bg-amber-500 rounded p-1 text-black font-semibold" : "hover:text-gray-300 transition-colors hover:cursor-pointer",
        children: "Inicio"
      },
      void 0,
      !1,
      {
        fileName: "app/components/nav.jsx",
        lineNumber: 9,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "bg-amber-500 rounded p-1 text-black font-semibold" : "hover:text-gray-300 transition-colors hover:cursor-pointer",
        children: "Quienes somos"
      },
      void 0,
      !1,
      {
        fileName: "app/components/nav.jsx",
        lineNumber: 13,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/puertas",
        className: location.pathname === "/puertas" ? "bg-amber-500 rounded p-1 text-black font-semibold" : "hover:text-gray-300 transition-colors hover:cursor-pointer",
        children: "Puertas"
      },
      void 0,
      !1,
      {
        fileName: "app/components/nav.jsx",
        lineNumber: 17,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/ventanas",
        className: location.pathname === "/ventanas" ? "bg-amber-500 rounded p-1 text-black font-semibold" : "hover:text-gray-300 transition-colors hover:cursor-pointer",
        children: "Ventanas"
      },
      void 0,
      !1,
      {
        fileName: "app/components/nav.jsx",
        lineNumber: 21,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/pvc",
        className: location.pathname === "/pvc" ? "bg-amber-500 rounded p-1 text-black font-semibold" : "hover:text-gray-300 transition-colors hover:cursor-pointer",
        children: "Linea pvc"
      },
      void 0,
      !1,
      {
        fileName: "app/components/nav.jsx",
        lineNumber: 25,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/nav.jsx",
    lineNumber: 8,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/nav.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
var nav_default = Nav;

// app/components/header.jsx
var import_ai = require("react-icons/ai");

// public/imgs/logo.png
var logo_default = "/build/_assets/logo-4PXBK5NH.png";

// app/components/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "flex flex-col md:flex-row items-center justify-center bg-slate-900/50 py-2 border-b border-gray-300 sticky top-0 w-full z-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-col items-center justify-center w-44 me-4 container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: logo_default, alt: "Imagen logotipo", className: "w-auto hidden md:inline" }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 15,
      columnNumber: 23
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 15,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(nav_default, {}, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-1/3 text-white flex items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://instagram.com/aberturas_marquez?igshid=MzRlODBiNWFlZA==", target: "_blank", rel: "noreferrer", alt: "Logotipo instagram", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ai.AiOutlineInstagram, { className: "mx-2 w-6 h-6 hover:text-violet-500 transition-colors hover:cursor-pointer" }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 19,
        columnNumber: 143
      }, this) }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 19,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/nosotros", target: "_blank", alt: "Logotipo whatsapp", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ai.AiOutlineEnvironment, { className: "mx-2 w-6 h-6 hover:text-red-500 transition-colors hover:cursor-pointer" }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 21,
        columnNumber: 71
      }, this) }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 21,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 13,
    columnNumber: 7
  }, this);
}
var header_default = Header;

// app/components/footer.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container mx-auto p-10 pb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(nav_default, {}, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function meta() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "stylesheet",
      href: styles_default
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: !0
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
    }
  ];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 62,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 72,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 70,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { className: "bg-gradient-to-tl from-cyan-700 to-slate-500", id: "root", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 77,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 74,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}

// app/routes/chapasimple.jsx
var chapasimple_exports = {};
__export(chapasimple_exports, {
  default: () => chapasimple_default,
  meta: () => meta2
});

// public/imgs/chapa-simple-estampado-econocmico.jpg
var chapa_simple_estampado_econocmico_default = "/build/_assets/chapa-simple-estampado-econocmico-O4EOPGY6.jpg";

// public/imgs/chapa-simple-linea-300.jpg
var chapa_simple_linea_300_default = "/build/_assets/chapa-simple-linea-300-6SGY6CEJ.jpg";

// public/imgs/chapa-simple-linea-800.jpg
var chapa_simple_linea_800_default = "/build/_assets/chapa-simple-linea-800-YPFHON3E.jpg";

// public/imgs/simple-chapa-linea-100.jpg
var simple_chapa_linea_100_default = "/build/_assets/simple-chapa-linea-100-QRY64G2L.jpg";

// public/imgs/puerta-ch-simple-2018.png
var puerta_ch_simple_2018_default = "/build/_assets/puerta-ch-simple-2018-KNZ4LXI7.png";

// public/imgs/puerta-ch-simple-2003.png
var puerta_ch_simple_2003_default = "/build/_assets/puerta-ch-simple-2003-AO4BG5NV.png";

// public/imgs/puerta-ch-simple-2001.png
var puerta_ch_simple_2001_default = "/build/_assets/puerta-ch-simple-2001-FLDFN3XN.png";

// public/imgs/puerta-ch-simple-2049.png
var puerta_ch_simple_2049_default = "/build/_assets/puerta-ch-simple-2049-3PRBWKS6.png";

// public/imgs/puerta-ch-simple-101.png
var puerta_ch_simple_101_default = "/build/_assets/puerta-ch-simple-101-UK2L3W4V.png";

// public/imgs/puerta-ch-simple-100.png
var puerta_ch_simple_100_default = "/build/_assets/puerta-ch-simple-100-LICWAE6F.png";

// app/productos/puertas_ch_simple.js
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
    marco: "Chapa B.W.G N\xBA 22",
    hoja: "Chapa B.W.G N\xBA 22",
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
  },
  {
    id: 5,
    nombre: "Modelo 2018",
    categoria: "Puerta chapa simple",
    marco: "Chapa N\xBA24 ",
    hoja: "Chapa N\xBA26 / Visor \xF3ptico",
    bisagras: "Soldadas a punto",
    cerradura: "Cerradura doble paleta",
    img: puerta_ch_simple_2018_default
  },
  {
    id: 6,
    nombre: "Modelo 2003",
    categoria: "Puerta chapa simple",
    marco: "Chapa N\xBA24 ",
    hoja: "Chapa N\xBA26 / Visor \xF3ptico",
    bisagras: "Soldadas a punto",
    cerradura: "Cerradura doble paleta",
    img: puerta_ch_simple_2003_default
  },
  {
    id: 7,
    nombre: "Modelo 2001",
    categoria: "Puerta chapa simple",
    marco: "Chapa N\xBA24 ",
    hoja: "Chapa N\xBA26 / Visor \xF3ptico / Reja y postigo de abrir",
    bisagras: "Soldadas a punto",
    cerradura: "Cerradura doble paleta",
    img: puerta_ch_simple_2001_default
  },
  {
    id: 8,
    nombre: "Modelo 2049",
    categoria: "Puerta chapa simple",
    marco: "Chapa N\xBA24 ",
    hoja: "Chapa N\xBA26 / Visor \xF3ptico",
    bisagras: "Soldadas a punto",
    cerradura: "Cerradura doble paleta",
    img: puerta_ch_simple_2049_default
  },
  {
    id: 9,
    nombre: "Modelo 101",
    categoria: "Puerta chapa simple",
    marco: "Chapa N\xBA24 ",
    hoja: "Chapa N\xBA26 / Vidrio fijo - Estampado bastonado",
    bisagras: "Soldadas a punto",
    cerradura: "Cerradura doble paleta",
    img: puerta_ch_simple_101_default
  },
  {
    id: 10,
    nombre: "Modelo 2018",
    categoria: "Puerta chapa simple",
    marco: "Chapa N\xBA24 ",
    hoja: "Chapa N\xBA26 / Estampado bastonado",
    bisagras: "Soldadas a punto",
    cerradura: "Cerradura doble paleta",
    img: puerta_ch_simple_100_default
  }
];

// app/components/card.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Card = ({ nombre, marco, hoja, bisagras, cerradura, img }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center justify-center w-full h-full bg-white shadow", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: img, alt: nombre, className: "w-full" }, void 0, !1, {
    fileName: "app/components/card.jsx",
    lineNumber: 5,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-4 w-full text-start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "font-bold uppercase text-xl mb-4 border-b border-gray-200 text-center", children: nombre }, void 0, !1, {
      fileName: "app/components/card.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid grid-cols-2 items-center text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-bold py-2", children: [
        "Marco: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-light", children: marco }, void 0, !1, {
          fileName: "app/components/card.jsx",
          lineNumber: 9,
          columnNumber: 48
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.jsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-bold py-2", children: [
        "Hoja: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-light", children: hoja }, void 0, !1, {
          fileName: "app/components/card.jsx",
          lineNumber: 10,
          columnNumber: 47
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-bold py-2", children: [
        "Bisagras: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-light", children: bisagras }, void 0, !1, {
          fileName: "app/components/card.jsx",
          lineNumber: 11,
          columnNumber: 51
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-bold py-2", children: [
        "Cerradura: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-light", children: cerradura }, void 0, !1, {
          fileName: "app/components/card.jsx",
          lineNumber: 12,
          columnNumber: 52
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/card.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/card.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/card.jsx",
  lineNumber: 4,
  columnNumber: 5
}, this), card_default = Card;

// app/components/categorias.jsx
var import_react4 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Categorias = ({ children, categoria, subcategoria }) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "min-h-screen bg-categorias border-b border-gray-300 flex flex-col items-center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black py-6 text-white text-center w-full drop-shadow bg-slate-600/50", children: categoria }, void 0, !1, {
    fileName: "app/components/categorias.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-items-center gap-4 w-full min-h-screen bg-slate-600/50 py-10 px-5 rounded", children }, void 0, !1, {
    fileName: "app/components/categorias.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/categorias.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this), categorias_default = Categorias;

// app/routes/chapasimple.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function meta2() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - Chapa Simple"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function Chapasimple() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    categorias_default,
    {
      children: chapaSimple.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        card_default,
        {
          nombre: puerta.nombre,
          marco: puerta.marco,
          hoja: puerta.hoja,
          bisagras: puerta.bisagras,
          cerradura: puerta.cerradura,
          img: puerta.img
        },
        void 0,
        !1,
        {
          fileName: "app/routes/chapasimple.jsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )),
      categoria: "Puertas chapa simple"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/chapasimple.jsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
var chapasimple_default = Chapasimple;

// app/routes/ventanaspvc.jsx
var ventanaspvc_exports = {};
__export(ventanaspvc_exports, {
  default: () => ventanaspvc_default,
  meta: () => meta3
});

// app/components/cardpvc.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Cardpvc({ nombre, info, img }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex flex-col items-center justify-center w-full min-h-full bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("img", { src: img, alt: nombre, className: "w-full" }, void 0, !1, {
      fileName: "app/components/cardpvc.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "p-4 w-full text-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "font-bold uppercase text-xl mb-4 border-b border-gray-200 text-center", children: nombre }, void 0, !1, {
        fileName: "app/components/cardpvc.jsx",
        lineNumber: 8,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center justify-center text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "font-bold py-2", children: [
        "Descripcion: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "font-light text-sm md:text-lg", children: info }, void 0, !1, {
          fileName: "app/components/cardpvc.jsx",
          lineNumber: 10,
          columnNumber: 54
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cardpvc.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/cardpvc.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/cardpvc.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/cardpvc.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var cardpvc_default = Cardpvc;

// app/components/categoriasPvc.jsx
var import_react5 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function CategoriasPvc({ children, categoria, subcategoria }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "min-h-screen bg-categorias border-b border-gray-300 flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black pb-4 text-white text-center w-full drop-shadow bg-gray-600/50 py-6", children: categoria }, void 0, !1, {
      fileName: "app/components/categoriasPvc.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items center justify-items-center gap-4 w-full min-h-screen bg-gray-600/50 py-10 px-5 rounded", children }, void 0, !1, {
      fileName: "app/components/categoriasPvc.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/categoriasPvc.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var categoriasPvc_default = CategoriasPvc;

// public/imgs/prime.png
var prime_default = "/build/_assets/prime-3G2J4LBS.png";

// public/imgs/evolution-perfil.png
var evolution_perfil_default = "/build/_assets/evolution-perfil-FDXWPEPS.png";

// public/imgs/advance.png
var advance_default = "/build/_assets/advance-4D7YHNKZ.png";

// public/imgs/jumbo.png
var jumbo_default = "/build/_assets/jumbo-VTGIX7HJ.png";

// public/imgs/life2-corrediza.png
var life2_corrediza_default = "/build/_assets/life2-corrediza-B2AFTHHV.png";

// public/imgs/prime-mosquitero.png
var prime_mosquitero_default = "/build/_assets/prime-mosquitero-YWYUD67T.png";

// public/imgs/jumbo-mosquitero.png
var jumbo_mosquitero_default = "/build/_assets/jumbo-mosquitero-W2NNKGBU.png";

// public/imgs/advance-mosquitero.png
var advance_mosquitero_default = "/build/_assets/advance-mosquitero-4ZLC5X3E.png";

// app/productos/ventanas_pvc.js
var ventanasPvc = [
  {
    id: 1,
    nombre: "L\xEDnea Prime",
    desc: "El sistema corredizo L\xEDnea Prime, con matricer\xEDa austr\xEDaca, permite utilizar umbrales de aluminio y puede alcanzar alturas de hasta 2,3 metros.",
    info: "El sistema corredizo L\xEDnea Prime, con matricer\xEDa austr\xEDaca, permite utilizar umbrales de aluminio y puede alcanzar alturas de hasta 2,3 metros. Esta nueva l\xEDnea es apta para 2,3,4 y 6 hojas m\xF3viles, con sistema de herrajes standard, permitiendo acristalar vidrios simples y dobles hasta 24 mm de espesor. Con gu\xEDas de aluminio, un nuevo sistema de desag\xFCe oculto y un nuevo sistema de encuentros, la L\xEDnea Prime ofrece un gran aislamiento t\xE9rmico y ac\xFAstico, con un bajo mantenimiento y una vida \xFAtil superior a 50 a\xF1os.",
    img: prime_default
  },
  {
    id: 2,
    nombre: "L\xEDnea Evolution",
    desc: "La evoluci\xF3n de la CORREDIZA. Sistema corredizo fijo - m\xF3vil.",
    info: "La evoluci\xF3n de la CORREDIZA. Sistema corredizo fijo - m\xF3vil. Dise\xF1ada para proyectos exigentes con climas extremos y grandes presiones de viento.Asegura la m\xE1xima hermeticidad y estanquidad. Sistema de herraje con puntos de cierre activos en el encuentro central. Movimiento de cierre especial de la hoja en sentido transversal con respecto al perfil de marco. Burleter\xEDa post co-extruida de PVC. Permite cubrir grandes luces con hojas de hasta 3.60 metros de altura y hasta 3 metros de ancho, con un peso de hasta 400kg. Con doble o triple vidriado herm\xE9tico de hasta 42 mm. Funci\xF3n soft-open y soft-close, brindando mayor confort y seguridad de uso.",
    img: evolution_perfil_default
  },
  {
    id: 3,
    nombre: "L\xEDnea Advance",
    desc: "La L\xEDnea Advance, con matricer\xEDa austr\xEDaca, ofrece un \xF3ptimo costo-beneficio.",
    info: "La L\xEDnea Advance, con matricer\xEDa austr\xEDaca, ofrece un \xF3ptimo costo-beneficio. Esta nueva l\xEDnea es apta para 2,3,4 y 6 hojas m\xF3viles, con sistema de herrajes standard, permitiendo acristalar vidrios simples y dobles hasta 20 mm de espesor. Con gu\xEDas de aluminio, un nuevo sistema de desag\xFCe oculto y un nuevo sistema de encuentros, la L\xEDnea Advance ofrece un gran aislamiento t\xE9rmico y ac\xFAstico, con un bajo mantenimiento y una vida \xFAtil superior a 50 a\xF1os.",
    img: advance_default
  },
  {
    id: 4,
    nombre: "L\xEDnea Jumbo",
    desc: "El sistema corredizo L\xEDnea Jumbo permite dar respuesta a dise\xF1os de aberturas de grandes luces, pudiendo alcanzar alturas de hasta 3 metros. Ideal para optimizar espacios en el interior de los ambientes, recibir m\xE1s luz natural y/o poder disfrutar de grandes vistas, posee refuerzo interior de acero galvanizado, permite acristalar vidrios simples y dobles hasta 34 mm de espesor.",
    info: "El sistema corredizo L\xEDnea Jumbo permite dar respuesta a dise\xF1os de aberturas de grandes luces, pudiendo alcanzar alturas de hasta 3 metros. Ideal para optimizar espacios en el interior de los ambientes, recibir m\xE1s luz natural y/o poder disfrutar de grandes vistas, posee refuerzo interior de acero galvanizado, permite acristalar vidrios simples y dobles hasta 34 mm de espesor. Gracias a innovador sistema de gu\xEDas acoplables de marco, se pueden agregar m\xFAltiples gu\xEDas, como tambi\xE9n fabricar aberturas con 2, 3, 4 y 6 hojas m\xF3viles y/o fijas. En sistemas fijo-m\xF3vil, el umbral no posee gu\xEDa de marco en la hoja activa, quedando el marco sin obstrucciones del lado exterior. Adem\xE1s, con refuerzos de mayor inercia, que garantizan una \xF3ptima funcionalidad y prestaci\xF3n, ofrece la posibilidad de incluir mosquiteros de PVC.",
    img: jumbo_default
  },
  {
    id: 5,
    nombre: "Life 2",
    desc: "El Renovado Sistema Corredizo, LIFE 2 ofrece dise\xF1ar carpinter\xEDas de sistema Corredizo y Pa\xF1o Fijo de variadas medidas, de 2 hojas en el sistema Movil-M\xF3vil, y de 2 y 3 Pa\xF1os en el Sistema Movil-Fijo. Con Pa\xF1os Fijos y Mosquiteros Acoplables.",
    info: "El Renovado Sistema Corredizo, LIFE 2 ofrece dise\xF1ar carpinter\xEDas de sistema Corredizo y Pa\xF1o Fijo de variadas medidas, de 2 hojas en el sistema Movil-M\xF3vil, y de 2 y 3 Pa\xF1os en el Sistema Movil-Fijo. Con Pa\xF1os Fijos y Mosquiteros Acoplables.",
    img: life2_corrediza_default
  },
  {
    id: 6,
    nombre: "Mosquitero L\xEDnea Prime",
    desc: " - ",
    info: "Mosquiteros fijos, corredizos y sistema de apertura tipo postigo. Se aplican para todas las series del sistema Corredizo y para las series de Doble Contacto. El sistema permite colocar tela de fibra y met\xE1lica.",
    img: prime_mosquitero_default
  },
  {
    id: 7,
    nombre: "Mosquitero L\xEDnea Jumbo",
    desc: " - ",
    info: "Mosquiteros fijos, corredizos y sistema de apertura tipo postigo. Se aplican para todas las series del sistema Corredizo y para las series de Doble Contacto. El sistema permite colocar tela de fibra y met\xE1lica.",
    img: jumbo_mosquitero_default
  },
  {
    id: 8,
    nombre: "Mosquitero L\xEDnea Advance",
    desc: " - ",
    info: "Mosquiteros corredizos. Se aplican para los sistemas corredizos, cumplen con los requerimientos de grandes luces. El sistema permite colocar tela de fibra y met\xE1lica.",
    img: advance_mosquitero_default
  }
];

// app/routes/ventanaspvc.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function meta3() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - Ventanas PVC"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function VentanasPvc() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    categoriasPvc_default,
    {
      children: ventanasPvc.map((ventana) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        cardpvc_default,
        {
          nombre: ventana.nombre,
          info: ventana.info,
          img: ventana.img
        },
        void 0,
        !1,
        {
          fileName: "app/routes/ventanaspvc.jsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      )),
      categoria: "PVC",
      subcategoria: "Ventanas Corredizas"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/ventanaspvc.jsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
var ventanaspvc_default = VentanasPvc;

// app/routes/doblechapa.jsx
var doblechapa_exports = {};
__export(doblechapa_exports, {
  default: () => doblechapa_default,
  meta: () => meta4
});

// public/imgs/chapa-doble-sin-inyectar-1.jpg
var chapa_doble_sin_inyectar_1_default = "/build/_assets/chapa-doble-sin-inyectar-1-OTCDLK6L.jpg";

// public/imgs/img-puertas-L1810.png
var img_puertas_L1810_default = "/build/_assets/img-puertas-L1810-MU6ROHAY.png";

// public/imgs/img-puertas-LC1865_2.png
var img_puertas_LC1865_2_default = "/build/_assets/img-puertas-LC1865_2-5CLYTZUQ.png";

// public/imgs/img-puertas-clasica155_2.png
var img_puertas_clasica155_2_default = "/build/_assets/img-puertas-clasica155_2-SH7PGIMO.png";

// public/imgs/img-puertas-clasica1600.png
var img_puertas_clasica1600_default = "/build/_assets/img-puertas-clasica1600-3WDNDNDU.png";

// public/imgs/img-puertas-clasica1665.png
var img_puertas_clasica1665_default = "/build/_assets/img-puertas-clasica1665-ZAIV52ON.png";

// public/imgs/img-puertas-clasica1700.png
var img_puertas_clasica1700_default = "/build/_assets/img-puertas-clasica1700-UP6CLJCO.png";

// public/imgs/img-puertas-clasica1755.png
var img_puertas_clasica1755_default = "/build/_assets/img-puertas-clasica1755-TGPUHOMJ.png";

// public/imgs/doble-ch-2015.png
var doble_ch_2015_default = "/build/_assets/doble-ch-2015-U7IP5RJG.png";

// public/imgs/doble-ch-2016.png
var doble_ch_2016_default = "/build/_assets/doble-ch-2016-7N33DI7U.png";

// public/imgs/doble-ch-2005-2007.png
var doble_ch_2005_2007_default = "/build/_assets/doble-ch-2005-2007-7XSV4CJA.png";

// app/productos/puertas_doble_ch.js
var chapaDoble = [
  {
    id: 4,
    nombre: "Linea 400 marco pesado - Mod 420 / 460",
    categoria: "Chapa doble sin inyectar",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa B.W.G N\xBA 22",
    bisagras: "Municion",
    cerradura: "No especificado",
    img: chapa_doble_sin_inyectar_1_default
  },
  {
    id: 5,
    nombre: "Clasica 1810",
    categoria: "Chapa doble inyectada",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "-",
    cerradura: "No especificado",
    img: img_puertas_L1810_default
  },
  {
    id: 6,
    nombre: "Clasica 1865",
    categoria: "Chapa doble inyectada",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "-",
    cerradura: "No especificado",
    img: img_puertas_LC1865_2_default
  },
  {
    id: 7,
    nombre: "Clasica 155",
    categoria: "Chapa doble inyectada",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "-",
    cerradura: "No especificado",
    img: img_puertas_clasica155_2_default
  },
  {
    id: 8,
    nombre: "Clasica 1600",
    categoria: "Chapa doble inyectada",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "-",
    cerradura: "No especificado",
    img: img_puertas_clasica1600_default
  },
  {
    id: 9,
    nombre: "Clasica 1665",
    categoria: "Chapa doble inyectada",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "-",
    cerradura: "No especificado",
    img: img_puertas_clasica1665_default
  },
  {
    id: 10,
    nombre: "Clasica 1700",
    categoria: "Chapa doble inyectada",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "-",
    cerradura: "No especificado",
    img: img_puertas_clasica1700_default
  },
  {
    id: 11,
    nombre: "Clasica 1755",
    categoria: "Chapa doble inyectada",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa 40mm - Intectado de poliuretano - Pintura Poliester - Hojas electrocincadas",
    bisagras: "-",
    cerradura: "No especificado",
    img: img_puertas_clasica1755_default
  },
  {
    id: 12,
    nombre: "Modelo 2015",
    categoria: "Puerta Doble Chapa",
    marco: "Chapa N\xBA24 ",
    hoja: "Chapa N\xBA24 Inyectada con poliuretano - Aislacion termica-acustica",
    bisagras: "Embutidas marco",
    cerradura: "Cerradura de seguridad",
    img: doble_ch_2015_default
  },
  {
    id: 13,
    nombre: "Modelo 2016",
    categoria: "Puerta Doble Chapa",
    marco: "Chapa N\xBA24 ",
    hoja: "Chapa N\xBA24 Inyectada con poliuretano - Aislacion termica-acustica / Postigo Lateral / Apliques acero inox 20 mm",
    bisagras: "Embutidas marco",
    cerradura: "Cerradura de seguridad",
    img: doble_ch_2016_default
  },
  {
    id: 14,
    nombre: "Modelo 2005 / 2007",
    categoria: "Puerta Doble Chapa",
    marco: "Chapa N\xBA24 ",
    hoja: "Chapa N\xBA24 Inyectada con poliuretano - Aislacion termica-acustica",
    bisagras: "Embutidas marco",
    cerradura: "Cerradura de seguridad",
    img: doble_ch_2005_2007_default
  }
];

// public/imgs/linea-100-1.jpg
var linea_100_1_default = "/build/_assets/linea-100-1-LP4RNFJN.jpg";

// public/imgs/linea-100-2.jpg
var linea_100_2_default = "/build/_assets/linea-100-2-IRSOKMCU.jpg";

// public/imgs/linea-100-3.jpg
var linea_100_3_default = "/build/_assets/linea-100-3-PXBMA6LI.jpg";

// public/imgs/puerta-doble-chapa-inyectada-linea500-700.jpg
var puerta_doble_chapa_inyectada_linea500_700_default = "/build/_assets/puerta-doble-chapa-inyectada-linea500-700-FXWVKT6M.jpg";

// public/imgs/linea-900.jpg
var linea_900_default = "/build/_assets/linea-900-JIKJMT6P.jpg";

// app/productos/puertas_inyectadas.js
var inyectadas = [
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
    nombre: "Lineas 500 - 700 marco pesado - Mod 500 / 700 / 762 / 765",
    categoria: "Chapa doble sin inyectar",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa B.W.G N\xBA 22",
    bisagras: "Municion",
    cerradura: "Cerradura de seguridad doble paleta",
    img: puerta_doble_chapa_inyectada_linea500_700_default
  },
  {
    id: 5,
    nombre: "Linea 900 marco pesado - Mod 900 / 904 / 910 / 920",
    categoria: "Chapa doble sin inyectar",
    marco: "Chapa B.W.G N\xBA 18",
    hoja: "Chapa B.W.G N\xBA 22",
    bisagras: "Municion",
    cerradura: "Cerradura de seguridad doble paleta",
    img: linea_900_default
  }
];

// app/routes/doblechapa.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function meta4() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - Doble Chapa"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function Doblechapa() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      categorias_default,
      {
        children: inyectadas.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          card_default,
          {
            nombre: puerta.nombre,
            marco: puerta.marco,
            hoja: puerta.hoja,
            bisagras: puerta.bisagras,
            cerradura: puerta.cerradura,
            img: puerta.img
          },
          void 0,
          !1,
          {
            fileName: "app/routes/doblechapa.jsx",
            lineNumber: 34,
            columnNumber: 13
          },
          this
        )),
        categoria: "Puertas chapa doble inyectadas"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/doblechapa.jsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/doblechapa.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      categorias_default,
      {
        children: chapaDoble.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          card_default,
          {
            nombre: puerta.nombre,
            marco: puerta.marco,
            hoja: puerta.hoja,
            bisagras: puerta.bisagras,
            cerradura: puerta.cerradura,
            img: puerta.img
          },
          void 0,
          !1,
          {
            fileName: "app/routes/doblechapa.jsx",
            lineNumber: 49,
            columnNumber: 13
          },
          this
        )),
        categoria: "Puertas chapa doble sin inyectar"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/doblechapa.jsx",
        lineNumber: 47,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/doblechapa.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/doblechapa.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
var doblechapa_default = Doblechapa;

// app/routes/plegadizas.jsx
var plegadizas_exports = {};
__export(plegadizas_exports, {
  default: () => plegadizas_default,
  meta: () => meta5
});

// public/imgs/plegadiza-pvc-ciega-6mm.jpg
var plegadiza_pvc_ciega_6mm_default = "/build/_assets/plegadiza-pvc-ciega-6mm-EBTEW7UL.jpg";

// public/imgs/puerta_todo_vidrio_2.jpg
var puerta_todo_vidrio_2_default = "/build/_assets/puerta_todo_vidrio_2-U7OWYCFL.jpg";

// app/productos/puertas_plegadizas.js
var plegadizas = [
  {
    id: 1,
    nombre: "Puerta plegadiza ciega 6 mm",
    colores: "Abedul, Fresno, Cedro, Cerezo, Pino, Blanco, Wengue",
    vidrio: " - ",
    img: plegadiza_pvc_ciega_6mm_default
  },
  {
    id: 2,
    nombre: "Puerta plegadiza ciega 10 mm",
    colores: "Abedul, Fresno, Blanco, Gris, Cedro, Cerezo, Pino, Wengue",
    vidrio: " - ",
    img: plegadiza_pvc_ciega_6mm_default
  },
  {
    id: 3,
    nombre: "Puerta plegadiza ciega 8 mm",
    colores: "Cedro, Pino, Blanco",
    vidrio: " - ",
    img: plegadiza_pvc_ciega_6mm_default
  },
  {
    id: 4,
    nombre: "Puerta plegadiza Medio vidrio 10 mm / Con traba o Im\xE1n",
    colores: "Algarrobo, Cipres, Fresno, Blanco, Gris, Cedro, Cerezo, Pino, Wengue",
    vidrio: "Crystal, Fumee",
    img: puerta_todo_vidrio_2_default
  },
  {
    id: 5,
    nombre: "Puerta plegadiza Medio vidrio / Con traba o Im\xE1n",
    colores: "Algarrobo, Cipres, Fresno, Blanco, Gris, Cedro, Cerezo, Pino, Wengue",
    vidrio: "Crystal, Fumee",
    img: puerta_todo_vidrio_2_default
  }
  // {
  // id: 6,
  // nombre: 'Puerta plegadiza Simil Roble',
  // colores: ' - ',
  // vidrio: ' - ',
  // img: img6
  // },
  // {
  // id: 7,
  // nombre: 'Puerta plegadiza Simil Mogno',
  // colores: ' - ',
  // vidrio: ' - ',
  // img: img7
  // },
  // {
  // id: 8,
  // nombre: 'Puerta plegadiza Simil Blanco',
  // colores: ' - ',
  // vidrio: ' - ',
  // img: img8
  // },
  // {
  // id: 9,
  // nombre: 'Puerta plegadiza Simil Madera / Todo acrilico',
  // colores: ' - ',
  // vidrio: ' - ',
  // img: img9
  // },
  // {
  // id: 10,
  // nombre: 'Puerta plegadiza Caoba en 2 hojas',
  // colores: ' - ',
  // vidrio: ' - ',
  // img: img4
  // },
  // {
  // id: 11,
  // nombre: 'Puerta plegadiza Cedro',
  // colores: ' - ',
  // vidrio: ' - ',
  // img: img11
  // },
  // {
  // id: 12,
  // nombre: 'Puerta plegadiza Cedro en 2 hojas',
  // colores: ' - ',
  // vidrio: ' - ',
  // img: img8
  // },
  // {
  // id: 13,
  // nombre: 'Puerta plegadiza Vitraux medio punto',
  // colores: ' - ',
  // vidrio: ' - ',
  // img: img13
  // },
  // {
  // id: 14,
  // nombre: 'Puerta plegadiza Cedro / Vidrio entero recto',
  // colores: ' - ',
  // vidrio: ' - ',
  // img: img14
  // },
  // {
  // id: 15,
  // nombre: 'Puerta plegadiza Caoba / Vidrio entero recto',
  // colores: ' - ',
  // vidrio: ' - ',
  // img: img15
  // },
  // {
  // id: 16,
  // nombre: 'Puerta plegadiza Cedro / Vidrio entero medio punto',
  // colores: ' - ',
  // vidrio: ' - ',
  // img: img16
  // }
];

// public/imgs/simil_madera_todo_acrilico.jpg
var simil_madera_todo_acrilico_default = "/build/_assets/simil_madera_todo_acrilico-QAL6PS5V.jpg";

// public/imgs/simil_roble.jpg
var simil_roble_default = "/build/_assets/simil_roble-X54JBTVK.jpg";

// public/imgs/simil_mogno.jpg
var simil_mogno_default = "/build/_assets/simil_mogno-5QDQD45M.jpg";

// public/imgs/simil_blanco.jpg
var simil_blanco_default = "/build/_assets/simil_blanco-G2T56BTL.jpg";

// public/imgs/plegadiza-cedro.jpg
var plegadiza_cedro_default = "/build/_assets/plegadiza-cedro-3WBB546Y.jpg";

// public/imgs/plegadiza-vitraux.jpg
var plegadiza_vitraux_default = "/build/_assets/plegadiza-vitraux-JYBPKTZA.jpg";

// public/imgs/plegadiza-cedro-vidrio-entero-recto.jpg
var plegadiza_cedro_vidrio_entero_recto_default = "/build/_assets/plegadiza-cedro-vidrio-entero-recto-JZ6NTWMD.jpg";

// public/imgs/plegadiza-caoba-vidrio-entero-recto.jpg
var plegadiza_caoba_vidrio_entero_recto_default = "/build/_assets/plegadiza-caoba-vidrio-entero-recto-OHQFMICD.jpg";

// public/imgs/plegadiza-medio-punto.jpg
var plegadiza_medio_punto_default = "/build/_assets/plegadiza-medio-punto-RBMXQZNM.jpg";

// app/productos/plegadizas_nobel.js
var plegadizasNobel = [
  {
    id: 6,
    nombre: "Puerta plegadiza Simil Roble",
    caracteristicas: "Construidas en melamina 1ra calidad en 10 mm de espesor. Bisagras standard con tratamiento antidesgaste. Marco standard de 3 y 4,5 cm de ancho. Batiente (placa de cierre) en MDF de 18 mm de espesor. Cerradura de enganche. Gu\xEDa superior en aluminio anodizado. Ruedas de nylon con rodamientos a rulem\xE1n para asegurar un funcionamiento suave y silencioso.",
    img: simil_roble_default
  },
  {
    id: 7,
    nombre: "Puerta plegadiza Simil Mogno",
    caracteristicas: "Construidas en melamina 1ra calidad en 10 mm de espesor. Bisagras standard con tratamiento antidesgaste. Marco standard de 3 y 4,5 cm de ancho. Batiente (placa de cierre) en MDF de 18 mm de espesor. Cerradura de enganche. Gu\xEDa superior en aluminio anodizado. Ruedas de nylon con rodamientos a rulem\xE1n para asegurar un funcionamiento suave y silencioso.",
    img: simil_mogno_default
  },
  {
    id: 8,
    nombre: "Puerta plegadiza Simil Blanco",
    caracteristicas: "Construidas en melamina 1ra calidad en 10 mm de espesor. Bisagras standard con tratamiento antidesgaste. Marco standard de 3 y 4,5 cm de ancho. Batiente (placa de cierre) en MDF de 18 mm de espesor. Cerradura de enganche. Gu\xEDa superior en aluminio anodizado. Ruedas de nylon con rodamientos a rulem\xE1n para asegurar un funcionamiento suave y silencioso.",
    img: simil_blanco_default
  },
  {
    id: 9,
    nombre: "Puerta plegadiza Simil Madera / Todo acrilico",
    caracteristicas: "Construidas en melamina 1ra calidad en 10 mm de espesor. Bisagras standard con tratamiento antidesgaste. Marco standard de 3 y 4,5 cm de ancho. Batiente (placa de cierre) en MDF de 18 mm de espesor. Cerradura de enganche. Gu\xEDa superior en aluminio anodizado. Ruedas de nylon con rodamientos a rulem\xE1n para asegurar un funcionamiento suave y silencioso.",
    img: simil_madera_todo_acrilico_default
  },
  {
    id: 11,
    nombre: "Puerta plegadiza Cedro",
    caracteristicas: "Construidas en aglomerados de 1ra calidad de 10 mm de espesor. Lustre poliuret\xE1nico brillante o semi-mate. Bisagras de PVC r\xEDgidos. Marco standard de 4,5 y 5,5 cm de ancho. Batiente (placa de cierre) en MDF de 16 mm de espesor. Gu\xEDa superior en aluminio anodizado. Manijones de bronce o platil e im\xE1nes. Ruedas de nylon con rodamientos a rulem\xE1n para asegurar un funcionamiento suave y silencioso.",
    img: plegadiza_cedro_default
  },
  {
    id: 13,
    nombre: "Puerta plegadiza Vitraux medio punto",
    caracteristicas: "Construidas en aglomerados de 1ra calidad de 10 mm de espesor. Lustre poliuret\xE1nico brillante o semi-mate. Bisagras de PVC r\xEDgidos. Marco standard de 4,5 y 5,5 cm de ancho. Batiente (placa de cierre) en MDF de 16 mm de espesor. Gu\xEDa superior en aluminio anodizado. Manijones de bronce o platil e im\xE1nes. Ruedas de nylon con rodamientos a rulem\xE1n para asegurar un funcionamiento suave y silencioso.",
    img: plegadiza_vitraux_default
  },
  {
    id: 14,
    nombre: "Puerta plegadiza Cedro / Vidrio entero recto",
    caracteristicas: "Construidas en aglomerados de 1ra calidad de 10 mm de espesor. Lustre poliuret\xE1nico brillante o semi-mate. Bisagras de PVC r\xEDgidos. Marco standard de 4,5 y 5,5 cm de ancho. Batiente (placa de cierre) en MDF de 16 mm de espesor. Gu\xEDa superior en aluminio anodizado. Manijones de bronce o platil e im\xE1nes. Ruedas de nylon con rodamientos a rulem\xE1n para asegurar un funcionamiento suave y silencioso.",
    img: plegadiza_cedro_vidrio_entero_recto_default
  },
  {
    id: 15,
    nombre: "Puerta plegadiza Caoba / Vidrio entero recto",
    caracteristicas: "Construidas en aglomerados de 1ra calidad de 10 mm de espesor. Lustre poliuret\xE1nico brillante o semi-mate. Bisagras de PVC r\xEDgidos. Marco standard de 4,5 y 5,5 cm de ancho. Batiente (placa de cierre) en MDF de 16 mm de espesor. Gu\xEDa superior en aluminio anodizado. Manijones de bronce o platil e im\xE1nes. Ruedas de nylon con rodamientos a rulem\xE1n para asegurar un funcionamiento suave y silencioso.",
    img: plegadiza_caoba_vidrio_entero_recto_default
  },
  {
    id: 16,
    nombre: "Puerta plegadiza Cedro / Vidrio entero medio punto",
    caracteristicas: "Construidas en aglomerados de 1ra calidad de 10 mm de espesor. Lustre poliuret\xE1nico brillante o semi-mate. Bisagras de PVC r\xEDgidos. Marco standard de 4,5 y 5,5 cm de ancho. Batiente (placa de cierre) en MDF de 16 mm de espesor. Gu\xEDa superior en aluminio anodizado. Manijones de bronce o platil e im\xE1nes. Ruedas de nylon con rodamientos a rulem\xE1n para asegurar un funcionamiento suave y silencioso.",
    img: plegadiza_medio_punto_default
  }
];

// app/components/cardPlegadizas.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), cardPlegadizas = ({ nombre, colores, vidrio, img }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col items-center justify-center w-full h-full bg-white shadow", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: img, alt: nombre, className: "w-full" }, void 0, !1, {
    fileName: "app/components/cardPlegadizas.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "p-4 w-full text-start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "font-bold uppercase text-xl mb-4 border-b border-gray-200 text-center", children: nombre }, void 0, !1, {
      fileName: "app/components/cardPlegadizas.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "grid grid-cols-2 items-center text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "font-bold py-2", children: [
        "Colores: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "font-light", children: colores }, void 0, !1, {
          fileName: "app/components/cardPlegadizas.jsx",
          lineNumber: 10,
          columnNumber: 50
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cardPlegadizas.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "font-bold py-2", children: [
        "Vidrio: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "font-light", children: vidrio }, void 0, !1, {
          fileName: "app/components/cardPlegadizas.jsx",
          lineNumber: 11,
          columnNumber: 49
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cardPlegadizas.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/cardPlegadizas.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/cardPlegadizas.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/cardPlegadizas.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this), cardPlegadizas_default = cardPlegadizas;

// app/components/cardPlegadizasNobel.jsx
var import_react6 = require("react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), cardPlegadizasNobel = ({ nombre, caracteristicas, img }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col items-center justify-center w-full h-full bg-white shadow", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { src: img, alt: nombre, className: "w-full" }, void 0, !1, {
    fileName: "app/components/cardPlegadizasNobel.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "p-4 w-full text-start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "font-bold uppercase text-xl mb-4 border-b border-gray-200 text-center", children: nombre }, void 0, !1, {
      fileName: "app/components/cardPlegadizasNobel.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center justify-center text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "font-bold py-2", children: [
      "Caracteristicas: ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "font-light", children: caracteristicas }, void 0, !1, {
        fileName: "app/components/cardPlegadizasNobel.jsx",
        lineNumber: 10,
        columnNumber: 58
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/cardPlegadizasNobel.jsx",
      lineNumber: 10,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/cardPlegadizasNobel.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/cardPlegadizasNobel.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/cardPlegadizasNobel.jsx",
  lineNumber: 5,
  columnNumber: 5
}, this), cardPlegadizasNobel_default = cardPlegadizasNobel;

// app/routes/plegadizas.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function meta5() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - Plegadizas"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
var Plegadizas = () => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    categorias_default,
    {
      children: plegadizas.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        cardPlegadizas_default,
        {
          colores: puerta.colores,
          vidrio: puerta.vidrio,
          img: puerta.img
        },
        void 0,
        !1,
        {
          fileName: "app/routes/plegadizas.jsx",
          lineNumber: 34,
          columnNumber: 11
        },
        this
      )),
      categoria: "Puertas plegadizas pvc"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/plegadizas.jsx",
      lineNumber: 32,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    categorias_default,
    {
      children: plegadizasNobel.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        cardPlegadizasNobel_default,
        {
          img: puerta.img,
          nombre: puerta.nombre,
          caracteristicas: puerta.caracteristicas
        },
        void 0,
        !1,
        {
          fileName: "app/routes/plegadizas.jsx",
          lineNumber: 44,
          columnNumber: 11
        },
        this
      )),
      categoria: "Puertas plegadizas madera"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/plegadizas.jsx",
      lineNumber: 42,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/routes/plegadizas.jsx",
  lineNumber: 31,
  columnNumber: 5
}, this), plegadizas_default = Plegadizas;

// app/routes/seguridad.jsx
var seguridad_exports = {};
__export(seguridad_exports, {
  default: () => seguridad_default,
  meta: () => meta6
});

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
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function meta6() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - Seguridad"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function Seguridad() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    categorias_default,
    {
      children: seguridad.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        card_default,
        {
          nombre: puerta.nombre,
          marco: puerta.marco,
          hoja: puerta.hoja,
          bisagras: puerta.bisagras,
          cerradura: puerta.cerradura,
          img: puerta.img
        },
        void 0,
        !1,
        {
          fileName: "app/routes/seguridad.jsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )),
      categoria: "Puertas de seguridad"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/seguridad.jsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
var seguridad_default = Seguridad;

// app/routes/tecnodeck.jsx
var tecnodeck_exports = {};
__export(tecnodeck_exports, {
  default: () => tecnodeck_default,
  meta: () => meta7
});

// public/imgs/tecno_deck.jpg
var tecno_deck_default = "/build/_assets/tecno_deck-MFA2L5YI.jpg";

// app/productos/tecnodeck.js
var tecnodeck = [
  {
    id: 1,
    nombre: "Tecno Deck",
    info: "Una nueva l\xEDnea de decks sint\xE9ticos que combina el aspecto natural y la c\xE1lida sensaci\xF3n de la madera con la facilidad de uso, la duraci\xF3n y simplicidad de mantenimiento. Un innovador producto desarrollado principalmente para uso exterior, que no necesita tratamiento alguno, no se pudre ni se astilla, es resistente a la radiaci\xF3n ultravioleta, al agua salina, al hielo, al moho y a los insectos. TECNO DECK se destaca por su gran resistencia frente a las inclemencias clim\xE1ticas y su inalterabilidad frente al paso del tiempo.",
    img: tecno_deck_default
  }
];

// app/routes/tecnodeck.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function meta7() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - TecnoDeck"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function Tecnodeck() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    categoriasPvc_default,
    {
      children: tecnodeck.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        cardpvc_default,
        {
          nombre: prod.nombre,
          info: prod.info,
          img: prod.img
        },
        void 0,
        !1,
        {
          fileName: "app/routes/tecnodeck.jsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      )),
      categoria: "PVC",
      subcategoria: "Ventanas Corredizas"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/tecnodeck.jsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
var tecnodeck_default = Tecnodeck;

// app/routes/aluminio.jsx
var aluminio_exports = {};
__export(aluminio_exports, {
  default: () => aluminio_default,
  meta: () => meta8
});

// public/imgs/PA301-min-800x800.png
var PA301_min_800x800_default = "/build/_assets/PA301-min-800x800-AWD6CQLG.png";

// public/imgs/PA302-min-800x800.png
var PA302_min_800x800_default = "/build/_assets/PA302-min-800x800-BSMHRTFD.png";

// public/imgs/PA303-min-800x800.png
var PA303_min_800x800_default = "/build/_assets/PA303-min-800x800-5JRE24BE.png";

// app/productos/puertas_aluminio.js
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
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function meta8() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - Aluminio"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function Aluminio() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    categorias_default,
    {
      children: aluminio.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        card_default,
        {
          nombre: puerta.nombre,
          marco: puerta.marco,
          hoja: puerta.hoja,
          bisagras: puerta.bisagras,
          cerradura: puerta.cerradura,
          img: puerta.img
        },
        void 0,
        !1,
        {
          fileName: "app/routes/aluminio.jsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )),
      categoria: "Puertas chapa simple"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/aluminio.jsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
var aluminio_default = Aluminio;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default,
  meta: () => meta9
});

// public/imgs/map.jpg
var map_default = "/build/_assets/map-HLDFBFIJ.jpg";

// app/routes/nosotros.jsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function meta9() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - Nosotros"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { className: "flex flex-col items-center justify-center px-6 py-20 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: " bg-gray-100 p-4 md:p-10 my-5 rounded-lg shadow-md w-full md:w-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "text-center uppercase text-xl md:text-2xl lg:text-4xl font-bold", children: "Nosotros" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-md md:text-lg font-light py-4", children: "En Aberturas Marquez nos ocupamos de asesorar al cliente sobre sus mejores opciones para sus necesidades teniendo en cuenta la relaci\xF3n calidad precio. Priorizamos el plazo de entrega fijado para brindarles un buen servicio a nuestros clientes. Trabajamos con l\xEDneas de productos economicas y con l\xEDneas premium para que el cliente pueda elegir lo que mas se adapte a sus necesidades y su presupuesto." }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: " bg-gray-100 p-4 md:p-10 my-5 rounded-lg shadow-md w-full md:w-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-center uppercase text-xl md:text-2xl lg:text-4xl font-bold", children: "\xBF Donde nos encontramos ?" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", { src: map_default, alt: "Imagen de mapa", className: "w-full my-2" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-lg py-4 font-semibold text-center border-b border-black border-spacing-4", children: "Av. Brig. Gral. Juan Manuel de Rosas 2475, B1655 Jos\xE9 Le\xF3n Su\xE1rez, Provincia de Buenos Aires" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-lg py-4 font-semibold text-center border-b border-black", children: "Horarios de atenci\xF3n: Lunes a Viernes de 9:00 a 12:30 / 15:00 a 19:00 - Sabados de 9:00 a 13:00" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h3", { className: "text-start uppercase text-lg md:text-xl lg:text-2xl font-bold underline mt-2", children: "Contacto" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-lg py-2 font-semibold text-start", children: "Whatsapp: 11-6816-4079 ( Ezequiel )" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-lg py-2 font-semibold text-start", children: "Instagram: @Aberturas_Marquez" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
var nosotros_default = Nosotros;

// app/routes/ventanas.jsx
var ventanas_exports = {};
__export(ventanas_exports, {
  default: () => ventanas_default,
  meta: () => meta10
});

// public/imgs/modena--corrediza.jpg
var modena_corrediza_default = "/build/_assets/modena--corrediza-MTIVZL63.jpg";

// public/imgs/a30.jpg
var a30_default = "/build/_assets/a30-WWIMPRQF.jpg";

// public/imgs/herrero-corrediza.jpg
var herrero_corrediza_default = "/build/_assets/herrero-corrediza-DWNG5E5M.jpg";

// public/imgs/rotonda-corrediza.jpg
var rotonda_corrediza_default = "/build/_assets/rotonda-corrediza-R62ILDX3.jpg";

// public/imgs/rotonda_640.jpg
var rotonda_640_default = "/build/_assets/rotonda_640-H42B567N.jpg";

// app/productos/ventanas.js
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
    img: a30_default
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
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function meta10() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - Ventanas"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function Ventanas() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    categorias_default,
    {
      children: ventanas.map((ventana) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        cardPlegadizasNobel_default,
        {
          nombre: ventana.nombre,
          img: ventana.img,
          caracteristicas: ventana.caracteristicas
        },
        void 0,
        !1,
        {
          fileName: "app/routes/ventanas.jsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )),
      categoria: "Puertas chapa simple"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/ventanas.jsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
var ventanas_default = Ventanas;

// app/routes/puertas.jsx
var puertas_exports = {};
__export(puertas_exports, {
  default: () => puertas_default,
  meta: () => meta11
});
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function meta11() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - Puertas"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function Puertas() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { className: "min-h-screen flex flex-col items-center justify-center bg-categorias", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col items-center justify-center p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow", children: "Puertas" }, void 0, !1, {
      fileName: "app/routes/puertas.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col lg:grid lg:grid-cols-5 items-center justify-items-center p-10 w-full gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react7.Link,
        {
          to: "/chapasimple",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full",
          children: "Chapa Simple"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/puertas.jsx",
          lineNumber: 28,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react7.Link,
        {
          to: "/doblechapa",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full",
          children: "Chapa Doble"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/puertas.jsx",
          lineNumber: 32,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react7.Link,
        {
          to: "/seguridad",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full",
          children: "De Seguridad"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/puertas.jsx",
          lineNumber: 36,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react7.Link,
        {
          to: "/placa",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full",
          children: "Placa"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/puertas.jsx",
          lineNumber: 40,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react7.Link,
        {
          to: "/aluminio",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full",
          children: "Aluminio"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/puertas.jsx",
          lineNumber: 44,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        import_react7.Link,
        {
          to: "/plegadizas",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full",
          children: "Plegadizas"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/puertas.jsx",
          lineNumber: 48,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/puertas.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/puertas.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/puertas.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
var puertas_default = Puertas;

// app/routes/zocalos.jsx
var zocalos_exports = {};
__export(zocalos_exports, {
  default: () => zocalos_default,
  meta: () => meta12
});

// public/imgs/tecno-zocalos-02.png
var tecno_zocalos_02_default = "/build/_assets/tecno-zocalos-02-YVTUOCWS.png";

// app/productos/zocalos.js
var zocalos = [
  {
    id: 1,
    nombre: "Tecno Zocalos",
    info: "Fabricados con todo el know how de TECNOPERFILES en PVC, con la m\xE1xima calidad y tecnolog\xEDa. Para todo tipo de ambientes, inclusive donde se extreman condiciones de salubridad e higiene. Se pueden cortar, ingletar, atornillar o pegar con silicona facilitando el montaje, como los z\xF3calos tradicionales de madera o mdf, pero con las ventajas del PVC. Dise\xF1o compuesto por dos piezas: una base m\xE1s embellecedor, permitiendo una segunda funci\xF3n de cable canal y brindando resistencia a los impactos.",
    img: tecno_zocalos_02_default
  }
];

// app/routes/zocalos.jsx
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function meta12() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - Zocalos"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function Zocalos() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
    categoriasPvc_default,
    {
      children: zocalos.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
        cardpvc_default,
        {
          nombre: prod.nombre,
          info: prod.info,
          img: prod.img
        },
        void 0,
        !1,
        {
          fileName: "app/routes/zocalos.jsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      )),
      categoria: "PVC",
      subcategoria: "Ventanas Corredizas"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/zocalos.jsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
var zocalos_default = Zocalos;

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
var import_react8 = require("@remix-run/react");

// public/imgs/puerta-placa-pino-marco-pino-finger-jo.webp
var puerta_placa_pino_marco_pino_finger_jo_default = "/build/_assets/puerta-placa-pino-marco-pino-finger-jo-UV4T25IT.webp";

// app/routes/_index.jsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_jsx_dev_runtime23.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("section", { className: "w-full h-screen flex items-center justify-center md:justify-end banner-index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col items-center justify-center flex-nowrap md:flex-wrap w-full md:w-1/3 h-1/2 md:h-full bg-slate-900/25 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h1", { className: "uppercase text-xl md:text-3xl font-bold mb-4", children: "\xBFYa conoces la linea PVC?" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "text-md md:text-xl py-5 border-t", children: "Contamos con la tecnolog\xEDa m\xE1s innovadora disponible hoy en d\xEDa para la renovaci\xF3n de ventanas que soluciona tus problemas de climatizaci\xF3n del hogar, ruido y filtraciones." }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
        import_react8.Link,
        {
          to: "/ventanaspvc",
          className: "uppercase p-2 rounded hover:bg-amber-500 bg-slate-500 text-2xl transition-all",
          children: "Ver ventanas"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("section", { className: "flex flex-col min-h-screen items-center justify-center py-10 border-t container mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h2", { className: "text-center uppercase text-xl md:text-2xl lg:text-4xl font-bold text-white my-10 w-full", children: "Ofertas" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex items-center justify-center gap-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "py-5 px-3 bg-white flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("img", { src: puerta_placa_pino_marco_pino_finger_jo_default, alt: "Imagen Puerta roble oferta", className: "w-1/2" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 27,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h3", { className: "text-2xl font-bold border-b border-spacing-2 uppercase py-2", children: "Puerta Placa Pino" }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 28,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "py-2 font-light text-lg text-center", children: "Puerta placa con hoja de pino y marco de pino. Cerradura simple paleta con 1 llave y 2 bocallaves." }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 29,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var index_default = Index;

// app/routes/placa.jsx
var placa_exports = {};
__export(placa_exports, {
  default: () => placa_default,
  meta: () => meta13
});

// public/imgs/PINO-MARC-DE-ALUM-min-800x800.png
var PINO_MARC_DE_ALUM_min_800x800_default = "/build/_assets/PINO-MARC-DE-ALUM-min-800x800-ATJQ4OF2.png";

// public/imgs/CEDRO-MARCO-DE-ALUM-min-800x800.png
var CEDRO_MARCO_DE_ALUM_min_800x800_default = "/build/_assets/CEDRO-MARCO-DE-ALUM-min-800x800-EYG4V5L3.png";

// public/imgs/Copia-de-PRESTIGE-ALUM-2-min-800x800.png
var Copia_de_PRESTIGE_ALUM_2_min_800x800_default = "/build/_assets/Copia-de-PRESTIGE-ALUM-2-min-800x800-M7M7WZQC.png";

// public/imgs/puerta-placa-cedro-insertos-aluminio.webp
var puerta_placa_cedro_insertos_aluminio_default = "/build/_assets/puerta-placa-cedro-insertos-aluminio-MD44IZJM.webp";

// public/imgs/puerta-placa-cedro-marco-cedro.webp
var puerta_placa_cedro_marco_cedro_default = "/build/_assets/puerta-placa-cedro-marco-cedro-J5VTIU7Z.webp";

// public/imgs/puerta-placa-cedro-pantografiado.webp
var puerta_placa_cedro_pantografiado_default = "/build/_assets/puerta-placa-cedro-pantografiado-PPINKKHL.webp";

// public/imgs/puerta-placa-cedro.webp
var puerta_placa_cedro_default = "/build/_assets/puerta-placa-cedro-UNFDGZ3U.webp";

// public/imgs/puerta-placa-masonite.webp
var puerta_placa_masonite_default = "/build/_assets/puerta-placa-masonite-U6QE7QKS.webp";

// public/imgs/puerta-placa-mdf.webp
var puerta_placa_mdf_default = "/build/_assets/puerta-placa-mdf-HEUAYHDG.webp";

// public/imgs/puerta-placa-moldurada-lineal.webp
var puerta_placa_moldurada_lineal_default = "/build/_assets/puerta-placa-moldurada-lineal-SGQU2LVR.webp";

// public/imgs/puerta-placa-moldurada-recta.webp
var puerta_placa_moldurada_recta_default = "/build/_assets/puerta-placa-moldurada-recta-HKN7KXFX.webp";

// public/imgs/puerta-placa-pino-marco-alamo.webp
var puerta_placa_pino_marco_alamo_default = "/build/_assets/puerta-placa-pino-marco-alamo-BT3R6S5L.webp";

// public/imgs/puerta-placa-pino-marco-chapa.webp
var puerta_placa_pino_marco_chapa_default = "/build/_assets/puerta-placa-pino-marco-chapa-R67DCG6Q.webp";

// public/imgs/puerta-placa-1.4-punto.webp
var puerta_placa_1_4_punto_default = "/build/_assets/puerta-placa-1.4-punto-APQ7VV6X.webp";

// app/productos/puertas_placa.js
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
  },
  {
    id: 4,
    nombre: "Puerta Masonite",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: " - ",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_masonite_default
  },
  {
    id: 5,
    nombre: "Puerta Moldurada Recta",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: " - ",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_moldurada_recta_default
  },
  {
    id: 6,
    nombre: "Puerta Moldurada 1.4 Punto",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: " - ",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_1_4_punto_default
  },
  {
    id: 7,
    nombre: "Puerta Moldurada Lineal",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: " - ",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_moldurada_lineal_default
  },
  {
    id: 8,
    nombre: "Puerta Cedro Insertos en aluminio",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: " - ",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_cedro_insertos_aluminio_default
  },
  {
    id: 9,
    nombre: "Puerta Cedro",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: " - ",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_cedro_default
  },
  {
    id: 10,
    nombre: "Puerta Cedro - Marco cedro",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: " - ",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_cedro_marco_cedro_default
  },
  {
    id: 11,
    nombre: "Puerta Cedro Pantografiado",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: "Dos caras de MDF de 6 mm - Cedro pantografiado lineal",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_cedro_pantografiado_default
  },
  {
    id: 12,
    nombre: "Puerta Pino - Marco pino",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: "Terminac\xF3n con moldura pantografiada",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_pino_marco_pino_finger_jo_default
  },
  {
    id: 13,
    nombre: "Puerta Pino - Marco Alamo",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: "Dos caras de terciado de pino 3,2 mm",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_pino_marco_alamo_default
  },
  {
    id: 14,
    nombre: "Puerta Pino - Marco chapa",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: " - ",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_pino_marco_chapa_default
  },
  {
    id: 15,
    nombre: "Puerta MDF",
    categoria: "Puerta placa",
    marco: " - ",
    hoja: "Dos caras de MDF 3,2 mm / 9 mm",
    bisagras: "De acero cincado azul (plateado) de 3 tornillos",
    cerradura: "Comun de interior",
    img: puerta_placa_mdf_default
  }
];

// app/routes/placa.jsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function meta13() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - Placa"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function Placa() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    categorias_default,
    {
      children: placa.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        card_default,
        {
          nombre: puerta.nombre,
          marco: puerta.marco,
          hoja: puerta.hoja,
          bisagras: puerta.bisagras,
          cerradura: puerta.cerradura,
          img: puerta.img
        },
        void 0,
        !1,
        {
          fileName: "app/routes/placa.jsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )),
      categoria: "Puertas placa"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/placa.jsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
}
var placa_default = Placa;

// app/routes/pvc.jsx
var pvc_exports = {};
__export(pvc_exports, {
  default: () => pvc_default,
  meta: () => meta14
});
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function meta14() {
  return [
    {
      charset: "utf-8"
    },
    {
      title: "Aberturas Marquez - PVC"
    },
    {
      name: "description",
      content: "Tienda de aberturas online"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }
  ];
}
function Pvc() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("section", { className: "min-h-screen flex flex-col items-center justify-center bg-categorias", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-col items-center justify-center p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow", children: "PVC" }, void 0, !1, {
      fileName: "app/routes/pvc.jsx",
      lineNumber: 27,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex flex-col lg:grid lg:grid-cols-3 items-center justify-items-center p-10 w-full gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_react9.Link,
        {
          to: "/ventanasPvc",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full",
          children: "Ventanas"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/pvc.jsx",
          lineNumber: 29,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_react9.Link,
        {
          to: "/tecnodeck",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full",
          children: "Tecno Deck"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/pvc.jsx",
          lineNumber: 33,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
        import_react9.Link,
        {
          to: "/zocalos",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full",
          children: "Zocalos"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/pvc.jsx",
          lineNumber: 37,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/pvc.jsx",
      lineNumber: 28,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/pvc.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/pvc.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/pvc.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
var pvc_default = Pvc;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-NDUFXDZR.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-ZRIOWOYL.js", "/build/_shared/chunk-CKVHI6DB.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WTUBPXOG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-S7OKM5NM.js", imports: ["/build/_shared/chunk-6RWAZIAA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/aluminio": { id: "routes/aluminio", parentId: "root", path: "aluminio", index: void 0, caseSensitive: void 0, module: "/build/routes/aluminio-E2ZY227G.js", imports: ["/build/_shared/chunk-IKSKEJW6.js", "/build/_shared/chunk-DA27BJI7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chapasimple": { id: "routes/chapasimple", parentId: "root", path: "chapasimple", index: void 0, caseSensitive: void 0, module: "/build/routes/chapasimple-HBJUTFUA.js", imports: ["/build/_shared/chunk-IKSKEJW6.js", "/build/_shared/chunk-DA27BJI7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/doblechapa": { id: "routes/doblechapa", parentId: "root", path: "doblechapa", index: void 0, caseSensitive: void 0, module: "/build/routes/doblechapa-6JPKA5BK.js", imports: ["/build/_shared/chunk-IKSKEJW6.js", "/build/_shared/chunk-DA27BJI7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-YNCUWGTS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/placa": { id: "routes/placa", parentId: "root", path: "placa", index: void 0, caseSensitive: void 0, module: "/build/routes/placa-RRFIP3SB.js", imports: ["/build/_shared/chunk-6RWAZIAA.js", "/build/_shared/chunk-IKSKEJW6.js", "/build/_shared/chunk-DA27BJI7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/plegadizas": { id: "routes/plegadizas", parentId: "root", path: "plegadizas", index: void 0, caseSensitive: void 0, module: "/build/routes/plegadizas-DGD5IATB.js", imports: ["/build/_shared/chunk-IIMOIDBN.js", "/build/_shared/chunk-DA27BJI7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/puertas": { id: "routes/puertas", parentId: "root", path: "puertas", index: void 0, caseSensitive: void 0, module: "/build/routes/puertas-E3PPWPHX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pvc": { id: "routes/pvc", parentId: "root", path: "pvc", index: void 0, caseSensitive: void 0, module: "/build/routes/pvc-IH2YX4K4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/seguridad": { id: "routes/seguridad", parentId: "root", path: "seguridad", index: void 0, caseSensitive: void 0, module: "/build/routes/seguridad-IZFQHGFT.js", imports: ["/build/_shared/chunk-IKSKEJW6.js", "/build/_shared/chunk-DA27BJI7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tecnodeck": { id: "routes/tecnodeck", parentId: "root", path: "tecnodeck", index: void 0, caseSensitive: void 0, module: "/build/routes/tecnodeck-BXJHSM6Z.js", imports: ["/build/_shared/chunk-AWNHQIUF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ventanas": { id: "routes/ventanas", parentId: "root", path: "ventanas", index: void 0, caseSensitive: void 0, module: "/build/routes/ventanas-IHQHYPCS.js", imports: ["/build/_shared/chunk-IIMOIDBN.js", "/build/_shared/chunk-DA27BJI7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ventanaspvc": { id: "routes/ventanaspvc", parentId: "root", path: "ventanaspvc", index: void 0, caseSensitive: void 0, module: "/build/routes/ventanaspvc-S6PFW4Q6.js", imports: ["/build/_shared/chunk-AWNHQIUF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/zocalos": { id: "routes/zocalos", parentId: "root", path: "zocalos", index: void 0, caseSensitive: void 0, module: "/build/routes/zocalos-FYZHR4UP.js", imports: ["/build/_shared/chunk-AWNHQIUF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "eb42f08b", hmr: { runtime: "/build/_shared\\chunk-CKVHI6DB.js", timestamp: 1693786151611 }, url: "/build/manifest-EB42F08B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/chapasimple": {
    id: "routes/chapasimple",
    parentId: "root",
    path: "chapasimple",
    index: void 0,
    caseSensitive: void 0,
    module: chapasimple_exports
  },
  "routes/ventanaspvc": {
    id: "routes/ventanaspvc",
    parentId: "root",
    path: "ventanaspvc",
    index: void 0,
    caseSensitive: void 0,
    module: ventanaspvc_exports
  },
  "routes/doblechapa": {
    id: "routes/doblechapa",
    parentId: "root",
    path: "doblechapa",
    index: void 0,
    caseSensitive: void 0,
    module: doblechapa_exports
  },
  "routes/plegadizas": {
    id: "routes/plegadizas",
    parentId: "root",
    path: "plegadizas",
    index: void 0,
    caseSensitive: void 0,
    module: plegadizas_exports
  },
  "routes/seguridad": {
    id: "routes/seguridad",
    parentId: "root",
    path: "seguridad",
    index: void 0,
    caseSensitive: void 0,
    module: seguridad_exports
  },
  "routes/tecnodeck": {
    id: "routes/tecnodeck",
    parentId: "root",
    path: "tecnodeck",
    index: void 0,
    caseSensitive: void 0,
    module: tecnodeck_exports
  },
  "routes/aluminio": {
    id: "routes/aluminio",
    parentId: "root",
    path: "aluminio",
    index: void 0,
    caseSensitive: void 0,
    module: aluminio_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/ventanas": {
    id: "routes/ventanas",
    parentId: "root",
    path: "ventanas",
    index: void 0,
    caseSensitive: void 0,
    module: ventanas_exports
  },
  "routes/puertas": {
    id: "routes/puertas",
    parentId: "root",
    path: "puertas",
    index: void 0,
    caseSensitive: void 0,
    module: puertas_exports
  },
  "routes/zocalos": {
    id: "routes/zocalos",
    parentId: "root",
    path: "zocalos",
    index: void 0,
    caseSensitive: void 0,
    module: zocalos_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/placa": {
    id: "routes/placa",
    parentId: "root",
    path: "placa",
    index: void 0,
    caseSensitive: void 0,
    module: placa_exports
  },
  "routes/pvc": {
    id: "routes/pvc",
    parentId: "root",
    path: "pvc",
    index: void 0,
    caseSensitive: void 0,
    module: pvc_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
