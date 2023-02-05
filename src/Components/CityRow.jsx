import React from 'react'
import { Link } from 'react-router-dom'

export const CityRow = ({city, population, country, id}) => {
  return (
  
    <tr>
    <td> <Link to={`/city/${id}`} >{id}</Link>  </td>
    <td>{city}</td>
    <td>{population}</td>
    <td>{country}</td>
    </tr>

  )
}
