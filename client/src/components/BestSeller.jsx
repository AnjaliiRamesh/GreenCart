import React from 'react'
import ProductCart from './ProductCart'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
  const {products} = useAppContext();
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
      <div>
        <ProductCart product={products[0]} />
      </div>
    </div>
  )
}

export default BestSeller
