import React from 'react'
import cart from "../images/cart.png"

function Cart(props) {
  const cartData = props.count
  let count = 0
  for (let i = 0; i < cartData.length; i++) {
    count += cartData[i].quantity
  }
  return (
    <div className='px-3 flex bg-gray-500 justify-center items-center rounded-xl mr-2'>
      <img src={cart} alt="" className='h-5'/>
      {count}
    </div>
  )
}

export default Cart