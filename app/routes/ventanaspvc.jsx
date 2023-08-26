// COMPONENTS
import Cardpvc from "../components/cardpvc"
import CategoriasPvc from "../components/categoriasPvc"

// CONSTANTS
import { ventanasPvc } from "../productos/ventanas_pvc"

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

function VentanasPvc() {
  return (
    <CategoriasPvc
        children={ventanasPvc.map(ventana => (
          <Cardpvc
            nombre={ventana.nombre}
            info={ventana.info}
            img={ventana.img}
          />
        ))}
        categoria='PVC'
        subcategoria='Ventanas Corredizas'
      />
  )
}

export default VentanasPvc