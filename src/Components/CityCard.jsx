import React from 'react'

export const CityCard = ({city, population, country, id}) => {
  return (
    <tr>
    <td>{id}</td>
    <td>{city}</td>
    <td>{population}</td>
    <td>{country}</td>
  </tr>

  )
}
