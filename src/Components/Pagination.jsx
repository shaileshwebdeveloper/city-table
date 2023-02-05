import React from 'react'

export const Pagination = ({current, onChange}) => {

   const prev = <button disabled={current == 1} onClick={() => onChange(current -1)}>PREV</button>
   const currentPage = <button>{current}</button>
   const next = <button onClick={() => onChange(current + 1)}>NEXT</button>


  return (
    <div>
        {prev}
        {currentPage}
        {next}
    </div>
  )
}
