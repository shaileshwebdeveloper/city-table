import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'

export const AllRoutes = () => {



  return (
   
     <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<h1>Login Page</h1>} />
          <Route path='/task/:id' element={<h1>Task Page</h1>} />



     </Routes>




  )
}
