import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import AddDetails from './Pages/AddDetails'
import EditDel from './Pages/EditDel'
import Display from './Pages/Display'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddDetails />} />
          <Route path='/display' element={<Display />} />
          <Route path='/editdelete' element={<EditDel />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
