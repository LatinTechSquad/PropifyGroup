'use client'
import React from 'react'
import Style from './recientes.module.css'
import {Card, List, ListItem} from '@tremor/react'

export default function Recent() {
    return (
        <Card className='h-full' decoration="top" decorationColor="indigo">
            <h6 className="mt-4 text-center">Transacciones recientes</h6>
            <List>
                <ListItem>
                    <span>Fecha</span>
                    <span>Hora</span>
                    <span>Tipo</span>
                    <span>Propiedad</span>
                    <span>Estado</span>
                </ListItem>
                <ListItem>
                    <span>20/03/2024</span>
                    <span>8:45</span>
                    <span>A tie.</span>
                    <span>Mono.</span>
                    <span className={Style.textDanger}>Error</span>
                </ListItem>
                <ListItem>
                    <span>20/03/2024</span>
                    <span>9:15</span>
                    <span>A def.</span>
                    <span>2 amb.</span>
                    <span className={Style.textWarning}>En proceso</span>
                </ListItem>
                <ListItem>
                    <span>20/03/2024</span>
                    <span>8:45</span>
                    <span>A def.</span>
                    <span>Casa</span>
                    <span className={Style.textCorrect}>Finalizada</span>
                </ListItem>
            </List>            
        </Card>
    )
}
