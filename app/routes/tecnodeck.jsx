// COMPONENTS
import Cardpvc from "../components/cardpvc"
import CategoriasPvc from "../components/categoriasPvc"

// CONSTANTS
import { tecnodeck } from "../productos/tecnodeck"

function Tecnodeck() {
  return (
    <CategoriasPvc
        children={tecnodeck.map(prod => (
          <Cardpvc
            nombre={prod.nombre}
            info={prod.info}
            img={prod.img}
          />
        ))}
        categoria='PVC'
        subcategoria='Ventanas Corredizas'
      />
  )
}

export default Tecnodeck