'use client'
import React from 'react'
import './ingresos.css'

export default function IngresosLayput() {
    return (
    
        <div className="ingresos-component card shadow-lg z-3">
            {/* Ingresar una tabla como metrics */}
            <p className="mt-4 text-center">Ingresos Totales</p>
            <div className="ingresos">
            <div className="ingresos-card card">
            <p className='card-title'>Compras</p>
            <p className='card-text fw-bold'>$5.4 mill</p>
            </div>
            <div className="ingresos-card card">
            <p className='card-title' >Ventas</p>
            <p className='card-text fw-bold'>$17.2 mill</p>
            </div>
            <div className="ingresos-card card">
            <p className='card-title'>Alquileres</p>
            <p className='card-text fw-bold'>10.3 mill</p>
            </div>
            </div>
        </div>
        
      )
}
