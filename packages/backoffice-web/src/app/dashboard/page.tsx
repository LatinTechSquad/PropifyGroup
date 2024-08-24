'use client'
import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Title
} from '@tremor/react';
import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';


import Dashboard from './components/dashboard/Dashboard';
import  Zone  from './components/zone/zone'
import  Rate  from '@/app/dashboard/components/rate/rate'
import  Percentage  from '@/app/dashboard/components/percentage/percentage';
import  Metrics  from '@/app/dashboard/components/metrics/metrics';
import Comune from '@/app/dashboard/components/commune/commune';
import Chat from '@/app/dashboard/components/chat/chat';
import Payments from '@/app/dashboard/components/payments/payments';
import Recent from '@/app/dashboard/components/recent/recent';
import Footer from '@/components/layout/footer/footer';


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
   <>
    <div className="bg-slate-200 w-full p-6 sm:p-10">
        <Title>Dashboard</Title>

        <TabGroup>
            <TabList defaultValue={0} variant="solid">

                <Tab value={0}>Vista General</Tab>
                <Tab value={1}>Ocupación por zona</Tab>
                <Tab value={2}>Taza de conversión</Tab>
                <Tab value={3}>Ocupación</Tab>
                <Tab value={4}>Metricas</Tab>
                <Tab value={5}>Valores por Comuna</Tab>
                <Tab value={6}>Mensajes</Tab>
                <Tab value={7}>Metodos de pagos</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Card>
                        <Dashboard />
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card>
                        <Zone />
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card>
                        <Rate />
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card>
                        <Percentage />
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card className='grid grid-cols-4 gap-2'>
                       <Metrics titleOut={'Total de Propiedades Listadas'} dataTitle1={'Deptos.'} data1={'50'} dataTitle2={'Casa'} data2={'44'} dataTitle3={'Proyectos'} data3={'10'}/>
                       <Metrics titleOut={'Ingresos Totales'} dataTitle1={'Compras'} data1={'$5,4 Mill'} dataTitle2={'Ventas'} data2={'$17.4 Mill'} dataTitle3={'Alquileres'} data3={'$10.3 Mill'} />
                       <Metrics titleOut={'Total de Transacciones Realizadas'} dataTitle1={'Comprass'} data1={'50'} dataTitle2={'Ventas'} data2={'44'} dataTitle3={'Alquileres'} data3={'10'} />
                       <Metrics titleOut={'Total de Usuarios Activos'} dataTitle1={'Compradores'} data1={'50'} dataTitle2={'Vendedores'} data2={'44'} dataTitle3={'Inmobiliarias'} data3={'10'} />
                    </Card>
                   </TabPanel>
                <TabPanel>
                    <Card>
                        <Comune />
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card>
                        <Chat />
                    </Card>
                </TabPanel>
                <TabPanel>
                    <Card className='flex flex-row gap-2'>
                        <Payments />
                        <Recent />
                    </Card>
                </TabPanel>
            </TabPanels>
        </TabGroup>

    </div>
    <Footer/>
    
    </>
)
}
