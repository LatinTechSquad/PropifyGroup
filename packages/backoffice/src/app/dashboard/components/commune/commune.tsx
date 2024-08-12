
import Image from 'next/image'
import map from '@/assets/icons/mapabsas.png'
import { Card } from '@tremor/react'

export default function Comune() {
    return (
      <Card decoration="top"decorationColor="indigo">
        <p className="text-center mt-4">Valores por comuna (ARS): Alquileres Definitivos</p>
        <div className="d-flex flex-row align-items-center justify-around">
          
          <div className="mt-4">
            <Image src={map} alt="Mapa de las comunas que marca los alquileres definitivos"></Image>
          </div>
          
          <div>
            {/* Contenido dinámico que se carga segun se selecciona la comuna */}
            <p className="text-center">Comuna 1</p>
            {/* Puede ser una tabla o dos listas */}
            <div className='d-flex flex-row align-items-baseline justify-around gap-4'>
              <ul>
                <li>Barrio</li>
                <li>Retiro</li>
                <li>San Telmo</li>
                <li>Constitución</li>
                <li>Puerto Madero</li>
                <li>San Nicolas</li>
                <li>Monserrat</li>
              </ul>
              <ul>
                <li>Precio</li>
                <li>360 K</li>
                <li>330 K</li>
                <li>250 K</li>
                <li>390 K</li>
                <li>290 K</li>
                <li>250 K</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    )
  }
  