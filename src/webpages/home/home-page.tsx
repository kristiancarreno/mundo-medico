import ContactSection from '@/components/contact-us/contact-section'
import ProductsToOffer from '@/components/products/products-to-offer'
import ServiceProviderSection from '@/components/service-provider/service-provider-section'
import ServiceSection from '@/components/services/service-section'
import React from 'react'

function HomePage() {
  return (
    <div className='flex flex-col  bg-gray-100'>
      <ServiceSection />
      <ProductsToOffer />
      <div className='snap-always snap-center h-full lg:h-[calc(100vh-63px)] flex flex-col justify-center'>
        <ServiceProviderSection />
        <ContactSection />
      </div>
    </div>
  )
}

export default HomePage
