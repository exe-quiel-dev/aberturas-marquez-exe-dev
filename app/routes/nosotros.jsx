import mapa from '../../public/imgs/map.jpg'

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


function Nosotros() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-20 min-h-screen">
      <div className=" bg-gray-100 p-4 md:p-10 my-5 rounded-lg shadow-md w-full md:w-1/2">
        <h1 className="text-center uppercase text-xl md:text-2xl lg:text-4xl font-bold">Nosotros</h1>
        <p className="text-md md:text-lg font-light py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias ad. Aliquid quod sed perferendis debitis nesciunt necessitatibus, temporibus tempora accusantium eligendi, dolorum facilis reiciendis ex dolore est architecto quis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias ad. Aliquid quod sed perferendis debitis nesciunt necessitatibus, temporibus tempora accusantium eligendi, dolorum facilis reiciendis ex dolore est architecto quis!
        </p>
      </div>
      <div className=" bg-gray-100 p-4 md:p-10 my-5 rounded-lg shadow-md w-full md:w-1/2">
        <h2 className="text-center uppercase text-xl md:text-2xl lg:text-4xl font-bold">¿ Donde nos encontramos ?</h2>
        <img src={mapa} alt="Imagen de mapa" className='w-full my-2'/>
        <p className="text-lg py-4 font-semibold text-center border-b border-black border-spacing-4">Av. Brig. Gral. Juan Manuel de Rosas 2475, B1655 José León Suárez, Provincia de Buenos Aires</p>
        <p className="text-lg py-4 font-semibold text-center">Horarios de atención: Lunes a Viernes de 9:00 a 12:30 / 15:00 a 19:00 - Sabados de 9:00 a 13:00</p>
      </div>
    </main>
  )
}

export default Nosotros