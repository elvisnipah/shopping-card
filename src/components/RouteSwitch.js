import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './Main'
import Shop from './Shop'

function RouteSwitch() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch