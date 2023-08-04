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
    <section className="min-h-screen flex flex-col items-center justify-center bg-ch-simple">
      <div className="bg-gray-400/50 flex flex-col items-center justify-center p-10">
        <h1 className="uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow">Puertas</h1>
        <div className="flex flex-col md:flex-row items-center justify-center p-10 w-full gap-6">
          <Link
            to='/chapasimple'
            className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking-widest"
          >Chapa Simple</Link>
          <Link
            to='/doblechapa'
            className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking-widest"
          >Chapa Doble</Link>
          <Link
            to='/seguridad'
            className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking-widest"
          >De Seguridad</Link>
          <Link
            to='/chapasimple'
            className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking-widest"
          >Placa</Link>
          <Link
            to='/chapasimple'
            className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking-widest"
          >Aluminio</Link>
        </div>
      </div>
    </section>
  )
}

export default Puertas