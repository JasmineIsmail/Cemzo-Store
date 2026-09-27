import React from 'react'

const ProductCard = ({info}) => {
  return (
    <div>
        <img 
            src={info.thumbnail}
            className='h-28 w-20 m-2' alt={info.title}></img>
        <h3 className='font-bold'>{info.title}</h3>
        <h4>{info.price}</h4>
         <h4>{info.rating}</h4>
          <h4>{info.category}</h4>
    </div>
  )
}

export default ProductCard;