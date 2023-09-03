// COMPONENTS
import Card from "../components/card"
import Categorias from "../components/categorias"

// CONSTANTS
import { chapaDoble } from "../productos/puertas_doble_ch"
import { inyectadas } from "../productos/puertas_inyectadas"

export function meta() {
  return [
    {
      charset: 'utf-8'
    },
    {
      title: 'Aberturas Marquez - Doble Chapa'
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

function Doblechapa() {
  return (
    <section>
      <div>
        <Categorias
          children={inyectadas.map(puerta => (
            <Card
              nombre={puerta.nombre}
              marco={puerta.marco}
              hoja={puerta.hoja}
              bisagras={puerta.bisagras}
              cerradura={puerta.cerradura}
              img={puerta.img}
            />
          ))}
          categoria='Puertas chapa doble inyectadas'
        />
      </div>
      <div>
        <Categorias
          children={chapaDoble.map(puerta => (
            <Card
              nombre={puerta.nombre}
              marco={puerta.marco}
              hoja={puerta.hoja}
              bisagras={puerta.bisagras}
              cerradura={puerta.cerradura}
              img={puerta.img}
            />
          ))}
          categoria='Puertas chapa doble sin inyectar'
        />
      </div>
    </section>
  )
}

export default Doblechapa