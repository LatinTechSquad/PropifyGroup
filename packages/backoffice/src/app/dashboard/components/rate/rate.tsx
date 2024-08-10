'use client';
import React from 'react';
import { Card, DonutChart, Legend, Title } from '@tremor/react'

export default function Rate() {
  const ratio = [
    {
      name:'Deptos',
      sales: 600,
    },
    {
      name: 'Casas',
      sales: 590
    },
    {
      name: 'Duplex',
      sales: 230
    }
  ]

  const valueFormater = (number:number) => 
    `${Intl.NumberFormat('us').format(number).toString()}`;

  return (
    <>
    <Card className='h-full shadow-lg p-4 w-full' decoration='top'>
      <Title className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium'>Taza de conversión de propiedades</Title>
      <div className='flex items.center justify-center space-x-6'>
        <DonutChart 
        data={ratio}
        category='sales'
        index='name'
        valueFormatter={valueFormater}
        colors={['yellow', 'blue', 'gray']}
        className='w-40'/>
        <Legend
        categories={['deptos', 'Casas', 'Duplex']}
        colors={['yellow', 'blue', 'gray']}
        className='max-w-xs'
        />
      </div>
    </Card>
  
    </>
  );
}
