// CONSTANTS
import { plegadizas } from "../productos/puertas_plegadizas"

// COMPONENTS
import Card from "../components/card"
import Categorias from "../components/categorias"

const Plegadizas = () => {
  return (
    <Categorias
      children={plegadizas.map(puerta => (
        <Card
          nombre={puerta.nombre}
          marco={puerta.marco}
          hoja={puerta.hoja}
          bisagras={puerta.bisagras}
          cerradura={puerta.cerradura}
          img={puerta.img}
        />
      ))}
      categoria='Puertas plegadizas'
    />
  )
}

export default Plegadizas