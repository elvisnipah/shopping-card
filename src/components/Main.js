import React from 'react'
import macbookImage from "../images/macbook-image.png"
import iPhone from "../images/iPhone-14.png"

function Main() {
  return (
    <div className='flex flex-col justify-evenly items-center font-karla'>
      <p className='text-white text-3xl mt-10 mb-10'>Welcome to Shopper's Shop<br /> Home of affordable and dependable gadgets</p>
      <div className="flex flex-row gap-10 flex-wrap items-center justify-center">
        <img src={macbookImage} alt="" className='h-[300px]'/>
        <img src={iPhone} alt="" className='h-[300px]'/>
      </div>
      <a href="/shop"><button className='bg-lime-300 h-10 mt-10 text-xl p-7 text-center flex items-center rounded-lg hover:bg-lime-600 font-semibold'>Shop Now</button></a>
    </div>
    
  )
}

export default Main