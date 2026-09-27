import React, { useEffect } from 'react'
import { fetchProducts } from '../services/products'

const ProductContainer = () => {
    useEffect(()=>{
        fetchProducts();
    },[])
  return (
    <div>
        ProductContainer
    </div>
  )
}

export default ProductContainer