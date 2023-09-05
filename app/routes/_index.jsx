// COMPONENTS
import { Link } from '@remix-run/react'



// CONSTANTS
import img1 from '../../public/imgs/puerta-placa-pino-marco-pino-finger-jo.webp'

function Index() {
  return (
    <>
      <section className='w-full h-screen flex items-center justify-center md:justify-end banner-index'>
        <div className="flex flex-col items-center justify-center flex-nowrap md:flex-wrap w-full md:w-1/3 h-1/2 md:h-full bg-slate-900/25 p-4 text-white">
          <h1 className="uppercase text-xl md:text-3xl font-bold mb-4">¿Ya conoces la linea PVC?</h1>
          <p className="text-md md:text-xl py-5 border-t">Contamos con la tecnología más innovadora disponible hoy en día para la renovación de ventanas que soluciona tus problemas de climatización del hogar, ruido y filtraciones.</p>
          <Link 
           to='/ventanaspvc'
           className='uppercase p-2 rounded hover:bg-amber-500 bg-slate-500 text-2xl transition-all' 
          >Ver ventanas</Link>
        </div>
      </section>
      <section className="flex flex-col min-h-screen items-center justify-center py-10 border-t container mx-auto">
        <h2 className="text-center uppercase text-xl md:text-2xl lg:text-4xl font-bold text-white my-10 w-full">Ofertas</h2>
        <div className='flex items-center justify-center gap-0'>
          <div className='border'>
            <div className='py-5 px-3 bg-white flex flex-col items-center'>
              <img src={img1} alt="Imagen Puerta roble oferta" className='w-1/2' />
              <h3 className='text-2xl font-bold border-b border-spacing-2 uppercase py-2'>Puerta Placa Pino</h3>
              <p className='py-2 font-light text-lg text-center'>Puerta placa con hoja de pino y marco de pino. Cerradura simple paleta con 1 llave y 2 bocallaves.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index