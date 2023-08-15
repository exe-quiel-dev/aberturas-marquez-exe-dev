import { Link } from "@remix-run/react"

export function meta() {
  return [
    {
      title: 'Aberturas Marquez - PVC',
      description: 'Venta de aberturas'
    }
  ]
}

function Pvc() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-categorias">
        <div className="flex flex-col items-center justify-center p-10">
          <h1 className="uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow">PVC</h1>
          <div className="grid grid-cols-3 items-center justify-items-center p-10 w-full gap-6">
            <Link
              to='/ventanasPvc'
              className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
            >Ventanas</Link>
            <Link
              to='/tecnodeck'
              className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
            >Tecno Deck</Link>
            <Link
              to='/zocalos'
              className="text-white text-xl bg-black/50 hover:bg-amber-500/75 rounded p-10 transition-all cursor-pointer hover:shadow-lg text-center uppercase tracking- w-full"
            >Zocalos</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pvc