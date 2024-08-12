'use client'
import { Card, DonutChart, Legend, Title } from '@tremor/react';

const sales = [
  {
    name: 'Departamentos',
    sales: 680,
  },
  {
    name: 'Casas',
    sales: 590,
  },
  {
    name: 'Duplex',
    sales: 230,
  }
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

export default function Rate() {
  return (
    <>
      <Card className='h-full shadow-lg p-4 w-full'
      decoration="top">
      <Title className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Taza de conversión de propiedades</Title>
        <div className="flex items-center justify-center space-x-6">

        <DonutChart
          data={sales}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={['yellow', 'blue', 'gray']}
          className="w-40"
          />
        <Legend
          categories={['Departamentos','Casa','Duplex']}
          colors={['yellow', 'blue', 'gray']}
          className="max-w-xs"
          />
          </div>
      </Card>
    </>
  );
}