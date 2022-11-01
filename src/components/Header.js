import React from 'react'
import Cart from './Cart'

function Header(props) {
  return (
    <div className='bg-slate-800 text-white font-montserrat flex justify-between items-center p-5 border-b-white border-b-[1px]'>
      <p className='text-2xl pl-8 tracking-widest'>SHOPPER'S SHOP</p>
      <div className='flex'>
        <Cart 
          count={props.cartInfo}
          logCart={props.logCart}
        />
        <ol className='list-none flex flex-row gap-5 pr-10'>
          <li className='hover:text-yellow-300 cursor-pointer'><a href="/">Home</a></li>
          <li className='hover:text-yellow-300 cursor-pointer'><a href="/shop">Shop</a></li>
        </ol>
      </div>
    </div>
  )
}

export default Header