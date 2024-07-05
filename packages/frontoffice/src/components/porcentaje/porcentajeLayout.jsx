'use client'
import React from 'react'
import './porce.css'
import Image from 'next/image'
import graph2 from '@/assets/icons/Group24.png'

export default function porcentajeLayout() {
    return (
        <div className="border border-light-subtle shadow-lg p-4 porce">
          <p className="text-center">Porsentaje de ocupación (Nov - Feb)</p>
    
          <div className="porce-body">
    
            <div className='porce-text'>
              <p className='porce-total'>10 k</p>
              <small>Total ocupados</small>
            </div>
    
            <div className='porce-gaph'>
              <Image src={graph2}></Image>
            </div>
    
          </div>
          <div className="porce-stats">
            <small>Última actualización ayer</small>
            <small>Subió 60%</small>
          </div>
    
        </div>
      )
}
