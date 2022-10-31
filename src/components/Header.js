import React from 'react'

function Header() {
  return (
    <div className='bg-slate-800 text-white font-montserrat flex justify-between items-center p-5 border-b-white border-b-[1px]'>
      <p className='text-2xl pl-8 tracking-widest'>SHOPPER'S SHOP</p>
      <ol className='list-none flex flex-row gap-5 pr-10'>
        <li className='hover:text-yellow-300 cursor-pointer'>Home</li>
        <li className='hover:text-yellow-300 cursor-pointer'>Shop</li>
      </ol>
    </div>
  )
}

export default Header