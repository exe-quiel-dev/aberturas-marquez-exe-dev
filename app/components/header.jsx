// COMPONENTS
import Nav from '../components/nav'

// ICONS
import { AiOutlineInstagram, AiOutlineEnvironment, AiOutlineFacebook, AiOutlineWhatsApp } from 'react-icons/ai';

// IMGS
import Logo from '../../public/imgs/logo.png'

function Header() {

  return (
    <header className="flex flex-col md:flex-row items-center justify-center bg-slate-900/50 py-2 border-b border-gray-300 sticky top-0 w-full z-10">
      <div className='flex-col items-center justify-center w-44 me-4 container mx-auto'>
        <a href='/'><img src={Logo} alt="Imagen logotipo" className='w-auto hidden md:inline' /></a>
      </div>
      <Nav />
      <div className='w-1/3 text-white flex items-center justify-center'>
        <a href='https://instagram.com/aberturas_marquez?igshid=MzRlODBiNWFlZA==' target='_blank' rel='noreferrer' alt="Logotipo instagram"><AiOutlineInstagram className='mx-2 w-6 h-6 hover:text-violet-500 transition-colors hover:cursor-pointer' /></a>
        <a href='https://wa.me/541168164079' target='_blank' rel='noreferrer' alt="Logotipo whatsapp"><AiOutlineWhatsApp className='mx-2 w-6 h-6 hover:text-green-500 transition-colors hover:cursor-pointer' /></a>
        <a href='https://www.facebook.com/aberturas.marquez.3?mibextid=ZbWKwL' target='_blank' rel='noreferrer' alt="Logotipo facebook"><AiOutlineFacebook className='mx-2 w-6 h-6 hover:text-blue-600 transition-colors hover:cursor-pointer' /></a>
        <a href='/nosotros' target='_blank' alt="Logotipo whatsapp"><AiOutlineEnvironment className='mx-2 w-6 h-6 hover:text-red-500 transition-colors hover:cursor-pointer' /></a>
      </div>
    </header>
  )
}

export default Header