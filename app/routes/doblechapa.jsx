// COMPONENTS
import Card from "../components/card"
import Categorias from "../components/categorias"

// CONSTANTS
import { chapaDoble } from "../productos/puertas_doble_ch"

export function meta() {
  return [
    {
      title: 'Aberturas Marquez - Puertas Chapa Doble',
      description: 'Venta de aberturas'
    }
  ]
}

function Doblechapa() {
  return (
    <Categorias
      children={chapaDoble.map(puerta => (
        <Card
          nombre={puerta.nombre}
          marco={puerta.marco}
          hoja={puerta.hoja}
          bisagras={puerta.bisagras}
          cerradura={puerta.cerradura}
          img={puerta.img}
        />
      ))}
      categoria='Puertas chapa doble'
    />
  )
}

export default Doblechapa