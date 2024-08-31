import ContactSection from '@/components/contact-us/contact-section'
import HeroBg from '@/components/hero-slide/hero-bg'
import ProductSection from '@/components/products/products-section'
import ServiceSection from '@/components/services/service-section'
import React from 'react'

function HomePage() {
  return (
    <div className='flex flex-col  bg-gray-100'>
      <HeroBg />
      <ServiceSection />
      <ContactSection />
      <ProductSection />
    </div>
  )
}

export default HomePage
