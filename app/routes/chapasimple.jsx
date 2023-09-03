// CONSTANTS
import { chapaSimple } from "../productos/puertas_ch_simple"

// COMPONENTS
import Card from "../components/card"
import Categorias from "../components/categorias"

export function meta() {
  return [
    {
      charset: 'utf-8'
  },
  {
      title: 'Aberturas Marquez - Chapa Simple'
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

function Chapasimple() {
  return (
    <Categorias
      children={chapaSimple.map(puerta => (
        <Card
          nombre={puerta.nombre}
          marco={puerta.marco}
          hoja={puerta.hoja}
          bisagras={puerta.bisagras}
          cerradura={puerta.cerradura}
          img={puerta.img}
        />
      ))}
      categoria='Puertas chapa simple'
    />
  )
}

export default Chapasimple