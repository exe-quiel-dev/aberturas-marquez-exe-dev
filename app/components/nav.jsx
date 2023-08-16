import { Link, useLocation } from '@remix-run/react'

function Nav() {
    const location = useLocation()

    return (
        <>
            <nav className='w-full text-white flex justify-between items-center text-lg font-light py-5 md:py-0 px-4 flex-wrap gap-4'>
                <Link
                    to='/'
                    className={location.pathname === '/' ? 'bg-amber-500 rounded p-1 text-black font-semibold' : 'hover:text-gray-300 transition-colors hover:cursor-pointer'}
                >Inicio</Link>
                <Link
                    to='/nosotros'
                    className={location.pathname === '/nosotros' ? 'bg-amber-500 rounded p-1 text-black font-semibold' : 'hover:text-gray-300 transition-colors hover:cursor-pointer'}
                >Quienes somos</Link>
                <Link
                    to='/puertas'
                    className={location.pathname === '/puertas' ? 'bg-amber-500 rounded p-1 text-black font-semibold' : 'hover:text-gray-300 transition-colors hover:cursor-pointer'}
                >Puertas</Link>
                <Link
                    to='/ventanas'
                    className={location.pathname === '/ventanas' ? 'bg-amber-500 rounded p-1 text-black font-semibold' : 'hover:text-gray-300 transition-colors hover:cursor-pointer'}
                >Ventanas</Link>
                <Link
                    to='/pvc'
                    className={location.pathname === '/pvc' ? 'bg-amber-500 rounded p-1 text-black font-semibold' : 'hover:text-gray-300 transition-colors hover:cursor-pointer'}
                >Linea pvc</Link>
            </nav>
        </>
    )
}

export default Nav