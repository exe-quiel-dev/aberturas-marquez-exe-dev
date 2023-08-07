import { Link } from "@remix-run/react"

export function meta() {
  return [
    {
      title: 'Aberturas Marquez - Puertas'
    }
  ]
}

function Puertas() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-categorias">
      <div className="bg-gray-400/50 flex flex-col items-center justify-center p-10">
        <h1 className="uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow">Puertas</h1>
        <div className="grid grid-cols-5 items-center justify-items-center p-10 w-full gap-6">
          <Link
            to='/chapasimple'
            className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          >Chapa Simple</Link>
          <Link
            to='/doblechapa'
            className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          >Chapa Doble</Link>
          <Link
            to='/seguridad'
            className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          >De Seguridad</Link>
          <Link
            to='/placa'
            className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          >Placa</Link>
          <Link
            to='/aluminio'
            className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
          >Aluminio</Link>
        </div>
      </div>
    </section>
  )
}

export default Puertas