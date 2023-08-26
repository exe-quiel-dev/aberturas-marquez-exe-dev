// COMPONENTS
import Card from "../components/card"
import Categorias from "../components/categorias"

// CONSTANTS
import { placa } from "../productos/puertas_placa"

export function meta() {
  return [
    {
      charset: 'utf-8'
  },
  {
      title: 'Aberturas Marquez'
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

function Placa() {
  return (
    <Categorias
      children={placa.map(puerta => (
        <Card
          nombre={puerta.nombre}
          marco={puerta.marco}
          hoja={puerta.hoja}
          bisagras={puerta.bisagras}
          cerradura={puerta.cerradura}
          img={puerta.img}
        />
      ))}
    categoria='Puertas placa'
    />
  )
}

export default Placa