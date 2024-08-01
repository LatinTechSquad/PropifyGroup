// CardProduct.tsx
'use client';

import React, { useState, CSSProperties } from 'react';
import Image, { StaticImageData } from 'next/image';

import locacionSvg from '@/assets/locacion.svg';
import logoAgua from '@/assets/logo-agua.png';
import heartInactivo from '@/assets/heart-inactivo.png';
import heartActivo from '@/assets/heart-activo.png';

import { FaCar, FaBuilding, FaPersonBooth, FaMedium } from 'react-icons/fa';

interface CardProductProps {
  img: StaticImageData;
  price: string;
  description: string;
}

const CardProduct: React.FC<CardProductProps> = ({ img, price, description }) => {
  const [active, setActive] = useState(false);

  // Define estilos base dentro del componente
  const containerStyles: CSSProperties = {
    width: '100%',
    backgroundColor: '#F2EEE7',
    padding: '20px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
  };

  const cardStyles: CSSProperties = {
    padding: '16px',
    textAlign: 'left',
    width: '100%',
  };

  return (
    <div className="flex flex-col items-center relative w-full bg-light-color rounded-lg p-4" style={containerStyles}>
      <div className="relative">
        <Image src={img} alt="Product Image" />
        <span className="absolute top-0 left-0">
          <Image src={logoAgua} width={undefined} height={100} alt="Logo Agua" />
        </span>

        <span className="absolute top-0 right-0 cursor-pointer p-2" onClick={() => setActive(!active)}>
          <Image src={active ? heartActivo : heartInactivo} width={50} height={50} alt="Heart Icon" />
        </span>

        <span className="absolute bottom-0 right-0 cursor-pointer p-1">
          <Image src={locacionSvg} width={50} height={50} alt="Locacion Icon" />
        </span>
      </div>

      <div style={cardStyles}>
        <div className="flex flex-col items-start">
          <h4 className="font-bold text-2xl text-left py-2">{price}</h4>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="flex justify-around gap-5 px-1 py-4">
          <span className="iconCard">
            <FaCar />
          </span>
          <span className="iconCard">
            <FaBuilding />
          </span>
          <span className="iconCard">
            <FaPersonBooth />
          </span>
          <span className="iconCard">
            <FaMedium />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
