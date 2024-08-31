'use client'
import useWindowDimensions from '@/hooks/useWindowDimentions'
import React from 'react'
import ProductSection from './products-section'
import ProductSectionMobile from './product-section-mobile'

function ProductsToOffer() {
  const { isDesktop, isMobile } = useWindowDimensions()

  return isDesktop ? <ProductSection /> : <ProductSectionMobile />
}

export default ProductsToOffer
