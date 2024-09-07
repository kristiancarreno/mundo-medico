import ContactSection from '@/components/contact-us/contact-section'
import ProductsToOffer from '@/components/products/products-to-offer'
import ServiceSection from '@/components/services/service-section'
import React from 'react'

function HomePage() {
  return (
    <div className='flex flex-col  bg-gray-100'>
      <ServiceSection />
      <ProductsToOffer />
      <ContactSection />
    </div>
  )
}

export default HomePage
