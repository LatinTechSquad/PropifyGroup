'use client'
import { Card } from '@tremor/react'; 
import  Zone  from '@/app/dashboard/components/zone/zone'
import  Rate  from '@/app/dashboard/components/rate/Rate'
import  Percentage  from '@/app/dashboard/components/percentage/percentage';
import  Metrics  from '@/app/dashboard/components/metrics/metrics';
import Commune from '@/app/dashboard/components/commune/commune';
import Chat from '@/app/dashboard/components/chat/chat';
import Payments from '@/app/dashboard/components/payments/payments';
import Recent from '@/app/dashboard/components/recent/recent';

export default function Dashboard() {
    return (
        <>
          <div className='d-flex flex-row align-items-center w-100'>
            <section className='container-fluid'>
              <h2 className='h2'>Dashboard</h2>
              <article className='row stats'>
                <div className='col-6 p-1'>
                  <Zone />
                </div>
    
                <div className='col-3 p-1'>
                  <Rate />
                </div>
    
                <div className='col-3 p-1'>
                  <Percentage />
                </div>
              </article>
    
              <article className='row'>
                <Card className='grid grid-cols-4 gap-2'>
                <Metrics titleOut={'Total de Propiedades Listadas'} dataTitle1={'Deptos.'} data1={'50'} dataTitle2={'Casa'} data2={'44'} dataTitle3={'Proyectos'} data3={'10'} />
                <Metrics titleOut={'Ingresos Totales'} dataTitle1={'Compras'} data1={'$5,4 Mill'} dataTitle2={'Ventas'} data2={'$17.4 Mill'} dataTitle3={'Alquileres'} data3={'$10.3 Mill'} />
                <Metrics titleOut={'Total de Transacciones Realizadas'} dataTitle1={'Compras'} data1={'50'} dataTitle2={'Ventas'} data2={'44'} dataTitle3={'Alquileres'} data3={'10'} />
                <Metrics titleOut={'Total de Usuarios Activos'} dataTitle1={'Comprador'} data1={'50'} dataTitle2={'Vendedor'} data2={'44'} dataTitle3={'Inmobiliarias'} data3={'10'} />
                </Card>
              </article>
              
    
              <article className='row d-flex flex-row align-items-stretch'>
              <div className='col-6 p-1'>
                <Commune />
              </div>
              <div className='col-3 p-1'>
                <Chat />
              </div>
              <div className="col-3 gap-2 flex flex-col align-stretch justify-stretch">
                <Payments />
                <Recent />
              </div>
            </article>
            </section>
          </div>
        </>
      );
}