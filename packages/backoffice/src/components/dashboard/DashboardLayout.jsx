'use client'
import React from 'react'
import './dashboard.css'
import Metrics from '@/components/metrics/MetricsLayout';
import Chat from '@/components/metrics/MetricsLayout';
import Zona from '@/components/zona/ZonaLayout';
import Taza from '@/components//taza/TazaLayput';
import Porcentaje from '@/components/porcentaje/porcentajeLayout';
import Ingresos from '@/components/Ingresos/IngresosLayout';
import Pagos from '@/components/pagos/PagosLayout';
import Comunas from '@/components/comuna/ComunaLayout';
import Reciente from '@/components/recientes/RecientesLayout';
import Transacciones from '@/components/transacciones/TransaccionesLayout';
import Usuarios from '@/components/usuarios/UsuariosLayout';


export default function DashboardLayout() {
  return (
    <div className=' dashboard'>
        
        <section className="container-fluid">

            <h2>Dashboard</h2>
            <article className="stats row">

                <div className="col-6 p-1">
                    {/* frontend del backoffice */}
                    <Zona></Zona>
                </div>

                <div className="col-3 p-1">
                    {/* Tasa de conversión de propiedades */}
                    <Taza></Taza>
                </div>

                <div className="col-3 p-1">
                    {/* Porcentaje de ocupación */}
                    <Porcentaje></Porcentaje>
                </div>

            </article>


            <article className="metrics row">

                <div className="col-3 p-1">
                    {/* Total de propuedades listadas */}
                    <Metrics></Metrics>
                </div>
                <div className="col-3 p-1">
                    {/* Ingresos totales */}

                    <Ingresos></Ingresos>
                </div>
                <div className="col-3 p-1">
                    {/* Total de transacciones realizadas */}
                    <Transacciones></Transacciones>
                </div>
                <div className="col-3 p-1">
                    {/* Total de Usuarios activos */}
                    <Usuarios></Usuarios>
                </div>


            </article>


            <article className="row pagos">

                <div className="col-6 p-1">
                    {/* Valores por comuna */}
                    <Comunas></Comunas>

                </div>
                <div className="col-3 p-1">
                    {/* Mensaje recientes */}
                    <Chat></Chat>
                </div>
                <div className="col-3 p-1 d-flex flex-column align-items-stretch justify-content-stretch">

                    {/* Metodos de pagos utilizados */}
                    <Pagos></Pagos>
                    {/* Transacciones realizadas */}
                    <Reciente></Reciente>

                </div>


            </article>


        </section>
    </div>

)
}
