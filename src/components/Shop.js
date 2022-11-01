import React from 'react'
import Card from './Card'

function Shop(props) {
  
  const data = props.data
  const shopData = data.map(item => {
    return (
      <Card 
        src={item.src}
        price={item.price}
        name={item.name}
        key={item.id}
        id={item.id}
        addToCart={props.addToCart}
      />
    )
  })
  return (
    <div className='flex flex-row justify-center items-center gap-10 flex-wrap'>
      {shopData}
    </div>
  )
}

export default Shop