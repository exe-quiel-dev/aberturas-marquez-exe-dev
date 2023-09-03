// CONSTANTS
import { plegadizas } from "../productos/puertas_plegadizas"
import { plegadizasNobel } from "../productos/plegadizas_nobel"

// COMPONENTS
import CardPlegadizas from "../components/cardPlegadizas"
import CardPlegadizasNobel from "../components/cardPlegadizasNobel"
import Categorias from "../components/categorias"

export function meta() {
  return [
    {
      charset: 'utf-8'
    },
    {
      title: 'Aberturas Marquez - Plegadizas'
    },
    {
      name: 'description',
      content: 'Tienda de aberturas online'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    }
  ]
}

const Plegadizas = () => {
  return (
    <>
      <Categorias
        children={plegadizas.map(puerta => (
          <CardPlegadizas
            colores={puerta.colores}
            vidrio={puerta.vidrio}
            img={puerta.img}
          />
        ))}
        categoria='Puertas plegadizas pvc'
      />
      <Categorias
        children={plegadizasNobel.map(puerta => (
          <CardPlegadizasNobel
            img={puerta.img}
            nombre={puerta.nombre}
            caracteristicas={puerta.caracteristicas}
          />
        ))}
        categoria='Puertas plegadizas madera'
      />
    </>

  )
}

export default Plegadizas