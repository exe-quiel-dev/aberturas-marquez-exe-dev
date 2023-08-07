// COMPONENTS
import Card from "../components/card"
import Categorias from "../components/categorias"

// CONSTANTS
import { placa } from "../productos/puertas_placa"

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