import React, { ReactNode } from 'react'
import ServiceCard from './service-card'

interface ProgramasMedicosProps {
  title: string
  description: string
  icon: ReactNode
}

const Service: React.FC<ProgramasMedicosProps> = ({ title, description, icon }) => {
  return (
    <section className='flex flex-col pb-6 text-center text-black rounded-none max-w-[294px]'>
      <div className='flex flex-col pt-2.5 w-full bg-teal-500 rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
        <ServiceCard title={title} description={description} icon={icon} />
      </div>
    </section>
  )
}

export default Service
