'use client'
import useWindowDimensions from '@/hooks/useWindowDimentions'
import React from 'react'
import ProductSection from './products-section'
import ProductSectionMobile from './product-section-mobile'

function ProductsToOffer() {
  return (
    <div>
      <div className='hidden lg:block'>
        <ProductSection />
      </div>
      <div className='lg:hidden'>
        <ProductSectionMobile />
      </div>
    </div>
  )
}

export default ProductsToOffer
