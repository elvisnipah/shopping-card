import React from 'react'

function Header() {
  return (
    <div className='bg-slate-800 text-white font-montserrat flex justify-between items-center p-5 border-solid border-b-white border-b-2'>
      <p className='text-2xl pl-8'>SHOPPER'S SHOP</p>
      <ol className='list-none flex flex-row gap-5 pr-10'>
        <li>Home</li>
        <li>Shop</li>
      </ol>
    </div>
  )
}

export default Header