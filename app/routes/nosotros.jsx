import mapa from '../../public/imgs/map.jpg'

export function meta() {
  return [
    {
      charset: 'utf-8'
  },
  {
      title: 'Aberturas Marquez - Nosotros'
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
        <p className="text-md md:text-lg font-light py-4">En Aberturas Marquez nos ocupamos de asesorar al cliente sobre sus mejores opciones para sus necesidades teniendo en cuenta la relación calidad precio. Priorizamos el plazo de entrega fijado para brindarles un buen servicio a nuestros clientes. Trabajamos con líneas de productos economicas y con líneas premium para que el cliente pueda elegir lo que mas se adapte a sus necesidades y su presupuesto.
        </p>
      </div>
      <div className=" bg-gray-100 p-4 md:p-10 my-5 rounded-lg shadow-md w-full md:w-1/2">
        <h2 className="text-center uppercase text-xl md:text-2xl lg:text-4xl font-bold">¿ Donde nos encontramos ?</h2>
        <img src={mapa} alt="Imagen de mapa" className='w-full my-2'/>
        <p className="text-lg py-4 font-semibold text-center border-b border-black border-spacing-4">Av. Brig. Gral. Juan Manuel de Rosas 2475, B1655 José León Suárez, Provincia de Buenos Aires</p>
        <p className="text-lg py-4 font-semibold text-center border-b border-black">Horarios de atención: Lunes a Viernes de 9:00 a 12:30 / 15:00 a 19:00 - Sabados de 9:00 a 13:00</p>
        <h3 className="text-start uppercase text-lg md:text-xl lg:text-2xl font-bold underline mt-2">Contacto</h3>
        <p className="text-lg py-2 font-semibold text-start">Whatsapp: 11-6816-4079 ( Ezequiel )</p>
        <p className="text-lg py-2 font-semibold text-start">Instagram: @aberturasmarquez</p>
        <p className="text-lg py-2 font-semibold text-start">Facebook: Aberturas Marquez</p>
      </div>
    </main>
  )
}

export default Nosotros