import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './Main'
import Shop from './Shop'

function RouteSwitch(props) {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<Shop data={props.data} addToCart={props.addToCart}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch