import React from 'react'

function Card(props) {
  return (
    <div className='flex flex-col items-center w-72 text-white border-2 border-white mt-7 font-montserrat font-semibold'>
      <img className='bg-orange-100 w-full h-60' src={props.src} alt="" />
      <p className='text-xl mt-2'>{props.name}</p>
      <p>${props.price}</p>
      <button 
        className='bg-white text-black p-5 my-4 hover:bg-black hover:text-white'
        onClick={() => props.addToCart(props.name, props.price, props.id)}
      >Add To Cart</button>
    </div>
  )
}

export default Card