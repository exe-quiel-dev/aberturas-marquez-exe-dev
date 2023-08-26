// COMPONENTS
import Cardpvc from "../components/cardpvc"
import CategoriasPvc from "../components/categoriasPvc"

// CONSTANTS
import { tecnodeck } from "../productos/tecnodeck"

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