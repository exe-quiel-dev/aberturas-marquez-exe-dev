// CONSTANTS
import { chapaSimple } from "../productos/puertas_ch_simple"

// COMPONENTS
import Card from "../components/card"

function Chapasimple() {
  return (
    <section className="min-h-screen bg-ch-simple py-10 border-b border-gray-300">
      <h1 className="uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow">Puertas chapa simple</h1>
      <div className="flex flex-col flex-wrap lg:flex-row items-center justify-center gap-6 container mx-auto min-h-screen bg-gray-100/75 py-10">
        { chapaSimple.map(puerta => (
          <Card 
            nombre={puerta.nombre}
            marco={puerta.marco}
            hoja={puerta.hoja}
            bisagras={puerta.bisagras}
            cerradura={puerta.cerradura}
            img={puerta.img}
          />
        ))}
      </div>
    </section>
  )
}

export default Chapasimple