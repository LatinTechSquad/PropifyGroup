'use client'
import React from 'react'
import Font from './zona.module.css'


export default function ZonaLayout() {
  return (
    <div className={Font.table}>
      <p className={Font.head}>Ocupación de alquileres por zona</p>
        <table>
          <tr>
            <th></th>
            <th className={Font.title}>Lanús</th>
            <th className={Font.title}>San Martín</th>
            <th className={Font.title}>Olivos</th>
            <th className={Font.title}>Quilmes</th>
          </tr>
          <tr className={Font.tr}>
            <td className={Font.month}>Noviembre</td>
            <td className={Font.count}>600</td>
            <td className={Font.count}>600</td>
            <td className={Font.count}>600</td>
            <td className={Font.count}>600</td>
          </tr>
          <br />
          <tr className={Font.tr}>
            <td className={Font.month}>Diciembre</td>
            <td className={Font.count}>700</td>
            <td className={Font.count}>700</td>
            <td className={Font.count}>700</td>
            <td className={Font.count}>700</td>
          </tr>
          <br />
          <tr className={Font.tr}>
            <td className={Font.month}>Enero</td>
            <td className={Font.count}>600</td>
            <td className={Font.count}>600</td>
            <td className={Font.count}>600</td>
            <td className={Font.count}>600</td>
          </tr>
          <br />
        </table>
      </div>
  )
}
