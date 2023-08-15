// CONSTANTS
import { chapaSimple } from "../productos/puertas_ch_simple"

// COMPONENTS
import Card from "../components/card"
import Categorias from "../components/categorias"

export function meta() {
  return [
    {
      title: 'Aberturas Marquez - Puertas Chapa Simple',
      description: 'Venta de aberturas'
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