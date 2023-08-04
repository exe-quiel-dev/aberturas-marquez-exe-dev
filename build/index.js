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
var styles_default = "/build/_assets/index-NSZNDCGH.css";

// app/components/nav.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Nav() {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "w-full text-white flex justify-between items-center text-lg font-light py-5 md:py-0 px-4 flex-wrap gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/",
        className: location.pathname === "/" ? "bg-amber-500 rounded p-1" : "hover:text-gray-300 transition-colors hover:cursor-pointer",
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
        className: location.pathname === "/nosotros" ? "bg-amber-500 rounded p-1" : "hover:text-gray-300 transition-colors hover:cursor-pointer",
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
        className: location.pathname === "/puertas" ? "bg-amber-500 rounded p-1" : "hover:text-gray-300 transition-colors hover:cursor-pointer",
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
        className: location.pathname === "/ventanas" ? "bg-amber-500 rounded p-1" : "hover:text-gray-300 transition-colors hover:cursor-pointer",
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
        className: location.pathname === "/pvc" ? "bg-amber-500 rounded p-1" : "hover:text-gray-300 transition-colors hover:cursor-pointer",
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "flex flex-col md:flex-row items-center justify-center bg-black/50 py-5 border-b border-gray-300 sticky top-0 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-col items-center justify-center w-44 me-4 container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: logo_default, alt: "Imagen logotipo", className: "w-auto hidden md:inline" }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 18,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 18,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(nav_default, {}, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-1/3 text-white flex items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "www.youtube.com", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ai.AiOutlineInstagram, { className: "mx-2 w-4 h-4 hover:text-violet-500 transition-colors hover:cursor-pointer" }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 22,
        columnNumber: 54
      }, this) }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 22,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "www.youtube.com", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ai.AiOutlineWhatsApp, { className: "mx-2 w-4 h-4 hover:text-green-500 transition-colors hover:cursor-pointer" }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 23,
        columnNumber: 54
      }, this) }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 23,
        columnNumber: 12
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "www.youtube.com", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ai.AiOutlineEnvironment, { className: "mx-2 w-4 h-4 hover:text-red-500 transition-colors hover:cursor-pointer" }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 24,
        columnNumber: 54
      }, this) }, void 0, !1, {
        fileName: "app/components/header.jsx",
        lineNumber: 24,
        columnNumber: 12
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 16,
    columnNumber: 5
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
      charset: "utf-8",
      title: "Aberturas Marquez",
      description: "Tienda de aberturas online",
      viewport: "width=device-width, initial-scale= 1"
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
    lineNumber: 54,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 64,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { className: "bg-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 69,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 66,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

// app/routes/chapasimple.jsx
var chapasimple_exports = {};
__export(chapasimple_exports, {
  default: () => chapasimple_default
});

// public/imgs/chapa-simple-estampado-econocmico.jpg
var chapa_simple_estampado_econocmico_default = "/build/_assets/chapa-simple-estampado-econocmico-O4EOPGY6.jpg";

// public/imgs/chapa-simple-linea-300.jpg
var chapa_simple_linea_300_default = "/build/_assets/chapa-simple-linea-300-6SGY6CEJ.jpg";

// public/imgs/chapa-simple-linea-800.jpg
var chapa_simple_linea_800_default = "/build/_assets/chapa-simple-linea-800-YPFHON3E.jpg";

// public/imgs/simple-chapa-linea-100.jpg
var simple_chapa_linea_100_default = "/build/_assets/simple-chapa-linea-100-QRY64G2L.jpg";

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

// app/components/card.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), Card = ({ nombre, marco, hoja, bisagras, cerradura, img }) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center justify-center w-4/5 lg:w-1/3 bg-white shadow", children: [
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

// app/routes/chapasimple.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Chapasimple() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "min-h-screen bg-ch-simple py-10 border-b border-gray-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow", children: "Puertas chapa simple" }, void 0, !1, {
      fileName: "app/routes/chapasimple.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col flex-wrap lg:flex-row items-center justify-center gap-6 container mx-auto min-h-screen", children: chapaSimple.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
        lineNumber: 13,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/chapasimple.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/chapasimple.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var chapasimple_default = Chapasimple;

// app/routes/doblechapa.jsx
var doblechapa_exports = {};
__export(doblechapa_exports, {
  default: () => doblechapa_default
});

// public/imgs/linea-100-1.jpg
var linea_100_1_default = "/build/_assets/linea-100-1-LP4RNFJN.jpg";

// public/imgs/linea-100-2.jpg
var linea_100_2_default = "/build/_assets/linea-100-2-IRSOKMCU.jpg";

// public/imgs/linea-100-3.jpg
var linea_100_3_default = "/build/_assets/linea-100-3-PXBMA6LI.jpg";

// public/imgs/chapa-doble-sin-inyectar-1.jpg
var chapa_doble_sin_inyectar_1_default = "/build/_assets/chapa-doble-sin-inyectar-1-AVJTP3Y2.jpg";

// app/productos/puertas_doble_ch.js
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
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Doblechapa() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "min-h-screen bg-ch-simple py-10 border-b border-gray-300", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow", children: "Puertas chapa doble" }, void 0, !1, {
      fileName: "app/routes/doblechapa.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col flex-wrap lg:flex-row items-center justify-center gap-6 container mx-auto min-h-screen", children: chapaDoble.map((puerta) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
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
        lineNumber: 13,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/doblechapa.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/doblechapa.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var doblechapa_default = Doblechapa;

// app/routes/seguridad.jsx
var seguridad_exports = {};
__export(seguridad_exports, {
  default: () => seguridad_default
});
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Seguridad() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: "seguridad" }, void 0, !1, {
    fileName: "app/routes/seguridad.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var seguridad_default = Seguridad;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default,
  meta: () => meta2
});

// public/imgs/map.jpg
var map_default = "/build/_assets/map-JYISOBJE.jpg";

// app/routes/nosotros.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function meta2() {
  return [
    {
      title: "Aberturas Marquez - Sobre Nosotros",
      description: "Venta de aberturas"
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { className: "flex flex-col items-center justify-center px-6 py-20 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " bg-gray-100 p-4 md:p-10 my-5 rounded-lg shadow-md w-full md:w-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-center uppercase text-xl md:text-2xl lg:text-4xl font-bold", children: "Nosotros" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-md md:text-lg font-light py-4", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias ad. Aliquid quod sed perferendis debitis nesciunt necessitatibus, temporibus tempora accusantium eligendi, dolorum facilis reiciendis ex dolore est architecto quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias ad. Aliquid quod sed perferendis debitis nesciunt necessitatibus, temporibus tempora accusantium eligendi, dolorum facilis reiciendis ex dolore est architecto quis!" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " bg-gray-100 p-4 md:p-10 my-5 rounded-lg shadow-md w-full md:w-1/2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h2", { className: "text-center uppercase text-xl md:text-2xl lg:text-4xl font-bold", children: "\xBF Donde nos encontramos ?" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { src: map_default, alt: "Imagen de mapa", className: "w-full my-2" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-lg py-4 font-semibold text-center border-b border-black border-spacing-4", children: "Av. Brig. Gral. Juan Manuel de Rosas 2475, B1655 Jos\xE9 Le\xF3n Su\xE1rez, Provincia de Buenos Aires" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-lg py-4 font-semibold text-center", children: "Horarios de atenci\xF3n: Lunes a Viernes de 9:00 a 12:30 / 15:00 a 19:00 - Sabados de 9:00 a 13:00" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var nosotros_default = Nosotros;

// app/routes/ventanas.jsx
var ventanas_exports = {};
__export(ventanas_exports, {
  default: () => ventanas_default
});
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Ventanas() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: "ventanas" }, void 0, !1, {
    fileName: "app/routes/ventanas.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var ventanas_default = Ventanas;

// app/routes/puertas.jsx
var puertas_exports = {};
__export(puertas_exports, {
  default: () => puertas_default,
  meta: () => meta3
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function meta3() {
  return [
    {
      title: "Aberturas Marquez - Puertas"
    }
  ];
}
function Puertas() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("section", { className: "min-h-screen flex flex-col items-center justify-center bg-ch-simple", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "bg-gray-400/50 flex flex-col items-center justify-center p-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow", children: "Puertas" }, void 0, !1, {
      fileName: "app/routes/puertas.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col md:flex-row items-center justify-center p-10 w-full gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react4.Link,
        {
          to: "/chapasimple",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking-widest",
          children: "Chapa Simple"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/puertas.jsx",
          lineNumber: 17,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react4.Link,
        {
          to: "/doblechapa",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking-widest",
          children: "Chapa Doble"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/puertas.jsx",
          lineNumber: 21,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react4.Link,
        {
          to: "/seguridad",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking-widest",
          children: "De Seguridad"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/puertas.jsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react4.Link,
        {
          to: "/chapasimple",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking-widest",
          children: "Placa"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/puertas.jsx",
          lineNumber: 29,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        import_react4.Link,
        {
          to: "/chapasimple",
          className: "text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking-widest",
          children: "Aluminio"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/puertas.jsx",
          lineNumber: 33,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/puertas.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/puertas.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/puertas.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var puertas_default = Puertas;

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
var import_react5 = require("@remix-run/react");

// public/imgs/Puerta-Roble-578x1030.jpg
var Puerta_Roble_578x1030_default = "/build/_assets/Puerta-Roble-578x1030-P2NOUOLJ.jpg";

// app/routes/_index.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "w-full h-screen flex items-center justify-center md:justify-end banner-index", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex flex-col items-center justify-center flex-nowrap md:flex-wrap w-full md:w-1/3 h-1/2 md:h-full bg-black/50 p-4 text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "uppercase text-xl md:text-3xl font-bold mb-4", children: "\xBFQueres cambiar tu ventana?" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "text-md md:text-xl py-5 border-t", children: "Contamos con la tecnolog\xEDa m\xE1s innovadora disponible hoy en d\xEDa para la renovaci\xF3n de ventanas que soluciona tus problemas de climatizaci\xF3n del hogar, ruido, filtraciones y seguridad." }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_react5.Link,
        {
          to: "/ventanas",
          className: "uppercase p-2 rounded hover:bg-amber-500 bg-gray-500 text-2xl transition-all",
          children: "Ver ventanas"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 13,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "flex flex-col min-h-screen items-center justify-center py-10 border-t container mx-auto bg-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { className: "text-center uppercase text-xl md:text-2xl lg:text-4xl font-bold text-white my-10 w-full", children: "Ofertas" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "grid grid-cols-12 gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-start-2 col-end-11 lg:col-start-2 lg:col-end-6 shadow-md rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "py-5 px-3 bg-white flex flex-col items-center rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: Puerta_Roble_578x1030_default, alt: "Imagen Puerta roble oferta", className: "w-full" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 24,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "text-2xl font-bold border-b border-spacing-2 uppercase py-2", children: "Puerta roble" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 25,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "py-2 font-light text-lg text-center", children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem itaque est hic iste amet. Dignissimos inventore iste, ipsa enim adipisci doloremque, nihil, et odit labore rem minima debitis? Voluptates, debitis." }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 26,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 23,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "col-start-2 col-end-11 lg:col-start-8 lg:col-end-12 shadow-md rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "py-5 px-3 bg-white flex flex-col items-center rounded-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("img", { src: simple_chapa_linea_100_default, alt: "Imagen Puerta roble oferta", className: "w-full" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 31,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "text-2xl font-bold border-b border-spacing-2 uppercase py-2", children: "Puerta chapa simple linea 100" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 32,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { className: "py-2 font-light text-lg text-center", children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem itaque est hic iste amet. Dignissimos inventore iste, ipsa enim adipisci doloremque, nihil, et odit labore rem minima debitis? Voluptates, debitis." }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 33,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var index_default = Index;

// app/routes/pvc.jsx
var pvc_exports = {};
__export(pvc_exports, {
  default: () => pvc_default
});
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Pvc() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: "pvc" }, void 0, !1, {
    fileName: "app/routes/pvc.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}
var pvc_default = Pvc;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-24NVAWIS.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-ZRIOWOYL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-CKVHI6DB.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5UUJYPFM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-EGWHKWTO.js", imports: ["/build/_shared/chunk-4C27JRJE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/chapasimple": { id: "routes/chapasimple", parentId: "root", path: "chapasimple", index: void 0, caseSensitive: void 0, module: "/build/routes/chapasimple-I4YI54FZ.js", imports: ["/build/_shared/chunk-4C27JRJE.js", "/build/_shared/chunk-EJQCBRAT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/doblechapa": { id: "routes/doblechapa", parentId: "root", path: "doblechapa", index: void 0, caseSensitive: void 0, module: "/build/routes/doblechapa-MZ5ZQEN2.js", imports: ["/build/_shared/chunk-EJQCBRAT.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-4GODDI7J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/puertas": { id: "routes/puertas", parentId: "root", path: "puertas", index: void 0, caseSensitive: void 0, module: "/build/routes/puertas-UVLJW5E2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pvc": { id: "routes/pvc", parentId: "root", path: "pvc", index: void 0, caseSensitive: void 0, module: "/build/routes/pvc-NBP3BJN5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/seguridad": { id: "routes/seguridad", parentId: "root", path: "seguridad", index: void 0, caseSensitive: void 0, module: "/build/routes/seguridad-NFSUIXWU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/ventanas": { id: "routes/ventanas", parentId: "root", path: "ventanas", index: void 0, caseSensitive: void 0, module: "/build/routes/ventanas-O2HXLY5I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "548f7b21", hmr: { runtime: "/build/_shared\\chunk-CKVHI6DB.js", timestamp: 1691102561788 }, url: "/build/manifest-548F7B21.js" };

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
  "routes/doblechapa": {
    id: "routes/doblechapa",
    parentId: "root",
    path: "doblechapa",
    index: void 0,
    caseSensitive: void 0,
    module: doblechapa_exports
  },
  "routes/seguridad": {
    id: "routes/seguridad",
    parentId: "root",
    path: "seguridad",
    index: void 0,
    caseSensitive: void 0,
    module: seguridad_exports
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
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
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
