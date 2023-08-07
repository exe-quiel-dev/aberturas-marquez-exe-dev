// COMPONENTS
import CategoriasPvc from "../components/categoriasPvc"
import Cardpvc from "../components/cardpvc"

// CONSTANTS
import { zocalos } from "../productos/zocalos"

function Zocalos() {
  return (
    <CategoriasPvc
        children={zocalos.map(prod => (
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

export default Zocalos