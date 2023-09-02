// COMPONENTS
import Card from "../components/card"
import Categorias from "../components/categorias"

// CONSTANTS
import { ventanas } from "../productos/ventanas"

function Ventanas() {
  return (
    <Categorias
      children={ventanas.map(ventana => (
        <Card
          nombre={ventana.nombre}
          marco={ventana.marco}
          hoja={ventana.hoja}
          bisagras={ventana.bisagras}
          cerradura={ventana.cerradura}
          img={ventana.img}
        />
      ))}
      categoria='Puertas chapa simple'
    />
  )
}

export default Ventanas