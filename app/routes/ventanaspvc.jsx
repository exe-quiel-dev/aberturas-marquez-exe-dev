// COMPONENTS
import Cardpvc from "../components/cardpvc"
import CategoriasPvc from "../components/categoriasPvc"

// CONSTANTS
import { ventanasPvc } from "../productos/ventanas_pvc"

export function meta() {
  return [
    {
      title: 'Aberturas Marquez - Ventanas PVC',
      description: 'Venta de aberturas'
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