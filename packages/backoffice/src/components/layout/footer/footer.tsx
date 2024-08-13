'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './footer.css'
import 'bootstrap/dist/css/bootstrap.css'
import logo from '@/assets/logoPropify.svg'
import redx from '@/assets/iconoX.png'
import facebook from '@/assets/facebook.png'
import instagram from '@/assets/instagram.png'


export default function Footer() {
    return (
        <>
            <footer className='card container-fluid mt-5'>
                <div className='row d-flex flex-row justify-content-center align-items-strech'>
                <section className='footer-section col-sm-3'>
                    <article className='p-4 h-100'>
                        <picture className=''>
                            <Image className='text-dark w-100 h-100' src={logo} alt='Logo de la inmobiliarias'></Image>
                        </picture>
                    </article>
                </section>

                <section className='footer-section col-sm-4'>
                    <article className='p-4'>
                        <p>En Bonpland, podes hallar una amplia variedad de propiedades e inmuebles en venta o alquiler.<br />Entre las opciones disponibles se encuentran casas, departamentes, terrenos, locales oficinas, quintas PH y cocheras <br />
                            Si estas buscando tu próximo hogar o una inversión, bonpland es el sitio líder en búsqueda de propiedades e inmuebles en Argentina.<br></br>
                        </p>
                        <br>
                        </br>
                        <p>Términos y condiciones: Establecemos las condiciones y normativas para el alquiler temporal con fines turísticos</p>
                        <ol>
                            <li className='text-dark'>Regulación de alquileres Temporarios Turísticos: Definimos las reglas para el alquiler de propiedades con carácter temporario destinados al turismo.</li>
                            <li className='text-dark'>Proyecto Inmobiliario: Presentemos nuestro proyecto inmobiliario.</li>
                            <li className='text-dark'>reserva de derechos: Todos los derechos están reservados.</li>
                        </ol>
                    </article>
                    <article></article>
                </section>

                <section className='footer-section col-sm-4'>
                    <article className='p-4'>
                        <h4>Guia del sitio</h4>
                        <ol>
                            <li className='text-dark'>Emprendimientos</li>
                            <li className='text-dark'>Garantias de Alquileres</li>
                            <li className='text-dark'>Noticias</li>
                            <li className='text-dark'>Publicar</li>
                            <li className='text-dark'>Mi cuenta</li>
                            <li className='text-dark'>Contáctanos</li>
                        </ol>
                    </article>
                    <article className='p-4'>
                        <h4>Contáctanos</h4>
                        <ul>
                            <li className=' text-dark'>Escribinos a:</li>
                            <Link href="jurquiza86@gmail.com">jurquiza86@hotmail.com</Link>
                        </ul>
                    </article>
                    <article className='p-4'>
                        <h4>O seguinos en:</h4>
                        <div>
                            <ul className='d-flex flex-row align-items-center justify-content-center list-unstyled'>
                                <li><Link className='text-dark m-1' href="/"><Image src={facebook} alt='Logo de la red social facebook'></Image></Link></li>
                                <li><Link href="/"><Image className='text-dark m-1' src={instagram} alt='Logo de la red social instagram'></Image></Link></li>
                                <li><Link className=' text-dark m-1' href="/"><Image src={redx} alt='Logo de la red social X'></Image></Link></li>
                            </ul>
                        </div>
                    </article>
                </section>
                </div>
            <h5 className='text-center'>Bonpland 2024 - Todos los derechos reservados -</h5>
            </footer>
        </>
    )
}