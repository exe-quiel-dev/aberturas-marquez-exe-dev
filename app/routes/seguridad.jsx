// COMPONENTS
import Card from "../components/card"
import Categorias from "../components/categorias"

//  Constants
import { seguridad } from "../productos/puertas_seguridad"

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

function Seguridad() {
  return (
    <Categorias
      children={seguridad.map(puerta => (
        <Card
          nombre={puerta.nombre}
          marco={puerta.marco}
          hoja={puerta.hoja}
          bisagras={puerta.bisagras}
          cerradura={puerta.cerradura}
          img={puerta.img}
        />
      ))}
      categoria='Puertas de seguridad'
    />
  )
}

export default Seguridad