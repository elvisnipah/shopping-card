import React from 'react'

function Card(props) {
  return (
    <div className=''>
      <img src={props.src} alt="" />
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Card