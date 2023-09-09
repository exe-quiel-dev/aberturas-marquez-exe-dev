// COMPONENTS
import CardPlegadizasNobel from "../components/cardPlegadizasNobel"
import Categorias from "../components/categorias"

// CONSTANTS
import { ventanas } from "../productos/ventanas"

export function meta() {
  return [
    {
      charset: 'utf-8'
    },
    {
      title: 'Aberturas Marquez - Ventanas'
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

function Ventanas() {
  return (
    <Categorias
      children={ventanas.map(ventana => (
        <CardPlegadizasNobel
          nombre={ventana.nombre}
          img={ventana.img}
          caracteristicas={ventana.caracteristicas}
        />
      ))}
      categoria='Ventanas'
    />
  )
}

export default Ventanas