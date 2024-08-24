// ZonaLayout.js
import React from 'react';
import { Card, List, ListItem, Title } from '@tremor/react';


export default function Zone (){
  const cities = [
    {
      col1: '      ',
      col2: 'Lanús',
      col3: 'San Martín',
      col4: 'Olivos',
      col5: 'Quilmes'
      
    },
    {
      col1: 'Noviembre',
      col2: 600,
      col3: 600,
      col4: 600,
      col5: 600,
    },
    {
      col1: 'Diciembre',
      col2: 700,
      col3: 700,
      col4: 700,
      col5: 700
    },
    {
      col1: 'Enero',
      col2: 600,
      col3: 600,
      col4: 600,
      col5: 600
    },
    
  ];
  return (
    <Card className=" w-full flex flex-col align-baseline shadow-lg h-full"
    decoration="top">
      <Title className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Ocupación de alquileres por zona</Title>
      <List className="mt-2">
        {cities.map((item) => (
          <ListItem className='grid grid-cols-5 gap-5' key={item.col1}>
            <span className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium mx-1'>{item.col1}</span>
            <span className='mx-1'>{item.col2}</span>
            <span className='mx-1'>{item.col3}</span>
            <span className='mx-1'>{item.col4}</span>
            <span className='mx-1'>{item.col5}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );


}