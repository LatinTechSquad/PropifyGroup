// ZonaLayout.js
import React from 'react';
import { Card, Title, List, ListItem } from '@tremor/react';

export default function Zone() {
  const data = [
    {
      month:'   ',
      col2:'Lanús',
      col3:'San Martín',
      col4:'Olivos',
      col5: 'Quilmes'
    },
    {
      month:'Noviembre',
      col2:600,
      col3:600,
      col4:600,
      col5:600,
    },
    {
      month:'Diciembre',
      col2:700,
      col3:700,
      col4:700,
      col5:700,
    },
    {
      month:'Enero',
      col2:600,
      col3:600,
      col4:600,
      col5:600,
    }

  ]
  return (
    <>
    <Card className= 'Card'>
      <Title>Ocupación de alquileres por zona</Title>
      <List>
          {data.map((item) => (
            <ListItem className='grid grid-cols-5 gap-5' key = {item.month}>
              <span className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium mx-1'>{item.month}</span>
              <span className='mx-1'>{item.col2}</span>
              <span className='mx-1'>{item.col3}</span>
              <span className='mx-1'>{item.col4}</span>
              <span className='mx-1'>{item.col5}</span>
            </ListItem>
          ))}
      </List>
    </Card>
    </>
  );
}
