'use client';
import React from 'react';
import Image from 'next/image';
import graph from '@/assets/icons/Grafica.png';
import Style from './rate.module.css';

export default function Rate() {
  return (
    <div className={Style.taza}>
      <p className={Style.title}>Taza de conversión de propiedades</p>

      <div className={Style.body}>
        <div>
          <ul className={Style.list}>
            <li className={Style.listItem}>Departamentos</li>
            <li className={Style.listItem}>Casa</li>
            <li className={Style.listItem}>Duplex</li>
          </ul>
        </div>

        <div className='taza-graph'>
          <Image src={graph} alt='' width={100}></Image>
        </div>
      </div>
    </div>
  );
}
