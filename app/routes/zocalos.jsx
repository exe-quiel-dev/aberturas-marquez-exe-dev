// COMPONENTS
import CategoriasPvc from "../components/categoriasPvc"
import Cardpvc from "../components/cardpvc"

// CONSTANTS
import { zocalos } from "../productos/zocalos"

export function meta() {
  return [
    {
      title: 'Aberturas Marquez - Zocalos PVC',
      description: 'Venta de aberturas'
    }
  ]
}

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