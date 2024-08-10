'use client'
import { Card, Text, Title } from '@tremor/react';

export function Metrics({titleOut,dataTitle1, data1,dataTitle2, data2,dataTitle3, data3}) {
  
  return (
    <Card className="mx-auto w-full shadow-lg" decoration="top" decorationColor="indigo">
      <Title className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{titleOut}</Title>
      <div className='flex flex-row aling-center justify-around gap-1'>
      <div className='card text-center w-40'>
        <Title>{dataTitle1}</Title>
        <Text>{data1}</Text>
      </div>
      <div className='card text-center w-40'>
        <Title>{dataTitle2}</Title>
        <Text>{data2}</Text>
      </div>
      <div className='card text-center w-40'>
        <Title>{dataTitle3}</Title>
        <Text>{data3}</Text>
      </div>
      </div>
    </Card>
  );
}