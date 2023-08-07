// COMPONENTS
import Categorias from "../components/categorias"
import Card from "../components/card"

// CONSTANTS
import { aluminio } from "../productos/puertas_aluminio"

function Aluminio() {
  return (
    <Categorias
      children={aluminio.map(puerta => (
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

export default Aluminio