

// COMPONENTS
import Nav from '../components/nav'

// ICONS
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineEnvironment } from 'react-icons/ai';

// IMGS
import Logo from '../../public/imgs/logo.png'

function Header() {
  

  return (
    <header className="flex flex-col md:flex-row items-center justify-center bg-black/50 py-5 border-b border-gray-300 sticky top-0 w-full">
        <div className='flex-col items-center justify-center w-44 me-4 container mx-auto'>
            <a href='/'><img src={Logo} alt="Imagen logotipo" className='w-auto hidden md:inline'/></a>
        </div>
        <Nav />
        <div className='w-1/3 text-white flex items-center justify-center'>
           <a href='www.youtube.com' target='_blank'><AiOutlineInstagram className='mx-2 w-4 h-4 hover:text-violet-500 transition-colors hover:cursor-pointer'/></a>
           <a href='www.youtube.com' target='_blank'><AiOutlineWhatsApp className='mx-2 w-4 h-4 hover:text-green-500 transition-colors hover:cursor-pointer'/></a>
           <a href='www.youtube.com' target='_blank'><AiOutlineEnvironment className='mx-2 w-4 h-4 hover:text-red-500 transition-colors hover:cursor-pointer'/></a>
        </div>
    </header>
  )
}

export default Header