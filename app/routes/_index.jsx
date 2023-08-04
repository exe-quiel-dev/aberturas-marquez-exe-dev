import { Link } from '@remix-run/react'

import oferta1 from '../../public/imgs/Puerta-Roble-578x1030.jpg'
import oferta2 from '../../public/imgs/simple-chapa-linea-100.jpg'

function Index() {
  return (
    <>
      <section className='w-full h-screen flex items-center justify-center md:justify-end banner-index'>
        <div className="flex flex-col items-center justify-center flex-nowrap md:flex-wrap w-full md:w-1/3 h-1/2 md:h-full bg-black/50 p-4 text-white">
          <h1 className="uppercase text-xl md:text-3xl font-bold mb-4">¿Queres cambiar tu ventana?</h1>
          <p className="text-md md:text-xl py-5 border-t">Contamos con la tecnología más innovadora disponible hoy en día para la renovación de ventanas que soluciona tus problemas de climatización del hogar, ruido, filtraciones y seguridad.</p>
          <Link 
           to='/ventanas'
           className='uppercase p-2 rounded hover:bg-amber-500 bg-gray-500 text-2xl transition-all' 
          >Ver ventanas</Link>
        </div>
      </section>
      <section className="flex flex-col min-h-screen items-center justify-center py-10 border-t container mx-auto bg-gray-400">
        <h2 className="text-center uppercase text-xl md:text-2xl lg:text-4xl font-bold text-white my-10 w-full">Ofertas</h2>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-start-2 col-end-11 lg:col-start-2 lg:col-end-6 shadow-md rounded-lg'>
            <div className='py-5 px-3 bg-white flex flex-col items-center rounded-lg'>
              <img src={oferta1} alt="Imagen Puerta roble oferta" className='w-full' />
              <h3 className='text-2xl font-bold border-b border-spacing-2 uppercase py-2'>Puerta roble</h3>
              <p className='py-2 font-light text-lg text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem itaque est hic iste amet. Dignissimos inventore iste, ipsa enim adipisci doloremque, nihil, et odit labore rem minima debitis? Voluptates, debitis.</p>
            </div>
          </div>
          <div className='col-start-2 col-end-11 lg:col-start-8 lg:col-end-12 shadow-md rounded-lg'>
            <div className='py-5 px-3 bg-white flex flex-col items-center rounded-lg'>
              <img src={oferta2} alt="Imagen Puerta roble oferta" className='w-full' />
              <h3 className='text-2xl font-bold border-b border-spacing-2 uppercase py-2'>Puerta chapa simple linea 100</h3>
              <p className='py-2 font-light text-lg text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem itaque est hic iste amet. Dignissimos inventore iste, ipsa enim adipisci doloremque, nihil, et odit labore rem minima debitis? Voluptates, debitis.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index