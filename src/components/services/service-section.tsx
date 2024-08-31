import React from 'react'
import { GraduationCap, Hospital, Stethoscope, Syringe } from 'lucide-react'
import Service from './service'
import { ServiceCarousel } from './service-container'

function ServiceSection() {
  return (
    <div className='flex flex-col lg:flex-row gap-4 items-center justify-center my-8'>
      <ServiceCarousel />
    </div>
  )
}

export default ServiceSection
