
import Image from 'next/image'
import map from '@/assets/icons/mapabsas.png'
import { Card, List, ListItem } from '@tremor/react'

export default function Comune() {

  const comune = [
    {
      neighborhood: 'Barrio',
      price: 'Precio'
    },
    {
      neighborhood: 'Retiro',
      price: '360 K'
    },
    {
      neighborhood: 'San Telmo',
      price: '330 K'
    },
    {
      neighborhood: 'Constitución',
      price: '250 K'
    },
    {
      neighborhood: 'Puerto Madero',
      price: '390 K'
    },
    {
      neighborhood: 'San Nicolas',
      price: '290 K'
    },
    {
      neighborhood: 'Monserrat',
      price: '250 K'
    },

  ] 
    return (
      <Card decoration="top"decorationColor="indigo" className='h-100'>
        <p className="text-center mt-4">Valores por comuna (ARS): Alquileres Definitivos</p>
        <div className="d-flex flex-row align-items-center justify-around">
          
          <div className="mt-4">
            <Image src={map} alt="Mapa de las comunas que marca los alquileres definitivos"></Image>
          </div>
          
          <div>
            {/* Contenido dinámico que se carga segun se selecciona la comuna */}
            <p className="text-center">Comuna 1</p>
            {/* Puede ser una tabla o dos listas */}
            <List>
              {comune.map((item)=>(
                <ListItem className='gap-7' key={item.neighborhood}>
                  <p>{item.neighborhood}</p>
                  <p>{item.price}</p>
                </ListItem>
              ) )

              }
            </List>
          </div>
        </div>
      </Card>
    )
  }
  