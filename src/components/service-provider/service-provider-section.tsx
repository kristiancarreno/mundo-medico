import React from 'react'
import Service from './service'

function ServiceProviderSection() {
  return (
    <div className='flex flex-col justify-center items-center gap-6 p-6 '>
      <h1 className='text-primary-100 text-[37px] font-extrabold uppercase'>Proveedor de Servicios medicos</h1>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
        <Service src='/hisopla.png' />
        <Service src='/lapradera.webp' />
        <Service src='/cira_opt3.png' />
        <Service src='/cirn.png' />
        <Service src='/cnma.png' />
        <Service src='/cicc.png' />
      </div>
    </div>
  )
}

export default ServiceProviderSection
