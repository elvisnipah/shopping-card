import React from 'react'
import Card from './Card'

function Shop(props) {
  console.log(props.data)
  const data = props.data
  const shopData = data.map(item => {
    return (
      <Card 
        src={item.src}
        price={item.price}
        name={item.name}
      />
    )
  })
  return (
    <div>
      {shopData}
    </div>
  )
}

export default Shop