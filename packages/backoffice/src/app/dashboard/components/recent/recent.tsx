'use client'
import React from 'react'
import Style from './recientes.module.css'
import {Card, List, ListItem} from '@tremor/react'

export default function Recent() {
    const transaction = [
        {
            date:'Fecha',
            hour:'Hora',
            type:'Tipo',
            owner:'Propiedad',
            states:'Estado'
        },
        {
            date:'20/03/2024',
            hour:'8:45',
            type:'in time',
            owner:'Mono',
            states:'Error'
        },
        {
            date:'20/03/2024',
            hour:'9:15',
            type:'A def.',
            owner:'2 amb.',
            states:'in progress'
        },
        {
            date:'20/03/2024',
            hour:'8:45',
            type:'A def.',
            owner:'Casa',
            states:'Fullfiled'
        },
    ]
    return (
        <Card className='h-full' decoration="top" decorationColor="indigo">
            <h6 className="mt-4 text-center">Transacciones recientes</h6>
            <List>
                {transaction.map((item) => (
                    <ListItem className='grid grid-cols-5 gap-5' key={item.date}>
                      <p>{item.date}</p>              
                      <p>{item.hour}</p>              
                      <p>{item.type}</p>              
                      <p>{item.owner}</p>              
                      <p>{item.states}</p>              
                    </ListItem>
                ))}
            </List>            
        </Card>
    )
}
