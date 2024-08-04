'use client';
import Image from 'next/image';
import logo from '@/assets/logo.svg';
import { FaFacebook, FaInstagram, FaX } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='w-full bg-light-color text-black py-8'>
      <div className='container mx-auto grid grid-cols-12 gap-4'>
        <div className='col-span-2 flex items-center justify-center'>
          <Image src={logo} width={90} height={90} alt='logo' />
        </div>

        <div className='col-span-5 flex items-center justify-center'>
          <p className='text-left leading-6'>
            En PropifyGroup, podés hallar una amplia variedad de propiedades e inmuebles en venta y alquiler. Entre las
            opciones disponibles se encuentran casas, departamentos, terrenos, locales, oficinas, quintas, PH y
            cocheras. Si estás buscando tu próximo hogar o una inversión, Bonpland es el sitio líder en búsqueda de
            propiedades e inmuebles en Argentina.  ¡Explorá y encontrá el lugar perfecto para vos! . <br />
            Términos y Condiciones : Establecemos las condiciones y normativas para el alquiler temporal con fines
            turísticos. Regulación de Alquileres Temporarios Turísticos: Definimos las reglas para el alquiler de
            propiedades con carácter temporario destinadas al turismo. Proyecto Inmobiliario 5: Presentamos nuestro
            quinto proyecto inmobiliario. Reserva de Derechos: Todos los derechos están reservados.
          </p>
        </div>

        <div className='col-span-5 flex flex-col items-center justify-center space-y-4 text-left'>
          <p>Guia del sitio</p>
          <ul className='space-y-2'>
            <li>
              <a href='#link1' className='hover:none'>
                1. Emprendimientos
              </a>
            </li>
            <li>
              <a href='#link2' className='hover:underline'>
                2. Garantias de Alquiler
              </a>
            </li>
            <li>
              <a href='#link3' className='hover:underline'>
                3. Notificaciones
              </a>
            </li>
            <li>
              <a href='#link4' className='hover:underline'>
                4. Publicar
              </a>
            </li>
            <li>
              <a href='#link4' className='hover:underline'>
                5. Mi cuenta
              </a>
            </li>
          </ul>
          <div className='flex space-x-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='h-6 w-6' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='h-6 w-6' />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaX className='h-6 w-6' />
            </a>
          </div>
        </div>
      </div>
      <div className='container mx-auto text-center mt-4'>
        <p>© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
