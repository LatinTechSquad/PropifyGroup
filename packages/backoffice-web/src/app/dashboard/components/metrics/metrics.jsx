'use client'
import { Card, Text, Title } from '@tremor/react';

export default function Metrics({titleOut,dataTitle1, data1,dataTitle2, data2,dataTitle3, data3}) {
  return (
    <Card className="mx-auto w-full shadow-lg" decoration="top" decorationColor="indigo">
      <Title className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{titleOut}</Title>
      <div className='grid grid-cols-3 gap-1'>
      <div className='card text-center '>
        <Text className='card-text'>{dataTitle1}</Text>
        <Text>{data1}</Text>
      </div>
      <div className='card text-center '>
        <Text>{dataTitle2}</Text>
        <Text>{data2}</Text>
      </div>
      <div className='card text-center '>
        <Text>{dataTitle3}</Text>
        <Text>{data3}</Text>
      </div>
      </div>
    </Card>
  );
}