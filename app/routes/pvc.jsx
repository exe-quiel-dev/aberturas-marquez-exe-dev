import { Link } from "@remix-run/react"

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

function Pvc() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center bg-categorias">
        <div className="flex flex-col items-center justify-center p-10">
          <h1 className="uppercase text-3xl md:text-4xl font-black mb-4 text-white text-center w-full drop-shadow">PVC</h1>
          <div className="flex flex-col lg:grid lg:grid-cols-3 items-center justify-items-center p-10 w-full gap-6">
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