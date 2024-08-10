'use client';
import '@tremor/react' 
import './dashboard.css';
import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

import {Metrics} from '@/app/dashboard/components/metrics/metrics';
import Chat from '@/app/dashboard/components/chat/chat';
import Rate from '@/app/dashboard/components/rate/Rate';
import Commune from '@/app/dashboard/components/commune/commune';
import Income from '@/app/dashboard/components/income/income';
import Payments from '@/app/dashboard/components/payments/payments';
import Percentage from '@/app/dashboard/components/percentage/percentage';
import Recent from '@/app/dashboard/components/recent/recent';
import Transactions from './components/transactions/transactions';
import Users from './components/users/users';
import Zone from '@/app/dashboard/components/zone/zone';
import { Card } from '@tremor/react';

export default function Page() {
  const { isAuthenticated, isHydrated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isHydrated && !isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isHydrated, isAuthenticated, router]);

  if (!isHydrated || !isAuthenticated) {
    return null;
  }
  return (
    <div className='dashboard'>
      <section className='container-fluid'>
        <h2 className='h2'>Dashboard</h2>
        <article className='stats row'>
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

        <article className="metrics row">
                <Card className='grid grid-cols-4 gap-2'>
                            <Metrics titleOut={'Total de Propiedades Listadas'}
                            dataTitle1='Deptos.'
                            data1='50'
                            dataTitle2='Casa'
                            data2='44'
                            dataTitle3='Proyectos'
                            data3='10' />
                             <Metrics titleOut={'Ingresos Totales'}
                            dataTitle1='Compras'
                            data1='$5.4 Mill'
                            dataTitle2='Ventas'
                            data2='$ 17.2 Mill'
                            dataTitle3='Alquileres'
                            data3='$10.3 Mill' />
                            <Metrics titleOut={'Total de Transacciones Realizadas'}
                            dataTitle1='Compras'
                            data1='50'
                            dataTitle2='Ventas'
                            data2='44'
                            dataTitle3='Alquileres'
                            data3='10' />
                           <Metrics titleOut={'Total de Usuarios Activos'}
                            dataTitle1='Compradores'
                            data1='50'
                            dataTitle2='Vendedores'
                            data2='44'
                            dataTitle3='Inmobiliaria'
                            data3='10' />
                        </Card>
                </article>

        <article className='row pagos'>
          <div className='col-6 p-1'>
            <Commune />
          </div>
          <div className='col-3 p-1'>
            <Chat />
          </div>
          <div className='col-3 p-1 d-flex flex-column align-items-stretch justify-content-stretch'>
            <Payments />
            <Recent />
          </div>
        </article>
      </section>
    </div>
  );
}
