// COMPONENTS
import CategoriasPvc from "../components/categoriasPvc"
import Cardpvc from "../components/cardpvc"

// CONSTANTS
import { zocalos } from "../productos/zocalos"

export function meta() {
  return [
    {
      charset: 'utf-8'
  },
  {
      title: 'Aberturas Marquez - Zocalos'
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