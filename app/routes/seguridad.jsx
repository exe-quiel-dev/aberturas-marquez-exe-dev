// COMPONENTS
import Card from "../components/card"
import Categorias from "../components/categorias"

//  Constants
import { seguridad } from "../productos/puertas_seguridad"

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