import React from 'react'
import { GraduationCap, Hospital, Stethoscope, Syringe } from 'lucide-react'
import Service from './service'

function ServiceSection() {
  return (
    <div className='flex flex-col lg:flex-row gap-4 items-center justify-center my-8'>
      <Service
        title='Programas Medicos'
        icon={<Stethoscope width={45} height={52} color='white' />}
        description='Conoce sobre los servicios médicos que se ofrecen en Cuba y como acceder a ellos.'
      />
      <Service
        title='Programas Medicos'
        icon={<GraduationCap width={45} height={52} color='white' />}
        description='Conoce sobre los servicios médicos que se ofrecen en Cuba y como acceder a ellos.'
      />
      <Service
        title='Programas Medicos'
        icon={<Syringe width={45} height={52} color='white' />}
        description='Conoce sobre los servicios médicos que se ofrecen en Cuba y como acceder a ellos.'
      />
      <Service
        title='Programas Medicos'
        icon={<Hospital width={45} height={52} color='white' />}
        description='Conoce sobre los servicios médicos que se ofrecen en Cuba y como acceder a ellos.'
      />
    </div>
  )
}

export default ServiceSection
