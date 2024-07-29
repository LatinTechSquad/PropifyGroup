'use client'
import React from 'react'
import Style from './percentage.module.css'
import Image from 'next/image'
import graph2 from '@/assets/icons/Group24.png'

export default function Percentage() {
  return (
    <div className={Style.porce}>
      <p className={Style.title}>Porsentaje de ocupación (Nov - Feb)</p>

      <div className={Style.porceBody}>

        <div className={Style.porceText}>
          <p className={Style.porceTotal}>10 k</p>
          <small>Total ocupados</small>
        </div>

        <div className={Style.porceGaph}>
          <Image src={graph2} alt=''></Image>
        </div>

      </div>
      <div className={Style.porceStats}>
        <small>Última actualización ayer</small>
        <small>Subió 60%</small>
      </div>

    </div>
  )
}
